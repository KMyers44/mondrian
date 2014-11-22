/**
 * Created by kelly on 11/19/14.
 */

$(document).ready(function () {

    var colors = $('.colors');
    var line = $('.line');
    var coloredSquare = "";

    colors.on('click', function () {
        coloredSquare = $(this).css('background-color');
    });

    line.on('click', function () {
        $(this).css('background-color', coloredSquare);
    });

});

