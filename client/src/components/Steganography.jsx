import React from "react";

function Steganography() {
  return (
    <>
      <div className="steganography">
        <div className="container-sm">
          <div className="center">
            <img className="img-fluid" src="images/sys_arch.png" alt="" />
            <br />
            <br />
            <h1 className>WORKING</h1>
            <p>
              This project provides a system for securing army data placed in
              the network within an image file utilising Steganography method,
              as well as increasing the number of bits that can be saved within
              a pixel of an image. Convolutional neural networks are used in
              traditional steganography to drastically increase the payload that
              can be transmitted through an image. The projects initial stage is
              to gather DIV2K dataset, which will then be separated into
              training and testing datasets, with the testing dataset being kept
              separate and the training dataset being used to train the model.
              Encoding, decoding, and critical modules are utilised to train the
              dataset. The algorithm is trained over a period of 20 to 100
              epochs. The Encoder module creates a steganographic image by
              integrating a cover image and a data tensor. The Critic module
              analyses an image to 19 determine whether it is a cover or
              steganographic image (N, 1). The Decoder module attempts to decode
              the contained data tensor from a steganographic image. The models
              accuracy will then be predicted by calculating metric values such
              as payload, bits per pixel, and accuracy. After that, the
              algorithm is enhanced to increase the messages payload or storage
              capacity within the image. The standard storage capacity per pixel
              is 0.5 bits. It will be trained and compared to the existing
              system using metrics after modifying the existing algorithm to
              increase the bits per pixel to more than 2 to 3 bits per pixel.
              The original image and the encoded image will look identical after
              the message has been encoded in the image. It will also be safely
              decrypted so that the original message can be accessed.
            </p>
            <h2 className>CALCULATED METRICS:</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">PSNR</th>
                  <th scope="col">Loss</th>
                  <th scope="col">Accuracy</th>
                  <th scope="col">SSIM</th>
                  <th scope="col">Payload</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>8.99</td>
                  <td>90.34</td>
                  <td>78.45</td>
                  <td>78.45</td>
                  <td>78.45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Steganography;
