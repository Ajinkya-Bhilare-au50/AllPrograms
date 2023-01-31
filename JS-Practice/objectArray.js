const quizData = [
  {
    id: 0,
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
    userchoice: "a",
  },
  {
    id: 1,
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
    userchoice: "b",
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
    userchoice: "a",
  },
  {
    id: 3,
    question: "In which year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
    userchoice: "c",
  },
  {
    id: 4,
    question: "who was the Founder of Indian Navy",
    a: "Chhatrapati Shivaji Maharaj",
    b: "Rani Laxmibai",
    c: "Chhatrapati Sambhaji Maharaj",
    d: "Chhatrapati Shahu Maharaj",
    correct: "a",
    userchoice: "a",
  },
  {
    id: 5,
    question:
      "During the first world war,which country signed the Peace treaty(1917) with Germany",
    a: "England",
    b: "USA",
    c: "Russia",
    d: "Austria",
    correct: "c",
    userchoice: "",
  },
  {
    id: 6,
    question: "When did UK declared war on Germany",
    a: "4th April 1939",
    b: "18th August 1939",
    c: "28th August 1939",
    d: "3rd september 1939",
    correct: "d",
    userchoice: "",
  },
  {
    id: 7,
    question: "In Which year,America joined Second World War",
    a: "1939",
    b: "1940",
    c: "1941",
    d: "1942",
    correct: "c",
    userchoice: "",
  },
  {
    id: 8,
    question: "Who were the axis powers in World War-II",
    a: "Poland,Japan,Germany",
    b: "Germany ,Italy,Japan",
    c: "Germany,Italy,France",
    d: "Germany,Italy,Britain",
    correct: "b",
    userchoice: "",
  },
  {
    id: 9,
    question:
      "Pearl Harbour,an American Naval and Airforce base was attacked by",
    a: "Germany",
    b: "Japan",
    c: "France",
    d: "Britain",
    correct: "b",
    userchoice: "",
  },
];

let updatedArray = quizData.map((data) => {
  if (data.correct === data.userchoice) {
    return { ...data, resultIcon: "✔️" };
  } else return { ...data, resultIcon: "❌" };
});

let updatedArray2 = quizData.map((data) => {
  let correctOptionKey = Object.keys(data).find((d) => d === data.correct);
  if (data.correct === data.userchoice) {
    return {
      ...data,
      resultIcon: "✔️",
      [correctOptionKey]: `${data[data.correct]} ✔️✔️`,
    };
  } else if (data.correct != data.userchoice) {
    let userOptionKey = Object.keys(data).find((d) => d === data.userchoice);
    return {
      ...data,
      resultIcon: "❌",
      [userOptionKey]: `${data[data.userchoice]} ❌`,
      [correctOptionKey]: `${data[data.correct]} ✔️`,
    };
  } else return { ...data, resultIcon: "❌" };
});

console.log("updated array : ", updatedArray);
console.log("updated array 2 : ", updatedArray2);

//-------------------------------------------------------------------------------------

const team = [
  { fName: "sachin", lName: "tendulkar", gender: "M" },
  { fName: "lata", lName: "mangeshkar", gender: "F" },
  { fName: "ashok", lName: "marathe", gender: "M" },
  { fName: "manoj", lName: "shinde", gender: "M" },
];

let updatedTeam = team.map((data) => {
  if (data.gender === "M") {
    return {
      ...data,
      fullName: `${data.fName.toUpperCase()} ${data.lName.toUpperCase()} M`,
    };
  } else {
    return {
      ...data,
      fullName: `${data.fName.toUpperCase()} ${data.lName.toUpperCase()} F`,
    };
  }
});

console.log("UPDATED TEAM : ", updatedTeam);

//----------------------------------------------------------------------------------------

const gang = [
  { fName: "sachin", lName: "tendulkar", gender: "M" },
  { fName: "lata", lName: "mangeshkar", gender: "F" },
  { fName: "ashok", lName: "marathe", gender: "M" },
  { fName: "manoj", lName: "shinde", gender: "M" },
];

let updatedGang = team.filter((data) => data.gender === "M");

console.log("UPDATED GANG : ", updatedGang);
