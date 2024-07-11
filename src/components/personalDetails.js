import ProfilImage from "../assets/profile-3.svg";
import ProfileEdit from "../assets/edit.svg";

const pDeatils = () => {
    return (
     <div className="card border-0">
        <div className="card-body">
            <div clas="profile-button">
                <a href="##" className="text-decoration-none d-flex align-items-center text-dark justify-content-end">
                    <img src={ProfileEdit} alt="Edit Profile" height={15} className="me-1"/>
                    Edit
                </a>
            </div>
            <div clas="profile-data">
                <img src={ProfilImage} alt="Edit Profile" height={150} className="d-block mx-auto mt-3"/>
                <p className="text-center mt-3">Employee Name</p>
                <div className="text-center h4 fw-bold">John Doe Francis</div>
                <p className="text-center mt-5">Department</p>
                <div className="text-center h4 fw-bold">Design & Marketing</div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-center mt-5">Job Title</p>
                        <div className="text-center h4 fw-bold">UI / UX Designer & Developer</div>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center mt-5">Job Category</p>
                        <div className="text-center h4 fw-bold">Full Time</div>
                    </div>
                </div>
            </div>
        </div> 
     </div>
    );
  };
  export default pDeatils;
  