
spaceX = {
};
   
spaceX.findUnread = function(){
  return $('td.xY > div > span:not(.zF)').parents('tr');
}

spaceX.findRead = function(){
  return $('span.zF');
}
spaceX.searchContent = function(term){
  return $('td.xY:contains('+ term + ')')
}

spaceX.compose = function(){
  var compose = $('div.T-I.J-J5-Ji.T-I-KE')[0];
 	spaceX.simulateClick(compose);
}

spaceX.simulateClick = function(item){
    var button = item;
    console.log(item);
    click = document.createEvent("MouseEvents");
    click.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    button.dispatchEvent(click);
    click = document.createEvent("MouseEvents");
    click.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    button.dispatchEvent(click);
}

spaceX.getGmailFrame = function(){
  	var b = document.getElementById("canvas_frame");
  return b;		
}
