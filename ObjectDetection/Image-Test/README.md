# A Simple Guide for Image Test

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

- Open `main.py`, this is basically the structure you'll use to detect objects in your images.
- Put your image name and extension into **Line 11**: `source_img = "your_image_name.jpg/png/..."`
- Run the program, the result image and report will automatically generate in the same folder, as `your_image_name_after.jpg/png/...`, and `your_image_name_result.txt`.