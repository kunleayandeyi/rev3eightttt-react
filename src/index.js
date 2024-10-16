import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
import "./index.css";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [amountRequested, setAmountRequested] = useState('');
  const [loanDuration, setLoanDuration] = useState('15');
  const [interestPayable, setInterestPayable] = useState('');
  const [amountPayable, setAmountPayable] = useState('');
  const [repaymentDate, setRepaymentDate] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [workAddress, setWorkAddress] = useState('');

  const handleBoxClick = (form) => {
    if (form === 'login') {
      setShowLoginForm(true);
      setShowRequestForm(false);
    } else if (form === 'request') {
      setShowRequestForm(true);
      setShowLoginForm(false);
    }
  };

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setAmountRequested(amount);
    const interest = loanDuration === '15' ? amount * 0.1 : amount * 0.2;
    setInterestPayable(interest);
    setAmountPayable(Number(amount) + interest);
  };

  const handleLoanDurationChange = (e) => {
    setLoanDuration(e.target.value);
    if (amountRequested) {
      const interest = e.target.value === '15' ? amountRequested * 0.1 : amountRequested * 0.2;
      setInterestPayable(interest);
      setAmountPayable(Number(amountRequested) + interest);
    }
  };

  return (
    <div className="App">
      <header>
        <div className="header-logo">
          <h1><i className="fas fa-piggy-bank"></i> REV3EIGHT</h1>
        </div>
        <nav>
          <ul>
            <li><a href="https://www.firstbanknigeria.com/" id="headerRequests"><i className="fas fa-file-alt"></i> Requests</a></li>
            <li><a href="https://www.firstbanknigeria.com/" id="headerDisbursed"><i className="fas fa-money-bill-wave"></i> Disbursed</a></li>
            <li><a href="https://www.firstbanknigeria.com/" id="headerRepayments"><i className="fas fa-receipt"></i> Repayments</a></li>
            <li><a href="https://www.firstbanknigeria.com/" id="headerLogin"><i className="fas fa-sign-in-alt"></i> Login</a></li>
          </ul>
        </nav>
      </header>

      <div className="box-model">
        <div className="box" id="r1c1" onClick={() => handleBoxClick('request')}>
          <a href="https://www.firstbanknigeria.com/" id="requestsLink"><i className="fas fa-file-alt"></i><br />Requests</a>
        </div>
        <div className="box" id="r1c2">
          <a href="https://www.firstbanknigeria.com/"><i className="fas fa-money-bill-wave"></i><br />Disbursed</a>
        </div>
        <div className="box" id="r2c1">
          <a href="https://www.firstbanknigeria.com/"><i className="fas fa-receipt"></i><br />Repayments</a>
        </div>
        <div className="box" id="r2c2" onClick={() => handleBoxClick('login')}>
          <a href="https://www.firstbanknigeria.com/" id="loginLink"><i className="fas fa-sign-in-alt"></i><br />Login</a>
        </div>
      </div>

      {showLoginForm && (
        <div id="loginForm" className="form-container">
          <h2>Login</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
          <label htmlFor="pin">6-Digit PIN:</label>
          <input type="password" id="pin" maxLength="6" required />
          <button id="loginButton">Login</button>
        </div>
      )}

      {showRequestForm && (
        <div id="requestSection" className="form-container">
          <h2>Loan Request Form</h2>
          <form id="requestForm">
            <label htmlFor="amount">Amount Requested (₦):</label>
            <input type="number" id="amount" value={amountRequested} onChange={handleAmountChange} required /><br />

            <label htmlFor="loanDuration">Loan Duration:</label>
            <select id="loanDuration" value={loanDuration} onChange={handleLoanDurationChange} required>
              <option value="15">15 Days</option>
              <option value="30">30 Days</option>
            </select><br />

            <label htmlFor="interestPayable">Interest Payable (₦):</label>
            <input type="text" id="interestPayable" value={interestPayable} readOnly /><br />

            <label htmlFor="amountPayable">Total Amount Payable (₦):</label>
            <input type="text" id="amountPayable" value={amountPayable} readOnly /><br />

            <label htmlFor="repaymentDate">Repayment Date:</label>
            <input type="date" id="repaymentDate" value={repaymentDate} onChange={(e) => setRepaymentDate(e.target.value)} required /><br />

            <label htmlFor="accountNumber">Beneficiary Account Number:</label>
            <input type="text" id="accountNumber" maxLength="10" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required /><br />

            <label htmlFor="homeAddress">Home Address:</label>
            <input type="text" id="homeAddress" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} required /><br />

            <label htmlFor="workAddress">Work Address:</label>
            <input type="text" id="workAddress" value={workAddress} onChange={(e) => setWorkAddress(e.target.value)} required /><br />

            <button type="submit" id="submitRequestForm">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);