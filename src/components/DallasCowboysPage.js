import "./dallascowboyspage.css";
import { Button } from "react-bootstrap";
import { getCowboysTeamData } from "../api";
import { useEffect, useState } from "react";
import cowboysLogo from "./cowboys-logo.png";

function DallasCowboysPage({navigate}) {

  // const [cowboysTeamData, setCowboysTeamData] = useState({id: 0, name: "", logo: ""});

  // const fetchCowboysTeamData = async () => {
  //   const results = await getCowboysTeamData();
  //   const data = results.response[0];

  //   setCowboysTeamData(prevState => ({
  //       ...prevState,
  //       id: data.id,
  //       name: data.name,
  //       logo: data.logo
  //     }));

  //   return cowboysTeamData;
  // }

  // useEffect(() => {
  //   fetchCowboysTeamData();
  // }, [])

  return (
    <div className="dallas-cowboys-page-container">
        <Button 
        className="back-button"
        onClick={() => {
          navigate("/");
        }}
        >Back</Button>
        <div className="cowboys-header-container">
          <img className="cowboys-page-grid-item-1 cowboys-logo-image" src={cowboysLogo} alt="Cowboys Logo" width="100" height="100" />
          <div className="cowboys-page-grid-item-2">
            <h1 className="cowboys-page-h1">Dallas Cowboys</h1>
            <p className="cowboys-page-p1">Record: 12-5 | 2nd NFC East</p>
          </div>
        </div>
        <h2>Hi</h2>
    </div>
  );
}

export default DallasCowboysPage;