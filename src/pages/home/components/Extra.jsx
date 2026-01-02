import { Palette, Music, Dumbbell, Leaf, Globe, Code } from 'lucide-react';

const ExtraCurricular = () => {
  const activities = [
    {
      name: 'Arts & Crafts',
      description:
        'Encouraging creativity and self-expression through various art forms and hands-on projects',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700',
    },
    {
      name: 'Music & Dance',
      description:
        'Developing rhythm, coordination, and appreciation for performing arts through interactive sessions',
      icon: Music,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      name: 'Sports & Fitness',
      description: 'Promoting physical health, teamwork, and sportsmanship through structured activities',
      icon: Dumbbell,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      name: 'Nature Club',
      description: 'Fostering environmental awareness and love for nature through outdoor exploration',
      icon: Leaf,
      color: 'from-lime-500 to-green-500',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-700',
    },
    {
      name: 'Language Club',
      description: 'Introducing children to foreign languages and cultures through immersive learning',
      icon: Globe,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
    {
      name: 'Coding & Robotics',
      description: 'Building problem-solving skills and technological literacy through hands-on programming and robotics projects',
      icon: Code,
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-700',
    },
  ];

  return (
    <section
      id='extracurricular'
      className='py-20 bg-gradient-to-b from-gray-50 to-white'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Extracurricular Activities
          </h2>
          <div className='w-24 h-1 bg-green-600 mx-auto mb-4'></div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Beyond the classroom, we offer diverse activities that nurture talents, build character, and create lasting memories
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={index}
                className={`${activity.bgColor} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gray-200 group relative overflow-hidden`}
              >
                {/* Decorative background */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${activity.color} opacity-10 rounded-full -mr-12 -mt-12 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                  <IconComponent className='w-7 h-7' />
                </div>
                
                {/* Content */}
                <h4 className={`text-xl font-bold ${activity.textColor} mb-3 relative z-10`}>
                  {activity.name}
                </h4>
                <p className='text-gray-700 leading-relaxed relative z-10'>
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
