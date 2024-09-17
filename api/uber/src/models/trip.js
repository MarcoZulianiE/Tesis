import { Sequelize, DataTypes } from "sequelize";
import { development } from "../config/config.js";

const sequelize = new Sequelize(development);

const Trip = sequelize.define("Trip", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purchaseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Trip;
