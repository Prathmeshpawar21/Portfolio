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
    description: "Car Price Prediction using - Python/Flask + Machine Learning 🚕",
    gradient: ["#F14658", "#DC2537"],
    url: "https://carprice-w4i6.onrender.com/",
    tech: ["python-svgrepo-com", "vs-code-svgrepo-com","css-3-svgrepo-com","machine-learning-03-svgrepo-com",  "flask-svgrepo-com",],
  },
  {
    name: "RAG/Fine-tuning PDF Chat",
    image: "/projects/Ragpdf2.png",
    blurImage: "/projects/blur/ragblur.png",
    description: "Mulit PDF Chat using - Langchain + GenAI + OpenAI/Mistral/Ollama 🤖",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://super-chat-pdf.streamlit.app/",
    tech: ["openai-svgrepo-com","mistral-ai-icon", "tensorflow-svgrepo-com", "parrot-svgrepo-com","ollama"],
  },
  {
    name: "Medication Recommendation",
    image: "/projects/medication3.png",
    blurImage: "/projects/blur/medicationblur.png",
    description:"Medication recommendation using - Python/Flask + ML/Scikit-Learn ⚕️",
    gradient: ["#000066", "#6699FF"],
    url: "https://medication-recommendation.onrender.com/index.html",
    tech: ["vs-code-svgrepo-com", "python-svgrepo-com", "numpy-svgrepo-com","flask-svgrepo-com"],
  },
  {
    name: "Blinkit Sales Analytics",
    image: "/projects/blinkit.png",
    blurImage: "/projects/blur/blinkitblur.png",
    description: "Project using - PowerBI, Tableau, Python 📈",
    gradient: ["#003300", "#66FF99"],
    url: "https://blinkitanalytics.netlify.app/",
    tech: ["tableau-software","power-bi-icon","excel-svgrepo-com","python-svgrepo-com"],
  },
  {
    name: "Face Emotion, Age, Gender Detection",
    image: "/projects/face2.png",
    blurImage: "/projects/blur/face2blur.png",
    description: "Project using - OpenCV, Keras, Tensorflow, Python",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["opencv-svgrepo-com","tensorflow-svgrepo-com","flask-svgrepo-com","pytorch-svgrepo-com"],
  },
  {
    name: "HR Analytics Dashboard",
    image: "/projects/hr2.png",
    blurImage: "/projects/blur/hrblur.png",
    description: "Project using - PowerBI, Tableau, Python 📊",
    gradient: ["#330033", "#9966FF"],
    url: "https://hrdashboardanalytics.netlify.app/",
    tech: ["tableau-software","python-svgrepo-com","power-bi-icon","excel-svgrepo-com"],
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
      title: "Stylio Store",
      role: "(Founder & Owner)",
      description:
        "An online platform offering a wide range of high-quality products, designed to provide customers with a seamless and convenient shopping experience",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "In 2023, our dropshipping platform, based in India, faced challenges with product availability and customer experience. Leading a small team, we streamlined our product selection, improved order tracking, and optimized the website for faster checkouts. These updates enhanced customer satisfaction, reduced delays, and helped us grow by offering the latest trendy products more efficiently to Indian customers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Founder & Owner
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Since launching in India, our dropshipping business has evolved by expanding product offerings, improving website functionality, and streamlining order fulfillment to deliver a better shopping experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Founder & Owner
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "We continuously optimize our dropshipping platform by refining product selection, improving website speed, and enhancing order tracking to ensure a smooth and efficient shopping experience for customers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Founder & Owner
        </div>
      ),
    },
  ],



  AVIATE: [
    {
      title: "Zscaler",
      role: "(Virtual Intern)",
      description:
        "Zero Trust Cloud Security Virtual Internship at Zscaler (AICTE Provider)",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Skills Acquired",
      description:
        "During the Zero Trust Cloud Security Virtual Internship, I gained a strong understanding of cloud security principles, including Zero Trust architecture, access control, and network traffic monitoring. I developed skills in implementing security protocols, protecting data, and managing access within cloud environments, all while enhancing my knowledge of modern cybersecurity practices.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Virtual Intern
        </div>
      ),
    },
  ],



  SPACENOS: [
    {
      title: "Application Square Infotech Pvt Ltd",
      role: "(Web Developer Intern)",

      description:
        "Application Square Infotech is a web development startup specializing in scalable, user-friendly web solutions using React, Flask, and modern technologies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          During my internship, I contributed to developing responsive web pages using HTML, CSS, and JavaScript, while also working with Bootstrap for UI design. I built interactive features and applications using React and Flask, optimizing the user experience and ensuring functionality across devices.
        </div>
      ),
    },
    {
      title: "Contribution",
      description:
        "I contributed to building responsive websites using HTML, CSS, JavaScript, and Bootstrap. I developed interactive features with React and Flask, optimizing performance and enhancing user experience through collaboration with the team.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],




};

export const GTAG = "G-5HCTL2TJ5W";
