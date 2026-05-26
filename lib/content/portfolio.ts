export type ProcessBeforeAfter = {
  beforeImage?: string
  afterImage?: string
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
  beforeAfter: ProcessBeforeAfter
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
}

export type SiteProfile = {
  name: string
  title: string
  heroHeadline: string
  /** Short status next to the green dot (e.g. “Open to work”) */
  heroOpenToLabel: string
  /** Floating “+ …” labels beside the hero name */
  heroPills: readonly [string, string]
  about: string
  pullQuote: string
  editorialNote: string
  resumeSummary: string
  availability: string
  email: string
  resumeHref: string
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

export type AboutSectionContent = {
  eyebrow: string
  paragraphs: AboutTextSegment[][]
  photos: AboutPhoto[]
}

export type ResumeSection = {
  title: string
  summary: string
  items: {
    eyebrow: string
    title: string
    description: string
    href?: string
  }[]
}

export const profile: SiteProfile = {
  name: "Devi Priya Nalluri",
  title: "UX designer in progress",
  heroHeadline:
    "Designer interested in understanding users and creating intuitive digital experiences.",
  heroOpenToLabel: "Open to work",
  heroPills: ["User Experience Designer", "Product Designer"],
  about:
    "I care about the product moments that can quietly raise or lower stress: onboarding, service navigation, and any place where too much information lands at once. I am especially interested in internship and entry-level roles where I can keep sharpening my research, interaction, and storytelling practice in real teams.",
  pullQuote:
    "Good UX does not need to feel loud. I am most interested in the small decisions that help someone move forward with less friction and more confidence.",
  editorialNote:
    "The layout, tone, and information architecture are ready now, even though the final project evidence is still being collected. That makes this a strong v1 portfolio without pretending it is more finished than it is.",
  resumeSummary:
    "Early-career UX designer with a research-first process, a systems mindset, and a strong interest in turning complex information into clearer next steps. Looking for environments where curiosity, critique, and practical iteration are part of the work.",
  availability: "Open to internships",
  email: "hello@example.com",
  resumeHref: "/resume",
  linkedinHref: "https://linkedin.com/in/your-profile",
}

export const aboutSection: AboutSectionContent = {
  eyebrow: "Hey, that's me!",
  paragraphs: [
    [
      { text: "I'm a " },
      { text: "designer", italic: true },
      {
        text: " who enjoys making things simple, clear, and easy to use. I like digging into how people think, spotting what's confusing, and turning that into something that just makes sense.",
      },
    ],
    [
      { text: "For me, it's not just about how something looks — it's about how it works and how it feels to use. I enjoy working on " },
      { text: "flows", italic: true },
      { text: ", " },
      { text: "interactions", italic: true },
      { text: ", and " },
      { text: "small details", bold: true },
      { text: " that make a big difference in everyday experiences." },
    ],
    [
      { text: "At the end of the day, I just want to build " },
      { text: "products", bold: true },
      { text: " that feel " },
      { text: "thoughtful", bold: true },
      { text: ", " },
      { text: "intuitive", bold: true },
      { text: ", and " },
      { text: "easy", bold: true },
      { text: " for anyone to use." },
    ],
  ],
  photos: [
    {
      alt: "Portrait photo — replace with your own in public/about/",
      gradient: "from-[#c4b5a5] via-[#ddd3c8] to-[#ebe4dc]",
    },
    {
      alt: "Design event or workshop moment",
      gradient: "from-[#b8b8b8] via-[#d4d4d4] to-[#ececec]",
    },
    {
      alt: "Workspace or creative process snapshot",
      gradient: "from-[#a8a098] via-[#c8c0b8] to-[#e0dcd6]",
    },
    {
      alt: "Community or conference photo",
      gradient: "from-[#9a9088] via-[#bfb6ae] to-[#ddd8d2]",
    },
  ],
}

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
      "That reflection becomes the bridge between a draft student project and a case study that can mature over time.",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: "campus-connect-onboarding",
    title: "App Design",
    tagline: "Reframing first-week orientation into a calmer sequence of next steps for new students.",
    summary:
      "A featured draft case study built from a self-initiated campus services concept. It is structured to show process now and can later be replaced with final interview notes, prototype learnings, and stronger outcomes.",
    projectType: "Design",
    role: "UX research and product design",
    duration: "4-week concept sprint",
    team: "Solo project with peer critique",
    context:
      "This concept project explores how a university onboarding experience might feel less overwhelming for students who receive too much information at once.",
    problem:
      "Orientation often throws important tasks, deadlines, and support resources at students in one burst. The result is not a lack of information, but a lack of sequence and reassurance.",
    processSteps: [
      {
        title: "Reviewed the current first-week experience",
        description:
          "Started with a simple audit of common orientation tasks and mapped where confusion would likely appear.",
        artifact:
          "Outcome: a rough journey map that grouped tasks into arrival, setup, and confidence-building moments.",
      },
      {
        title: "Defined a calmer onboarding architecture",
        description:
          "Restructured the experience around fewer decisions at a time and clearer calls to action.",
        artifact:
          "Outcome: a prioritized flow that surfaces only the next essential step, with support links available when needed.",
        beforeAfter: {
          beforeAlt: "Original onboarding screen with stacked tasks",
          afterAlt: "Redesigned onboarding screen with one primary action",
          whatChanged:
            "The first screen went from a long checklist of equal-priority tasks to a single recommended next step with secondary support links tucked below.",
          whyChanged:
            "Students were more likely to freeze when every task looked urgent. Sequencing the experience made the path forward feel clearer and less overwhelming.",
        },
      },
      {
        title: "Sketched a lightweight mobile flow",
        description:
          "Moved into lo-fi screens to see whether the content hierarchy and pacing felt more usable.",
        artifact:
          "Outcome: screen concepts for welcome, checklist, and contextual support moments.",
        beforeAfter: {
          beforeAlt: "Lo-fi wireframe of the original welcome screen",
          afterAlt: "Lo-fi wireframe of the revised welcome screen",
          whatChanged:
            "Welcome copy, task order, and button hierarchy were simplified so the screen focused on orientation instead of instruction density.",
          whyChanged:
            "The first interaction needed to feel reassuring. Reducing visual noise helped the next action stand out without removing access to help.",
        },
      },
      {
        title: "Captured what needs real validation next",
        description:
          "Documented the research questions that would need actual student sessions before any claim could be made confidently.",
        artifact:
          "Outcome: a short test plan focused on comprehension, confidence, and missed tasks.",
      },
    ],
    keyDecisions: [
      {
        title: "Show one primary action at a time",
        description:
          "The concept avoids stacking too many equal-priority tasks on a single screen, which helps reduce cognitive load during an already stressful moment.",
      },
      {
        title: "Use reassuring guidance instead of dense instruction",
        description:
          "Microcopy and structure are designed to make the student feel oriented, not scolded or rushed.",
      },
      {
        title: "Keep help visible without making it the main path",
        description:
          "Support links remain accessible in context so students can recover without losing progress.",
      },
    ],
    outcomes: [
      {
        title: "Reusable case study structure",
        description:
          "Created a reusable draft structure for telling a UX case study around onboarding and service clarity.",
      },
      {
        title: "Clearer task sequencing",
        description:
          "Defined a clearer sequence of tasks that can guide future prototyping and user testing.",
      },
      {
        title: "Upgrade-ready artifacts",
        description:
          "Produced honest placeholder artifacts that can be upgraded later without changing the portfolio architecture.",
      },
    ],
    reflection:
      "The strongest next step would be replacing inferred friction points with real student conversations and then tightening the prototype around what participants actually miss or misunderstand.",
    reflectionQuote:
      "The concept is strongest where it narrows attention. The next layer of credibility comes from testing whether that calmer pacing truly helps real students feel more prepared.",
    status: "Featured draft case study",
    coverStyle: "from-[#f0d7c1] via-[#f8efe3] to-[#e2e0cf]",
    overviewHighlights: [
      {
        label: "Audience",
        value: "New students navigating first-week logistics and support information.",
      },
      {
        label: "Design challenge",
        value: "Make important tasks feel sequenced, human, and easy to act on.",
      },
      {
        label: "Content status",
        value: "Draft structure with placeholder copy and no invented metrics.",
      },
      {
        label: "Why it matters",
        value: "It shows product thinking, research framing, and service-oriented UX judgment.",
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
        title: "Ticket purchasing flow",
        beforeAfter: {
          beforeAlt: "Original Arizona Science Center ticket purchasing screen",
          afterAlt: "Redesigned step-by-step ticket purchasing flow",
          beforeLabel: "Existing design",
          afterLabel: "Redesign",
          whatChanged:
            "Restructured checkout into a guided step-by-step flow with clearer ticket types, inclusions, and supportive microcopy.",
          whyChanged:
            "Testing showed confusion around ticket options and checkout steps led to hesitation and task abandonment.",
        },
      },
      {
        title: "Exhibition browsing page",
        beforeAfter: {
          beforeAlt: "Original Arizona Science Center exhibition detail page",
          afterAlt: "Redesigned exhibition page with unified layout",
          beforeLabel: "Existing design",
          afterLabel: "Redesign",
          whatChanged:
            "Standardized exhibition layouts with consistent placement of descriptions, timings, interaction types, and educational content.",
          whyChanged:
            "Fragmented page structures increased scanning effort and made it harder for users to compare exhibits.",
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
    tagline: "Designing clearer moderation and campaign workflows for a safer teen social platform.",
    summary:
      "A UX/UI redesign project focused on improving moderation workflows and advertising management for a teen-focused social media platform. The project explored how centralized dashboard systems could reduce operational friction, improve decision-making, and support safer platform governance for teenage users.",
    projectType: "Re-Design",
    role: "Product design concept",
    duration: "Self-guided exploration",
    team: "Solo",
    context:
      "A concept for a lightweight habit and reflection flow intended to feel encouraging rather than punitive.",
    problem:
      "Many productivity tools increase pressure by treating every missed moment as failure, which can make the experience feel brittle.",
    processSteps: [
      {
        title: "Defined the emotional tone first",
        description:
          "Before screen design, I established how the product should speak when someone misses a routine.",
        artifact:
          "Outcome: a set of tone principles that favored reflection, recovery, and gentle prompts.",
      },
      {
        title: "Sketched the habit loop",
        description:
          "Designed a flow that cycles between intention, check-in, and review without turning every interruption into a red warning state.",
        artifact:
          "Outcome: a simple interaction concept showing softer feedback patterns.",
      },
    ],
    keyDecisions: [
      {
        title: "Avoid shame-based visual language",
        description:
          "The concept deliberately avoids aggressive streak metaphors and instead supports returning to the routine after breaks.",
      },
      {
        title: "Keep the reflection moment brief",
        description:
          "Reflection is useful only if it feels lightweight enough to complete in the real flow of the day.",
      },
    ],
    outcomes: [
      {
        title: "Emotional tone as product decision",
        description:
          "Showed how emotional tone can be treated as a product decision, not just a writing detail.",
      },
      {
        title: "Portfolio narrative variety",
        description:
          "Added a third case study with a different interaction flavor while keeping the portfolio narrative cohesive.",
      },
    ],
    reflection:
      "The next version should include clearer scenarios, stronger accessibility review, and a more explicit testing plan around motivation and perceived pressure.",
    reflectionQuote:
      "The most interesting challenge here is not adding features. It is deciding what the product should not say when someone is already feeling behind.",
    status: "Supporting draft study",
    coverStyle: "from-[#e9dac7] via-[#f7f2e8] to-[#d9ddd2]",
    overviewHighlights: [
      {
        label: "Audience",
        value: "People trying to build routines without punitive feedback loops.",
      },
      {
        label: "Interaction focus",
        value: "Behavior-aware nudges and softer reflection patterns.",
      },
      {
        label: "Case study role",
        value: "Supports the portfolio with a different product tone and decision set.",
      },
      {
        label: "Honesty note",
        value: "Draft concept framed without invented usage data or impact claims.",
      },
    ],
  },
]

export const resumeSections: ResumeSection[] = [
  {
    title: "Education",
    summary:
      "Replace these entries with your actual program, coursework, or certifications while keeping the structure intact.",
    items: [
      {
        eyebrow: "Current path",
        title: "UX and product design learning",
        description:
          "Add your university, bootcamp, certificate, or self-directed learning track here. The layout is designed to support either formal education or an independent portfolio-building path.",
      },
      {
        eyebrow: "Relevant emphasis",
        title: "Research, interaction, and communication",
        description:
          "Use this slot for coursework or learning themes that support the portfolio narrative, such as user research, prototyping, accessibility, or product strategy.",
      },
    ],
  },
  {
    title: "Strengths",
    summary:
      "Keep these items short and concrete so the resume page stays useful to skimming hiring teams.",
    items: [
      {
        eyebrow: "Working style",
        title: "Comfortable turning ambiguity into structure",
        description:
          "Especially helpful in early product thinking, problem framing, journey mapping, and shaping initial design direction.",
      },
      {
        eyebrow: "Communication",
        title: "Clear writing and visible thinking",
        description:
          "I like documenting decisions in plain language so teammates can react to the work without decoding jargon first.",
      },
      {
        eyebrow: "Growth mindset",
        title: "Open to critique and quick iteration",
        description:
          "The strongest ideas usually appear after exposing early drafts to feedback, not after polishing in isolation.",
      },
    ],
  },
  {
    title: "Project highlights",
    summary:
      "These links keep the resume page connected to the case-study system instead of acting like a dead-end summary.",
    items: [
      {
        eyebrow: "Featured study",
        title: "App Design",
        description:
          "A structured draft case study focused on service UX, onboarding clarity, and reducing first-week overwhelm for students.",
        href: "/work/campus-connect-onboarding",
      },
      {
        eyebrow: "Supporting study",
        title: "Arizona Science Center Website Redesign",
        description:
          "A compact concept showing how operational information and reassurance can coexist in a community service flow.",
        href: "/work/neighborly-pantry-flow",
      },
      {
        eyebrow: "Supporting study",
        title: "Admin Dashboard & Ad Management Portal",
        description:
          "A behavior-aware product concept exploring how tone and recovery patterns shape the user experience.",
        href: "/work/focus-flow-habit-loop",
      },
    ],
  },
  {
    title: "Contact details",
    summary:
      "Keep your reachability obvious. This page is the primary CTA destination, so the essentials should never be hidden.",
    items: [
      {
        eyebrow: "Email",
        title: profile.email,
        description:
          "Replace this placeholder with your preferred contact email. A visible email works well for internship and entry-level outreach in a v1 portfolio.",
        href: `mailto:${profile.email}`,
      },
      {
        eyebrow: "Portfolio note",
        title: "Resume page as primary CTA",
        description:
          "This portfolio intentionally routes visitors here first instead of forcing a PDF download. You can always add a downloadable file later as a secondary action.",
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
