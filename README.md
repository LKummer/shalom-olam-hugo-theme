<p align="center">
    <img width=20% src="assets/svg/sabres-logo.svg">
    <img width=80% src="assets/png/shalom-olam-header.png">
</p>

# About

Shalom Olam is the first Hugo theme that is built for creating Hebrew websites.

## Why Shalom Olam?

### Native Right To Left

The theme is built for Hebrew, and just Hebrew and tries to do it well. It uses [Fomantic UI](https://fomantic-ui.com/) built in right to left mode to have great looking components to compliment the Hebrew language.

### Responsive Design

The theme is built to be easy to use on all screen sizes with no compromises. With a hamburger menu and search page for mobile screens and in-page search results for bigger screens users with all screen sizes can enjoy your blog.

### Fuzzy Search

The theme uses [Fuse.js](https://fusejs.io/) to supply fuzzy search to make your blog posts easy to find.

### Code Highlight

The theme uses [Prism](https://prismjs.com/) to supply syntax highlight on back-ticked code blocks. It is configured for [some languages](#Highlight-Languages) and can be configured for other languages depending on your requirements.

### Accessible Design

The theme makes full use of screen reader attributes to make it easy to let blind users enjoy your blog.

# Installation

This quick section should guide you though starting a new blog with this theme.

## Blog Setup

Create a new hugo blog and initialize a git repository at your blog's root directory:

    hugo new site .
    git init

Add all the files created into the repository:

    git add *
    git commit -m "Initial commit."

Make sure your blog builds fine by running the hugo dev server and going to `localhost:1313`:

    hugo serve

If your browser connects fine to the server you can continue to the next step.

## Theme Installation

The theme is split into a few repositories, the `shalom-olam-hugo-theme` is the one containing the theme itself. Add it as a git submodule to your hugo blog using the following command from the root of the blog:

    git submodule add <url> shalom-olam

Set the theme in your blog config file, in this case `theme.toml`:

    theme = "shalom-olam"

Now your blog should be building using the Shalom Olam theme.

## Blog Requirements

The theme is built for specific section names that have their hardcoded functionality.

* `אודות` should contain a single `index.md` with `headless = true` that will be used to create the about section in the footer. If the section is not supplied the about section in the footer will not be built.
* `בלוג` should contain the blog, and shows a list section with a category list at the top.

To enable the search functionality, a search page is required. Create `~/content/חיפוש.md` and make sure it contains the following data in the front matter:

    ---
    layout: search
    outputs:
    - html
    - json
    ---

Now your blog should be fully functional.

# Notes

Things you should know when using the theme.

## Recommended Configuration

This is the recommended `theme.toml` configuration for the theme.

    baseURL = "<url>"
    languageCode = "he-il"
    title = "<blog name>"

    theme = "shalom-olam"
    summaryLength = 20
    sectionPagesMenu = "main"

    paginate = 6

    [taxonomies]
        category = "categories"
        series = "series"

## Taxonomies

The theme is made to use with categories and series as taxonomies.

    [taxonomies]
        category = "categories"
        series = "series"

The `series` taxonomy is meant to be used with an array containing a single value.

    ---
    series:
    - שם הסדרה
    ---

## Highlight Languages

This theme uses `Prism.js` for syntax highlight. The theme is pre-configured to
support the following languages:

* `markup`, `html`, `xml`, `svg`, `mathml`.
* `css`.
* `clike`.
* `javascript`, `js`.
* `c`.
* `cpp`.
* `git`.
* `json`.
* `python`, `py`.
* `yaml`, `yml`.

They can be applied through back-ticked blocks:

    ```html
    <h1>Hello World</h1>
    ```

If you wish to use different languages you can replace the `prism.js` and
`prism.css` static files with ones that fit your requirements.