import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import CourseCard from "../../components/common/Card/CourseCard";
import "./Home.scss";

const courses = [
  {
    title: "React Development",
    description: "Learn modern React with hooks, routing and best practices.",
    duration: "6 Weeks",
  },
  {
    title: "Angular Development",
    description: "Master Angular framework with real-time projects.",
    duration: "8 Weeks",
  },
  {
    title: "Python Programming",
    description: "Complete Python from basics to advanced concepts.",
    duration: "6 Weeks",
  },
  {
    title: "Artificial Intelligence",
    description: "Learn AI, ML models and real-world applications.",
    duration: "10 Weeks",
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