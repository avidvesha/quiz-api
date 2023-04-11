const db = require('../models');
const materi = require('../models/materi');
const Materi = db.materis;


//ADD DATA to TABLE
exports.create = async(req,res) => {

  try {
    const data = await Materi.create(req.body)
    res.json({
      message: 'materi created successfully',
      data: data
    })
  } catch (error) {
    res.status(500).json({
        message: error.message,
        data: null
    });
  }
};

//SHOW ALL DATA 
exports.getAll = async(req, res) => {
  try {
    const materis = await Materi.findAll()
    res.json({
      message: 'Materi retrieved successfully',
      data: materis
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null
    });
  }
};

//UPDATE DATA TABLE by ID
exports.update = async(req, res) => {
  const id = req.params.id
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true })
    materi.update(req.body, {
      where: {id}
    })
    res.json({
      message: 'materi updated successfully',
      data: materi
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while retrieving materi',
      data: null
    });
  }
};

//DELETE DATA TABLE by ID
exports.delete = async(req, res) => {
  const id = req.params.id
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true })

    materi.destroy()
    
    res.json({
      message: `Data dengan id ${id} berhasil dihapus`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while retrieving materi',
      data: null
    });
  }
};

//SHOW DATA TABLE by ID
exports.findOne = async(req, res) => {
  const id = req.params.id
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true })    
    res.json({
      message: `materi retrieved successfully with id= ${id}`,
      data: materi
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while retrieving materi',
      data: null
    });
  }
};