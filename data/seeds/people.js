exports.seed = function(knex, Promise) {
    return knex('people').insert([
        {
            id: 1,
            name: 'Madison McKown'
        }, 

        {
            id: 2,
            name: 'Skye Malmberg'
        }, 

        {
            id: 3,
            name: 'Luke Skywalker'
        }, 
    ]);
  };