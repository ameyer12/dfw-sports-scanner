import "./dallasstarspage.css";
import { Button } from "react-bootstrap";
import starsLogo from "./stars-logo.png";

function DallasStarsPage({navigate}) {
  return (
    <div className="dallas-stars-page-container">
        <Button 
        className="back-button"
        onClick={() => {
          navigate("/");
        }}
        >Back</Button>
        <div className="stars-header-container">
          <img className="stars-page-grid-item-1 cowboys-logo-image" src={starsLogo} alt="Cowboys Logo" width="100" height="100" />
          <div className="stars-page-grid-item-2">
            <h1 className="stars-page-h1">Dallas Stars</h1>
            <p className="stars-page-p1">Record: 47-21-14 | 2nd Central</p>
          </div>
        </div>
    </div>
  );
}

export default DallasStarsPage;