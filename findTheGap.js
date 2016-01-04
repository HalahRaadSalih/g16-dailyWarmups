var schedule = [
   {
       what: "Daily Sync",
       start: new Date(2016,1,4,9,30,0),
       end: new Date(2016,1,4,10,0,0)
   },
   {
       what: "1:1",
       start: new Date(2016,1,4,11,30,0),
       end: new Date(2016,1,4,12,30,0)
   },
   {
       what: "Important Meeting",
       start: new Date(2016,1,4,13,30,0),
       end: new Date(2016,1,4,14,30,0)
   },
   {
       what: "Daily Sync",
       start: new Date(2016,1,5,9,30,0),
       end: new Date(2016,1,5,10,0,0)
   },
   {
       what: "Important Meeting",
       start: new Date(2016,1,5,13,30,0),
       end: new Date(2016,1,5,14,30,0)
   },
   {
       what: "Daily Sync",
       start: new Date(2016,1,6,9,30,0),
       end: new Date(2016,1,6,10,0,0)
   },
   {
       what: "Important Meeting",
       start: new Date(2016,1,6,13,30,0),
       end: new Date(2016,1,6,14,30,0)
   },
   {
       what: "Daily Sync",
       start: new Date(2016,1,7,9,30,0),
       end: new Date(2016,1,7,10,0,0)
   },
   {
       what: "Daily Sync",
       start: new Date(2016,1,8,9,30,0),
       end: new Date(2016,1,8,10,0,0)
   }
]

function findGap(schedule, mins) {
    // your code here
    var gaps = [];

    for(var i = 0; i< schedule.length; i++){
        if(i !== schedule.length - 1){
            //end of the prev. event
            var end = schedule[i].end;
            //start of the next event
            var start = schedule[i+1].start;

            //find seconds diff between the start of the next event and the end of the prev. event
            var seconds = Math.round((start - end)/1000);
            // find the minutes difference
            var minutes = seconds/60;

            console.log(minutes);

            // if the difference is greater than or equal to mins
            // push the end of prev. event date to the gaps and 
            // add the minutes to that date, to create new date
            if(minutes >= mins){
                // console.log('there are Gaps');
                gaps.push({ 
                    earliestStart: end,
                    end: addMinutes(end,minutes)});
            }  
        }
        
    }
    console.log(gaps);
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

findGap(schedule, 30);
