import React, { Component } from "react"
import "./location.css"

export default class Location extends Component {
    state = {
        saveDisabled: false
    }
    
    render() {
        return (
            <section className="locations content">
                <div key={this.props.location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.location.name}
                        </h4>
                        <h5 className="card-title">
                            {this.props.location.address}
                        </h5>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteLocation(this.props.location.id)
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