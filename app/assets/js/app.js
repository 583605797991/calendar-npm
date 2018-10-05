const addCalendarField = $("#add-calendar-field");
const calendar = $('.calendar');

$('#mini-calendar').fullCalendar({
  defaultView: 'month',
  height: 200,
  dayClick: date => calendar.fullCalendar( 'gotoDate', date ),
  columnHeaderText: (moment) => {
    let day = moment.weekday();
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

$('#mini-calendar .fc-button-next span').click(() => {
  let date = $("#mini-calendar").fullCalendar('getDate');
  date.setDate(date.getDate() + 1);
  console.log(date);
  $(".calendar").fullCalendar('gotoDate', date);
});

$('#mini-calendar .fc-button-prev span').click(() => {
  let date = $("#mini-calendar").fullCalendar('getDate');
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
    calendar.fullCalendar('addEventSource', eventSource);
  },

  eventClick: (calEvent, jsEvent, view) => {
    alert('Event: ' + calEvent.title);
    alert('Event start: ' + calEvent.start.format('MMMM Do YYYY, h:mm:ss a'));
    alert('Event end: ' + calEvent.end.format('MMMM Do YYYY, h:mm:ss a'));
    $(this).css('border-color', 'red');

  },

  viewRender: (view) => {
    let title = view.title;
    $('#view-date').html(title);
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
  calendar.fullCalendar('changeView', 'agendaDay');
});

$('#week-view').on('click', () => {
  calendar.fullCalendar('changeView', 'agendaWeek');
});

$('#month-view').on('click', () => {
  calendar.fullCalendar('changeView', 'month');
});
