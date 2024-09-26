const Community = () => {
  return (
    <section>
      <h2 className='text-3xl font-light text-green-800 mb-6'>
        Community Involvement
      </h2>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <p className='mb-4'>
          At Kandy Montessori School, we believe in the importance of community
          engagement. We regularly participate in local events, host parent
          education workshops, and collaborate with other educational
          institutions.
        </p>
        <button className='mt-2 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300'>
          Get Involved
        </button>
      </div>
    </section>
  );
};

export default Community;
