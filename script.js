// loading icon js
document.querySelector(".loading").style.display = "block";

window.onload = function() {
    document.querySelector(".loading").style.display = "none";
};
// Tier filter buttons

// 1, lable all revomons with tiers,
let sTier = document.querySelectorAll(".sTier");
let aTier = document.querySelectorAll(".aTier");
let bTier = document.querySelectorAll(".bTier");
let cTier = document.querySelectorAll(".cTier");
let dTier = document.querySelectorAll(".dTier");

//  shown first when the website is opened.


sTier.forEach(l => {

    l.style.display = "block";
})
// Make revomon tiers disapear
aTier.forEach(l => {
    l.style.display = "block";
})
bTier.forEach(l => {
    l.style.display = "block";
})
cTier.forEach(l => {
    l.style.display = "block";
})
dTier.forEach(l => {
    l.style.display = "block";
})

// 2, make the revomons hide when the buttons are pressed
function showAll(){
    sTier.forEach(l => {
        l.style.display = "block";
    })
    // Make revomon tiers disapear
    aTier.forEach(l => {
        l.style.display = "block";
    })
    bTier.forEach(l => {
        l.style.display = "block";
    })
    cTier.forEach(l => {
        l.style.display = "block";
    })
    dTier.forEach(l => {
        l.style.display = "block";
    })

}

function sTierbtn(){
    // Make revomon apear when button is pressed.
    sTier.forEach(l => {
        l.style.display = "block";
    })
    // Make revomon tiers disapear
    aTier.forEach(l => {
        l.style.display = "none";
    })
    bTier.forEach(l => {
        l.style.display = "none";
    })
    cTier.forEach(l => {
        l.style.display = "none";
    })
    dTier.forEach(l => {
        l.style.display = "none";
    })


}
function aTierbtn(){
    aTier.forEach(l => {
        l.style.display = "block";
    })
    sTier.forEach(l => {
        l.style.display = "none";
    })
    bTier.forEach(l => {
        l.style.display = "none";
    })
    cTier.forEach(l => {
        l.style.display = "none";
    })
    dTier.forEach(l => {
        l.style.display = "none";
    })
}
function bTierbtn(){
    bTier.forEach(l => {
        l.style.display = "block";
    })
    aTier.forEach(l => {
        l.style.display = "none";
    })
    sTier.forEach(l => {
        l.style.display = "none";
    })
    cTier.forEach(l => {
        l.style.display = "none";
    })
    dTier.forEach(l => {
        l.style.display = "none";
    })
}
function cTierbtn(){
    cTier.forEach(l => {
        l.style.display = "block";
    })
    sTier.forEach(l => {
        l.style.display = "none";
    })
    bTier.forEach(l => {
        l.style.display = "none";
    })
    aTier.forEach(l => {
        l.style.display = "none";
    })
    dTier.forEach(l => {
        l.style.display = "none";
    })
}
function dTierbtn(){
    dTier.forEach(l => {
        l.style.display = "block";
    })
    aTier.forEach(l => {
        l.style.display = "none";
    })
    bTier.forEach(l => {
        l.style.display = "none";
    })
    cTier.forEach(l => {
        l.style.display = "none";
    })
    sTier.forEach(l => {
        l.style.display = "none";
    })
}

    // Index Search of the revomons
    function search_revo() {
        
        let input = document.getElementById('searchrevo').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('revo');
        //  shown first when the website is opened.
        sTier.forEach(l => {
            l.style.display = "block";
        })
        // Make revomon tiers disapear
        aTier.forEach(l => {
            l.style.display = "block";
        })
        bTier.forEach(l => {
            l.style.display = "block";
        })
        cTier.forEach(l => {
            l.style.display = "block";
        })
        dTier.forEach(l => {
            l.style.display = "block";
        })
          
        for (i = 0; i < x.length; i++) { 
            if (x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="block";
            }
            else {
              x[i].style.display="none";                   
            }
        }

    }

 

