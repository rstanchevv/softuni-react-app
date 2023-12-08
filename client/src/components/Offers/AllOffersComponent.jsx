import { useState, useEffect } from "react";
import { Offer } from "./OfferComponent";
import { LoadingSpinner } from "../Home/LoadingSpinner";
import { getAllOffers } from "../../service/offersService";
import { NoOffersYet } from "./NoOffersYet";

export const AllOfferComponents = () => {
  const [loadingSpinnerState, setLoadingSpinner] = useState(false);
  const [showNoOffers, setShowNoOffers] = useState(false);
  const [offers, setNewOffers] = useState([]);
  useEffect(() => {
    setLoadingSpinner(true);
    getAllOffers().then((res) => {
      const unBoughtOffers = res.filter((x) => x.data.bought == false);
      setNewOffers(unBoughtOffers);
      if (res.filter((x) => x.data.bought == false).length < 1) {
        setLoadingSpinner(false);
        setShowNoOffers(true);
      } else {
        setLoadingSpinner(false);
        setShowNoOffers(false);
      }
    });
  }, []);

  return (
    <>
        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">All Offers</h2>
          </div>
        </div>
        <div className="card" style={{height: ''}}>
        <div className="row tm-mb-90 tm-gallery">
          {loadingSpinnerState && <LoadingSpinner />}
          {(showNoOffers && <NoOffersYet />) ||
            offers
              .filter((x) => x.data.bought == false)
              .map((offer) => (
                <Offer key={offer.id} {...offer.data} id={offer.id} />
              ))}
        </div>
      </div>
    </>
  );
};
