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
call_sms()
