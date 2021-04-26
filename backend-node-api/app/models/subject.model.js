module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define("subjects", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      result: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
    }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    });
  
    return Subject;
};
//These columns will be generated automatically: 
//id, title, description, result, published, createdAt, updatedAt.