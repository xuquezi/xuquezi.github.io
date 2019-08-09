(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('我'))
        .then(() => engine.shake())
        .then(() => engine.toText('错'))
        .then(() => engine.shake())
        .then(() => engine.toText('了'))
		.then(() => engine.shake())
        .then(() => engine.toText('！'))
		.then(() => engine.shake())
        .then(() => engine.toText('请'))
		.then(() => engine.shake())
        .then(() => engine.toText('原'))
		.then(() => engine.shake())
        .then(() => engine.toText('谅'))
		.then(() => engine.shake())
        .then(() => engine.toText('我'))
		.then(() => engine.shake())
        .then(() => engine.toText('！'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
