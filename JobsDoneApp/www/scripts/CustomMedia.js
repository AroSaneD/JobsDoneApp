var myMedia = null;

var loadMedia = function () {
	var src = "/media/JobsDone.mp3";
	if (device.platform == device.android) {
		src = "/android_asset/www" + src;
	}

	myMedia = new Media(src, loadSucceeded, loadFailed, onStatus);
}

var playMedia = function () {
	if (my_media != null) {
		my_media.play();
	}
}

var loadSucceeded = function () {
	alert("Succeeded to load media");
}

var loadFailed = function () {
	alert("Failed to load media");
}

var onStatus = function (status) {
	if (status == Media.MEDIA_STOPPED) {
		my_media.stop();
		alert("Media stopped");
	}
}