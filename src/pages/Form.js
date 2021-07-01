import React, {useState} from "react";
// import { Link } from "react-router-dom";

const Form = ({initialComments, history, handleSubmit, buttonLabel}) => {
  const [formData, setFormData] = useState(initialComments)
  
    const input = {
        background: "white"
    }

  // Functions
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    history.push("/")
  }

  return (
    <form onSubmit={handleSubmission}>
      <input
        style={input}
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
      />
      <input
        style={input}
        type="text"
        onChange={handleChange}
        value={formData.comments}
        name="comments"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;