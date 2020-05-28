import React, { Component, Fragment } from 'react'
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





    handleInputChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value

        })

    }






    render() {

        return (

            <div>
                <form className="form">
                    <h3>Employee Updates</h3>
                    <div className="employeeInfo">
                        <label className="label"   >EID</label>
                        <input name="eid" value={this.state.eid} onChange={this.handleInputChange} type="text" />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >Employee Name</label>
                        <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >Email Address</label>
                        <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
                    </div>

                    <div className="employeeInfo">
                        <label className="label" >Phone Number</label>
                        <input name="phone" type="text" value={this.state.phone} onChange={this.handleInputChange} />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >Department</label>
                        <input name="department" type="text" value={this.state.department} onChange={this.handleInputChange} />
                    </div>
                    <div className="employeeInfo">
                        <label className="label" >Manager</label>
                        <input name="manager" type="text" value={this.state.manager} onChange={this.handleInputChange} />
                    </div>
                    <div className="employeeInfo">
                        <label className="label"  >Search</label>
                        <input name="search" value={this.props.search} type="text" onChange={this.props.handleSearchChange} />
                    </div>
                    <div>
                        <button onClick={this.props.handleSubmit} type="submit">Submit</button>
                        <button onClick={(event) => this.props.handleAddEmployee(event, this.state)}>Add Employee</button>
                    </div>
                </form>

            </div >

        )
    }
}

export default Form
