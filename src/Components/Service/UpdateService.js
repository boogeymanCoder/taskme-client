import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteServiceOffers } from "../../api/offer";
import { deleteService, updateService } from "../../api/service";
import UpdateServiceView from "../../views/Service/UpdateServiceView";

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
    <UpdateServiceView
      updateHandler={updateHandler}
      name={name}
      setName={setName}
      details={details}
      setDetails={setDetails}
      tags={tags}
      setTags={setTags}
      currency={currency}
      setCurrency={setCurrency}
      price={price}
      setPrice={setPrice}
      deleteHandler={deleteHandler}
    />
  );
}
