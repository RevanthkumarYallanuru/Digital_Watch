
var min= document.getElementById('min');
var hr=document.getElementById('hr');
let mg=0;
function start()
{
    mg=setInterval(trend,1000);
}
let s=0;
let m=0;
let h=0;

function trend()
{
   s=s+1;
   if(s==60)
      {
         s=0;
         m=m+1;
      }
   if (m==60)
      {
         m=0;
         h=h+1;
      }
      document.getElementById('sec').innerHTML=s;
      document.getElementById('min').innerHTML=m+':';
      document.getElementById('hr').innerHTML=h+':';
      document.getElementById('start').style.display='none';
      
      
}


function stop()
{
   clearInterval(mg);
   document.getElementById('start').style.display='block';
}

function reset()
{
   s=0;
   m=0;
   h=0;
   document.getElementById('sec').innerHTML=s;
   document.getElementById('min').innerHTML=m+':';
   document.getElementById('hr').innerHTML=h+':';
   clearInterval(mg);
   document.getElementById('start').style.display='block';
}

function date()
{
   var dt= new Date();
   var d=dt.getDate();
   var mon=dt.getMonth()+1;
   var y=dt.getFullYear();
   document.querySelector('.date').textContent=d+'/'+mon+'/'+y;
}
date();