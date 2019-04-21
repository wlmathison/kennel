import React, { Component } from "react"
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
            </div>
        )
    }
}