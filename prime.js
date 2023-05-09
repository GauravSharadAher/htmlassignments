let y=2
let count=0;
for(let i=2;i<=200;i++){
    if(i%y==0){
        count++
    }
    if((y==i) && (count==1)){
        console.log(i)
        count=0;

        continue
    
    }if(y==i){
        y=2;
    }
    y++;
}