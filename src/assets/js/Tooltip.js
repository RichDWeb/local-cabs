class Tooltip {
    constructor(targetId, tooltipId) {
        this.target = document.getElementById(targetId);
        this.tooltip = document.getElementById(tooltipId);

        this.target.addEventListener('mouseenter', () => this.showTooltip());
        this.target.addEventListener('mouseleave', () => this.hideTooltip());
        this.positionTooltip();
    }

    showTooltip() {
        this.positionTooltip();
        this.tooltip.classList.remove('hidden');
        this.tooltip.classList.add('tooltip-enter');
        setTimeout(() => {
            this.tooltip.classList.add('tooltip-enter-active');
        }, 10);
    }

    hideTooltip() {
        this.tooltip.classList.remove('tooltip-enter-active');
        setTimeout(() => {
            this.tooltip.classList.add('hidden');
            this.tooltip.classList.remove('tooltip-enter');
        }, 300);
    }

    positionTooltip() {
        this.tooltip.style.top = "-44px";
        this.tooltip.style.right = "-120px";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Tooltip('tooltipTarget', 'tooltip');
});