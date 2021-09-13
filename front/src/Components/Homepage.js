import React  from 'react'
import axios from 'axios'
import Home from '../Pages/Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      employees:[]
    }
    
    this.onDelete = this.onDelete.bind(this);
  }

  //Component DidMountClas 
  //Run immediate after the Data Updates!
  componentDidMount(){
     this.getEmployees()
  }
 
  //OnDelete Function

  onDelete =(id)=>{
    axios.delete(`http://localhost:2021/employees/delete/${id}`)
    .then((res)=>{
      if(res.data.success){
        alert(res.data.employee.name+" has been Desleted Successefully")
      }
    });
    this.getEmployees();
  }
  

  // Get all Employees using axios module 
   getEmployees(){    
    axios.get('http://localhost:2021/employees').then(res =>{
      if(res.data.success){
        this.setState({
          employees:res.data.employees,
        });
        console.log("Employees:",this.state.employees)
      }
    });
   }

   //Filter Data By Search 

   filterContent(employees , searchTerm){
     const result = employees.filter((employee)=>
     employee.name.toLowerCase().includes(searchTerm) ||
     employee._id.toLowerCase().includes(searchTerm) ||
     employee.gender.toLowerCase().includes(searchTerm) ||
     employee.salary.toString().includes(searchTerm.toString())
     );
     this.setState({employees:result});
   }

   //Handle Search 
   handleTextSearch =(e)=>{
     const searchTerm =  e.currentTarget.value
     axios.get('http://localhost:2021/employees').then(res =>{
      if(res.data.success){
        this.filterContent(res.data.employees , searchTerm);
      }
        console.log("Employees:",this.state.employees)
    });
   }
 render(){
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          </Switch>
      </Router>

      <br></br>
      <br></br>
      <br></br>
      <br></br>


    <div className = "container">
       <h1> Employee Management System</h1>
       <input className ="form-control"
              type ="search"
              placeholder="search"
              name ="search"
              onChange = {this.handleTextSearch}
       />

<table class="table">
  <thead>
    <tr>
      <th scope="col">ObJect ID</th>
      <th scope="col">Name </th>
      <th scope="col">Date Of Bith</th>
      <th scope="col">Gender</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
   
       {this.state.employees.map((employee,index)=>(
      <tr>
        <th>{index}</th>
        <th>{employee.name}</th>
        <th>{employee.dateOfBirth}</th>
        <th>{employee.gender}</th>
        <th>{employee.salary} </th>
        <td>
          <a className ="btn btn-warning" href ={`/edit/${employee._id}`} >
            <i className ="fas fa-edit"></i> Edit</a>
        </td>
        <td>
          <a className ="btn btn-danger" href ={`/`} onClick ={()=>this.onDelete(employee._id)}>
          <i className = "far fa-trash-alt"></i> Delete</a>
        </td>
        <td>
          <a className ="btn btn-secondary" href ={`/details/${employee._id}`}>
          <i className = "fa-solid fa-spinner fa-pulse"></i> Details</a>
        </td>
        </tr>
      ))} 
  </tbody>
 </table>
 <td>
        <a className =" btn btn-success" href={`/add`} type ="submit">
        <i className ="fas fa-plus-circle"></i> Add New Employee</a>
        </td>
   </div>
    </>
  )
 }
}
export default HomePage
