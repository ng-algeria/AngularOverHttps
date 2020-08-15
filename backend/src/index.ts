import * as https from 'https';
import * as fs from 'fs';

const port = 9000;

const httpsOptions = {
    cert: fs.readFileSync('./../ssl/cert.pem'),
    key: fs.readFileSync('./../ssl/key.pem')
}

https.createServer(httpsOptions).listen(port, () => {
    console.log('Server start at port https://localhost:' + port);
})