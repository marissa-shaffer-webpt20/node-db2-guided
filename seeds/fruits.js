
exports.seed = async function(knex) {
  await knex('fruits').truncate()
  await knex('fruits').insert([
      { name: "dragon fruit", averageWeightOz: 16.7, delicious: true, color: "red" },
      { name: "durian", averageWeightOz: 52.9, delicious: false, color: "yellow" },
      { name: "rambutan", averageWeightOz: 1.1, delicious: true, color: "pink" },
      { name: "lingonberry", averageWeightOz: 0.01, delicious: true, color: "red" },
      { name: "golden gooseberry", averageWeightOz: 0.02, delicious: false, color: "yellow" },
  ])
}
