class Products{
    constructor(pname,pcost){
        this.ProductName=pname
        this.ProductCost=pcost
    }
    showdetails(){
        console.log("Product name is " + this.ProductName +  " And cost is "+this.ProductCost)
    }
}


let arr=[]
let i=0
arr.push(new Products("TATA Salt",50))
arr.push(new Products("TATA namak",50))
arr.push(new Products("TATA mit",100))
// console.log(arr[0].showdetails())
while( i< arr.length){
    arr[i].showdetails()
    i++
}



