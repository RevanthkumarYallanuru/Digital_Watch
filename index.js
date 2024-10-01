 function time()
 {
 
 
 var date=new Date();
 var hr= date.getHours();
 var sec= date.getSeconds();
 var min=date.getMinutes();
 var ht=0;
 // to display in 12 hrs format 
 if(hr>12||hr==12)
    {
      if(hr>12)
      {
         ht=hr-12;
      }
      else
      {
         ht=hr;
      }
        document.getElementById('hr').textContent=ht+' :';
        document.getElementById('sts').innerHTML='PM'
    }
   
    else
    {
        document.getElementById('hr').textContent=ht+' :';
         document.getElementById('sts').innerHTML='AM'
    }
 document.getElementById('hr').textContent=ht+' :';
 document.getElementById('m').textContent=min+' :';
 document.getElementById('sec').textContent=sec;
 
 }
 var mg=setInterval(time,1000);

 function date()
{
   var dt= new Date();
   var d=dt.getDate();
   var mon=dt.getMonth()+1;
   var y=dt.getFullYear();
   document.querySelector('.date').textContent=d+'/'+mon+'/'+y;
}
date();