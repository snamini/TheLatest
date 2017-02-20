// ajax downloads code without refreshing the page (like the notification box on fb)

// $.ajax({
//   url: "/articles",
//   // context: document.body
// }).done(function() {
//   $( this ).addClass( "done" );
// });





// A $( document ).ready() block.
$( document ).ready(function() {

  $.getJSON('/articles', function(data) {
    $.each(data, function(i) {
// <li class="list-group-item">Third item</li>
      $("#blog").append('<li class="list-group-item"><a href="/articles/' + data[i]._id+ '">' + data[i].title + '</a></li>');
      // $("#blog").append('<li class="list-group-item">' + data[i].link + '</li>');
    });
});

});
