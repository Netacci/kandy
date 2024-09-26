const Team = () => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>Meet Our Team</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {[
          { name: 'Anny Adinnu', role: 'Proprietress' },
          { name: 'Tonye', role: 'Head mistress' },
          { name: 'Ego', role: 'Head of Nursery' },
          { name: 'Michael Brown', role: 'Head of Primary' },
        ].map((member, index) => (
          <div key={index} className='text-center'>
            <img
              src={`/api/placeholder/200/200`}
              alt={member.name}
              className='w-32 h-32 rounded-full mx-auto mb-4 object-cover'
            />
            <h3 className='font-semibold text-green-700'>{member.name}</h3>
            <p className='text-sm'>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
