const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("error first - ", err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log("error second - ", err);
            return;
        }
        const second = result;

        writeFile("./content/result-async.txt", `Here is the result2 : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log("error third - ", err);
                return;
            }

            console.log("done");
        });
    });
});

console.log("starting the next task");
