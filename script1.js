function task(){
    var today=new Date()
    var targetDate=new Date("11/20/2023 15:00:00")
    var difference=(targetDate-today)/1000
    var days=Math.floor(difference/3600/24)
    var hours=Math.floor((difference/3600)%24)
    var minutes=Math.floor((difference/60)%60)
    var seconds=Math.floor(difference%60)
    var result=document.querySelectorAll(".card h2")
    result[0].innerHTML=days;
    result[1].innerHTML=hours;
    result[2].innerHTML=minutes;
    result[3].innerHTML=seconds;
}
setInterval(task, 100)