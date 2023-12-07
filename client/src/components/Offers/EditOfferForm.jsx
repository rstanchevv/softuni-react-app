import { useLocation, useParams } from "react-router-dom";
import styles from "./EditOfferForm.module.css";
import useForm from "../../hooks/useForm";
import { useState } from "react";

export const EditOfferForm = ({ editOfferSubmitHandler }) => {
  const location = useLocation();
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const { values, changeHandler, submitHandler } = useForm(
    editOfferSubmitHandler,
    location.state,
    id
  );

  const titleValidator = () => {
    if (values.title.length < 3 || values.title.length > 30) {
      setErrors((state) => ({
        ...state,
        title: "Title should be between 3 and 30 characters!",
      }));
    } else {
      if (errors.title) {
        setErrors((state) => ({ ...state, title: "" }));
      }
    }
  };
  const categoryValidator = () => {
    if (values.category.length < 3 || values.category.length > 10) {
      setErrors((state) => ({
        ...state,
        category: "Category should be between 3 and 10 characters!",
      }));
    } else {
      if (errors.category) {
        setErrors((state) => ({ ...state, category: "" }));
      }
    }
  };

  const imageValidator = () => {
    if (!values.image.match("^https?://")) {
      setErrors((state) => ({
        ...state,
        image: "Image should be a link and should start with http://",
      }));
    } else {
      if (errors.image) {
        setErrors((state) => ({ ...state, image: "" }));
      }
    }
  };

  const priceValidator = () => {
    if (values.price < 1 || values.price > 100000) {
      setErrors((state) => ({
        ...state,
        price: "Price should be between 1 and 100000 lv.",
      }));
    } else {
      if (errors.price) {
        setErrors((state) => ({ ...state, price: "" }));
      }
    }
  };

  const detailsValidator = () => {
    if (values.details.length < 10 || values.details.length > 300) {
      setErrors((state) => ({
        ...state,
        details: "Details should be between 10 and 300 characters!",
      }));
    } else {
      if (errors.details) {
        setErrors((state) => ({ ...state, details: "" }));
      }
    }
  };

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
            placeholder=""
            name="title"
            value={values.title}
            onBlur={titleValidator}
            onChange={changeHandler}
          />
          {errors.title && (
            <p className={styles.errorMessage}>{errors.title}</p>
          )}
        </div>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="category">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder=""
            name="category"
            value={values.category}
            onChange={changeHandler}
            onBlur={categoryValidator}
          />
          {errors.category && (
            <p className={styles.errorMessage}>{errors.category}</p>
          )}
        </div>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="image">
            Image
          </label>
          <input
            type="imageUrl"
            className="form-control"
            id="image"
            placeholder=""
            name="image"
            value={values.image}
            onChange={changeHandler}
            onBlur={imageValidator}
          />
          {errors.image && (
            <p className={styles.errorMessage}>{errors.image}</p>
          )}
        </div>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="price">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder=""
            value={values.price}
            name="price"
            onChange={changeHandler}
            onBlur={priceValidator}
          />
          {errors.price && (
            <p className={styles.errorMessage}>{errors.price}</p>
          )}
        </div>
        <div className={styles.inputFields}>
          <label className={styles.labels} htmlFor="details">
            Details
          </label>
          <input
            type="text"
            className="form-control"
            id="details"
            placeholder=""
            value={values.details}
            name="details"
            onChange={changeHandler}
            onBlur={detailsValidator}
          />
          {errors.details && (
            <p className={styles.errorMessage}>{errors.details}</p>
          )}
        </div>
        <div className={styles.btnContainer}>
          <button
            disabled={Object.values(errors).some(
              (x) => x !== "" || Object.values(values).some((x) => x === "")
            )}
            className="btn btn-primary btn-lg px-4 gap-3"
            role="button"
          >
            Edit
          </button>
        </div>
        <div>Please note that all fields are mandatory!</div>
      </form>
    </>
  );
};
