<!-- Title -->
<h1 align="center">
👋 Welcome to <br><code>@expo/match-media</code>
</h1>

<!-- Header -->

<p align="center">
    <b>Universal polyfill for match media API using Expo APIs on mobile</b>
    <br/>
    <br/>
    <a aria-label="Well tested CSS Library" href="https://github.com/expo/match-media/actions">
      <img align="center" alt="GitHub Actions status" src="https://github.com/expo/match-media/workflows/Check%20Universal%20Module/badge.svg">
    </a>
</p>

---

<!-- Body -->

TL;DR: [Demo](App.js)

## 🏁 Setup

Install `@expo/match-media` in your project.

```sh
yarn add @expo/match-media
```

> If you're using a React Native app that wasn't bootstrapped with the `expo-cli` then you'll need to install and link the `expo` module to use this package.

## ⚽️ Usage

Import the polyfill at the top of your file before using the [`window.matchMedia` API][match-media].

```js
import '@expo/match-media';
// use the match media API
```

**What this does**

- In the browser: Nothing
- In React Native apps: Polyfills the [`matchMedia` API][match-media] so you can use awesome libraries like `react-responsive`.

## License

The Expo source code is made available under the [MIT license](LICENSE). Some of the dependencies are licensed differently, with the BSD license, for example.

<!-- Footer -->

---

<p>
    <a aria-label="sponsored by expo" href="http://expo.io">
        <img src="https://img.shields.io/badge/Sponsored_by-Expo-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff" target="_blank" />
    </a>
    <a aria-label="@expo/match-media is free to use" href="/LICENSE" target="_blank">
        <img align="right" alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=for-the-badge&color=33CC12" target="_blank" />
    </a>
</p>


[match-media]: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia