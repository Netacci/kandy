import { ChevronDown } from 'lucide-react';
import BG from '../../../assets/bg.jpg';
// import { useEffect, useState } from 'react';

const Hero = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const heroSlides = [
  //   {
  //     image: '/api/placeholder/1920/1080',
  //     title: 'Nurturing Minds',
  //     subtitle: 'Fostering a love for learning in every child',
  //   },
  //   {
  //     image: '/api/placeholder/1920/1080',
  //     title: 'Discover Potential',
  //     subtitle: "Unlock your child's unique abilities",
  //   },
  //   {
  //     image: '/api/placeholder/1920/1080',
  //     title: 'Learn Through Play',
  //     subtitle: 'Experience our innovative Montessori approach',
  //   },
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section
      id='welcome'
      className='min-h-screen mt-16 md:mt-0 flex items-center justify-center relative overflow-hidden'
    >
      <div className='absolute inset-0 z-0'>
        <img src={BG} alt='School' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-green-900 bg-opacity-95'></div>
      </div>
      <div className='container mx-auto px-4 z-10 text-white text-center'>
        <h2 className='text-5xl font-light mb-6 animate-fade-in-up'>
          Welcome to Kandy Montessori Schools
        </h2>
        <p className='text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300'>
          Nurturing young minds in a world of wonder and discovery
        </p>
        <a
          href='#our-approach'
          className='inline-block bg-white text-green-700 py-3 px-8 rounded-full text-lg font-semibold hover:bg-lime-100 transition duration-300 animate-fade-in-up animation-delay-600'
        >
          Explore Our World
        </a>
      </div>
      <ChevronDown
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
        size={48}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer'
      />
    </section>
    // <section id='welcome' className='h-screen relative overflow-hidden'>
    //   {heroSlides.map((slide, index) => (
    //     <div
    //       key={index}
    //       className={`absolute inset-0 transition-opacity duration-1000 ${
    //         index === currentSlide ? 'opacity-100' : 'opacity-0'
    //       }`}
    //     >
    //       <img
    //         src={slide.image}
    //         alt={slide.title}
    //         className='w-full h-full object-cover'
    //       />
    //       <div className='absolute inset-0 bg-green-900 bg-opacity-50'></div>
    //       <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4'>
    //         <h2 className='text-6xl font-light mb-6 animate-fade-in-up'>
    //           {slide.title}
    //         </h2>
    //         <p className='text-2xl mb-8 max-w-2xl animate-fade-in-up animation-delay-300'>
    //           {slide.subtitle}
    //         </p>
    //       </div>
    //     </div>
    //   ))}
    //   <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10'>
    //     <a
    //       href='#our-approach'
    //       className='inline-block bg-white text-green-700 py-3 px-8 rounded-full text-lg font-semibold hover:bg-lime-100 transition duration-300 animate-fade-in-up animation-delay-600'
    //     >
    //       Discover More
    //     </a>
    //   </div>
    //   <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
    //     {heroSlides.map((_, index) => (
    //       <button
    //         key={index}
    //         onClick={() => setCurrentSlide(index)}
    //         className={`w-3 h-3 rounded-full ${
    //           index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
    //         }`}
    //       ></button>
    //     ))}
    //   </div>
    // </section>
  );
};

export default Hero;
