import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import apiService from "../../services/apiService";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Carousel from "react-bootstrap/Carousel";
import ConfirmationModal from "../../components/modal/ConfirmationModal";

function Coffee() {
  const [type, setType] = useState("hot");
  const [coffees, setCoffees] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(true);

  // for confirmation modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem({});
  };
  const handleConfirm = () => setOpenModal(false);

  useEffect(() => {
    loadData();
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
        <Card className="my-3">
          <Card.Body>
            <Card.Title>
              <ButtonGroup aria-label="Basic example">
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
            </Card.Title>
            <Carousel>
              {coffees.length &&
                coffees.map((item) => (
                  <Carousel.Item key={item.id} interval={100000}>
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
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Coffee;
