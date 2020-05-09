import React, { Component } from 'react'
import './form.css'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            eid: '',
            name: '',
            email: '',
            phone: '',
            department: '',
            manager: '',


        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        });
    }

    handleDepartmentChange = (event) => {
        this.setState({
            department: event.target.value
        });
    }
    handleManagerChange = (event) => {
        this.setState({
            manager: event.target.value
        });
    };
    handleSubmit = (event) => {
        alert(`${this.state.name} ${this.state.email} ${this.state.phone} ${this.state.department} ${this.state.manager}`)
        event.preventDefault()
    };

    render() {
        const { name, email, phone, department, manager }
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form">
                    <h3>Employee Updates</h3>
                    <div className="employeeInfo">
                        <label className="label"  >EID</label>
                        <input type="text" />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >Employee Name</label>
                        <input type="text" value={name} onChange={this.handleNameChange} />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >EMail Address</label>
                        <input type="text" value={email} onChange={this.handleEmailChange} />
                    </div>

                    <div className="employeeInfo">
                        <label className="label" >Phone Number</label>
                        <input type="text" value={phone} onChange={this.handlePhoneChange} />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >Department</label>
                        <input type="text" value={department} onChange={this.handleDepartmentChange} />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >Manager</label>
                        <input type="text" value={manager} onChange={this.handleManagerChange} />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >Search</label>
                        <input type="text" />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>

            </div >
        )
    }
}

export default Form
