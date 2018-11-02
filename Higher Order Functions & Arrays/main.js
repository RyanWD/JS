const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  /* PRACICE AREA */

function showDate() {
    let time = document.getElementById('time');
    time.innerHTML = Date();
}

function clearDate() {
    let time = document.getElementById('time');
    time.innerHTML = '';
}


  /* PRACICE AREA */

  // basic for loop
  /*
  for(let i = 0; i < companies.length; i++) {
      console.log(companies[i])
  }
*/


// forEach 
 // same as a for loop, but smarter.
 /*
  companies.forEach(function(Company) {
      console.log(Company)
  });
*/

  
// Using a for loop to work like a filter 
/*
  let canDrink = [];
  for(let i = 0; i < ages.length; i++) {
      if(ages[i] >= 21) {
          canDrink.push(ages[i]);
      }
  }
  console.log(canDrink);
*/

// --------------------------FILTER----------------------------

// filter - no loops or empty arrays to push to are required. (ES5)
/*
  const canDrink = ages.filter(function(age) {
 if (age >= 21) {
     return true;
 }
  });

  console.log(canDrink);
*/ 


 // filter  with arrows -> even better  (ES6)
  /*
  const canDrink = ages.filter(age => age >= 21);
  console.log(canDrink);
*/
  

// filter practice #2 (ES5)
/*
  const retailCompanies = companies.filter(function(company){
if(company.category === 'Retail') {
    return true
}
});
  console.log(retailCompanies);
*/


  // filter practice #2 (ES6)
 /*  const retailCompanies = companies.filter(company => company.category === 'Retail');
  console.log(retailCompanies); */


  // filer practice #3 (ES6) - all companies from 80's 
/* const eightiesCompany = companies.filter(eighties => eighties.start < 1990);
console.log(eightiesCompany); */


  // filer practice #3 (ES6) - all companies that lasted for 10 years+
/*   const longCompany = companies.filter(lasted => (lasted.end - lasted.start >= 10));
  console.log(longCompany); */


// --------------------------MAPS----------------------------


// Create array of company names using map (ES5)
/* const companyNames = companies.map(function(company) {
    return company.name;

});
console.log(companyNames) */

// You can manipulate the data you take from the array (ES5)
/* const testMap = companies.map(function(company) {
   // (ES6) string interpolation uses the grave accent (left of the z key)
    return `${company.name} [${company.start} - ${company.end}]`;

});
console.log(testMap);
 */

// map using (ES6)
/* const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`); 
console.log(testMap);
 
 */

 // more map (ES6) squaring all ages.
/*  const agesSquare = ages.map(age => Math.sqrt(age));
 console.log(agesSquare); */

 // to add more conditions with map
/*  const agesSquareX2 = ages
 .map(age => Math.sqrt(age))
 .map(age => age * 2);

 console.log(agesSquareX2); */


// --------------------------SORT----------------------------

// sort compares by start year (ES5)
/* const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) {
return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies); */


// shorter version of sort using (ES6)
// Using a Ternary operator if --> ? and else :
/* const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies); */


// more sort using ages array. (ES6)
// puts the ages in order youngest to oldest
/* const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
 */


// --------------------------REDUCE----------------------------


// adding all ages together. 
// First done usuall way using a for loop
/* let ageSum = 0;
for(let i = 0; i < ages.length; i++) { 
    ageSum += ages[i];
}
console.log(ageSum); // 460 */


// adding all ages together. 
// now using reduce but in (ES5)
/* const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);

console.log(ageSum); */


// adding all ages together. 
// now using reduce (ES6)
/* const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);


// adding all company years together. (ES5)
const totalYears = companies.reduce(function(companyTotal, age) {
return companyTotal + (age.end - age.start);
}, 0);
console.log(totalYears); */



// adding all company years together. (ES6)
/* const allCompanies = companies.reduce((total, age) => total + age.end - age.start, 0);
console.log(allCompanies); */


// --------------------------COMBINE METHODS----------------------------


/* const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => (a > b ? 1 : -1)) // or just ((a, b) => a - b);
.reduce((total, age) => (total + age), 0);

console.log(combined) */


//--------------------------- PRACTICE ------------------------------------

//   Successful practice #1 

/* let adults = []
let kids = [];
const test = ages.filter(i => i < 18 ? kids.push(i) : adults.push(i));
  console.log(kids);
  console.log(adults); */

