import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UpdateBook = () => {
    const navigate = useNavigate();
    const [error,setError] = useState(false);
    const bookId = location.pathname.split("/")[2];
    const [book, setBooks] = useState({
      title: "",
      desc: "",
      price: null,
      cover: "",
    });

    useEffect( () =>{
      const fetchIndividualBooks = async () =>{
        try {
          const res = await axios.get(`http://localhost:8800/books/${bookId}`);
          setBooks(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchIndividualBooks();
    },[]); 


    const handleChange = (e) => {
      setBooks((prev) => ({...prev, [e.target.name] : e.target.value}));
    };

    const handleClick = async (e) => {
      e.preventDefault();  
      try {
        await axios.put(`http://localhost:8800/books/${bookId}`, book);
        navigate("/");
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    console.log(book);

    return (
        <div className="container">
        <main>
           <div className="py-1 text-center">
              <h2>Modify Book Information</h2>
           </div>
           <div className="row g-1 form-container">       
                 <form className="form-create">
                    <div className="row g-1">                   
                       <div className="col-sm-12">
                          <label className="form-label">Title</label>
                          <input type="text" className="form-control" id="title" name="title" onChange={handleChange} defaultValue={book.title}/>
                       </div>
    
                       <div className="col-sm-12">
                          <label className="form-label">Description</label>
                          <textarea className="form-control" id="desc" name="desc" onChange={handleChange} defaultValue={book.desc} />
                       </div>
    
                       <div className="col-sm-12">
                          <label className="form-label">Cover</label>
                          <input type="text" className="form-control" id="cover" name="cover" onChange={handleChange} defaultValue={book.cover}/>
                       </div>
    
                       <div className="col-sm-12">
                          <label className="form-label">Price</label>
                          <input type="text" className="form-control" id="price" name="price" onChange={handleChange} defaultValue={book.price}/>
                       </div>
    
                    </div>
                    <button className="btn btn-primary mt-2" type="button" onClick={handleClick}>Save</button> &nbsp;
                    <Link to="/" className="btn btn-warning mt-2">Back to Book Store</Link>
                 </form>         
           </div>       
        </main>
     </div>
    )

};

export default UpdateBook;