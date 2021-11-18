var axios=require('axios');

async function getPeople(){
  const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json');
  return data;}

async function getPersonById(id){
  try{
    let people=await getPeople();

    if(id===undefined){throw "index must exist";}
    if(!Number.isInteger(id)){throw "index must be an integer";}
    if(id<1 || id>people.length){throw "index must be within bounds";}
    for (i = 0; i < people.length; i++) {
      if(people[i].id == id){
        return(people[i]);
        }}}
  catch(error){throw error;}}

async function howManyPerState(stateAbbrv) {
  try{

    if(stateAbbrv===undefined){throw "state must exist";}
    if(typeof stateAbbrv !== 'string')    {throw "stateAbbrv must be an string";}


    let people=await getPeople();
    var count = 0;

    for (i = 0; i < people.length; i++) {
      if(people[i].address.state == stateAbbrv){
       count = count+1
      }
    }
    if(count == 0){
      throw "Error since there are no people in "+ stateAbbrv;
    }

    return count
  }
  catch(error){throw error;}}

function sort_jsonarray(a, b) {
      return new Date(a.date_of_birth).getTime() - new Date(b.date_of_birth).getTime();
  }

function getAge(dob,index){

  var dateNow = Date.now()
  const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;
  var age = Math.floor((new Date(dateNow).getTime() - new Date(dob).getTime())/MS_PER_YEAR)
  return age

}

async function personByAge(index) {
  try{

    let people=await getPeople();
    let res = {
      first_name: '',
      last_name: '',
      date_of_birth: '',
      age: 0
      }
    if(index===undefined){throw "index must exist";}
    if(!Number.isInteger(index)){throw "index must be an integer";}
    if(index<0 || index>people.length-1){throw "index must be within bounds";}

    let people_sorted = people.sort(sort_jsonarray)
    var dob = people_sorted[index].date_of_birth
    var age = getAge(dob,index)
    res.first_name=people_sorted[index].first_name;
    res.last_name=people_sorted[index].last_name;
    res.date_of_birth=people_sorted[index].date_of_birth;
    res.age= age;

    return res

  }
  catch(error){throw error;}}

async function peopleMetrics(){
  try{
    let people=await getPeople();
    let vowels=['a','e','i','o','u'];
    var mf = 1;
    var m = 0;
    var totalAge = 0
    var item;
    var tl = 0
    let res={
      totalLetters:0,
      totalVowels:0,
      totalConsonants:0,
      longestName:"",
      shortestName:"",
      mostRepeatingCity: "",
      averageAge:0};
    for(i=0;i<people.length;i++){

      var lengthFullName = people[i].first_name.length + people[i].last_name.length
      var fullName = people[i].first_name+" "+people[i].last_name
      tl = tl + people[i].first_name.length + people[i].last_name.length;
      res.totalLetters=   tl;
      for(let j=0;j<lengthFullName;j++){
        if(vowels.includes(fullName.charAt(j).toLowerCase()))
          {res.totalVowels+=1;}
        else{res.totalConsonants+=1;}}
      if(i===0){
        res.longestName = fullName;
        res.shortestName = fullName;}
      if(lengthFullName >= res.longestName.length){
        res.longestName = fullName;}
      if(lengthFullName <= res.shortestName.length){
        res.shortestName = fullName;}

        for (j=i; j<people.length; j++)
        {
          if (people[i].address.city == people[j].address.city)
             m++;
             if (mf<m)
              {
                mf=m;
                res.mostRepeatingCity = people[i].address.city;
                } }
          m=0;
          var dob = people[i].date_of_birth
          totalAge = totalAge + getAge(dob,i)
      }
      res.averageAge =  totalAge/people.length

    return(res);}
  catch(error){throw error;}}

module.exports = {
    firstName: "Kunal",
    lastName: "Goyal",
    studentId: "10471054",
    getPeople,
    howManyPerState,
    personByAge,
    getPersonById,
    peopleMetrics};
