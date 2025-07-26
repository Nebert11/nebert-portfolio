import React, { useEffect, useRef } from "react";
import image1 from '../assets/image/image1.JPG';
import image2 from '../assets/image/image2.JPG';
import image3 from '../assets/image/image3.JPG';

// const images = [image1, image2, image3, image4, image5, image6];

// const Portfolio = () => {
//   const dragRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const autoRotate = true;
//     const rotateSpeed = -60;

//     const container = containerRef.current;
//     if (!container) return; // Prevent null errors

//     const imageElements = container.querySelectorAll("img");

//     let radius, imgWidth, imgHeight;
//     const screenWidth = window.innerWidth;

//     if (screenWidth < 64) {
//         radius= 180;
//         imgWidth= 70;
//         imgHeight= 100;
//     }
//     else if (screenWidth < 1024) {
//       radius = 280;
//       imgWidth = 90;
//       imgHeight = 130;
//     }
//     else {
//       radius = 350;
//       imgWidth = 100;
//       imgHeight = 140;
//     }

//     const ospin = containerRef.current;
//     const odrag = dragRef.current;

//     const aImg = ospin.querySelectorAll("img");
//     const aEle = [...aImg];

//     ospin.style.width = `${imgWidth}px`;
//     ospin.style.height = `${imgHeight}px`;

//     const ground = document.getElementById("ground");
//     ground.style.width = `${radius * 3}px`;
//     ground.style.height = `${radius * 3}px`;

//     const init = (delayTime) => {
//       aEle.forEach((el, i) => {
//         el.style.transform = `rotateY(${(i * 360) / aEle.length}deg) translateZ(${radius}px)`;
//         el.style.transition = "transform 1s";
//         el.style.transitionDelay = delayTime || `${(aEle.length - i) / 4}s`;
//       });
//     };

//     let tX = 0,
//       tY = 10,
//       desX = 0,
//       desY = 0;

//     const applyTransform = () => {
//       tY = Math.max(0, Math.min(180, tY));
//       odrag.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
//     };

//     const playSpin = (yes) => {
//       ospin.style.animationPlayState = yes ? "running" : "paused";
//     };

//     if (autoRotate) {
//       ospin.style.animation = `${rotateSpeed > 0 ? "spin" : "spinRevert"} ${Math.abs(
//         rotateSpeed
//       )}s infinite linear`;
//     }

//     let sX, sY, nX, nY;
//     odrag.onpointerdown = (e) => {
//       clearInterval(odrag.timer);
//       sX = e.clientX;
//       sY = e.clientY;

//       document.onpointermove = (e) => {
//         nX = e.clientX;
//         nY = e.clientY;
//         desX = nX - sX;
//         desY = nY - sY;
//         tX += desX * 0.1;
//         tY += desY * 0.1;
//         applyTransform();
//         sX = nX;
//         sY = nY;
//       };

//       document.onpointerup = () => {
//         odrag.timer = setInterval(() => {
//           desX *= 0.95;
//           desY *= 0.95;
//           tX += desX * 0.1;
//           tY += desY * 0.1;
//           applyTransform();
//           playSpin(false);
//           if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//             clearInterval(odrag.timer);
//             playSpin(true);
//           }
//         }, 17);

//         document.onpointermove = null;
//         document.onpointerup = null;
//       };
//     };

//     document.onwheel = (e) => {
//       const d = e.deltaY / 10 || -e.wheelDelta / 10;
//       radius += d;
//       init(1);
//     };

//     init();
//   }, []);
  
//   return (
//     <section id="portfolio" className="bg-gray-400 text-white py-20 text-center overflow-hidden min-h-[100vh] sm:min-h-[110vh] lg:min-h-[120vh]">
//       <h2 className="text-3xl font-bold mb-12">My Successful Work</h2>
//       {/* Grid for small screens, hide on medium and up */}
//       <div className="grid grid-cols-3 gap-4 sm:hidden px-4">
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt={`Project ${i + 1}`}
//             className="w-full h-32 object-cover rounded shadow"
//           />
//         ))}
//       </div>
//       {/* Carousel for medium and up, hide on small */}
//       <div
//         id="drag-container"
//         ref={dragRef}
//         className="relative w-full h-full mx-auto items-center justify-center transform-style preserve-3d perspective-[1000px] hidden sm:flex"
//       >
//         <div
//           id="spin-container"
//           ref={containerRef}
//           className="absolute"
//         >
//           {images.map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={`Project ${i + 1}`}
//               className="absolute w-[70px] h-[100px] sm:w-[90px] sm:h-[130px] lg:w-[100px] lg:h-[140px] object-cover shadow-lg transition-all duration-700"
//             />
//           ))}
//           <p className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-x-90 text-white font-serif">
//             My Successful Work
//           </p>
//         </div>
//         <div id="ground" className="absolute top-full left-1/2 -translate-x-1/2 rotate-x-90 bg-gradient-radial from-white/20 to-transparent"></div>
//       </div>
//     </section>
//   );
// };

const Portfolio = () => {
    return (
        <section className="p-4 text-white">
            <h1 className="text-center font-bold text-3xl mb-4">My Successful Work </h1>
            <div className="justify-center items-center grid grid-cols-2 gap-x-2 md:grid-cols-3 sm:grid-cols gap-y-4 max-w-6xl  mx-auto">
                {[image1, image2, image3].map((img, index) => (
                    <img key={index} src={img} className="rounded-lg shadow-lg tilt-hover h-60 w-90" />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;