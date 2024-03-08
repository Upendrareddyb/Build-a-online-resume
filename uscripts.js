document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'dec 2023 - Present',
        title: 'Teaching assistance',
        description: 'Assist students in setting up and troubleshooting cloud computing environments for practical exercises and projects. Offer guidance on using cloud platforms, tools, and services effectively.'
    },
    {
        date: 'Aug 2023 - dec 2023',
        title: 'Research assistance',
        description: 'Assisting with literature reviews, data collection, analysis, and writing, Research Assistants support the execution of research projects across various disciplines.'
    },
    {
        date: 'july 2021 - jan 2023',
        title: 'Ab-inotio Devoloper',
        description: 'Upgrading, installing, and configuring Ab Initio Co>ops, EME, Express >IT, Control Centre, MHUB, other Ab Initio products including patches and server consolidation processes from admin standpoint.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
