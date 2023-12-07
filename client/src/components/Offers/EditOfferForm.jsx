import { useLocation, useParams } from "react-router-dom";
import styles from "./EditOfferForm.module.css";
import useForm from "../../hooks/useForm";

export const EditOfferForm = ({ editOfferSubmitHandler }) => {
  const location = useLocation();
  const { id } = useParams();
  const { values, changeHandler, submitHandler } = useForm(
    editOfferSubmitHandler,
    location.state,
    id
  );

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
            placeholder=""
            name="category"
            value={values.category}
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
            placeholder=""
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
            placeholder=""
            value={values.price}
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
            placeholder=""
            value={values.details}
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
