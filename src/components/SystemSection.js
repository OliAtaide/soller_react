export default function SystemSection() {
  return (
    <div className="system-section">
      <div className="container">
        <div className="right">
          <div className="section-text">
            <div className="top">
              <div className="caption">System features</div>
              <div className="headline">Powerful features</div>
            </div>
            <div className="paragraph">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="content-box">
                <i className="iconoir-tournament"></i>
                <h6 className="title">Erat sit</h6>
                <p className="paragraph">
                  Id quis lectus pharetra, ultricies integer montes, amet,
                  gravida consectetur. Nunc convallis fringilla nisl magna
                  sagittis.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="content-box">
                <i className="iconoir-thumbs-up"></i>
                <h6 className="title">Ullamcorper arcu</h6>
                <p className="paragraph">
                  Ipsum at id hendrerit amet faucibus commodo quam nullam.
                  Lectus auctor habitant duis dictum.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="content-box">
                <i className="iconoir-transition-up"></i>
                <h6 className="title">Imperdiet pellentesque</h6>
                <p className="paragraph">
                  Platea arcu dapibus non magna cursus lectus id sollicitudin.
                  Enim viverra parturient tristique nulla.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="content-box">
                <i className="iconoir-perspective-view"></i>
                <h6 className="title">Non libero</h6>
                <p className="paragraph">
                  Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit
                  purus ut sed eros, consectetur viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="d-sm-none img-fluid"
          src="imgs/mobile/screen_mobile2.svg"
          alt=""
        />
        <img
          className="d-none d-sm-flex"
          src="imgs/web/screen_mobile2.svg"
          alt=""
        />
      </div>
    </div>
  );
}
