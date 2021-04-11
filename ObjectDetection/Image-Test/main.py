from imageai.Detection import ObjectDetection
import os

execution_path = os.getcwd()

detector = ObjectDetection()
detector.setModelTypeAsYOLOv3()
detector.setModelPath(os.path.join(execution_path, "yolo.h5"))
detector.loadModel()

source_img = "Apr_1_1821_LG1_Holiday.JPG"
# get image name from input
source_img = input()

# only detect people
custom_objects = detector.CustomObjects(person = True)

detections = detector.detectObjectsFromImage(input_image=os.path.join(execution_path, source_img),
                                             output_image_path=os.path.join(execution_path, source_img[:source_img.index('.')]+"_after.jpg"),
                                             minimum_percentage_probability=30,
                                             custom_objects=custom_objects)
# detections = detector.detectObjectsFromImage(input_image=os.path.join(execution_path, "image.jpeg"),
#                                              output_image_path=os.path.join(execution_path, "image_new.jpeg"),
#                                              minimum_percentage_probability=40)

# result_file = open(source_img[:source_img.index('.')]+"_result.txt", "w")

cnt_person = 0
for eachObject in detections:
    if eachObject["name"] == "person":
        cnt_person += 1
    print(eachObject["name"], " : ", eachObject["percentage_probability"], " : ", eachObject["box_points"])

print(f"\nThere are about {cnt_person} persons in the picture.")