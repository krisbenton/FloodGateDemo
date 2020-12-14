import { Component } from '@angular/core';

declare function GetFlags():any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'floodgatedemo';
  constructor(){
    console.log('Running GetFlags');
    const floodgate = require('floodgate-node-sdk');
    const client = floodgate.createClient("SDK_KEY");

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
  
}
