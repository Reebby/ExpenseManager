import React, { Component } from 'react';
class Table extends Component {
    
render(props) {
	return (
   <div className="container mt-3">
       <div className="row">
         <div className="col-md-12 col-sm-12">
             <table className="table table-bordered">
             <thead>
             <tr>
             <th>id</th>
             <th>Description</th>
             <th>Amount</th>
             <th>Month</th>
             <th>Year</th>
             <th>Edit</th>
             <th>Delete</th>
             </tr>
             </thead>
             <tbody>
             {this.props.tabRow}    
             </tbody>
             </table>
         </div>
       </div>
   </div>
		);
}
} 

export default Table;