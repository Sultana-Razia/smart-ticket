function buyTicket() {
    console.log('buy');
}

const allSeat = document.getElementsByClassName('all-seat');

for (const seat of allSeat) {
    // console.log(seat);
    seat.addEventListener('click', function (event) {
        const seatName = event.target.innerText;


        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between', 'pt-2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = seatName;
        p2.innerText = 'Economy';
        p3.innerText = 550;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        const selectedSeat = document.getElementById('selected-seat');
        selectedSeat.appendChild(div);

        // Update total price
        const price = document.getElementById('price').innerText;
        const totalPrice = document.getElementById('total-price').innerText;
        const sum = parseInt(price) + parseInt(totalPrice);
        document.getElementById('total-price').innerText = sum;



        //Update grand total


    })


}