import React from 'react';


class Form extends React.Component {
    state = {
        email: ' ',
        isAgreeWithTerms: false,
    };
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleChangeCheckbox = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }
    validateForm = () => {
        const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email);
        const validateCheckbox = this.state.isAgreeWithTerms;
        if (!validateEmail) {
            alert('You have entered an invalid email address!');
            return
        }
        if (!validateCheckbox) {
            alert('You have entered Checkbox!');
            return
        }
        this.setState ({
            email: ' ',
            isAgreeWithTerms: false,
        })
        alert('It\'s OK!');
    }
  
    render() {
        const { email, isAgreeWithTerms } = this.state;
        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleChangeCheckbox}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.validateForm}>Send</button>
            </div>
        );
    }
}

export {Form};