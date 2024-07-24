//number 1
function reverseNum(num){
    let str=num.toString();
    let ans="";
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i];
        
    }
    ans=Number(ans);
    return ans;
}
console.log(reverseNum(32243));

//number 2
function isPalindrome(str){
    let backwards="";
    for(let i=str.length-1;i>=0;i--){
        backwards+=str[i];
        
    }
    if(str===backwards){
        return true;
    }
    return false;
}
console.log(isPalindrome("haha"));
console.log(isPalindrome("tot"));

//number 3
function genAllCombs(str){
    let arr=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++){
             arr.push(str.substring(i,j));
        }
    }
   
    return arr;
}
console.log(genAllCombs("dog"));

//number 4
function alphaOrder(str){
    let arr=[];
    let ans="";
    for(let i=0;i<str.length;i++){
        arr.push(str[i]);

    }
    arr.sort();
    for(let j=0;j<arr.length;j++){
        ans+=arr[j];
        
    }
    return ans;
}
console.log(alphaOrder("webmaster"));

//numbe 5
function UpperFirst(str){
    let arr=str.split(" ");
    
    for(let i=0;i<arr.length;i++){
        let word=arr[i];
        let u=word[0].toUpperCase();
        word=u+word.slice(1);
        arr[i]=word;
    
    }
    return arr.join(" ");
}
console.log(UpperFirst("the quick brown fox"));

//number 6
function longestWord(str){
    let arr=str.split(" ");
    let longest="";
    for(let i=0;i<arr.length;i++){
       if(arr[i].length>longest.length){
            longest=arr[i];
       }
    
    }
    return longest;
}
console.log(longestWord("Web Development Tutorial"));

//number 7
function vowelCounter(str){
    let count=0;
    const vowels=["a","e","i","o","u"];
    for(let i=0;i<str.length;i++){
        let word=str[i].toLowerCase();
        
       if(vowels.includes(word)){
            count++;
       }
    
    }
   
    return count;
}
console.log(vowelCounter("The quick brown fox"));

//number 8
function isPrime(num){
    let isPrime=true;
    if(num===1){
        return true;
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    return isPrime;
}
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));

//number 9
function isTypeOf(ex){
    return typeof ex;
}
console.log( isTypeOf(37));
console.log( isTypeOf(" "));
console.log( isTypeOf(true));
console.log( isTypeOf(undefined));

//number 10
function identityMatrix(rows, columns) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        console.log(row.join(" "));
        matrix.push(row);
    }
    return matrix;
}

console.log(identityMatrix(3, 3));

//number 11
function secondLowestandLargest(arr){
    let sortedarr=arr.sort(function(a, b){return a-b});
    console.log(sortedarr);
    let ans=[];
    ans[0]=sortedarr[1];
    ans[1]=sortedarr[arr.length-2];
    return ans;
}
console.log(secondLowestandLargest([1,2,3,4,5,6,7,8,9,10,11]));

//number 12
function isPerfect(num){
    let divisors=[];
    let sum=0;
    let isPerfect=false;
    for(let i=0;i<=num;i++){
        if(num%i===0){
            divisors.push(i);
        }
    }
    console.log(divisors);
    for(let j=0;j<divisors.length-1;j++){
        console.log(divisors[j]);
        sum+=divisors[j];
    }
    console.log(sum);
    if(sum===num){
        isPerfect=true;
    }
    return isPerfect;

}
console.log(isPerfect(6))

//number 13
function findFactors(num){
    let factors=[];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);
            if (i !== num / i) { 
                factors.push(num / i);
            }
        }
    }
    return factors.sort((a, b) => a - b); 
}
console.log(findFactors(30));

