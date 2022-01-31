// region element declarations
let elementSum = D(0)
const elementButtons = []
const isotopeButtons = []
const elementNames = ['Hydrogen','Carbon','Oxygen','Fluorine','Sulfur','Chlorine','Iron','Lead']
const isotopeIds = ['Hydrogen3','Carbon14','Oxygen15','Fluorine18','Sulfur35','Chlorine37','Iron60','Lead212',]
const shortElement = ['H','C','O','F','S','Cl','Fe','Pb']
const compoundButtons = []
const compoundBoost = ['Element Boost: ','Power Boost: ','Battery Boost: ','Lead Boost: ','Melt Boost: ']
for (let i=0; i<8; i++){
    elementButtons[i] = DOMCacheGetOrSet(`${elementNames[i]}`)
    isotopeButtons[i] = DOMCacheGetOrSet(`${isotopeIds[i]}`)
}
for(let i = 0; i < 5; i++) {
    compoundButtons[i] = DOMCacheGetOrSet(`${data.compounds[i].name}`)
}
const tabs = []
const tabIDs = ['cB','pB','mB','rB','acB']
const tabNames = ['Compounds','Power','Melting','Refinery','Accelerators']
const colors = ['3a5b99','b0b835','68368a','583793','37936d']
for(let i=0; i < 5; i++) {
    tabs[i] = DOMCacheGetOrSet(`${tabIDs[i]}`)
}
const powerUpButton = []
for(let i=0; i < 3; i++)
    powerUpButton[i] = DOMCacheGetOrSet(`pu${i+1}`)
const coriumMultDesc =['Increase Atom Production by 4x','Increase Compounds Created by 1.25x','Increase Corium Produced on Melt']
const coriumSingDesc = ['Unlock The Refinery<br>Cost: 1.00e10 Corium','Unlock Accelerators<br>Cost: 1.00e15 Corium','Not Available']
//'Unlock Passive Power Production<br>Cost: 1.00e15 Corium','Radition Not Implemented'
// Refinery Area
const refineryIDs = ['shard', 'mold', 'mint']
const refineryNames = ['Sharding','Molding','Minting']
const refineryDescriptions = ['Produces Kuaka Shards','Produces Kuaka Fragments','Produces Kuaka Coins']
const currencyNames = ['Shards','Fragments','Coins']
//Accelerator stuf
const particleTexts = []
const particleTextIds = ['protonsText','neutronsText','electronsText']
const particleNames = ['Protons', 'Neutrons', 'Electrons']
for(let i = 0; i < 3; i++)
    particleTexts[i] = document.getElementById(`${particleTextIds[i]}`)
    const protonGainText = document.getElementById('protonGain')
    const neutronGainText = document.getElementById('neutronGain')
    const electronGainText = document.getElementById('electronGain')
