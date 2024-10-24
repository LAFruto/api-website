import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedinIcon";
import { Socials } from "@/data";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "HOME" },
  { href: "/about", key: "about", label: "ABOUT" },
  { href: "/involvements", key: "involvements", label: "INVOLVEMENTS" },
];

export const SOCIALS = [
  {
    link: "https://www.facebook.com/api.mapuamcm",
    icon: FacebookIcon,
    color: "blue-800",
  },
  {
    link: "https://www.instagram.com/api_mapuamcm/",
    icon: InstagramIcon,
    color: "pink-600",
  },
  {
    link: "https://www.linkedin.com/company/96648842/",
    icon: LinkedInIcon,
    color: "cyan-500",
  },
];

export const PARTNERS = [
  {
    logo: "/images/partner_gdsc.png",
    name: "Google Developers Student Clubs Mapúa MCM ",
    link: "https://gdsc.community.dev/mapua-malayan-colleges-mindanao/?fbclid=IwAR3pbPPhu5Rnst8H-Y6qi5XBT3zONiGe5G2jjnqS8ea_br31Tesp8Y2n4VQ",
  },
  {
    logo: "/images/partner_dice.png",
    name: "Davao Interschool Computer Enthusiasts",
    link: "https://dicedvo.org",
  },
  {
    logo: "/images/partner_css.png",
    name: "MMCM Computing Students Society ",
    link: "https://www.facebook.com/CSS.MMCM",
  },
];

export const STATS = [
  {
    title: "Workshops Deployed",
    number: "8",
  },
  {
    title: "Competitions Placed",
    number: "6",
  },
  {
    title: "Students Engaged",
    number: "320",
  },
];

export const TESTIMONIALS = [
  {
    image: "/images/testimonial_baste.png",
    name: "Martzel Baste ",
    position: "Advisor",
    quote:
      "This club offers a fantastic platform for students to delve deeper into technology while honing their skills through interactive workshops and exciting competitions. It's a valuable opportunity for hands-on learning and personal growth.",
  },
  {
    image: "/images/testimonial_baste.png",
    name: "Martzel Baste ",
    position: "Advisor",
    quote:
      "This club offers a fantastic platform for students to delve deeper into technology while honing their skills through interactive workshops and exciting competitions. It's a valuable opportunity for hands-on learning and personal growth.",
  },
];

export const FAQs = [
  {
    question: "How Can I Become a Member of the Club?",
    answer:
      "To become a member of the club, simply watch out for the annual registration form released during the first term. This form, typically hosted on Google Forms, remains open for one semester. Being a member entitles you to reduced fees for our workshops and mentorship for competitions.",
    image: "/images/faq_bg1.png",
  },
  {
    question: "How to Enroll in Workshops?",
    answer:
      "Joining workshops is easy! Keep an eye on our social media channels for announcements about upcoming workshops. Once announced, you'll find the registration form shared in our announcements. Our goal is to have atleast one workshop per semester!",
    image: "/images/faq_bg2.png",
  },
  {
    question: "How to take part in Competitions?",
    answer:
      "Participating in competitions is an exciting opportunity! We regularly announce various competitions, both within and outside the university's scope, through our social media platforms. For those who excel, mentorship opportunities may also become available.",
    image: "/images/faq_bg3.png",
  },
];

export type TIMELINE = {
  image: string;
  date: Date;
  description: string;
};

