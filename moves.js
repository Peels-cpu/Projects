fetch('/moves/holleadermoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#holleaderMoves').innerHTML=tableData
});

fetch('/moves/construcktomoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#construcktoMoves').innerHTML=tableData
});

fetch('/moves/miraflectmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#miraflectMoves').innerHTML=tableData
});

fetch('/moves/bluezillamoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#bluezillaMoves').innerHTML=tableData
});

fetch('/moves/honikobamoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#honikobaMoves').innerHTML=tableData
});

fetch('/moves/eschargotmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#eschargotMoves').innerHTML=tableData
});

fetch('/moves/kickundramoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#kickundraMoves').innerHTML=tableData
});

fetch('/moves/tetrapionmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#tetrapionMoves').innerHTML=tableData
});

fetch('/moves/wyverdantmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#wyverdantMoves').innerHTML=tableData
});


fetch('/moves/reingifirmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#reingifirMoves').innerHTML=tableData
});

fetch('/moves/kangkrossmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#kangkrossMoves').innerHTML=tableData
});

fetch('/moves/ghophermoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#ghopherMoves').innerHTML=tableData
});

fetch('/moves/moomegamoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#moomegaMoves').innerHTML=tableData
});

fetch('/moves/leximinthmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#leximinthMoves').innerHTML=tableData
});

fetch('/moves/hauntevomoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#hauntevoMoves').innerHTML=tableData
});

fetch('/moves/sliscesmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#sliscesMoves').innerHTML=tableData
});

fetch('/moves/triplydramoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#triplydraMoves').innerHTML=tableData
});

fetch('/moves/combowormmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#combowormMoves').innerHTML=tableData
});


fetch('/moves/drakevomoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#drakevoMoves').innerHTML=tableData
});

fetch('/moves/twilevomoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#twilevoMoves').innerHTML=tableData
});

fetch('/moves/buckalloymoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#buckalloyMoves').innerHTML=tableData
});

fetch('/moves/masakaridonmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#masakaridonMoves').innerHTML=tableData
});

fetch('/moves/skwerborosmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#skwerborosMoves').innerHTML=tableData
});

fetch('/moves/atolloisemoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#atolloiseMoves').innerHTML=tableData
});

fetch('/moves/falcoltmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#falcoltMoves').innerHTML=tableData
});

fetch('/moves/dexfyremoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#dexfyreMoves').innerHTML=tableData
});

fetch('/moves/kasketmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#kasketMoves').innerHTML=tableData
});

fetch('/moves/skultergeistmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#skultergeistMoves').innerHTML=tableData
});

fetch('/moves/blizzoramoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#blizzoraMoves').innerHTML=tableData
});

fetch('/moves/tidjumoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#tidjuMoves').innerHTML=tableData
});

fetch('/moves/deksciplemoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#dekscipleMoves').innerHTML=tableData
});

fetch('/moves/craggonmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#craggonMoves').innerHTML=tableData
});

fetch('/moves/smogshroommoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#smogshroomMoves').innerHTML=tableData
});

fetch('/moves/soarnoxmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#soarnoxMoves').innerHTML=tableData
});

fetch('/moves/spectreatmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#spectreatMoves').innerHTML=tableData
});

fetch('/moves/wintursamoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#wintursaMoves').innerHTML=tableData
});

fetch('/moves/raftnessemoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#raftnesseMoves').innerHTML=tableData
});

fetch('/moves/farinademoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#farinadeMoves').innerHTML=tableData
});

fetch('/moves/moontismoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#moontisMoves').innerHTML=tableData
});

fetch('/moves/pandozermoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#pandozerMoves').innerHTML=tableData
});

fetch('/moves/furnicemoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#furniceMoves').innerHTML=tableData
});

fetch('/moves/loftevomoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#loftevoMoves').innerHTML=tableData
});

fetch('/moves/champlionmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#champlionMoves').innerHTML=tableData
});

fetch('/moves/revupmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#revupMoves').innerHTML=tableData
});

fetch('/moves/murdollmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#murdollMoves').innerHTML=tableData
});

fetch('/moves/camprikinemoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#camprikineMoves').innerHTML=tableData
});

fetch('/moves/volcanoliskmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#volcanoliskMoves').innerHTML=tableData
});

fetch('/moves/romanfrigmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#romanfrigMoves').innerHTML=tableData
});

fetch('/moves/gorcanomoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#gorcanoMoves').innerHTML=tableData
});

fetch('/moves/khepreetlemoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#khepreetleMoves').innerHTML=tableData
});

fetch('/moves/raivalmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#raivalMoves').innerHTML=tableData
});

fetch('/moves/veloswiftmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#veloswiftMoves').innerHTML=tableData
});

fetch('/moves/venturevomoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#venturevoMoves').innerHTML=tableData
});


fetch('/moves/monkingmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#monkingMoves').innerHTML=tableData
});

fetch('/moves/dominevomoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#dominevoMoves').innerHTML=tableData
});

fetch('/moves/radarentmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#radarentMoves').innerHTML=tableData
});

fetch('/moves/gardseemoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#gardseeMoves').innerHTML=tableData
});

fetch('/moves/nightmortmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#nightmortMoves').innerHTML=tableData
});

fetch('/moves/meganuedramoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#meganuedraMoves').innerHTML=tableData
});

fetch('/moves/opawanmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#opawanMoves').innerHTML=tableData
});

fetch('/moves/polluvernmoves.json').then((data)=>{
    return data.json(); //converted to object
    
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#polluvernMoves').innerHTML=tableData
});

fetch('/moves/skadiremoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#skadireMoves').innerHTML=tableData
});

fetch('/moves/azuroonmoves.json').then((data)=>{
    return data.json(); //converted to object
}).then((objectData)=>{
    let tableData = '';
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.Name}</td>
        <td>${values.Damage}</td>
        <td>${values.Type}</td>
        <td>${values.Acc}</td>
        <td>${values.PP}</td>
        <td>${values.Ps}</td>
        </tr>
        `;
    })
    document.querySelector('#azuroonMoves').innerHTML=tableData
});

