import styled from "styled-components";
import styles from "./CourseCard.module.css";

const DetailsButton = styled.button`
  border: 0;
  background: #212529;
  color: white;
  padding: 7px 12px;
  border-radius: 5px;
`;

function CourseCard({ title, instructor, available, newCourse, onAdd }) {
  return (
    <div className={styles.card}>
      {newCourse && <span className="badge bg-warning text-dark mb-2">New</span>}
      <h2 className="h5">{title}</h2>
      <p className="mb-2">Instructor: {instructor}</p>
      <p className={available ? "text-success" : "text-danger"}>
        {available ? "Available" : "Not Available"}
      </p>
      {available && <DetailsButton onClick={onAdd}>Add to Cart</DetailsButton>}
    </div>
  );
}

export default CourseCard;
