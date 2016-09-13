/**
 * Created by Let Aurn IV on 22/09/2015.
 */

/*global  $*/

Notification = window.Notification || {};

Notification = function () {

    'use strict';

    var number = 0;
    var incPosition = 0;

    var template = function (title, text, image, position) {
        incPosition = number * 90;
        number = number + 1;
        var textHtml = '<div class="ntext">' + text + '</div>';
        var titleHtml = (!title ? '' : '<div class="ntitle">' + title + '</div>');
        var imageHtml = (!image ? '' : '<div class="nimg"><img src="' + image + '" width="50" height="50" /></div>');
        var style;
        switch (parseInt(position, 10)) {
            case 1:
                style = "top:" + incPosition + "px; left:20px;";
                break;
            case 2:
                style = "top:" + incPosition + "px; right:20px;";
                break;
            case 3:
                style = "bottom:" + incPosition + "px; right:20px;";
                break;
            case 4:
                style = "bottom:" + incPosition + "px; left:20px;";
                break;
        }
        return {
            id: number,
            content: '<div class="notification notification-' + number + ' " style="' + style + '">' +
            imageHtml +
            '<div class="text">' + titleHtml + textHtml + '</div>' +
            '</div>'
        };
    };

    var hide = function (id, outAnimation) {
        var notification = $(document).find('.notification-' + id);
        notification.addClass(outAnimation);
        $(document).find('.notification').css('top', '-=90px');
        number -= 1;
        setTimeout(function () {
            notification.remove();
        }, 1000);
    };

    var create = function (config) {
        var notification = template(config.title, config.text, config.image, config.position);
        $(notification.content).addClass('animated ' + config.inAnimation).appendTo('body');
        setTimeout(function () {
            hide(notification.id, config.outAnimation);
        }, config.delay * 500 || 7000);
    };

    return create;

}();