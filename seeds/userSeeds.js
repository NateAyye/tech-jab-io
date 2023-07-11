const { User } = require("../models");

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "johndoe123",
    username: "johndoe"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "janesmith456",
    username: "janesmith"
  },
  {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    password: "alexjohnson789"
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    password: "emilydavis321",
    username: "emilyd"
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    password: "michaelbrown654"
  },
  {
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    password: "sophiawilson987",
    username: "sophiaw"
  },
  {
    name: "Daniel Taylor",
    email: "daniel.taylor@example.com",
    password: "danieltaylor123"
  },
  {
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    password: "oliviaanderson456",
    username: "oliviaa"
  },
  {
    name: "David Martinez",
    email: "david.martinez@example.com",
    password: "davidmartinez789"
  },
  {
    name: "Emma Davis",
    email: "emma.davis@example.com",
    password: "emmadavis321",
    username: "emmad"
  },
  {
    name: "Christopher Thompson",
    email: "christopher.thompson@example.com",
    password: "christopherthompson654"
  },
  {
    name: "Isabella Harris",
    email: "isabella.harris@example.com",
    password: "isabellaharris987",
    username: "isabellah"
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
    password: "ethanwilson123"
  },
  {
    name: "Ava Thomas",
    email: "ava.thomas@example.com",
    password: "avathomas456",
    username: "avat"
  },
  {
    name: "James Johnson",
    email: "james.johnson@example.com",
    password: "jamesjohnson789"
  }
];

const seedUsers = async () => await User.bulkCreate(users);

module.exports = seedUsers;