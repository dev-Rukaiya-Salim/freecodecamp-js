//basic switch for day of the week

const day = 4
switch (day) {
	 case 1: console.log(`Monday`); break;
	 case 2: console.log(`Tuesday`); break;
	 case 3: console.log(`Wednesday`); break;
	 case 4: console.log(`Thursday`); break;
	 case 5: console.log(`Friday`); break;
	 case 6:
	 case 1: console.log(`Weekend`); break;
	 default: console.log(`Invalid day number`);
}
