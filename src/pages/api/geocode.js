export const prerender = false;

export async function GET({ url }) {
    const city = url.searchParams.get('city')?.trim();

    if (!city) {
        return new Response(
            JSON.stringify({ error: 'Ville manquante' }),
            {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }

    try {
        const params = new URLSearchParams({
            q: city,
            format: 'jsonv2',
            limit: '1'
        });

        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?${params}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'AstresNumeros/1.0 (astresnumeros.fr)'
                }
            }
        );

        if (!response.ok) {
            throw new Error('Erreur du service de géocodage');
        }

        const data = await response.json();

        if (!data.length) {
            return new Response(
                JSON.stringify({ error: 'Ville introuvable' }),
                {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        return new Response(
            JSON.stringify({
                name: data[0].display_name,
                latitude: Number(data[0].lat),
                longitude: Number(data[0].lon)
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error(error);

        return new Response(
            JSON.stringify({ error: 'Impossible de rechercher cette ville' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}