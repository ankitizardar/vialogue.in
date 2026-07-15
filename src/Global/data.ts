export interface List {
  title: string;
  description: string;
  img: string;
}

export const list: List[] = [
  {
    title: "AI Chatbot Support",
    description:
      "Automate customer conversations using an AI chatbot that instantly answers FAQs, provides support, qualifies leads, and shares product/service details on WhatsApp—available 24/7.",
    img: "/services/sms/cwc/img1.jpg",
  },
  {
    title: "Live Agent Support (Human Assistance)",
    description:
      "Secure user verification with instant OTP delivery via SMS or WhatsApp.",
    img: "/services/sms/cwc/img2.jpg",
  },
  {
    title: "Promotions & Marketing Bots",
    description:
      "Send targeted marketing messages to engage and convert customers.",
    img: "/services/sms/cwc/img3.jpg",
  },
  {
    title: "Transactional Notifications",
    description: "Recover lost sales by reminding customers of pending carts.",
    img: "/services/sms/cwc/img4.jpg",
  },
  {
    title: "Lead Generation & Sales Conversation",
    description:
      "Build long-term relationships with personalized offers and rewards.",
    img: "/services/sms/cwc/img5.jpg",
  },
  {
    title: "Feedback & Surveys",
    description:
      "Engage customers through interactive chat-based communication.",
    img: "/services/sms/cwc/img6.jpg",
  },
];

export const rcsList: List[] = [
  {
    title: "Verified Sender Identity",
    description:
      "Messages are delivered from a verified brand profile featuring your official logo and brand name. This reduces phishing risks, increases credibility, and builds stronger customer trust with every interaction.",
    img: "/services/rcs/img_1.png",
  },
  {
    title: "Higher Engagement Rates",
    description:
      "Achieve better open rates and stronger click-through performance compared to traditional SMS. Rich visuals and interactive elements encourage customers to take action faster.",
    img: "/services/rcs/img_2.png",
  },
  {
    title: "Interactive Customer Experiences",
    description:
      "Enable customers to browse products, book appointments, track orders, and complete actions directly within the message inbox without switching apps or visiting external websites.",
    img: "/services/rcs/img_3.png",
  },
  {
    title: "Rich Media Messaging",
    description:
      "Send images, GIFs, videos, PDFs, and branded content directly inside the message thread. Deliver visually engaging communication that captures attention instantly.",
    img: "/services/rcs/img_4.png",
  },
  {
    title: "Two-Way Conversational Flow",
    description:
      "Transform one-way alerts into dynamic two-way conversations with quick replies, suggested actions, and guided responses to create smoother customer journeys.",
    img: "/services/rcs/img_5.png",
  },
];

interface PlatformFeature {
  title: string;
  desc: string;
  img: string;
}

export const rcsPlatformData: PlatformFeature[] = [
  {
    title: "Verified RCS Agent Setup",
    desc: "Create and manage your brand or agent profile with identity verification.",
    img: "/services/rcs/Path 1.png",
  },
  {
    title: "Rich Template Builder",
    desc: "Build interactive RCS templates with cards, carousels, media, and branded layouts.",
    img: "/services/rcs/Path 2.png",
  },
  {
    title: "Template & Approval Management",
    desc: "Submit and manage template approvals as per RCS network rules.",
    img: "/services/rcs/Path 3.png",
  },
  {
    title: "Bots Management Dashboard",
    desc: "Launch and manage RCS campaigns with full visibility and control.",
    img: "/services/rcs/Path 4.png",
  },
  {
    title: "Personalized Messaging",
    desc: "Use dynamic variables like name, OTP, amount, order ID, or city.",
    img: "/services/rcs/Path 5.png",
  },
  {
    title: "Real-Time Delivery & Read Insights",
    desc: "Track delivered, read, and interaction metrics in real time.",
    img: "/services/rcs/Path 6.png",
  },
];

