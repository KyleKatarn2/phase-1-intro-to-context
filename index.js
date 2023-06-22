// Your code here

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    const Object = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    };
    return Object;
    
}

function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
    
}

function createTimeInEvent(employeeRecord, dateStamp) {
    let date = dateStamp.split("").slice(0, 10).join("");
    let time = dateStamp.split("").slice(11).join("");
    let timeInEvent = {
        type: "TimeIn",
        hour: parseInt(time),
        date: date,
    };
    employeeRecord.timeInEvents.push(timeInEvent);
    return employeeRecord;

}

function createTimeOutEvent(employeeRecord, dateStamp) {
    let date = dateStamp.split("").slice(0, 10).join("");
    let time = dateStamp.split("").slice(11).join("");
    let timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(time),
        date: date,
    };
    employeeRecord.timeOutEvents.push(timeOutEvent);
    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, date) {
    let timeIn = employeeRecord.timeInEvents.filter(el => (el.date === date))
    let timeOut = employeeRecord.timeOutEvents.filter(el => (el.date === date))

    for (let i = 0; i < timeIn.length; i++) {
        return (timeOut[i].hour - timeIn[i].hour)/100;
    }

}

function wagesEarnedOnDate(employeeRecord, date) {
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour;
}

function allWagesFor(employeeRecord) {

    let payOwedForAllDates = employeeRecord.timeInEvents.reduce((total, day) => total + wagesEarnedOnDate(employeeRecord, day.date), 0);
    return payOwedForAllDates;   
}

function calculatePayroll(arrays) {
    
    let payRoll = arrays.reduce((total, employee) => total + allWagesFor(employee), 0);
    return payRoll;
}