import './App.css';
import React, {Component} from 'react';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
      cashElements:[
        {name: `500 zł`,value: 500,quantity: 0,},
        {name: `200 zł`,value: 200,quantity: 0,},
        {name: `100 zł`,value: 100,quantity: 0,},
        {name: `50 zł`,value: 50,quantity: 0,},
        {name: `20 zł`,value: 20,quantity: 0,},
        {name: `10 zł`,value: 10,quantity: 0,},
        {name: '5zł',value: 5,quantity: 0},
        {name: '2zł',value: 2,quantity: 0},
        {name: '1zł',value: 1,quantity: 0},
        {name: '50gr',value: 0.5,quantity: 0},
        {name: '20gr',value: 0.2,quantity: 0},
        {name: '10gr',value: 0.1,quantity: 0},
        {name: '5gr',value: 0.05,quantity: 0},
        {name: '2gr',value: 0.02,quantity: 0},
        {name: '1gr',value: 0.01,quantity: 0}
      ],
      totalValue: function(){
        let sum=0;
        for(let i=0;i<this.cashElements.length;i++){
          sum = this.cashElements[i].value * this.cashElements[i].quantity + sum;
        }
        return sum;
      }
    };
    
  }
  // handleSumChange(){
  //   var sum;
  //   this.state.cashElements.forEach(()=>{

  //   })
  // }
  isButtonDisabled(key){
    
    const values = this.state.cashElements;
    const newValue = values.filter((e)=>{
      return(e.name===key)
    });
    if(newValue[0].name===key && newValue[0].quantity===0){
      return true
    }
    else{
      return false
    }
    
  }
  render(){
  return (
    <div className="container">
      <h1>Podaj ilość banknotów/monet</h1>
      <h1>Suma: {this.state.totalValue()}</h1>
      <div className="cash">

     
      {this.state.cashElements.map((e,i)=> {
        const element = e;
        return(
          <div key={e.name} className='inputBar'>
            <p>{e.name}</p>
            <button
            disabled={this.isButtonDisabled(e.name)}
            onClick={()=>{
              this.setState(prevState =>({
                cashElements: prevState.cashElements.map(
                  obj => (obj.name === element.name ? Object.assign(obj, {quantity: obj.quantity-0.5}) : obj)
                )
              }))
            }}>-</button>
            <p>{e.quantity}</p>
            { <button onClick={()=>{
              this.setState(prevState =>({
                cashElements: prevState.cashElements.map(
                  obj => (obj.name === element.name ? Object.assign(obj, {quantity: obj.quantity+0.5}) : obj)
                )
              }))
            }}>+</button> 
        }
          </div>
        )

        
      })}
     
      
     </div>
    </div>
  );
  }
}



//  function InputBar(props){
//   console.log(props)
//   return(
//       <div className='inputBar'>
//       <p>{props.name}</p>
//       <button >
//         -
//       </button>
//       <p> 
//         {props.quantity}
//       </p>
//       <button >
//         +
//       </button>
     
      
//       </div>
//   );
  
// }


export default App;
