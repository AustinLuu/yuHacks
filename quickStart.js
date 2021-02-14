function main() {
async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    // const [result] = await client.labelDetection('./wakeupcat.jpg');
    // const labels = result.labelAnnotations;
    // console.log('Labels:');
    // labels.forEach(label => console.log(label.description));

    const [result] = await client.textDetection('./eventTest2.JPG');
    const detections = result.textAnnotations;
    //console.log('Text:');
    //detections.forEach(text => console.log(text.description));
    const text = detections[0].description.split("\n");
    console.log(text);
}
quickstart();
}
process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
    });

    main(...process.argv.slice(2));

  