export const TIMELINES = [
  {
    image: "/images/timeline/july2023.png",
    date: new Date("2023-07-01"),
    description: "The Association of Proactive Innovators is founded",
  },
  {
    image: "/images/timeline/august2023.jpg",
    date: new Date("2023-8-01"),
    description: "API officially partners with DICE",
  },
  {
    image: "/images/timeline/september2023.jpg",
    date: new Date("2023-09-01"),
    description: "API holds its first ever workshop (Java Zero to Hero)",
  },
  {
    image: "/images/timeline/november2023.jpg",
    date: new Date("2023-11-01"),
    description: "API holds its first team-building activity",
  },
  {
    image: "/images/timeline/february2024.png",
    date: new Date("2024-02-01"),
    description: "API holds its a multi-workshop (Python: Breaking Into Greatness)",
  },
  {
    image: "/images/timeline/august2024.jpg",
    date: new Date("2024-08-01"),
    description: "Re-election of officers for API's second year",
  },
  {
    image: "/images/timeline/september2024.jpg",
    date: new Date("2024-09-14"),
    description: "API holds its third workshop (C++ Lab)",
  },
  {
    image: "/images/timeline/september2024.jpg",
    date: new Date("2024-10-07"),
    description: "Hack the System (Cybersecurity Seminar)",
  },
];

export type OFFICER = {
  image: string;
  firstName: string;
  lastName: string;
  position: string;
  socials: Socials[];
};

