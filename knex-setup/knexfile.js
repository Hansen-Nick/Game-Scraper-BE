// Update with your config settings.

module.exports = {
  development: {
    client: "postgres",
    connection: "postgres://127.0.0.1/gamescraper",
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
