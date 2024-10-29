export default function NavBar() {
  return (
    <div className="container navbar">
      <a className="navbar-brand">soller</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Solutions
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Configure
          </a>
        </li>
      </ul>
      <div className="contact">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2.5 24 24">
          <path d="M2 16.09a1 1 0 1 1-2 0V10C0 4.477 4.477 0 10 0s10 4.477 10 10v3.086a1 1 0 1 1-2 0V10a8 8 0 1 0-16 0v6.09zM2 10h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm0 2v5h2v-5H2zm14-2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm0 2v5h2v-5h-2z"></path>
        </svg>
        <span>555 818 282</span>
      </div>
      <button className="btn">
        <span>Request a Quote</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24">
          <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
        </svg>
      </button>
    </div>
  );
}