export const voiceFeaturesData: PlatformFeature[] = [
  {
    title: "Voice OTP & Verification Calls",
    desc: "Secure and reliable OTP voice calls for authentication.<br/><br/><b>Best for:</b> account login verification, onboarding validation, fraud prevention workflows.",
    img: "/services/voice/features/Path 2.png",
  },
  {
    title: "Automated Voice Alerts & Notifications",
    desc: "Send critical updates instantly including delivery status, service reminders, payment due notifications, and compliance alerts.<br/><br/><b>Best for:</b> logistics, utilities, fintech, healthcare, subscription platforms.",
    img: "/services/voice/features/Path 3.png",
  },
  {
    title: "Bulk Voice Broadcasting",
    desc: "Run voice campaigns at scale for promotions and announcements.<br/><br/><b>Best for:</b> festival offers, sale launch announcements, reactivation campaigns.",
    img: "/services/voice/features/Path 4.png",
  },
  {
    title: "Interactive Voice Response (IVR)",
    desc: "Create IVR journeys to automate support such as press 1 for order status, press 2 for payment support, or press 3 to talk to an agent.<br/><br/><b>Best for:</b> telecom, banking, e-commerce, customer service teams.",
    img: "/services/voice/features/Path 5.png",
  },
  {
    title: "Custom Call Flow & Template Management",
    desc: "Manage voice scripts, templates, flow sequencing, and campaign-level configurations.<br/><br/><b>Best for:</b> enterprises running multi-step campaigns and automated workflows.",
    img: "/services/voice/features/Path 1.png",
  },
  {
    title: "Analytics, Reporting & Optimization",
    desc: "Optimize results using data-driven performance insights with real-time analytics and reporting.<br/><br/><b>Best for:</b> performance-driven marketing teams and operations managers.",
    img: "/services/voice/features/Path 6.png",
  },
];

export interface InfraHighlight {
  title: string;
  description: string;
}

export const apiInfraData = {
  badge: "API INFRA",
  heading:
    "Our RCS API enables secure, low-latency, high-volume messaging with seamless carrier connectivity.",
  image: "/services/rcs/api-infra.png",

  highlights: [
    {
      title: "RESTful API Architecture",
      description:
        "Trigger rich interactive messages using HTTP requests and JSON payloads.",
    },
    {
      title: "Webhook-Powered Real-Time Events",
      description:
        "Receive callbacks for Delivered, Read, Reply, and Button Click events.",
    },
    {
      title: "End-to-End Transport Security",
      description:
        "TLS-secured API calls aligned with data privacy best practices.",
    },
    {
      title: "Rate Limiting & Queue Management",
      description: "Handle high-volume campaign bursts reliably.",
    },
    {
      title: "Intelligent Routing",
      description:
        "Select optimal delivery paths based on real-time network conditions.",
    },
    {
      title: "Batch Processing",
      description:
        "Send thousands of personalized messages via optimized batch endpoints.",
    },
  ],
};

export interface TableRow {
  feature: string;
  description: string;
  benefit: string;
}

export interface FeatureTableData {
  badge: string;
  columns: string[];
  rows: TableRow[];
}

export const featureTableData: FeatureTableData = {
  badge: "FEATURE",

  columns: ["Feature", "Description", "Business Benefit"],

  rows: [
    {
      feature: "Verified Business IDs",
      description: "Branded sender profiles with logos/badges",
      benefit: "85% higher trust vs. SMS",
    },
    {
      feature: "Rich Media Support",
      description: "Images, videos, carousels, location sharing",
      benefit: "6x richer experiences",
    },
    {
      feature: "Interactive Elements",
      description: "Buttons, quick replies, forms",
      benefit: "Direct Conversations without app switches",
    },
    {
      feature: "Fallback to SMS",
      description: "Automatic SMS delivery on non-RCS devices",
      benefit: "100% reach guaranteed",
    },
    {
      feature: "Real-Time Analytics",
      description: "Track opens, clicks, replies",
      benefit: "Optimize campaigns instantly",
    },
    {
      feature: "Global Scalability",
      description: "India coverage via carrier partnerships",
      benefit: "Live in 48 hours",
    },
  ],
};

export interface RcsFeatureCard {
  title: string;
  description: string;
  img: string;
  bgColor: string;
  size?: "large" | "normal";
}

export const rcsFeaturesData: RcsFeatureCard[] = [
  {
    title: "Smart Segmentation",
    description:
      "Target users based on location, behavior, and purchase history.",
    img: "/services/rcs/features/img1.png",
    bgColor: "bg-purple-50",
    size: "large",
  },
  {
    title: "Real-Time Analytics",
    description: "Track reads, clicks, replies, and interaction performance.",
    img: "/services/rcs/features/img2.png",
    bgColor: "bg-[#FDF7FF]",
  },
  {
    title: "Verified Sender Profiles",
    description: "Establish trust with brand name, logo, and verified badge.",
    img: "/services/rcs/features/img3.png",
    bgColor: "bg-[#F5F3FF]",
  },
  {
    title: "Rich Media & Carousels",
    description:
      "Engage users with images, videos, and swipeable product cards.",
    img: "/services/rcs/features/img4.png",
    bgColor: "bg-purple-100",
  },
  {
    title: "Read Receipts",
    description: "Measure when users actually open and engage.",
    img: "/services/rcs/features/img5.png",
    bgColor: "bg-purple-50",
  },
  {
    title: "Suggested Replies & Actions",
    description:
      "Guide journeys with one-tap actions (visit site, call, map, pay).",
    img: "/services/rcs/features/img6.png",
    bgColor: "bg-[#FDF7FF]",
  },
  {
    title: "Branded Look & Feel",
    description: "Maintain consistent brand design inside the chat experience.",
    img: "/services/rcs/features/img7.png",
    bgColor: "bg-[#F5F3FF]",
  },
  {
    title: "Interactive Chatbots",
    description:
      "Automate booking, support, and sales through two-way conversational flows.",
    img: "/services/rcs/features/img8.png",
    bgColor: "bg-purple-100",
  },
];

export interface wppKeyFeature {
  title: string;
  img: string;
  bgColor: string;
  description: string;
  span?:
    | "wide-rev"
    | "wide"
    | "normal"
    | "normal-rev"
    | "box"
    | "rect"
    | "small";
}

export const wppFeaturesData: wppKeyFeature[] = [
  {
    title: "Official WhatsApp Business API Access",
    description: "Get direct access to official WhatsApp API for secure, reliable, and scalable business communication.",
    img: "/services/wapp/icon1.png",
    bgColor: "bg-purple-50",
    span: "normal",
  },
  {
    title: "Transactional Notifications",
    description: "Send real-time alerts, OTPs, updates, and confirmations instantly with high delivery and reliability.",
    img: "/services/wapp/icon2.png",
    bgColor: "bg-violet-50",
    span: "normal",
  },
  {
    title: "Two-Way Customer Conversations",
    description: "Enable seamless two-way messaging to interact, support, and engage customers in real time easily.",
    img: "/services/wapp/icon3.png",
    bgColor: "bg-fuchsia-50",
    span: "normal",
  },
  {
    title: "Live Agent Inbox & Support",
    description: "Manage customer chats with shared team inbox, assign agents, and resolve queries faster.",
    img: "/services/wapp/icon4.png",
    bgColor: "bg-[#FDF7FF]",
    span: "box",
  },
  {
    title: "AI WhatsApp Chatbot",
    description: "Automate responses using AI chatbot to handle queries, capture leads, and improve engagement.",
    img: "/services/wapp/icon5.png",
    bgColor: "bg-purple-100/50",
    span: "normal",
  },
  {
    title: "Template Management & Approvals",
    description: "Create, manage, and get WhatsApp templates approved quickly for consistent messaging campaigns.",
    img: "/services/wapp/icon6.png",
    bgColor: "bg-violet-100/50",
    span: "normal",
  },
  {
    title: "Bots Messaging",
    description: "Run automated messaging flows using bots to send updates, reminders, and customer responses.",
    img: "/services/wapp/icon7.png",
    bgColor: "bg-fuchsia-100/50",
    span: "normal",
  },
  {
    title: "Delivery Reports & Analytics",
    description: "Track message delivery, open rates, and performance with detailed reports and analytics.",
    img: "/services/wapp/icon8.png",
    bgColor: "bg-purple-50",
    span: "normal",
  },
  {
    title: "Easy API Integration",
    description: "Integrate WhatsApp API easily with your system using simple, developer-friendly endpoints.",
    img: "/services/wapp/icon9.png",
    bgColor: "bg-[#FDF7FF]",
    span: "wide",
  },
  {
    title: "Rich Media Messaging",
    description: "Send images, videos, documents, and interactive content to create engaging user experiences.",
    img: "/services/wapp/icon10.png",
    bgColor: "bg-violet-50",
    span: "normal",
  },
  {
    title: "Message Scheduling & Automation",
    description: "Schedule messages and automate campaigns to reach users at the right time effortlessly.",
    img: "/services/wapp/icon11.png",
    bgColor: "bg-fuchsia-50",
    span: "normal",
  },
  {
    title: "Multi-User Access & Roles",
    description: "Allow multiple team members with role-based access to manage conversations securely.",
    img: "/services/wapp/icon12.png",
    bgColor: "bg-purple-100/50",
    span: "wide",
  },
];

export interface voiceUseCaseItem {
  title: string;
  description: string;
  img: string;
}

export const voiceUseCasesData: voiceUseCaseItem[] = [
  {
    title: "Transactional & Critical Alerts",
    description: "Deliver time-sensitive voice notifications like payment confirmations and delivery updates instantly. Ensure critical customer communication reaches fast, clearly, and reliably every time.",
    img: "/services/voice/usecase1.png",
  },
  {
    title: "Customer Support & Self-Service",
    description: "Enable customers to resolve queries quickly through automated voice interactions, self-service options, and guided call flows without waiting for an agent.",
    img: "/services/voice/usecase2.png",
  },
  {
    title: "Sales & Marketing Voice Bots",
    description: "Run promotional voice campaigns, product announcements, and personalized offers to engage customers and drive Conversations through high-impact voice communication.",
    img: "/services/voice/usecase3.png",
  },
  {
    title: "Operations & Internal Communication",
    description: "Streamline internal alerts, team notifications, and operational updates to ensure employees receive important information instantly and stay coordinated.",
    img: "/services/voice/usecase4.png",
  },
];

export interface OverviewData {
  badge: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  bold: string;
}

export const voiceOverviewData: OverviewData = {
  badge: "OVERVIEW",

  title: "Voice Communication That Customers Actually Respond To",

  description:
    "Voice is one of the most effective channels for urgent, high-importance customer communication because it: - reaches instantly and gets attention - works without internet or smartphone dependency - improves trust for transactional and security messages - supports regional languages and accessibility",

  points: [
    "delivery confirmations",
    "payment reminders",
    "appointment confirmations",
    "service outage alerts",
    "promotional voice broadcasts",
  ],

  bold: "null",

  image: "/services/voice/overview.png",
};

export const AgentOverview: OverviewData = {
  badge: "",

  title: "AI Agent Assist That Helps Your Team Resolve Queries Faster",

  description:
    "Modern customer support teams need speed, accuracy, and consistency. <b>Vialogue Agent Assist</b> empowers your agents with real-time customer context, suggested replies, and intelligent guidance so every interaction becomes a quick, high-quality resolution.<br /><br />Whether you’re handling <b>WhatsApp support, RCS inquiries, SMS replies, or web chat,</b> Vialogue ensures your agents always have the right information at the right time.",

  points: [],

  bold: "null",

  image: "./imgs/etc/1/helps.png",
};

export const ThirdOverview: OverviewData = {
  badge: "",

  title: "Seamless Integrations That Connect Your Customer Communication",

  description:
    "Vialogue is built to work with your existing tools. With powerful integrations, you can connect your CRM, helpdesk, payment systems, analytics, and databases to automate messaging and deliver better customer experiences.",

  points: [
    "CRM integrations for automated communication",
    "Helpdesk tools for real-time support updates",
    "Payment systems for instant alerts",
    "Database sync for personalized messaging",
    "Webhooks & APIs for flexible automation",
  ],

  bold: "null",

  image: "./imgs/etc/2/seamless.png",
};

export const Omni: OverviewData = {
  badge: "",

  title: "Omnichannel Bots for High-Converting Messaging",

  description:
    "Create campaigns that customers actually engage with. Vialogue Bots helps businesses design, personalize, schedule, and optimize campaigns across channels like WhatsApp, SMS, RCS, Email and more—with complete visibility and analytics.",

   points: [
    "Create campaigns across SMS, WhatsApp, RCS, and Email",
    "Segment audiences for targeted messaging",
    "Schedule and automate campaign delivery",
    "Personalize messages with dynamic data",
    "Track performance with real-time analytics",
  ],

  bold: "null",

  image: "./imgs/etc/3/omni.png",
};

export const Build: OverviewData = {
  badge: "",

  title: "Build Powerful Customer Conversations Without Coding",

  description:
    "Vialogue Conversation Builder helps you design automated customer flows that feel natural, interactive and personalized. Create chatbots and conversation journeys to deliver instant answers, qualify leads, and reduce support workload.",

  points: [
    "Visual drag-and-drop conversation builder",
    "Automate responses across multiple channels",
    "Capture and qualify leads instantly",
    "Personalize customer interaction flows",
    "Reduce support workload with smart automation",
  ],

  bold: "null",

  image: "./imgs/etc/4/build.png",
};

export const BuildBottomRev: OverviewData = {
  badge: "",

  title: "Why Bots is Important Today",

  description:
    "",

  points: [
    "Customers expect personalized communication",
    "Generic bulk messaging reduces engagement",
    "Right timing improves campaign performance",
    "Omnichannel campaigns reach customers everywhere",
    "Data-driven insights help optimize messaging",
  ],

  bold: "Generic bulk messaging doesn’t work anymore. Customers expect",

  image: "./imgs/etc/3/why.png",
};

export const UseCase: OverviewData = {
  badge: "",

  title: "Bots Use Cases",

  description: "",

  points: [
    "Flash sale promotion",
    "Abandoned cart recovery",
    "Product launch announcement",
    "Event & webinar promotion",
    "Payment reminders & due alerts",
    "Feedback & review collection",
    "Customer reactivation",
  ],

  bold: "Run smarter campaigns that engage customers and increase Conversations.",

  image: "./imgs/etc/3/useCase.png",
};

export const AgentOverviewRev: OverviewData = {
  badge: "",

  title: "The Solution: Vialogue Agent Assist",

  description:
    "Vialogue Agent Assist is designed to reduce workload, improve customer experience, and help your team perform better by providing assistive insights during live conversations.",

  points: [
    "Real-time suggestions during customer conversations",
    "Instant access to customer history and context",
    "AI-powered responses for faster resolutions",
    "Smart insights to guide agents during calls or chats",
    "Reduced handling time and improved productivity",
  ],

  bold: "null",

  image: "./imgs/etc/1/solution.png",
};

export const voicePlatformOverview: OverviewData = {
  badge: "PLATFORM",

  title: "A Complete Voice Platform Built for Modern Business Communication",

  description:
    "Vialogue Voice is more than just calling — it’s a full-scale voice communication engine designed to support both transactional and engagement use cases.",

  bold: "What You Can Do with Vialogue Voice Platform?",

  points: [
    "Run automated voice alerts and transactional calls",
    "Broadcast campaigns to large audiences",
    "Create IVR flows for self-service and routing",
    "Manage templates, call flows, logs, retries, and analytics",
  ],

  image: "/services/voice/overview-platform.png",
};

export const voiceApiInfra: OverviewData = {
  badge: "API INFRA",

  title: "Voice API for Fast & Seamless Automation",

  description:
    "",

  bold:
    "Designed for developers, startups, and enterprise-scale communication systems.",

  points: [
    "Smart routing for customer support automation",
    "High scalability for bulk voice campaigns",
    "Easy integration with CRM and business platforms",
    "Reliable infrastructure with low-latency performance",
    "Custom voice workflows for reminders and alerts",
    "Detailed delivery logs and call analytics",
  ],

  image: "/services/voice/api-infra.png",
};

export interface PlatformCapability {
  id: number;
  title: string;
  description: string;
  img: string;
}

export const voicePlatformCapabilities: PlatformCapability[] = [
  {
    id: 1,
    title: "Multi-Language & Regional Voice Support",
    description:
      "Reach users in their preferred language to increase trust, improve clarity, and enhance overall communication effectiveness.",
    img: "/services/voice/platform_img1.png",
  },
  {
    id: 2,
    title: "Call Scheduling + Smart Retries",
    description:
      "Schedule calls in advance and automatically retry unreachable numbers to maximize connection rates and delivery success.",
    img: "/services/voice/platform_img2.png",
  },
  {
    id: 3,
    title: "Caller ID / Branding Options",
    description:
      "Improve trust and increase pickup rates with branded caller identity options wherever carrier support is available.",
    img: "/services/voice/platform_img3.png",
  },
  {
    id: 4,
    title: "Real-Time Analytics & Logs",
    description:
      "Track performance with actionable metrics including call connected rate, call duration, failure reasons, retry success rate, and campaign-level reports.",
    img: "/services/voice/platform_img4.png",
  },
  {
    id: 5,
    title: "Security & Compliance Ready",
    description:
      "Designed for secure, compliant, and controlled communication workflows to protect customer data and business operations.",
    img: "/services/voice/platform_img5.png",
  },
];

export const agentSlidingData: PlatformCapability[] = [
  {
    id: 1,
    title: "Inconsistent Communication",
    description:
      "Different agents use different tone and messaging, creating an unprofessional customer experience.",
    img: "./imgs/etc/1/support1.png",
  },
  {
    id: 2,
    title: "Slow Responses",
    description:
      "Agents waste time switching between tools, searching for data, and typing repetitive replies.",
    img: "./imgs/etc/1/support2.png",
  },
  {
    id: 3,
    title: "Lack of Customer Context",
    description:
      "Without interaction history, it becomes difficult to respond confidently and solve issues quickly.",
    img: "./imgs/etc/1/support3.png",
  },
];

import { PlugZap, BellRing, Webhook, Server } from "lucide-react";

export interface VoiceApiHighlight {
  id: number;
  title: string;
  desc: string;
  icon: React.ElementType; // Lucide icon
  color: string;
}

export const voiceApiHighlights: VoiceApiHighlight[] = [
{
  id: 1,
  title: "Simple & Fast Integration",
  desc: "Integrate quickly with your website, mobile app, CRM, ERP, and internal systems without complex setup or long deployment cycles.",
  icon: PlugZap,
  color: "bg-[#9672FF]",
},
{
  id: 2,
  title: "Event-Based Triggering",
  desc: "Trigger voice calls instantly based on customer actions such as transaction success or failure, OTP requests, delivery attempts, and booking confirmations.",
  icon: BellRing,
  color: "bg-[#FFA15C]",
},
{
  id: 3,
  title: "Webhooks & Delivery Status",
  desc: "Receive real-time updates including call initiated, connected, completed, and failed status for full lifecycle visibility.",
  icon: Webhook,
  color: "bg-[#FFBEC1]",
},
{
  id: 4,
  title: "Scalable Infrastructure",
  desc: "Deliver high-volume voice calls seamlessly without delays, ensuring reliable performance even during peak traffic.",
  icon: Server,
  color: "bg-[#9754E6]",
}];

import { Step } from "./HowItsWorkTwo";

export const steps: Step[] = [
  {
    id: 1,
    title: "Customer",
    description: "Sends Query",
    icon: "./imgs/etc/1/hw1.png",
  },
  {
    id: 2,
    title: "Agent Assist",
    description: "Analyzes Context",
    icon: "./imgs/etc/1/hw2.png",
  },
  {
    id: 3,
    title: "Suggests Replies &",
    description: "Resolution Actions",
    icon: "./imgs/etc/1/hw3.png",
  },
  {
    id: 4,
    title: "Agent Sends Response",
    description: "With Confidence",
    icon: "./imgs/etc/1/hw4.png",
  },
  {
    id: 5,
    title: "Analytics Track",
    description: "Support Performance",
    icon: "./imgs/etc/1/hw5.png",
  },
];

export const benefits: Step[] = [
  {
    id: 1,
    title: "Faster Workflows",
    description: "Streamline processes and reduce response time.",
    icon: "./imgs/etc/2/hw1.png",
  },
  {
    id: 2,
    title: "Less Manual Work",
    description: "Automate repetitive tasks and minimize human effort.",
    icon: "./imgs/etc/2/hw2.png",
  },
  {
    id: 3,
    title: "Real-time Automation",
    description: "Trigger instant actions and intelligent workflows.",
    icon: "./imgs/etc/2/hw3.png",
  },
  {
    id: 4,
    title: "Better Customer Insights",
    description: "Analyze behavior and data for smarter decisions.",
    icon: "./imgs/etc/2/hw4.png",
  },
  {
    id: 5,
    title: "Higher Customer Satisfaction",
    description: "Deliver faster, personalized and reliable support.",
    icon: "./imgs/etc/2/hw5.png",
  },
];

import { KeyFeature } from "./KeyFeatures";

export const keyFeatures: KeyFeature[] = [
  {
    id: 1,
    title: "Smart Reply Suggestions",
    description:
      "AI suggests quick, relevant replies based on customer query intent – conversation history – pre-approved templates. This helps agents respond faster and avoid long response delays.",
    image: "/imgs/etc/1/kf1.png",
    span: "md:col-span-3",
  },
  {
    id: 2,
    title: "Customer Context in One View",
    description:
      "Agents can instantly view – customer details – previous queries & tickets – conversation timeline – preferred language/tone so they can respond in a personalized way.",
    image: "/imgs/etc/1/kf2.png",
    span: "md:col-span-3",
  },
  {
    id: 3,
    title: "Guided Resolution & Knowledge Suggestions",
    description:
      "Provide agents with recommended next steps like – troubleshooting checklist – best-practice resolution suggestions – policy and compliance reminders. This ensures fewer escalations and faster closures.",
    image: "/imgs/etc/1/kf3.png",
    span: "md:col-span-2",
  },
  {
    id: 4,
    title: "Template + Tone Standardization",
    description:
      "Maintain brand consistency with – approved responses – professional tone templates – compliance-ready messaging.",
    image: "/imgs/etc/1/kf4.png",
    span: "md:col-span-2",
  },
  {
    id: 5,
    title: "Quick Actions (Agent Productivity Tools)",
    description:
      "Enable agents to complete actions instantly – send payment links – share tracking details – resend OTP – update case status.",
    image: "/imgs/etc/1/kf5.png",
    span: "md:col-span-2",
  },
];

export const crmIntegrations: KeyFeature[] = [
  {
    id: 1,
    title: "CRM Integrations",
    description:
      "Connect with CRM systems to: sync contacts – sync lead stages – trigger automated messaging – personalize campaigns. Create real-time automation like: trigger OTP – send delivery updates – send payment reminders – start conversation flow.",
    image: "/imgs/etc/2/ki1.png",
    span: "md:col-span-3",
  },
  {
    id: 2,
    title: "API & Webhooks",
    description:
      "Enable seamless system communication using APIs and webhooks to automate workflows, exchange real-time data, and trigger intelligent messaging across platforms.",
    image: "/imgs/etc/2/ki2.png",
    span: "md:col-span-3",
  },
  {
    id: 3,
    title: "Helpdesk Integration",
    description:
      "Connect support tools so agents can: respond faster – access conversation history – manage tickets efficiently – reduce resolution time.",
    image: "/imgs/etc/2/ki3.png",
    span: "md:col-span-3",
  },
  {
    id: 4,
    title: "Data Sync & Segmentation",
    description:
      "Sync customer data to enable: dynamic segmentation – personalized engagement – lifecycle campaigns – targeted communication strategies.",
    image: "/imgs/etc/2/ki4.png",
    span: "md:col-span-3",
  },
];

