var input_link = document.getElementById("input-link");
var download_link = document.getElementById("download-link");

var btn_download_podcast = document.getElementById("btn-download-podcast");
var btn_download_music = document.getElementById("btn-download-music");
var btn_download_video = document.getElementById("btn-download-video");




btn_download_podcast.addEventListener('click', () => {
    var name = input_link.value.split('/');
    name = name[name.length - 1];
    console.log(name);
    var downloadUrl = "https://host2.rj-mw1.com/media/podcast/mp3-320/" + name + ".mp3";
    download_link.href = downloadUrl;
    download_link.click();
});


btn_download_music.addEventListener('click', () => {
    var name = input_link.value.split('/');
    name = name[name.length - 1];
    console.log(name);
    var downloadUrl = "https://host2.rj-mw1.com/media/mp3/mp3-320/" + name + ".mp3";
    download_link.href = downloadUrl;
    download_link.click();
});




btn_download_video.addEventListener('click', () => {
    var name = input_link.value.split('/');
    name = name[name.length - 1];
    console.log(name);

    var downloadUrl = "https://host2.rj-mw1.com/media/music_video/hd/" + name + ".mp4";
    download_link.href = downloadUrl;
    download_link.click();
});

