/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('news', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'news'
  });

  Model.associate = function() {

  }

  return Model;
};
