# Node/Express/Sequelize/Ajax CRUD Blog Example

## Using environment variables to customize database connection info locally (ideal when working on a group project using Sequelize)

The steps below will talk you through a number of customizations to allow repository collaborators to use unique Sequelize connection settings without causing merge conflicts within the `config/config.json` file with every pull or merge. 

1. Install the `dotenv` npm package in the directory that contains your server `package.json`.
2. Add the following line to the top of your server file: `require('dotenv').require()`. *Note: this line must be above the import of your Sequelize models directory).*