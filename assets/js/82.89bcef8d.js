(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{415:function(e,t,s){"use strict";s.r(t);var r=s(43),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"back-pressure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#back-pressure"}},[e._v("#")]),e._v(" Back-pressure")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#context"}},[e._v("Context")])]),s("li",[s("a",{attrs:{href:"#patterns"}},[e._v("Patterns")])]),s("li",[s("a",{attrs:{href:"#solutions"}},[e._v("Solutions")]),s("ul",[s("li",[s("a",{attrs:{href:"#rx"}},[e._v("Rx")])])])]),s("li",[s("a",{attrs:{href:"#conclusions"}},[e._v("Conclusions")])]),s("li",[s("a",{attrs:{href:"#references"}},[e._v("References")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),s("p",[e._v("Producer-consumer model is very helpful to decouple the system components. However, the situation is quite often in which producer produces jobs more rapidly than consumers can consume them. It's a challenge to manage a large number of unconsumed jobs.")]),e._v(" "),s("p",[e._v("Back-pressure is one of the strategies that can mitigate the problem of quick-producing meeting slow-consuming.")]),e._v(" "),s("h2",{attrs:{id:"patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[e._v("#")]),e._v(" Patterns")]),e._v(" "),s("p",[e._v("Back-pressure is a feedback mechanism that allows systems to sense the burst job load and gracefully respond to caller.")]),e._v(" "),s("p",[e._v("Some common-seen strategies includes:")]),e._v(" "),s("ul",[s("li",[e._v("Reject the job producing and cascade all the way up to user layer. The throttling algorithm can be "),s("code",[e._v("sample")]),e._v(", "),s("code",[e._v("throttle-last")]),e._v(", "),s("code",[e._v("throttle-first")]),e._v(", etc.")]),e._v(" "),s("li",[e._v("Automatically spawn other resources to distribute the load.")]),e._v(" "),s("li",[e._v("Respond with "),s("code",[e._v("503 Service Unavailable")]),e._v(" when Web / RESTful Service is under heavy load.")])]),e._v(" "),s("h2",{attrs:{id:"solutions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[e._v("#")]),e._v(" Solutions")]),e._v(" "),s("p",[e._v("The system need to degrade itself when under heavy load. Back-pressure can help way from such case.")]),e._v(" "),s("h3",{attrs:{id:"rx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rx"}},[e._v("#")]),e._v(" Rx")]),e._v(" "),s("p",[e._v("Rx Observables are responsive objects listening on queue-alike data structures. They could be overwhelmed by other fast-producing Observables.")]),e._v(" "),s("p",[e._v("See more "),s("a",{attrs:{href:"https://github.com/ReactiveX/RxJava/wiki/Backpressure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Backpressure throttling algorithm"),s("OutboundLink")],1),e._v(" on how to fine-tune the parameters of Rx operators.")]),e._v(" "),s("h2",{attrs:{id:"conclusions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),s("p",[e._v("Applying back-pressure is one effective technique to handle high-load. We tend to handle already accepted requests and transactions first, and reject those can't be handled. If you have many components and the producing-consuming speed might mismatch, consider back-pressure.")]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://dzone.com/articles/applying-back-pressure-when",target:"_blank",rel:"noopener noreferrer"}},[e._v("Applying Back Pressure When Overloaded"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.reactivemanifesto.org/glossary#Back-Pressure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reactive Manifesto"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);