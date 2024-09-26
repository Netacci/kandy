/* eslint-disable react/prop-types */

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-lime-50 text-gray-800 font-sans'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
