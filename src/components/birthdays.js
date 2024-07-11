import Dropdown from 'react-bootstrap/Dropdown';
import calenderImage from '../assets/calendar.png';
const bDays = () => {
    return (
     <div className="card mb-4">
        <div className="card-body pb-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="opacity-75 fw-bold text-dark mb-0">Birthdays</h5>
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
          <div className="card bg-theme-light">
            <div className="card-body d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center">
                    <img src={calenderImage} alt="Calendar" height={18}/>
                    <p className="text-dark mb-0 ms-3 small">Mike Dave’s Day - July 25th </p>
                </div>
                <button className="btn btn-theme-secondary px-4 btn-sm shadow-sm">Send Wishes</button>
            </div>
          </div>
          <div className="card bg-theme-light mt-2">
            <div className="card-body d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center">
                    <img src={calenderImage} alt="Calendar" height={18}/>
                    <p className="text-dark mb-0 ms-3 small">John Doe’s Day - July 25th</p>
                </div>
                <button className="btn btn-theme-secondary px-4 btn-sm shadow-sm">Send Wishes</button>
            </div>
          </div>
          <div className="card bg-theme-light mt-2">
            <div className="card-body d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center">
                    <img src={calenderImage} alt="Calendar" height={18}/>
                    <p className="text-dark mb-0 ms-3 small">Ava Krik’s Day - July 25th </p>
                </div>
                <button className="btn btn-theme-secondary px-4 btn-sm shadow-sm">Send Wishes</button>
            </div>
          </div>
          <div className="card bg-theme-light mt-2">
            <div className="card-body d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center">
                    <img src={calenderImage} alt="Calendar" height={18}/>
                    <p className="text-dark mb-0 ms-3 small">Jill Hilson’s Day - July 25th </p>
                </div>
                <button className="btn btn-theme-secondary px-4 btn-sm shadow-sm">Send Wishes</button>
            </div>
          </div>
          <div className="card bg-theme-light mt-2 mb-3">
            <div className="card-body d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center">
                    <img src={calenderImage} alt="Calendar" height={18}/>
                    <p className="text-dark mb-0 ms-3 small">Mia Tuner’s Day - July 25th </p>
                </div>
                <button className="btn btn-theme-secondary px-4 btn-sm shadow-sm">Send Wishes</button>
            </div>
          </div>
        </div> 
     </div>
    );
  };
  export default bDays;
  