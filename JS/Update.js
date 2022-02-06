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
for(let i=0; i < 5; i++) {
    tabs[i] = DOMCacheGetOrSet(`${tabIDs[i]}`)
}
const powerUpButton = []
for(let i=0; i < 3; i++)
    powerUpButton[i] = DOMCacheGetOrSet(`pu${i+1}`)
const coriumMultDesc =['Increase Atom Production by 4x','Increase Compounds Created by 1.25x','Increase Corium Produced on Melt']
const coriumSingDesc = ['Unlock The Refinery<br>Cost: 1.00e10 Corium','Unlock Particles<br>Cost: 1.00e15 Corium','Not Available']
//'Unlock Passive Power Production<br>Cost: 1.00e15 Corium','Radition Not Implemented'
// Refinery Area
const refineryIDs = ['shard', 'mold', 'mint']
const refineryNames = ['Sharding','Molding','Minting']
const refineryDescriptions = ['Produces Kuaka Shards','Produces Kuaka Fragments','Produces Kuaka Coins']
const currencyNames = ['Shards','Fragments','Coins']
//Accelerator stuf
const romanNumerals = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV']
const augmentBoostNames = [{name:['Element','Lead','Compound']},{name:['Melt Gain','4x Production Upgrade','Compound Creation Upgrade']},{name:['Power Gain','Refinery Creation','Generator Production']}]
const particleTexts = []
const particleTextIds = ['protonsText','neutronsText','electronsText']
const particleNames = ['Protons', 'Neutrons', 'Electrons']
for(let i = 0; i < 3; i++)
    particleTexts[i] = document.getElementById(`${particleTextIds[i]}`)
    const protonGainText = document.getElementById('protonGain')
    const neutronGainText = document.getElementById('neutronGain')
    const electronGainText = document.getElementById('electronGain')
