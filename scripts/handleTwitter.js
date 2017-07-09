"use strict";

var allTweets = []
var natoTweet


function init() {

    allTweets = []

    var counter = 0;
    while (true) {
        var tempTweet = document.getElementById("twitter-widget-" + counter++)
        if (tempTweet) {
            tempTweet.style.visibility = "hidden"
            allTweets.push(tempTweet)
        } else {
            console.log(--counter + " tweets found.")

            if (counter > 0) {
                setTimeout(prepareTweets, 1000)
            }
            break;
        }
    }

	natoTweet = document.getElementById("twitter-widget-12")
	if(natoTweet != null){
		natoTweet.style.position = "absolute"
		natoTweet.style.visibility = "hidden"
		natoTweet.style.left = "40px"
		natoTweet.style.top = "472px"
		natoTweet.style.width = "455px"
	}
}

function prepareTweets() {
	for(var i = 0; i < 12; i++){
		allTweets[i].style.position = "absolute"
		allTweets[i].style.visibility = "hidden"
	}

	// Syria tweets
    allTweets[0].style.left = "38px"
    allTweets[0].style.top = "72px"
    allTweets[0].style.visibility = "hidden"

    allTweets[1].style.left = "38px"
    allTweets[1].style.top = "245px"
    allTweets[1].style.visibility = "hidden"

    // Trump's tactful tweets
    for(var i = 2; i < 12; i++){
    	allTweets[i].style.transform = "scale(0.75)"
    	allTweets[i].style.width = "400px"
    }

	allTweets[2].style.left = "-12px"
	allTweets[2].style.top = "100px"
	allTweets[2].style.transform += " rotate(2deg)"
	allTweets[3].style.left = "-12px"
	allTweets[3].style.top = "300px"
	allTweets[3].style.transform += " rotate(-2deg)"
	allTweets[4].style.left = "-12px"
	allTweets[4].style.top = "500px"
	allTweets[4].style.transform += " rotate(4deg)"

	allTweets[5].style.left = "320px"
	allTweets[5].style.top = "70px"
	allTweets[5].style.transform += " rotate(-2deg)"
	allTweets[6].style.left = "320px"
	allTweets[6].style.top = "240px"
	allTweets[6].style.transform += " rotate(2deg)"
	allTweets[7].style.left = "320px"
	allTweets[7].style.top = "390px"
	allTweets[7].style.transform += " rotate(-3deg)"
	allTweets[8].style.left = "320px"
	allTweets[8].style.top = "570px"
	allTweets[8].style.transform += " rotate(1deg)"

	allTweets[9].style.left = "651px"
	allTweets[9].style.top = "90px"
	allTweets[9].style.transform += " rotate(-4deg)"
	allTweets[10].style.left = "651px"
	allTweets[10].style.top = "290px"
	allTweets[10].style.transform += " rotate(2deg)"
	allTweets[11].style.left = "651px"
	allTweets[11].style.top = "490px"
	allTweets[11].style.transform += " rotate(-4deg)"


    document.getElementById('tweetContainer').appendChild(allTweets[0])
    document.getElementById('tweetContainer').appendChild(allTweets[1])
    document.getElementById('tweetContainer').appendChild(allTweets[2])
    document.getElementById('tweetContainer').appendChild(allTweets[3])
    document.getElementById('tweetContainer').appendChild(allTweets[4])
    document.getElementById('tweetContainer').appendChild(allTweets[5])
    document.getElementById('tweetContainer').appendChild(allTweets[6])
    document.getElementById('tweetContainer').appendChild(allTweets[7])
    document.getElementById('tweetContainer').appendChild(allTweets[8])
    document.getElementById('tweetContainer').appendChild(allTweets[9])	
    document.getElementById('tweetContainer').appendChild(allTweets[10])
    document.getElementById('tweetContainer').appendChild(allTweets[11])


	//get nato tweet
	natoTweet = document.getElementById("twitter-widget-12")

	natoTweet.style.position = "absolute"
	natoTweet.style.visibility = "hidden"
	natoTweet.style.left = "40px"
	natoTweet.style.top = "472px"
	natoTweet.style.width = "455px"



}

function showSyriaTweets() {
    if (allTweets.length >= 10) {

    	prepareTweets()

        allTweets[0].style.position = "absolute"
        allTweets[0].style.left = "38px"
        allTweets[0].style.top = "72px"

        allTweets[1].style.position = "absolute"
        allTweets[1].style.left = "38px"
        allTweets[1].style.top = "245px"

        allTweets[0].style.visibility = "visible"
        allTweets[1].style.visibility = "visible"
    }
}

function hideSyriaTweets() {
    if (allTweets.length > 0) {
        allTweets[0].style.visibility = "hidden"
        allTweets[1].style.visibility = "hidden"
    }
}

function showTactfulTweets(){
	if(allTweets.length > 10){
		prepareTweets()

		for(var i = 2; i < 12; i++){
			allTweets[i].style.visibility = "visible"
			allTweets[i].style.position = "absolute"
		}
	}
}

function hideTactfulTweets(){
	if(allTweets.length > 10){
		for(var i = 2; i < 12; i++){
			allTweets[i].style.visibility = "hidden"
			allTweets[i].style.position = "absolute"
		}
	}
}

function showNatoTweet() {
	natoTweet = document.getElementById("twitter-widget-12")

	natoTweet.style.visibility = "visible"
	natoTweet.style.position = "absolute"
	natoTweet.style.left = "40px"
	natoTweet.style.top = "472px"
	natoTweet.style.width = "455px"


}

function hideNatoTweet() {
	natoTweet = document.getElementById("twitter-widget-12")
	if(natoTweet != null)
		natoTweet.style.visibility = "hidden"
}
