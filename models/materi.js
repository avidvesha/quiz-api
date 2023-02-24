module.exports = (sequelize, Sequelize) => {
  const Materi = sequelize.define('materi', {
    materi: {
      type: Sequelize.STRING,
    },
    categoryId: {
      type: Sequelize.INTEGER,
    },
    subcatId: {
      type: Sequelize.INTEGER,
    },
    desc: {
      type: Sequelize.TEXT,
    },

  });
  return Materi
}