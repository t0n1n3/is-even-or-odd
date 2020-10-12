isEvenOrOdd = (num) => {
    if (num === 0) {
        console.log('Is even!!');
    } else if (num === 1) {
        console.log('Is odd!!');
    } else if (num === 2) {
        console.log('Is even!!');
    } else if (num === 3) {
        console.log('Is odd!!');
    } else if (num === 4) {
        console.log('Is even!!');
    } else if (num === 5) {
        console.log('Is odd!!');
    } else if (num === 6) {
        console.log('Is even!!');
    } else if (num === 7) {
        console.log('Is odd!!');
    } else if (num === 8) {
        console.log('Is even!!');
    } else if (num === 9) {
        console.log('Is odd!!');
    } else {
        console.error('\x1b[31m%s\x1b[0m', `Error Code - ${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`);
    }
}

isEvenOrOdd(parseInt(process.argv[2]));
