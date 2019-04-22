import React, { Component } from "react"
import "./owner.css"

export default class Owner extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="owner content">
                <div key={this.props.owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.owner.name}
                        </h4>
                        <h5 className="card-title">
                            {this.props.owner.phoneNumber}
                        </h5>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteOwner(this.props.owner.id)
                                )
                            }
                        }
                            disabled={this.state.saveDisabled}
                            className="card-link btn btn-danger">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}