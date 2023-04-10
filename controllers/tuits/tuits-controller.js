import * as tuitsDao from "./tuits-dao.js"

//import posts from "./tuits.js";
//let tuits = posts;

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.liked = true;
  newTuit.image = "http://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png";
  const insertedTuit = await tuitsDao.createTuit(newTuit);  //
  res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.sendStatus(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}