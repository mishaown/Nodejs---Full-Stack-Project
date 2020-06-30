const xs = [];
const ys = [];

chartData();

async function chartData(){
    await getData();
    
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xs,
            datasets: [{
                label: 'Global Average Temparature(1880-2018)',
                data: ys,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
    });
}

async function  getData(){
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach(row =>{
        const column = row.split(",");
        const year = column[0];
        xs.push(year)
        const temp = column[1];
        ys.push(parseFloat(temp) + 14);     
    });
    return(xs, ys);
}