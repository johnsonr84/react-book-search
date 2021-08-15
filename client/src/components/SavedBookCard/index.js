import React from "react";
import axios from 'axios';
import API from "../../utils/API"

const SavedBookCard = (props) => {

    function handleDelete() {
        console.log("handle delete");
        console.log(props.volID);
        axios.delete("/api/books/" + props.volID)
            .then((res) => {
                console.log(res);
                props.loadBooks();
            })
    }

    return (

        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-author">{props.authors}</h6>
                <p className="card-text">{props.description}</p>

            </div>
            <div class="card-footer">
                <a href={props.link} className="btn btn-primary" target="_blank" >View</a>
                <button onClick={handleDelete} className="btn btn-info" style={{ marginLeft: "10px" }}>Delete</button>
            </div>
        </div>
    )
}


export default SavedBookCard;