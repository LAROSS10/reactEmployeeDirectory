import React, { Component } from 'react'
import "./table.css"


class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloading: false,
            results: [],
            value: '',

        }

    }

    // most of the code below comes from an article found at this url https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg

    renderTableData() {
        return this.props.employees.map((employee, index) => {
            const { name, email, phone, department, manager, eid } = employee //destructuring
            return (
                <tr className="employee" >
                    <td className="employee">{eid}</td>
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
        let header = Object.keys(this.props.employees[0])
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

