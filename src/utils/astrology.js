// ==========================================
// 1. DONNÉES OCCIDENTALES
// ==========================================
export const WESTERN_SIGNS = [
  {
    name: "Bélier",
    symbol: "♈",
    dates: "21 mars - 19 avril",
    element: "Feu",
    planet: "Mars",
    traits: ["Dynamique", "Courageux", "Impulsif", "Passionné"],
    description: "Premier signe du zodiaque, le Bélier est un pionnier né. Enthousiaste et plein d'énergie, il fonce tête baissée vers ses objectifs sans craindre les obstacles."
  },
  {
    name: "Taureau",
    symbol: "♉",
    dates: "20 avril - 20 mai",
    element: "Terre",
    planet: "Vénus",
    traits: ["Patient", "Loyal", "Épicurien", "Obstiné"],
    description: "Stable et concret, le Taureau apprécie les plaisirs simples de la vie, la sécurité matérielle et le confort. C'est un bâtisseur persévérant et très fidèle."
  },
  {
    name: "Gémeaux",
    symbol: "♊",
    dates: "21 mai - 20 juin",
    element: "Air",
    planet: "Mercure",
    traits: ["Curieux", "Sociable", "Adaptable", "Dispersé"],
    description: "D'une grande agilité mentale, le Gémeaux aime apprendre, échanger et s'adapter à toutes les situations. Sa curiosité naturelle en fait un excellent communicant."
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "21 juin - 22 juillet",
    element: "Eau",
    planet: "Lune",
    traits: ["Intuitif", "Protecteur", "Sensible", "Nostalgique"],
    description: "Très attaché à son foyer et à ses proches, le Cancer possède une grande sensibilité émotionnelle. Il protège son monde intérieur avec une tendre bienveillance."
  },
  {
    name: "Lion",
    symbol: "♌",
    dates: "23 juillet - 22 août",
    element: "Feu",
    planet: "Soleil",
    traits: ["Généreux", "Carismatique", "Fier", "Ambitieux"],
    description: "Rayonnant et chaleureux, le Lion aime briller et inspirer son entourage. Leader naturel, il fait preuve d'une grande générosité envers ceux qu'il aime."
  },
  {
    name: "Vierge",
    symbol: "♍",
    dates: "23 août - 22 septembre",
    element: "Terre",
    planet: "Mercure",
    traits: ["Organisé", "Analytique", "Serviable", "Perfectionniste"],
    description: "Méthodique et attentive aux détails, la Vierge cherche l'ordre et l'efficacité. Elle met son sens pratique et sa loyauté au service des autres."
  },
  {
    name: "Balance",
    symbol: "♎",
    dates: "23 septembre - 22 octobre",
    element: "Air",
    planet: "Vénus",
    traits: ["Diplomate", "Harmonieux", "Charmant", "Hésitant"],
    description: "En quête perpétuelle d'équilibre et de justice, la Balance recherche l'harmonie dans ses relations. Elle possède un sens esthétique et artistique très développé."
  },
  {
    name: "Scorpion",
    symbol: "♏",
    dates: "23 octobre - 21 novembre",
    element: "Eau",
    planet: "Pluton",
    traits: ["Intense", "Passionné", "Intuitif", "Secret"],
    description: "Magnétique et passionné, le Scorpion explore les profondeurs de l'âme humaine. D'une grande force intérieure, il traverse les transformations avec courage."
  },
  {
    name: "Sagittaire",
    symbol: "♐",
    dates: "22 novembre - 21 décembre",
    element: "Feu",
    planet: "Jupiter",
    traits: ["Optimiste", "Aventurier", "Philosophe", "Indépendant"],
    description: "Toujours en quête d'horizons nouveaux, le Sagittaire aime voyager, apprendre et partager sa philosophie positive de la vie."
  },
  {
    name: "Capricorne",
    symbol: "♑",
    dates: "22 décembre - 19 janvier",
    element: "Terre",
    planet: "Saturne",
    traits: ["Discipliné", "Ambitieux", "Prudent", "Rigoureux"],
    description: "Patient et déterminé, le Capricorne gravit les échelons avec méthode. Sa persévérance et son sens du devoir en font un pilier de confiance."
  },
  {
    name: "Verseau",
    symbol: "♒",
    dates: "20 janvier - 18 février",
    element: "Air",
    planet: "Uranus",
    traits: ["Visionnaire", "Indépendant", "Original", "Humaniste"],
    description: "Atypique et tourné vers l'avenir, le Verseau revendique sa liberté de penser. C'est un esprit novateur qui cherche à faire évoluer les idées."
  },
  {
    name: "Poissons",
    symbol: "♓",
    dates: "19 février - 20 mars",
    element: "Eau",
    planet: "Neptune",
    traits: ["Empathe", "Rêveur", "Créatif", "Mystique"],
    description: "Doté d'une grande imagination et d'une profonde empathie, le Poissons ressent intuitivement le monde qui l'entoure. C'est un artiste et un idéaliste."
  }
];

