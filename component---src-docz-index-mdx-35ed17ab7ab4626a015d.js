(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"KZ+V":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),r=a("TjRS"),i=a("erf5"),l=a("Vkpr"),o=a.n(l);a("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/__docz__/index.mdx"}});var s={_frontmatter:b},p=r.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,c({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{style:{display:"flex",alignItems:"baseline"}},Object(n.b)("div",null,Object(n.b)("h1",null,"React Use Analytics API")),Object(n.b)("div",null,Object(n.b)("a",{href:"https://github.com/devboldly/react-use-analytics-api",target:"_blank",rel:"noopener noreferrer"},Object(n.b)(i.SvgIcon,{src:o.a,size:28,style:{margin:"0 0 0 20px"},mdxType:"SvgIcon"})))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"React hook for loading the ",Object(n.b)("a",c({parentName:"strong"},{href:"https://ga-dev-tools.appspot.com/embed-api/"}),"Google Analytics Embed API"),".")),Object(n.b)("h4",{id:"️-live-demo"},Object(n.b)("a",c({parentName:"h4"},{href:"/react-use-analytics-api/useDataChart#example"}),"👁️ Live Demo")),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"The ",Object(n.b)("a",c({parentName:"p"},{href:"/react-use-analytics-api/useAnalyticsApi"}),Object(n.b)("inlineCode",{parentName:"a"},"useAnalyticsApi"))," hook can be used to load and ready the ",Object(n.b)("a",c({parentName:"p"},{href:"https://ga-dev-tools.appspot.com/embed-api/"}),"Google Analytics Embed API")," in React."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"What is the Google Analytics Embed API?")," It is a JavaScript library that allows you to easily create and embed Google Analytics charts on a third-party website in a matter of minutes.")),Object(n.b)("p",null,"This library also provides a few helper hooks for common operations via the API:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/react-use-analytics-api/useAuthorize"}),"useAuthorize")," - ",Object(n.b)("a",c({parentName:"li"},{href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth"}),"Authorize")," the user"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/react-use-analytics-api/useViewSelector"}),"useViewSelector")," - Render an Analytics ",Object(n.b)("a",c({parentName:"li"},{href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#viewselector"}),"ViewSelector")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/react-use-analytics-api/useDataChart"}),"useDataChart")," - Render a ",Object(n.b)("a",c({parentName:"li"},{href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart"}),"DataChart")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/react-use-analytics-api/useSignOut"}),"useSignOut")," - Sign the user out")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Looking for components?")," A full React component library that wraps these hooks is now available! Check out ",Object(n.b)("a",c({parentName:"p"},{href:"https://devboldly.github.io/react-analytics-charts/"}),"React Analytics Charts"),".")),Object(n.b)("h3",{id:"features-include"},"Features include:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🚀 Easily load the Google Analytics Embed API"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Loading and readying the API is handled for you so you can just focus on the good stuff, like embedding charts."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"📈 Drop in charts quickly and easily"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Embed Google Analytics charts on your site in minutes."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"💁 From auth to charts, it's handled for you"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Side-effects are handled for common API operations. Need to handle the auth flow, render a view selector, or render charts? Got ya covered!"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🧼 Minimized ",Object(n.b)("inlineCode",{parentName:"strong"},"window")," dependence"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Google loads the API to ",Object(n.b)("inlineCode",{parentName:"li"},"window"),", but this hook pulls the API into a singleton to limit ",Object(n.b)("inlineCode",{parentName:"li"},"window")," dependence."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🤝 Hooks stay synchronized"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"When calling the API hook in multiple places, changes to readiness and auth will propate to all hooks, keeping them in sync."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"✨ Live examples and rich documentation"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Develop easier with plenty of live examples, starting points, and rich docs."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"And more!"))),Object(n.b)("h3",{id:"installation"},"Installation"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"npm i react-use-analytics-api\n")),Object(n.b)("h2",{id:"quick-start"},"Quick Start"),Object(n.b)("p",null,"To load the Google Analytics Embed API, use the ",Object(n.b)("a",c({parentName:"p"},{href:"/react-use-analytics-api/useAnalyticsApi"}),Object(n.b)("inlineCode",{parentName:"a"},"useAnalyticsApi"))," hook:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"import { useAnalyticsApi } from 'react-use-analytics-api';\n")),Object(n.b)("p",null,"Then in your function component: "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"const { ready, gapi, authorized, error } = useAnalyticsApi();\n")),Object(n.b)("p",null,"When ",Object(n.b)("inlineCode",{parentName:"p"},"ready")," is ",Object(n.b)("inlineCode",{parentName:"p"},"true"),", the ",Object(n.b)("inlineCode",{parentName:"p"},"gapi")," object will be set to the loaded and ready-to-use ",Object(n.b)("a",c({parentName:"p"},{href:"/react-use-analytics-api/useAnalyticsApi"}),"Google Analytics Embed API"),". The ",Object(n.b)("inlineCode",{parentName:"p"},"gapi")," object will be ",Object(n.b)("inlineCode",{parentName:"p"},"undefined")," until it is ready to use."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"authorized")," property will be ",Object(n.b)("inlineCode",{parentName:"p"},"true")," when the user is authorized, ",Object(n.b)("inlineCode",{parentName:"p"},"false")," otherwise. "),Object(n.b)("p",null,"From here, you can ",Object(n.b)("a",c({parentName:"p"},{href:"/react-use-analytics-api/useAuthorize"}),"authorize the user"),", ",Object(n.b)("a",c({parentName:"p"},{href:"/react-use-analytics-api/useViewSelector"}),"render a view selector"),", and ",Object(n.b)("a",c({parentName:"p"},{href:"/react-use-analytics-api/useDataChart"}),"render charts"),"... or do ",Object(n.b)("a",c({parentName:"p"},{href:"/react-use-analytics-api/useAnalyticsApi#using-the-api-itself"}),"anything else you want")," with the API!"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"🏁 For a live example demonstrating all features of this library including full auth flow, see the ",Object(n.b)("a",c({parentName:"p"},{href:"/react-use-analytics-api/useDataChart#example"}),"useDataChart example"),". This is a great starting point for building your own charts dashboard.")),Object(n.b)("h2",{id:"typescript"},"TypeScript"),Object(n.b)("p",null,"Type definitions have been included for ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," support."),Object(n.b)("h2",{id:"contributing"},"Contributing"),Object(n.b)("p",null,"Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. Even the smallest changes help."),Object(n.b)("p",null,"For major changes, open an issue first to discuss what you'd like to change."),Object(n.b)("h2",{id:"-found-it-helpful-star-it"},"⭐ Found It Helpful? ",Object(n.b)("a",c({parentName:"h2"},{href:"https://github.com/devboldly/react-use-analytics-api/stargazers"}),"Star It")),Object(n.b)("p",null,"If you found this project helpful, be awesome and let the community know by giving it a ",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/devboldly/react-use-analytics-api/stargazers"}),"star"),": ",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/devboldly/react-use-analytics-api/stargazers"}),"👉⭐")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/__docz__/index.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docz-index-mdx-35ed17ab7ab4626a015d.js.map