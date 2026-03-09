import image1 from '../assets/image/image1.JPG';
import image2 from '../assets/image/image2.JPG';
import image3 from '../assets/image/image3.JPG';
import image4 from "../assets/image/quick.jpg";
import image5 from '../assets/image/travelbuddies.jpg';


const Portfolio = () => {
    return (
        <section className="p-4 text-white">
            <h1 className="text-center font-bold text-3xl mb-4">My Successful Work </h1>
            <div className="justify-center grid grid-cols-1 gap-x-2 md:grid-cols-3 sm:grid-cols-3 sm:items-center gap-y-4 max-w-6xl mx-auto">
                {[image1, image2, image3, image4, image5].map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`project-${index}`}
                        className="rounded-lg shadow-lg tilt-hover h-60 w-90"
                    />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;