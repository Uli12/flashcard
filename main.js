
$( document ).ready(function(){
const cards = [
  { title: "Where are let variables scoped?", content: "Let variables are scoped to the innermost { } and cannot be reassigned." },
  { title: "What is special about the const variable?", content: "const is short for constant meaning the values assigned cannot change. const is read only."},
  { title: "What are rest params?", content: "Rest parameters allow you to accept an infinite number of arguments and are indicated by using 3 dots and a name.  They will be read in as an array." },
  { title: "What is the syntax of a string interpolation?", content: "let foo = `${}: ${}`" },
  { title: "What can a child call to override the function of a parent class?", content: "super()" },
  { title: "What is a Promise?", content: "Promises return a future value so the function no longer needs a callback as an argument." },
  { title: "What are Generators?", content: "Generators are special functions in which we can use the keyword yield.  They are defined with the * character." },
  { title: "Who is the coolest TA?", content: "Spencer" }
];

cards.forEach(function(card) {
  $( "#es6" ).append(`
  <div class="col s12 m4 l3"> 
    <div class="card medium">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="./resources/images/es6.jpg">
        </div>
       <div class="card-content">
         <span class="card-title activator grey-text text-darken-4">${card.title}<i class="material-icons right">click to reveal</i></span>
       </div>
       <div class="card-reveal">
       <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
         <p>${card.content}</p>
       </div> 
    </div>
  </div>
  `)

})

const cardsTwo = [
  { title: "What is webpack?", content: "webpack is a static module bundler for modern JavaScript applications." },
  { title: "What are the four core concepts of webpack?", content: "Entry, Output, Loaders, and Plugins" },
  { title: "What is modular programming?", content: "Where developers break programs up into discrete chunks of functionality called modules." },
  { title: "What is Hot Module Replacement?", content: "Hot Module Replacement allows modules to be updated at runtime without the need for a full refresh" },
  { title: "What is tree shaking?", content: "Tree shaking is a term used in the JavaScript context for dead-code elimination" },
  { title: "What is a pre-requisite for installing webpack?", content: "Node.js" },
  { title: "How can you interface with webpack?", content: "Either from its  either from its CLI or API" },
  { title: "What is an entry-point?", content: "An entry point indicates which module webpack should use to begin building out its internal dependency graph." }
];

cardsTwo.forEach(function(card) {
  $( "#webpack" ).append(`
  <div class="col s12 m4 l3"> 
    <div class="card medium">
       <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="./resources/images/webpack2.jpg">
       </div>
       <div class="card-content">
         <span class="card-title activator grey-text text-darken-4">${card.title}<i class="material-icons right">click to reveal</i></span>
       </div>
       <div class="card-reveal">
       <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
         <p>${card.content}</p>
       </div> 
    </div>
  </div>
  `)

})
});

