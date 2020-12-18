
exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table) => {
    //   table.integer("id").notnull().unique().primary()
      table.increments("id")
      table.text("name").notNull().unique()
      table.float("averageWeightOz").notNull()
      table.boolean("delicious").defaultTo(true)
      table.text("color")
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("fruits")
};
