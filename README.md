# Node/Express/Sequelize/Ajax CRUD Blog Example

## Initial setup:

Note: To run this project, start by running the first two lines of the `db/schema.sql` file in your SQL editor, to set up your database. Then create a new file called `.env` at the root of the project, and populate it with the following key/value pairs, customized per your database connection settings:

```
DB_USERNAME=usernamehere
DB_PASSWORD=passwordhere
DB_DATABASE=databasehere
DB_HOST=hosthere
DB_PORT=portnumberhere
DB_FORCE=true
```

Before connecting, run an `npm i` to install application dependencies.

-----

## Using environment variables to customize database connection info locally (ideal when working on a group project using Sequelize):

The steps below will talk you through the steps necessary for repository collaborators to use unique Sequelize connection settings without causing  merge conflicts within `config/config.json`. 

1. Install the `dotenv` npm package in the directory that contains your server `package.json`.

2. Add the following line to the top of your server file: `require('dotenv').require()`. *Note: this line must be above the import of your Sequelize models directory).*

3. Within your `config` folder, create a new file named `config.js`. In this file, `module.export` the Sequelize configuration object from within your current `config/config.json`. Replace your custom database connection settings (username, password, database, port, etc) as follows, taking note of the specified values:

```javascript
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"  
  }
}
```

4. Now edit line 8 of your Sequelize "brain" file, `models/index.js` to point to your new `config.js` file instead of the current `config.json` file. At this juncture you can now delete `config/config.json`.

5. At the same level as your server file and server-side `package.json`, create a new file named `.env`. Within this file, you'll supply key-value pairs to fulfill each of the environment variables indicated within your `config/config.json`. Note that strings should not be wrapped in quotes.

```
DB_USERNAME=usernamehere
DB_PASSWORD=passwordhere
DB_DATABASE=databasehere
DB_HOST=hosthere
DB_PORT=portnumberhere
```

6. Add a new entry to your `.gitignore` file, to prevent the `.env` file from being checked into source control: 
```
.env
```

7. Restart your server to verify that Sequelize is able to sync with the database/tables using this new setup. 

8. Add/commit/push your code. Make sure that any new team members set up their `.env` accordingly when setting up your project to run locally.

-----

## Deployment notes:

This setup means that no database connection information is checked into source control **or** deployed to a production server, like Heroku. For this reason, the necessary production values will need to be specified on the production server using whatever method that hosting service requires.

For example, [this article](https://devcenter.heroku.com/articles/config-vars) explains how to set production-specific environment variables when deploying to Heroku.