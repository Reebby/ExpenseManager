import axios from 'axios';

class ExpenseService {

sendData(desc, amt, mnt, yrs) {
	axios.post('https://expenseapi.herokuapp.com/expenses/insert', {
		description: desc,
		amount: amt,
		month: mnt,
		year: yrs

	})
	.then(function(response) {
		console.log(response)
	})
	.catch(function(err) {
		console.log(err)
	})
}
}

export default ExpenseService;