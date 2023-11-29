import { OfferDetailsCompnent } from "./OfferDetailsComponent";
import dateConverter from "./utils/dateConverter";
import convertTimestamp from "./utils/dateConverter";
import { Link, Route, Routes } from "react-router-dom";

export const Offer = ({ title, img, _createdOn, price, category, id }) => {
  return (
    <><div className="col-xl-3 mb-5">
    <figure className="effect-ming tm-video-item">
      <img src={img} alt="Image" className="img-fluid" />
      <figcaption className="d-flex align-items-center justify-content-center">
        <h2>{title}</h2>
        <Link to={id}>View more</Link>
      </figcaption>
    </figure>
    <div className="d-flex justify-content-between tm-text-gray">
      <span className="tm-text-gray-light">{dateConverter(_createdOn)}</span>
      <span>Category: {category}</span>
      <span>{price}lv</span>
    </div>
  </div>
  </>
  );
};
