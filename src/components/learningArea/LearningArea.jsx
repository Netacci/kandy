/* eslint-disable react/prop-types */
const LearningArea = ({ title, data }) => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>{title}</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {data.map((area, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-green-700 mb-2'>
              {area.title}
            </h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningArea;
