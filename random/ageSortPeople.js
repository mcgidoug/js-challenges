let people = [
    {name: "Dan",
    age: 19,
    hobby: "fishing"    
},
    {name: "Julie",
    age: 15,
    hobby: "bowling"    
},
    {name: "George",
    age: 34,
    hobby: "guitar"    
},
    {name: "Betty",
    age: 11,
    hobby: "running"    
},
    {name: "Pete",
    age: 8,
    hobby: "reading"    
},
];

function peopleSort(people){
    let sortedPeople = [];
    for(let key in people){
        if(people[key].age >= 18) {
            sortedPeople.push(people[key]);
        }
    }
    return sortedPeople;
}

console.log(peopleSort(people))