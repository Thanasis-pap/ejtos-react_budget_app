import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
    return (
        <div className={`alert ${alertType} h-100 d-flex align-items-center justify-content-center`}>
            <span>Remaining: {currency.symbol}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;