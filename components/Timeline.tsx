// import { TIMELINES } from "@/constants";
// import Image from "next/image";
// import React from 'react'

// interface TimelineProps {
//   image: string;
//   month: string;
//   description: string;
//   index: number;
// } 

// const TimelineItem = ({ image, month, description, index }: TimelineProps) => {
//   return (
//     <div className={`flex flex-col lg:grid lg:grid-cols-3 items-center place-items-center w-3/4`}>
//       <div className={`${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1 '}  flexCenter w-[300px] h-[300px] overflow-hidden rounded-full`}>
//         <Image
//           src={image}
//           alt="image"
//           width={1000}
//           height={1000}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="order-2 w-0 border-2 border-black lg:h-96 h-12"></div>
//       <div className={`${index % 2 === 0 ? 'lg:order-1 lg:text-right' : 'lg:order-3 lg:text-left'} flex flex-col gap-2 justify-center text-center mb-4 lg:mb-0`}>
//         <h4 className="bold-20 mt-5 capitalize">{month}</h4>
//         <p className="">{description}</p>
//       </div>
//     </div>
//   );
// };


// const Timeline = () => {
//   return (
//     <section className="max-container padding-container flexCenter flex-col py-24">
//       <h2 className="bold-40 lg:bold-64 mb-10 capitalize">Timeline</h2>
//       <div className="border-2 border-black rounded-3xl">
//         <h3 className="bold-32 xl:bold-32 capitalize py-4 px-12">2023</h3>
//       </div>
//       <div className="flex w-0 border-2 border-black lg:h-96 h-12 lg:hidden"></div>
//       {TIMELINES.map((timeline, index) => (
//         <TimelineItem 
//           key={timeline.month}
//           image={timeline.image}
//           month={timeline.month}
//           description={timeline.description}
//           index={index}
//         />
//       ))}
//             <div className="border-2 border-black rounded-3xl">
//         <h3 className="bold-32 xl:bold-32 capitalize py-4 px-12">2024</h3>
//       </div>
//     </section>
//   )
// }

// export default Timeline
