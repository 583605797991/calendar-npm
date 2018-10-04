$(() => {

    $('#mini-calendar').fullCalendar({
        defaultView: 'month',
        height: 200,
        columnHeaderText: function (moment) {
          var day = moment.weekday();
            if (day === 0) {
                return 'S'
            } else if (day === 1) {
                return 'M'
            } else if (day === 2 || day === 4) {
                return 'T'
            } else if (day === 3) {
                return 'W'
            } else if (day === 5) {
                return 'F'
            } else {
                return 'S'
            }
        }
    });

    $("input[class=input]").on('keyup', function(event) {
      if (event.keyCode === 13) {
        var textVal = $(".input").val();
        `testeasdka sodkas dçasm kdnasç ndçaksn dçaksnd ${textVal}`
        $('.other').append(`
        <li>
          <div class="field">
            <input
              class="is-checkradio has-background-color is-link"
              id="exampleCheckboxBackgroundColorLink"
              type="checkbox"
              name="exampleCheckboxBackgroundColorLink"
              checked="checked">
            <label for="exampleCheckboxBackgroundColorLink">
              ${textVal}
            </label>
          </div>
        </li>`)
      }
    });

    $(".my-calendars").on('click', () => {
        $(".mine").toggle('fast')
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
