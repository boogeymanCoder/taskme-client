import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteServiceOffers } from "../../api/offer";
import { deleteService, updateService } from "../../api/service";
import ArrayInput from "../ArrayInput";

export default function UpdateService({ service }) {
  const account = useSelector((state) => state.accountLog.account);
  const [name, setName] = useState(service.name);
  const [details, setDetails] = useState(service.details);
  const [tags, setTags] = useState(service.tags);
  const [currency, setCurrency] = useState(service.currency);
  const [price, setPrice] = useState(service.price);
  const navigate = useNavigate();

  function updateHandler(e) {
    e.preventDefault();
    updateService(service._id, {
      owner: account._id,
      name: name,
      details: details,
      currency: currency,
      price: price,
      tags: tags,
    })
      .then((response) => {
        for (var attribute in response.data) {
          service[attribute] = response.data[attribute];
        }
      })
      .catch((error) => console.log(error));
  }

  function deleteHandler(e) {
    deleteService(service._id)
      .then((response) => {
        console.log("deleted service");
        deleteServiceOffers(service._id)
          .then((response) => {
            console.log("deleted service offers");
            navigate("/services");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <form onSubmit={updateHandler}>
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
        <input type="submit" value="Update" required />
        <br />
        <input type="button" value="Delete" onClick={deleteHandler} />
      </form>
    </div>
  );
}
