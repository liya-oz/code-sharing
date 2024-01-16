import React from "react";
import "./PricingTable.css";
import Button from "./Button";

const PricingTable = () => {
  return (
    <div className="pricing-table-container">
      <div className="table-wrapper">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="basic-header">
                  Basic
                  <br />
                  <span className="price">Free</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="button-container">
                  <Button label="Select" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="premium-header">
                  Premium
                  <br />
                  <span className="price">€10/Month</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="button-container premium">
                  <Button label="Select" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
