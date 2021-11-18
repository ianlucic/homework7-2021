var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var val = document.querySelector("#slider").value; volume.innerHTML = (val + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("The video has been slowed down! New Video Speed:"+video.playbackRate );
	video.play();
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("The video has been sped up! New Video Speed:"+video.playbackRate );
	video.play();
});

document.querySelector("#skip").addEventListener("click", function() {

	video.currentTime = 15 + video.currentTime
	if(video.currentTime == video.duration) {
		video.currentTime = 0;
		console.log("Retuning to the Start of the Video.");
		video.play();}
	else {
		console.log("Present Location" + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
 	}
	else {
		video.muted = false; 
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var val = document.querySelector("#slider").value;
	video.volume = val/100;
	volume.innerHTML = (val + "%");
	console.log(video.volume);
});


document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Style: oldSchool");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Style: Normal");
	video.classList.remove("oldSchool");
});
