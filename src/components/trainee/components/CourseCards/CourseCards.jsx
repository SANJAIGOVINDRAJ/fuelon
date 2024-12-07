/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

const CourseCards = ({ course }) => {
  const location = useLocation();

  return (
    <div className="m-5 flex justify-center">
      <div className="border-2 rounded-xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-full p-4 hover:transition-transform hover:scale-105 hover:duration-400 flex flex-col">
        <div className="flex justify-center">
          <img  
            src="/courseImage.png"
            alt="Course"
            className="w-full h-32 sm:h-40 md:h-48 object-scale-down rounded-lg"
          />
        </div>

        <div className="mt-3 flex flex-col sm:flex-row sm:justify-between text-center">
          <div className="border-2 p-1 rounded-xl bg-gray-300 w-28 sm:w-36 text-sm sm:text-base">
            <p>{course.courseType}</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-base">⭐({course.ratings})</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-start">
            <h1 className="font-bold text-xl sm:text-xl md:text-xl">{course.courseName}</h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
            <p className="text-sm sm:text-base">
              <span className="text-gray-500">By</span> {course.courseAuthor}
            </p>
            {location.pathname.startsWith("/trainee") && (
              <p className="text-[#5751E1] text-xl sm:text-2xl font-semibold mt-2 sm:mt-0">
                ${course.price}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
          {location.pathname === "/student/mycourses" && (
            <Link to="modules" className="mt-2 sm:mt-0">
              <img
                src="/enrollnow_img.png"
                className="h-10 w-auto object-contain hover:scale-105"
                alt="Enroll Now"
              />
            </Link>
          )}
          <Link to="quizpage">
            {location.pathname.endsWith("/quiz") && (
              <img
                src="/start-now.png"
                className="h-10 w-auto object-contain hover:scale-105"
                alt="Start Now"
              />
            )}
          </Link>
          {location.pathname.startsWith("/student") && (
            <p className="text-[#5751E1] text-xl sm:text-2xl font-semibold mt-2 sm:mt-0">
              ${course.price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
