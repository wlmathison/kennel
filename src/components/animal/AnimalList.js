import React, { Component } from 'react'

class AnimalList extends Component {
    render() {
        return (
            <section className="animals content">
            <h3>List of Animals</h3>
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList