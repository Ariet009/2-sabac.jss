// string
// number
//boolean (true,false)

//  const isProgrammist = prompt("Are you develop");

//  if (isProgrammist){
//     console.log("you are developer");
//  }else{
//     console.log('Sorry');
//  }


const age=prompt('How old are you');

 if (isNaN(age) || age === ""){
  console.log("пожалуйста, введите сотвествуюшее число");
  const ageNumber=Number(age);
 }

 if (age >=3 && age<=5){
   console.log(' Щенячий-патруль');

 } if (age >=5 && age<=10){
    console.log(' человек паук');

 }else if (age >= 10 && age <=25){
   console.log('турдуу кинолор');

 }else if (age >25 && age <=35){
   console.log(' сериалы')

 }else if(age >35 && age <=70){
   console.log('жанылыктар')

 } else if (age >=70 && age <= 100){
   console.log('газета')

 } else {
  console.log("Этой цифры нет в диапазане")
 }
