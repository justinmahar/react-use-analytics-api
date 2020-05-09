(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CUKV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var a=n("/FXl"),i=n("TjRS"),r=n("SmrG");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useViewSelector.mdx"}});var c={_frontmatter:l},d=i.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(d,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"useViewSelector"),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This hook renders a ",Object(a.b)("a",o({parentName:"p"},{href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#viewselector"}),"ViewSelector"),"\ninto a container on the page using the ",Object(a.b)("a",o({parentName:"p"},{href:"/react-use-analytics-api/useAnalyticsApi"}),"Google Analytics Embed API"),"."),Object(a.b)("p",null,"The view selector can be used to change the Google Analytics view for data queries when ",Object(a.b)("a",o({parentName:"p"},{href:"/react-use-analytics-api/useDataChart"}),"rendering charts"),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { useViewSelector } from 'react-use-analytics-api';\n")),Object(a.b)("p",null,"In your function component:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"const [viewId, setViewId] = React.useState();\nuseViewSelector(gapi, 'my-view-selector-container', viewId => setViewId(viewId));\n")),Object(a.b)("p",null,"Provide the hook with the loaded ",Object(a.b)("a",o({parentName:"p"},{href:"/react-use-analytics-api/useAnalyticsApi"}),"Google Analytics Embed API")," (",Object(a.b)("inlineCode",{parentName:"p"},"gapi"),"), the ID of the container DOM element to render to,\nand a callback for when the view changes."),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"gapi")," is ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),", nothing will be rendered."),Object(a.b)("h2",{id:"signature"},"Signature"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useViewSelector( gapi?: GoogleAnalyticsEmbedAPI, viewSelectorId: string, onChange: (viewId: string) => void)) => void")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Argument"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"gapi"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")," ","|"," ",Object(a.b)("inlineCode",{parentName:"td"},"undefined")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"The ",Object(a.b)("a",o({parentName:"td"},{href:"/react-use-analytics-api/useAnalyticsApi"}),"Google Analytics Embed API"),". When ",Object(a.b)("inlineCode",{parentName:"td"},"undefined"),", nothing is rendered.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"viewSelectorId"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"string")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"The ID of the DOM element to render the view selector to.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"onChange"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"(viewId: string) => void")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Called with the selected ",Object(a.b)("inlineCode",{parentName:"td"},"viewId")," whenever the view selection changes. Will be called immediately.")))),Object(a.b)("h3",{id:"return"},"Return"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"void")," - The hook has no return."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"The following example shows use of a view selector to display the selected Google Analytics view ID. "),Object(a.b)("p",null,"This example includes full auth flow as well."),Object(a.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(a.b)(r.a,{mdxType:"UseViewSelectorExample"})),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { useAnalyticsApi, useAuthorize, useSignOut, useViewSelector } from '../../hooks/useViewSelector';\n\nexport function UseViewSelectorExample(props) {\n  const { ready, gapi, authorized, error } = useAnalyticsApi();\n  const [viewId, setViewId] = React.useState();\n  const viewSelectorContainerId = 'view-selector-container';\n  useViewSelector(authorized ? gapi : undefined, viewSelectorContainerId, viewId => setViewId(viewId));\n\n  // Workaround for API limitation - see useAuthorize docs\n  const authDiv = React.useRef(null);\n  const [authorizeCalled, setAuthorizeCalled] = React.useState(false);\n  const hasAuthElements = authDiv.current && authDiv?.current?.children?.length > 0;\n\n  const authorize = useAuthorize(gapi, {\n    clientId: props.clientId,\n    container: 'authorize-container-id',\n  });\n  const signOut = useSignOut(gapi);\n\n  React.useEffect(() => {\n    if (ready && !error && !authorizeCalled) {\n      authorize();\n      setAuthorizeCalled(true);\n    }\n  }, [ready, error, authorizeCalled, authorize]);\n\n  return (\n    <div>\n      {!ready && <div>Loading...</div>}\n      {ready && (\n        <div>\n          {authorized && (\n            <div>\n              <div style={{ fontSize: '200%' }}>\n                View ID: <span style={{ border: 'solid 3px orange', padding: '5px' }}>{viewId}</span>\n              </div>\n              <div id={viewSelectorContainerId} />\n              <div>\n                <button onClick={() => signOut()}>Sign Out</button>\n              </div>\n            </div>\n          )}\n          {!authorized && (\n            <div>\n              <div ref={authDiv} id=\"authorize-container-id\"></div>\n              {!hasAuthElements && <div>🔄 Refresh the page to sign in.</div>}\n            </div>\n          )}\n        </div>\n      )}\n      {error && <div>{error.toString()}</div>}\n    </div>\n  );\n}\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useViewSelector.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-view-selector-mdx-e3c083aedacda27e2a77.js.map