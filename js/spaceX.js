
spaceX = {
};
   
spaceX.findUnread = () => $('td.xY > div > span:not(.zF)').parents('tr')

spaceX.findRead = () => $('span.zF')
spaceX.searchContent = term => $('td.xY:contains('+ term + ')')

spaceX.compose = () => {
  var compose = $('div.T-I.J-J5-Ji.T-I-KE')[0];
 	spaceX.simulateClick(compose);
}

spaceX.simulateClick = item => {
    var button = item;
    console.log(item);
    click = document.createEvent("MouseEvents");
    click.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    button.dispatchEvent(click);
    click = document.createEvent("MouseEvents");
    click.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    button.dispatchEvent(click);
}

spaceX.getGmailFrame = () => {
  	var b = document.getElementById("canvas_frame");
  return b;		
}
