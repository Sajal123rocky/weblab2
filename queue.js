let st=[];
module.exports.enque=function (a)
{
    st.push(a);
}
module.exports.deque=function()
{
    return st.shift();
}
module.exports.displayq=function()
{
    if(st.length==0)
    console.log("empty");
    else
    for(let i=0;i<st.length;i++)
    console.log(st[i]);

}
// module.exports={
//     insert:insert,
//     remove:remove,
//     display:display

// }
