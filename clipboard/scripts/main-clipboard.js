document.addEventListener('DOMContentLoaded',function() {
    var clipboard=new ClipboardJS('.copyboard-input-container',{
        target: function(trigger) {
            return trigger.querySelector('text');
        }
    });

    clipboard.on('success',function(e) {
        var tooltip = e.trigger.querySelector('.tooltip');
        var tooltipText = tooltip.getAttribute('aria-label');
        tooltip.innerText = tooltipText;
        tooltip.style.visibility = 'visible';
        setTimeout(function() {
            tooltip.style.visibility = 'hidden';
        }, 750);
    });

    var clipboardName = new ClipboardJS('.copyboard-name-container', {
        text: function(trigger) {
            return trigger.querySelector('div').innerText;
        }
    });

    clipboardName.on('success', function(e) {
        var tooltip = e.trigger.querySelector('.tooltip-name');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        setTimeout(function() {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }, 2000);
    });

    clipboardName.on('error', function(e) {
        console.error('Error:', e);
    });
});