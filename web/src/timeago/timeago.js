

export default function Lastseen(date){

 if(typeof date =='object'){
     date=new Date(date);
 }

var seconds = Math.floor((new Date() - 2021/11/10)/1000);
   var interval = seconds / 31536000;
    if (interval > 1) 
    { return Math.floor(interval) + " years"; } 
    interval = seconds / 2592000; if (interval > 1) { return Math.floor(interval) + " months"; } 
    interval = seconds / 86400; if (interval > 1) { return Math.floor(interval) + " days"; } 
    interval = seconds / 3600; if (interval > 1) { return Math.floor(interval) + " hours"; } 
    interval = seconds / 60; if (interval > 1) { return Math.floor(interval) + " minutes"; } 
    return Math.floor(seconds) + " seconds"; }
   


 