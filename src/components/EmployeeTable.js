import React from 'react'

export default function EmployeeTable (props) {
        return (
            <div>
            {props.employees.length > 0 ? (
                <table className="mx-auto">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th onClick={() => props.methods.sortBy("name", "first")}>Name</th>
                            <th onClick={() => props.methods.sortBy("email")}>Email</th>
                            <th>Phone</th>
                            <th onClick={() => props.methods.sortBy("dob", "age")}>Age</th>
                            <th onClick={() => props.methods.sortBy("location", "state")}>Location</th>
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
              )  : <h1 className="text-center">Employees Loading...</h1>}
            </div>
        )
    }

