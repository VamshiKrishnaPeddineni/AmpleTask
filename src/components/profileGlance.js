import profileImage from "../assets/profile-2.svg";
import arrowImage from "../assets/arrow.svg";

const profileGlance = () => {
  return (
    <section className="title-banner py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-theme h3 fw-semibold">Dashboard</div>
          </div>
        </div>
        <div className="row quick-edit">
          <div className="col-md-12">
            <div className="card bg-theme mt-3 position-relative">
              <div className="card-body p-4">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 text-center">
                    <img
                      src={profileImage}
                      alt="Profile Picture"
                      className="w-75"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center justify-content-between me-md-4 flex-wrap">
                      <div className="profile-glance">
                        <div className="h1 text-white fw-bold">
                          Vamshi Krishna
                        </div>
                        <div className="h5 text-white mb-0">
                          UI / UX Designer & Developer
                        </div>
                      </div>
                      <a
                        href="profile.html"
                        className="btn btn-theme-secondary px-4"
                      >
                        Edit Profile
                      </a>
                      <img
                        src={arrowImage}
                        className="profile-arrow"
                        alt="button navigator"
                      />
                    </div>
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
export default profileGlance;
