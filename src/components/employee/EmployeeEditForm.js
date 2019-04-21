import React, { Component } from "react"
import EmployeeManager from "./../../modules/EmployeeManager"

export default class EmployeeEditForm extends Component {
    state = {
        name: "",
        locationId: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = (event) => {
        event.preventDefault()
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.name,
            locationId: parseInt(this.state.locationId)
        }
        this.props.updateEmployee(editedEmployee)
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        EmployeeManager.get(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    name: employee.name,
                    locationId: employee.locationId
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm content">
                    <div className="form-group">
                        <label htmlFor="name">
                            Employee Name
                        </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.name}
                        />
                        <div className="form-group">
                            <label htmlFor="locationId">
                                Assign to Location
                        </label>
                            <select
                                name="locationId"
                                id="locationId"
                                onChange={this.handleFieldChange}
                                value={this.state.locationId}
                            >
                                {this.props.locations.map(location => (
                                    <option key={location.id} id={location.id} value={location.id}>{location.name}</option>
                                ))
                                }
                            </select>
                        </div>
                        <button
                            type="submit"
                            onClick={this.updateExistingEmployee}
                            className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}