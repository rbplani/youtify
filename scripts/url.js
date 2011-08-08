function getPlaylistIdFromUrl() {
	if (location.href.indexOf('playlists') !== -1 && location.href.indexOf('videos') === -1) { // /playlists/123
        return location.href.match('/playlists/(.*)')[1];
    } else if (location.href.indexOf('playlists') !== -1 && location.href.indexOf('videos') !== -1) { // /playlists/123/videos/456
        return location.href.match('/playlists/(.*?)/')[1];
    }
    return false;
}

function getVideoIdFromUrl() {
    if (location.href.indexOf('videos') !== -1) { // /playlists/123/videos/456, // /videos/456
        return location.href.match('videos/(.*)')[1];
    }
    return false;
}

function loadUrl() {
	var pathname = document.location.pathname.split('/');
	if (location.href.indexOf('playlists') !== -1 && location.href.indexOf('videos') === -1) { // /playlists/123
		loadPlaylist(getPlaylistIdFromUrl());
    } else if (location.href.indexOf('playlists') !== -1 && location.href.indexOf('videos') !== -1) { // /playlists/123/videos/456
		loadPlaylist(getPlaylistIdFromUrl(), getVideoIdFromUrl());
    } else if (pathname.length === 3 && pathname[1] === 'videos') {
		Player.play(pathname[2]);
    }
}
