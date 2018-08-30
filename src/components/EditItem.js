import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditItem extends Component {

  constructor(props) {
      super(props);
      this.state = {
        expenses: '',
        description: '',
        amount: '',
        month: '',
        year: ''
      };
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleMonthChange = this.handleMonthChange.bind(this);
      this.handleYearChange = this.handleYearChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('https://expenseapi.herokuapp.com/expenses/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({
       description: response.data.description,
        amount: response.data.amount,
        month: response.data.month,
        year: response.data.year
     });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
    console.log(this.state.description);
  }

handleAmountChange(e) {
  this.setState({amount: e.target.value});
}

handleMonthChange(e) {
  this.setState({month: e.target.value});
}

handleYearChange(e) {
  this.setState({year: e.target.value});
}

handleSubmit(e) {
e.preventDefault();
 axios.post('https://expenseapi.herokuapp.com/expenses/update/'+this.props.match.params.id, {
      description: this.state.description,
        amount: this.state.amount,
        month: this.state.month,
        year: this.state.year
    })
    .then(res => this.setState({ expenses: res.data }))
    .catch(err => console.log(err))
}

  render() {
    console.log(this.state.expenses);
    return (
          <div className="container">

             <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-3">
            <h5 className="text-center" style={{backgroundColor: '#222', height: '50px', padding: '5px', color: 'white'}}> Edit </h5>
            <label>Description:</label>
            <input type="text" value={this.state.description} className="form-control form-control-sm" onChange={this.handleDescriptionChange } placeholder="Enter description"/>
            </div>

            <div className="form-group">
            <label>Amount:</label>
            <input type="number" value={this.state.amount} className="form-control form-control-sm" onChange={this.handleAmountChange } placeholder="Enter amount"/>
            </div>
            
             <div className="form-group">
            <label>Month</label>
                <select type="month" value={this.state.month} className="form-control" onChange={this.handleMonthChange }>
                  <option value="" id=""></option>
                 <option value="Jan" id="Jan">January</option>
            <option value="Feb" id="Feb">Febrary</option>
            <option value="Mar" id="Mar">March</option>
            <option value="Apr" id="Apr">April</option>
            <option value="May" id="May">May</option>
            <option value="Jun" id="Jun">June</option>
            <option value="Jul" id="Jul">July</option>
            <option value="Aug" id="Aug">August</option>
            <option value="Sep" id="Sep">September</option>
            <option value="Oct" id="Oct">October</option>
            <option value="Nov" id="Nov">November</option>
            <option value="Dec" id="Dec">December</option>
                </select>
            </div>

               <div className="form-group">
            <label>Year</label>
                <select type="date" value={this.state.year} className="form-control" onChange={this.handleYearChange }>
                 <option value="" id=""></option>
               <option value="2016" id="16">2016</option>
            <option value="2017" id="17">2017</option>
            <option value="2018" id="18">2018</option>
            <option value="2019" id="19">2019</option>
            <option value="2020" id="20">2020</option>
                </select>
            </div>

           
           <div className="form-group text-center">
           <button type="submit"  className="btn btn-success" data-dismiss="modal"  onClick={this.handleSubmit } >Add Expense</button>
            </div>
            
          <div className="modal-footer">
          
          <Link to={'/'}> <button className="btn btn-danger" data-dismiss="modal">Back</button> </Link>

          </div>
           </form>
        </div>
    );
  }
}

export default EditItem;