import "./CourseCard.scss";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  image: string;
  rating: number;
}

const CourseCard = ({ title, description, duration, image, rating }: CourseCardProps) => {
  return (
    <div className="course-card">

      <div className="course-image">
        <img src={image} alt={title} />

        <div className="course-overlay">
          <h3>{title}</h3>
        </div>

      </div>

      <div className="course-content">

        <div className="rating">
          ⭐⭐⭐⭐☆ {rating}
        </div>

        <p className="description">{description}</p>

        <div className="duration">
          ⏱ {duration}
        </div>

        <button className="view-btn">View Program</button>

      </div>

    </div>
  );
};

export default CourseCard;