function CourseCard({ title, instructor, available, newCourse }) {
  return (
    <div className="card">
      {newCourse && <span>New</span>}

      <h2>{title}</h2>
      <p>Instructor: {instructor}</p>
      <p>{available ? "Available" : "Not Available"}</p>
    </div>
  );
}

export default CourseCard;
