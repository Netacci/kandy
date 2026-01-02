const Community = () => {
  return (
    <section className='py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-green-800 mb-4'>
          Community Involvement
        </h2>
        <div className='w-20 h-1 bg-green-600 mx-auto mb-4'></div>
      </div>
      <div className='bg-gradient-to-br from-green-50 to-lime-50 p-8 rounded-lg shadow-lg border border-green-100 max-w-3xl mx-auto'>
        <p className='mb-6 text-gray-700 text-lg leading-relaxed text-center'>
          At Kandy Montessori School, we believe in the importance of community
          engagement. We regularly participate in local events, host parent
          education workshops, and collaborate with other educational
          institutions.
        </p>
        <div className='text-center'>
          <button className='bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold'>
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
