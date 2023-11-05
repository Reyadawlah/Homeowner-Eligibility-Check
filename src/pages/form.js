import React, { Component } from 'react';

class HomeownerEquityForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grossMonthlyIncome: '',
      monthlyCarPayment: '',
      monthlyCreditCardPayment: '',
      estimatedMonthlyMortgagePayment: '',
      monthlyStudentLoanPayment: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  calculateEquity = () => {
    const {
      grossMonthlyIncome,
      monthlyCarPayment,
      monthlyCreditCardPayment,
      estimatedMonthlyMortgagePayment,
      monthlyStudentLoanPayment,
    } = this.state;

  }

  render() {
    const {
      grossMonthlyIncome,
      monthlyCarPayment,
      monthlyCreditCardPayment,
      estimatedMonthlyMortgagePayment,
      monthlyStudentLoanPayment,
      equityResult,
    } = this.state;

    return (
      <div className="equity-form">
        <h2 className='form-head'>Homeowner Equity Information</h2>
        <form>
          
          <div className="gmi">
            <label htmlFor="grossMonthlyIncome" className= 'form-labels'>Gross Monthly Income:</label>
            <input
              type="number"
              id="grossMonthlyIncome"
              name="grossMonthlyIncome"
              value={grossMonthlyIncome}
              onChange={this.handleInputChange}
            />
          </div>
          <div className= 'form-row'>
          <div className="form-group">
            <label htmlFor="monthlyCarPayment" className= 'form-labels'>Monthly Car Payment:</label>
            <input
              type="number"
              id="monthlyCarPayment"
              name="monthlyCarPayment"
              value={monthlyCarPayment}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mccp">
            <label htmlFor="monthlyCreditCardPayment" className= 'form-labels'>Monthly Credit Card Payment:</label>
            <input
              type="number"
              id="monthlyCreditCardPayment"
              name="monthlyCreditCardPayment"
              value={monthlyCreditCardPayment}
              onChange={this.handleInputChange}
            />
          </div>
          </div>

          <div className= 'form-row'>
          <div className="form-group">
            <label htmlFor="estimatedMonthlyMortgagePayment" className= 'form-labels'>Estimated Monthly Mortgage Payment:</label>
            <input
              type="number"
              id="estimatedMonthlyMortgagePayment"
              name="estimatedMonthlyMortgagePayment"
              value={estimatedMonthlyMortgagePayment}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="monthlyStudentLoanPayment" className= 'form-labels'>Monthly Student Loan Payment:</label>
            <input
              type="number"
              id="monthlyStudentLoanPayment"
              name="monthlyStudentLoanPayment"
              value={monthlyStudentLoanPayment}
              onChange={this.handleInputChange}
            />
          </div>
          </div>
          <button type="button" className= 'continue-button'>Continue</button>
        </form>

      </div>
    );
  }
}

export default HomeownerEquityForm;
