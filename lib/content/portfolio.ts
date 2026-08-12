export type ProcessBeforeAfter = {
  beforeImage?: string
  beforeImages?: WebsiteShowcaseImage[]
  afterImage?: string
  afterImages?: WebsiteShowcaseImage[]
  beforeImageWidth?: number
  beforeImageHeight?: number
  afterImageWidth?: number
  afterImageHeight?: number
  beforeLabel?: string
  afterLabel?: string
  beforeAlt?: string
  afterAlt?: string
  whatChanged: string
  whyChanged: string
}

export type WebsiteShowcaseImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export type ProcessStep = {
  title: string
  description: string
  artifact: string
  beforeAfter?: ProcessBeforeAfter
}

export type OutcomeItem = {
  title: string
  description: string
}

export type OutcomeComparison = {
  title: string
  figmaHref?: string
  figmaLabel?: string
  websiteHref?: string
  websiteLabel?: string
  beforeAfter: ProcessBeforeAfter
}

export type WebsiteShowcasePage = {
  title: string
  image?: string
  images?: WebsiteShowcaseImage[]
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
  openHref?: string
  placeholderGradient?: string
}

export type ScreenDesign = {
  src: string
  alt: string
  label?: string
  width: number
  height: number
}

export type ScreenDesignsLayout = "flow" | "iphone-scroll"

export type QuantitativeResearch = {
  title?: string
  description: string
  observationsHeading?: string
  observations: {
    value: string
    description: string
  }[]
}

export type CaseStudy = {
  slug: string
  title: string
  tagline: string
  summary: string
  projectType: "Design" | "Re-Design"
  role: string
  duration: string
  team: string
  context: string
  problem: string
  processSteps: ProcessStep[]
  processTitle?: string
  processDescription?: string
  keyDecisionsTitle?: string
  keyDecisionsDescription?: string
  keyDecisions: {
    title: string
    description: string
    impact?: string
  }[]
  outcomesTitle?: string
  outcomesDescription?: string
  outcomes: OutcomeItem[]
  outcomeComparisons?: OutcomeComparison[]
  showcasePages?: WebsiteShowcasePage[]
  showcaseTitle?: string
  showcaseDescription?: string
  screenDesigns?: ScreenDesign[]
  screenDesignsTitle?: string
  screenDesignsDescription?: string
  screenDesignsLayout?: ScreenDesignsLayout
  screenDesignsFigmaHref?: string
  screenDesignsFigmaLabel?: string
  reportPdfHref?: string
  screenDesignsLinks?: {
    href: string
    label: string
  }[]
  screenDesignsSupportingImages?: (ScreenDesign & {
    title?: string
  })[]
  reflectionTitle?: string
  reflection: string
  reflectionNextSteps?: string[]
  reflectionQuote?: string
  status: string
  coverStyle?: string
  overviewHighlights: {
    label: string
    value: string
  }[]
  quantitativeResearch?: QuantitativeResearch
}

export type InteriorProductLayout = "featured" | "wide" | "tall" | "standard"

export type InteriorProduct = {
  id: string
  workSlug: string
  name: string
  category: string
  material: string
  dimensions?: string
  description: string
  image?: string
  imageAlt: string
  placeholderGradient?: string
  layout: InteriorProductLayout
}

export type OtherWork = {
  slug: string
  title: string
  tagline: string
  summary: string
  category: "Residential" | "Corporate" | "Retail"
  role: string
  period: string
  context: string
  approach: string
  highlights: {
    label: string
    value: string
  }[]
  contributions: string[]
  coverStyle?: string
  productShowcaseTitle?: string
  productShowcaseDescription?: string
}

export type OtherWorkGroup = {
  id: string
  title: string
  description?: string
  slugs: string[]
}

/** Drop interior project images into `public/other-works/<slug>/`. */
export function otherWorkAssetPath(slug: string, filename: string) {
  return `/other-works/${slug}/${filename}`
}

export type SiteProfile = {
  name: string
  title: string
  heroHeadline: string
  /** Short status next to the green dot (e.g. “Open to work”) */
  heroOpenToLabel: string
  /** Floating “+ …” labels beside the hero name */
  heroPills: readonly [string, string, string, string]
  about: string
  pullQuote: string
  editorialNote: string
  resumeSummary: string
  availability: string
  email: string
  phone?: string
  location?: string
  resumeHref: string
  resumePdfHref?: string
  linkedinHref?: string
}

export type AboutTextSegment = {
  text: string
  italic?: boolean
  bold?: boolean
}

export type AboutPhoto = {
  alt: string
  src?: string
  gradient: string
}

export type HeroPhoto = {
  src: string
  alt: string
}

export type AboutSectionContent = {
  eyebrow: string
  paragraphs: AboutTextSegment[][]
  photos: AboutPhoto[]
}

export type SkillTool = {
  id: string
  name: string
  src: string
}

export const skillTools: SkillTool[] = [
  { id: "figma", name: "Figma", src: "/skills/figma.svg" },
  { id: "indesign", name: "Adobe InDesign", src: "/skills/indesign.svg" },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    src: "/skills/illustrator.svg",
  },
  { id: "photoshop", name: "Adobe Photoshop", src: "/skills/photoshop.svg" },
  { id: "autocad", name: "AutoCAD", src: "/skills/autocad.svg" },
  {
    id: "google-slides",
    name: "Google Slides",
    src: "/skills/google-slides.svg",
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    src: "/skills/google-sheets.svg",
  },
  { id: "notion", name: "Notion", src: "/skills/notion.svg" },
  { id: "cursor", name: "Cursor", src: "/skills/cursor_light.svg" },
  { id: "codex", name: "Codex", src: "/skills/codex.svg" },
]

export const resumeQuickLook = {
  titlePrefix: "Background at a",
  titleAccent: "glance",
  subtitle:
    "A focused snapshot of UX, research, and spatial design experience.",
}

export const resumeSkillTags = [
  "User Research",
  "Usability Testing",
  "Information Architecture",
  "User Flows",
  "Wireframing",
  "Prototyping",
  "Interaction Design",
  "UI Design",
  "Design Systems",
  "Accessibility",
  "Heuristic Evaluation",
  "Journey Mapping",
  "Client Communication",
  "Cross-functional Collaboration",
  "Spatial Planning",
  "Technical Drawings",
  "Project Management",
] as const

export type ResumeSection = {
  title: string
  summary?: string
  items: {
    eyebrow: string
    title: string
    description: string
    bullets?: string[]
    href?: string
  }[]
}

export const profile: SiteProfile = {
  name: "Devi Priya Nalluri",
  title: "UX Designer",
  heroHeadline:
    "UX designer seeking internship and entry-level roles focused on research, information architecture, and usable product flows.",
  heroOpenToLabel: "Open to work",
  heroPills: ["UX Designer", "Product Design", "UX Research", "Spatial Design"],
  about:
    "I design product flows for moments where people need clarity fast: onboarding, service navigation, records, forms, and dense information spaces. I am looking for UX internship and entry-level roles where I can contribute research, interaction design, and careful storytelling on real product teams.",
  pullQuote:
    "I care about the small product decisions that help someone understand the next step, trust the interface, and move forward with confidence.",
  editorialNote:
    "This portfolio presents current UX case studies with clear context, research methods, design decisions, and honest project scope.",
  resumeSummary:
    "UX designer with 2+ years of design experience across digital and spatial projects. I use research, journey mapping, wireflows, prototyping, and usability evaluation to turn unclear workflows into structured product experiences.",
  availability: "Open to internships and UX roles",
  email: "nalluridevipriya@gmail.com",
  phone: "(469) 332-8900",
  location: "Tempe, AZ",
  resumeHref: "/resume",
  resumePdfHref: "/resume/devi-priya-nalluri-resume.pdf",
  linkedinHref: "https://www.linkedin.com/in/devi-priya-nalluri/",
}

