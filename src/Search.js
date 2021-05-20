import React from "react";
import getDispensaryByZipcode from "./getDispensaries";

export default class Search extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e) { 
        this.setState({value: e.target.value}); 
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("The submit button was clicked.") 
        var toReturn = getDispensaryByZipcode(this.state.value)
        console.log(toReturn)
    }
    render() { 
        return (
            <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Enter Delivery Address</span>
            </label>
            <input
                value={this.state.value}
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s" 
                onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
            Search
            </button>
        </form>
        )
    }
}
