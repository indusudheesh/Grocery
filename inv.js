var xhttp= new XMLHttpRequest();
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
    if(this.readyState==4 && this.status==200)
    {
    var response= JSON.parse(this.responseText);
    var item=response.items;
    
var heading=[];
var tble=document.createElement("table");
var tr=tble.insertRow(-1);
        
    for (var key in item[0])
     {
        heading.push(key);
    }
    for(let i=0;i<heading.length;i++)
    {
        let th = document.createElement("th");
        th.innerHTML = heading[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < item.length; i++)
     {

        tr = tble.insertRow(-1);
           

        for (var j = 0; j < heading.length; j++)
        {
            var Cell = tr.insertCell(-1);
        
            Cell.innerHTML = item[i][heading[j]];
            
            
        }
    }
       
    var inv = document.getElementById("inv");
    inv.innerHTML = "";
    inv.appendChild(tble);
    /* tble.className="tableborder";
    var p=document.getElementById("heading");
    p.style="font-weight: 700; font-style: oblique; font-size: 30px; text-decoration:underline";
     */
    
    
       
}    
}
xhttp.open("GET","inv.json",true);
xhttp.send();
