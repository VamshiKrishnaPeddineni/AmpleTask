import mailImage from "../assets/mail2.svg";
import awardsImage from "../assets/award.svg";
import projectsImage from "../assets/project.png";
import tasksImage from "../assets/jira.png";

const Widgets = () => {
  return (
    <section className="glance-cards">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card bg-yellow">
              <div className="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src={mailImage} alt="Messages" />
                  </div>
                  <div class="flex-grow-1 ms-3 text-center text-black">
                    <div className="h1 fw-bold mb-0">13</div>
                    <p className="mb-0 fw-bold">Messages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-theme">
              <div className="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src={awardsImage} alt="Awards" />
                  </div>
                  <div class="flex-grow-1 ms-3 text-center text-white">
                    <div className="h1 fw-bold mb-0">5</div>
                    <p className="mb-0 fw-bold">Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-theme-secondary">
              <div className="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src={projectsImage} alt="Projects" />
                  </div>
                  <div class="flex-grow-1 ms-3 text-center text-white">
                    <div className="h1 fw-bold mb-0">3</div>
                    <p className="mb-0 fw-bold">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark">
              <div className="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src={tasksImage} alt="Tickets Completed" />
                  </div>
                  <div class="flex-grow-1 ms-3 text-center text-white">
                    <div className="h1 fw-bold mb-0">50</div>
                    <p className="mb-0 fw-bold">Tickets Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Widgets;
