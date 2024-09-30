# Ngx-Dark-Mode-Toggle

## New Feature

### 🎉 New Feature Added: `ngx-dark-mode-select` 🎉

We are excited to announce a **new feature** in our package: the `ngx-dark-mode-select` component! This feature allows you to toggle between **dark mode** and **light mode** with a select input element, elevating the user experience with customizable theme options.


## Demo

Live demo is available on [Ngx-dark-mode-toggle](https://stackblitz.com/edit/ngx-dark-mode-toggle-demo) and [Ngx-dark-mode-select](https://stackblitz.com/edit/ngx-dark-mode-select-demo)


## Overview

The @**ngx-dark-mode/core Library** is a simple and lightweight Angular component that allows users to switch between dark and light themes. This customizable toggle button provides an enhanced user experience with support for modern design practices.

## Features

- **Easy Integration:** Quickly add a dark/light mode toggle to any Angular application.

- **Customizable Appearance:** Customizable toggle button design to match your application’s aesthetics.

- **Persistent Mode:** Automatically saves the user’s mode preference in local storage, ensuring the selected mode is applied on subsequent visits.

- **Lightweight:** Minimal impact on your application’s performance.

## Installation

```bash
npm i @ngx-dark-mode-toggle/core`
```

## Usage
1. **Import The Component:**
Add the component to your Angular component class:

   ```typescript
   import { Component } from '@angular/core';
   import { ToggleComponent } from '@ngx-dark-mode-toggle/core';

   @Component({
      selector: 'app-root',
      standalone: true,
      imports: [ToggleComponent],
      templateUrl: './app.component.html',
      styleUrl: './app.component.scss',
   })
   ```

2. **Add the Toggle Component:**
Add the component to your Angular component class:

   ```html
    <ngx-dm-toggle></ngx-dm-toggle>
   ```

3. **Customizing Styles for Dark Mode (Optional):**
If you want to customize the appearance of your component in dark mode, you can easily do so by defining specific styles in your root `style.scss` file.

    For example, if your component has a CSS class like this:

    ```css
    .site-header {
        background-color: #f67b4e;
        color: #ffffff;
    }
    ```
    And you want to overwrite the background color when dark mode is enabled, you can add the following styles to your style.scss:
    ```css
    body.dark .site-header {
        background-color: #CC5500 !important;
    }
    ```

## Options

`@ngx-dark-mode-toggle/core` ships with the following options:

| Option              | Description                                                | Default          |
|---------------------|------------------------------------------------------------|------------------|
| `disableModeStorage`| Disables saving the mode in local storage.                 | `false`          |
| `hideLabel`         | Hides the label next to the toggle button.                 | `false`          |
| `labelText`         | Specifies the text of the label next to the toggle button. | `'Dark mode'`    |


You can configure the `<ngx-dm-toggle>` component with the following options:

```html
<ngx-dm-toggle
  [disableModeStorage]="true"
  [hideLabel]="false"
  [labelText]="'Dark'">
</ngx-dm-toggle>
```

## Have an Issue or Feature Request?

If you encounter any issues or have a feature request, we'd love to hear from you! Please feel free to [open an issue](https://github.com/AbduBehindTheCode/ngx-dark-mode/issues) on our GitHub repository.

Whether it's a bug report, a suggestion for improvement, or a feature you'd like to see, your feedback helps us make this library better for everyone.
