
var myBirthTime = new Date(1999,04,7,9,25);
function updateParagraph(){
    var now = new Date();
    var seconds = (now.getTime()-myBirthTime.getTime());
    var myBirthTime = Math.floor(seconds/(1000*60*60*24));
    document.getElementById('birth-time').InnerText='生まれてから'+(myBirthTime+1)+'日目になります'
}
setInterval(updateParagraph,50);
