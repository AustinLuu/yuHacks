function main() {
async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    const [result] = await client.textDetection('./eventTest.png');
    const detections = result.textAnnotations;
    const text = detections[0].description.split("\n");
    console.log(text[1]);
    var date = new Date("JAN 29 7");
    console.log(date);
}
quickstart();
}
process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
    });

    main(...process.argv.slice(2));

  