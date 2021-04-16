import yagmail

sender = "lg1_monitor@163.com"
# if you want to delete this password, plz make a backup in advance
password = "LIEGSSPZRSEPEUDH"

# receivers
receiver = {"jliudq@connect.ust.hk": "Jianmeng",
            "zmengaf@connect.ust.hk": "Zeyuan",
            "yzhangkp@connect.ust.hk": "Yuyao",
            "yyeaw@connect.ust.hk": "Yiman",
            "czang@connect.ust.hk": "Chengjun"
            }
receiver_test = {"jliudq@connect.ust.hk": "Jianmeng"}

# register
yagmail.register(sender, password)

# send email via SMTP
yag = yagmail.SMTP(user = sender, host = 'smtp.163.com')


# set content
# contents = ['This is a test email sent by Python']

def contents_html(name):
    return [
        'Dear ' + name + ',\n\n',
        'Lunch time is approaching!  :D\n',
        'According to your order record, it seems that you love to order Dumplings with Handmade Udon & 7-up!\n',
        'By the way, we have provided you with lots of coupons, as long as you order via phone.\n',
        'Just scan the QR code below and order your lunch! >.< \n',
        'For more info about the current situation in the canteen please visit our website. '
        '<a href="http://mon1-j4f.site/">http://mon1-j4f.site/</a> or '
        '<a href="http://54.89.142.90/">54.89.142.90</a> \n\n',
        'Coupons for order via phone:\n',
        yagmail.inline('./coupon.jpg'),
        '\nYour Order History:\n',
        yagmail.inline('./order-history.png'),
        '\nOrder by Phone? Scan the code!\n',
        yagmail.inline('./qrcode.JPG'),
        '\nEnjoy!\nLG1-Monitor, Just4Fun Team'
    ]


# send email
# yag.send(receiver, 'Test Title', contents = contents)

for addr in receiver.keys():
    yag.send(to = addr, subject = 'Lunch Time at LG1!',
             contents = contents_html(receiver[addr]))

