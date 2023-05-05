const resume = {
    "name": "kaviarasan",
    "email": "kavi@example.com",
    "phone": "555-555-5555",
    "address": "123 Main St, tiruvannamalai",
    "education": [
      {
        "degree": "BE mech",
        "major": "mech",
        "school": "arunai engineering college",
        "year": "2016"
      },
       ],
    "workExperience": [
      {
        "position": "Software Engineer",
        "company": "ABC Corporation",
        "location": "chennai",
        "startDate": "January 2017",
        "endDate": "Present",
        "responsibilities": [
          "Developed and maintained web applications using React and Node.js",
          "Worked with a team of developers to implement new features and fix bugs",
          "Implemented automated testing using Jest and Enzyme"
        ]
      },
       ],
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Marketing",
      "Team Management"
    ]
  };
  
  console.log(resume);
  
  
  
  Foreach in json
  const data = [
    {
      name: 'king',
      age: 30,
      city: 'chennai'
    },
    {
      name: 'ko',
      age: 25,
      city: 'vellor'
    },
    {
      name: 'ram',
      age: 40,
      city: 'madhurai'
    }
  ];
  
  data.forEach(function(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.city);
    console.log('-----------------');
  });
  
  
  For of in json
  
  
  const data = [
    {
      name: 'ram',
      age: 30,
      city: 'chennai'
    },
    {
      name: 'sri',
      age: 25,
      city: 'vellor'
    },
    {
      name: 'jk',
      age: 40,
      city: 'madhurai'
    }
  ];
  
  for (let obj of data) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.city);
    console.log('-----------------');
  }
  
  
  For in loop 
  
  const data = {
    name: 'jk',
    age: 30,
    city: 'chennai'
  };
  
  for (let key in data) {
    console.log(`${key}: ${data[key]}`);
  }
  
  
  
  For loop
  
  
  
  
  const data = [  {    name: 'king',    age: 30,    city: 'trichi'  }, 
  {    name: 'ko',    age: 25,    city: 'vellor'  },  
  {    name: 'ram',    age: 40,    city: 'madhurai'  }];
  
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
    console.log(data[i].age);
    console.log(data[i].city);
    console.log('-----------------');
  }
  