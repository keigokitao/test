let val1 = "let変数";
console.log(val1);
//テンプレート文字列
const name ="Me";
const age = 22;
//アロー関数
function func1(str){
return str;
}
console.log(func1("fun1です"));

//アローかんすう
const func2 =(str) =>{
return str;
}

(str) =>{
  return str;
}
const funnum =(num1,num2)=>{
  return num1 + num2;
}
console.log(funnum(10,39));

// const myprofile ={
//   name:nana,
//   age:22,
// }
// const message ='名前は@{name}です。年齢は@{age}でし';
// console.log(message);

// //分割だいにゅう
// const {name,age} =myprofile;
// const message2 ='名前は@{name}です。年齢は@{age}でし';

const myprofile1 = ['test',12];
const message4 =`名前${myprofile1[0]}です`;

//スプレっと構文(...書く構文)
//配列の展開
/*const arr1 =[1,2];
console.log(arr1);
console.log(...arr1);//配列の中身を順番に処理
const sumFunc=(num1,num2) => console.log(num1 + num2);
sumFunc(arr1[0],arr1[1]);
sumFunc(...arr1);//スプレット構文は要素の順番に処理を行う*/

//まとめる
/*const arr2=[1,2,3,4,5];
const [num1,num2,...arr3]=arr2;
console.log(arr3);*/

//配列のコピー、結合
const arr4 =[10,20];
const arr5 =[30.40];
const arr6 =[...arr4];
console.log(arr6);

const arr7=[...arr4,...arr5];
console.log(arr7);

