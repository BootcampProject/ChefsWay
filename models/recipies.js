const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipie extends Model {}

Recipie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    table_meals: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    directions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comment_id: {
      type: DataTypes.INTEGER,
    },
      user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipie'
  }
);

module.exports = Recipie;