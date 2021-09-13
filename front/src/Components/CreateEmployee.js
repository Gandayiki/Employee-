/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import axios from 'axios';
import {setErrors} from '../Common/setErrors';

 class CreateEmployee extends Component {
     constructor(props){
         super(props);
         this.state ={
             name :"",
             dateOfBirth:"",
             gender:"",
             salary:"",
             errors:{}
         }
     }

     handleInputChange =(e)=>{
         const {name,value} = e.target;
         this.setState({
             ...this.state,
             [name]:value
         });
     }

     validate =(name,dateOfBirth,gender,salary)=>{
         const errors = setErrors(name,dateOfBirth,gender,salary);
         this.setState({errors:errors});
         return Object.values(errors).every((err)=>err ==="");
     };

     onSubmit =(e) =>{
        e.preventDefault();

         const {name,dateOfBirth,gender,salary} = this.state;
         if(this.validate(name,dateOfBirth,gender,salary)){
            const data = {
                name:name,
                dateOfBirth:dateOfBirth.toString(),
                gender:gender,
                salary:salary
            };
            console.log("data Submited:",data);
            axios.post("http://localhost:2021/employees/add",data).then((res,err)=>{
               if(res.data.success){
                   alert("added");
                   this.setState({name:"",dateOfBirth:"",gender:"",salary:""});
               }
               else{
                   res.status({success:false,err})
                   alert("Error Happened is :", err);
                   this.setState({name:"",dateOfBirth:"",gender:"",salary:""});
               }
            })
         }
     }

    render() {
        return (
            <div className ="col-md-10 mt-3 mx-auto">
                <h1 className ="h3 mb-3 font-weight-normal">Add New Employee</h1>
                <form className ="needs-validation" noValidate>
                    <div className ="form-group">
                        <label>Employee Name</label>
                        <input type ="text"
                            className ="form-control"
                            name ="name"
                            placeholder ="Enter Employee Name!"
                            value = {this.state.name}
                            onChange ={this.handleInputChange}
                            />
                            {this.state.errors.name  && (
                                <div className ="text-danger">{this.this.state.errors.name}</div>
                            )}
                    </div>
                   
                    <div className ="form-group">
                        <label>Date Of Birth</label>
                        <input type ="date"
                            className ="form-control"
                            name ="dateOfBirth"
                            value = {this.state.dateOfBirth}
                            onChange ={this.handleInputChange}
                            />
                            {this.state.errors.dateOfBirth  && (
                                <div className ="text-danger">{this.this.state.errors.dateOfBirth}</div>
                            )}
                    </div>
                    <div className ="form-group">
                        <label>Gender</label>
                        <input type ="text"
                            className ="form-control"
                            name ="gender"
                            placeholder ="Enter Gender"
                            value = {this.state.gender}
                            onChange ={this.handleInputChange}
                            />
                            {this.state.errors.gender  && (
                                <div className ="text-danger">{this.this.state.errors.gender}</div>
                            )}
                    </div>
                    <div className ="form-group">
                        <label>Salary</label>
                        <input type ={Number}
                            className ="form-control"
                            name ="salary" 
                            placeholder ="Enter Employees Salary"
                            value = {this.state.salary}
                            onChange ={this.handleInputChange}
                            noValidate
                            />
                            {this.state.errors.salary  && (
                                <div className ="text-danger">{this.this.state.errors.salary}</div>
                            )}
                    </div>
                    <br></br>
                    
                <a className ="btn btn-success" href ={`/`} onClick = {this.onSubmit} type ="submit">
                <i className ="fas fa-plus-circle"></i> Save & Submit
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className ="btn btn-success" href ={`/`}>
                <i className ="fas fa-igloo" ></i>Back Home
                </a>
                </form>
                <br></br>                
            </div>
        )
    }
}


export default CreateEmployee;