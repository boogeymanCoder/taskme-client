import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteApplication,
  editApplicationMessage,
  toggleAcceptApplication,
} from "../api/application";
import {
  addConversationMember,
  deleteConversationMember,
} from "../api/conversation";

export default function Application({
  task,
  applicationData,
  setApplications,
}) {
  const account = useSelector((state) => state.accountLog.account);
  const [application, setApplication] = useState(applicationData);

  function editHandler(e) {
    const newMessage = prompt("New Message", application.message);
    if (!newMessage) return;

    e.target.disabled = true;
    editApplicationMessage(application._id, newMessage)
      .then((response) => {
        setApplication(response.data);
        e.target.disabled = false;
      })
      .catch((error) => console.log(error));
  }

  function cancelHandler(e) {
    if (window.confirm("Are you sure?")) {
      e.target.disabled = true;
      deleteApplication(application._id)
        .then((response) => {
          console.log("Application Cancelled");
          setApplications((lastState) =>
            lastState.splice(lastState.indexOf(application), 1)
          );
        })
        .catch((error) => console.log("Application Cancellation Failed"))
        .finally(() => {
          e.target.disabled = false;
        });
    }
  }

  function acceptHandler(e) {
    e.target.disabled = true;
    toggleAcceptApplication(application._id, !application.accepted)
      .then((response) => {
        const newApplication = response.data;
        if (newApplication.accepted) {
          addConversationMember(task.taskConversation, application.employee)
            .then((response) => {
              console.log(response.data);
              setApplication(newApplication);
              console.log("Application Accepted");

              e.target.disabled = false;
            })
            .catch((error) => {
              console.log("Employee Not Added to Task Conversation:", error);
            });
        } else {
          console.log(application.employee);
          deleteConversationMember(task.taskConversation, application.employee)
            .then((response) => {
              console.log(response.data);
              setApplication(newApplication);
              console.log("Application Rejected");

              e.target.disabled = false;
            })
            .catch((error) => {
              console.log("Employee Not Removed to Task Conversation:", error);
            });
        }
      })
      .catch((error) => {
        console.log("Application Acceptance Failed:", error);
      });
  }

  if (!application) return null;

  return (
    <div>
      <span>{`Employee: ${application.employee.username}`}</span> <br />
      <span>{`Message: ${application.message}`}</span> <br />
      <span>{`Date: ${new Date(application.date).toLocaleString()}`}</span>{" "}
      <br />
      {account._id === task.employer._id && (
        <>
          <label>Accepted: </label>
          <input
            type="checkbox"
            checked={application.accepted}
            onChange={acceptHandler}
          />
        </>
      )}
      {account._id !== task.employer._id && (
        <>
          <span>{`Accepted: ${application.accepted}`}</span> <br />
        </>
      )}
      {account && account._id === application.employee._id && (
        <>
          <input type="button" value="edit" onClick={editHandler} />
          <input type="button" value="cancel" onClick={cancelHandler} />
        </>
      )}
      <br />
      <br />
    </div>
  );
}
