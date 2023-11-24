import React, { useState } from "react";

const ResourceFiles = () => {
  const [resourceFiles, setResourceFiles] = useState([
    { id: 1, title: "File 1", content: "Content for File 1" },
    { id: 2, title: "File 2", content: "Content for File 2" },
  ]);

  const showDetails = (id) => {
    const file = resourceFiles.find((file) => file.id === id);
    alert(`Details for File ${id}:\nTitle: ${file.title}\nContent: ${file.content}`);
  };

  return (
    <div className="resource-files-container">
      <h2>Resource Files</h2>
      <ul>
        {resourceFiles.map((file) => (
          <li key={file.id} className="file-item">
            <h3>{file.title}</h3>
            <p>{file.content}</p>
            <button onClick={() => showDetails(file.id)} className="details-button">
              Show Details
            </button>
          </li>
        ))}
      </ul>

      <style>
        {`
          .resource-files-container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
          }

          .file-item {
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
          }

          .details-button {
            background-color: #3498db;
            color: white;
            padding: 5px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default ResourceFiles;
