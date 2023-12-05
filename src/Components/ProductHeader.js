import React from "react";
import { Link } from "react-router-dom";
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import "./Products.css";

const ProductHeader = ({ handleSearch }) => {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark bgdark">
          <div className="navbar-con">
            <Link to="chopify/">
              <p className="navbar-brand" style={{ fontSize: 30 }}>
                <AiOutlineHome />
              </p>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item nav-link active">
                  Men
                  <GiConverseShoe />
                </li>
                <li className="nav-item nav-link active">
                  Women
                  <GiRunningShoe />
                </li>
                <li className="nav-item nav-link active">
                  Children
                  <TbShoe />
                </li>
              </ul>
              <div>
                <p className="navbar-brand">Putting a smile on your face</p>
              </div>
              <form className="d-flex search-form">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => handleSearch(e)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default ProductHeader;
