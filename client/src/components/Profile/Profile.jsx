import { useState, useEffect, useContext } from "react";
import { getAllOffers } from "../../service/offersService";
import AuthContext from "../../contexts/authContext";
import { LoadingSpinner } from "../Home/LoadingSpinner";
import { Offer } from "../Offers/OfferComponent";
import { NoOffersYet } from "../Offers/NoOffersYet";

export const Profile = () => {
    const { authInfo } = useContext(AuthContext)
    const [loadingSpinnerState, setLoadingSpinner] = useState(false);
    const [showNoOffers, setShowNoOffers] = useState(false)
    const [offers, setNewOffers] = useState([]);
    useEffect(() => {
      setLoadingSpinner(true);
      getAllOffers()
      .then(res => {
        const boughtOffers = res.filter(x => x.data.boughtBy == authInfo.uid)
        setNewOffers(boughtOffers);
        if (res.filter(x => x.data.boughtBy == authInfo.uid).length < 1){
          setLoadingSpinner(false)
          setShowNoOffers(true)
        } else {
          setLoadingSpinner(false)
          setShowNoOffers(false)
        }
      })
    }, []);
  
    return (
      <>
        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">Bought products</h2>
          </div>
        </div>
        <div className="row tm-mb-90 tm-gallery">
          {loadingSpinnerState && <LoadingSpinner />}
          {showNoOffers && <NoOffersYet/> || offers.map((offer) => (
            <Offer key={offer.id} {...offer.data} id={offer.id}/>
          ))}
        </div>
      </>
    );
  };