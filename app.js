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
        startTime: [],
    },
    methods: {
        startRace: function () {
        },
        getRandomSentence: function () {
            this.raceSentence = SENTENCES[Math.floor(Math.random() * SENTENCES.length)]
        },
        calculateTotalTime: function () {
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
            return [seconds, centiseconds]
        }
    },
    computed: {
        // this function runs whenever the sentence the user is typing changes
        // use it like a variable (v-if="finishedTyping")
        finishedTyping: function () {
            // you probably wanna use your variable here in place of these awful ones
            if (this.SENTENCE_TO_BE_TYPED == this.SENTENCE_USER_IS_TYPING) {
                this.calculateTotalTime();
                return true;
            } else {
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