export const campaignKeyFeatures: KeyFeature[] = [
  {
    id: 1,
    title: "Drag-and-Drop Bots Creation",
    description:
      "Launch campaigns quickly with an easy interface: templates – pre-built layouts – customizable blocks.",
    image: "/imgs/etc/3/key1.png",
    span: "md:col-span-2",
  },
  {
    id: 2,
    title: "Audience Segmentation",
    description:
      "Target the right audience using filters like: location – last purchase – spending range – engagement level – customer lifecycle stage.",
    image: "/imgs/etc/3/key2.png",
    span: "md:col-span-2",
  },
  {
    id: 3,
    title: "Personalization at Scale",
    description:
      "Add customer details dynamically: name – product info – transaction details – offers and promo codes.",
    image: "/imgs/etc/3/key3.png",
    span: "md:col-span-2",
  },
  {
    id: 4,
    title: "Scheduling & Automation",
    description:
      "Run scheduled campaigns for: birthdays – renewals – reminders – festival promotions – time-based offers.",
    image: "/imgs/etc/3/key4.png",
    span: "md:col-span-2",
  },
  {
    id: 5,
    title: "A/B Testing (Performance Optimization)",
    description:
      "Test two message variants and choose the winner based on: open rate – click rate – reply rate.",
    image: "/imgs/etc/3/key5.png",
    span: "md:col-span-2",
  },
  {
    id: 6,
    title: "Real-Time Analytics Dashboard",
    description:
      "Track performance metrics like: delivered – opened – clicked – failed – replied – Conversations.",
    image: "/imgs/etc/3/key6.png",
    span: "md:col-span-2",
  },
];

import { Industry } from "./Industries";

export const industries: Industry[] = [
  {
    id: 1,
    title: "E-commerce",
    image: "/imgs/etc/1/itb1.png",
    bgColor: "bg-[#FFEEC0]",
  },
  {
    id: 2,
    title: "Fintech & Payments",
    image: "/imgs/etc/1/itb2.png",
    bgColor: "bg-[#FFBEC1]",
  },
  {
    id: 3,
    title: "Telecom",
    image: "/imgs/etc/1/itb3.png",
    bgColor: "bg-[#F5D6FD]",
  },
  {
    id: 4,
    title: "Logistics",
    image: "/imgs/etc/1/itb4.png",
    bgColor: "bg-[#FDF5FF]",
  },
  {
    id: 5,
    title: "Education & Services",
    image: "/imgs/etc/1/itb5.png",
    bgColor: "bg-[#6A47F24D]",
  },
  {
    id: 6,
    title: "Healthcare",
    image: "/imgs/etc/1/itb6.png",
    bgColor: "bg-[#CBD8F8]",
  },
];

import { WhoShouldUseItem } from "./WhoShouldUseItem";

export const whoShouldUse: WhoShouldUseItem[] = [
  {
    id: 1,
    title: "Customer Support Teams",
    image: "/imgs/etc/1/wsua1.png",
  },
  {
    id: 2,
    title: "Contact Centers",
    image: "/imgs/etc/1/wsua2.png",
  },
  {
    id: 3,
    title: "Sales Support Teams",
    image: "/imgs/etc/1/wsua3.png",
  },
  {
    id: 4,
    title: "Technical Support Teams",
    image: "/imgs/etc/1/wsua4.png",
  },
  {
    id: 5,
    title: "Complaint Resolution Desks",
    image: "/imgs/etc/1/wsua5.png",
  },
];

export const useCases: WhoShouldUseItem[] = [
  {
    id: 1,
    title: "OTP automation",
    image: "/imgs/etc/2/uc1.png",
  },
  {
    id: 2,
    title: "Payment confirmation message",
    image: "/imgs/etc/2/uc2.png",
  },
  {
    id: 3,
    title: "Lead capture → CRM sync",
    image: "/imgs/etc/2/uc3.png",
  },
  {
    id: 4,
    title: "Ticket creation → auto update",
    image: "/imgs/etc/2/uc4.png",
  },
  {
    id: 5,
    title: "Delivery status alerts",
    image: "/imgs/etc/2/uc5.png",
  },
];

export const industry: WhoShouldUseItem[] = [
  {
    id: 1,
    title: "Retail & E-commerce",
    image: "/imgs/etc/3/uc1.png",
  },
  {
    id: 2,
    title: "BFSI (Banking & Finance)",
    image: "/imgs/etc/3/uc2.png",
  },
  {
    id: 3,
    title: "Travel & Hospitality",
    image: "/imgs/etc/3/uc3.png",
  },
  {
    id: 4,
    title: "Telecom",
    image: "/imgs/etc/3/uc4.png",
  },
  {
    id: 5,
    title: "Subscription businesses",
    image: "/imgs/etc/3/uc5.png",
  },
];

import {
  Target,
  Sparkles,
  Clock1,
  BarChart3Icon,
  HeartHandshake,
} from "lucide-react";

