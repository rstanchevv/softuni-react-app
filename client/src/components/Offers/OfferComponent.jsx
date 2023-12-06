import { Link} from "react-router-dom";

export const Offer = ({ title, image, price, category, id }) => {
  return (
    <><div className="col-xl-3 mb-5">
    <figure className="effect-ming tm-video-item">
      <img src={image} alt="Image" className="img-fluid" />
      <figcaption className="d-flex align-items-center justify-content-center">
        <h2>{title}</h2>
        <Link to={id}>View more</Link>
      </figcaption>
    </figure>
    <div className="d-flex justify-content-between tm-text-gray">
      <span>Category: {category}</span>
      <span>Price: {price}lv</span>
    </div>
  </div>
  </>
  );
};