//number 14
function amountTocoins(amount, coins) {
    let arr = [];
    let remainder = amount;
    for (let i = 0; i < coins.length; i++) {
        while (remainder >= coins[i]) {
            remainder -= coins[i];
            arr.push(coins[i]);
        }
    }
    return arr;
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// number 15
function  bnValue(b,n){
    let ans=1;
    for(let i=0;i<=n;i++){
        ans*=b;
    }
    return ans;
}
console.log(bnValue(3,3));

//number 16
function extractCharacter(str){
    let seen=new Map([]);
    let res="";
    for(let i=0;i<str.length;i++){
        if(seen.has(str[i])){
            continue
            
        }else{
            seen.set(str[i],1);
            res+=str[i];
        }

    }
    return res;
}
console.log(extractCharacter("thequickbrownfoxjumpsoverthelazydog"));

//number 17
function numOccurence(str){
    let seen=new Map([]);
    for(let i=0;i<str.length;i++){
        if(seen.has(str[i])){
            let v= seen.get(str[i]);
            v++;
            seen.set(str[i],v);
            
        }else{
            seen.set(str[i],1);
        }

    }
    return seen;
}
console.log(numOccurence("thequickbrownfoxjumpsoverthelazydog"));

//number 18
function binarySearch(arr, x){    
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
         mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            high = mid - 1;
        else 
            low = mid + 1;
    }
    return -1;
}
console.log(binarySearch([2,3,4,5,10,30,40,50],10));
 //number 19;
function lagerThan(arr,x){
    let ans=[];
    for(let num of arr){
        if(num>x){
            ans.push(num);

        }
    }
    return ans;
}
console.log(lagerThan([2,3,4,5,10,30,40,50,34,23,47,80],25));

// number 20
function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
console.log(generateRandomId(40));

//number 21
function allSubset(arr,x){
    let ans=[];
    function helper(start,currentSubset){
        if(currentSubset.length === x){
            ans.push([...currentSubset]);
            return;
        }
        for(let i= start;i<arr.length;i++){
            currentSubset.push(arr[i]);
            helper(i + 1, currentSubset);
            currentSubset.pop();

        }
    }
    helper(0,[]);
    return ans;
}

console.log(allSubset([1, 2, 3], 2));

//number 22
function countOcc(str,c){
    let counter=0;
    for(let i=0;i<str.length;i++){
        if(str[i].toLowerCase()===c.toLowerCase()){
            counter++;
        }
    }
    return counter;

}

console.log(countOcc( 'microsoft.com', 'o'))

//number 23
function firstNonRepeat(str){
    let seen=new Map([]);
    for(let i=0;i<str.length;i++){
        if(seen.has(str[i])){
            let v= seen.get(str[i]);
            v++;
            seen.set(str[i],v);
            
        }else{
            seen.set(str[i],1);
        }

    }

    for (let i = 0; i < str.length; i++) {
        if (seen.get(str[i]) === 1) {
            return str[i];
        }
    }

    return null; 
}
console.log(firstNonRepeat('abacddbec'));

//number 24
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); 

//number 25
function Longest_Country_Name(countries) {
    let longestName = "";
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestName.length) {
            longestName = countries[i];
        }
    }
    return longestName;
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"])); 

//number 26
function longestSubstring(str){
    let ans="";
    let seen=new Map([]);
    for(let i=0;i<str.length;i++){
        if(seen.has(str[i])){
            let v= seen.get(str[i]);
            v++;
            seen.set(str[i],v);
            break;
        }else{
            seen.set(str[i],1);
            ans+=str[i];
        }

    }
    return ans;
}
console.log(longestSubstring("abcabc"));
console.log(longestSubstring("cdcdcdcd"));

//number 27
function longestPalindrome(str) {
    let n = str.length;
    let maxLength = 1;
    let start = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let flag = true;
            for (let k = 0; k < (j - i + 1) / 2; k++) {
                if (str[i + k] !== str[j - k]) {
                    flag = false;
                    break;
                }
            }
            if (flag && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    let ans = str.substring(start, start + maxLength);
    return ans;
}


console.log(longestPalindrome("bananas")); 
//numbe 28
function runFunc(func,para){
    func(para);
}
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
console.log(runFunc(sayHello,"Tom"));

// number 29
function getFunctionName(func) {
    return func.name;
}

function sampleFunction() {
    console.log("This is a sample function.");
}
console.log("Function name:", getFunctionName(sampleFunction)); 