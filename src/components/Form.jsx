import React from 'react';


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: ' ',
            email: ' ',
            radio: false,

        };
        this.myRef = React.createRef();
        this.myRefEmail = React.createRef();
    }
    

    handleChange = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}), () => {
            if(this.state.firstName.length === 16) {
                this.myRefEmail.current.focus();
            }
        })
    }

    handleChangeCheckbox = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    componentDidMount() {
        console.log(this.myRef)
        this.myRef.current.focus();
    }

    // const toggleMenu = () => {
    //     document.body.classList.toggle('open')
    //   }
      
    //   const toggleSubMenu = (e: Event) => {
    //     const target = e.target as HTMLElement
    //     const parent = target.closest('.sub-menu-li')
    //     if (parent) {
    //       parent.classList.toggle('active')
    //     }
    //   }

    render() {
        const {firstName, email, radio} = this.state;
        return <div>
            <input type="tel" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} ref={this.myRef} />
            <br />
            <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} ref={this.myRefEmail} />
            <br />
            <label htmlFor=""><input type='radio' name="radio" onChange={this.handleChange} value="test1" checked={radio === "test1"} />111</label>
            <label htmlFor=""><input type='radio' name="radio" onChange={this.handleChange} value="test2" checked={radio === "test2"} />222</label>
            <br />
        </div>

    }
}

export {Form};