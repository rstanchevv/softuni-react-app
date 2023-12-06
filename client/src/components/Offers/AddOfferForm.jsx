import { useState } from "react";
import styles from "./AddOfferForm.module.css";
import useForm from "../../hooks/useForm";

export const AddOfferForm = ({createOfferSubmitHandler}) => {

  const { values, changeHandler, submitHandler } = useForm(
    createOfferSubmitHandler,
    {
      title: "",
      category: "",
      image: "",
      price: "",
      details: ""
    })

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.inputFields}>
        <label className={styles.labels} htmlFor="title">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Example input"
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
          placeholder="Another input"
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
          placeholder="Another input"
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
          placeholder="Another input"
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
          placeholder="Another input"
          name="details"
          onChange={changeHandler}
        />
      </div>
      <div className={styles.btnContainer}>
        <button className="btn btn-primary btn-lg px-4 gap-3" role="button">
          Create
        </button>
      </div>
    </form>
  );
};
