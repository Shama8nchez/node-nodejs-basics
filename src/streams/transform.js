const { stdin, stdout } = process;
import { Transform } from 'stream';

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        const result = chunk.toString().split('').reverse().join('');
        callback(null, result + '\n');
    }
})

const transform = async () => {
    // Write your code here
    stdout.write('Write something: ');
    stdin.pipe(myTransform).pipe(stdout);
};

await transform();