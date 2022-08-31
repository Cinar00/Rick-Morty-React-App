import React from "react";
import "./style.css";

import Gender from "./category/Gender";
import Status from "./category/Status";
import Species from "./category/Species";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    setPageNumber("");
    setStatus("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-light bg-danger p-1 mb-4 clearFilters"
      >
        Clear the Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
