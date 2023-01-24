//Business Logic for Ticket Type
function TicketBooth() {
  this.ticket = {};
  this.currentId = 0;
};

TicketBooth.prototype.addTicket = function(ticket) {
  ticket.id = this.assign();
  ticket.price = this.ticketPrice();
  this.tickets[ticket.id] = ticket;
};

TicketBooth.prototype.assignId = function() {
  this.current += 1;
  return this.currentId;
}

TicketBooth.prototype.ticketPrice = fucntion() {
   
}

TicketBooth.prototype.findTicket = function(id) {
  if (this.ticket[id] !== undefined) {
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

//Business Logic for Tickets
function Ticket(age, movie, time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
};

//User Interface Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const age = document.querySelector("input[name='user-age']:checked").value;
  const movie = document.getElementById("movie-id").value;
  const time = document.getElementById("time-id").value;
  let newTicket = new Ticket(age, movie, time);


}


window.addEventListener("load", function () {
  this.document.querySelector("form#show-time-form").addEventListener("submit", handleFormSubmission);
})


