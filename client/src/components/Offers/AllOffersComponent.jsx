import { useState, useEffect } from "react";
import { Offer } from "./OfferComponent";
import { LoadingSpinner } from "../Home/LoadingSpinner";
import { getAllOffers } from "../../service/offersService";
import { NoOffersYet } from "./NoOffersYet";

export const AllOfferComponents = () => {
    const [loadingSpinnerState, setLoadingSpinner] = useState(false);
    const [offers, setNewOffers] = useState([]);
    useEffect(() => {
      setLoadingSpinner(true);
      getAllOffers()
      .then(res => {
        setNewOffers(res);
        setLoadingSpinner(false)
      })
    }, []);
  
    return (
      <>
        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">All Offers</h2>
          </div>
        </div>
        <div className="row tm-mb-90 tm-gallery">
          {loadingSpinnerState && <LoadingSpinner />}
          {offers.length < 1 && <NoOffersYet/> || offers.map((offer) => (
            <Offer key={offer.id} {...offer.data} id={offer.id}/>
          ))}
        </div>
      </>
    );
  };