import os

img_list = open("img_list.txt", "r")
name_list = img_list.readlines()
for name in name_list:
    pic = name[:name.index('\n')]
    os.system("echo '" + pic + "' | python main.py >" + pic[:pic.index('.')]+"_result.txt")
