import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack />
        Back
      </Button>
      {country && (
        <Info {...country} setCountry={setCountry} navigate={navigate} />
      )}
    </div>
  );
};

export default Details;
