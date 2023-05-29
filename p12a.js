const st=require('./stack');
const q=require('./queue');

st.insert(1);
st.insert(2);
st.insert(3);
st.insert(4);
console.log("before")
st.display();
console.log("popped element is "+st.remove());
console.log("after")
st.display();
console.log("queue");
q.enque(1);
q.enque(2);
q.enque(3);
q.enque(4);
console.log("before")
q.displayq();
console.log("removed element is "+q.deque());
console.log("after");
q.displayq()