export const aboutSection: AboutSectionContent = {
  eyebrow: "About Devi",
  paragraphs: [
    [{ text: "Namaste!", bold: true }],
    [
      { text: "I'm a " },
      { text: "UX designer", italic: true },
      {
        text: " who likes turning messy information into ",
      },
      { text: "usable flows", bold: true },
      { text: ", " },
      { text: "clear choices", bold: true },
      { text: ", and " },
      { text: "calmer moments", bold: true },
      {
        text: ". I study where people pause, what they miss, and what support they need to finish a task.",
      },
    ],
    [
      { text: "My background in " },
      { text: "interior design", italic: true },
      {
        text: " taught me to watch circulation, hierarchy, light, constraints, and how people behave inside a space. ",
      },
      { text: "UX design", italic: true },
      {
        text: " lets me apply the same thinking to screens, systems, and service journeys.",
      },
    ],
    [
      { text: "Whether I'm conducting " },
      { text: "research", italic: true },
      { text: ", mapping " },
      { text: "user journeys", italic: true },
      { text: ", designing " },
      { text: "interfaces", italic: true },
      { text: ", or refining " },
      { text: "interactions", italic: true },
      {
        text: ", I focus on the evidence behind each decision: what users need, what the interface must explain, and what can be removed.",
      },
    ],
    [
      { text: "I am looking for UX teams where I can contribute " },
      { text: "research synthesis", bold: true },
      { text: ", " },
      { text: "interaction design", bold: true },
      { text: ", and " },
      { text: "clear product storytelling", bold: true },
      { text: " while continuing to grow with feedback and real users." },
    ]
  ],
  photos: [
    {
      src: "/about/portrait.png",
      alt: "Portrait of Devi Priya Nalluri smiling outdoors",
      gradient: "from-[#c4b5a5] via-[#ddd3c8] to-[#ebe4dc]",
    },
    {
      src: "/about/tulip-garden.png",
      alt: "Standing in a field of purple and yellow tulips",
      gradient: "from-[#9a9088] via-[#bfb6ae] to-[#ddd8d2]",
    },
  ],
}

export const heroPhotos: HeroPhoto[] = [
  {
    src: "/about/portrait.png",
    alt: "Portrait of Devi Priya Nalluri smiling outdoors",
  },
  {
    src: "/about/neon-selfie.png",
    alt: "Selfie in a mirrored room with a neon heart light",
  },
  {
    src: "/about/festival-lights.png",
    alt: "Evening portrait near a tree wrapped in warm fairy lights",
  },
  {
    src: "/about/tulip-garden.png",
    alt: "Standing in a field of purple and yellow tulips",
  },
  {
    src: "/hero/childhood-portrait.png",
    alt: "Childhood portrait in a floral top and white trousers",
  },
  {
    src: "/hero/wedding-portrait.png",
    alt: "Portrait in a lavender saree beneath a floral arch",
  },
  {
    src: "/hero/dance-performance.png",
    alt: "Classical dance performance in a magenta costume",
  },
  {
    src: "/hero/traditional-portrait.png",
    alt: "Portrait in an orange traditional dress with silver jewelry",
  },
]

export const homeHighlights = [
  {
    label: "Focus",
    value:
      "Onboarding, service journeys, dashboards, and dense information flows.",
  },
  {
    label: "Approach",
    value:
      "Research-led framing, structured flows, usable prototypes, and clear tradeoffs.",
  },
  {
    label: "Stage",
    value: "Seeking UX internships and entry-level product design roles.",
  },
]

export const workingProcess: ProcessStep[] = [
  {
    title: "Frame the User Problem",
    description:
      "Clarify who is blocked, what they need to accomplish, and which assumptions need evidence.",
    artifact:
      "I turn early notes into a problem statement, target users, and testable research questions.",
  },
  {
    title: "Map the Journey",
    description:
      "Translate research notes into visible flows so task order, missing context, and decision points are easier to evaluate.",
    artifact:
      "Typical artifacts include journey maps, wireflows, content hierarchies, and task breakdowns.",
  },
  {
    title: "Prototype for Feedback",
    description:
      "Use low-to-mid fidelity screens to make structure, copy, and interaction choices easier to critique.",
    artifact:
      "I build prototypes that help teams discuss alternatives, test assumptions, and revise quickly.",
  },
  {
    title: "Reflect and Refine",
    description:
      "Capture what improved, what remains uncertain, and which evidence should guide the next iteration.",
    artifact:
      "That reflection turns process work into a case study with clear decisions and credible next steps.",
  },
]

