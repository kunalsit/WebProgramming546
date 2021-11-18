const peoplejs=require("./people");

var axios=require('axios');

async function getWork(){
  const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json');
  return data;}

async function listEmployees() {
  let people=await peoplejs.getPeople();
  let work=await getWork();

  const keys_to_keep = ['company_name', 'employees'];

  var empl = [];

  const redux = array => array.map(o => keys_to_keep.reduce((acc, curr) => {
    acc[curr] = o[curr];
    return acc;
  }, {}));

   let filteredWork = redux(work)
   var cnt = 0;
   for(i=0;i<filteredWork.length;i++){
      var idArr = filteredWork[i].employees
      var empl = [];
      for(j =0; j<idArr.length; j++){
        let personSearch=people.filter(function(x){
          return(x.id === idArr[j] );});
          empl.push({"first_name" : personSearch[0].first_name, "last_name" : personSearch[0].last_name})

      }
      filteredWork[i].employees = empl.slice(0);
      empl = [];


   }
   console.log(filteredWork[4].employees)
}

async function whereDoTheyWork(ssn){
  try{
    let people=await peoplejs.getPeople();
    let work=await getWork();

    if(ssn===undefined){throw "ssn must exist";}
    if(typeof ssn!=='string'){throw "ssn must be a string";}

    let dashcount=0;
    for(let i=0;i<ssn.length;i++){
      if(ssn[i]==='-'){dashcount+=1;}
    }
      if(dashcount!==2){throw  "Error, not in proper format";}


    let personSearch=people.filter(function(x){
      return(x.ssn === ssn );});
    if(personSearch.length<1){throw "Error as no one exists with that SSN";}

    for(i=0;i<work.length;i++){
       for(j=0;j< work[i].employees.length; j++){
          if(work[i].employees[j] === personSearch[0].id){
            co_name = work[i].company_name
          }
       }
    }

      return(personSearch[0].first_name+" "+personSearch[0].last_name+
      " works at "+co_name+"."
      );}
  catch(error){throw error;}}

function isphoneNumber(string){
    let res='';
    let dashcount=0;
    for(let i=0;i<string.length;i++){
      if(string[i]==='-'){dashcount+=1;}
    }
      if(dashcount!==2){return false;}
    return true;}

async function fourOneOne(phoneNumber){
  try{
  let work=await getWork();
  let res={
    company_name:"",
    company_address:{
      street_address: "",
      city: "",
      state: "",
      zip_code: ""
    }
};

  if(phoneNumber===undefined){throw "phoneNumber must exist";}

  if(!isphoneNumber(phoneNumber)){throw "phoneNumber must be in proper format";}

  let numberSearch=work.filter(function(x){
    return(x.company_phone===phoneNumber);});
  if (numberSearch.length <= 0)
  {
    throw "error as nothing exists for that phone number";
  }
  res.company_name = numberSearch[0].company_name
  res.company_address.street_address = numberSearch[0].company_address.street_address
  res.company_address.city = numberSearch[0].company_address.city
  res.company_address.state = numberSearch[0].company_address.state
  res.company_address.zip_code = numberSearch[0].company_address.zip_code

  return res
}
catch(error){throw error;}}

  module.exports = {
      firstName: "Kunal",
      lastName: "Goyal",
      studentId: "10471054",
      whereDoTheyWork,
      getWork,
      listEmployees,
      fourOneOne};
