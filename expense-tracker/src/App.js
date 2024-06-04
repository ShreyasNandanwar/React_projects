import React, { useState } from "react";
import "./App.css";

const initialState = {
  expense: "",
  reason: "",
  timestamp: "",
};
const App = () => {
  const [tracker, setTracker] = useState(initialState);
  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTracker((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTimeStamp = new Date().toISOString();
    const newExpense = {
      ...tracker,
      timestamp: currentTimeStamp,
    };

    setExpenses((prevExpense) => [...prevExpense, newExpense]);
    setTracker(initialState);
  };

  const deleteExpense = (timestamp) => {
    setExpenses((prevExprenses) =>
      prevExprenses.filter((expense) => expense.timestamp !== timestamp),
    );
  };

  return (
    <div className="container">
      <h1>My Expense tracker</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Reason for Expense
            <input
              type="text"
              id="reason"
              name="reason"
              value={tracker.reason}
              placeholder="where did you spend?"
              onChange={handleChange}
            />
          </label>
          <label>
            Expense
            <input
              type="number"
              id="expense"
              name="expense"
              value={tracker.expense}
              onChange={handleChange}
              placeholder="How much did you spend?"
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Reason</th>
              <th>Expense</th>
              <th>Date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.reason}</td>
                <td>{expense.expense}</td>
                <td>{new Date(expense.timestamp).toLocaleString()}</td>
                <td>
                  <button onClick={() => deleteExpense(expense.timestamp)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
