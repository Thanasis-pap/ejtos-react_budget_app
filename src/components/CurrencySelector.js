import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import bootstrap from 'bootstrap';
import CurrencyOption from "./CurrencyOption";

const CurrencySelector = () => {

    const { currency } = useContext(AppContext);

    return (
        <div className="alert alert-secondary h-100 d-flex align-items-center justify-content-center">
            <div className="dropdown">
                <button style={{ background: "#A5E1A0" }}
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown">
                    Currency ({currency.symbol} {currency.name})
                </button>
                <ul className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                    style={{ background: "#A5E1A0" }}>
                    <CurrencyOption name={"Dollar"} symbol={"$"} />
                    <CurrencyOption name={"Pound"} symbol={"£"} />
                    <CurrencyOption name={"Euro"} symbol={"€"} />
                    <CurrencyOption name={"Ruppee"} symbol={"₹"} />
                </ul>
            </div>
        </div>
    );
};

export default CurrencySelector;

        //     <div className="alert alert-secondary">
        //     {/* <label for="currency-sel">Currency ()</label> */}
        //     <select name="currency-sel" id="currency-sel">
        //         <option value="dollar">$ Dollar</option>
        //         <option value="pound">£ Pound</option>
        //         <option value="euro">€ Euro</option>
        //         <option value="rupee">₹ Ruppee</option>
        //     </select>
        // </div>

        // <li><a className="dropdown-item" data-currency="dollar">$ Dollar</a></li>
        //             <li><a className="dropdown-item" data-currency="pound">£ Pound</a></li>
        //             <li><a className="dropdown-item" data-currency="euro">€ Euro</a></li>
        //             <li><a className="dropdown-item" data-currency="ruppee">₹ Ruppee</a></li>

        // onClick={(event) => { changeCurrency(event.target.dataset.currency) }}