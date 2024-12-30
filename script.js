function call_sms(){
fetch('https://api.pushbullet.com/v2/texts', {
    method: 'POST',
    headers: {
      'Access-Token': 'o.ilOlO7CrHaw7TXWAhAvAXLRWH4LQkrdI',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'data': {
        'addresses': [
          '+919790400914'
        ],
        'title':"SKG Groups",
        'message': 'Hi Gnanamani\nThis is a time to Take tablet\nPlease Stop the Work and Take Tablet\nஞானமணி மாத்திரை சாப்பிட வேண்டும்',
        'target_device_iden': 'ujAFC85Ij7ssjDzNGRDKZo'
      },
    })
  });}
function checkTime(targetTime1, targetTime2) {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds(); 
    const [hour1, minute1,second1] = targetTime1.split(':').map(Number);
    const [hour2, minute2,second2] = targetTime2.split(':').map(Number);
    if ((currentHours === hour1 && currentMinutes === minute1 && currentSecond === second1 )|| 
        (currentHours === hour2 && currentMinutes === minute2 && currentSecond === second2)) 
        {
      return true;
    }
    
    return false;
  }
const targetTime1 = "23:58:00";
const targetTime2 = "10:10:00";
setInterval(() => {
    if (checkTime(targetTime1, targetTime2)) {
        clearInterval(this);
    }
}, 1000);