export const businessBenefits: Step[] = [
  {
    id: 1,
    title: "More Conversations",
    description: "From better targeting",
    icon: "./imgs/etc/3/hw1.png",
  },
  {
    id: 2,
    title: "Higher Engagement",
    description: "Via personalization",
    icon: "./imgs/etc/3/hw1.png",
  },
  {
    id: 3,
    title: "Real-Time Automation",
    description: "Instant intelligent workflows",
    icon: "./imgs/etc/3/hw2.png",
  },
  {
    id: 4,
    title: "Improved ROI",
    description: "From analytics insights",
    icon: "./imgs/etc/3/hw3.png",
  },
  {
    id: 5,
    title: "Better Customer Retention",
    description: "And reactivation strategies",
    icon: "./imgs/etc/3/hw4.png",
  },
];


export const conversationBuilderFeatures: KeyFeature[] = [
  {
    id: 1,
    title: "Visual Flow Builder",
    description:
      "Create conversation logic using: nodes – conditions – branching paths – fallback replies.",
    image: "/imgs/etc/4/kf1.png",
    span: "md:col-span-3",
  },
  {
    id: 2,
    title: "Rich Interactions",
    description:
      "Use interactive components like: buttons – quick replies – carousels – images & media – location and maps.",
    image: "/imgs/etc/4/kf2.png",
    span: "md:col-span-3",
  },
  {
    id: 3,
    title: "Smart Lead Capture",
    description:
      "Collect: name – email – phone – service requirement and push it directly into CRM or pipeline.",
    image: "/imgs/etc/4/kf3.png",
    span: "md:col-span-2",
  },
  {
    id: 4,
    title: "Intent-Based Routing",
    description:
      "Route users based on: keywords – options chosen – intent type and connect them with human agent if needed.",
    image: "/imgs/etc/4/kf4.png",
    span: "md:col-span-2",
  },
  {
    id: 5,
    title: "Multi-Channel Deployment",
    description:
      "Create once and deploy to: WhatsApp – RCS – Webchat – and other supported channels.",
    image: "/imgs/etc/4/kf5.png",
    span: "md:col-span-2",
  },
]

export const supportBenefits: Step[] = [
  {
    id: 1,
    title: "Reduce Customer",
    description: "Support Load",
    icon: "./imgs/etc/1/hw1.png",
  },
  {
    id: 2,
    title: "Increase Lead",
    description: "Conversation",
    icon: "./imgs/etc/1/hw1.png",
  },
  {
    id: 3,
    title: "Improve Response",
    description: "Speed",
    icon: "./imgs/etc/1/hw1.png",
  },
  {
    id: 4,
    title: "Provide 24/7",
    description: "Support",
    icon: "./imgs/etc/1/hw1.png",
  },
  {
    id: 5,
    title: "Enhance Customer",
    description: "Experience",
    icon: "./imgs/etc/1/hw1.png",
  },
];

export const businessBenefitsFlow: Step[] = [
  {
    id: 1,
    title: "Reduce Customer",
    description: "Support Load",
    icon: "./imgs/etc/4/hw1.png",
  },
  {
    id: 2,
    title: "Increase Lead",
    description: "Conversation",
    icon: "./imgs/etc/4/hw2.png",
  },
  {
    id: 3,
    title: "Improve Response",
    description: "Speed",
    icon: "./imgs/etc/4/hw3.png",
  },
  {
    id: 4,
    title: "Provide 24/7",
    description: "Support",
    icon: "./imgs/etc/4/hw4.png",
  },
  {
    id: 5,
    title: "Enhance Customer",
    description: "Experience",
    icon: "./imgs/etc/4/hw5.png",
  },
];

export const bestUseCases: Industry[] = [
  {
    id: 1,
    title: "FAQ Bot",
    image: "/imgs/etc/4/buc1.png",
    bgColor: "bg-[#FFEEC0]",
  },
  {
    id: 2,
    title: "Lead Generation Bot",
    image: "/imgs/etc/4/buc2.png",
    bgColor: "bg-[#FFBEC1]",
  },
  {
    id: 3,
    title: "Appointment Booking",
    image: "/imgs/etc/4/buc3.png",
    bgColor: "bg-[#F5D6FD]",
  },
  {
    id: 4,
    title: "Order Tracking",
    image: "/imgs/etc/4/buc4.png",
    bgColor: "bg-[#FDF5FF]",
  },
  {
    id: 5,
    title: "Complaint Registration",
    image: "/imgs/etc/4/buc5.png",
    bgColor: "bg-[#6A47F24D]",
  },
  {
    id: 6,
    title: "Onboarding Flows",
    image: "/imgs/etc/4/buc6.png",
    bgColor: "bg-[#CBD8F8]",
  },
];