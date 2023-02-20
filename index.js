const addDays = require("date-fns/addDays");
const days = (d) => {
  const date = addDays(new Date(2020, 7, 22), d);
  console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
};

module.export = days;
