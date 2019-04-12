import React, { Component } from 'react'


class OwnerList extends Component {
    render() {
        return (
            <section className="owners content">
            <h3>Owners List</h3>
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name} {owner.phoneNumber}
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList