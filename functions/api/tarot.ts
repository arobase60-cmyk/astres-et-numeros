/// <reference types="@cloudflare/workers-types" />
interface Env {
	GEMINI_API_KEY: string;
}

interface TarotRequest {
	question: string;
	type: string;
	cards: {
		name: string;
		position: string;
	}[];
}

export const onRequestPost: PagesFunction<Env> = async (context) => {

	try {

		const body = await context.request.json() as TarotRequest;

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

		const prompt = `
Tu es un interprète de tarot pour le site Astres & Numéros.

Tu dois proposer une interprétation bienveillante, nuancée et personnalisée.

Le tarot est utilisé comme outil de réflexion et de divertissement.
Ne présente jamais l'avenir comme certain.
N'annonce jamais de décès, maladie, accident ou catastrophe.
Ne donne pas de conseil médical, juridique ou financier.

Type de tirage :
${type}

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

Structure la réponse ainsi :

### Votre tirage

Une interprétation globale claire et personnalisée.

### Ce que les cartes mettent en lumière

Explique les relations importantes entre les cartes.

### Conseil du tarot

Termine par un conseil concret, prudent et positif.

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

			console.error(
				"Erreur Gemini :",
				response.status,
				await response.text()
			);

			return Response.json(
				{
					error:
						"L'interprétation est momentanément indisponible."
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