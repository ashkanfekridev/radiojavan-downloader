let input_link = document.getElementById("input-link");
let download_link = document.getElementById("download-link");
let message = document.getElementById("message");
let btn_download = document.getElementById("btn-download");
let host_id = document.getElementById("host-id");
let = hosts = ["host1.rj-mw1.com", "host2.rj-mw1.com"];

// Download file by url
function downloadFile(url) {
    console.log('Download form:');
    console.log(url);
    console.log('Downloading...');
    download_link.href = url;
    download_link.click();
}

function makelink(type, file_name, host_id) {  
    switch (type) {
        case "mp3s":
            console.log('mp3s');
            return "https://"+host_id+"/media/mp3/mp3-320/" + file_name + ".mp3"
            break;
        case "podcasts":
            console.log('mp3s');
            return  "https://"+host_id+"/media/podcast/mp3-320/" + file_name + ".mp3"
            break;
        case "videos":
            console.log('videos');
            return  "https://"+host_id+"/media/music_video/hd/" + file_name + ".mp4"
            break;
        default:
            return false
            // message.innerText = "دانلود نمیشه این فایل!";
    }
} 

input_link.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    // console.log('Enter pressed' + event.keyCode);

    if (event.keyCode === 13) {

        console.log('Enter pressed' + event.keyCode);
        download();
    }
  }); 

function download(){
    message.innerText = "";
    let link = input_link.value.split('/');
    let file_name = link[link.length - 1];
    console.log("filename: " + file_name);
    var download_link = makelink(link[3], file_name, hosts[host_id.value]);
    console.log("link is= " + download_link);
    if (download_link) {
        downloadFile(download_link);
        input_link.value = "";

    } else {   
        message.innerText = "دانلود نمیشه این فایل!";   
    }
}

btn_download.addEventListener('click', () => {
download();
});


