import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Footer from './Footer';



function todo(){
return[
  <div>
    <Header name="Task List" />
    
 <ul>
 <li> Getup form bed, Wednessday Sep 13,2017</li>
 <li> Breach your Teeth,Thu Sep 14 2017 </li>
 <li> Eat Breakfast,Fri Sep 15 2017</li>
 </ul>
  </div>
];

}

class Todotask extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{todo()}</p>
         <Footer />
      </div>
    );
  }
}

render(
  <Todotask />,document.getElementById('root'));
