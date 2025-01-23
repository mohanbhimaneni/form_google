const form = document.getElementsByClassName('form')[0];
const submitButton = document.querySelector('.submit');
const scriptURL = 'https://script.google.com/macros/s/AKfycbyBvjjUKMZZTuqQ_d4zCASnCat8MTLsq37vNNNyJwsgl505ETmwei8qp7ARojxDWo_-OA/exec';

form.addEventListener('submit', e => {
    e.preventDefault();
    submitButton.disabled = true;

    let requestBody = new FormData(form);

    fetch(scriptURL, {
        method: 'POST',
        body: requestBody
    })
    .then(response => response.json())
    .then(result => {
        if (result.result === 'error') {
            alert('Error: ' + result.message);
        } else {
            alert('Success! Your registration was submitted. You will get an email soon.');
            form.reset();
            document.getElementById("floating_window").classList.toggle("display_none");
        }
    })
    .catch(error => {
        alert('Error! Unable to submit details: ' + error.message);
    })
    .finally(() => {
        submitButton.disabled = false;
    });
});

function closeForm() {
    document.getElementById("floating_window").classList.toggle("display_none");
}

function openForm() {
    document.getElementsByClassName("div_to_toggle")[0].classList.toggle("display_none");
}
