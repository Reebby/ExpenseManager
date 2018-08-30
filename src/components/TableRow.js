import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

   handleDelete(event) {
  event.preventDefault();
   axios.get('https://expenseapi.herokuapp.com/expenses/delete/'+ this.props.obj._id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
  }
  render() {
    return (
        <tr>
          <th scope="row">{this.props.obj._id}</th>
          <td>{this.props.obj.description}</td>
          <td>{this.props.obj.amount}</td>
          <td>{this.props.obj.month}</td>
          <td>{this.props.obj.year}</td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;