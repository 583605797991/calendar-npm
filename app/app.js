$(() => {

$('#calendar').fullCalendar({
    defaultView: 'month',
    height: 200,
     columnHeaderText: function(moment) {
        if (moment.weekday() === 0) {
            return 'S'
        }

        return 'M'
    } 
  });
});