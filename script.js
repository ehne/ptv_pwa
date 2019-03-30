// milliseconds to minutes function
function millisToMinutes(millis) {
  var minutes = Math.floor(millis / 60000);
  return minutes;
}

// on document load
Zepto(function($){
    
    // the url of the ptv api
    var url = "https://next.json-generator.com/api/json/get/EkSGnhPOL";
    
    $.getJSON(url, function(data){
        
        // save scheduled time into var
        var sche = new Date('2019-03-30T03:54:00.274Z');
        
        // save estimated time into var
        var est = new Date('2019-03-30T04:03:00.803Z');
        
        // take away the times and convert to minutes
        var time = millisToMinutes(est - sche)
        
        //edit #dataContainer html
        $('#dataContainer').html(time + " " + pluralize('minute', time));
    })
    
});