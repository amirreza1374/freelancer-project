import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ options, filterField }) {
  const [searhParams, setSearchParams] = useSearchParams();
  const value = searhParams.get(filterField) || "";

  const handleChange = (e) => {
    searhParams.set(filterField, e.target.value);
    setSearchParams(searhParams);
  };

  return <Select onChange={handleChange} value={value} options={options} />;
}

export default FilterDropDown;
