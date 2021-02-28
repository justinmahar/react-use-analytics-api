<h2 align="center">
  <a href="https://github.com/justinmahar/react-use-analytics-api">React Use Analytics API</a>
</h2>
<h3 align="center">
  React hook for loading the <a href="https://ga-dev-tools.appspot.com/embed-api/">Google Analytics Embed API</a>.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-use-analytics-api">
    <img src="https://badge.fury.io/js/react-use-analytics-api.svg" alt="npm Version"/>
  </a>
  <a href="https://github.com/justinmahar/react-use-analytics-api/actions?query=workflow%3ATests">
    <img src="https://github.com/justinmahar/react-use-analytics-api/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/justinmahar/react-use-analytics-api/actions?query=workflow%3ADeploy">
    <img src="https://github.com/justinmahar/react-use-analytics-api/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-use-analytics-api/)**.

👁️ **[Live Demo](https://justinmahar.github.io/react-use-analytics-api/useDataChart#example)**

_For components, check out: [React Analytics Charts](https://justinmahar.github.io/react-analytics-charts/)_

## Overview

The [`useAnalyticsApi`](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi) hook can be used to load and ready the [Google Analytics Embed API](https://ga-dev-tools.appspot.com/embed-api/) in React.

> **What is the Google Analytics Embed API?** It is a JavaScript library that allows you to easily create and embed Google Analytics charts on a third-party website in a matter of minutes.

This library also provides helper hooks for the API's [built-in components](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference):

- [useAuthorize](/useAuthorize) - [Authorize](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth) the user
- [useViewSelector](/useViewSelector) - Render an Analytics [ViewSelector](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#viewselector)
- [useDataChart](/useDataChart) - Render a [DataChart](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart)
- [useData](/useData) - Query [data](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#data) from the Google Analytics Core Reporting API and get back the results
- [useSignOut](/useSignOut) - [Sign the user out](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth)

> **Looking for components?** A full React component library that wraps these hooks is now available! Check out [React Analytics Charts](https://justinmahar.github.io/react-analytics-charts/).

### Features include:

- **🚀 Easily load the Google Analytics Embed API**
  - Loading and readying the API is handled for you so you can just focus on the good stuff, like embedding charts.
- **📈 Drop in charts quickly and easily**
  - Embed Google Analytics charts on your site in minutes.
- **💁 From auth to charts, it's handled for you**
  - Side-effects are handled for common API operations. Need to handle the auth flow, render a view selector, or render charts? Got ya covered!
- **🧼 Minimized `window` dependence**
  - Google loads the API to `window`, but this hook pulls the API into a singleton to limit `window` dependence.
- **🤝 Hooks stay synchronized**
  - When calling the API hook in multiple places, changes to readiness and auth will propate to all hooks, keeping them in sync.
- **✨ Live examples and rich documentation**
  - Develop easier with plenty of live examples, starting points, and rich docs.
- **And more!**

## Installation

```
npm i react-use-analytics-api
```

## Quick Start

To load the Google Analytics Embed API, use the [`useAnalyticsApi`](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi) hook:

```jsx
import { useAnalyticsApi } from "react-use-analytics-api";
```

Then in your function component:

```jsx
const { ready, gapi, authorized, error } = useAnalyticsApi();
```

When `ready` is `true`, the `gapi` object will be set to the loaded and ready-to-use [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi). The `gapi` object will be `undefined` until it is ready to use.

The `authorized` property will be `true` when the user is authorized, `false` otherwise.

From here, you can [authorize the user](https://justinmahar.github.io/react-use-analytics-api/useAuthorize), [render a view selector](https://justinmahar.github.io/react-use-analytics-api/useViewSelector), and [render charts](https://justinmahar.github.io/react-use-analytics-api/useDataChart)... or do [anything else you want](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi#using-the-api-itself) with the API!

> 🏁 For a live example demonstrating all features of this library including full auth flow, see the [useDataChart example](https://justinmahar.github.io/react-use-analytics-api/useDataChart#example). This is a great starting point for building your own charts dashboard. You can also check out [React Analytics Charts](https://justinmahar.github.io/react-analytics-charts/) which is built on this hooks library.

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Logo Attribution

Logo graphics by [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Favicon by [favicon.io](https://favicon.io/emoji-favicons/).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

See [Kindling](https://tinyurl.com/kindlingscripts) for npm script documentation.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-use-analytics-api/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-use-analytics-api/stargazers): [👉⭐](https://github.com/justinmahar/react-use-analytics-api/stargazers)

## MIT License

```
Copyright © 2020 Justin Mahar https://github.com/justinmahar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
