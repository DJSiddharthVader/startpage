function getTime(){
    var t=new Date();
    var nmin=t.getMinutes();
    if(nmin<=9) nmin="0"+nmin;
    var nhour=t.getHours();
      if(nhour>=13) {
          //var nhour-=12,nm="PM";
          nhour-=12;
          var nm="PM";
      } else {
          var nm="AM";
      }
    if(nhour<=9) nhour="0"+nhour;
    var nday=t.getDate();
    if(nday<=9) nday="0"+nday;
    var nmonth=t.getMonth();
    if(nmonth<=9) nmonth="0"+nmonth;
    var nyear=t.getFullYear()-2000;
    var timedate = `${nhour}:${nmin} ${nm}<br /> ${nday}/${nmonth}/${nyear}`;
    print(timedate);
    document.getElementById("myclock").innerText = timedate;
}
//function runScript(){
//    // const execSync = require('child_process').execSync;
//    // import { execSync } from 'child_process';  // replace ^ if using ES modules
//    // var output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
//}
//function getLink(){
//    var output = 'link'
//    /home/sidreed/.config/polybar/scripts/reading.sh print
//}
//function getQuote(){
//    ~/.scripts/quote -p
//    var output = 'quote'
//}
//function getPrompt(){
//    cat ~/Documents/Notes/1000\ Prompts.txt | shuf | head -1
//    var output = 'prompt'
//}