// ==========================================
// 2. DONNÉES CHINOISES
// ==========================================
export const CHINESE_SIGNS = [
  { name: "Rat", symbol: "🐀", element: "Eau", traits: ["Ingénieux", "Charmant", "Ambitieux", "Économe"], desc: "Symbole de prospérité et d'esprit vif, le Rat sait déceler les opportunités avant tout le monde." },
  { name: "Bœuf", symbol: "🐂", element: "Terre", traits: ["Laborieux", "Fiable", "Calme", "Méthodique"], desc: "Patient et déterminé, le Bœuf avance à son rythme avec une régularité et une loyauté exemplaires." },
  { name: "Tigre", symbol: "🐅", element: "Bois", traits: ["Audacieux", "Passionné", "Magnétique", "Imprévisible"], desc: "Né pour mener, le Tigre dégage une aura naturelle et n'hésite pas à défendre de grandes causes." },
  { name: "Lapin", symbol: "🐇", element: "Bois", traits: ["Doux", "Diplomate", "Prudent", "Élégant"], desc: "En recherche constante de tranquillité, le Lapin sait éviter les conflits avec beaucoup de tact." },
  { name: "Dragon", symbol: "🐉", element: "Terre", traits: ["Puissant", "Chaleureux", "Charismatique", "Fier"], desc: "Seul animal mythique du zodiaque chinois, le Dragon incarne la réussite, la vitalité et la noblesse." },
  { name: "Serpent", symbol: "🐍", element: "Feu", traits: ["Sage", "Intuitif", "Réfléchi", "Mystérieux"], desc: "Observateur et philosophe, le Serpent possède une grande finesse d'esprit et un charme discret." },
  { name: "Cheval", symbol: "🐎", element: "Feu", traits: ["Enthousiaste", "Indépendant", "Énergique", "Sociable"], desc: "Amoureux de la liberté et des grands espaces, le Cheval avance toujours avec élan et optimisme." },
  { name: "Chèvre", symbol: "🐐", element: "Terre", traits: ["Artiste", "Douce", "Empathique", "Rêveuse"], desc: "Généreuse et créative, la Chèvre s'épanouit dans un environnement paisible entourée d'art et d'affection." },
  { name: "Singe", symbol: "🐒", element: "Métal", traits: ["Malin", "Inventif", "Joueur", "Perspicace"], desc: "D'une intelligence vive et pétillante, le Singe trouve une solution originale à chaque problème." },
  { name: "Coq", symbol: "🐓", element: "Métal", traits: ["Franc", "Organisé", "Observateur", "Fier"], desc: "Perfectionniste et élégant, le Coq aime la précision et ne laisse rien au hasard." },
  { name: "Chien", symbol: "🐕", element: "Terre", traits: ["Fidèle", "Juste", "Protecteur", "Dévoué"], desc: "Protecteur des siens, le Chien est le symbole même de l'amitié sincère et du sens de la justice." },
  { name: "Cochon", symbol: "🐖", element: "Eau", traits: ["Généreux", "Tolérant", "Épicurien", "Honnête"], desc: "Bienveillant et chaleureux, le Cochon profite de la vie et offre un soutien sans faille à ses proches." }
];

// ==========================================
// 3. FONCTIONS GÉNÉRATRICES
// ==========================================

