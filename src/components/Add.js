import React, { Component } from 'react';
class Add extends Component {
  
render(props) {
	return (
		
   <div>
	     <h1 className="text-center" style={{ padding: '20px', color: 'blue'}}> Expense Manager </h1>   

          <div className="container">
          <div className="row">
          <button className="btn btn-success" data-toggle="modal" data-target="#myModal">+ Add Expense</button> &nbsp;
          <p>Note:  Kindly refresh to view changes </p>
          </div>
          <div className="modal" id="myModal">
          <div className="modal-dialog">
          <div className="modal-content">

          <div className="container"> 
          <form onSubmit={this.props.handleSubmit}>
            <div className="form-group mt-3">
            <label>Description:</label>
            <input type="text" id="description" className="form-control form-control-sm" onChange={this.props.handleDescription } placeholder="Enter description"/>
            </div>

            <div className="form-group">
            <label>Amount:</label>
            <input type="number" id="amount" className="form-control form-control-sm" onChange={this.props.handleAmount } placeholder="Enter amount"/>
            </div>
            
             <div className="form-group">
            <label>Month</label>
                <select type="month" id="gender" className="form-control" onChange={this.props.handleMonth }>
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
                <select type="date" id="gender" className="form-control" onChange={this.props.handleYear }>
                 <option value="" id=""></option>
               <option value="2016" id="16">2016</option>
            <option value="2017" id="17">2017</option>
            <option value="2018" id="18">2018</option>
            <option value="2019" id="19">2019</option>
            <option value="2020" id="20">2020</option>
                </select>
            </div>

           
           <div className="form-group text-center">
           <button type="submit"  className="btn btn-success" data-dismiss="modal"  onClick={this.props.handleSubmit } >Add Expense</button>
            </div>
            
          <div className="modal-footer">
          
          <button className="btn btn-danger" data-dismiss="modal">Close</button>

          </div>
           </form>
          </div>
          </div>
          </div>
          </div>

          </div>
   </div>
       
);
}

}
export default Add;