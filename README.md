Web authZ project:

Steps:

1) Set dependencies, (cors bcryptjs helmet knex sqlite3 express)
2) Create knexfile and database configuration, (export knex(knexConfig.development))
3) set up index.js (server.listen(port, () => console.log(`running on port ${port}`)))
4) set up knex migration to create database