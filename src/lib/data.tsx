import { Github } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";

import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCss from "/public/images/logos/css.svg";
import LogoHtml from "/public/images/logos/html.svg";

import LogoGraphql from "/public/images/logos/graphql.svg";

import LogoGit from "/public/images/logos/icon-git.svg";


import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/abdurazzzoq",
  GITHUB_REPO: "https://github.com/abdurazzzoq",
  TWITTER: "https://github.com/abdurazzzoq",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/abdurazzzoq",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Html",
    logo: LogoHtml,
    url: "https://html.com/",
  },
  {
    label: "Css",
    logo: LogoCss,
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    label: "Graphql",
    logo: LogoGraphql,
    url: "https://graphql.org/",
  },
  
];


export const PROJECTS: ProjectDetails[] = [
  {
    name: "Vumo-movie",
    description: "My movie app was designed to provide users with a seamless and immersive movie watching experience, featuring a vast collection of films from different genres and countries, including the latestreleases and all-time classics. The app's innovative features and functionalities, such as personalized recommendations, advanced search, and user-generated content, have made it a go-to platform for movie enthusiasts around the world. Moreover, my movie app has been praised for its user-friendly interface and smooth performance, ensuring a flawless viewing experience for users across different devices and platforms.",
    url: "https://vumo-movie.vercel.app/",
    previewImage: 'https://user-images.githubusercontent.com/61585443/185205338-c20bb089-618f-49e2-b740-1c02838030a4.png',
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "MaterialUI",
      "Zustand",
      "Context",
      "Stripe",
      "Formik",
      "SSR",
      "SEO",
      "Subscription Plan",
      "Payment",
      "Firebase",

    ],
  },
  {
    name: "Car Showcase",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://car-showcase-rdyc.vercel.app/",
    previewImage: 'https://user-images.githubusercontent.com/56222433/269600229-4f389ca2-7235-4b32-9df5-aae6822a5d4d.png',
    technologies: [
      "React",
      "NextJs",
      "Typescript",
      "TailwindCss",
      "Headless UI",
      "Rapid API",
      "Styled Components",
    ],
  },
  {
    name: "Youtube CLone",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://rad-sunburst-054ded.netlify.app/",
    previewImage: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1627297133283/F0XaiyX7H.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    technologies: [
      "React",
      "Typescript",
     "Rapid API",
     "Material UI"
    ],
  },
  {
    name: "Charts",
    description:
      "A platform for illustrating charts a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://test-frontend-cisv.vercel.app/",
    previewImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/63d40688081195.5dcb933b924eb.png',
    technologies: [
      "React",
      "Typescript",
      "Tailwindcss",
      "Firebase",

    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
