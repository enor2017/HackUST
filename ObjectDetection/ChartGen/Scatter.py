import plotly.graph_objects as go

file = open("12-20.txt")
all_data = file.readlines()
dates = []
people_1220 = []
for each_data in all_data:
    dates.append(each_data[:each_data.index("-")])
    people_1220.append(int(each_data[each_data.index("-") + 1:-1]))

fig = go.Figure(data = [
    go.Scatter(name = 'Apr 16 12:20', x = dates, y = people_1220)
])

fig.update_layout(
    autosize=False,
    width=800,
    height=500
)

fig.show()
