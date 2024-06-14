function display(message) {
    const resultElement = document.getElementById("result");
    resultElement.innerText += message + "\n";
}

function findSchedule() {
    const division = document.getElementById("division").value.toUpperCase();
    const rollNo = parseInt(document.getElementById("rollNo").value);
    const subject = document.getElementById("subject").value.toUpperCase();
    const physicsBatch = parseInt(document.getElementById("physics_batch").value);
    
    // Clear previous results
    document.getElementById("result").innerText = '';

    if (division === 'A' || division === 'B') {
        switch (subject) {
            case 'EP':
                display("Physics");
                switch (physicsBatch) {
                    case 1:
                        display("Date : 4 Dec 23 - Mon");
                        display("Time : 4:00 pm");
                        display("Venue : L09B");
                        break;
                    case 3:
                        display("Date : 4 Dec 23 - Mon");
                        display("Time : 1:30 pm");
                        display("Venue : L09B");
                        break;
                    default:
                        display("Adjust to Monday");
                        break;
                }
                break;
            case 'EM':
                display("Mechanics");
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    display("Date : 4 Dec 23 - Mon");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M411A");
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    display("Date : 4 Dec 23 - Mon");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M411B");
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    display("Date : 4 Dec 23 - Mon");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M310A");
                }
                break;
            case 'DE':
                display("Digital Electronics");
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    display("Date : 7 Dec 23 - Thu");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M414");
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    display("Date : 7 Dec 23 - Thu");
                    display("Time : 1:30 pm to 5:30 pm");
                    display("Venue : M414");
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    display("Date : 8 Dec 23 - Fri");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M414");
                }
                break;
            case 'SP':
                display("Structured Programming");
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    display("Date : 8 Dec 23 - Fri");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : LO7A");
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    display("Date : 8 Dec 23 - Fri");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : LO7B");
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    display("Date : 7 Dec 23 - Thu");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : LO7A");
                }
                break;
            case 'A':
                display("All Subjects");

                // Physics
                display("Physics");
                switch (physicsBatch) {
                    case 1:
                        display("Date : 4 Dec 23 - Mon");
                        display("Time : 4:00 pm");
                        display("Venue : L09B");
                        break;
                    case 3:
                        display("Date : 4 Dec 23 - Mon");
                        display("Time : 1:30 pm");
                        display("Venue : L09B");
                        break;
                    default:
                        display("Adjust to Monday");
                        break;
                }

                // Mechanics
                display("Mechanics");
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    display("Date : 4 Dec 23 - Mon");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M411A");
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    display("Date : 4 Dec 23 - Mon");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M411B");
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    display("Date : 4 Dec 23 - Mon");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M310A");
                }

                // Digital Electronics
                display("Digital Electronics");
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    display("Date : 7 Dec 23 - Thu");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M414");
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    display("Date : 7 Dec 23 - Thu");
                    display("Time : 1:30 pm to 5:30 pm");
                    display("Venue : M414");
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    display("Date : 8 Dec 23 - Fri");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : M414");
                }

                // Structured Programming
                display("Structured Programming");
                if ((division === 'A' && rollNo >= 2 && rollNo <= 30) || (division === 'B' && rollNo >= 25 && rollNo <= 59)) {
                    display("Date : 8 Dec 23 - Fri");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : LO7A");
                } else if ((division === 'A' && rollNo >= 32 && rollNo <= 55) || (division === 'B' && rollNo >= 62 && rollNo <= 84)) {
                    display("Date : 8 Dec 23 - Fri");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : LO7B");
                } else if ((division === 'A' && rollNo >= 56 && rollNo <= 81) || (division === 'B' && rollNo >= 1 && rollNo <= 23)) {
                    display("Date : 7 Dec 23 - Thu");
                    display("Time : 9:00 am to 1:00 pm");
                    display("Venue : LO7A");
                }
                break;

            default:
                display("Invalid subject code");
        }
    } else {
        display("Invalid Division");
    }
}

import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();