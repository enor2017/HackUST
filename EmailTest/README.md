# Auto Send-Email Program

## 1. Introduction

In order to send emails to customers before peak time(normally before lunch and dinner), we adopted an open source python package `yagmail` ([goto this website](https://github.com/kootenpv/yagmail) for more details), which enables us to customize email contents, receivers, and automatically send emails using `Python`.

## 2. Setup

- Install packages listed in `requirements.txt`, or just execute:

  ```
  pip install yagmail keyring
  ```

- All codes are inside `main.py`, those variables and parameters inside are really straightforward. Simply change `receiver` and `contents`, you will be able to customize your emails and send as well!

## 3. Enjoy!