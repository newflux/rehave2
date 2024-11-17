function generateReport(method, score, positiveActions, totalActions) {
    const overlay = document.querySelector('.overlay');
    const reportContent = document.getElementById('report-content');
    
    let cognitiveGain;
    let explanation;
    
    switch(method) {
        case 'green-game':
            cognitiveGain = Math.min(100, Math.round((score / 100) * (positiveActions / totalActions) * 100));
            explanation = `Your engagement with green stimuli has enhanced your visual processing pathways, potentially increasing your ability to focus and reducing mental fatigue.`;
            break;
        case 'meditation':
            cognitiveGain = Math.min(100, Math.round((score / 300) * 100));
            explanation = `Regular meditation practice has been shown to increase grey matter in areas associated with learning, memory, and emotional regulation.`;
            break;
        case 'art-therapy':
            cognitiveGain = Math.min(100, Math.round((score / 60) * (positiveActions / totalActions) * 100));
            explanation = `Engaging in creative activities stimulates neural pathways, potentially enhancing problem-solving skills and emotional expression.`;
            break;
    }

    reportContent.innerHTML = `
        <h2>Session Report</h2>
        <h3>Cognitive Space Regained: ${cognitiveGain}%</h3>
        <p>${explanation}</p>
        <button onclick="closeReport()">Close</button>
    `;

    // Create and animate stars
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 20 + 10}px`;
        star.style.height = `${Math.random() * 20 + 10}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `fallingStar ${Math.random() * 1 + 0.5}s linear`;
        reportContent.appendChild(star);
    }

    overlay.style.display = 'flex';
    
    setTimeout(() => {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => star.remove());
    }, 1000);
}

function closeReport() {
    document.querySelector('.overlay').style.display = 'none';
}