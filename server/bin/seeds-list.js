const mongoose = require('mongoose');
const List = require('../api/list/list.model');
const Cards = require('../api/card/card.model')

mongoose.connect("mongodb://localhost/lab-trello-clone");

const list = [
  {
    title: "List1",
    position: 0
    },
  {
    title: "List2",
    position: 0
  },
];

List.create(list, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${list.length} lists`)
  mongoose.disconnect();
});
