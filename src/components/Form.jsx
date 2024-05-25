import {useState, useEffect} from "react";

export default function Form (props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    let search;
    // Pass the search term to pokemonSearch prop, which is App's getPokemon function
    // Check if the value is not a number
    if (isNaN(formData.searchterm)) {
      search = formData.searchterm.toLowerCase();
    } else {
      search = formData.searchterm;
    }
    props.pokemonSearch(search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          placeholder="Search by name or number"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}