import React from "react";
import ArrayInput from "../../Components/ArrayInput";

export default function UpdateServiceView({
  updateHandler,
  name,
  setName,
  details,
  setDetails,
  tags,
  setTags,
  currency,
  setCurrency,
  price,
  setPrice,
  deleteHandler,
}) {
  return (
    <div>
      <form onSubmit={updateHandler}>
        <input
          className="form-control mb-1"
          type="text"
          value={name}
          placeholder="Service"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-1"
          value={details}
          placeholder="Details"
          onChange={(e) => setDetails(e.target.value)}
          required
        ></textarea>
        <ArrayInput
          className="form-control mb-1"
          array={tags}
          setArray={setTags}
          placeholder="tag1 tag2 ..."
          required
        />

        <div className="row justify-content-center mb-2">
          <div className="col-sm-3 me-0">
            <select
              className="form-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
            >
              <option value="" defaultValue>
                Currency
              </option>
              <option value="USD">$</option>
              <option value="PHP">₱</option>
            </select>
          </div>

          <div className="col-sm-9">
            <input
              className="form-control"
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="float-end">
          <input
            className="btn btn-dark me-1"
            type="submit"
            value="Update"
            required
          />
          <input
            className="btn btn-dark"
            type="button"
            value="Delete"
            onClick={deleteHandler}
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
}
