document.addEventListener('DOMContentLoaded',function() {
    var clipboard=new ClipboardJS('.clipboard-input-container',{
        target: function(trigger) {
            return trigger.querySelector('text');
        }
    });

    clipboard.on('success',function(e) {
        var tooltip = e.trigger.querySelector('.clipboard-tooltip');
        var tooltipText = tooltip.getAttribute('aria-label');
        tooltip.innerText = tooltipText;
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        setTimeout(function() {
            tooltip.style.visibility = 'hidden';
        }, 750);
    });

    var clipboardName = new ClipboardJS('.clipboard-name-container', {
        text: function(trigger) {
            return trigger.querySelector('div.clipboard-name').innerText;
        }
    });

    clipboardName.on('success', function(e) {
        var tooltip = e.trigger.querySelector('.clipboard-tooltip');
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