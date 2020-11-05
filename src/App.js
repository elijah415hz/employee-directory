import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import EmployeeTable from "./components/EmployeeTable"
import Search from "./components/Search"

export default class App extends Component {
    state = {
      search: "",
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

  inputChangeHandler = event => {
      let {name, value} = event.target
      this.setState({
          [name]: value
      })
  }

  submitFormHandler = event => {
    event.preventDefault()

  }

  arraysEqual(a, b) {
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  sortByName = () => {
      let employees = [...this.state.employees]
      let sortedEmployees = employees.sort((a, b) => (a.name.first >= b.name.first) ? 1:-1)
      if (this.arraysEqual(sortedEmployees, this.state.employees)) {
          sortedEmployees = employees.sort((a, b) => (a.name.first <= b.name.first) ? 1:-1)
      }
      this.setState({employees: sortedEmployees})
  }

  sortByEmail = () => {
      let employees = [...this.state.employees]
      let sortedEmployees = employees.sort((a, b) => (a.email >= b.email) ? 1:-1)
      if (this.arraysEqual(sortedEmployees, this.state.employees)) {
          sortedEmployees = employees.sort((a, b) => (a.email <= b.email) ? 1:-1)
      }
      this.setState({employees: sortedEmployees})
  }

  sortByState = () => {
      let employees = [...this.state.employees]
      let sortedEmployees = employees.sort((a, b) => (a.location.state >= b.location.state) ? 1:-1)
      if (this.arraysEqual(sortedEmployees, this.state.employees)) {
          sortedEmployees = employees.sort((a, b) => (a.location.state <= b.location.state) ? 1:-1)
      }
      this.setState({employees: sortedEmployees})
  }

  sortByAge = () => {
      let employees = [...this.state.employees]
      let sortedEmployees = employees.sort((a, b) => (a.dob.age >= b.dob.age) ? 1:-1)
      if (this.arraysEqual(sortedEmployees, this.state.employees)) {
          sortedEmployees = employees.sort((a, b) => (a.dob.age <= b.dob.age) ? 1:-1)
      }
      this.setState({employees: sortedEmployees})
  }


  render() {
    let filteredEmployees = this.state.employees
    if (this.state.search) {
      filteredEmployees = this.state.employees.filter(employee=>employee.name.first.substring(0, this.state.search.length) === this.state.search)
    }
    return (
      <div>
      <h1 className="text-center">Employee Directory</h1>
      <Search methods={{
        inputChangeHandler: this.inputChangeHandler,
        submitFormHandler: this.submitFormHandler
      }}
      search = {this.state.search}
      />
      <EmployeeTable methods={{
        sortByName: this.sortByName,
        sortByAge: this.sortByAge,
        sortByEmail: this.sortByEmail,
        sortByState: this.sortByState,
      }} 
      employees = {filteredEmployees}
      />
    </div>
  );
}
}


