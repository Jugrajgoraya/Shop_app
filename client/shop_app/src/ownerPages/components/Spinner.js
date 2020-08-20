import React from "react";

export const Spinner = ({ message }) => {
  return (
    <div className="ui segment" style={{ minHeight: "10em" }}>
      <div className="ui active dimmer">
        <div className="ui text loader">{message || "Loading..."}</div>
      </div>
      <p></p>
    </div>
  );
};