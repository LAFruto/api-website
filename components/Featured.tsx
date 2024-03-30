// import Image from "next/image"
// import React from 'react'
// import Button from "./Button"
// import { FEATURES } from "@/constants";

// interface FeatureProps {
//   image: string;
//   title: string;
//   date: string;
//   url: string;
// }

// const Feature = ( {image, title, date, url}: FeatureProps ) => {
//   return (
//     <div className="border-2 border-gray-900 flex flex-col py-6 px-6 gap-4">
//         <Image 
//           src={image}
//           alt={image}
//           width={400}
//           height={200}
//           className="w-full object-cover object-center "
//         />
//         <h4 className="bold-20 capitalize">{title}</h4>
//         <p className="regular-16 mt-2">{date}</p>
//         <Button 
//             type="button" 
//             title="About"
//             icon="proceed.svg" 
//             variant="btn_white_square_outline"
//             full
//           />
//     </div>  
//   )
// }

// const Featured = () => {
//   return (
//     <section className="flexCenter flex-col py-24 gap-12">
//         <h2 className="bold-40 lg:bold-64 capitalize">Featured</h2>
//         <div className="padding-container max-container w-full gap-6 lg:grid lg:grid-cols-3 flex flex-1 flex-col">       
//           {FEATURES.map(feature => (
//             <Feature 
//               key={feature.title}
//               image={feature.image}
//               title={feature.title}
//               date={feature.date}
//               url={feature.url}
//             />
//           ))}
//         </div>
//     </section>
//   )
// }

// export default Featured

