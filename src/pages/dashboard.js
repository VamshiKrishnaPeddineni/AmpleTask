import Header from "../components/header";
import Widgets from "../components/mainWidgets";
import Actions from "../components/quickActions";
import Glance from "../components/profileGlance";
import Leaves from "../components/availableLeave";
import Todo from "../components/todos";
import Announce from "../components/announcements";
import PaySlip from "../components/payslip";
import BirthdayList from "../components/birthdays";
import Appraisal from "../components/Performance";


const Dashboard = () => {
  return (
    <>
      <Header />
      <Glance/>
      <Actions />
      <Widgets />
      <section className="other-widgets py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Leaves/>
            </div>
            <div className="col-md-6">
              <Todo/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Announce/>
            </div>
            <div className="col-md-6">
              <PaySlip/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <BirthdayList/>
            </div>
            <div className="col-md-6">
              <Appraisal/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
