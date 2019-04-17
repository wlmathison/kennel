import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations content">
                <h3>Locations</h3>
                {
                    this.props.locations.map(location =>
                        <div key={location.id} className="card">
                            <div className="card-body">
                                <div key={location.id}>
                                    {location.name}{","} {location.address}
                                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        );
    }
}