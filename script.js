document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    const studentName = urlParams.get('studentName');
    const rollNumber = urlParams.get('rollNumber');
    const studentClass = urlParams.get('studentClass');
    const subject1 = parseInt(urlParams.get('subject1'));
    const subject2 = parseInt(urlParams.get('subject2'));
    const subject3 = parseInt(urlParams.get('subject3'));
    const subject4 = parseInt(urlParams.get('subject4'));
    const subject5 = parseInt(urlParams.get('subject5'));

    const total = subject1 + subject2 + subject3 + subject4 + subject5;
    const average = total / 5;

    let grade = '';
    if (average >= 90) {
        grade = 'A+';
    } else if (average >= 80) {
        grade = 'A';
    } else if (average >= 70) {
        grade = 'B+';
    } else if (average >= 60) {
        grade = 'B';
    } else if (average >= 50) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Student Name: ${studentName}</p>
        <p>Roll Number: ${rollNumber}</p>
        <p>Class: ${studentClass}</p>
        <p>Total Marks: ${total}</p>
        <p>Average Marks: ${average}</p>
        <p>Grade: ${grade}</p>
    `;
});
