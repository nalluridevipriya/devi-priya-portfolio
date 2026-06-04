export type ProcessBeforeAfter = {
  beforeImage?: string
  afterImage?: string
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
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
  openHref?: string
  placeholderGradient?: string
}

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
  { id: "illustrator", name: "Adobe Illustrator", src: "/skills/illustrator.svg" },
  { id: "photoshop", name: "Adobe Photoshop", src: "/skills/photoshop.svg" },
  { id: "autocad", name: "AutoCAD", src: "/skills/autocad.svg" },
  { id: "google-slides", name: "Google Slides", src: "/skills/google-slides.svg" },
  { id: "google-sheets", name: "Google Sheets", src: "/skills/google-sheets.svg" },
  { id: "notion", name: "Notion", src: "/skills/notion.svg" },
  { id: "cursor", name: "Cursor", src: "/skills/cursor_light.svg" },
]

export const resumeQuickLook = {
  titlePrefix: "Background at a",
  titleAccent: "glance",
  subtitle: "A snapshot from my resume — open the PDF anytime for the full version.",
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
    "Designer interested in understanding users and creating intuitive digital experiences.",
  heroOpenToLabel: "Open to work",
  heroPills: [
    "User Experience Designer",
    "Product Designer",
    "UX Researcher",
    "Interior Designer",
  ],
  about:
    "I care about the product moments that can quietly raise or lower stress: onboarding, service navigation, and any place where too much information lands at once. I am especially interested in internship and entry-level roles where I can keep sharpening my research, interaction, and storytelling practice in real teams.",
  pullQuote:
    "Good UX does not need to feel loud. I am most interested in the small decisions that help someone move forward with less friction and more confidence.",
  editorialNote:
    "The layout, tone, and information architecture are ready now, even though the final project evidence is still being collected. That makes this a strong v1 portfolio without pretending it is more finished than it is.",
  resumeSummary:
    "UX designer with 2+ years of experience crafting user-centered designs. Background in spatial design informs my ability to align solutions with user needs. I conduct user discovery and generative research, translating insights into functional design specs, collaborating with cross-functional teams from concept through execution.",
  availability: "Open to internships and UX roles",
  email: "nalluridevipriya@gmail.com",
  phone: "(469) 332-8900",
  location: "Tempe, AZ",
  resumeHref: "/resume",
  resumePdfHref: "/resume/devi-priya-nalluri-resume.pdf",
  linkedinHref: "https://www.linkedin.com/in/devi-priya-nalluri/",
}

export const aboutSection: AboutSectionContent = {
  eyebrow: "Hey, that's me!",
  paragraphs: [
    [{ text: "Namaste!", bold: true }],
    [
      { text: "I'm a " },
      { text: "designer", italic: true },
      {
        text: " who enjoys making things ",
      },
      { text: "simpler", bold: true },
      { text: ", " },
      { text: "clearer", bold: true },
      { text: ", and " },
      { text: "easier", bold: true },
      {
        text: " to use. I'm naturally curious about how people think, make decisions, and interact with the world around them. I like understanding where people get stuck, and turning those insights into experiences that just ",
      },
      { text: "make sense", bold: true },
      { text: "." },
    ],
    [
      { text: "My background in " },
      { text: "interior design", italic: true },
      {
        text: " taught me how people move through and interact with physical spaces. ",
      },
      { text: "UX design", italic: true },
      {
        text: " gave me a way to apply that same thinking to digital products, organizing information, simplifying complex systems, and creating experiences that feel ",
      },
      { text: "intuitive from start to finish", bold: true },
      { text: "." },
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
        text: ", I'm always looking for ways to reduce friction and make products feel more natural and approachable.",
      },
    ],
    [
      { text: "At the end of the day, I want to build " },
      { text: "thoughtful", bold: true },
      { text: " and " },
      { text: "intuitive", bold: true },
      { text: " " },
      { text: "products", bold: true },
      { text: " that help people accomplish what they need with " },
      { text: "confidence", bold: true },
      { text: "." },
    ],
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
    value: "Onboarding, service design, and everyday clarity.",
  },
  {
    label: "Approach",
    value: "Research first, polish second, learn continuously.",
  },
  {
    label: "Stage",
    value: "Portfolio v1 with honest draft case study content.",
  },
]