const PREDICTIONS = [
  "Une belle opportunité se présente aujourd'hui. Soyez attentif aux occasions de faire avancer vos projets.",
  "Cette journée favorise les nouvelles initiatives. Faites confiance à votre créativité pour trouver des solutions.",
  "Prenez le temps d'écouter vos proches. Une conversation pourrait vous apporter un éclairage intéressant.",
  "Votre énergie vous aide à progresser. Concentrez-vous sur une priorité plutôt que de vous disperser.",
  "Accordez-vous une pause pour retrouver votre équilibre. Vous aborderez ensuite vos activités avec plus de sérénité.",
  "Une rencontre ou un échange pourrait vous donner une idée nouvelle. Restez ouvert aux propositions.",
  "Votre persévérance commence à porter ses fruits. Continuez à avancer sans brûler les étapes.",
  "Une journée propice à l'organisation. Réglez les petites tâches en attente pour libérer votre esprit.",
  "Votre intuition vous invite à explorer une autre voie. Prenez néanmoins le temps de vérifier les détails.",
  "Un changement de programme pourrait finalement vous être favorable. Faites preuve de souplesse.",
  "Les échanges sont à l'honneur aujourd'hui. Exprimez clairement vos idées et écoutez les autres.",
  "Vous pourriez retrouver la motivation nécessaire pour reprendre un projet laissé de côté.",
  "Privilégiez les activités qui vous apportent du plaisir. Un peu de légèreté vous fera du bien.",
  "Une décision mérite réflexion. Rassemblez les informations nécessaires avant de vous engager.",
  "Votre sens de l'observation vous permettra de remarquer un détail qui avait échappé à votre attention.",
  "Cette journée encourage la coopération. Un projet commun pourrait avancer grâce à votre contribution.",
  "Laissez une place à l'imprévu. Une occasion intéressante pourrait se présenter au détour de votre journée.",
  "Vous avez besoin de calme pour mettre de l'ordre dans vos idées. Évitez de multiplier les engagements.",
  "Votre enthousiasme pourrait être communicatif. Profitez-en pour partager vos projets avec votre entourage.",
  "Une journée favorable aux découvertes. Essayez une nouvelle activité ou approfondissez un sujet qui vous passionne.",
  "Prenez du recul face à une situation compliquée. Une solution simple pourrait apparaître.",
  "Votre patience sera précieuse aujourd'hui. Certains projets demandent du temps pour se concrétiser.",
  "Une attention particulière à votre organisation vous permettra de profiter davantage de votre temps libre.",
  "Vous pourriez recevoir un encouragement inattendu. Profitez de cet élan pour avancer avec confiance.",
  "La journée se prête aux échanges chaleureux et aux moments de convivialité.",
  "Votre curiosité vous pousse à sortir de vos habitudes. Une petite nouveauté pourrait égayer votre quotidien.",
  "Concentrez votre énergie sur ce qui compte vraiment pour vous. Le reste peut attendre.",
  "Une bonne occasion de faire le point sur vos envies et de définir un nouvel objectif.",
  "Votre créativité trouve aujourd'hui un terrain d'expression. N'hésitez pas à expérimenter.",
  "Une journée équilibrée se dessine si vous alternez moments d'activité et instants de détente."
];


