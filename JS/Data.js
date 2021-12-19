const D = x => new Decimal(x)
//create all the variables in a data object for saving
function getDefaultObject() {
    return {
        //Elements
        elements: [{amt:D(10),name:"Hydrogen",level:D(0)},{amt:D(0),name:"Carbon",level:D(0)},{amt:D(0),name:"Oxygen",level:D(0)},{amt:D(0),name:"Fluorine",level:D(0)},{amt:D(0),name:"Sulfur",level:D(0)},{amt:D(0),name:"Chlorine",level:D(0)},{amt:D(0),name:"Iron",level:D(0)},{amt:D(0),name:"Lead",level:D(0)}],
        compounds: [{amt:D(0),name:"Propane",cost:"C<sub>3</sub>H<sub>8</sub>"},{amt:D(0),name:"Water",cost:"H<sub>2</sub>0"},{amt:D(0),name:"Sulfuric Acid",cost:"H<sub>2</sub>SO<sub>4</sub>"},{amt:D(0),name:"Steel",cost:"FeC"},{amt:D(0),name:"Chlorine Trifluoride",cost:"ClF<sub>3</sub>"}],
        hasTab: [false, false, false, false],
        time: Date.now(),
        currentTab: 1,
        currentUpdate: 'In Dev Version',
    }
}
let data = getDefaultObject()
//saving and loading
function save(){
    window.localStorage.setItem('ucRemakeSave', JSON.stringify(data))
}
function load() {
    let savedata = JSON.parse(window.localStorage.getItem('ucRemakeSave'))
    if (savedata !== undefined) fixSave(data, savedata)
    fixOldSaves()
}
//fix saves
function fixSave(main=getDefaultObject(), data) {
    if (typeof data === "object") {
        Object.keys(data).forEach(i => {
            if (main[i] instanceof Decimal) {
                main[i] = D(data[i]!==null?data[i]:main[i])
            } else if (typeof main[i]  == "object") {
                fixSave(main[i], data[i])
            } else {
                main[i] = data[i]
            }
        })
        return main
    }
    else return getDefaultObject()
}
function fixOldSaves(){
    //fix important things from old versions
    if (data.currentUpdate==='v0.0.14') data.currentUpdate='v0.0.15'
    if (data.currentUpdate==='v0.0.15'){
        //deleteSave()
    }
}
function exportSave(){
    save()
    let exportedData = btoa(JSON.stringify(data));
    const exportedDataText = document.createElement("textarea");
    exportedDataText.value = exportedData;
    document.body.appendChild(exportedDataText);
    exportedDataText.select();
    exportedDataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(exportedDataText);
}
function importSave(){
    let importedData = prompt("Paste your save data here!")
    data = Object.assign(getDefaultObject(), JSON.parse(atob(importedData)))
    save()
    location.reload()
}
window.setInterval(function(){
    save()
}, 10000);
window.onload = function (){
    load()
}
//full reset
function fullReset(){
    exportSave()
    window.localStorage.removeItem('ucRemakeSave')
    location.reload()
}
function deleteSave(){
    window.localStorage.removeItem('ucRemakeSave')
    location.reload()
}

