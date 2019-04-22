import React, { Component } from "react"
import "./employee.css"


export default class Employee extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employees content">
                <div key={this.props.employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.employee.name}
                        </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteEmployee(this.props.employee.id)
                                )
                            }
                        }
                            disabled={this.state.saveDisabled}
                            className="card-link btn btn-danger">Fire</button>
                    </div>
                </div>
            </section>
        )
    }
}