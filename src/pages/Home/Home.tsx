import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import CourseCard from "../../components/common/Card/CourseCard";
import "./Home.scss";

const courses = [
  {
    title: "React Development",
    description: "Learn modern React with hooks, routing and best practices.",
    duration: "6 Weeks",
    image: "/images/react.jpg",
    rating: 4.5
  },
  {
    title: "Angular Development",
    description: "Master Angular framework with real-time projects.",
    duration: "8 Weeks",
    image : "/images/Angular.png",
    rating: 4.3
  },
  {
    title: "Python Programming",
    description: "Complete Python from basics to advanced concepts.",
    duration: "6 Weeks",
    image : "/images/python.jpg",
    rating : 4.9
  },
  {
    title: "Artificial Intelligence",
    description: "Learn AI, ML models and real-world applications.",
    duration: "10 Weeks",
    image : "/images/AI.jpg",
    rating: 4.7
  },
];

const Home = () => {
  return (
    <>
      <Header />

      <main className="home">
        <div className="container">
          <h1>Welcome to Syntax N Training Platform</h1>
          <p>
            Learn modern technologies like React, Angular, Python, AI and more.
          </p>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                duration={course.duration}
                image={course.image}
                rating={course.rating}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;