import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { findUserApplicationBatch } from "../../api/application";
import TimelineApplicationList from "../Application/TimelineApplicationList";
import Pagination from "../Pagination";

export default function TimelineApplications() {
  const account = useSelector((state) => state.accountLog.account);
  const [applications, setApplications] = useState();
  const [applicationBatch, setApplicationBatch] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useEffect(() => {
    var cancel = false;

    findUserApplicationBatch(20, applicationBatch, account._id)
      .then((response) => {
        if (cancel) return;
        setApplications((lastState) => {
          console.log(response.data);
          const updatedApplications = response.data;

          if (response.data.length === 20) setEnableNext(true);
          else setEnableNext(false);

          if (applicationBatch <= 1) setEnablePrevious(false);
          else setEnablePrevious(true);

          return updatedApplications;
        });
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [applicationBatch, account._id]);

  return (
    <span>
      <TimelineApplicationList applications={applications} />
      <Pagination
        setPageBatch={setApplicationBatch}
        setPage={setApplications}
        enableNext={enableNext}
        setEnableNext={setEnableNext}
        enablePrevious={enablePrevious}
        setEnablePrevious={setEnablePrevious}
      />
    </span>
  );
}
