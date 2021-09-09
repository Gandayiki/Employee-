/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios'

 class EditEmployee extends Component {
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

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:2021/employees/details/${id}`).then((res)=>{
            if(res.data.success){
               this.setState({
                   name:res.data.employee.name,
                   dateOfBirth:res.data.employee.dateOfBirth,
                   gender:res.data.employee.gender,
                   salary:res.data.employee.salary
               })
            }
         })
    }

    handleInputChange =(e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        });
    }

   
    onSubmit =() =>{
        const id = this.props.match.params.id;
        const {name,dateOfBirth,gender,salary} = this.state;
           const data = {
               name:name,
               dateOfBirth:dateOfBirth,
               gender:gender,
               salary:salary
           };
           console.log("data Submited:",data);
           axios.put(`http://localhost:2021/employees/update/${id}`,data).then((res)=>{
              if(res.data.success){
                  alert("Edited Successefully!");
              }
           })
    }

   render() {
       return (
           <div className ="col-md-10 mt-3 mx-auto">
               <h1 className ="h3 mb-3 font-weight-normal">Edit Employees </h1>
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
                           
                   </div>
                  
                   <div className ="form-group">
                       <label>Date Of Birth</label>
                       <input type ="date"
                           className ="form-control"
                           name ="dateOfBirth"
                           value = {this.state.dateOfBirth}
                           onChange ={this.handleInputChange}
                           />
                          
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
                           
                   </div>
                   <br></br>
                   
               <a className ="btn btn-primary" href ={`/`} onClick = {this.onSubmit} type ="submit">
               <i className ="fas fa-edit"></i> Edit & Update
               </a>
               </form>
               <br></br>                
           </div>
       )
   }
}

export default EditEmployee;