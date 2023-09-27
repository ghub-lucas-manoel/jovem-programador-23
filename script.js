const btn = document.querySelector("#find-event-btn");

btn.addEventListener('click', () => {
    const desiredDate = document.querySelector("#desired-date").value
    findEvent(desiredDate)
});

const db = {
    searchDate: (date) => {
        console.log(date.substring(8))
        return Number(date.substring(8)) % 2 == 0
    }
}

function findEvent(date) {
    const response = db.searchDate(date)
    printResult(response)
}

function printResult(result) {
    const p = document.querySelector('#result')
    if (result == true) {
        p.innerHTML = 'A sua data está disponível!'
        p.style.color = '#f0f'
    }
    else {
        p.innerHTML = 'A sua data está indisponível!'
        p.style.color = '#0ff'
    }
}

