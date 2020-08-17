
const SongName = document.getElementById("singerName").value;
const getSong = document.getElementById("singerName")
const songName = document.getElementById("search-item").addEventListener("click",function(){
    fetch("https://api.lyrics.ovh/suggest/"+ getSong.value)
    .then(res => res.json())
    .then(data => {
// first item shot
        const songName = data["data"]["0"]["title"];
        const artist = data["data"]["0"]["artist"].name;
        document.getElementById("first").innerHTML= songName;
        document.getElementById("ArtistOne").innerHTML= artist;
// second item shot 
        const sonGnameOne = data["data"]["1"]["title"];
        const ArtistOne = data["data"]["1"]["artist"].name;
        document.getElementById("second").innerHTML=sonGnameOne;
        document.getElementById("ArtistTwo").innerHTML=ArtistOne;
// Third item shot 
        const sonGnameTwo = data["data"]["2"]["title"];
        const ArtistTwo = data["data"]["2"]["artist"].name;
        document.getElementById("Third").innerHTML=sonGnameTwo;
        document.getElementById("ArtistThree").innerHTML=ArtistTwo;
// Fourth item shot 
        const sonGnameThree = data["data"]["3"]["title"];
        const ArtistThree = data["data"]["3"]["artist"].name;
        document.getElementById("Forth").innerHTML=sonGnameThree;
        document.getElementById("ArtistFour").innerHTML=ArtistThree;
// Fifth item shot 
        const sonGnameForth = data["data"]["4"]["title"];
        const ArtistFour = data["data"]["4"]["artist"].name;
        document.getElementById("Fifth").innerHTML=sonGnameForth;
        document.getElementById("ArtistFive").innerHTML=ArtistFour;
// sixth item shot 
        const sonGnameFifth = data["data"]["5"]["title"];
        const ArtistFive = data["data"]["5"]["artist"].name;
        document.getElementById("Sixth").innerHTML=sonGnameFifth;
        document.getElementById("ArtistSix").innerHTML=ArtistFive;
// seventh item shot 
        const sonGnameSixth = data["data"]["6"]["title"];
        const ArtistSix = data["data"]["6"]["artist"].name;
        document.getElementById("Seventh").innerHTML=sonGnameSixth;
        document.getElementById("ArtistSeven").innerHTML=ArtistSix;
// Eight item shot
        const sonGnameSeventh = data["data"]["7"]["title"];
        const ArtistSeven = data["data"]["7"]["artist"].name;
        document.getElementById("Eighth").innerHTML=sonGnameSeventh;
        document.getElementById("ArtistEight").innerHTML=ArtistSeven; 
//  nine item shot 
        const sonGnameEighth = data["data"]["8"]["title"];
        const ArtistEight = data["data"]["8"]["artist"].name;
        document.getElementById("Ninth").innerHTML=sonGnameEighth;
        document.getElementById("ArtistNine").innerHTML=ArtistEight;
// Tenth item shot                 
        const sonGnameNinth = data["data"]["9"]["title"];
        const ArtistNine = data["data"]["9"]["artist"].name;
        document.getElementById("Tenth").innerHTML=sonGnameNinth;
        document.getElementById("ArtistTen").innerHTML=ArtistNine;
//first Get lyrics btn 
        document.getElementById("first-btn").addEventListener("click", function(){
          fetch("https://api.lyrics.ovh/v1/" +artist+"/"+songName)
          .then(res => res.json())
          .then(data =>{
            const song = data.lyrics
            document.getElementById("LyricsZero").innerHTML = song;
          } )
        })
    })
})