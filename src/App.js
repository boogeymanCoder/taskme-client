import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Main from "./Pages/Main";
import Inbox from "./Pages/Inbox";
import Conversation from "./Pages/Conversation";
import Navbar from "./Components/Navbar";
import Forum from "./Pages/Forum";
import Appointment from "./Pages/Appointment";
import Notification from "./Pages/Notification";
import TaskPage from "./Pages/TaskPage";
import PostPage from "./Pages/PostPage";

// TODO create folder for api calls

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/inbox">
          <Route index element={<Inbox />} />
          <Route path="conversation">
            <Route path=":conversationId" element={<Conversation />} />
          </Route>
        </Route>
        <Route path="/forum" element={<Forum />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/task/:taskId" element={<TaskPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
