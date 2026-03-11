import "./CourseCard.scss";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
}

const CourseCard = ({ title, description, duration }: CourseCardProps) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="duration">{duration}</span>
    </div>
  );
};

export default CourseCard;