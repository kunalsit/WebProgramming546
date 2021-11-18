const peoplejs = require("./people");

const workjs = require("./work");

async function main(){
  try{const x=await peoplejs.getPersonById(43);
    console.log(x);}
  catch(e){console.log(e);}

  try{const x=await peoplejs.getPersonById(-1);
    console.log(x);}
  catch(e){console.log(e);}

  try{const x=await peoplejs.getPersonById(1001);
    console.log(x);}
  catch(e){console.log(e);}

  try{const x=await peoplejs.getPersonById();
    console.log(x);}
  catch(e){console.log(e);}

   try{const x=await peoplejs.howManyPerState("NY");
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.howManyPerState("CO");
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.howManyPerState(-1);
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.howManyPerState("WY");
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.howManyPerState();
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.personByAge(0);
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.personByAge(43);
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.personByAge(500);
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.personByAge(999);
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.personByAge(-1);
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.personByAge(1000);
     console.log(x);}
   catch(e){console.log(e);}

   try{const x=await peoplejs.personByAge();
     console.log(x);}
   catch(e){console.log(e);}

    try{const x=await peoplejs.peopleMetrics();
      console.log(x);}
    catch(e){console.log(e);}

    try{const x=await workjs.listEmployees();
      console.log(x);}
   catch(e){console.log(e);}


   try{const x=await workjs.fourOneOne("240-144-7553");
    console.log(x);}
   catch(e){console.log(e);}

   try{const x=await workjs.fourOneOne(43);
   console.log(x);}
   catch(e){console.log(e);}

   try{const x=await workjs.fourOneOne("'212-208-8374'");
    console.log(x);}
   catch(e){console.log(e);}

   try{const x=await workjs.fourOneOne('5045890047');
    console.log(x);}
   catch(e){console.log(e);}

   try{const x=await workjs.fourOneOne();
    console.log(x);}
   catch(e){console.log(e);}


   try{const x=await workjs.whereDoTheyWork('299-63-8866');
     console.log(x);}
    catch(e){console.log(e);}

    try{const x=await workjs.whereDoTheyWork('277-85-0056');
      console.log(x);}
     catch(e){console.log(e);}

     try{const x=await workjs.whereDoTheyWork();
       console.log(x);}
      catch(e){console.log(e);}

      try{const x=await workjs.whereDoTheyWork('123456789');
        console.log(x);}
       catch(e){console.log(e);}

       try{const x=await workjs.whereDoTheyWork('264-67-0084');
         console.log(x);}
        catch(e){console.log(e);}


}

main();