import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./owner.css"

export default class OwnerCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div key={this.props.owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.owner.name} {}
                            {this.props.owner.phoneNumber}
                            <Link className="nav-link" to={`/owners/${this.props.owner.id}`}>Details</Link>
                            <button
                                className="btn btn-success"
                                onClick={() => this.props.history.push(`/owners/${this.props.owner.id}/edit`)}
                            >
                                Edit
                                        </button>
                            <a href="/owners"
                                onClick={() => this.props.deleteOwner(this.props.owner.id)}
                                className="card-link">Delete</a>
                        </h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
