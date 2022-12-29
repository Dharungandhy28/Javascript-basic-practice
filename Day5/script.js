// objects:

// 1. 
var obj ={
    name: "Dharun",
    age: 20,
    year: 2022
};
console.log(obj.age); // Accessing dot method
console.log(obj["year"]); // box method

// To add new key value pair 
obj.email = "hello@gmail.com"; // syntax ojectname.keyname=value;
console.log(obj);

obj.category = {gender: "male"};
console.log(obj);

// 2. For in loop:
for(var key in obj){
    console.log(key,obj[key]);
}

// 3. Array of objects:
var arr = [{name: "Dharun", age: 20},{name: "varun", age: 20}];
console.log(arr[1].name);
console.log(arr[1].age);


// To print all we can use for loop
for(var i=0; i<arr.length; i++){
    console.log(arr[i].name+" "+arr[i].age);
}

// 4. Json:
var arr1 = {
    "name": "dharun",
    "age": "22"
};
console.log(arr1);
console.log(arr1.age);

// sample resume in json

var resume = {
    "name": "Dharun Gandhi",
    "Email": "dharungandhi.1@gmail.com",
    "phone num": "945xxxxxxx",
    "locationn": {
        "address": "47, bazar street",
        "postal code": "62xxxx",
        "city": "Trichy",
        "country": "India"
    },
    "voluenteer": [{
        "organization": "Student guidence of service (SGS)",
        "position": "cooprative member",
        "start date": "01-06-2019",
        "End date": "01-06-2021",
        "Summary": "It is a type of voluenteer which is helpful for students to participate technical activities"
    }],
    "Education": [{
        "institution": "Dr.MCET",
        "area": "Computer science",
        "Study type": "Bachelore",
        "Start date": "01-06-2018",
        "End date": "18-05-2022",
        "Score": "7.5 cgpa",
        "courses": [
            "DB"-"Mysql"
        ]
    }],
    "Skills": [{
        "Certificate": "Machine Learning",
        "date": "22-05-2021",
        "issure": "IBM"
    }],
    "Publications": [{
        "Name": "Web Development",
        "Level": "Beginner",
        "Keywords": [
            "Html",
            "CSS",
            "Javascript"
        ]
    }],
    "Languages": [{
        "language": "Tamil, English",
        "fluency": "Native speaker"
    }],
    "Intrest": [{
        "Name": "swimming",
        "keywords": [
            "100 m",
            "200 m"
        ]
    }],
    "Projects": [{
        "Name": "Machine Learning",
        "Description": "TO develop the agriculture crop recommendation based on soil fertility",
        "Highlights": [
            "Best of 3 in college"
        ],
        "Keywords": [
            "Python",
            "Machine learning algorithms"
        ],
        "Start date": "07-02-2022",
        "End date": "02-05-2022"
    }]
}
console.log(resume);