import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createService } from "../api/service";
import ArrayInput from "./ArrayInput";

export default function NewService({ services, setServices }) {
  const account = useSelector((state) => state.accountLog.account);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState([]);
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState(0);

  function submitHandler(e) {
    e.preventDefault();
    createService({
      owner: account._id,
      name: name,
      details: details,
      currency: currency,
      price: price,
      tags: tags,
    })
      .then((response) => {
        const updatedServices = [...services, response.data];
        updatedServices.sort((a, b) => a.name.localeCompare(b.name));
        setServices(updatedServices);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h2>New Service</h2>
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
