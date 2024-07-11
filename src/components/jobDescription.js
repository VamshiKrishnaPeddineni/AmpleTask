import ProfilImage from "../assets/profile-3.svg";

const jDeatils = () => {
    return (
     <div className="card border-0">
        <div className="card-body">
            <div clas="profile-data">
                <h5 className="text-black fw-bold mb-4">View Job Details</h5>
                <p className="text-center mt-3">Job Role</p>
                <div className="text-center h4 fw-bold">UI UX Designer</div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-center mt-5">Department</p>
                        <div className="text-center h4 fw-bold">Design & Marketing</div>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center mt-5">Line Manager</p>
                        <div className="text-center h4 fw-bold">Mr Mike Devis</div>
                    </div>
                </div>
                <h5 className="text-black fw-bold mb-4 mt-5 text-center">Job Description</h5>
                <p>Your responsibilities will include:</p>
                <ul>
                    <li>Creating user-centered designs by understanding business requirements, and user feedback</li>
                    <li>Creating user flows, wireframes, prototypes and mockups</li>
                    <li>Translating requirements into style guides, design systems, design patterns and attractive user interfaces</li>
                    <li>Designing UI elements such as input controls, navigational components and informational components</li>
                    <li>Creating original graphic designs (e.g. images, sketches and tables)</li>
                    <li>Identifying and troubleshooting UX problems (e.g. responsiveness)</li>
                    <li>Collaborating effectively with product, engineering, and management teams</li>
                    <li>Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience</li> 
                </ul>
                <button class="btn btn-theme px-5 mt-4 btn-lg">Upload Documents</button>
                <button class="btn btn-outline-secondary px-5 mt-4 btn-lg ms-4">View Documents</button>
            </div>
        </div> 
     </div>
    );
  };
  export default jDeatils;
  