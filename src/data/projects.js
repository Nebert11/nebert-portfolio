import image1 from "../assets/image/obrio.png";
import akiba from "../assets/image/akiba.png";
import image2 from "../assets/image/image2.JPG";
import image3 from "../assets/image/image3.JPG";
import brand from "../assets/image/brand.png";
import analytics from "../assets/image/analytics.png";
import marketing from "../assets/image/automation.png";
import mindease from "../assets/image/mindease.png";
import quickImage from "../assets/image/quick.jpg";
import travelImage from "../assets/image/travelbuddies.JPG";
import plantImage from "../assets/image/plantend.jpg";

export const projects = [
  {
    slug: "campaign-management", number: "01", category: "Professional work", title: "Campaign Management Platform",
    description: "A multi-tenant platform for managing campaigns, users, business units, and operational workflows.",
    role: "Software Engineer", technologies: ["React", "Next.js", "Laravel", "MySQL"], year: "2026", status: "Selected work", image: image1,
    overview: "A centralized workspace for campaign operations, designed to bring people, workflows, and business-unit context into one place.",
    problem: "Managing campaigns across different business units requires a system that can support different users, permissions, and workflows without losing clarity.",
    contribution: ["Designed and implemented responsive product interfaces", "Connected frontend workflows with backend services and APIs", "Worked on settings, validation, and role-aware user experiences"],
    solution: "A structured product interface that keeps operational actions discoverable while leaving room for different business contexts and permissions.",
    engineering: ["React / Next.js frontend", "Laravel / PHP services", "MySQL data layer", "REST API communication"],
    challenges: ["Role-aware interfaces", "API validation", "Multi-tenant data", "Responsive workflows"],
    impact: "Centralized campaign workflows and made day-to-day management easier to navigate.",
  },
  {
    slug: "brand-management", number: "02", category: "Professional work", title: "Enterprise Brand Management Platform",
    description: "A centralized digital platform for organizing, navigating, and accessing comprehensive brand guidelines.", role: "Frontend Engineer", technologies: ["Next.js", "React", "REST APIs"], year: "2026", status: "Professional work", image: brand,
    overview: "A content-rich platform that helps teams find and work with brand guidance through a clear, structured interface.", problem: "Comprehensive guidelines are only useful when people can quickly locate the right information and understand how it applies.", contribution: ["Built responsive interface sections", "Worked with API-fed content and reusable UI patterns", "Focused on navigation and information clarity"], solution: "A navigable content experience that gives structured guidance a clear hierarchy across screen sizes.", engineering: ["Next.js / React frontend", "REST API integration", "Responsive content architecture"], challenges: ["Information hierarchy", "Content-heavy layouts", "Responsive navigation"], impact: "Improved access to brand information through a more organized digital experience.",
  },
  {
    slug: "campaign-analytics", number: "03", category: "Professional work", title: "Campaign Analytics Dashboard",
    description: "A data-driven dashboard for monitoring campaign performance through KPIs, charts, and interactive reporting.", role: "Software Engineer", technologies: ["React", "Data visualization", "APIs"], year: "2026", status: "Professional work", image: analytics,
    overview: "An analytics experience focused on turning campaign data into readable signals for marketing operations.", problem: "Performance data needs context, filtering, and clear visual hierarchy before it becomes useful to the people making decisions.", contribution: ["Implemented dashboard interface patterns", "Worked with API data and KPI presentation", "Focused on responsive data views"], solution: "A dashboard structure that puts key indicators first and lets users move from summary to detail without losing context.", engineering: ["React interface", "API-fed reporting views", "Interactive data visualization"], challenges: ["KPI hierarchy", "Data visualization", "Responsive tables and charts"], impact: "Made campaign reporting more accessible through a focused analytics experience.",
  },
  {
    slug: "documentation-platform", number: "04", category: "Professional work", title: "Documentation & Knowledge Platform",
    description: "A structured documentation system combining a modern frontend with a headless CMS.", role: "Frontend Engineer", technologies: ["Next.js", "Strapi", "REST API"], year: "2026", status: "Professional work", image: quickImage,
    overview: "A knowledge platform designed to make product and system information easier to manage and access.", problem: "Documentation becomes difficult to maintain when content management and the reading experience are tightly coupled.", contribution: ["Built the frontend reading experience", "Integrated content from a headless CMS", "Worked on reusable content and navigation patterns"], solution: "A separation between content management and the public-facing experience, connected through a clear API boundary.", engineering: ["Next.js frontend", "Strapi CMS", "REST API content delivery"], challenges: ["CMS integration", "Content structure", "Reading experience"], impact: "Improved access to product and system knowledge with a more maintainable content experience.",
  },
  {
    slug: "reporting-platform", number: "05", category: "Professional work", title: "Marketing Reporting Platform", description: "A custom reporting and analytics platform designed to provide tailored insights and dashboards for marketing operations.", role: "Software Engineer", technologies: ["React", "APIs", "Data visualization"], year: "2026", status: "In progress", image: marketing,
    overview: "A reporting system exploring a more tailored analytics experience for marketing operations.", problem: "Generic reporting workflows do not always reflect the questions, KPIs, and context a team needs to see.", contribution: ["Worked on reporting interface foundations", "Explored KPI and filtering patterns", "Contributed to dashboard architecture"], solution: "A focused reporting surface shaped around custom insights, filtering, and the needs of marketing operations.", engineering: ["React frontend", "API-driven data", "Dashboard and visualization patterns"], challenges: ["Custom KPI views", "Filtering", "Dashboard architecture"], impact: "In progress. The work is focused on making tailored marketing insights easier to explore.",
  },
  {
    slug: "mobile-application", number: "06", category: "Professional work", title: "Mobile Operations Application", description: "A mobile-first extension of an existing operational platform, designed to bring core workflows to mobile devices.", role: "Software Engineer", technologies: ["Mobile UI", "APIs", "PWA evaluation"], year: "2026", status: "Professional work", image: plantImage, link: "https://www.planted.co.ke/",
    overview: "A mobile-first direction for bringing operational workflows beyond the desktop experience.", problem: "Operational teams need access to core workflows in the environments where the work happens, not only at a desk.", contribution: ["Worked on mobile-first interface thinking", "Considered API integration and authentication flows", "Evaluated practical PWA and native directions"], solution: "A mobile experience shaped around focused workflows, touch-friendly interaction, and the realities of working with connected services.", engineering: ["Mobile-first UI", "API integration", "Authentication considerations", "PWA / native evaluation"], challenges: ["Mobile interaction", "Authentication", "Offline data considerations"], impact: "Extended the product conversation toward more accessible operational workflows on mobile.",
  },
  {
    slug: "akiba", number: "07", category: "Personal project", title: "Akiba", description: "A personal finance management platform designed to help users track expenses, manage budgets, and work toward savings goals.", role: "Product builder", technologies: ["Product design", "Web application", "Mobile experience"], year: "Personal", status: "Personal project", image: akiba, link: "https://akiba-eight-phi.vercel.app/login",
    overview: "Akiba is a personal product concept centered on making everyday financial habits easier to see and manage.", problem: "People need a simple way to understand spending, plan budgets, and keep savings goals visible.", contribution: ["Shaped the product direction and core flows", "Explored dashboard and expense tracking experiences", "Considered the mobile experience from the start"], solution: "A focused finance workspace organized around the daily actions that matter: expenses, budgets, goals, and progress.", engineering: ["Dashboard experience", "Expense tracking flows", "Mobile-first product thinking"], challenges: ["Financial information hierarchy", "Simple input flows", "Mobile usability"], impact: "A personal product exploration for making finance management more approachable.",
  },
  {
    slug: "mindease", number: "08", category: "Personal project", title: "MindEase", description: "A platform exploring more accessible mental health support through an AI chatbot and easier access to therapists.", role: "Product & frontend", technologies: ["React", "AI chatbot", "Vercel"], year: "Personal", status: "Live product", image: mindease, link: "https://mindease-two-iota.vercel.app/",
    overview: "MindEase explores how a digital product can lower the barrier to finding mental health support.", problem: "Distance and financial stability can make mental health support difficult to access.", contribution: ["Shaped the product interface", "Worked on the frontend experience", "Connected the product concept to accessible support pathways"], solution: "A digital experience combining an AI chatbot with simpler access to therapist support.", engineering: ["React interface", "AI chatbot experience", "Deployed web product"], challenges: ["Sensitive user experience", "Accessible information", "Clear support pathways"], impact: "Explored a more reachable digital entry point to mental health support.",
  },
  {
    slug: "germinia-school", number: "09", category: "Personal project", title: "Germinia School", description: "An online learning module system for German language study, flexible learning, and scheduled tutor classes.", role: "Web application builder", technologies: ["Web platform", "Learning experience"], year: "Personal", status: "Personal project", image: image2, link: "https://germania-school.vercel.app/",
    overview: "A learning platform concept organized around self-paced study and scheduled online tutor sessions.", problem: "Learners need flexibility while still having a clear connection to structured tutor-led classes.", contribution: ["Worked on the learning interface", "Shaped the module and class experience", "Focused on flexible access to study content"], solution: "A learning environment that brings modules and scheduled classes into one accessible experience.", engineering: ["Web learning platform", "Module navigation", "Online class experience"], challenges: ["Learning flow", "Content structure", "Flexible scheduling"], impact: "Created a clearer digital environment for flexible German language learning.",
  },
  {
    slug: "foodex", number: "10", category: "Personal project", title: "FoodEx", description: "A home-delivery ordering experience for meat, vegetables, and fruit, with owner notifications for processing and delivery.", role: "Web experience builder", technologies: ["E-commerce", "Ordering flow"], year: "Personal", status: "Personal project", image: image3,
    overview: "A product concept for ordering fresh food from home and moving the order through a simple delivery workflow.", problem: "Customers need a convenient ordering path while owners need clear notification of what to process and deliver.", contribution: ["Shaped the ordering experience", "Worked on product and delivery flow thinking", "Focused on a straightforward customer journey"], solution: "A direct ordering experience connected to owner notification and delivery processing.", engineering: ["E-commerce interface", "Order flow", "Delivery workflow"], challenges: ["Order clarity", "Customer experience", "Operational handoff"], impact: "Made the path from selecting fresh food to processing an order easier to understand.",
  },
  {
    slug: "travel-buddies", number: "11", category: "Personal project", title: "Travel Buddies", description: "A platform connecting travelers with local guides and fellow travelers through trip planning, group chat, and recommendations.", role: "Product concept builder", technologies: ["Travel platform", "Social features"], year: "Personal", status: "Personal project", image: travelImage, link: "https://travelbuddiessafaris.netlify.app/",
    overview: "A social travel platform concept centered on making shared travel planning more useful and connected.", problem: "Travelers benefit from local context and trusted connections when planning activities and trips.", contribution: ["Shaped the product concept", "Explored trip planning and group communication", "Considered activity recommendation flows"], solution: "A connected travel experience combining planning, conversation, and local recommendations.", engineering: ["Trip planning experience", "Group chat concept", "Recommendation interface"], challenges: ["Social coordination", "Planning flow", "Information discovery"], impact: "Explored a more connected way for travelers and local guides to plan experiences.",
  },
];

export const selectedProjects = projects.slice(0, 4);
