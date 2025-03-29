// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    if (win) {
        return win.year;
    } 
    else {
        return undefined;
    }
      
}

const record = [
    { year: "2015", result: "L" },
    { year: "2016", result: "W" },
    { year: "2017", result: "L" }
];

console.log(superbowlWin(record)); 