const caseStudiesContent: CaseStudy[] = [
  {
    slug: "campus-connect-onboarding",
    title: "Healthcare Management App",
    tagline:
      "Designing a mobile health record flow for caregivers and patients who manage scattered medical information.",
    summary:
      "A mobile UX concept that brings prescriptions, lab reports, medication schedules, appointments, and emergency support into one organized care-management experience.",
    projectType: "Design",
    role: "UX research and product design",
    duration: "Academic concept project",
    team: "Team project with peer critique",
    context:
      "This project explored how caregivers and patients manage medical information across paper files, messaging apps, notes, and photo galleries, then translated those patterns into a centralized mobile experience.",
    problem:
      "Caregivers and patients need quick access to prescriptions, reports, medication reminders, and appointment details. When that information is scattered across formats, routine care takes more effort and urgent situations become harder to manage.",
    processTitle: "From scattered records to a clearer care-management flow.",
    processDescription:
      "The process combined user interviews, workflow analysis, paper prototyping, heuristic evaluation, and cognitive walkthroughs. Each step focused on retrieval speed, privacy, and support for shared caregiving tasks.",
    processSteps: [
      {
        title: "Identified fragmented healthcare workflows",
        description:
          "Research showed users storing prescriptions, reports, reminders, and appointment details across paper files, messaging apps, notes, and photo galleries.",
        artifact:
          "Outcome: Prioritized a single place to upload, label, retrieve, and share medical information.",
      },
      {
        title: "Mapped caregiver and patient journeys",
        description:
          "The team created caregiver and medical assistant personas to understand coordination needs, time pressure, and access patterns.",
        artifact:
          "Outcome: Shaped flows around family profiles, time-sensitive access, and repeat medication tasks.",
      },
      {
        title: "Explored multiple interaction directions through ideation",
        description:
          "Crazy 8 exercises and storyboards compared structures for medical documents, reminders, timelines, and emergency support.",
        artifact:
          "Outcome: Selected category-based navigation and timeline patterns that matched how users already organize care.",
      },
      {
        title: "Built low-fidelity and paper prototypes",
        description:
          "Paper prototypes and low-fidelity wireframes tested uploading records, viewing prescriptions, tracking medication, and managing appointments.",
        artifact:
          "Outcome: Validated navigation, hierarchy, and task sequence before high-fidelity design.",
      },
      {
        title: "Refined the experience through usability testing",
        description:
          "Heuristic evaluation and cognitive walkthroughs surfaced issues in navigation labels, hierarchy, spacing, and discoverability.",
        artifact:
          "Outcome: Guided updates to dashboard structure, record cards, feedback states, and navigation consistency.",
      },
    ],
    keyDecisionsTitle: "Design Decisions That Shaped the Healthcare Flow",
    keyDecisionsDescription:
      "The key decisions focused on quick recognition, shared caregiving, privacy, and consistent mobile patterns for sensitive healthcare tasks.",
    keyDecisions: [
      {
        title: "Centralized medical information into one system",
        description:
          "Medical documents, prescriptions, medications, appointments, and emergency information were grouped in one mobile system.",
        impact:
          "Supported faster retrieval during appointments, routine medication checks, and urgent care moments.",
      },
      {
        title: "Prioritized recognition over recall",
        description:
          "Dashboard layouts used category icons, cards, timeline views, and visual grouping to support scanning.",
        impact:
          "Helped users locate records through visible categories and recent activity.",
      },
      {
        title: "Designed for both caregivers and individual users",
        description:
          "The experience supported caregivers managing multiple family members and individuals managing their own care.",
        impact:
          "Created a flexible structure for family profiles, medication reminders, and appointment context.",
      },
      {
        title: "Used privacy-aware interaction patterns",
        description:
          "Reminder systems, medication notifications, and record views used discreet language and compact previews.",
        impact:
          "Made sensitive health tasks feel calmer in shared and public settings.",
      },
      {
        title: "Created a consistent mobile-first design system",
        description:
          "The interface used readable typography, structured spacing, reusable components, and simplified navigation.",
        impact:
          "Kept repeated tasks predictable across records, reminders, appointments, and emergency support.",
      },
    ],
    outcomesTitle: "What the Project Improved",
    outcomesDescription:
      "The project shows how a centralized mobile structure can make healthcare information easier to scan, retrieve, and act on during routine and urgent care.",
    outcomes: [
      {
        title: "Improved access to medical information",
        description:
          "Users could upload, organize, retrieve, and manage prescriptions, reports, medicines, and appointment histories from one place.",
      },
      {
        title: "Reduced cognitive load during healthcare tasks",
        description:
          "Categorized records, medication reminders, timeline tracking, and structured dashboards reduced the amount users had to remember.",
      },
      {
        title: "Created clearer medication management workflows",
        description:
          "Medication schedules, dosage details, reminders, and tracking cards made daily medication tasks easier to review.",
      },
      {
        title: "Improved user confidence through organized systems",
        description:
          "Testing indicated that timeline-based records and medicine cards were easy for participants to understand quickly.",
      },
      {
        title: "Supported both routine and emergency healthcare needs",
        description:
          "Emergency SOS, location sharing, and quick document retrieval extended the flow to time-sensitive healthcare needs.",
      },
    ],
    reflectionTitle: "What I Would Improve Next",
    reflection:
      "Next, I would test the prototype with caregivers, patients, and healthcare professionals to evaluate retrieval speed, accessibility, trust, and shared-account workflows in realistic care scenarios.",
    reflectionNextSteps: [
      "Testing the system across larger and more diverse healthcare user groups",
      "Improving accessibility compliance and readability standards",
      "Refining privacy controls for shared and public environments",
      "Expanding interoperability with hospitals and healthcare providers",
      "Measuring long-term effects on cognitive load and healthcare task efficiency",
    ],
    status: "Supporting UX concept",
    coverStyle: "from-[#f0d7c1] via-[#f8efe3] to-[#e2e0cf]",
    overviewHighlights: [
      {
        label: "Audience",
        value:
          "Caregivers, patients, and medical assistants managing prescriptions, records, appointments, and emergency healthcare information.",
      },
      {
        label: "Interaction focus",
        value:
          "Centralized medical records, medication reminders, timeline tracking, and privacy-aware healthcare coordination on mobile.",
      },
      {
        label: "Case study role",
        value:
          "Shows UX research, persona development, prototyping, and usability evaluation for a complex healthcare management problem.",
      },
      {
        label: "Honesty note",
        value:
          "Concept project based on interviews, ideation, and usability evaluation. Clinical outcomes and implementation metrics are outside this project scope.",
      },
    ],
    screenDesignsTitle: "Prototype Mockups",
    screenDesignsDescription:
      "A mobile healthcare management flow showing home, lab report, and lab test screens.",
    screenDesigns: [
      {
        src: "/work/campus-connect-onboarding/healthcare-prototype-flow-sr.png",
        alt: "Healthcare app prototype flow showing home, lab report, and all lab tests screens in iPhone mockups",
        label: "Healthcare app prototype flow",
        width: 3294,
        height: 3121,
      },
    ],
    screenDesignsFigmaHref:
      "https://www.figma.com/proto/o5URHoVTYsKHOPB1YODcdm/Healthcare-Management-App?node-id=1-767&p=f&viewport=288%2C283%2C0.08&t=oInVpXctVFv93Sw6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A767&page-id=0%3A1",
    screenDesignsFigmaLabel: "Open Figma Prototype",
    reportPdfHref:
      "/work/campus-connect-onboarding/healthcare-management-app-report.pdf",
  },
  {
    slug: "neighborly-pantry-flow",
    title: "Arizona Science Center Website Redesign",
    tagline:
      "Improving navigation, exhibit discovery, and ticket booking through usability testing with 9 participants.",
    summary:
      "A research-led website redesign for Arizona Science Center. The project used moderated usability testing, heuristic evaluation, and content restructuring to improve exhibit discovery, FAQ access, mobile navigation, and ticket purchasing.",
    projectType: "Re-Design",
    role: "UX designer and researcher",
    duration: "Short UX redesign study",
    team: "Solo",
    context:
      "This redesign study evaluated the Arizona Science Center website through moderated usability testing, accessibility review, and interface analysis. The work focused on visit planning tasks: finding exhibits, locating FAQs, using mobile navigation, and buying tickets.",
    problem:
      "Visitors had trouble finding key planning information, comparing exhibits, understanding ticket options, and completing checkout. Testing showed low task success, unclear FAQ/refund paths, mobile menu issues, and unreliable search results.",
    quantitativeResearch: {
      title: "Quantitative Research With 9 Participants",
      description:
        "We conducted moderated usability testing with **9 participants** across navigation, ticket purchasing, information discovery, FAQ access, search, and mobile usability. The study measured task success rates, repeated usability issues, and user behavior across core visit-planning journeys.",
      observationsHeading: "Observations",
      observations: [
        {
          value: "62%",
          description:
            "**61.6% overall task success rate** across common visitor tasks.",
        },
        {
          value: "100%",
          description:
            "**100% of participants struggled to locate FAQs and refund information**, making support content a critical information architecture issue.",
        },
        {
          value: "67%",
          description:
            "**66.7% of participants had difficulty with ticket purchasing**, including cart actions and ticket type comprehension.",
        },
        {
          value: "78%",
          description:
            "**77.8% of participants encountered mobile menu issues** related to responsiveness and discoverability.",
        },
        {
          value: "100%",
          description:
            "**100% of participants reported irrelevant search results** while looking for exhibits, FAQs, and support content.",
        },
      ],
    },
    processTitle: "From usability findings to clearer visit planning.",
    processDescription:
      "The redesign translated observed task failures into changes across navigation, content hierarchy, exhibit browsing, ticket selection, and system feedback.",
    processSteps: [
      {
        title: "Identified high-friction user tasks",
        description:
          "Focused on the tasks where participants struggled most: ticket selection, FAQ discovery, exhibit comparison, event timing, search, and mobile navigation.",
        artifact:
          "Outcome: Prioritized the pages and flows tied to low task success and repeated hesitation.",
      },
      {
        title: "Restructured navigation and information hierarchy",
        description:
          "Used card sorting and observed mental models to reorganize navigation labels, homepage sections, and exhibition categories.",
        artifact:
          "Outcome: Moved key visit-planning content into easier-to-find navigation and page sections.",
      },
      {
        title: "Simplified the ticket purchasing flow",
        description:
          "Redesigned ticket selection as a guided flow with clearer ticket types, visible inclusions, fewer unclear actions, and supportive microcopy.",
        artifact:
          "Outcome: Reduced uncertainty during ticket comparison, cart review, and checkout.",
      },
      {
        title: "Created consistent exhibition browsing experiences",
        description:
          "Standardized exhibition pages so visitors could scan descriptions, timing, interaction type, and educational content in a predictable order.",
        artifact:
          "Outcome: Made exhibits easier to compare across list and detail pages.",
      },
      {
        title: "Improved clarity through system feedback and guidance",
        description:
          "Added confirmation screens, payment guidance, refund context, and checkout messaging at decision points.",
        artifact:
          "Outcome: Made key actions feel more predictable during ticket purchase.",
      },
    ],
    keyDecisionsTitle: "Design Decisions Backed by Testing",
    keyDecisionsDescription:
      "The strongest redesign moves came directly from the 9-participant usability study: support content needed clearer paths, ticketing needed guidance, and exhibit pages needed a predictable structure.",
    keyDecisions: [
      {
        title: "Reduced confusion through clearer navigation",
        description:
          "Navigation labels and homepage categories were reorganized around visitor planning tasks.",
        impact:
          "Exhibits, events, films, tickets, FAQs, and support content became easier to locate from primary page areas.",
      },
      {
        title: "Prioritized important information earlier in the experience",
        description:
          "Exhibit details, timings, ticket inclusions, FAQs, and refund information were surfaced earlier in the page hierarchy.",
        impact: "Reduced scanning effort for common visit-planning decisions.",
      },
      {
        title: "Simplified the ticket purchasing process",
        description:
          "The ticket flow became a structured sequence with clearer ticket types, visible inclusions, fewer ambiguous steps, and support copy.",
        impact:
          "Helped visitors understand what they were buying before payment.",
      },
      {
        title: "Created consistent exhibition structures",
        description:
          "Exhibition pages used a unified layout for descriptions, interaction type, educational content, and supporting resources.",
        impact: "Made exhibit comparison easier across the browsing flow.",
      },
      {
        title: "Improved reassurance through system feedback",
        description:
          "Confirmation messages, payment disclaimers, and contextual guidance were added throughout checkout.",
        impact: "Reduced hesitation at purchase and confirmation moments.",
      },
    ],
    outcomesTitle: "What the Redesign Improved",
    outcomesDescription:
      "The redesign addresses the major usability issues found in testing: navigation clarity, ticket purchasing, exhibit browsing, mobile discovery, search alternatives, and support content access.",
    outcomes: [
      {
        title: "Improved navigation and information discovery",
        description:
          "Reorganized navigation and homepage sections created clearer paths to exhibits, events, tickets, FAQs, and refund content.",
      },
      {
        title: "Reduced friction during ticket purchasing",
        description:
          "The revised ticket flow clarified ticket types, inclusions, cart actions, and checkout steps.",
      },
      {
        title: "Created a more consistent browsing experience",
        description:
          "Exhibition pages followed a unified structure for scanning, comparing, and understanding exhibit options.",
      },
      {
        title: "Improved trust through clearer system feedback",
        description:
          "Confirmation states, disclaimers, and supportive microcopy made purchase steps easier to understand.",
      },
    ],
    outcomeComparisons: [
      {
        title: "Homepage & navigation",
        websiteHref: "https://www.azscience.org/",
        websiteLabel: "Arizona Science Center Website",
        figmaHref:
          "https://www.figma.com/design/zctEWyruHMVh4V6awsAv9H/Arizona-Science-Center-Website-Redesign?node-id=0-1",
        figmaLabel: "Open Figma Prototype",
        beforeAfter: {
          beforeImage: "/work/arizona-science-center/homepage-existing.png",
          afterImage: "/work/arizona-science-center/homepage-after.png",
          beforeAlt: "Original Arizona Science Center homepage",
          afterAlt: "Redesigned homepage with clearer navigation",
          beforeLabel: "Existing design",
          afterLabel: "Redesign",
          whatChanged:
            "Reorganized navigation labels, homepage categories, and exhibition discovery paths based on card sorting and usability findings.",
          whyChanged:
            "Participants struggled to find exhibits, events, tickets, FAQs, and refund information from primary navigation paths.",
        },
      },
      {
        title: "Exhibition browsing page",
        websiteHref: "https://www.azscience.org/experience/all-exhibitions/",
        websiteLabel: "All Exhibitions",
        figmaHref:
          "https://www.figma.com/design/zctEWyruHMVh4V6awsAv9H/Arizona-Science-Center-Website-Redesign?node-id=0-1",
        figmaLabel: "Open Figma Prototype",
        beforeAfter: {
          beforeImage:
            "/work/arizona-science-center/all-exhibitions-existing.png",
          beforeImages: [
            {
              src: "/work/arizona-science-center/all-exhibitions-existing.png",
              alt: "Original Arizona Science Center All Exhibitions page with embedded videos",
              width: 1834,
              height: 8192,
            },
            {
              src: "/work/arizona-science-center/cavescape-existing.png",
              alt: "Original Arizona Science Center CaveScape exhibition detail page",
              width: 3052,
              height: 8192,
            },
            {
              src: "/work/arizona-science-center/all-about-me-existing.png",
              alt: "Original Arizona Science Center All About Me exhibition detail page",
              width: 2412,
              height: 8192,
            },
          ],
          beforeImageWidth: 1834,
          beforeImageHeight: 8192,
          beforeAlt: "Original Arizona Science Center All Exhibitions page",
          afterImage: "/work/arizona-science-center/exhibition-page-after.png",
          afterImages: [
            {
              src: "/work/arizona-science-center/exhibition-page-after.png",
              alt: "Redesigned Arizona Science Center All Exhibitions page",
              width: 1440,
              height: 5504,
            },
            {
              src: "/work/arizona-science-center/featured-exhibit-redesign.png",
              alt: "Redesigned Arizona Science Center featured exhibit detail page",
              width: 2880,
              height: 4106,
            },
            {
              src: "/work/arizona-science-center/all-about-me-redesign.png",
              alt: "Redesigned Arizona Science Center All About Me exhibit detail page",
              width: 2880,
              height: 7374,
            },
          ],
          afterImageWidth: 1440,
          afterImageHeight: 5504,
          afterAlt: "Redesigned exhibition page with unified layout",
          beforeLabel: "Existing design",
          afterLabel: "Redesign",
          whatChanged:
            "Standardized exhibition layouts with consistent placement of descriptions, timings, interaction types, and educational content.",
          whyChanged:
            "Fragmented page structures increased scanning effort and made exhibit comparison harder.",
        },
      },
      {
        title: "Ticket purchasing flow",
        websiteHref: "https://www.azscience.org/buy-tickets/",
        websiteLabel: "Buy Tickets",
        figmaHref:
          "https://www.figma.com/design/zctEWyruHMVh4V6awsAv9H/Arizona-Science-Center-Website-Redesign?node-id=0-1",
        figmaLabel: "Open Figma Prototype",
        beforeAfter: {
          beforeImage: "/work/arizona-science-center/buy-tickets-existing.png",
          beforeAlt: "Original Arizona Science Center Buy Tickets page",
          afterImage:
            "/work/arizona-science-center/ticket-flow-after-display.png",
          afterImages: [
            {
              src: "/work/arizona-science-center/ticket-flow-after-display.png",
              alt: "Redesigned Arizona Science Center ticket selection flow",
              width: 1600,
              height: 4032,
            },
            {
              src: "/work/arizona-science-center/ticket-payment-redesign.png",
              alt: "Redesigned Arizona Science Center ticket payment page",
              width: 2880,
              height: 3736,
            },
            {
              src: "/work/arizona-science-center/ticket-confirmation-redesign.png",
              alt: "Redesigned Arizona Science Center ticket confirmation page",
              width: 2880,
              height: 3736,
            },
          ],
          afterImageWidth: 1600,
          afterImageHeight: 4032,
          afterAlt: "Redesigned step-by-step ticket purchasing flow",
          beforeLabel: "Existing design",
          afterLabel: "Redesign",
          whatChanged:
            "Restructured checkout into a guided step-by-step flow with clearer ticket types, inclusions, and support copy.",
          whyChanged:
            "Testing showed confusion around ticket options and checkout steps, especially during cart and payment tasks.",
        },
      },
    ],
    reflectionTitle: "What I Would Improve Next",
    reflection:
      "Next, I would run a follow-up usability test on the redesign, compare task success against the original baseline, and complete a deeper WCAG review across mobile and desktop breakpoints.",
    reflectionNextSteps: [
      "Measuring task completion improvements after redesign",
      "Testing navigation discoverability across different user groups",
      "Refining mobile interactions for quicker access to visitor information",
      "Iterating further on accessibility, guidance, and system feedback patterns",
    ],
    status: "Featured UX case study",
    coverStyle: "from-[#d6dcc4] via-[#f4efe2] to-[#ead2be]",
    overviewHighlights: [
      {
        label: "Audience",
        value:
          "Families, students, tourists, and returning visitors planning visits, exploring exhibitions, and purchasing tickets online.",
      },
      {
        label: "Core lens",
        value:
          "Usability, information clarity, intuitive navigation, accessibility, and reducing cognitive load during high-friction tasks.",
      },
      {
        label: "Format",
        value:
          "Focused redesign of high-friction website pages identified through usability testing, heuristic evaluation, and IA review.",
      },
      {
        label: "Strength shown",
        value:
          "Usability testing, research synthesis, information architecture, interaction design, and evidence-led redesign decisions.",
      },
    ],
  },
  {
    slug: "focus-flow-habit-loop",
    title: "Admin Dashboard & Ad Management Portal",
    tagline:
      "Structuring moderation and campaign workflows for a teen-focused social platform.",
    summary:
      "A systems UX project for an internal moderation dashboard and ad management portal. The work focused on queue visibility, escalation context, campaign setup, approval states, and operational decision-making.",
    projectType: "Re-Design",
    role: "UX designer and researcher",
    duration: "Academic concept project",
    team: "Solo",
    context:
      "This project explored how internal teams could review flagged content, understand moderation context, manage campaigns, and track approval states from a centralized operational dashboard.",
    problem:
      "Moderation and advertising tasks were fragmented across unclear workflows. Internal teams needed faster access to flagged content, review context, escalation paths, campaign setup details, and performance visibility.",
    processTitle:
      "From fragmented operations to structured dashboard workflows.",
    processDescription:
      "The process used workflow analysis, journey mapping, dashboard hierarchy, and prototype iteration to organize high-priority moderation and campaign management tasks.",
    processSteps: [
      {
        title: "Identified high-friction moderation tasks",
        description:
          "Mapped the areas with the highest operational complexity: flagged content review, user reports, escalation paths, and moderation status visibility.",
        artifact:
          "Outcome: Prioritized workflows that affected review speed, context gathering, and escalation decisions.",
      },
      {
        title: "Restructured dashboard information hierarchy",
        description:
          "Grouped analytics, alerts, queues, reports, campaign status, and performance data by task priority.",
        artifact:
          "Outcome: Made urgent actions easier to identify in a dense dashboard environment.",
      },
      {
        title: "Simplified campaign management flows",
        description:
          "Redesigned campaign setup into a step-by-step flow for targeting, scheduling, approvals, and analytics review.",
        artifact:
          "Outcome: Clarified campaign state, next action, and performance context for ad managers.",
      },
      {
        title: "Created consistent system structures",
        description:
          "Designed reusable dashboard layouts, moderation patterns, status modules, and analytics components.",
        artifact:
          "Outcome: Created a consistent structure across moderation and advertising workflows.",
      },
      {
        title: "Improved clarity through contextual guidance",
        description:
          "Added clearer review context, campaign states, status labels, and guidance near decision points.",
        artifact:
          "Outcome: Helped moderators and ad managers understand what changed, what needed review, and what action came next.",
      },
    ],
    keyDecisionsTitle: "Design Decisions for Operational Clarity",
    keyDecisionsDescription:
      "The main design decisions focused on high-risk moderation, campaign workflow visibility, dashboard scanability, and reusable structures for operational tools.",
    keyDecisions: [
      {
        title: "Prioritized high-risk moderation actions",
        description:
          "Critical alerts, flagged content, and AI-supported review indicators were surfaced earlier in dashboard layouts.",
        impact:
          "Helped moderators identify urgent cases and review supporting context faster.",
      },
      {
        title: "Reduced cognitive load across dashboards",
        description:
          "Operational tasks were separated into clearer groups for queues, analytics, reports, campaigns, and approvals.",
        impact: "Improved scanability during high-volume dashboard review.",
      },
      {
        title: "Improved campaign workflow transparency",
        description:
          "Campaign approvals, targeting configurations, scheduling, and performance tracking became visible throughout the flow.",
        impact: "Helped ad managers understand campaign state and next action.",
      },
      {
        title: "Created consistent system patterns",
        description:
          "Reusable layouts, navigation structures, analytics modules, and moderation components were introduced across screens.",
        impact: "Supported consistency across related operational workflows.",
      },
      {
        title: "Balanced safety with platform operations",
        description:
          "The system connected safety review, advertiser workflows, and platform governance needs in one operational model.",
        impact:
          "Made the dashboard useful for moderation decisions and campaign operations.",
      },
    ],
    screenDesigns: [
      {
        src: "/work/litteen-social/screen-design-flow.png",
        alt: "LitTeen Social moderation flow showing dashboard preview, security alert review, and removal reason selection",
        width: 1024,
        height: 718,
      },
    ],
    screenDesignsFigmaHref:
      "https://www.figma.com/proto/llMj8QoMoYEqVEjevc8U6j/Admin-Dashboard---Ad-Management-Portal?page-id=0%3A1&node-id=8-8494&p=f&viewport=-1735%2C132%2C0.74&t=nRsP7s0SWsZUlTTk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A8494",
    screenDesignsFigmaLabel: "Open Figma Prototype",
    reportPdfHref: "/work/litteen-social/technical-report.pdf",
    screenDesignsLinks: [
      {
        href: "https://www.figma.com/proto/llMj8QoMoYEqVEjevc8U6j/Admin-Dashboard---Ad-Management-Portal?page-id=0%3A1&node-id=29-479&p=f&viewport=-1735%2C132%2C0.74&t=nRsP7s0SWsZUlTTk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=29%3A479&show-proto-sidebar=1",
        label: "Open Ad Management Prototype",
      },
    ],
    screenDesignsSupportingImages: [
      {
        src: "/work/litteen-social/ad-management-portal-flow.png",
        alt: "Ad management portal dashboard flow showing campaign list, campaign performance, and campaign details screens connected with arrows",
        label: "Ad Management Portal flow",
        title: "Ad Manager Dashboard",
        width: 8256,
        height: 5338,
      },
    ],
    outcomesTitle: "What the Redesign Improved",
    outcomesDescription:
      "The redesign shows how internal dashboard structure can support faster review, clearer status visibility, and more predictable campaign management.",
    outcomes: [
      {
        title: "Improved moderation visibility",
        description:
          "Moderators could access flagged content, alerts, reports, and user activity from a centralized review surface.",
      },
      {
        title: "Reduced friction during campaign management",
        description:
          "The advertising workflow clarified campaign setup, targeting, scheduling, approval state, and performance review.",
      },
      {
        title: "Created a more consistent dashboard experience",
        description:
          "Dashboard screens followed shared interaction, layout, and status patterns.",
      },
      {
        title: "Improved transparency through clearer system feedback",
        description:
          "Moderation states, campaign approvals, analytics, and status indicators made workflows easier to track.",
      },
    ],
    reflectionTitle: "What I Would Improve Next",
    reflection:
      "Next, I would test the dashboard with people familiar with moderation, trust-and-safety review, and ad operations to evaluate review speed, decision confidence, and dashboard scanability.",
    reflectionNextSteps: [
      "Testing dashboard usability across different operational roles",
      "Refining alert prioritization and escalation systems",
      "Expanding accessibility reviews for dense dashboard environments",
      "Improving responsive behavior across tablet and mobile workflows",
      "Iterating further on analytics filtering, reporting systems, and moderation guidance patterns",
    ],
    status: "Supporting systems case study",
    coverStyle: "from-[#e9dac7] via-[#f7f2e8] to-[#d9ddd2]",
    overviewHighlights: [
      {
        label: "Audience",
        value:
          "Platform moderation admins, digital ad managers, and ad platform success managers responsible for content review, campaign management, and advertiser support workflows.",
      },
      {
        label: "Interaction focus",
        value:
          "Moderation systems, campaign workflows, status visibility, and decision-support patterns for dense operational tools.",
      },
      {
        label: "Case study role",
        value:
          "Shows systems-focused UX work involving dashboard design, moderation workflows, information hierarchy, and operational tooling.",
      },
      {
        label: "Honesty note",
        value:
          "Conceptual academic project based on UX research, workshops, and prototype exploration. Business metrics and implementation outcomes are outside this project scope.",
      },
    ],
  },
]

