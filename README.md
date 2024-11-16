# GitHub.io Profile Page

[![License](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-blue.svg)](LICENSE.md)
[![Last Commit](https://img.shields.io/github/last-commit/finnoybu/finnoybu.github.io)](./commits)
[![Issues](https://img.shields.io/github/issues/finnoybu/finnoybu.github.io)](./issues)

A customizable landing page for your GitHub Pages site that dynamically loads and displays your GitHub Profile's `README.md` content. This project helps maintain consistency between your GitHub Profile and GitHub Pages site.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Description

This project provides a customizable template for creating a consistent, dynamic landing page that integrates with your GitHub Profile. By utilizing the content of your `README.md` file from your GitHub profile repository (`<username>/<username>`), this page will display the same information on your personal GitHub Pages site (`https://<username>.github.io`), ensuring consistency between your GitHub profile and your Pages site.

**Features:**
- Fetches and renders your GitHub `README.md` content.
- Customizable GitHub profile page with the same content displayed across both your GitHub Profile and GitHub Pages site.
- Easily deployable on GitHub Pages for seamless integration with your GitHub profile.

## Installation

### 1. **If You Already Have a GitHub Pages Repository**

If you **already have a GitHub Pages site**, follow these steps:

1. Clone your existing `<username>.github.io` repository to your local machine:
    ```bash
    git clone https://github.com/<username>/<username>.github.io.git
    ```
2. Copy the files from this repository (all the files, including `index.html`, `style.css`, `script.js`, etc.) into your existing `<username>.github.io` repository.
3. Push the changes to your GitHub Pages repository:
    ```bash
    git add .
    git commit -m "Add GitHub profile page"
    git push origin main
    ```

### 2. **If You Don't Have a GitHub Pages Repository**

If you **do not yet have a GitHub Pages site**, follow these steps:

1. Fork this repository to your GitHub account.
2. Rename the forked repository to `<username>/<username>.github.io`, where `<username>` is your GitHub username.
3. Enable GitHub Pages for the new repository:
   - Go to the **Settings** tab of your forked repository.
   - Scroll down to the **GitHub Pages** section.
   - Under **Source**, select the `main` branch, and click **Save**.

### 3. **Ensure Your GitHub Profile Has a `README.md`**

Make sure that your GitHub Profile repository (`<username>/<username>`) contains a `README.md` file. This file will be dynamically fetched and displayed on your GitHub Pages site.

### 4. **Visit Your GitHub Pages Site**

Once the repository is set up and GitHub Pages is enabled, you can visit your GitHub Pages site at:

```
https://<username>.github.io
```

Your GitHub Pages site will now display the content from your `README.md` file, ensuring consistency with your GitHub profile.

## Usage

After setting up the project, the page will automatically fetch and render the `README.md` file from your GitHub profile repository. The content will be displayed in the `markdown-body` section of the page.

You can customize your GitHub Pages site by editing the `README.md` file in your `<username>/<username>` repository. Changes made to the `README.md` file will automatically appear on your GitHub Pages site.

If you want to customize the design of the page, you can modify the `style.css` file to fit your branding or preferences.

### Example of Customization:

- Add more information to your `README.md` file.
- Modify the CSS in `style.css` to match your desired style (colors, fonts, etc.).
- The project supports SVG icons and other dynamic content from your GitHub profile (e.g., repositories, gists, etc.).

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your changes (`git push origin feature-branch`).
5. Open a Pull Request.

Please make sure to follow the [Code of Conduct](CODE_OF_CONDUCT.md) and adhere to the [Contributing Guidelines](CONTRIBUTING.md) when submitting contributions.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- Email: [finnoybu@gmail.com](mailto:finnoybu@gmail.com)
- GitHub: [https://github.com/finnoybu](https://github.com/finnoybu)

## Acknowledgments

- [GitHub API](https://developer.github.com/v3/) - Used for fetching the `README.md` file from the GitHub Profile repository.
- [Marked.js](https://github.com/markedjs/marked) - Used for converting Markdown content to HTML.
- [GitHub Pages](https://pages.github.com/) - For hosting your site easily and for free.

