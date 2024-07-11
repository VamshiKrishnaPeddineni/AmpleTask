
const fDeatils = () => {
    return (
     <div className="card border-0">
        <div className="card-body">
            <div class="row align-items-center">
                <div class="col-12">
                    <label for="fullName" class="col-form-label">Full Name</label>
                    <input type="text" id="fullName" class="form-control" aria-describedby="fullName" value="ST. Mike Daniel"/>
                </div>
            </div>
            <div class="row align-items-center mt-4">
                <div class="col-6">
                    <label for="relation" class="col-form-label">Relationship</label>
                    <input type="text" id="relation" class="form-control" aria-describedby="relation" value="Father"/>
                </div>
                <div class="col-6">
                    <label for="phoneNumber" class="col-form-label">Phone No</label>
                    <input type="text" id="phoneNumber" class="form-control" aria-describedby="phoneNumber" value="+91 9005006000"/>
                </div>
            </div>
            <div class="row align-items-center mt-4">
                <div class="col-12">
                    <label for="fullAddress" class="col-form-label">Residential Address</label>
                    <textarea class="form-control" id="fullAddress" rows="3">
                        H.No: 10-5-120, Narsingi, Opp to BOI ATM, RJNR Mandal, R.R Dist, Hyderabad, TS-500048.
                    </textarea>
                </div>
            </div>
            <button className="btn btn-theme px-5 mt-4 btn-lg">Update</button>
        </div> 
     </div>
    );
  };
  export default fDeatils;
  