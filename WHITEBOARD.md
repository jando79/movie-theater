Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage should let them know how much their movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, matinee, and senior tickets tend to be cheaper than the regular priced ticket.

Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

Start by completing your business logic, and then move onto your user interface logic. Use test-driven development to complete your business logic and add your pseudocode tests to your project's README.md. After every passing test, make sure to commit your code.

HTML
forms for users to input movie type (opening day, 2 weeks, movies about to come out of rotation)
form for users to input age type (children 11 < , adults 11+, seniors 60+)
div that displays movie ticket prices (js logic)

css
hidden class that hides content until js triggers it to open

js
1 constructor function that creates new tickets
-ticket types with in
-age
-time of day
-release date
submit form handles input submissions
function that agthers user input
function that displays user result
return specific index in variable ticket