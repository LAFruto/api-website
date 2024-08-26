import { db } from "@/lib/db";
import { SocialType, Tag } from "@prisma/client";

async function seed() {
  const TIMELINES = [
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
      description: "API holds its second workshop (Python: Breaking Into Greatness)",
    },
  ];

  const OFFICERS = [
    {
      image: "/images/officers/cordero.png",
      firstName: "Kiah Nhame",
      lastName: "Cordero",
      position: "President",
      socials: [
        {
          url: "https://www.linkedin.com/in/kiahnhamecordero/ ",
          type: SocialType.LINKEDIN,
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
      socials: [],
    },
    {
      image: "/images/officers/nodado.png",
      firstName: "Alfred Dads",
      lastName: "Nodado",
      position: "Secretary",
      socials: [],
    },
    {
      image: "/images/officers/cabania.png",
      firstName: "Anikka",
      lastName: "Cabania",
      position: "Treasurer",
      socials: [],
    },
    {
      image: "/images/officers/an.png",
      firstName: "Anikka",
      lastName: "Cabania",
      position: "Treasurer",
      socials: [],
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
          type: SocialType.LINKEDIN,
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
          type: SocialType.LINKEDIN,
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
          url: "https://www.linkedin.com/in/jaen-rafael-toyoda-06936b252/ ",
          type: SocialType.LINKEDIN,
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
      socials: [],
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
          type: SocialType.LINKEDIN,
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
          type: SocialType.LINKEDIN,
        },
      ],
    },
    {
      image: "/images/officers/mar.png",
      firstName: "Keian",
      lastName: "Mar",
      position: "Technical Operations Member",
      socials: [],
    },
    {
      image: "/images/officers/villadores.png",
      firstName: "Janrev",
      lastName: "Villadores",
      position: "Pitching & Innovation Head",
      socials: [
        {
          url: "https://www.linkedin.com/in/janrev-lance-villadores/",
          type: SocialType.LINKEDIN,
        },
      ],
    },
    {
      image: "/images/officers/alovera.png",
      firstName: "John Lawrence",
      lastName: "Alovera",
      position: "Pitching & Innovation Head",
      socials: [
        {
          url: "https://www.linkedin.com/in/janrev-lance-villadores/",
          type: SocialType.LINKEDIN,
        },
      ],
    },
    {
      image: "/images/officers/diaz.png",
      firstName: "Shanica",
      lastName: "Diaz",
      position: "Secretariat Committee",
      socials: [],
    },
  ];

  const INVOLVEMENTS = [
    {
      title: "WordPress Davao Meetup #23",
      image: "/images/involvements/thumbnail/wordpress.jpg",
      tags: [Tag.WORKSHOP] as Tag[],
      url: "wordpress-davao-meetup",
      markdown: "wordpress",
      date: new Date("2024-04-01"),
      socials: [
        {
          url: "https://www.facebook.com",
          type: SocialType.FACEBOOK,
        },
        {
          url: "https://www.instagram.com",
          type: SocialType.INSTAGRAM,
        },
        {
          url: "https://www.facebook.com",
          type: SocialType.LINKEDIN,
        },
      ],
    },
    {
      title: "MCITS & IT Olympiad 2024",
      image: "/images/involvements/thumbnail/mcits2024.jpg",
      tags: [Tag.COMPETITION] as Tag[],
      url: "mcits-2024",
      markdown: "mcits2024",
      date: new Date("2024-02-01"),
      socials: [
        {
          url: "https://www.facebook.com",
          type: SocialType.FACEBOOK,
        },
        {
          url: "https://www.instagram.com",
          type: SocialType.INSTAGRAM,
        },
        {
          url: "https://www.facebook.com",
          type: SocialType.LINKEDIN,
        },
      ],
    },
    {
      title: "Breaking into Greatness Programming with Python",
      image: "/images/involvements/thumbnail/bigpp.png",
      tags: [Tag.WORKSHOP] as Tag[],
      url: "breaking-into-greatness-programming-with-python",
      markdown: "bigpp",
      date: new Date("2024-02-01"),
      socials: [
        {
          url: "https://www.facebook.com",
          type: SocialType.FACEBOOK,
        },
        {
          url: "https://www.instagram.com",
          type: SocialType.INSTAGRAM,
        },
        {
          url: "https://www.facebook.com",
          type: SocialType.LINKEDIN,
        },
      ],
    },
    {
      image: "/images/involvements/thumbnail/teambuilding.png",
      title: "API's First Team-Building",
      tags: [] as Tag[],
      url: "apis-first-team-building",
      markdown: "teambuilding",
      date: new Date("2023-11-01"),
      socials: [
        {
          url: "https://www.facebook.com",
          type: SocialType.FACEBOOK,
        },
        {
          url: "https://www.instagram.com",
          type: SocialType.INSTAGRAM,
        },
        {
          url: "https://www.facebook.com",
          type: SocialType.LINKEDIN,
        },
      ],
    },
    {
      image: "/images/involvements/thumbnail/pjdsc.png",
      title: "BPI's Philippine Junior Data Science Competition",
      tags: [Tag.COMPETITION] as Tag[],
      url: "bpis-philippine-junior-data-science-competition",
      markdown: "pjdsc",
      date: new Date("2023-11-01"),
      socials: [
        {
          url: "https://www.facebook.com",
          type: SocialType.FACEBOOK,
        },
        {
          url: "https://www.instagram.com",
          type: SocialType.INSTAGRAM,
        },
        {
          url: "https://www.facebook.com",
          type: SocialType.LINKEDIN,
        },
      ],
    },
    {
      image: "/images/involvements/thumbnail/zerotohero.png",
      title: "From Zero to Hero: Introduction to Java",
      tags: [Tag.WORKSHOP] as Tag[],
      url: "from-zero-to-hero",
      markdown: "zerotohero",
      date: new Date("2023-09-01"),
      socials: [
        {
          url: "https://www.facebook.com",
          type: SocialType.FACEBOOK,
        },
        {
          url: "https://www.instagram.com",
          type: SocialType.INSTAGRAM,
        },
        {
          url: "https://www.facebook.com",
          type: SocialType.LINKEDIN,
        },
      ],
    },
  ];

  const upsertOfficers = async () => {
    for (const officer of OFFICERS) {
      const { firstName, lastName, socials, position, image } = officer;

      await db.officer.upsert({
        where: {
          firstName_lastName: { firstName: firstName, lastName: lastName },
        },
        update: {},
        create: {
          firstName: firstName,
          lastName: lastName,
          socials: {
            create: socials.map((social) => ({
              url: social.url,
              type: social.type,
            })),
          },
          position: position,
          image: image,
        },
      });
    }
  };
  const upsertTimeline = async () => {
    for (const timeline of TIMELINES) {
      const { date, image, description } = timeline;

      await db.timeline.upsert({
        where: { date: date },
        update: {},
        create: {
          date: date,
          image: image,
          description: description,
        },
      });
    }
  };
  const upsertInvolvements = async () => {
    for (const involvement of INVOLVEMENTS) {
      const { url, title, image, markdown, date, tags, socials } = involvement;

      await db.involvement.upsert({
        where: { url: url },
        update: {},
        create: {
          url: url,
          title: title,
          image: image,
          markdown: markdown,
          date: date,
          tags: tags,
          socials: {
            create: socials.map((social) => ({
              url: social.url,
              type: social.type,
            })),
          },
        },
      });
    }
  };

  upsertOfficers();
  upsertTimeline();
  upsertInvolvements();
}

seed()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
