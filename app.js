const SENTENCES = [
    "The quick brown fox jumped over the fence.",
    "It's been over a fence, I'm starting to think that tractor is never coming back.",
    "What do you believe to be the answer to my problems?",
]

var app = new Vue({
    el: "#app",
    data: {
        raceSentences: SENTENCES,
        raceSentence: "",
        userSentence: "",
        startTime: 0,
        finishTime: 0,
        started: false,
    },
    methods: {
        startRace: function () {
            this.startTime = this.getTime();
            this.started = true;
        },
        getRandomSentence: function () {
            this.raceSentence = SENTENCES[Math.floor(Math.random() * SENTENCES.length)]
        },
        calculateTotalTime: function () {
            let endTime = this.getTime();
            let endSecond = endTime - this.startTime;
            this.finishTime = Math.floor(endSecond * 100) / 100;
            return Math.floor(endSecond * 100) / 100;
        },
        resetTest: function () {
            this.startTime = 0;
            this.finishTime = 0;
            this.userSentence = "";
            this.started = false;
        },
        resetWithNewSentence: function () {
            this.getRandomSentence();
            this.startTime = 0;
            this.finishTime = 0;
            this.userSentence = "";
            this.started = false;
        },
        getTime: function () {
            const centisecond = 10;

            // Divide Time with a centisecond
            const d = new Date();
            let seconds = (Math.floor(d.getTime() / centisecond)) / 100;
            return seconds;
        }
    },
    computed: {
        // this function runs whenever the sentence the user is typing changes
        // use it like a variable (v-if="finishedTyping")
        finishedTyping: function () {
            // you probably wanna use your variable here in place of these awful ones
            if (this.raceSentence == this.userSentence) {
                this.calculateTotalTime();
                this.started = false;
                return true;
            } else if (this.userSentence != "" && !this.started) {
                this.startRace();
                return false;
            } else {
                return false;
            }
        },
        totalTime: function () {
            if (this.started == true) {
                return this.calculateTotalTime();
            }
            else {
                return this.finishTime;
            }
        }
    },
    created: function () {
        this.getRandomSentence();
    }
});

/*
extra cool additions:
 - Keep a high score that stays between attempts
 - Let the user pick the sentence that they will be typing
 - Show a timer on the screen as they are typing
*/