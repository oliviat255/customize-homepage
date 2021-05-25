import React from "react";
import getDispensaryByZipcode from "./getDispensaries";

export class UserInfo extends React.Component {
    constructor(props) {
      super(props)
      }
  
      render() {
          return (
          <div>
            <h4>{"Hello world!!!!"}</h4>
          </div>
        )
      }
  } 

export default class Search extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {value: '', submitted: false};
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e) { 
        this.setState({value: e.target.value}); 
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted: true} )
        var toReturn = getDispensaryByZipcode(this.state.value)
        this.setState({value: toReturn})
    }

    render() { 
        return (
            <div>
            <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Enter Delivery Address</span>
            </label>
            <input
                value={this.state.value}
                type="text"
                id="header-search"
                placeholder="Enter Delivery Address"
                name="s" 
                onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
            Search
            </button>
        </form>
        </div>
        )
    }
}
