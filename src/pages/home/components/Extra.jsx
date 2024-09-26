import { Palette, Music, Dumbbell, Leaf, Globe } from 'lucide-react';

const ExtraCurricular = () => {
  const activities = [
    {
      name: 'Arts & Crafts',
      description:
        'Encouraging creativity and self-expression through various art forms',
      icon: Palette,
    },
    {
      name: 'Music & Dance',
      description:
        'Developing rhythm, coordination, and appreciation for performing arts',
      icon: Music,
    },
    {
      name: 'Sports & Fitness',
      description: 'Promoting physical health, teamwork, and sportsmanship',
      icon: Dumbbell,
    },
    {
      name: 'Nature Club',
      description: 'Fostering environmental awareness and love for nature',
      icon: Leaf,
    },
    {
      name: 'Language Club',
      description: 'Introducing children to foreign languages and cultures',
      icon: Globe,
    },
  ];

  return (
    <section
      id='extracurricular'
      className='py-16 bg-gradient-to-b from-white to-green-50'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-light text-center text-green-800 mb-12'>
          Extracurricular Activities
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {activities.map((activity, index) => (
            <div
              key={index}
              className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1'
            >
              <activity.icon className='w-12 h-12 text-green-600 mb-4' />
              <h4 className='text-xl font-semibold text-green-700 mb-2'>
                {activity.name}
              </h4>
              <p className='text-gray-700'>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
