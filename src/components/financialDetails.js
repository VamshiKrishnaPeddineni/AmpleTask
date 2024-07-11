
const aDeatils = () => {
    return (
     <div className="card border-0">
        <div className="card-body">
            <div class="row align-items-center">
                <div class="col-12">
                    <label for="Bank Name" class="col-form-label">Bank Name</label>
                    <input type="text" id="Bank Name" class="form-control" aria-describedby="Bank Name" value="Axis Bank"/>
                </div>
            </div>
            <div class="row align-items-center mt-4">
                <div class="col-6">
                    <label for="accNumber" class="col-form-label">Account No</label>
                    <input type="text" id="accNumber" class="form-control" aria-describedby="accNumber" value="001101100014"/>
                </div>
                <div class="col-6">
                    <label for="accName" class="col-form-label">Account Name</label>
                    <input type="text" id="accName" class="form-control" aria-describedby="accName" value="Vamshi Krishna P"/>
                </div>
            </div>
            <div class="row align-items-center mt-4">
                <div class="col-6">
                    <label for="ifscCode" class="col-form-label">IFSC Code</label>
                    <input type="text" id="ifscCode" class="form-control" aria-describedby="ifscCode" value="UTIB000011"/>
                </div>
                <div class="col-6">
                    <label for="pensionNumber" class="col-form-label">Pension Number</label>
                    <input type="text" id="pensionNumber" class="form-control" aria-describedby="pensionNumber" value="10111010101210101011"/>
                </div>
            </div>
            <button className="btn btn-theme px-5 mt-4 btn-lg">Update Account Details</button>
        </div> 
     </div>
    );
  };
  export default aDeatils;
  