export const workingProcess: ProcessStep[] = [
  {
    title: "Define the Problem Statement",
    description:
      "Start by clarifying who is blocked, what they are trying to do, and what assumptions are still fuzzy.",
    artifact:
      "I usually turn this into a short problem statement and a few testable questions before sketching any interface direction.",
  },
  {
    title: "Map the journey",
    description:
      "Translate scattered notes into a visible flow so it is easier to spot friction, missing context, and unclear choices.",
    artifact:
      "Typical artifacts include lightweight journey maps, wireflows, and content hierarchies that explain why the sequence works.",
  },
  {
    title: "Prototype for conversation",
    description:
      "Use low-to-mid fidelity screens to make decisions tangible without spending too early on polish.",
    artifact:
      "I aim for prototypes that invite feedback quickly and keep iteration cheap, especially when the concept is still forming.",
  },
  {
    title: "Reflect and tighten",
    description:
      "Capture what seems stronger, what still feels uncertain, and what evidence is needed next.",
    artifact:
      "That reflection becomes the bridge between a draft project and a case study that can mature over time.",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: "campus-connect-onboarding",
    title: "Healthcare Management App",
    tagline:
      "Designing a unified mobile experience that helps caregivers and patients manage medical information with less stress.",
    summary:
      "A UX design project focused on reducing healthcare information fragmentation by centralizing prescriptions, reports, medications, appointments, and emergency support into one accessible mobile experience.",
    projectType: "Design",
    role: "UX research and product design",
    duration: "Academic concept project",
    team: "Team project with peer critique",
    context:
      "This project explored how a mobile healthcare management experience could support caregivers and patients who struggle to organize medical information across paper files, messaging apps, notes, and photo galleries.",
    problem:
      "Research revealed that users were storing prescriptions, reports, reminders, and appointment information across fragmented systems, creating stress and delays during healthcare situations when timely access matters most.",
    processTitle: "From fragmented healthcare management to a unified care experience.",
    processDescription:
      "Each design decision was guided by user interviews, workflow analysis, usability testing, and healthcare research findings. The process focused on reducing cognitive load, simplifying information retrieval, and supporting both caregivers and patients through clearer digital healthcare management.",
    processSteps: [
      {
        title: "Identified fragmented healthcare workflows",
        description:
          "Research revealed that users were storing prescriptions, reports, reminders, and appointment information across paper files, messaging apps, notes, and photo galleries, creating stress and delays during healthcare situations.",
        artifact:
          "Outcome: Prioritized creating a centralized healthcare management experience that reduced information fragmentation and retrieval stress.",
      },
      {
        title: "Developed user-centered personas and caregiver journeys",
        description:
          "The team created personas for primary caregivers and medical assistants to better understand stress points, healthcare coordination challenges, and the need for organized medical access.",
        artifact:
          "Outcome: Helped shape workflows around real caregiving behaviors, time-sensitive access, and simplified healthcare coordination.",
      },
      {
        title: "Explored multiple interaction directions through ideation",
        description:
          "Crazy 8 exercises and storyboard explorations were used to test multiple layout structures for medical documentation, reminders, timelines, and emergency support features.",
        artifact:
          "Outcome: Selected interaction patterns that improved discoverability, reduced cognitive load, and aligned with users' mental models of healthcare organization.",
      },
      {
        title: "Built low-fidelity and paper prototypes",
        description:
          "Paper prototypes and low-fidelity wireframes explored workflows for uploading medical records, viewing prescriptions, tracking medications, and managing appointments.",
        artifact:
          "Outcome: Allowed the team to validate navigation clarity, information hierarchy, and interaction flow before moving into high-fidelity prototyping.",
      },
      {
        title: "Refined the experience through usability testing",
        description:
          "Heuristic evaluations and cognitive walkthroughs uncovered issues related to navigation clarity, visual hierarchy, spacing, and workflow discoverability.",
        artifact:
          "Outcome: Guided improvements to navigation structures, screen hierarchy, feedback systems, and overall usability consistency.",
      },
    ],
    keyDecisionsTitle: "The design decisions that shaped the healthcare experience.",
    keyDecisionsDescription:
      "Every design decision was grounded in healthcare usability principles, cognitive load reduction, and accessibility-focused interaction design. The goal was to help users feel more organized, confident, and supported while managing medical information.",
    keyDecisions: [
      {
        title: "Centralized medical information into one system",
        description:
          "Medical documents, prescriptions, medications, appointments, and emergency information were organized into one unified mobile experience.",
        impact:
          "Reduced reliance on fragmented systems and improved access to critical healthcare information during appointments and emergencies.",
      },
      {
        title: "Prioritized recognition over recall",
        description:
          "Dashboard layouts used category icons, card-based organization, timeline views, and visual grouping systems to support faster scanning and reduced memory effort.",
        impact:
          "Helped users locate information quickly without relying heavily on search or memorization.",
      },
      {
        title: "Designed for both caregivers and individual users",
        description:
          "The experience supported caregivers managing multiple family members while also accommodating individual users handling their own medications and appointments.",
        impact:
          "Created a more flexible healthcare management system that addressed different healthcare coordination needs.",
      },
      {
        title: "Used privacy-aware interaction patterns",
        description:
          "Reminder systems, medication notifications, and healthcare records were designed to reduce embarrassment, stress, and exposure of sensitive health information in public settings.",
        impact:
          "Improved user trust while making healthcare interactions feel calmer and more discreet.",
      },
      {
        title: "Created a consistent mobile-first design system",
        description:
          "The interface used a clean healthcare-focused visual system with accessible typography, structured spacing, reusable components, and simplified navigation.",
        impact:
          "Improved usability consistency and reduced cognitive load across screens and workflows.",
      },
    ],
    outcomesTitle: "What the project improved",
    outcomesDescription:
      "The project explored how centralized healthcare management could reduce stress, improve organization, and support more confident healthcare interactions for caregivers and patients.",
    outcomes: [
      {
        title: "Improved access to medical information",
        description:
          "Users could upload, organize, retrieve, and manage prescriptions, reports, medicines, and appointment histories from a single platform.",
      },
      {
        title: "Reduced cognitive load during healthcare tasks",
        description:
          "Features such as categorized records, medication reminders, timeline tracking, and structured dashboards simplified healthcare management workflows.",
      },
      {
        title: "Created clearer medication management workflows",
        description:
          "Medication schedules, dosage details, reminder systems, and medicine tracking features improved visibility and supported medication adherence.",
      },
      {
        title: "Improved user confidence through organized systems",
        description:
          "Usability testing showed that timeline-based records and medicine card views were immediately understandable and useful to participants.",
      },
      {
        title: "Supported both routine and emergency healthcare needs",
        description:
          "Emergency SOS features, location sharing, and quick document retrieval workflows helped extend the experience beyond routine healthcare management.",
      },
    ],
    reflectionTitle: "What I would improve next",
    reflection:
      "If the project continued further, I would expand usability testing with caregivers, patients, and healthcare professionals to better evaluate long-term workflow efficiency, accessibility, and trust within real healthcare situations.",
    reflectionNextSteps: [
      "Testing the system across larger and more diverse healthcare user groups",
      "Improving accessibility compliance and readability standards",
      "Refining privacy controls for shared and public environments",
      "Expanding interoperability with hospitals and healthcare providers",
      "Measuring long-term effects on cognitive load and healthcare task efficiency",
    ],
    status: "Featured draft case study",
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
          "Shows UX research, persona development, prototyping, and usability testing applied to a complex healthcare management problem.",
      },
      {
        label: "Honesty note",
        value:
          "Concept project based on interviews, ideation, and usability testing without fabricated clinical outcomes or implementation claims.",
      },
    ],
  },
  {
    slug: "neighborly-pantry-flow",
    title: "Arizona Science Center Website Redesign",
    tagline: "A UX redesign focused on simplifying exploration, discovery, and ticket booking.",
    summary:
      "Redesigned key areas of the Arizona Science Center website to improve navigation clarity, exhibition discovery, and the ticket purchasing experience. The project focused on reducing cognitive load, improving information hierarchy, and creating a more intuitive user journey across the platform.",
    projectType: "Re-Design",
    role: "UX designer and researcher",
    duration: "Short concept exploration",
    team: "Solo",
    context:
      "A research-driven UX/UI redesign project focused on improving the Arizona Science Center website experience through usability evaluation, accessibility analysis, and interface redesign. The project explored how clearer navigation, stronger information hierarchy, and simplified user flows could improve exhibition discovery and reduce friction during ticket purchasing",
    problem:
      "Users experienced significant friction while navigating the website, purchasing tickets, and locating important information such as FAQs, exhibit details, and event timings. Research revealed that inconsistent navigation, unclear ticket structures, and fragmented information architecture increased cognitive load, reduced user confidence, and led to task abandonment.",
    quantitativeResearch: {
      title: "Quantitative Research",
      description:
        "We conducted moderated usability testing with **9 participants** to evaluate navigation, ticket purchasing, information discovery, FAQ access, and mobile usability on the Arizona Science Center website. The study measured task success rates, usability issues, and user behavior across key visitor journeys.",
      observationsHeading: "Observations",
      observations: [
        {
          value: "62%",
          description:
            "**61.6% overall task success rate**, indicating that many users encountered obstacles while completing common website tasks.",
        },
        {
          value: "100%",
          description:
            "**100% of participants were unable to easily locate FAQs and refund information**, making it one of the most critical usability issues identified during testing.",
        },
        {
          value: "67%",
          description:
            "**66.7% of participants experienced difficulty completing the ticket purchasing flow**, including adding tickets to the cart and understanding ticket types.",
        },
        {
          value: "78%",
          description:
            "**77.8% of users encountered issues with the mobile navigation menu**, reporting problems with responsiveness and discoverability while using the site on mobile devices.",
        },
        {
          value: "100%",
          description:
            "**100% of users reported irrelevant search results**, making search an unreliable method for finding exhibits, FAQs, and support content.",
        },
      ],
    },
    processTitle: "From usability findings to a more intuitive user experience.",
    processDescription:
      "Each redesign decision was guided by usability testing, heuristic evaluation, observations, and user research findings. The process focused on reducing friction in navigation, improving information hierarchy, and simplifying critical user tasks across the website.",
    processSteps: [
      {
        title: "Identified high-friction user tasks",
        description:
          "Focused on the areas where users struggled the most: ticket selection, finding FAQs, understanding exhibit information, and navigating event timings.",
        artifact:
          "Outcome: Prioritized redesigning the pages that created the highest confusion and task abandonment during testing.",
      },
      {
        title: "Restructured navigation and information hierarchy",
        description:
          "Used card sorting and user mental models to reorganize navigation labels, homepage sections, and exhibition categories into clearer and more intuitive structures.",
        artifact:
          "Outcome: Improved content discoverability and reduced reliance on the footer for finding important information.",
      },
      {
        title: "Simplified the ticket purchasing flow",
        description:
          "Redesigned the ticket experience into a more guided step-by-step process with clearer ticket inclusions, simplified actions, and supportive microcopy.",
        artifact:
          "Outcome: Reduced uncertainty during decision-making and improved confidence throughout checkout.",
      },
      {
        title: "Created consistent exhibition browsing experiences",
        description:
          "Standardized exhibition layouts to ensure users could quickly understand exhibit descriptions, timings, interaction types, and supporting educational content.",
        artifact:
          "Outcome: Reduced cognitive load by creating a predictable and easier-to-scan browsing experience.",
      },
      {
        title: "Improved clarity through system feedback and guidance",
        description:
          "Introduced confirmation screens, clearer messaging, disclaimers, and contextual guidance to help users feel informed throughout the interaction flow.",
        artifact:
          "Outcome: Increased transparency, trust, and reassurance during key user actions such as purchasing tickets.",
      },
    ],
    keyDecisionsTitle: "The design decisions that shaped the experience.",
    keyDecisionsDescription:
      "Every redesign decision was grounded in usability findings, user behaviour observations, and research insights gathered throughout the evaluation process. The focus was on reducing friction, improving clarity, and helping users complete important tasks with greater confidence.",
    keyDecisions: [
      {
        title: "Reduced confusion through clearer navigation",
        description:
          "Navigation labels and homepage categories were reorganized based on card sorting exercises and user mental models to make information easier to discover.",
        impact:
          "Users could identify exhibitions, events, films, and ticket-related information more intuitively without relying heavily on the footer.",
      },
      {
        title: "Prioritized important information earlier in the experience",
        description:
          "Key visitor information such as exhibit details, timings, ticket inclusions, and FAQs was surfaced earlier within the layout hierarchy.",
        impact:
          "Reduced cognitive load and minimized the amount of scanning required to complete tasks.",
      },
      {
        title: "Simplified the ticket purchasing process",
        description:
          "The ticket flow was redesigned into a more structured step-by-step experience with clearer ticket types, reduced unnecessary inputs, and supportive microcopy.",
        impact:
          "Helped reduce uncertainty during decision-making and improved user confidence throughout checkout.",
      },
      {
        title: "Created consistent exhibition structures",
        description:
          "Exhibition pages were redesigned using a unified layout system that consistently presented descriptions, interaction types, educational content, and supporting resources.",
        impact:
          "Allowed users to compare and explore exhibitions more easily without fragmented information.",
      },
      {
        title: "Improved reassurance through system feedback",
        description:
          "Confirmation messages, payment disclaimers, and contextual guidance were added throughout the flow to make interactions feel more transparent and predictable.",
        impact:
          "Increased trust, reduced user hesitation, and created a more guided overall experience.",
      },
    ],
    outcomesTitle: "What the redesign improved",
    outcomesDescription:
      "The redesign addressed major usability issues identified during research and testing by improving navigation clarity, simplifying ticket purchasing, and restructuring how information was presented across the website.",
    outcomes: [
      {
        title: "Improved navigation and information discovery",
        description:
          "Users were able to navigate exhibitions, events, and ticket-related information more intuitively through clearer categorization and reorganized navigation structures.",
      },
      {
        title: "Reduced friction during ticket purchasing",
        description:
          "The simplified ticket flow reduced confusion around ticket types, inclusions, and checkout steps while improving user confidence during decision-making.",
      },
      {
        title: "Created a more consistent browsing experience",
        description:
          "Exhibition pages followed a unified layout structure that made exhibit information easier to scan, compare, and understand.",
      },
      {
        title: "Improved trust through clearer system feedback",
        description:
          "Confirmation states, disclaimers, and supportive microcopy helped create a more transparent and reassuring experience throughout key user interactions.",
      },
    ],
    outcomeComparisons: [
      {
        title: "Homepage & navigation",
        websiteHref: "https://www.azscience.org/",
        websiteLabel: "Arizona Science Center Website",
        figmaHref:
          "https://www.figma.com/design/zctEWyruHMVh4V6awsAv9H/Arizona-Science-Center-Website-Redesign?node-id=0-1",
        figmaLabel: "Figma Prototype",
        beforeAfter: {
          beforeImage: "/work/arizona-science-center/homepage-before.png",
          afterImage: "/work/arizona-science-center/homepage-after.png",
          beforeAlt: "Original Arizona Science Center homepage",
          afterAlt: "Redesigned homepage with clearer navigation",
          beforeLabel: "Existing design",
          afterLabel: "Redesign",
          whatChanged:
            "Reorganized navigation labels, homepage categories, and exhibition discovery paths based on card sorting and usability findings.",
          whyChanged:
            "Users struggled to find exhibitions, events, and ticket information without relying heavily on the footer.",
        },
      },
      {
        title: "Exhibition browsing page",
        websiteHref: "https://www.azscience.org/experience/all-exhibitions/",
        websiteLabel: "All Exhibitions",
        figmaHref:
          "https://www.figma.com/design/zctEWyruHMVh4V6awsAv9H/Arizona-Science-Center-Website-Redesign?node-id=0-1",
        figmaLabel: "Figma Prototype",
        beforeAfter: {
          beforeImage: "/work/arizona-science-center/exhibition-page-before.png",
          beforeAlt: "Original Arizona Science Center All Exhibitions page",
          afterImage: "/work/arizona-science-center/exhibition-page-after.png",
          afterImageWidth: 1440,
          afterImageHeight: 5504,
          afterAlt: "Redesigned exhibition page with unified layout",
          beforeLabel: "Existing design",
          afterLabel: "Redesign",
          whatChanged:
            "Standardized exhibition layouts with consistent placement of descriptions, timings, interaction types, and educational content.",
          whyChanged:
            "Fragmented page structures increased scanning effort and made it harder for users to compare exhibits.",
        },
      },
      {
        title: "Ticket purchasing flow",
        websiteHref: "https://www.azscience.org/buy-tickets/",
        websiteLabel: "Buy Tickets",
        figmaHref:
          "https://www.figma.com/design/zctEWyruHMVh4V6awsAv9H/Arizona-Science-Center-Website-Redesign?node-id=0-1",
        figmaLabel: "Figma Prototype",
        beforeAfter: {
          beforeImage: "/work/arizona-science-center/ticket-page-before.png",
          beforeAlt: "Original Arizona Science Center Buy Tickets page",
          afterImage: "/work/arizona-science-center/ticket-flow-after-display.png",
          afterImageWidth: 1600,
          afterImageHeight: 4032,
          afterAlt: "Redesigned step-by-step ticket purchasing flow",
          beforeLabel: "Existing design",
          afterLabel: "Redesign",
          whatChanged:
            "Restructured checkout into a guided step-by-step flow with clearer ticket types, inclusions, and supportive microcopy.",
          whyChanged:
            "Testing showed confusion around ticket options and checkout steps led to hesitation and task abandonment.",
        },
      },
    ],
    reflectionTitle: "What I would improve next",
    reflection:
      "If this project continued further, I would expand usability testing with a larger participant group and conduct additional accessibility evaluations focused on WCAG compliance and mobile responsiveness.",
    reflectionNextSteps: [
      "Measuring task completion improvements after redesign",
      "Testing navigation discoverability across different user groups",
      "Refining mobile interactions for quicker access to visitor information",
      "Iterating further on accessibility, guidance, and system feedback patterns",
    ],
    status: "Supporting draft study",
    coverStyle: "from-[#d6dcc4] via-[#f4efe2] to-[#ead2be]",
    overviewHighlights: [
      {
        label: "Audience",
        value: "Families, students, tourists, and returning visitors planning visits, exploring exhibitions, and purchasing tickets online.",
      },
      {
        label: "Core lens",
        value: "Usability, information clarity, intuitive navigation, accessibility, and reducing cognitive load during high-friction tasks.",
      },
      {
        label: "Format",
        value: "Focused redesign of high-friction website pages identified through usability testing, heuristic evaluation, and user research.",
      },
      {
        label: "Strength shown",
        value: "UX research synthesis, usability testing, information architecture, interaction design, and translating research findings into structured, user-centered design solutions.",
      },
    ],
  },
  {
    slug: "focus-flow-habit-loop",
    title: "Admin Dashboard & Ad Management Portal",
    tagline:
      "Designing clearer moderation and campaign workflows for a safer teen social platform.",
    summary:
      "A UX/UI redesign project focused on improving moderation workflows and advertising management for a teen-focused social media platform. The project explored how centralized dashboard systems could reduce operational friction, improve decision-making, and support safer platform governance for teenage users.",
    projectType: "Re-Design",
    role: "UX designer and researcher",
    duration: "Academic concept project",
    team: "Solo",
    context:
      "A UX redesign project focused on creating a centralized admin dashboard and ad management portal for a teen-focused social media platform. The work explored how moderation systems, campaign management tools, and operational visibility could support both platform safety and business growth.",
    problem:
      "The platform lacked a structured system for moderation and advertising operations. Internal teams struggled with fragmented workflows, limited context during moderation, and unclear campaign management processes, making it difficult to efficiently manage platform safety and advertiser needs.",
    processTitle: "From research findings to scalable operational workflows.",
    processDescription:
      "Each design decision was guided by research, journey mapping, workflow analysis, and usability-focused iterations. The process focused on simplifying moderation systems, improving campaign management clarity, and reducing operational friction across dashboard experiences.",
    processSteps: [
      {
        title: "Identified high-friction moderation tasks",
        description:
          "Focused on the areas where moderators and internal teams experienced the most workflow complexity: flagged content review, user reporting, escalation flows, and moderation visibility.",
        artifact:
          "Outcome: prioritized redesigning operational workflows that slowed decision-making and increased cognitive load during high-volume moderation tasks.",
      },
      {
        title: "Restructured dashboard information hierarchy",
        description:
          "Organized analytics, alerts, moderation queues, and campaign data using clearer visual hierarchy and grouped operational systems.",
        artifact:
          "Outcome: improved visibility into high-priority actions while reducing excessive scanning across dense dashboard environments.",
      },
      {
        title: "Simplified campaign management flows",
        description:
          "Redesigned the advertising workflow into a clearer step-by-step system covering audience targeting, campaign setup, scheduling, approvals, and analytics visibility.",
        artifact:
          "Outcome: reduced workflow confusion and improved advertiser confidence during campaign management tasks.",
      },
      {
        title: "Created consistent system structures",
        description:
          "Designed reusable dashboard layouts, moderation patterns, and analytics components to support consistency across the platform.",
        artifact:
          "Outcome: improved scalability, predictability, and usability across moderation and advertising workflows.",
      },
      {
        title: "Improved clarity through contextual guidance",
        description:
          "Introduced clearer moderation context, campaign states, status visibility, and structured feedback systems throughout the platform.",
        artifact:
          "Outcome: increased transparency, operational confidence, and workflow predictability for both moderators and advertisers.",
      },
    ],
    keyDecisionsTitle: "The design decisions that shaped the platform experience.",
    keyDecisionsDescription:
      "Every redesign decision was grounded in workflow analysis, research findings, and usability considerations gathered throughout the project. The focus was on improving operational efficiency, reducing friction, and helping internal teams make faster and clearer decisions.",
    keyDecisions: [
      {
        title: "Prioritized high-risk moderation actions",
        description:
          "Critical moderation alerts, flagged content, and AI-supported review indicators were surfaced earlier within dashboard layouts.",
        impact:
          "Helped moderators identify urgent cases more quickly while improving response efficiency.",
      },
      {
        title: "Reduced cognitive load across dashboards",
        description:
          "Dashboard systems were simplified by separating operational tasks into clearer workflow groups and reducing unnecessary interface clutter.",
        impact:
          "Improved scanability and reduced mental overload during high-volume operational tasks.",
      },
      {
        title: "Improved campaign workflow transparency",
        description:
          "Campaign approval states, targeting configurations, scheduling systems, and performance tracking were made more visible throughout the workflow.",
        impact:
          "Reduced uncertainty and improved advertiser confidence during campaign management.",
      },
      {
        title: "Created consistent system patterns",
        description:
          "Reusable layouts, navigation structures, analytics modules, and moderation components were introduced across the platform.",
        impact:
          "Improved platform consistency, scalability, and long-term maintainability.",
      },
      {
        title: "Balanced safety with platform operations",
        description:
          "The system was designed to support moderation efficiency while also addressing advertiser workflows and platform governance needs.",
        impact:
          "Created a stronger balance between operational usability, platform safety, and business requirements.",
      },
    ],
    outcomesTitle: "What the redesign improved",
    outcomesDescription:
      "The redesign addressed major workflow inefficiencies identified during research and analysis by improving moderation visibility, simplifying campaign management, and creating clearer operational dashboard systems.",
    outcomes: [
      {
        title: "Improved moderation visibility",
        description:
          "Moderators could access flagged content, alerts, reports, and user activity more efficiently through centralized operational dashboards.",
      },
      {
        title: "Reduced friction during campaign management",
        description:
          "The structured advertising workflow simplified campaign setup, targeting, scheduling, and approval processes while improving usability for advertisers.",
      },
      {
        title: "Created a more consistent dashboard experience",
        description:
          "Dashboard systems followed unified interaction and layout patterns that made operational workflows easier to navigate and understand.",
      },
      {
        title: "Improved transparency through clearer system feedback",
        description:
          "Moderation states, campaign approvals, analytics visibility, and operational status indicators helped create more predictable workflows throughout the platform.",
      },
    ],
    reflectionTitle: "What I would improve next",
    reflection:
      "If the project continued further, I would expand usability testing with moderators and advertisers to better evaluate workflow efficiency, dashboard clarity, and decision-making patterns under realistic operational conditions.",
    reflectionNextSteps: [
      "Testing dashboard usability across different operational roles",
      "Refining alert prioritization and escalation systems",
      "Expanding accessibility reviews for dense dashboard environments",
      "Improving responsive behavior across tablet and mobile workflows",
      "Iterating further on analytics filtering, reporting systems, and moderation guidance patterns",
    ],
    status: "Supporting draft study",
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
          "Designing scalable moderation systems, campaign workflows, and decision-support tools that reduce cognitive load while improving workflow clarity and operational efficiency.",
      },
      {
        label: "Case study role",
        value:
          "Supports the portfolio through a systems-focused UX project involving dashboard design, moderation workflows, information hierarchy, and operational tooling.",
      },
      {
        label: "Honesty note",
        value:
          "Conceptual academic project based on UX research, workshops, and prototype exploration without fabricated business metrics or implementation claims.",
      },
    ],
  },
]

