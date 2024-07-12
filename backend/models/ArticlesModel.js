import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Articles = db.define(
  "articles",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },
    header1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    header2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    header3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content3: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content4: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Users.hasMany(Articles);
Articles.belongsTo(Users, { foreignKey: "userId" });

export default Articles;
