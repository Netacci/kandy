/* eslint-disable react/prop-types */
const LearningArea = ({ title, data }) => {
  return (
    <section className='mb-16 py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-green-800 mb-4'>{title}</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto mb-4'></div>
      </div>
      <div className='grid md:grid-cols-3 gap-6'>
        {data.map((area, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1'>
            <h3 className='text-xl font-semibold text-green-700 mb-3'>
              {area.title}
            </h3>
            <p className='text-gray-700 leading-relaxed'>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningArea;
