const express=require('express')

const app=express()
    
      
     
      // app.get('/api/filter', (req, res) => {
      //   const filterCriteria = req.query.criteria;
      
      //   const filteredResults = filterData(filterCriteria);
      
      //   res.json(filteredResults);
      // });
      
      // function filterData(criteria) {
                 const students =  [{
          "id": 1,
          "first_name": "Leroy",
          "last_name": "Kiefer",
          "email": "lkiefer0@army.mil"
        }, {
          "id": 2,
          "first_name": "Frederique",
          "last_name": "Simonutti",
          "email": "fsimonutti1@home.pl"
        }, {
          "id": 3,
          "first_name": "Artie",
          "last_name": "Dibson",
          "email": "adibson2@behance.net"
        }, {
          "id": 4,
          "first_name": "Emmanuel",
          "last_name": "Skeels",
          "email": "eskeels3@amazon.de"
        }, {
          "id": 5,
          "first_name": "Bren",
          "last_name": "Margiotta",
          "email": "bmargiotta4@unicef.org"
        }, {
          "id": 6,
          "first_name": "Fawne",
          "last_name": "Georgot",
          "email": "fgeorgot5@slate.com"
        }, {
          "id": 7,
          "first_name": "Joell",
          "last_name": "Okenden",
          "email": "jokenden6@cbslocal.com"
        }, {
          "id": 8,
          "first_name": "Teresa",
          "last_name": "Leneve",
          "email": "tleneve7@istockphoto.com"
        }, {
          "id": 9,
          "first_name": "Dareen",
          "last_name": "Baskeyfield",
          "email": "dbaskeyfield8@cornell.edu"
        }, {
          "id": 10,
          "first_name": "Chryste",
          "last_name": "Petraitis",
          "email": "cpetraitis9@creativecommons.org"
        }]
  
  
  
      //   const filteredData = data.filter(item => item.email > criteria);
      
      //   return filteredData;
      // }
      
    
      

// const app=express()
app.use(express.json())
app.listen(5050,()=>{
    console.log("listem this port 3000")
})

app.get('/',(req,res)=>{
    res.json({message:"api is working"})
  

})
app.get('/students',(req,res)=>{
    res.json(students)

})
app.get("/",(req,resp)=>{


app.post('/students',(req,res)=>{
    if(!req.body.email){
         res.status(400)
         return res.json({error:"email is resportion"})
    }
    const user ={
        id:students.length +1,
        first_name :req.body.first_name,
        last_name :req.body.last_name,
        email : req.body .email
    }
    students.push(user)
    res.json(user)
    
})
})
