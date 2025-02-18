    //Comment
    console.log('Vibe Checker');

    //var       --> Declare Variable
    //let       --> Declare Variable
    //const     --> Declare Constant
    let name = 'Name';
    const birthYear = 2000;
    let currentYear = 2025;
    console.log(name);


    //Reference types: obejects, arrays & functions
    
    // Objects
    let person = {
        firstName: "Ana",
        age: 30
    }
    //Dot Notation
    person.firstName ='Antonio';
    //Bracket Notation (dinamic properties)
    person['name']='Ainara';

    //Arrays
    let selectedColors = ['red','blue']
    selectedColors[2]='2';
    console.log(selectedColors[0]);
    console.log(selectedColors.length);

    //Functions
    function greet(name){           //(parameter)
        console.log('Hello '+ name);
    }

    greet('John');                  //(argument)
    greet('Mary'); 

    function calculateAge(birthYear, currentYear){
        return currentYear - birthYear
    }

    //let age = calculateAge(birthYear, currentYear);
    //console.log(age);

    console.log(calculateAge(birthYear, currentYear));

