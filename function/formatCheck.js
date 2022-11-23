function checkName(name) {
    if (name == '') return false
    else return true
}
function checkCardNumber(num) {
    if (isNaN(num)) {
        return false
    }
    if (num.length != 16) {
        return false
    }
    return true
}
function checkCCV(CCV) {
    if (CCV.length != 3 || isNaN(CCV)) return false
    else return true
}
function checkExpDate(date) {
    var today = new Date()
    var someday = new Date()
    if (date.length != 7) {
        return false
    } else {
        if (parseInt(date[0] + date[1]) > 12) {
            return false
        } else {
            if (date[2] != '/') {
                return false
            }
            const year = parseInt(date[3] + date[4] + date[5] + date[6])
            const month = parseInt(date[0] + date[1])
            someday.setFullYear(year, month - 1)
            if (someday < today) {
                return false
            }
        }
    }
    return true
}
export { checkName, checkCardNumber, checkCCV, checkExpDate }
