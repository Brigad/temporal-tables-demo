module.exports = {
  up(queryInterface, name, logger = console) {
    return queryInterface.sequelize
      .query(
        // Add the sys_period column to the table
        `ALTER TABLE ${name}
    ADD COLUMN sys_period tstzrange NOT NULL DEFAULT tstzrange(current_timestamp, null);`
      )
      .then(() =>
        // Create history table
        queryInterface.sequelize.query(
          `CREATE TABLE ${name}_history (LIKE ${name});`
        )
      )
      .then(() =>
        // create the trigger to populate the history table
        queryInterface.sequelize.query(`CREATE TRIGGER versioning_trigger
      BEFORE INSERT OR UPDATE OR DELETE ON ${name}
      FOR EACH ROW EXECUTE PROCEDURE versioning(
        'sys_period', '${name}_history', true
      );`)
      )
      .catch(err => logger.error(err));
  },
  down(queryInterface, name, logger = console) {
    return queryInterface.sequelize
      .query(
        `ALTER TABLE ${name}
        DROP COLUMN sys_period;`
      )
      .then(() => queryInterface.sequelize.query(`DROP TABLE ${name}_history;`))
      .then(() =>
        queryInterface.sequelize.query(
          `DROP TRIGGER versioning_trigger ON ${name};`
        )
      )
      .catch(err => logger.error(err));
  }
};