// Calculators Data----------------------------------------------------------------
    let polluvern = {
        name: 'Polluvern',
        image: "https://nft.revomon.io/image/raw/revomon/804.png",
        abilities: [ "Pick an Ability","Pressure","Levitate"],
        info: 'In terms of pvp value, a Polluvern is only valuable when it has a timid, hasty or naive nature with its speed and SpA IVs are over 25, preferably 31 for the most value. The Ability Levitate is slightly more valuable than Pressure. '

    };
    let opawan = {
        name: 'Wolpan-Opawan',
        image: "https://nft.revomon.io/image/raw/revomon/902.png",
        abilities: [ "Bad Dreams","Insomnia", "Dark Aura"],
        info: 'In terms of pvp value, a Wolpan-Opawan is valued highly if it has a timid/Hasty or Naive nature with its speed and SpA IVs are near 31. The Ability Dark Aura is  more valuable than Insomnia and Bad dreams as it provides opawans dark pulse a massive damage boost and dark aura is a hidden ability which is really rare in terms of obtainability.'

    };

    let murdoll = {
        name: 'Murdoll',
        image: "https://nft.revomon.io/image/raw/revomon/778.png",
        abilities: [ "Disguise", "---", '---'],
        info: 'Murdoll is a holloween event revomon and becomes uncatchable after december 1st of 2022. Jolly with near 31 attack and speed will give murdoll the most value.'
        // name: 'Polluvern',
        // image: "https://nft.revomon.io/image/raw/revomon/804.png",
        // abilities: [ "Pick an Ability","Pressure","Levitate"],
        // info: 'In terms of pvp value, a Polluvern is only valuable when it has a timid, hasty or naive nature with its speed and SpA IVs are over 25, preferably 31 for the most value. The Ability Levitate is slightly more valuable than Pressure. '

    };
    let raival = {
        name: 'Raival',
        image: "https://nft.revomon.io/image/raw/revomon/145_shiny.png",
        abilities: [ "Pick an Ability","Pressure", "Static"],
        info: 'In terms of pvp value, a Raival is most useful as a tank, Modest and Bold natures are ideal with high overall IVs above 20 to 31 provide more value and is what seperates raivals apart. The Hidden Ability Static provides alittle more value than pressure.'
    };
    let soarnox = {
        name: 'Somnap-Soarnox',
        image: "https://nft.revomon.io/image/raw/revomon/468.png",
        abilities: [ "Super Luck","Hustle", "Serene Grace"],
        info: 'In terms of pvp value, a Somnap/Soarnox is valued when it has a timid nature, near 31 speed IVs and a high overall IVs to all its stats except atk is what gives soarnox a bulk of its value and usefulness in PVP. The Ability Serene Grace is what provides soarnox with literly 95% of its value, as it is what makes soarnox an S-Tier revomon. Without the ability Serene grace means your soarnox is not as useful as the ones that have it. '
    };

    let tidju = {
        name: 'Pupple-Tidju',
        image: "https://nft.revomon.io/image/raw/revomon/160.png",
        abilities: [ "Pick an Ability","Torrent", "Sheer Force"],
        info: 'This S-Tier Revomon is highly valued for its sheer force hidden ability, hidden abilities are rare for good reason as most of them make the revomon extremely powerful. Jolly and Adamant nature are needed with high speed and atk as its most valuable stats. Over all High IVs for each stat except for SpA is a bonus to its value.'

    };
    let moomega = {
        name: 'Vachita-Moomega',
        image: "https://nft.revomon.io/image/raw/revomon/242.png",
        abilities: [ "Healer","Serene Grace", "Natural Cure"],
        info: 'The best SpD tank in the game needs high IVs in HP, Def and SpD, all other stats are minor bonuses to its value. Natural Cure is the essential ability for moomega as it is the most useful in pvp. The ideal nature with the highest value for moomega is bold.'
    };

    let skadire = {
        name: 'Skadire',
        image: "https://nft.revomon.io/image/raw/revomon/461.png",
        abilities: [ "Pick an Ability","Pressure", "Pickpocket"],
        info: 'The Fastest revomon in the game needs more speed to compete with other skadires. The highest speed, atk and overall IVs near or being 31 with the nature jolly will provide skadire with the most value. Its hidden ability pickpocket is worth more than pressure.'

    };
    let meganundra = {
        name: 'Meganundra',
        image: "https://nft.revomon.io/image/raw/revomon/545.png",
        abilities: [ "Poison Point","Swarm", "Speed Boost"],
        info: 'Speed Boost is the main reason that gives meganundra its usefulness and value. Ideal natures are adamant and jolly, but a high overall IVs to all stats except SpA will give bonus value.'
    };

    let dominevo = {
        name: 'Dominevo',
        image: "https://nft.revomon.io/image/raw/revomon/196.png",
        abilities: [ "Pick an Ability","Synchronize", "Magic Bounce"],
        info: 'Magic Bounce is a powerful hidden ability that raised Dominevo to the A-Tier. Timid is the ideal nature that would provide the most value with high IVs of speed and SpA as its most valuable stats as to a generic 252 speed and SpA build.'

    };
    let monking = {
        name: 'Monking',
        image: "https://nft.revomon.io/image/raw/revomon/645.png",
        abilities: [ "Pick an Ability","Sand Force", "Sheer Force"],
        info: 'Monking with the hidden ability Sheer Force is Very hard to obtain, having it with the natures Naive, Hasty, Jolly or timid and a very high IVs near 31 for speed and attack or SpA is like finding a gold mine.'
    };

    let romanfrig = {
        name: 'Cupidove-Romanfrig',
        image: "https://nft.revomon.io/image/raw/revomon/398.png",
        abilities: [ "Pick an Ability","Keen Eye/Intimidate", "Reckless"],
        info: 'This winter event revomon was catchable from December 2021 to March 2022, as a winter event revomon, it must be obtained from other players or markets. Reckless is a hidden ability that powers up attacks that do recoil damage. Being a tank breaker more damage = more value. Jolly or adamant nature for the most value, and IVs that favor Atk and Speed will give more value to it than any other stats.'
    
    };
    let furnice = {
        name: 'Frostoast-Furnice',
        image: "https://nft.revomon.io/image/raw/revomon/555.png",
        abilities: [ "Snow Warning","Flame Body", "Refrigerate"],
        info: 'This winter event revomon was catchable from December 2021 to March 2022, as a winter event revomon, it must be obtained from other players or markets. The hidden ability Refrigerate is hard to obtain and will generate alot of value for the frostoast/furnice if its nature are Adamant and jolly with high IVs on speed and attack (Near 31 is Ideal).'
    };

    let revup = {
        name: 'R3V-Up',
        image: "https://nft.revomon.io/image/raw/revomon/773.png",
        abilities: [ "Plus", "---", '---'],
        info: 'R3V-Up can be built in many ways. The generic base price of 1 is 50$ but its natures and IVs will seperate it from generic to useful, Ideal natures for it is Jolly/Timid, Adamant/Modest, Impish,Bold. High overall IVs corresponding to its nature will provide higher value.'

    };
    let craggon = {
        name: 'Dregg-Craggon',
        image: "https://nft.revomon.io/image/raw/revomon/149.png",
        abilities: [ "Pick an Ability","Inner Focus", "Multiscale"],
        info: 'Craggon is a rare with a really strong hidden ability Multiscale. Adamant and jolly are the ideal natures with IVs that favor speed and atk.'
    };

    let raftnesse = {
        name: 'Floatilock-Raftnesse',
        image: "https://nft.revomon.io/image/raw/revomon/350.png",
        abilities: [ "Cute Charm","Competitive", "Marvel Scale"],
        info: 'Only obtainable in eggs, raftnesse is a great tank in pvp. Marvel Scale is the ideal ability as it is more useful for tanks, with a calm/bold nature to boosts its defenses up. High Overall IVs for more value that favors HP, Def and SpD.'

    };
    let buckalloy = {
        name: 'Fawneel-Buckalloy',
        image: "https://nft.revomon.io/image/raw/revomon/625.png",
        abilities: [ "Pressure","Inner Focus", "Defiant"],
        info: 'Jolly or adamant nature is what is more useful for a buckalloy, defiant as its most useful ability and high IVs in speed and attack provide it the most value, high IVs on other stats are a minor bonus to its overall value.'
    };

    let leximint = {
        name: 'Bookworm-Leximint',
        image: "https://nft.revomon.io/image/raw/revomon/861.png",
        abilities: [ "Levitate","Prankster", "Soundproof"],
        info: 'Leximint with prankster is the most sought after, but soundproof its hidden ability would be valuable to a certain player who is looking for it. Adamant and jolly are the ideal natures with IVs that favor attack and speed, however overall IVs close to all nearing 31 is ideal.'

    };
    let nightmort = {
        name: 'Tedream-Nightmort',
        image: "https://nft.revomon.io/image/raw/revomon/94.png",
        abilities: [ "Levitate/Cursed Body", "---", "---"],
        info: 'This winter event revomon was catchable from December 2021 to March 2022, as a winter event revomon, it must be obtained from other players or markets. Value for this revomon comes from a Timid nature with max 31 speed and SpA in IVs, the closer you are to that discription is how value would be calculated for nightmort.'

    };
    let khepreetle = {
        name: 'Khepreetle',
        image: "https://nft.revomon.io/image/raw/revomon/637.png",
        abilities: [ "Pick an Ability","Flame Body", "Swarm"],
        info: 'Ideal Nature for khepreetle is timid, stats in Speed and SpA near 31 will generate the most value,  high overall stats for HP, Def and SpD for will help too.'
    };

    let blizzora = {
        name: 'Zorelle-Blizzora',
        image: "https://nft.revomon.io/image/raw/revomon/9.png",
        abilities: [ "Pick an Ability","Torrent", "Rain Dish"],
        info: 'Not Overly too valuable, but one with rain dish and high Overall IVs favoring Hp, Def and SpD would be worth something to the right buyer. '

    };
    let kasket = {
        name: 'Kasket',
        image: "https://nft.revomon.io/image/raw/revomon/707.png",
        abilities: [ "Pick an Ability","Magician", "Prankster"],
        info: 'A calm or Impish Nature with high IVs overall favoring HP, Def and SpD would be more sought after other than any other combination IV wise as kasket is a support type revomon that needs high defensive stats for survivability.'
    };

    let twilevo = {
        name: 'Twilevo',
        image: "https://nft.revomon.io/image/raw/revomon/197.png",
        abilities: [ "Pick an Ability","Inner Focus", "Synchronize"],
        info: 'Tanky revomon favor high IVs near 31 for HP, Def and SpD, Calm or impish nature for defensive boosting natures. Synchronize has more value due to its usefulness.'

    };
    let ghopher = {
        name: 'Mummole-Ghopher',
        image: "https://nft.revomon.io/image/raw/revomon/623.png",
        abilities: [ "Klutz","Iron Fist", "No Guard"],
        info: 'A No Guard Ghopher is strong in pvp. Adamant with high Overall IVs would have some value.'
    };
    let miraflect = {
        name: 'Mirate-Miraflect',
        image: "https://nft.revomon.io/image/raw/revomon/202.png",
        abilities: [ "Pick an Ability","Telepathy", "Shadow Tag"],
        info: 'Defensive Natures like Impish or bold, high IVs in HP, Def, Spd will affect value mostly. Near perflect 31 everything and impish or bold nature is the pinnicle of value for this revomon.'

    };
    let spectreat = {
        name: 'Spectreat',
        image: "https://nft.revomon.io/image/raw/revomon/609.png",
        abilities: [ "Flame Body","Flash Fire", "Infiltrator"],
        info: 'Just having one is value enough, with only a limited number of these ever in exsistance, they are the true legendaries of revomon.'
    };
    let hauntevo = {
        name: 'Hauntevo',
        image: "https://nft.revomon.io/image/raw/revomon/426.png",
        abilities: [ "Flare-boost","Unburden", "Aftermath"],
        info: 'Based on sylveon from pokemon, hauntevo is a great batton passer in revomon aswell as a strong SpD tank, all of its abilities are valued the same in terms of usefulness and IVs spread are more valuable towrds HP, Def, SpD and speed..'

    };
    let kangcross = {
        name: 'Roojab-Kangcross',
        image: "https://nft.revomon.io/image/raw/revomon/68.png",
        abilities: [ "Guts","Steadfast", "No Guard"],
        info: 'Roojab/kangcross is a revomon that can only be obtained from other players and eggs, this by itself provides it value for its hard obtainability. No guard and an adamant nature would be the most valuable in pvp and usefulness. IVs favoring Atk HP and everything else would increase its value/usefulness.'
    };
    let wyverdant = {
        name: 'Vyphern-Wyverdant',
        image: "https://nft.revomon.io/image/raw/revomon/465.png",
        abilities: [ "Chlorophyll","Leaf Guard", "Regenerator"],
        info: 'Regenerator is a hidden ability that is strong in pvp and the best ability for wyverdant. Bold or relaxed nature with IVs high in HP and defenses is ideal with everything else as a bonus to its value.'

    };
    let bluezilla = {
        name: 'Bluezilla',
        image: "https://nft.revomon.io/image/raw/revomon/780.png",
        abilities: [ "Anger Point","Battle Armor", "Defiant"],
        info: 'Obtainable in eggs, this revomon is not too strong in pvp, but if you were to have one insane stats near perfect(all 31 IVs) and an Adamant nature, you can bet its worth some value.'
    };
    let venturevo = {
        name: 'Venturevo',
        image: "https://nft.revomon.io/image/raw/revomon/264.png",
        abilities: [ "Pickup","Gluttony", "Quick-Feet"],
        info: 'Not much value for pvp or usefulness, but if it was the best venturevo around, it would be. Ideal Nature is jolly with Gluttony and quick-feet for an ability. Highest value will favor Speed and atk IVs and everything else overall is a minor bonus.'

    };
    let volcanolisk = {
        name: 'Blazlet-Volcanolisk',
        image: "https://nft.revomon.io/image/raw/revomon/157.png",
        abilities: [ "Pick an Ability","Blaze", "Flash Fire"],
        info: 'Not much value for pvp or usefulness as its not a meta revomon, but if it was the best Volcanolisk around, it would be. Ideal Nature is timid with Flash Fire for an ability. Highest value will favor Speed and SpA IVs and everything else overall is a minor bonus.'
    };
    let loftevo = {
        name: 'Loftevo',
        image: "https://nft.revomon.io/image/raw/revomon/277_shiny.png",
        abilities: [ "Pick an Ability","Guts", "Scrappy"],
        info: 'Not much value for pvp or usefulness, but if it was the best loftevo around, it would be. Ideal Nature is jolly with Scrappy for an ability. Highest value will favor Speed and atk IVs and everything else overall is a minor bonus.'

    };
    let reingifir = {
        name: 'Reingifir',
        image: "https://nft.revomon.io/image/raw/revomon/357.png",
        abilities: [ "Solar Power","Chlorophyll", "Harvest"],
        info: 'Just having one is value enough, with only a limited number of these ever in exsistance, they are the true legendaries of revomon. Not really used for PVP, more as a torphy, for this reason alone value will not be added for its stats, natures and ability, only if its shiny or not.'
    };
    let gorcano = {
        name: 'Gorlit-Gorcano',
        image: "https://nft.revomon.io/image/raw/revomon/6.png",
        abilities: [ "Pick an Ability","Blaze", "Solar power"],
        info: 'Not much value for pvp or usefulness, but if it was the best gorcano around, it would be. Ideal Nature is jolly if it was a dragon dancer build with high Atk and speed with blaze for an ability. Or if its a timid nature with high speed and SpA. Highest value will favor Speed and atk IVs and everything else overall is a minor bonus.'

    };
    let dekciple = {
        name: 'Dekute-Dekciple',
        image: "https://nft.revomon.io/image/raw/revomon/3.png",
        abilities: [ "Pick an Ability","Overgrow", "Chlorophyll"],
        info: 'Not much value for pvp or usefulness as its not a meta revomon, but if it was the best dekciple around, it would be. Ideal Nature is timid with Flash Fire for an ability. Highest value will favor Hp and SpD and Def IVs and everything else overall is a minor bonus..'
    };




    






// calculators js---------------------------------------------------------------------------------    

