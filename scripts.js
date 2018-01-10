let friends = ["Audrey", "Yzerman", "Apollo", "Chris", "Josh"];

//outer for loop to generate a song for each friend
function songOuter(whichFriend) {
    for (let j = 0; j < whichFriend.length; j++) {
        songInner(whichFriend[j]);
    }
}

//inner for loop to generate 100 lines of lyrics per friend
function songInner(currentFriend) {
    for (let i = 100; i > 0; i--) {
        let linesLeft = i;
        if (i === 1) {
            console.log(linesLeft + " line of code in the file, " + linesLeft + " line of code; " + currentFriend + " strikes one out, clears it all out, no more lines of code in the file\n" + "**----------------------------**\n");
        } else {
            let oneLessLine = linesLeft - 1;
            console.log(linesLeft + " lines of code in the file, " + linesLeft + " lines of code; " + currentFriend + " strikes one out, clears it all out, " + oneLessLine + " lines of code in the file");
        }
    }
}

songOuter(friends);