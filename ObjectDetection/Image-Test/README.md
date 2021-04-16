# A Simple Guide for Image Test

## 0. Overview

We adopted an open source package(see [here](https://drive.google.com/file/d/1sF_NWhgvHx8n6Cy5HKwL4ncHjK350ZhQ/view?usp=sharing) for details) in order to detect certain objects(people in our project) inside an image. We have already packed what we need inside the source codes in this folder. Please read instructions below to run it on your own computer!

## 1. Download and Install Dependencies

- Firstly, you need to download/clone the files in this folder.

```
main.py
requirements.txt
```

- Next, download `yolo.h5` [from this website](https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/yolo.h5), which is necessary for image detection. Put `yolo.h5` in the same folder as `main.py`
- Install dependencies decleared inside `requirements.txt`, we recommand two methods:
  - Use `PyCharm` to open the project folder and then open `requirements.txt`, it'll automatically alert you to install those dependencies.
  - Or, use terminal to enter this folder, and then enter `pip install -r requirements.txt`

- Put images you want to detect inside the same folder as `main.py`



## 2. Detect People in Images

- Open `main.py`, this is basically the structure we use to detect objects in images. However, we'll not use this program directly, we will use `auto_detect.py` in order to quickly detect lots of imges automatically.
- Put your images in the same folder as `main.py` and `auto_detect.py`, then enter **names of all the images** that you want to detect into file `img_list.txt`, notice that please *print an extra line* at the end of this file.
- Run `auto_detect.py` by using `python auto_detect.py`, or `python3 auto_detect.py` if your default is python2. The result image and report will automatically generate in the same folder, as `your_image_name_after.jpg/png/...`, and `your_image_name_result.txt`.