const caseStudyDisplayOrder = [
  "neighborly-pantry-flow",
  "campus-connect-onboarding",
  "focus-flow-habit-loop",
] as const

export const caseStudies: CaseStudy[] = caseStudyDisplayOrder
  .map((slug) =>
    caseStudiesContent.find((caseStudy) => caseStudy.slug === slug)
  )
  .filter((caseStudy): caseStudy is CaseStudy => caseStudy !== undefined)

export const otherWorks: OtherWork[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interior Design",
    tagline:
      "Designing calm, functional homes that reflect how people actually live.",
    summary:
      "Selected residential work focused on spatial planning, material palettes, and client-facing presentations that translate everyday needs into thoughtful interior environments.",
    category: "Residential",
    role: "Project Manager / Designer",
    period: "2022 – 2024",
    context:
      "Residential projects required balancing client aspirations with practical constraints around circulation, storage, lighting, and buildability across apartments and independent homes.",
    approach:
      "Work moved from requirement gathering and moodboards into layout development, technical drawings, vendor coordination, and site reviews to keep the finished space aligned with the original design intent.",
    highlights: [
      { label: "Space type", value: "Apartments and independent homes" },
      { label: "Core lens", value: "Function, comfort, and visual clarity" },
      {
        label: "Deliverables",
        value: "Layouts, moodboards, and working drawings",
      },
      {
        label: "Strength shown",
        value: "Client communication and design translation",
      },
    ],
    contributions: [
      "Translated client briefs into spatial layouts that improved circulation, storage, and day-to-day usability.",
      "Developed moodboards and presentation materials to help clients visualize finishes, furniture direction, and overall atmosphere.",
      "Prepared technical drawings and specifications that supported smoother coordination between design and on-site execution.",
      "Participated in client meetings to capture feedback and keep layout decisions moving.",
    ],
    coverStyle: "from-[#ddd0c4] via-[#f3ebe3] to-[#d8cfc4]",
    productShowcaseTitle: "Objects and finishes from residential projects",
    productShowcaseDescription:
      "Furniture, storage, and surface selections developed alongside layouts—each piece chosen for daily use, maintenance, and how light reads across the room.",
  },
  {
    slug: "apartment-interiors",
    title: "Apartment Interior Design",
    tagline:
      "Making compact urban homes feel open, organized, and easy to live in every day.",
    summary:
      "Apartment-focused work emphasizing efficient layouts, built-in storage, and finish palettes for smaller footprints that still feel open and personal.",
    category: "Residential",
    role: "Project Manager / Designer",
    period: "2022 – 2023",
    context:
      "Apartment clients often needed clearer zoning between work, rest, and entertaining within a single open plan, plus storage that preserved floor area.",
    approach:
      "Projects started with lifestyle interviews and existing-condition surveys, then moved into space-planning options, 3D visualizations for client sign-off, and detailed joinery drawings for compact kitchens and bedrooms.",
    highlights: [
      { label: "Space type", value: "Urban apartments and compact flats" },
      { label: "Core lens", value: "Storage, light, and multi-use zones" },
      {
        label: "Deliverables",
        value: "Layouts, joinery details, and finish schedules",
      },
      {
        label: "Strength shown",
        value: "Constraint-led spatial problem solving",
      },
    ],
    contributions: [
      "Reorganized open-plan apartments into clearer work, dining, and rest zones while preserving openness.",
      "Specified built-in wardrobes and kitchen modules sized to millimeter tolerances for tighter construction sites.",
      "Curated lighter material palettes and lighting layers to amplify daylight in north-facing units.",
      "Coordinated with contractors on snag lists and finish samples so handover matched approved visuals.",
    ],
    coverStyle: "from-[#d4c8bc] via-[#f0e8e0] to-[#c9bfb3]",
    productShowcaseTitle: "Compact living objects and surfaces",
    productShowcaseDescription:
      "Seating, kitchen surfaces, and built-ins chosen for apartment scale—durability, maintenance, and how each piece reads in a smaller room.",
  },
  {
    slug: "corporate-workspaces",
    title: "Corporate Office Interiors",
    tagline:
      "Creating workplace environments that support focus, collaboration, and brand identity.",
    summary:
      "Office interior work spanning planning, documentation, and site coordination for professional environments that needed clearer zoning and stronger spatial hierarchy.",
    category: "Corporate",
    role: "Designer",
    period: "2021 – 2023",
    context:
      "Corporate projects involved adapting layouts to different team sizes, meeting rhythms, and brand expressions while keeping MEP constraints and construction timelines in view.",
    approach:
      "Design development combined zoning studies, furniture planning, finish selections, and detailed documentation with regular site visits to validate progress against the approved intent.",
    highlights: [
      { label: "Space type", value: "Corporate offices and work hubs" },
      { label: "Core lens", value: "Workflow, zoning, and brand expression" },
      { label: "Deliverables", value: "Layouts, BOQs, and site documentation" },
      {
        label: "Strength shown",
        value: "Technical drawing and site accountability",
      },
    ],
    contributions: [
      "Designed office layouts with clearer zoning for focused work, collaboration, and shared support areas.",
      "Owned technical drawings and specifications that bridged design intent and on-site execution.",
      "Conducted site visits to review progress, resolve field issues, and maintain schedule alignment.",
      "Supported vendor communication and documentation to reduce delays during fit-out phases.",
    ],
    coverStyle: "from-[#c8ccd8] via-[#eceff4] to-[#d5d0c8]",
    productShowcaseTitle: "Workplace furniture and surface systems",
    productShowcaseDescription:
      "Zoning, acoustics, and brand expression translated into modular furniture, partitions, and reception details specified for build teams.",
  },
  {
    slug: "retail-commercial-spaces",
    title: "Retail & Commercial Spaces",
    tagline:
      "Shaping customer-facing environments with stronger circulation and visual impact.",
    summary:
      "Retail and commercial interior work exploring customer flow, display logic, and material storytelling for spaces that needed to feel inviting while staying operationally practical.",
    category: "Retail",
    role: "Project Manager / Designer",
    period: "2023 – 2024",
    context:
      "Retail-focused work required coordinating multiple stakeholders, translating business goals into spatial decisions, and keeping design quality intact through procurement and installation.",
    approach:
      "Projects combined concept development, client presentations, vendor negotiation, and on-site coordination across concurrent retail and commercial assignments.",
    highlights: [
      { label: "Space type", value: "Retail and commercial interiors" },
      { label: "Core lens", value: "Customer flow and brand presence" },
      {
        label: "Deliverables",
        value: "Concept decks, layouts, and vendor coordination",
      },
      { label: "Strength shown", value: "End-to-end project delivery" },
    ],
    contributions: [
      "Managed design delivery across concurrent retail and commercial projects from client conversations through final handoff.",
      "Built moodboards, graphics, and presentations that communicated design direction and supported new business conversations.",
      "Coordinated vendors, quotes, and on-site teams so the built result stayed faithful to the approved design.",
      "Balanced aesthetic decisions with operational needs like display visibility, storage, and maintenance access.",
    ],
    coverStyle: "from-[#dccfbf] via-[#f5ece1] to-[#cfc4b8]",
    productShowcaseTitle: "Display and customer-facing product moments",
    productShowcaseDescription:
      "Retail fixtures and commercial details designed for circulation, visibility, and the operational realities behind the finished space.",
  },
]

