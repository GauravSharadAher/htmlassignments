
let obj=[]

obj.push({ProductName : "SALT",ProductCost :"50Rs"})
obj.push({ProductName : "SALT",ProductCost :"50Rs"})
obj.push({ProductName : "SALT",ProductCost :"50Rs"})

for(x in obj){
    console.log(x,obj[x]["ProductCost"])
}