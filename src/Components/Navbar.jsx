import { useState } from "react";

const Navbar = ({ setCategory, setQuery }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      data-bs-theme="dark"
    >
      <div className="container-fluid" style={{ cursor: "pointer" }}>
        <a className="navbar-brand">
          <span className="badge bg-light text-dark fs-5 ">DailyNews</span>
        </a>

        <div className="collapse navbar-collapse">
          {/* CATEGORY */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => setCategory("technology")}
              >
                Technology
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => setCategory("business")}
              >
                Business
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => setCategory("general")}
              >
                General
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => setCategory("health")}
              >
                Healths
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => setCategory("science")}
              >
                Science
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => setCategory("sports")}
              >
                Sports
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </button>
            </li>
          </ul>

          {/* SEARCH BAR */}
          <form className="d-flex ms-auto" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search news"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-light">🔍</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
