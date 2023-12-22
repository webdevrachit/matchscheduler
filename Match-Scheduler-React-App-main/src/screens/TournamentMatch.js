import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";

function TournamentMatch() {
  const [startDateAndTime, setStartDateAndTime] = useState(new Date(""));
  const [endDateAndTime, setEndDateAndTime] = useState(new Date(""));
  const [matchLocation, setMatchLocation] = useState("");
  const [comment, setComment] = useState("");
  const [tourney, setTourney] = useState("");

  const handleStart = (date) => {
    setStartDateAndTime(date);
    console.log(date._d);
    const data = date._d;

    localStorage.setItem("sdat", data);
  };

  const handleEnd = (date) => {
    setEndDateAndTime(date);
    console.log(date._d);
    const data = date._d;

    localStorage.setItem("edat", data);
  };

  const handleChange3 = (e) => {
    setMatchLocation(e.target.value);

    const match_location = e.target.value;
    console.log(matchLocation);
    localStorage.setItem("matchlocation", match_location);
  };
  const handleChange4 = (e) => {
    setComment(e.target.value);

    const comment_ = e.target.value;
    console.log(comment);
    localStorage.setItem("comments", comment_);
  };
  const handleChange5 = (e) => {
    setTourney(e.target.value);

    const tourney_name = e.target.value;
    console.log(tourney);
    localStorage.setItem("comments", tourney_name);
  };

  return (
    <div className="fm">
      <p className="Instruction2"> Schedule Your Tournament Match 🏆</p>
      <form>
        <div id="dat">
          <Datetime
            inputProps={{ placeholder: "Start Date & Time" }}
            dateFormat="DD-MM-YYYY"
            value={startDateAndTime}
            onChange={handleStart}
          />
          <Datetime
            inputProps={{ placeholder: "End  Date & Time" }}
            dateFormat="DD-MM-YYYY"
            value={endDateAndTime}
            onChange={handleEnd}
          />
        </div>
        <div id="inpf">
          <input
            type="text"
            name="matchLocation"
            placeholder="Match Location"
            id="matchLocation"
            onChange={handleChange3}
          />
        </div>
        <input
          type="text"
          name="comments"
          placeholder="Comments"
          id="comments"
          onChange={handleChange4}
        />
        <input
          type="text"
          name="tournamentName"
          placeholder="Tournament Name"
          id="tourneyName"
          onChange={handleChange5}
        />
        {/* <textarea placeholder="Comments"></textarea> */}

        <Link to="/">
          <button className="backBtn ">Back</button>
        </Link>
        <Link to="/teamVsteam">
          <button>Next</button>
        </Link>
      </form>
    </div>
  );
}

export default TournamentMatch;
