//let object=[
 //   {"person":"John","age":30,"company":"Google"},
//    {"person":"Mohn","age":37,"company":"Flipkart"},
  //  {"person":"Kohn","age":38,"company":"Amazon"},
    //{"person":"Sohan","age":40,"company":"Myntra"},
    //{"person":"Jenny","age":70,"company":"Apple"},
//]


//looping mechanisms
//for loop
//for(let i=0;i<object.length;i++)
//{
  //console.log(`
    //Name:${object[i].person}
    //age:${object[i].age}
    //company:${object[i].company}
  //`)
//}
//for each loop
//object.forEach(data=>{
 //   console.log(`
  //  name:${data.person}
  //  age:${data.age}
    //company:${data.company}
   // `)
//})
//for in loop
//for(let key in object){
 //   console.log(key);
 //   console.log(`
  //  Name:${object[key].person}
  //  Age:${object[key].age}
  //  company:${object[key].company}
    //)
//}
//for of loop
//for(let data of object){
  //  console.log(`
    //name:$(data.person)
    //age:$(data.age)
    //company:$(data.company)
    //`)
//}
/*output 
Name:John
    age:30
    company:Google
  
task3.js:14 
    Name:Mohn
    age:37
    company:Flipkart
  
task3.js:14 
    Name:Kohn
    age:38
    company:Amazon
  
task3.js:14 
    Name:Sohan
    age:40
    company:Myntra
  
task3.js:14 
    Name:Jenny
    age:70
    company:Apple
    */

    //code for printing resume data
    let myResume=[
        {"basics":(`
          "name": "aiman shahid",
          "email": "aimanshahid5003@gamil.com",
          "phone": 6303259855,
          "degree": "B.E"`),
    
    
        "location": (`
            "address": "1-2-340.rose village",
            "postalCode": 500021,
            "city": "hyderabad",
            "state": "Telengana",
            "country": "India",
          `),
        
        
        "work":          (`
            "company": "Tata consultancy services",
            "position": "Business Executive",
            "startDate": "2018",
            "endDate": "2022",
          `),
    
        
        "education":
          (`
            "institution": "stanley College Of Engineering and technology for women",
            "department": "ece",
            "batch": 2016,
          `),
        "skills":
          (`
            "name": "ECE engineer",
            "level": "fresher",
            "project": [
              "automatic detection and destroying of missiles",
            `),
        "languages":
          (`
            "language": "urdu,hindi,Enlish",
          `),
    
        "interests":
          (`
            "name": "badminton",'debates";
          `)
            }
            ]
      console.log(myResume);
     /*output
     basics:      
    "name": "aiman shahid",        
     "email": "aimanshahid5003@gamil.com"
    "phone": 6303259855,        
    "degree": "B.E"
education:            
"institution":"stanley College Of Engineering and technology for women",   
"department":"ece",          
 "batch": 2016,    
interests: "badminton",debates"          
languages: "urdu,hindi,Enlish"          
location:"address": "1-2-340.rose village", 
 "postalCode": 500021,           
"city": "hyderabad",   
"state": "Telengana",   
"country": "India",       
skills:"ECE engineer",
"level": "fresher",     
"project":"automatic detection and destroying of missiles",       
work:  
 company: "Tata consultancy services", 
"position":"Business Executive",       
 "startDate": "2018",            
"endDate": 2022,
*/