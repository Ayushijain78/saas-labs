import React from "react";
import "./styles.css";

const Table = (props) => {
  const { data, heads, details } = props;

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          {heads.map((text, index) => {
            return <th key={index}>{text}</th>;
          })}
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {details.map((item, cellIndex) => {
                  return <td key={cellIndex}>{row[item]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
