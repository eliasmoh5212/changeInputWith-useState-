import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  let paragraph = document.getElementById("para");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (paragraph != null) {
      paragraph.innerHTML =
        "Dear " + person.name + " with the age of " + person.age;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      <hr />
      <p id="para"></p>
      <p id="para1">NEW Paragaraph</p>
    </form>
  );
};

export default Form;
