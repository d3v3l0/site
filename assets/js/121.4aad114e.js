(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{450:function(e,a,t){"use strict";t.r(a);var s=t(43),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"the-data-structure-of-numpy-arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-data-structure-of-numpy-arrays"}},[e._v("#")]),e._v(" The Data Structure Of NumPy Arrays")]),e._v(" "),t("p",[e._v("A NumPy array is comprised of a data buffer and some metadata. It's unlike a Python list, but more like a C-style array.")]),e._v(" "),t("p",[e._v("The data buffer, as you might guess, is just a contiguous block of memory having fixed number of data items. All the data items are of the same type. The metadata describes how to interpret the data buffer, such as the size of bytes and the dtype for each data item, the number of dimensions, the size of each dimension, the distance between data items for each dimension (a.k.a, stride), the byte order, etc.")]),e._v(" "),t("p",[e._v("As described in the below diagram, a NumPy array object contains a "),t("code",[e._v("buf")]),e._v(" and some metadata, the former of which is a pointer to the actual data buffer, a contiguous block of memory.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/static/images/NumPy-Array-Basic.svg",alt:"NumPy Aray Basic"}})]),e._v(" "),t("p",[e._v('Such a decision improves the performance. It allows sharing the same data buffer, yet derives a different array by presenting a new view with different metadata (e.g., strides, byte order, shape, etc). This technique is called "views". We can have different views of a same data buffer, each of which becomes a new array object. Creating such an object is faster than a full copy. Many operations in NumPy, such as slicing, transposing, are merely manipulating shapes and strides; the data buffer remains intact.')])])}),[],!1,null,null,null);a.default=r.exports}}]);