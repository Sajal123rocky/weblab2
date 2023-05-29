function calculator(num)
{
    this.num=num;
}
calculator.prototype.add=function(n){
    this.num=this.num+n;
    return this;
}
calculator.prototype.subtract=function(n){
    this.num=this.num-n;
    return this;
}
calculator.prototype.answer=function(){
    return this.num;
}
var ans=new calculator(2).add(2).add(2).subtract(4).answer();
console.log(ans);