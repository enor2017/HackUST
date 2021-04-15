import plotly.graph_objects as go

labels = ['Hot Dog and French Fries',
          'Dumplings with Handmade Udon & 7-up',
          'Roasted Duck with Rice',
          'BBQ Pork with Rice & Iced Coffee',
          'Thick Toast with Butter and Jam']
values = [1, 3, 2, 2, 1]

fig = go.Figure(data = [
    go.Pie(labels = labels, values = values)
])
fig.show()
