import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../../../../context/context';

const StudentNavBar = () => {
  const { searchQuery, setSearchQuery } = useContext(MyContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="px-4 py-4 flex items-center justify-between w-full flex-wrap">
        {/* Logo or Brand */}
        <div className="flex items-center space-x-4">
          <NavLink to="/student/home" className="text-xl font-bold text-gray-800">
            FuelOn
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm md:text-lg font-medium text-gray-700 flex-wrap">
          <NavLink
            to="/student/home"
            className={({ isActive }) =>
              isActive ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/student/mycourses"
            className={({ isActive }) =>
              isActive ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-500'
            }
          >
            Courses
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search for Courses..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 pl-12 pr-20 py-2 rounded-full w-full text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <button
            className="absolute right-16 top-1/2 transform -translate-y-1/2 w-8 h-8 p-1 bg-transparent border-none"
            aria-label="Favourite"
          >
            <img
              src="/favourite.png"
              alt="Favourite Icon"
              className="w-full h-full object-contain"
            />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 p-1 bg-transparent border-none"
            aria-label="Cart"
          >
            <img
              src="/cart.png"
              alt="Cart Icon"
              className="w-full h-full object-contain"
            />
          </button>
        </div>

        {/* Additional Options */}
        <div className="flex items-center mt-4 md:mt-0 space-x-4">
          <a
            href="/wishlist"
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fa fa-heart"></i>
          </a>
          <a
            href="/cart"
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fa fa-shopping-cart"></i>
          </a>

          {location.pathname.startsWith('/student') && (
              <Link to="/student/quiz">
                    <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Test
              </button>
              </Link>
            ) 
          }
          
          {location.pathname.startsWith('/trainee') ? (
            <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
              <Link to="/trainee/newcourse/course_1">New Course</Link>
              <img className="w-5 h-5 invert" src="/plusicon.png" alt="Plus Icon" />
            </div>
          ) : null}

          {location.pathname.startsWith('/trainee') &&(
            <Link to="/trainee/dashboard">
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
            </Link>
          ) 
          }
            {location.pathname === "/student/home" &&
            
              <Link
                to="/"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Logout
              </Link>
            }

          <Link to="/student/dashboard">
              <img src="/avatar.png" alt="" className='h-10 w-10' />
          </Link>
        
           
        </div>
      </div>
    </nav>
  );
};

export default StudentNavBar;
