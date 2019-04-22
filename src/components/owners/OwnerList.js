import React, { Component } from 'react'
import OwnerCard from "./OwnerCard"
import "./owner.css"


class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ownerButton content">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }

                        }>Add Owner
                    </button>
                </div>
                <section className="owners content">
                    <h3>Owners List</h3>
                    {
                        this.props.owners.map(owner =>
                            <OwnerCard key={owner.id} owner={owner} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default OwnerList