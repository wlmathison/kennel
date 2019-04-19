import { Route, Redirect } from "react-router-dom"
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
import OwnerDetail from "./owners/OwnerDetail"
import LocationDetail from "./location/LocationDetail"
import AnimalForm from "./animal/AnimalForm"
import OwnerForm from "./owners/OwnerForm"
import EmployeeForm from "./employee/EmployeeForm"
import Login from './authentication/Login'

class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }
    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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

    addAnimal = animal =>
        AnimalManager.post(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );

    deleteEmployee = id => EmployeeManager.delete(id)
        .then(() => EmployeeManager.getAll())
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({ employees: employees })
        })

    addEmployee = employee => EmployeeManager.post(employee)
        .then(() => EmployeeManager.getAll())
        .then(employees => {
            this.setState({ employees: employees })
        })

    deleteOwner = id => OwnerManager.delete(id)
        .then(() => OwnerManager.getAll())
        .then(owners => {
            this.props.history.push("/owners")
            this.setState({ owners: owners })
        })

    addOwner = owner => OwnerManager.post(owner)
        .then(() => OwnerManager.getAll())
        .then(owners =>
            this.setState({
                owners: owners
            }))

    deleteLocation = id => LocationManager.delete(id)
        .then(() => LocationManager.getAll())
        .then(locations => {
            this.props.history.push("/")
            this.setState({ locations: locations })
        })

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList locations={this.state.locations} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                {/* Our shiny new route. We pass employees to the AnimalForm so a dropdown can be populated */}
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm addEmployee={this.addEmployee} employees={this.state.employees} {...props} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} addOwner={this.addOwner} owners={this.state.owners} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    let employee
                    if (animal) {
                        employee = this.state.employees.find(employee =>
                            employee.id === animal.employeeId)
                    }
                    // If the animal wasn't found, create a default one
                    else if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found", employeeId: "404" }
                        employee = { id: 404, name: "" }
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
                        employee = { id: 404, name: "404 Employee not found" }
                    }
                    return <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    // Find the owner with the id of the route parameter
                    let owner = this.state.owners.find(owner =>
                        owner.id === parseInt(props.match.params.ownerId)
                    )
                    // If the owner wasn't found, create a default one
                    if (!owner) {
                        owner = { id: 404, name: "404 Owner not found" }
                    }
                    return <OwnerDetail owner={owner} deleteOwner={this.deleteOwner} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    // Find the location with the id of the route parameter
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )
                    // If the location wasn't found, create a default one
                    if (!location) {
                        location = { id: 404, name: "404 Location not found" }
                    }
                    return <LocationDetail location={location} deleteLocation={this.deleteLocation} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)