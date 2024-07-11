import Dropdown from 'react-bootstrap/Dropdown';
const PaySlip = () => {
    return (
     <div className="card mb-4">
        <div className="card-body pb-3 mb-1">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="opacity-75 fw-bold text-dark mb-0">June Pay slip breakdown</h5>
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
            <div className="card-body py-2">
                <div className="row">
                    <div class="col-md-3">Earnings</div>
                    <div class="col-md-3">Amount</div>
                    <div class="col-md-3">Deductions</div>
                    <div class="col-md-3">Total</div>
                </div>
            </div>
          </div>
          <div className="card bg-theme-light mt-2">
            <div className="card-body py-2">
                <div className="row">
                    <div class="col-md-3">Basic Wage</div>
                    <div class="col-md-3">150,000</div>
                    <div class="col-md-3">-30,000</div>
                    <div class="col-md-3">120,000</div>
                </div>
            </div>
          </div>
          <div className="card bg-theme-light mt-2">
            <div className="card-body py-2">
                <div className="row">
                    <div class="col-md-3">Tax</div>
                    <div class="col-md-3">15,000</div>
                    <div class="col-md-3">-3,000</div>
                    <div class="col-md-3">12,000</div>
                </div>
            </div>
          </div>
          <div className="card bg-theme-light mt-2">
            <div className="card-body py-2">
                <div className="row">
                    <div class="col-md-3">Pension</div>
                    <div class="col-md-3">15,000</div>
                    <div class="col-md-3">-3,000</div>
                    <div class="col-md-3">12,000</div>
                </div>
            </div>
          </div>
          <div className="card bg-theme-light mt-2">
            <div className="card-body py-2">
                <div className="row">
                    <div class="col-md-3">Total Earnings</div>
                    <div class="col-md-3">150,000</div>
                    <div class="col-md-3">-36,000</div>
                    <div class="col-md-3">114,000</div>
                </div>
            </div>
          </div>
        </div> 
     </div>
    );
  };
  export default PaySlip;
  