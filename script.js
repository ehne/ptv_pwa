// milliseconds to minutes function
function millisToMinutes(millis) {
  var minutes = Math.floor(millis / 60000);
  return minutes;
}

// on document load
Zepto(function($){
    
    // the url of the ptv api
    var url = "https://timetableapi.ptv.vic.gov.au/v3/departures/route_type/0/stop/1152?platform_numbers=2&include_cancelled=true&expand=disruption&devid=3001117&signature=CEBF7AED8AE6BEBCC8C5E0F5B28A38AB8A919EC4";
    
    $.getJSON(url, function(data){
        
        // check to see if interuptions
        
        // alert
        //console.log(data);
        
        
        //console.log(data.departures[0].scheduled_departure_utc)
        
        
        
        // save scheduled time into var
        var sche = new Date(data.departures[0].scheduled_departure_utc);
        
        // save estimated time into var
        var est = new Date(data.departures[0].estimated_departure_utc);
       //alert("est = " + est);
       // alert("sche = " + sche);
        // check to see if est is a null
        if (data.departures[0].estimated_departure_utc == null) {
            var disrupt_id = data.departures[0].disruption_ids[0];
            alert(data.disruptions[disrupt_id].description);
            
            $('#dataContainer').html("<span style='color: #ff2b00'>Error</span>");
            
            $('#how').toggle();
            
            $('#late').html("When");
            
            var current_time = new Date('2019-03-31T18:15:00Z')
            //alert(current_time)
            var time = millisToMinutes(sche - current_time)
            $('#dataContainer').html(time + " " + pluralize('minute', time));  
            
        } else {
          // take away the times and convert to minutes
            var time = millisToMinutes(est - sche)
            
            //edit #dataContainer html
            $('#dataContainer').html(time + " " + pluralize('minute', time));  
        }
        $.getJSON("https://timetableapi.ptv.vic.gov.au/v3/pattern/run/952519/route_type/0?expand=all&stop_id=1152&devid=3001117&signature=E2B25BE9E0C13B343BA584029755B8B2097C1F13", function(data){
            alert("aaaaahhh "+new Date('2019-04-01T09:33:00Z'))
        });
        
    })
    
});