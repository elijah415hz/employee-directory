import React, { Component } from 'react'
import axios from 'axios'

export default class EmployeeTable extends Component {
    
    state = {
        employees: []
    }

    componentDidMount = () => {
        this.getEmployees()
    }
    
    getEmployees = () => {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
        .then(res => {
            console.log(res.data.results[0])
            this.setState({ employees: res.data.results.slice(0, 20) })
        })
        .catch(err => console.log(err));
    };

    sortByName = () => {
        let employees = this.state.employees
        let sortedEmployees = employees.sort((a, b) => (a.name.first > b.name.first) ? 1:-1)
        this.setState({employees: sortedEmployees})
    }

    sortByEmail = () => {
        let employees = this.state.employees
        let sortedEmployees = employees.sort((a, b) => (a.email > b.email) ? 1:-1)
        this.setState({employees: sortedEmployees})
    }

    sortByState = () => {
        let employees = this.state.employees
        let sortedEmployees = employees.sort((a, b) => (a.location.state > b.location.state) ? 1:-1)
        this.setState({employees: sortedEmployees})
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th onClick={this.sortByName}>Name</th>
                            <th onClick={this.sortByEmail}>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th onClick={this.sortByState}>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee=>{
                            return (
                            <tr key={employee.id.value}>
                                <td><img src={employee.picture.thumbnail} /></td>
                                <td>{`${employee.name.first} ${employee.name.last}`}</td>
                                <td>{employee.email}</td>
                                <td>{employee.cell}</td>
                                <td>{employee.dob.age}</td>
                                <td>{`${employee.location.street.number} ${employee.location.street.name} ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}`}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
