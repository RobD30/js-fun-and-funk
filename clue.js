const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
};

var gameLoop = function () {
    for (var i = 0; i < game.suspects.length; i++) {
        console.log('outer loop')
        for (var key in game.suspects[i]) {
        }
    }
    }

function foo() {
    for (let
}

foo();