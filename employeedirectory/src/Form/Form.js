import React, { Component } from 'react'
import './form.css'

class Form extends Component {
    render() {
        return (
            <div>
                <form className="form">
                    <div>
                        <label>Employee Identification Number</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Employee First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Employee Last Name</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label>Employee Department</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Employee Manager Name</label>
                        <input type="text" />
                    </div>
                </form>
            </div >
        )
    }
}

export default Form
