$(document).ready(function() {
  $("#nav_list a").click(function(event) {
    event.preventDefault(); 

    var speaker_title = $(this).attr("title");
    
    var jsonFile = "json_files/" + speaker_title + ".json";
    
    $("main").empty();

    $.getJSON(jsonFile, function(data) {
      var speaker = data.speakers[0]; 
      var speaker_Html = '<h1>' + speaker.title + '</h1>';
      speaker_Html += '<img src="' + speaker.image + '">';
      speaker_Html += '<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>';
      speaker_Html += '<p>' + speaker.text + '</p>';

      $("main").html(speaker_Html);
    });
  });
});