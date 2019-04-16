import React, { Component } from 'react'
import { Link } from "react-router-dom";
import dog from "./DogIcon.svg"
import "./animal.css"

class AnimalList extends Component {
    render() {
        return (
            <section className="animals content">
                <h3>List of Animals</h3>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={dog} className="icon--dog" alt="dog" />
                                    {animal.name}
                                    <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                    <button
                                        onClick={() => this.props.deleteAnimal(animal.id)}
                                        className="card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default AnimalList