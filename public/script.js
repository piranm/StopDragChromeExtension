console.log('hello world');

var div = $("<div>");

div.css({
  position: 'absolute',
  top: '10px',
  right: '10px',
  border: '1px solid black'
});
div.text('hello world')

div.appendTo(document.body);