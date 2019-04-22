import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AnimalCard from "../animal/AnimalCard"
import EmployeeCard from './EmployeeCard';
import "./employee.css"



class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton content">
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Add Employee
                </button>
                </div>
                <section className="employees content">
                    <h3>Employee List</h3>
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id} className="card card--employee">
                                <div className="card-body">
                                    <EmployeeCard key={employee.id} employee={employee} {...this.props} />
                                    <div>
                                        <h5 className="card-title">
                                            <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => this.props.history.push(`/employees/${employee.id}/edit`)}
                                            >
                                                Edit
                                        </button>
                                            <a href="/employees"
                                                onClick={() => this.props.deleteEmployee(employee.id)}
                                                className="card-link">Delete</a>
                                        </h5>
                                    </div>
                                </div>
                                <h6 className="card-title mb-2 text-muted">Caretaker For</h6>
                                <div className="card-title animals--caretaker">
                                    {
                                        this.props.animals
                                            .filter(anml => anml.employeeId === employee.id)
                                            .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                                    }
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>

        )
    }
}

export default EmployeeList