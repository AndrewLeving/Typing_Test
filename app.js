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
        totalTime: 0,
        started: false,
        highScore: 0,
        timer: undefined,
    },
    methods: {
        startRace: function () {
            this.startTime = this.getTime();
            this.timer = setInterval(() => {
                let endTime = this.getTime();
                let endSecond = endTime - this.startTime;
                this.totalTime = Math.floor(endSecond * 100) / 100;
            }, 10);
            this.started = true;
        },
        getRandomSentence: function () {
            this.raceSentence = SENTENCES[Math.floor(Math.random() * SENTENCES.length)]
        },
        resetTest: function () {
            this.startTime = 0;
            this.totalTime = 0;
            this.userSentence = "";
            this.started = false;
        },
        resetWithNewSentence: function () {
            this.getRandomSentence();
            this.startTime = 0;
            this.totalTime = 0;
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
                clearInterval(this.timer);
                if (this.highScore == 0) {
                    this.highScore = this.totalTime;
                } else if (this.highScore > this.totalTime) {
                    this.highScore = this.totalTime;
                }
                return true;
            } else if (this.userSentence != "" && !this.started) {
                this.startRace();
                return false;
            } else {
                return false;
            }
        },

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