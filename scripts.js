let friends = ["Audrey", "Yzerman", "Apollo", "Chris", "Josh"];

//inner for loop to generate 100 lines of song per friend
function songTest(currentFriend) {
    for (let i = 10; i > 0; i--) {
        let linesLeft = i;
        if (i === 1) {
            console.log(linesLeft + " line of code in the file, " + linesLeft + " line of code; " + currentFriend + " strikes one out, clears it all out, no more lines of code in the file");
        } else {
            let oneLessLine = linesLeft - 1;
            console.log(linesLeft + " lines of code in the file, " + linesLeft + " lines of code; " + currentFriend + " strikes one out, clears it all out, " + oneLessLine  + " lines of code in the file");
        }
    }
}

songTest("LUKE");
