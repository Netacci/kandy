/* eslint-disable react/prop-types */
const Hero = ({ title, alt, image }) => {
  return (
    <section className='relative h-96 bg-gradient-to-br from-green-600 via-green-700 to-emerald-700 overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl'></div>
        
        {/* Geometric shapes */}
        <div className='absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-lg rotate-45'></div>
        <div className='absolute bottom-32 right-20 w-24 h-24 border-2 border-white/20 rounded-full'></div>
        <div className='absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-12'></div>
        <div className='absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-white/15 rounded-lg -rotate-12'></div>
      </div>
      
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <h1 className='text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg px-4'>{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
