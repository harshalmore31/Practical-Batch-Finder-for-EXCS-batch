function findSchedule() {
    const division = document.getElementById('division').value.toUpperCase();
    const rollNo = parseInt(document.getElementById('rollNo').value);
    const subject = document.getElementById('subject').value.toUpperCase();
    const physicsBatchContainer = document.getElementById('physicsBatchContainer');
    const physicsBatch = document.getElementById('physics_batch').value;
    let result = '';

    physicsBatchContainer.style.display = 'none';

    if (division === 'A' || division === 'B') {
        if (subject === 'EP' || subject === 'EM' || subject === 'DE' || subject === 'SP' || subject === 'A') {
            if (subject === 'EP' || subject === 'A') {
                physicsBatchContainer.style.display = 'block';
            }
            if (subject === 'EP' || subject === 'A') {
                if (physicsBatch == 1) {
                    result += 'Date: 4 Dec 23 - Mon\nTime: 4:00 pm\nVenue: L09B\n';
                } else if (physicsBatch == 3) {
                    result += 'Date: 4 Dec 23 - Mon\nTime: 1:30 pm\nVenue: L09B\n';
                } else {
                    result += 'Adjust to Monday\n';
                }
            }
            if (subject === 'EM' || subject === 'A') {
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    result += 'Date: 4 Dec 23 - Mon\nTime: 9:00 am to 1:00 pm\nVenue: M411A\n';
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    result += 'Date: 4 Dec 23 - Mon\nTime: 9:00 am to 1:00 pm\nVenue: M411B\n';
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    result += 'Date: 4 Dec 23 - Mon\nTime: 9:00 am to 1:00 pm\nVenue: M310A\n';
                }
            }
            if (subject === 'DE' || subject === 'A') {
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    result += 'Date: 7 Dec 23 - Thu\nTime: 9:00 am to 1:00 pm\nVenue: M414\n';
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    result += 'Date: 7 Dec 23 - Thu\nTime: 1:30 am to 5:30 pm\nVenue: M414\n';
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    result += 'Date: 8 Dec 23 - Fri\nTime: 9:00 am to 1:00 pm\nVenue: M414\n';
                }
            }
            if (subject === 'SP' || subject === 'A') {
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    result += 'Date: 8 Dec 23 - Fri\nTime: 9:00 am to 1:00 pm\nVenue: LO7A\n';
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    result += 'Date: 8 Dec 23 - Fri\nTime: 9:00 am to 1:00 pm\nVenue: LO7B\n';
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    result += 'Date: 7 Dec 23 - Thu\nTime: 9:00 am to 1:00 pm\nVenue: LO7A\n';
                }
            }
        } else {
            result = 'Invalid subject!';
        }
    } else {
        result = 'Invalid division!';
    }

    document.getElementById('result').innerText = result;
}