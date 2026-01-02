import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Layout from "../../components/layout/Layout";
import Hero from "../../components/hero/Hero";
import { eventData } from "./config/EventData";

const Events = () => {
  // State management
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(eventData[0].category);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(null);

  // Read URL parameters on component mount
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get("tab");
      const yearParam = urlParams.get("year");

      if (tabParam) {
        // Check if the tab parameter matches any of our categories
        const categoryExists = eventData.some(
          (cat) => cat.category === decodeURIComponent(tabParam)
        );

        if (categoryExists) {
          const decodedTab = decodeURIComponent(tabParam);
          setActiveTab(decodedTab);

          // If it's Inter house sports and year is provided, set the year
          const category = eventData.find((cat) => cat.category === decodedTab);
          if (category?.hasYears) {
            if (yearParam) {
              const year = decodeURIComponent(yearParam);
              if (category.years[year]) {
                setSelectedYear(year);
              } else {
                // If year param is invalid, set to first available year
                const years = Object.keys(category.years);
                if (years.length > 0) {
                  setSelectedYear(years[0]);
                }
              }
            } else {
              // Set default year to the first available year if no year param
              const years = Object.keys(category.years);
              if (years.length > 0) {
                setSelectedYear(years[0]);
              }
            }
          }
        }
      } else {
        // Set default year for Inter house sports if it's the first tab
        const firstCategory = eventData[0];
        if (firstCategory?.hasYears) {
          const years = Object.keys(firstCategory.years);
          if (years.length > 0) {
            setSelectedYear(years[0]);
          }
        }
      }
    }
  }, []);

  // Update selected year when switching to Inter house sports tab
  useEffect(() => {
    const category = eventData.find((cat) => cat.category === activeTab);
    if (category?.hasYears) {
      const years = Object.keys(category.years);
      if (years.length > 0) {
        // Set to first available year if no year selected or selected year doesn't exist for this category
        const currentYear =
          selectedYear && category.years[selectedYear] ? selectedYear : null;
        if (!currentYear) {
          setSelectedYear(years[0]);
        }
      }
    } else {
      // Clear selected year if switching away from Inter house sports
      setSelectedYear(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // Update URL when tab changes
  const updateUrlWithTab = (category) => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location);
      url.searchParams.set("tab", encodeURIComponent(category));

      const categoryData = eventData.find((cat) => cat.category === category);
      if (categoryData?.hasYears) {
        // Set default year if switching to Inter house sports
        const years = Object.keys(categoryData.years);
        if (years.length > 0 && !selectedYear) {
          const defaultYear = years[0];
          setSelectedYear(defaultYear);
          url.searchParams.set("year", defaultYear);
        } else if (selectedYear) {
          url.searchParams.set("year", selectedYear);
        }
      } else {
        url.searchParams.delete("year");
        setSelectedYear(null);
      }

      window.history.pushState({}, "", url);
      setActiveTab(category);
    }
  };

  // Update URL when year changes
  const updateYear = (year) => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location);
      url.searchParams.set("year", year);
      window.history.pushState({}, "", url);
      setSelectedYear(year);
      setCurrentImageIndex(0); // Reset image index when changing year
    }
  };

  // Get current images based on active tab and selected year
  const getCurrentImages = () => {
    const category = eventData.find((cat) => cat.category === activeTab);
    if (!category) return [];

    if (category.hasYears && selectedYear) {
      return category.years[selectedYear] || [];
    }

    return category.images || [];
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
    const images = getCurrentImages();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    const images = getCurrentImages();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Get current image for lightbox
  const getCurrentImage = () => {
    const images = getCurrentImages();
    return images[currentImageIndex] || null;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-lime-50 text-gray-800 font-sans">
        <Hero
          title="Our Events"
          alt="Preschool Classroom"
          image="/api/placeholder/1920/1080"
        />
        <div className="my-16 container mx-auto px-4">
          {/* Custom Tabs */}
          <div className="w-full">
            {/* Tab Headers */}
            <div className="w-full flex justify-center mb-12 flex-wrap gap-4">
              {eventData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => updateUrlWithTab(category.category)}
                  className={`px-8 py-3 mx-1 mb-2 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    activeTab === category.category
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300"
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* Year Sub-tabs for Inter house sports */}
            {eventData.find((cat) => cat.category === activeTab)?.hasYears && (
              <div className="flex justify-center mb-8 gap-3 flex-wrap">
                {Object.keys(
                  eventData.find((cat) => cat.category === activeTab)?.years ||
                    {}
                ).map((year) => (
                  <button
                    key={year}
                    onClick={() => updateYear(year)}
                    className={`px-6 py-2 rounded-lg font-medium text-base transition-all duration-300 transform hover:-translate-y-1 ${
                      selectedYear === year
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}

            {/* Tab Content */}
            {eventData.map((category) => {
              const isActive = activeTab === category.category;
              const images =
                category.hasYears && selectedYear
                  ? category.years[selectedYear] || []
                  : category.images || [];

              return (
                <div
                  key={category.category}
                  className={`${isActive ? "block" : "hidden"}`}
                >
                  {images.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {images.map((image, index) => (
                        <div
                          key={image.id}
                          className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-100 group"
                          onClick={() => openLightbox(category.category, index)}
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="p-4">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <p>No images available for this selection.</p>
                    </div>
                  )}
                </div>
              );
            })}
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
                      src={getCurrentImage()?.src ?? ""}
                      alt={getCurrentImage()?.alt ?? "gallery images"}
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
