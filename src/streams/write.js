import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const { stdin, stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    // Write your code here
    const writeStream = fs.createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));
    stdout.write('Write something: ');
    stdin.on('data', data => {
        writeStream.write(data);
        process.exit();
    });
    process.on('exit', () => stdout.write('Ready'));
};

await write();