import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/hero/Hero';
import { eventData } from './config/EventData';

const Events = () => {

  // State management
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(eventData[0].category);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Read URL parameters on component mount
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      
      if (tabParam) {
        // Check if the tab parameter matches any of our categories
        const categoryExists = eventData.some(cat => cat.category === decodeURIComponent(tabParam));
        
        if (categoryExists) {
          setActiveTab(decodeURIComponent(tabParam));
        }
      }
    }
  }, []);

  // Update URL when tab changes
  const updateUrlWithTab = (category) => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location);
      url.searchParams.set('tab', encodeURIComponent(category));
      window.history.pushState({}, '', url);
      setActiveTab(category);
    }
  };

  // Lightbox functions
  const openLightbox = (category, index) => {
    updateUrlWithTab(category);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const category = eventData.find((cat) => cat.category === activeTab) || { images: [] };
    setCurrentImageIndex((prevIndex) =>
      prevIndex === category.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    const category = eventData.find((cat) => cat.category === activeTab) || { images: [] };
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? category.images.length - 1 : prevIndex - 1
    );
  };

  // Get current image for lightbox
  const getCurrentImage = () => {
    const category = eventData.find((cat) => cat.category === activeTab);
    return category ? category.images[currentImageIndex] : null;
  };

  return (
    <Layout>
      <div className='min-h-screen bg-lime-50 text-gray-800 font-sans'>
        <Hero
          title='Our Events'
          alt='Preschool Classroom'
          image='/api/placeholder/1920/1080'
        />
        <div className="my-10 container mx-auto px-4">
          {/* Custom Tabs */}
          <div className="w-full">
            {/* Tab Headers */}
            <div className="w-full flex justify-center mb-8 flex-wrap">
              {eventData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => updateUrlWithTab(category.category)}
                  className={`px-4 py-2 mx-1 mb-2 rounded-md transition-colors ${
                    activeTab === category.category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {eventData.map((category) => (
              <div
                key={category.category}
                className={`${activeTab === category.category ? 'block' : 'hidden'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.images.map((image, index) => (
                    <div
                      key={image.id}
                      className="cursor-pointer overflow-hidden rounded-[8px] shadow-md hover:shadow-lg transition-all"
                      onClick={() => openLightbox(category.category, index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto hover:scale-105 transition-transform"
                      />
                      <div className="p-3 bg-white">
                        <p className="text-sm text-gray-700">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 text-white hover:text-gray-300"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </button>

              <div className="max-w-4xl max-h-screen p-4">
                {getCurrentImage() && (
                  <>
                    <img
                      src={getCurrentImage()?.src ?? ''}
                      alt={getCurrentImage()?.alt ?? 'gallery images'}
                      className="max-h-screen max-w-full object-contain"
                    />
                    <p className="text-white text-center mt-4">
                      {getCurrentImage()?.description}
                    </p>
                  </>
                )}
              </div>

              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-gray-300"
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Events;