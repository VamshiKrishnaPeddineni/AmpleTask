import Logo from '../assets/logo.png';
import NotificationImage from '../assets/notifications.svg';
import mailImage from '../assets/mail.svg';
import profileImage from '../assets/profile.svg';

const Header =()=>{
    return(
        <header data-bs-theme="ligth">
            <nav className="navbar navbar-expand-md navbar-ligth fixed-top bg-white py-0">
                <div className="container">
                <a className="navbar-brand" href="/dashboard">
                    <img src={Logo} className="logo py-3" alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Requests</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Payroll</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Company</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Extras</a>
                    </li>
                    </ul>
                    <div className="quick-buttons">
                    <ul className="list-unstyled mb-sm-0">
                        <li>
                        <a href="#" className="notifications">
                            <img src={NotificationImage}/>
                            <span className="bg-danger position-absolute rounded-circle  text-white translate-middle">
                            2
                        </span>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="mailbox">
                            <img src={mailImage}/>
                            <span className="bg-danger position-absolute rounded-circle  text-white translate-middle">
                            8
                        </span>
                        </a>
                        </li>
                        <li>
                        <a href="/profile" className="profile">
                            <img src={profileImage}/>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
            </header>
    )
}
export default Header;