export const otherWorks: OtherWork[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interior Design",
    tagline: "Designing calm, functional homes that reflect how people actually live.",
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
      { label: "Deliverables", value: "Layouts, moodboards, and working drawings" },
      { label: "Strength shown", value: "Client communication and design translation" },
    ],
    contributions: [
      "Translated client briefs into spatial layouts that improved circulation, storage, and day-to-day usability.",
      "Developed moodboards and presentation materials to help clients visualize finishes, furniture direction, and overall atmosphere.",
      "Prepared technical drawings and specifications that supported smoother coordination between design and on-site execution.",
      "Participated in client meetings to capture feedback and refine layouts without losing project momentum.",
    ],
    coverStyle: "from-[#ddd0c4] via-[#f3ebe3] to-[#d8cfc4]",
    productShowcaseTitle: "Objects and finishes from residential projects",
    productShowcaseDescription:
      "Furniture, storage, and surface selections developed alongside layouts—each piece chosen for daily use, maintenance, and how light reads across the room.",
  },
  {
    slug: "apartment-interiors",
    title: "Apartment Interior Design",
    tagline: "Making compact urban homes feel open, organized, and easy to live in every day.",
    summary:
      "Apartment-focused work emphasizing efficient layouts, built-in storage, and finish palettes that hold up in smaller footprints without feeling cramped or generic.",
    category: "Residential",
    role: "Project Manager / Designer",
    period: "2022 – 2023",
    context:
      "Apartment clients often needed clearer zoning between work, rest, and entertaining within a single open plan, plus storage that did not consume precious floor area.",
    approach:
      "Projects started with lifestyle interviews and existing-condition surveys, then moved into space-planning options, 3D visualizations for client sign-off, and detailed joinery drawings for compact kitchens and bedrooms.",
    highlights: [
      { label: "Space type", value: "Urban apartments and compact flats" },
      { label: "Core lens", value: "Storage, light, and multi-use zones" },
      { label: "Deliverables", value: "Layouts, joinery details, and finish schedules" },
      { label: "Strength shown", value: "Constraint-led spatial problem solving" },
    ],
    contributions: [
      "Reorganized open-plan apartments into clearer work, dining, and rest zones without adding permanent walls.",
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
    tagline: "Creating workplace environments that support focus, collaboration, and brand identity.",
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
      { label: "Strength shown", value: "Technical drawing and site accountability" },
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
    tagline: "Shaping customer-facing environments with stronger circulation and visual impact.",
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
      { label: "Deliverables", value: "Concept decks, layouts, and vendor coordination" },
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
    description: "Homes and apartments focused on circulation, storage, and calm material palettes.",
    slugs: ["residential-interiors", "apartment-interiors"],
  },
  {
    id: "commercial",
    title: "Commercial projects",
    description: "Workplace and retail environments balancing brand expression with day-to-day operations.",
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
    dimensions: "W 72\" × D 16\" × H 30\"",
    description:
      "Low-profile console with concealed cable routing and adjustable shelving for living zones that needed storage without visual weight.",
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
    dimensions: "W 32\" × D 34\" × H 31\"",
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
    dimensions: "W 48\" × H 42\"",
    description:
      "Desk-mounted screen balancing visual privacy with open sightlines so focus zones did not feel boxed in.",
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
      "Grouped pendants over bench desking to create rhythm and reduce glare without dropping ceiling height visually.",
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
      "Stackable plinths with interchangeable tops so merchandising could shift seasonally without new custom builds.",
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
      "Durable counter edge and concealed storage for POS hardware, designed for high-traffic corners without blocking flow.",
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
        description: "Retro Designs & Dimensions Pvt Ltd · Visakhapatnam, India",
        bullets: [
          "Managed end-to-end coordination and design delivery for 3 concurrent projects, translating client needs into functional spatial layouts, taking ownership of the process from client conversations to final handoff.",
          "Built moodboards, graphics, and presentations to communicate vision and successfully bring in new business.",
          "Bridged the gap between the design phase and the actual build by managing day-to-day logistics, negotiating vendor quotes, and coordinating directly with on-site teams so the design did not get lost in translation.",
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