export const otherWorkGroups: OtherWorkGroup[] = [
  {
    id: "residential",
    title: "Residential projects",
    description:
      "Homes and apartments focused on circulation, storage, and calm material palettes.",
    slugs: ["residential-interiors", "apartment-interiors"],
  },
  {
    id: "commercial",
    title: "Commercial projects",
    description:
      "Workplace and retail environments balancing brand expression with day-to-day operations.",
    slugs: ["corporate-workspaces", "retail-commercial-spaces"],
  },
]

export const interiorProducts: InteriorProduct[] = [
  {
    id: "res-console",
    workSlug: "residential-interiors",
    name: "Modular storage console",
    category: "Storage",
    material: "Oak veneer · matte lacquer",
    dimensions: 'W 72" × D 16" × H 30"',
    description:
      "Low-profile console with concealed cable routing and adjustable shelving for living zones that needed quiet storage.",
    imageAlt: "Modular oak storage console in a residential living room",
    placeholderGradient: "from-[#c4b5a6] via-[#ebe3da] to-[#d8cfc4]",
    layout: "featured",
  },
  {
    id: "res-lounge",
    workSlug: "apartment-interiors",
    name: "Upholstered lounge chair",
    category: "Seating",
    material: "Linen blend · walnut frame",
    dimensions: 'W 32" × D 34" × H 31"',
    description:
      "Compact lounge form with a higher seat pitch for apartment living rooms where comfort had to coexist with tighter footprints.",
    imageAlt: "Upholstered lounge chair with walnut frame",
    placeholderGradient: "from-[#b8a99a] via-[#f0e8e0] to-[#d4c8bc]",
    layout: "tall",
  },
  {
    id: "res-backsplash",
    workSlug: "apartment-interiors",
    name: "Kitchen backsplash tile system",
    category: "Surfaces",
    material: "Hand-glazed ceramic · brass trim",
    description:
      "Vertical tile rhythm and grout contrast used to draw the eye along the work triangle while staying easy to wipe down.",
    imageAlt: "Hand-glazed ceramic kitchen backsplash with brass trim",
    placeholderGradient: "from-[#a8a092] via-[#ede6de] to-[#cfc6ba]",
    layout: "standard",
  },
  {
    id: "res-wardrobe",
    workSlug: "residential-interiors",
    name: "Wardrobe facade panels",
    category: "Built-in",
    material: "Fluted MDF · brushed brass pulls",
    dimensions: "Floor-to-ceiling run",
    description:
      "Full-height wardrobe fronts with fluted texture to break up long bedroom walls and soften reflected light from windows.",
    imageAlt: "Fluted wardrobe facade panels with brass hardware",
    placeholderGradient: "from-[#9e9488] via-[#e8dfd6] to-[#c9bfb3]",
    layout: "wide",
  },
  {
    id: "corp-divider",
    workSlug: "corporate-workspaces",
    name: "Acoustic desk divider",
    category: "Workplace",
    material: "PET felt · powder-coated steel",
    dimensions: 'W 48" × H 42"',
    description:
      "Desk-mounted screen balancing visual privacy with open sightlines so focus zones felt comfortable.",
    imageAlt: "Acoustic desk divider in an open office",
    placeholderGradient: "from-[#9aa3b5] via-[#e8ecf2] to-[#c5c9d4]",
    layout: "featured",
  },
  {
    id: "corp-pod",
    workSlug: "corporate-workspaces",
    name: "Collaboration pod seating",
    category: "Seating",
    material: "Commercial-grade fabric · ash ply",
    description:
      "Curved booth seating sized for quick stand-ups and laptop sessions between formal meeting rooms.",
    imageAlt: "Collaboration pod seating in a corporate lounge",
    placeholderGradient: "from-[#8d97ab] via-[#eceff5] to-[#b8beca]",
    layout: "standard",
  },
  {
    id: "corp-reception",
    workSlug: "corporate-workspaces",
    name: "Reception counter cladding",
    category: "Millwork",
    material: "Stone-look laminate · LED cove",
    dimensions: "L-shaped reception",
    description:
      "Layered counter profile with integrated lighting to anchor arrival and reinforce brand color at the first touchpoint.",
    imageAlt: "Reception counter with stone-look laminate cladding",
    placeholderGradient: "from-[#7f8a9e] via-[#e4e8ef] to-[#aeb5c3]",
    layout: "wide",
  },
  {
    id: "corp-lighting",
    workSlug: "corporate-workspaces",
    name: "Linear pendant cluster",
    category: "Lighting",
    material: "Aluminum · diffused acrylic",
    description:
      "Grouped pendants over bench desking to create rhythm, reduce glare, and keep ceiling height feeling open.",
    imageAlt: "Linear pendant lighting cluster over office bench desking",
    placeholderGradient: "from-[#8892a4] via-[#eef1f6] to-[#c0c6d2]",
    layout: "tall",
  },
  {
    id: "retail-plinth",
    workSlug: "retail-commercial-spaces",
    name: "Display plinth system",
    category: "Fixtures",
    material: "Powder-coated steel · oak cap",
    dimensions: "Modular heights",
    description:
      "Stackable plinths with interchangeable tops so merchandising could shift seasonally using the same fixture system.",
    imageAlt: "Modular retail display plinth system",
    placeholderGradient: "from-[#b5a48f] via-[#f2e9dc] to-[#cfc0ad]",
    layout: "featured",
  },
  {
    id: "retail-partition",
    workSlug: "retail-commercial-spaces",
    name: "Fitting room partition",
    category: "Spatial",
    material: "Textured glass · bronze channel",
    description:
      "Semi-private partitions that kept sightlines open on the sales floor while giving try-on areas a calmer envelope.",
    imageAlt: "Textured glass fitting room partition with bronze framing",
    placeholderGradient: "from-[#a89882] via-[#ede4d6] to-[#c4b5a3]",
    layout: "tall",
  },
  {
    id: "retail-shelf",
    workSlug: "retail-commercial-spaces",
    name: "Feature lighting shelf",
    category: "Display",
    material: "Brushed brass · integrated LED",
    description:
      "Wall-mounted shelf with concealed lighting to highlight hero products and guide customers along the primary path.",
    imageAlt: "Feature display shelf with integrated LED lighting",
    placeholderGradient: "from-[#9f8f7a] via-[#ebe1d2] to-[#bfb09c]",
    layout: "standard",
  },
  {
    id: "retail-counter",
    workSlug: "retail-commercial-spaces",
    name: "Point-of-sale counter",
    category: "Millwork",
    material: "Terrazzo-look solid surface",
    dimensions: "Compact checkout",
    description:
      "Durable counter edge and concealed storage for POS hardware, designed for high-traffic corners with clear circulation.",
    imageAlt: "Retail point-of-sale counter in terrazzo-look solid surface",
    placeholderGradient: "from-[#948575] via-[#e6ddd0] to-[#b8a896]",
    layout: "wide",
  },
]

