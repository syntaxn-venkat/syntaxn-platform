import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">SyntaxN</div>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;