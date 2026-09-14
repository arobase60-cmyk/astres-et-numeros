export interface TarotCard {
  id: number;
  name: string;
  image: string;
  keywords: string[];
  shortMeaning: string;
  loveMeaning: string;
  workMeaning: string;
}

export const tarotCards: TarotCard[] = [
  {
    id: 0,
    name: "Le Mat",
    image: "/tarot/tarot_mat.png",
    keywords: ["liberté", "nouveau départ", "spontanéité"],
    shortMeaning:
      "Le Mat annonce un mouvement, un départ ou une envie de liberté. Il vous invite à avancer avec confiance tout en restant attentif à la direction que vous prenez.",
    loveMeaning:
      "En amour, Le Mat évoque un besoin de liberté, de nouveauté ou de spontanéité. Une relation peut repartir sur de nouvelles bases, ou une rencontre inattendue peut vous pousser à sortir de vos habitudes.",
    workMeaning:
      "Dans le domaine professionnel, Le Mat annonce un changement, une nouvelle orientation ou l'envie de tenter autre chose. Une opportunité peut apparaître si vous acceptez de sortir d'un cadre devenu trop étroit."
  },
  {
    id: 1,
    name: "Le Bateleur",
    image: "/tarot/tarot_bateleur.png",
    keywords: ["initiative", "potentiel", "action"],
    shortMeaning:
      "Le Bateleur symbolise le commencement et les possibilités nouvelles. Vous avez les ressources nécessaires pour agir, expérimenter et faire évoluer la situation.",
    loveMeaning:
      "En amour, Le Bateleur annonce souvent un début, une rencontre ou un regain d'intérêt. La situation demande de l'initiative et une communication directe pour pouvoir évoluer.",
    workMeaning:
      "Au travail, Le Bateleur favorise les nouveaux projets, les candidatures, les formations et les prises d'initiative. Vous disposez d'un potentiel réel, mais il faut passer à l'action."
  },
  {
    id: 2,
    name: "La Papesse",
    image: "/tarot/tarot_papesse.png",
    keywords: ["intuition", "patience", "réflexion"],
    shortMeaning:
      "La Papesse vous conseille d'observer et de ne pas précipiter les événements. Certaines réponses viendront davantage de votre intuition que de l'action immédiate.",
    loveMeaning:
      "En amour, La Papesse suggère des sentiments profonds mais parfois peu exprimés. Une personne peut garder ses émotions pour elle. Il est préférable de laisser la relation mûrir sans forcer les choses.",
    workMeaning:
      "Professionnellement, La Papesse invite à observer, apprendre et préparer la suite. Une période discrète peut être utile pour acquérir des connaissances ou attendre le bon moment avant d'agir."
  },
  {
    id: 3,
    name: "L'Impératrice",
    image: "/tarot/tarot_imperatrice.png",
    keywords: ["créativité", "expression", "épanouissement"],
    shortMeaning:
      "L'Impératrice évoque une période fertile pour les idées et les projets. Elle favorise la communication, la créativité et la confiance en vos capacités.",
    loveMeaning:
      "L'Impératrice favorise les échanges, la séduction et l'épanouissement affectif. Elle peut annoncer une relation qui gagne en complicité ou une période propice aux rencontres.",
    workMeaning:
      "Au travail, L'Impératrice met en avant votre créativité et votre capacité à convaincre. Vos idées peuvent être bien accueillies si vous les exprimez clairement."
  },
  {
    id: 4,
    name: "L'Empereur",
    image: "/tarot/tarot_empereur.png",
    keywords: ["stabilité", "structure", "autorité"],
    shortMeaning:
      "L'Empereur vous encourage à construire sur des bases solides. Organisation, responsabilité et décisions concrètes peuvent vous aider à stabiliser votre situation.",
    loveMeaning:
      "En amour, L'Empereur recherche la stabilité et la sécurité. Une relation peut se consolider, mais cette carte peut aussi signaler une personne qui contrôle beaucoup ses émotions.",
    workMeaning:
      "Dans le travail, L'Empereur est favorable à la stabilité, aux responsabilités et aux décisions concrètes. Il peut annoncer une progression vers une position plus solide ou plus reconnue."
  },
  {
    id: 5,
    name: "Le Pape",
    image: "/tarot/tarot_pape.png",
    keywords: ["conseil", "sagesse", "transmission"],
    shortMeaning:
      "Le Pape évoque le besoin de conseil, de dialogue ou de transmission. Une personne expérimentée ou une approche plus sage peut vous aider à y voir plus clair.",
    loveMeaning:
      "Le Pape apporte une énergie de confiance, de dialogue et de sérieux. Il peut indiquer une relation qui cherche à se construire dans la durée ou une discussion importante permettant de mieux se comprendre.",
    workMeaning:
      "Professionnellement, Le Pape conseille de rechercher l'avis d'une personne expérimentée. Il favorise aussi la formation, la transmission de compétences et les environnements structurés."
  },
  {
    id: 6,
    name: "L'Amoureux",
    image: "/tarot/tarot_amoureux.png",
    keywords: ["choix", "relation", "sentiments"],
    shortMeaning:
      "L'Amoureux parle de choix et de relations. Il peut signaler une décision importante où vos émotions et vos valeurs personnelles jouent un rôle essentiel.",
    loveMeaning:
      "L'Amoureux est naturellement lié aux sentiments, mais surtout aux choix affectifs. Une relation peut se renforcer si les deux personnes souhaitent avancer dans la même direction.",
    workMeaning:
      "Dans le travail, L'Amoureux indique souvent une décision importante. Deux possibilités peuvent s'offrir à vous, et le meilleur choix sera celui qui correspond réellement à vos priorités."
  },
  {
    id: 7,
    name: "Le Chariot",
    image: "/tarot/tarot_chariot.png",
    keywords: ["avancée", "détermination", "victoire"],
    shortMeaning:
      "Le Chariot annonce une progression. Votre détermination peut vous permettre de franchir un obstacle et de reprendre le contrôle de la situation.",
    loveMeaning:
      "En amour, Le Chariot indique une relation qui avance ou une personne décidée à faire évoluer la situation. Il peut également annoncer une rencontre liée à un déplacement.",
    workMeaning:
      "Professionnellement, Le Chariot est une carte dynamique. Il annonce une progression, une réussite possible ou la capacité à atteindre un objectif grâce à votre détermination."
  },
  {
    id: 8,
    name: "La Justice",
    image: "/tarot/tarot_justice.png",
    keywords: ["équilibre", "décision", "responsabilité"],
    shortMeaning:
      "La Justice vous invite à examiner les faits avec objectivité. Une décision équilibrée et réfléchie sera probablement plus bénéfique qu'une réaction impulsive.",
    loveMeaning:
      "En amour, La Justice demande de regarder la relation avec lucidité. L'équilibre entre donner et recevoir est important. Une décision peut devenir nécessaire si la situation manque de clarté.",
    workMeaning:
      "Au travail, La Justice favorise les décisions rationnelles, les contrats et les démarches administratives. Elle conseille de bien vérifier les faits avant de vous engager."
  },
  {
    id: 9,
    name: "L'Ermite",
    image: "/tarot/tarot_hermite.png",
    keywords: ["recul", "recherche", "maturité"],
    shortMeaning:
      "L'Ermite indique qu'un temps de réflexion peut être nécessaire. Avancer lentement n'est pas reculer : certaines réponses demandent du recul et de la patience.",
    loveMeaning:
      "En amour, L'Ermite peut signaler une période de distance ou de réflexion. Il invite à comprendre ce que vous souhaitez réellement avant de chercher à accélérer la relation.",
    workMeaning:
      "Professionnellement, L'Ermite conseille la prudence et l'analyse. La progression peut être lente, mais elle peut aussi être solide si vous prenez le temps de préparer chaque étape."
  },
  {
    id: 10,
    name: "La Roue de Fortune",
    image: "/tarot/tarot_roue_fortune.png",
    keywords: ["changement", "cycle", "opportunité"],
    shortMeaning:
      "La Roue de Fortune annonce une évolution ou un changement de cycle. Une situation qui semblait bloquée peut commencer à bouger de façon inattendue.",
    loveMeaning:
      "En amour, La Roue de Fortune annonce un changement. Une relation peut évoluer rapidement, une ancienne situation peut se débloquer ou une nouvelle rencontre peut modifier vos perspectives.",
    workMeaning:
      "Au travail, La Roue de Fortune peut signaler une opportunité inattendue, un changement de poste ou une évolution du contexte professionnel. Il faudra savoir saisir le bon moment."
  },
  {
    id: 11,
    name: "La Force",
    image: "/tarot/tarot_force.png",
    keywords: ["courage", "maîtrise", "confiance"],
    shortMeaning:
      "La Force vous rappelle que la véritable puissance vient souvent du calme et de la maîtrise de soi. Persévérance et confiance peuvent faire la différence.",
    loveMeaning:
      "En amour, La Force indique une attraction forte mais aussi la nécessité de maîtriser ses réactions. La douceur et la confiance seront plus efficaces que les rapports de force.",
    workMeaning:
      "Professionnellement, La Force montre que vous pouvez surmonter une difficulté par la persévérance. Votre calme et votre capacité à rester concentré seront vos principaux atouts."
  },
  {
    id: 12,
    name: "Le Pendu",
    image: "/tarot/tarot_pendu.png",
    keywords: ["pause", "nouveau regard", "lâcher-prise"],
    shortMeaning:
      "Le Pendu peut signaler une période d'attente ou de blocage temporaire. Il vous invite à regarder la situation autrement plutôt qu'à vouloir la forcer.",
    loveMeaning:
      "En amour, Le Pendu peut représenter une relation en attente ou une situation qui n'avance pas comme prévu. Il invite à changer de regard avant de prendre une décision.",
    workMeaning:
      "Au travail, Le Pendu signale souvent un délai ou un blocage temporaire. Il peut être plus utile d'adapter votre stratégie que de chercher à accélérer les événements."
  },
  {
    id: 13,
    name: "Arcane sans nom",
    image: "/tarot/tarot_arcane.png",
    keywords: ["transformation", "fin de cycle", "renouveau"],
    shortMeaning:
      "L'Arcane sans nom symbolise une transformation profonde. Quelque chose peut devoir se terminer ou évoluer pour permettre à une nouvelle étape de commencer.",
    loveMeaning:
      "En amour, l'Arcane sans nom annonce une transformation importante. Une ancienne dynamique doit probablement disparaître pour que la relation évolue ou pour qu'un nouveau chapitre puisse commencer.",
    workMeaning:
      "Professionnellement, cette carte annonce une transition importante. Elle peut correspondre à la fin d'un poste, d'une mission ou d'une manière de travailler devenue dépassée."
  },
  {
    id: 14,
    name: "Tempérance",
    image: "/tarot/tarot_temperance.png",
    keywords: ["harmonie", "patience", "équilibre"],
    shortMeaning:
      "Tempérance favorise l'apaisement et la recherche d'un juste milieu. Les choses peuvent évoluer favorablement si vous évitez les excès et laissez du temps au temps.",
    loveMeaning:
      "Tempérance est favorable à l'harmonie, au dialogue et à la réconciliation. Une relation peut s'améliorer progressivement si chacun accepte de faire un pas vers l'autre.",
    workMeaning:
      "Dans le travail, Tempérance conseille la coopération et la patience. Les progrès peuvent être réguliers plutôt que spectaculaires, mais ils vont dans le bon sens."
  },
  {
    id: 15,
    name: "Le Diable",
    image: "/tarot/tarot_diable.png",
    keywords: ["désir", "attachement", "tentation"],
    shortMeaning:
      "Le Diable attire votre attention sur les désirs intenses, les dépendances ou les rapports de force. Il peut être utile d'identifier ce qui vous influence réellement.",
    loveMeaning:
      "En amour, Le Diable évoque une forte attraction, une relation passionnelle ou une dépendance émotionnelle. Il invite à distinguer le désir sincère d'un attachement devenu excessif.",
    workMeaning:
      "Professionnellement, Le Diable peut annoncer une forte ambition, une négociation financière ou un environnement compétitif. Attention toutefois aux manipulations et aux engagements trop contraignants."
  },
  {
    id: 16,
    name: "La Maison Dieu",
    image: "/tarot/tarot_maison_dieu.png",
    keywords: ["bouleversement", "révélation", "libération"],
    shortMeaning:
      "La Maison Dieu annonce souvent un changement soudain ou une remise en question. Même déstabilisante, cette évolution peut permettre de repartir sur des bases plus justes.",
    loveMeaning:
      "En amour, La Maison Dieu peut signaler une révélation, une dispute ou un changement inattendu. Ce bouleversement peut toutefois permettre de faire tomber les illusions et de clarifier la relation.",
    workMeaning:
      "Dans le travail, La Maison Dieu annonce un changement soudain : réorganisation, rupture de contrat, nouveau projet ou remise en question. Il faudra vous adapter rapidement."
  },
  {
    id: 17,
    name: "L'Étoile",
    image: "/tarot/tarot_etoile.png",
    keywords: ["espoir", "confiance", "inspiration"],
    shortMeaning:
      "L'Étoile est une carte d'espoir et de renouveau. Elle vous encourage à garder confiance et à avancer avec davantage de sérénité.",
    loveMeaning:
      "L'Étoile est très favorable en amour. Elle évoque l'espoir, la tendresse et une relation plus authentique. Une rencontre ou un rapprochement peut apporter beaucoup de sérénité.",
    workMeaning:
      "Professionnellement, L'Étoile encourage à croire dans votre projet. Elle peut annoncer une amélioration, une reconnaissance progressive ou une opportunité correspondant davantage à vos aspirations."
  },
  {
    id: 18,
    name: "La Lune",
    image: "/tarot/tarot_lune.png",
    keywords: ["intuition", "émotions", "incertitude"],
    shortMeaning:
      "La Lune évoque une période où tout n'est pas encore parfaitement clair. Écoutez votre intuition, mais prenez le temps de vérifier vos impressions avant de décider.",
    loveMeaning:
      "En amour, La Lune indique des émotions fortes mais parfois confuses. Les non-dits, les peurs ou les projections peuvent compliquer la relation. Évitez de tirer des conclusions trop rapidement.",
    workMeaning:
      "Au travail, La Lune conseille la prudence. Certaines informations peuvent être incomplètes ou difficiles à interpréter. Vérifiez les faits avant de prendre une décision importante."
  },
  {
    id: 19,
    name: "Le Soleil",
    image: "/tarot/tarot_soleil.png",
    keywords: ["réussite", "joie", "clarté"],
    shortMeaning:
      "Le Soleil est une carte très positive. Il évoque la réussite, la compréhension et des relations plus chaleureuses. Une situation peut devenir beaucoup plus claire.",
    loveMeaning:
      "Le Soleil est particulièrement favorable en amour. Il annonce la complicité, la joie, la sincérité et une relation dans laquelle les sentiments peuvent s'exprimer plus librement.",
    workMeaning:
      "Professionnellement, Le Soleil annonce une période favorable. Une réussite, une reconnaissance ou une collaboration positive peut vous permettre d'avancer avec confiance."
  },
  {
    id: 20,
    name: "Le Jugement",
    image: "/tarot/tarot_jugement.png",
    keywords: ["prise de conscience", "nouveau départ", "décision"],
    shortMeaning:
      "Le Jugement correspond à une prise de conscience ou à un appel au changement. Une décision importante peut vous permettre d'ouvrir une nouvelle étape.",
    loveMeaning:
      "En amour, Le Jugement peut annoncer un échange décisif, un retour de contact ou une prise de conscience importante. Une relation peut repartir sur de nouvelles bases.",
    workMeaning:
      "Au travail, Le Jugement signale souvent une nouvelle, une réponse ou une décision qui fait évoluer la situation. Une opportunité peut vous pousser à changer de direction."
  },
  {
    id: 21,
    name: "Le Monde",
    image: "/tarot/tarot_monde.png",
    keywords: ["accomplissement", "réussite", "aboutissement"],
    shortMeaning:
      "Le Monde symbolise l'accomplissement et l'aboutissement d'un cycle. Vos efforts peuvent porter leurs fruits et vous permettre de passer à une nouvelle étape.",
    loveMeaning:
      "En amour, Le Monde est une carte très favorable. Elle évoque une relation équilibrée, un sentiment d'accomplissement ou la possibilité d'entrer dans une nouvelle étape plus épanouissante.",
    workMeaning:
      "Professionnellement, Le Monde indique la réussite et l'aboutissement. Un projet peut arriver à maturité, une reconnaissance peut être obtenue ou une nouvelle étape peut s'ouvrir."
  }
];