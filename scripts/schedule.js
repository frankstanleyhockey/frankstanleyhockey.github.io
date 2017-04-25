var cal = "";
    $.get("../data/schedule.ics", function(data, status)
    {
        var jcal, from;
        try 
        {
            jcal = ICAL.parse(data);
        } 
        catch (jsonerr) 
        {
        } 

        ical = ICAL.stringify(jcal);
        var component = new ICAL.Component(jcal);
        var vevents = component.getAllSubcomponents("vevent");
        for(i=0; i<vevents.length; i++)
        {
            var summary = vevents[i].getFirstPropertyValue("summary");
            var location = vevents[i].getFirstPropertyValue("location");
            var rink = location.substr(0, location.indexOf(','));
            var start = vevents[i].getFirstPropertyValue("dtstart");

            $("#schedulepanels").append(
                "<div class=\"col-md-2\">\
                <div class=\"panel panel-default\">\
                    <div class=\"panel-heading\">\
                    <h3 class=\"panel-title\">" + FormatTime(start._time) + "</h3>\
                    </div>\
                    <div class=\"panel-body\">" + summary  + "</div>\
                    <div class=\"panel-footer\">" + rink + "</div>\
                </div>\
                </div>");
        } 
    });

function FormatTime(_time)
{
    var hours = _time.hour;
    var minutes = _time.minute;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return _time.month + "/" + _time.day + "/" + _time.year + "  " + strTime;
}