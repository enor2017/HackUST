# Mon1 - by Just4Fun

## 1. Introduction

"**Mon1**(stands for "LG1 Canteen Monitor")" is a real-time data-prediction-based food ordering service that balances the number of dine-in and mobile-phone-order customers with the aim of improving hygiene and customer experience during post-pandemic era. 

## 2. Components

Our project consists of **4** parts:

- **Website**: under `/lg1-monitor` folder, please refer to [readme file for website](https://github.com/enor2017/HackUST/tree/main/lg1-monitor). we've also deployed it on our AWS server, as you can see at [http://mon1-j4f.site/](http://mon1-j4f.site/) or [http://54.89.142.90/](http://54.89.142.90/).

  Assisted by our website, customers are encouraged to order online(via phone or computer) and take away food, and they are also able to monitor the current state of restaurant.(real-time customer no., future people density forecasting, kitchen monitoring, as well as personal ordere history)

- **People Detection Program**: under `/ObjectDetection/Image-Test` folder, please refer to [readme file for detection program](https://github.com/enor2017/HackUST/tree/main/ObjectDetection/Image-Test).

  Through this program, we adopted an open source package, enabling us to detect how many people are there in a picture/video. By doing this, we made it possible to monitor real-time people density in canteen, and produce data for later use.

  We have already captured some photos of LG1 canteen to generate basic data to test both of our People Detection Program and People Density Forecasting Program(see below), which can be found under `/ObjectDetection/CanteenImages` folder, with original images as well as their results after detection.

- **People Density Forecasting Program**: under `/forecasting` folder.

  This program is designed to forecast people density in certain future timestamps(every 20 minutes) based on past data, with help of our self-programmed forecasting algorithms. For example, if we would like to know the no. of people at 12pm next Friday, this program will analyze past fridays' data, i.e., no. of people at 12pm on previous Fridays, and then produce an accurate forecast.

- **Auto Send-Email Program**: under `/EmailTest` folder, please refer to [readme file for auto-email program](https://github.com/enor2017/HackUST/tree/main/EmailTest)

  This program is used to generate and send emails to customers automatically using a Python package. This allows us to send emails before peak time(normally lunchtime and dinnertime) and provides customers with useful information such as their order preference(based on his/her order history), and ask whether he/she would like to order via phone in advance. The emails also offer varities of coupons for customers, encouraging them to use Online Order/Canteen Monitor System that we've built.

## 3. Usage

Please refer to readme file for each program.

