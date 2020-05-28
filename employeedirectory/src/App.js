import React, { Component } from 'react'
import './App.css';
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Form from "./Form/Form"
import Table from "./Table/Table"






class App extends Component {

  state = {
    search: "",
    employeesDisplay: [
      {
        eid: 1,
        name: "Lisa Bonet",
        email: "Lisa.Bonet@RossCo.com",
        Phone: "555-123-4567",
        department: "Accounting",
        manager: "Jackie Chan"

      },
      {
        eid: 2,
        name: "Jennifer Lopez",
        email: "Jennifer.Lopez@RossCo.com",
        Phone: "555-234-5678",
        department: "Sales",
        manager: "Robin Harris"
      },
      {
        eid: 3,
        name: "Viola Davis",
        email: "Viola.Davis@Rossco.com",
        phone: "555-666-4567",
        department: "Web Design",
        manager: "Laurence Fishburn"
      },
      {
        eid: 4,
        name: "Julia Roberts",
        email: "Julia.Roberts@Rossco.com",
        phone: "555-345-6789",
        department: "Human Resources",
        manager: "Jak Nicholson",
      },
      {
        eid: 5,
        name: "Kevin Hart",
        email: "Kevin.Hart@Rossco.com",
        phone: "555-456-7890",
        department: "Pricing",
        manager: "Tiffany Haddish",
      },
      {
        eid: 6,
        name: "Idris Elba",
        email: "Idris.Elba@Rossco.com",
        workPhone: "555-567-8901",
        department: "Contract Administration",
        manager: "Cookie Lyon",
      }
    ],
    employees: [
      {
        eid: 1,
        name: "Lisa Bonet",
        email: "Lisa.Bonet@RossCo.com",
        Phone: "555-123-4567",
        department: "Accounting",
        manager: "Jackie Chan"

      },
      {
        eid: 2,
        name: "Jennifer Lopez",
        email: "Jennifer.Lopez@RossCo.com",
        Phone: "555-234-5678",
        department: "Sales",
        manager: "Robin Harris"
      },
      {
        eid: 3,
        name: "Viola Davis",
        email: "Viola.Davis@Rossco.com",
        phone: "555-666-4567",
        department: "Web Design",
        manager: "Laurence Fishburn"
      },
      {
        eid: 4,
        name: "Julia Roberts",
        email: "Julia.Roberts@Rossco.com",
        phone: "555-345-6789",
        department: "Human Resources",
        manager: "Jak Nicholson",
      },
      {
        eid: 5,
        name: "Kevin Hart",
        email: "Kevin.Hart@Rossco.com",
        phone: "555-456-7890",
        department: "Pricing",
        manager: "Tiffany Haddish",
      },
      {
        eid: 6,
        name: "Idris Elba",
        email: "Idris.Elba@Rossco.com",
        workPhone: "555-567-8901",
        department: "Contract Administration",
        manager: "Cookie Lyon",
      }
    ]

  }






  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value

    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.search)
    this.setState({
      employeesDisplay: this.state.employees.filter(employee => employee.name.includes(this.state.search))
    })

  };

  handleAddEmployee = (event, employeeInfo) => {
    event.preventDefault()
    console.log(employeeInfo)

  }




  render() {
    return (
      <div className="App" >
        <Header />
        <Footer />
        <Form search={this.state.search} handleSearchChange={this.handleSearchChange} handleSubmit={this.handleSubmit} handleAddEmployee={this.handleAddEmployee} />
        <Table employees={this.state.employeesDisplay} search={this.state.search} />

      </div>)

  }

}
export default App;
