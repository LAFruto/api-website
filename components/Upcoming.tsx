// import Image from "next/image";
// import React from 'react'
// import Button from "./Button";
// import { UPCOMINGS } from "@/constants";

// interface UpcomingProps {
//   image: string;
//   title: string;
//   date: string;
//   description: string;
//   url: string;
// }

// const UpcomingItem = ({ image, title, date, description, url } : UpcomingProps) => {
//   return (
//     <div className="border-2 flex flex-col w-full xs:max-w-[500px] xl:max-w-[1000px] p-6 gap-4 xl:gap-8 xl:flex-row">
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
//             <h3 className="bold-32 xl:bold-32 capitalize">{title}</h3>
//             <p className="regular-16 mt-2 text-gray-30 ">{date}</p>
//             <p className="regular-16 mt-8 mb-2">{description}</p>
//           </div>
          
//           <Button
//             type="button" 
//             title="About"
//             icon="proceed.svg" 
//             variant="btn_white_square_outline"
//             full
//           />
//         </div>
//     </div>
//   )
// }

// const Upcoming = () => {
//   return (
//     <section className="max-container padding-container flexCenter flex-col py-24f gap-12 lg:w-[800px] xl:w-[1250px]">
//       <h2 className="bold-40 lg:bold-64 capitalize">Upcoming</h2>
//       {UPCOMINGS.map(upcoming => (
//         <UpcomingItem
//             key={upcoming.title}
//             image={upcoming.image}
//             title={upcoming.title}
//             date={upcoming.date}
//             description={upcoming.description}
//             url={upcoming.url}
//           />
//         ))}
//     </section>
//   )
// }

// export default Upcoming
