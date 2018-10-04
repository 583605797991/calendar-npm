$(() => {

<<<<<<< HEAD
  $('#mini-calendar').fullCalendar({
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

    $("input[class=input]").on('keyup', function(event) {
      if (event.keyCode === 13) {
        console.log('pressionou enter');
=======
    $('#mini-calendar').fullCalendar({
        defaultView: 'month',
        height: 200,
        columnHeaderText: function (moment) {
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
>>>>>>> master
        }
    });

    $(".my-calendars").on('click', () => {
        $(".mine").toggle('fast')
<<<<<<< HEAD
    })

    $(".other-calendars").on('click', () => {
      $(".other").toggle('fast')
  });

  $(() => {
    $('#calendar').fullCalendar({
        defaultView: 'agendaWeek',
        contentHeight: 888
    })
  }) ;
});
=======
    })

    $(".other-calendars").on('click', () => {
        $(".other").toggle('fast')
    })

    $(() => {

        $('.calendar').fullCalendar({
            defaultView: 'agendaWeek',
            contentHeight: 888
        })

    });

});
>>>>>>> master
