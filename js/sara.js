

spaceX.hideUnread = () => {
 console.log(spaceX.findUnread());
 spaceX.findUnread().hide(); 
}

spaceX.findEmergency = () => {
    var emergency = spaceX.searchContent("Vanessa");
    emergency.css("background-color", "red")
}


spaceX.findBoss = () => {
  var caroline = spaceX.searchContent("caroline");
  caroline.css("background-color", "green") 
}


spaceX.emailMyFamily = () => {
  spaceX.compose();
	setTimeout(spaceX.insertFamilyAddresses, 500);
}

spaceX.newWorkEmail = () => {
  spaceX.compose();
	setTimeout(spaceX.insertWorkAddresses, 500);
}



spaceX.insertWorkAddresses = () => {
  $("textarea[name='to']").val("amanda@levoleague.com, caroline@levoleague.com, elizabeth@levoleague.com, pavel@levoleague.com, leslie@levoleague.com, julia@levoleague.com, Elana@levoleague.com");
  $("input[name='subject']").val("Everybody DANCE!!");
}

spaceX.insertFamilyAddresses = () => {
  $("textarea[name='to']").val('"Susan Chipps" <susanchipps@gmail.com>, "William A Chipps" <wchipps@facilities.rutgers.edu>, "Evan Chipps" <evan.chipps@gmail.com>, "Christopher Chipps" <christopher.chipps@yahoo.com>');
  $("input[name='subject']").val("I love you guys!!!!!!");
}
