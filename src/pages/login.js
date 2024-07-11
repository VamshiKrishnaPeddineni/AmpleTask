import Logo from '../assets/logo.png';
import sliderImage from '../assets/slider-img.png';
import {useNavigate} from  "react-router-dom"

const Login =()=>{
    const router = useNavigate()
    const handleSubmit = () =>{
      router("/dashboard")
    }
    return(
        <section className="login-section overflow-hidden bg-white">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-5">
                        <div className="login-section-left py-5 px-4">
                        <img src={Logo} className="logo" alt="logo"/>
                        <h1 className="text-theme mt-5">Login</h1>
                        <p className="text-secondary mb-5">Login to your account.</p>
                        <form>
                            <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label text-theme">Email address</label>
                            <input type="email" value="user@gmail.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label text-theme">Password</label>
                            <input type="password" value="123456" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <a href="##" className="text-decoration-none text-theme">Reset Password?</a>
                            </div>
                            <button onClick={handleSubmit} className="btn btn-theme w-100">Sign In</button>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="login-section-right">
                        <div id="carouselExampleCaptions" className="carousel slide">
                            <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner vh-100">
                            <div className="carousel-item active">
                                <img src={sliderImage} className="d-block w-100" alt="Slider Image"/>
                                <div className="carousel-caption text-start">
                                <div className="mb-5 h1 fw-bold">Manage all <span className="text-theme-secondary">HR Operations</span> from the comfort of your home.</div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={sliderImage} className="d-block w-100" alt="Slider Image" />
                                <div className="carousel-caption text-start">
                                <div className="mb-5 h1 fw-bold">Manage all <span className="text-theme-secondary">HR Operations</span> from the comfort of your home.</div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={sliderImage} className="d-block w-100" alt="Slider Image"/>
                                <div className="carousel-caption text-start">
                                <div className="mb-5 h1 fw-bold">Manage all <span className="text-theme-secondary">HR Operations</span> from the comfort of your home.</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}
export default Login;