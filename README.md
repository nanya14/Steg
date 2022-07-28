# Secure Hybrid Steganography Message System
This project provides a system for securing data placed in a network within an image file using Steganography, as well as increasing the number of bits that can be saved within a pixel of an image. Convolutional neural networks are used in traditional steganography to drastically increase the payload that can be transmitted through an image. The project’s initial step is to gather DIV2K dataset which contains testing and training datasets, out of which the training dataset is used to train the model and the testing dataset is used to validate the model. Encoding, decoding, and critic modules are utilised to train the dataset. The basic algorithm developed using these modules is trained over a period of 100 epochs. The Critic module analyses an image to determine whether it is a cover or steganographic image (N, 1). The Encoder module creates a steganographic image by integrating a cover image and a data tensor. The Decoder module attempts to decode the contained data tensor from the steganographic image. The model’s accuracy will then be predicted by calculating metric values such as payload in bits per pixel, SSIM, PSNR, loss and accuracy. After that, the algorithm is enhanced to increase the message’s payload or storage capacity within the image. The standard storage capacity per pixel is 0.5 bits. It is trained and compared to the existing system using metrics after modifying the existing algorithm to increase the payload to more than 3 bits per pixel.

# Dependencies
imageio>=2.4.1,<2.5.0
reedsolo==0.3
scipy>=1.1.0,<1.2.0
tqdm>=4.28.1
numpy>=1.15.4<1.16.0
Pillow>=5.0.0,<7.0.0
torch==1.0.0
torchvision==0.2.1

# Google Colab Link
https://colab.research.google.com/drive/1lU4LSgFpWWYbmzI_v8LNb9xHUI2HjSVc?usp=sharing

# Web Application
Developed an interactive and responsive interface that contains multiple pages and were connected to a python script. The web application was able to successfully run the python script using child process spawn method.
The front-end of the application was created using React and Bootstrap, while Node JS served as the back-end along with Express as the server. Data was stored in MongoDB with the help of Mongoose.
