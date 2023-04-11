module.exports = (sequelize, Sequelize) => {
  const Materi = sequelize.define('materi', {
    materi_name: {
      type: Sequelize.STRING,
    }
  });
  return Materi
}