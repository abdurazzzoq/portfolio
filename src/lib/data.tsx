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
  }
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