export const OFFICERS = [
  {
    image: "/images/officers/cordero.png",
    firstName: "Kiah Nhame",
    lastName: "Cordero",
    position: "President",
    socials: [
      {
        url: "https://www.linkedin.com/in/kiahnhamecordero/ ",
        type: "LINKEDIN",
      },
    ],
  },
  {
    image: "/images/officers/pangilinan.png",
    firstName: "Anya",
    lastName: "Pangilinan",
    position: "Internal Vice President",
    socials: [],
  },
  {
    image: "/images/officers/royeras.png",
    firstName: "Mc Curvin",
    lastName: "Royeras",
    position: "External Vice President",
    socials: [
      {
        url: "https://www.linkedin.com/in/mc-curvin-royeras-462a27251/",
        type: "LINKEDIN",
      },
      {
        url: "https://github.com/McCurvin",
        type: "GITHUB",
      },
    ],
  },
  {
    image: "/images/officers/nodado.png",
    firstName: "Alfred Dads",
    lastName: "Nodado",
    position: "Secretary",
    socials: [
      {
        url: "https://www.linkedin.com/in/%20alfred-nodado-b24647251",
        type: "LINKEDIN",
      },
      {
        url: "https://github.com/Auguzcht",
        type: "GITHUB",
      },
    ],
  },
  {
    image: "/images/officers/cabania.png",
    firstName: "Anikka",
    lastName: "Cabania",
    position: "Treasurer",
    socials: [
      {
        url: "https://www.linkedin.com/in/nikka-cabania/",
        type: "LINKEDIN",
      },
      {
        url: "https://github.com/scorkie",
        type: "GITHUB",
      },
    ],
  },
  {
    image: "/images/officers/acquiat.png",
    firstName: "Gyrro",
    lastName: "Acquiat",
    position: "Auditor",
    socials: [],
  },
  {
    image: "/images/officers/diosay.png",
    firstName: "Ryan Mark",
    lastName: "Diosay",
    position: "Public Informations Officer",
    socials: [
      {
        url: "https://www.linkedin.com/in/ryan-mark-diosay-08891b293/ ",
        type: "LINKEDIN",
      },
    ],
  },
  {
    image: "/images/officers/gonzaga.png",
    firstName: "Stacey",
    lastName: "Gonzaga",
    position: "Research & Development Head",
    socials: [
      {
        url: "https://www.linkedin.com/in/stacey-&rew-gonzaga/ ",
        type: "LINKEDIN",
      },
    ],
  },
  {
    image: "/images/officers/toyoda.png",
    firstName: "Jaen Rafael ",
    lastName: "Toyoda",
    position: "Research & Development Member",
    socials: [
      {
        url: "https://www.linkedin.com/in/jaen-rafael-toyoda-06936b252/",
        type: "LINKEDIN",
      },
      {
        url: "https://github.com/JRToyoda",
        type: "GITHUB",
      },
    ],
  },
  {
    image: "/images/officers/agunod.png",
    firstName: "Juan Miguel",
    lastName: "Agunod",
    position: "Research & Development Member",
    socials: [],
  },
  {
    image: "/images/officers/devera.png",
    firstName: "Laurence",
    lastName: "Devera",
    position: "Research & Development Member",
    socials: [
      {
        url: "https://www.linkedin.com/in/laurence-kharl-devera-3242b9288/",
        type: "LINKEDIN",
      },
      {
        url: "https://github.com/Cogiii",
        type: "GITHUB",
      },
    ],
  },
  {
    image: "/images/officers/comon.png",
    firstName: "Rashid",
    lastName: "Comon",
    position: "Creatives & Promotions Head",
    socials: [],
  },
  {
    image: "/images/officers/blanco.png",
    firstName: "Carlos",
    lastName: "Blanco",
    position: "Creatives & Promotions Member",
    socials: [],
  },
  {
    image: "/images/officers/navarez.png",
    firstName: "Jasper",
    lastName: "Navarez",
    position: "Creatives & Promotions Member",
    socials: [],
  },
  {
    image: "/images/officers/sato.png",
    firstName: "Hanna",
    lastName: "Sato",
    position: "Creatives & Promotions Member",
    socials: [],
  },
  {
    image: "/images/officers/ortega.png",
    firstName: "Arabella",
    lastName: "Ortega",
    position: "Creatives & Promotions Member",
    socials: [],
  },
  {
    image: "/images/officers/lobaton.png",
    firstName: "Denise",
    lastName: "Lobaton",
    position: "Creatives & Promotions Member",
    socials: [],
  },
  {
    image: "/images/officers/yap.png",
    firstName: "Christopher",
    lastName: "Yap",
    position: "Social Media & Comms Member",
    socials: [],
  },
  {
    image: "/images/officers/querequincia.png",
    firstName: "Mark II",
    lastName: "Querequincia",
    position: "Social Media & Comms Member",
    socials: [],
  },
  {
    image: "/images/officers/boncales.png",
    firstName: "Jose Donie",
    lastName: "Boncales",
    position: "Finance & Logistics Member",
    socials: [],
  },
  {
    image: "/images/officers/lechoncito.png",
    firstName: "Josef Neil",
    lastName: "Lechoncito",
    position: "Finance & Logistics Member",
    socials: [],
  },
  {
    image: "/images/officers/fruto.png",
    firstName: "Luis Angelo",
    lastName: "Fruto",
    position: "Technical Operations Head",
    socials: [
      {
        url: "https://www.linkedin.com/in/luis-angelo-fruto-8b868524b/ ",
        type: "LINKEDIN",
      },
    ],
  },
  {
    image: "/images/officers/dayuno.png",
    firstName: "Jhon Lloyd",
    lastName: "Dayuno",
    position: "Technical Operations Member",
    socials: [
      {
        url: "https://www.linkedin.com/in/jhon-lloyd-dayuno-570646251/ ",
        type: "LINKEDIN",
      },
    ],
  },
  {
    image: "/images/officers/marr.png",
    firstName: "Keian",
    lastName: "Mar",
    position: "Technical Operations Member",
    socials: [
      {
        url: "https://www.linkedin.com/in/keianmar/",
        type: "LINKEDIN",
      },
      {
        url: "https://github.com/7kei",
        type: "GITHUB",
      },
    ],
  },
  {
    image: "/images/officers/villadores.png",
    firstName: "Janrev",
    lastName: "Villadores",
    position: "Pitching & Innovation Head",
    socials: [
      {
        url: "https://www.linkedin.com/in/janrev-lance-villadores/",
        type: "LINKEDIN",
      },
    ],
  },
  {
    image: "/images/officers/alovera.png",
    firstName: "John Lawrence",
    lastName: "Alovera",
    position: "Pitching & Innovation Head",
    socials: [],
  },
  {
    image: "/images/officers/diaz.png",
    firstName: "Shanica",
    lastName: "Diaz",
    position: "Secretariat Committee",
    socials: [],
  },
];
