$(() => {

$('#calendar').fullCalendar({
    defaultView: 'month',
    height: 200,
     columnHeaderText: function(moment) {
        if (moment.weekday() === 0) {
            return 'S'
        } else if (moment.weekday() === 1) {
            return 'M'
        } else if (moment.weekday() === 2 || moment.weekday() === 4) {
            return 'T'
        } else if (moment.weekday() === 3) {
            return 'W'
        } else if (moment.weekday() === 5) {
            return 'F'
        } else {
            return 'S'
        }
    } 
  });

  $(".my-calendars").on('click', () => {
      $(".mine").toggle('fast')
  })

  $(".other-calendars").on('click', () => {
    $(".other").toggle('fast')
})
});