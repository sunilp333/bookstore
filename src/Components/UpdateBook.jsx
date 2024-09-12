import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UpdateBook = () => {

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
                          <input type="text" className="form-control" id="title" name="title" />
                       </div>
    
                       <div className="col-sm-12">
                          <label className="form-label">Description</label>
                          <textarea className="form-control" id="description" name="description"></textarea>
                       </div>
    
                       <div className="col-sm-12">
                          <label className="form-label">Cover</label>
                          <input type="text" className="form-control" id="cover" name="cover" />
                       </div>
    
                       <div className="col-sm-12">
                          <label className="form-label">Price</label>
                          <input type="text" className="form-control" id="price" name="price" />
                       </div>
    
                    </div>
                    <button className="btn btn-primary mt-2" type="submit">Save</button> &nbsp;
                    <Link to="/" className="btn btn-warning mt-2">Back to Book Store</Link>
                 </form>         
           </div>       
        </main>
     </div>
    )

};

export default UpdateBook;