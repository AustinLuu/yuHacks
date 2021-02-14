const fs = require('fs');
const moment = require('moment');

const { isDate } = require('moment');
function main() {
  async function quickstart() {
      // Imports the Google Cloud client library
      const vision = require('@google-cloud/vision');
  
      // Creates a client
      const client = new vision.ImageAnnotatorClient();
  
      const [result] = await client.textDetection('./resources/eventTest.png');
      const detections = result.textAnnotations;
      console.log('Text:');
      // detections.forEach(text => console.log(text.description));  // we removed it
      const descString = detections[0].description.split("\n");

      
      // for (i=0; i < descString.length; i++){
      //   if descString[i].isDate(){
      //     return true;
      //   }
      //   else{
      //     return false;
      //   }
      //   console.log(descString[i]);
      // }
      
      console.log(descString);
      
/*       // IF WE WANT TO EXPORT STRING
      fs.writeFile('Output.txt', descString, (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
      }) */
      
    }
  quickstart();
  }
  process.on('unhandledRejection', err => {
      console.error(err.message);
      process.exitCode = 1;
      });
  
      main(...process.argv.slice(2));
