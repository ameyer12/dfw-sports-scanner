import "./fcdallaspage.css";
import { Button } from "react-bootstrap";
import fcdallasLogo from "./fcdallas-logo.png";

function FcDallasPage({navigate}) {
  return (
    <div className="dallas-wings-page-container">
        <Button 
        className="back-button"
        onClick={() => {
          navigate("/");
        }}
        >Back</Button>
        <div className="fcdallas-header-container">
          <img className="fcdallas-page-grid-item-1 cowboys-logo-image" src={fcdallasLogo} alt="Cowboys Logo" width="100" height="100" />
          <div className="fcdallas-page-grid-item-2">
            <h1 className="fcdallas-page-h1">FC Dallas</h1>
            <p className="fcdallas-page-p1">Record: 4-2-2 | 4th Western</p>
          </div>
        </div>
    </div>
  );
}

export default FcDallasPage;