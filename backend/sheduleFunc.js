var cron = require('node-cron');

const sheduleFunc = () => {
  [
    {num: 1, schedule: '*/10 * * * * *'},
    {num: 2, schedule: '*/2 * * * * *'},
    {num: 3, schedule: '*/5 * * * * *'},
  ].forEach((num)=> {
    cron.schedule(num.schedule, () => {
      console.log(`Таска раз в определенное время: ${num.num} номер`);
    });
  })
  // cron.schedule('*/1 * * * *', () => {
  //   console.log(`1`);
  // });
  // cron.schedule('* * * * * *', () => {
  //   console.log(`running a task every minute, ${num}`);
  // });
}


module.exports = {sheduleFunc}
