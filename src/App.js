import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
class App extends Component{
  state ={
    text : ""
  };
  handleAdd= async e =>{
        await this.setState({
      text: e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state.text);
    let formData = new FormData();
    formData.append("text",this.state.text);
    const url = "//localhost/react-backend/";
    Axios.post(url,formData)
    .than(res=> console.log(res.data))
    .catch(err=> console.log(err))
  }
render()
{
return(
<div className="App-header">
  <h1>TheQRMart</h1>
<br/>
<button
    type="button" className="btn btn-success"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost/fyppro/search.php';
      }}
> Search Here</button>
 <button
    type="button" className="btn btn-success"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost/fyppro/admin_login.php';
      }}
> Admin Login</button>
</div>
);
} 
}
export default App;