import React from "react";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown(props) {
  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <section className="selection">
        <select defaultValue={value} onChange={handleChange} className="dd">
          <option value="default" disabled hidden>
            Match Type
          </option>
          <option value="friendly" className="ddo">
            Friendly
            {/* <Link to="/friendly">Friendly</Link> */}
          </option>
          <option value="tournament" className="ddo">
            Tournament
            {/* <Link to="/tournament"> Tournament</Link> */}
          </option>
        </select>
      </section>
    </div>
  );
}

export default Dropdown;
