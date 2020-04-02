import React, { Component } from "react";
import PieChart from "./PieChart";


class Corona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchResults: ""
    };
  }
  componentDidMount = params => {
    let url = "https://corona.lmao.ninja/states";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(all => {
        console.log(all);
        console.log("1");
        this.setState({
          data: all
        });
      });
  };
  handleChange = e => {
    this.setState({ searchResults: e.target.value });
    console.log(this.state.searchResults);
  };
  chartData = params => {
    const state = {
        labels: [],
        datasets: [
          {
            label: "Cases",
            backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
            hoverBackgroundColor: [
              "#501800",
              "#4B5000",
              "#175000",
              "#003350",
              "#35014F"
            ],
            data: [65, 59, 80, 81, 56]
          }
        ]
      };
      let { data, searchResults } = this.state;
      data.forEach((state)=>{
          state.labels.push(state.state)
      })
  }
  render() {
    let { data, searchResults } = this.state;
    // console.log(data);
    console.log("2");
    console.log(data);
    let filteredResults = data.filter(stateData => {
      return stateData.state.toLowerCase().includes(this.state.searchResults);
    });
    let stateList = filteredResults.map((state, index) => {
      return (
        <li key={index}>
          <h4>{state.state}</h4>
          <p>Cases: {state.cases}</p>
          <p>Deaths: {state.deaths}</p>
          <p>Today's Cases: {state.todayCases}</p>
          <p>Today's Deaths: {state.todayDeaths}</p>
          <p>Active Cases: {state.active}</p>
          <p>
            Percentage of death per case:{" "}
            {(state.deaths / state.cases).toFixed(5) * 100}%
          </p>
          <br/>
        </li>
      );
    });
    return (
      <>
        <PieChart />
        <input type="text" width="500px" placeholder="Search" onChange={this.handleChange} />
        <ul>{stateList}</ul>
      </>
    );
  }
}
export default Corona;