var button=document.getElementById('counter');

button.onclick=function(){

    var request = new XMLHttpRequest();

//CAPTURE the response and store it in a variable
request.onreadystatechange = function()
{
    if (request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status ===200){
            var counter=request.responseTest;
            var span=document.getElementById('count');
            span.innerHTML = counter.toString();
        
        }
    }
}

//Make the request
request.open('GET', 'http://aditya2695.imad.hasura-app.io/counter',true);
request.send(null);
};
