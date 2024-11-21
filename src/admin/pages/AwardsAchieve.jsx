import React, { useState } from "react";
import axios from "axios";

const AwardsAchieve = () => {
  const [formData, setFormData] = useState({
    cardimg: null,
    title: "",
    descp: "",
    bulkimg: [], // Use an array for multiple files
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    // Ensure that files is always an array
    const updatedFiles = Array.from(files);

    setFormData((prev) => ({
      ...prev,
      [name]: name === "bulkimg" ? updatedFiles : updatedFiles[0], // Adjust for bulkimg
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("cardimg", formData.cardimg);
      form.append("title", formData.title);
      form.append("descp", formData.descp);

      // Append each file in bulkimg array
      formData.bulkimg.forEach((file, index) => {
        form.append("bulkimg", file); // Use the correct field name without [index]
      });

      await axios.post(
        "https://www.joyseniorsecondary.ac.in/api/auth/awardsachiv",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Data and images uploaded successfully");
      console.log("FormData:", form);
    } catch (error) {
      console.error("Error uploading data and images:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card Image:
        <input type="file" name="cardimg" onChange={handleFileChange} />
      </label>

      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          name="descp"
          value={formData.descp}
          onChange={handleChange}
        />
      </label>

      <label>
        Bulk Image:
        <input
          type="file"
          name="bulkimg"
          multiple
          onChange={handleFileChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AwardsAchieve;
