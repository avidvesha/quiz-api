const db = require('../models');
const quiz = require('../models/quiz');
const Quiz = db.quizzes;


//ADD DATA to TABLE
exports.create = async(req,res) => {

  try {
    const data = await Quiz.create(req.body)
    res.json({
      message: 'quiz created successfully',
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
    const quizzes = await Quiz.findAll()
    res.json({
      message: 'Quizzes retrieved successfully',
      data: quizzes
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
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
    quiz.update(req.body, {
      where: {id}
    })
    res.json({
      message: 'Quizzes updated successfully',
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while retrieving quiz',
      data: null
    });
  }
};

//DELETE DATA TABLE by ID
exports.delete = async(req, res) => {
  const id = req.params.id
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })

    quiz.destroy()
    
    res.json({
      message: `Data dengan id ${id} berhasil dihapus`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while retrieving quiz',
      data: null
    });
  }
};

//SHOW DATA TABLE by ID
exports.findOne = async(req, res) => {
  const id = req.params.id
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })    
    res.json({
      message: `Quizzes retrieved successfully with id= ${id}`,
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while retrieving quiz',
      data: null
    });
  }
};

//SHOW DATA TABLE by CATEGORY
exports.getByCategoryId = async (req, res) => {
  const id = req.params.id
  const quizzes = await Quiz.findAll({
    where: {
      categoryId: id
    }
  })
  res.json({
    message:`Quizzes retrieved successfully with categoryId= ${id}`,
    data: quizzes,
  });
};

//SHOW DATA TABLE by LEVEL
exports.getByLevelId = async (req, res) => {
  const id = req.params.id
  const quizzes = await Quiz.findAll({
    where: {
      levelId: id
    }
  })
  res.json({
    message:`Quizzes retrieved successfully with levelId= ${id}`,
    data: quizzes,
  });
};