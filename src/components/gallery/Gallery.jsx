/* eslint-disable react/prop-types */
import Plh from '../../assets/plh.jpg';

const Gallery = ({ title }) => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>{title}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <img
            key={index}
            src={Plh}
            alt={`Preschool Activity ${index}`}
            className='w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300'
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
