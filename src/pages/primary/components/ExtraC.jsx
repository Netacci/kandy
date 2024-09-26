import { Book } from 'lucide-react';
import { curriculumData } from '../../../config/primaryData';

const ExtraC = () => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>
        Extracurricular Activities
      </h2>
      <p className='text-lg mb-6'>
        We offer a wide range of extracurricular activities to support our
        students&apos; diverse interests and talents:
      </p>
      <div className='grid md:grid-cols-4 gap-4'>
        {curriculumData.map((activity, index) => (
          <div
            key={index}
            className='bg-white p-4 rounded-lg shadow-md flex items-center'
          >
            <Book size={20} className='text-green-500 mr-2' />
            <span>{activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraC;
