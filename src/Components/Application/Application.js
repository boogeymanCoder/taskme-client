import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteApplication,
  editApplicationMessage,
  toggleAcceptApplication,
} from "../../api/application";
import {
  addConversationMember,
  deleteConversationMember,
} from "../../api/conversation";
import ApplicationView from "../../views/Application/ApplicationView";

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
    if (application.accepted) return alert("Cannot Edit Accepted Application");

    const newMessage = prompt("New Message", application.message);
    if (!newMessage) return;

    e.target.disabled = true;
    editApplicationMessage(application._id, newMessage)
      .then((response) => {
        setApplications((lastState) => {
          var updatedApplications = [...lastState];
          updatedApplications.splice(lastState.indexOf(application), 1);
          updatedApplications = [response.data, ...updatedApplications];

          return updatedApplications;
        });
        setApplication(response.data);
        e.target.disabled = false;
      })
      .catch((error) => console.log(error));
  }

  function cancelHandler(e) {
    if (application.accepted)
      return alert("Cannot Cancel Accepted Application");
    if (window.confirm("Are you sure?")) {
      e.target.disabled = true;
      deleteApplication(application._id)
        .then((response) => {
          console.log("Application Cancelled");
          setApplications((lastState) => {
            const updatedApplications = [...lastState];
            updatedApplications.splice(lastState.indexOf(application), 1);
            return updatedApplications;
          });
        })
        .catch((error) => console.log("Application Cancellation Failed"))
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
      if (!window.confirm("This action cannot be undone, are you sure?"))
        return;
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
              console.log(response.data);
              setApplication(newApplication);
              console.log("Application Accepted");
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

  return (
    <ApplicationView
      application={application}
      acceptHandler={acceptHandler}
      disableAccept={disableAccept}
      account={account}
      editHandler={editHandler}
      cancelHandler={cancelHandler}
    />
  );
}
