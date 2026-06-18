import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('public/resume.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
