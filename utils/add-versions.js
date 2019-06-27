const fs =require('fs');

// Just wraps the SQL script into a module
module.exports = fs.readFileSync(
  require.resolve('../temporal_tables/versioning_function.sql'),
  'utf8',
);
