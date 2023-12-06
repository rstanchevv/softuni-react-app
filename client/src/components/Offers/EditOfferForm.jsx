import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnOffer } from "../../service/offersService";
import styles from "./EditOfferForm.module.css";
import useForm from "../../hooks/useForm";
import { LoadingSpinner } from "../Home/LoadingSpinner";

export const EditOfferForm = ({ editOfferSubmitHandler }) => {
  const { id } = useParams();
  const { values, changeHandler, submitHandler } = useForm(
    editOfferSubmitHandler,
    {
      title: "",
      category: "",
      image: "",
      price: "",
      details: "",
    },
    id
  );

  const [offer, setOffer] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
    details: "",
  });

  useEffect(() => {
    const offerFetch = async () => {
      const offer = await getAnOffer(id);
      setOffer(offer);
    };
    offerFetch();
  }, []);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="title">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder={offer.title}
            name="title"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="category">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder={offer.category}
            name="category"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="image">
            Image
          </label>
          <input
            type="imageUrl"
            className="form-control"
            id="image"
            placeholder={offer.image}
            name="image"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="price">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder={offer.price}
            name="price"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="details">
            Details
          </label>
          <input
            type="text"
            className="form-control"
            id="details"
            placeholder={offer.details}
            name="details"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.btnContainer}>
          <button className="btn btn-primary btn-lg px-4 gap-3" role="button">
            Edit
          </button>
        </div>
      </form>
    </>
  );
};
