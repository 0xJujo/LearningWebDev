/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import input from '@inquirer/input';
import qr from 'qr-image';
import fs from 'fs';
var answer = await input({ message: 'Enter the website URL you want to make QR of: ' });

fs.writeFile('URL.txt',answer,function(err){
    if (err) throw err;
    console.log("File created or edited!");
});

fs.readFile('URL.txt', 'utf8', function(err, data){
    if (err) throw err;
    qrgen(data);
})

function qrgen(uril){
    var qr_svg = qr.image(uril);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
}