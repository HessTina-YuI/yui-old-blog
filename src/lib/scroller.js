const scrollToView = (elementId, offset) => {
    const element = document.getElementById(elementId);
    const rect = element.getBoundingClientRect();
    const targetY = rect.y + window.scrollY - offset;

    let tempDiv;
    tempDiv = document.getElementById('tempDiv');
    if (tempDiv) {
        tempDiv.style.top = targetY + 'px';
    } else {
        tempDiv = document.createElement('div');
        tempDiv.id = 'tempDiv';
        tempDiv.style.background = 'translate';
        tempDiv.style.width = '10px';
        tempDiv.style.height = '10px';
        tempDiv.style.position = 'absolute';
        tempDiv.style.top = targetY + 'px';
        document.body.appendChild(tempDiv);
    }

    tempDiv.scrollIntoView({behavior: 'smooth', block: 'start'});
};

export { scrollToView };