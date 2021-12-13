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
          type="text"
          value={name}
          placeholder="Service"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <textarea
          value={details}
          placeholder="Details"
          onChange={(e) => setDetails(e.target.value)}
          required
        ></textarea>
        <br />
        <ArrayInput
          array={tags}
          setArray={setTags}
          placeholder="tag1 tag2 ..."
          required
        />
        <br />
        <select
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
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Submit" required />
        <br />
      </form>
    </div>
  );
}
