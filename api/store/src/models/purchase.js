import { Sequelize, DataTypes } from "sequelize";
import { development } from "../config/config.js";

const sequelize = new Sequelize(development);

const Purchase = sequelize.define("Purchase", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  items: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  user: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Purchase;
