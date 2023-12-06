import { useNavigate, useParams } from "react-router-dom";
import { deleteOffer, getAnOffer } from "../../service/offersService";
import { useContext, useEffect, useState } from "react";
import { LoadingSpinner } from "../Home/LoadingSpinner";
import styles from "./OfferDetailsComponent.module.css";
import AuthContext from "../../contexts/authContext";
import {Link} from 'react-router-dom'

export const OfferDetailsCompnent = () => {
  const { authInfo } = useContext(AuthContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false)
  const [isNotOwner, setIsNotOwner] = useState(false)
  const [offer, setOffer] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const offerFetch = async () => {
      const offer = await getAnOffer(id);
      setOffer(offer);
      setLoading(false);
      if (authInfo){
        if (authInfo.uid == offer.ownerId){
          setIsOwner(true)
        } else {
          setIsNotOwner(true)
        }
      }
    };
    offerFetch();
  }, []);

  const deleteOfferHandler = async () => {
    try {
      await deleteOffer(id);

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {(loading && <LoadingSpinner />) || (
        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-12 tm-text-primary">{offer.title}</h2>
          </div>
          <div className="row tm-mb-90">
            <div className="col-l-8 col-lg-7 col-md-6 col-sm-12">
              <img src={offer.image} alt="Image" className="img-fluid" />
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
              <div className="tm-bg-gray tm-video-details">
                <p className="mb-4"></p>
                <div className="text-justify mb-3">
                  {isNotOwner && (
                    <Link to="/buy" className={styles.btn}>
                      Buy
                    </Link>
                  )}
                  {isOwner && (
                    <>
                      <Link to={`/catalog/${id}/edit`} className={styles.btn}>
                        Edit
                      </Link>
                      <Link to={`/catalog/${id}/delete`}onClick={deleteOfferHandler} className={styles.btn}>
                        Delete
                      </Link>
                    </>
                  )}
                </div>
                <div className="mb-4">
                  <div className="mr-4 mb-2">
                  <h3 className="tm-text-gray-dark mb-3">Product info:</h3>

                    <span className="tm-text-gray-dark">Price: </span>
                    <span className="tm-text-primary">{offer.price}lv</span>
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="tm-text-gray-dark">Category: </span>
                    <span className="tm-text-primary">{offer.category}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="tm-text-gray-dark mb-3">Details:</h3>
                  <p>{offer.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
