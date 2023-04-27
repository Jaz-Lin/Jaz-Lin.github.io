// s1 outfit
let s1 = document.getElementById("s1"); 
/* the process: */
s1.onclick = function() {
	let body = document.getElementById("body"); 
	body.style.display = "none"; 
	hideClothes(); 
	document.getElementById("o1").style.display = "block";

	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
};

function hideClothes() {
	let outfits = document.getElementsByClassName('outfit'); 
	for (i = 0; i < outfits.length; i++) {
		outfits[i].style.display = 'none';
	}
}

// s2 outfit
/* get #s2 outfit */
/* repeat process */
let s2 = document.getElementById("s2"); 
s2.onclick = function() {
	let body = document.getElementById("body"); 
	body.style.display = "none"; 
	hideClothes(); 
	document.getElementById("o2").style.display = "block";
};

// s3 outfit
/* get #s3 outfit */
/* repeat process */
let s3 = document.getElementById("s3"); 
s3.onclick = function() {
	let body = document.getElementById("body"); 
	body.style.display = "none"; 
	hideClothes(); 
	document.getElementById("o3").style.display = "block";
};

// s4 outfit
/* get #s4 outfit */
/* repeat process */
let s4 = document.getElementById("s4"); 
s4.onclick = function() {
	let body = document.getElementById("body"); 
	body.style.display = "none"; 
	hideClothes(); 
	document.getElementById("o4").style.display = "block";
};

// s5 outfit
/* get #s5 outfit */
/* repeat process */
let s5 = document.getElementById("s5"); 
s5.onclick = function() {
	let body = document.getElementById("body"); 
	body.style.display = "none"; 
	hideClothes(); 
	document.getElementById("o5").style.display = "block";
};

// strip outfit
let strip = document.getElementById("strip-button"); 
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	hideClothes();
	/* show #body */
	let body = document.getElementById("body"); 
	body.style.display = "block";
};