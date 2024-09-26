import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer id='contact' className='bg-green-800 text-white pt-12 pb-2'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <Phone size={18} className='mr-2' /> (234) 706056-3794
              </li>
              <li className='flex items-center'>
                <Mail size={18} className='mr-2' />{' '}
                kandymontessorischools@gmail.com
              </li>
              <li className='flex items-center'>
                <Mail size={18} className='mr-2' /> info@kandymontschool.com
              </li>
              <li className='flex items-center'>
                <MapPin size={18} className='mr-2' /> 17 Eriorlu street,
                Rumuomoi off Psychiatric hospital road, Rumuigbo Port Harcourt,
                Nigeria
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:underline'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Admissions
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Academics
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  News & Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4 mb-4'>
              <a href='#' className='hover:text-green-400'>
                <Facebook size={24} />
              </a>
              <a href='#' className='hover:text-green-400'>
                <Twitter size={24} />
              </a>
              <a
                href='https://www.instagram.com/kandymontessorischool'
                className='hover:text-green-400'
              >
                <Instagram size={24} />
              </a>
            </div>
            <div>
              <h4 className='font-semibold mb-2'>School Hours</h4>
              <p className='flex items-center'>
                <Clock size={18} className='mr-2' /> Monday - Friday: 8:00 AM -
                3:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className='mt-8 py-8 border-t border-green-700 text-center'>
          <p>&copy; 2024 Kandy Montessori School. All rights reserved.</p>
        </div>
        <div className='pt-2 border-t border-green-700 text-center'>
          <p>
            Designed by{' '}
            <a
              href='https://www.netacci.com'
              target='_blank'
              className='hover:underline'
            >
              Netacci
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
