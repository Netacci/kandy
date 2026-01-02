/* eslint-disable react/prop-types */


const Gallery = ({ title, images }) => {
  return (
    <section className='mb-16 py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-green-800 mb-4'>{title}</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto mb-4'></div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
        {images.map((image,index) => (
          <div key={index} className='overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <img
              src={image}
              alt={`Preschool Activity ${index}`}
              className='w-full h-64 object-cover hover:scale-105 transition-transform duration-300'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