let currencyDisplayIndex = 0
function updateHTML(){
    for(let i = 0; i < 5; i++) {
        tabs[i].style.display = data.hasTab[i] ? 'inline' : 'none'
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
        DOMCacheGetOrSet('toggle4').innerHTML = data.settingsToggles[3] ? 'Shatter Confirmation [ON]' : 'Shatter Confirmation [OFF]'
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
        DOMCacheGetOrSet('gA').style.display = data.coriumSingUps[0] ? 'inline' : 'none'
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
            DOMCacheGetOrSet(`${refineryIDs[2]}`).innerHTML = `${refineryNames[2]}<br><br>${refineryDescriptions[2]}<br><br>+${format(coinsToGet)} ${currencyNames[2]}<br><br>${format(data.refineryCurrencies[2])} ${currencyNames[2]} Avalible<br><br>${format(Decimal.sqrt(data.refineryCurrencies[2].times(D(2))))}x Element Boost`
    }
    else if(data.currentTab === 7) {
        DOMCacheGetOrSet('lpA').style.display = data.augments[2].unlocked[0] === true ? 'inline' : 'none'
        if(data.currentSubTab[1] === 0) {
            DOMCacheGetOrSet('gainMult').innerHTML = `${format(gainMult)}x more to gain`
            protonGainText.innerHTML = `+${format(data.particlesToGet[0])} Protons`
            neutronGainText.innerHTML = `+${format(data.particlesToGet[1])} Neutrons`
            electronGainText.innerHTML = `+${format(data.particlesToGet[2])} Electrons`
            DOMCacheGetOrSet('splitImage').style.backgroundColor = gainMult.gt(D(1)) ? '#379337' : '#934237'
        }
        else if(data.currentSubTab[1] === 1) {
                particleTexts[0].innerHTML = `${format(data.particles[0].protons)} ${particleNames[0]}(+)`
                particleTexts[1].innerHTML = `${format(data.particles[0].neutrons)} ${particleNames[1]}(0)`
                particleTexts[2].innerHTML = `${format(data.particles[0].electrons)} ${particleNames[2]}(e<sup style="color: #934237">-</sup>)`
                for(let i = 0; i < 3; i++) {
                    DOMCacheGetOrSet(`proAug${i+1}`).innerHTML = data.augments[0].unlocked[i] === false ? `Augment ${romanNumerals[i]}<br><br>Cost: ${format(augmentCosts[i])} Protons` : `Augment ${romanNumerals[i]}<br><br>${augmentBoostNames[0].name[i]} Boost: ${format(augmentBoosts[0].boost[i])}x`
                    DOMCacheGetOrSet(`neuAug${i+1}`).innerHTML = data.augments[1].unlocked[i] === false ? `Augment ${romanNumerals[i]}<br><br>Cost: ${format(augmentCosts[i])} Neutrons` : `Augment ${romanNumerals[i]}<br><br>${augmentBoostNames[1].name[i]} Boost: ${format(augmentBoosts[1].boost[i])}x`
                    DOMCacheGetOrSet(`eleAug${i+1}`).innerHTML = data.augments[2].unlocked[i] === false ? `Augment ${romanNumerals[i]}<br><br>Cost: ${format(augmentCosts[i])} Electrons` : `Augment ${romanNumerals[i]}<br><br>${augmentBoostNames[2].name[i]} Boost: ${format(augmentBoosts[2].boost[i])}x`
                }
        }
        else if(data.currentSubTab[1] === 2) {
                DOMCacheGetOrSet('electronsText2').innerHTML = `${format(data.particles[0].electrons)} ${particleNames[2]}(e<sup style="color: #934237">-</sup>)`
                DOMCacheGetOrSet('muonsText').innerHTML = `${format(data.particles[1].muons)} Muons(μ<sup style="color: #8f6945">-</sup>)`
                DOMCacheGetOrSet('tausText').innerHTML = `${format(data.particles[1].taus)} Taus(τ<sup style="color: #8d9337">-</sup>)`
                DOMCacheGetOrSet('shatterImage').style.backgroundColor = data.particles[0].electrons.gte(D(1e5)) ? '#379337' : '#934237'
                DOMCacheGetOrSet('shatterGainText').innerHTML = `+${format(leptonsToGet[0])} Muons<br>+${format(leptonsToGet[1])} Taus<br><br>`
        }
        else if(data.currentSubTab[1] === 3) {
            //row1
                DOMCacheGetOrSet('upQuarkText').innerHTML = `${format(data.particles[2].quarks[0])} Up Quarks`
                DOMCacheGetOrSet('charmQuarkText').innerHTML = `${format(data.particles[2].quarks[1])} Charm Quarks`
                DOMCacheGetOrSet('topQuarkText').innerHTML = `${format(data.particles[2].quarks[2])} Top Quarks`
            //row2
                DOMCacheGetOrSet('downQuarkText').innerHTML = `${format(data.particles[2].quarks[3])} Down Quarks`
                DOMCacheGetOrSet('strangeQuarkText').innerHTML = `${format(data.particles[2].quarks[4])} Strange Quarks`
                DOMCacheGetOrSet('bottomQuarkText').innerHTML = `${format(data.particles[2].quarks[5])} Bottom Quarks`
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
//Elements Subs
const regularElementHolder = DOMCacheGetOrSet('regularElementsHolder')
const isotopeElementHolder = DOMCacheGetOrSet('isotopeElementsHolder')
//Particle Subs
const splitterHolder = DOMCacheGetOrSet('splitterHolder')
const fundamentalHolder = DOMCacheGetOrSet('fundamentalHolder')
const leptonsHolder = DOMCacheGetOrSet('leptonsHolder')
const quarksHolder = DOMCacheGetOrSet('quarksHolder')
//Settings Subs
const settingsArea = DOMCacheGetOrSet("settingsArea")
const creditsArea = DOMCacheGetOrSet("creditsArea")
function subTabChangeHTML() {
        regularElementHolder.style.display = data.currentSubTab[0] === 0  && data.currentTab === 1 ? 'flex' : 'none'
        isotopeElementHolder.style.display = data.currentSubTab[0] === 1  && data.currentTab === 1 ? 'flex' : 'none'

        splitterHolder.style.display = data.currentSubTab[1] === 0 && data.currentTab === 7 ? 'flex' : 'none'
        fundamentalHolder.style.display = data.currentSubTab[1] === 1 && data.currentTab === 7 ? 'flex' : 'none'
        leptonsHolder.style.display = data.currentSubTab[1] === 2 && data.currentTab === 7 ? 'flex' : 'none'
        quarksHolder.style.display = data.currentSubTab[1] === 3 && data.currentTab === 7 ? 'flex' : 'none'

        settingsArea.style.display = data.currentSubTab[2] === 0 && data.currentTab === 0 ? 'flex' : 'none'
        creditsArea.style.display = data.currentSubTab[2] === 1  && data.currentTab === 0 ? 'flex' : 'none'
}