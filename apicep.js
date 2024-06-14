async function getlatlongicep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
        const dados = await response.json();
        console.log(dados);
        document.getElementById('lati').value = dados.lat;
        document.getElementById('longi').value = dados.lng;

    }
    catch (error) {
        console.log(error);

    }
}


async function getcep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
        const dados = await response.json();
        console.log(dados);
        document.getElementById('rua').innerHTML = dados.address;
        document.getElementById('UF').innerHTML = dados.state;
        document.getElementById('cidade').innerHTML = dados.city;

    }
    catch (error) {
        alert("dados incorretos");

    }

}


async function tempo() {
    const lati = document.getElementById('lati').value;
    const longi = document.getElementById("longi").value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longi}&current=temperature_2m&hourly=temperature_2m&timezone=America%2FSao_Paulo&past_hours=24&past_minutely_15=24&forecast_days=1&forecast_hours=24&forecast_minutely_15=96`)
        const temp = await response.json();
        console.log(temp);
        document.getElementById('media').innerHTML = temp.current.temperature_2m;
    } catch (error) {
        console.log(error)
    }
}


function macaco() {
    const data = {
        Email: document.getElementById('nome').value,
        Name: document.getElementById('email').value,
        Created: 'x-sheetmonkey-current-date-time'
    };
    console.log(data.Email);
    console.log(data.Name);
    fetch('https://api.sheetmonkey.io/form/aEVxWnizL5egKdykgPWABB', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((result) => {
        // Handle the result
    });
}


function total() {
    getcep()
    macaco()
    tempo()
}