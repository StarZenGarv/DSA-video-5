//Arrays are mutable(can change their state)
//Strings are immutable(cant change their state)

//1) slice(start,end) (extracts substring)
//2) substring(start,end) (similar to slice but no negative indexes)
//3) substr(start,length) (extracts substring from 'start' and also its length)

function toggleUpperLower(){
    let s = prompt('Enter a string to toggle Uppercase and Lowercase');
    let toggle = '';

    for(let i=0;i<s.length;i++){
        let ch = s.charCodeAt(i)
        if(ch>=67 && ch<=90){
            toggle+=String.fromCharCode(ch+32)
        }else if(ch>=97 && ch<=122){
            toggle+=String.fromCharCode(ch-32)
        }
    }
    console.log(toggle);
    
}

function freqFromBitmap(){
    let s = prompt('Enter a string to find frequency of each letter in the string');
    let arr = new Array(128).fill(0);
    for(let i=0;i<s.length;i++){
        let indx = s.charCodeAt(i)
        arr[indx]+=1
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            console.log(`${String.fromCharCode(i)} appears ${arr[i]} time`)
        }
    }
    
}

toggleUpperLower()
freqFromBitmap()