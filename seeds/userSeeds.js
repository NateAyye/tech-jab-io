const { User } = require('../models');

const users = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    avatar: 'http://localhost:5000/images/users/guy-1.jpg',
    password: 'johndoe123',
    username: 'johndoe',
  },
  {
    first_name: 'Jane',
    last_name: 'Smith',
    avatar: 'http://localhost:5000/images/users/lady-1.jpg',
    email: 'jane.smith@example.com',
    password: 'janesmith456',
  },
  {
    first_name: 'Alex',
    last_name: 'Johnson',
    avatar: 'http://localhost:5000/images/users/guy-2.jpg',
    email: 'alex.johnson@example.com',
    password: 'alexjohnson789',
  },
  {
    first_name: 'Emily',
    last_name: 'Davis',
    avatar: 'http://localhost:5000/images/users/lady-2.jpg',
    email: 'emily.davis@example.com',
    password: 'emilydavis321',
    username: 'emilyd',
  },
  {
    first_name: 'Michael',
    last_name: 'Brown',
    avatar: 'http://localhost:5000/images/users/guy-3.jpg',
    email: 'michael.brown@example.com',
    password: 'michaelbrown654',
  },
  {
    first_name: 'Sophia',
    last_name: 'Wilson',
    avatar: 'http://localhost:5000/images/users/lady-3.jpg',
    email: 'sophia.wilson@example.com',
    password: 'sophiawilson987',
    username: 'sophiaw',
  },
  {
    first_name: 'Daniel',
    email: 'daniel.taylor@example.com',
    password: 'danieltaylor123',
  },
  {
    first_name: 'Olivia',
    last_name: 'Anderson',
    email: 'olivia.anderson@example.com',
    password: 'oliviaanderson456',
    username: 'oliviaa',
  },
  {
    first_name: 'David',
    last_name: 'Martinez',
    email: 'david.martinez@example.com',
    password: 'davidmartinez789',
  },
  {
    first_name: 'Emma',
    email: 'emma.davis@example.com',
    password: 'emmadavis321',
  },
  {
    first_name: 'Christopher',
    last_name: 'Thompson',
    email: 'christopher.thompson@example.com',
    password: 'christopherthompson654',
  },
  {
    first_name: 'Isabella',
    last_name: 'Harris',
    email: 'isabella.harris@example.com',
    password: 'isabellaharris987',
    username: 'isabellah',
  },
  {
    first_name: 'Ethan',
    last_name: 'Wilson',
    email: 'ethan.wilson@example.com',
    password: 'ethanwilson123',
  },
  {
    first_name: 'Ava',
    email: 'ava.thomas@example.com',
    password: 'avathomas456',
    username: 'avat',
  },
  {
    first_name: 'James',
    email: 'james.johnson@example.com',
    password: 'jamesjohnson789',
  },
  {
    first_name: 'Mia',
    last_name: 'Jackson',
    email: 'miaj@example.com',
    password: 'miajackson321',
  },
];

const seedUsers = async () => await User.bulkCreate(users);

module.exports = seedUsers;
