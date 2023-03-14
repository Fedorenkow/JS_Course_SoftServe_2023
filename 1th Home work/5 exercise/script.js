let gb = prompt("How many GB in your Flash drive?");
gb*=1024;
let mb = 820;
let result;
let counter = 0;

while(gb >= mb){
    gb -= mb; 
    counter++;
}
alert(`We can saved ${counter} files of size 820 MB`);

