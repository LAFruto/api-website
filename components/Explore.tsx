// import { EXPLORE } from "@/constants";
// import Image from "next/image";
// import React from 'react'

// interface ExploreProps {
//   image: string;
//   title: string;
//   date: string;
//   description: string;  
// }

// const ExploreItem = ( {image, title, date, description}: ExploreProps ) => {
//   return (
//     <div className="border-2 border-gray-500 flex flex-col xs:max-w-[500px] xl:max-w-[1000px] h-full p-6 gap-4 xl:gap-8 ">
//         <div className="w-auto">
//           <Image
//             src={image}
//             alt={title}
//             width={1000}
//             height={500}
//         />
//         </div>
//         <div className="flex flex-col w-full justify-between gap-2">
//           <div>
//             <h3 className="bold-20 capitalize">{title}</h3>
//             <p className="regular-14 mt-2  ">{date}</p>
//             <p className="regular-14 mt-2 mb-2">{description}</p>
//           </div>
//         </div>
//     </div>
//   )
// }

// const Explore = () => {
//   return (
//     <section className="flexCenter flex-col py-24 gap-12 bg-gray-10 ">
//       <h2 className="bold-40 lg:bold-64 capitalize">Explore</h2>
//         <div className="flexCenter flex-col max-container padding-container gap-8 lg:grid-cols-2 lg:grid xl:grid-cols-3">
//         {EXPLORE.map(explore => (
//           <ExploreItem
//               key={explore.title}
//               image={explore.image}
//               title={explore.title}
//               date={explore.date}
//               description={explore.description}
//             />
//           ))}
//         </div>
//     </section>
//   )
// }

// export default Explore
