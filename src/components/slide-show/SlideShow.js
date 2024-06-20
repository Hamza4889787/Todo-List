import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './Slider.css'

function SlideShow() {

  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePlusClick = (event, cardIndex) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the card
    setSelectedCard(cardIndex);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const cards = [
    { title: 'Card title 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', img: 'https://via.placeholder.com/300x150' },
    { title: 'Card title 2', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', img: 'https://via.placeholder.com/300x150' },
    { title: 'Card title 3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', img: 'https://via.placeholder.com/300x150' },
    { title: 'Card title 4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', img: 'https://via.placeholder.com/300x150' },
    { title: 'Card title 5', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', img: 'https://via.placeholder.com/300x150' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="container mt-5">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-img-container">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="overlay" >
                <div className="plus-sign" onClick={(event) => handlePlusClick(event, index)}>+</div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </Slider>

      {selectedCard !== null && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{cards[selectedCard].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={cards[selectedCard].img} className="img-fluid mb-3" alt={cards[selectedCard].title} />
            <p>{cards[selectedCard].text}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}

export default SlideShow
