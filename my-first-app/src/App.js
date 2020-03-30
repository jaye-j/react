
import React, {Component} from 'react';
import Virus from './components/Virus';
import data from './data/virus';



class App extends Component{
  
  render() {

    let newDataSet = data.map((cdc, index)=>{

      return <Virus num={cdc.numViruses} deaths={cdc.numDeaths} country={cdc.country} key={index}/>
    })

    return(
      <div>
        {newDataSet}
      </div>
    )
  }
}


// function App(props) {

//   let newDataSet = data.map((cdcData)=>{

//     return <Virus country={cdcData.country} num={cdcData.numViruses} deaths={cdcData.numDeaths}/>
//   });

//   return(
//   <div>
//       {newDataSet}
//       {/* <Virus country={data[0].country} num={data[0].numViruses} deaths={data[0].numDeaths}/>
//       <Virus country={data[1].country} num={data[1].numViruses} deaths={data[1].numDeaths}/>
//       <Virus country={data[2].country} num={data[2].numViruses} deaths={data[2].numDeaths}/>
//       <Virus country={data[3].country} num={data[3].numViruses} deaths={data[3].numDeaths}/> */}
//   </div>
//   )
// };


export default App;