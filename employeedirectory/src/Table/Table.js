import React, { Component } from 'react'
import "./table.css"


class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    }

    // most of the code below comes from an article found at this url https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg

    renderTableData() {
        return this.state.employees.map((employee, index) => {
            const { name, email, phone, department, manager, } = employee //destructuring
            return (
                <tr className="employee" >
                    <td className="employee">{name}</td>
                    <td className="employee">{email}</td>
                    <td className="employee">{phone}</td>
                    <td className="employee">{department}</td>
                    <td className="employee">{manager}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='employees'>
                    <tbody className="table">
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
    renderTableHeader() {
        let header = Object.keys(this.state.employees[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Employee Table</h1>
                <table id='employees'>
                    <tbody className="table">
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table

