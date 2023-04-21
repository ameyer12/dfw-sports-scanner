import "./dallasmaverickspage.css";
import { Button } from "react-bootstrap";
import mavericksLogo from "./mavericks-logo.png";

function DallasMavericksPage({navigate}) {
  return (
    <div className="dallas-mavericks-page-container">
        <Button 
        className="back-button"
        onClick={() => {
          navigate("/");
        }}
        >Back</Button>
        <div className="mavericks-header-container">
          <img className="mavericks-page-grid-item-1 cowboys-logo-image" src={mavericksLogo} alt="Cowboys Logo" width="100" height="100" />
          <div className="mavericks-page-grid-item-2">
            <h1 className="mavericks-page-h1">Dallas Mavericks</h1>
            <p className="mavericks-page-p1">Record: 38-44 | 11th Western</p>
          </div>
        </div>
    </div>
  );
}

export default DallasMavericksPage;