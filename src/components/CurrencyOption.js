import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyOption = (props) => {

    const { dispatch } = useContext(AppContext);

    const changeCurrency = props => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: props
        });
    }

    return (
        <li>
            <a className="dropdown-item" onClick={() => { changeCurrency(props); }}>{props.symbol} {props.name}</a>
        </li>
    );
};

export default CurrencyOption;