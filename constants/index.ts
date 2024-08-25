import { Tag } from "@prisma/client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    number: "5",
  },
  {
    title: "Competitions Placed",
    number: "5",
  },
  {
    title: "Students Taught",
    number: "181",
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

export const RECENTS = [
  {
    image: "/images/involvement_bigpp.jpg",
    title: "Breaking into Greatness Programming with Python",
    tags: ["February 2024", "Workshop"],
    url: "breaking-into-greatness-programming-with-python",
  },
  {
    image: "/images/involvement_teambuilding.png",
    title: "API's First Team-Building",
    tags: ["November 2023"],
    url: "apis-first-team-building",
  },
  {
    image: "/images/involvement_pjdsc.png",
    title: "BPI's Philippine Junior Data Science Competition",
    tags: ["November 2023", "Competition"],
    url: "bpis-philippine-junior-data-science-competition",
  },
  {
    image: "/images/involvement_zerotohero.png",
    title: "From Zero to Hero: Introduction to Java",
    tags: ["September 2023"],
    url: "from-zero-to-hero",
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

// About Page
export const TIMELINES = [
  {
    year: 2023,
    activity: [
      {
        image: "/images/timeline_july2023.png",
        month: "July",
        description: "The Association of Proactive Innovators is founded",
      },
      {
        image: "/images/timeline_august2023.jpg",
        month: "August",
        description: "API officially partners with DICE",
      },
      {
        image: "/images/timeline_september2023.jpg",
        month: "September",
        description: "API holds its first ever workshop (Java Zero to Hero)",
      },
      {
        image: "/images/timeline_november2023.jpg",
        month: "November",
        description: "API holds its first team-building activity",
      },
    ],
  },
  {
    year: 2024,
    activity: [
      {
        image: "/images/timeline_february2024.png",
        month: "February",
        description: "API holds its second workshop (Python: Breaking Into Greatness)",
      },
    ],
  },
  {
    year: 2025,
    activity: [],
  },
];

export const OFFICERS = [
  {
    image: "/images/officers/cordero.jpg",
    firstName: "Kiah Nhame",
    lastName: "Cordero",
    position: "President",
    link: "https://github.com/",
  },
  {
    image: "/images/officers/diosay.jpg",
    firstName: "Ryan Mark",
    lastName: "Diosay",
    position: "Secretary",
    link: "https://github.com/",
  },
  {
    image: "/images/officers/villadores.jpg",
    firstName: "Janrev Lance",
    lastName: "Villadores",
    position: "PIO",
    link: "https://github.com/",
  },
  {
    image: "/images/officers/gonzaga.jpg",
    firstName: "Stacey Andrew",
    lastName: "Gonzaga",
    position: "Research and Development Head",
    link: "https://github.com/",
  },
  {
    image: "/images/officers/fruto.jpg",
    firstName: "Luis Angelo",
    lastName: "Fruto",
    position: "Technical Operations Head",
    link: "https://github.com/",
  },
  {
    image: "/images/officers/acquiat.jpg",
    firstName: "Gyrro",
    lastName: "Acquiat",
    position: "Logistics Member",
    link: "https://github.com/",
  },
  {
    image: "/images/officers/dayuno.jpg",
    firstName: "Jhon Lloyd Dayuno",
    lastName: "",
    position: "Technical Operations Member",
    link: "https://github.com/",
  },
  {
    image: "/images/officers/toyoda.jpg",
    firstName: "Jaen Rafael ",
    lastName: "Toyoda",
    position: "Research & Development Member",
    link: "https://github.com/",
  },
];

export const INVOLVEMENTS = [
  {
    title: "Breaking into Greatness Programming with Python",
    image: "/images/involvement_bigpp.jpg",
    tags: [Tag.WORKSHOP] as Tag[],
    url: "breaking-into-greatness-programming-with-python",
    text: "activity1",
    date: new Date("2024-02-01"),
  },
  {
    image: "/images/involvement_teambuilding.png",
    title: "API's First Team-Building",
    tags: [] as Tag[],
    url: "apis-first-team-building",
    text: "activity2",
    date: new Date("2023-11-01"),
  },
  {
    image: "/images/involvement_pjdsc.png",
    title: "BPI's Philippine Junior Data Science Competition",
    tags: [Tag.COMPETITION] as Tag[],
    url: "bpis-philippine-junior-data-science-competition",
    text: "activity3",
    date: new Date("2023-11-01"),
  },
  {
    image: "/images/involvement_zerotohero.png",
    title: "From Zero to Hero: Introduction to Java",
    tags: [Tag.WORKSHOP] as Tag[],
    url: "from-zero-to-hero",
    text: "activity4",
    date: new Date("2023-09-01"),
  },
  {
    image: "/images/involvement_ctf.png",
    title: "Trend University Capture the Flag",
    tags: [Tag.COMPETITION] as Tag[],
    url: "trend-university-capture-the-flag",
    text: "activity5",
    date: new Date("2023-10-01"),
  },
];
