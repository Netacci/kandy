import { MapPin, FileText, CheckCircle2 } from 'lucide-react';

const Banner = () => {
  const steps = [
    {
      title: 'Visit Us',
      description:
        'Schedule a tour to experience our vibrant learning environment and meet our dedicated educators',
      icon: MapPin,
      number: '01',
    },
    {
      title: 'Apply',
      description:
        'Complete our online application to begin the admissions process and share your child&apos;s journey',
      icon: FileText,
      number: '02',
    },
    {
      title: 'Enroll',
      description:
        "Once accepted, secure your child's spot in our program and join our welcoming community",
      icon: CheckCircle2,
      number: '03',
    },
  ];

  return (
    <section
      id='admissions'
      className='py-20 flex items-center bg-gradient-to-br from-green-600 via-green-700 to-emerald-700 text-white relative overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48'></div>
      
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Join Our Community
          </h2>
          <div className='w-24 h-1 bg-white mx-auto mb-6'></div>
          <p className='text-xl md:text-2xl mb-10 text-green-50 leading-relaxed'>
            We&apos;re excited to welcome new families to Kandy Montessori. Our
            admissions process is designed to ensure a perfect fit for both your
            child and our school community.
          </p>
          <a
            href='#'
            className='inline-block bg-white text-green-700 py-4 px-10 rounded-lg text-lg font-bold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
          >
            Start Your Application
          </a>
        </div>
        
        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className='bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group'
              >
                <div className='flex items-center justify-center mb-4'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all'></div>
                    <div className='relative bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-all'>
                      <IconComponent className='w-8 h-8' />
                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-white/30 mb-2'>{step.number}</div>
                  <h3 className='text-xl font-bold mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-green-50 leading-relaxed'>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;
