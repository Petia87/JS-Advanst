let textSum = +gets()
let callsMinSum = +gets()

let sum = 12
let textfrNum = 20
let callsfrNum = 60
let textAddDDS = 0.06 + 0.06 * 0.02
let callsAddDDS = 0.10 - 0.10 * 0.08
let textAddNum = 0
let callsAddNum = 0

if (textfrNum > textSum && callsfrNum < callsMinSum) {
    textAddNum = 0
    callsAddNum = callsMinSum - callsfrNum
} else if ((textfrNum < textSum && callsfrNum < callsMinSum)) {
    textAddNum = textSum - textfrNum
    callsAddNum = callsMinSum - callsfrNum
} else if ((textfrNum > textSum && callsfrNum > callsMinSum)) {
    textAddNum = 0
    callsAddNum = 0
} if (textfrNum < textSum && callsfrNum > callsMinSum) {
    textAddNum = textSum - textfrNum
    callsAddNum = 0
}



let textAddNumlv = Number((textAddNum * 0.06).toFixed(2))
let callsAddNumlv = Number((callsAddNum * 0.10).toFixed(2))
let sumDDS = Number(((textAddNumlv + callsAddNumlv) * 0.2).toFixed(2))
let final = 12 + sumDDS + textAddNumlv + callsAddNumlv
print(`${textAddNum} additional messages for ${textAddNumlv.toFixed(2)} levas`)
print(`${callsAddNum} additional minutes for ${callsAddNumlv.toFixed(2)} levas`)
print(`${sumDDS.toFixed(2)} additional taxes`)
print(`${final.toFixed(2)} total bill`)