import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./employee.css"


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees content">
            <h3>Employee List</h3>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {employee.name}
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
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

export default EmployeeList