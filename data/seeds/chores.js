exports.seed = function(knex, Promise) {
    return knex('chores').insert([
        {
            chores_id: 1,
            description: 'taking the trash out',
            assignedTo: chores_id,
            completed: false
        },

        {
            chores_id: 1,
            description: 'killing monsters',
            assignedTo: chores_id,
            completed: false
        },

        {
            chores_id: 2,
            description: 'doing the dishes',
            assignedTo: chores_id,
            completed: false
        },

        {
            chores_id: 2,
            description: 'slaying dragons',
            assignedTo: chores_id,
            completed: false
        },

        {
            chores_id: 3,
            description: 'cleaning the droids',
            assignedTo: chores_id,
            completed: false
        },

        {
            chores_id: 3,
            description: 'toppling the Empire',
            assignedTo: chores_id,
            completed: false
        },
    ]);
  };