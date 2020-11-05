import React from 'react'

export default function EmployeeTable (props) {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th onClick={props.methods.sortByName}>Name</th>
                            <th onClick={props.methods.sortByEmail}>Email</th>
                            <th>Phone</th>
                            <th onClick={props.methods.sortByAge}>Age</th>
                            <th onClick={props.methods.sortByState}>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employees.map(employee=>{
                            return (
                            <tr key={employee.id.value}>
                                <td><img src={employee.picture.thumbnail} alt="Employee"/></td>
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

