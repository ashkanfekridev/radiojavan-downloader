let input_link = document.getElementById("input-link");
let download_link = document.getElementById("download-link");
let message = document.getElementById("message");
let btn_download = document.getElementById("btn-download");


// Download file by url
function downloadFile(url) {
    console.log('Download form:');
    console.log(url);
    console.log('Downloading...');
    download_link.href = url;
    download_link.click();
}

btn_download.addEventListener('click', () => {
    message.innerText = "";
    let link = input_link.value.split('/');
    let file_name = link[link.length - 1];
    console.log("filename: " + file_name);

    switch (link[3]) {
        case "mp3s":
            console.log('mp3s');
            downloadFile("https://host2.rj-mw1.com/media/mp3/mp3-320/" + file_name + ".mp3")
            break;
        case "podcasts":
            console.log('mp3s');
            downloadFile("https://host2.rj-mw1.com/media/podcast/mp3-320/" + file_name + ".mp3")
            break;
        case "videos":
            console.log('videos');
            downloadFile("https://host2.rj-mw1.com/media/music_video/hd/" + file_name + ".mp4")
            break;
        default:
            message.innerText = "دانلود نمیشه این فایل!";
    }


});


