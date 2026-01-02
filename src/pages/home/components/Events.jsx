import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import { Calendar, ArrowRight } from 'lucide-react';
// Import images from different event categories
import cultural1 from '../../../assets/events/cultural/1.jpg';
import awards1 from '../../../assets/events/awards/1.jpg';
import creative1 from '../../../assets/events/creative/1.jpg';

const HomePageEvents = () => {
  // Featured events from different categories
  const featuredEvents = [
    {
      id: 1,
      src: cultural1,
      alt: 'Cultural event',
      title: 'Cultural Celebrations',
      description: 'Showcasing our rich cultural heritage through performances and activities',
      date: 'Yearly',
      category: 'Cultural',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      src: awards1,
      alt: 'Awards ceremony',
      title: 'Awards & Recognition',
      description: 'Celebrating excellence and outstanding achievements of our students',
      date: 'Quarterly',
      category: 'Awards',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      id: 3,
      src: creative1,
      alt: 'Creative activities',
      title: 'Creative Expression',
      description: 'Fostering creativity through art, crafts, and innovative learning projects',
      date: 'Year-round',
      category: 'Creativity',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">School Events & Activities</h2>
          <div className='w-24 h-1 bg-green-600 mx-auto mb-4'></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the vibrant life at Kandy Montessori through our diverse range of events, celebrations, and activities that enrich our students&apos; learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.src}
                  alt={event.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 shadow-md">
                    {event.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to={ROUTES.events} 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Events
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageEvents;