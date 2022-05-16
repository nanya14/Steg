import torch
import sys
from steg_base_encode import Steganography
from steg_base_encode import Encoder
from steg_base_encode import Decoder
from steg_base_encode import Critic


if __name__ == '__main__':
    text = sys.argv[1]
    pic = sys.argv[2]
    # input_filename = sys.argv[3]
    # output = '../client/public/images/'+input_filename+'output.png'
    steganography = Steganography(
        6, Encoder, Decoder, Critic, hidden_size=32, cuda=True, verbose=True)
    steganography.load(path='basic_100.steg')
    # steganography.encode(pic, output, text)
    steganography.encode(pic, '../client/public/images/output.png', text)
    # steganography.decode(encpic, '../client/public/images/decoded.png')
