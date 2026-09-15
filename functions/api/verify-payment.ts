interface Env {
	STRIPE_SECRET_KEY: string;
}

export const onRequestGet = async (context: {
	env: Env;
	request: Request;
}) => {

	try {

		const stripeKey =
			context.env.STRIPE_SECRET_KEY;

		if (!stripeKey) {
			return Response.json(
				{
					paid: false,
					error: "Configuration Stripe manquante."
				},
				{ status: 500 }
			);
		}

		const url =
			new URL(context.request.url);

		const sessionId =
			url.searchParams.get("session_id");

		if (
			!sessionId ||
			!sessionId.startsWith("cs_")
		) {
			return Response.json(
				{
					paid: false,
					error: "Session Stripe invalide."
				},
				{ status: 400 }
			);
		}

		const response =
			await fetch(
				`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
				{
					method: "GET",
					headers: {
						Authorization:
							`Bearer ${stripeKey}`
					}
				}
			);

		const session: any =
			await response.json();

		if (!response.ok) {
			return Response.json(
				{
					paid: false,
					error:
						session?.error?.message ||
						"Impossible de vérifier le paiement."
				},
				{ status: 400 }
			);
		}

		const expectedPrice =
			"price_1UFtCNAm4r57cVHBmoMjw0HV";

		if (
			session.payment_status !== "paid"
		) {
			return Response.json({
				paid: false
			});
		}

		// Vérification supplémentaire du contenu
		// réel de la session Stripe.
		const itemsResponse =
			await fetch(
				`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}/line_items?limit=10`,
				{
					headers: {
						Authorization:
							`Bearer ${stripeKey}`
					}
				}
			);

		const items: any =
			await itemsResponse.json();

		if (!itemsResponse.ok) {
			return Response.json(
				{
					paid: false,
					error:
						"Impossible de vérifier le produit acheté."
				},
				{ status: 400 }
			);
		}

		const correctProduct =
			items.data?.some(
				(item: any) =>
					item.price?.id ===
					expectedPrice
			);

		if (!correctProduct) {
			return Response.json(
				{
					paid: false,
					error:
						"Le paiement ne correspond pas à l'interprétation Tarot."
				},
				{ status: 400 }
			);
		}

		return Response.json({
			paid: true,
			sessionId: session.id
		});

	} catch (error) {

		console.error(
			"Stripe verification error:",
			error
		);

		return Response.json(
			{
				paid: false,
				error:
					"Erreur lors de la vérification du paiement."
			},
			{ status: 500 }
		);
	}
};