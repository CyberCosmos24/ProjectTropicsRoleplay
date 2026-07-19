/* Central source of truth for replaceable community content and assets. */
const SITE_CONFIG = Object.freeze({
  community: {
    name: "Project Tropics Roleplay",
    shortName: "PTRP",
    copyrightYear: "2026",
    tagline: "Creating immersive, realistic, and community-driven FiveM roleplay experiences."
  },
  links: { discord: "", cad: "", tiktok: "", youtube: "" },
  applications: { sast: "", bcso: "", lspd: "", safr: "", sadot: "" },
  assets: {
    logo: "assets/branding/logo.svg",
    favicon: "assets/branding/favicon.svg",
    backgrounds: Object.fromEntries(["home", "civilian", "sast", "bcso", "lspd", "safr", "sadot"].map(key => [key, `assets/backgrounds/${key}-hero.svg`])),
    departmentLogos: Object.fromEntries(["sast", "bcso", "lspd", "safr", "sadot"].map(key => [key, `assets/departments/${key}-logo.svg`]))
  },
  departments: {
    sast: { name: "San Andreas State Troopers", abbr: "SAST", tagline: "Professional service and statewide public safety.", description: "Statewide highway enforcement, public safety, and coordinated law enforcement roleplay.", patrol: "Statewide", patrolDescription: "San Andreas State Troopers have statewide jurisdiction and may patrol highways, cities, counties, rural areas, and other locations throughout San Andreas." },
    bcso: { name: "Blaine County Sheriff’s Office", abbr: "BCSO", tagline: "Serving Blaine County with integrity and professionalism.", description: "Community-centered law enforcement serving the rural communities of Blaine County.", patrol: "Blaine County", patrolDescription: "The Blaine County Sheriff’s Office primarily serves Blaine County, including rural communities, county roads, towns, and unincorporated areas." },
    lspd: { name: "Los Santos Police Department", abbr: "LSPD", tagline: "Dedicated service in the heart of Los Santos.", description: "Organized urban policing and responsive public safety within Los Santos.", patrol: "City of Los Santos", patrolDescription: "The Los Santos Police Department primarily serves the City of Los Santos and handles law enforcement operations within the city." },
    safr: { name: "San Andreas Fire & Rescue", abbr: "SAFR", tagline: "Fire and EMS professionals serving every emergency.", description: "Professional Fire and EMS response, rescue operations, and community care." },
    sadot: { name: "San Andreas Department of Transportation", abbr: "SADOT", tagline: "Keeping San Andreas moving safely.", description: "Roadside assistance, recovery, and transportation support across San Andreas." }
  }
});

const SITE_CONTENT = Object.freeze({
  homeFeatures: [
    ["🚘", "200+ Vehicles", "Explore more than 200 civilian, emergency services, and department vehicles available throughout the community."],
    ["🤝", "Active Community", "Join an active and welcoming community with regular roleplay sessions, community events, and opportunities to participate."],
    ["🛡️", "Realistic Departments", "Our emergency services and transportation departments provide organized, realistic, and enjoyable roleplay experiences."],
    ["🏪", "Player-Operated Businesses", "Apply to own, manage, or work for player-operated businesses that create new opportunities throughout the community."],
    ["📈", "Active Leadership and Leadership Paths", "Our active leadership team supports community operations while providing opportunities for members to grow into department, staff, and community leadership positions."],
    ["↻", "Constant Updates", "Project Tropics Roleplay regularly receives new vehicles, features, scripts, department improvements, and community updates."]
  ],
  subdivisions: [
    ["⚓", "Marine Unit", "Handles water-based patrols, boating incidents, water rescues, and enforcement operations throughout the state’s waterways."],
    ["🧭", "Search and Rescue", "Responds to missing persons, wilderness emergencies, difficult terrain incidents, and rescue operations."],
    ["🚁", "Air Support Unit", "Provides aerial observation, pursuit assistance, search operations, scene coordination, and emergency support."],
    ["🛡️", "Emergency Response Team", "Responds to high-risk incidents requiring specialized tactics, equipment, and coordinated law enforcement operations."],
    ["🔎", "Criminal Investigations Division", "Investigates serious crimes, gathers evidence, conducts interviews, and develops criminal cases."],
    ["🎓", "Field Training Program", "Trains new personnel, evaluates department members, and ensures personnel understand department policies and procedures."]
  ],
  civilianFeatures: [
    ["💳", "Economy", "Experience an integrated economy system designed to support realistic civilian roleplay.", ["Personal Bank Accounts", "Shared Bank Accounts", "Stock Market", "Financial Transactions", "Investments", "And More"]],
    ["🏪", "Businesses", "Apply to own, manage, or work for player-operated businesses throughout San Andreas. Members can help operate businesses, serve customers, manage employees, and create new roleplay opportunities throughout the community."],
    ["🚗", "200+ Civilian Vehicles", "Choose from an extensive selection of more than 200 civilian vehicles, including everyday vehicles, trucks, luxury vehicles, and performance vehicles."],
    ["🧰", "Custom Roleplay Scripts", "Project Tropics Roleplay features a growing collection of scripts designed to create immersive and realistic interactions. From repairing vehicles to capturing scenes and using interactive tools, these systems help bring civilian roleplay to life.", ["Mechanic System", "Camera System", "Drone System", "Emotes", "And More"]],
    ["👋", "Extensive Emote Menu", "Express your character through a large collection of emotes and animations for conversations, activities, work, social interactions, and realistic roleplay scenarios."],
    ["🌴", "Endless Civilian Opportunities", "Create your own unique story through player-operated businesses, community events, custom scripts, vehicles, and everyday civilian interactions."]
  ]
});
