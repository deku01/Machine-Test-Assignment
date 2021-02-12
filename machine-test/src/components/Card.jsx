import React from "react"
import './Card.css';

function Card(props) {

    //handle detete action
    function handleClick() {
        props.deleteCard(props.id);
    }

    return (
        <div className="card">
            {<img className="card-img-top" src={props.url} alt="Photo" />}
            <div className="card-body">
                <h4 className="card-title">Project Name</h4>
                <p className="card-text text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button onClick={handleClick}>DELETE</button>
            </div>
        </div>
    );
}

export default Card;