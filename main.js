var rickroll = document.getElementById("rickroll");
var meme = document.getElementById("meme");
var ip = document.getElementById("ip");
var discord = document.getElementById("discord");
var cloud = document.getElementById("cloud");
var cname;
var iplocation;

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ipinfo.io/json")
        .then(response => response.json())
        .then(data => {
            cname = data.ip
            iplocation = data.loc
        })
});

function setCookie(cname, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "cname = " + cname + ";" + expires + ";path=/";
    var cookies = decodeURIComponent(document.cookie);
    console.log(cookies)
}

rickroll.addEventListener("click", fx1);
meme.addEventListener("click", fx2);
ip.addEventListener("click", fx3);
discord.addEventListener("click", fx4);
cloud.addEventListener("click", fx5);


function fx1() {
    if (confirm("Bạn có chắc chắn?") == true) {
        window.location = "./media/meme/not-a-rickroll.mp4"
    }
    else {
        alert("Đã quá muộn :)");
        window.location = "./media/meme/not-a-rickroll.mp4";
    }
};

function fx2() {
    window.location = "./media/meme"
};
function fx3() {
    alert("IP: " + cname + " Tọa độ: " + iplocation)
}
function fx4() {
    window.location = "https://discord.gg/bJVmQFDjWx"
}
function fx5() {
    window.location = "https://bit.ly/notanaxolotl"
}
setCookie(cname, 720)
