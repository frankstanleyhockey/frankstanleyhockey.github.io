var mykey = 'AIzaSyApw3DnQ9ouIOunj55HvFBzABcGBMlar_Y';
var calendarid = 'd7vvd9vnv4eui24g963pvtiqcs@group.calendar.google.com';
var googleCalendar = $.grabCalendar({
                                maxEvents: 12,
                                upcoming: true
                            });
var events = '';
for (var i = 0; i < googleCalendar.items.length; i++) {

    var summary = googleCalendar.items[i].summary;
    var start;
    if(googleCalendar.items[i].start.dateTime != undefined) {
      start = formatDateTime(new Date(googleCalendar.items[i].start.dateTime));
    }
    else if(googleCalendar.items[i].start.date != undefined) {
      start = formatDate(new Date(googleCalendar.items[i].start.date));
    }

    $("#schedulepanels").append(
    "<div class=\"col-md-2\">\
      <div class=\"panel panel-default\">\
        <div class=\"panel-heading\">\
          <h3 class=\"panel-title\">" + start + "</h3>\
        </div>\
        <div class=\"panel-body\">" + summary + "</div>\
      </div>\
    </div>");
  }

function formatDateTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

function formatDate(date) {
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear()
}
