let st=[];
function insert(a)
{
    st.push(a);
}
function remove()
{
    return st.pop();
}
function display()
{
    if(st.length==0)
    console.log("empty");
    else
    for(let i=0;i<st.length;i++)
    console.log(st[i]);

}
module.exports={
    insert:insert,
    remove:remove,
    display:display

}
