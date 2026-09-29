import * as Astronomy from 'astronomy-engine';
import tzlookup from 'tz-lookup';
import { DateTime } from 'luxon';
// ==========================================
// THÈME ASTRAL
// Calculs astrologiques de naissance
// ==========================================

export const ZODIAC_SIGNS = [
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons"
];

export function longitudeToSign(longitude) {
    const normalized = ((longitude % 360) + 360) % 360;
    const index = Math.floor(normalized / 30);

    return {
        sign: ZODIAC_SIGNS[index],
        degree: normalized % 30
    };
}
export function getSunSign(dateString) {
    if (!dateString) return null;

    const [, month, day] = dateString.split("-").map(Number);

    const signs = [
        { sign: "Capricorne", from: [12, 22], to: [1, 19] },
        { sign: "Verseau", from: [1, 20], to: [2, 18] },
        { sign: "Poissons", from: [2, 19], to: [3, 20] },
        { sign: "Bélier", from: [3, 21], to: [4, 19] },
        { sign: "Taureau", from: [4, 20], to: [5, 20] },
        { sign: "Gémeaux", from: [5, 21], to: [6, 20] },
        { sign: "Cancer", from: [6, 21], to: [7, 22] },
        { sign: "Lion", from: [7, 23], to: [8, 22] },
        { sign: "Vierge", from: [8, 23], to: [9, 22] },
        { sign: "Balance", from: [9, 23], to: [10, 22] },
        { sign: "Scorpion", from: [10, 23], to: [11, 21] },
        { sign: "Sagittaire", from: [11, 22], to: [12, 21] }
    ];

    for (const item of signs) {
        const [fromMonth, fromDay] = item.from;
        const [toMonth, toDay] = item.to;

        if (
            (month === fromMonth && day >= fromDay) ||
            (month === toMonth && day <= toDay)
        ) {
            return item.sign;
        }
    }

    return null;
}
export function getMoonPosition(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const moonVector = Astronomy.GeoVector(
        Astronomy.Body.Moon,
        date,
        true
    );

    const ecliptic = Astronomy.Ecliptic(moonVector);

    return {
        longitude: ecliptic.elon,
        ...longitudeToSign(ecliptic.elon)
    };
}
export function getTimezone(latitude, longitude) {
    if (
        !Number.isFinite(latitude) ||
        !Number.isFinite(longitude)
    ) {
        return null;
    }

    try {
        return tzlookup(latitude, longitude);
    } catch {
        return null;
    }
}
export function createBirthDateTime(dateString, timeString, timezone) {
    if (!dateString || !timeString || !timezone) {
        return null;
    }

    const dateTime = DateTime.fromISO(
        `${dateString}T${timeString}`,
        { zone: timezone }
    );

    if (!dateTime.isValid) {
        return null;
    }

    return dateTime.toUTC().toJSDate();
}
export function getLocalSiderealTime(date, longitude) {
    if (
        !(date instanceof Date) ||
        isNaN(date.getTime()) ||
        !Number.isFinite(longitude)
    ) {
        return null;
    }

    const gstHours = Astronomy.SiderealTime(date);

    let lstDegrees = gstHours * 15 + longitude;
    lstDegrees = ((lstDegrees % 360) + 360) % 360;

    return lstDegrees;
}
export function getAscendant(date, latitude, longitude) {
    const lst = getLocalSiderealTime(date, longitude);

    if (
        lst === null ||
        !Number.isFinite(latitude)
    ) {
        return null;
    }

    const degToRad = Math.PI / 180;
    const radToDeg = 180 / Math.PI;

    const theta = lst * degToRad;
    const phi = latitude * degToRad;

    // Obliquité moyenne de l'écliptique
    const epsilon = 23.4392911 * degToRad;

    let ascendant = Math.atan2(
        -Math.cos(theta),
        Math.sin(theta) * Math.cos(epsilon) +
        Math.tan(phi) * Math.sin(epsilon)
    ) * radToDeg;

    ascendant = ((ascendant % 360) + 360) % 360;
ascendant = (ascendant + 180) % 360;
    const zodiac = longitudeToSign(ascendant);

    return {
        longitude: ascendant,
        sign: zodiac.sign,
        degree: zodiac.degree
    };
}
export function getMercuryPosition(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const vector = Astronomy.GeoVector(
        Astronomy.Body.Mercury,
        date,
        true
    );

    const ecliptic = Astronomy.Ecliptic(vector);

    return {
        longitude: ecliptic.elon,
        ...longitudeToSign(ecliptic.elon)
    };
}
export function getVenusPosition(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const vector = Astronomy.GeoVector(
        Astronomy.Body.Venus,
        date,
        true
    );

    const ecliptic = Astronomy.Ecliptic(vector);

    return {
        longitude: ecliptic.elon,
        ...longitudeToSign(ecliptic.elon)
    };
}
export function getMarsPosition(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const vector = Astronomy.GeoVector(
        Astronomy.Body.Mars,
        date,
        true
    );

    const ecliptic = Astronomy.Ecliptic(vector);

    return {
        longitude: ecliptic.elon,
        ...longitudeToSign(ecliptic.elon)
    };
}
export function getJupiterPosition(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const vector = Astronomy.GeoVector(
        Astronomy.Body.Jupiter,
        date,
        true
    );

    const ecliptic = Astronomy.Ecliptic(vector);

    return {
        longitude: ecliptic.elon,
        ...longitudeToSign(ecliptic.elon)
    };
}
export function getSaturnPosition(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const vector = Astronomy.GeoVector(
        Astronomy.Body.Saturn,
        date,
        true
    );

    const ecliptic = Astronomy.Ecliptic(vector);

    return {
        longitude: ecliptic.elon,
        ...longitudeToSign(ecliptic.elon)
    };
}
export function getSunPosition(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const vector = Astronomy.GeoVector(
        Astronomy.Body.Sun,
        date,
        true
    );

    const ecliptic = Astronomy.Ecliptic(vector);

    return {
        longitude: ecliptic.elon,
        ...longitudeToSign(ecliptic.elon)
    };
}
export function getAspect(longitude1, longitude2) {
    if (
        !Number.isFinite(longitude1) ||
        !Number.isFinite(longitude2)
    ) {
        return null;
    }

    let angle = Math.abs(longitude1 - longitude2);

    // Toujours prendre le plus petit angle entre les deux astres
    if (angle > 180) {
        angle = 360 - angle;
    }

    const aspects = [
        { name: "Conjonction", angle: 0, orb: 8 },
        { name: "Sextile", angle: 60, orb: 6 },
        { name: "Carré", angle: 90, orb: 7 },
        { name: "Trigone", angle: 120, orb: 7 },
        { name: "Opposition", angle: 180, orb: 8 }
    ];

    for (const aspect of aspects) {
        const difference = Math.abs(angle - aspect.angle);

        if (difference <= aspect.orb) {
            return {
                name: aspect.name,
                angle,
                orb: difference
            };
        }
    }

    return null;
}
export function getAllAspects(bodies) {
    const results = [];

    for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {

            const body1 = bodies[i];
            const body2 = bodies[j];

            const aspect = getAspect(
                body1.longitude,
                body2.longitude
            );

            if (aspect) {
                results.push({
                    body1: body1.name,
                    body2: body2.name,
                    ...aspect
                });
            }
        }
    }

    return results;
}
export const SUN_INTERPRETATIONS = {
    "Bélier": "Votre énergie solaire vous pousse à agir, entreprendre et aller de l’avant avec spontanéité.",
    "Taureau": "Votre énergie solaire recherche la stabilité, la sécurité et la construction de bases solides.",
    "Gémeaux": "Votre énergie solaire favorise la curiosité, les échanges, l’adaptabilité et le besoin de comprendre.",
    "Cancer": "Votre énergie solaire met l’accent sur la sensibilité, les liens affectifs et le besoin de protection.",
    "Lion": "Votre énergie solaire favorise l’expression personnelle, la créativité et le désir de rayonner.",
    "Vierge": "Votre énergie solaire privilégie l’analyse, le sens pratique et le désir de vous rendre utile.",
    "Balance": "Votre énergie solaire recherche l’équilibre, l’harmonie, le dialogue et la qualité des relations.",
    "Scorpion": "Votre énergie solaire favorise l’intensité, la profondeur et une forte capacité de transformation.",
    "Sagittaire": "Votre énergie solaire vous pousse vers l’exploration, l’optimisme et l’élargissement de vos horizons.",
    "Capricorne": "Votre énergie solaire favorise la persévérance, la responsabilité et la construction à long terme.",
    "Verseau": "Votre énergie solaire valorise l’indépendance, les idées nouvelles et une manière personnelle de voir le monde.",
    "Poissons": "Votre énergie solaire accentue l’intuition, l’imagination, la sensibilité et la réceptivité."
};
export function getSunInterpretation(sign) {
    return SUN_INTERPRETATIONS[sign] || "";
}
export const MOON_INTERPRETATIONS = {
    "Bélier": "Votre Lune suggère des émotions spontanées, directes et un besoin de réagir rapidement à ce que vous ressentez.",
    "Taureau": "Votre Lune recherche la sécurité émotionnelle, la stabilité et des repères affectifs solides.",
    "Gémeaux": "Votre Lune favorise le besoin d’échanger, de comprendre vos émotions et de maintenir une certaine stimulation mentale.",
    "Cancer": "Votre Lune accentue la sensibilité, l’attachement aux proches et le besoin de vous sentir émotionnellement protégé.",
    "Lion": "Votre Lune exprime un besoin de chaleur, de reconnaissance et de générosité dans les relations affectives.",
    "Vierge": "Votre Lune tend à analyser les émotions et recherche la sécurité à travers l’ordre, l’utilité et les choses concrètes.",
    "Balance": "Votre Lune recherche l’harmonie émotionnelle, le dialogue et des relations équilibrées.",
    "Scorpion": "Votre Lune suggère une vie émotionnelle intense, profonde et un fort besoin de confiance dans les relations.",
    "Sagittaire": "Votre Lune recherche la liberté émotionnelle, l’enthousiasme et le sentiment de pouvoir élargir vos horizons.",
    "Capricorne": "Votre Lune tend à maîtriser les émotions et recherche la sécurité dans la stabilité, la responsabilité et la durée.",
    "Verseau": "Votre Lune valorise l’indépendance émotionnelle, la liberté et une certaine distance pour comprendre ce que vous ressentez.",
    "Poissons": "Votre Lune accentue l’intuition, l’imagination, l’empathie et une grande réceptivité à l’atmosphère environnante."
};
export function getMoonInterpretation(sign) {
    return MOON_INTERPRETATIONS[sign] || "";
}
export const ASCENDANT_INTERPRETATIONS = {
    "Bélier": "Votre Ascendant donne une image dynamique, spontanée et entreprenante dans votre manière d’aborder le monde.",
    "Taureau": "Votre Ascendant donne une apparence calme, stable et pragmatique, avec un besoin d’avancer à votre rythme.",
    "Gémeaux": "Votre Ascendant favorise une attitude curieuse, communicative et adaptable dans vos relations avec les autres.",
    "Cancer": "Votre Ascendant donne une approche sensible, prudente et protectrice face à votre environnement.",
    "Lion": "Votre Ascendant favorise une présence chaleureuse, expressive et naturellement visible.",
    "Vierge": "Votre Ascendant donne une attitude réservée, observatrice et attentive aux détails.",
    "Balance": "Votre Ascendant favorise une attitude sociable, diplomate et attentive à l’harmonie dans vos relations.",
    "Scorpion": "Votre Ascendant donne une présence intense, réservée et déterminée, avec une forte capacité d’observation.",
    "Sagittaire": "Votre Ascendant favorise une attitude ouverte, enthousiaste et tournée vers la découverte.",
    "Capricorne": "Votre Ascendant donne une image sérieuse, posée et déterminée, avec une approche progressive des situations.",
    "Verseau": "Votre Ascendant favorise une attitude indépendante, originale et ouverte aux idées nouvelles.",
    "Poissons": "Votre Ascendant donne une approche intuitive, sensible et réceptive à votre environnement."
};
export function getAscendantInterpretation(sign) {
    return ASCENDANT_INTERPRETATIONS[sign] || "";
}
export const MERCURY_INTERPRETATIONS = {
    "Bélier": "Mercure en Bélier favorise une pensée rapide, directe et spontanée, avec une communication franche.",
    "Taureau": "Mercure en Taureau favorise une pensée concrète, réfléchie et pragmatique, qui prend le temps de mûrir.",
    "Gémeaux": "Mercure en Gémeaux accentue la curiosité, la vivacité intellectuelle et le goût des échanges.",
    "Cancer": "Mercure en Cancer donne une pensée intuitive, sensible et fortement influencée par les émotions.",
    "Lion": "Mercure en Lion favorise une communication expressive, créative et convaincante.",
    "Vierge": "Mercure en Vierge accentue l’analyse, la précision, l’organisation et l’attention aux détails.",
    "Balance": "Mercure en Balance favorise une communication diplomate, nuancée et attentive aux différents points de vue.",
    "Scorpion": "Mercure en Scorpion donne une pensée profonde, intuitive et portée à chercher ce qui se cache derrière les apparences.",
    "Sagittaire": "Mercure en Sagittaire favorise une pensée ouverte, enthousiaste et tournée vers les grandes idées.",
    "Capricorne": "Mercure en Capricorne donne une pensée structurée, réaliste et orientée vers les objectifs.",
    "Verseau": "Mercure en Verseau favorise les idées originales, l’indépendance intellectuelle et les raisonnements novateurs.",
    "Poissons": "Mercure en Poissons donne une pensée intuitive, imaginative et sensible aux impressions."
};