const accelColors = ['808080','379337','45568f','934237']
let currencyDisplayIndex = 0
function updateHTML(){
    for(let i = 0; i < 5; i++) {
        tabs[i].innerHTML = data.hasTab[i] ? `${tabNames[i]}` : '???'
        if(!data.hasTab[i])
            tabs[i].style.backgroundColor = 'gray'
        else if(data.hasTab[i] && tabs[i].style.backgroundColor === 'gray')
            tabs[i].style.backgroundColor = 'rgba(0,0,0,0)'
        tabs[i].style.border = !data.hasTab[i] ? '4px solid gray' : `4px solid #${colors[i]}`
    }
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    DOMCacheGetOrSet('powerText').innerHTML = `Power: ${format(data.power)} / ${format(powerLimit)}<br>Excess Power: ${format(data.powerStored)}`
    DOMCacheGetOrSet('coriumText').innerHTML = `Corium: ${format(data.corium)}<br>Boost: ${format(D(1).plus(Decimal.sqrt(data.coriumMax)))}x`
    
    for(let i = 0; i < data.buyAmounts.length; i++)
        DOMCacheGetOrSet(`bA${i}`).innerHTML = `Buy Amount<br>${data.buyAmounts[i]}`

    if(data.currentTab === 0) {
        DOMCacheGetOrSet('toggle1').innerHTML = data.settingsToggles[0] ? 'Melting Confirmation [ON]' : 'Melting Confirmation [OFF]'
        DOMCacheGetOrSet('toggle2').innerHTML = data.settingsToggles[1] ? 'Enable Offline Progress [ON]' : 'Enable Offline Progress [OFF]'
        DOMCacheGetOrSet('toggle3').innerHTML = data.settingsToggles[2] ? 'Splitter Confirmation [ON]' : 'Splitter Confirmation [OFF]'
    }
    else if (data.currentTab === 1) {
        document.getElementById('RaE').style.display = data.coriumSingUps[2] ? 'flex' : 'none'
        document.getElementById('ReE').style.display = data.coriumSingUps[2] ? 'flex' : 'none'
        if(data.currentSubTab[0] === 0) {
            for(let i = 0;i < 8;i++) {
                if(i == 0)
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]})<br>Cost: ${format(elementCost[i])} Hydrogen | Level:${format(data.elements[i].level)}`
                else if(i == 1)
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | ${format(D(1).add(Decimal.sqrt(data.elements[i].max)))}x)<br>Cost: ${format(elementCost[i])} Hydrogen | Level:${format(data.elements[i].level)}`
                else
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | ${format(D(1).add(Decimal.sqrt(data.elements[i].max)))}x)<br>Cost: ${format(elementCost[i])} ${data.elements[i - 1].name} | Level:${format(data.elements[i].level)}`
            }
        }
        else if(data.currentSubTab[0] === 1) {
            for(let i = 0;i < 8;i++) {
                if(i == 0)
                    isotopeButtons[i].innerHTML = `${data.isotopes[i].name}  Generator (${format(data.isotopes[i].amt)} ${data.isotopes[i].name})<br>Cost: ${format(isotopeCost[i])} Lead | Level:${format(data.isotopes[i].level)}`
                else
                isotopeButtons[i].innerHTML = `${data.isotopes[i].name}  Generator (${format(data.isotopes[i].amt)} ${data.isotopes[i].name} | ${format(D(1).add(Decimal.sqrt(data.isotopes[i].max)))}x)<br>Cost: ${format(isotopeCost[i])} ${data.isotopes[i - 1].name} | Level:${format(data.isotopes[i].level)}`
            }
        }
    }
    else if(data.currentTab === 2) {
        //Moved
    }
    else if(data.currentTab === 3) {
        for(let i = 0; i < 5; i++) {
            compoundButtons[i].innerHTML = `${data.compounds[i].name}<br>${data.compounds[i].cost}<br>Total: ${format(data.compounds[i].amt)}<br>${compoundBoost[i]} ${format(compoundBoosts[i])}x`
        }
    }
    else if(data.currentTab === 4) {
        DOMCacheGetOrSet('generator').innerHTML = data.compounds[1].amt.gte(1) && data.compounds[0].amt.gte(3) ? `Generate Power<br>+${format(powerGain)} Power` : "Generate Power<br>Req: 3 Propane + 1 Water"
        powerUpButton[0].innerHTML = `Super Charge<br>Increase Atom Production by 2x<br>Cost: ${format(powerCosts[0])} Power<br>Level: ${format(data.powerUps[0])}`
        powerUpButton[1].innerHTML = `Battery<br>Increase Power Capacity by 10<br>Cost: ${format(powerCosts[1])} Sulfuric Acid<br>Level: ${format(data.powerUps[1])}`
        powerUpButton[2].innerHTML = `Heat Shields<br>Increase Power Production by 0.1x<br>Cost: ${format(powerCosts[2])} Lead Gens<br>Level: ${format(data.powerUps[2])}`
    }
    else if(data.currentTab === 5) {
        
        DOMCacheGetOrSet('meltDown').innerHTML = sumOfElements >= 1e8 ? `Melt Down<br>Create +${format(coriumToGet)}<br>Corium` : "Melt Down<br>Requires 1e8<br>Total Elements"
        for(let i = 0; i < 3; i++) {
            DOMCacheGetOrSet(`cm${i+1}`).innerHTML = `${coriumMultDesc[i]}<br>Cost: ${format(coriumMultCosts[i])} Corium<br>Level: ${format(data.coriumMultUps[i])}`
            DOMCacheGetOrSet(`cs${i+1}`).innerHTML = data.coriumSingUps[i] ? 'Unlocked' : `${coriumSingDesc[i]}`
        }
    }
    else if(data.currentTab === 6) {
        DOMCacheGetOrSet(`${refineryIDs[0]}`).innerHTML = `${refineryNames[0]}<br><br>${refineryDescriptions[0]}<br><br>+${format(shardsToGet)} ${currencyNames[0]}<br><br>${format(data.refineryCurrencies[0])} ${currencyNames[0]} Avalible`
        DOMCacheGetOrSet(`${refineryIDs[1]}`).innerHTML = `${refineryNames[1]}<br><br>${refineryDescriptions[1]}<br><br>+${format(fragmentsToGet)} ${currencyNames[1]}<br><br>${format(data.refineryCurrencies[1])} ${currencyNames[1]} Avalible`
        if(data.accelerators[2].level.gt(D(0)) && data.accelerators[2].upgradeLevel.gte(D(3)))
            DOMCacheGetOrSet(`${refineryIDs[2]}`).innerHTML = `${refineryNames[2]}<br><br>${refineryDescriptions[2]}<br><br>+${format(coinsToGet)} ${currencyNames[2]}<br><br>${format(data.refineryCurrencies[2])} ${currencyNames[2]} Avalible<br><br>${format((Decimal.sqrt(data.refineryCurrencies[2].times(D(2)))).times(accelBoosts[2].d))}x Boost`
        else
            DOMCacheGetOrSet(`${refineryIDs[2]}`).innerHTML = `${refineryNames[2]}<br><br>${refineryDescriptions[2]}<br><br>+${format(coinsToGet)} ${currencyNames[2]}<br><br>${format(data.refineryCurrencies[2])} ${currencyNames[2]} Avalible<br><br>${format(Decimal.sqrt(data.refineryCurrencies[2].times(D(2))))}x Element Boost`
    }
    else if(data.currentTab === 7) {
        if(data.currentSubTab[1] === 0) {
            DOMCacheGetOrSet('gainMult').innerHTML = `${format(gainMult)}x`
            protonGainText.innerHTML = `+${format(data.particlesToGet[0])} Protons`
            neutronGainText.innerHTML = `+${format(data.particlesToGet[1])} Neutrons`
            electronGainText.innerHTML = `+${format(data.particlesToGet[2])} Electrons`
            DOMCacheGetOrSet('splitImage').style.backgroundColor = gainMult.gt(D(1)) ? '#379337' : '#934237'
        }
        else if(data.currentSubTab[1] === 1) {
            for(let i = 0; i < 3; i++) {
                particleTexts[i].innerHTML = `${format(data.particles[i])} ${particleNames[i]}`
                DOMCacheGetOrSet(`accel${i+1}`).style.border = `4px solid #${accelColors[data.accelerators[i].upgradeLevel]}`
                
                
            }
            if(currencyDisplayIndex === 0)
                DOMCacheGetOrSet('accelUpgradeText').innerHTML = `Hover over a button to see some info`
            else if(currencyDisplayIndex <= 3 && currencyDisplayIndex !== 0)
                DOMCacheGetOrSet('accelUpgradeText').innerHTML = data.accelerators[currencyDisplayIndex-1].level.eq(data.accelerators[currencyDisplayIndex-1].lvlCap) ? `Accelerate Cost<br>Max Level` :`Accelerate Cost<br>${format(accelCosts[currencyDisplayIndex-1])} ${data.accelerators[currencyDisplayIndex-1].name}`
            else if(currencyDisplayIndex >= 4 && currencyDisplayIndex <= 6)
                DOMCacheGetOrSet('accelUpgradeText').innerHTML = data.accelerators[currencyDisplayIndex-4].upgradeLevel.eq(D(3)) ? 'Upgrades Maxed Out' : `Current Level: ${toPlaces(data.accelerators[currencyDisplayIndex-4].upgradeLevel,0,4)}/4<br>Upgrade Cost<br>${format(accelUpCosts[data.accelerators[currencyDisplayIndex-4].upgradeLevel].a)} Steel<br>${format(accelUpCosts[data.accelerators[currencyDisplayIndex-4].upgradeLevel].b)} Protons<br>${format(accelUpCosts[data.accelerators[currencyDisplayIndex-4].upgradeLevel].c)} Neutrons<br>${format(accelUpCosts[data.accelerators[currencyDisplayIndex-4].upgradeLevel].d)} Electrons`
            //Proton Text
            if(data.accelerators[0].upgradeLevel.eq(D(0)))
            DOMCacheGetOrSet(`accel1Text`).innerHTML = `Level: ${format(data.accelerators[0].level)}/${format(data.accelerators[0].lvlCap)}<br><br>Effects<br>Element Production Boost: ${format(accelBoosts[0].a)}x<br><br><br>`
            if(data.accelerators[0].upgradeLevel.eq(D(1)))
            DOMCacheGetOrSet(`accel1Text`).innerHTML = `Level: ${format(data.accelerators[0].level)}/${format(data.accelerators[0].lvlCap)}<br><br>Effects<br>Element Production Boost: ${format(accelBoosts[0].a)}x
            <br>Lead Boost: ${format(accelBoosts[0].b)}x<br><br>`
            if(data.accelerators[0].upgradeLevel.eq(D(2)))
            DOMCacheGetOrSet(`accel1Text`).innerHTML = `Level: ${format(data.accelerators[0].level)}/${format(data.accelerators[0].lvlCap)}<br><br>Effects<br>Element Production Boost: ${format(accelBoosts[0].a)}x
            <br>Lead Boost: ${format(accelBoosts[0].b)}x<br>Compounds Boost: ${format(accelBoosts[0].c)}x<br>`
            if(data.accelerators[0].upgradeLevel.eq(D(3)))
            DOMCacheGetOrSet(`accel1Text`).innerHTML = `Level: ${format(data.accelerators[0].level)}/${format(data.accelerators[0].lvlCap)}<br><br>Effects<br>Element Production Boost: ${format(accelBoosts[0].a)}x
            <br>Lead Boost: ${format(accelBoosts[0].b)}x<br>Compounds Boost: ${format(accelBoosts[0].c)}x
            <br>Another Element Production Boost: ${format(accelBoosts[0].d)}x`
            //Neutron Text
            if(data.accelerators[1].upgradeLevel.eq(D(0)))
            DOMCacheGetOrSet(`accel2Text`).innerHTML = `Level: ${format(data.accelerators[1].level)}/${format(data.accelerators[1].lvlCap)}<br><br>Effects<br>Corium Gain Boost: ${format(accelBoosts[1].a)}x<br><br><br>`
            if(data.accelerators[1].upgradeLevel.eq(D(1)))
            DOMCacheGetOrSet(`accel2Text`).innerHTML = `Level: ${format(data.accelerators[1].level)}/${format(data.accelerators[1].lvlCap)}<br><br>Effects<br>Corium Gain Boost: ${format(accelBoosts[1].a)}x
            <br>4x Production Upgrade Boost: ${format(accelBoosts[1].b)}x<br><br>`
            if(data.accelerators[1].upgradeLevel.eq(D(2)))
            DOMCacheGetOrSet(`accel2Text`).innerHTML = `Level: ${format(data.accelerators[1].level)}/${format(data.accelerators[1].lvlCap)}<br><br>Effects<br>Corium Gain Boost: ${format(accelBoosts[1].a)}x
            <br>4x Production Upgrade Boost: ${format(accelBoosts[1].b)}x<br>Compound Creation Upgrade Boost: ${format(accelBoosts[1].c)}x<br>`
            if(data.accelerators[1].upgradeLevel.eq(D(3)))
            DOMCacheGetOrSet(`accel2Text`).innerHTML = `Level: ${format(data.accelerators[1].level)}/${format(data.accelerators[1].lvlCap)}<br><br>Effects<br>Corium Gain Boost: ${format(accelBoosts[1].a)}x
            <br>4x Production Upgrade Boost: ${format(accelBoosts[1].b)}x<br>Compound Creation Upgrade Boost: ${format(accelBoosts[1].c)}x
            <br>Corium Gain Upgrade Boost: ${format(accelBoosts[1].d)}x`
            //Electron Text
            if(data.accelerators[2].upgradeLevel.eq(D(0)))
            DOMCacheGetOrSet(`accel3Text`).innerHTML = `Level: ${format(data.accelerators[2].level)}/${format(data.accelerators[2].lvlCap)}<br><br>Effects<br>Power Gain Boost: ${format(accelBoosts[2].a)}x<br><br><br>`
            if(data.accelerators[2].upgradeLevel.eq(D(1)))
            DOMCacheGetOrSet(`accel3Text`).innerHTML = `Level: ${format(data.accelerators[2].level)}/${format(data.accelerators[2].lvlCap)}<br><br>Effects<br>Power Gain Boost: ${format(accelBoosts[2].a)}x
            <br>Refinery Production Boost: ${format(accelBoosts[2].b)}x<br><br>`
            if(data.accelerators[2].upgradeLevel.eq(D(2)))
            DOMCacheGetOrSet(`accel3Text`).innerHTML = `Level: ${format(data.accelerators[2].level)}/${format(data.accelerators[2].lvlCap)}<br><br>Effects<br>Power Gain Boost: ${format(accelBoosts[2].a)}x
            <br>Refinery Production Boost: ${format(accelBoosts[2].b)}x<br>Super Charge Boost: ${format(accelBoosts[2].c)}x<br>`
            if(data.accelerators[2].upgradeLevel.eq(D(3)))
            DOMCacheGetOrSet(`accel3Text`).innerHTML = `Level: ${format(data.accelerators[2].level)}/${format(data.accelerators[2].lvlCap)}<br><br>Effects<br>Power Gain Boost: ${format(accelBoosts[2].a)}x
            <br>Refinery Production Boost: ${format(accelBoosts[2].b)}x<br>Super Charge Boost: ${format(accelBoosts[2].c)}x
            <br>Coins Boost: ${format(accelBoosts[2].d)}x`
        }
    }
    unlockTabs()
    tabChangeHTML()
    subTabChangeHTML()

    
}

