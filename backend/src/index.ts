import * as https from 'https';
import * as fs from 'fs';
const PORT = 9000;
const httpsOptions = {
    key: fs.readFileSync('./../ssl/key.pem'),
    cert: fs.readFileSync('./../ssl/cert.pem')
}
https.createServer(httpsOptions).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})