export const resumeSections: ResumeSection[] = [
  {
    title: "Education",
    items: [
      {
        eyebrow: "12/2026",
        title: "MS, User Experience",
        description: "Arizona State University · Tempe, AZ",
      },
      {
        eyebrow: "08/2021",
        title: "B.Des, Interior and Product Design",
        description: "Lisaa School of Design · Bangalore, India",
      },
    ],
  },
  {
    title: "Experience",
    items: [
      {
        eyebrow: "07/2023 – 07/2024",
        title: "Project Manager / Interior Designer",
        description:
          "Retro Designs & Dimensions Pvt Ltd · Visakhapatnam, India",
        bullets: [
          "Managed end-to-end coordination and design delivery for 3 concurrent projects, translating client needs into functional spatial layouts, taking ownership of the process from client conversations to final handoff.",
          "Built moodboards, graphics, and presentations to communicate vision and successfully bring in new business.",
          "Connected design intent to the physical build by managing day-to-day logistics, negotiating vendor quotes, and coordinating directly with on-site teams.",
        ],
      },
      {
        eyebrow: "06/2022 – 06/2023",
        title: "Interior Designer",
        description: "Clark Lloyd Designers · Hyderabad, India",
        bullets: [
          "Designed spaces across residential, corporate offices, and retail spaces, adapting layouts to solve user and client needs.",
          "Owned all technical drawings and design specifications, serving as the point of accountability between the initial design and the physical build.",
          "Conducted site visits to review progress, analyze new locations, and ensure work matched design intent and schedule.",
          "Delivered drawings and information to the site on time, helping prevent delays and maintain workflow.",
          "Participated directly in client meetings to capture requirements, document feedback, and update the design to keep projects moving forward.",
        ],
      },
      {
        eyebrow: "11/2021 – 04/2022",
        title: "Intern Interior Designer",
        description: "IWPS Global · Bangalore, India",
        bullets: [
          "Supported senior designers across multiple office and residential projects by handling technical drawings, site visits, and vendor communications.",
          "Contributed to planning and designing various spaces, translating requirements into spatial layouts.",
          "Reported site updates and progress to the team, providing clear information for timely decisions.",
          "Delivered essential documents and maintained organized project records for all phases of work.",
          "Documented on-site progress and wrote detailed status reports that the team relied on for material and timeline decisions.",
        ],
      },
    ],
  },
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}

export function getAdjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((caseStudy) => caseStudy.slug === slug)

  if (index === -1) {
    return { previous: undefined, next: undefined }
  }

  return {
    previous: caseStudies[index - 1],
    next: caseStudies[index + 1],
  }
}

export function getOtherWorkBySlug(slug: string) {
  return otherWorks.find((work) => work.slug === slug)
}

export function getOtherWorksForGroup(group: OtherWorkGroup) {
  return group.slugs
    .map((slug) => getOtherWorkBySlug(slug))
    .filter((work): work is OtherWork => work !== undefined)
}

export function getInteriorProductsByWorkSlug(workSlug: string) {
  return interiorProducts.filter((product) => product.workSlug === workSlug)
}

export function getAdjacentOtherWorks(slug: string) {
  const index = otherWorks.findIndex((work) => work.slug === slug)

  if (index === -1) {
    return { previous: undefined, next: undefined }
  }

  return {
    previous: otherWorks[index - 1],
    next: otherWorks[index + 1],
  }
}
