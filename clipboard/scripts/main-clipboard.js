document.addEventListener('DOMContentLoaded',function() {
    var clipboard=new ClipboardJS('.copyboard-icon',{
        target: function(trigger) {
            return trigger.previousElementSibling;
        }
    });

    clipboard.on('success',function(e) {
        var tooltip = e.trigger.querySelector('.tooltip');
        var tooltipText = tooltip.getAttribute('aria-label');
        tooltip.innerText = tooltipText;
        tooltip.style.visibility = 'visible';
        setTimeout(function() {
            tooltip.style.visibility = 'hidden';
        }, 1200);
    });
});