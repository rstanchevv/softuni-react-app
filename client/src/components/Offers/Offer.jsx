import {useState, useEffect} from 'react'
import dateConverter from './utils/dateConverter';

export const Offer = ({title, img, _createdOn, price}) => {


  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
      <figure className="effect-ming tm-video-item">
        <img src={img} alt="Image" className="img-fluid" />
        <figcaption className="d-flex align-items-center justify-content-center">
          <h2>{title}</h2>
          <a href="photo-detail.html">View more</a>
        </figcaption>
      </figure>
      <div className="d-flex justify-content-between tm-text-gray">
        <span className="tm-text-gray-light">{dateConverter(_createdOn)}</span>
        <span>{price}lv</span>
      </div>
    </div>
  );
};
