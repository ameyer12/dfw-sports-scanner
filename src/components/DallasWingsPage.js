import "./dallaswingspage.css";
import { Button } from "react-bootstrap";
import wingsLogo from "./wings-logo.png";

function DallasWingsPage({navigate}) {
  return (
    <div className="dallas-wings-page-container">
        <Button 
        className="back-button"
        onClick={() => {
          navigate("/");
        }}
        >Back</Button>
        <div className="wings-header-container">
          <img className="wings-page-grid-item-1 cowboys-logo-image" src={wingsLogo} alt="Cowboys Logo" width="100" height="100" />
          <div className="wings-page-grid-item-2">
            <h1 className="wings-page-h1">Dallas Wings</h1>
            <p className="wings-page-p1">Record: 18-18 | 3rd Western</p>
          </div>
        </div>
    </div>
  );
}

export default DallasWingsPage;