fetch('/moves/pokemoncounterparts.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Revomon}</td>
        <td>${values.Pokemon}</td>
        </tr>
        `;
    })
    document.querySelector('#pokemonCounterparts').innerHTML=tableData
});
