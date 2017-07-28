
// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

var languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : "Welcome to Thirukkural! Let's learn some..... ",
            'HELP'    : "okay. Now which part of the kural do you want to learn? Is it Love or wealth or virtue. just say it ",
            'ABOUT'   : "The Thirukkural (literally Sacred Verses), or shortly the Kural, is a classic Tamil sangam literature consisting of 1330 couplets or kurals, dealing with the everyday virtues of an individual",
            'STOP'    : "Okay, see you next time!"
        }
    }
};

var virtue = [
    "1: Akara Mudhala Ezhuththellaam Aadhi Pakavan Mudhatre Ulaku",
    "2: Katradhanaal Aaya Payanenkol Vaalarivan Natraal Thozhaaar Enin",
    "3:Malarmisai Ekinaan Maanati Serndhaar Nilamisai Neetuvaazh Vaar",
    "4: Ventudhal Ventaamai Ilaanati Serndhaarkku Yaantum Itumpai Ila",
    "5: Irulser Iruvinaiyum Seraa Iraivan Porulser Pukazhpurindhaar Maattu",
    "6: Porivaayil Aindhaviththaan Poidheer Ozhukka Nerinindraar Neetuvaazh Var"
];

var wealth = [
    "381: He who possesses these six things, an army, a people, wealth, ministers, friends and a fortress, is a lion among kings.",

    "382: Never to fail in these four things, fearlessness, liberality, wisdom, and energy, is the kingly character.",

    "383: These three things, viz., vigilance, learning, and bravery, should never be wanting in the ruler of a country."
];

var love = [
    "1081: Is this jewelled female a celestial, a choice peahen, or a human being ? My mind is perplexed",

    "This female beauty returning my looks is like a celestial maiden coming with an army to contendagainst me.",

    "I never knew before what is called Yama; I see it now; it is the eyes that carry on a great fight with(the help of) female qualities."
];

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
        var say = this.t('WELCOME') + ' ' + this.t('HELP');
        this.emit(':ask', say, say);
    },

    'AboutIntent': function () {
        this.emit(':tell', this.t('ABOUT'));
    },
    'kuralIntent': function () {
        var factArr = love;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = "Kural of the day for you!" + randomFact;
        this.emit(':tellWithCard', speechOutput,  randomFact)
    },
    'arattuppalIntent': function () {
        var factArr = virtue;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = "Kural of the day for you!" + randomFact;
        this.emit(':tellWithCard', speechOutput,  randomFact)
    },
    'porutpalIntent': function () {
        var factArr = wealth;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = "Kural of the day for you!" + randomFact;
        this.emit(':tellWithCard', speechOutput,  randomFact)
    },
    'kamattuppalIntent': function () {
        var factArr = love;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = "Kural of the day for you!" + randomFact;
        this.emit(':tellWithCard', speechOutput,  randomFact)
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
