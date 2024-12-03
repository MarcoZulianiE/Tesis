import { Sequelize, DataTypes } from "sequelize";
import { development } from "../config/config.js";

const sequelize = new Sequelize(development);

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  purchaseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tripId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Message;
