
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'mary', password: '1234'},
        {username: 'sam', password: '1234'},
        {username: 'bob', password: '1234'}
      ]);
    });
};
