import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./owner.css"


class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ownerButton content">
                    <button type="button" 
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/owners/new")
                    }
                        
                    }>Add Owner
                    </button>
                </div>
                <section className="owners content">
                    <h3>Owners List</h3>
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {owner.name} {}
                                        {owner.phoneNumber}
                                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                        <button
                                            onClick={() => this.props.deleteOwner(owner.id)}
                                            className="card-link">Delete</button>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default OwnerList