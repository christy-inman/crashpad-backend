
exports.up = function(knex) {
  return knex.schema.createTable('users', (user) => {
      user.increments('id')
      user.string('name')
      user.string('email')
      user.string('username')
      user.string('password')
      user.text('profile_pic')
      user.text('travel_pic')
      user.string('city')
      user.string('state')
      user.string('phone_number')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
