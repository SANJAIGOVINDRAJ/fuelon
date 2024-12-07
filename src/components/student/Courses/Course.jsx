import React, { useContext } from "react";
import MyContext from "../../../context/context";
import StudentNavBar from "../components/SrudentNavbar/StudentNavBar";
import CourseCards from "../../trainee/components/CourseCards/CourseCards";
import FiltersCard from "../components/FiltersCard/FiltersCard";
import LanguageFilterCard from "../components/languageFilterCard/LanguageFilterCard";
import PainFilterCard from "../components/PaidFilterCard/PainFilterCard";

const Course = () => {
  const {
    courses,
    searchQuery,
    SelectedCategoryContext,
    languageContext,
    PaidContext,
  } = useContext(MyContext);

  const filteredCourses = courses.filter((course) => {
    const courseNameMatches = course.courseName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const courseCategoryMatches =
      SelectedCategoryContext.length === 0
        ? true
        : SelectedCategoryContext.some((category) =>
            course.courseType.toLowerCase().includes(category.toLowerCase())
          );

    const courseLanguageMatches =
      languageContext && languageContext.length > 0
        ? languageContext.some((language) =>
            course.language.toLowerCase().includes(language.toLowerCase())
          )
        : true;

    const coursePaidMatches =
      PaidContext && PaidContext.length > 0
        ? PaidContext.includes("All") ||
          (PaidContext.includes("Paid") && course.price > 0) ||
          (PaidContext.includes("Free") && course.price === 0)
        : true;

    return (
      courseNameMatches &&
      courseCategoryMatches &&
      courseLanguageMatches &&
      coursePaidMatches
    );
  });

  return (
    <div className="m-2">
      <div className=" mb-8">
        <StudentNavBar />
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-4 items-center sticky top-4 h-fit">
          <div className="border-2 p-2 shadow-lg">
            <FiltersCard />
          </div>
          <div className="border-2 p-2 shadow-lg">
            <LanguageFilterCard />
          </div>
          <div className="border-2 p-2 shadow-lg">
            <PainFilterCard />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-grow">
          {filteredCourses.map((course, id) => (
            <CourseCards key={id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;