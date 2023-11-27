document.addEventListener('DOMContentLoaded', function() {
    var touchedElements = [];

    // Для мобильных устройств
    document.addEventListener('touchstart', function(event) {
        var target = event.target;

        if (target.matches('b1, b3, p')) {
            touchedElements.push(target);
            target.style.transform = 'scale(1.03)';
            target.style.boxShadow = '5px 5px 15px rgba(255, 255, 255, 0.1)';
        }
    });

    document.addEventListener('touchend', function() {
        while (touchedElements.length) {
            var element = touchedElements.pop();
            element.style.transform = '';
            element.style.boxShadow = '';
        }
    });

    document.addEventListener('touchmove', function() {
        while (touchedElements.length) {
            var element = touchedElements.pop();
            element.style.transform = '';
            element.style.boxShadow = '';
        }
    });

    // Для настольных компьютеров
    document.addEventListener('mouseover', function(event) {
        var target = event.target;

        if (target.matches('b1, b3, p')) {
            target.style.transform = 'scale(1.03)';
            target.style.boxShadow = '5px 5px 15px rgba(255, 255, 255, 0.1)';
        }
    });

    document.addEventListener('mouseout', function(event) {
        var target = event.target;

        if (target.matches('b1, b3, p')) {
            target.style.transform = '';
            target.style.boxShadow = '';
        }
    });
});