function getVal() {
    const val = document.querySelector('input').value;
    document.getElementById("ivStat").style = "block;";

    switch(val) {

        // Make the abilities show for each revomon the ability page in html using js.



        case "Polluvern":
        document.getElementById('revoImg').src = polluvern.image;
        document.getElementById('a1').innerHTML = polluvern.abilities[0];
        document.getElementById('a2').innerHTML = polluvern.abilities[1];
        document.getElementById('a3').innerHTML = polluvern.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = polluvern.info;
        break;


        case "Wolpan-Opawan":
        document.getElementById('revoImg').src = opawan.image;
        document.getElementById('a1').innerHTML = opawan.abilities[0];
        document.getElementById('a2').innerHTML = opawan.abilities[1];
        document.getElementById('a3').innerHTML = opawan.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = opawan.info;
        break;

        case 'Murdoll':
        document.getElementById('revoImg').src = murdoll.image;
        document.getElementById('a1').innerHTML = murdoll.abilities[0];
        document.getElementById('a2').innerHTML = murdoll.abilities[1];
        document.getElementById('a3').innerHTML = murdoll.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = murdoll.info;

        break;

        case 'Raival':
        document.getElementById('revoImg').src = raival.image;
        document.getElementById('a1').innerHTML = raival.abilities[0];
        document.getElementById('a2').innerHTML = raival.abilities[1];
        document.getElementById('a3').innerHTML = raival.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = raival.info;
        break;
    
        case 'Somnap-Soarnox':
        document.getElementById('revoImg').src = soarnox.image;
        document.getElementById('a1').innerHTML = soarnox.abilities[0];
        document.getElementById('a2').innerHTML = soarnox.abilities[1];
        document.getElementById('a3').innerHTML = soarnox.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = soarnox.info; 
        break;

        case 'Pupple-Tidju':
        document.getElementById('revoImg').src = tidju.image;
        document.getElementById('a1').innerHTML = tidju.abilities[0];
        document.getElementById('a2').innerHTML = tidju.abilities[1];
        document.getElementById('a3').innerHTML = tidju.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = tidju.info; 
        break;
    
        case 'Vachita-Moomega':
        document.getElementById('revoImg').src = moomega.image;
        document.getElementById('a1').innerHTML = moomega.abilities[0];
        document.getElementById('a2').innerHTML = moomega.abilities[1];
        document.getElementById('a3').innerHTML = moomega.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = moomega.info; 
        break;
    
        case 'Skadire':
        document.getElementById('revoImg').src = skadire.image;
        document.getElementById('a1').innerHTML = skadire.abilities[0];
        document.getElementById('a2').innerHTML = skadire.abilities[1];
        document.getElementById('a3').innerHTML = skadire.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = skadire.info; 
        break;
    
        case 'Meganundra':
        document.getElementById('revoImg').src = meganundra.image;
        document.getElementById('a1').innerHTML = meganundra.abilities[0];
        document.getElementById('a2').innerHTML = meganundra.abilities[1];
        document.getElementById('a3').innerHTML = meganundra.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = meganundra.info; 
        break;
    
        case 'Dominevo':
        document.getElementById('revoImg').src = dominevo.image;
        document.getElementById('a1').innerHTML = dominevo.abilities[0];
        document.getElementById('a2').innerHTML = dominevo.abilities[1];
        document.getElementById('a3').innerHTML = dominevo.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = dominevo.info; 
        break;
        
        case 'Monking':
        document.getElementById('revoImg').src = monking.image;
        document.getElementById('a1').innerHTML = monking.abilities[0];
        document.getElementById('a2').innerHTML = monking.abilities[1];
        document.getElementById('a3').innerHTML = monking.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = monking.info; 
        break;
    
        case 'Cupidove-Romanfrig':
        document.getElementById('revoImg').src = romanfrig.image;
        document.getElementById('a1').innerHTML = romanfrig.abilities[0];
        document.getElementById('a2').innerHTML = romanfrig.abilities[1];
        document.getElementById('a3').innerHTML = romanfrig.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = romanfrig.info; 
        break;
    
        case 'Frostoast-Furnice':
        document.getElementById('revoImg').src = furnice.image;
        document.getElementById('a1').innerHTML = furnice.abilities[0];
        document.getElementById('a2').innerHTML = furnice.abilities[1];
        document.getElementById('a3').innerHTML = furnice.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = furnice.info; 
        break;
    
        case 'R3V-Up':
        document.getElementById('revoImg').src = revup.image;
        document.getElementById('a1').innerHTML = revup.abilities[0];
        document.getElementById('a2').innerHTML = revup.abilities[1];
        document.getElementById('a3').innerHTML = revup.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = revup.info; 
        break;
    
        case 'Dregg-Craggon':
        document.getElementById('revoImg').src = craggon.image;
        document.getElementById('a1').innerHTML = craggon.abilities[0];
        document.getElementById('a2').innerHTML = craggon.abilities[1];
        document.getElementById('a3').innerHTML = craggon.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = craggon.info; 
        break;
    
        case'Floatilock-Raftnesse':
        document.getElementById('revoImg').src = raftnesse.image;
        document.getElementById('a1').innerHTML = raftnesse.abilities[0];
        document.getElementById('a2').innerHTML = raftnesse.abilities[1];
        document.getElementById('a3').innerHTML = raftnesse.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = raftnesse.info; 
        break;
    
        case 'Fawneel-Buckalloy':
        document.getElementById('revoImg').src = buckalloy.image;
        document.getElementById('a1').innerHTML = buckalloy.abilities[0];
        document.getElementById('a2').innerHTML = buckalloy.abilities[1];
        document.getElementById('a3').innerHTML = buckalloy.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = buckalloy.info; 
        break;
    
        case 'Bookworm-Leximint':
        document.getElementById('revoImg').src = leximint.image;
        document.getElementById('a1').innerHTML = leximint.abilities[0];
        document.getElementById('a2').innerHTML = leximint.abilities[1];
        document.getElementById('a3').innerHTML = leximint.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = leximint.info; 
        break;
    
        case 'Tedream-Nightmort':
        document.getElementById('revoImg').src = nightmort.image;
        document.getElementById('a1').innerHTML = nightmort.abilities[0];
        document.getElementById('a2').innerHTML = nightmort.abilities[1];
        document.getElementById('a3').innerHTML = nightmort.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = nightmort.info;
        break;

        case 'Khepreetle':
        document.getElementById('revoImg').src = khepreetle.image;
        document.getElementById('a1').innerHTML = khepreetle.abilities[0];
        document.getElementById('a2').innerHTML = khepreetle.abilities[1];
        document.getElementById('a3').innerHTML = khepreetle.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = khepreetle.info;
        break;
        
        case 'Zorelle-Blizzora':
        document.getElementById('revoImg').src = blizzora.image;
        document.getElementById('a1').innerHTML = blizzora.abilities[0];
        document.getElementById('a2').innerHTML = blizzora.abilities[1];
        document.getElementById('a3').innerHTML = blizzora.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = blizzora.info;
        break;
    
        case 'Kasket':
        document.getElementById('revoImg').src = kasket.image;
        document.getElementById('a1').innerHTML = kasket.abilities[0];
        document.getElementById('a2').innerHTML = kasket.abilities[1];
        document.getElementById('a3').innerHTML = kasket.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = kasket.info;
        break;
    
        case 'Twilevo':
        document.getElementById('revoImg').src = twilevo.image;
        document.getElementById('a1').innerHTML = twilevo.abilities[0];
        document.getElementById('a2').innerHTML = twilevo.abilities[1];
        document.getElementById('a3').innerHTML = twilevo.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = twilevo.info;
        break;
        
        case 'Mummole-Ghopher':
        document.getElementById('revoImg').src = ghopher.image;
        document.getElementById('a1').innerHTML = ghopher.abilities[0];
        document.getElementById('a2').innerHTML = ghopher.abilities[1];
        document.getElementById('a3').innerHTML = ghopher.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = ghopher.info;
        break;

        case 'Mirate-Miraflect':
        document.getElementById('revoImg').src = miraflect.image;
        document.getElementById('a1').innerHTML = miraflect.abilities[0];
        document.getElementById('a2').innerHTML = miraflect.abilities[1];
        document.getElementById('a3').innerHTML = miraflect.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = miraflect.info;
        break;
    
        case 'Spectreat':
        document.getElementById('revoImg').src = spectreat.image;
        document.getElementById('a1').innerHTML = spectreat.abilities[0];
        document.getElementById('a2').innerHTML = spectreat.abilities[1];
        document.getElementById('a3').innerHTML = spectreat.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = spectreat.info;
        break;

        case 'Hauntevo':
        document.getElementById('revoImg').src = hauntevo.image;
        document.getElementById('a1').innerHTML = hauntevo.abilities[0];
        document.getElementById('a2').innerHTML = hauntevo.abilities[1];
        document.getElementById('a3').innerHTML = hauntevo.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = hauntevo.info;
        break;

        case 'Roojab-Kangcross':
        document.getElementById('revoImg').src = kangcross.image;
        document.getElementById('a1').innerHTML = kangcross.abilities[0];
        document.getElementById('a2').innerHTML = kangcross.abilities[1];
        document.getElementById('a3').innerHTML = kangcross.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = kangcross.info;
        break;

        case 'Vyphern-Wyverdant':
        document.getElementById('revoImg').src = wyverdant.image;
        document.getElementById('a1').innerHTML = wyverdant.abilities[0];
        document.getElementById('a2').innerHTML = wyverdant.abilities[1];
        document.getElementById('a3').innerHTML = wyverdant.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = wyverdant.info;
        break;

        case 'Bluezilla':
        document.getElementById('revoImg').src = bluezilla.image;
        document.getElementById('a1').innerHTML = bluezilla.abilities[0];
        document.getElementById('a2').innerHTML = bluezilla.abilities[1];
        document.getElementById('a3').innerHTML = bluezilla.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = bluezilla.info;
        break;

        case 'Venturevo':
        document.getElementById('revoImg').src = venturevo.image;
        document.getElementById('a1').innerHTML = venturevo.abilities[0];
        document.getElementById('a2').innerHTML = venturevo.abilities[1];
        document.getElementById('a3').innerHTML = venturevo.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = venturevo.info;
        break;

        case 'Blazlet-Volcanolisk':
        document.getElementById('revoImg').src = volcanolisk.image;
        document.getElementById('a1').innerHTML = volcanolisk.abilities[0];
        document.getElementById('a2').innerHTML = volcanolisk.abilities[1];
        document.getElementById('a3').innerHTML = volcanolisk.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = volcanolisk.info;
        break;

        case 'Loftevo':
        document.getElementById('revoImg').src = loftevo.image;
        document.getElementById('a1').innerHTML = loftevo.abilities[0];
        document.getElementById('a2').innerHTML = loftevo.abilities[1];
        document.getElementById('a3').innerHTML = loftevo.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = loftevo.info;
        break;

        case 'Reingifir':
        document.getElementById('revoImg').src = reingifir.image;
        document.getElementById('a1').innerHTML = reingifir.abilities[0];
        document.getElementById('a2').innerHTML = reingifir.abilities[1];
        document.getElementById('a3').innerHTML = reingifir.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = reingifir.info;
        break;

        case 'Gorlit-Gorcano':
        document.getElementById('revoImg').src = gorcano.image;
        document.getElementById('a1').innerHTML = gorcano.abilities[0];
        document.getElementById('a2').innerHTML = gorcano.abilities[1];
        document.getElementById('a3').innerHTML = gorcano.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = gorcano.info;
        break;

        case 'Dekute-Dekciple':
        document.getElementById('revoImg').src = dekciple.image;
        document.getElementById('a1').innerHTML = dekciple.abilities[0];
        document.getElementById('a2').innerHTML = dekciple.abilities[1];
        document.getElementById('a3').innerHTML = dekciple.abilities[2];
        document.getElementById('revoPriceInfo').innerHTML = dekciple.info;
        break;
    }}

