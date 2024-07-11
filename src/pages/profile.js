import { useState, useEffect } from "react"
import Header from "../components/header";
import PDeatils from "../components/personalDetails";
import CDeatils from "../components/contactDetails";
import RDeatils from "../components/relativeDetails";
import EDeatils from "../components/educationDetails";
import GDeatils from "../components/guarantorDetails";
import FDeatils from "../components/familyDetails";
import JDeatils from "../components/jobDescription";
import ADeatils from "../components/financialDetails";

const Profile =()=>{
    const [tab, setTab] = useState("")
    useEffect(()=>{
        if(!tab){
            setTab({name:"Personal Details", active:false, component:<PDeatils/>})
        }
    },[])
    const tabButtons = [
        {name:"Personal Details", active:false, component:<PDeatils/>},
        {name:"Contact Details", active:false, component: <CDeatils/>},
        {name:"Next of kin Details", active:false, component: <RDeatils/>},
        {name:"Education Qualifications", active:false, component: <EDeatils/>},
        {name:"Guarantor Details", active:false, component: <GDeatils/>},
        {name:"Family Details", active:false, component: <FDeatils/>},
        {name:"Job Details", active:false, component: <JDeatils/>},
        {name:"Financial Details", active:false, component: <ADeatils/>},
    ]
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
                                <li className="ms-3">User Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="profile-page mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className=" profile-page-sidenav">
                            <nav class="tab-pills mt-3">
                                <div class="nav nav-tabs mb-3 border-0" id="nav-tab" role="tablist">
                                    {tabButtons.map((r,i)=>(
                                    <button onClick={()=>setTab(r)} className={`nav-link ${tab.name===r.name?"active":""}`} id="apply_leave_tab" data-bs-toggle="tab" data-bs-target="#apply_leave" type="button" role="tab" aria-controls="apply_leave" aria-selected="true">{r.name}</button>  
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="tab-content mb-5" id="nav-tabContent">
                            <div class="tab-pane fade active show p-3" id="apply_leave" role="tabpanel" aria-labelledby="apply_leave_tab">
                                {tab?.component}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Profile;