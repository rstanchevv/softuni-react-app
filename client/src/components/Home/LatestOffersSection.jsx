import { Offer } from "../Offers/Offer";
import { useState, useEffect } from "react";

export const LatestOffersSection = () => {
  const [offers, setNewOffers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/data/offers/")
      .then((res) => res.json())
      .then((data) => setNewOffers(data));
  }, []);

  return (
    <>
      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
          <h2 className="col-6 tm-text-primary">Latest Offers</h2>
        </div>
      </div>
      <div className="row tm-mb-90 tm-gallery">
        {offers.slice(-3).map(offer => <Offer key={offer._id} {...offer}/>)}
      </div>

    </>
  );
};
