const weapons = ['candle', 'leadpipe', 'revolver'];

const makeBroken = function(item) {
    return `broken ${item}`;
};

const _ = {
    map: function(array, callback) {
        var results = [];

        this.each(array, (item) => {
            results.push(callback(item));
        });

        return results;
    },

    each: function(list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    }
};



_.map(weapons, makeBroken);