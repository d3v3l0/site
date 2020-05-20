(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{417:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"asgi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asgi"}},[t._v("#")]),t._v(" ASGI")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#context"}},[t._v("Context")])]),e("li",[e("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),e("li",[e("a",{attrs:{href:"#asgi-v-s-wsgi"}},[t._v("ASGI v/s WSGI")]),e("ul",[e("li",[e("a",{attrs:{href:"#asgi-wsgi"}},[t._v("ASGI <=> WSGI")])])])]),e("li",[e("a",{attrs:{href:"#websocket"}},[t._v("WebSocket")])]),e("li",[e("a",{attrs:{href:"#two-callable"}},[t._v("Two-Callable")])]),e("li",[e("a",{attrs:{href:"#conclusions"}},[t._v("Conclusions")])]),e("li",[e("a",{attrs:{href:"#references"}},[t._v("References")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("p",[t._v("WSGI is the de facto standard interface in Python Web Programming around web servers, frameworks, and applications.\nHowever, it sticks into synchronous programming and makes itself hard to support new protocols like WebSocket.")]),t._v(" "),e("p",[t._v("ASGI is a successor of WSGI. Its goal is to provide a unified interface for asynchronous programming in Python world.")]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scope"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scope "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scope\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__call__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" send"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        event "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" receive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" send"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"websocket.send"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Unlike interface "),e("code",[t._v("app(env, start_response)")]),t._v(" in WSGI, now in ASGI it has such form: "),e("code",[t._v("app(scope)(send, receive)")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("scope")]),t._v(" contains details about incoming requests.")]),t._v(" "),e("li",[e("code",[t._v("app(scope)")]),t._v(" returns a coroutine callable for future data handling.")]),t._v(" "),e("li",[e("code",[t._v("send")]),t._v(" and "),e("code",[t._v("receive")]),t._v(" are two awaitable functions that handling incoming events and outgoing events.")]),t._v(" "),e("li",[e("code",[t._v("event")]),t._v(" is a dict containing incoming events.")])]),t._v(" "),e("h2",{attrs:{id:"asgi-v-s-wsgi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asgi-v-s-wsgi"}},[t._v("#")]),t._v(" ASGI v/s WSGI")]),t._v(" "),e("p",[t._v("ASGI is a superset of WSGI, that is, ASGI can handle more cases than WSGI.")]),t._v(" "),e("p",[t._v("Part of the HTTP design of ASGI is to align to WSGI specification, which makes it possible that some users want to run WSGI applications in ASGI servers.\nMost WSGI data in "),e("code",[t._v("environ")]),t._v(" have corresponding data in ASGI "),e("code",[t._v("scope")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"asgi-wsgi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asgi-wsgi"}},[t._v("#")]),t._v(" ASGI "),e("code",[t._v("<=>")]),t._v(" WSGI")]),t._v(" "),e("p",[t._v("The library "),e("code",[t._v("asgiref")]),t._v(" provides WSGI-to-ASGI adaptor. It has below usage.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("asgi_application "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WsgiToAsgi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wsgi_application"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Under the hood, "),e("code",[t._v("wsgi_application")]),t._v(" is running in synchronous thread pools.  After the transformation, the "),e("code",[t._v("asgi_application")]),t._v(" turns to a two-callable object.")]),t._v(" "),e("p",[t._v("The WSGI-to-ASGI adaptor is incompatible in some instances like file handling due to the fundamental difference of how I/O is performed. However, something is better than nothing.")]),t._v(" "),e("h2",{attrs:{id:"websocket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),e("p",[t._v("ASGI splits the API into two callables, one for when the connection is established, the other one for when the event comes.\nSuch model naturally fits the WebSocket protocol.")]),t._v(" "),e("ul",[e("li",[t._v("When the client initially opens a connection to the ASGI server, the ASGI server maintains the connection per se as "),e("code",[t._v("scope")]),t._v(".")]),t._v(" "),e("li",[t._v("When the client communicates with the ASGI server, the ASGI server maintains the communication per se as "),e("code",[t._v("receive")]),t._v(" and "),e("code",[t._v("send")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"two-callable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#two-callable"}},[t._v("#")]),t._v(" Two-Callable")]),t._v(" "),e("p",[t._v("You might be wondering why ASGI has to use two-callable API - it's less straightforward than single-callable API anyway.")]),t._v(" "),e("p",[t._v("My explanation is that in the essence of asynchronous programming it's all about "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Lazy_evaluation",target:"_blank",rel:"noopener noreferrer"}},[t._v("lazy evaluation"),e("OutboundLink")],1),t._v(". We implement lazy evaluation by wrapping the logic into a callable and evaluate later.")]),t._v(" "),e("p",[t._v("The first callable is not an asynchronous function at all. It's the similar thing like WSGI app.\nThe extra callable reflects the awkward (but practical) thinking of asynchronous programming. It must not contain any blocking calls.")]),t._v(" "),e("p",[t._v("Such design allows the data being sent and received at any time and hence supports the asynchronous programming.")]),t._v(" "),e("h2",{attrs:{id:"conclusions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[t._v("#")]),t._v(" Conclusions")]),t._v(" "),e("p",[t._v("ASGI is the next kin of WSGI. The specification defines a two-callable API in between web servers and asynchronous web applications. Its primary goal is to support HTTP, WebSocket, and more web standard protocols.")]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://asgi.readthedocs.io/en/latest/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASGI Introduction"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);