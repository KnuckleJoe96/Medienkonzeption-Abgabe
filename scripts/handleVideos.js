"use strict";
var ytplayer = [];

var onCamera  =[]
var buildWall

function initVideos() {
    setOnCamera()

    setBuildWall()
	prepareYoutubeEmbedded()
}

function prepareYoutubeEmbedded() {
	var iframes = document.getElementsByTagName("iframe")

	for(var i = 0; i < iframes.length; i++){
		ytplayer.push(new YT.Player(iframes[i]));
	}
}


function setOnCamera() {
    onCamera = document.querySelectorAll(".onCamera")

    onCamera.forEach(setVideoSizes)
}

function setVideoSizes(element) {
	if(element.videoHeight == 0){
	    element.addEventListener("loadedmetadata", function(e) {
	    	setSize()
	    }, false);
	} else{
		setSize()
	}

	function setSize(){
		var height = 517
        var width = (height / element.videoHeight) * element.videoWidth

	    element.style.visibility = "hidden"
	}
}

function showAndPlayVideo(key){
    var videoName = key.replace('thumb', 'vid')
	var allIFrames = Array.prototype.slice.call( document.getElementsByTagName("iframe") );

	var video = document.getElementById(videoName)

	var index = allIFrames.indexOf(document.getElementById(videoName))

	if(ytplayer[index].playVideo)
		ytplayer[index].playVideo()
	video.style.visibility = "visible"
}

function hideAllVideos(){
	var allIFrames = document.getElementsByTagName("iframe")
	for(var object of allIFrames){
		object.style.visibility = "hidden"
	}
	stopAllVideos()
}

function setBuildWall(){
	
	buildWall = document.getElementById("build_a_great_wall")

	if(buildWall != null && buildWall.videoHeight == 0){
	    buildWall.addEventListener("loadedmetadata", function(e) {
	    	setSize()
	    }, false);
	} else{
		setSize()
	}

	function setSize(){
		if(buildWall!= null){
			var height = 190
			var width = (height / buildWall.videoHeight) * buildWall.videoWidth

			buildWall.height = height
			buildWall.width = width

			buildWall.style.position = "absolute"
			buildWall.style.top = "530px"
			buildWall.style.left = 191 + "px"
			buildWall.style.visibility = "hidden"
		}
	}
}

function showBuildWall(){
	buildWall.style.visibility = "visible"
}

function hideBuildWall(){
	ytplayer[5].stopVideo()
	buildWall.style.visibility = "hidden"
}

function stopAllVideos(){
    for (var i=0; i<ytplayer.length; i++){
		if(ytplayer[i].stopVideo)
			ytplayer[i].stopVideo();
	}
}