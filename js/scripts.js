//Business Logic for Ticket Type
function TicketBooth() {
  this.tickets = {};
  this.currentId = 0;
};

TicketBooth.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
};

TicketBooth.prototype.assignId = function() {
  this.current += 1;
  return this.currentId;
}

ticketPrice = function(age, movie, time) {
  let x = 0;
  if (age === "children") {
    x += 4;
  }
  else if (age === "adult") {
    x += 6;
  }
  else if (age === "senior") {
    x += 5;
  }
  if (movie === "Harold's Feet") {
    x += 5;
  }
  else if (movie === "Salt vs. Pepper") {
    x += 8;
  }
  else if (movie === "Complete Boredom") {
    x += 6;
  }
  else if (movie === "Blank Screen Time") {
    x += 11;
  }
  if (time === "7am") {
    x += 3;
  }
  else if (time === "3pm") {
    x += 4;
  }
  else if (time === "11pm") {
    x += 6;
  }
  return "$" + x;
};

TicketBooth.prototype.findTicket = function(id) {
  if (this.tickets[id] !== undefined) {
    return this.tickets[id];
  }
  return false;
}

TicketBooth.prototype.deleteTicket = function(id) {
  if (this.tickets[id] === undefined) {
    return false;
  }
  delete this.tickets[id];
  return true;
};

Ticket.prototype.ticketName = function() {
  return this.movie + " " + this.time + " " + this.price;
}

function listTickets(ticketBoothToDisplay) {
  let ticketStubDiv = document.querySelector("div#ticket-stub");
  const ul = document.createElement("ul");
  Object.keys(ticketBoothToDisplay.tickets).forEach(function(key) {
    const ticket = ticketBoothToDisplay.findTicket(key);
    const li = document.createElement("li");
    li.append(ticket.ticketName());
    li.setAttribute("id", ticket.id);
    ul.append(li);
  });
  ticketStubDiv.append(ul);
}

//Business Logic for Tickets

function Ticket(age, movie, time, price) {
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.price = price;
};

//User Interface Logic

let ticketBooth = new TicketBooth ();

function handleFormSubmission(event) {
  event.preventDefault();
  const age = document.querySelector("input[name='user-age']:checked").value;
  const movie = document.getElementById("movie-id").value;
  const time = document.getElementById("time-id").value;
  const price = ticketPrice(age, movie, time)
  let newTicket = new Ticket(age, movie, time, price);
  ticketBooth.addTicket(newTicket);
  listTickets(ticketBooth);
};

function displayTicketDetails(event) {
  const ticket = ticketBooth.findTicket(event.target.id);
  document.querySelector(".movie").innerText = ticket.movie;
  document.querySelector(".time").innerText = ticket.time;
  document.querySelector(".age").innerText = ticket.age;
  document.querySelector(".price").innerText = ticket.price;
  document.querySelector("div#ticket-details").removeAttribute("class");
}

function handleDelete(event) {
  ticketBooth.deleteTicket(event.target.id);
  document.querySelector("button.delete").removeAttribute("id");
  document.querySelector("div#ticket-details").setAttribute("class", "hidden");
  listTickets(ticketBooth);
};


window.addEventListener("load", function() {
  document.querySelector("form#time-form").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#ticket-stub").addEventListener("click", displayTicketDetails);
  document.querySelector("button.delete").addEventListener("click", handleDelete);
});


