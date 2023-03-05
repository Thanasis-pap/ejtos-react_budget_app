import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

    const increaseBudget = (newBudget) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return total = total + item.cost;
        }, 0);

        if (newBudget > 20000) {
            alert("Budget cannot exceed 20000");
            return;
        }

        if (newBudget < totalExpenses) {
            alert("Budget cannot be lower than the spending");
            return;
        }

        dispatch({
            type: "SET_BUDGET",
            payload: newBudget
        });
    };

    return (
        <div className="alert alert-secondary h-100 d-flex align-items-center justify-content-center">
            <span style={{ marginRight: "0.5rem" }}>
                Budget: {currency.symbol}
            </span>
            <input
                required='required'
                type='number'
                value={budget}
                step="10"
                onChange={(event) => increaseBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;