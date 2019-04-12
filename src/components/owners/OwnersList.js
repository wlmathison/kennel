import React, { Component } from 'react'


class OwnersList extends Component {
    render() {
        return (
            <section className="owners content">
            <h3>Owners List</h3>
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnersList