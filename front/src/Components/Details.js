
import React, { Component } from 'react';
import axios from 'axios';

 class Details extends Component {
     constructor(props){
         super(props);
         this.state ={
             employee:{},
             
         }
     }
     componentDidMount(){
         const id = this.props.match.params.id;

         axios.get(`http://localhost:2021/employees/details/${id}`).then((res)=>{
             if(res.data.success){
                 this.setState({
                     employee: res.data.employee,
                 });
                 console.log("Employee: ",this.state.employee);
             }
         })
     }
    render() {
        const {name,dateOfBirth,gender,salary} = this.state.employee;
        return (
            <div className ="container">
                <h1>Employee Detail</h1>
                <hr></hr>
                 <div className="container"><h4>{name}'s Details</h4></div> 
                 <hr></hr>
                 <dl class="row">
                   <dt className="col-sm-2">Name: </dt>
                    <dd className="col-sm-10">{name}</dd>
                    <dt className="col-sm-2">Bith Of Date: </dt>
                    <dd className="col-sm-10">{dateOfBirth}</dd>
                    <dt className="col-sm-2">Gender: </dt>
                    <dd className="col-sm-10">{gender}</dd>
                    <dt className="col-sm-2">Salary: </dt>
                    <dd className="col-sm-10">{salary}</dd>  </dl>
                <a className =" btn btn-success" href ={`/`}>
                   <i className="fas fa-igloo"></i>
                   Home</a>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <a className =" btn btn-success" href =" ">
                   <i className="fas fa-file-export"></i>
                   Export Data</a>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <a className =" btn btn-success" href =" ">
                   <i className="fas fa-print"></i>
                   Print Data</a>
            </div>
        )
    }
}

export default Details;