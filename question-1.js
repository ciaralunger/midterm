var url = 'http://itp-api.herokuapp.com/api/v1/me';

var templateSource = $('#user-template').html();
var template = Handlebars.compile(templateSource);

var promise = $.ajax({
  url: url,
  type: 'get',
  dataType: 'json'
}).then(function(user) {  
  var html = template({
    data: user
  });  

$('#object').html(html);
},function(){
console.log("there was an error");
  
});