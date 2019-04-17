import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import AnimalDetail from "./animal/AnimalDetail"
import EmployeeDetail from "./employee/EmployeeDetail"

class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        LocationManager.getAll()
            .then(locations => newState.locations = locations)
            .then(() => AnimalManager.getAll())
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => OwnerManager.getAll())
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    deleteAnimal = id => AnimalManager.delete(id)
        .then(() => AnimalManager.getAll())
        .then(animals => {
            this.props.history.push("/animals")
            this.setState({ animals: animals })
        })

    deleteEmployee = id => EmployeeManager.delete(id)
        .then(() => EmployeeManager.getAll())
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({ employees: employees })
        })

    deleteOwner = id => {
        OwnerManager.removeAndList(id)
            .then(owners => this.setState({
                owners: owners
            })
            )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={() => {
                    return <AnimalList deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    let employee
                    if(animal) {
                        employee = this.state.employees.find(employee =>
                            employee.id === animal.employeeId)
                    }
                    // If the animal wasn't found, create a default one
                    else if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found", employeeId:"404" }
                        employee = {id:404, name: ""}
                    }



                    return <AnimalDetail animal={animal} employee={employee} deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the employee with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    // If the employee wasn't found, create a default one
                    if (!employee) {
                        employee = { id: 404, name: "Employee not found" }
                    }

                    return <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)