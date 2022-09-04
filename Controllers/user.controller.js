
let users = [
  {
    "id": 1,
    "name": "laizu",
    "gender": "male",
    "contact": "laizu@gmail.com",
    "address": "bangladesh",
    "photoUrl": "https://i.ibb.co/DbdjNHm/main.jpg"
  },
  {
    "id": 2,
    "name": "John",
    "gender": "male",
    "contact": "john@gmail.com",
    "address": "USA",
    "photoUrl": "https://i.ibb.co/DbdjNHm/main.jpg"
  },
  {
    "id": 3,
    "name": "Kim",
    "gender": "male",
    "contact": "kim@gmail.com",
    "address": "korea",
    "photoUrl": "https://i.ibb.co/DbdjNHm/main.jpg"
  },

];



module.exports.getAllUsers = (req, res, next) => {
  const { limit, page } = req.query;
  res.json(users.slice(0, limit));
};

module.exports.saveAUsers = (req, res, next) => {
  const data = req.body;
    users.push(data);

    res.send(users);
  

};

module.exports.updateAUser = (req, res) => {
  const { id } = req.params;

  const updateData = users.find(user => user.id === Number(id));
  updateData.id = id;
  updateData.address = req.body.address;

  res.send(updateData);

}

module.exports.deleteAUser = (req, res) => {
  const { id } = req.params;

  const result = users.filter(user => user.id !== Number(id));
  res.send(result);

}