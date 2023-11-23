export const Footer = () => {
  return (
    <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
      <div className="container-fluid tm-container-small">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
            <h3 className="tm-text-primary mb-4 tm-footer-title">
              About OfferHub
            </h3>
            <p>
              OfferHub is a free platform where you could offer items that you would like to sell.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
            Designed by{" "}
            <a
              href="https://templatemo.com"
              className="tm-text-gray"
              rel="sponsored"
              target="_parent"
            >
              TemplateMo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