//  Practice
/*
1- Make a else if statement for shiny button
2- Have it add the total for all the ivs and give it a plus for how much total is

*/


let basePrice = 0;
function calculate() {
console.log('This works');
    basePrice = 0
    // try to make nautre, and total ivs as a true statement example. switch(true)
        const val = document.querySelector('input').value;
        let sPlus = `S+ Value`
        let s = `S Value`
        let aPlus = `A+ Value`
        let a = `A Value`
        let bPlus = `B+ Value`
        let b = `B Value`
        let cPlus = `C+ Value`
        let c = `C Value`
        let d = `D Value`
        let inrevo = `in Revo`
        // Single digit zero prepend
        if (hpIvs.value <= 9){
            hpIvs.value =  "0" + hpIvs.value;
        }
        if (atkIvs.value <= 9){
            atkIvs.value =  "0" + atkIvs.value;
        }
        if (defIvs.value <= 9){
            defIvs.value =  "0" + defIvs.value;
        }
        if (spaIvs.value <= 9){
            spaIvs.value =  "0" + spaIvs.value;
        }
        if (spdIvs.value <= 9){
            spdIvs.value =  "0" + spdIvs.value;
        }
        if (speedIvs.value <= 9){
            speedIvs.value =  "0" + speedIvs.value;
        }

        switch(val) {
            

            case "Polluvern":
                basePrice = 0;
                if ((natureL1.value == "Timid" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty")) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 300;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 300;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 500;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '24' && spaIvs.value >= '25') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '31' && spaIvs.value >= '25') {
                        basePrice += 250;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((speedIvs.value < '20') || (spaIvs.value < '20' && speedIvs.value < '28' )) {
                        basePrice = 'The main value of a Polluvern comes from its speed and SPA IVs and speed boosting natures, other-wise, it is not at all useful in PVP. Speed and SPA Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1200) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1300) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid"  ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) || speedIvs.value < "20")  {
                     basePrice = "Unless Polluvern is Timid, Hasty or Naive in nature with speed and spA IVs greater than 20, your Polluvern is (Not worth much compared to other strong Polluverns)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
// -----------------------------------------------------------end of polluvern
    
            case "Wolpan-Opawan":
                basePrice = 0;
                if ((natureL1.value == "Timid" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty") || (natureL1.value == "Modest")) {
                    if (natureL1.value == "Modest")  {
                        basePrice -= 200;
                    }
        
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 130;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 300;
                    }
                    if (speedIvs.value >= '31') {
                        basePrice += 550;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '24' && spaIvs.value >= '25') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '31' && spaIvs.value >= '25') {
                        basePrice += 250;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (speedIvs.value < '20' && speedIvs.value < '20') {
                        basePrice = 'The main value of a Wolpan/Opawan comes from its speed IVs and speed boosting natures, other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1200) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1300) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid"  ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" )||(natureL1.value != "Modest"))  {
                     basePrice = "Unless Wolpan/Opawan is Timid, Hasty or Naive in nature with speed and spA IVs greater than 20, your wolpan/opawan is (Not worth much compared to other strong Opawans)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;

            // End of opawan--------------------------------------------------------------------
            case 'Murdoll':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant")) {
                    if (document.getElementById('ability1').checked) {
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                    }
                    if (natureL1.value == 'Jolly')  {
                        basePrice += 100;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 125;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    if  ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant" ))  {
                        //                  Atk ivs
                        if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                            basePrice += 10;
                        }
                        if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                            basePrice += 150;
                        }
                        if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                            basePrice += 300;
                        }
                    }

                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 300;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare with a very low chance of it being shiny. Atlest 10,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if ((speedIvs.value < '20') || (atkIvs.value < '20' && speedIvs.value < '20' )) {
                        basePrice = 'The main value of a Murdoll comes from its Nature being jolly and IVs for attack and speed being higher than 20, otherwise it is less valueble and not as useful in pvp battles';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1150) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1151 && basePrice <= 1500) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare with a very low chance of it being shiny. Atlest 10,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Adamanat" ) ||( speedIvs.value < "20" ))  {
                     basePrice = "Unless Murdoll is Jolly or Adamant in nature with speed and atk IVs greater than 20, your Murdoll is (Not worth much compared to other strong Murdoll's)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
                
            break;
            // End of murdoll      

            case 'Raival':
                basePrice = 0;
                if ((natureL1.value == "Bold" ) || (natureL1.value == "Modest" ) || (natureL1.value == "Calm") || (natureL1.value == "Timid" )) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 250;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 80;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 120;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 80;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 120;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 150;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        console.log('ability 3 checked')
                        basePrice += 350;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 600 && basePrice <= 749) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 750 && basePrice <= 949) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 950 && basePrice <= 1099) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1100) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold"  ) || (natureL1.value != "Modest" ) || (natureL1.value != "Calm" ) || (natureL1.value != "Timid" ))  {
                     basePrice = "Unless Raival is Bold, Modest, Calm or Timid in nature, your Raival is (Not worth much compared to other strong Raivals) IVs that give your raival more value are HP,DEF,SPA,SPD and SPEED that are greater than 20 IVs."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
                //  End of raival----------------------------------------------------------------------

            case 'Somnap-Soarnox':
                basePrice = 0;
                if ((natureL1.value == "Timid" ) || (natureL1.value == "Modest" )) {
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 30;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 30;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 30;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 80;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 250;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice = `Somnap-Soarnox needs the ability Serene Grace to be fully effective in pvp. otherwise, its not valuable compared to other soarnox with serene grace.`
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice = `Somnap-Soarnox needs the ability Serene Grace to be fully effective in pvp. otherwise, its not valuable compared to other soarnox with serene grace.`
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        document.getElementById("valuelator").innerHTML =  d;
                        
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                        return
                    }
                    if (document.getElementById('ability3').checked && spaIvs.value >= '20' && hpIvs.value >= '20' && speedIvs.value >= '20') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 600 && basePrice <= 749) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 750 && basePrice <= 849) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 850 && basePrice <= 949) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 950) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid"  ) || (natureL1.value != "Modest" ))  {
                     basePrice = "Unless your Somnap-Soarnox is Timid or Modest in nature with HP and spA IVs greater than 20, your Somnap-Soarnox is (Not worth much compared to other strong Somnap-Soarnox)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }

            break;
                //  End of soarnox --------------------------------------------------------
            case 'Pupple-Tidju':
                basePrice = 0;
                if ((natureL1.value == "Adamant" ) || (natureL1.value == "Jolly" )) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  ATK ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 300;
                    }
                    if (atkIvs.value < '15') {
                        basePrice -= 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 80;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 300;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '20') {
                        basePrice += 600;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (speedIvs.value < '20' && atkIvs.value <= '15') {
                        basePrice = 'The main value of a Tidju comes from its speed and attack IVs and speed boosting natures, other-wise, it is not at all useful in PVP. Speed Ivs above 20 and attack above 15 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid"  ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) || speedIvs.value < "20")  {
                     basePrice = "Unless Tidju is Adamant or Jolly in nature with speed and attack IVs greater than 20, your Tidju is (Not worth much compared to other strong Tidju)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
            // End of tidju------------------------------------------------------------------------
        
            case 'Vachita-Moomega':
                basePrice = 0;
                if ((natureL1.value == "Bold" ) || (natureL1.value == "Calm" )) {
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 30;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 30;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 30;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 100;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice = `Vachita-Moomega needs the ability Serene Grace or Natural Cure to be fully effective in pvp. Otherwise, its not valuable compared to other Vachita-Moomega with serene grace or Natural Cure.`
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                        return
                    }
                    if (document.getElementById('ability2').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice >= 450 && basePrice <= 550 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 551 && basePrice <= 650) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 651 && basePrice <= 750) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 751 && basePrice <= 850) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 850) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold"  ) || (natureL1.value != "Calm" ))  {
                     basePrice = " IF your Vachita-Moomega is not calm or Bold in nature with HP, DEF and SpD IVs greater than 20, your Vachita-Moomega is (Not worth much compared to other strong Vachita-Moomega)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
        //  The end of moomega====-----------------------------------------
            case 'Skadire':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty")) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ))  {
                        basePrice -= 200;
                        
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 300;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 500;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '24' && atkIvs.value >= '25') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '31' && atkIvs.value >= '25') {
                        basePrice += 300;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((speedIvs.value < '20') || (atkIvs.value < '20' && speedIvs.value < '28' )) {
                        basePrice = 'The main value of a Skadire comes from its speed and Atk IVs and speed boosting natures, other-wise, it is not at all useful in PVP. Speed and Atk Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1200) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1300) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) || speedIvs.value < "20")  {
                     basePrice = "Unless Skadire is Jolly, Hasty or Naive in nature with speed and atk IVs greater than 20, your Skadire is (Not worth much compared to other strong Skadires)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }

            break;
            // End of skadire--------------------------------------
        
            case 'Meganundra':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Impish" ) || (natureL1.value == "Adamant")) {
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 150;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 130;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 200;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice = 'The main value of a Meganundra comes from its speed IVs and speed boosting natures and (Speed boost for an ability), other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice = 'The main value of a Meganundra comes from its speed IVs and speed boosting natures and (Speed boost for an ability), other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        return
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '24' && atkIvs.value >= '25') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (speedIvs.value < '20' && atkIvs.value < '20') {
                        basePrice = 'The main value of a Meganundra comes from its speed IVs and speed boosting natures and Speed boost for an ability, other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Adamant" ) || (natureL1.value != "Impish" ))  {
                     basePrice = "Unless Meganundra is Jolly, Adamant or Impish in nature with speed and Atk IVs greater than 20, your Meganundra is (Not worth much compared to other strong Meganundra)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
        //  Meganundra end-----------------------------------------------------------
            case 'Dominevo':
                basePrice = 0;
                if ((natureL1.value == "Timid" ) || (natureL1.value == "Bold" ) || (natureL1.value == "Modest") || (natureL1.value == "Naive") || (natureL1.value == "Hasty")) {
        //                            
                    if  (natureL1.value == "Bold" )  {
                        basePrice -= 150;
                    }
                    if  (natureL1.value == "Modest" )  {
                        basePrice -= 50;
                    }
                    if  (natureL1.value == "Naive" )  {
                        basePrice -= 150;
                        
                    }
                    if  (natureL1.value == "Hasty" )  {
                        basePrice -= 150;
                    }
                    // Ivs------------------------------------------------------HP IVS

                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 150;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spa ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 130;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 250;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice = 'Please Select an Ability';
                        document.getElementById("priceTag").innerHTML =  basePrice;

                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '24' && atkIvs.value >= '25') {
                        basePrice += 300;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (speedIvs.value < '20' && spaIvs.value < '20') {
                        basePrice = 'The main value of a Dominevo comes from its speed IVs and speed boosting natures and Magic Bounce for an ability, other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid"  ) || (natureL1.value != "Bold" ) || (natureL1.value != "Hasty")|| (natureL1.value != "Naive" ))  {
                     basePrice = "Unless Dominevo is Timid, Bold, Modest, Naive or Hasty in nature with speed and Atk IVs greater than 20, your Dominevo is (Not worth much compared to other strong Dominevo)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
            //  End of dominevo---------------------------------------------------------------
            case 'Monking':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty")|| (natureL1.value == "Modest") || (natureL1.value == "Adamant")|| (natureL1.value == "Timid")) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }

                    if  ((natureL1.value == "Modest" ) || (natureL1.value == "Adamant" ))  {
                        // spa ivs
                        basePrice -= 100;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    if  ((natureL1.value == "Jolly" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Adamant" ))  {
                        //                  Atk ivs
                        if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                            basePrice += 50;
                        }
                        if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                            basePrice += 150;
                        }
                        if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                            basePrice += 300;
                        }
                    }
                    if  ((natureL1.value == "Timid" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Modest" ))  {
                        //                  spa ivs
                        if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                            basePrice += 50;
                        }
                        if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                            basePrice += 150;
                        }
                        if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                            basePrice += 300;
                        }
                    }

                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 500;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        basePrice -= 200;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '24' && spaIvs.value >= '25' ) {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        if ( (natureL1.value != "Naive" ) || (natureL1.value != "Hasty")|| (natureL1.value != "Modest") ||  (natureL1.value != "Timid")) {
                            basePrice -= 100;
                            
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '31' && spaIvs.value >= '25') {
                        basePrice += 300;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        if ( (natureL1.value != "Naive" ) || (natureL1.value != "Hasty")|| (natureL1.value != "Modest") ||  (natureL1.value != "Timid")) {
                            basePrice -= 300;
                            
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '24' && atkIvs.value >= '25') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        if ( (natureL1.value != "Naive" ) || (natureL1.value != "Hasty")|| (natureL1.value != "Adamant") ||  (natureL1.value != "Jolly")) {
                            basePrice -= 100;
                            
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '30' && atkIvs.value >= '25') {
                        basePrice += 300;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        if ((natureL1.value != "Naive" ) || (natureL1.value != "Hasty")|| (natureL1.value != "Adamant") ||  (natureL1.value != "Jolly")) {
                            basePrice -= 300;
                            
                        } 
                    }
                    if ((speedIvs.value < '20') || (spaIvs.value < '20' && speedIvs.value < '28' )|| (atkIvs.value < '20' && speedIvs.value < '28' )) {
                        basePrice = 'The main value of a Monking comes from its speed and Atk/spa IVs and speed boosting natures, other-wise, it is not at all useful in PVP. Speed and Atk Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1150) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1151 && basePrice <= 1500) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) ||( speedIvs.value < "20")|| (natureL1.value != "Timid" ))  {
                     basePrice = "Unless Monking is Jolly, Hasty or Naive in nature with speed and atk/spA IVs greater than 20, your Monking is (Not worth much compared to other strong Monkings)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }

            break;
        // End of monking-----------------------------------------------------------------------------
            case 'Cupidove-Romanfrig':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant") || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty" )) {
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 150;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 130;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 250;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice = 'The main value of a Romanfrig comes from its speed IVs and speed boosting natures with a high attack IV and (Reckless for an ability for a higher value), other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 

                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '20') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '25') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (speedIvs.value < '20' && atkIvs.value < '20') {
                        basePrice = 'The main value of a Meganundra comes from its speed IVs and speed boosting natures and Speed boost for an ability, other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Adamant" ))  {
                     basePrice = "Unless Romnfrig is Jolly or Adamant in nature with speed and Atk IVs greater than 20, your Romangrig is (Not worth much compared to other strong Romanfrig)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }

            break;
        // End of romanfrig--------------------------------------
            case 'Frostoast-Furnice':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant") || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty" )) {
        
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" )) {
                        basePrice -= 100;
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 150;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  Atk ivs
                    if (atkIvs.value <= '19') {
                        basePrice -= 100;
                    }
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  speed ivs
                    if (speedIvs.value <= '19') {
                        basePrice -= 130;
                    }
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 130;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 250;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        //   Shiny------------------------------------------------
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 

                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '15' && atkIvs.value >= '15') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '25') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (speedIvs.value < '20' && atkIvs.value < '20') {
                        basePrice = 'The main value of a Furnice comes from its speed IVs and speed boosting natures aswell as decent atk Ivs, other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Adamant" ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ))  {
                     basePrice = "Unless Furnice is Jolly or Adamant in nature with speed and Atk IVs greater than 20, your Furnice is (Not worth much compared to other strong Furnice)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
        //  End of furnice ------------------------------------------------------------
            case 'R3V-Up':
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Timid" ) || (natureL1.value == "Adamant")|| (natureL1.value == "Modest") || (natureL1.value == "Bold")|| (natureL1.value == "Calm")) {
                    if (document.getElementById('ability1').checked) {
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 125;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 150;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 125;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 125;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 150;
                    }
                    if  ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant" ))  {
                        //                  Atk ivs
                        if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                            basePrice += 100;
                        }
                        if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                            basePrice += 150;
                        }
                        if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                            basePrice += 300;
                        }
                    }
                    if  ((natureL1.value == "Timid" ) ||  (natureL1.value == "Modest" )|| (natureL1.value == "Bold" ) ||  (natureL1.value == "Calm" ))  {
                        //                  spa ivs
                        if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                            basePrice += 100;
                        }
                        if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                            basePrice += 150;
                        }
                        if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                            basePrice += 300;
                        }
                    }

                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 300;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare with a very low chance of it being shiny. Atlest 10,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if ((speedIvs.value < '20') || (spaIvs.value < '20' && speedIvs.value < '20' )|| (atkIvs.value < '20' && speedIvs.value < '20' )) {
                        basePrice = 'The main value of a R3V UP comes from its Nature and IVs that compliment each other (For example = A Timid nature R3V-UP with high IVs in speed and SpA IVs. Other-wise, it is not at all useful in PVP. ';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1150) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1151 && basePrice <= 1500) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare with a very low chance of it being shiny. Atlest 10,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Timid" ) || (natureL1.value != "Adamanat" ) ||( speedIvs.value < "20")|| (natureL1.value != "Modest" )|| (natureL1.value != "Bold" ) || (natureL1.value != "Calm" ))  {
                     basePrice = "Unless R3v-Up is Jolly, Timid, Adamant, Modest, Bold or calm in nature with speed and atk/spA IVs greater than 20, your R3v-UP is (Not worth much compared to other strong R3V-UPs)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
                
            break;
        // End of monking----------------------------------
            case 'Dregg-Craggon':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant" ) || (natureL1.value == "Hasty")||(natureL1.value == "Naive" ) || (natureL1.value == "Impish" )) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Impish" ))  {
                        basePrice -= 200;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 300;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 500;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice -= 200;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '25') {
                        basePrice += 200;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '30' && atkIvs.value >= '25') {
                        basePrice += 300;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((speedIvs.value < '20') || (atkIvs.value < '15' && speedIvs.value < '15' )) {
                        basePrice = 'The main value of a Craggon comes from its speed and Atk IVs and speed boosting natures, with multiscale as high value ability. other-wise, it is not at all useful in PVP. Multiscale is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1200) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1300) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly") || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) || (natureL1.value != "Adamant")|| (natureL1.value == "Impish" )) {
                     basePrice = "Unless Craggon is Jolly, Hasty, Impish, Adamant or Naive in nature with speed and Atk IVs greater than 20, your Craggon is (Not worth much compared to other strong Craggon)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
        //  End of craggon-----------------------------------

            case'Floatilock-Raftnesse':
            basePrice = 300;
            if ((natureL1.value == "Bold" ) || (natureL1.value == "Calm" ) || (natureL1.value == "Modest")|| (natureL1.value == "Timid")|| (natureL1.value == "Quiet")) {
                
                if(natureL1.value == "Timid") {
                    basePrice -= 100;
                }
                //                            HP IVS
                if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                    basePrice += 50;
                }
                if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                    basePrice += 100;
                }
                if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                    basePrice += 200;
                }
                    //              Def ivs
                if (defIvs.value >= '20' && defIvs.value <= '23') {
                    basePrice += 50;
                }
                if (defIvs.value >= '24' && defIvs.value <= '27') {
                    basePrice += 100;
                }
                if (defIvs.value >= '28' && defIvs.value <= '31') {
                    basePrice += 200;
                }
                //                  spD IVs
                if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                    basePrice += 50;
                }
                if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                    basePrice += 100;
                }
                if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                    basePrice += 200;
                }
                //                  spa ivs
                if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                    basePrice += 100;
                }
                if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                    basePrice += 150;
                }
                if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                    basePrice += 200;
                }
                //                  speed ivs
                if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                    basePrice += 50;
                }
                if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                    basePrice += 100;
                }
                if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                    basePrice += 200;
                }

                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                if (document.getElementById('ability1').checked) {
                    document.getElementById("priceTag").innerHTML =  basePrice;

                    //   Shiny-------------------------------------------------
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    } 
                    
                }
                if (document.getElementById('ability2').checked) {
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  d;
                    //   Shiny-------------------------------------------------
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    } 
                    
                }
                if (document.getElementById('ability3').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                    basePrice += 250;
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    //   Shiny-------------------------------------------------
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    } 
                }
                // value rating based on price.
                if (basePrice <= 449 && basePrice >= 350 ) {
                    document.getElementById("valuelator").innerHTML =  c;
                }
                if (basePrice >= 450 && basePrice <= 600 ) {
                    document.getElementById("valuelator").innerHTML =  cPlus;
                }
                if (basePrice >= 600 && basePrice <= 699) {
                    document.getElementById("valuelator").innerHTML =  b;
                }
                if (basePrice >= 700 && basePrice <= 799) {
                    document.getElementById("valuelator").innerHTML =  bPlus;
                }
                if (basePrice >= 800 && basePrice <= 899) {
                    document.getElementById("valuelator").innerHTML =  a;
                }
                if (basePrice >= 900 && basePrice <= 999) {
                    document.getElementById("valuelator").innerHTML =  s;
                }
                if (basePrice >= 1000 ) {
                    document.getElementById("valuelator").innerHTML =  sPlus;
                }
                document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                return
            };
            // Shiny
            if (document.getElementById('shiny').checked) {
                basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                document.getElementById("priceTag").innerHTML =  basePrice;
                document.getElementById("valuelator").innerHTML =  sPlus;
                return
            }
            // If not the correct natures
            if ((natureL1.value != "Bold" ) || (natureL1.value != "Calm" ) || (natureL1.value != "Modest")|| (natureL1.value != "Timid")|| (natureL1.value != "Quiet")) {
                basePrice = 'The main value of a Raftnesse comes from its Hp, Def and SpD IVs and defense boosting natures with (marvel scale for an ability), other-wise, it is not at all useful in PVP. High defensive stats is essential.';
                 document.getElementById("priceTag").innerHTML =  basePrice;
                 document.getElementById("valuelator").innerHTML =  `Still valued at atlest 300 revo due to expensive obtainability.`;
                 return
             }
            break;
        // end of raftnesse ----------------------------------

            case 'Fawneel-Buckalloy':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant" ) || (natureL1.value == "Hasty") || (natureL1.value == "Naive" ) || (natureL1.value == "Impish" )) {
                    if (document.getElementById('ability1').checked) {
                        basePrice -= 100;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                    }
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Impish" ))  {
                        basePrice -= 200;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 300;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 300;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice -= 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '20') {
                        basePrice += 50;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '25' && atkIvs.value >= '25') {
                        basePrice += 50;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((speedIvs.value < '20') || (atkIvs.value < '15' && speedIvs.value < '15' )) {
                        basePrice = 'The main value of a Buckalloy comes from its and Atk IVs and speed boosting natures, with Defiant as high value ability. other-wise, it is not at all useful in PVP.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1090) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1100) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly" ) || (natureL1.value != "Adamant" ) || (natureL1.value == "Hasty") || (natureL1.value != "Naive" ) || (natureL1.value != "Impish" ))  {
                     basePrice = "Unless Buckalloy is Jolly, Hasty, Impish, Adamant or Naive in nature with speed and Atk IVs greater than 20, your Buckalloy is (Not worth much compared to other strong ones)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
// end of fawneel-------------------
            break;
        
            case 'Bookworm-Leximint':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant" ) || (natureL1.value == "Hasty") || (natureL1.value == "Naive" ) || (natureL1.value == "Impish" ) || (natureL1.value == "Careful" )) {
                    if (document.getElementById('ability1').checked) {
                        basePrice -= 200;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                    }
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ))  {
                        basePrice -= 200;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 300;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 300;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '20') {
                        basePrice += 50;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '25' && atkIvs.value >= '25') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((hpIvs.value < '20') || (atkIvs.value < '15' && speedIvs.value < '15' )) {
                        basePrice = 'The main value of a Leximint comes from its and Atk IVs and good boosting natures, with Prankster and soundproof as high value abilities. Other-wise, it is not at all useful in PVP.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1090) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1100) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly" ) || (natureL1.value != "Adamant" ) || (natureL1.value == "Hasty") || (natureL1.value != "Naive" ) || (natureL1.value != "Impish" ))  {
                    basePrice = 'The main value of a Leximint comes from its and Atk IVs and good boosting natures, with Prankster and soundproof as high value abilities. Other-wise, it is not at all useful in PVP.';
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
            //  End of leximint-----------------------------------------------------
        
            case 'Tedream-Nightmort':
                basePrice = 100;
                if ((natureL1.value == "Timid" ) || (natureL1.value == "Modest") || (natureL1.value == "Naive") || (natureL1.value == "Hasty")) {
        //                            
                    if  (natureL1.value == "Modest" )  {
                        basePrice -= 150;
                    }
                    if  (natureL1.value == "Naive" )  {
                        basePrice -= 100;
                    }
                    if  (natureL1.value == "Hasty" )  {
                        basePrice -= 100;
                    }
                    // Ivs------------------------------------------------------HP IVS

                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 150;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spa ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 130;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 250;
                    }
                    if (speedIvs.value >= '31') {
                        basePrice += 350;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice += 200;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }

                    if (speedIvs.value < '20' && spaIvs.value < '20') {
                        basePrice = 'The main value of a Nightmort comes from its speed and spa IVs and speed boosting natures. Other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid"  ) ||  (natureL1.value != "Hasty")|| (natureL1.value != "Naive" )|| (natureL1.value != "Modest" ))  {
                     basePrice = "Unless Nightmort is Timid, Modest, Naive or Hasty in nature with speed and Atk IVs greater than 20, your nightmort is (Not worth much compared to other strong nightmorts)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }

            break;
    // End of nightort---------------------------------------
            case 'Khepreetle':
                basePrice = 0;
                if ((natureL1.value == "Timid" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty")|| (natureL1.value == "Modest")|| (natureL1.value == "Mild")|| (natureL1.value == "Rash")) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty")|| (natureL1.value == "Mild")|| (natureL1.value == "Rash"))  {
                        basePrice -= 200;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 150;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 250;
                    }
                    //                  speed ivs

                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 400;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '31' && spaIvs.value >= '25') {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((speedIvs.value < '20') || (spaIvs.value < '20' && speedIvs.value < '20' )) {
                        basePrice = 'The main value of a Khepreetle comes from its speed and SPA IVs and speed boosting natures, other-wise, it is not at all useful in PVP. Speed and SPA Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1099) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1100) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny legendary. Atlest 10,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid"  ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) || (natureL1.value != "Modest" ))  {
                     basePrice = "Unless Khepreetle is Timid, Hasty or Naive in nature with speed and spA IVs greater than 20, your Khepreetle is (Not worth much compared to other strong Khepreetle)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
            //  End of khepreetle=========================================================

            case 'Zorelle-Blizzora':
                basePrice = 0;
                if ((natureL1.value == "Bold" ) || (natureL1.value == "Calm" ) || (natureL1.value == "Modest")|| (natureL1.value == "Timid")|| (natureL1.value == "Quiet")) {
                    
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }

                    if ((natureL1.value == "Timid") || (natureL1.value == "Modest") || (natureL1.value == "Quiet")) {
                        basePrice -= 100;
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spa ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 200;
                    }
    
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }

                    if (document.getElementById('ability2').checked) {
                        basePrice -= 100;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        basePrice += 250;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold" ) || (natureL1.value != "Calm" ) || (natureL1.value != "Modest")|| (natureL1.value != "Timid")|| (natureL1.value != "Quiet")) {
                    basePrice = 'The main value of a blizzora comes from its Hp, Def and SpD IVs and defense boosting natures with high HP, other-wise, it is not at all useful in PVP. High defensive stats is essential.';
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
        // End of blizzora--------------------------------
        
            case 'Kasket':
                basePrice = 0;
                if ((natureL1.value == "Bold" ) || (natureL1.value == "Calm" ) || (natureL1.value == "Careful")|| (natureL1.value == "Impish")||(natureL1.value == "Timid" ) || (natureL1.value == "Modest" ) || (natureL1.value == "Jolly")|| (natureL1.value == "Adamant")) {
                    
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
                    if ((natureL1.value == "Timid" ) || (natureL1.value == "Modest" ) || (natureL1.value == "Jolly")|| (natureL1.value == "Adamant")) {
                        basePrice -= 200;
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spa ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 150;
                    }
    
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }

                    if (document.getElementById('ability2').checked) {
                        basePrice -= 200;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        basePrice += 200;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold" ) || (natureL1.value != "Calm" ) || (natureL1.value != "Modest")|| (natureL1.value != "Timid")|| (natureL1.value != "Quiet")) {
                    basePrice = 'The main value of a Kasket comes from its Hp, Def and SpD IVs and defense boosting natures with high HP And the ability Prankster, other-wise, it is not at all useful in PVP. High defensive stats is essential.';
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
        // End of kasket---------------------------------------------------------------------------
            case 'Twilevo':
                basePrice = 0;
                if ((natureL1.value == "Bold" ) || (natureL1.value == "Calm" ) || (natureL1.value == "Careful")|| (natureL1.value == "Impish")||(natureL1.value == "Timid" ) || (natureL1.value == "Modest" ) || (natureL1.value == "Jolly")|| (natureL1.value == "Adamant")) {
                    
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
                    if ((natureL1.value == "Timid" ) || (natureL1.value == "Modest" ) || (natureL1.value == "Jolly")|| (natureL1.value == "Adamant")) {
                        basePrice -= 200;
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spa ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 150;
                    }
    
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }

                    if (document.getElementById('ability2').checked) {
                        basePrice -= 100;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        basePrice += 200;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1000 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold" ) || (natureL1.value != "Calm" ) || (natureL1.value != "Modest")|| (natureL1.value != "Timid")|| (natureL1.value != "Quiet")) {
                    basePrice = 'The main value of a Twilevo comes from its Hp, Def and SpD IVs and defense boosting natures with high HP And the ability Synchronie for maximum value, other-wise, it is not at all useful in PVP. High defensive stats is essential.';
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
            //  End of twilevo-----------------------------------------------------------
            case 'Mummole-Ghopher':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant") || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty" )|| (natureL1.value == "Impish" ) || (natureL1.value == "Careful" )) {
        
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Impish" ) || (natureL1.value == "Careful" )) {
                        basePrice -= 100;
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value <= '19') {
                        basePrice -= 100;
                    }
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value <= '19') {
                        basePrice -= 130;
                    }
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 200;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice -= 100;
                        //   Shiny------------------------------------------------
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                    }
                    if (document.getElementById('ability2').checked) {
                        
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 

                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '15' && atkIvs.value >= '15') {
                        basePrice += 50;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '25') {
                        basePrice += 150;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (speedIvs.value < '20' && atkIvs.value < '20') {
                        basePrice = 'The main value of a Ghopher comes from its Attack IVs and Attack boosting natures aswell as decent atk Ivs, other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 850) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 851 && basePrice <= 900) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Event revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Adamant" ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ))  {
                     basePrice = "Unless Ghopher is Jolly or Adamant in nature with speed and Atk IVs greater than 20, your Ghopher is (Not worth much compared to other strong Ghophers)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
    //  End of ghopher---------------------------------------------------------

            case 'Mirate-Miraflect':
                basePrice = 0;
                if ((natureL1.value == "Bold" ) || (natureL1.value == "Impish" ) || (natureL1.value == "Relaxed")|| (natureL1.value == "Calm")|| (natureL1.value == "Careful")|| (natureL1.value == "Sassy")) {
                    
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spa ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 0;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 0;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 0;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 0;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 0;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 0;
                    }
    
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }

                    if (document.getElementById('ability2').checked) {
                        basePrice -= 100;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice <= 400 && basePrice >= 300 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 401 && basePrice <= 450 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 451 && basePrice <= 550) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 551 && basePrice <= 650) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 651 && basePrice <= 700) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 701) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold" ) || (natureL1.value != "Impish" ) || (natureL1.value != "Relaxed")|| (natureL1.value != "Calm")|| (natureL1.value != "Careful")|| (natureL1.value != "Sassy")) {
                    basePrice = 'The main value of a Miraflect comes from its Hp, Def and SpD IVs and defense boosting natures with high HP And the ability Shadowtag, other-wise, it is not at all useful in PVP. High defensive stats is essential.';
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
        // End of miraflect------------------------------------------------------------------------------------

            case 'Spectreat':
                basePrice = 2000;
                if ((natureL1.value == "Timid" ) || (natureL1.value == "Modest" )||(natureL1.value == "Hasty" ) || (natureL1.value == "Naive" )||(natureL1.value == "Mild" ) || (natureL1.value == "Rash" )) {
                    
                    if ((natureL1.value == "Modest" )||(natureL1.value == "Hasty" ) || (natureL1.value == "Naive" )||(natureL1.value == "Mild" ) || (natureL1.value == "Rash" ))  {
                        basePrice += 200;
                    }
                    if (natureL1.value == "Timid" )  {
                        basePrice += 100;
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 80;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 300;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 150;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 300;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Limited revomon with only 10 shiny versions of them in exsistance. ATLEST 10k Revo`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        document.getElementById("valuelator").innerHTML =  d;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Limited revomon with only 10 shiny versions of them in exsistance. ATLEST 10k Revo`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                        
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        document.getElementById("valuelator").innerHTML =  d;
                        
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Limited revomon with only 10 shiny versions of them (EVER) in exsistance. ATLEST 10k Revo`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                        
                    }
                    if (document.getElementById('ability3').checked) {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Limited revomon with only 10 shiny versions of them (EVER) in exsistance. ATLEST 10k Revo`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice >= 2600 && basePrice <= 2650 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 2651 && basePrice <= 2700) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 2701 && basePrice <= 2800) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 2801 && basePrice <= 2900) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 2901) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Limited revomon with only 10 shiny versions of them in exsistance. ATLEST 10k Revo`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid" ) || (natureL1.value != "Modest" )||(natureL1.value != "Hasty" ) || (natureL1.value != "Naive" )||(natureL1.value != "Mild" ) || (natureL1.value != "Rash" ))  {
                     basePrice = 'Your extremely rare spectreat does not have the best nature to be pvp worthy. Still worth atlest 2k revo'
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  'Monalisa pictures should not be used for battles anyway';
                     return
                 }
            break;
    //  End of spectreat---------------------------------------------------------------------

            case 'Hauntevo':
                basePrice = 0;
                if ((natureL1.value == "Bold"  ) || (natureL1.value == "Modest" ) || (natureL1.value == "Calm" ) || (natureL1.value != "Timid" )) {
                    
                    if (natureL1.value != "Timid" )  {
                        basePrice -= 100;
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 75;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 100;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice += 50;
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                    }
                    if (document.getElementById('ability3').checked && spaIvs.value >= '20' && hpIvs.value >= '20' && speedIvs.value >= '20') {
                        basePrice += 50;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice >= 450 && basePrice <= 500 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 550 && basePrice <= 600) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 650 && basePrice <= 700) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 750 && basePrice <= 800) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 800) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold"  ) || (natureL1.value != "Modest" ) || (natureL1.value != "Calm" ) || (natureL1.value != "Timid" ))  {
                     basePrice = "Unless your hauntevo is Bold, calm, timid or Modest in nature with HP and spA IVs greater than 20, hauntevo is (Not worth much compared to other hauntevos)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
    //  End of hauntevo--------------------------------------------------------
            case 'Roojab-Kangcross':
                basePrice = 400;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant" ) || (natureL1.value == "Hasty")||(natureL1.value == "Naive" ) || (natureL1.value == "Impish" )|| (natureL1.value == "Careful" )) {
                    if (document.getElementById('ability1').checked) {
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        
                    }
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Impish" ) || (natureL1.value == "Jolly" ) || (natureL1.value == "Careful" )) {
                        basePrice -= 100;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 300;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 200;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && atkIvs.value >= '25') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '25' && atkIvs.value >= '25') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1200) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1300) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly") || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) || (natureL1.value != "Adamant")|| (natureL1.value == "Impish")||(atkIvs.value <= '20' && hpIvs.value <= '20')) {
                     basePrice = "Unless Kangcross is Jolly, Hasty, Impish, Adamant or Naive in nature with HP and Atk IVs greater than 20, your Kangcross is (Not worth much compared to other strong Kangcross)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  `Still valued at atlest 300 revo due to expensive obtainability.`;
                     return
                 }
            break;
            // End of kangcross---------------------------------------------------
    
            case 'Vyphern-Wyverdant':
                basePrice = 0;
                if ((natureL1.value == "Bold" ) || (natureL1.value == "Calm" )||(natureL1.value == "Relaxed" ) || (natureL1.value == "Sassy" )|| (natureL1.value == "Impish" )|| (natureL1.value == "Modest" )|| (natureL1.value == "Quiet" )) {
       
                    if ((natureL1.value == "Impish" ) || (natureL1.value == "Modest" ) || (natureL1.value == "Quiet" ))  {
                        basePrice -= 100;
                    }
                    //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 30;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 30;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 30;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 150;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 100;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice -= 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        document.getElementById("valuelator").innerHTML = `Vyphern-Wyverdant needs the ability Regenerator to be fully effective in pvp.`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                        
                    }
                    if (document.getElementById('ability2').checked ) {
                        basePrice -= 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        document.getElementById("valuelator").innerHTML = `Vyphern-Wyverdant needs the ability Regenerator to be fully effective in pvp.`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice <= 150  ) {
                        basePrice = 0;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  d;
                    }
                    if (basePrice >= 450 && basePrice <= 550 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 551 && basePrice <= 650) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 651 && basePrice <= 750) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 751 && basePrice <= 850) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 850) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold" ) || (natureL1.value != "Calm" )||(natureL1.value != "Relaxed" ) || (natureL1.value != "Sassy" )|| (natureL1.value != "Impish" )|| (natureL1.value != "Modest" )|| (natureL1.value != "Quiet" ))  {
                     basePrice = " Your Vyphern-Wyverdant is not the right nature for PVP or for good value. Unless it has a great nature for its defenses and HP, DEF and SpD IVs greater than 20, your Vyphern-Wyverdant is (Not worth much compared to other strong Vyphern-Wyverdant)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
    //  End of wyverdanat---------------------------------------

            case 'Bluezilla':
                basePrice = 300;
                if ((natureL1.value == "Lonely" ) || (natureL1.value == "Adamant" ) || (natureL1.value == "Naughty")||(natureL1.value == "Brave" ) || (natureL1.value == "Impish" )|| (natureL1.value == "Careful" )|| (natureL1.value == "Sassy" )|| (natureL1.value == "Relaxed" )) {
                    if (document.getElementById('ability1').checked) {
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        
                    }
                    if ((natureL1.value == "Relaxed" ) || (natureL1.value == "Lonely" ) || (natureL1.value == "Naughty" ) || (natureL1.value == "Impish" ) || (natureL1.value == "Careful" )|| (natureL1.value == "Sassy" )) {
                        basePrice -= 100;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 100;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 200;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 200;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 100;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '20' && atkIvs.value >= '25') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && hpIvs.value >= '25' && atkIvs.value >= '25') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice <= 449 && basePrice >= 350 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 450 && basePrice <= 600 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 700 && basePrice <= 799) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 800 && basePrice <= 899) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 900 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 1000 && basePrice <= 1200) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 1300) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Lonely" ) || (natureL1.value != "Adamant" ) || (natureL1.value != "Naughty")||(natureL1.value != "Brave" ) || (natureL1.value != "Impish" )|| (natureL1.value != "Careful" )|| (natureL1.value != "Sassy" )|| (natureL1.value != "Relaxed" )||(atkIvs.value <= '20' && hpIvs.value <= '20')) {
                     basePrice = "Your Bluezilla does not have the right nature to be pvp worthy. HP and Atk IVs greater than 20 is needed."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  `Still valued at atlest 300 revo due to expensive obtainability.`;
                     return
                 }
            break;
            // End of bluezilla --------------------------------------
    
            case 'Venturevo':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant" ) || (natureL1.value == "Hasty") || (natureL1.value == "Naive" ) || (natureL1.value == "Lonely" )|| (natureL1.value == "Naughty" )) {
                    if (document.getElementById('ability1').checked) {
                        basePrice -= 100;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                    }
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Lonely" )|| (natureL1.value == "Naughty" ))  {
                        basePrice -= 100;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 200;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 300;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '20' && atkIvs.value >= '20') {
                        basePrice += 50;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '25' && atkIvs.value >= '25') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((speedIvs.value < '20') || (atkIvs.value < '15' && speedIvs.value < '15' )) {
                        basePrice = 'The main value of a Venturevo comes from its and Atk IVs and speed boosting natures, with Defiant as high value ability. other-wise, it is not at all useful in PVP.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice >= 300 && basePrice <= 400) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 401 && basePrice <= 500 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 501 && basePrice <= 600) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 601 && basePrice <= 700) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 701 && basePrice <= 800) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 801 && basePrice <= 900) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 901 && basePrice <= 999) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly" ) || (natureL1.value != "Adamant" ) || (natureL1.value != "Hasty") || (natureL1.value != "Naive" ) || (natureL1.value != "Lonely" )|| (natureL1.value != "Naughty" ))  {
                     basePrice = "Unless Venturevo is Jolly, Hasty, Adamant or Naive in nature with speed and Atk IVs greater than 20, your Venturevo is (Not worth much compared to other strong ones)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
    // Ventureo------------------------------------------------------------

            case 'Blazlet-Volcanolisk':
                basePrice = 0;
                if ((natureL1.value == "Timid" ) || (natureL1.value == "Modest") || (natureL1.value == "Naive") || (natureL1.value == "Hasty")) {
        //                            
                    if  (natureL1.value == "Modest" )  {
                        basePrice -= 150;
                    }
                    if  (natureL1.value == "Naive" )  {
                        basePrice -= 100;
                        
                    }
                    if  (natureL1.value == "Hasty" )  {
                        basePrice -= 100;
                    }
                    // Ivs------------------------------------------------------HP IVS

                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spa ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs

                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '31') {
                        basePrice += 250;
                    }

                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare revo. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice = `Please Select Ability`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare revo. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        return
                    }

                    if (speedIvs.value < '20' && spaIvs.value < '20') {
                        basePrice = 'The main value of a Volcanolisk comes from its speed and spa IVs and speed boosting natures. Other-wise, it is not at all useful in PVP. Speed Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 200 && basePrice >= 299 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 300 && basePrice <= 399 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 400 && basePrice <= 499) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 500 && basePrice <= 599) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 700 && basePrice <= 749) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 750 ) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny rare revo. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Timid"  ) ||  (natureL1.value != "Hasty")|| (natureL1.value != "Naive" )|| (natureL1.value != "Modest" ))  {
                     basePrice = "Unless Volcanolisk is Timid, Modest, Naive or Hasty in nature with speed and Atk IVs greater than 20, your Volcanolisk is (Not worth much compared to other strong Volcanolisk)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
    // End of volcanolisk-----------------------------------------------

            case 'Loftevo':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Adamant" ) || (natureL1.value == "Hasty")||(natureL1.value == "Naive" ) || (natureL1.value == "Impish" )) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }
                    if ((natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Impish" )|| (natureL1.value == "Adamant" ))  {
                        basePrice -= 200;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  Atk ivs
                    if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                        basePrice += 200;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 200;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability2').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked && speedIvs.value >= '25' && atkIvs.value >= '25') {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((speedIvs.value < '20') || (atkIvs.value < '15' && speedIvs.value < '15' )) {
                        basePrice = 'The main value of a Loftevo comes from its speed and Atk IVs and speed boosting natures, with Scrappy as higher value ability. other-wise, it is not at all useful in PVP.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice >= 199 ) {
                        document.getElementById("valuelator").innerHTML =  c;
                    }
                    if (basePrice >= 200 && basePrice <= 299 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 300 && basePrice <= 399) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 400 && basePrice <= 499) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 500 && basePrice <= 549) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 550 && basePrice <= 599) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 600 && basePrice <= 699) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 700) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly") || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) || (natureL1.value != "Adamant")|| (natureL1.value == "Impish" )) {
                     basePrice = "Unless loftevo is Jolly, Hasty, Impish, Adamant or Naive in nature with speed and Atk IVs greater than 20, your loftevo is (Not worth much compared to other strong loftevo)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
            // End of lofteno------------------------------------------------
    
            case 'Reingifir':
                basePrice = 2000;
                basePrice = 'Your extremely rare Reingifir Is not a pvp worthy revomon. Still worth atlest 2k revo'
                document.getElementById("priceTag").innerHTML =  basePrice;
                document.getElementById("valuelator").innerHTML =  'Monalisa pictures should not be used for battles anyway';
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Limited revomon with only 5 shiny versions of them in exsistance. ATLEST 10k Revo`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
            
            break;
    //  End of reingifir----------------------------------------

            case 'Gorlit-Gorcano':
                basePrice = 0;
                if ((natureL1.value == "Jolly" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty")|| (natureL1.value == "Modest") || (natureL1.value == "Adamant")|| (natureL1.value == "Timid")) {
                    if (document.getElementById('ability1').checked) {
                        basePrice = "Please select an ability";
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  "";
                        return
                    }

                    if  ((natureL1.value == "Modest" ) || (natureL1.value == "Adamant" ))  {
                        // spa ivs
                        basePrice -= 100;
                    }
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 50;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    if  ((natureL1.value == "Jolly" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Adamant" ))  {
                        //                  Atk ivs
                        if (atkIvs.value >= '20' && atkIvs.value <= '23') {
                            basePrice += 50;
                        }
                        if (atkIvs.value >= '24' && atkIvs.value <= '27') {
                            basePrice += 100;
                        }
                        if (atkIvs.value >= '28' && atkIvs.value <= '31') {
                            basePrice += 200;
                        }
                    }
                    if  ((natureL1.value == "Timid" ) || (natureL1.value == "Naive" ) || (natureL1.value == "Hasty" ) || (natureL1.value == "Modest" ))  {
                        //                  spa ivs
                        if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                            basePrice += 50;
                        }
                        if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                            basePrice += 100;
                        }
                        if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                            basePrice += 200;
                        }
                    }

                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 100;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '30') {
                        basePrice += 150;
                    }
                    if (speedIvs.value >= '31' ) {
                        basePrice += 200;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability3').checked) {
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;

                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability2').checked && speedIvs.value >= '24' && spaIvs.value >= '25' ) {
                        basePrice += 100;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        if ( (natureL1.value != "Naive" ) || (natureL1.value != "Hasty")|| (natureL1.value != "Modest") ||  (natureL1.value != "Timid")) {
                            basePrice -= 100;
                        } 
                    }
                    if (document.getElementById('ability2').checked && speedIvs.value >= '31' && spaIvs.value >= '25') {
                        basePrice += 300;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        if ( (natureL1.value != "Naive" ) || (natureL1.value != "Hasty")|| (natureL1.value != "Modest") ||  (natureL1.value != "Timid")) {
                            basePrice -= 300;
                        } 
                    }
                    if (document.getElementById('ability2').checked) {

                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                        if ( (natureL1.value != "Naive" ) || (natureL1.value != "Hasty")|| (natureL1.value != "Adamant") ||  (natureL1.value != "Jolly")) {
                            basePrice -= 100;
                        } 
                    }
                    if (document.getElementById('ability3').checked) {

                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if ((speedIvs.value < '20') || (spaIvs.value < '20' && speedIvs.value < '28' )|| (atkIvs.value < '20' && speedIvs.value < '28' )) {
                        basePrice = 'The main value of a Monking comes from its speed and Atk/spa IVs and speed boosting natures, other-wise, it is not at all useful in PVP. Speed and Atk Ivs above 20 is essential.';
                        document.getElementById("valuelator").innerHTML =  d;
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        return
                    }
                    // value rating based on price.
                    if (basePrice <= 149 ) {
                        document.getElementById("valuelator").innerHTML =  d;
                    }
                    if (basePrice >= 150 && basePrice <= 199 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 200 && basePrice <= 249) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 250 && basePrice <= 299) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 300 && basePrice <= 449) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 450 && basePrice <= 499) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 500 && basePrice <= 549) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 550 && basePrice <= 600) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }
                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Jolly"  ) || (natureL1.value != "Naive" ) || (natureL1.value != "Hasty" ) ||( speedIvs.value < "20")|| (natureL1.value != "Timid" ))  {
                     basePrice = "Unless Gorcano is Jolly, Hasty or Naive in nature with speed and atk/spA IVs greater than 20, your Gorcano is (Not worth much compared to other strong Gorcano)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
            break;
    // End of gorcano--------------------------

            case 'Dekute-Dekciple':
                basePrice = 0;
                if ((natureL1.value == "Bold" ) || (natureL1.value == "Calm" )) {
        //                            HP IVS
                    if (hpIvs.value >= '20' && hpIvs.value <= '23')  {
                        basePrice += 30;
                    }
                    if (hpIvs.value >= '24' && hpIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (hpIvs.value >= '28' && hpIvs.value <= '31') {
                        basePrice += 100;
                    }
                        //              Def ivs
                    if (defIvs.value >= '20' && defIvs.value <= '23') {
                        basePrice += 30;
                    }
                    if (defIvs.value >= '24' && defIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (defIvs.value >= '28' && defIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  spD IVs
                    if (spdIvs.value >= '20' && spdIvs.value <= '23') {
                        basePrice += 30;
                    }
                    if (spdIvs.value >= '24' && spdIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spdIvs.value >= '28' && spdIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  SpA ivs
                    if (spaIvs.value >= '20' && spaIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (spaIvs.value >= '24' && spaIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (spaIvs.value >= '28' && spaIvs.value <= '31') {
                        basePrice += 100;
                    }
                    //                  speed ivs
                    if (speedIvs.value >= '20' && speedIvs.value <= '23') {
                        basePrice += 50;
                    }
                    if (speedIvs.value >= '24' && speedIvs.value <= '27') {
                        basePrice += 75;
                    }
                    if (speedIvs.value >= '28' && speedIvs.value <= '31') {
                        basePrice += 100;
                    }
                    // Shiny
                    if (document.getElementById('shiny').checked) {
                        basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                        document.getElementById("priceTag").innerHTML =  basePrice;
                        document.getElementById("valuelator").innerHTML =  sPlus;
                        return
                    }
                    if (document.getElementById('ability1').checked) {
                        basePrice = `Select an Ability`
                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        document.getElementById("valuelator").innerHTML =  baseprice;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        }
                        return
                    }
                    if (document.getElementById('ability2').checked && hpIvs.value >= '20' && defIvs.value >= '20' && spdIvs.value >= '20') {
                        basePrice += 0;
                        document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    if (document.getElementById('ability3').checked) {

                        document.getElementById("priceTag").innerHTML =  `${basePrice}`;
                        //   Shiny-------------------------------------------------
                        if (document.getElementById('shiny').checked) {
                            basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                            document.getElementById("priceTag").innerHTML =  basePrice;
                            document.getElementById("valuelator").innerHTML =  sPlus;
                            return
                        } 
                    }
                    // value rating based on price.
                    if (basePrice <= 149 ) {
                        document.getElementById("valuelator").innerHTML =  d;
                    }
                    if (basePrice >= 150 && basePrice <= 199 ) {
                        document.getElementById("valuelator").innerHTML =  cPlus;
                    }
                    if (basePrice >= 200 && basePrice <= 249) {
                        document.getElementById("valuelator").innerHTML =  b;
                    }
                    if (basePrice >= 250 && basePrice <= 299) {
                        document.getElementById("valuelator").innerHTML =  bPlus;
                    }
                    if (basePrice >= 300 && basePrice <= 449) {
                        document.getElementById("valuelator").innerHTML =  a;
                    }
                    if (basePrice >= 450 && basePrice <= 499) {
                        document.getElementById("valuelator").innerHTML =  aPlus;
                    }
                    if (basePrice >= 500 && basePrice <= 549) {
                        document.getElementById("valuelator").innerHTML =  s;
                    }
                    if (basePrice >= 550 && basePrice <= 600) {
                        document.getElementById("valuelator").innerHTML =  sPlus;
                    }

                    document.getElementById("priceTag").innerHTML =  `${basePrice} minimum ${inrevo}`;
                    return
                };
                // Shiny
                if (document.getElementById('shiny').checked) {
                    basePrice = `This is a Shiny Rare. Atlest 2,000$ in revo.`
                    document.getElementById("priceTag").innerHTML =  basePrice;
                    document.getElementById("valuelator").innerHTML =  sPlus;
                    return
                }
                // If not the correct natures
                if ((natureL1.value != "Bold"  ) || (natureL1.value != "Calm" ))  {
                     basePrice = " IF your Dekute-Dekciple is not calm or Bold in nature with HP, DEF and SpD IVs greater than 20, your Dekute-Dekciple is (Not worth much compared to other strong Dekute-Dekciple)."
                     document.getElementById("priceTag").innerHTML =  basePrice;
                     document.getElementById("valuelator").innerHTML =  d;
                     return
                 }
        }

}