function unlockTabs(){
    
    data.hasTab[0] = data.elements[1].amt > 0 || data.hasTab[0]
    data.hasTab[1] = data.compounds[0].amt > 0 || data.hasTab[1]
    data.hasTab[2] = sumOfElements.gte(D(1e8)) || data.hasTab[2]
    data.hasTab[3] = data.coriumSingUps[0] === true || data.hasTab[3]
    data.hasTab[4] = data.coriumSingUps[1] === true || data.hasTab[4]
    for(let i = 0; i < 4; i++)
        tabs[i].style.backgroundColor = !data.hasTab[i] ? 'gray' : 'none'
}
const seperator = DOMCacheGetOrSet('tabSeperator')
const elementTab = DOMCacheGetOrSet("elementHolder")
const compoundTab = DOMCacheGetOrSet("compoundHolder")
const powerTab = DOMCacheGetOrSet("powerHolder")
const meltingTab = DOMCacheGetOrSet("meltingHolder")
const settingTab = DOMCacheGetOrSet("settingsHolder")
const refineryTab = DOMCacheGetOrSet("refineryHolder")
const achievementTab = DOMCacheGetOrSet("achievementHolder")
const acceleratorTab = DOMCacheGetOrSet("acceleratorHolder")
const seperatorColors = ['808080','3c9f45','7fccff','3a5b99','b0b835','68368a','583793','37936d']
function tabChangeHTML(){
    elementTab.style.display = data.currentTab === 1 ? 'flex': 'none'
    compoundTab.style.display = data.currentTab === 3 ? 'flex': 'none'   
    powerTab.style.display = data.currentTab === 4 ? 'flex' : 'none'
    meltingTab.style.display = data.currentTab === 5 ? 'flex' : 'none'
    settingTab.style.display = data.currentTab === 0? 'flex' : 'none'
    achievementTab.style.display = data.currentTab === 2 ? 'flex' : 'none'
    refineryTab.style.display = data.currentTab === 6 ? 'flex' : 'none'
    acceleratorTab.style.display = data.currentTab === 7 ? 'flex' : 'none'
    seperator.style.color = `#${seperatorColors[data.currentTab]}`
}
const regularElementHolder = DOMCacheGetOrSet('regularElementsHolder')
const isotopeElementHolder = DOMCacheGetOrSet('isotopeElementsHolder')
const splitterHolder = DOMCacheGetOrSet('splitterHolder')
const particleHolder = DOMCacheGetOrSet('particleHolder')
const settingsArea = DOMCacheGetOrSet("settingsArea")
const creditsArea = DOMCacheGetOrSet("creditsArea")
function subTabChangeHTML() {
        regularElementHolder.style.display = data.currentSubTab[0] === 0 ? 'flex' : 'none'
        isotopeElementHolder.style.display = data.currentSubTab[0] === 1 ? 'flex' : 'none'

        splitterHolder.style.display = data.currentSubTab[1] === 0 ? 'flex' : 'none'
        particleHolder.style.display = data.currentSubTab[1] === 1 ? 'flex' : 'none'

        settingsArea.style.display = data.currentSubTab[2] === 0 ? 'flex' : 'none'
        creditsArea.style.display = data.currentSubTab[2] === 1 ? 'flex' : 'none'
}