import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="welcome"
      className="min-h-screen mt-16 md:mt-0 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-emerald-700"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-white/15 rounded-lg -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30">
              Excellence in Education Since Inception
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Welcome to Kandy Montessori Schools
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-green-50 leading-relaxed font-light">
            Nurturing young minds in a world of wonder and discovery. Where
            every child&apos;s potential is unlocked through innovative learning
            and compassionate guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#programs"
              className="inline-block bg-white text-green-700 py-4 px-10 rounded-lg text-lg font-bold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Explore Our Programs
            </a>
            <a
              href="#approach"
              className="inline-block bg-transparent border-2 border-white text-white py-4 px-10 rounded-lg text-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <ChevronDown
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        size={48}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-green-200 transition-colors z-10"
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
