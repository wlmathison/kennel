import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager";

export default class OwnerEditForm extends Component {
    state = {
        name: "",
        phoneNumber: ""
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = event => {
        event.preventDefault()

        const editedOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.name,
            phoneNumber: this.state.phoneNumber
        }

        this.props.updateOwner(editedOwner)
            .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
        OwnerManager.get(this.props.match.params.ownerId)
            .then(owner => {
                this.setState({
                    name: owner.name,
                    phoneNumber: owner.phoneNumber
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerFom content">
                    <div className="form-group">
                        <label htmlFor="ownerName">
                            Owner Name
                        </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            id="name"
                            onChange={this.handleFieldChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerPhoneNumber">
                            Owner Phone Number
                    </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            id="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={this.updateExistingOwner}
                    >
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}
