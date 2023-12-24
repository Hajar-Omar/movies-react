import { useParams } from "react-router-dom";

const Details = () => {
  const { type, id } = useParams();

  return (
    <h1>
      Deatails: {id} - {type}
    </h1>
  );
};

export default Details;
