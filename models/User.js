const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

const RANDOM_NAMES = [
  'quokka',
  'axolotl',
  'fennec',
  'lemur',
  'serval',
  'coati',
  'kinkajou',
  'okapi',
  'marmoset',
  'capybara',
  'tapir',
  'wallaby',
  'gibbon',
  'ocelot',
  'meerkat',
  'macaque',
  'tarsier',
  'sloth',
  'anteater',
  'gazelle',
  'giraffe',
  'pangolin',
  'platypus',
  'armadillo',
  'quoll',
  'cassowary',
  'kouprey',
  'numbat',
  'wombat',
  'yak',
  'okapi',
  'civet',
  'coqui',
  'nudibranch',
  'nandu',
  'guppy',
  'hoopoe',
  'dingo',
  'iguana',
  'pika',
  'bongo',
  'artist',
  'musician',
  'writer',
  'chef',
  'dancer',
  'athlete',
  'doctor',
  'teacher',
  'scientist',
  'engineer',
  'designer',
  'photographer',
  'actor',
  'singer',
  'model',
  'pilot',
  'lawyer',
  'journalist',
  'entrepreneur',
  'student',
  'nurse',
  'veterinarian',
  'architect',
  'baker',
  'barista',
  'carpenter',
  'chef',
  'coach',
  'dentist',
  'farmer',
  'firefighter',
  'hairdresser',
  'mechanic',
  'painter',
  'plumber',
  'politician',
  'waiter',
  'waitress',
  'scientist',
  'soldier',
  'surgeon',
  'writer',
  'yoga instructor',
];

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Define table columns and configuration
User.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: () => {
        return `${
          RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)]
        }-${Math.floor(Math.random() * 10000)}`;
      },
    },
    // Define a Avatar column
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: () => {
        return `http://localhost:5000/images/users/user.svg`;
      },
    },
    // Define a name column
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    // Define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // Define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
        notEmpty: true,
      },
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeBulkCreate(newUserData) {
        for (const user of newUserData) {
          user.password = await bcrypt.hash(user.password, 10);
        }
        return newUserData;
      },
    },
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  },
);

module.exports = User;
