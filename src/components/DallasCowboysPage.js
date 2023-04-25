import "./dallascowboyspage.css";
import { Button } from "react-bootstrap";
import { getCowboysTeamData } from "../api";
import { useEffect, useState } from "react";
import { Timeline, Tweet } from 'react-twitter-widgets'
import GoogleMapReact from 'google-map-react';
import cowboysLogo from "./cowboys-logo.png";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

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

  const CowboysPageMarker = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'red',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text} <span class="cowboys-page-pin-icon material-icons">push_pin</span>
    </div>
  );


  const defaultProps = {
      center: {
        lat: 32.74907667706016,
        lng: -97.09263245109746
      },
      zoom: 15
  };


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
        <div className="cowboys-twitter-widget">
          {/* <Timeline dataSource={{ sourceType: "profile", screenName: "dallascowboys" }}/> */}
        </div>
        <div id="cowboys-page-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC7ZamBBU79p5Kh6qE8SQ6N1UaYANUNac4"}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          <CowboysPageMarker
            lat={32.74738363371771}
            lng={-97.09452609047312}
            text={"AT&T Stadium"}
          />
        </GoogleMapReact>
        </div>
    </div>
  );
}

export default DallasCowboysPage;