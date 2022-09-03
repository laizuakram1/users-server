
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Hitlar" },
    { id: 3, name: "Kim" },
  ];


  module.exports.getAllUsers = (req, res, next) => {
    // const { limit, page } = req.query;
    // console.log(limit, page);
    res.json(users);
  };