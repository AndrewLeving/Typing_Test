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
        startTime: {},
        totalTime: {
            second: 0,
            centisecond: 0,
        },
    },
    methods: {
        startRace: function () {
            this.startTime = this.getTime();
        },
        getRandomSentence: function () {
            this.raceSentence = SENTENCES[Math.floor(Math.random() * SENTENCES.length)]
        },
        calculateTotalTime: function () {
            let endTime = this.getTime();
            let endSecond = endTime.second - this.startTime.second;
            let endCentisecond = endTime.centisecond - this.startTime.centisecond;
            this.totalTime.second = endSecond;
            this.totalTime.centisecond = endCentisecond;

        },
        resetTest: function () {
            this.startTime[0] = 0;
            this.startTime[1] = 0;
            this.userSentence = "";
        },
        resetWithNewSentence: function () {
            this.getRandomSentence();
            this.startTime[0] = 0;
            this.startTime[1] = 0;
            this.userSentence = "";
        },
        getTime: function () {
            const centisecond = 10;
            const second = 1000;

            // Divide Time with a year
            const d = new Date();
            let seconds = Math.round(d.getTime() / second);
            let centiseconds = Math.round(d.getTime() / centisecond);
            return {
                second: seconds,
                centisecond: centiseconds
            }
        }
    },
    computed: {
        // this function runs whenever the sentence the user is typing changes
        // use it like a variable (v-if="finishedTyping")
        finishedTyping: function () {
            // you probably wanna use your variable here in place of these awful ones
            if (this.raceSentence == this.userSentence) {
                this.calculateTotalTime();
                return true;
            } else {
                this.startRace();
                return false;
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