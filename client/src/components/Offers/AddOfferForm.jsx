import { useState } from "react";
import styles from "./AddOfferForm.module.css";
import useForm from "../../hooks/useForm";

export const AddOfferForm = ({ createOfferSubmitHandler }) => {
  const [errors, setErrors] = useState({});
  const { values, changeHandler, submitHandler } = useForm(
    createOfferSubmitHandler,
    {
      title: "",
      category: "",
      image: "",
      price: "",
      details: "",
    }
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
        category: "Title should be between 3 and 10 characters!",
      }));
    } else {
      if (errors.category) {
        setErrors((state) => ({ ...state, category: "" }));
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.inputFields}>
        <label className={styles.labels} htmlFor="title">
          Title
        </label>
        <input
          type="text"
          className={"form-control"}
          id="title"
          placeholder="Example input"
          name="title"
          value={values.title}
          onChange={changeHandler}
          onBlur={titleValidator}
        />
        {errors.title && <p className={styles.errorMessage}>{errors.title}</p>}
      </div>
      <div className={styles.inputFields}>
        <label className={styles.labels} htmlFor="category">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          placeholder="Another input"
          name="category"
          value={values.category}
          onChange={changeHandler}
          onBlur={categoryValidator}
        />
        {errors.category && <p className={styles.errorMessage}>{errors.category}</p>}
      </div>
      <div className={styles.inputFields}>
        <label className={styles.labels} htmlFor="image">
          Image
        </label>
        <input
          type="imageUrl"
          className="form-control"
          id="image"
          placeholder="Another input"
          name="image"
          value={values.image}
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
          placeholder="Another input"
          name="price"
          value={values.price}
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
          placeholder="Another input"
          name="details"
          value={values.details}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.btnContainer}>
        <button
          disabled={Object.values(errors).some(
            (x) => x !== "" || Object.values(values).some((x) => x === "")
          )}
          className="btn btn-primary btn-lg px-4 gap-3"
          role="button"
        >
          Create
        </button>
      </div>
      <div>Please note that all fields are mandatory!</div>
    </form>
  );
};
