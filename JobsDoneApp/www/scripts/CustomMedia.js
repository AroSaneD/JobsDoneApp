var myMedia = null;

var loadMedia = function () {
	var src = "/media/JobsDone.mp3";

	if (device.platform == "Android") { //Documentation lied. device.android returns undefined.
		src = "/android_asset/www" + src;
	}

	myMedia = new Media(src, loadSucceeded, loadFailed, onStatus); //Bug or undocumented behavior - the onload methods (both successfull and not) kept getting called everytime the audio was played.
}

var playMedia = function () {
	if (myMedia != null) {
		myMedia.play();
	}
}

var loadSucceeded = function () {

}

var loadFailed = function () {

}

var onStatus = function (status) {
	if (status == Media.MEDIA_STOPPED) {
		myMedia.stop(); //Bug: if not told to stop, the audio kept repeating over and over (only seen on android devices)
	}
}