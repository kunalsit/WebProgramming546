$(document).ready(function(){
    function showDetail(event){
     event.preventDefault();
     var detailurl = event.currentTarget.href;
     $.get(detailurl , function(data, status){
  
       var Language = (data.language == null)? 'N/A' : data.language;
       var Rating = (data.rating.average == null)? 'N/A' : data.rating.average;
       var Network = (data.network.name == null)? 'N/A' : data.network.name;
       var Summary = (data.summary == null)? 'N/A' : data.summary;
       var image = (data.image == null)? '/public/no_image.jpeg' : data.image.medium ;
  
  
       var dd = $('<dd/>');
       var listDD = $('<ul/>').appendTo(dd);
       var genere = data.genres;
       genere.forEach((item, i) => {
         var liList = $('<li/>').text(item).appendTo(listDD);
       });
       var container = $('#show');
       $('#showList').css('display' ,'none');
       $("#homeLink").css('display' ,'block');
       container.append('<h1>'+data.name+'</h1>');
       container.append('<img id="theImg" src='+image+' />').css('display', 'block');
       var dlList = $('#dlList')
       dlList.append('<dt><b>Language</b></dt><dd>'+Language+'</dd>');
       dlList.append('<dt><b>Genres</b></dt>');
       dlList.append(dd);
       dlList.append('<dt><b>Average Rating</b></dt><dd>'+Rating+'</dd>');
       dlList.append('<dt><b>Network</b></dt><dd>'+Network+'</dd>');
       dlList.append('<dt><b>Summary</b></dt><dd>'+Summary+'</dd>');
  
     });
    }
  
  
  
    $("#searchForm").submit(function(e){
  
      e.preventDefault();
      var input = $("#search_term").val().trim();
      if(input){
        $('#showList').empty();
        $.get("http://api.tvmaze.com/search/shows?q="+input, function(data, status){
          data.forEach((item, i) => {
            var li = $('<li/>')
            .addClass('ui-menu-item')
           .attr('role', 'menuitem')
           .appendTo($('#showList'));
           var aaa = $('<a/>')
        .addClass('ui-all')
        .text(item.show.name)
        .attr('href', item.show._links.self.href)
        .attr('id', 'showId'+i)
        .click(showDetail)
        .appendTo(li);
          });
        });
      }
      else{
        alert("Please enter value");
      }
  
    });
    function onload(){
      $.get("http://api.tvmaze.com/shows", function(data, status){
        $('#showList').show();
        data.forEach((item, i) => {
  
          var li = $('<li/>')
          .addClass('ui-menu-item')
         .attr('role', 'menuitem')
         .appendTo($('#showList'));
         var aaa = $('<a/>')
      .addClass('ui-all')
      .text(item.name)
      .attr('href', item._links.self.href)
      .click(showDetail)
      .appendTo(li);
        });
  
      });
    }
    onload();
  
  });
  