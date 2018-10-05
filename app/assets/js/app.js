const addCalendarField = $("#add-calendar-field");
const calendar = $('.calendar');
const currentView = $('#current-view');


$('#mini-calendar').fullCalendar({
  defaultView: 'month',
  height: 200,
  dayClick: date => calendar.fullCalendar('gotoDate', date),
  columnHeaderText: (moment) => {
    const day = moment.weekday();
    let dayLetter = 'a';
    switch (day) {
      case 0:
        dayLetter = 'S';
        break;
      case 1:
        dayLetter = 'M';
        break;
      case 2:
      case 4:
        dayLetter = 'T';
        break;
      case 3:
        dayLetter = 'W';
        break;
      case 5:
        dayLetter = 'F';
        break;
      default:
        dayLetter = 'S';
    }
    return dayLetter;
  }
});

$('#mini-calendar .fc-button-next span').click(() => {
  const date = $("#mini-calendar").fullCalendar('getDate');
  date.setDate(date.getDate() + 1);
  console.log(date);
  $(".calendar").fullCalendar('gotoDate', date);
});

$('#mini-calendar .fc-button-prev span').click(() => {
  const date = $("#mini-calendar").fullCalendar('getDate');
  date.setDate(date.getDate() - 1);
  console.log(date);
  $(".calendar").fullCalendar('gotoDate', date);
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

calendar.fullCalendar({
  defaultView: 'agendaWeek',
  contentHeight: 888,
  selectable: true,
  editable: false,
  columnHeaderFormat: 'ddd D',

  select: (start, end) => {
    const events = [];
    const eventSource = { events };
    events.push({
      title: prompt('Type a name'),
      id: Math.floor((Math.random() * 10000) + 1),
      start,
      end,
      allDay: false,
      editable: true,
    });
    calendar.fullCalendar('addEventSource', eventSource);
  },

  eventClick: calEvent => {
    var input = prompt(`
    Event: ${calEvent.title}
    Event start: ${calEvent.start.format('MMMM Do YYYY, h:mm:ss a')}
    Event end: ${calEvent.end.format('MMMM Do YYYY, h:mm:ss a')}
    `, calEvent.title);
    calEvent.title = input;
    calendar.fullCalendar('updateEvent', calEvent);
    $(this).keyup((event) => {
      if (event.keyCode === 46) {
        calendar.fullCalendar('removeEvents', calEvent.id);
      }
    })
  },

  viewRender: (view) => {
    $('#view-date').html(view.title);
  }
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

$('#today').click(() => {
  calendar.fullCalendar('today');
});

$('#prev').click(() => {
  calendar.fullCalendar('prev');
});

$('#next').click(() => {
  calendar.fullCalendar('next');
});

$('.hamburger').click(() => {
  $('.left-menu').toggle("slide");
});

$('[data-toggle]').on('click', () => {
  $(`#${$('[data-toggle]').attr('data-toggle')}`).toggleClass('actived');
})

$('#day-view').on('click', () => {
  currentView.html($('#day-view').html())
  calendar.fullCalendar('changeView', 'agendaDay');
});

$('#week-view').on('click', () => {
  currentView.html($('#week-view').html())
  calendar.fullCalendar('changeView', 'agendaWeek');
});

$('#month-view').on('click', () => {
  currentView.html($('#month-view').html())
  calendar.fullCalendar('changeView', 'month');
});
