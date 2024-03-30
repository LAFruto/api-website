// import { ADVISORS, OFFICERS } from "@/constants";
// import Image from "next/image";
// import React from 'react'

// interface PersonProps {
//   image: string;
//   name: string;
//   position: string;
// }

// const PersonItem = ({ image, name, position }: PersonProps) => {
//   return (
//     <div className="flex flex-col items-center text-center py-8 px-8">
//         <Image
//           src={image}
//           alt={name}
//           width={125}
//           height={125}
//           className="mb-6"
//         />

//       <h4 className="bold-20 mt-5 capitalize">{name}</h4>
//       <p>{position}</p>
//     </div>
//   )
// }

// const Officers = () => {
//   return (
//     <section className="flexCenter flex-col py-24 gap-8">
//         <h2 className="bold-40 lg:bold-64 capitalize">Meet the Officers!</h2>
//         <div className="padding-container max-container justify-items-center place-content-center md:grid md:grid-cols-2 xl:grid xl:grid-cols-4 flex flex-col">        
//           {OFFICERS.map(officer => (
//               <PersonItem 
//                 key={officer.name}
//                 image={officer.image}
//                 name={officer.name}
//                 position={officer.position}
//               />
//           ))}
//         </div>
//         <h2 className="bold-40 lg:bold-64 capitalize">CLUB ADVISOR</h2>
//         <div className="padding-container max-container justify-items-center flex">        
//           {ADVISORS.map(advisor => (
//               <PersonItem 
//                 key={advisor.name}
//                 image={advisor.image}
//                 name={advisor.name}
//                 position={advisor.position}
//               />
//           ))}
//         </div>
//     </section>
//   )
// }

// export default Officers
