import Header from "../components/header";
import bookImage from "../assets/book.png";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import leaveImage from '../assets/thumb.svg';
import Button from 'react-bootstrap/Button';
const LeaveAlert =()=>{
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Header />
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body py-4">
                            <ul className="list-unstyled breadcrumb mb-0 position-relative">
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li className="ms-3">Apply for Leave </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row leaveform">
                <div className="col-md-8 offset-md-2">
                    <div className="card bg-white rounded my-4 border-0">
                        <div className="card-body py-4">
                            <h3 className="text-center fw-bold">
                                <img src={bookImage} alt="Leave Application" height="35"/>
                                &nbsp;
                                Leave Application
                            </h3>
                            <h5 className="text-center mt-3 fw-light">Fill the required fields below to apply for annual leave.</h5>
                            <div class="row align-items-center mt-4">
                                <div class="col-12">
                                    <label for="LeaveType" class="col-form-label">Leave Type</label>
                                    <input type="text" id="LeaveType" class="form-control" aria-describedby="LeaveType" value="Annual Leave"/>
                                </div>
                            </div>
                            <div class="row align-items-center mt-4">
                                <div class="col-6">
                                    <label for="Sdate" class="col-form-label">Start Date</label>
                                    <input type="date" id="Sdate" class="form-control" aria-describedby="Sdate" value=""/>
                                </div>
                                <div class="col-6">
                                    <label for="Edate" class="col-form-label">End Date</label>
                                    <input type="date" id="Edate" class="form-control" aria-describedby="Edate" value=""/>
                                </div>
                            </div>
                            <div class="row align-items-center mt-4">
                                <div class="col-6">
                                    <label for="duration" class="col-form-label">Duratione</label>
                                    <input type="date" id="duration" class="form-control" aria-describedby="duration" value=""/>
                                </div>
                                <div class="col-6">
                                    <label for="Rdate" class="col-form-label">Resumption Date</label>
                                    <input type="date" id="Rdate" class="form-control" aria-describedby="Rdate" value=""/>
                                </div>
                            </div>
                            <div class="row align-items-center mt-4">
                                <div class="col-12">
                                    <label for="Reason" class="col-form-label">Reason for leave</label>
                                    <textarea class="form-control" id="Reason" rows="2"></textarea>
                                </div>
                            </div>
                            <div class="row align-items-center mt-4">
                                <div class="col-12">
                                    <label for="formFileMultiple" class="form-label">Attach handover document (pdf, jpg, docx or any other format)</label>
                                    <input class="form-control ps-4" type="file" id="formFileMultiple"/>
                                </div>
                            </div>
                            <div class="row align-items-center mt-4">
                                <div class="col-12">
                                    <label for="formFileMultiple" class="form-label">Choose Relief Officer</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select your relief officer </option>
                                        <option value="1">Officer 1</option>
                                        <option value="2">Officer 2</option>
                                        <option value="3">Officer 3</option>
                                    </select>
                                </div>
                            </div>
                            <a role="button" className="btn btn-theme px-5 mt-4 btn-lg">Submit</a>
                            <button className="btn btn-outline-secondary px-5 mt-4 btn-lg ms-4">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body className="text-center">
                <img src={leaveImage} alt="leave Alert" height="60" className="d-block mx-auto mb-3" />
                <h6 className="text-theme fw-semibold"> Great Job!<br/>  Your leave application would be reviewed by the admin.</h6>
                <a href="/leaveapply" className="btn btn-theme px-5 mt-4 btn-lg">Close</a>
            </Modal.Body>
            
        </Modal>
        </>
    )
}
export default LeaveAlert;