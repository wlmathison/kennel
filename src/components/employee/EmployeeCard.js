import React, { Component } from "react"
import person from "./person.png"
import "./employee.css"

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card-title">
                <h5 className="card-title">
                    <img src={person} className="icon--employee" alt="veterinarian" />
                    {this.props.employee.name}
                </h5>
            </div>
        )
    }
}