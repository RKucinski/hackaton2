/* eslint-disable */

const getHabbits = (days) => {
  console.log(days);
  let habbits = [];
  const workingDay = [
    {
      begin: '06:00',
      end: '09:00',
    },
    {
      begin: '18:00',
      end: '23:59',
    },
  ]

  const notWorkingDay = [
    {
      begin: '08:00',
      end: '23:59',
    },
  ]

  let weekDays = [
    {
      day: 'Monday',
      busy: true
    },
    {
      day: 'Tuesday',
      busy: true
    },
    {
      day: 'Wednesday',
      busy: true
    },
    {
      day: 'Thursday',
      busy: true
    },
    {
      day: 'Friday',
      busy: true
    },
    {
      day: 'Saturday',
      busy: false
    },
    {
      day: 'Sunday',
      busy: false
    },
  ];

  if(days) {
    days.map(day => {
      for(let i=0; i<6; i++) {
        if(day === weekDays[i].day) weekDays[i].busy = false;
      }
    })
  }
  
  weekDays.map(day => habbits.push(
    {
      day: day.day,
      plages: day.busy ? workingDay : notWorkingDay,
    },
  ));

  return habbits;
};

export default getHabbits;
