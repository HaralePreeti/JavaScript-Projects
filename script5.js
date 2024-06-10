var searchValues=[ 
    "Happy Birthday quotes", 
    "Happy Diwali", 
    "Happy new year", 
     "How to get placed in MNC Company", 
    "how to get place within one month", 
    "where is the Indian culture", 
    "I am good?", "how to create website", 
    "is winter is coming", 
    "Happy Birthday quotes", 
    "Happy Diwali", 
    "Happy new year", 
    "Best course related to engineering", 
    "Top 10 companys in india", 
    "Top 10 players", 
    "who is the inventor of Computer technology" ] 
    var searchText = document.querySelector("#searchText") 
    var list = document.querySelector("#list") 
    searchText.addEventListener("keydown",function(){ 
        var result=[] 
        if(searchText.value){ 
            result=searchValues.filter(function(keyword){ 
                
                return keyword.toLowerCase().includes(searchText.value.toLower-Case()) }) } 
                console.log(result) 
                var content="" 
                result.forEach(function(element){ 
                    var temp="<li onclick=display(this)><i class='fa-solid fa-clock-ro-tate-left' style='height:40px; width:40px; color:gray;padding:10px'></i>"+ele-ment+"</li>" 
                    content=content+temp; }) 
                    list.innerHTML=content }) 
                    function display(element){ 
                        searchText.value=element.innerText 
                        list.innerHTML=""
}