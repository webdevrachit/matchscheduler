import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

function TeamVsTeam() {
  const Type = localStorage.getItem("type");
  //   console.log(Type);
  const [valuetn, setValueTn] = useState("default");
  const [valueopp, setValueOpp] = useState("default");
  const [tn1Val, settn1] = useState("");
  const [tn2Val, settn2] = useState("");

  const handleChange1 = (e) => {
    setValueTn(e.target.value);
    const t1_adv = e.target.value;
    localStorage.setItem("adv1", t1_adv);
  };
  const handleChange2 = (e) => {
    setValueOpp(e.target.value);
    const t2_adv = e.target.value;
    localStorage.setItem("adv2", t2_adv);
  };
  const handletn1 = (e) => {
    settn1(e.target.value);
    const t1_name = e.target.value;
    localStorage.setItem("tn1", t1_name);
  };
  const handletn2 = (e) => {
    settn2(e.target.value);
    const t2_name = e.target.value;
    localStorage.setItem("tn2", t2_name);
  };

  return (
    <div className="fm">
      <p className="Instruction2">
        Select Opponents And Finalize the Schedule 🥇{" "}
      </p>
      <form>
        <div className="upper">
          <input
            type="text"
            placeholder="Team 1 Name"
            id="tn1"
            onChange={handletn1}
            value={tn1Val}
          />
          <section className="selection2">
            <select
              defaultValue={valuetn}
              onChange={handleChange1}
              className="dd2"
            >
              <option value="default" disabled hidden>
                Home or Away
              </option>
              <option value="home" className="ddo">
                Home
                {/* <Link to="/friendly">Friendly</Link> */}
              </option>
              <option value="away" className="ddo">
                Away
                {/* <Link to="/tournament"> Tournament</Link> */}
              </option>
            </select>
          </section>
        </div>
        <div className="divider1">
          <hr />
        </div>
        <span id="vs">Vs</span>
        <div className="divider2">
          <hr />
        </div>
        <div className="lower">
          <input
            type="text"
            placeholder="Team 2 Name"
            onChange={handletn2}
            value={tn2Val}
            id="tn2"
          />
          <section className="selection2">
            <select
              defaultValue={valueopp}
              onChange={handleChange2}
              className="dd2"
            >
              <option value="default" disabled hidden>
                Home or Away
              </option>
              <option value="home" className="ddo">
                Home
                {/* <Link to="/friendly">Friendly</Link> */}
              </option>
              <option value="away" className="ddo">
                Away
                {/* <Link to="/tournament"> Tournament</Link> */}
              </option>
            </select>
          </section>
        </div>
        <Link to={"/" + Type}>
          <button className="backBtn ">Back</button>
        </Link>
        <Link to="/tablescreen">
          <button>Next</button>
        </Link>
      </form>
    </div>
  );
}

export default TeamVsTeam;
