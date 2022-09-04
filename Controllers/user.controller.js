

let users = require('../Data.json');


module.exports.getAllUsers = (req, res, next) => {
  const { limit, page } = req.query;
  res.json(users.slice(0, limit));
};

module.exports.randomUsers = (req, res)=>{
  const random = users[Math.floor(Math.random() * users.length)];

  res.send(random);
}

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