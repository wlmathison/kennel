import React, { Component } from "react"
import "./employee.css"

export default class EmployeeForm extends Component {
    state = {
        employeeName: ""
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = event => {
        event.preventDefault()
        const employee = {
            name: this.state.employeeName
        }
        this.props.addEmployee(employee)
            .then(() => this.props.history.push("/employees"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm content">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="employeeName"
                            placeholder="Employee Name"
                        />
                    </div>
                </form>
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.constructNewEmployee}
                >
                    Submit
                </button>
            </React.Fragment>
        )
    }
}