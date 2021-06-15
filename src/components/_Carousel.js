import React from "react";
import "semantic-ui-css/semantic.min.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import Background from "./Background";
import _Modal from "./_Modal";

const _Carousel = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className="carousel-container">
        <header className="">
          <div>
            <div className="modal-container">
              {/* Modal */}
              <_Modal />
              {/* Modal end */}
            </div>
            <div className="carousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-image-container"
                    src="https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/02/shutterstock_690424699.jpg?resize=1024%2C683&ssl=1"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className="big-font">HAPPY Sunday !!</h3>
                    <p className="big-font-par">
                      All our products are 20% off using the coupon: <br />
                      COUP2021
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-image-container"
                    src="https://lp-cms-production.imgix.net/2019-06/57ca3af76dd9ccd6b4d5476af3268d87-western-wall.jpg"
                    alt="Second slide"
                  />
                  {/* <Background /> */}
                  <Carousel.Caption>
                    <h3 className="big-font">Visit us!</h3>
                    <p className="big-font-par">
                      If you're interested in a day-tour to see how shofars are
                      made, and even get to make one! <br />
                      Contact us through 'Schedule an appointment' on the
                      side-bar for more details
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-image-container"
                    src="https://www.ynetnews.com/PicServer5/2017/10/08/8077930/80779250991599640360no.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3 className="top big-font">Third slide label</h3>
                    <p className="top big-font-par">
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default _Carousel;
