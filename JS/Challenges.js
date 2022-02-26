const challengeInfo = [{name:'Crushed Compounds',desc:'You\'ve become too dependent on them',effect:'Compounds no longer have an effect',reward:''},
{name:'Renewable Energy',desc:'Think green energy is so good now',effect:'Get locked out of all<br>power production methods',reward:''},
{name:'Advanced Reactors',desc:'Chernobyl-B-Gon',effect:'Corium Production and Boost<br>is decreased significantly',reward:''},
{name:'Anti-Challenge',desc:'Say hello to Anti-Particles',effect:'Augments have no effect now<br>along with Lepton Buffs',reward:''},
{name:'Elemental Decay',desc:'The worst challenge returns',effect:'Lose 10% of your Element<br>Generators per second',reward:''}]
const challengeGoalBases = [D(1e10),D(1e3),D(1e15),D(1e5),D(1e15)]
let challengeGoals = [D(0),D(0),D(0),D(0),D(0)]
let currentChallengeDisplay = -1
let challengeGoalResources = [D(0),D(0),D(0),D(0),D(0)]
const challengeResourceNames = ['Corium','Muons','Corium','Protons','Hydrogen']
for(let i = 0; i < 5; i++)
    DOMCacheGetOrSet(`chal${i+1}Img`).addEventListener('mouseover', () => changeChallengeDisplay(i))

function changeChallengeDisplay(i) {
    clearStartListener
    currentChallengeDisplay = i
    document.getElementById("challengeButton").addEventListener('click', () => startChallenge(i))
}

function updateChallengeHTML() {
    for(let i = 0; i < 5; i++) {
        challengeGoals[i] = challengeGoalBases[i].times(Decimal.pow(D(1.75), data.challengeCompletions[i]))
    }
    if(data.currentTab === 8 && data.currentSubTab[4] === 2) {
        document.getElementById('challengeButton').style.display = currentChallengeDisplay === -1 ? 'none' : 'inline'
        if(currentChallengeDisplay === -1) {
            DOMCacheGetOrSet('challengeNameText').innerHTML = ''
            DOMCacheGetOrSet('challengeDescText').innerHTML = ''
            DOMCacheGetOrSet('challengeEffectText').innerHTML = ''
            DOMCacheGetOrSet('challengeGoalText').innerHTML = ''
            DOMCacheGetOrSet('challengeRewardText').innerHTML = ''
        }
        else {
            document.getElementById('challengeButton').innerHTML = `Start [${challengeInfo[currentChallengeDisplay].name}]`
            DOMCacheGetOrSet('challengeNameText').innerHTML = `${challengeInfo[currentChallengeDisplay].name} | ${toPlaces(data.challengeCompletions[currentChallengeDisplay], 0, 28)}/25`
            DOMCacheGetOrSet('challengeDescText').innerHTML = `${challengeInfo[currentChallengeDisplay].desc}`
            DOMCacheGetOrSet('challengeEffectText').innerHTML = `${challengeInfo[currentChallengeDisplay].effect}`
            DOMCacheGetOrSet('challengeGoalText').innerHTML = `Goal: ${format(challengeGoals[currentChallengeDisplay])} ${challengeResourceNames[currentChallengeDisplay]}`
            DOMCacheGetOrSet('challengeRewardText').innerHTML = `${challengeInfo[currentChallengeDisplay].reward}`
        }
        for(let i = 0; i < 5; i++) {
            DOMCacheGetOrSet(`challenge${i+1}Text`).innerHTML = `${toPlaces(data.challengeCompletions[i], 0, 28)}/25`
        }
    }
    let count = 0
    for(let i = 0; i < data.activeChallenge.length; i++) {
        DOMCacheGetOrSet(`chal${i+1}Img`).style.backgroundColor = data.activeChallenge[i] ? '#ffffff' : 'rgba(0,0,0,0)'
        if(data.activeChallenge[i]) {
            count++;
            document.getElementById('challengeStatusImg').style.backgroundColor = '#ffffff'
            DOMCacheGetOrSet('challengeStatusText').innerHTML = `Goal: ${format(challengeGoalResources[i])}/${format(challengeGoals[i])} ${challengeResourceNames[i]}`
        }
    }
    if(count === 0) {
        document.getElementById('challengeStatusImg').style.backgroundColor = 'rgba(0,0,0,0)'
        DOMCacheGetOrSet('challengeStatusText').innerHTML = 'Not in a Challenge'
    }
    
}

function runChallenge() {
    let currentChallengeIndex = -1;
    for(let i = 0; i < 5; i++)  
        if(data.activeChallenge[i]) currentChallengeIndex = i;
    if(data.activeChallenge[1]) 
        DOMCacheGetOrSet('pB').style.display = 'none'
    for(let i = 0; i < 5; i++)
        if(data.activeChallenge[i]) completeChallenge[i]
}

function startChallenge(a) {
    if(data.challengeCompletions[a].eq(D(25))) return
    clearExitListener()
    irridiate() 
    document.getElementById("challengeStatusImg").addEventListener('click', () => exitChallenge(a))
    for(let i = 0; i < 5; i++) {
        if(i == a)
            data.activeChallenge[i] = true
        else
            data.activeChallenge[i] = false
    }
    switch(a) {
        case 0:
            data.autoActive[1] = false
            break
        case 1:
            data.autoActive[2] = false
            data.autoActive[6] = false
            DOMCacheGetOrSet('pB').style.display = 'none'
            data.power = D(0)
            data.powerStored = D(0)
            for(let i = 0; i < 4; i++) {
                data.fuels[i] = D(0)
                data.fuelStored[i] = D(0)
            }
            break
        //No things needed for Chal 3
        case 3:
            data.autoActive[5] = false
            break
        //No Things needed for Chal 5
    }
}

function exitChallenge(a) {
    clearExitListener()
    data.activeChallenge[a] = false
    irridiate()
    if(a === 1)
        DOMCacheGetOrSet('pB').style.display = inline
}

function completeChallenge(a) {
    if(challengeGoalResources[a].gte(challengeGoals[a])) {
        clearExitListener()
        data.challengeCompletions[a] = data.challengeCompletions[a].plus(D(1))
        data.activeChallenge[a] = false
        if(a === 1)
            DOMCacheGetOrSet('pB').style.display = inline
        irridiate()
    }
}

function clearStartListener() {
    let old_element = document.getElementById("challengeButton");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}
function clearExitListener() {
    let old_element = document.getElementById("challengeStatusImg")
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}