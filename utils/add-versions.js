const fs =require('fs');

module.exports = fs.readFileSync(
  require.resolve('../temporal_tables/versioning_function.sql'),
  'utf8',
);
