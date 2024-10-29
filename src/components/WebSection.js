export default function WebSection() {
  return (
    <div className="web-section">
      <div className="container">
        <div className="section-text">
          <div className="top">
            <span className="caption">No more waste</span>
            <h1 className="main-headline">Pick the Sun</h1>
          </div>
          <p className="paragraph">
            Et pulvinar nec interdum integer id urna molestie porta nullam. A,
            donec ornare sed turpis pulvinar purus maecenas quam a. Erat
            porttitor pharetra sed in mauris elementum sollicitudin.
          </p>
        </div>
        <img
          className="d-none d-sm-flex"
          src="/imgs/web/screen_desktop.svg"
          alt=""
        />
        <img
          className="d-sm-none img-fluid"
          src="/imgs/mobile/screen_desktop.svg"
          alt=""
        />
      </div>
    </div>
  );
}
