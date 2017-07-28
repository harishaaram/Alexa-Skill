
// Executing Random kurals from Thirukkural

var languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : "Welcome to Thirukkural! Let's learn some kurals.....ask what is it to know what Thirukkural is, just say... what is it or say.... about........ ",
            'HELP'    : "To learn a kural, start choosing the section....whether Is it Love.... or wealth....... or virtue........ just say it ",
            'ABOUT'   : "The Thirukkural (literally Sacred Verses), or shortly the Kural, is a classic Tamil sangam literature consisting of 1330 couplets or kurals, dealing with the everyday virtues of an individual............",
            'STOP'    : "Okay, see you next time!"
        }
    }
}

var virtue = [
    "As the letter A is the first of all letters, so the eternal God is first in the world",
    "What Profit have those derived from learning, who worship not the good feet of Him who is possessed of pure knowledge ?",
    "They who are united to the glorious feet of Him who passes swiftly over the flower of the mind, shall flourish long above all worlds."
];

var virtueAudio = ['<audio src="https://s3.amazonaws.com/thirukurral/1.mp3"/>',
    '<audio src="https://s3.amazonaws.com/thirukurral/2.mp3"/>',
    '<audio src="https://s3.amazonaws.com/thirukurral/3.mp3"/>'
]

var wealth = [
    "He who possesses these six things, an army, a people, wealth, ministers, friends and a fortress, is a lion among kings.",

    "Never to fail in these four things, fearlessness, liberality, wisdom, and energy, is the kingly character.",

    "Let a man learn thoroughly whatever he may learn, and let his conduct be worthy of his learning."
];

var wealthAudio = ['<audio src="https://s3.amazonaws.com/thirukurral/381.mp3"/>',
    '<audio src="https://s3.amazonaws.com/thirukurral/382.mp3"/>',
    '<audio src="https://s3.amazonaws.com/thirukurral/391.mp3"/>'
]

var love = [
    "Is this jewelled female a celestial, a choice peahen, or a human being ? My mind is perplexed",

    "This female beauty returning my looks is like a celestial maiden coming with an army to contendagainst me.",

    "I never knew before what is called Yama; I see it now; it is the eyes that carry on a great fight with(the help of) female qualities."
];

var loveAudio = ['<audio src="https://s3.amazonaws.com/thirukurral/1081.mp3"/>',
    '<audio src="https://s3.amazonaws.com/thirukurral/1082.mp3"/>',
    '<audio src="https://s3.amazonaws.com/thirukurral/1083.mp3"/>'
]

// 2. Skill Code =======================================================================================================

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        var say = this.t('WELCOME');
        // var say = this.t('WELCOME') + ' ' + this.t('HELP');
        this.emit(':ask', say);
    },

    'AboutIntent': function () {
        // this.emit(':tell', this.t('ABOUT'));
        var say = this.t('ABOUT') + ' ' + this.t('HELP');
        this.emit(':ask', say, say);

    },
    'arattuppalIntent': function () {
        var kuralArr = virtue;
        var kuralAud = virtueAudio;

        var kuralIndex = Math.floor(Math.random() * kuralArr.length);

        var randomkural = kuralArr[kuralIndex];
        var content = kuralAud[kuralIndex]

        var speechOutput = "Kural of the day for you!" + content + randomkural;
        this.emit(':tellWithCard', speechOutput,  randomkural)
    },
    'porutpalIntent': function () {
        var kuralArr = wealth;
        var kuralAud = wealthAudio;

        var kuralIndex = Math.floor(Math.random() * kuralArr.length);

        var randomkural = kuralArr[kuralIndex];
        var content = kuralAud[kuralIndex]

        var speechOutput = "Kural of the day for you!" + content + randomkural;
        this.emit(':tellWithCard', speechOutput,  randomkural)
    },
    'kamattuppalIntent': function () {
        var kuralArr = love;
        var kuralAud = loveAudio;

        var kuralIndex = Math.floor(Math.random() * kuralArr.length);

        var randomkural = kuralArr[kuralIndex];
        var content = kuralAud[kuralIndex]

        var speechOutput = "Kural of the day for you!" + content + randomkural;
        this.emit(':tellWithCard', speechOutput, randomkural)
    },

    'AMAZON.NoIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', this.t('HELP'));
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP'));
    }

};
