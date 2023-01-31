const posts = [
  {
    id: 1,
    title: "Sample Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    title: "Sample Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 3,
    title: "Sample Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];
// ES2016+
// Create new array of post IDs. I.e. [1,2,3]
const postIds = posts.map((post) => post.id);
// Create new array of post objects. I.e. [{ id: 1, title: "Sample Title 1" }]
const postSummaries = posts.map((post) => ({
  rollno: post.id,
  Designation: post.title,
}));

console.log(postIds);
console.log(postSummaries);
/* 
// ES2015
// Create new array of post IDs. I.e. [1,2,3]
var postIds = posts.map(function (post) {
  return post.id;
});
// Create new array of post objects. I.e. [{ id: 1, title: "Sample Title 1" }]
var postSummaries = posts.map(function (post) {
  return { id: post.id, title: post.title };
});
 */
