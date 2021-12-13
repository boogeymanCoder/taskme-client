import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { findUserServiceBatch } from "../../api/service";
import TimelineServicesView from "../../views/Profile/TimelineServicesView";
import Pagination from "../Pagination";

export default function TimelineServices() {
  const account = useSelector((state) => state.accountLog.account);
  const [services, setServices] = useState();
  const [serviceBatch, setServiceBatch] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  console.log(services);

  useEffect(() => {
    var cancel = false;

    findUserServiceBatch(20, serviceBatch, account._id)
      .then((response) => {
        if (cancel) return;
        setServices((lastState) => {
          const updatedServices = response.data;
          console.log("response:", updatedServices);

          if (response.data.length === 20) setEnableNext(true);
          else setEnableNext(false);

          if (serviceBatch <= 1) setEnablePrevious(false);
          else setEnablePrevious(true);

          return updatedServices;
        });
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [serviceBatch, account._id]);

  return (
    <TimelineServicesView
      pagination={
        <Pagination
          setPageBatch={setServiceBatch}
          setPage={setServices}
          enableNext={enableNext}
          setEnableNext={setEnableNext}
          enablePrevious={enablePrevious}
          setEnablePrevious={setEnablePrevious}
        />
      }
      services={services}
    />
  );
}
