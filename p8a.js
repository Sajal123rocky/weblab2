var readline=require('readline');
function vowelCount()
{
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    rl.question("Enter a String ",(input)=>{
        rl.close();
        var inp=input.toLowerCase();
        let obj={'a':0,'e':0,'i':0,'o':0,'u':0};
        //console.log(input+" "+inp);
        for(let i=0;i<inp.length;i++)
        {
            let c=inp.charAt(i);
            //console.log(c);
            if('aeiou'.includes(c))
            {
            if(obj[c])
            obj[c]++;
            else
            obj[c]=1;
        }
        }
        console.log(obj)
        for(let vowel in obj)
        {
            console.log(vowel+" "+obj[vowel]);
        }
    })
}
vowelCount();