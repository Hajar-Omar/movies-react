import { useParams} from 'react-router-dom';

const Details = () => {
    const {type, id} = useParams();

  return <h1>Deatails: {id} - {type}</h1>;
};

export default Details;

// save in Map and cache using redux , then filter and return, redux to buy movies pagination, add bootstrap
// type as a useContext
// open popup add to cart to add quiantity  imdbId