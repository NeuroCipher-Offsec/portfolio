
const settings = {
  isSplash: false, 
};

const seo = {
 title: "Advik.dev",
  description:
    "Student & JEE Aspirant exploring cybersecurity, technology, and building projects.",
  og: {
    title: "Advik Mittal | Portfolio",
    type: "website",
    url: "https://advikmittal.netlify.app",
  },
};

const greeting = {
  title: "Advik Mittal",
  logo_name: "AdvikMittal",
  nickname: "neurocipher",
  subTitle:
    "Student & JEE Aspirant exploring cybersecurity, technology, and building projects.",
  githubProfile: "https://github.com/NeuroCipher-Offsec/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/NeuroCipher-Offsec",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:hackerbro838@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/advikmittal7",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/pvt_advik.mittal/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],      
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Central Academy Sardarpura, Udaipur",
      subtitle: "Class 1 to 5",
      duration: "2016 - 2020",
    },
    {
      title: "Jawahar Navodaya vidyalaya, Mavli",
      subtitle: "Class 6",
      duration: "2021 - 2021",
      descriptions: [
        "⚡ Got selected in JNV Mavli, with 1st rank in the state. Studied at JNV for 1 year",
      ],
    },
    {
      title: "Central Academy Sardarpura, Udaipur",
      subtitle: "Class 7 to 10",
      duration: "2022 - 2026",
    },
    {
      title: "Allen Career Institute",
      subtitle: "Class 11 - Till date",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Enrolled in Allen Udaipur for JEE 2028 coaching",
      ],
    },
    {
  ],
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with cybersecurity, calisthenics, and advices regarding studies",
  },
  },
  addressSection: {
    title: "Address",
    subtitle: "Udaipur, Rajasthan",
    locality: "Bhuwana",
    country: "India",
    region: "Rajasthan",
    postalCode: "303001",
    streetAddress: "B-202, Eden Court",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  contactPageData,
};
