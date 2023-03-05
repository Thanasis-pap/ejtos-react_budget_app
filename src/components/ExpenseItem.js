import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const ExpenseItem = props => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id
        });
    };

    const increaseAllocation = name => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        });

    };

    const reduceAllocation = name => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: "RED_EXPENSE",
            payload: expense
        });

    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency.symbol}{props.cost}</td>
            <td>
                <FaPlusCircle
                    style={{ color: "rgb(79, 172, 92)", fontSize: "2rem" }}
                    onClick={event => increaseAllocation(props.name)}>
                </FaPlusCircle>
            </td>
            <td>
                <FaMinusCircle
                    style={{ color: "rgb(176, 36, 25)", fontSize: "2rem" }}
                    onClick={event => reduceAllocation(props.name)}>
                </FaMinusCircle>
            </td>
            <td>
                <TiDelete
                    size='1.5em'
                    onClick={handleDeleteExpense}>
                </TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;