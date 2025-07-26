import React, { useEffect, useRef } from "react";
import image1 from '../assets/image/image1.jpeg';
import image2 from '../assets/image/image2.webp';
import image3 from '../assets/image/image3.webp';
import image4 from '../assets/image/image4.jpeg';
import image5 from '../assets/image/image5.jpeg';
import image6 from '../assets/image/image6.jpeg';

const Portfolio = () => {
  const dragRef = useRef(null);
  const spinRef = useRef(null);
// const containerRef = useRef(null);

  useEffect(() => {
    // const container = containerRef.current;
    // const imageElements = container.querySelectorAll("img");

    // let radius, imgWidth, imgHeight;
    // const screenWidth = window.innerWidth;

    // if (screenWidth < 64) {
    //     radius= 180;
    //     imgWidth= 70;
    //     imgHeight= 100;
    // }

    let radius = 380;
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 100;
    const imgHeight = 140;

    const ospin = spinRef.current;
    const odrag = dragRef.current;

    const aImg = ospin.querySelectorAll("img");
    const aEle = [...aImg];

    ospin.style.width = `${imgWidth}px`;
    ospin.style.height = `${imgHeight}px`;

    const ground = document.getElementById("ground");
    ground.style.width = `${radius * 3}px`;
    ground.style.height = `${radius * 3}px`;

    const init = (delayTime) => {
      aEle.forEach((el, i) => {
        el.style.transform = `rotateY(${(i * 360) / aEle.length}deg) translateZ(${radius}px)`;
        el.style.transition = "transform 1s";
        el.style.transitionDelay = delayTime || `${(aEle.length - i) / 4}s`;
      });
    };

    let tX = 0,
      tY = 10,
      desX = 0,
      desY = 0;

    const applyTransform = () => {
      tY = Math.max(0, Math.min(180, tY));
      odrag.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };

    const playSpin = (yes) => {
      ospin.style.animationPlayState = yes ? "running" : "paused";
    };

    if (autoRotate) {
      ospin.style.animation = `${rotateSpeed > 0 ? "spin" : "spinRevert"} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    let sX, sY, nX, nY;
    odrag.onpointerdown = (e) => {
      clearInterval(odrag.timer);
      sX = e.clientX;
      sY = e.clientY;

      document.onpointermove = (e) => {
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform();
        sX = nX;
        sY = nY;
      };

      document.onpointerup = () => {
        odrag.timer = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform();
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);

        document.onpointermove = null;
        document.onpointerup = null;
      };
    };

    document.onwheel = (e) => {
      const d = e.deltaY / 10 || -e.wheelDelta / 10;
      radius += d;
      init(1);
    };

    init();
  }, []);

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section id="portfolio" className="bg-gray-400 text-white py-20 text-center overflow-hidden h-screen "> 
      <h2 className="text-3xl font-bold mb-12">My Successful Work</h2>
      <div
        id="drag-container"
        ref={dragRef}
        className="relative w-full h-full mx-auto flex items-center justify-center transform-style preserve-3d perspective-[1000px]"
      >
        <div id="spin-container" ref={spinRef} className="absolute">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project ${i + 1}`}
              className="absolute w-[100px] h-[140px] object-cover shadow-lg transition-all duration-700"
            />
          ))}
          <p className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-x-90 text-white font-serif">
            My Successful Work
          </p>
        </div>
        <div id="ground" className="absolute top-full left-1/2 -translate-x-1/2 rotate-x-90 bg-gradient-radial from-white/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Portfolio;


// import React, { useEffect, useRef } from "react";
// import image1 from '../assets/image/image1.jpeg';
// import image2 from '../assets/image/image2.webp';
// import image3 from '../assets/image/image3.webp';
// import image4 from '../assets/image/image4.jpeg';
// import image5 from '../assets/image/image5.jpeg';
// import image6 from '../assets/image/image6.jpeg';

// const images = [image1, image2, image3, image4, image5, image6];

// const Portfolio = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const imageElements = container.querySelectorAll("img");

//     let radius, imgWidth, imgHeight;
//     const screenWidth = window.innerWidth;

//     if (screenWidth < 640) {
//       radius = 180;
//       imgWidth = 70;
//       imgHeight = 100;
//     } else if (screenWidth < 1024) {
//       radius = 280;
//       imgWidth = 90;
//       imgHeight = 130;
//     } else {
//       radius = 350;
//       imgWidth = 100;
//       imgHeight = 140;
//     }

//     const rotateCarousel = () => {
//       imageElements.forEach((img, i) => {
//         const angle = (i * 360) / imageElements.length;
//         img.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
//       });
//     };

//     rotateCarousel();

//     let startX, rotation = 0;

//     container.onmousedown = (e) => {
//       startX = e.clientX;
//       document.onmousemove = (e) => {
//         const delta = e.clientX - startX;
//         rotation += delta * 0.3;
//         container.style.transform = `translateZ(-${radius}px) rotateY(${rotation}deg)`;
//         startX = e.clientX;
//       };
//       document.onmouseup = () => {
//         document.onmousemove = null;
//         document.onmouseup = null;
//       };
//     };

//     container.ontouchstart = (e) => {
//       startX = e.touches[0].clientX;
//     };

//     container.ontouchmove = (e) => {
//       const delta = e.touches[0].clientX - startX;
//       rotation += delta * 0.3;
//       container.style.transform = `translateZ(-${radius}px) rotateY(${rotation}deg)`;
//       startX = e.touches[0].clientX;
//     };

//     return () => {
//       document.onmousemove = null;
//       document.onmouseup = null;
//       container.onmousedown = null;
//       container.ontouchstart = null;
//       container.ontouchmove = null;
//     };
//   }, []);

//   return (
//     <section
//       id="portfolio"
//       className="bg-black text-white py-20 text-center overflow-hidden min-h-[100vh] sm:min-h-[110vh] lg:min-h-[120vh]"
//     >
//       <h2 className="text-3xl font-bold mb-10">My Projects</h2>
//       <div className="flex justify-center items-center">
//         <div className="relative w-[400px] h-[400px] perspective-[1000px]">
//           <div
//             ref={containerRef}
//             className="w-full h-full absolute left-0 top-0 transition-transform duration-700"
//           >
//             {images.map((src, i) => (
//               <img
//                 key={i}
//                 src={src}
//                 alt={`Project ${i + 1}`}
//                 className="absolute w-[70px] h-[100px] sm:w-[90px] sm:h-[130px] lg:w-[100px] lg:h-[140px] object-cover shadow-lg rounded-lg transition-all duration-700"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

