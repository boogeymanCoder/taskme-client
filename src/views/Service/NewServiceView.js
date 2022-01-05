import React from "react";
import ArrayInput from "../../Components/ArrayInput";

export default function NewServiceView({
  submitHandler,
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
}) {
  return (
    <div>
      <form onSubmit={submitHandler}>
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
          rows="5"
        ></textarea>
        <ArrayInput
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
        <input
          className="btn btn-dark float-end"
          type="submit"
          value="Submit"
          required
        />
        <br />
        <br />
      </form>
    </div>
  );
}
