import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListBook = () => {
  const [books, setBooks] = useState([]);

  
  
  useEffect( () =>{
    const fetchAllBooks = async () =>{
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  },[]); 

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
};
  

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
              { books.map( (book) => (
                <div className="col" key={book.id} >
                  <div className="card shadow-sm">
                    <img src={book.cover} className="bd-placeholder-img card-img-top"  width="100%"  height="225"/>
                   
                    <div className="card-body">
                      <b>{book.title}</b>
                      <p className="card-text">
                        {book.desc}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleDelete(book.id)}>Remove</button>
                          <Link to={`/update-book/${book.id}`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                        </div>
                        <small className="text-muted">{book.created_at}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ) ) }
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
