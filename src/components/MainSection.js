export default function MainSection() {
  return (
    <div className="main-section">
      <div className="container">
        <div className="section-text">
          <h1 className="main-headline">Get the Sun to Power Your Home</h1>
          <p className="main-paragraph">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <button className="btn">
            <span>Request a Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24">
              <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
            </svg>
          </button>
        </div>
        <div className="section-quote">
          <p className="Quote">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </p>

          <div className="user-card">
            <img src="imgs/staff/rwanda.jpg" alt="" className="user-thumb" />
            <div className="details">
              <h6 className="name">Rwanda Melflor</h6>
              <p className="site">zerowaste.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
