export default function PowerSection() {
  return (
    <div className="power-section">
      <div className="container">
        <div className="section-header">
          <div className="section-text">
            <span className="caption">Join other Sun harvesters</span>
            <h1 className="headline">Make something awesome</h1>
            <p className="paragraph">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <div className="btn">
            <span>Request a Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24">
              <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
            </svg>
          </div>
        </div>
        <img
          className="d-sm-none img-fluid"
          src="imgs/mobile/screen_macbook.svg"
          alt=""
        />
        <img
          className="d-none d-sm-flex"
          src="imgs/web/screen_macbook.svg"
          alt=""
        />
      </div>
    </div>
  );
}
