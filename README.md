# Tech Jab IO Blog

![GitHub](https://img.shields.io/github/license/NateAyye/tech-jab-io?label=License)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Description

Here We have an example of a Block site where users can login an post blogs about tech related topics. This is a full stack application that uses the following technologies:
  - [MySQL](https://www.mysql.com/)
  - [Express.js](https://expressjs.com/)
  - [Node.js](https://nodejs.org/en/)
  - [Sequelize](https://sequelize.org/)
  - [Handlebars](https://handlebarsjs.com/)
  - [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
  - [Tailwind CSS](https://tailwindcss.com/)

## Table of Contents

- [Tech Jab IO Blog](#tech-jab-io-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

## Installation

You can install this locally and run your very own version of it by running:

> Note: You will need to have [MySQL](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html) installed on your machine to run this.

```
git clone https://github.com/NateAyye/tech-jab-I0.git
cd tech-jab-I0
npm install
```

Now with the project installed and MySQL installed, Log into the MySQL CLI with the command `mysql -u root -p` and enter your password for the root user in your mysql DB. (You will only need to create a database for this project to work) Then you can run the following command to create the database:

```sql
source db/schema.sql
```

! You Should not need the MySQL Console any more after this point !

Create a `.env` file in the root of the project that has the same contents as the `.env.EXAMPLE` file. Then you can run the following command to seed the database with some data:

```shell
npm run seed
```

Now you can run the following command to start the server:

```shell
npm start
```

Or run it in watch mode so that it restarts the server after you make a change to a file with the following command:

```shell
npm run watch
```

## Usage

External Link to FULL Example Video [Here!](https://drive.google.com/file/d/1V9iJGM6mBPSJOR9FF0jurgZq_SSK4GYV/view?usp=sharing)

Home Page:
![Home Page](https://github.com/NateAyye/tech-jab-io/blob/main/public/images/home_page.png?raw=true)

Sign up :
![Sign Up](https://github.com/NateAyye/tech-jab-io/blob/main/public/images/Tags_API.png?raw=true)

Create a new post on Your Profile:
![Create Your First Post](https://github.com/NateAyye/tech-jab-io/blob/main/public/images/new_post.png?raw=true)

Comment on Other peoples posts:
![Comment on other peopls posts](https://github.com/NateAyye/tech-jab-io/blob/main/public/images/comment_post.png?raw=true)

## Contribution

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Basic Rules for contributing to this repo are gonna be held to standards with the [Contributor Convenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) Standards.

## Tests

No Test Setup For This Project Yet.

## License

Refer to the [MIT License](https://github.com/NateAyye/e-commerce-backend/blob/main/LICENSE) file within the root of the repository;

## Questions

Want to know me a little bit bette more? [NateAyye's Profile](https://github.com/NateAyye)

Want to get in contact with me?

- Send an email to <a href='mailto:nathanacuevas97@gmail.com'>nathanacuevas97@gmail.com</a>