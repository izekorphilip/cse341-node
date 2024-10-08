 
const mongodb = require ('../data/database');
const ObjectId = require ('mongodb').ObjectId;

const getAll = async (req, res) =>{
    const result = await mongodb.getDatabase().db().collection('week_1').find();
    result.toArray().then((users) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};
const getSingle = async (req, res) =>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('week_1').find({_id: userId});
    result.toArray().then((users) =>{
        res.setHeader('Content-Type', 'application/json'); 
        res.status(200).json(users[0]);
    });
};

const createUser = async (req, res) => {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection('week_1').insertOne(user);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
  };
  
  const updateUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection('week_1').replaceOne({ _id: userId }, user);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  };
  
  const deleteUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('week_1').deleteOne({ _id: userId });
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
  };

module.exports = {
    getAll, 
    getSingle,
    createUser,
    updateUser,
    deleteUser
};