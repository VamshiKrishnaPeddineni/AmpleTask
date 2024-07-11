
const rDeatils = () => {
    return (
     <div className="card border-0">
        <div className="card-body">
            <div class="row align-items-center">
                <div class="col-6">
                    <label for="kinName" class="col-form-label">Next of kin name</label>
                    <input type="text" id="kinName" class="form-control" aria-describedby="kinName" value="John Doe"/>
                </div>
                <div class="col-6">
                    <label for="occupation" class="col-form-label">Job / Occupation</label>
                    <input type="text" id="occupation" class="form-control" aria-describedby="occupation" value="IT Manager"/>
                </div>
            </div>
            <div class="row align-items-center mt-4">
                <div class="col-6">
                    <label for="phoneNumber" class="col-form-label">Phone Number</label>
                    <input type="text" id="phoneNumber" class="form-control" aria-describedby="phoneNumber" value="9999563135"/>
                </div>
                <div class="col-6">
                    <label for="Relation" class="col-form-label">Relationship</label>
                    <input type="text" id="Relation" class="form-control" aria-describedby="Relation" value="Relative"/>
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
  export default rDeatils;
  