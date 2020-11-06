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
          // console.log(res.data.results[0])
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

  sortBy = (key1, key2) => {
      let employees = [...this.state.employees]
      let sortedEmployees = employees.sort((a, b) => a[key1][key2] >= b[key1][key2] ? 1:-1)
      // If the array is already sorted ascending, sort it descending
      if (this.arraysEqual(sortedEmployees, this.state.employees)) {
          sortedEmployees = employees.sort((a, b) => a[key1][key2] <= b[key1][key2] ? 1:-1)
      }
      console.log(sortedEmployees)
      this.setState({employees: sortedEmployees})
  }

  render() {
    let filteredEmployees = this.state.employees
    // Start filtering the array if there's anything in the search box
    if (this.state.search) {
      filteredEmployees = this.state.employees.filter(employee=>{
        return employee.name.first.substring(0, this.state.search.length) === this.state.search
      })
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
      <EmployeeTable 
      methods={{sortBy: this.sortBy}} 
      employees = {filteredEmployees}
      />
    </div>
  );
}
}


