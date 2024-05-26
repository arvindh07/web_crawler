function main(){
    if(process.argv.length < 3){
        console.log("no url provided");
        console.log("So exiting...");
        process.exit(1);
    } else if(process.argv.length > 3){
        console.log("cant process multiple urls");
        process.exit(1);
    }
    console.log(process.argv);
}

main();