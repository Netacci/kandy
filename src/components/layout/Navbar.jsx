import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { X, Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = [
    { title: 'Home', color: 'bg-lime-100', link: ROUTES.home },
    { title: 'About us', color: 'bg-green-50', link: ROUTES.about },
    { title: 'Programs', color: 'bg-white', dropdown: true },
    { title: 'Contact Us', color: 'bg-lime-50', link: '#contact' },
  ];

  const programsDropdown = [
    { title: 'Creche', href: ROUTES.creche },
    { title: 'Preschool', href: ROUTES.preSchool },
    { title: 'Grade School', href: ROUTES.gradeSchool },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      {/* Floating Navigation */}
      <nav className='fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 shadow-md'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            <Link to='/' className='flex items-center space-x-1'>
              <img src={Logo} alt='Logo' className='rounded-full w-[50px]' />
              <h1 className='text-xl font-semibold text-green-700'>KMS</h1>
            </Link>
            <div className='hidden md:flex space-x-6 items-center'>
              {sections.map((section, index) => (
                <div key={index} className='relative'>
                  {section.dropdown ? (
                    <div className='relative'>
                      <button
                        onClick={toggleDropdown}
                        className={`text-sm uppercase tracking-wider flex items-center text-gray-600`}
                      >
                        {section.title}
                        {dropdownOpen ? (
                          <ChevronUp size={16} className='ml-1' />
                        ) : (
                          <ChevronDown size={16} className='ml-1' />
                        )}
                      </button>
                      {dropdownOpen && (
                        <div className='absolute top-full w-[120px] left-0 bg-white shadow-md rounded-md py-2 mt-1'>
                          {programsDropdown.map((program, idx) => (
                            <a
                              key={idx}
                              href={program.href}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50'
                            >
                              {program.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={`${section.link}`}
                      className={`text-sm uppercase tracking-wider text-gray-600 `}
                    >
                      {section.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='md:hidden text-green-700'
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed inset-0 z-40 bg-white bg-opacity-95 flex flex-col items-center justify-center'>
          <button
            onClick={() => setMenuOpen(false)}
            className='absolute top-4 right-4 text-green-700'
          >
            <X size={24} />
          </button>
          {sections.map((section, index) => (
            <div key={index} className='py-4'>
              {section.dropdown ? (
                <div className='relative'>
                  <button
                    onClick={toggleDropdown}
                    className='text-2xl font-light text-green-700 flex items-center'
                  >
                    {section.title}
                    {dropdownOpen ? (
                      <ChevronUp size={24} className='ml-2' />
                    ) : (
                      <ChevronDown size={24} className='ml-2' />
                    )}
                  </button>
                  {dropdownOpen && (
                    <div className='mt-2'>
                      {programsDropdown.map((program, idx) => (
                        <a
                          key={idx}
                          href={program.href}
                          className='block py-2 text-xl font-light text-green-600'
                          onClick={() => setMenuOpen(false)}
                        >
                          {program.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={`${section.link}`}
                  className='text-2xl font-light text-green-700'
                  onClick={() => setMenuOpen(false)}
                >
                  {section.title}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
