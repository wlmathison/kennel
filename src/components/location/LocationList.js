import React, { Component } from "react"

export default class LocationList extends Component {
    render() {
            return (
                <section className="locations content">
                <h3>Locations</h3>
                {
                    this.props.locations.map(location => 
                        <div key={location.id}>
                            {location.name}{","} {location.address}
                        </div>
                        )
                }
                </section>
            );
    }
}