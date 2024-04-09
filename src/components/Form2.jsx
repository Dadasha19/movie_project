import React from 'react';


class Form extends React.Component {
    state = {
        firstName: ' ',
        email: ' ',
        textarea: ' ',
        select: ' ',
        checkbox: false,
        checkbox1: false,
        radio: ' ',
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleChangeCheckbox = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    validateName = () => {
        if (this.state.firstName.length < 5 ) {
            alert('Error more, short name');
        }
    }
    validateEmail = () => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
            alert('You have entered an invalid email address!');
        }
    }

    render() {
        const {firstName, email, textarea, select, checkbox, checkbox1, radio} = this.state;
        return <div>
            <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} onBlur={this.validateName} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} onBlur={this.validateEmail} />
            <br />
            <textarea name="textarea" value={textarea} onChange={this.handleChange}></textarea>
            <br />
            <select name="select" value={select} onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br />
            <label htmlFor=""><input type='checkbox' name="checkbox" onChange={this.handleChangeCheckbox} checked={checkbox}  />111</label>
            <label htmlFor=""><input type='checkbox' name="checkbox1" onChange={this.handleChangeCheckbox} checked={checkbox1}  />222</label>
            <br />
            <label htmlFor=""><input type='radio' name="radio" onChange={this.handleChange} value="test1" checked={radio === "test1"} />111</label>
            <label htmlFor=""><input type='radio' name="radio" onChange={this.handleChange} value="test2" checked={radio === "test2"} />222</label>

        </div>

    }
}

export {Form};