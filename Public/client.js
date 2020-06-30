const Submit = document.getElementById('submit');

Submit.addEventListener('click', async (event)=>{

    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value;

    const questionData = { email, reason, message};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(questionData)                              //Sending data as json format using strify
    };

    const request = await fetch('/dev', options);
    const data = await request.json();

    alert('Meesage Submitted!');
    window.location.reload();

});

async function getData(){
    const request = await fetch('/dev');
    const data = await request.json();

    for(item of data) {
        const email = document.createElement('div');
        const message = document.createElement('div');
        const date = document.createElement('div');

        const dateString = new Date(item.timestamp).toLocaleString();      //Converts into readabe date and time string
        date.textContent = dateString;

        const table = document.getElementById("Table");
        const row = table.insertRow(1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.append(date);
        cell2.append(item.email);
        cell3.append(item.message);
    }
}

