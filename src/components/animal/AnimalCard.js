import React, { Component } from "react"
import { Link } from "react-router-dom"
import dog from "./DogIcon.svg"
import "./animal.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">
                    <img src={dog} className="icon--dog" alt="dog" />
                    {this.props.animal.name}
                </h5>
                <h5 className="card-title">
                    <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                        }}
                    >
                        Edit
                                </button>
                    <a href="/animals"
                        onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                        className="card-link">Discharge</a>
                </h5>
            </div>
        )
    }
}