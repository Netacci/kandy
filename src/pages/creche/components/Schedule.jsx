const Schedule = () => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>
        A Day in Our Creche
      </h2>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <ul className='space-y-4'>
          {[
            {
              time: '7:30 AM - 8:30 AM',
              activity: 'Arrival and Free Play',
            },
            {
              time: '8:30 AM - 9:00 AM',
              activity: 'Morning Circle Time',
            },
            {
              time: '9:00 AM - 10:00 AM',
              activity: 'Snack and Diaper Changes',
            },
            {
              time: '10:00 AM - 11:00 AM',
              activity: 'Outdoor Play / Sensory Activities',
            },
            { time: '11:00 AM - 12:00 PM', activity: 'Lunch Time' },
            { time: '12:00 PM - 2:00 PM', activity: 'Nap Time' },
            {
              time: '2:00 PM - 3:00 PM',
              activity: 'Afternoon Activities',
            },
            { time: '3:00 PM - 3:30 PM', activity: 'Snack Time' },
            {
              time: '3:30 PM - 5:00 PM',
              activity: 'Free Play and Learning Centers',
            },
            {
              time: '5:00 PM - 6:00 PM',
              activity: 'Wind Down and Departure',
            },
          ].map((item, index) => (
            <li key={index} className='flex'>
              <span className='font-semibold w-40'>{item.time}</span>
              <span>{item.activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Schedule;
