(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{467:function(t,e,i){"use strict";i.r(e);var r=i(62),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"settings-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#settings-api"}},[t._v("#")]),t._v(" Settings API")]),t._v(" "),i("h2",{attrs:{id:"_1-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[t._v("#")]),t._v(" 1. Summary")]),t._v(" "),i("p",[t._v("This specification describes the global settings API endpoints and cross-reference related sub-resources APIs.")]),t._v(" "),i("h2",{attrs:{id:"_2-motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[t._v("#")]),t._v(" 2. Motivation")]),t._v(" "),i("p",[t._v("N/A")]),t._v(" "),i("h2",{attrs:{id:"_3-functional-specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[t._v("#")]),t._v(" 3. Functional Specification")]),t._v(" "),i("h3",{attrs:{id:"_3-1-sub-resource-settings-api-list"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-sub-resource-settings-api-list"}},[t._v("#")]),t._v(" 3.1. Sub Resource Settings API List")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("API Resource")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-displayed-attributes-setting-api.html"}},[t._v("displayed-attributes")])],1),t._v(" "),i("td",[i("code",[t._v("displayedAttributes")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-searchable-attributes-setting-api.html"}},[t._v("searchable-attributes")])],1),t._v(" "),i("td",[i("code",[t._v("searchableAttributes")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-filterable-attributes-setting-api.html"}},[t._v("filterable-attributes")])],1),t._v(" "),i("td",[i("code",[t._v("filterableAttributes")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-sortable-attributes-setting-api.html"}},[t._v("sortable-attributes")])],1),t._v(" "),i("td",[i("code",[t._v("sortableAttributes")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-ranking-rules-setting-api.html"}},[t._v("ranking-rules")])],1),t._v(" "),i("td",[i("code",[t._v("rankingRules")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-stop-words-setting-api.html"}},[t._v("stop-words")])],1),t._v(" "),i("td",[i("code",[t._v("stopWords")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-separators-settings-api.html"}},[t._v("separator-tokens")])],1),t._v(" "),i("td",[i("code",[t._v("separatorTokens")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-separators-settings-api.html"}},[t._v("non-separator-tokens")])],1),t._v(" "),i("td",[i("code",[t._v("nonSeparatorTokens")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-user-dictionary-settings-api.html"}},[t._v("dictionary")])],1),t._v(" "),i("td",[i("code",[t._v("dictionary")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-synonyms-setting-api.html"}},[t._v("synonyms")])],1),t._v(" "),i("td",[i("code",[t._v("synonyms")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0123-distinct-attribute-setting-api.html"}},[t._v("distinct-attribute")])],1),t._v(" "),i("td",[i("code",[t._v("distinctAttribute")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/0117-typo-tolerance-setting-api.html"}},[t._v("typo-tolerance")])],1),t._v(" "),i("td",[i("code",[t._v("typoTolerance")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/157-pagination-setting-api.html"}},[t._v("pagination")])],1),t._v(" "),i("td",[i("code",[t._v("pagination")]),t._v(" sub-resource API endpoints definition")])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/specifications/text/157-faceting-setting-api.html"}},[t._v("faceting")])],1),t._v(" "),i("td",[i("code",[t._v("faceting")]),t._v(" sub-resource API endpoints definition")])])])]),t._v(" "),i("p",[t._v("Each setting is exposed as a sub-resource of the "),i("code",[t._v("indexes/:index_uid/settings")]),t._v(" endpoints. e.g. The ranking rules setting of a Meilisearch index is exposed at "),i("code",[t._v("indexes/:index_uid/settings/ranking-rules")]),t._v(".")]),t._v(" "),i("p",[t._v("Some setting changes cause a complete re-indexing of the documents. See "),i("a",{attrs:{href:"#41-triggering-documents-re-indexing"}},[t._v("4.1. Triggering Documents Re-indexing")]),t._v(".")]),t._v(" "),i("h3",{attrs:{id:"_3-2-api-endpoints-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-api-endpoints-definition"}},[t._v("#")]),t._v(" 3.2. API Endpoints Definition")]),t._v(" "),i("p",[t._v("Manipulate all settings of a Meilisearch index.")]),t._v(" "),i("h4",{attrs:{id:"_3-2-1-get-indexes-index-uid-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-get-indexes-index-uid-settings"}},[t._v("#")]),t._v(" 3.2.1. "),i("code",[t._v("GET")]),t._v(" - "),i("code",[t._v("indexes/:index_uid/settings")])]),t._v(" "),i("p",[t._v("Fetch the settings of a Meilisearch index.")]),t._v(" "),i("h5",{attrs:{id:"_3-2-1-1-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-1-response-definition"}},[t._v("#")]),t._v(" 3.2.1.1. Response Definition")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Field")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Required")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("code",[t._v("displayedAttributes")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("searchableAttributes")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("filterableAttributes")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("sortableAttributes")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("rankingRules")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("stopWords")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("separatorTokens")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("nonSeparatorTokens")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("dictionary")])]),t._v(" "),i("td",[t._v("Array of String")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("synonyms")])]),t._v(" "),i("td",[t._v("Object")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("distinctAttribute")])]),t._v(" "),i("td",[t._v("String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("typoTolerance")])]),t._v(" "),i("td",[t._v("Object")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("pagination")])]),t._v(" "),i("td",[t._v("Object")]),t._v(" "),i("td",[t._v("true")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("faceting")])]),t._v(" "),i("td",[t._v("Object")]),t._v(" "),i("td",[t._v("true")])])])]),t._v(" "),i("p",[t._v("The attributes ordering in the response payload is equivalent to the order described in the table above.")]),t._v(" "),i("h5",{attrs:{id:"_3-2-1-2-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-2-errors"}},[t._v("#")]),t._v(" 3.2.1.2. Errors")]),t._v(" "),i("ul",[i("li",[t._v("🔴 If the requested "),i("code",[t._v("index_uid")]),t._v(" does not exist, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[t._v("index_not_found")]),t._v(" error.")],1)]),t._v(" "),i("h4",{attrs:{id:"_3-2-2-patch-indexes-index-uid-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-patch-indexes-index-uid-settings"}},[t._v("#")]),t._v(" 3.2.2. "),i("code",[t._v("PATCH")]),t._v(" - "),i("code",[t._v("indexes/:index_uid/settings")])]),t._v(" "),i("p",[t._v("Modify the settings of a Meilisearch index.")]),t._v(" "),i("h5",{attrs:{id:"_3-2-2-1-request-payload-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-1-request-payload-definition"}},[t._v("#")]),t._v(" 3.2.2.1. Request Payload Definition")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Field")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Required")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("code",[t._v("displayedAttributes")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("searchableAttributes")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("filterableAttributes")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("sortableAttributes")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("rankingRules")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("stopWords")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("separatorTokens")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("nonSeparatorTokens")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("dictionary")])]),t._v(" "),i("td",[t._v("Array of String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("synonyms")])]),t._v(" "),i("td",[t._v("Object / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("distinctAttribute")])]),t._v(" "),i("td",[t._v("String / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("typoTolerance")])]),t._v(" "),i("td",[t._v("Object / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("pagination")])]),t._v(" "),i("td",[t._v("Object / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("faceting")])]),t._v(" "),i("td",[t._v("Object / "),i("code",[t._v("null")])]),t._v(" "),i("td",[t._v("false")])])])]),t._v(" "),i("ul",[i("li",[t._v("The request payload accepts partial definitions, the value of missing fields will remain unchanged.")]),t._v(" "),i("li",[t._v("The request payload accepts the "),i("code",[t._v("null")]),t._v(" value for any setting, which will reset the setting to its default value.")])]),t._v(" "),i("h5",{attrs:{id:"_3-2-2-2-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-2-response-definition"}},[t._v("#")]),t._v(" 3.2.2.2. Response Definition")]),t._v(" "),i("p",[t._v("When the request is successful, Meilisearch returns the HTTP code "),i("code",[t._v("202 Accepted")]),t._v(". The response's content is the summarized representation of the received asynchronous task.")]),t._v(" "),i("p",[t._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[t._v("Summarized "),i("code",[t._v("task")]),t._v(" Object for "),i("code",[t._v("202 Accepted")])]),t._v(".")],1),t._v(" "),i("h5",{attrs:{id:"_3-2-2-3-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-3-errors"}},[t._v("#")]),t._v(" 3.2.2.3. Errors")]),t._v(" "),i("ul",[i("li",[t._v("🔴 Omitting Content-Type header returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_content_type"}},[t._v("missing_content_type")]),t._v(" error.")],1),t._v(" "),i("li",[t._v("🔴 Sending an empty Content-Type returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[t._v("invalid_content_type")]),t._v(" error.")],1),t._v(" "),i("li",[t._v("🔴 Sending a different Content-Type than "),i("code",[t._v("application/json")]),t._v(" returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[t._v("invalid_content_type")]),t._v(" error.")],1),t._v(" "),i("li",[t._v("🔴 Sending an empty payload returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_payload"}},[t._v("missing_payload")]),t._v(" error.")],1),t._v(" "),i("li",[t._v("🔴 Sending an invalid JSON payload returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#malformed_payload"}},[t._v("malformed_payload")]),t._v(" error.")],1),t._v(" "),i("li",[t._v("🔴 Sending an invalid index uid format for the "),i("code",[t._v(":index_uid")]),t._v(" path parameter returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_index_uid"}},[t._v("invalid_index_uid")]),t._v(" error.")],1)]),t._v(" "),i("p",[t._v("Errors related to a sub-resource are described in its respective specification. See "),i("a",{attrs:{href:"#31-sub-resource-settings-api-list"}},[t._v("3.1. Sub Resource Settings API List")]),t._v(".")]),t._v(" "),i("h6",{attrs:{id:"_3-2-2-3-1-async-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-3-1-async-errors"}},[t._v("#")]),t._v(" 3.2.2.3.1. Async Errors")]),t._v(" "),i("ul",[i("li",[t._v("🔴 When Meilisearch is secured, if the API Key do not have the "),i("code",[t._v("indexes.create")]),t._v(" action defined, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[t._v("index_not_found")]),t._v(" error in the related asynchronous "),i("code",[t._v("task")]),t._v(" resource. See "),i("a",{attrs:{href:"#3222-response-definition"}},[t._v("3.2.2.2. Response Definition")]),t._v(".")],1)]),t._v(" "),i("blockquote",[i("p",[t._v("Otherwise, Meilisearch will create the index in a lazy way. See "),i("a",{attrs:{href:"#3224-lazy-index-creation"}},[t._v("3.2.2.4. Lazy Index Creation")]),t._v(".")])]),t._v(" "),i("h5",{attrs:{id:"_3-2-2-4-lazy-index-creation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-4-lazy-index-creation"}},[t._v("#")]),t._v(" 3.2.2.4. Lazy Index Creation")]),t._v(" "),i("p",[t._v("If the requested "),i("code",[t._v("index_uid")]),t._v(" does not exist, and the authorization layer allows it (See "),i("a",{attrs:{href:"#32231-async-errors"}},[t._v("3.2.2.3.1. Async Errors")]),t._v("), Meilisearch will create the index when the related asynchronous task resource is executed. See "),i("a",{attrs:{href:"#3222-response-definition"}},[t._v("3.2.2.2. Response Definition")]),t._v(".")]),t._v(" "),i("h4",{attrs:{id:"_3-2-3-delete-indexes-index-uid-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-delete-indexes-index-uid-settings"}},[t._v("#")]),t._v(" 3.2.3. "),i("code",[t._v("DELETE")]),t._v(" - "),i("code",[t._v("indexes/:index_uid/settings")])]),t._v(" "),i("p",[t._v("Reset the settings of a Meilisearch index to the default values.")]),t._v(" "),i("h5",{attrs:{id:"_3-2-3-1-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-1-response-definition"}},[t._v("#")]),t._v(" 3.2.3.1. Response Definition")]),t._v(" "),i("p",[t._v("When the request is in a successful state, Meilisearch returns the HTTP code "),i("code",[t._v("202 Accepted")]),t._v(". The response's content is the summarized representation of the received asynchronous task.")]),t._v(" "),i("p",[t._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[t._v("Summarized "),i("code",[t._v("task")]),t._v(" Object for "),i("code",[t._v("202 Accepted")])]),t._v(".")],1),t._v(" "),i("h5",{attrs:{id:"_3-2-3-2-default-values"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-2-default-values"}},[t._v("#")]),t._v(" 3.2.3.2. Default Values")]),t._v(" "),i("p",[t._v("See "),i("a",{attrs:{href:"#31-sub-settings-api-resource-list"}},[t._v("3.1. Sub Settings API Resource List")]),t._v(" to get the default values of each setting.")]),t._v(" "),i("h5",{attrs:{id:"_3-2-3-3-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-3-errors"}},[t._v("#")]),t._v(" 3.2.3.3. Errors")]),t._v(" "),i("ul",[i("li",[t._v("🔴 Sending an invalid index uid format for the "),i("code",[t._v(":index_uid")]),t._v(" path parameter returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_index_uid"}},[t._v("invalid_index_uid")]),t._v(" error.")],1)]),t._v(" "),i("p",[t._v("Errors related to a sub-resource are described in its respective specification. See "),i("a",{attrs:{href:"#31-sub-resource-settings-api-list"}},[t._v("3.1. Sub Resource Settings API List")]),t._v(".")]),t._v(" "),i("h6",{attrs:{id:"_3-2-3-3-1-asynchronous-index-not-found-error"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-3-1-asynchronous-index-not-found-error"}},[t._v("#")]),t._v(" 3.2.3.3.1. Asynchronous Index Not Found Error")]),t._v(" "),i("ul",[i("li",[t._v("🔴 If the requested "),i("code",[t._v("index_uid")]),t._v(" does not exist, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[t._v("index_not_found")]),t._v(" error in the related async "),i("code",[t._v("task")]),t._v(" resource. See "),i("a",{attrs:{href:"#3231-response-definition"}},[t._v("3.2.3.1. Response Definition")]),t._v(".")],1)]),t._v(" "),i("h4",{attrs:{id:"_3-2-4-general-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-general-errors"}},[t._v("#")]),t._v(" 3.2.4. General Errors")]),t._v(" "),i("p",[t._v("These errors apply to all endpoints described here.")]),t._v(" "),i("h5",{attrs:{id:"_3-2-4-1-auth-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-1-auth-errors"}},[t._v("#")]),t._v(" 3.2.4.1 Auth Errors")]),t._v(" "),i("p",[t._v("The auth layer can return the following errors if Meilisearch is secured (a master-key is defined).")]),t._v(" "),i("ul",[i("li",[t._v("🔴 Accessing this route without the "),i("code",[t._v("Authorization")]),t._v(" header returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[t._v("missing_authorization_header")]),t._v(" error.")],1),t._v(" "),i("li",[t._v("🔴 Accessing this route with a key that does not have permissions (i.e. other than the master-key) returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[t._v("invalid_api_key")]),t._v(" error.")],1)]),t._v(" "),i("h2",{attrs:{id:"_4-technical-details"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-details"}},[t._v("#")]),t._v(" 4. Technical Details")]),t._v(" "),i("h3",{attrs:{id:"_4-1-triggering-documents-re-indexing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-triggering-documents-re-indexing"}},[t._v("#")]),t._v(" 4.1. Triggering Documents Re-indexing")]),t._v(" "),i("p",[t._v("Meilisearch favors search speed and makes a trade-off on indexing speed by computing internal data structures to get search results as fast as possible.")]),t._v(" "),i("p",[t._v("Changing any of the following index settings will cause documents to be re-indexed:")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("searchableAttributes")])]),t._v(" "),i("li",[i("code",[t._v("filterableAttributes")])]),t._v(" "),i("li",[i("code",[t._v("sortableAttributes")])]),t._v(" "),i("li",[i("code",[t._v("distinctAttribute")])]),t._v(" "),i("li",[i("code",[t._v("stopWords")])]),t._v(" "),i("li",[i("code",[t._v("separatorTokens")])]),t._v(" "),i("li",[i("code",[t._v("nonSeparatorTokens")])]),t._v(" "),i("li",[i("code",[t._v("dictionary")])])]),t._v(" "),i("h2",{attrs:{id:"_5-future-possibilities"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-future-possibilities"}},[t._v("#")]),t._v(" 5. Future Possibilities")]),t._v(" "),i("p",[t._v("n/a")])])}),[],!1,null,null,null);e.default=s.exports}}]);