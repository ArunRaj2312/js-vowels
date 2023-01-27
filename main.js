var val=prompt("enter fond the vowels");
var arr=[];
var vowel=["a","e","i","o","u"];
var res=[];
var a=0;
for(var i=0;i<val.length;i++){
    arr[i]=val.slice(i,i+1);
}
console.log(arr);
for(var k=0;k<vowel.length;k++){
    for(var j=0;j<arr.length;j++){
        if(vowel[k]==arr[j]){
            res[a]=arr[j];
            a++;
        }
    }
}
console.log(res);