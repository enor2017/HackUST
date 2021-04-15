# 4-1.txt
# 12:20  80
# 12:40  78
from random import randint


def generate_holiday():
    # {week_num}-{day}.txt
    for week in range(0, 6):
        for i in range(1, 8):
            file = open("./holiday-data/" + str(week) + "-" + str(i) + ".txt", "w")
            accumulated_day = week * 7 + i  # how many days has passed since Mar 1.
            month = 3 if accumulated_day <= 31 else 4
            month_str = "March" if month == 3 else "April"
            date = accumulated_day - (month - 3) * 31
            file.write(month_str + " " + str(date) + "\n")

            result = {}
            # generate basic
            for hour in range(8, 20):
                for minute in range(0, 60, 20):
                    base_number = randint(12, 19)
                    result[(hour, minute)] = base_number
            # 8AM
            for minute in range(20, 60, 20):
                extra_number = randint(4, 6)
                result[(8, minute)] += int(2 * extra_number)
            # 9AM
            for minute in range(0, 60, 20):
                extra_number = randint(5, 7)
                result[(9, minute)] += int(2 * extra_number)
            # 11AM
            for minute in range(0, 60, 20):
                extra_number = randint(minute/10, minute/5)
                result[(11, minute)] += int(2.8 * extra_number)
            # 12AM~2PM
            for hour in range(12, 14):
                for minute in range(0, 60, 20):
                    extra_number = randint(20, 50 - hour * 2)
                    result[(hour, minute)] += int(2.5 * extra_number)
            # 4PM~5PM
            for minute in range(0, 60, 20):
                extra_number = randint(minute/10 + 1, minute/5 + 2)
                result[(16, minute)] += int(1.9 * extra_number)
            # 5PM~6PM
            for hour in range(17, 19):
                for minute in range(0, 60, 20):
                    extra_number = randint(18, 57 - hour * 2)
                    result[(hour, minute)] += int(2.1 * extra_number)
            # 7PM
            for minute in range(0, 60, 20):
                extra_number = randint(12 - minute/5, 16 - minute/5)
                result[(19, minute)] += int(1.8 * extra_number)

            # output data
            for j in result.keys():
                file.write(str(j[0]) + ":" + str(j[1]) + " " + str(result[j]) + "\n")


if __name__ == '__main__':
    generate_holiday()


