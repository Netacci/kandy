/* eslint-disable react/prop-types */
const Hero = ({ title, alt, image }) => {
  return (
    <section className='relative h-96'>
      <img src={image} alt={alt} className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-green-900 bg-opacity-50 flex items-center justify-center'>
        <h1 className='text-5xl font-light text-white text-center'>{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
