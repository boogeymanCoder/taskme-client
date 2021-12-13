import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createService } from "../../api/service";
import NewServiceView from "../../views/Service/NewServiceView";

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
    <NewServiceView
      submitHandler={submitHandler}
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
    />
  );
}
