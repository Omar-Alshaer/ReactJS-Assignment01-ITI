import Header from "./components/Header";
import CourseCard from "./components/CourseCard";

function App() {
  const courses = [
    { id: 1, title: "HTML & CSS", instructor: "Ahmed", available: true, newCourse: false },
    { id: 2, title: "JavaScript", instructor: "Mona", available: true, newCourse: true },
    { id: 3, title: "ReactJS", instructor: "Omar", available: false, newCourse: true }
  ];

  return (
    <div>
      <Header title="My Courses" />

      <div className="courses">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            available={course.available}
            newCourse={course.newCourse}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
