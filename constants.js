export const METADATA = {
  author: "Prathamesh Pawar",
  title: "Portfolio | Prathamesh Pawar",
  description:
    "Prathamesh pawar is a professional Data Scientist specializing in AI, machine learning, and advanced analytics, passionate about solving complex problems through data-driven innovation.",
  siteUrl: "https://www.shubhporwal.me/", //baki 
  twitterHandle: "@13Prathamesh",
  keywords: [
    "Prathamesh Pawar",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png", // baki
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A professional Data Scientist",
  "I derive insights from complex data",
  "I innovate with AI and machine learning",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: prathmeshpawar212002@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/prathameshpawar21/",
  },
  {
    name: "github",
    url: "https://github.com/Prathmeshpawar21",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/prathmesh_pawar_21/",
  },
  {
    name: "twitter",
    url: "https://x.com/13Prathamesh",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

//baki from here down
export const PROJECTS = [
  {
    name: "Car Price Prediction",
    image: "/projects/carprice2.png",
    blurImage: "/projects/blur/carpriceblur.png", 
    description: "Car Price Prediction using Python/Flask + Machine Learning 🚕",
    gradient: ["#F14658", "#DC2537"],
    url: "https://carprice-w4i6.onrender.com/",
    tech: ["python-svgrepo-com", "vs-code-svgrepo-com","css-3-svgrepo-com","machine-learning-03-svgrepo-com",  "flask-svgrepo-com",],
  },
  {
    name: "RAG/Fine-tuning PDF Chat",
    image: "/projects/Ragpdf2.png",
    blurImage: "/projects/blur/ragblur.png",
    description: "Mulit PDF Chat using Langchain + GenAI + OpenAI/Mistral/Ollama 🤖",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://super-chat-pdf.streamlit.app/",
    tech: ["openai-svgrepo-com","mistral-ai-icon", "tensorflow-svgrepo-com", "parrot-svgrepo-com","ollama"],
  },
  {
    name: "Medication Recommendation",
    image: "/projects/medication1.png",
    blurImage: "/projects/blur/medicationblur.png",
    description:"Medication recommendation using Python/Flask + ML/Scikit-Learn ⚕️",
    gradient: ["#000066", "#6699FF"],
    url: "https://medication-recommendation.onrender.com/index.html",
    tech: ["vs-code-svgrepo-com", "python-svgrepo-com", "numpy-svgrepo-com","flask-svgrepo-com"],
  },
  {
    name: "Face Emotion, Age, Gender Detection",
    image: "/projects/face.png",
    blurImage: "/projects/blur/faceA4.jpg",
    description: "Project Using - OpenCV, Keras, Tensorflow,",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["opencv-svgrepo-com","tensorflow-svgrepo-com","flask-svgrepo-com","pytorch-svgrepo-com"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Aviate",
      description:
        "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
