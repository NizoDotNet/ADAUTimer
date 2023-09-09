// class to create a countdown timer
class CountdownTimer {
    // setup timer values
    constructor({ selector, targetDate, backgroundColor = null, foregroundColor = null }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;

        // grab divs on frontend using supplied selector ID
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="minutes"]`),
            secs: document.querySelector(`${this.selector} [data-value="seconds"]`),
        };
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const secs = Math.floor((total / 1000) % 60);
        return {
            total,
            days,
            hours,
            mins,
            secs,
        };
    }

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    updateColors() {
        if (this.backgroundColor != null) {
            this.refs.days.style.background = this.backgroundColor;
            this.refs.hours.style.background = this.backgroundColor;
            this.refs.mins.style.background = this.backgroundColor;
            this.refs.secs.style.background = this.backgroundColor;
        }

        if (this.foregroundColor != null) {
            this.refs.days.style.color = this.foregroundColor;
            this.refs.hours.style.color = this.foregroundColor;
            this.refs.mins.style.color = this.foregroundColor;
            this.refs.secs.style.color = this.foregroundColor;
        }
    }

    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate);
        this.updateTimer(timer);
        this.updateColors();
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate);
            this.updateTimer(timer);
        }, 1000);
    }
}


const emojis = [
    '128512', '128513', '128514', '128515', '128516', '128517', '128518', '128519', '128520', '128521', '128522', '128523', '128524', '128525', '128526', '128527', '128528', '128529', '128530', '128531', '128532', '128533', '128534', '128535', '128536', '128537', '128538', '128539', '128540', '128541', '128542', '128543', '128544', '128545', '128546', '128547', '128548', '128549', '128550', '128551', '128552', '128553', '128554', '128555', '128556', '128557', '128558', '128559', '128560', '128561', '128562', '128563', '128564', '128565', '128566', '128567', '128577', '128578', '128579', '128580', '129296', '129297', '129298', '129299', '129300', '129301', '129312', '129313', '129314', '129315', '129316', '129317', '129319', '129320', '129321', '129322', '129323', '129324', '129325', '129326', '129327', '129488'
];

let ranIndex = Math.floor(Math.random() * emojis.length);

let emojiEl = document.querySelector(".emoji");
emojiEl.innerHTML = `&#${emojis[ranIndex]}`;
const finalDate = new Date("2023-09-15T08:00:00");

const timer1 = new CountdownTimer({
    selector: "#clock1",
    targetDate: finalDate,
});

timer1.startTimer();