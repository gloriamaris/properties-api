# properties-api
In fulfillment of Onerent Coding Challenge.
Properties API built using Node, Postgres and GraphQL.

## Setup
Clone the repository into your local machine:

```
$ git clone https://github.com/gloriamaris/properties-api.git
```

Install the needed packages using `npm`:
```
$ npm install
```

### Setting up the database
NOTE: This app uses [ElephantSQL](https://www.elephantsql.com/) as an online Postgres database.
In the terminal, run the following command. This will set the `DATABASE_URL` as the database.

```
$ export DATABASE_URL=postgres://tnkrocqz:FnI3idVgLui4knKHDH4AHcVmDCJzP5IR@stampy.db.elephantsql.com:5432/tnkrocqz
```

Moreover, for better security measures, you can create a `.env` file in the root folder like so:
```
$ touch .env
$ sudo vim .env
```
Add the following in the file then save.
```
DATABASE_URL=postgres://tnkrocqz:FnI3idVgLui4knKHDH4AHcVmDCJzP5IR@stampy.db.elephantsql.com:5432/tnkrocqz
```

### Running migrations
NOTE: If you have Sequelize installed globally, you may remove `node_modules/.bin/` from the command.

Run the migration by executing the following command:
```
$ node_modules/.bin/sequelize db:migrate
```

### Running seeders
NOTE: If you have Sequelize installed globally, you may remove `node_modules/.bin/` from the command.
To fill the database with sample data, run the following command to execute the seeder files.
```
$ node_modules/.bin/sequelize db:seed:all
```

## Running the Application
In the project directory, run the following command:
```
$ npm start
```
This will run the application in development mode.

## Open GraphQL Playground
To open the playground and do some tests, open `http://localhost:5000/graphql` in your browser.
