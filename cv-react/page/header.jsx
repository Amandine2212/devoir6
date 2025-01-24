import "./page/header.css";

import { Link, Route, Routes } from "react-router-dom";
import Routt from "../rout";
function header() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-secondary" id="mainNav">
          <div class="container">
            <a class="navbar-brand text-light" href="#page-top">
              John Doe
            </a>
            <button
              class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="navbar-collapse collapse" id="navbarResponsive">
              <ul id="ulnav" class="navbar-nav ms-auto">
                <li class="nav-item mx-0 mx-lg-1">
                  <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                    Accueil
                  </Link>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <Link
                    class="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/Realisation"
                  >
                    Realisation
                  </Link>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Blogs">
                    Blogs
                  </Link>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <Link
                    class="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/Services"
                  >
                    Services
                  </Link>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <Link
                    class="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Tete;
