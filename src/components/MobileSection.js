export default function MobileSection() {
  return (
    <div className="mobile-section">
      <div className="container">
        <img
          className="d-sm-none img-fluid"
          src="/imgs/mobile/screen_mobile.svg"
          alt=""
        />
        <img className="d-none d-sm-flex" src="imgs/web/screen_mobile.svg" alt="" />
        <div className="left">
          <div className="section-text">
            <div className="top">
              <div className="caption">Services</div>
              <div className="headline">Personalized services</div>
            </div>
            <div className="paragraph">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="content-box">
                <i className="iconoir-truck"></i>
                <h6 className="title">Et mauris</h6>
                <p className="paragraph">
                  Posuere quis sed mauris non curabitur pretium elementum eget.
                  Feugiat sed maecenas eu accumsan tristique.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="content-box">
                <i className="iconoir-trophy"></i>
                <h6 className="title">Eget sit</h6>
                <p className="paragraph">
                  Sit bibendum donec dolor fames neque vulputate non sit
                  aliquam. Consequat turpis natoque leo, massa.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="content-box">
                <i className="iconoir-trekking"></i>
                <h6 className="title">Imperdiet pellentesque</h6>
                <p className="paragraph">
                  Platea arcu dapibus non magna cursus lectus id sollicitudin.
                  Enim viverra parturient tristique nulla.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="content-box">
                <i className="iconoir-piggy-bank"></i>
                <h6 className="title">Non libero</h6>
                <p className="paragraph">
                  Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit
                  purus ut sed eros, consectetur viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
