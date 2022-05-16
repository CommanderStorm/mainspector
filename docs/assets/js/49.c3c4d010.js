(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{473:function(t,e,s){"use strict";s.r(e);var a=s(62),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stats-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stats-api"}},[t._v("#")]),t._v(" Stats API")]),t._v(" "),s("h2",{attrs:{id:"_1-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[t._v("#")]),t._v(" 1. Summary")]),t._v(" "),s("p",[t._v("This specification describes the stats API endpoints.")]),t._v(" "),s("p",[t._v("Stats routes give information and metrics about indexes and the Meilisearch database.")]),t._v(" "),s("h2",{attrs:{id:"_2-motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[t._v("#")]),t._v(" 2. Motivation")]),t._v(" "),s("p",[t._v("N/A")]),t._v(" "),s("h2",{attrs:{id:"_3-functional-specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[t._v("#")]),t._v(" 3. Functional Specification")]),t._v(" "),s("h3",{attrs:{id:"_3-1-api-endpoints-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-api-endpoints-definition"}},[t._v("#")]),t._v(" 3.1. API Endpoints Definition")]),t._v(" "),s("p",[t._v("See statistics of Meilisearch indexes.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#311-get---indexesindexuidstats"}},[t._v("3.1.1. "),s("code",[t._v("GET")]),t._v(" - "),s("code",[t._v("indexes/:index_uid/stats")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#312-get---stats"}},[t._v("3.1.2. "),s("code",[t._v("GET")]),t._v(" - "),s("code",[t._v("stats")])])])]),t._v(" "),s("h4",{attrs:{id:"_3-1-1-get-indexes-index-uid-stats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-get-indexes-index-uid-stats"}},[t._v("#")]),t._v(" 3.1.1. "),s("code",[t._v("GET")]),t._v(" - "),s("code",[t._v("indexes/:index_uid/stats")])]),t._v(" "),s("p",[t._v("Get stats of an index.")]),t._v(" "),s("h5",{attrs:{id:"_3-1-1-1-path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-1-path-parameters"}},[t._v("#")]),t._v(" 3.1.1.1. Path Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("true")])])])]),t._v(" "),s("h6",{attrs:{id:"_3-1-1-1-1-index-uid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-1-1-index-uid"}},[t._v("#")]),t._v(" 3.1.1.1.1. "),s("code",[t._v("index_uid")])]),t._v(" "),s("ul",[s("li",[t._v("Type: String")]),t._v(" "),s("li",[t._v("Required: True")])]),t._v(" "),s("p",[t._v("Unique identifier of an index.")]),t._v(" "),s("h5",{attrs:{id:"_3-1-1-2-request-payload-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-2-request-payload-definition"}},[t._v("#")]),t._v(" 3.1.1.2. Request Payload Definition")]),t._v(" "),s("p",[t._v("N/A")]),t._v(" "),s("h5",{attrs:{id:"_3-1-1-3-response-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-3-response-definition"}},[t._v("#")]),t._v(" 3.1.1.3. Response Definition")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("numberOfDocuments")])]),t._v(" "),s("td",[t._v("Integer")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("isIndexing")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("fieldDistribution")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("true")])])])]),t._v(" "),s("h6",{attrs:{id:"_3-1-1-3-1-numberofdocuments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-3-1-numberofdocuments"}},[t._v("#")]),t._v(" 3.1.1.3.1. "),s("code",[t._v("numberOfDocuments")])]),t._v(" "),s("ul",[s("li",[t._v("Type: Integer")]),t._v(" "),s("li",[t._v("Required: True")])]),t._v(" "),s("p",[t._v("The total number of documents in the index.")]),t._v(" "),s("h6",{attrs:{id:"_3-1-1-3-2-isindexing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-3-2-isindexing"}},[t._v("#")]),t._v(" 3.1.1.3.2. "),s("code",[t._v("isIndexing")])]),t._v(" "),s("ul",[s("li",[t._v("Type: Boolean")]),t._v(" "),s("li",[t._v("Required: True")])]),t._v(" "),s("p",[t._v("If true, it indicates that the index is processing documents.")]),t._v(" "),s("h6",{attrs:{id:"_3-1-1-3-3-fielddistribution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-3-3-fielddistribution"}},[t._v("#")]),t._v(" 3.1.1.3.3. "),s("code",[t._v("fieldDistribution")])]),t._v(" "),s("ul",[s("li",[t._v("Type: Object")]),t._v(" "),s("li",[t._v("Required: True")])]),t._v(" "),s("p",[t._v("Lists every field in the index and the total number of documents in the index containing that field.")]),t._v(" "),s("p",[s("code",[t._v("fieldDistribution")]),t._v(" is not impacted by searchableAttributes or displayedAttributes. If one of the fields is not displayed or searchable, it will still be displayed in the "),s("code",[t._v("fieldDistribution")]),t._v(" object.")]),t._v(" "),s("h5",{attrs:{id:"_3-1-1-4-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-4-errors"}},[t._v("#")]),t._v(" 3.1.1.4. Errors")]),t._v(" "),s("ul",[s("li",[t._v("🔴 If the requested "),s("code",[t._v("index_uid")]),t._v(" does not exist, the API returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[t._v("index_not_found")]),t._v(" error.")],1)]),t._v(" "),s("h4",{attrs:{id:"_3-1-2-get-stats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-get-stats"}},[t._v("#")]),t._v(" 3.1.2. "),s("code",[t._v("GET")]),t._v(" - "),s("code",[t._v("stats")])]),t._v(" "),s("p",[t._v("Get stats for all indexes.")]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-1-path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-1-path-parameters"}},[t._v("#")]),t._v(" 3.1.2.1. Path Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("true")])])])]),t._v(" "),s("h6",{attrs:{id:"_3-1-2-1-1-index-uid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-1-1-index-uid"}},[t._v("#")]),t._v(" 3.1.2.1.1. "),s("code",[t._v("index_uid")])]),t._v(" "),s("ul",[s("li",[t._v("Type: String")]),t._v(" "),s("li",[t._v("Required: True")])]),t._v(" "),s("p",[t._v("Unique identifier of an index.")]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-2-response-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-2-response-definition"}},[t._v("#")]),t._v(" 3.1.2.2. Response Definition")]),t._v(" "),s("p",[t._v("In addition to all fields returned by "),s("a",{attrs:{href:"#311-get---indexesindexuidstats"}},[t._v("3.1.1. "),s("code",[t._v("GET")]),t._v(" - "),s("code",[t._v("indexes/:index_uid/stats")])]),t._v(", this route returns the instance-level fields.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("databaseSize")])]),t._v(" "),s("td",[t._v("Integer")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lastUpdate")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("indexes")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("true")])])])]),t._v(" "),s("h6",{attrs:{id:"_3-1-2-2-1-databasesize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-2-1-databasesize"}},[t._v("#")]),t._v(" 3.1.2.2.1. "),s("code",[t._v("databaseSize")])]),t._v(" "),s("ul",[s("li",[t._v("Type: Integer")]),t._v(" "),s("li",[t._v("Required: True")])]),t._v(" "),s("p",[t._v("Size of the database in bytes. It represents the size on the disk of all the indexes.")]),t._v(" "),s("h6",{attrs:{id:"_3-1-2-2-2-lastupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-2-2-lastupdate"}},[t._v("#")]),t._v(" 3.1.2.2.2. "),s("code",[t._v("lastUpdate")])]),t._v(" "),s("ul",[s("li",[t._v("Type: String")]),t._v(" "),s("li",[t._v("Required: True")])]),t._v(" "),s("p",[t._v("The last update date time when the index was updated.")]),t._v(" "),s("p",[t._v("Represented wih the RFC 3339 format.")]),t._v(" "),s("h6",{attrs:{id:"_3-1-2-2-3-indexes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-2-3-indexes"}},[t._v("#")]),t._v(" 3.1.2.2.3. "),s("code",[t._v("indexes")])]),t._v(" "),s("ul",[s("li",[t._v("Type: Object")]),t._v(" "),s("li",[t._v("Required: True")])]),t._v(" "),s("p",[t._v("An object representing the statistics for each index found in the database.")]),t._v(" "),s("p",[t._v("e.g.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"databaseSize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("447819776")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-15T11:15:22.092896Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"indexes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"movies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numberOfDocuments"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19654")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isIndexing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fieldDistribution"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19654")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19654")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19654")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19654")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19654")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("See "),s("a",{attrs:{href:"#3113-response-definition"}},[t._v("3.1.1.3. Response Definition")]),t._v(" section for more details.")]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-3-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-3-errors"}},[t._v("#")]),t._v(" 3.1.2.3. Errors")]),t._v(" "),s("ul",[s("li",[t._v("🔴 If the requested "),s("code",[t._v("index_uid")]),t._v(" does not exist, the API returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[t._v("index_not_found")]),t._v(" error.")],1)]),t._v(" "),s("h4",{attrs:{id:"_3-1-3-general-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-general-errors"}},[t._v("#")]),t._v(" 3.1.3. General Errors")]),t._v(" "),s("p",[t._v("These errors apply to all endpoints described here.")]),t._v(" "),s("h5",{attrs:{id:"_3-1-3-1-auth-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-1-auth-errors"}},[t._v("#")]),t._v(" 3.1.3.1 Auth Errors")]),t._v(" "),s("p",[t._v("The auth layer can return the following errors if Meilisearch is secured (a master-key is defined).")]),t._v(" "),s("ul",[s("li",[t._v("🔴 Accessing this route without the "),s("code",[t._v("Authorization")]),t._v(" header returns a "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[t._v("missing_authorization_header")]),t._v(" error.")],1),t._v(" "),s("li",[t._v("🔴 Accessing this route with a key that does not have permissions (i.e. other than the master-key) returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[t._v("invalid_api_key")]),t._v(" error.")],1)]),t._v(" "),s("h2",{attrs:{id:"_4-technical-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-details"}},[t._v("#")]),t._v(" 4. Technical Details")]),t._v(" "),s("p",[t._v("N/A")]),t._v(" "),s("h2",{attrs:{id:"_5-future-possibilities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-future-possibilities"}},[t._v("#")]),t._v(" 5. Future Possibilities")]),t._v(" "),s("ul",[s("li",[t._v("Rename "),s("code",[t._v("lastUpdate")]),t._v(" to "),s("code",[t._v("updatedAt")])]),t._v(" "),s("li",[t._v("Reconsider the existence of "),s("code",[t._v("isIndexing")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);