import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees content">
            <h3>Employee List</h3>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList