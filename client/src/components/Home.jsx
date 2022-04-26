import React from "react";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container-fluid px-0">
          <div className="row align-items-center content">
            <div className="col-md-6 text-center order-1 order-md-1">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                  <h2 className>ABOUT THE PROJECT</h2>
                  <p className="lead">
                    The Internet of Things (IoT) is a network of physical
                    objects or things that have sensors, software, and other
                    technologies built in them for the purpose of connecting and
                    sharing data with other devices and systems over the
                    internet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <img className="img-fluid" src="images/steg1.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0">
        <div className="row align-items-center content">
          <div className="col-md-6 order-2 order-md-1">
            <img className="img-fluid" src="images/steg2.png" alt="" />
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2 className>CRYPTOGRAPHY</h2>
                <p className="lead">
                  Despite the fact that numerous IoT devices are openly
                  available to everyone on the network, it is vital to be aware
                  of the security risks and threats posed by cyber-attacks;
                  therefore, it should be secured. In cryptography, plain text
                  is converted to encrypted text before being transmitted, and
                  encrypted text is converted back to plain text after the other
                  sides' communication.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center content">
          <div className="col-md-6 text-center">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2 className>STEGANOGRAPHY</h2>
                <p className="lead">
                  Steganography is a technique for concealing sensitive
                  information by embedding it in an audio, video, image, or text
                  file. One technique is to encrypt data in bits that represent
                  the same colour pixels in an image file repeated in a row. The
                  result will be an image file that appears identical to the
                  original image but has ”noise” patterns of regular,
                  unencrypted data since the encrypted data was applied to the
                  redundant data in an inconspicuous fashion.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2"></div>
          <img className="img-fluid" src="images/steg3.png" alt="" />
        </div>
      </div>
      <div className="row align-items-center content">
        <div className="col-md-6 order-2 order-md-1">
          <img className="img-fluid" src="images/steg4.png" alt="steg" />
        </div>
        <div className="col-md-6 text-center order-1 order-md-2">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2 className>SO</h2>
              <p className="lead">
                This project proposes using Cryptography to encrypt IoT network
                data and using Steganography to hide the encrypted message
                inside an image file, as well as to increase the number of bits
                that can be saved within a pixel of an image. To significantly
                enhance the payload that can be sent through an image,
                convolutional neural networks will be included into traditional
                steganography methods. The algorithm is built and trained to
                enhance the payload of data to be encrypted as well as safely
                decrypted in order to read the original message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
