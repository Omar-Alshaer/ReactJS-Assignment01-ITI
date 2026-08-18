function Header({ title }) {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <h1 className="h3 mb-0">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
