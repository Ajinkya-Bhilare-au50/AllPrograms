//new Set()-accept iterable objects

const products = [
  { title: "highback track bench", company: "ikea" },
  { title: "highback bench", company: "ikea" },
  { title: "albany table", company: "imarchos" },
  { title: "accent chair", company: "caressa" },
  { title: "wooden table ", company: "ikea" },
];
const companies = products.map((item) => item.company);
console.log(companies);
const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);
const finalcompanies = [...uniqueCompanies];
console.log(finalcompanies);
