import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteApplication,
  editApplicationMessage,
  toggleAcceptApplication,
} from "../api/application";
import {
  addConversationMember,
  deleteConversationMember,
} from "../api/conversation";
import { devLog } from "../dev/log";

export default function Application({
  task,
  applicationData,
  setApplications,
}) {
  const account = useSelector((state) => state.accountLog.account);
  const [application, setApplication] = useState(applicationData);
  const [disableAccept, setDisableAccept] = useState(false);

  useEffect(() => {
    if (application.accepted === false) {
      if (account._id === task.employer._id) {
        return setDisableAccept(false);
      }
      return setDisableAccept(true);
    } else {
      if (account._id === application.employee._id) {
        return setDisableAccept(false);
      }
      return setDisableAccept(true);
    }
  }, [application, account._id, task.employer._id]);

  function editHandler(e) {
    const newMessage = prompt("New Message", application.message);
    if (!newMessage) return;

    e.target.disabled = true;
    editApplicationMessage(application._id, newMessage)
      .then((response) => {
        setApplication(response.data);
        e.target.disabled = false;
      })
      .catch((error) => devLog(error));
  }

  function cancelHandler(e) {
    if (window.confirm("Are you sure?")) {
      e.target.disabled = true;
      deleteApplication(application._id)
        .then((response) => {
          devLog("Application Cancelled");
          setApplications((lastState) =>
            lastState.splice(lastState.indexOf(application), 1)
          );
        })
        .catch((error) => devLog("Application Cancellation Failed"))
        .finally(() => {
          e.target.disabled = false;
        });
    }
  }

  function acceptHandler(e) {
    if (application.accepted === false) {
      if (account._id === task.employer._id) {
        e.target.disabled = true;
        acceptToggle(true);
        e.target.disabled = false;
        return;
      }
      return alert("Only Employers Accept");
    } else {
      if (account._id === application.employee._id) {
        e.target.disabled = true;
        acceptToggle(false);
        e.target.disabled = false;
        return;
      }
      return alert("Only Applicant Can Abandon");
    }
  }

  function acceptToggle(accepted) {
    toggleAcceptApplication(application._id, accepted)
      .then((response) => {
        const newApplication = response.data;
        if (newApplication.accepted) {
          addConversationMember(task.taskConversation, application.employee)
            .then((response) => {
              devLog(response.data);
              setApplication(newApplication);
              devLog("Application Accepted");
            })
            .catch((error) => {
              devLog("Employee Not Added to Task Conversation:", error);
            });
        } else {
          devLog(application.employee);
          deleteConversationMember(task.taskConversation, application.employee)
            .then((response) => {
              devLog(response.data);
              setApplication(newApplication);
              devLog("Application Rejected");
            })
            .catch((error) => {
              devLog("Employee Not Removed to Task Conversation:", error);
            });
        }
      })
      .catch((error) => {
        devLog("Application Acceptance Failed:", error);
      });
  }

  return (
    <div>
      <span>
        Employee:{" "}
        <Link to={`/profile/${application.employee._id}`}>
          {application.employee.username}
        </Link>
      </span>
      <br />
      <span>{`Message: ${application.message}`}</span> <br />
      <span>{`Date: ${new Date(application.date).toLocaleString()}`}</span>{" "}
      <br />
      <label>Accepted: </label>
      <input
        type="checkbox"
        checked={application.accepted}
        onChange={acceptHandler}
        disabled={disableAccept}
      />
      <br />
      {account && account._id === application.employee._id && (
        <>
          <input type="button" value="edit" onClick={editHandler} />
          <input type="button" value="cancel" onClick={cancelHandler} />
          <br />
        </>
      )}
      <br />
    </div>
  );
}
