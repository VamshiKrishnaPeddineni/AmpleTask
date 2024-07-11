
const cDeatils = () => {
    return (
     <div className="card border-0">
        <div className="card-body">
            <div class="row align-items-center">
                <div class="col-6">
                    <label for="phoneNumber" class="col-form-label">Phone Number</label>
                    <input type="text" id="phoneNumber" class="form-control" aria-describedby="phoneNumber" value="8686123456"/>
                </div>
                <div class="col-6">
                    <label for="AlternativeNumber" class="col-form-label">Alternative Number</label>
                    <input type="text" id="AlternativeNumber" class="form-control" aria-describedby="AlternativeNumber" value="8686563135"/>
                </div>
            </div>
            <div class="row align-items-center mt-4">
                <div class="col-12">
                    <label for="EmailAddress" class="col-form-label">E-mail Address</label>
                    <input type="text" id="EmailAddress" class="form-control" aria-describedby="EmailAddress" value="vamshikrishnaa43@gmail.com"/>
                </div>
            </div>
            <div class="row align-items-center mt-4">
                <div class="col-6">
                    <label for="state" class="col-form-label">State of residence</label>
                    <input type="text" id="state" class="form-control" aria-describedby="state" value="Telangana"/>
                </div>
                <div class="col-6">
                    <label for="city" class="col-form-label">City</label>
                    <input type="text" id="city" class="form-control" aria-describedby="city" vaule="Hyderaabd"/>
                </div>
            </div>
            <div class="row align-items-center mt-4">
                <div class="col-12">
                    <label for="fullAddress" class="col-form-label">Residential Address</label>
                    <textarea class="form-control" id="fullAddress" rows="3">
                        H.No: 10-134, Gandamguda, Opp to Sri Sanghamitra School, Gandipet Mandal, R.R Dist, Hyderabad, TS-500091.
                    </textarea>
                </div>
            </div>
            <button className="btn btn-theme px-5 mt-4 btn-lg">Update</button>
        </div> 
     </div>
    );
  };
  export default cDeatils;
  