import Dropdown from 'react-bootstrap/Dropdown';
import VerticalBarChart from "../components/chart";
const Appraisal = () => {
    return (
     <div className="card mb-4">
        <div className="card-body pb-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="opacity-75 fw-bold text-dark mb-0">Performance Appraisal</h5>
            <Dropdown>
              <Dropdown.Toggle variant="" className="widget_dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="chart">
            <VerticalBarChart/>
          </div>
        </div> 
     </div>
    );
  };
  export default Appraisal;
  