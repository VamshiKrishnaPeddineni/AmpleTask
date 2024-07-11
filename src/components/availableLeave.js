import Dropdown from 'react-bootstrap/Dropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Leaves = () => {
    return (
     <div className="card mb-4">
        <div className="card-body pb-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="opacity-75 fw-bold text-dark mb-0">Available Leave Days</h5>
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
          <div className="d-flex align-items-center justify-content-between mb-1">
            <label className="text-dark mb-0">Annual Leave</label>
            <label className="text-dark mb-0">10 of 60 day(s)</label>
          </div>
          <ProgressBar now={30} />
          <div className="d-flex align-items-center justify-content-between mt-4 mb-1">
            <label className="text-dark mb-0">Sick Leave</label>
            <label className="text-dark mb-0">0 of 10 day(s)</label>
          </div>
          <ProgressBar now={0} />
          <div className="d-flex align-items-center justify-content-between mt-4 mb-1">
            <label className="text-dark mb-0">Compassionate Leave</label>
            <label className="text-dark mb-0">8 of 15 day(s)</label>
          </div>
          <ProgressBar now={40} className="mb-2"/>
        </div> 
     </div>
    );
  };
  export default Leaves;
  