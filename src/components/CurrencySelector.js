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
