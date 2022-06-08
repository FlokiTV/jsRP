module.exports = {
  vehicles: {
    density: 1,
    random: 1,
    parked: 1,
  },
  peds: {
    density: 1,
    random: [1, 1],
  },
  boats: true,
  trucks: true,
  coops: {
    create_random: true,
    create_on_scenario: true,
    create_out_scenario: true,
  },
  no_wanted: false, // disable wanted for player
};
