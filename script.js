function sendmsg() {
    let classs = document.getElementsByClassName("inp");
    let msgdt = "Name :- " + classs[0].value + "\nContact :- " + classs[1].value + "\nEmail :- " + classs[2].value + "\nReason :- " + classs[3].value + "\nDescription:- " + document.getElementsByTagName("textarea")[0].value;
    console.log(msgdt);
    let phoneNumber = "+919370655646";
    let encodedMessage = encodeURIComponent(msgdt);
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = whatsappURL;

}
setInterval(nameswap,150);
let num=0;
let named= [   
    "",
    "F",
    "Fu",
    "Ful",
    "Full",
    "Fulls",
    "Fullst",
    "Fullsta",
    "Fullstac",
    "Fullstack",
    "Fullstack ",
    "Fullstack W",
    "Fullstack We",
    "Fullstack Web",
    "Fullstack Web ",
    "Fullstack Web D",
    "Fullstack Web De",
    "Fullstack Web Dev",
    "Fullstack Web Deve",
    "Fullstack Web Devel",
    "Fullstack Web Develo",
    "Fullstack Web Develop",
    "Fullstack Web Develope",
    "Fullstack Web Developer",
    "Fullstack Web Develope",
    "Fullstack Web Develop",
    "Fullstack Web Develo",
    "Fullstack Web Devel",
    "Fullstack Web Deve",
    "Fullstack Web Dev",
    "Fullstack Web Dev",
    "Fullstack Web De",
    "Fullstack Web D",
    "Fullstack Web ",
    "Fullstack Web",
    "Fullstack We",
    "Fullstack W",
    "Fullstack ",
    "Fullstac",
    "Fullsta",
    "Fullst",
    "Fulls",
    "Full",
    "Ful",
    "Fu",
    "F",
    "",
    "A",
    "An",
    "And",
    "Andr",
    "Andro",
    "Androi",
    "Android",
    "Android ",
    "Android D",
    "Android De",
    "Android Dev",
    "Android Deve",
    "Android Devel",
    "Android Develo",
    "Android Develop",
    "Android Develope",
    "Android Developer",
    "Android Develope",
    "Android Develop",
    "Android Develo",
    "Android Devel",
    "Android Deve",
    "Android Dev",
    "Android De",
    "Android D",
    "Android ",
    "Android",
    "Androi",
    "Andro",
    "Andr",
    "And",
    "An",
    "A"
]
function nameswap(){
    if(num==70){
        num=0;
    }
    document.getElementById("devname").textContent=named[num];
    num=num+1;
}
    