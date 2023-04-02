// User controller
const User = require('../model/UserModel');
// const generateVoteId = require('../utils/generateVoteId');

const createUser = async (req, res) => {


    // voteId = generateVoteId();
    const user = new User(req.body.name, req.body.email, req.body.password);
    await user.save().then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      res.send('User added successfully');
    }).catch((error) => {
      console.error('Error adding user: ', error);
      res.status(500).send('Error adding user');
    });
};

module.exports = createUser;
