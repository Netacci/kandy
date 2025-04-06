
import { Link } from 'react-router-dom'; // or use your routing library
import { ROUTES } from '../../../utils/routes';
import sixthImg from '../../../assets/events/6.jpg';
import sixteenthImg from '../../../assets/events/16.jpg';
import secondImg from '../../../assets/events/2.jpg';
import fifthImg from '../../../assets/events/5.jpg';
const HomePageEvents = () => {
  // Featured events - just take 3 images from your collection
  const featuredEvents = [
    {
      id: 1,
      src: sixthImg,
      alt: 'Inter house sports',
      description: '2025 Inter house sports',
        date: 'April 5, 2025'
    },
    {
      id: 2,
      src: sixteenthImg,
      alt: 'Inter house sports',
      description: '2025 Inter house sports',
      date: 'April 5, 2025'
    },
    {
      id: 3,
      src: secondImg,
      alt: 'Inter house sports',
      description: '2025 Inter house sports',
        date: 'April 5, 2025'
    },
    {
      id: 3,
      src: fifthImg,
      alt: 'Inter house sports',
      description: '2025 Inter house sports',
        date: 'April 5, 2025'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our most memorable moments. Join us for our upcoming events and be part of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={event.src}
                  alt={event.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-green-600 mb-2">{event.date}</p>
                <h3 className="text-xl font-semibold mb-2">{event.description}</h3>
                {/* <p className="text-gray-600 line-clamp-2">
                  Join us for this exciting event with our community.
                </p> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to={ROUTES.events} 
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageEvents;