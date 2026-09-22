/// <reference types="@cloudflare/workers-types" />
interface Env {
	GEMINI_API_KEY: string;
	STRIPE_SECRET_KEY: string;
	TAROT_PAYMENTS: KVNamespace;
}

interface TarotRequest {
	question: string;
	type: string;
	cards: {
		name: string;
		position: string;
	}[];
	sessionId: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    // Interprétations payantes temporairement désactivées.
    // Aucun appel à Stripe ni à Gemini ne sera effectué.
    return Response.json(
        {
            error: "Les interprétations personnalisées seront bientôt disponibles."
        },
        { status: 503 }
    );
	try {

		const body = await context.request.json() as TarotRequest;

if (!body.sessionId) {
    return Response.json(
        { error: "Paiement requis." },
        { status: 402 }
    );
}

const stripeResponse = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(body.sessionId)}`,
    {
        headers: {
            Authorization: `Bearer ${context.env.STRIPE_SECRET_KEY}`
        }
    }
);

if (!stripeResponse.ok) {
    console.error(
        "Erreur vérification Stripe :",
        stripeResponse.status
    );

    return Response.json(
        { error: "Le paiement n'a pas pu être vérifié." },
        { status: 402 }
    );
}

const stripeSession: any =
    await stripeResponse.json();

if (stripeSession.payment_status !== "paid") {
    return Response.json(
        { error: "Paiement non confirmé." },
        { status: 402 }
    );
}

if (
    stripeSession.mode !== "payment" ||
    stripeSession.amount_total !== 299 ||
    stripeSession.currency !== "eur"
) {
    return Response.json(
        { error: "Le paiement ne correspond pas à cette interprétation." },
        { status: 402 }
    );
}

const lineItemsResponse = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(body.sessionId)}/line_items`,
    {
        headers: {
            Authorization: `Bearer ${context.env.STRIPE_SECRET_KEY}`
        }
    }
);

if (!lineItemsResponse.ok) {
    console.error(
        "Erreur vérification produit Stripe :",
        lineItemsResponse.status
    );

    return Response.json(
        { error: "Le produit payé n'a pas pu être vérifié." },
        { status: 402 }
    );
}

const lineItems: any =
    await lineItemsResponse.json();

const expectedPriceId =
    "price_1UFtCNAm4r57cVHBmoMjw0HV";

const validPrice =
    lineItems.data?.some(
        (item: any) =>
            item.price?.id === expectedPriceId
    );

if (!validPrice) {
    return Response.json(
        { error: "Ce paiement ne correspond pas à cette interprétation." },
        { status: 402 }
    );
}
const paymentKey =
	`stripe:${body.sessionId}`;

const alreadyUsed =
	await context.env.TAROT_PAYMENTS.get(
		paymentKey
	);

if (alreadyUsed) {
	return Response.json(
		{
			error:
				"Ce paiement a déjà été utilisé pour une interprétation."
		},
		{ status: 409 }
	);
}


		const question = body.question?.trim();
		const type = body.type?.trim();
		const cards = body.cards;

		if (!question) {
			return Response.json(
				{ error: "Veuillez poser une question." },
				{ status: 400 }
			);
		}

		if (!cards || !Array.isArray(cards) || cards.length === 0) {
			return Response.json(
				{ error: "Aucune carte n'a été transmise." },
				{ status: 400 }
			);
		}

		if (question.length > 500) {
			return Response.json(
				{ error: "La question est trop longue." },
				{ status: 400 }
			);
		}

		const cardsText = cards
			.map(
				(card) =>
					`${card.position} : ${card.name}`
			)
			.join("\n");

let specificContext = "";

if (type.includes("Amour")) {
	specificContext = `
Ce tirage concerne la vie sentimentale.

Interprète les cartes en tenant particulièrement compte :
- des sentiments et des émotions ;
- de la dynamique entre les personnes ;
- de la communication et des éventuels blocages ;
- de l'évolution possible de la relation.

Ne prétends jamais connaître avec certitude les sentiments ou les intentions d'une autre personne.
Ne présente jamais l'évolution de la relation comme certaine.
`;
}

else if (type.includes("Travail")) {
	specificContext = `
Ce tirage concerne la vie professionnelle.

Interprète les cartes en tenant particulièrement compte :
- de la situation professionnelle actuelle ;
- des opportunités ou changements possibles ;
- des difficultés ou points de vigilance ;
- des actions que l'utilisateur peut envisager.

Ne donne pas de conseil financier, juridique ou professionnel présenté comme une certitude.
Ne garantis jamais une embauche, une promotion, un gain financier ou une réussite.
`;
}

else if (type.includes("1 carte")) {
	specificContext = `
Il s'agit d'un tirage à une seule carte.

Concentre l'interprétation sur le message principal de cette carte
et sur son lien direct avec la question de l'utilisateur.
Évite de répéter plusieurs fois la signification générale de la carte.
`;
}

else {
	specificContext = `
Il s'agit d'un tirage général à trois cartes.

Analyse particulièrement la progression entre le passé,
le présent et l'avenir possible.
Présente l'avenir comme une tendance ou une piste de réflexion,
jamais comme une prédiction certaine.
`;
}

		const prompt = `
Tu es un interprète de tarot pour le site Astres & Numéros.

Tu dois proposer une interprétation bienveillante, nuancée et personnalisée.

Le tarot est utilisé comme outil de réflexion et de divertissement.
Ne présente jamais l'avenir comme certain.
N'annonce jamais de décès, maladie, accident ou catastrophe.
Ne donne pas de conseil médical, juridique ou financier.

Type de tirage :
${type}

Contexte spécifique :
${specificContext}

Question de l'utilisateur :
${question}

Cartes tirées :
${cardsText}

Analyse les cartes en tenant compte :
- de la question de l'utilisateur ;
- de la position de chaque carte ;
- des relations entre les différentes cartes ;
- de l'évolution générale du tirage.

Réponds en français.

N'utilise aucun format Markdown.
N'utilise pas de caractères comme **, *, # ou ###.
Écris uniquement du texte simple.

Structure la réponse avec exactement ces trois titres :

VOTRE TIRAGE

Une interprétation globale claire et personnalisée.

CE QUE LES CARTES METTENT EN LUMIÈRE

Explique les éléments importants du tirage et leurs relations.

CONSEIL DU TAROT

Termine par un conseil concret, prudent et positif.

Sépare chaque partie par une ligne vide.
Ne commence pas par une formule de bienvenue.
Va directement à l'interprétation.

Longueur souhaitée : environ 350 à 500 mots.
`;

		const response = await fetch(
			"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",			{
				method: "POST",

				headers: {
					"Content-Type": "application/json",
					"x-goog-api-key":
						context.env.GEMINI_API_KEY
				},

				body: JSON.stringify({
					contents: [
						{
							role: "user",
							parts: [
								{
									text: prompt
								}
							]
						}
					],

					generationConfig: {
						temperature: 0.8,
						maxOutputTokens: 3000
					}
				})
			}
		);

		if (!response.ok) {

	const geminiError =
		await response.text();

	console.error(
		"Erreur Gemini :",
		response.status,
		geminiError
	);

	return Response.json(
		{
			error:
				"L'interprétation est momentanément indisponible. Veuillez réessayer."
		},
		{ status: 502 }
	);
}

		const data: any =
			await response.json();

		const interpretation =
			data?.candidates?.[0]?.content?.parts
				?.map((part: any) => part.text || "")
				.join("")
				.trim();

		if (!interpretation) {

			return Response.json(
				{
					error:
						"Gemini n'a pas retourné d'interprétation."
				},
				{ status: 502 }
			);
		}

await context.env.TAROT_PAYMENTS.put(
	paymentKey,
	"used"
);

		return Response.json({
			interpretation
		});

	} catch (error) {

		console.error(error);

		return Response.json(
			{
				error:
					"Une erreur est survenue pendant l'interprétation."
			},
			{ status: 500 }
		);
	}
};