const LOVE_PREDICTIONS = [
  "Une belle complicité pourrait illuminer votre journée. Prenez le temps de partager vos émotions.",
  "Les petites attentions feront toute la différence aujourd'hui.",
  "Une conversation sincère pourrait renforcer vos liens affectifs.",
  "Laissez davantage de place à la spontanéité dans vos relations.",
  "Votre charme naturel favorise les échanges et les nouvelles rencontres.",
  "Une journée propice aux rapprochements et aux moments de tendresse.",
  "Écoutez votre cœur, sans oublier de respecter vos propres besoins.",
  "Une surprise agréable pourrait apporter de la légèreté à votre vie sentimentale.",
  "Prenez le temps de montrer votre affection à ceux qui comptent pour vous.",
  "La confiance et le dialogue seront vos meilleurs alliés aujourd'hui.",
  "Une rencontre inattendue pourrait éveiller votre curiosité.",
  "Privilégiez la douceur pour désamorcer un éventuel malentendu.",
  "Votre sensibilité vous permettra de mieux comprendre les attentes de votre partenaire.",
  "Une belle occasion de partager un moment privilégié à deux.",
  "Ne laissez pas les petites contrariétés gâcher vos moments de bonheur.",
  "Votre vie sentimentale gagne à sortir de la routine.",
  "Une attention spontanée pourrait toucher particulièrement une personne proche.",
  "Prenez du recul avant de réagir à une parole maladroite.",
  "Une journée favorable aux confidences et aux échanges sincères.",
  "Laissez les relations évoluer naturellement, sans précipiter les choses.",
  "Un souvenir heureux pourrait vous donner envie de renouer certains liens.",
  "Votre bonne humeur sera communicative auprès de votre entourage.",
  "Une occasion de clarifier vos attentes dans une relation importante.",
  "Accordez-vous du temps pour cultiver les liens qui vous rendent heureux.",
  "Une initiative romantique pourrait apporter une touche de magie à votre journée.",
  "La patience vous aidera à mieux comprendre une situation sentimentale.",
  "Une journée idéale pour exprimer votre gratitude envers une personne chère.",
  "Osez montrer votre intérêt si quelqu'un attire votre attention.",
  "Votre authenticité constitue votre plus bel atout dans vos relations.",
  "Une atmosphère chaleureuse favorise les rapprochements et les projets à deux."
];


const WORK_PREDICTIONS = [
  "Votre organisation vous permettra d'avancer sereinement dans vos projets.",
  "Une nouvelle idée pourrait ouvrir des perspectives intéressantes.",
  "Votre persévérance sera votre meilleur atout aujourd'hui.",
  "Prenez le temps de définir vos priorités avant de vous lancer.",
  "Un échange constructif pourrait débloquer une situation.",
  "Votre créativité vous aidera à trouver une solution originale.",
  "Une journée favorable pour reprendre un projet laissé de côté.",
  "Ne vous précipitez pas : les détails méritent toute votre attention.",
  "Une occasion d'apprendre quelque chose de nouveau pourrait se présenter.",
  "Votre esprit d'initiative sera particulièrement utile aujourd'hui.",
  "Privilégiez la coopération pour faire avancer vos projets.",
  "Une bonne nouvelle pourrait vous encourager à poursuivre vos efforts.",
  "Prenez du recul pour mieux évaluer vos prochaines décisions.",
  "Votre capacité d'adaptation vous aidera face à un imprévu.",
  "Une tâche longtemps repoussée pourrait enfin être terminée.",
  "Votre sens pratique vous permettra de gagner du temps.",
  "Une discussion pourrait vous apporter des conseils précieux.",
  "C'est une journée propice à la planification de vos futurs projets.",
  "Votre motivation vous aidera à franchir une nouvelle étape.",
  "Évitez de vous disperser et concentrez-vous sur l'essentiel.",
  "Une opportunité intéressante mérite d'être étudiée attentivement.",
  "Votre patience pourrait porter ses fruits dans un projet important.",
  "Une approche différente vous aidera à surmonter une difficulté.",
  "Profitez de cette journée pour mettre de l'ordre dans vos dossiers.",
  "Votre enthousiasme pourrait donner un nouvel élan à vos activités.",
  "Un projet personnel pourrait bénéficier d'une attention particulière.",
  "N'hésitez pas à demander conseil avant une décision importante.",
  "Une journée favorable pour développer vos compétences.",
  "Votre rigueur vous permettra de progresser avec confiance.",
  "Prenez le temps de reconnaître le chemin déjà parcouru."
];


function getStringHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getTodayFormatted() {
  const today = new Date();
  return today.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function getDailyHoroscope(signName) {
  const todayStr = new Date().toISOString().split('T')[0];
  const hash = getStringHash(signName + todayStr);
  return PREDICTIONS[hash % PREDICTIONS.length];
}

export function getDailyHoroscopeSections(signName) {
    const todayStr = new Date().toISOString().split('T')[0];
    const hash = getStringHash(signName + todayStr);

    return {
        general: PREDICTIONS[hash % PREDICTIONS.length],
        amour: LOVE_PREDICTIONS[(hash + 7) % LOVE_PREDICTIONS.length],
        travail: WORK_PREDICTIONS[(hash + 13) % WORK_PREDICTIONS.length]
    };
}


export function getDailyNumbers(signName) {
  const todayStr = new Date().toISOString().split('T')[0];
  const baseHash = getStringHash(signName + todayStr);
  
  const numbers = new Set();
  let step = 1;
  while (numbers.size < 5) {
    const num = ((baseHash + step * 17) % 49) + 1;
    numbers.add(num);
    step++;
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

// ==========================================
// 4. NUMÉROLOGIE
// ==========================================
export function calculateLifePath(dateString) {
  if (!dateString) return null;
  const digits = dateString.replace(/\D/g, '');
  let sum = digits.split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }
  return sum;
}

export function calculatePersonalYear(dateString, currentYear = new Date().getFullYear()) {
    if (!dateString) return null;

    const [, month, day] = dateString.split('-').map(Number);

    if (!month || !day) return null;

    // Additionner le jour, le mois et l'année en cours.
    let sum = [...String(day), ...String(month), ...String(currentYear)]
        .reduce((total, digit) => total + Number(digit), 0);

    // Réduire le résultat à un chiffre de 1 à 9.
    while (sum > 9) {
        sum = String(sum)
            .split('')
            .reduce((total, digit) => total + Number(digit), 0);
    }

    return sum;
}

export const PERSONAL_YEAR_DESCRIPTIONS = {
    1: "Une année de nouveaux départs. C'est le moment de prendre des initiatives, de lancer des projets et d'explorer de nouvelles possibilités.",
    2: "Une année consacrée aux relations, à la coopération et à la patience. Privilégiez le dialogue et laissez vos projets mûrir.",
    3: "Une année d'expression et de créativité. Les rencontres, les loisirs et les activités artistiques occupent une place importante.",
    4: "Une année de construction et d'organisation. Consolidez vos acquis, structurez vos projets et avancez avec méthode.",
    5: "Une année de changement et de liberté. Les découvertes, les voyages et les nouvelles expériences sont à l'honneur.",
    6: "Une année tournée vers la famille, les responsabilités et l'harmonie. Prenez soin de vos relations et de votre environnement.",
    7: "Une année de réflexion et d'apprentissage. Accordez-vous du temps pour approfondir vos connaissances et faire le point sur vos aspirations.",
    8: "Une année de réalisation et d'ambition. Concentrez-vous sur vos objectifs et sur la concrétisation de vos projets.",
    9: "Une année de bilan et d'achèvement. Terminez ce qui doit l'être et préparez-vous à accueillir un nouveau cycle."
};




export const LIFE_PATH_DESCRIPTIONS = {
  1: { title: "Le Leader / L'Initiateur", desc: "Indépendance, ambition et esprit d'initiative. Vous êtes fait(e) pour ouvrir la voie et concrétiser vos propres projets." },
  2: { title: "Le Médiateur / L'Associé", desc: "Diplomatie, sensibilité et sens de la collaboration. Votre force réside dans votre capacité à créer de l'harmonie." },
  3: { title: "Le Communicant / L'Artiste", desc: "Expression, créativité et joie de vivre. Vous possédez un don naturel pour inspirer et communiquer avec les autres." },
  4: { title: "Le Bâtisseur / Le Méthodique", desc: "Organisation, travail et stabilité. Vous êtes le pilier sur lequel on peut bâtir des projets solides et durables." },
  5: { title: "L'Explorateur / Le Libre", desc: "Changement, aventure et adaptabilité. Vous avez soif de liberté, de voyages et de nouvelles expériences." },
  6: { title: "Le Protecteur / Le Bienveillant", desc: "Responsabilité, amour et sens de la famille. Votre épanouissement passe par l'aide et l'attention portée aux autres." },
  7: { title: "Le Penseur / Le Chercheur", desc: "Analyse, spiritualité et sagesse. Vous aimez comprendre le sens profond des choses et cultiver votre jardin intérieur." },
  8: { title: "Le Conquérant / Le Stratège", desc: "Pouvoir, réussite matérielle et ambition. Vous possédez une grande énergie pour concrétiser de grands objectifs." },
  9: { title: "L'Humaniste / L'Inspirateur", desc: "Altruisme, compassion et ouverture sur le monde. Votre mission est d'apporter votre pierre à l'édifice collectif." },
  11: { title: "Maître Nombre : L'Intuitif", desc: "Inspiration élevée, grande intuition et sensibilité spirituelle. Un potentiel d'éveil et de vision très puissant." },
  22: { title: "Maître Nombre : Le Grand Bâtisseur", desc: "Capacité exceptionnelle à transformer les grands rêves en réalités concrètes à grande échelle." },
  33: { title: "Maître Nombre : Le Guide", desc: "Amour universel, dévouement suprême et capacité à guider les autres avec une immense bienveillance." }
};
// ==========================================
// 5. COMPATIBILITÉ ASTROLOGIQUE
// ==========================================
const ELEMENT_MAP = {
  "Bélier": "Feu", "Lion": "Feu", "Sagittaire": "Feu",
  "Taureau": "Terre", "Vierge": "Terre", "Capricorne": "Terre",
  "Gémeaux": "Air", "Balance": "Air", "Verseau": "Air",
  "Cancer": "Eau", "Scorpion": "Eau", "Poissons": "Eau"
};


const COMPATIBILITY_DATABASE = {
  "Feu-Feu": {
    score: 90,
    desc: "Une relation passionnée, explosive et remplie d'énergie !",
    amour: "Deux tempéraments passionnés qui aiment partager des émotions fortes et multiplier les aventures.",
    communication: "Les échanges sont directs et spontanés. Chacun gagne à laisser l'autre exprimer son point de vue.",
    quotidien: "Une vie dynamique, riche en projets et en activités. Préserver des moments de calme aide à maintenir l'équilibre."
  },
  "Feu-Air": {
    score: 85,
    desc: "Une excellente dynamique : l'Air attise le Feu et stimule les idées.",
    amour: "Une attirance pétillante, nourrie par la spontanéité et le goût de la découverte.",
    communication: "L'Air apporte des idées et le Feu les transforme en projets. Les discussions sont stimulantes.",
    quotidien: "Un duo qui aime bouger et improviser. Une organisation minimale permet de concrétiser ses nombreuses envies."
  },
  "Feu-Terre": {
    score: 55,
    desc: "La Terre canalise le Feu, mais attention à ne pas étouffer l'enthousiasme.",
    amour: "Le Feu apporte la passion tandis que la Terre recherche la stabilité. Le respect de ces différences nourrit la relation.",
    communication: "L'un privilégie l'action immédiate, l'autre la réflexion. Écouter leurs rythmes respectifs facilite les échanges.",
    quotidien: "La Terre structure les projets et le Feu insuffle de l'énergie. Trouver un équilibre entre routine et spontanéité est essentiel."
  },
  "Feu-Eau": {
    score: 40,
    desc: "Une relation intense mais délicate : l'Eau peut éteindre la passion du Feu.",
    amour: "Une attirance intense entre passion et sensibilité. Chacun découvre une manière différente d'exprimer ses sentiments.",
    communication: "Le Feu s'exprime directement, tandis que l'Eau privilégie les émotions. La délicatesse et l'écoute sont importantes.",
    quotidien: "Alterner activités stimulantes et moments de tranquillité permet de respecter les besoins de chacun."
  },
  "Terre-Terre": {
    score: 95,
    desc: "Une union solide, stable et profondément rassurante pour l'avenir.",
    amour: "Une relation fondée sur la fidélité, la confiance et la construction de projets communs.",
    communication: "Les échanges sont généralement pragmatiques. Exprimer aussi ses émotions aide à entretenir la complicité.",
    quotidien: "Un couple organisé qui apprécie ses habitudes et sa sécurité. Quelques surprises apportent une touche de fantaisie."
  },
  "Terre-Eau": {
    score: 88,
    desc: "Très belle complémentarité : l'Eau nourrit la Terre pour faire grandir vos projets.",
    amour: "La tendresse de l'Eau rencontre la fiabilité de la Terre. Une relation tournée vers l'attachement et la confiance.",
    communication: "L'Eau exprime ses ressentis et la Terre propose des solutions concrètes. Les deux approches peuvent se compléter.",
    quotidien: "Un foyer chaleureux, où l'attention aux autres et la stabilité occupent une place importante."
  },
  "Terre-Air": {
    score: 50,
    desc: "Des approches différentes : la pragmatique Terre face au rêveur de l'Air.",
    amour: "La Terre recherche la sécurité, tandis que l'Air apprécie la liberté. Leur curiosité mutuelle peut enrichir la relation.",
    communication: "L'Air aime explorer les possibilités et la Terre préfère les solutions concrètes. Des compromis facilitent les décisions.",
    quotidien: "Associer organisation et improvisation permet à chacun de conserver son espace tout en partageant des projets."
  },
  "Air-Air": {
    score: 85,
    desc: "Une complicité intellectuelle totale, de grands échanges et de la liberté.",
    amour: "Une relation légère et stimulante, où l'amitié, l'humour et la curiosité occupent une place importante.",
    communication: "Les conversations sont nombreuses et les idées circulent librement. Prendre le temps d'aborder les émotions renforce le lien.",
    quotidien: "Un duo sociable qui apprécie les découvertes. Quelques habitudes communes aident à donner forme aux projets."
  },
  "Air-Eau": {
    score: 45,
    desc: "Sensibilité vs Logique : il faudra apprendre à parler le même langage.",
    amour: "L'Air apporte de la légèreté et l'Eau de la profondeur émotionnelle. Apprendre à apprécier ces différences enrichit la relation.",
    communication: "L'un analyse les situations, l'autre les ressent. Reformuler et écouter sans juger favorise la compréhension.",
    quotidien: "Prévoir des moments de partage tout en respectant les besoins de liberté et d'intimité de chacun."
  },
  "Eau-Eau": {
    score: 92,
    desc: "Une fusion émotionnelle et une compréhension intuitive quasi télépathique.",
    amour: "Une relation tendre et profonde, marquée par une grande sensibilité aux sentiments de l'autre.",
    communication: "Les émotions occupent une place centrale. Dire clairement ce que l'on ressent évite les malentendus.",
    quotidien: "Un duo attaché à son cocon et à ses proches. Conserver des activités personnelles contribue à l'équilibre."
  }
};

export function getCompatibility(sign1, sign2) {
  const elem1 = ELEMENT_MAP[sign1];
  const elem2 = ELEMENT_MAP[sign2];
  
  if (!elem1 || !elem2) return null;

  // On trie les éléments par ordre alphabétique pour retrouver la clé (ex: Air-Feu devient Feu-Air)
  const key = [elem1, elem2].sort().join('-');
  
  return COMPATIBILITY_DATABASE[key] || { score: 70, desc: "Une relation équilibrée qui demande quelques ajustements au quotidien." };
}
// ==========================================
// 6. PHASE LUNAIRE DU JOUR
// ==========================================
export function getMoonPhase() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 3) {
    year--;
    month += 12;
  }

  month++;
  let c = 365.25 * year;
  let e = 30.6 * month;
  let total = c + e + day - 694039.09; // Total de jours depuis la Nouvelle Lune repère
  total /= 29.5305882; // Cycle synodique de la Lune (~29.53 jours)
  
  let phase = total - Math.floor(total); // Obtient la valeur entre 0 et 1

  // Détermination de la phase et de l'icône
  if (phase < 0.06 || phase >= 0.94) return { name: "Nouvelle Lune", icon: "🌑" };
  if (phase < 0.19) return { name: "Premier Croissant", icon: "🌒" };
  if (phase < 0.31) return { name: "Premier Quartier", icon: "🌓" };
  if (phase < 0.44) return { name: "Lune Gibbeuse Croissante", icon: "🌔" };
  if (phase < 0.56) return { name: "Pleine Lune", icon: "🌕" };
  if (phase < 0.69) return { name: "Lune Gibbeuse Décroissante", icon: "🌖" };
  if (phase < 0.81) return { name: "Dernier Quartier", icon: "🌗" };
  return { name: "Dernier Croissant", icon: "🌘" };
}