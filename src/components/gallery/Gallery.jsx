/* eslint-disable react/prop-types */


const Gallery = ({ title, images }) => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>{title}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map((image,index) => (
          <img
            key={index}
            src={image}
            alt={`Preschool Activity ${index}`}
            className='w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300'
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
