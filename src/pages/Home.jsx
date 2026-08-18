import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CourseCard from "../components/CourseCard";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { addToCart } from "../redux/slices/cartSlice";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const [showAvailable, setShowAvailable] = useState(false);
  const [courseCount, setCourseCount] = useState(0);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const courses = [
    { id: 1, title: "HTML & CSS", instructor: "Ahmed", available: true, newCourse: false },
    { id: 2, title: "JavaScript", instructor: "Mona", available: true, newCourse: true },
    { id: 3, title: "ReactJS", instructor: "Omar", available: false, newCourse: true }
  ];

  const displayedCourses = showAvailable
    ? courses.filter((course) => course.available)
    : courses;

  useEffect(() => {
    setCourseCount(displayedCourses.length);
  }, [showAvailable]);

  useDocumentTitle("My Courses");

  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="mb-0" style={{ color: theme === "light" ? "#555" : "#ddd" }}>
          Courses: {courseCount}
        </p>

        <button className="btn btn-primary" onClick={() => setShowAvailable(!showAvailable)}>
          {showAvailable ? "Show All" : "Available Only"}
        </button>
      </div>

      <div className="row g-3">
        {displayedCourses.map((course) => (
          <div className="col-md-6 col-lg-4" key={course.id}>
            <CourseCard
              {...course}
              onAdd={() => dispatch(addToCart(course))}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
