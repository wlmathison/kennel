import React, { Component } from "react"
import { Link } from "react-router-dom"
import EmployeeCard from "./../employee/EmployeeCard"
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
                                <h5 key={location.id}>
                                    {location.name}{","} {location.address}
                                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">Employees at this location</h6>
                                <div className="card-title">
                                    {this.props.employees.filter(employee => employee.locationId === location.id).map(employee =>
                                        <EmployeeCard key={employee.id} employee={employee} {...this.props} />
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        );
    }
}