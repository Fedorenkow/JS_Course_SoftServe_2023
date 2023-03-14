let gb = prompt("How many GB in your Flash drive?");
gb*=1024;
let mb = 820;
let result = Math.floor(gb/mb);

alert(`We can saved ${result} files of size 820 MB`);

