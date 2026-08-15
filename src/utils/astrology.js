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
  "Une belle opportunité se présente aujourd'hui. Soyez à l'écoute des signes autour de vous.",
  "Journée idéale pour concrétiser un projet personnel. Votre intuition est votre meilleure alliée.",
  "Prenez le temps d'écouter vos proches. Une discussion enrichissante se profile à l'horizon.",
  "Votre créativité est au sommet. N'hésitez pas à exprimer vos idées les plus originales.",
  "Une énergie calme et régénérante vous accompagne. Profitez-en pour recharger vos batteries."
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
  "Feu-Feu": { score: 90, desc: "Une relation passionnée, explosive et remplie d'énergie !" },
  "Feu-Air": { score: 85, desc: "Une excellente dynamique : l'Air attise le Feu et stimule les idées." },
  "Feu-Terre": { score: 55, desc: "La Terre canalise le Feu, mais attention à ne pas étouffer l'enthousiasme." },
  "Feu-Eau": { score: 40, desc: "Une relation intense mais délicate : l'Eau peut éteindre la passion du Feu." },
  
  "Terre-Terre": { score: 95, desc: "Une union solide, stable et profondément rassurante pour l'avenir." },
  "Terre-Eau": { score: 88, desc: "Très belle complémentarité : l'Eau nourrit la Terre pour faire grandir vos projets." },
  "Terre-Air": { score: 50, desc: "Des approches différentes : la pragmatique Terre face au rêveur de l'Air." },
  
  "Air-Air": { score: 85, desc: "Une complicité intellectuelle totale, de grands échanges et de la liberté." },
  "Air-Eau": { score: 45, desc: "Sensibilité vs Logique : il faudra apprendre à parler le même langage." },
  
  "Eau-Eau": { score: 92, desc: "Une fusion émotionnelle et une compréhension intuitive quasi télépathique." }
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