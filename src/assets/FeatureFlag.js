
function GetFlags(){
    console.log('Running GetFlags');
    const floodgate = require('floodgate-node-sdk');
    const client = floodgate.createClient("SDK-KEY");

    client.on('ready', function () {
    const value = client.GetValue('selfserviceptoflag', false);

    console.log('value =>', value);

    if (value == 'true') {
    console.log('the flag is true');
    }
    else {
    console.log('the flag is false');
    }
    });

}

