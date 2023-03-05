import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return total += item.cost;
    }, 0);
    return (
        <div className="alert alert-primary h-100 d-flex align-items-center justify-content-center">
            <span>Spent so far: {currency.symbol}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;