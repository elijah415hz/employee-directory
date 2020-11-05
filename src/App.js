import './App.css';
import EmployeeTable from "./components/EmployeeTable.js"
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
      <h1 className="text-center">Employee Directory</h1>
      <EmployeeTable />
    </div>
  );
}
}


