document.addEventListener('DOMContentLoaded', function () {
    // Get the full domain name (FQDN)
    const fqdn = window.location.hostname;

    // Extract the GitHub username from the FQDN (assuming it is the first part)
    const username = fqdn.split('.')[0];

    // Dynamically update the title as soon as possible
    document.title = `${username} | GitHub Profile`;

    // Construct the repo URL based on the username
    const repo = `${username}/${username}`;

    // Fetch the README.md file from the GitHub repository
    fetch(`https://api.github.com/repos/${repo}/contents/README.md`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.content) {
                // Decode the base64 content properly
                const base64Content = data.content;
                const decodedContent = atob(base64Content);
                const decodedUtf8Content = decodeURIComponent(escape(decodedContent));

                // Use Marked.js to convert markdown to HTML and render the content
                document.getElementById('content').innerHTML = marked.parse(decodedUtf8Content);

                // Update the GitHub link dynamically
                const githubLink = document.getElementById('github-link');
                const newHref = githubLink.href.replace('#', username);
                githubLink.setAttribute('href', newHref);

            } else {
                document.getElementById('content').innerHTML = '<p>README.md file not found or is empty.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching README:', error);
            document.getElementById('content').innerHTML = `<p>Error loading README.md: ${error.message}</p>`;
        });
});
