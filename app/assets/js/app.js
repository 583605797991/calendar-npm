const addCalendarField = $("#add-calendar-field");

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

addCalendarField.on('keyup', (event) => {
  if (event.keyCode === 13) {
    addCalendar(addCalendarField.val());
    addCalendarField.val("");
  }
});

$("#add-calendar").on('click', () => {
  addCalendar(addCalendarField.val());
  addCalendarField.val("");
});

$(".my-calendars").on('click', () => {
  $(".mine").toggle('fast')
  $(".my-calendars i").toggleClass("fas fa-angle-down")
  $(".my-calendars i").toggleClass("fas fa-angle-up")
})

$(".other-calendars").on('click', () => {
  $(".other").toggle('fast')
  $(".other-calendars i").toggleClass("fas fa-angle-down")
  $(".other-calendars i").toggleClass("fas fa-angle-up")
})

$('.calendar').fullCalendar({
  defaultView: 'agendaWeek',
  contentHeight: 888,
  selectable: true,
  editable: false,

  select: (start, end) => {
    let events = [];
    const eventSource = { events };
    events.push({
      title: prompt('Type a name'),
      start,
      end,
      allDay: false,
      editable: true,
    });
    $('.calendar').fullCalendar('addEventSource', eventSource);
  },

});

const addCalendar = (calendar) => {
  $('.other').append(`
        <li>
          <div class="field">
            <input
              class="is-checkradio has-background-color is-link"
              id="${calendar}-radio"
              type="checkbox"
              name="${calendar}-radio"
              checked="checked">
            <label for="${calendar}-radio">
              ${calendar}
            </label>
          </div>
        </li>`);
}

$('#today').click(function () {
  $('.calendar').fullCalendar('today');
});

$('#prev').click(function () {
  $('.calendar').fullCalendar('prev');
});

$('#next').click(function () {
  $('.calendar').fullCalendar('next');
});

$('.hamburger').click(function () {
  $('.left-menu').toggle("slide");
});
