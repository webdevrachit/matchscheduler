import React from "react";

function TableScreen() {
  // const schedules = [];
  const type = localStorage.getItem("type");
  const sdat = localStorage.getItem("sdat");
  const edat = localStorage.getItem("edat");
  const matchlocation = localStorage.getItem("matchlocation");
  const comments = localStorage.getItem("comments");
  const tournamentname = localStorage.getItem(" tournamentname");
  const team1name = localStorage.getItem("tn1");
  const adv1 = localStorage.getItem("adv1");
  const team2name = localStorage.getItem("tn2");
  const adv2 = localStorage.getItem("adv2");

  // const matchObj = {
  //   type: type,
  //   sdat: sdat,
  //   edat: edat,
  //   matchlocation: matchlocation,
  //   comments: comments,
  //   tournamentname: tournamentname,
  //   team1name: team1name,
  //   adv1: adv1,
  //   team2name: team2name,
  //   adv2: adv2,
  // };

  //   localStorage.setItem("matchObj", JSON.stringify(matchDetails));
  //   const singleMatch = JSON.parse(localStorage.getItem("matchObj"));
  // var l = schedules.length;
  // schedules
  // //   localStorage.setItem("matchSchedule", JSON.stringify(schedules[2]));
  // console.log(schedules.length);

  const sdate = sdat.slice(0, 15);
  const stime = sdat.slice(16, 21);

  const edate = edat.slice(0, 15);
  const etime = edat.slice(16, 21);
  return (
    <div>
      <p className="Instruction2">Your Scheduled Match 📑 </p>
      <table>
        <tr>
          <th>Team 1</th>
          <th>Team2</th>
          <th>Match Type</th>
          <th>Tournament Name</th>
          <th>Start Date And Time</th>
          <th>End Date And Time</th>
          <th>Location</th>
          <th>Comments</th>
        </tr>
        <tr>
          <td>{team1name ? team1name + " (" + adv1 + ")" : "-"}</td>
          <td>{team2name + " (" + adv2 + ")"}</td>
          <td>{type}</td>
          <td>{tournamentname ? tournamentname : "-"}</td>
          <td>{sdate + " - " + stime + " hrs"}</td>
          <td>{edate + " - " + etime + " hrs"}</td>
          <td>{matchlocation}</td>
          <td>{comments}</td>
        </tr>
      </table>
    </div>
  );
}

export default TableScreen;
