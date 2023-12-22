import React from "react";
// import Header from "../components/Header";
// import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";
function Home() {
  const navigate = useNavigate();
  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log(value);
    if (value === "friendly") {
      navigate("/friendly");
      // setValueType(value);
      localStorage.setItem("type", "friendly");
    } else {
      navigate("/tournament");
      localStorage.setItem("type", "tournament");
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("mtypes", valueType);
  // }, [valueType]);

  return (
    <div>
      <p className="Instruction">First select the match type 🤝-🏆 </p>
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
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default Home;
