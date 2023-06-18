import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    // Write your code here
    const readStream = fs.createReadStream(join(__dirname, 'files', 'archive.gz'));
    const writeStream = fs.createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'), 'utf-8');
    const gzip = zlib.createGunzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await decompress();