import React from "react";

export default function TimelineView({ setDisplay, timeline, renderTimeline }) {
  return (
    <div>
      <h2>Timeline</h2>
      <select onChange={(e) => setDisplay(e.target.value)}>
        <option value={timeline.task} defaultValue>
          Tasks
        </option>
        <option value={timeline.application}>Applications</option>
        <option value={timeline.post}>Posts</option>
        <option value={timeline.service}>Services</option>
      </select>
      {renderTimeline()}
    </div>
  );
}
