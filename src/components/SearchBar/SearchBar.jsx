
import "./SearchBar.css";

export const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search courses"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  );
};
