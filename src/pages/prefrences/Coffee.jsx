import React, { useEffect, useState } from "react";
import apiService from "../../services/apiService";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Carousel from "react-bootstrap/Carousel";
import ConfirmationModal from "../../components/modal/ConfirmationModal";
import store from "../../+state/store";
import { userChanged } from "../../+state/actions";
import { useSelector } from "react-redux";

function Coffee() {
  const [type, setType] = useState("hot");
  const [coffees, setCoffees] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(true);

  // selectors
  const currentCoffee = useSelector((state) => state.user.coffee);

  // for confirmation modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleConfirm = () => {
    setOpenModal(false);
    store.dispatch(userChanged({ coffee: selectedItem }));
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, [type]);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await apiService(`coffee/${type}`);
      setLoading(false);
      setCoffees(data);
    } catch {}
  };

  return (
    <>
      <ConfirmationModal
        show={openModal}
        title={selectedItem.title}
        handleConfirm={handleConfirm}
        handleClose={handleCloseModal}
      />
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <>
          {currentCoffee && currentCoffee.title ? (
            <h5 className="my-3">
              Your Favoirate Coffee is {currentCoffee.title}
            </h5>
          ) : (
            ""
          )}
          <ButtonGroup aria-label="coffee" className="w-100">
            <Button
              active={type === "hot"}
              variant="secondary"
              onClick={() => {
                setType("hot");
              }}
            >
              Hot Coffee
            </Button>
            <Button
              active={type === "iced"}
              variant="secondary"
              onClick={() => {
                setType("iced");
              }}
            >
              Iced Coffee
            </Button>
          </ButtonGroup>
          <Carousel>
            {coffees.length &&
              coffees.map((item) => (
                <Carousel.Item key={item.id} interval={2000}>
                  <img
                    className="w-100"
                    height={500}
                    src={item.image}
                    alt={item.title}
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Ingredients: {item.ingredients.join(", ")}</p>
                    <Button
                      className="btn btn-warning text-white"
                      onClick={() => {
                        handleOpenModal();
                        setSelectedItem(item);
                      }}
                    >
                      Mark as My Favorite
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
        </>
      )}
    </>
  );
}

export default Coffee;
