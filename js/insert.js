

//AFTER DOCUMENT LOAD
window.onload = () => {
  setTimeout(spaceX.insertMacros, 2000);
};	

spaceX.insertMacros = () => {
	/* To create a new macro, use the following syntax:
	          key('a', function(){ alert('you pressed a!') }); */
	//p, r, a, f, e, g, h, i, l, n, p, r, t, v, w, z
	key('a', spaceX.newWorkEmail);
	key('p', spaceX.findBoss);
	key('f', spaceX.emailMyFamily);
	key('e', spaceX.findEmergency);
	key('l', spaceX.hideUnread);
	
}
