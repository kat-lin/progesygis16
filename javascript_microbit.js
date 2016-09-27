// When the BBC micro:bit runs.
function onStart(  ) {

}

function onPressA(  ) {
	globals.myNumber = 0;
	while (! microbit.buttonBPressed) {
		
		microbit.say("Katlin");
		if (globals.myNumber == 1) {
			
			break;
			
		}
		
		
	}
	
	
}

function onPressB(  ) {
	globals.myNumber = 1;
	while (! microbit.buttonAPressed) {
		
		microbit.say("Kalde");
		if (globals.myNumber == 0) {
			
			break;
			
		}
		
		
	}
	
	
}

function onPressAandB(  ) {
	microbit.fadeOut();
	
}




