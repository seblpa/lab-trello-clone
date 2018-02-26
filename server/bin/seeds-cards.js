const mongoose = require("mongoose");
const { dbURL } = require("../config");
const Card = require("../api/card/card.model");


mongoose.connect(dbURL).then(() => console.log("Creando seed!"));

const cards = [
    {
        title: "Lorem Ipsum",
        description: "Aqui va un lorem ipsum to flama y to guapo",
        dueDate: new Date,
        position:"0",
        list:"5a93e16fab2fb5554f980b79"
    },
    {
        title: "Chiquito Ipsum",
        description: "Aqui va un lorem ipsum to flama y to guapo",
        dueDate: new Date,
        position:"1",
        list:"5a93e16fab2fb5554f980b79"
    },
    {
        title: "Quijote Ipsum",
        description: "Aqui va un lorem ipsum to flama y to guapo",
        dueDate: new Date,
        position:"0",
        list:"5a93e16fab2fb5554f980b78"
    },
    {
        title: "Victor Ipsum",
        description: "Aqui va un lorem ipsum to flama y to guapo",
        dueDate: new Date,
        position:"1",
        list:"5a93e16fab2fb5554f980b78"
    }
]

// Card.collection.drop();

const promiseArray = cards.map(card => {
  let newCards = new Card(card);
  return newCards.save();
});
//mongoose.disconnect();
Promise.all(promiseArray)
  .then(cardsArray=> {
    console.log(cardsArray.length)
    mongoose.disconnect()
});