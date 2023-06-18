import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const { stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(join(__dirname, 'files', 'fileToRead.txt'));
    readStream.on('data', (chunk) => {
        stdout.write(chunk);
      });
    
};

await read();