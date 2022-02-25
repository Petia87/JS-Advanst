function ticket(arr, sortingCreterion) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }

    function splitTicket(line) {
        return line.split('|')
    }

    function convertToTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status)
    }

    const sortMapper = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return arr
        .map(splitTicket)
        .map(convertToTicket)
        .sort(sortMapper[sortingCreterion])
}
console.log(ticket(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

/* Second*/
function tickets(arr, crit) {
    function Ticket(destination, price, status) {
        Object.assign(this, { destination, price, status })
    }
    return arr.map(el => {
        return new Ticket(...el.split('|').map(el => Number(el) || el))
    }).sort((a, b) => isNaN(a[crit]) ? a[crit].localeCompare(b[crit]) : a[crit] - b[crit])
}