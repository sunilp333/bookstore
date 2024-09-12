import React from "react";
import { Link } from "react-router-dom";

const ListBook = () => {
  return (
    <main>
      <section className="py-1 text-center container">
        <div className="row py-lg-1">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Book Store</h1>
          </div>
        </div>
      </section>

      <div className="album py-1 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >Remove</button>
                      <Link to="update-book/1" className="btn btn-sm btn-outline-secondary">Edit</Link>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-1 text-center container">
        <div className="row py-lg-1">
          <div className="col-lg-6 col-md-8 mx-auto">
            <p>
              <Link to="add-book" className="btn btn-warning my-2">Add New Book</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ListBook;
