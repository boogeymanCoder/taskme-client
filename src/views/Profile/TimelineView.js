import React from "react";

export default function TimelineView({ setDisplay, timeline, renderTimeline }) {
  return (
    <div>
      <h2>Timeline</h2>
      <div className="col-sm-6 mb-1">
        <select
          className="form-select"
          onChange={(e) => setDisplay(e.target.value)}
        >
          <option value={timeline.task} defaultValue>
            Tasks
          </option>
          <option value={timeline.application}>Applications</option>
          <option value={timeline.post}>Posts</option>
          <option value={timeline.service}>Services</option>
        </select>
      </div>
      {renderTimeline()}
    </div>
  );
}
