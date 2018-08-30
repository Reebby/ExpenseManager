import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';
import TableRow from './components/TableRow';
import ExpenseService from './components/ExpenseService';
import axios from 'axios';
class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      description: '',
      amount: '',
      month: '',
      year: '',
       data: '',
       messageForServer: ''
    }
    this.addExpenseService = new ExpenseService();
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
      axios.get('https://expenseapi.herokuapp.com/expenses/getData')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    tabRow() {
              if (this.state.data instanceof Array){
        return this.state.data.map(function(object, i){
             return <TableRow obj={object} key={i} />;
                 })
            }  
            } 

  handleDescription(e) {
    this.setState({description: e.target.value});
  }

    handleAmount(e) {
    this.setState({amount: e.target.value});
  }

    handleMonth(e) {
    this.setState({month: e.target.value});
  }

    handleYear(e) {
    this.setState({year: e.target.value});
  }

  handleSubmit(event) {
     event.preventDefault();
     this.addExpenseService.sendData(this.state.description, this.state.amount, this.state.month, this.state.year);
  }

	
  render() {
    return (
      <div>
       <Add  handleSubmit = {this.handleSubmit} handleYear = {this.handleYear} handleMonth = {this.handleMonth} handleAmount = {this.handleAmount} handleDescription = {this.handleDescription}/>
       <Table  tabRow = {this.tabRow()}/>
       <hr style={{width: '40%'}} />
       <p className="text-center">With Love from Rebby &copy; 2018 </p>
      </div>
    );
  }
}

export default App;
