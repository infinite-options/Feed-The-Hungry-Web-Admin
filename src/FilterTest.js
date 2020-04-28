import React, {Component } from 'react'
import ReactDOM from "react-dom";
import GraphsTwo from './graphsTest/GraphsTwo';
import JsonThree from './graphsTest/JsonThree';

class FilterTest extends React.Component {
    constructor(props) {
        super(props);
        this.
        state = {
            value: 'coconut'
            };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

    <GraphsTwo value = {this.state.value}/>
    <JsonThree value = {this.state.value}/>
</div>
      );
    }
  }
  export default FilterTest;//