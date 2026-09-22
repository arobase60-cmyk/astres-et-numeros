interface Env {
	STRIPE_SECRET_KEY: string;
}

export const onRequestPost = async (context: {
	env: Env;
	request: Request;
}) => {
    // Paiements temporairement désactivés.
    // Aucun appel à Stripe ne sera effectué.
    return Response.json(
        {
            error: "Les interprétations personnalisées seront bientôt disponibles."
        },
        { status: 503 }
    );
	try {

		const stripeKey =
			context.env.STRIPE_SECRET_KEY;

		if (!stripeKey) {
			return Response.json(
				{ error: "Configuration Stripe manquante." },
				{ status: 500 }
			);
		}

		/*
		 * Page depuis laquelle le paiement est lancé.
		 */

		let source = "trois-cartes";

		try {
			const body: any =
				await context.request.json();

			if (
				body?.source === "amour" ||
				body?.source === "travail" ||
				body?.source === "trois-cartes"
			) {
				source = body.source;
			}

		} catch {
			// Compatibilité avec l'ancien appel sans body.
		}

		const routes: Record<string, string> = {
			"trois-cartes":
				"/tarot/trois-cartes/",

			"amour":
				"/tarot/amour/",

			"travail":
				"/tarot/travail/"
		};

		const returnPath =
			routes[source] ||
			routes["trois-cartes"];

		const baseUrl =
			"https://astres-et-numeros.pages.dev";

		const priceId =
			"price_1UFtCNAm4r57cVHBmoMjw0HV";

		const formData =
			new URLSearchParams();

		formData.append(
			"mode",
			"payment"
		);

		formData.append(
			"line_items[0][price]",
			priceId
		);

		formData.append(
			"line_items[0][quantity]",
			"1"
		);

		formData.append(
			"success_url",
			`${baseUrl}${returnPath}?payment=success&session_id={CHECKOUT_SESSION_ID}`
		);

		formData.append(
			"cancel_url",
			`${baseUrl}${returnPath}?payment=cancel`
		);

		const response =
			await fetch(
				"https://api.stripe.com/v1/checkout/sessions",
				{
					method: "POST",

					headers: {
						"Authorization":
							`Bearer ${stripeKey}`,

						"Content-Type":
							"application/x-www-form-urlencoded"
					},

					body:
						formData.toString()
				}
			);

		const data: any =
			await response.json();

		if (!response.ok) {

			console.error(
				"Stripe error:",
				data
			);

			return Response.json(
				{
					error:
						data?.error?.message ||
						"Impossible de créer le paiement."
				},
				{ status: 500 }
			);
		}

		return Response.json({
			url: data.url
		});

	} catch (error) {

		console.error(
			"Checkout error:",
			error
		);

		return Response.json(
			{
				error:
					"Une erreur est survenue lors de la création du paiement."
			},
			{ status: 500 }
		);
	}
};