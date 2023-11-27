import { Offer } from "../Offer";

export const LatestOffersSection = () => {
  return (
    <>
      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
          <h2 className="col-6 tm-text-primary">Latest Offers</h2>
        </div>
      </div>
      <div className="row tm-mb-90 tm-gallery">
        <Offer/>
      </div>
    </>
  );
};
