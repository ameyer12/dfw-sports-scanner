import "./dallascowboyspage.css";
import { Button } from "react-bootstrap";
import { getCowboysScheduleData, getCowboysRecordData } from "../api";
import { useEffect, useState } from "react";
import { Timeline, Tweet } from 'react-twitter-widgets'
import GoogleMapReact from 'google-map-react';
import cowboysLogo from "./cowboys-logo.png";


function DallasCowboysPage({navigate}) {

  const [cowboysRecordData, setCowboysRecordData] = useState({});
  const [cowboysScheduleData, setCowboysScheduleData] = useState({});


  const fetchCowboysRecordData = async () => {
    const response = await getCowboysRecordData();
    
    return response;
  }


  const fetchCowboysScheduleData = async () => {
    const response = await getCowboysScheduleData();
      
    return response;
  }
  

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
    {text}
    </div>
  );


  const defaultProps = {
      center: {
        lat: 32.74907667706016,
        lng: -97.09263245109746
      },
      zoom: 15
  };

    // fetchCowboysRecordData();

  // useEffect(() => {
  //   fetchCowboysRecordData();
  //   fetchCowboysScheduleData();
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
        <div className="cowboys-page-main-container">
          <div className="cowboys-twitter-widget">
            <Timeline dataSource={{ sourceType: "profile", screenName: "dallascowboys" }}/>
          </div>
          <div className="cowboys-page-roster">
            <table>
              <th>2023 Schedule</th>
              <tr><td>Cowboys at Eagles</td></tr>
              <tr><td>Cowboys vs Giants</td></tr>
              <tr><td>Cowboys at Redskins</td></tr>
              <tr><td>Cowboys at Buccaneers</td></tr>
            </table>
          </div>
          <div id="cowboys-page-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
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
    </div>
  );
}

export default DallasCowboysPage;