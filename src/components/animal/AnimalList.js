import React, { Component } from 'react'
import AnimalCard from "./AnimalCard"
import "./animal.css"

class AnimalList extends Component {
    render() {
        return (
            <div>
                <div className="animalButton content">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                    </button>
                </div>
                <section className="animals content">
                    <h3>List of Animals</h3>
                    {
                        this.props.animals.map(animal =>
                            <div key={animal.id} className="card">
                                <AnimalCard animal={animal} {...this.props} />
                            </div>
                        )
                    }
                </section>
            </div>
        )
    }
}

export default AnimalList