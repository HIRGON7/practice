const communities = [
  {
    slug: "react",
    name: "React Community",
    category: "web-development",
    description:
      "React is a JavaScript library used to create interactive user interfaces from reusable components.",
    popularFor:
      "Single-page applications, dashboards, social platforms, and interactive websites.",
    strongSuit:
      "Its reusable component system makes large interfaces easier to build, update, and maintain.",
    usedBy: ["Meta", "Instagram"],
  },
  {
    slug: "nextjs",
    name: "Next.js Community",
    category: "web-development",
    description:
      "Next.js is a React framework used to build complete web applications with frontend and backend features.",
    popularFor:
      "Full-stack websites, server rendering, dynamic routes, API routes, and search-engine-friendly applications.",
    strongSuit:
      "It combines React with routing, server components, backend functionality, and performance optimization.",
    usedBy: ["The Washington Post", "Vercel"],
  },
  {
    slug: "nodejs",
    name: "Node.js Community",
    category: "web-development",
    description:
      "Node.js allows developers to run JavaScript outside the browser and build backend servers and APIs.",
    popularFor:
      "REST APIs, real-time applications, streaming platforms, chat applications, and backend services.",
    strongSuit:
      "It handles many simultaneous requests efficiently and lets developers use JavaScript across the full stack.",
    usedBy: ["Netflix", "PayPal"],
  },
  {
    slug: "typescript",
    name: "TypeScript Community",
    category: "web-development",
    description:
      "TypeScript extends JavaScript by adding types that help developers detect mistakes before running their applications.",
    popularFor:
      "Large JavaScript projects, React applications, Node.js backends, and enterprise software.",
    strongSuit:
      "Its type checking, autocomplete, and editor support make large projects safer and easier to maintain.",
    usedBy: ["Microsoft", "Slack"],
  },
  {
    slug: "laravel",
    name: "Laravel Community",
    category: "web-development",
    description:
      "Laravel is a PHP framework used to build secure web applications, APIs, authentication systems, and database-driven platforms.",
    popularFor:
      "Business applications, content platforms, e-commerce systems, dashboards, and backend APIs.",
    strongSuit:
      "It provides built-in tools for routing, authentication, databases, queues, testing, and application security.",
    usedBy: ["Ghost", "Harvard Art Museums"],
  },
  {
    slug: "flutter",
    name: "Flutter Community",
    category: "mobile-development",
    description:
      "Flutter is a framework created by Google for building applications for Android, iOS, web, desktop, and embedded devices.",
    popularFor:
      "Cross-platform mobile applications, custom interfaces, animations, and applications sharing one codebase.",
    strongSuit:
      "It creates highly customized interfaces while allowing Android and iOS apps to share most of their code.",
    usedBy: ["Google Pay", "eBay Motors"],
  },
  {
    slug: "react-native",
    name: "React Native Community",
    category: "mobile-development",
    description:
      "React Native uses React and JavaScript to create applications that run through native mobile components.",
    popularFor:
      "Cross-platform Android and iOS applications built by developers familiar with React.",
    strongSuit:
      "Web developers can reuse their React knowledge while still creating applications with native mobile interfaces.",
    usedBy: ["Meta", "Microsoft"],
  },
  {
    slug: "kotlin",
    name: "Kotlin Android Community",
    category: "mobile-development",
    description:
      "Kotlin is a modern programming language commonly used to create native Android applications.",
    popularFor:
      "Android applications, Jetpack Compose interfaces, mobile business logic, and Kotlin Multiplatform projects.",
    strongSuit:
      "It offers concise syntax, strong type safety, Java compatibility, and excellent official Android support.",
    usedBy: ["Tripadvisor", "Expedia"],
  },
  {
    slug: "swift",
    name: "Swift iOS Community",
    category: "mobile-development",
    description:
      "Swift is Apple's programming language for building applications across iPhone, iPad, Mac, Apple Watch, and Apple Vision Pro.",
    popularFor:
      "Native iOS applications, SwiftUI interfaces, Apple platform features, and high-performance mobile software.",
    strongSuit:
      "It provides direct access to Apple technologies with strong performance, modern syntax, and built-in safety features.",
    usedBy: ["Apple", "Airbnb"],
  },
  {
    slug: "ionic",
    name: "Ionic Community",
    category: "mobile-development",
    description:
      "Ionic allows developers to build mobile applications using familiar web technologies such as HTML, CSS, and JavaScript.",
    popularFor:
      "Cross-platform business applications, progressive web apps, internal company tools, and rapid mobile development.",
    strongSuit:
      "Web developers can create Android, iOS, and web applications from one shared codebase.",
    usedBy: ["Southwest Airlines", "BBC"],
  },
  {
    slug: "figma",
    name: "Figma Community",
    category: "ui-ux",
    description:
      "Figma is a collaborative design platform used to create interfaces, prototypes, design systems, and developer-ready product designs.",
    popularFor:
      "Interface design, collaborative editing, prototyping, wireframes, and developer handoff.",
    strongSuit:
      "Multiple designers, developers, and stakeholders can work together inside the same browser-based design file.",
    usedBy: ["Airbnb", "Netflix", "Microsoft"],
  },
  {
    slug: "framer",
    name: "Framer Community",
    category: "ui-ux",
    description:
      "Framer is a visual website design and publishing platform for building responsive, animated, and production-ready websites.",
    popularFor:
      "Marketing websites, portfolios, landing pages, animations, prototypes, and no-code publishing.",
    strongSuit:
      "Designers can move directly from visual design to a live website without waiting for a complete developer handoff.",
    usedBy: ["Zapier", "NBA"],
  },
  {
    slug: "miro",
    name: "Miro UX Community",
    category: "ui-ux",
    description:
      "Miro is a collaborative visual workspace used for brainstorming, user journeys, research, workshops, and early product planning.",
    popularFor:
      "User-flow diagrams, customer journeys, brainstorming, UX workshops, research organization, and team planning.",
    strongSuit:
      "It gives remote teams one large shared canvas for organizing ideas and collaborating in real time.",
    usedBy: ["Salesforce", "Cisco", "ASOS", "Moody's"],
  },
  {
    slug: "material-design",
    name: "Material Design Community",
    category: "ui-ux",
    description:
      "Material Design is Google's design system containing interface guidelines, components, icons, patterns, and accessibility guidance.",
    popularFor:
      "Android interfaces, responsive layouts, reusable UI components, typography, color systems, and animations.",
    strongSuit:
      "It gives designers and developers a consistent system that can be adapted across Android, iOS, Flutter, and web applications.",
    usedBy: ["Google"],
  },
  {
    slug: "carbon-design-system",
    name: "Carbon Design System Community",
    category: "ui-ux",
    description:
      "Carbon is IBM's open-source design system containing reusable components, design resources, code, patterns, and interface guidelines.",
    popularFor:
      "Enterprise interfaces, dashboards, accessible products, reusable components, and consistent design systems.",
    strongSuit:
      "It helps large teams build complex and consistent enterprise products without redesigning common interface elements repeatedly.",
    usedBy: ["IBM"],
  },
];

export default communities;