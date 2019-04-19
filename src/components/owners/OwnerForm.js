import React, { Component } from "react"
import "./owner.css"

export default class OwnerForm extends Component {
    state = {
        ownerName: "",
        ownerPhoneNumber: ""
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewOwner = event => {
        event.preventDefault()
        const owner = {
            name: this.state.ownerName,
            phoneNumber: this.state.ownerPhoneNumber
        }
        this.props.addOwner(owner)
            .then(() => this.props.history.push("/owners"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm content">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="Owner's name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerPhoneNumber">Owner's Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerPhoneNumber"
                            placeholder="Owner's Phone Number"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={this.constructNewOwner}>
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}