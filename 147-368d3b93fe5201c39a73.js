webpackJsonp([147],{

/***/ "./node_modules/eslint1/index.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports={eslint:__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/eslint.js"),sourceCode:__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/util/source-code.js"),rules:__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/rules.js")};

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseCreate.js":
/***/ function(module, exports, __webpack_require__) {

	var isObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObject.js"),objectCreate=Object.create,baseCreate=function(){function e(){}return function(t){if(!isObject(t))return{};if(objectCreate)return objectCreate(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();module.exports=baseCreate;

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/util/estraverse.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function installKeys(e){for(var r in e)e.hasOwnProperty(r)&&(estraverse.Syntax[r]=r,e[r]&&(estraverse.VisitorKeys[r]=e[r]))}var estraverse=__webpack_require__("./node_modules/eslint1/node_modules/estraverse/estraverse.js"),jsxKeys=__webpack_require__("./node_modules/estraverse-fb/keys.js"),experimentalKeys={ExperimentalRestProperty:["argument"],ExperimentalSpreadProperty:["argument"]};installKeys(jsxKeys),installKeys(experimentalKeys),module.exports=estraverse;

/***/ },

/***/ "./node_modules/eslint1/node_modules/estraverse/estraverse.js":
/***/ function(module, exports, __webpack_require__) {

	!function e(t){"use strict";function n(){}function r(e){var t,n,i={};for(t in e)e.hasOwnProperty(t)&&(n=e[t],"object"==typeof n&&null!==n?i[t]=r(n):i[t]=n);return i}function i(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function o(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?r=n:(i=o+1,r-=n+1);return i}function a(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?(i=o+1,r-=n+1):r=n;return i}function s(e,t){var n,r,i,o=b(t);for(r=0,i=o.length;r<i;r+=1)n=o[r],e[n]=t[n];return e}function l(e,t){this.parent=e,this.key=t}function p(e,t,n,r){this.node=e,this.path=t,this.wrap=n,this.ref=r}function c(){}function u(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function f(e,t){return(e===_.ObjectExpression||e===_.ObjectPattern)&&"properties"===t}function h(e,t){var n=new c;return n.traverse(e,t)}function m(e,t){var n=new c;return n.replace(e,t)}function d(e,t){var n;return n=o(t,function(t){return t.range[0]>e.range[0]}),e.extendedRange=[e.range[0],e.range[1]],n!==t.length&&(e.extendedRange[1]=t[n].range[0]),n-=1,n>=0&&(e.extendedRange[0]=t[n].range[1]),e}function y(e,t,n){var i,o,a,s,l=[];if(!e.range)throw new Error("attachComments needs range information");if(!n.length){if(t.length){for(a=0,o=t.length;a<o;a+=1)i=r(t[a]),i.extendedRange=[0,e.range[0]],l.push(i);e.leadingComments=l}return e}for(a=0,o=t.length;a<o;a+=1)l.push(d(r(t[a]),n));return s=0,h(e,{enter:function(e){for(var t;s<l.length&&(t=l[s],!(t.extendedRange[1]>e.range[0]));)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?x.Break:l[s].extendedRange[0]>e.range[1]?x.Skip:void 0}}),s=0,h(e,{leave:function(e){for(var t;s<l.length&&(t=l[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?x.Break:l[s].extendedRange[0]>e.range[1]?x.Skip:void 0}}),e}var _,g,x,E,S,b,k,v,w;return g=Array.isArray,g||(g=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),n(i),n(a),S=Object.create||function(){function e(){}return function(t){return e.prototype=t,new e}}(),b=Object.keys||function(e){var t,n=[];for(t in e)n.push(t);return n},_={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},E={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},k={},v={},w={},x={Break:k,Skip:v,Remove:w},l.prototype.replace=function(e){this.parent[this.key]=e},l.prototype.remove=function(){return g(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},c.prototype.path=function(){function e(e,t){if(g(t))for(r=0,i=t.length;r<i;++r)e.push(t[r]);else e.push(t)}var t,n,r,i,o,a;if(!this.__current.path)return null;for(o=[],t=2,n=this.__leavelist.length;t<n;++t)a=this.__leavelist[t],e(o,a.path);return e(o,this.__current.path),o},c.prototype.type=function(){var e=this.current();return e.type||this.__current.wrap},c.prototype.parents=function(){var e,t,n;for(n=[],e=1,t=this.__leavelist.length;e<t;++e)n.push(this.__leavelist[e].node);return n},c.prototype.current=function(){return this.__current.node},c.prototype.__execute=function(e,t){var n,r;return r=void 0,n=this.__current,this.__current=t,this.__state=null,e&&(r=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=n,r},c.prototype.notify=function(e){this.__state=e},c.prototype.skip=function(){this.notify(v)},c.prototype.break=function(){this.notify(k)},c.prototype.remove=function(){this.notify(w)},c.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,"iteration"===t.fallback?this.__fallback=b:"function"==typeof t.fallback&&(this.__fallback=t.fallback),this.__keys=E,t.keys&&(this.__keys=s(S(this.__keys),t.keys))},c.prototype.traverse=function(e,t){var n,r,i,o,a,s,l,c,h,m,d,y;for(this.__initialize(e,t),y={},n=this.__worklist,r=this.__leavelist,n.push(new p(e,null,null,null)),r.push(new p(null,null,null,null));n.length;)if(i=n.pop(),i!==y){if(i.node){if(s=this.__execute(t.enter,i),this.__state===k||s===k)return;if(n.push(y),r.push(i),this.__state===v||s===v)continue;if(o=i.node,a=o.type||i.wrap,m=this.__keys[a],!m){if(!this.__fallback)throw new Error("Unknown node type "+a+".");m=this.__fallback(o)}for(c=m.length;(c-=1)>=0;)if(l=m[c],d=o[l])if(g(d)){for(h=d.length;(h-=1)>=0;)if(d[h]){if(f(a,m[c]))i=new p(d[h],[l,h],"Property",null);else{if(!u(d[h]))continue;i=new p(d[h],[l,h],null,null)}n.push(i)}}else u(d)&&n.push(new p(d,l,null,null))}}else if(i=r.pop(),s=this.__execute(t.leave,i),this.__state===k||s===k)return},c.prototype.replace=function(e,t){function n(e){var t,n,i,o;if(e.ref.remove())for(n=e.ref.key,o=e.ref.parent,t=r.length;t--;)if(i=r[t],i.ref&&i.ref.parent===o){if(i.ref.key<n)break;--i.ref.key}}var r,i,o,a,s,c,h,m,d,y,_,x,E;for(this.__initialize(e,t),_={},r=this.__worklist,i=this.__leavelist,x={root:e},c=new p(e,null,null,new l(x,"root")),r.push(c),i.push(c);r.length;)if(c=r.pop(),c!==_){if(s=this.__execute(t.enter,c),void 0!==s&&s!==k&&s!==v&&s!==w&&(c.ref.replace(s),c.node=s),this.__state!==w&&s!==w||(n(c),c.node=null),this.__state===k||s===k)return x.root;if(o=c.node,o&&(r.push(_),i.push(c),this.__state!==v&&s!==v)){if(a=o.type||c.wrap,d=this.__keys[a],!d){if(!this.__fallback)throw new Error("Unknown node type "+a+".");d=this.__fallback(o)}for(h=d.length;(h-=1)>=0;)if(E=d[h],y=o[E])if(g(y)){for(m=y.length;(m-=1)>=0;)if(y[m]){if(f(a,d[h]))c=new p(y[m],[E,m],"Property",new l(y,m));else{if(!u(y[m]))continue;c=new p(y[m],[E,m],null,new l(y,m))}r.push(c)}}else u(y)&&r.push(new p(y,E,null,new l(o,E)))}}else if(c=i.pop(),s=this.__execute(t.leave,c),void 0!==s&&s!==k&&s!==v&&s!==w&&c.ref.replace(s),this.__state!==w&&s!==w||n(c),this.__state===k||s===k)return x.root;return x.root},t.version=__webpack_require__("./node_modules/eslint1/node_modules/estraverse/package.json").version,t.Syntax=_,t.traverse=h,t.replace=m,t.attachComments=y,t.VisitorKeys=E,t.VisitorOption=x,t.Controller=c,t.cloneEnvironment=function(){return e({})},t}(exports);

/***/ },

/***/ "./node_modules/eslint1/node_modules/estraverse/package.json":
/***/ function(module, exports) {

	module.exports = {
		"name": "estraverse",
		"description": "ECMAScript JS AST traversal functions",
		"homepage": "https://github.com/estools/estraverse",
		"main": "estraverse.js",
		"version": "4.2.0",
		"engines": {
			"node": ">=0.10.0"
		},
		"maintainers": [
			{
				"name": "Yusuke Suzuki",
				"email": "utatane.tea@gmail.com",
				"web": "http://github.com/Constellation"
			}
		],
		"repository": {
			"type": "git",
			"url": "http://github.com/estools/estraverse.git"
		},
		"devDependencies": {
			"babel-preset-es2015": "^6.3.13",
			"babel-register": "^6.3.13",
			"chai": "^2.1.1",
			"espree": "^1.11.0",
			"gulp": "^3.8.10",
			"gulp-bump": "^0.2.2",
			"gulp-filter": "^2.0.0",
			"gulp-git": "^1.0.1",
			"gulp-tag-version": "^1.2.1",
			"jshint": "^2.5.6",
			"mocha": "^2.1.0"
		},
		"license": "BSD-2-Clause",
		"scripts": {
			"test": "npm run-script lint && npm run-script unit-test",
			"lint": "jshint estraverse.js",
			"unit-test": "mocha --compilers js:babel-register"
		}
	};

/***/ },

/***/ "./node_modules/estraverse-fb/keys.js":
/***/ function(module, exports) {

	var unprefixedKeys={Identifier:[],NamespacedName:["namespace","name"],MemberExpression:["object","property"],EmptyExpression:[],ExpressionContainer:["expression"],Element:["openingElement","closingElement","children"],ClosingElement:["name"],OpeningElement:["name","attributes"],Attribute:["name","value"],Text:null,SpreadAttribute:["argument"]},flowKeys={Type:[],AnyTypeAnnotation:[],VoidTypeAnnotation:[],NumberTypeAnnotation:[],StringTypeAnnotation:[],StringLiteralTypeAnnotation:["value","raw"],BooleanTypeAnnotation:[],TypeAnnotation:["typeAnnotation"],NullableTypeAnnotation:["typeAnnotation"],FunctionTypeAnnotation:["params","returnType","rest","typeParameters"],FunctionTypeParam:["name","typeAnnotation","optional"],ObjectTypeAnnotation:["properties"],ObjectTypeProperty:["key","value","optional"],ObjectTypeIndexer:["id","key","value"],ObjectTypeCallProperty:["value"],QualifiedTypeIdentifier:["qualification","id"],GenericTypeAnnotation:["id","typeParameters"],MemberTypeAnnotation:["object","property"],UnionTypeAnnotation:["types"],IntersectionTypeAnnotation:["types"],TypeofTypeAnnotation:["argument"],TypeParameterDeclaration:["params"],TypeParameterInstantiation:["params"],ClassProperty:["key","typeAnnotation"],ClassImplements:[],InterfaceDeclaration:["id","body","extends"],InterfaceExtends:["id"],TypeAlias:["id","typeParameters","right"],TupleTypeAnnotation:["types"],DeclareVariable:["id"],DeclareFunction:["id"],DeclareClass:["id"],DeclareModule:["id","body"]};for(var key in unprefixedKeys)exports["XJS"+key]=exports["JSX"+key]=unprefixedKeys[key];for(var key in flowKeys)exports[key]=flowKeys[key];

/***/ },

/***/ "./node_modules/escope/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function defaultOptions(){return{optimistic:!1,directive:!1,nodejsScope:!1,impliedStrict:!1,sourceType:"script",ecmaVersion:5,childVisitorKeys:null,fallback:"iteration"}}function updateDeeply(e,r){function t(e){return"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e instanceof Object&&!(e instanceof Array)&&!(e instanceof RegExp)}var o,n;for(o in r)r.hasOwnProperty(o)&&(n=r[o],t(n)?t(e[o])?updateDeeply(e[o],n):e[o]=updateDeeply({},n):e[o]=n);return e}function analyze(e,r){var t,o,n;return n=updateDeeply(defaultOptions(),r),t=new _scopeManager2.default(n),o=new _referencer2.default(n,t),o.visit(e),(0,_assert2.default)(null===t.__currentScope,"currentScope should be null."),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScopeManager=exports.Scope=exports.Variable=exports.Reference=exports.version=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};exports.analyze=analyze;var _assert=__webpack_require__("./node_modules/assert/assert.js"),_assert2=_interopRequireDefault(_assert),_scopeManager=__webpack_require__("./node_modules/escope/lib/scope-manager.js"),_scopeManager2=_interopRequireDefault(_scopeManager),_referencer=__webpack_require__("./node_modules/escope/lib/referencer.js"),_referencer2=_interopRequireDefault(_referencer),_reference=__webpack_require__("./node_modules/escope/lib/reference.js"),_reference2=_interopRequireDefault(_reference),_variable=__webpack_require__("./node_modules/escope/lib/variable.js"),_variable2=_interopRequireDefault(_variable),_scope=__webpack_require__("./node_modules/escope/lib/scope.js"),_scope2=_interopRequireDefault(_scope),_package=__webpack_require__("./node_modules/escope/package.json");exports.version=_package.version,exports.Reference=_reference2.default,exports.Variable=_variable2.default,exports.Scope=_scope2.default,exports.ScopeManager=_scopeManager2.default;

/***/ },

/***/ "./node_modules/escope/lib/scope-manager.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_es6WeakMap=__webpack_require__("./node_modules/es6-weak-map/index.js"),_es6WeakMap2=_interopRequireDefault(_es6WeakMap),_scope=__webpack_require__("./node_modules/escope/lib/scope.js"),_scope2=_interopRequireDefault(_scope),_assert=__webpack_require__("./node_modules/assert/assert.js"),_assert2=_interopRequireDefault(_assert),ScopeManager=function(){function e(t){_classCallCheck(this,e),this.scopes=[],this.globalScope=null,this.__nodeToScope=new _es6WeakMap2.default,this.__currentScope=null,this.__options=t,this.__declaredVariables=new _es6WeakMap2.default}return _createClass(e,[{key:"__useDirective",value:function(){return this.__options.directive}},{key:"__isOptimistic",value:function(){return this.__options.optimistic}},{key:"__ignoreEval",value:function(){return this.__options.ignoreEval}},{key:"__isNodejsScope",value:function(){return this.__options.nodejsScope}},{key:"isModule",value:function(){return"module"===this.__options.sourceType}},{key:"isImpliedStrict",value:function(){return this.__options.impliedStrict}},{key:"isStrictModeSupported",value:function(){return this.__options.ecmaVersion>=5}},{key:"__get",value:function(e){return this.__nodeToScope.get(e)}},{key:"getDeclaredVariables",value:function(e){return this.__declaredVariables.get(e)||[]}},{key:"acquire",value:function(e,t){function n(e){return("function"!==e.type||!e.functionExpressionScope)&&"TDZ"!==e.type}var o,i,s,c;if(o=this.__get(e),!o||0===o.length)return null;if(1===o.length)return o[0];if(t){for(s=o.length-1;s>=0;--s)if(i=o[s],n(i))return i}else for(s=0,c=o.length;s<c;++s)if(i=o[s],n(i))return i;return null}},{key:"acquireAll",value:function(e){return this.__get(e)}},{key:"release",value:function(e,t){var n,o;return n=this.__get(e),n&&n.length?(o=n[0].upper,o?this.acquire(o.block,t):null):null}},{key:"attach",value:function(){}},{key:"detach",value:function(){}},{key:"__nestScope",value:function(e){return e instanceof _scope.GlobalScope&&((0,_assert2.default)(null===this.__currentScope),this.globalScope=e),this.__currentScope=e,e}},{key:"__nestGlobalScope",value:function(e){return this.__nestScope(new _scope.GlobalScope(this,e))}},{key:"__nestBlockScope",value:function(e,t){return this.__nestScope(new _scope.BlockScope(this,this.__currentScope,e))}},{key:"__nestFunctionScope",value:function(e,t){return this.__nestScope(new _scope.FunctionScope(this,this.__currentScope,e,t))}},{key:"__nestForScope",value:function(e){return this.__nestScope(new _scope.ForScope(this,this.__currentScope,e))}},{key:"__nestCatchScope",value:function(e){return this.__nestScope(new _scope.CatchScope(this,this.__currentScope,e))}},{key:"__nestWithScope",value:function(e){return this.__nestScope(new _scope.WithScope(this,this.__currentScope,e))}},{key:"__nestClassScope",value:function(e){return this.__nestScope(new _scope.ClassScope(this,this.__currentScope,e))}},{key:"__nestSwitchScope",value:function(e){return this.__nestScope(new _scope.SwitchScope(this,this.__currentScope,e))}},{key:"__nestModuleScope",value:function(e){return this.__nestScope(new _scope.ModuleScope(this,this.__currentScope,e))}},{key:"__nestTDZScope",value:function(e){return this.__nestScope(new _scope.TDZScope(this,this.__currentScope,e))}},{key:"__nestFunctionExpressionNameScope",value:function(e){return this.__nestScope(new _scope.FunctionExpressionNameScope(this,this.__currentScope,e))}},{key:"__isES6",value:function(){return this.__options.ecmaVersion>=6}}]),e}();exports.default=ScopeManager;

/***/ },

/***/ "./node_modules/es6-weak-map/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es6-weak-map/is-implemented.js")()?WeakMap:__webpack_require__("./node_modules/es6-weak-map/polyfill.js");

/***/ },

/***/ "./node_modules/es6-weak-map/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){var e,t;if("function"!=typeof WeakMap)return!1;try{e=new WeakMap([[t={},"one"],[{},"two"],[{},"three"]])}catch(e){return!1}return"[object WeakMap]"===String(e)&&("function"==typeof e.set&&(e.set({},1)===e&&("function"==typeof e.delete&&("function"==typeof e.has&&"one"===e.get(t)))))};

/***/ },

/***/ "./node_modules/es6-weak-map/polyfill.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),object=__webpack_require__("./node_modules/es5-ext/object/valid-object.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),randomUniq=__webpack_require__("./node_modules/es5-ext/string/random-uniq.js"),d=__webpack_require__("./node_modules/d/index.js"),getIterator=__webpack_require__("./node_modules/es6-iterator/get.js"),forOf=__webpack_require__("./node_modules/es6-iterator/for-of.js"),toStringTagSymbol=__webpack_require__("./node_modules/es6-symbol/index.js").toStringTag,isNative=__webpack_require__("./node_modules/es6-weak-map/is-native-implemented.js"),isArray=Array.isArray,defineProperty=Object.defineProperty,hasOwnProperty=Object.prototype.hasOwnProperty,getPrototypeOf=Object.getPrototypeOf,WeakMapPoly;module.exports=WeakMapPoly=function(){var e,t=arguments[0];if(!(this instanceof WeakMapPoly))throw new TypeError("Constructor requires 'new'");return e=isNative&&setPrototypeOf&&WeakMap!==WeakMapPoly?setPrototypeOf(new WeakMap,getPrototypeOf(this)):this,null!=t&&(isArray(t)||(t=getIterator(t))),defineProperty(e,"__weakMapData__",d("c","$weakMap$"+randomUniq())),t?(forOf(t,function(t){value(t),e.set(t[0],t[1])}),e):e},isNative&&(setPrototypeOf&&setPrototypeOf(WeakMapPoly,WeakMap),WeakMapPoly.prototype=Object.create(WeakMap.prototype,{constructor:d(WeakMapPoly)})),Object.defineProperties(WeakMapPoly.prototype,{delete:d(function(e){return!!hasOwnProperty.call(object(e),this.__weakMapData__)&&(delete e[this.__weakMapData__],!0)}),get:d(function(e){if(hasOwnProperty.call(object(e),this.__weakMapData__))return e[this.__weakMapData__]}),has:d(function(e){return hasOwnProperty.call(object(e),this.__weakMapData__)}),set:d(function(e,t){return defineProperty(object(e),this.__weakMapData__,d("c",t)),this}),toString:d(function(){return"[object WeakMap]"})}),defineProperty(WeakMapPoly.prototype,toStringTagSymbol,d("c","WeakMap"));

/***/ },

/***/ "./node_modules/es5-ext/object/set-prototype-of/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")()?Object.setPrototypeOf:__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js":
/***/ function(module, exports) {

	"use strict";var create=Object.create,getPrototypeOf=Object.getPrototypeOf,x={};module.exports=function(){var t=Object.setPrototypeOf,e=arguments[0]||create;return"function"==typeof t&&getPrototypeOf(t(e(null),x))===x};

/***/ },

/***/ "./node_modules/es5-ext/object/set-prototype-of/shim.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isObject=__webpack_require__("./node_modules/es5-ext/object/is-object.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),isPrototypeOf=Object.prototype.isPrototypeOf,defineProperty=Object.defineProperty,nullDesc={configurable:!0,enumerable:!1,writable:!0,value:void 0},validate;validate=function(e,t){if(value(e),null===t||isObject(t))return e;throw new TypeError("Prototype must be null or an object")},module.exports=function(e){var t,l;return e?(2===e.level?e.set?(l=e.set,t=function(e,t){return l.call(validate(e,t),t),e}):t=function(e,t){return validate(e,t).__proto__=t,e}:t=function e(t,l){var r;return validate(t,l),r=isPrototypeOf.call(e.nullPolyfill,t),r&&delete e.nullPolyfill.__proto__,null===l&&(l=e.nullPolyfill),t.__proto__=l,r&&defineProperty(e.nullPolyfill,"__proto__",nullDesc),t},Object.defineProperty(t,"level",{configurable:!1,enumerable:!1,writable:!1,value:e.level})):null}(function(){var e,t=Object.create(null),l={},r=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");if(r){try{e=r.set,e.call(t,l)}catch(e){}if(Object.getPrototypeOf(t)===l)return{set:e,level:2}}return t.__proto__=l,Object.getPrototypeOf(t)===l?{level:2}:(t={},t.__proto__=l,Object.getPrototypeOf(t)===l&&{level:1})}()),__webpack_require__("./node_modules/es5-ext/object/create.js");

/***/ },

/***/ "./node_modules/es5-ext/object/is-object.js":
/***/ function(module, exports) {

	"use strict";var map={function:!0,object:!0};module.exports=function(t){return null!=t&&map[typeof t]||!1};

/***/ },

/***/ "./node_modules/es5-ext/object/valid-value.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(n){if(null==n)throw new TypeError("Cannot use null or undefined");return n};

/***/ },

/***/ "./node_modules/es5-ext/object/create.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var create=Object.create,shim;__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")()||(shim=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/shim.js")),module.exports=function(){var e,r,t;return shim?1!==shim.level?create:(e={},r={},t={configurable:!1,enumerable:!1,writable:!0,value:void 0},Object.getOwnPropertyNames(Object.prototype).forEach(function(e){return"__proto__"===e?void(r[e]={configurable:!0,enumerable:!1,writable:!0,value:void 0}):void(r[e]=t)}),Object.defineProperties(e,r),Object.defineProperty(shim,"nullPolyfill",{configurable:!1,enumerable:!1,writable:!1,value:e}),function(r,t){return create(null===r?e:r,t)}):create}();

/***/ },

/***/ "./node_modules/es5-ext/object/valid-object.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isObject=__webpack_require__("./node_modules/es5-ext/object/is-object.js");module.exports=function(e){if(!isObject(e))throw new TypeError(e+" is not an Object");return e};

/***/ },

/***/ "./node_modules/es5-ext/string/random-uniq.js":
/***/ function(module, exports) {

	"use strict";var generated=Object.create(null),random=Math.random;module.exports=function(){var e;do e=random().toString(36).slice(2);while(generated[e]);return e};

/***/ },

/***/ "./node_modules/d/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var assign=__webpack_require__("./node_modules/es5-ext/object/assign/index.js"),normalizeOpts=__webpack_require__("./node_modules/es5-ext/object/normalize-options.js"),isCallable=__webpack_require__("./node_modules/es5-ext/object/is-callable.js"),contains=__webpack_require__("./node_modules/es5-ext/string/#/contains/index.js"),d;d=module.exports=function(e,l){var n,a,i,s,t;return arguments.length<2||"string"!=typeof e?(s=l,l=e,e=null):s=arguments[2],null==e?(n=i=!0,a=!1):(n=contains.call(e,"c"),a=contains.call(e,"e"),i=contains.call(e,"w")),t={value:l,configurable:n,enumerable:a,writable:i},s?assign(normalizeOpts(s),t):t},d.gs=function(e,l,n){var a,i,s,t;return"string"!=typeof e?(s=n,n=l,l=e,e=null):s=arguments[3],null==l?l=void 0:isCallable(l)?null==n?n=void 0:isCallable(n)||(s=n,n=void 0):(s=l,l=n=void 0),null==e?(a=!0,i=!1):(a=contains.call(e,"c"),i=contains.call(e,"e")),t={get:l,set:n,configurable:a,enumerable:i},s?assign(normalizeOpts(s),t):t};

/***/ },

/***/ "./node_modules/es5-ext/object/assign/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/assign/is-implemented.js")()?Object.assign:__webpack_require__("./node_modules/es5-ext/object/assign/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){var r,t=Object.assign;return"function"==typeof t&&(r={foo:"raz"},t(r,{bar:"dwa"},{trzy:"trzy"}),r.foo+r.bar+r.trzy==="razdwatrzy")};

/***/ },

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var keys=__webpack_require__("./node_modules/es5-ext/object/keys/index.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),max=Math.max;module.exports=function(e,r){var a,t,u,i=max(arguments.length,2);for(e=Object(value(e)),u=function(t){try{e[t]=r[t]}catch(e){a||(a=e)}},t=1;t<i;++t)r=arguments[t],keys(r).forEach(u);if(void 0!==a)throw a;return e};

/***/ },

/***/ "./node_modules/es5-ext/object/keys/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/keys/is-implemented.js")()?Object.keys:__webpack_require__("./node_modules/es5-ext/object/keys/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}};

/***/ },

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/***/ function(module, exports) {

	"use strict";var keys=Object.keys;module.exports=function(e){return keys(null==e?e:Object(e))};

/***/ },

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/***/ function(module, exports) {

	"use strict";var forEach=Array.prototype.forEach,create=Object.create,process=function(r,c){var e;for(e in r)c[e]=r[e]};module.exports=function(r){var c=create(null);return forEach.call(arguments,function(r){null!=r&&process(Object(r),c)}),c};

/***/ },

/***/ "./node_modules/es5-ext/object/is-callable.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(t){return"function"==typeof t};

/***/ },

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/string/#/contains/is-implemented.js")()?String.prototype.contains:__webpack_require__("./node_modules/es5-ext/string/#/contains/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/***/ function(module, exports) {

	"use strict";var str="razdwatrzy";module.exports=function(){return"function"==typeof str.contains&&(str.contains("dwa")===!0&&str.contains("foo")===!1)};

/***/ },

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/***/ function(module, exports) {

	"use strict";var indexOf=String.prototype.indexOf;module.exports=function(t){return indexOf.call(this,t,arguments[1])>-1};

/***/ },

/***/ "./node_modules/es6-iterator/get.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isArguments=__webpack_require__("./node_modules/es5-ext/function/is-arguments.js"),isString=__webpack_require__("./node_modules/es5-ext/string/is-string.js"),ArrayIterator=__webpack_require__("./node_modules/es6-iterator/array.js"),StringIterator=__webpack_require__("./node_modules/es6-iterator/string.js"),iterable=__webpack_require__("./node_modules/es6-iterator/valid-iterable.js"),iteratorSymbol=__webpack_require__("./node_modules/es6-symbol/index.js").iterator;module.exports=function(r){return"function"==typeof iterable(r)[iteratorSymbol]?r[iteratorSymbol]():isArguments(r)?new ArrayIterator(r):isString(r)?new StringIterator(r):new ArrayIterator(r)};

/***/ },

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/***/ function(module, exports) {

	"use strict";var toString=Object.prototype.toString,id=toString.call(function(){return arguments}());module.exports=function(t){return toString.call(t)===id};

/***/ },

/***/ "./node_modules/es5-ext/string/is-string.js":
/***/ function(module, exports) {

	"use strict";var toString=Object.prototype.toString,id=toString.call("");module.exports=function(t){return"string"==typeof t||t&&"object"==typeof t&&(t instanceof String||toString.call(t)===id)||!1};

/***/ },

/***/ "./node_modules/es6-iterator/array.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),contains=__webpack_require__("./node_modules/es5-ext/string/#/contains/index.js"),d=__webpack_require__("./node_modules/d/index.js"),Iterator=__webpack_require__("./node_modules/es6-iterator/index.js"),defineProperty=Object.defineProperty,ArrayIterator;ArrayIterator=module.exports=function(t,r){return this instanceof ArrayIterator?(Iterator.call(this,t),r=r?contains.call(r,"key+value")?"key+value":contains.call(r,"key")?"key":"value":"value",void defineProperty(this,"__kind__",d("",r))):new ArrayIterator(t,r)},setPrototypeOf&&setPrototypeOf(ArrayIterator,Iterator),ArrayIterator.prototype=Object.create(Iterator.prototype,{constructor:d(ArrayIterator),_resolve:d(function(t){return"value"===this.__kind__?this.__list__[t]:"key+value"===this.__kind__?[t,this.__list__[t]]:t}),toString:d(function(){return"[object Array Iterator]"})});

/***/ },

/***/ "./node_modules/es6-iterator/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var clear=__webpack_require__("./node_modules/es5-ext/array/#/clear.js"),assign=__webpack_require__("./node_modules/es5-ext/object/assign/index.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),d=__webpack_require__("./node_modules/d/index.js"),autoBind=__webpack_require__("./node_modules/d/auto-bind.js"),Symbol=__webpack_require__("./node_modules/es6-symbol/index.js"),defineProperty=Object.defineProperty,defineProperties=Object.defineProperties,Iterator;module.exports=Iterator=function(e,t){return this instanceof Iterator?(defineProperties(this,{__list__:d("w",value(e)),__context__:d("w",t),__nextIndex__:d("w",0)}),void(t&&(callable(t.on),t.on("_add",this._onAdd),t.on("_delete",this._onDelete),t.on("_clear",this._onClear)))):new Iterator(e,t)},defineProperties(Iterator.prototype,assign({constructor:d(Iterator),_next:d(function(){var e;if(this.__list__)return this.__redo__&&(e=this.__redo__.shift(),void 0!==e)?e:this.__nextIndex__<this.__list__.length?this.__nextIndex__++:void this._unBind()}),next:d(function(){return this._createResult(this._next())}),_createResult:d(function(e){return void 0===e?{done:!0,value:void 0}:{done:!1,value:this._resolve(e)}}),_resolve:d(function(e){return this.__list__[e]}),_unBind:d(function(){this.__list__=null,delete this.__redo__,this.__context__&&(this.__context__.off("_add",this._onAdd),this.__context__.off("_delete",this._onDelete),this.__context__.off("_clear",this._onClear),this.__context__=null)}),toString:d(function(){return"[object Iterator]"})},autoBind({_onAdd:d(function(e){if(!(e>=this.__nextIndex__)){if(++this.__nextIndex__,!this.__redo__)return void defineProperty(this,"__redo__",d("c",[e]));this.__redo__.forEach(function(t,_){t>=e&&(this.__redo__[_]=++t)},this),this.__redo__.push(e)}}),_onDelete:d(function(e){var t;e>=this.__nextIndex__||(--this.__nextIndex__,this.__redo__&&(t=this.__redo__.indexOf(e),t!==-1&&this.__redo__.splice(t,1),this.__redo__.forEach(function(t,_){t>e&&(this.__redo__[_]=--t)},this)))}),_onClear:d(function(){this.__redo__&&clear.call(this.__redo__),this.__nextIndex__=0})}))),defineProperty(Iterator.prototype,Symbol.iterator,d(function(){return this})),defineProperty(Iterator.prototype,Symbol.toStringTag,d("","Iterator"));

/***/ },

/***/ "./node_modules/es5-ext/array/#/clear.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js");module.exports=function(){return value(this).length=0,this};

/***/ },

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t};

/***/ },

/***/ "./node_modules/d/auto-bind.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var copy=__webpack_require__("./node_modules/es5-ext/object/copy.js"),map=__webpack_require__("./node_modules/es5-ext/object/map.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),validValue=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),bind=Function.prototype.bind,defineProperty=Object.defineProperty,hasOwnProperty=Object.prototype.hasOwnProperty,define;define=function(e,t,r){var i,l=validValue(t)&&callable(t.value);return i=copy(t),delete i.writable,delete i.value,i.get=function(){return hasOwnProperty.call(this,e)?l:(t.value=bind.call(l,null==r?this:this[r]),defineProperty(this,e,t),this[e])},i},module.exports=function(e){var t=arguments[1];return map(e,function(e,r){return define(r,e,t)})};

/***/ },

/***/ "./node_modules/es5-ext/object/copy.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var assign=__webpack_require__("./node_modules/es5-ext/object/assign/index.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js");module.exports=function(e){var r=Object(value(e));return r!==e?r:assign({},e)};

/***/ },

/***/ "./node_modules/es5-ext/object/map.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),forEach=__webpack_require__("./node_modules/es5-ext/object/for-each.js"),call=Function.prototype.call;module.exports=function(l,a){var c={},r=arguments[2];return callable(a),forEach(l,function(l,e,o,t){c[e]=call.call(a,r,l,e,o,t)}),c};

/***/ },

/***/ "./node_modules/es5-ext/object/for-each.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/_iterate.js")("forEach");

/***/ },

/***/ "./node_modules/es5-ext/object/_iterate.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),bind=Function.prototype.bind,call=Function.prototype.call,keys=Object.keys,propertyIsEnumerable=Object.prototype.propertyIsEnumerable;module.exports=function(e,l){return function(t,r){var a,n=arguments[2],c=arguments[3];return t=Object(value(t)),callable(r),a=keys(t),c&&a.sort("function"==typeof c?bind.call(c,t):void 0),"function"!=typeof e&&(e=a[e]),call.call(e,a,function(e,a){return propertyIsEnumerable.call(t,e)?call.call(r,n,t[e],e,t,a):l})}};

/***/ },

/***/ "./node_modules/es6-symbol/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es6-symbol/is-implemented.js")()?Symbol:__webpack_require__("./node_modules/es6-symbol/polyfill.js");

/***/ },

/***/ "./node_modules/es6-symbol/is-implemented.js":
/***/ function(module, exports) {

	"use strict";var validTypes={object:!0,symbol:!0};module.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(t){return!1}return!!validTypes[typeof Symbol.iterator]&&(!!validTypes[typeof Symbol.toPrimitive]&&!!validTypes[typeof Symbol.toStringTag])};

/***/ },

/***/ "./node_modules/es6-symbol/polyfill.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var d=__webpack_require__("./node_modules/d/index.js"),validateSymbol=__webpack_require__("./node_modules/es6-symbol/validate-symbol.js"),create=Object.create,defineProperties=Object.defineProperties,defineProperty=Object.defineProperty,objPrototype=Object.prototype,NativeSymbol,SymbolPolyfill,HiddenSymbol,globalSymbols=create(null),isNativeSafe;if("function"==typeof Symbol){NativeSymbol=Symbol;try{String(NativeSymbol()),isNativeSafe=!0}catch(o){}}var generateName=function(){var o=create(null);return function(l){for(var e,t,i=0;o[l+(i||"")];)++i;return l+=i||"",o[l]=!0,e="@@"+l,defineProperty(objPrototype,e,d.gs(null,function(o){t||(t=!0,defineProperty(this,e,d(o)),t=!1)})),e}}();HiddenSymbol=function(o){if(this instanceof HiddenSymbol)throw new TypeError("TypeError: Symbol is not a constructor");return SymbolPolyfill(o)},module.exports=SymbolPolyfill=function o(l){var e;if(this instanceof o)throw new TypeError("TypeError: Symbol is not a constructor");return isNativeSafe?NativeSymbol(l):(e=create(HiddenSymbol.prototype),l=void 0===l?"":String(l),defineProperties(e,{__description__:d("",l),__name__:d("",generateName(l))}))},defineProperties(SymbolPolyfill,{for:d(function(o){return globalSymbols[o]?globalSymbols[o]:globalSymbols[o]=SymbolPolyfill(String(o))}),keyFor:d(function(o){var l;validateSymbol(o);for(l in globalSymbols)if(globalSymbols[l]===o)return l}),hasInstance:d("",NativeSymbol&&NativeSymbol.hasInstance||SymbolPolyfill("hasInstance")),isConcatSpreadable:d("",NativeSymbol&&NativeSymbol.isConcatSpreadable||SymbolPolyfill("isConcatSpreadable")),iterator:d("",NativeSymbol&&NativeSymbol.iterator||SymbolPolyfill("iterator")),match:d("",NativeSymbol&&NativeSymbol.match||SymbolPolyfill("match")),replace:d("",NativeSymbol&&NativeSymbol.replace||SymbolPolyfill("replace")),search:d("",NativeSymbol&&NativeSymbol.search||SymbolPolyfill("search")),species:d("",NativeSymbol&&NativeSymbol.species||SymbolPolyfill("species")),split:d("",NativeSymbol&&NativeSymbol.split||SymbolPolyfill("split")),toPrimitive:d("",NativeSymbol&&NativeSymbol.toPrimitive||SymbolPolyfill("toPrimitive")),toStringTag:d("",NativeSymbol&&NativeSymbol.toStringTag||SymbolPolyfill("toStringTag")),unscopables:d("",NativeSymbol&&NativeSymbol.unscopables||SymbolPolyfill("unscopables"))}),defineProperties(HiddenSymbol.prototype,{constructor:d(SymbolPolyfill),toString:d("",function(){return this.__name__})}),defineProperties(SymbolPolyfill.prototype,{toString:d(function(){return"Symbol ("+validateSymbol(this).__description__+")"}),valueOf:d(function(){return validateSymbol(this)})}),defineProperty(SymbolPolyfill.prototype,SymbolPolyfill.toPrimitive,d("",function(){var o=validateSymbol(this);return"symbol"==typeof o?o:o.toString()})),defineProperty(SymbolPolyfill.prototype,SymbolPolyfill.toStringTag,d("c","Symbol")),defineProperty(HiddenSymbol.prototype,SymbolPolyfill.toStringTag,d("c",SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])),defineProperty(HiddenSymbol.prototype,SymbolPolyfill.toPrimitive,d("c",SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));

/***/ },

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isSymbol=__webpack_require__("./node_modules/es6-symbol/is-symbol.js");module.exports=function(r){if(!isSymbol(r))throw new TypeError(r+" is not a symbol");return r};

/***/ },

/***/ "./node_modules/es6-symbol/is-symbol.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(o){return!!o&&("symbol"==typeof o||!!o.constructor&&("Symbol"===o.constructor.name&&"Symbol"===o[o.constructor.toStringTag]))};

/***/ },

/***/ "./node_modules/es6-iterator/string.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),d=__webpack_require__("./node_modules/d/index.js"),Iterator=__webpack_require__("./node_modules/es6-iterator/index.js"),defineProperty=Object.defineProperty,StringIterator;StringIterator=module.exports=function(t){return this instanceof StringIterator?(t=String(t),Iterator.call(this,t),void defineProperty(this,"__length__",d("",t.length))):new StringIterator(t)},setPrototypeOf&&setPrototypeOf(StringIterator,Iterator),StringIterator.prototype=Object.create(Iterator.prototype,{constructor:d(StringIterator),_next:d(function(){if(this.__list__)return this.__nextIndex__<this.__length__?this.__nextIndex__++:void this._unBind()}),_resolve:d(function(t){var e,r=this.__list__[t];return this.__nextIndex__===this.__length__?r:(e=r.charCodeAt(0),e>=55296&&e<=56319?r+this.__list__[this.__nextIndex__++]:r)}),toString:d(function(){return"[object String Iterator]"})});

/***/ },

/***/ "./node_modules/es6-iterator/valid-iterable.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isIterable=__webpack_require__("./node_modules/es6-iterator/is-iterable.js");module.exports=function(e){if(!isIterable(e))throw new TypeError(e+" is not iterable");return e};

/***/ },

/***/ "./node_modules/es6-iterator/is-iterable.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isArguments=__webpack_require__("./node_modules/es5-ext/function/is-arguments.js"),isString=__webpack_require__("./node_modules/es5-ext/string/is-string.js"),iteratorSymbol=__webpack_require__("./node_modules/es6-symbol/index.js").iterator,isArray=Array.isArray;module.exports=function(r){return null!=r&&(!!isArray(r)||(!!isString(r)||(!!isArguments(r)||"function"==typeof r[iteratorSymbol])))};

/***/ },

/***/ "./node_modules/es6-iterator/for-of.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isArguments=__webpack_require__("./node_modules/es5-ext/function/is-arguments.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),isString=__webpack_require__("./node_modules/es5-ext/string/is-string.js"),get=__webpack_require__("./node_modules/es6-iterator/get.js"),isArray=Array.isArray,call=Function.prototype.call,some=Array.prototype.some;module.exports=function(r,e){var t,l,i,a,n,s,c,o,u=arguments[2];if(isArray(r)||isArguments(r)?t="array":isString(r)?t="string":r=get(r),callable(e),i=function(){a=!0},"array"===t)return void some.call(r,function(r){if(call.call(e,u,r,i),a)return!0});if("string"!==t)for(l=r.next();!l.done;){if(call.call(e,u,l.value,i),a)return;l=r.next()}else for(s=r.length,n=0;n<s&&(c=r[n],n+1<s&&(o=c.charCodeAt(0),o>=55296&&o<=56319&&(c+=r[++n])),call.call(e,u,c,i),!a);++n);};

/***/ },

/***/ "./node_modules/es6-weak-map/is-native-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){return"function"==typeof WeakMap&&"[object WeakMap]"===Object.prototype.toString.call(new WeakMap)}();

/***/ },

/***/ "./node_modules/escope/lib/scope.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function isStrictScope(e,t,i,r){var s,n,o,l,a;if(e.upper&&e.upper.isStrict)return!0;if(t.type===_estraverse.Syntax.ArrowFunctionExpression)return!0;if(i)return!0;if("class"===e.type||"module"===e.type)return!0;if("block"===e.type||"switch"===e.type)return!1;if("function"===e.type)s=t.type===_estraverse.Syntax.Program?t:t.body;else{if("global"!==e.type)return!1;s=t}if(r){for(n=0,o=s.body.length;n<o&&(l=s.body[n],l.type===_estraverse.Syntax.DirectiveStatement);++n)if('"use strict"'===l.raw||"'use strict'"===l.raw)return!0}else for(n=0,o=s.body.length;n<o&&(l=s.body[n],l.type===_estraverse.Syntax.ExpressionStatement)&&(a=l.expression,a.type===_estraverse.Syntax.Literal&&"string"==typeof a.value);++n)if(null!=a.raw){if('"use strict"'===a.raw||"'use strict'"===a.raw)return!0}else if("use strict"===a.value)return!0;return!1}function registerScope(e,t){var i;e.scopes.push(t),i=e.__nodeToScope.get(t.block),i?i.push(t):e.__nodeToScope.set(t.block,[t])}function shouldBeStatically(e){return e.type===_variable2.default.ClassName||e.type===_variable2.default.Variable&&"var"!==e.parent.kind}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClassScope=exports.ForScope=exports.FunctionScope=exports.SwitchScope=exports.BlockScope=exports.TDZScope=exports.WithScope=exports.CatchScope=exports.FunctionExpressionNameScope=exports.ModuleScope=exports.GlobalScope=void 0;var _get=function e(t,i,r){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,i,r)}if("value"in s)return s.value;var o=s.get;if(void 0!==o)return o.call(r)},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),_estraverse=__webpack_require__("./node_modules/escope/node_modules/estraverse/estraverse.js"),_es6Map=__webpack_require__("./node_modules/es6-map/index.js"),_es6Map2=_interopRequireDefault(_es6Map),_reference=__webpack_require__("./node_modules/escope/lib/reference.js"),_reference2=_interopRequireDefault(_reference),_variable=__webpack_require__("./node_modules/escope/lib/variable.js"),_variable2=_interopRequireDefault(_variable),_definition=__webpack_require__("./node_modules/escope/lib/definition.js"),_definition2=_interopRequireDefault(_definition),_assert=__webpack_require__("./node_modules/assert/assert.js"),_assert2=_interopRequireDefault(_assert),Scope=function(){function e(t,i,r,s,n){_classCallCheck(this,e),this.type=i,this.set=new _es6Map2.default,this.taints=new _es6Map2.default,this.dynamic="global"===this.type||"with"===this.type,this.block=s,this.through=[],this.variables=[],this.references=[],this.variableScope="global"===this.type||"function"===this.type||"module"===this.type?this:r.variableScope,this.functionExpressionScope=!1,this.directCallToEvalScope=!1,this.thisFound=!1,this.__left=[],this.upper=r,this.isStrict=isStrictScope(this,s,n,t.__useDirective()),this.childScopes=[],this.upper&&this.upper.childScopes.push(this),this.__declaredVariables=t.__declaredVariables,registerScope(t,this)}return _createClass(e,[{key:"__shouldStaticallyClose",value:function(e){return!this.dynamic||e.__isOptimistic()}},{key:"__shouldStaticallyCloseForGlobal",value:function(e){var t=e.identifier.name;if(!this.set.has(t))return!1;var i=this.set.get(t),r=i.defs;return r.length>0&&r.every(shouldBeStatically)}},{key:"__staticCloseRef",value:function(e){this.__resolve(e)||this.__delegateToUpperScope(e)}},{key:"__dynamicCloseRef",value:function(e){var t=this;do t.through.push(e),t=t.upper;while(t)}},{key:"__globalCloseRef",value:function(e){this.__shouldStaticallyCloseForGlobal(e)?this.__staticCloseRef(e):this.__dynamicCloseRef(e)}},{key:"__close",value:function(e){var t;t=this.__shouldStaticallyClose(e)?this.__staticCloseRef:"global"!==this.type?this.__dynamicCloseRef:this.__globalCloseRef;for(var i=0,r=this.__left.length;i<r;++i){var s=this.__left[i];t.call(this,s)}return this.__left=null,this.upper}},{key:"__resolve",value:function(e){var t,i;return i=e.identifier.name,!!this.set.has(i)&&(t=this.set.get(i),t.references.push(e),t.stack=t.stack&&e.from.variableScope===this.variableScope,e.tainted&&(t.tainted=!0,this.taints.set(t.name,!0)),e.resolved=t,!0)}},{key:"__delegateToUpperScope",value:function(e){this.upper&&this.upper.__left.push(e),this.through.push(e)}},{key:"__addDeclaredVariablesOfNode",value:function(e,t){if(null!=t){var i=this.__declaredVariables.get(t);null==i&&(i=[],this.__declaredVariables.set(t,i)),i.indexOf(e)===-1&&i.push(e)}}},{key:"__defineGeneric",value:function(e,t,i,r,s){var n;n=t.get(e),n||(n=new _variable2.default(e,this),t.set(e,n),i.push(n)),s&&(n.defs.push(s),s.type!==_variable2.default.TDZ&&(this.__addDeclaredVariablesOfNode(n,s.node),this.__addDeclaredVariablesOfNode(n,s.parent))),r&&n.identifiers.push(r)}},{key:"__define",value:function(e,t){e&&e.type===_estraverse.Syntax.Identifier&&this.__defineGeneric(e.name,this.set,this.variables,e,t)}},{key:"__referencing",value:function(e,t,i,r,s,n){if(e&&e.type===_estraverse.Syntax.Identifier&&"super"!==e.name){var o=new _reference2.default(e,this,t||_reference2.default.READ,i,r,!!s,!!n);this.references.push(o),this.__left.push(o)}}},{key:"__detectEval",value:function(){var e;e=this,this.directCallToEvalScope=!0;do e.dynamic=!0,e=e.upper;while(e)}},{key:"__detectThis",value:function(){this.thisFound=!0}},{key:"__isClosed",value:function(){return null===this.__left}},{key:"resolve",value:function(e){var t,i,r;for((0,_assert2.default)(this.__isClosed(),"Scope should be closed."),(0,_assert2.default)(e.type===_estraverse.Syntax.Identifier,"Target should be identifier."),i=0,r=this.references.length;i<r;++i)if(t=this.references[i],t.identifier===e)return t;return null}},{key:"isStatic",value:function(){return!this.dynamic}},{key:"isArgumentsMaterialized",value:function(){return!0}},{key:"isThisMaterialized",value:function(){return!0}},{key:"isUsedName",value:function(e){if(this.set.has(e))return!0;for(var t=0,i=this.through.length;t<i;++t)if(this.through[t].identifier.name===e)return!0;return!1}}]),e}();exports.default=Scope;var GlobalScope=exports.GlobalScope=function(e){function t(e,i){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"global",null,i,!1));return r.implicit={set:new _es6Map2.default,variables:[],left:[]},r}return _inherits(t,e),_createClass(t,[{key:"__close",value:function(e){for(var i=[],r=0,s=this.__left.length;r<s;++r){var n=this.__left[r];n.__maybeImplicitGlobal&&!this.set.has(n.identifier.name)&&i.push(n.__maybeImplicitGlobal)}for(var o=0,l=i.length;o<l;++o){var a=i[o];this.__defineImplicit(a.pattern,new _definition2.default(_variable2.default.ImplicitGlobalVariable,a.pattern,a.node,null,null,null))}return this.implicit.left=this.__left,_get(Object.getPrototypeOf(t.prototype),"__close",this).call(this,e)}},{key:"__defineImplicit",value:function(e,t){e&&e.type===_estraverse.Syntax.Identifier&&this.__defineGeneric(e.name,this.implicit.set,this.implicit.variables,e,t)}}]),t}(Scope),ModuleScope=exports.ModuleScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"module",i,r,!1))}return _inherits(t,e),t}(Scope),FunctionExpressionNameScope=exports.FunctionExpressionNameScope=function(e){function t(e,i,r){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"function-expression-name",i,r,!1));return s.__define(r.id,new _definition2.default(_variable2.default.FunctionName,r.id,r,null,null,null)),s.functionExpressionScope=!0,s}return _inherits(t,e),t}(Scope),CatchScope=exports.CatchScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"catch",i,r,!1))}return _inherits(t,e),t}(Scope),WithScope=exports.WithScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"with",i,r,!1))}return _inherits(t,e),_createClass(t,[{key:"__close",value:function(e){if(this.__shouldStaticallyClose(e))return _get(Object.getPrototypeOf(t.prototype),"__close",this).call(this,e);for(var i=0,r=this.__left.length;i<r;++i){var s=this.__left[i];s.tainted=!0,this.__delegateToUpperScope(s)}return this.__left=null,this.upper}}]),t}(Scope),TDZScope=exports.TDZScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"TDZ",i,r,!1))}return _inherits(t,e),t}(Scope),BlockScope=exports.BlockScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"block",i,r,!1))}return _inherits(t,e),t}(Scope),SwitchScope=exports.SwitchScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"switch",i,r,!1))}return _inherits(t,e),t}(Scope),FunctionScope=exports.FunctionScope=function(e){function t(e,i,r,s){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"function",i,r,s));return n.block.type!==_estraverse.Syntax.ArrowFunctionExpression&&n.__defineArguments(),n}return _inherits(t,e),_createClass(t,[{key:"isArgumentsMaterialized",value:function(){if(this.block.type===_estraverse.Syntax.ArrowFunctionExpression)return!1;if(!this.isStatic())return!0;var e=this.set.get("arguments");return(0,_assert2.default)(e,"Always have arguments variable."),e.tainted||0!==e.references.length}},{key:"isThisMaterialized",value:function(){return!this.isStatic()||this.thisFound}},{key:"__defineArguments",value:function(){this.__defineGeneric("arguments",this.set,this.variables,null,null),this.taints.set("arguments",!0)}}]),t}(Scope),ForScope=exports.ForScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"for",i,r,!1))}return _inherits(t,e),t}(Scope),ClassScope=exports.ClassScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"class",i,r,!1))}return _inherits(t,e),t}(Scope);

/***/ },

/***/ "./node_modules/escope/node_modules/estraverse/estraverse.js":
/***/ function(module, exports, __webpack_require__) {

	!function e(t){"use strict";function n(){}function r(e){var t,n,i={};for(t in e)e.hasOwnProperty(t)&&(n=e[t],"object"==typeof n&&null!==n?i[t]=r(n):i[t]=n);return i}function i(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function o(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?r=n:(i=o+1,r-=n+1);return i}function a(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?(i=o+1,r-=n+1):r=n;return i}function s(e,t){var n,r,i,o=b(t);for(r=0,i=o.length;r<i;r+=1)n=o[r],e[n]=t[n];return e}function l(e,t){this.parent=e,this.key=t}function p(e,t,n,r){this.node=e,this.path=t,this.wrap=n,this.ref=r}function c(){}function u(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function f(e,t){return(e===_.ObjectExpression||e===_.ObjectPattern)&&"properties"===t}function h(e,t){var n=new c;return n.traverse(e,t)}function m(e,t){var n=new c;return n.replace(e,t)}function d(e,t){var n;return n=o(t,function(t){return t.range[0]>e.range[0]}),e.extendedRange=[e.range[0],e.range[1]],n!==t.length&&(e.extendedRange[1]=t[n].range[0]),n-=1,n>=0&&(e.extendedRange[0]=t[n].range[1]),e}function y(e,t,n){var i,o,a,s,l=[];if(!e.range)throw new Error("attachComments needs range information");if(!n.length){if(t.length){for(a=0,o=t.length;a<o;a+=1)i=r(t[a]),i.extendedRange=[0,e.range[0]],l.push(i);e.leadingComments=l}return e}for(a=0,o=t.length;a<o;a+=1)l.push(d(r(t[a]),n));return s=0,h(e,{enter:function(e){for(var t;s<l.length&&(t=l[s],!(t.extendedRange[1]>e.range[0]));)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?x.Break:l[s].extendedRange[0]>e.range[1]?x.Skip:void 0}}),s=0,h(e,{leave:function(e){for(var t;s<l.length&&(t=l[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?x.Break:l[s].extendedRange[0]>e.range[1]?x.Skip:void 0}}),e}var _,g,x,E,S,b,k,v,w;return g=Array.isArray,g||(g=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),n(i),n(a),S=Object.create||function(){function e(){}return function(t){return e.prototype=t,new e}}(),b=Object.keys||function(e){var t,n=[];for(t in e)n.push(t);return n},_={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},E={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},k={},v={},w={},x={Break:k,Skip:v,Remove:w},l.prototype.replace=function(e){this.parent[this.key]=e},l.prototype.remove=function(){return g(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},c.prototype.path=function(){function e(e,t){if(g(t))for(r=0,i=t.length;r<i;++r)e.push(t[r]);else e.push(t)}var t,n,r,i,o,a;if(!this.__current.path)return null;for(o=[],t=2,n=this.__leavelist.length;t<n;++t)a=this.__leavelist[t],e(o,a.path);return e(o,this.__current.path),o},c.prototype.type=function(){var e=this.current();return e.type||this.__current.wrap},c.prototype.parents=function(){var e,t,n;for(n=[],e=1,t=this.__leavelist.length;e<t;++e)n.push(this.__leavelist[e].node);return n},c.prototype.current=function(){return this.__current.node},c.prototype.__execute=function(e,t){var n,r;return r=void 0,n=this.__current,this.__current=t,this.__state=null,e&&(r=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=n,r},c.prototype.notify=function(e){this.__state=e},c.prototype.skip=function(){this.notify(v)},c.prototype.break=function(){this.notify(k)},c.prototype.remove=function(){this.notify(w)},c.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,"iteration"===t.fallback?this.__fallback=b:"function"==typeof t.fallback&&(this.__fallback=t.fallback),this.__keys=E,t.keys&&(this.__keys=s(S(this.__keys),t.keys))},c.prototype.traverse=function(e,t){var n,r,i,o,a,s,l,c,h,m,d,y;for(this.__initialize(e,t),y={},n=this.__worklist,r=this.__leavelist,n.push(new p(e,null,null,null)),r.push(new p(null,null,null,null));n.length;)if(i=n.pop(),i!==y){if(i.node){if(s=this.__execute(t.enter,i),this.__state===k||s===k)return;if(n.push(y),r.push(i),this.__state===v||s===v)continue;if(o=i.node,a=o.type||i.wrap,m=this.__keys[a],!m){if(!this.__fallback)throw new Error("Unknown node type "+a+".");m=this.__fallback(o)}for(c=m.length;(c-=1)>=0;)if(l=m[c],d=o[l])if(g(d)){for(h=d.length;(h-=1)>=0;)if(d[h]){if(f(a,m[c]))i=new p(d[h],[l,h],"Property",null);else{if(!u(d[h]))continue;i=new p(d[h],[l,h],null,null)}n.push(i)}}else u(d)&&n.push(new p(d,l,null,null))}}else if(i=r.pop(),s=this.__execute(t.leave,i),this.__state===k||s===k)return},c.prototype.replace=function(e,t){function n(e){var t,n,i,o;if(e.ref.remove())for(n=e.ref.key,o=e.ref.parent,t=r.length;t--;)if(i=r[t],i.ref&&i.ref.parent===o){if(i.ref.key<n)break;--i.ref.key}}var r,i,o,a,s,c,h,m,d,y,_,x,E;for(this.__initialize(e,t),_={},r=this.__worklist,i=this.__leavelist,x={root:e},c=new p(e,null,null,new l(x,"root")),r.push(c),i.push(c);r.length;)if(c=r.pop(),c!==_){if(s=this.__execute(t.enter,c),void 0!==s&&s!==k&&s!==v&&s!==w&&(c.ref.replace(s),c.node=s),this.__state!==w&&s!==w||(n(c),c.node=null),this.__state===k||s===k)return x.root;if(o=c.node,o&&(r.push(_),i.push(c),this.__state!==v&&s!==v)){if(a=o.type||c.wrap,d=this.__keys[a],!d){if(!this.__fallback)throw new Error("Unknown node type "+a+".");d=this.__fallback(o)}for(h=d.length;(h-=1)>=0;)if(E=d[h],y=o[E])if(g(y)){for(m=y.length;(m-=1)>=0;)if(y[m]){if(f(a,d[h]))c=new p(y[m],[E,m],"Property",new l(y,m));else{if(!u(y[m]))continue;c=new p(y[m],[E,m],null,new l(y,m))}r.push(c)}}else u(y)&&r.push(new p(y,E,null,new l(o,E)))}}else if(c=i.pop(),s=this.__execute(t.leave,c),void 0!==s&&s!==k&&s!==v&&s!==w&&c.ref.replace(s),this.__state!==w&&s!==w||n(c),this.__state===k||s===k)return x.root;return x.root},t.version=__webpack_require__("./node_modules/escope/node_modules/estraverse/package.json").version,t.Syntax=_,t.traverse=h,t.replace=m,t.attachComments=y,t.VisitorKeys=E,t.VisitorOption=x,t.Controller=c,t.cloneEnvironment=function(){return e({})},t}(exports);

/***/ },

/***/ "./node_modules/escope/node_modules/estraverse/package.json":
/***/ function(module, exports) {

	module.exports = {
		"name": "estraverse",
		"description": "ECMAScript JS AST traversal functions",
		"homepage": "https://github.com/estools/estraverse",
		"main": "estraverse.js",
		"version": "4.2.0",
		"engines": {
			"node": ">=0.10.0"
		},
		"maintainers": [
			{
				"name": "Yusuke Suzuki",
				"email": "utatane.tea@gmail.com",
				"web": "http://github.com/Constellation"
			}
		],
		"repository": {
			"type": "git",
			"url": "http://github.com/estools/estraverse.git"
		},
		"devDependencies": {
			"babel-preset-es2015": "^6.3.13",
			"babel-register": "^6.3.13",
			"chai": "^2.1.1",
			"espree": "^1.11.0",
			"gulp": "^3.8.10",
			"gulp-bump": "^0.2.2",
			"gulp-filter": "^2.0.0",
			"gulp-git": "^1.0.1",
			"gulp-tag-version": "^1.2.1",
			"jshint": "^2.5.6",
			"mocha": "^2.1.0"
		},
		"license": "BSD-2-Clause",
		"scripts": {
			"test": "npm run-script lint && npm run-script unit-test",
			"lint": "jshint estraverse.js",
			"unit-test": "mocha --compilers js:babel-register"
		}
	};

/***/ },

/***/ "./node_modules/es6-map/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es6-map/is-implemented.js")()?Map:__webpack_require__("./node_modules/es6-map/polyfill.js");

/***/ },

/***/ "./node_modules/es6-map/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){var e,t,n;if("function"!=typeof Map)return!1;try{e=new Map([["raz","one"],["dwa","two"],["trzy","three"]])}catch(e){return!1}return"[object Map]"===String(e)&&(3===e.size&&("function"==typeof e.clear&&("function"==typeof e.delete&&("function"==typeof e.entries&&("function"==typeof e.forEach&&("function"==typeof e.get&&("function"==typeof e.has&&("function"==typeof e.keys&&("function"==typeof e.set&&("function"==typeof e.values&&(t=e.entries(),n=t.next(),n.done===!1&&(!!n.value&&("raz"===n.value[0]&&"one"===n.value[1])))))))))))))};

/***/ },

/***/ "./node_modules/es6-map/polyfill.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var clear=__webpack_require__("./node_modules/es5-ext/array/#/clear.js"),eIndexOf=__webpack_require__("./node_modules/es5-ext/array/#/e-index-of.js"),setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),validValue=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),d=__webpack_require__("./node_modules/d/index.js"),ee=__webpack_require__("./node_modules/event-emitter/index.js"),Symbol=__webpack_require__("./node_modules/es6-symbol/index.js"),iterator=__webpack_require__("./node_modules/es6-iterator/valid-iterable.js"),forOf=__webpack_require__("./node_modules/es6-iterator/for-of.js"),Iterator=__webpack_require__("./node_modules/es6-map/lib/iterator.js"),isNative=__webpack_require__("./node_modules/es6-map/is-native-implemented.js"),call=Function.prototype.call,defineProperties=Object.defineProperties,getPrototypeOf=Object.getPrototypeOf,MapPoly;module.exports=MapPoly=function(){var e,t,a,r=arguments[0];if(!(this instanceof MapPoly))throw new TypeError("Constructor requires 'new'");return a=isNative&&setPrototypeOf&&Map!==MapPoly?setPrototypeOf(new Map,getPrototypeOf(this)):this,null!=r&&iterator(r),defineProperties(a,{__mapKeysData__:d("c",e=[]),__mapValuesData__:d("c",t=[])}),r?(forOf(r,function(a){var r=validValue(a)[0];a=a[1],eIndexOf.call(e,r)===-1&&(e.push(r),t.push(a))},a),a):a},isNative&&(setPrototypeOf&&setPrototypeOf(MapPoly,Map),MapPoly.prototype=Object.create(Map.prototype,{constructor:d(MapPoly)})),ee(defineProperties(MapPoly.prototype,{clear:d(function(){this.__mapKeysData__.length&&(clear.call(this.__mapKeysData__),clear.call(this.__mapValuesData__),this.emit("_clear"))}),delete:d(function(e){var t=eIndexOf.call(this.__mapKeysData__,e);return t!==-1&&(this.__mapKeysData__.splice(t,1),this.__mapValuesData__.splice(t,1),this.emit("_delete",t,e),!0)}),entries:d(function(){return new Iterator(this,"key+value")}),forEach:d(function(e){var t,a,r=arguments[1];for(callable(e),t=this.entries(),a=t._next();void 0!==a;)call.call(e,r,this.__mapValuesData__[a],this.__mapKeysData__[a],this),a=t._next()}),get:d(function(e){var t=eIndexOf.call(this.__mapKeysData__,e);if(t!==-1)return this.__mapValuesData__[t]}),has:d(function(e){return eIndexOf.call(this.__mapKeysData__,e)!==-1}),keys:d(function(){return new Iterator(this,"key")}),set:d(function(e,t){var a,r=eIndexOf.call(this.__mapKeysData__,e);return r===-1&&(r=this.__mapKeysData__.push(e)-1,a=!0),this.__mapValuesData__[r]=t,a&&this.emit("_add",r,e),this}),size:d.gs(function(){return this.__mapKeysData__.length}),values:d(function(){return new Iterator(this,"value")}),toString:d(function(){return"[object Map]"})})),Object.defineProperty(MapPoly.prototype,Symbol.iterator,d(function(){return this.entries()})),Object.defineProperty(MapPoly.prototype,Symbol.toStringTag,d("c","Map"));

/***/ },

/***/ "./node_modules/es5-ext/array/#/e-index-of.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var toPosInt=__webpack_require__("./node_modules/es5-ext/number/to-pos-integer.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),indexOf=Array.prototype.indexOf,hasOwnProperty=Object.prototype.hasOwnProperty,abs=Math.abs,floor=Math.floor;module.exports=function(t){var r,e,o,s;if(t===t)return indexOf.apply(this,arguments);for(e=toPosInt(value(this).length),o=arguments[1],o=isNaN(o)?0:o>=0?floor(o):toPosInt(this.length)-floor(abs(o)),r=o;r<e;++r)if(hasOwnProperty.call(this,r)&&(s=this[r],s!==s))return r;return-1};

/***/ },

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var toInteger=__webpack_require__("./node_modules/es5-ext/number/to-integer.js"),max=Math.max;module.exports=function(e){return max(0,toInteger(e))};

/***/ },

/***/ "./node_modules/es5-ext/number/to-integer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var sign=__webpack_require__("./node_modules/es5-ext/math/sign/index.js"),abs=Math.abs,floor=Math.floor;module.exports=function(r){return isNaN(r)?0:(r=Number(r),0!==r&&isFinite(r)?sign(r)*floor(abs(r)):r)};

/***/ },

/***/ "./node_modules/es5-ext/math/sign/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/math/sign/is-implemented.js")()?Math.sign:__webpack_require__("./node_modules/es5-ext/math/sign/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){var t=Math.sign;return"function"==typeof t&&(1===t(10)&&t(-20)===-1)};

/***/ },

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1};

/***/ },

/***/ "./node_modules/event-emitter/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var d=__webpack_require__("./node_modules/d/index.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),apply=Function.prototype.apply,call=Function.prototype.call,create=Object.create,defineProperty=Object.defineProperty,defineProperties=Object.defineProperties,hasOwnProperty=Object.prototype.hasOwnProperty,descriptor={configurable:!0,enumerable:!1,writable:!0},on,once,off,emit,methods,descriptors,base;on=function(e,t){var r;return callable(t),hasOwnProperty.call(this,"__ee__")?r=this.__ee__:(r=descriptor.value=create(null),defineProperty(this,"__ee__",descriptor),descriptor.value=null),r[e]?"object"==typeof r[e]?r[e].push(t):r[e]=[r[e],t]:r[e]=t,this},once=function(e,t){var r,l;return callable(t),l=this,on.call(this,e,r=function(){off.call(l,e,r),apply.call(t,this,arguments)}),r.__eeOnceListener__=t,this},off=function(e,t){var r,l,o,i;if(callable(t),!hasOwnProperty.call(this,"__ee__"))return this;if(r=this.__ee__,!r[e])return this;if(l=r[e],"object"==typeof l)for(i=0;o=l[i];++i)o!==t&&o.__eeOnceListener__!==t||(2===l.length?r[e]=l[i?0:1]:l.splice(i,1));else l!==t&&l.__eeOnceListener__!==t||delete r[e];return this},emit=function(e){var t,r,l,o,i;if(hasOwnProperty.call(this,"__ee__")&&(o=this.__ee__[e]))if("object"==typeof o){for(r=arguments.length,i=new Array(r-1),t=1;t<r;++t)i[t-1]=arguments[t];for(o=o.slice(),t=0;l=o[t];++t)apply.call(l,this,i)}else switch(arguments.length){case 1:call.call(o,this);break;case 2:call.call(o,this,arguments[1]);break;case 3:call.call(o,this,arguments[1],arguments[2]);break;default:for(r=arguments.length,i=new Array(r-1),t=1;t<r;++t)i[t-1]=arguments[t];apply.call(o,this,i)}},methods={on:on,once:once,off:off,emit:emit},descriptors={on:d(on),once:d(once),off:d(off),emit:d(emit)},base=defineProperties({},descriptors),module.exports=exports=function(e){return null==e?create(base):defineProperties(Object(e),descriptors)},exports.methods=methods;

/***/ },

/***/ "./node_modules/es6-map/lib/iterator.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),d=__webpack_require__("./node_modules/d/index.js"),Iterator=__webpack_require__("./node_modules/es6-iterator/index.js"),toStringTagSymbol=__webpack_require__("./node_modules/es6-symbol/index.js").toStringTag,kinds=__webpack_require__("./node_modules/es6-map/lib/iterator-kinds.js"),defineProperties=Object.defineProperties,unBind=Iterator.prototype._unBind,MapIterator;MapIterator=module.exports=function(t,e){return this instanceof MapIterator?(Iterator.call(this,t.__mapKeysData__,t),e&&kinds[e]||(e="key+value"),void defineProperties(this,{__kind__:d("",e),__values__:d("w",t.__mapValuesData__)})):new MapIterator(t,e)},setPrototypeOf&&setPrototypeOf(MapIterator,Iterator),MapIterator.prototype=Object.create(Iterator.prototype,{constructor:d(MapIterator),_resolve:d(function(t){return"value"===this.__kind__?this.__values__[t]:"key"===this.__kind__?this.__list__[t]:[this.__list__[t],this.__values__[t]]}),_unBind:d(function(){this.__values__=null,unBind.call(this)}),toString:d(function(){return"[object Map Iterator]"})}),Object.defineProperty(MapIterator.prototype,toStringTagSymbol,d("c","Map Iterator"));

/***/ },

/***/ "./node_modules/es6-map/lib/iterator-kinds.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/primitive-set.js")("key","value","key+value");

/***/ },

/***/ "./node_modules/es5-ext/object/primitive-set.js":
/***/ function(module, exports) {

	"use strict";var forEach=Array.prototype.forEach,create=Object.create;module.exports=function(r){var e=create(null);return forEach.call(arguments,function(r){e[r]=!0}),e};

/***/ },

/***/ "./node_modules/es6-map/is-native-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){return"undefined"!=typeof Map&&"[object Map]"===Object.prototype.toString.call(new Map)}();

/***/ },

/***/ "./node_modules/escope/lib/reference.js":
/***/ function(module, exports) {

	"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),READ=1,WRITE=2,RW=READ|WRITE,Reference=function(){function e(t,i,n,r,a,s,l){_classCallCheck(this,e),this.identifier=t,this.from=i,this.tainted=!1,this.resolved=null,this.flag=n,this.isWrite()&&(this.writeExpr=r,this.partial=s,this.init=l),this.__maybeImplicitGlobal=a}return _createClass(e,[{key:"isStatic",value:function(){return!this.tainted&&this.resolved&&this.resolved.scope.isStatic()}},{key:"isWrite",value:function(){return!!(this.flag&e.WRITE)}},{key:"isRead",value:function(){return!!(this.flag&e.READ)}},{key:"isReadOnly",value:function(){return this.flag===e.READ}},{key:"isWriteOnly",value:function(){return this.flag===e.WRITE}},{key:"isReadWrite",value:function(){return this.flag===e.RW}}]),e}();exports.default=Reference,Reference.READ=READ,Reference.WRITE=WRITE,Reference.RW=RW;

/***/ },

/***/ "./node_modules/escope/lib/variable.js":
/***/ function(module, exports) {

	"use strict";function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var Variable=function a(e,i){_classCallCheck(this,a),this.name=e,this.identifiers=[],this.references=[],this.defs=[],this.tainted=!1,this.stack=!0,this.scope=i};exports.default=Variable,Variable.CatchClause="CatchClause",Variable.Parameter="Parameter",Variable.FunctionName="FunctionName",Variable.ClassName="ClassName",Variable.Variable="Variable",Variable.ImportBinding="ImportBinding",Variable.TDZ="TDZ",Variable.ImplicitGlobalVariable="ImplicitGlobalVariable";

/***/ },

/***/ "./node_modules/escope/lib/definition.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Definition=exports.ParameterDefinition=void 0;var _variable=__webpack_require__("./node_modules/escope/lib/variable.js"),_variable2=_interopRequireDefault(_variable),Definition=function e(t,i,n,r,o,a){_classCallCheck(this,e),this.type=t,this.name=i,this.node=n,this.parent=r,this.index=o,this.kind=a};exports.default=Definition;var ParameterDefinition=function(e){function t(e,i,n,r){_classCallCheck(this,t);var o=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,_variable2.default.Parameter,e,i,null,n,null));return o.rest=r,o}return _inherits(t,e),t}(Definition);exports.ParameterDefinition=ParameterDefinition,exports.Definition=Definition;

/***/ },

/***/ "./node_modules/escope/lib/referencer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function traverseIdentifierInPattern(e,t,i,n){var r=new _patternVisitor2.default(e,t,n);r.visit(t),null!=i&&r.rightHandNodes.forEach(i.visit,i)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_estraverse=__webpack_require__("./node_modules/escope/node_modules/estraverse/estraverse.js"),_esrecurse=__webpack_require__("./node_modules/esrecurse/esrecurse.js"),_esrecurse2=_interopRequireDefault(_esrecurse),_reference=__webpack_require__("./node_modules/escope/lib/reference.js"),_reference2=_interopRequireDefault(_reference),_variable=__webpack_require__("./node_modules/escope/lib/variable.js"),_variable2=_interopRequireDefault(_variable),_patternVisitor=__webpack_require__("./node_modules/escope/lib/pattern-visitor.js"),_patternVisitor2=_interopRequireDefault(_patternVisitor),_definition=__webpack_require__("./node_modules/escope/lib/definition.js"),_assert=__webpack_require__("./node_modules/assert/assert.js"),_assert2=_interopRequireDefault(_assert),Importer=function(e){function t(e,i){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,null,i.options));return n.declaration=e,n.referencer=i,n}return _inherits(t,e),_createClass(t,[{key:"visitImport",value:function(e,t){var i=this;this.referencer.visitPattern(e,function(e){i.referencer.currentScope().__define(e,new _definition.Definition(_variable2.default.ImportBinding,e,t,i.declaration,null,null))})}},{key:"ImportNamespaceSpecifier",value:function(e){var t=e.local||e.id;t&&this.visitImport(t,e)}},{key:"ImportDefaultSpecifier",value:function(e){var t=e.local||e.id;this.visitImport(t,e)}},{key:"ImportSpecifier",value:function(e){var t=e.local||e.id;e.name?this.visitImport(e.name,e):this.visitImport(t,e)}}]),t}(_esrecurse2.default.Visitor),Referencer=function(e){function t(e,i){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,null,e));return n.options=e,n.scopeManager=i,n.parent=null,n.isInnerMethodDefinition=!1,n}return _inherits(t,e),_createClass(t,[{key:"currentScope",value:function(){return this.scopeManager.__currentScope}},{key:"close",value:function(e){for(;this.currentScope()&&e===this.currentScope().block;)this.scopeManager.__currentScope=this.currentScope().__close(this.scopeManager)}},{key:"pushInnerMethodDefinition",value:function(e){var t=this.isInnerMethodDefinition;return this.isInnerMethodDefinition=e,t}},{key:"popInnerMethodDefinition",value:function(e){this.isInnerMethodDefinition=e}},{key:"materializeTDZScope",value:function(e,t){this.scopeManager.__nestTDZScope(e,t),this.visitVariableDeclaration(this.currentScope(),_variable2.default.TDZ,t.left,0,!0)}},{key:"materializeIterationScope",value:function(e){var t,i=this;this.scopeManager.__nestForScope(e),t=e.left,this.visitVariableDeclaration(this.currentScope(),_variable2.default.Variable,t,0),this.visitPattern(t.declarations[0].id,function(t){i.currentScope().__referencing(t,_reference2.default.WRITE,e.right,null,!0,!0)})}},{key:"referencingDefaultValue",value:function(e,t,i,n){var r=this.currentScope();t.forEach(function(t){r.__referencing(e,_reference2.default.WRITE,t.right,i,e!==t.left,n)})}},{key:"visitPattern",value:function(e,t,i){"function"==typeof t&&(i=t,t={processRightHandNodes:!1}),traverseIdentifierInPattern(this.options,e,t.processRightHandNodes?this:null,i)}},{key:"visitFunction",value:function(e){var t,i,n=this;for(e.type===_estraverse.Syntax.FunctionDeclaration&&this.currentScope().__define(e.id,new _definition.Definition(_variable2.default.FunctionName,e.id,e,null,null,null)),e.type===_estraverse.Syntax.FunctionExpression&&e.id&&this.scopeManager.__nestFunctionExpressionNameScope(e),this.scopeManager.__nestFunctionScope(e,this.isInnerMethodDefinition),t=0,i=e.params.length;t<i;++t)this.visitPattern(e.params[t],{processRightHandNodes:!0},function(i,r){n.currentScope().__define(i,new _definition.ParameterDefinition(i,e,t,r.rest)),n.referencingDefaultValue(i,r.assignments,null,!0)});e.rest&&this.visitPattern({type:"RestElement",argument:e.rest},function(t){n.currentScope().__define(t,new _definition.ParameterDefinition(t,e,e.params.length,!0))}),e.body.type===_estraverse.Syntax.BlockStatement?this.visitChildren(e.body):this.visit(e.body),this.close(e)}},{key:"visitClass",value:function(e){e.type===_estraverse.Syntax.ClassDeclaration&&this.currentScope().__define(e.id,new _definition.Definition(_variable2.default.ClassName,e.id,e,null,null,null)),this.visit(e.superClass),this.scopeManager.__nestClassScope(e),e.id&&this.currentScope().__define(e.id,new _definition.Definition(_variable2.default.ClassName,e.id,e)),this.visit(e.body),this.close(e)}},{key:"visitProperty",value:function(e){var t,i;e.computed&&this.visit(e.key),i=e.type===_estraverse.Syntax.MethodDefinition,i&&(t=this.pushInnerMethodDefinition(!0)),this.visit(e.value),i&&this.popInnerMethodDefinition(t)}},{key:"visitForIn",value:function(e){var t=this;e.left.type===_estraverse.Syntax.VariableDeclaration&&"var"!==e.left.kind?(this.materializeTDZScope(e.right,e),this.visit(e.right),this.close(e.right),this.materializeIterationScope(e),this.visit(e.body),this.close(e)):(e.left.type===_estraverse.Syntax.VariableDeclaration?(this.visit(e.left),this.visitPattern(e.left.declarations[0].id,function(i){t.currentScope().__referencing(i,_reference2.default.WRITE,e.right,null,!0,!0)})):this.visitPattern(e.left,{processRightHandNodes:!0},function(i,n){var r=null;t.currentScope().isStrict||(r={pattern:i,node:e}),t.referencingDefaultValue(i,n.assignments,r,!1),t.currentScope().__referencing(i,_reference2.default.WRITE,e.right,r,!0,!1)}),this.visit(e.right),this.visit(e.body))}},{key:"visitVariableDeclaration",value:function(e,t,i,n,r){var s,a,o=this;s=i.declarations[n],a=s.init,this.visitPattern(s.id,{processRightHandNodes:!r},function(c,l){e.__define(c,new _definition.Definition(t,c,s,i,n,i.kind)),r||o.referencingDefaultValue(c,l.assignments,null,!0),a&&o.currentScope().__referencing(c,_reference2.default.WRITE,a,null,!l.topLevel,!0)})}},{key:"AssignmentExpression",value:function(e){var t=this;_patternVisitor2.default.isPattern(e.left)?"="===e.operator?this.visitPattern(e.left,{processRightHandNodes:!0},function(i,n){var r=null;t.currentScope().isStrict||(r={pattern:i,node:e}),t.referencingDefaultValue(i,n.assignments,r,!1),t.currentScope().__referencing(i,_reference2.default.WRITE,e.right,r,!n.topLevel,!1)}):this.currentScope().__referencing(e.left,_reference2.default.RW,e.right):this.visit(e.left),this.visit(e.right)}},{key:"CatchClause",value:function(e){var t=this;this.scopeManager.__nestCatchScope(e),this.visitPattern(e.param,{processRightHandNodes:!0},function(i,n){t.currentScope().__define(i,new _definition.Definition(_variable2.default.CatchClause,e.param,e,null,null,null)),t.referencingDefaultValue(i,n.assignments,null,!0)}),this.visit(e.body),this.close(e)}},{key:"Program",value:function(e){this.scopeManager.__nestGlobalScope(e),this.scopeManager.__isNodejsScope()&&(this.currentScope().isStrict=!1,this.scopeManager.__nestFunctionScope(e,!1)),this.scopeManager.__isES6()&&this.scopeManager.isModule()&&this.scopeManager.__nestModuleScope(e),this.scopeManager.isStrictModeSupported()&&this.scopeManager.isImpliedStrict()&&(this.currentScope().isStrict=!0),this.visitChildren(e),this.close(e)}},{key:"Identifier",value:function(e){this.currentScope().__referencing(e)}},{key:"UpdateExpression",value:function(e){_patternVisitor2.default.isPattern(e.argument)?this.currentScope().__referencing(e.argument,_reference2.default.RW,null):this.visitChildren(e)}},{key:"MemberExpression",value:function(e){this.visit(e.object),e.computed&&this.visit(e.property)}},{key:"Property",value:function(e){this.visitProperty(e)}},{key:"MethodDefinition",value:function(e){this.visitProperty(e)}},{key:"BreakStatement",value:function(){}},{key:"ContinueStatement",value:function(){}},{key:"LabeledStatement",value:function(e){this.visit(e.body)}},{key:"ForStatement",value:function(e){e.init&&e.init.type===_estraverse.Syntax.VariableDeclaration&&"var"!==e.init.kind&&this.scopeManager.__nestForScope(e),this.visitChildren(e),this.close(e)}},{key:"ClassExpression",value:function(e){this.visitClass(e)}},{key:"ClassDeclaration",value:function(e){this.visitClass(e)}},{key:"CallExpression",value:function(e){this.scopeManager.__ignoreEval()||e.callee.type!==_estraverse.Syntax.Identifier||"eval"!==e.callee.name||this.currentScope().variableScope.__detectEval(),this.visitChildren(e)}},{key:"BlockStatement",value:function(e){this.scopeManager.__isES6()&&this.scopeManager.__nestBlockScope(e),this.visitChildren(e),this.close(e)}},{key:"ThisExpression",value:function(){this.currentScope().variableScope.__detectThis()}},{key:"WithStatement",value:function(e){this.visit(e.object),this.scopeManager.__nestWithScope(e),this.visit(e.body),this.close(e)}},{key:"VariableDeclaration",value:function(e){var t,i,n,r;for(t="var"===e.kind?this.currentScope().variableScope:this.currentScope(),i=0,n=e.declarations.length;i<n;++i)r=e.declarations[i],this.visitVariableDeclaration(t,_variable2.default.Variable,e,i),r.init&&this.visit(r.init)}},{key:"SwitchStatement",value:function(e){var t,i;for(this.visit(e.discriminant),this.scopeManager.__isES6()&&this.scopeManager.__nestSwitchScope(e),t=0,i=e.cases.length;t<i;++t)this.visit(e.cases[t]);this.close(e)}},{key:"FunctionDeclaration",value:function(e){this.visitFunction(e)}},{key:"FunctionExpression",value:function(e){this.visitFunction(e)}},{key:"ForOfStatement",value:function(e){this.visitForIn(e)}},{key:"ForInStatement",value:function(e){this.visitForIn(e)}},{key:"ArrowFunctionExpression",value:function(e){this.visitFunction(e)}},{key:"ImportDeclaration",value:function(e){var t;(0,_assert2.default)(this.scopeManager.__isES6()&&this.scopeManager.isModule(),"ImportDeclaration should appear when the mode is ES6 and in the module context."),t=new Importer(e,this),t.visit(e)}},{key:"visitExportDeclaration",value:function(e){if(!e.source)return e.declaration?void this.visit(e.declaration):void this.visitChildren(e)}},{key:"ExportDeclaration",value:function(e){this.visitExportDeclaration(e)}},{key:"ExportNamedDeclaration",value:function(e){this.visitExportDeclaration(e)}},{key:"ExportSpecifier",value:function(e){var t=e.id||e.local;this.visit(t)}},{key:"MetaProperty",value:function(){}}]),t}(_esrecurse2.default.Visitor);exports.default=Referencer;

/***/ },

/***/ "./node_modules/esrecurse/esrecurse.js":
/***/ function(module, exports, __webpack_require__) {

	!function(){"use strict";function t(t){return null!=t&&("object"==typeof t&&"string"==typeof t.type)}function i(t,i){return(t===s.Syntax.ObjectExpression||t===s.Syntax.ObjectPattern)&&"properties"===i}function r(t,i){i=i||{},this.__visitor=t||this,this.__childVisitorKeys=i.childVisitorKeys?e({},s.VisitorKeys,i.childVisitorKeys):s.VisitorKeys,"iteration"===i.fallback?this.__fallback=n:"function"==typeof i.fallback&&(this.__fallback=i.fallback)}var e,s,o,n;e=__webpack_require__("./node_modules/object-assign/index.js"),s=__webpack_require__("./node_modules/esrecurse/node_modules/estraverse/estraverse.js"),o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=Object.keys||function(t){var i,r=[];for(i in t)r.push(i);return r},r.prototype.visitChildren=function(r){var e,n,a,l,c,f,y;if(null!=r){if(e=r.type||s.Syntax.Property,n=this.__childVisitorKeys[e],!n){if(!this.__fallback)throw new Error("Unknown node type "+e+".");n=this.__fallback(r)}for(a=0,l=n.length;a<l;++a)if(y=r[n[a]])if(o(y))for(c=0,f=y.length;c<f;++c)y[c]&&(t(y[c])||i(e,n[a]))&&this.visit(y[c]);else t(y)&&this.visit(y)}},r.prototype.visit=function(t){var i;if(null!=t)return i=t.type||s.Syntax.Property,this.__visitor[i]?void this.__visitor[i].call(this,t):void this.visitChildren(t)},exports.version=__webpack_require__("./node_modules/esrecurse/package.json").version,exports.Visitor=r,exports.visit=function(t,i,e){var s=new r(i,e);s.visit(t)}}();

/***/ },

/***/ "./node_modules/esrecurse/node_modules/estraverse/estraverse.js":
/***/ function(module, exports, __webpack_require__) {

	!function e(t){"use strict";function n(){}function r(e){var t,n,i={};for(t in e)e.hasOwnProperty(t)&&(n=e[t],"object"==typeof n&&null!==n?i[t]=r(n):i[t]=n);return i}function i(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function o(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?r=n:(i=o+1,r-=n+1);return i}function a(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?(i=o+1,r-=n+1):r=n;return i}function s(e,t){var n,r,i,o=b(t);for(r=0,i=o.length;r<i;r+=1)n=o[r],e[n]=t[n];return e}function l(e,t){this.parent=e,this.key=t}function p(e,t,n,r){this.node=e,this.path=t,this.wrap=n,this.ref=r}function u(){}function c(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function h(e,t){return(e===g.ObjectExpression||e===g.ObjectPattern)&&"properties"===t}function f(e,t){var n=new u;return n.traverse(e,t)}function m(e,t){var n=new u;return n.replace(e,t)}function d(e,t){var n;return n=o(t,function(t){return t.range[0]>e.range[0]}),e.extendedRange=[e.range[0],e.range[1]],n!==t.length&&(e.extendedRange[1]=t[n].range[0]),n-=1,n>=0&&(e.extendedRange[0]=t[n].range[1]),e}function y(e,t,n){var i,o,a,s,l=[];if(!e.range)throw new Error("attachComments needs range information");if(!n.length){if(t.length){for(a=0,o=t.length;a<o;a+=1)i=r(t[a]),i.extendedRange=[0,e.range[0]],l.push(i);e.leadingComments=l}return e}for(a=0,o=t.length;a<o;a+=1)l.push(d(r(t[a]),n));return s=0,f(e,{enter:function(e){for(var t;s<l.length&&(t=l[s],!(t.extendedRange[1]>e.range[0]));)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?E.Break:l[s].extendedRange[0]>e.range[1]?E.Skip:void 0}}),s=0,f(e,{leave:function(e){for(var t;s<l.length&&(t=l[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?E.Break:l[s].extendedRange[0]>e.range[1]?E.Skip:void 0}}),e}var g,x,E,_,S,b,v,w,k;return x=Array.isArray,x||(x=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),n(i),n(a),S=Object.create||function(){function e(){}return function(t){return e.prototype=t,new e}}(),b=Object.keys||function(e){var t,n=[];for(t in e)n.push(t);return n},g={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},_={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},v={},w={},k={},E={Break:v,Skip:w,Remove:k},l.prototype.replace=function(e){this.parent[this.key]=e},l.prototype.remove=function(){return x(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},u.prototype.path=function(){function e(e,t){if(x(t))for(r=0,i=t.length;r<i;++r)e.push(t[r]);else e.push(t)}var t,n,r,i,o,a;if(!this.__current.path)return null;for(o=[],t=2,n=this.__leavelist.length;t<n;++t)a=this.__leavelist[t],e(o,a.path);return e(o,this.__current.path),o},u.prototype.type=function(){var e=this.current();return e.type||this.__current.wrap},u.prototype.parents=function(){var e,t,n;for(n=[],e=1,t=this.__leavelist.length;e<t;++e)n.push(this.__leavelist[e].node);return n},u.prototype.current=function(){return this.__current.node},u.prototype.__execute=function(e,t){var n,r;return r=void 0,n=this.__current,this.__current=t,this.__state=null,e&&(r=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=n,r},u.prototype.notify=function(e){this.__state=e},u.prototype.skip=function(){this.notify(w)},u.prototype.break=function(){this.notify(v)},u.prototype.remove=function(){this.notify(k)},u.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback="iteration"===t.fallback,this.__keys=_,t.keys&&(this.__keys=s(S(this.__keys),t.keys))},u.prototype.traverse=function(e,t){var n,r,i,o,a,s,l,u,f,m,d,y;for(this.__initialize(e,t),y={},n=this.__worklist,r=this.__leavelist,n.push(new p(e,null,null,null)),r.push(new p(null,null,null,null));n.length;)if(i=n.pop(),i!==y){if(i.node){if(s=this.__execute(t.enter,i),this.__state===v||s===v)return;if(n.push(y),r.push(i),this.__state===w||s===w)continue;if(o=i.node,a=o.type||i.wrap,m=this.__keys[a],!m){if(!this.__fallback)throw new Error("Unknown node type "+a+".");m=b(o)}for(u=m.length;(u-=1)>=0;)if(l=m[u],d=o[l])if(x(d)){for(f=d.length;(f-=1)>=0;)if(d[f]){if(h(a,m[u]))i=new p(d[f],[l,f],"Property",null);else{if(!c(d[f]))continue;i=new p(d[f],[l,f],null,null)}n.push(i)}}else c(d)&&n.push(new p(d,l,null,null))}}else if(i=r.pop(),s=this.__execute(t.leave,i),this.__state===v||s===v)return},u.prototype.replace=function(e,t){function n(e){var t,n,i,o;if(e.ref.remove())for(n=e.ref.key,o=e.ref.parent,t=r.length;t--;)if(i=r[t],i.ref&&i.ref.parent===o){if(i.ref.key<n)break;--i.ref.key}}var r,i,o,a,s,u,f,m,d,y,g,E,_;for(this.__initialize(e,t),g={},r=this.__worklist,i=this.__leavelist,E={root:e},u=new p(e,null,null,new l(E,"root")),r.push(u),i.push(u);r.length;)if(u=r.pop(),u!==g){if(s=this.__execute(t.enter,u),void 0!==s&&s!==v&&s!==w&&s!==k&&(u.ref.replace(s),u.node=s),this.__state!==k&&s!==k||(n(u),u.node=null),this.__state===v||s===v)return E.root;if(o=u.node,o&&(r.push(g),i.push(u),this.__state!==w&&s!==w)){if(a=o.type||u.wrap,d=this.__keys[a],!d){if(!this.__fallback)throw new Error("Unknown node type "+a+".");d=b(o)}for(f=d.length;(f-=1)>=0;)if(_=d[f],y=o[_])if(x(y)){for(m=y.length;(m-=1)>=0;)if(y[m]){if(h(a,d[f]))u=new p(y[m],[_,m],"Property",new l(y,m));else{if(!c(y[m]))continue;u=new p(y[m],[_,m],null,new l(y,m))}r.push(u)}}else c(y)&&r.push(new p(y,_,null,new l(o,_)))}}else if(u=i.pop(),s=this.__execute(t.leave,u),void 0!==s&&s!==v&&s!==w&&s!==k&&u.ref.replace(s),this.__state!==k&&s!==k||n(u),this.__state===v||s===v)return E.root;return E.root},t.version=__webpack_require__("./node_modules/esrecurse/node_modules/estraverse/package.json").version,t.Syntax=g,t.traverse=f,t.replace=m,t.attachComments=y,t.VisitorKeys=_,t.VisitorOption=E,t.Controller=u,t.cloneEnvironment=function(){return e({})},t}(exports);

/***/ },

/***/ "./node_modules/esrecurse/node_modules/estraverse/package.json":
/***/ function(module, exports) {

	module.exports = {
		"name": "estraverse",
		"description": "ECMAScript JS AST traversal functions",
		"homepage": "https://github.com/estools/estraverse",
		"main": "estraverse.js",
		"version": "4.1.1",
		"engines": {
			"node": ">=0.10.0"
		},
		"maintainers": [
			{
				"name": "Yusuke Suzuki",
				"email": "utatane.tea@gmail.com",
				"web": "http://github.com/Constellation"
			}
		],
		"repository": {
			"type": "git",
			"url": "http://github.com/estools/estraverse.git"
		},
		"devDependencies": {
			"chai": "^2.1.1",
			"coffee-script": "^1.8.0",
			"espree": "^1.11.0",
			"gulp": "^3.8.10",
			"gulp-bump": "^0.2.2",
			"gulp-filter": "^2.0.0",
			"gulp-git": "^1.0.1",
			"gulp-tag-version": "^1.2.1",
			"jshint": "^2.5.6",
			"mocha": "^2.1.0"
		},
		"license": "BSD-2-Clause",
		"scripts": {
			"test": "npm run-script lint && npm run-script unit-test",
			"lint": "jshint estraverse.js",
			"unit-test": "mocha --compilers coffee:coffee-script/register"
		}
	};

/***/ },

/***/ "./node_modules/esrecurse/package.json":
/***/ function(module, exports) {

	module.exports = {
		"name": "esrecurse",
		"description": "ECMAScript AST recursive visitor",
		"homepage": "https://github.com/estools/esrecurse",
		"main": "esrecurse.js",
		"version": "4.1.0",
		"engines": {
			"node": ">=0.10.0"
		},
		"maintainers": [
			{
				"name": "Yusuke Suzuki",
				"email": "utatane.tea@gmail.com",
				"web": "https://github.com/Constellation"
			}
		],
		"repository": {
			"type": "git",
			"url": "https://github.com/estools/esrecurse.git"
		},
		"dependencies": {
			"estraverse": "~4.1.0",
			"object-assign": "^4.0.1"
		},
		"devDependencies": {
			"chai": "^3.3.0",
			"coffee-script": "^1.9.1",
			"esprima": "^2.1.0",
			"gulp": "^3.9.0",
			"gulp-bump": "^1.0.0",
			"gulp-eslint": "^1.0.0",
			"gulp-filter": "^3.0.1",
			"gulp-git": "^1.1.0",
			"gulp-mocha": "^2.1.3",
			"gulp-tag-version": "^1.2.1",
			"jsdoc": "^3.3.0-alpha10",
			"minimist": "^1.1.0"
		},
		"license": "BSD-2-Clause",
		"scripts": {
			"test": "gulp travis",
			"unit-test": "gulp test",
			"lint": "gulp lint"
		}
	};

/***/ },

/***/ "./node_modules/escope/lib/pattern-visitor.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getLast(e){return e[e.length-1]||null}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}(),_estraverse=__webpack_require__("./node_modules/escope/node_modules/estraverse/estraverse.js"),_esrecurse=__webpack_require__("./node_modules/esrecurse/esrecurse.js"),_esrecurse2=_interopRequireDefault(_esrecurse),PatternVisitor=function(e){function t(e,s,r){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,null,e));return n.rootPattern=s,n.callback=r,n.assignments=[],n.rightHandNodes=[],n.restElements=[],n}return _inherits(t,e),_createClass(t,null,[{key:"isPattern",value:function(e){var t=e.type;return t===_estraverse.Syntax.Identifier||t===_estraverse.Syntax.ObjectPattern||t===_estraverse.Syntax.ArrayPattern||t===_estraverse.Syntax.SpreadElement||t===_estraverse.Syntax.RestElement||t===_estraverse.Syntax.AssignmentPattern}}]),_createClass(t,[{key:"Identifier",value:function(e){var t=getLast(this.restElements);this.callback(e,{topLevel:e===this.rootPattern,rest:null!=t&&t.argument===e,assignments:this.assignments})}},{key:"Property",value:function(e){e.computed&&this.rightHandNodes.push(e.key),this.visit(e.value)}},{key:"ArrayPattern",value:function(e){var t,s,r;for(t=0,s=e.elements.length;t<s;++t)r=e.elements[t],this.visit(r)}},{key:"AssignmentPattern",value:function(e){this.assignments.push(e),this.visit(e.left),this.rightHandNodes.push(e.right),this.assignments.pop()}},{key:"RestElement",value:function(e){this.restElements.push(e),this.visit(e.argument),this.restElements.pop()}},{key:"MemberExpression",value:function(e){e.computed&&this.rightHandNodes.push(e.property),this.rightHandNodes.push(e.object)}},{key:"SpreadElement",value:function(e){this.visit(e.argument)}},{key:"ArrayExpression",value:function(e){e.elements.forEach(this.visit,this)}},{key:"AssignmentExpression",value:function(e){this.assignments.push(e),this.visit(e.left),this.rightHandNodes.push(e.right),this.assignments.pop()}},{key:"CallExpression",value:function(e){var t=this;e.arguments.forEach(function(e){t.rightHandNodes.push(e)}),this.visit(e.callee)}}]),t}(_esrecurse2.default.Visitor);exports.default=PatternVisitor;

/***/ },

/***/ "./node_modules/escope/package.json":
/***/ function(module, exports) {

	module.exports = {
		"name": "escope",
		"description": "ECMAScript scope analyzer",
		"homepage": "http://github.com/estools/escope",
		"main": "lib/index.js",
		"version": "3.6.0",
		"engines": {
			"node": ">=0.4.0"
		},
		"maintainers": [
			{
				"name": "Yusuke Suzuki",
				"email": "utatane.tea@gmail.com",
				"web": "http://github.com/Constellation"
			}
		],
		"repository": {
			"type": "git",
			"url": "https://github.com/estools/escope.git"
		},
		"dependencies": {
			"es6-map": "^0.1.3",
			"es6-weak-map": "^2.0.1",
			"esrecurse": "^4.1.0",
			"estraverse": "^4.1.1"
		},
		"devDependencies": {
			"babel": "^6.3.26",
			"babel-preset-es2015": "^6.3.13",
			"babel-register": "^6.3.13",
			"browserify": "^13.0.0",
			"chai": "^3.4.1",
			"espree": "^3.1.1",
			"esprima": "^2.7.1",
			"gulp": "^3.9.0",
			"gulp-babel": "^6.1.1",
			"gulp-bump": "^1.0.0",
			"gulp-eslint": "^1.1.1",
			"gulp-espower": "^1.0.2",
			"gulp-filter": "^3.0.1",
			"gulp-git": "^1.6.1",
			"gulp-mocha": "^2.2.0",
			"gulp-plumber": "^1.0.1",
			"gulp-sourcemaps": "^1.6.0",
			"gulp-tag-version": "^1.3.0",
			"jsdoc": "^3.4.0",
			"lazypipe": "^1.0.1",
			"vinyl-source-stream": "^1.1.0"
		},
		"license": "BSD-2-Clause",
		"scripts": {
			"test": "gulp travis",
			"unit-test": "gulp test",
			"lint": "gulp lint",
			"jsdoc": "jsdoc src/*.js README.md"
		}
	};

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/conf/environments.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var globals=__webpack_require__("./node_modules/eslint1/node_modules/globals/index.js");module.exports={builtin:globals.builtin,browser:{globals:globals.browser},node:{globals:globals.node,ecmaFeatures:{globalReturn:!0}},commonjs:{globals:globals.commonjs,ecmaFeatures:{globalReturn:!0}},worker:{globals:globals.worker},amd:{globals:globals.amd},mocha:{globals:globals.mocha},jasmine:{globals:globals.jasmine},jest:{globals:globals.jest},phantomjs:{globals:globals.phantomjs},jquery:{globals:globals.jquery},qunit:{globals:globals.qunit},prototypejs:{globals:globals.prototypejs},shelljs:{globals:globals.shelljs},meteor:{globals:globals.meteor},mongo:{globals:globals.mongo},protractor:{globals:globals.protractor},applescript:{globals:globals.applescript},nashorn:{globals:globals.nashorn},serviceworker:{globals:globals.serviceworker},embertest:{globals:globals.embertest},webextensions:{globals:globals.webextensions},es6:{ecmaFeatures:{arrowFunctions:!0,blockBindings:!0,regexUFlag:!0,regexYFlag:!0,templateStrings:!0,binaryLiterals:!0,octalLiterals:!0,unicodeCodePointEscapes:!0,superInFunctions:!0,defaultParams:!0,restParams:!0,forOf:!0,objectLiteralComputedProperties:!0,objectLiteralShorthandMethods:!0,objectLiteralShorthandProperties:!0,objectLiteralDuplicateProperties:!0,generators:!0,destructuring:!0,classes:!0,spread:!0,newTarget:!0}}};

/***/ },

/***/ "./node_modules/eslint1/node_modules/globals/index.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports=__webpack_require__("./node_modules/eslint1/node_modules/globals/globals.json");

/***/ },

/***/ "./node_modules/eslint1/node_modules/globals/globals.json":
/***/ function(module, exports) {

	module.exports = {
		"builtin": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"es5": {
			"Array": false,
			"Boolean": false,
			"constructor": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"propertyIsEnumerable": false,
			"RangeError": false,
			"ReferenceError": false,
			"RegExp": false,
			"String": false,
			"SyntaxError": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false
		},
		"es6": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"browser": {
			"addEventListener": false,
			"alert": false,
			"AnalyserNode": false,
			"AnimationEvent": false,
			"applicationCache": false,
			"ApplicationCache": false,
			"ApplicationCacheErrorEvent": false,
			"atob": false,
			"Attr": false,
			"Audio": false,
			"AudioBuffer": false,
			"AudioBufferSourceNode": false,
			"AudioContext": false,
			"AudioDestinationNode": false,
			"AudioListener": false,
			"AudioNode": false,
			"AudioParam": false,
			"AudioProcessingEvent": false,
			"AutocompleteErrorEvent": false,
			"BarProp": false,
			"BatteryManager": false,
			"BeforeUnloadEvent": false,
			"BiquadFilterNode": false,
			"Blob": false,
			"blur": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"CacheStorage": false,
			"cancelAnimationFrame": false,
			"CanvasGradient": false,
			"CanvasPattern": false,
			"CanvasRenderingContext2D": false,
			"CDATASection": false,
			"ChannelMergerNode": false,
			"ChannelSplitterNode": false,
			"CharacterData": false,
			"clearInterval": false,
			"clearTimeout": false,
			"clientInformation": false,
			"ClientRect": false,
			"ClientRectList": false,
			"ClipboardEvent": false,
			"close": false,
			"closed": false,
			"CloseEvent": false,
			"Comment": false,
			"CompositionEvent": false,
			"confirm": false,
			"console": false,
			"ConvolverNode": false,
			"crypto": false,
			"Crypto": false,
			"CryptoKey": false,
			"CSS": false,
			"CSSFontFaceRule": false,
			"CSSImportRule": false,
			"CSSKeyframeRule": false,
			"CSSKeyframesRule": false,
			"CSSMediaRule": false,
			"CSSPageRule": false,
			"CSSRule": false,
			"CSSRuleList": false,
			"CSSStyleDeclaration": false,
			"CSSStyleRule": false,
			"CSSStyleSheet": false,
			"CSSSupportsRule": false,
			"CSSUnknownRule": false,
			"CSSViewportRule": false,
			"CustomEvent": false,
			"DataTransfer": false,
			"DataTransferItem": false,
			"DataTransferItemList": false,
			"Debug": false,
			"defaultStatus": false,
			"defaultstatus": false,
			"DelayNode": false,
			"DeviceMotionEvent": false,
			"DeviceOrientationEvent": false,
			"devicePixelRatio": false,
			"dispatchEvent": false,
			"document": false,
			"Document": false,
			"DocumentFragment": false,
			"DocumentType": false,
			"DOMError": false,
			"DOMException": false,
			"DOMImplementation": false,
			"DOMParser": false,
			"DOMSettableTokenList": false,
			"DOMStringList": false,
			"DOMStringMap": false,
			"DOMTokenList": false,
			"DragEvent": false,
			"DynamicsCompressorNode": false,
			"Element": false,
			"ElementTimeControl": false,
			"ErrorEvent": false,
			"event": false,
			"Event": false,
			"EventSource": false,
			"EventTarget": false,
			"external": false,
			"fetch": false,
			"File": false,
			"FileError": false,
			"FileList": false,
			"FileReader": false,
			"find": false,
			"focus": false,
			"FocusEvent": false,
			"FontFace": false,
			"FormData": false,
			"frameElement": false,
			"frames": false,
			"GainNode": false,
			"Gamepad": false,
			"GamepadButton": false,
			"GamepadEvent": false,
			"getComputedStyle": false,
			"getSelection": false,
			"HashChangeEvent": false,
			"Headers": false,
			"history": false,
			"History": false,
			"HTMLAllCollection": false,
			"HTMLAnchorElement": false,
			"HTMLAppletElement": false,
			"HTMLAreaElement": false,
			"HTMLAudioElement": false,
			"HTMLBaseElement": false,
			"HTMLBlockquoteElement": false,
			"HTMLBodyElement": false,
			"HTMLBRElement": false,
			"HTMLButtonElement": false,
			"HTMLCanvasElement": false,
			"HTMLCollection": false,
			"HTMLContentElement": false,
			"HTMLDataListElement": false,
			"HTMLDetailsElement": false,
			"HTMLDialogElement": false,
			"HTMLDirectoryElement": false,
			"HTMLDivElement": false,
			"HTMLDListElement": false,
			"HTMLDocument": false,
			"HTMLElement": false,
			"HTMLEmbedElement": false,
			"HTMLFieldSetElement": false,
			"HTMLFontElement": false,
			"HTMLFormControlsCollection": false,
			"HTMLFormElement": false,
			"HTMLFrameElement": false,
			"HTMLFrameSetElement": false,
			"HTMLHeadElement": false,
			"HTMLHeadingElement": false,
			"HTMLHRElement": false,
			"HTMLHtmlElement": false,
			"HTMLIFrameElement": false,
			"HTMLImageElement": false,
			"HTMLInputElement": false,
			"HTMLIsIndexElement": false,
			"HTMLKeygenElement": false,
			"HTMLLabelElement": false,
			"HTMLLayerElement": false,
			"HTMLLegendElement": false,
			"HTMLLIElement": false,
			"HTMLLinkElement": false,
			"HTMLMapElement": false,
			"HTMLMarqueeElement": false,
			"HTMLMediaElement": false,
			"HTMLMenuElement": false,
			"HTMLMetaElement": false,
			"HTMLMeterElement": false,
			"HTMLModElement": false,
			"HTMLObjectElement": false,
			"HTMLOListElement": false,
			"HTMLOptGroupElement": false,
			"HTMLOptionElement": false,
			"HTMLOptionsCollection": false,
			"HTMLOutputElement": false,
			"HTMLParagraphElement": false,
			"HTMLParamElement": false,
			"HTMLPictureElement": false,
			"HTMLPreElement": false,
			"HTMLProgressElement": false,
			"HTMLQuoteElement": false,
			"HTMLScriptElement": false,
			"HTMLSelectElement": false,
			"HTMLShadowElement": false,
			"HTMLSourceElement": false,
			"HTMLSpanElement": false,
			"HTMLStyleElement": false,
			"HTMLTableCaptionElement": false,
			"HTMLTableCellElement": false,
			"HTMLTableColElement": false,
			"HTMLTableElement": false,
			"HTMLTableRowElement": false,
			"HTMLTableSectionElement": false,
			"HTMLTemplateElement": false,
			"HTMLTextAreaElement": false,
			"HTMLTitleElement": false,
			"HTMLTrackElement": false,
			"HTMLUListElement": false,
			"HTMLUnknownElement": false,
			"HTMLVideoElement": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBEnvironment": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"Image": false,
			"ImageBitmap": false,
			"ImageData": false,
			"indexedDB": false,
			"innerHeight": false,
			"innerWidth": false,
			"InputEvent": false,
			"InputMethodContext": false,
			"Intl": false,
			"KeyboardEvent": false,
			"length": false,
			"localStorage": false,
			"location": false,
			"Location": false,
			"locationbar": false,
			"matchMedia": false,
			"MediaElementAudioSourceNode": false,
			"MediaEncryptedEvent": false,
			"MediaError": false,
			"MediaKeyError": false,
			"MediaKeyEvent": false,
			"MediaKeyMessageEvent": false,
			"MediaKeys": false,
			"MediaKeySession": false,
			"MediaKeyStatusMap": false,
			"MediaKeySystemAccess": false,
			"MediaList": false,
			"MediaQueryList": false,
			"MediaQueryListEvent": false,
			"MediaSource": false,
			"MediaStreamAudioDestinationNode": false,
			"MediaStreamAudioSourceNode": false,
			"MediaStreamEvent": false,
			"MediaStreamTrack": false,
			"menubar": false,
			"MessageChannel": false,
			"MessageEvent": false,
			"MessagePort": false,
			"MIDIAccess": false,
			"MIDIConnectionEvent": false,
			"MIDIInput": false,
			"MIDIInputMap": false,
			"MIDIMessageEvent": false,
			"MIDIOutput": false,
			"MIDIOutputMap": false,
			"MIDIPort": false,
			"MimeType": false,
			"MimeTypeArray": false,
			"MouseEvent": false,
			"moveBy": false,
			"moveTo": false,
			"MutationEvent": false,
			"MutationObserver": false,
			"MutationRecord": false,
			"name": false,
			"NamedNodeMap": false,
			"navigator": false,
			"Navigator": false,
			"Node": false,
			"NodeFilter": false,
			"NodeIterator": false,
			"NodeList": false,
			"Notification": false,
			"OfflineAudioCompletionEvent": false,
			"OfflineAudioContext": false,
			"offscreenBuffering": false,
			"onbeforeunload": true,
			"onblur": true,
			"onerror": true,
			"onfocus": true,
			"onload": true,
			"onresize": true,
			"onunload": true,
			"open": false,
			"openDatabase": false,
			"opener": false,
			"opera": false,
			"Option": false,
			"OscillatorNode": false,
			"outerHeight": false,
			"outerWidth": false,
			"PageTransitionEvent": false,
			"pageXOffset": false,
			"pageYOffset": false,
			"parent": false,
			"Path2D": false,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"PeriodicWave": false,
			"Permissions": false,
			"PermissionStatus": false,
			"personalbar": false,
			"Plugin": false,
			"PluginArray": false,
			"PopStateEvent": false,
			"postMessage": false,
			"print": false,
			"ProcessingInstruction": false,
			"ProgressEvent": false,
			"prompt": false,
			"PushManager": false,
			"PushSubscription": false,
			"RadioNodeList": false,
			"Range": false,
			"ReadableByteStream": false,
			"ReadableStream": false,
			"removeEventListener": false,
			"Request": false,
			"requestAnimationFrame": false,
			"resizeBy": false,
			"resizeTo": false,
			"Response": false,
			"RTCIceCandidate": false,
			"RTCSessionDescription": false,
			"screen": false,
			"Screen": false,
			"screenLeft": false,
			"ScreenOrientation": false,
			"screenTop": false,
			"screenX": false,
			"screenY": false,
			"ScriptProcessorNode": false,
			"scroll": false,
			"scrollbars": false,
			"scrollBy": false,
			"scrollTo": false,
			"scrollX": false,
			"scrollY": false,
			"SecurityPolicyViolationEvent": false,
			"Selection": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerRegistration": false,
			"sessionStorage": false,
			"setInterval": false,
			"setTimeout": false,
			"ShadowRoot": false,
			"SharedWorker": false,
			"showModalDialog": false,
			"speechSynthesis": false,
			"SpeechSynthesisEvent": false,
			"SpeechSynthesisUtterance": false,
			"status": false,
			"statusbar": false,
			"stop": false,
			"Storage": false,
			"StorageEvent": false,
			"styleMedia": false,
			"StyleSheet": false,
			"StyleSheetList": false,
			"SubtleCrypto": false,
			"SVGAElement": false,
			"SVGAltGlyphDefElement": false,
			"SVGAltGlyphElement": false,
			"SVGAltGlyphItemElement": false,
			"SVGAngle": false,
			"SVGAnimateColorElement": false,
			"SVGAnimatedAngle": false,
			"SVGAnimatedBoolean": false,
			"SVGAnimatedEnumeration": false,
			"SVGAnimatedInteger": false,
			"SVGAnimatedLength": false,
			"SVGAnimatedLengthList": false,
			"SVGAnimatedNumber": false,
			"SVGAnimatedNumberList": false,
			"SVGAnimatedPathData": false,
			"SVGAnimatedPoints": false,
			"SVGAnimatedPreserveAspectRatio": false,
			"SVGAnimatedRect": false,
			"SVGAnimatedString": false,
			"SVGAnimatedTransformList": false,
			"SVGAnimateElement": false,
			"SVGAnimateMotionElement": false,
			"SVGAnimateTransformElement": false,
			"SVGAnimationElement": false,
			"SVGCircleElement": false,
			"SVGClipPathElement": false,
			"SVGColor": false,
			"SVGColorProfileElement": false,
			"SVGColorProfileRule": false,
			"SVGComponentTransferFunctionElement": false,
			"SVGCSSRule": false,
			"SVGCursorElement": false,
			"SVGDefsElement": false,
			"SVGDescElement": false,
			"SVGDiscardElement": false,
			"SVGDocument": false,
			"SVGElement": false,
			"SVGElementInstance": false,
			"SVGElementInstanceList": false,
			"SVGEllipseElement": false,
			"SVGEvent": false,
			"SVGExternalResourcesRequired": false,
			"SVGFEBlendElement": false,
			"SVGFEColorMatrixElement": false,
			"SVGFEComponentTransferElement": false,
			"SVGFECompositeElement": false,
			"SVGFEConvolveMatrixElement": false,
			"SVGFEDiffuseLightingElement": false,
			"SVGFEDisplacementMapElement": false,
			"SVGFEDistantLightElement": false,
			"SVGFEDropShadowElement": false,
			"SVGFEFloodElement": false,
			"SVGFEFuncAElement": false,
			"SVGFEFuncBElement": false,
			"SVGFEFuncGElement": false,
			"SVGFEFuncRElement": false,
			"SVGFEGaussianBlurElement": false,
			"SVGFEImageElement": false,
			"SVGFEMergeElement": false,
			"SVGFEMergeNodeElement": false,
			"SVGFEMorphologyElement": false,
			"SVGFEOffsetElement": false,
			"SVGFEPointLightElement": false,
			"SVGFESpecularLightingElement": false,
			"SVGFESpotLightElement": false,
			"SVGFETileElement": false,
			"SVGFETurbulenceElement": false,
			"SVGFilterElement": false,
			"SVGFilterPrimitiveStandardAttributes": false,
			"SVGFitToViewBox": false,
			"SVGFontElement": false,
			"SVGFontFaceElement": false,
			"SVGFontFaceFormatElement": false,
			"SVGFontFaceNameElement": false,
			"SVGFontFaceSrcElement": false,
			"SVGFontFaceUriElement": false,
			"SVGForeignObjectElement": false,
			"SVGGElement": false,
			"SVGGeometryElement": false,
			"SVGGlyphElement": false,
			"SVGGlyphRefElement": false,
			"SVGGradientElement": false,
			"SVGGraphicsElement": false,
			"SVGHKernElement": false,
			"SVGICCColor": false,
			"SVGImageElement": false,
			"SVGLangSpace": false,
			"SVGLength": false,
			"SVGLengthList": false,
			"SVGLinearGradientElement": false,
			"SVGLineElement": false,
			"SVGLocatable": false,
			"SVGMarkerElement": false,
			"SVGMaskElement": false,
			"SVGMatrix": false,
			"SVGMetadataElement": false,
			"SVGMissingGlyphElement": false,
			"SVGMPathElement": false,
			"SVGNumber": false,
			"SVGNumberList": false,
			"SVGPaint": false,
			"SVGPathElement": false,
			"SVGPathSeg": false,
			"SVGPathSegArcAbs": false,
			"SVGPathSegArcRel": false,
			"SVGPathSegClosePath": false,
			"SVGPathSegCurvetoCubicAbs": false,
			"SVGPathSegCurvetoCubicRel": false,
			"SVGPathSegCurvetoCubicSmoothAbs": false,
			"SVGPathSegCurvetoCubicSmoothRel": false,
			"SVGPathSegCurvetoQuadraticAbs": false,
			"SVGPathSegCurvetoQuadraticRel": false,
			"SVGPathSegCurvetoQuadraticSmoothAbs": false,
			"SVGPathSegCurvetoQuadraticSmoothRel": false,
			"SVGPathSegLinetoAbs": false,
			"SVGPathSegLinetoHorizontalAbs": false,
			"SVGPathSegLinetoHorizontalRel": false,
			"SVGPathSegLinetoRel": false,
			"SVGPathSegLinetoVerticalAbs": false,
			"SVGPathSegLinetoVerticalRel": false,
			"SVGPathSegList": false,
			"SVGPathSegMovetoAbs": false,
			"SVGPathSegMovetoRel": false,
			"SVGPatternElement": false,
			"SVGPoint": false,
			"SVGPointList": false,
			"SVGPolygonElement": false,
			"SVGPolylineElement": false,
			"SVGPreserveAspectRatio": false,
			"SVGRadialGradientElement": false,
			"SVGRect": false,
			"SVGRectElement": false,
			"SVGRenderingIntent": false,
			"SVGScriptElement": false,
			"SVGSetElement": false,
			"SVGStopElement": false,
			"SVGStringList": false,
			"SVGStylable": false,
			"SVGStyleElement": false,
			"SVGSVGElement": false,
			"SVGSwitchElement": false,
			"SVGSymbolElement": false,
			"SVGTests": false,
			"SVGTextContentElement": false,
			"SVGTextElement": false,
			"SVGTextPathElement": false,
			"SVGTextPositioningElement": false,
			"SVGTitleElement": false,
			"SVGTransform": false,
			"SVGTransformable": false,
			"SVGTransformList": false,
			"SVGTRefElement": false,
			"SVGTSpanElement": false,
			"SVGUnitTypes": false,
			"SVGURIReference": false,
			"SVGUseElement": false,
			"SVGViewElement": false,
			"SVGViewSpec": false,
			"SVGVKernElement": false,
			"SVGZoomAndPan": false,
			"SVGZoomEvent": false,
			"Text": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"TextEvent": false,
			"TextMetrics": false,
			"TextTrack": false,
			"TextTrackCue": false,
			"TextTrackCueList": false,
			"TextTrackList": false,
			"TimeEvent": false,
			"TimeRanges": false,
			"toolbar": false,
			"top": false,
			"Touch": false,
			"TouchEvent": false,
			"TouchList": false,
			"TrackEvent": false,
			"TransitionEvent": false,
			"TreeWalker": false,
			"UIEvent": false,
			"URL": false,
			"ValidityState": false,
			"VTTCue": false,
			"WaveShaperNode": false,
			"WebGLActiveInfo": false,
			"WebGLBuffer": false,
			"WebGLContextEvent": false,
			"WebGLFramebuffer": false,
			"WebGLProgram": false,
			"WebGLRenderbuffer": false,
			"WebGLRenderingContext": false,
			"WebGLShader": false,
			"WebGLShaderPrecisionFormat": false,
			"WebGLTexture": false,
			"WebGLUniformLocation": false,
			"WebSocket": false,
			"WheelEvent": false,
			"window": false,
			"Window": false,
			"Worker": false,
			"XDomainRequest": false,
			"XMLDocument": false,
			"XMLHttpRequest": false,
			"XMLHttpRequestEventTarget": false,
			"XMLHttpRequestProgressEvent": false,
			"XMLHttpRequestUpload": false,
			"XMLSerializer": false,
			"XPathEvaluator": false,
			"XPathException": false,
			"XPathExpression": false,
			"XPathNamespace": false,
			"XPathNSResolver": false,
			"XPathResult": false,
			"XSLTProcessor": false
		},
		"worker": {
			"applicationCache": false,
			"atob": false,
			"Blob": false,
			"BroadcastChannel": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"clearInterval": false,
			"clearTimeout": false,
			"close": true,
			"console": false,
			"fetch": false,
			"FileReaderSync": false,
			"FormData": false,
			"Headers": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"ImageData": false,
			"importScripts": true,
			"indexedDB": false,
			"location": false,
			"MessageChannel": false,
			"MessagePort": false,
			"name": false,
			"navigator": false,
			"Notification": false,
			"onclose": true,
			"onconnect": true,
			"onerror": true,
			"onlanguagechange": true,
			"onmessage": true,
			"onoffline": true,
			"ononline": true,
			"onrejectionhandled": true,
			"onunhandledrejection": true,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"postMessage": true,
			"Promise": false,
			"Request": false,
			"Response": false,
			"self": true,
			"ServiceWorkerRegistration": false,
			"setInterval": false,
			"setTimeout": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"URL": false,
			"WebSocket": false,
			"Worker": false,
			"XMLHttpRequest": false
		},
		"node": {
			"__dirname": false,
			"__filename": false,
			"arguments": false,
			"Buffer": false,
			"clearImmediate": false,
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"exports": true,
			"GLOBAL": false,
			"global": false,
			"module": false,
			"process": false,
			"require": false,
			"root": false,
			"setImmediate": false,
			"setInterval": false,
			"setTimeout": false
		},
		"commonjs": {
			"exports": true,
			"module": false,
			"require": false,
			"global": false
		},
		"amd": {
			"define": false,
			"require": false
		},
		"mocha": {
			"after": false,
			"afterEach": false,
			"before": false,
			"beforeEach": false,
			"context": false,
			"describe": false,
			"it": false,
			"mocha": false,
			"setup": false,
			"specify": false,
			"suite": false,
			"suiteSetup": false,
			"suiteTeardown": false,
			"teardown": false,
			"test": false,
			"xcontext": false,
			"xdescribe": false,
			"xit": false,
			"xspecify": false
		},
		"jasmine": {
			"afterAll": false,
			"afterEach": false,
			"beforeAll": false,
			"beforeEach": false,
			"describe": false,
			"expect": false,
			"fail": false,
			"fdescribe": false,
			"fit": false,
			"it": false,
			"jasmine": false,
			"pending": false,
			"runs": false,
			"spyOn": false,
			"waits": false,
			"waitsFor": false,
			"xdescribe": false,
			"xit": false
		},
		"jest": {
			"afterEach": false,
			"beforeEach": false,
			"describe": false,
			"expect": false,
			"it": false,
			"jest": false,
			"pit": false,
			"require": false,
			"xdescribe": false,
			"xit": false
		},
		"qunit": {
			"asyncTest": false,
			"deepEqual": false,
			"equal": false,
			"expect": false,
			"module": false,
			"notDeepEqual": false,
			"notEqual": false,
			"notOk": false,
			"notPropEqual": false,
			"notStrictEqual": false,
			"ok": false,
			"propEqual": false,
			"QUnit": false,
			"raises": false,
			"start": false,
			"stop": false,
			"strictEqual": false,
			"test": false,
			"throws": false
		},
		"phantomjs": {
			"console": true,
			"exports": true,
			"phantom": true,
			"require": true,
			"WebPage": true
		},
		"couch": {
			"emit": false,
			"exports": false,
			"getRow": false,
			"log": false,
			"module": false,
			"provides": false,
			"require": false,
			"respond": false,
			"send": false,
			"start": false,
			"sum": false
		},
		"rhino": {
			"defineClass": false,
			"deserialize": false,
			"gc": false,
			"help": false,
			"importClass": false,
			"importPackage": false,
			"java": false,
			"load": false,
			"loadClass": false,
			"Packages": false,
			"print": false,
			"quit": false,
			"readFile": false,
			"readUrl": false,
			"runCommand": false,
			"seal": false,
			"serialize": false,
			"spawn": false,
			"sync": false,
			"toint32": false,
			"version": false
		},
		"nashorn": {
			"__DIR__": false,
			"__FILE__": false,
			"__LINE__": false,
			"com": false,
			"edu": false,
			"exit": false,
			"Java": false,
			"java": false,
			"javafx": false,
			"JavaImporter": false,
			"javax": false,
			"JSAdapter": false,
			"load": false,
			"loadWithNewGlobal": false,
			"org": false,
			"Packages": false,
			"print": false,
			"quit": false
		},
		"wsh": {
			"ActiveXObject": true,
			"Enumerator": true,
			"GetObject": true,
			"ScriptEngine": true,
			"ScriptEngineBuildVersion": true,
			"ScriptEngineMajorVersion": true,
			"ScriptEngineMinorVersion": true,
			"VBArray": true,
			"WScript": true,
			"WSH": true,
			"XDomainRequest": true
		},
		"jquery": {
			"$": false,
			"jQuery": false
		},
		"yui": {
			"Y": false,
			"YUI": false,
			"YUI_config": false
		},
		"shelljs": {
			"cat": false,
			"cd": false,
			"chmod": false,
			"config": false,
			"cp": false,
			"dirs": false,
			"echo": false,
			"env": false,
			"error": false,
			"exec": false,
			"exit": false,
			"find": false,
			"grep": false,
			"ls": false,
			"ln": false,
			"mkdir": false,
			"mv": false,
			"popd": false,
			"pushd": false,
			"pwd": false,
			"rm": false,
			"sed": false,
			"target": false,
			"tempdir": false,
			"test": false,
			"which": false
		},
		"prototypejs": {
			"$": false,
			"$$": false,
			"$A": false,
			"$break": false,
			"$continue": false,
			"$F": false,
			"$H": false,
			"$R": false,
			"$w": false,
			"Abstract": false,
			"Ajax": false,
			"Autocompleter": false,
			"Builder": false,
			"Class": false,
			"Control": false,
			"Draggable": false,
			"Draggables": false,
			"Droppables": false,
			"Effect": false,
			"Element": false,
			"Enumerable": false,
			"Event": false,
			"Field": false,
			"Form": false,
			"Hash": false,
			"Insertion": false,
			"ObjectRange": false,
			"PeriodicalExecuter": false,
			"Position": false,
			"Prototype": false,
			"Scriptaculous": false,
			"Selector": false,
			"Sortable": false,
			"SortableObserver": false,
			"Sound": false,
			"Template": false,
			"Toggle": false,
			"Try": false
		},
		"meteor": {
			"$": false,
			"_": false,
			"Accounts": false,
			"App": false,
			"Assets": false,
			"Blaze": false,
			"check": false,
			"Cordova": false,
			"DDP": false,
			"DDPServer": false,
			"Deps": false,
			"EJSON": false,
			"Email": false,
			"HTTP": false,
			"Log": false,
			"Match": false,
			"Meteor": false,
			"Mongo": false,
			"MongoInternals": false,
			"Npm": false,
			"Package": false,
			"Plugin": false,
			"process": false,
			"Random": false,
			"ReactiveDict": false,
			"ReactiveVar": false,
			"Router": false,
			"Session": false,
			"share": false,
			"Spacebars": false,
			"Template": false,
			"Tinytest": false,
			"Tracker": false,
			"UI": false,
			"Utils": false,
			"WebApp": false,
			"WebAppInternals": false
		},
		"mongo": {
			"_isWindows": false,
			"_rand": false,
			"BulkWriteResult": false,
			"cat": false,
			"cd": false,
			"connect": false,
			"db": false,
			"getHostName": false,
			"getMemInfo": false,
			"hostname": false,
			"listFiles": false,
			"load": false,
			"ls": false,
			"md5sumFile": false,
			"mkdir": false,
			"Mongo": false,
			"ObjectId": false,
			"PlanCache": false,
			"print": false,
			"printjson": false,
			"pwd": false,
			"quit": false,
			"removeFile": false,
			"rs": false,
			"sh": false,
			"UUID": false,
			"version": false,
			"WriteResult": false
		},
		"applescript": {
			"$": false,
			"Application": false,
			"Automation": false,
			"console": false,
			"delay": false,
			"Library": false,
			"ObjC": false,
			"ObjectSpecifier": false,
			"Path": false,
			"Progress": false,
			"Ref": false
		},
		"serviceworker": {
			"caches": false,
			"Cache": false,
			"CacheStorage": false,
			"Client": false,
			"clients": false,
			"Clients": false,
			"ExtendableEvent": false,
			"ExtendableMessageEvent": false,
			"FetchEvent": false,
			"importScripts": false,
			"registration": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerGlobalScope": false,
			"ServiceWorkerMessageEvent": false,
			"ServiceWorkerRegistration": false,
			"skipWaiting": false,
			"WindowClient": false
		},
		"atomtest": {
			"advanceClock": false,
			"fakeClearInterval": false,
			"fakeClearTimeout": false,
			"fakeSetInterval": false,
			"fakeSetTimeout": false,
			"resetTimeouts": false,
			"waitsForPromise": false
		},
		"embertest": {
			"andThen": false,
			"click": false,
			"currentPath": false,
			"currentRouteName": false,
			"currentURL": false,
			"fillIn": false,
			"find": false,
			"findWithAssert": false,
			"keyEvent": false,
			"pauseTest": false,
			"triggerEvent": false,
			"visit": false
		},
		"protractor": {
			"$": false,
			"$$": false,
			"browser": false,
			"By": false,
			"by": false,
			"DartObject": false,
			"element": false,
			"protractor": false
		},
		"shared-node-browser": {
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"setInterval": false,
			"setTimeout": false
		},
		"webextensions": {
			"browser": false,
			"chrome": false,
			"opr": false
		},
		"greasemonkey": {
			"GM_addStyle": false,
			"GM_deleteValue": false,
			"GM_getResourceText": false,
			"GM_getResourceURL": false,
			"GM_getValue": false,
			"GM_info": false,
			"GM_listValues": false,
			"GM_log": false,
			"GM_openInTab": false,
			"GM_registerMenuCommand": false,
			"GM_setClipboard": false,
			"GM_setValue": false,
			"GM_xmlhttpRequest": false,
			"unsafeWindow": false
		}
	};

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/conf/blank-script.json":
/***/ function(module, exports) {

	module.exports = {
		"type": "Program",
		"body": [],
		"sourceType": "script",
		"range": [
			0,
			0
		],
		"loc": {
			"start": {
				"line": 0,
				"column": 0
			},
			"end": {
				"line": 0,
				"column": 0
			}
		},
		"comments": [],
		"tokens": []
	};

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/rules.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function define(e,t){rules[e]=t}function load(e){var t=loadRules(e);Object.keys(t).forEach(function(e){define(e,t[e])})}function importPlugin(e,t){Object.keys(e).forEach(function(r){var l=t+"/"+r,n=e[r];define(l,n)})}function get(e){return"string"==typeof rules[e]?!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()):rules[e]}function testClear(){rules=Object.create(null)}var loadRules=__webpack_require__("./src/parsers/js/transformers/eslint1/loadRulesShim.js"),rules=Object.create(null);module.exports={define:define,load:load,import:importPlugin,get:get,testClear:testClear},load();

/***/ },

/***/ 7:
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 7;


/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/rule-context.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function RuleContext(e,t,o,r,n,s){Object.defineProperty(this,"id",{value:e}),Object.defineProperty(this,"options",{value:r}),Object.defineProperty(this,"settings",{value:n}),Object.defineProperty(this,"ecmaFeatures",{value:Object.create(s)}),Object.freeze(this.ecmaFeatures),PASSTHROUGHS.forEach(function(e){this[e]=function(){return t[e].apply(t,arguments)}},this),this.report=function(r,n,s,i){var u,a=null;return 1===arguments.length?(u=r,"function"==typeof u.fix&&(a=u.fix(new RuleFixer)),void t.report(e,o,u.node,u.loc||u.node.loc.start,u.message,u.data,a)):void t.report(e,o,r,n,s,i)},this.getSourceCode=function(){return t.getSourceCode()}}var RuleFixer=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/util/rule-fixer.js"),PASSTHROUGHS=["getAllComments","getAncestors","getComments","getDeclaredVariables","getFilename","getFirstToken","getFirstTokens","getJSDocComment","getLastToken","getLastTokens","getNodeByRangeIndex","getScope","getSource","getSourceLines","getTokenAfter","getTokenBefore","getTokenByRangeStart","getTokens","getTokensAfter","getTokensBefore","getTokensBetween","markVariableAsUsed","isMarkedAsUsed"];RuleContext.prototype={constructor:RuleContext},module.exports=RuleContext;

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/util/rule-fixer.js":
/***/ function(module, exports) {

	"use strict";function insertTextAt(e,t){return{range:[e,e],text:t}}function RuleFixer(){Object.freeze(this)}RuleFixer.prototype={constructor:RuleFixer,insertTextAfter:function(e,t){return this.insertTextAfterRange(e.range,t)},insertTextAfterRange:function(e,t){return insertTextAt(e[1],t)},insertTextBefore:function(e,t){return this.insertTextBeforeRange(e.range,t)},insertTextBeforeRange:function(e,t){return insertTextAt(e[0],t)},replaceText:function(e,t){return this.replaceTextRange(e.range,t)},replaceTextRange:function(e,t){return{range:e,text:t}},remove:function(e){return this.removeRange(e.range)},removeRange:function(e){return{range:e,text:""}}},module.exports=RuleFixer;

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/timing.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";function alignLeft(n,e,t){return n+new Array(e-n.length+1).join(t||" ")}function alignRight(n,e,t){return new Array(e-n.length+1).join(t||" ")+n}function display(n){var e=0,t=Object.keys(n).map(function(t){var r=n[t];return e+=r,[t,r]}).sort(function(n,e){return e[1]-n[1]}).slice(0,10);t.forEach(function(n){n.push((100*n[1]/e).toFixed(1)+"%"),n[1]=n[1].toFixed(3)}),t.unshift(HEADERS);var r=[];t.forEach(function(n){var e,t,i=n.length;for(e=0;e<i;e++)t=n[e].length,(!r[e]||t>r[e])&&(r[e]=t)});var i=t.map(function(n){return n.map(function(n,e){return ALIGN[e](n,r[e])}).join(" | ")});i.splice(1,0,r.map(function(n,e){return 0!==e&&e!==r.length-1&&n++,ALIGN[e](":",n+1,"-")}).join("|")),console.log(i.join("\n"))}var enabled=!!process.env.TIMING,HEADERS=["Rule","Time (ms)","Relative"],ALIGN=[alignLeft,alignRight,alignRight];module.exports=function(){function n(n,t){return"undefined"==typeof e[n]&&(e[n]=0),function(){var r=process.hrtime();t.apply(null,Array.prototype.slice.call(arguments)),r=process.hrtime(r),e[n]+=1e3*r[0]+r[1]/1e6}}var e=Object.create(null);return enabled&&process.on("exit",function(){display(e)}),{time:n,enabled:enabled}}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/util/source-code.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function validate(e){if(!e.tokens)throw new Error("AST is missing the tokens array.");if(!e.comments)throw new Error("AST is missing the comments array.");if(!e.loc)throw new Error("AST is missing location information.");if(!e.range)throw new Error("AST is missing range information")}function findJSDocComment(e,t){if(e)for(var n=e.length-1;n>=0;n--)if("Block"===e[n].type&&"*"===e[n].value.charAt(0)){if(t-e[n].loc.end.line<=1)return e[n];break}return null}function looksLikeExport(e){return"ExportDefaultDeclaration"===e.type||"ExportNamedDeclaration"===e.type||"ExportAllDeclaration"===e.type||"ExportSpecifier"===e.type}function SourceCode(e,t){validate(t),this.text=e,this.ast=t,this.lines=e.split(/\r\n|\r|\n|\u2028|\u2029/g),this.tokensAndComments=t.tokens.concat(t.comments).sort(function(e,t){return e.range[0]-t.range[0]});var n=createTokenStore(t.tokens);Object.keys(n).forEach(function(e){this[e]=n[e]},this);var r=createTokenStore(this.tokensAndComments);this.getTokenOrCommentBefore=r.getTokenBefore,this.getTokenOrCommentAfter=r.getTokenAfter,Object.freeze(this),Object.freeze(this.lines)}var createTokenStore=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/token-store.js"),estraverse=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/util/estraverse.js"),assign=__webpack_require__("./node_modules/object-assign/index.js");SourceCode.prototype={constructor:SourceCode,getText:function(e,t,n){return e?null!==this.text?this.text.slice(Math.max(e.range[0]-(t||0),0),e.range[1]+(n||0)):null:this.text},getLines:function(){return this.lines},getAllComments:function(){return this.ast.comments},getComments:function(e){var t=e.leadingComments||[],n=e.trailingComments||[];return"Program"===e.type&&0===e.body.length&&(t=e.comments),{leading:t,trailing:n}},getJSDocComment:function(e){var t=e.parent,n=e.loc.start.line;switch(e.type){case"FunctionDeclaration":return looksLikeExport(t)?findJSDocComment(t.leadingComments,n):findJSDocComment(e.leadingComments,n);case"ClassDeclaration":return findJSDocComment(e.leadingComments,n);case"ClassExpression":return findJSDocComment(t.parent.leadingComments,n);case"ArrowFunctionExpression":case"FunctionExpression":if("CallExpression"!==t.type&&"NewExpression"!==t.type){for(;t&&!t.leadingComments&&!/Function/.test(t.type);)t=t.parent;return t&&"FunctionDeclaration"!==t.type?findJSDocComment(t.leadingComments,n):null}default:return null}},getNodeByRangeIndex:function(e){var t=null;return estraverse.traverse(this.ast,{enter:function(n,r){n.range[0]<=e&&e<n.range[1]?t=assign({parent:r},n):this.skip()},leave:function(e){e===t&&this.break()}}),t},isSpaceBetweenTokens:function(e,t){var n=this.text.slice(e.range[1],t.range[0]);return/\s/.test(n.replace(/\/\*.*?\*\//g,""))}},module.exports=SourceCode;

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/token-store.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(n){function e(e,t){var r,o=[];for(r=Math.max(0,e);r<t&&r<u;r++)o.push(n[r]);return o}function t(n){var e=n.range[1],t=g[e];return"undefined"==typeof t&&(t=f[e]-1),isNaN(t)&&(t=u-1),t}var r,u,o,a={},f=Object.create(null),g=Object.create(null);for(r=0,u=n.length;r<u;r++)o=n[r].range,f[o[0]]=r,g[o[1]]=r;return a.getTokensBefore=function(n,t){var r=f[n.range[0]];return e(r-(t||0),r)},a.getTokenBefore=function(e,t){return n[f[e.range[0]]-(t||0)-1]},a.getTokensAfter=function(n,r){var u=t(n)+1;return e(u,u+(r||0))},a.getTokenAfter=function(e,r){return n[t(e)+(r||0)+1]},a.getTokens=function(n,r,u){return e(f[n.range[0]]-(r||0),t(n)+(u||0)+1)},a.getFirstTokens=function(n,r){var u=f[n.range[0]];return e(u,Math.min(t(n)+1,u+(r||0)))},a.getFirstToken=function(e,t){return n[f[e.range[0]]+(t||0)]},a.getLastTokens=function(n,r){var u=t(n)+1;return e(Math.max(f[n.range[0]],u-(r||0)),u)},a.getLastToken=function(e,r){return n[t(e)-(r||0)]},a.getTokensBetween=function(n,r,u){return u=u||0,e(t(n)+1-u,f[r.range[0]]+u)},a.getTokenByRangeStart=function(e){return n[f[e]]||null},a};

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/util/node-event-generator.js":
/***/ function(module, exports) {

	"use strict";function NodeEventGenerator(e){this.emitter=e}NodeEventGenerator.prototype={constructor:NodeEventGenerator,enterNode:function(e){this.emitter.emit(e.type,e)},leaveNode:function(e){this.emitter.emit(e.type+":exit",e)}},module.exports=NodeEventGenerator;

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/util/comment-event-generator.js":
/***/ function(module, exports) {

	"use strict";function emitComments(t,e,n,o){t.length>0&&t.forEach(function(t){var m=n.indexOf(t.loc);m>=0?n.splice(m,1):(n.push(t.loc),e.emit(t.type+o,t))})}function emitCommentsEnter(t,e){emitComments(e,t.emitter,t.commentLocsEnter,"Comment")}function emitCommentsExit(t,e){emitComments(e,t.emitter,t.commentLocsExit,"Comment:exit")}function CommentEventGenerator(t,e){this.original=t,this.emitter=t.emitter,this.sourceCode=e,this.commentLocsEnter=[],this.commentLocsExit=[]}CommentEventGenerator.prototype={constructor:CommentEventGenerator,enterNode:function(t){var e=this.sourceCode.getComments(t);emitCommentsEnter(this,e.leading),this.original.enterNode(t),emitCommentsEnter(this,e.trailing)},leaveNode:function(t){var e=this.sourceCode.getComments(t);emitCommentsExit(this,e.trailing),this.original.leaveNode(t),emitCommentsExit(this,e.leading)}},module.exports=CommentEventGenerator;

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/config/config-ops.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var debug=__webpack_require__("./node_modules/debug/src/browser.js"),environments=__webpack_require__("./node_modules/eslint1/node_modules/eslint/conf/environments.js"),assign=__webpack_require__("./node_modules/object-assign/index.js");debug=debug("eslint:config-ops"),module.exports={createEmptyConfig:function(){return{globals:{},env:{},rules:{},ecmaFeatures:{}}},createEnvironmentConfig:function(e){var n=this.createEmptyConfig();return e&&(n.env=e,Object.keys(e).filter(function(n){return e[n]}).forEach(function(e){var r=environments[e];r&&(debug("Creating config for environment "+e),r.globals&&assign(n.globals,r.globals),r.ecmaFeatures&&assign(n.ecmaFeatures,r.ecmaFeatures))})),n},applyEnvironments:function(e){return e.env&&"object"==typeof e.env?(debug("Apply environment settings to config"),this.merge(this.createEnvironmentConfig(e.env),e)):e},merge:function e(n,r,t,o){var i=Array.isArray(r)||Array.isArray(n),s=i&&[]||{};return t=!!t,o=!!o,i?(n=n||[],s=o&&r.length>1?s.concat(r):s.concat(n),"object"==typeof r||Array.isArray(r)||(r=[r]),Object.keys(r).forEach(function(i,a){i=r[a],"undefined"==typeof s[a]?s[a]=i:"object"==typeof i?o?s[a]=i:s[a]=e(n[a],i,t,o):t?s.indexOf(i)===-1&&s.push(i):s[a]=i})):(n&&"object"==typeof n&&Object.keys(n).forEach(function(e){s[e]=n[e]}),Object.keys(r).forEach(function(i){Array.isArray(r[i])||Array.isArray(n[i])?s[i]=e(n[i],r[i],"plugins"===i,o):"object"==typeof r[i]&&r[i]&&n[i]?s[i]=e(n[i],r[i],t,"rules"===i):s[i]=r[i]})),s}};

/***/ },

/***/ "./node_modules/debug/src/browser.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {function useColors(){return!("undefined"==typeof window||!window||"undefined"==typeof window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window&&window.console&&(console.firebug||console.exception&&console.table)||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function formatArgs(e){var o=this.useColors;if(e[0]=(o?"%c":"")+this.namespace+(o?" %c":" ")+e[0]+(o?"%c ":" ")+"+"+exports.humanize(this.diff),o){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var t=0,n=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(t++,"%c"===e&&(n=t))}),e.splice(n,0,r)}}function log(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(e){try{null==e?exports.storage.removeItem("debug"):exports.storage.debug=e}catch(e){}}function load(){try{return exports.storage.debug}catch(e){}if("undefined"!=typeof process&&"env"in process)return process.env.DEBUG}function localstorage(){try{return window.localStorage}catch(e){}}exports=module.exports=__webpack_require__("./node_modules/debug/src/debug.js"),exports.log=log,exports.formatArgs=formatArgs,exports.save=save,exports.load=load,exports.useColors=useColors,exports.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:localstorage(),exports.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},exports.enable(load());
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./node_modules/debug/src/debug.js":
/***/ function(module, exports, __webpack_require__) {

	function selectColor(e){var r,t=0;for(r in e)t=(t<<5)-t+e.charCodeAt(r),t|=0;return exports.colors[Math.abs(t)%exports.colors.length]}function createDebug(e){function r(){if(r.enabled){var e=r,t=+new Date,o=t-(prevTime||t);e.diff=o,e.prev=prevTime,e.curr=t,prevTime=t;for(var s=new Array(arguments.length),n=0;n<s.length;n++)s[n]=arguments[n];s[0]=exports.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var a=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(r,t){if("%%"===r)return r;a++;var o=exports.formatters[t];if("function"==typeof o){var n=s[a];r=o.call(e,n),s.splice(a,1),a--}return r}),exports.formatArgs.call(e,s);var p=r.log||exports.log||console.log.bind(console);p.apply(e,s)}}return r.namespace=e,r.enabled=exports.enabled(e),r.useColors=exports.useColors(),r.color=selectColor(e),"function"==typeof exports.init&&exports.init(r),r}function enable(e){exports.save(e);for(var r=(e||"").split(/[\s,]+/),t=r.length,o=0;o<t;o++)r[o]&&(e=r[o].replace(/\*/g,".*?"),"-"===e[0]?exports.skips.push(new RegExp("^"+e.substr(1)+"$")):exports.names.push(new RegExp("^"+e+"$")))}function disable(){exports.enable("")}function enabled(e){var r,t;for(r=0,t=exports.skips.length;r<t;r++)if(exports.skips[r].test(e))return!1;for(r=0,t=exports.names.length;r<t;r++)if(exports.names[r].test(e))return!0;return!1}function coerce(e){return e instanceof Error?e.stack||e.message:e}exports=module.exports=createDebug.debug=createDebug.default=createDebug,exports.coerce=coerce,exports.disable=disable,exports.enable=enable,exports.enabled=enabled,exports.humanize=__webpack_require__("./node_modules/ms/index.js"),exports.names=[],exports.skips=[],exports.formatters={};var prevTime;

/***/ },

/***/ "./node_modules/ms/index.js":
/***/ function(module, exports) {

	function parse(e){if(e=String(e),!(e.length>1e4)){var r=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(r){var a=parseFloat(r[1]),n=(r[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return a*y;case"days":case"day":case"d":return a*d;case"hours":case"hour":case"hrs":case"hr":case"h":return a*h;case"minutes":case"minute":case"mins":case"min":case"m":return a*m;case"seconds":case"second":case"secs":case"sec":case"s":return a*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function fmtShort(e){return e>=d?Math.round(e/d)+"d":e>=h?Math.round(e/h)+"h":e>=m?Math.round(e/m)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function fmtLong(e){return plural(e,d,"day")||plural(e,h,"hour")||plural(e,m,"minute")||plural(e,s,"second")||e+" ms"}function plural(s,e,r){if(!(s<e))return s<1.5*e?Math.floor(s/e)+" "+r:Math.ceil(s/e)+" "+r+"s"}var s=1e3,m=60*s,h=60*m,d=24*h,y=365.25*d;module.exports=function(s,e){e=e||{};var r=typeof s;if("string"===r&&s.length>0)return parse(s);if("number"===r&&isNaN(s)===!1)return e.long?fmtLong(s):fmtShort(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/config/config-validator.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function getRuleOptionsSchema(e){var r=rules.get(e),n=r&&r.schema;return n?Array.isArray(n)?{type:"array",items:[{enum:[0,1,2]}].concat(n),minItems:1,maxItems:n.length+1}:n:{type:"array",items:[{enum:[0,1,2]}],minItems:1}}function validateRuleOptions(e,r,n){var t,a=validators.rules[e];if(a||(a=schemaValidator(getRuleOptionsSchema(e),{verbose:!0}),validators.rules[e]=a),"number"==typeof r&&(r=[r]),a(r),a.errors)throw t=[n,":\n",'\tConfiguration for rule "',e,'" is invalid:\n'],a.errors.forEach(function(e){'data["0"]'===e.field?t.push('\tSeverity should be one of the following: 0 = off, 1 = warning, 2 = error (you passed "',e.value,'").\n'):t.push('\tValue "',e.value,'" ',e.message,".\n")}),new Error(t.join(""))}function validateEnvironment(e,r){if(e){if(Array.isArray(e))throw new Error("Environment must not be an array");if("object"!=typeof e)throw new Error("Environment must be an object");Object.keys(e).forEach(function(e){if(!environments[e]){var n=[r,":\n",'\tEnvironment key "',e,'" is unknown\n'];throw new Error(n.join(""))}})}}function validate(e,r){"object"==typeof e.rules&&Object.keys(e.rules).forEach(function(n){validateRuleOptions(n,e.rules[n],r)}),validateEnvironment(e.env,r)}var rules=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/rules.js"),environments=__webpack_require__("./node_modules/eslint1/node_modules/eslint/conf/environments.js"),schemaValidator=__webpack_require__("./node_modules/is-my-json-valid/index.js"),validators={rules:Object.create(null)};module.exports={getRuleOptionsSchema:getRuleOptionsSchema,validate:validate,validateRuleOptions:validateRuleOptions};

/***/ },

/***/ "./node_modules/is-my-json-valid/index.js":
/***/ function(module, exports, __webpack_require__) {

	var genobj=__webpack_require__("./node_modules/generate-object-property/index.js"),genfun=__webpack_require__("./node_modules/generate-function/index.js"),jsonpointer=__webpack_require__("./node_modules/jsonpointer/jsonpointer.js"),xtend=__webpack_require__("./node_modules/xtend/immutable.js"),formats=__webpack_require__("./node_modules/is-my-json-valid/formats.js"),get=function(e,r,t){var n=function(e){return e&&e.id===t?e:"object"==typeof e&&e?Object.keys(e).reduce(function(r,t){return r||n(e[t])},null):null},i=n(e);if(i)return i;t=t.replace(/^#/,""),t=t.replace(/\/$/,"");try{return jsonpointer.get(e,decodeURI(t))}catch(e){var s,a=t.indexOf("#");if(0!==a)if(a===-1)s=r[t];else{var o=t.slice(0,a);s=r[o];var f=t.slice(a).replace(/^#/,"");try{return jsonpointer.get(s,f)}catch(e){}}else s=r[t];return s||null}},formatName=function(e){e=JSON.stringify(e);for(var r=/\[([^\[\]"]+)\]/;r.test(e);)e=e.replace(r,'."+$1+"');return e},types={};types.any=function(){return"true"},types.null=function(e){return e+" === null"},types.boolean=function(e){return"typeof "+e+' === "boolean"'},types.array=function(e){return"Array.isArray("+e+")"},types.object=function(e){return"typeof "+e+' === "object" && '+e+" && !Array.isArray("+e+")"},types.number=function(e){return"typeof "+e+' === "number"'},types.integer=function(e){return"typeof "+e+' === "number" && (Math.floor('+e+") === "+e+" || "+e+" > 9007199254740992 || "+e+" < -9007199254740992)"},types.string=function(e){return"typeof "+e+' === "string"'};var unique=function(e){for(var r=[],t=0;t<e.length;t++)r.push("object"==typeof e[t]?JSON.stringify(e[t]):e[t]);for(var t=1;t<r.length;t++)if(r.indexOf(r[t])!==t)return!1;return!0},isMultipleOf=function(e,r){var t,n=(0|r)!==r?Math.pow(10,r.toString().split(".").pop().length):1;if(n>1){var i=(0|e)!==e?Math.pow(10,e.toString().split(".").pop().length):1;t=i>n||Math.round(n*e)%(n*r)}else t=e%r;return!t},toType=function(e){return e.type},compile=function(e,r,t,n,i){var s=i?xtend(formats,i.formats):formats,a={unique:unique,formats:s,isMultipleOf:isMultipleOf},o=!!i&&!!i.verbose,f=!(!i||void 0===i.greedy)&&i.greedy,u={},l=function(e){return e+(u[e]=(u[e]||0)+1)},m={},c=function(e){if(m[e])return m[e];var r=l("pattern");return a[r]=new RegExp(e),m[e]=r,r},p=["i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"],d=function(){var e=p.shift();return p.push(e+e[0]),e},y=function(e,n,u,m){var p=n.properties,v=n.type,h=!1;Array.isArray(n.items)&&(p={},n.items.forEach(function(e,r){p[r]=e}),v="array",h=!0);var b=0,j=function(r,t,n){g("errors++"),u===!0&&(g("if (validate.errors === null) validate.errors = []"),o?g("validate.errors.push({field:%s,message:%s,value:%s,type:%s})",formatName(t||e),JSON.stringify(r),n||e,JSON.stringify(v)):g("validate.errors.push({field:%s,message:%s})",formatName(t||e),JSON.stringify(r)))};n.required===!0?(b++,g("if (%s === undefined) {",e),j("is required"),g("} else {")):(b++,g("if (%s !== undefined) {",e));var O=[].concat(v).map(function(r){return types[r||"any"](e)}).join(" || ")||"true";if("true"!==O&&(b++,g("if (!(%s)) {",O),j("is the wrong type"),g("} else {")),h)if(n.additionalItems===!1)g("if (%s.length > %d) {",e,n.items.length),j("has additional items"),g("}");else if(n.additionalItems){var x=d();g("for (var %s = %d; %s < %s.length; %s++) {",x,n.items.length,x,e,x),y(e+"["+x+"]",n.additionalItems,u,m),g("}")}if(n.format&&s[n.format]){"string"!==v&&formats[n.format]&&g("if (%s) {",types.string(e));var q=l("format");a[q]=s[n.format],"function"==typeof a[q]?g("if (!%s(%s)) {",q,e):g("if (!%s.test(%s)) {",q,e),j("must be "+n.format+" format"),g("}"),"string"!==v&&formats[n.format]&&g("}")}if(Array.isArray(n.required)){var N=function(r){var t=genobj(e,r);g("if (%s === undefined) {",t),j("is required",t),g("missing++"),g("}")};g("if ((%s)) {","object"!==v?types.object(e):"true"),g("var missing = 0"),n.required.map(N),g("}"),f||(g("if (missing === 0) {"),b++)}if(n.uniqueItems&&("array"!==v&&g("if (%s) {",types.array(e)),g("if (!(unique(%s))) {",e),j("must be unique"),g("}"),"array"!==v&&g("}")),n.enum){var S=n.enum.some(function(e){return"object"==typeof e}),A=S?function(r){return"JSON.stringify("+e+") !== JSON.stringify("+JSON.stringify(r)+")"}:function(r){return e+" !== "+JSON.stringify(r)};g("if (%s) {",n.enum.map(A).join(" && ")||"false"),j("must be an enum value"),g("}")}if(n.dependencies&&("object"!==v&&g("if (%s) {",types.object(e)),Object.keys(n.dependencies).forEach(function(r){var t=n.dependencies[r];"string"==typeof t&&(t=[t]);var i=function(r){return genobj(e,r)+" !== undefined"};Array.isArray(t)&&(g("if (%s !== undefined && !(%s)) {",genobj(e,r),t.map(i).join(" && ")||"true"),j("dependencies not set"),g("}")),"object"==typeof t&&(g("if (%s !== undefined) {",genobj(e,r)),y(e,t,u,m),g("}"))}),"object"!==v&&g("}")),n.additionalProperties||n.additionalProperties===!1){"object"!==v&&g("if (%s) {",types.object(e));var x=d(),P=l("keys"),k=function(e){return P+"["+x+"] !== "+JSON.stringify(e)},J=function(e){return"!"+c(e)+".test("+P+"["+x+"])"},w=Object.keys(p||{}).map(k).concat(Object.keys(n.patternProperties||{}).map(J)).join(" && ")||"true";g("var %s = Object.keys(%s)",P,e)("for (var %s = 0; %s < %s.length; %s++) {",x,x,P,x)("if (%s) {",w),n.additionalProperties===!1?(m&&g("delete %s",e+"["+P+"["+x+"]]"),j("has additional properties",null,JSON.stringify(e+".")+" + "+P+"["+x+"]")):y(e+"["+P+"["+x+"]]",n.additionalProperties,u,m),g("}")("}"),"object"!==v&&g("}")}if(n.$ref){var M=get(t,i&&i.schemas||{},n.$ref);if(M){var E=r[n.$ref];E||(r[n.$ref]=function(e){return E(e)},E=compile(M,r,t,!1,i));var q=l("ref");a[q]=E,g("if (!(%s(%s))) {",q,e),j("referenced schema does not match"),g("}")}}if(n.not){var I=l("prev");g("var %s = errors",I),y(e,n.not,!1,m),g("if (%s === errors) {",I),j("negative schema matches"),g("} else {")("errors = %s",I)("}")}if(n.items&&!h){"array"!==v&&g("if (%s) {",types.array(e));var x=d();g("for (var %s = 0; %s < %s.length; %s++) {",x,x,e,x),y(e+"["+x+"]",n.items,u,m),g("}"),"array"!==v&&g("}")}if(n.patternProperties){"object"!==v&&g("if (%s) {",types.object(e));var P=l("keys"),x=d();g("var %s = Object.keys(%s)",P,e)("for (var %s = 0; %s < %s.length; %s++) {",x,x,P,x),Object.keys(n.patternProperties).forEach(function(r){var t=c(r);g("if (%s.test(%s)) {",t,P+"["+x+"]"),y(e+"["+P+"["+x+"]]",n.patternProperties[r],u,m),g("}")}),g("}"),"object"!==v&&g("}")}if(n.pattern){var $=c(n.pattern);"string"!==v&&g("if (%s) {",types.string(e)),g("if (!(%s.test(%s))) {",$,e),j("pattern mismatch"),g("}"),"string"!==v&&g("}")}if(n.allOf&&n.allOf.forEach(function(r){y(e,r,u,m)}),n.anyOf&&n.anyOf.length){var I=l("prev");n.anyOf.forEach(function(r,t){0===t?g("var %s = errors",I):g("if (errors !== %s) {",I)("errors = %s",I),y(e,r,!1,!1)}),n.anyOf.forEach(function(e,r){r&&g("}")}),g("if (%s !== errors) {",I),j("no schemas match"),g("}")}if(n.oneOf&&n.oneOf.length){var I=l("prev"),L=l("passes");g("var %s = errors",I)("var %s = 0",L),n.oneOf.forEach(function(r,t){y(e,r,!1,!1),g("if (%s === errors) {",I)("%s++",L)("} else {")("errors = %s",I)("}")}),g("if (%s !== 1) {",L),j("no (or more than one) schemas match"),g("}")}for(void 0!==n.multipleOf&&("number"!==v&&"integer"!==v&&g("if (%s) {",types.number(e)),g("if (!isMultipleOf(%s, %d)) {",e,n.multipleOf),j("has a remainder"),g("}"),"number"!==v&&"integer"!==v&&g("}")),void 0!==n.maxProperties&&("object"!==v&&g("if (%s) {",types.object(e)),g("if (Object.keys(%s).length > %d) {",e,n.maxProperties),j("has more properties than allowed"),g("}"),"object"!==v&&g("}")),void 0!==n.minProperties&&("object"!==v&&g("if (%s) {",types.object(e)),g("if (Object.keys(%s).length < %d) {",e,n.minProperties),j("has less properties than allowed"),g("}"),"object"!==v&&g("}")),void 0!==n.maxItems&&("array"!==v&&g("if (%s) {",types.array(e)),g("if (%s.length > %d) {",e,n.maxItems),j("has more items than allowed"),g("}"),"array"!==v&&g("}")),void 0!==n.minItems&&("array"!==v&&g("if (%s) {",types.array(e)),g("if (%s.length < %d) {",e,n.minItems),j("has less items than allowed"),g("}"),"array"!==v&&g("}")),void 0!==n.maxLength&&("string"!==v&&g("if (%s) {",types.string(e)),g("if (%s.length > %d) {",e,n.maxLength),j("has longer length than allowed"),g("}"),"string"!==v&&g("}")),void 0!==n.minLength&&("string"!==v&&g("if (%s) {",types.string(e)),g("if (%s.length < %d) {",e,n.minLength),j("has less length than allowed"),g("}"),"string"!==v&&g("}")),void 0!==n.minimum&&("number"!==v&&"integer"!==v&&g("if (%s) {",types.number(e)),g("if (%s %s %d) {",e,n.exclusiveMinimum?"<=":"<",n.minimum),j("is less than minimum"),g("}"),"number"!==v&&"integer"!==v&&g("}")),void 0!==n.maximum&&("number"!==v&&"integer"!==v&&g("if (%s) {",types.number(e)),g("if (%s %s %d) {",e,n.exclusiveMaximum?">=":">",n.maximum),j("is more than maximum"),g("}"),"number"!==v&&"integer"!==v&&g("}")),p&&Object.keys(p).forEach(function(r){Array.isArray(v)&&v.indexOf("null")!==-1&&g("if (%s !== null) {",e),y(genobj(e,r),p[r],u,m),Array.isArray(v)&&v.indexOf("null")!==-1&&g("}")});b--;)g("}")},g=genfun("function validate(data) {")("if (data === undefined) data = null")("validate.errors = null")("var errors = 0");return y("data",e,n,i&&i.filter),g("return errors === 0")("}"),g=g.toFunction(a),g.errors=null,Object.defineProperty&&Object.defineProperty(g,"error",{get:function(){return g.errors?g.errors.map(function(e){return e.field+" "+e.message}).join("\n"):""}}),g.toJSON=function(){return e},g};module.exports=function(e,r){return"string"==typeof e&&(e=JSON.parse(e)),compile(e,{},e,!0,r)},module.exports.filter=function(e,r){var t=module.exports(e,xtend(r,{filter:!0}));return function(e){return t(e),e}};

/***/ },

/***/ "./node_modules/generate-object-property/index.js":
/***/ function(module, exports, __webpack_require__) {

	var isProperty=__webpack_require__("./node_modules/is-property/is-property.js"),gen=function(r,e){return isProperty(e)?r+"."+e:r+"["+JSON.stringify(e)+"]"};gen.valid=isProperty,gen.property=function(r){return isProperty(r)?r:JSON.stringify(r)},module.exports=gen;

/***/ },

/***/ "./node_modules/is-property/is-property.js":
/***/ function(module, exports) {

	"use strict";function isProperty(u){return/^[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(u)}module.exports=isProperty;

/***/ },

/***/ "./node_modules/generate-function/index.js":
/***/ function(module, exports, __webpack_require__) {

	var util=__webpack_require__("./node_modules/util/util.js"),INDENT_START=/[\{\[]/,INDENT_END=/[\}\]]/;module.exports=function(){var t=[],n=0,u=function(u){for(var r="";r.length<2*n;)r+="  ";t.push(r+u)},r=function(t){return t?INDENT_END.test(t.trim()[0])&&INDENT_START.test(t[t.length-1])?(n--,u(util.format.apply(util,arguments)),n++,r):INDENT_START.test(t[t.length-1])?(u(util.format.apply(util,arguments)),n++,r):INDENT_END.test(t.trim()[0])?(n--,u(util.format.apply(util,arguments)),r):(u(util.format.apply(util,arguments)),r):r};return r.toString=function(){return t.join("\n")},r.toFunction=function(t){var n="return ("+r.toString()+")",u=Object.keys(t||{}).map(function(t){return t}),l=u.map(function(n){return t[n]});return Function.apply(null,u.concat(n)).apply(null,l)},arguments.length&&r.apply(null,arguments),r};

/***/ },

/***/ "./node_modules/jsonpointer/jsonpointer.js":
/***/ function(module, exports) {

	function escapeReplacer(e){switch(e){case"~1":return"/";case"~0":return"~"}throw new Error("Invalid tilde escape: "+e)}function untilde(e){return hasExcape.test(e)?e.replace(escapeMatcher,escapeReplacer):e}function setter(e,r,t){for(var n,o,i=1,c=r.length;i<c&&(n=untilde(r[i++]),o=c>i,"undefined"==typeof e[n]&&(Array.isArray(e)&&"-"===n&&(n=e.length),o&&(""!==r[i]&&r[i]<1/0||"-"===r[i]?e[n]=[]:e[n]={})),o);)e=e[n];var a=e[n];return void 0===t?delete e[n]:e[n]=t,a}function compilePointer(e){if("string"==typeof e){if(e=e.split("/"),""===e[0])return e;throw new Error("Invalid JSON pointer.")}if(Array.isArray(e))return e;throw new Error("Invalid JSON pointer.")}function get(e,r){if("object"!=typeof e)throw new Error("Invalid input object.");r=compilePointer(r);var t=r.length;if(1===t)return e;for(var n=1;n<t;){if(e=e[untilde(r[n++])],t===n)return e;if("object"!=typeof e)return}}function set(e,r,t){if("object"!=typeof e)throw new Error("Invalid input object.");if(r=compilePointer(r),0===r.length)throw new Error("Invalid JSON pointer for set.");return setter(e,r,t)}function compile(e){var r=compilePointer(e);return{get:function(e){return get(e,r)},set:function(e,t){return set(e,r,t)}}}var hasExcape=/~/,escapeMatcher=/~[01]/g;exports.get=get,exports.set=set,exports.compile=compile;

/***/ },

/***/ "./node_modules/xtend/immutable.js":
/***/ function(module, exports) {

	function extend(){for(var r={},e=0;e<arguments.length;e++){var t=arguments[e];for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;

/***/ },

/***/ "./node_modules/is-my-json-valid/formats.js":
/***/ function(module, exports) {

	exports["date-time"]=/^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}[tT ]\d{2}:\d{2}:\d{2}(\.\d+)?([zZ]|[+-]\d{2}:\d{2})$/,exports.date=/^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}$/,exports.time=/^\d{2}:\d{2}:\d{2}$/,exports.email=/^\S+@\S+$/,exports["ip-address"]=exports.ipv4=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,exports.ipv6=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,exports.uri=/^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,exports.color=/(#?([0-9A-Fa-f]{3,6})\b)|(aqua)|(black)|(blue)|(fuchsia)|(gray)|(green)|(lime)|(maroon)|(navy)|(olive)|(orange)|(purple)|(red)|(silver)|(teal)|(white)|(yellow)|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\))/,exports.hostname=/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]))*$/,exports.alpha=/^[a-zA-Z]+$/,exports.alphanumeric=/^[a-zA-Z0-9]+$/,exports.style=/\s*(.+?):\s*([^;]+);?/g,exports.phone=/^\+(?:[0-9] ?){6,14}[0-9]$/,exports["utc-millisec"]=/^[0-9]{1,15}\.?[0-9]{0,15}$/;

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/conf/replacements.json":
/***/ function(module, exports) {

	module.exports = {
		"rules": {
			"generator-star": [
				"generator-star-spacing"
			],
			"global-strict": [
				"strict"
			],
			"no-comma-dangle": [
				"comma-dangle"
			],
			"no-empty-class": [
				"no-empty-character-class"
			],
			"no-extra-strict": [
				"strict"
			],
			"no-reserved-keys": [
				"quote-props"
			],
			"no-space-before-semi": [
				"semi-spacing"
			],
			"no-wrap-func": [
				"no-extra-parens"
			],
			"space-after-function-name": [
				"space-before-function-paren"
			],
			"space-before-function-parentheses": [
				"space-before-function-paren"
			],
			"space-in-brackets": [
				"object-curly-spacing",
				"array-bracket-spacing",
				"computed-property-spacing"
			],
			"space-unary-word-ops": [
				"space-unary-ops"
			],
			"spaced-line-comment": [
				"spaced-comment"
			]
		}
	};

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/conf/eslint.json":
/***/ function(module, exports) {

	module.exports = {
		"parser": "espree",
		"ecmaFeatures": {},
		"rules": {
			"no-alert": 0,
			"no-array-constructor": 0,
			"no-arrow-condition": 0,
			"no-bitwise": 0,
			"no-caller": 0,
			"no-case-declarations": 0,
			"no-catch-shadow": 0,
			"no-class-assign": 0,
			"no-cond-assign": 2,
			"no-console": 2,
			"no-const-assign": 0,
			"no-constant-condition": 2,
			"no-continue": 0,
			"no-control-regex": 2,
			"no-debugger": 2,
			"no-delete-var": 2,
			"no-div-regex": 0,
			"no-dupe-class-members": 0,
			"no-dupe-keys": 2,
			"no-dupe-args": 2,
			"no-duplicate-case": 2,
			"no-else-return": 0,
			"no-empty": 2,
			"no-empty-character-class": 2,
			"no-empty-label": 0,
			"no-empty-pattern": 0,
			"no-eq-null": 0,
			"no-eval": 0,
			"no-ex-assign": 2,
			"no-extend-native": 0,
			"no-extra-bind": 0,
			"no-extra-boolean-cast": 2,
			"no-extra-parens": 0,
			"no-extra-semi": 2,
			"no-fallthrough": 2,
			"no-floating-decimal": 0,
			"no-func-assign": 2,
			"no-implicit-coercion": 0,
			"no-implied-eval": 0,
			"no-inline-comments": 0,
			"no-inner-declarations": [
				2,
				"functions"
			],
			"no-invalid-regexp": 2,
			"no-invalid-this": 0,
			"no-irregular-whitespace": 2,
			"no-iterator": 0,
			"no-label-var": 0,
			"no-labels": 0,
			"no-lone-blocks": 0,
			"no-lonely-if": 0,
			"no-loop-func": 0,
			"no-mixed-requires": [
				0,
				false
			],
			"no-mixed-spaces-and-tabs": [
				2,
				false
			],
			"linebreak-style": [
				0,
				"unix"
			],
			"no-multi-spaces": 0,
			"no-multi-str": 0,
			"no-multiple-empty-lines": [
				0,
				{
					"max": 2
				}
			],
			"no-native-reassign": 0,
			"no-negated-condition": 0,
			"no-negated-in-lhs": 2,
			"no-nested-ternary": 0,
			"no-new": 0,
			"no-new-func": 0,
			"no-new-object": 0,
			"no-new-require": 0,
			"no-new-wrappers": 0,
			"no-obj-calls": 2,
			"no-octal": 2,
			"no-octal-escape": 0,
			"no-param-reassign": 0,
			"no-path-concat": 0,
			"no-plusplus": 0,
			"no-process-env": 0,
			"no-process-exit": 0,
			"no-proto": 0,
			"no-redeclare": 2,
			"no-regex-spaces": 2,
			"no-restricted-modules": 0,
			"no-restricted-syntax": 0,
			"no-return-assign": 0,
			"no-script-url": 0,
			"no-self-compare": 0,
			"no-sequences": 0,
			"no-shadow": 0,
			"no-shadow-restricted-names": 0,
			"no-spaced-func": 0,
			"no-sparse-arrays": 2,
			"no-sync": 0,
			"no-ternary": 0,
			"no-trailing-spaces": 0,
			"no-this-before-super": 0,
			"no-throw-literal": 0,
			"no-undef": 2,
			"no-undef-init": 0,
			"no-undefined": 0,
			"no-unexpected-multiline": 0,
			"no-underscore-dangle": 0,
			"no-unneeded-ternary": 0,
			"no-unreachable": 2,
			"no-unused-expressions": 0,
			"no-unused-vars": [
				2,
				{
					"vars": "all",
					"args": "after-used"
				}
			],
			"no-use-before-define": 0,
			"no-useless-call": 0,
			"no-useless-concat": 0,
			"no-void": 0,
			"no-var": 0,
			"no-warning-comments": [
				0,
				{
					"terms": [
						"todo",
						"fixme",
						"xxx"
					],
					"location": "start"
				}
			],
			"no-with": 0,
			"no-magic-numbers": 0,
			"array-bracket-spacing": [
				0,
				"never"
			],
			"arrow-body-style": [
				0,
				"as-needed"
			],
			"arrow-parens": 0,
			"arrow-spacing": 0,
			"accessor-pairs": 0,
			"block-scoped-var": 0,
			"block-spacing": 0,
			"brace-style": [
				0,
				"1tbs"
			],
			"callback-return": 0,
			"camelcase": 0,
			"comma-dangle": [
				2,
				"never"
			],
			"comma-spacing": 0,
			"comma-style": 0,
			"complexity": [
				0,
				11
			],
			"computed-property-spacing": [
				0,
				"never"
			],
			"consistent-return": 0,
			"consistent-this": [
				0,
				"that"
			],
			"constructor-super": 0,
			"curly": [
				0,
				"all"
			],
			"default-case": 0,
			"dot-location": 0,
			"dot-notation": [
				0,
				{
					"allowKeywords": true
				}
			],
			"eol-last": 0,
			"eqeqeq": 0,
			"func-names": 0,
			"func-style": [
				0,
				"declaration"
			],
			"generator-star-spacing": 0,
			"global-require": 0,
			"guard-for-in": 0,
			"handle-callback-err": 0,
			"id-length": 0,
			"indent": 0,
			"init-declarations": 0,
			"jsx-quotes": [
				0,
				"prefer-double"
			],
			"key-spacing": [
				0,
				{
					"beforeColon": false,
					"afterColon": true
				}
			],
			"lines-around-comment": 0,
			"max-depth": [
				0,
				4
			],
			"max-len": [
				0,
				80,
				4
			],
			"max-nested-callbacks": [
				0,
				2
			],
			"max-params": [
				0,
				3
			],
			"max-statements": [
				0,
				10
			],
			"new-cap": 0,
			"new-parens": 0,
			"newline-after-var": 0,
			"object-curly-spacing": [
				0,
				"never"
			],
			"object-shorthand": 0,
			"one-var": [
				0,
				"always"
			],
			"operator-assignment": [
				0,
				"always"
			],
			"operator-linebreak": 0,
			"padded-blocks": 0,
			"prefer-arrow-callback": 0,
			"prefer-const": 0,
			"prefer-spread": 0,
			"prefer-reflect": 0,
			"prefer-template": 0,
			"quote-props": 0,
			"quotes": [
				0,
				"double"
			],
			"radix": 0,
			"id-match": 0,
			"require-jsdoc": 0,
			"require-yield": 0,
			"semi": 0,
			"semi-spacing": [
				0,
				{
					"before": false,
					"after": true
				}
			],
			"sort-vars": 0,
			"space-after-keywords": [
				0,
				"always"
			],
			"space-before-keywords": [
				0,
				"always"
			],
			"space-before-blocks": [
				0,
				"always"
			],
			"space-before-function-paren": [
				0,
				"always"
			],
			"space-in-parens": [
				0,
				"never"
			],
			"space-infix-ops": 0,
			"space-return-throw-case": 0,
			"space-unary-ops": [
				0,
				{
					"words": true,
					"nonwords": false
				}
			],
			"spaced-comment": 0,
			"strict": 0,
			"use-isnan": 2,
			"valid-jsdoc": 0,
			"valid-typeof": 2,
			"vars-on-top": 0,
			"wrap-iife": 0,
			"wrap-regex": 0,
			"yoda": [
				0,
				"never"
			]
		}
	};

/***/ },

/***/ "./src/parsers/js/utils/eslintUtils.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function formatResults(e){return 0===e.length?"Lint rule not fired.":e.map(formatResult).join("").trim()}function formatResult(e){var t="-".repeat(e.column-1)+"^";return"\n// "+e.message+" (at "+e.line+":"+e.column+")\n   "+e.source+"\n// "+t+"\n"}function defineRule(e,t){var u=(0,_compileModule2.default)(t);e.define("astExplorerRule",u.default||u)}function runRule(e,t,u){var r=(0,_babelEslint.parseNoPatch)(e,{}),l=t.verify(new u(e,r),{rules:{astExplorerRule:2}});return formatResults(l)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatResults=formatResults,exports.formatResult=formatResult,exports.defineRule=defineRule,exports.runRule=runRule;var _compileModule=__webpack_require__("./src/parsers/utils/compileModule.js"),_compileModule2=_interopRequireDefault(_compileModule),_babelEslint=__webpack_require__("./node_modules/babel-eslint/index.js");

/***/ },

/***/ "./node_modules/babel-eslint/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, process) {function createModule(e){var t=new Module(e);return t.filename=e,t.paths=Module._nodeModulePaths(path.dirname(e)),t}function monkeypatch(){function e(e){if(e.decorators)for(var t=0;t<e.decorators.length;t++)e.decorators[t].expression&&this.visit(e.decorators[t])}function r(e){var t=T[e.type];if(t)for(var o=0;o<t.length;o++){var s=t[o],n=_[s],i=e[s];if(null!=n&&null!=i)if("loop"===n.type)for(var l=0;l<i.length;l++)if(Array.isArray(n.values))for(var p=0;p<n.values.length;p++)a.call(this,i[l][n.values[p]]);else a.call(this,i[l]);else if("single"===n.type)a.call(this,i);else if("typeAnnotation"===n.type)r.call(this,e.typeAnnotation);else if("typeParameters"===n.type)for(var c=0;c<e.typeParameters.params.length;c++)a.call(this,e.typeParameters.params[c]);else"id"===n.type&&("Identifier"===e.id.type?a.call(this,e.id):r.call(this,e.id))}}function a(e){e.typeAnnotation?r.call(this,e.typeAnnotation):"Identifier"===e.type?this.visit(e):r.call(this,e)}function o(e,t){var r=e.__currentScope,a=new d.Scope(e,"type-parameters",r,t,!1);e.__nestScope(a);for(var o=0;o<t.typeParameters.params.length;o++){var s=t.typeParameters.params[o];a.__define(s,new E("TypeParameter",s,s))}return a.__define=function(){return r.__define.apply(r,arguments)},a}function s(e,t){this.currentScope().variableScope.__define(t,new E("Variable",t,e,null,null,null))}if(!hasPatched){hasPatched=!0;var n;try{n=Module._resolveFilename("eslint",module.parent)}catch(e){try{n=/*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \"eslint\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))}catch(e){throw new ReferenceError("couldn't resolve eslint")}}var i=createModule(n),l=Module._resolveFilename("escope",i),p=createModule(l),c=p;try{var u=Module._resolveFilename("esrecurse",i);c=createModule(u)}catch(e){}var y=[];estraverse=c.require("estraverse"),y.push(estraverse),assign(estraverse.VisitorKeys,t.VISITOR_KEYS);try{var h=i.require("estraverse-fb");y.push(h),assign(h.VisitorKeys,t.VISITOR_KEYS)}catch(e){}var v=i.require("estraverse");v!==h&&(y.push(v),assign(v.VisitorKeys,t.VISITOR_KEYS)),y.forEach(function(e){e.VisitorKeys.MethodDefinition.push("decorators"),e.VisitorKeys.Property.push("decorators")});var d=!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),m=d.analyze;d.analyze=function(e,t){t.ecmaVersion=eslintOptions.ecmaVersion,t.sourceType=eslintOptions.sourceType,void 0!==eslintOptions.globalReturn&&(t.nodejsScope=eslintOptions.globalReturn);var r=m.call(this,e,t);return r};var f;try{f=Module._resolveFilename("./referencer",p)}catch(e){throw new ReferenceError("couldn't resolve escope/referencer")}var g=createModule(f),b=!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());b.__esModule&&(b=b.default);var P;try{P=Module._resolveFilename("./definition",g)}catch(e){throw new ReferenceError("couldn't resolve escope/definition")}var E=!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Definition,T=pick(t.VISITOR_KEYS,function(e){return t.FLIPPED_ALIAS_KEYS.Flow.concat(["ArrayPattern","ClassDeclaration","ClassExpression","FunctionDeclaration","FunctionExpression","Identifier","ObjectPattern","RestElement"]).indexOf(e)===-1}),_={callProperties:{type:"loop",values:["value"]},indexers:{type:"loop",values:["key","value"]},properties:{type:"loop",values:["value"]},types:{type:"loop"},params:{type:"loop"},argument:{type:"single"},elementType:{type:"single"},qualification:{type:"single"},rest:{type:"single"},returnType:{type:"single"},typeAnnotation:{type:"typeAnnotation"},typeParameters:{type:"typeParameters"},id:{type:"id"}},w=b.prototype.visitClass;b.prototype.visitClass=function(t){e.call(this,t);var r;if(t.typeParameters&&(r=o(this.scopeManager,t)),t.implements)for(var s=0;s<t.implements.length;s++)a.call(this,t.implements[s]);if(t.superTypeParameters)for(var n=0;n<t.superTypeParameters.params.length;n++)a.call(this,t.superTypeParameters.params[n]);w.call(this,t),r&&this.close(t)};var S=b.prototype.visitProperty;b.prototype.visitProperty=function(t){t.value&&"TypeCastExpression"===t.value.type&&r.call(this,t.value),e.call(this,t),S.call(this,t)},b.prototype.ClassProperty=function(e){e.typeAnnotation&&r.call(this,e.typeAnnotation),this.visitProperty(e)};var O=b.prototype.visitFunction;b.prototype.visitFunction=function(e){var r;if(e.typeParameters&&(r=o(this.scopeManager,e)),e.returnType&&a.call(this,e.returnType),e.params)for(var s=0;s<e.params.length;s++){var n=e.params[s];n.typeAnnotation?a.call(this,n):t.isAssignmentPattern(n)&&n.left.typeAnnotation&&a.call(this,n.left)}y.forEach(function(e){e.VisitorKeys.ObjectPattern=["properties"],e.VisitorKeys.ArrayPattern=["elements"]}),O.call(this,e),y.forEach(function(e){e.VisitorKeys.ObjectPattern=t.VISITOR_KEYS.ObjectPattern,e.VisitorKeys.ArrayPattern=t.VISITOR_KEYS.ArrayPattern}),r&&this.close(e)};var V=b.prototype.VariableDeclaration;b.prototype.VariableDeclaration=function(e){if(e.declarations)for(var t=0;t<e.declarations.length;t++){var r=e.declarations[t].id,o=r.typeAnnotation;o&&a.call(this,o)}V.call(this,e)},b.prototype.TypeAlias=function(e){s.call(this,e,e.id);var t;e.typeParameters&&(t=o(this.scopeManager,e)),e.right&&r.call(this,e.right),t&&this.close(e)},b.prototype.DeclareModule=b.prototype.DeclareFunction=b.prototype.DeclareVariable=b.prototype.DeclareClass=function(e){e.id&&s.call(this,e,e.id);var t;e.typeParameters&&(t=o(this.scopeManager,e)),t&&this.close(e)}}}var babylonToEspree=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/index.js"),assign=__webpack_require__("./node_modules/babel-eslint/node_modules/lodash.assign/index.js"),pick=__webpack_require__("./node_modules/lodash.pickby/index.js"),Module=__webpack_require__("./node_modules/node-libs-browser/mock/empty.js"),path=__webpack_require__("./node_modules/path-browserify/index.js"),parse=__webpack_require__("./node_modules/babel-eslint/node_modules/babylon/lib/index.js").parse,t=__webpack_require__("./node_modules/babel-types/lib/index.js"),tt=__webpack_require__("./node_modules/babel-eslint/node_modules/babylon/lib/index.js").tokTypes,traverse=__webpack_require__("./node_modules/babel-traverse/lib/index.js").default,estraverse,hasPatched=!1,eslintOptions={};exports.parse=function(e,t){t=t||{},eslintOptions.ecmaVersion=t.ecmaVersion=t.ecmaVersion||6,eslintOptions.sourceType=t.sourceType=t.sourceType||"module",eslintOptions.allowImportExportEverywhere=t.allowImportExportEverywhere=t.allowImportExportEverywhere||!1,"module"===t.sourceType?eslintOptions.globalReturn=!1:delete eslintOptions.globalReturn;try{monkeypatch()}catch(e){console.error(e.stack),process.exit(1)}return exports.parseNoPatch(e,t)},exports.parseNoPatch=function(e,t){var r,a={sourceType:t.sourceType,allowImportExportEverywhere:t.allowImportExportEverywhere,allowReturnOutsideFunction:!0,allowSuperOutsideMethod:!0,plugins:["flow","jsx","asyncFunctions","asyncGenerators","classConstructorCall","classProperties","decorators","doExpressions","exponentiationOperator","exportExtensions","functionBind","functionSent","objectRestSpread","trailingFunctionCommas"]};try{r=parse(e,a)}catch(e){throw e instanceof SyntaxError&&(e.lineNumber=e.loc.line,e.column=e.loc.column+1,e.message="Line "+e.lineNumber+": "+e.message.replace(/ \((\d+):(\d+)\)$/,"")),e}return r.tokens.pop(),r.tokens=babylonToEspree.toTokens(r.tokens,tt,e),babylonToEspree.convertComments(r.comments),babylonToEspree.toAST(r,traverse,e),r.type="Program",r.sourceType=r.program.sourceType,r.directives=r.program.directives,r.body=r.program.body,delete r.program,delete r._paths,babylonToEspree.attachComments(r,r.comments,r.tokens),r};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module), __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ 8:
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 8;


/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/index.js":
/***/ function(module, exports, __webpack_require__) {

	exports.attachComments=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/attachComments.js"),exports.toTokens=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/toTokens.js"),exports.toAST=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/toAST.js"),exports.convertComments=function(e){for(var t=0;t<e.length;t++){var o=e[t];"CommentBlock"===o.type?o.type="Block":"CommentLine"===o.type&&(o.type="Line"),o.range||(o.range=[o.start,o.end])}};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/attachComments.js":
/***/ function(module, exports) {

	module.exports=function(n,e,l){if(e.length){var t=e[0],o=e[e.length-1];if(l.length){if(t.start<l[0].start){var a=l[0];if(n.body.length){var d=n.body[0];d.leadingComments=[];for(var r=a.start,s=e.length,i=0;i<s&&e[i].start<r;i++)d.leadingComments.push(e[i])}}}else n.start=o.end,n.loc.start.line=o.loc.end.line,n.loc.start.column=o.loc.end.column,null===n.leadingComments&&n.innerComments.length&&(n.leadingComments=n.innerComments);if(l.length){var c=l[l.length-1];o.end>c.end&&(n.range[1]=c.end,n.loc.end.line=c.loc.end.line,n.loc.end.column=c.loc.end.column)}}else l.length||(n.loc.start.line=1,n.loc.end.line=1);n.body&&n.body.length>0&&(n.loc.start.line=n.body[0].loc.start.line,n.range[0]=n.body[0].start)};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/toTokens.js":
/***/ function(module, exports, __webpack_require__) {

	var convertTemplateType=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/convertTemplateType.js"),toToken=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/toToken.js");module.exports=function(e,t,o){convertTemplateType(e,t);for(var n=e.filter(function(e){return"CommentLine"!==e.type&&"CommentBlock"!==e.type}),r=0,p=n.length;r<p;r++)n[r]=toToken(n[r],t,o);return n};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/convertTemplateType.js":
/***/ function(module, exports) {

	module.exports=function(e,t){function n(n){return e[n].type===t.backQuote}function r(r){return n(r)||e[r].type===t.braceR&&i>0}function a(r){return n(r)||e[r].type===t.dollarBraceL}function l(n,r){for(var a="";n<=r;)e[n].value?a+=e[n].value:e[n].type!==t.template&&(a+=e[n].type.label),n++;return a}function o(t,n){var r={type:"Template",value:l(t,n),start:e[t].start,end:e[n].end,loc:{start:e[t].loc.start,end:e[n].loc.end}};e.splice(t,n-t+1,r)}function c(n){e[n].type===t.braceL?f++:e[n].type===t.braceR&&f--}for(var u=0,p=0,f=0,i=0;u<e.length;){if(r(u)&&0===f){if(n(u)&&i++,p=u+1,p>=e.length-1||e[p].type!==t.template)break;for(;!(a(p)||p>=e.length-1);)p++;n(p)&&i--,o(u,p)}else i>0&&c(u);u++}};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/toToken.js":
/***/ function(module, exports) {

	module.exports=function(e,t,a){var l=e.type;if(e.range=[e.start,e.end],l===t.name)e.type="Identifier";else if(l===t.semi||l===t.comma||l===t.parenL||l===t.parenR||l===t.braceL||l===t.braceR||l===t.slash||l===t.dot||l===t.bracketL||l===t.bracketR||l===t.ellipsis||l===t.arrow||l===t.star||l===t.incDec||l===t.colon||l===t.question||l===t.template||l===t.backQuote||l===t.dollarBraceL||l===t.at||l===t.logicalOR||l===t.logicalAND||l===t.bitwiseOR||l===t.bitwiseXOR||l===t.bitwiseAND||l===t.equality||l===t.relational||l===t.bitShift||l===t.plusMin||l===t.modulo||l===t.exponent||l===t.prefix||l===t.doubleColon||l.isAssign)e.type="Punctuator",e.value||(e.value=l.label);else if(l===t.jsxTagStart)e.type="Punctuator",e.value="<";else if(l===t.jsxTagEnd)e.type="Punctuator",e.value=">";else if(l===t.jsxName)e.type="JSXIdentifier";else if(l===t.jsxText)e.type="JSXText";else if("null"===l.keyword)e.type="Null";else if("false"===l.keyword||"true"===l.keyword)e.type="Boolean";else if(l.keyword)e.type="Keyword";else if(l===t.num)e.type="Numeric",e.value=a.slice(e.start,e.end);else if(l===t.string)e.type="String",e.value=a.slice(e.start,e.end);else if(l===t.regexp){e.type="RegularExpression";var i=e.value;e.regex={pattern:i.pattern,flags:i.flags},e.value="/"+i.pattern+"/"+i.flags}return e};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/toAST.js":
/***/ function(module, exports) {

	function changeToLiteral(e){e.type="Literal",e.raw||(e.extra&&e.extra.raw?e.raw=e.extra.raw:e.raw=source.slice(e.start,e.end))}function fixDirectives(e){if(e.isProgram()||e.isFunction()){var t=e.node,r=t,a=t.body;"Program"!==t.type&&(r=a,a=a.body),r.directives&&(r.directives.reverse().forEach(function(e){e.type="ExpressionStatement",e.expression=e.value,delete e.value,e.expression.type="Literal",changeToLiteral(e.expression),a.unshift(e)}),delete r.directives)}}var source;module.exports=function(e,t,r){source=r,e.range=[e.start,e.end],t(e,astTransformVisitor)};var astTransformVisitor={noScope:!0,enter:function(e){var t=e.node;if(t.range=[t.start,t.end],t._babelType=t.type,t.innerComments&&(t.trailingComments=t.innerComments,delete t.innerComments),t.trailingComments)for(var r=0;r<t.trailingComments.length;r++){var a=t.trailingComments[r];"CommentLine"===a.type?a.type="Line":"CommentBlock"===a.type&&(a.type="Block"),a.range=[a.start,a.end]}if(t.leadingComments)for(var r=0;r<t.leadingComments.length;r++){var a=t.leadingComments[r];"CommentLine"===a.type?a.type="Line":"CommentBlock"===a.type&&(a.type="Block"),a.range=[a.start,a.end]}Object.defineProperty(t,"_paths",{value:t._paths,writable:!0})},exit:function(e){var t=e.node;if([fixDirectives].forEach(function(t){t(e)}),e.isJSXText()&&(t.type="Literal",t.raw=t.value),(e.isNumericLiteral()||e.isStringLiteral())&&changeToLiteral(t),e.isBooleanLiteral()&&(t.type="Literal",t.raw=String(t.value)),e.isNullLiteral()&&(t.type="Literal",t.raw="null",t.value=null),e.isRegExpLiteral()&&(t.type="Literal",t.raw=t.extra.raw,t.value={},t.regex={pattern:t.pattern,flags:t.flags},delete t.extra,delete t.pattern,delete t.flags),e.isObjectProperty()&&(t.type="Property",t.kind="init"),e.isClassMethod()||e.isObjectMethod()){var r=source.slice(t.key.end,t.body.start),a=r.indexOf("(");t.value={type:"FunctionExpression",id:t.id,params:t.params,body:t.body,async:t.async,generator:t.generator,expression:t.expression,defaults:[],loc:{start:{line:t.key.loc.start.line,column:t.key.loc.end.column+a},end:t.body.loc.end}},t.value.range=[t.key.end+a,t.body.end],t.value.start=t.value.range&&t.value.range[0]||t.value.loc.start.column,t.value.end=t.value.range&&t.value.range[1]||t.value.loc.end.column,t.returnType&&(t.value.returnType=t.returnType),t.typeParameters&&(t.value.typeParameters=t.typeParameters),e.isClassMethod()&&(t.type="MethodDefinition"),e.isObjectMethod()&&(t.type="Property","method"===t.kind&&(t.kind="init")),delete t.body,delete t.id,delete t.async,delete t.generator,delete t.expression,delete t.params,delete t.returnType,delete t.typeParameters}if((e.isRestProperty()||e.isSpreadProperty())&&(t.type="Experimental"+t.type),e.isTypeParameter&&e.isTypeParameter()&&(t.type="Identifier",t.typeAnnotation=t.bound,delete t.bound),e.isQualifiedTypeIdentifier()&&delete t.id,e.isObjectTypeProperty()&&delete t.key,e.isObjectTypeIndexer()&&delete t.id,e.isFunctionTypeParam()&&delete t.name,e.isImportDeclaration()&&delete t.isType,e.isExportDeclaration()){var n=e.get("declaration");n.isClassExpression()?t.declaration.type="ClassDeclaration":n.isFunctionExpression()&&(t.declaration.type="FunctionDeclaration")}e.isFunction()&&t.async&&(t.generator=!0),e.isFunction()&&(t.defaults||(t.defaults=[])),e.isAwaitExpression()&&(t.type="YieldExpression",t.delegate=t.all,delete t.all),e.isTemplateLiteral()&&t.quasis.forEach(function(e){e.range[0]-=1,e.tail?e.range[1]+=1:e.range[1]+=2,e.loc.start.column-=1,e.tail?e.loc.end.column+=1:e.loc.end.column+=2})}};

/***/ },

/***/ "./node_modules/babel-eslint/node_modules/lodash.assign/index.js":
/***/ function(module, exports) {

	function apply(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)}function baseTimes(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}function overArg(r,e){return function(t){return r(e(t))}}function arrayLikeKeys(r,e){var t=isArray(r)||isArguments(r)?baseTimes(r.length,String):[],n=t.length,o=!!n;for(var i in r)!e&&!hasOwnProperty.call(r,i)||o&&("length"==i||isIndex(i,n))||t.push(i);return t}function assignValue(r,e,t){var n=r[e];hasOwnProperty.call(r,e)&&eq(n,t)&&(void 0!==t||e in r)||(r[e]=t)}function baseKeys(r){if(!isPrototype(r))return nativeKeys(r);var e=[];for(var t in Object(r))hasOwnProperty.call(r,t)&&"constructor"!=t&&e.push(t);return e}function baseRest(r,e){return e=nativeMax(void 0===e?r.length-1:e,0),function(){for(var t=arguments,n=-1,o=nativeMax(t.length-e,0),i=Array(o);++n<o;)i[n]=t[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=t[n];return a[e]=i,apply(r,this,a)}}function copyObject(r,e,t,n){t||(t={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(t[a],r[a],a,t,r):void 0;assignValue(t,a,void 0===s?r[a]:s)}return t}function createAssigner(r){return baseRest(function(e,t){var n=-1,o=t.length,i=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(i=r.length>3&&"function"==typeof i?(o--,i):void 0,a&&isIterateeCall(t[0],t[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var s=t[n];s&&r(e,s,n,i)}return e})}function isIndex(r,e){return e=null==e?MAX_SAFE_INTEGER:e,!!e&&("number"==typeof r||reIsUint.test(r))&&r>-1&&r%1==0&&r<e}function isIterateeCall(r,e,t){if(!isObject(t))return!1;var n=typeof e;return!!("number"==n?isArrayLike(t)&&isIndex(e,t.length):"string"==n&&e in t)&&eq(t[e],r)}function isPrototype(r){var e=r&&r.constructor,t="function"==typeof e&&e.prototype||objectProto;return r===t}function eq(r,e){return r===e||r!==r&&e!==e}function isArguments(r){return isArrayLikeObject(r)&&hasOwnProperty.call(r,"callee")&&(!propertyIsEnumerable.call(r,"callee")||objectToString.call(r)==argsTag)}function isArrayLike(r){return null!=r&&isLength(r.length)&&!isFunction(r)}function isArrayLikeObject(r){return isObjectLike(r)&&isArrayLike(r)}function isFunction(r){var e=isObject(r)?objectToString.call(r):"";return e==funcTag||e==genTag}function isLength(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=MAX_SAFE_INTEGER}function isObject(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}function isObjectLike(r){return!!r&&"object"==typeof r}function keys(r){return isArrayLike(r)?arrayLikeKeys(r):baseKeys(r)}var MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",funcTag="[object Function]",genTag="[object GeneratorFunction]",reIsUint=/^(?:0|[1-9]\d*)$/,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,propertyIsEnumerable=objectProto.propertyIsEnumerable,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nonEnumShadows=!propertyIsEnumerable.call({valueOf:1},"valueOf"),isArray=Array.isArray,assign=createAssigner(function(r,e){if(nonEnumShadows||isPrototype(e)||isArrayLike(e))return void copyObject(e,keys(e),r);for(var t in e)hasOwnProperty.call(e,t)&&assignValue(r,t,e[t])});module.exports=assign;

/***/ },

/***/ "./node_modules/lodash.pickby/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {function arrayPush(e,t){for(var r=-1,a=t.length,n=e.length;++r<a;)e[n+r]=t[r];return e}function arraySome(e,t){for(var r=-1,a=e?e.length:0;++r<a;)if(t(e[r],r,e))return!0;return!1}function baseProperty(e){return function(t){return null==t?void 0:t[e]}}function baseTimes(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}function baseUnary(e){return function(t){return e(t)}}function getValue(e,t){return null==e?void 0:e[t]}function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function mapToArray(e){var t=-1,r=Array(e.size);return e.forEach(function(e,a){r[++t]=[a,e]}),r}function overArg(e,t){return function(r){return e(t(r))}}function setToArray(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}function Hash(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{}}function hashDelete(e){return this.has(e)&&delete this.__data__[e]}function hashGet(e){var t=this.__data__;if(nativeCreate){var r=t[e];return r===HASH_UNDEFINED?void 0:r}return hasOwnProperty.call(t,e)?t[e]:void 0}function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}function hashSet(e,t){var r=this.__data__;return r[e]=nativeCreate&&void 0===t?HASH_UNDEFINED:t,this}function ListCache(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function listCacheClear(){this.__data__=[]}function listCacheDelete(e){var t=this.__data__,r=assocIndexOf(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():splice.call(t,r,1),!0}function listCacheGet(e){var t=this.__data__,r=assocIndexOf(t,e);return r<0?void 0:t[r][1]}function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}function listCacheSet(e,t){var r=this.__data__,a=assocIndexOf(r,e);return a<0?r.push([e,t]):r[a][1]=t,this}function MapCache(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function mapCacheClear(){this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}function mapCacheDelete(e){return getMapData(this,e).delete(e)}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){return getMapData(this,e).set(e,t),this}function SetCache(e){var t=-1,r=e?e.length:0;for(this.__data__=new MapCache;++t<r;)this.add(e[t])}function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED),this}function setCacheHas(e){return this.__data__.has(e)}function Stack(e){this.__data__=new ListCache(e)}function stackClear(){this.__data__=new ListCache}function stackDelete(e){return this.__data__.delete(e)}function stackGet(e){return this.__data__.get(e)}function stackHas(e){return this.__data__.has(e)}function stackSet(e,t){var r=this.__data__;if(r instanceof ListCache){var a=r.__data__;if(!Map||a.length<LARGE_ARRAY_SIZE-1)return a.push([e,t]),this;r=this.__data__=new MapCache(a)}return r.set(e,t),this}function arrayLikeKeys(e,t){var r=isArray(e)||isArguments(e)?baseTimes(e.length,String):[],a=r.length,n=!!a;for(var o in e)!t&&!hasOwnProperty.call(e,o)||n&&("length"==o||isIndex(o,a))||r.push(o);return r}function assocIndexOf(e,t){for(var r=e.length;r--;)if(eq(e[r][0],t))return r;return-1}function baseGet(e,t){t=isKey(t,e)?[t]:castPath(t);for(var r=0,a=t.length;null!=e&&r<a;)e=e[toKey(t[r++])];return r&&r==a?e:void 0}function baseGetAllKeys(e,t,r){var a=t(e);return isArray(e)?a:arrayPush(a,r(e))}function baseGetTag(e){return objectToString.call(e)}function baseHasIn(e,t){return null!=e&&t in Object(e)}function baseIsEqual(e,t,r,a,n){return e===t||(null==e||null==t||!isObject(e)&&!isObjectLike(t)?e!==e&&t!==t:baseIsEqualDeep(e,t,baseIsEqual,r,a,n))}function baseIsEqualDeep(e,t,r,a,n,o){var s=isArray(e),i=isArray(t),c=arrayTag,u=arrayTag;s||(c=getTag(e),c=c==argsTag?objectTag:c),i||(u=getTag(t),u=u==argsTag?objectTag:u);var y=c==objectTag&&!isHostObject(e),l=u==objectTag&&!isHostObject(t),g=c==u;if(g&&!y)return o||(o=new Stack),s||isTypedArray(e)?equalArrays(e,t,r,a,n,o):equalByTag(e,t,c,r,a,n,o);if(!(n&PARTIAL_COMPARE_FLAG)){var p=y&&hasOwnProperty.call(e,"__wrapped__"),f=l&&hasOwnProperty.call(t,"__wrapped__");if(p||f){var h=p?e.value():e,b=f?t.value():t;return o||(o=new Stack),r(h,b,a,n,o)}}return!!g&&(o||(o=new Stack),equalObjects(e,t,r,a,n,o))}function baseIsMatch(e,t,r,a){var n=r.length,o=n,s=!a;if(null==e)return!o;for(e=Object(e);n--;){var i=r[n];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++n<o;){i=r[n];var c=i[0],u=e[c],y=i[1];if(s&&i[2]){if(void 0===u&&!(c in e))return!1}else{var l=new Stack;if(a)var g=a(u,y,c,e,t,l);if(!(void 0===g?baseIsEqual(y,u,a,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,l):g))return!1}}return!0}function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var t=isFunction(e)||isHostObject(e)?reIsNative:reIsHostCtor;return t.test(toSource(e))}function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[objectToString.call(e)]}function baseIteratee(e){return"function"==typeof e?e:null==e?identity:"object"==typeof e?isArray(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var t=[];for(var r in Object(e))hasOwnProperty.call(e,r)&&"constructor"!=r&&t.push(r);return t}function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var t=isPrototype(e),r=[];for(var a in e)("constructor"!=a||!t&&hasOwnProperty.call(e,a))&&r.push(a);return r}function baseMatches(e){var t=getMatchData(e);return 1==t.length&&t[0][2]?matchesStrictComparable(t[0][0],t[0][1]):function(r){return r===e||baseIsMatch(r,e,t)}}function baseMatchesProperty(e,t){return isKey(e)&&isStrictComparable(t)?matchesStrictComparable(toKey(e),t):function(r){var a=get(r,e);return void 0===a&&a===t?hasIn(r,e):baseIsEqual(t,a,void 0,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG)}}function basePickBy(e,t,r){for(var a=-1,n=t.length,o={};++a<n;){var s=t[a],i=e[s];r(i,s)&&(o[s]=i)}return o}function basePropertyDeep(e){return function(t){return baseGet(t,e)}}function baseToString(e){if("string"==typeof e)return e;if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function castPath(e){return isArray(e)?e:stringToPath(e)}function equalArrays(e,t,r,a,n,o){var s=n&PARTIAL_COMPARE_FLAG,i=e.length,c=t.length;if(i!=c&&!(s&&c>i))return!1;var u=o.get(e);if(u&&o.get(t))return u==t;var y=-1,l=!0,g=n&UNORDERED_COMPARE_FLAG?new SetCache:void 0;for(o.set(e,t),o.set(t,e);++y<i;){var p=e[y],f=t[y];if(a)var h=s?a(f,p,y,t,e,o):a(p,f,y,e,t,o);if(void 0!==h){if(h)continue;l=!1;break}if(g){if(!arraySome(t,function(e,t){if(!g.has(t)&&(p===e||r(p,e,a,n,o)))return g.add(t)})){l=!1;break}}else if(p!==f&&!r(p,f,a,n,o)){l=!1;break}}return o.delete(e),o.delete(t),l}function equalByTag(e,t,r,a,n,o,s){switch(r){case dataViewTag:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case arrayBufferTag:return!(e.byteLength!=t.byteLength||!a(new Uint8Array(e),new Uint8Array(t)));case boolTag:case dateTag:case numberTag:return eq(+e,+t);case errorTag:return e.name==t.name&&e.message==t.message;case regexpTag:case stringTag:return e==t+"";case mapTag:var i=mapToArray;case setTag:var c=o&PARTIAL_COMPARE_FLAG;if(i||(i=setToArray),e.size!=t.size&&!c)return!1;var u=s.get(e);if(u)return u==t;o|=UNORDERED_COMPARE_FLAG,s.set(e,t);var y=equalArrays(i(e),i(t),a,n,o,s);return s.delete(e),y;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t)}return!1}function equalObjects(e,t,r,a,n,o){var s=n&PARTIAL_COMPARE_FLAG,i=keys(e),c=i.length,u=keys(t),y=u.length;if(c!=y&&!s)return!1;for(var l=c;l--;){var g=i[l];if(!(s?g in t:hasOwnProperty.call(t,g)))return!1}var p=o.get(e);if(p&&o.get(t))return p==t;var f=!0;o.set(e,t),o.set(t,e);for(var h=s;++l<c;){g=i[l];var b=e[g],T=t[g];if(a)var d=s?a(T,b,g,t,e,o):a(b,T,g,e,t,o);if(!(void 0===d?b===T||r(b,T,a,n,o):d)){f=!1;break}h||(h="constructor"==g)}if(f&&!h){var _=e.constructor,v=t.constructor;_!=v&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof v&&v instanceof v)&&(f=!1)}return o.delete(e),o.delete(t),f}function getAllKeysIn(e){return baseGetAllKeys(e,keysIn,getSymbolsIn)}function getMapData(e,t){var r=e.__data__;return isKeyable(t)?r["string"==typeof t?"string":"hash"]:r.map}function getMatchData(e){for(var t=keys(e),r=t.length;r--;){var a=t[r],n=e[a];t[r]=[a,n,isStrictComparable(n)]}return t}function getNative(e,t){var r=getValue(e,t);return baseIsNative(r)?r:void 0}function hasPath(e,t,r){t=isKey(t,e)?[t]:castPath(t);for(var a,n=-1,o=t.length;++n<o;){var s=toKey(t[n]);if(!(a=null!=e&&r(e,s)))break;e=e[s]}if(a)return a;var o=e?e.length:0;return!!o&&isLength(o)&&isIndex(s,o)&&(isArray(e)||isArguments(e))}function isIndex(e,t){return t=null==t?MAX_SAFE_INTEGER:t,!!t&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<t}function isKey(e,t){if(isArray(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!isSymbol(e))||(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t))}function isKeyable(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}function isPrototype(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||objectProto;return e===r}function isStrictComparable(e){return e===e&&!isObject(e)}function matchesStrictComparable(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}function nativeKeysIn(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function memoize(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);var r=function(){var a=arguments,n=t?t.apply(this,a):a[0],o=r.cache;if(o.has(n))return o.get(n);var s=e.apply(this,a);return r.cache=o.set(n,s),s};return r.cache=new(memoize.Cache||MapCache),r}function eq(e,t){return e===t||e!==e&&t!==t}function isArguments(e){return isArrayLikeObject(e)&&hasOwnProperty.call(e,"callee")&&(!propertyIsEnumerable.call(e,"callee")||objectToString.call(e)==argsTag)}function isArrayLike(e){return null!=e&&isLength(e.length)&&!isFunction(e)}function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}function isFunction(e){var t=isObject(e)?objectToString.call(e):"";return t==funcTag||t==genTag}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&objectToString.call(e)==symbolTag}function toString(e){return null==e?"":baseToString(e)}function get(e,t,r){var a=null==e?void 0:baseGet(e,t);return void 0===a?r:a}function hasIn(e,t){return null!=e&&hasPath(e,t,baseHasIn)}function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}function pickBy(e,t){return null==e?{}:basePickBy(e,getAllKeysIn(e),baseIteratee(t))}function identity(e){return e}function property(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e)}function stubArray(){return[]}var LARGE_ARRAY_SIZE=200,FUNC_ERROR_TEXT="Expected a function",HASH_UNDEFINED="__lodash_hash_undefined__",UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2,INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",promiseTag="[object Promise]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reEscapeChar=/\\(\\)?/g,reIsHostCtor=/^\[object .+?Constructor\]$/,reIsUint=/^(?:0|[1-9]\d*)$/,typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding("util")}catch(e){}}(),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype,coreJsData=root["__core-js_shared__"],maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Symbol=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,nativeGetSymbols=Object.getOwnPropertySymbols,nativeKeys=overArg(Object.keys,Object),DataView=getNative(root,"DataView"),Map=getNative(root,"Map"),Promise=getNative(root,"Promise"),Set=getNative(root,"Set"),WeakMap=getNative(root,"WeakMap"),nativeCreate=getNative(Object,"create"),dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas,Stack.prototype.clear=stackClear,Stack.prototype.delete=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet;var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray,getSymbolsIn=nativeGetSymbols?function(e){for(var t=[];e;)arrayPush(t,getSymbols(e)),e=getPrototype(e);return t}:stubArray,getTag=baseGetTag;(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(e){var t=objectToString.call(e),r=t==objectTag?e.constructor:void 0,a=r?toSource(r):void 0;if(a)switch(a){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return t});var stringToPath=memoize(function(e){e=toString(e);var t=[];return reLeadingDot.test(e)&&t.push(""),e.replace(rePropName,function(e,r,a,n){t.push(a?n.replace(reEscapeChar,"$1"):r||e)}),t});memoize.Cache=MapCache;var isArray=Array.isArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=pickBy;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/***/ function(module, exports) {

	

/***/ },

/***/ "./node_modules/path-browserify/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {function normalizeArray(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function filter(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,splitPath=function(r){return splitPathRe.exec(r).slice(1)};exports.resolve=function(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:process.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),(t?"/":"")+r||"."},exports.normalize=function(r){var t=exports.isAbsolute(r),e="/"===substr(r,-1);return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),r||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}for(var l=[],u=o;u<n.length;u++)l.push("..");return l=l.concat(s.slice(o)),l.join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){var t=splitPath(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."},exports.basename=function(r,t){var e=splitPath(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},exports.extname=function(r){return splitPath(r)[3]};var substr="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./node_modules/babel-eslint/node_modules/babylon/lib/index.js":
/***/ function(module, exports) {

	"use strict";function makePredicate(t){return t=t.split(" "),function(e){return t.indexOf(e)>=0}}function isInAstralSet(t,e){for(var s=65536,i=0;i<e.length;i+=2){if(s+=e[i],s>t)return!1;if(s+=e[i+1],s>=t)return!0}}function isIdentifierStart(t){return t<65?36===t:t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&nonASCIIidentifierStart.test(String.fromCharCode(t)):isInAstralSet(t,astralIdentifierStartCodes)))}function isIdentifierChar(t){return t<48?36===t:t<58||!(t<65)&&(t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&nonASCIIidentifier.test(String.fromCharCode(t)):isInAstralSet(t,astralIdentifierStartCodes)||isInAstralSet(t,astralIdentifierCodes))))}function getOptions(t){var e={};for(var s in defaultOptions)e[s]=t&&s in t?t[s]:defaultOptions[s];return e}function isNewLine(t){return 10===t||13===t||8232===t||8233===t}function getLineInfo(t,e){for(var s=1,i=0;;){lineBreakG.lastIndex=i;var r=lineBreakG.exec(t);if(!(r&&r.index<e))return new Position(s,e-i);++s,i=r.index+r[0].length}}function codePointToString(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}function finishNodeAt(t,e,s,i){return t.type=e,t.end=s,t.loc.end=i,this.processComment(t),t}function last(t){return t[t.length-1]}function getQualifiedJSXName(t){return"JSXIdentifier"===t.type?t.name:"JSXNamespacedName"===t.type?t.namespace.name+":"+t.name.name:"JSXMemberExpression"===t.type?getQualifiedJSXName(t.object)+"."+getQualifiedJSXName(t.property):void 0}function parse(t,e){return new Parser(e,t).parse()}Object.defineProperty(exports,"__esModule",{value:!0});var reservedWords={6:makePredicate("enum await"),strict:makePredicate("implements interface let package private protected public static yield"),strictBind:makePredicate("eval arguments")},isKeyword=makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super"),nonASCIIidentifierStartChars="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",nonASCIIidentifierChars="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]"),nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;var astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541],astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239],defaultOptions={sourceType:"script",sourceFilename:void 0,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowSuperOutsideMethod:!1,plugins:[],strictMode:null},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},beforeExpr=!0,startsExpr=!0,isLoop=!0,isAssign=!0,prefix=!0,postfix=!0,TokenType=function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};classCallCheck(this,t),this.label=e,this.keyword=s.keyword,this.beforeExpr=!!s.beforeExpr,this.startsExpr=!!s.startsExpr,this.rightAssociative=!!s.rightAssociative,this.isLoop=!!s.isLoop,this.isAssign=!!s.isAssign,this.prefix=!!s.prefix,this.postfix=!!s.postfix,this.binop=s.binop||null,this.updateContext=null},KeywordTokenType=function(t){function e(s){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return classCallCheck(this,e),i.keyword=s,possibleConstructorReturn(this,t.call(this,s,i))}return inherits(e,t),e}(TokenType),BinopTokenType=function(t){function e(s,i){return classCallCheck(this,e),possibleConstructorReturn(this,t.call(this,s,{beforeExpr:beforeExpr,binop:i}))}return inherits(e,t),e}(TokenType),types={num:new TokenType("num",{startsExpr:startsExpr}),regexp:new TokenType("regexp",{startsExpr:startsExpr}),string:new TokenType("string",{startsExpr:startsExpr}),name:new TokenType("name",{startsExpr:startsExpr}),eof:new TokenType("eof"),bracketL:new TokenType("[",{beforeExpr:beforeExpr,startsExpr:startsExpr}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr:beforeExpr,startsExpr:startsExpr}),braceBarL:new TokenType("{|",{beforeExpr:beforeExpr,startsExpr:startsExpr}),braceR:new TokenType("}"),braceBarR:new TokenType("|}"),parenL:new TokenType("(",{beforeExpr:beforeExpr,startsExpr:startsExpr}),parenR:new TokenType(")"),comma:new TokenType(",",{beforeExpr:beforeExpr}),semi:new TokenType(";",{beforeExpr:beforeExpr}),colon:new TokenType(":",{beforeExpr:beforeExpr}),doubleColon:new TokenType("::",{beforeExpr:beforeExpr}),dot:new TokenType("."),question:new TokenType("?",{beforeExpr:beforeExpr}),arrow:new TokenType("=>",{beforeExpr:beforeExpr}),template:new TokenType("template"),ellipsis:new TokenType("...",{beforeExpr:beforeExpr}),backQuote:new TokenType("`",{startsExpr:startsExpr}),dollarBraceL:new TokenType("${",{beforeExpr:beforeExpr,startsExpr:startsExpr}),at:new TokenType("@"),eq:new TokenType("=",{beforeExpr:beforeExpr,isAssign:isAssign}),assign:new TokenType("_=",{beforeExpr:beforeExpr,isAssign:isAssign}),incDec:new TokenType("++/--",{prefix:prefix,postfix:postfix,startsExpr:startsExpr}),prefix:new TokenType("prefix",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),logicalOR:new BinopTokenType("||",1),logicalAND:new BinopTokenType("&&",2),bitwiseOR:new BinopTokenType("|",3),bitwiseXOR:new BinopTokenType("^",4),bitwiseAND:new BinopTokenType("&",5),equality:new BinopTokenType("==/!=",6),relational:new BinopTokenType("</>",7),bitShift:new BinopTokenType("<</>>",8),plusMin:new TokenType("+/-",{beforeExpr:beforeExpr,binop:9,prefix:prefix,startsExpr:startsExpr}),modulo:new BinopTokenType("%",10),star:new BinopTokenType("*",10),slash:new BinopTokenType("/",10),exponent:new TokenType("**",{beforeExpr:beforeExpr,binop:11,rightAssociative:!0})},keywords={break:new KeywordTokenType("break"),case:new KeywordTokenType("case",{beforeExpr:beforeExpr}),catch:new KeywordTokenType("catch"),continue:new KeywordTokenType("continue"),debugger:new KeywordTokenType("debugger"),default:new KeywordTokenType("default",{beforeExpr:beforeExpr}),do:new KeywordTokenType("do",{isLoop:isLoop,beforeExpr:beforeExpr}),else:new KeywordTokenType("else",{beforeExpr:beforeExpr}),finally:new KeywordTokenType("finally"),for:new KeywordTokenType("for",{isLoop:isLoop}),function:new KeywordTokenType("function",{startsExpr:startsExpr}),if:new KeywordTokenType("if"),return:new KeywordTokenType("return",{beforeExpr:beforeExpr}),switch:new KeywordTokenType("switch"),throw:new KeywordTokenType("throw",{beforeExpr:beforeExpr}),try:new KeywordTokenType("try"),var:new KeywordTokenType("var"),let:new KeywordTokenType("let"),const:new KeywordTokenType("const"),while:new KeywordTokenType("while",{isLoop:isLoop}),with:new KeywordTokenType("with"),new:new KeywordTokenType("new",{beforeExpr:beforeExpr,startsExpr:startsExpr}),this:new KeywordTokenType("this",{startsExpr:startsExpr}),super:new KeywordTokenType("super",{startsExpr:startsExpr}),class:new KeywordTokenType("class"),extends:new KeywordTokenType("extends",{beforeExpr:beforeExpr}),export:new KeywordTokenType("export"),import:new KeywordTokenType("import"),yield:new KeywordTokenType("yield",{beforeExpr:beforeExpr,startsExpr:startsExpr}),null:new KeywordTokenType("null",{startsExpr:startsExpr}),true:new KeywordTokenType("true",{startsExpr:startsExpr}),false:new KeywordTokenType("false",{startsExpr:startsExpr}),in:new KeywordTokenType("in",{beforeExpr:beforeExpr,binop:7}),instanceof:new KeywordTokenType("instanceof",{beforeExpr:beforeExpr,binop:7}),typeof:new KeywordTokenType("typeof",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),void:new KeywordTokenType("void",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),delete:new KeywordTokenType("delete",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr})};Object.keys(keywords).forEach(function(t){types["_"+t]=keywords[t]});var lineBreak=/\r\n?|\n|\u2028|\u2029/,lineBreakG=new RegExp(lineBreak.source,"g"),nonASCIIwhitespace=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,TokContext=function t(e,s,i,r){classCallCheck(this,t),this.token=e,this.isExpr=!!s,this.preserveSpace=!!i,this.override=r},types$1={braceStatement:new TokContext("{",!1),braceExpression:new TokContext("{",!0),templateQuasi:new TokContext("${",!0),parenStatement:new TokContext("(",!1),parenExpression:new TokContext("(",!0),template:new TokContext("`",!0,!0,function(t){return t.readTmplToken()}),functionExpression:new TokContext("function",!0)};types.parenR.updateContext=types.braceR.updateContext=function(){if(1===this.state.context.length)return void(this.state.exprAllowed=!0);var t=this.state.context.pop();t===types$1.braceStatement&&this.curContext()===types$1.functionExpression?(this.state.context.pop(),this.state.exprAllowed=!1):t===types$1.templateQuasi?this.state.exprAllowed=!0:this.state.exprAllowed=!t.isExpr},types.name.updateContext=function(t){this.state.exprAllowed=!1,t!==types._let&&t!==types._const&&t!==types._var||lineBreak.test(this.input.slice(this.state.end))&&(this.state.exprAllowed=!0)},types.braceL.updateContext=function(t){this.state.context.push(this.braceIsBlock(t)?types$1.braceStatement:types$1.braceExpression),this.state.exprAllowed=!0},types.dollarBraceL.updateContext=function(){this.state.context.push(types$1.templateQuasi),this.state.exprAllowed=!0},types.parenL.updateContext=function(t){var e=t===types._if||t===types._for||t===types._with||t===types._while;this.state.context.push(e?types$1.parenStatement:types$1.parenExpression),this.state.exprAllowed=!0},types.incDec.updateContext=function(){},types._function.updateContext=function(){this.curContext()!==types$1.braceStatement&&this.state.context.push(types$1.functionExpression),this.state.exprAllowed=!1},types.backQuote.updateContext=function(){this.curContext()===types$1.template?this.state.context.pop():this.state.context.push(types$1.template),this.state.exprAllowed=!1};var Position=function t(e,s){classCallCheck(this,t),this.line=e,this.column=s},SourceLocation=function t(e,s){classCallCheck(this,t),this.start=e,this.end=s},State=function(){function t(){classCallCheck(this,t)}return t.prototype.init=function(t,e){return this.strict=t.strictMode!==!1&&"module"===t.sourceType,this.input=e,this.potentialArrowAt=-1,this.inMethod=this.inFunction=this.inGenerator=this.inAsync=this.inPropertyName=this.inType=this.noAnonFunctionType=!1,this.labels=[],this.decorators=[],this.tokens=[],this.comments=[],this.trailingComments=[],this.leadingComments=[],this.commentStack=[],this.pos=this.lineStart=0,this.curLine=1,this.type=types.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=[types$1.braceStatement],this.exprAllowed=!0,this.containsEsc=this.containsOctal=!1,this.octalPosition=null,this.exportedIdentifiers=[],this},t.prototype.curPosition=function(){return new Position(this.curLine,this.pos-this.lineStart)},t.prototype.clone=function(e){var s=new t;for(var i in this){var r=this[i];e&&"context"!==i||!Array.isArray(r)||(r=r.slice()),s[i]=r}return s},t}(),Token=function t(e){classCallCheck(this,t),this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,this.loc=new SourceLocation(e.startLoc,e.endLoc)},Tokenizer=function(){function t(e,s){classCallCheck(this,t),this.state=new State,this.state.init(e,s)}return t.prototype.next=function(){this.isLookahead||this.state.tokens.push(new Token(this.state)),this.state.lastTokEnd=this.state.end,this.state.lastTokStart=this.state.start,this.state.lastTokEndLoc=this.state.endLoc,this.state.lastTokStartLoc=this.state.startLoc,this.nextToken()},t.prototype.eat=function(t){return!!this.match(t)&&(this.next(),!0)},t.prototype.match=function(t){return this.state.type===t},t.prototype.isKeyword=function(t){return isKeyword(t)},t.prototype.lookahead=function(){var t=this.state;this.state=t.clone(!0),this.isLookahead=!0,this.next(),this.isLookahead=!1;var e=this.state.clone(!0);return this.state=t,e},t.prototype.setStrict=function(t){if(this.state.strict=t,this.match(types.num)||this.match(types.string)){for(this.state.pos=this.state.start;this.state.pos<this.state.lineStart;)this.state.lineStart=this.input.lastIndexOf("\n",this.state.lineStart-2)+1,--this.state.curLine;this.nextToken()}},t.prototype.curContext=function(){return this.state.context[this.state.context.length-1]},t.prototype.nextToken=function(){var t=this.curContext();return t&&t.preserveSpace||this.skipSpace(),this.state.containsOctal=!1,this.state.octalPosition=null,this.state.start=this.state.pos,this.state.startLoc=this.state.curPosition(),this.state.pos>=this.input.length?this.finishToken(types.eof):t.override?t.override(this):this.readToken(this.fullCharCodeAtPos())},t.prototype.readToken=function(t){return isIdentifierStart(t)||92===t?this.readWord():this.getTokenFromCode(t)},t.prototype.fullCharCodeAtPos=function(){var t=this.input.charCodeAt(this.state.pos);if(t<=55295||t>=57344)return t;var e=this.input.charCodeAt(this.state.pos+1);return(t<<10)+e-56613888},t.prototype.pushComment=function(t,e,s,i,r,a){var n={type:t?"CommentBlock":"CommentLine",value:e,start:s,end:i,loc:new SourceLocation(r,a)};this.isLookahead||(this.state.tokens.push(n),this.state.comments.push(n),this.addComment(n))},t.prototype.skipBlockComment=function(){var t=this.state.curPosition(),e=this.state.pos,s=this.input.indexOf("*/",this.state.pos+=2);s===-1&&this.raise(this.state.pos-2,"Unterminated comment"),this.state.pos=s+2,lineBreakG.lastIndex=e;for(var i=void 0;(i=lineBreakG.exec(this.input))&&i.index<this.state.pos;)++this.state.curLine,this.state.lineStart=i.index+i[0].length;this.pushComment(!0,this.input.slice(e+2,s),e,this.state.pos,t,this.state.curPosition())},t.prototype.skipLineComment=function(t){for(var e=this.state.pos,s=this.state.curPosition(),i=this.input.charCodeAt(this.state.pos+=t);this.state.pos<this.input.length&&10!==i&&13!==i&&8232!==i&&8233!==i;)++this.state.pos,i=this.input.charCodeAt(this.state.pos);this.pushComment(!1,this.input.slice(e+t,this.state.pos),e,this.state.pos,s,this.state.curPosition())},t.prototype.skipSpace=function(){t:for(;this.state.pos<this.input.length;){var t=this.input.charCodeAt(this.state.pos);switch(t){case 32:case 160:++this.state.pos;break;case 13:10===this.input.charCodeAt(this.state.pos+1)&&++this.state.pos;case 10:case 8232:case 8233:++this.state.pos,++this.state.curLine,this.state.lineStart=this.state.pos;break;case 47:switch(this.input.charCodeAt(this.state.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break t}break;default:if(!(t>8&&t<14||t>=5760&&nonASCIIwhitespace.test(String.fromCharCode(t))))break t;++this.state.pos}}},t.prototype.finishToken=function(t,e){this.state.end=this.state.pos,this.state.endLoc=this.state.curPosition();var s=this.state.type;this.state.type=t,this.state.value=e,this.updateContext(s)},t.prototype.readToken_dot=function(){var t=this.input.charCodeAt(this.state.pos+1);if(t>=48&&t<=57)return this.readNumber(!0);var e=this.input.charCodeAt(this.state.pos+2);return 46===t&&46===e?(this.state.pos+=3,this.finishToken(types.ellipsis)):(++this.state.pos,this.finishToken(types.dot))},t.prototype.readToken_slash=function(){if(this.state.exprAllowed)return++this.state.pos,this.readRegexp();var t=this.input.charCodeAt(this.state.pos+1);return 61===t?this.finishOp(types.assign,2):this.finishOp(types.slash,1)},t.prototype.readToken_mult_modulo=function(t){var e=42===t?types.star:types.modulo,s=1,i=this.input.charCodeAt(this.state.pos+1);return 42===i&&(s++,i=this.input.charCodeAt(this.state.pos+2),e=types.exponent),61===i&&(s++,e=types.assign),this.finishOp(e,s)},t.prototype.readToken_pipe_amp=function(t){var e=this.input.charCodeAt(this.state.pos+1);return e===t?this.finishOp(124===t?types.logicalOR:types.logicalAND,2):61===e?this.finishOp(types.assign,2):124===t&&125===e&&this.hasPlugin("flow")?this.finishOp(types.braceBarR,2):this.finishOp(124===t?types.bitwiseOR:types.bitwiseAND,1)},t.prototype.readToken_caret=function(){var t=this.input.charCodeAt(this.state.pos+1);return 61===t?this.finishOp(types.assign,2):this.finishOp(types.bitwiseXOR,1)},t.prototype.readToken_plus_min=function(t){var e=this.input.charCodeAt(this.state.pos+1);return e===t?45===e&&62===this.input.charCodeAt(this.state.pos+2)&&lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.pos))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(types.incDec,2):61===e?this.finishOp(types.assign,2):this.finishOp(types.plusMin,1)},t.prototype.readToken_lt_gt=function(t){var e=this.input.charCodeAt(this.state.pos+1),s=1;return e===t?(s=62===t&&62===this.input.charCodeAt(this.state.pos+2)?3:2,61===this.input.charCodeAt(this.state.pos+s)?this.finishOp(types.assign,s+1):this.finishOp(types.bitShift,s)):33===e&&60===t&&45===this.input.charCodeAt(this.state.pos+2)&&45===this.input.charCodeAt(this.state.pos+3)?(this.inModule&&this.unexpected(),this.skipLineComment(4),this.skipSpace(),this.nextToken()):(61===e&&(s=2),this.finishOp(types.relational,s))},t.prototype.readToken_eq_excl=function(t){var e=this.input.charCodeAt(this.state.pos+1);return 61===e?this.finishOp(types.equality,61===this.input.charCodeAt(this.state.pos+2)?3:2):61===t&&62===e?(this.state.pos+=2,this.finishToken(types.arrow)):this.finishOp(61===t?types.eq:types.prefix,1)},t.prototype.getTokenFromCode=function(t){switch(t){case 46:return this.readToken_dot();case 40:return++this.state.pos,this.finishToken(types.parenL);case 41:return++this.state.pos,this.finishToken(types.parenR);case 59:return++this.state.pos,this.finishToken(types.semi);case 44:return++this.state.pos,this.finishToken(types.comma);case 91:return++this.state.pos,this.finishToken(types.bracketL);case 93:return++this.state.pos,this.finishToken(types.bracketR);case 123:return this.hasPlugin("flow")&&124===this.input.charCodeAt(this.state.pos+1)?this.finishOp(types.braceBarL,2):(++this.state.pos,this.finishToken(types.braceL));case 125:return++this.state.pos,this.finishToken(types.braceR);case 58:return this.hasPlugin("functionBind")&&58===this.input.charCodeAt(this.state.pos+1)?this.finishOp(types.doubleColon,2):(++this.state.pos,this.finishToken(types.colon));case 63:return++this.state.pos,this.finishToken(types.question);case 64:return++this.state.pos,this.finishToken(types.at);case 96:return++this.state.pos,this.finishToken(types.backQuote);case 48:var e=this.input.charCodeAt(this.state.pos+1);if(120===e||88===e)return this.readRadixNumber(16);if(111===e||79===e)return this.readRadixNumber(8);if(98===e||66===e)return this.readRadixNumber(2);case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(t);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo(t);case 124:case 38:return this.readToken_pipe_amp(t);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(t);case 60:case 62:return this.readToken_lt_gt(t);case 61:case 33:return this.readToken_eq_excl(t);case 126:return this.finishOp(types.prefix,1)}this.raise(this.state.pos,"Unexpected character '"+codePointToString(t)+"'")},t.prototype.finishOp=function(t,e){var s=this.input.slice(this.state.pos,this.state.pos+e);return this.state.pos+=e,this.finishToken(t,s)},t.prototype.readRegexp=function(){for(var t=this.state.pos,e=void 0,s=void 0;;){this.state.pos>=this.input.length&&this.raise(t,"Unterminated regular expression");var i=this.input.charAt(this.state.pos);if(lineBreak.test(i)&&this.raise(t,"Unterminated regular expression"),e)e=!1;else{if("["===i)s=!0;else if("]"===i&&s)s=!1;else if("/"===i&&!s)break;e="\\"===i}++this.state.pos}var r=this.input.slice(t,this.state.pos);++this.state.pos;var a=this.readWord1();if(a){var n=/^[gmsiyu]*$/;n.test(a)||this.raise(t,"Invalid regular expression flag")}return this.finishToken(types.regexp,{pattern:r,flags:a})},t.prototype.readInt=function(t,e){for(var s=this.state.pos,i=0,r=0,a=null==e?1/0:e;r<a;++r){var n=this.input.charCodeAt(this.state.pos),o=void 0;if(o=n>=97?n-97+10:n>=65?n-65+10:n>=48&&n<=57?n-48:1/0,o>=t)break;++this.state.pos,i=i*t+o}return this.state.pos===s||null!=e&&this.state.pos-s!==e?null:i},t.prototype.readRadixNumber=function(t){this.state.pos+=2;var e=this.readInt(t);return null==e&&this.raise(this.state.start+2,"Expected number in radix "+t),isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.state.pos,"Identifier directly after number"),this.finishToken(types.num,e)},t.prototype.readNumber=function(t){var e=this.state.pos,s=48===this.input.charCodeAt(this.state.pos),i=!1;t||null!==this.readInt(10)||this.raise(e,"Invalid number");var r=this.input.charCodeAt(this.state.pos);46===r&&(++this.state.pos,this.readInt(10),i=!0,r=this.input.charCodeAt(this.state.pos)),69!==r&&101!==r||(r=this.input.charCodeAt(++this.state.pos),43!==r&&45!==r||++this.state.pos,null===this.readInt(10)&&this.raise(e,"Invalid number"),i=!0),isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.state.pos,"Identifier directly after number");var a=this.input.slice(e,this.state.pos),n=void 0;return i?n=parseFloat(a):s&&1!==a.length?/[89]/.test(a)||this.state.strict?this.raise(e,"Invalid number"):n=parseInt(a,8):n=parseInt(a,10),this.finishToken(types.num,n)},t.prototype.readCodePoint=function(){var t=this.input.charCodeAt(this.state.pos),e=void 0;if(123===t){var s=++this.state.pos;e=this.readHexChar(this.input.indexOf("}",this.state.pos)-this.state.pos),++this.state.pos,e>1114111&&this.raise(s,"Code point out of bounds")}else e=this.readHexChar(4);return e},t.prototype.readString=function(t){for(var e="",s=++this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated string constant");var i=this.input.charCodeAt(this.state.pos);if(i===t)break;92===i?(e+=this.input.slice(s,this.state.pos),e+=this.readEscapedChar(!1),s=this.state.pos):(isNewLine(i)&&this.raise(this.state.start,"Unterminated string constant"),++this.state.pos)}return e+=this.input.slice(s,this.state.pos++),this.finishToken(types.string,e)},t.prototype.readTmplToken=function(){for(var t="",e=this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated template");var s=this.input.charCodeAt(this.state.pos);if(96===s||36===s&&123===this.input.charCodeAt(this.state.pos+1))return this.state.pos===this.state.start&&this.match(types.template)?36===s?(this.state.pos+=2,this.finishToken(types.dollarBraceL)):(++this.state.pos,this.finishToken(types.backQuote)):(t+=this.input.slice(e,this.state.pos),this.finishToken(types.template,t));if(92===s)t+=this.input.slice(e,this.state.pos),t+=this.readEscapedChar(!0),e=this.state.pos;else if(isNewLine(s)){switch(t+=this.input.slice(e,this.state.pos),++this.state.pos,s){case 13:10===this.input.charCodeAt(this.state.pos)&&++this.state.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(s)}++this.state.curLine,this.state.lineStart=this.state.pos,e=this.state.pos}else++this.state.pos}},t.prototype.readEscapedChar=function(t){var e=this.input.charCodeAt(++this.state.pos);switch(++this.state.pos,e){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return codePointToString(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.state.pos)&&++this.state.pos;case 10:return this.state.lineStart=this.state.pos,++this.state.curLine,"";default:if(e>=48&&e<=55){var s=this.input.substr(this.state.pos-1,3).match(/^[0-7]+/)[0],i=parseInt(s,8);return i>255&&(s=s.slice(0,-1),i=parseInt(s,8)),i>0&&(this.state.containsOctal||(this.state.containsOctal=!0,this.state.octalPosition=this.state.pos-2),(this.state.strict||t)&&this.raise(this.state.pos-2,"Octal literal in strict mode")),this.state.pos+=s.length-1,String.fromCharCode(i)}return String.fromCharCode(e)}},t.prototype.readHexChar=function(t){var e=this.state.pos,s=this.readInt(16,t);return null===s&&this.raise(e,"Bad character escape sequence"),s},t.prototype.readWord1=function(){this.state.containsEsc=!1;for(var t="",e=!0,s=this.state.pos;this.state.pos<this.input.length;){var i=this.fullCharCodeAtPos();if(isIdentifierChar(i))this.state.pos+=i<=65535?1:2;else{if(92!==i)break;this.state.containsEsc=!0,t+=this.input.slice(s,this.state.pos);var r=this.state.pos;117!==this.input.charCodeAt(++this.state.pos)&&this.raise(this.state.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.state.pos;var a=this.readCodePoint();(e?isIdentifierStart:isIdentifierChar)(a,!0)||this.raise(r,"Invalid Unicode escape"),t+=codePointToString(a),s=this.state.pos}e=!1}return t+this.input.slice(s,this.state.pos)},t.prototype.readWord=function(){var t=this.readWord1(),e=types.name;return!this.state.containsEsc&&this.isKeyword(t)&&(e=keywords[t]),this.finishToken(e,t)},t.prototype.braceIsBlock=function(t){if(t===types.colon){var e=this.curContext();if(e===types$1.braceStatement||e===types$1.braceExpression)return!e.isExpr}return t===types._return?lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start)):t===types._else||t===types.semi||t===types.eof||t===types.parenR||(t===types.braceL?this.curContext()===types$1.braceStatement:!this.state.exprAllowed)},t.prototype.updateContext=function(t){var e=this.state.type,s=void 0;e.keyword&&t===types.dot?this.state.exprAllowed=!1:(s=e.updateContext)?s.call(this,t):this.state.exprAllowed=e.beforeExpr},t}(),plugins={},frozenDeprecatedWildcardPluginList=["jsx","doExpressions","objectRestSpread","decorators","classProperties","exportExtensions","asyncGenerators","functionBind","functionSent","dynamicImport","flow"],Parser=function(t){function e(s,i){classCallCheck(this,e),s=getOptions(s);var r=possibleConstructorReturn(this,t.call(this,s,i));return r.options=s,r.inModule="module"===r.options.sourceType,r.input=i,r.plugins=r.loadPlugins(r.options.plugins),r.filename=s.sourceFilename,0===r.state.pos&&"#"===r.input[0]&&"!"===r.input[1]&&r.skipLineComment(2),r}return inherits(e,t),e.prototype.isReservedWord=function(t){return"await"===t?this.inModule:reservedWords[6](t)},e.prototype.hasPlugin=function(t){return!!(this.plugins["*"]&&frozenDeprecatedWildcardPluginList.indexOf(t)>-1)||!!this.plugins[t]},e.prototype.extend=function(t,e){this[t]=e(this[t])},e.prototype.loadAllPlugins=function(){var t=this,e=Object.keys(plugins).filter(function(t){return"flow"!==t});e.push("flow"),e.forEach(function(e){var s=plugins[e];s&&s(t)})},e.prototype.loadPlugins=function(t){if(t.indexOf("*")>=0)return this.loadAllPlugins(),{"*":!0};var e={};t.indexOf("flow")>=0&&(t=t.filter(function(t){return"flow"!==t}),t.push("flow"));for(var s=t,i=Array.isArray(s),r=0,s=i?s:s[Symbol.iterator]();;){var a;if(i){if(r>=s.length)break;a=s[r++]}else{if(r=s.next(),r.done)break;a=r.value}var n=a;if(!e[n]){e[n]=!0;var o=plugins[n];o&&o(this)}}return e},e.prototype.parse=function(){var t=this.startNode(),e=this.startNode();return this.nextToken(),this.parseTopLevel(t,e)},e}(Tokenizer),pp=Parser.prototype;pp.addExtra=function(t,e,s){if(t){var i=t.extra=t.extra||{};i[e]=s}},pp.isRelational=function(t){return this.match(types.relational)&&this.state.value===t},pp.expectRelational=function(t){this.isRelational(t)?this.next():this.unexpected(null,types.relational)},pp.isContextual=function(t){return this.match(types.name)&&this.state.value===t},pp.eatContextual=function(t){return this.state.value===t&&this.eat(types.name)},pp.expectContextual=function(t,e){this.eatContextual(t)||this.unexpected(null,e)},pp.canInsertSemicolon=function(){return this.match(types.eof)||this.match(types.braceR)||lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))},pp.isLineTerminator=function(){return this.eat(types.semi)||this.canInsertSemicolon()},pp.semicolon=function(){this.isLineTerminator()||this.unexpected(null,types.semi)},pp.expect=function(t,e){return this.eat(t)||this.unexpected(e,t)},pp.unexpected=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected token";e&&"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e.label&&(e="Unexpected token, expected "+e.label),this.raise(null!=t?t:this.state.start,e)};var pp$1=Parser.prototype;pp$1.parseTopLevel=function(t,e){return e.sourceType=this.options.sourceType,
	this.parseBlockBody(e,!0,!0,types.eof),t.program=this.finishNode(e,"Program"),t.comments=this.state.comments,t.tokens=this.state.tokens,this.finishNode(t,"File")};var loopLabel={kind:"loop"},switchLabel={kind:"switch"};pp$1.stmtToDirective=function(t){var e=t.expression,s=this.startNodeAt(e.start,e.loc.start),i=this.startNodeAt(t.start,t.loc.start),r=this.input.slice(e.start,e.end),a=s.value=r.slice(1,-1);return this.addExtra(s,"raw",r),this.addExtra(s,"rawValue",a),i.value=this.finishNodeAt(s,"DirectiveLiteral",e.end,e.loc.end),this.finishNodeAt(i,"Directive",t.end,t.loc.end)},pp$1.parseStatement=function(t,e){this.match(types.at)&&this.parseDecorators(!0);var s=this.state.type,i=this.startNode();switch(s){case types._break:case types._continue:return this.parseBreakContinueStatement(i,s.keyword);case types._debugger:return this.parseDebuggerStatement(i);case types._do:return this.parseDoStatement(i);case types._for:return this.parseForStatement(i);case types._function:return t||this.unexpected(),this.parseFunctionStatement(i);case types._class:return t||this.unexpected(),this.takeDecorators(i),this.parseClass(i,!0);case types._if:return this.parseIfStatement(i);case types._return:return this.parseReturnStatement(i);case types._switch:return this.parseSwitchStatement(i);case types._throw:return this.parseThrowStatement(i);case types._try:return this.parseTryStatement(i);case types._let:case types._const:t||this.unexpected();case types._var:return this.parseVarStatement(i,s);case types._while:return this.parseWhileStatement(i);case types._with:return this.parseWithStatement(i);case types.braceL:return this.parseBlock();case types.semi:return this.parseEmptyStatement(i);case types._export:case types._import:if(this.hasPlugin("dynamicImport")&&this.lookahead().type===types.parenL)break;return this.options.allowImportExportEverywhere||(e||this.raise(this.state.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.state.start,"'import' and 'export' may appear only with 'sourceType: module'")),s===types._import?this.parseImport(i):this.parseExport(i);case types.name:if("async"===this.state.value){var r=this.state.clone();if(this.next(),this.match(types._function)&&!this.canInsertSemicolon())return this.expect(types._function),this.parseFunction(i,!0,!1,!0);this.state=r}}var a=this.state.value,n=this.parseExpression();return s===types.name&&"Identifier"===n.type&&this.eat(types.colon)?this.parseLabeledStatement(i,a,n):this.parseExpressionStatement(i,n)},pp$1.takeDecorators=function(t){this.state.decorators.length&&(t.decorators=this.state.decorators,this.state.decorators=[])},pp$1.parseDecorators=function(t){for(;this.match(types.at);){var e=this.parseDecorator();this.state.decorators.push(e)}t&&this.match(types._export)||this.match(types._class)||this.raise(this.state.start,"Leading decorators must be attached to a class declaration")},pp$1.parseDecorator=function(){this.hasPlugin("decorators")||this.unexpected();var t=this.startNode();return this.next(),t.expression=this.parseMaybeAssign(),this.finishNode(t,"Decorator")},pp$1.parseBreakContinueStatement=function(t,e){var s="break"===e;this.next(),this.isLineTerminator()?t.label=null:this.match(types.name)?(t.label=this.parseIdentifier(),this.semicolon()):this.unexpected();var i=void 0;for(i=0;i<this.state.labels.length;++i){var r=this.state.labels[i];if(null==t.label||r.name===t.label.name){if(null!=r.kind&&(s||"loop"===r.kind))break;if(t.label&&s)break}}return i===this.state.labels.length&&this.raise(t.start,"Unsyntactic "+e),this.finishNode(t,s?"BreakStatement":"ContinueStatement")},pp$1.parseDebuggerStatement=function(t){return this.next(),this.semicolon(),this.finishNode(t,"DebuggerStatement")},pp$1.parseDoStatement=function(t){return this.next(),this.state.labels.push(loopLabel),t.body=this.parseStatement(!1),this.state.labels.pop(),this.expect(types._while),t.test=this.parseParenExpression(),this.eat(types.semi),this.finishNode(t,"DoWhileStatement")},pp$1.parseForStatement=function(t){this.next(),this.state.labels.push(loopLabel);var e=!1;if(this.hasPlugin("asyncGenerators")&&this.state.inAsync&&this.isContextual("await")&&(e=!0,this.next()),this.expect(types.parenL),this.match(types.semi))return e&&this.unexpected(),this.parseFor(t,null);if(this.match(types._var)||this.match(types._let)||this.match(types._const)){var s=this.startNode(),i=this.state.type;return this.next(),this.parseVar(s,!0,i),this.finishNode(s,"VariableDeclaration"),!this.match(types._in)&&!this.isContextual("of")||1!==s.declarations.length||s.declarations[0].init?(e&&this.unexpected(),this.parseFor(t,s)):this.parseForIn(t,s,e)}var r={start:0},a=this.parseExpression(!0,r);if(this.match(types._in)||this.isContextual("of")){var n=this.isContextual("of")?"for-of statement":"for-in statement";return this.toAssignable(a,void 0,n),this.checkLVal(a,void 0,void 0,n),this.parseForIn(t,a,e)}return r.start&&this.unexpected(r.start),e&&this.unexpected(),this.parseFor(t,a)},pp$1.parseFunctionStatement=function(t){return this.next(),this.parseFunction(t,!0)},pp$1.parseIfStatement=function(t){return this.next(),t.test=this.parseParenExpression(),t.consequent=this.parseStatement(!1),t.alternate=this.eat(types._else)?this.parseStatement(!1):null,this.finishNode(t,"IfStatement")},pp$1.parseReturnStatement=function(t){return this.state.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.state.start,"'return' outside of function"),this.next(),this.isLineTerminator()?t.argument=null:(t.argument=this.parseExpression(),this.semicolon()),this.finishNode(t,"ReturnStatement")},pp$1.parseSwitchStatement=function(t){this.next(),t.discriminant=this.parseParenExpression(),t.cases=[],this.expect(types.braceL),this.state.labels.push(switchLabel);for(var e,s=void 0;!this.match(types.braceR);)if(this.match(types._case)||this.match(types._default)){var i=this.match(types._case);s&&this.finishNode(s,"SwitchCase"),t.cases.push(s=this.startNode()),s.consequent=[],this.next(),i?s.test=this.parseExpression():(e&&this.raise(this.state.lastTokStart,"Multiple default clauses"),e=!0,s.test=null),this.expect(types.colon)}else s?s.consequent.push(this.parseStatement(!0)):this.unexpected();return s&&this.finishNode(s,"SwitchCase"),this.next(),this.state.labels.pop(),this.finishNode(t,"SwitchStatement")},pp$1.parseThrowStatement=function(t){return this.next(),lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))&&this.raise(this.state.lastTokEnd,"Illegal newline after throw"),t.argument=this.parseExpression(),this.semicolon(),this.finishNode(t,"ThrowStatement")};var empty=[];pp$1.parseTryStatement=function(t){if(this.next(),t.block=this.parseBlock(),t.handler=null,this.match(types._catch)){var e=this.startNode();this.next(),this.expect(types.parenL),e.param=this.parseBindingAtom(),this.checkLVal(e.param,!0,Object.create(null),"catch clause"),this.expect(types.parenR),e.body=this.parseBlock(),t.handler=this.finishNode(e,"CatchClause")}return t.guardedHandlers=empty,t.finalizer=this.eat(types._finally)?this.parseBlock():null,t.handler||t.finalizer||this.raise(t.start,"Missing catch or finally clause"),this.finishNode(t,"TryStatement")},pp$1.parseVarStatement=function(t,e){return this.next(),this.parseVar(t,!1,e),this.semicolon(),this.finishNode(t,"VariableDeclaration")},pp$1.parseWhileStatement=function(t){return this.next(),t.test=this.parseParenExpression(),this.state.labels.push(loopLabel),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,"WhileStatement")},pp$1.parseWithStatement=function(t){return this.state.strict&&this.raise(this.state.start,"'with' in strict mode"),this.next(),t.object=this.parseParenExpression(),t.body=this.parseStatement(!1),this.finishNode(t,"WithStatement")},pp$1.parseEmptyStatement=function(t){return this.next(),this.finishNode(t,"EmptyStatement")},pp$1.parseLabeledStatement=function(t,e,s){for(var i=this.state.labels,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}var o=n;o.name===e&&this.raise(s.start,"Label '"+e+"' is already declared")}for(var p=this.state.type.isLoop?"loop":this.match(types._switch)?"switch":null,h=this.state.labels.length-1;h>=0;h--){var c=this.state.labels[h];if(c.statementStart!==t.start)break;c.statementStart=this.state.start,c.kind=p}return this.state.labels.push({name:e,kind:p,statementStart:this.state.start}),t.body=this.parseStatement(!0),this.state.labels.pop(),t.label=s,this.finishNode(t,"LabeledStatement")},pp$1.parseExpressionStatement=function(t,e){return t.expression=e,this.semicolon(),this.finishNode(t,"ExpressionStatement")},pp$1.parseBlock=function(t){var e=this.startNode();return this.expect(types.braceL),this.parseBlockBody(e,t,!1,types.braceR),this.finishNode(e,"BlockStatement")},pp$1.parseBlockBody=function(t,e,s,i){t.body=[],t.directives=[];for(var r=!1,a=void 0,n=void 0;!this.eat(i);){r||!this.state.containsOctal||n||(n=this.state.octalPosition);var o=this.parseStatement(!0,s);if(!e||r||"ExpressionStatement"!==o.type||"StringLiteral"!==o.expression.type||o.expression.extra.parenthesized)r=!0,t.body.push(o);else{var p=this.stmtToDirective(o);t.directives.push(p),void 0===a&&"use strict"===p.value.value&&(a=this.state.strict,this.setStrict(!0),n&&this.raise(n,"Octal literal in strict mode"))}}a===!1&&this.setStrict(!1)},pp$1.parseFor=function(t,e){return t.init=e,this.expect(types.semi),t.test=this.match(types.semi)?null:this.parseExpression(),this.expect(types.semi),t.update=this.match(types.parenR)?null:this.parseExpression(),this.expect(types.parenR),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,"ForStatement")},pp$1.parseForIn=function(t,e,s){var i=void 0;return s?(this.eatContextual("of"),i="ForAwaitStatement"):(i=this.match(types._in)?"ForInStatement":"ForOfStatement",this.next()),t.left=e,t.right=this.parseExpression(),this.expect(types.parenR),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,i)},pp$1.parseVar=function(t,e,s){for(t.declarations=[],t.kind=s.keyword;;){var i=this.startNode();if(this.parseVarHead(i),this.eat(types.eq)?i.init=this.parseMaybeAssign(e):s!==types._const||this.match(types._in)||this.isContextual("of")?"Identifier"===i.id.type||e&&(this.match(types._in)||this.isContextual("of"))?i.init=null:this.raise(this.state.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),t.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(types.comma))break}return t},pp$1.parseVarHead=function(t){t.id=this.parseBindingAtom(),this.checkLVal(t.id,!0,void 0,"variable declaration")},pp$1.parseFunction=function(t,e,s,i,r){var a=this.state.inMethod;return this.state.inMethod=!1,this.initFunction(t,i),this.match(types.star)&&(t.async&&!this.hasPlugin("asyncGenerators")?this.unexpected():(t.generator=!0,this.next())),!e||r||this.match(types.name)||this.match(types._yield)||this.unexpected(),(this.match(types.name)||this.match(types._yield))&&(t.id=this.parseBindingIdentifier()),this.parseFunctionParams(t),this.parseFunctionBody(t,s),this.state.inMethod=a,this.finishNode(t,e?"FunctionDeclaration":"FunctionExpression")},pp$1.parseFunctionParams=function(t){this.expect(types.parenL),t.params=this.parseBindingList(types.parenR)},pp$1.parseClass=function(t,e,s){return this.next(),this.parseClassId(t,e,s),this.parseClassSuper(t),this.parseClassBody(t),this.finishNode(t,e?"ClassDeclaration":"ClassExpression")},pp$1.isClassProperty=function(){return this.match(types.eq)||this.isLineTerminator()},pp$1.isClassMutatorStarter=function(){return!1},pp$1.parseClassBody=function(t){var e=this.state.strict;this.state.strict=!0;var s=!1,i=!1,r=[],a=this.startNode();for(a.body=[],this.expect(types.braceL);!this.eat(types.braceR);)if(!this.eat(types.semi))if(this.match(types.at))r.push(this.parseDecorator());else{var n=this.startNode();r.length&&(n.decorators=r,r=[]);var o=!1,p=this.match(types.name)&&"static"===this.state.value,h=this.eat(types.star),c=!1,l=!1;if(this.parsePropertyName(n),n.static=p&&!this.match(types.parenL),n.static&&(h=this.eat(types.star),this.parsePropertyName(n)),!h){if(this.isClassProperty()){a.body.push(this.parseClassProperty(n));continue}"Identifier"===n.key.type&&!n.computed&&this.hasPlugin("classConstructorCall")&&"call"===n.key.name&&this.match(types.name)&&"constructor"===this.state.value&&(o=!0,this.parsePropertyName(n))}var u=!this.match(types.parenL)&&!n.computed&&"Identifier"===n.key.type&&"async"===n.key.name;if(u&&(this.hasPlugin("asyncGenerators")&&this.eat(types.star)&&(h=!0),l=!0,this.parsePropertyName(n)),n.kind="method",!n.computed){var d=n.key;l||h||this.isClassMutatorStarter()||"Identifier"!==d.type||this.match(types.parenL)||"get"!==d.name&&"set"!==d.name||(c=!0,n.kind=d.name,d=this.parsePropertyName(n));var f=!o&&!n.static&&("Identifier"===d.type&&"constructor"===d.name||"StringLiteral"===d.type&&"constructor"===d.value);f&&(i&&this.raise(d.start,"Duplicate constructor in the same class"),c&&this.raise(d.start,"Constructor can't have get/set modifier"),h&&this.raise(d.start,"Constructor can't be a generator"),l&&this.raise(d.start,"Constructor can't be an async function"),n.kind="constructor",i=!0);var y=n.static&&("Identifier"===d.type&&"prototype"===d.name||"StringLiteral"===d.type&&"prototype"===d.value);y&&this.raise(d.start,"Classes may not have static property named prototype")}if(o&&(s&&this.raise(n.start,"Duplicate constructor call in the same class"),n.kind="constructorCall",s=!0),"constructor"!==n.kind&&"constructorCall"!==n.kind||!n.decorators||this.raise(n.start,"You can't attach decorators to a class constructor"),this.parseClassMethod(a,n,h,l),c){var m="get"===n.kind?0:1;if(n.params.length!==m){var x=n.start;"get"===n.kind?this.raise(x,"getter should have no params"):this.raise(x,"setter should have exactly one param")}}}r.length&&this.raise(this.state.start,"You have trailing decorators with no method"),t.body=this.finishNode(a,"ClassBody"),this.state.strict=e},pp$1.parseClassProperty=function(t){return this.match(types.eq)?(this.hasPlugin("classProperties")||this.unexpected(),this.next(),t.value=this.parseMaybeAssign()):t.value=null,this.semicolon(),this.finishNode(t,"ClassProperty")},pp$1.parseClassMethod=function(t,e,s,i){this.parseMethod(e,s,i),t.body.push(this.finishNode(e,"ClassMethod"))},pp$1.parseClassId=function(t,e,s){this.match(types.name)?t.id=this.parseIdentifier():s||!e?t.id=null:this.unexpected()},pp$1.parseClassSuper=function(t){t.superClass=this.eat(types._extends)?this.parseExprSubscripts():null},pp$1.parseExport=function(t){if(this.next(),this.match(types.star)){var e=this.startNode();if(this.next(),!this.hasPlugin("exportExtensions")||!this.eatContextual("as"))return this.parseExportFrom(t,!0),this.finishNode(t,"ExportAllDeclaration");e.exported=this.parseIdentifier(),t.specifiers=[this.finishNode(e,"ExportNamespaceSpecifier")],this.parseExportSpecifiersMaybe(t),this.parseExportFrom(t,!0)}else if(this.hasPlugin("exportExtensions")&&this.isExportDefaultSpecifier()){var s=this.startNode();if(s.exported=this.parseIdentifier(!0),t.specifiers=[this.finishNode(s,"ExportDefaultSpecifier")],this.match(types.comma)&&this.lookahead().type===types.star){this.expect(types.comma);var i=this.startNode();this.expect(types.star),this.expectContextual("as"),i.exported=this.parseIdentifier(),t.specifiers.push(this.finishNode(i,"ExportNamespaceSpecifier"))}else this.parseExportSpecifiersMaybe(t);this.parseExportFrom(t,!0)}else{if(this.eat(types._default)){var r=this.startNode(),a=!1;return this.eat(types._function)?r=this.parseFunction(r,!0,!1,!1,!0):this.match(types._class)?r=this.parseClass(r,!0,!0):(a=!0,r=this.parseMaybeAssign()),t.declaration=r,a&&this.semicolon(),this.checkExport(t,!0,!0),this.finishNode(t,"ExportDefaultDeclaration")}this.shouldParseExportDeclaration()?(t.specifiers=[],t.source=null,t.declaration=this.parseExportDeclaration(t)):(t.declaration=null,t.specifiers=this.parseExportSpecifiers(),this.parseExportFrom(t))}return this.checkExport(t,!0),this.finishNode(t,"ExportNamedDeclaration")},pp$1.parseExportDeclaration=function(){return this.parseStatement(!0)},pp$1.isExportDefaultSpecifier=function(){if(this.match(types.name))return"type"!==this.state.value&&"async"!==this.state.value&&"interface"!==this.state.value;if(!this.match(types._default))return!1;var t=this.lookahead();return t.type===types.comma||t.type===types.name&&"from"===t.value},pp$1.parseExportSpecifiersMaybe=function(t){this.eat(types.comma)&&(t.specifiers=t.specifiers.concat(this.parseExportSpecifiers()))},pp$1.parseExportFrom=function(t,e){this.eatContextual("from")?(t.source=this.match(types.string)?this.parseExprAtom():this.unexpected(),this.checkExport(t)):e?this.unexpected():t.source=null,this.semicolon()},pp$1.shouldParseExportDeclaration=function(){return"var"===this.state.type.keyword||"const"===this.state.type.keyword||"let"===this.state.type.keyword||"function"===this.state.type.keyword||"class"===this.state.type.keyword||this.isContextual("async")},pp$1.checkExport=function(t,e,s){if(e)if(s)this.checkDuplicateExports(t,"default");else if(t.specifiers&&t.specifiers.length)for(var i=t.specifiers,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}var o=n;this.checkDuplicateExports(o,o.exported.name)}else if(t.declaration)if("FunctionDeclaration"===t.declaration.type||"ClassDeclaration"===t.declaration.type)this.checkDuplicateExports(t,t.declaration.id.name);else if("VariableDeclaration"===t.declaration.type)for(var p=t.declaration.declarations,h=Array.isArray(p),c=0,p=h?p:p[Symbol.iterator]();;){var l;if(h){if(c>=p.length)break;l=p[c++]}else{if(c=p.next(),c.done)break;l=c.value}var u=l;this.checkDeclaration(u.id)}if(this.state.decorators.length){var d=t.declaration&&("ClassDeclaration"===t.declaration.type||"ClassExpression"===t.declaration.type);t.declaration&&d||this.raise(t.start,"You can only use decorators on an export when exporting a class"),this.takeDecorators(t.declaration)}},pp$1.checkDeclaration=function(t){if("ObjectPattern"===t.type)for(var e=t.properties,s=Array.isArray(e),i=0,e=s?e:e[Symbol.iterator]();;){var r;if(s){if(i>=e.length)break;r=e[i++]}else{if(i=e.next(),i.done)break;r=i.value}var a=r;this.checkDeclaration(a)}else if("ArrayPattern"===t.type)for(var n=t.elements,o=Array.isArray(n),p=0,n=o?n:n[Symbol.iterator]();;){var h;if(o){if(p>=n.length)break;h=n[p++]}else{if(p=n.next(),p.done)break;h=p.value}var c=h;c&&this.checkDeclaration(c)}else"ObjectProperty"===t.type?this.checkDeclaration(t.value):"RestElement"===t.type||"RestProperty"===t.type?this.checkDeclaration(t.argument):"Identifier"===t.type&&this.checkDuplicateExports(t,t.name)},pp$1.checkDuplicateExports=function(t,e){this.state.exportedIdentifiers.indexOf(e)>-1&&this.raiseDuplicateExportError(t,e),this.state.exportedIdentifiers.push(e)},pp$1.raiseDuplicateExportError=function(t,e){this.raise(t.start,"default"===e?"Only one default export allowed per module.":"`"+e+"` has already been exported. Exported identifiers must be unique.")},pp$1.parseExportSpecifiers=function(){var t=[],e=!0,s=void 0;for(this.expect(types.braceL);!this.eat(types.braceR);){if(e)e=!1;else if(this.expect(types.comma),this.eat(types.braceR))break;var i=this.match(types._default);i&&!s&&(s=!0);var r=this.startNode();r.local=this.parseIdentifier(i),r.exported=this.eatContextual("as")?this.parseIdentifier(!0):r.local.__clone(),t.push(this.finishNode(r,"ExportSpecifier"))}return s&&!this.isContextual("from")&&this.unexpected(),t},pp$1.parseImport=function(t){return this.next(),this.match(types.string)?(t.specifiers=[],t.source=this.parseExprAtom()):(t.specifiers=[],this.parseImportSpecifiers(t),this.expectContextual("from"),t.source=this.match(types.string)?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(t,"ImportDeclaration")},pp$1.parseImportSpecifiers=function(t){var e=!0;if(this.match(types.name)){var s=this.state.start,i=this.state.startLoc;if(t.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(),s,i)),!this.eat(types.comma))return}if(this.match(types.star)){var r=this.startNode();return this.next(),this.expectContextual("as"),r.local=this.parseIdentifier(),this.checkLVal(r.local,!0,void 0,"import namespace specifier"),void t.specifiers.push(this.finishNode(r,"ImportNamespaceSpecifier"))}for(this.expect(types.braceL);!this.eat(types.braceR);){if(e)e=!1;else if(this.expect(types.comma),this.eat(types.braceR))break;this.parseImportSpecifier(t)}},pp$1.parseImportSpecifier=function(t){var e=this.startNode();e.imported=this.parseIdentifier(!0),e.local=this.eatContextual("as")?this.parseIdentifier():e.imported.__clone(),this.checkLVal(e.local,!0,void 0,"import specifier"),t.specifiers.push(this.finishNode(e,"ImportSpecifier"))},pp$1.parseImportSpecifierDefault=function(t,e,s){var i=this.startNodeAt(e,s);return i.local=t,this.checkLVal(i.local,!0,void 0,"default import specifier"),this.finishNode(i,"ImportDefaultSpecifier")};var pp$2=Parser.prototype;pp$2.toAssignable=function(t,e,s){if(t)switch(t.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":break;case"ObjectExpression":t.type="ObjectPattern";for(var i=t.properties,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}var o=n;"ObjectMethod"===o.type?"get"===o.kind||"set"===o.kind?this.raise(o.key.start,"Object pattern can't contain getter or setter"):this.raise(o.key.start,"Object pattern can't contain methods"):this.toAssignable(o,e,"object destructuring pattern")}break;case"ObjectProperty":this.toAssignable(t.value,e,s);break;case"SpreadProperty":t.type="RestProperty";break;case"ArrayExpression":t.type="ArrayPattern",this.toAssignableList(t.elements,e,s);break;case"AssignmentExpression":"="===t.operator?(t.type="AssignmentPattern",delete t.operator):this.raise(t.left.end,"Only '=' operator can be used for specifying default value.");break;case"MemberExpression":if(!e)break;default:var p="Invalid left-hand side"+(s?" in "+s:"expression");this.raise(t.start,p)}return t},pp$2.toAssignableList=function(t,e,s){var i=t.length;if(i){var r=t[i-1];if(r&&"RestElement"===r.type)--i;else if(r&&"SpreadElement"===r.type){r.type="RestElement";var a=r.argument;this.toAssignable(a,e,s),"Identifier"!==a.type&&"MemberExpression"!==a.type&&"ArrayPattern"!==a.type&&this.unexpected(a.start),--i}}for(var n=0;n<i;n++){var o=t[n];o&&this.toAssignable(o,e,s)}return t},pp$2.toReferencedList=function(t){return t},pp$2.parseSpread=function(t){var e=this.startNode();return this.next(),e.argument=this.parseMaybeAssign(!1,t),this.finishNode(e,"SpreadElement")},pp$2.parseRest=function(){var t=this.startNode();return this.next(),t.argument=this.parseBindingIdentifier(),this.finishNode(t,"RestElement")},pp$2.shouldAllowYieldIdentifier=function(){return this.match(types._yield)&&!this.state.strict&&!this.state.inGenerator},pp$2.parseBindingIdentifier=function(){return this.parseIdentifier(this.shouldAllowYieldIdentifier())},pp$2.parseBindingAtom=function(){switch(this.state.type){case types._yield:(this.state.strict||this.state.inGenerator)&&this.unexpected();case types.name:return this.parseIdentifier(!0);case types.bracketL:var t=this.startNode();return this.next(),t.elements=this.parseBindingList(types.bracketR,!0),this.finishNode(t,"ArrayPattern");case types.braceL:return this.parseObj(!0);default:this.unexpected()}},pp$2.parseBindingList=function(t,e){for(var s=[],i=!0;!this.eat(t);)if(i?i=!1:this.expect(types.comma),e&&this.match(types.comma))s.push(null);else{if(this.eat(t))break;if(this.match(types.ellipsis)){s.push(this.parseAssignableListItemTypes(this.parseRest())),this.expect(t);break}for(var r=[];this.match(types.at);)r.push(this.parseDecorator());var a=this.parseMaybeDefault();r.length&&(a.decorators=r),this.parseAssignableListItemTypes(a),s.push(this.parseMaybeDefault(a.start,a.loc.start,a))}return s},pp$2.parseAssignableListItemTypes=function(t){return t},pp$2.parseMaybeDefault=function(t,e,s){if(e=e||this.state.startLoc,t=t||this.state.start,s=s||this.parseBindingAtom(),!this.eat(types.eq))return s;var i=this.startNodeAt(t,e);return i.left=s,i.right=this.parseMaybeAssign(),this.finishNode(i,"AssignmentPattern")},pp$2.checkLVal=function(t,e,s,i){switch(t.type){case"Identifier":if(this.checkReservedWord(t.name,t.start,!1,!0),s){var r="_"+t.name;s[r]?this.raise(t.start,"Argument name clash in strict mode"):s[r]=!0}break;case"MemberExpression":e&&this.raise(t.start,(e?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var a=t.properties,n=Array.isArray(a),o=0,a=n?a:a[Symbol.iterator]();;){var p;if(n){if(o>=a.length)break;p=a[o++]}else{if(o=a.next(),o.done)break;p=o.value}var h=p;"ObjectProperty"===h.type&&(h=h.value),this.checkLVal(h,e,s,"object destructuring pattern")}break;case"ArrayPattern":for(var c=t.elements,l=Array.isArray(c),u=0,c=l?c:c[Symbol.iterator]();;){var d;if(l){if(u>=c.length)break;d=c[u++]}else{if(u=c.next(),u.done)break;d=u.value}var f=d;f&&this.checkLVal(f,e,s,"array destructuring pattern")}break;case"AssignmentPattern":this.checkLVal(t.left,e,s,"assignment pattern");break;case"RestProperty":this.checkLVal(t.argument,e,s,"rest property");break;case"RestElement":this.checkLVal(t.argument,e,s,"rest element");break;default:var y=(e?"Binding invalid":"Invalid")+" left-hand side"+(i?" in "+i:"expression");this.raise(t.start,y)}};var pp$3=Parser.prototype;pp$3.checkPropClash=function(t,e){if(!t.computed){var s=t.key,i=void 0;switch(s.type){case"Identifier":i=s.name;break;case"StringLiteral":case"NumericLiteral":i=String(s.value);break;default:return}"__proto__"!==i||t.kind||(e.proto&&this.raise(s.start,"Redefinition of __proto__ property"),e.proto=!0)}},pp$3.parseExpression=function(t,e){var s=this.state.start,i=this.state.startLoc,r=this.parseMaybeAssign(t,e);if(this.match(types.comma)){var a=this.startNodeAt(s,i);for(a.expressions=[r];this.eat(types.comma);)a.expressions.push(this.parseMaybeAssign(t,e));return this.toReferencedList(a.expressions),this.finishNode(a,"SequenceExpression")}return r},pp$3.parseMaybeAssign=function(t,e,s,i){var r=this.state.start,a=this.state.startLoc;if(this.match(types._yield)&&this.state.inGenerator){var n=this.parseYield();return s&&(n=s.call(this,n,r,a)),n}var o=void 0;e?o=!1:(e={start:0},o=!0),(this.match(types.parenL)||this.match(types.name))&&(this.state.potentialArrowAt=this.state.start);var p=this.parseMaybeConditional(t,e,i);if(s&&(p=s.call(this,p,r,a)),this.state.type.isAssign){var h=this.startNodeAt(r,a);if(h.operator=this.state.value,h.left=this.match(types.eq)?this.toAssignable(p,void 0,"assignment expression"):p,e.start=0,this.checkLVal(p,void 0,void 0,"assignment expression"),p.extra&&p.extra.parenthesized){var c=void 0;"ObjectPattern"===p.type?c="`({a}) = 0` use `({a} = 0)`":"ArrayPattern"===p.type&&(c="`([a]) = 0` use `([a] = 0)`"),c&&this.raise(p.start,"You're trying to assign to a parenthesized expression, eg. instead of "+c)}return this.next(),h.right=this.parseMaybeAssign(t),this.finishNode(h,"AssignmentExpression")}return o&&e.start&&this.unexpected(e.start),p},pp$3.parseMaybeConditional=function(t,e,s){var i=this.state.start,r=this.state.startLoc,a=this.parseExprOps(t,e);return e&&e.start?a:this.parseConditional(a,t,i,r,s)},pp$3.parseConditional=function(t,e,s,i){if(this.eat(types.question)){var r=this.startNodeAt(s,i);return r.test=t,r.consequent=this.parseMaybeAssign(),this.expect(types.colon),r.alternate=this.parseMaybeAssign(e),this.finishNode(r,"ConditionalExpression")}return t},pp$3.parseExprOps=function(t,e){var s=this.state.start,i=this.state.startLoc,r=this.parseMaybeUnary(e);return e&&e.start?r:this.parseExprOp(r,s,i,-1,t)},pp$3.parseExprOp=function(t,e,s,i,r){var a=this.state.type.binop;if(!(null==a||r&&this.match(types._in))&&a>i){var n=this.startNodeAt(e,s);n.left=t,n.operator=this.state.value,"**"!==n.operator||"UnaryExpression"!==t.type||!t.extra||t.extra.parenthesizedArgument||t.extra.parenthesized||this.raise(t.argument.start,"Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");var o=this.state.type;this.next();var p=this.state.start,h=this.state.startLoc;return n.right=this.parseExprOp(this.parseMaybeUnary(),p,h,o.rightAssociative?a-1:a,r),this.finishNode(n,o===types.logicalOR||o===types.logicalAND?"LogicalExpression":"BinaryExpression"),this.parseExprOp(n,e,s,i,r)}return t},pp$3.parseMaybeUnary=function(t){if(this.state.type.prefix){var e=this.startNode(),s=this.match(types.incDec);e.operator=this.state.value,e.prefix=!0,this.next();var i=this.state.type;return e.argument=this.parseMaybeUnary(),this.addExtra(e,"parenthesizedArgument",!(i!==types.parenL||e.argument.extra&&e.argument.extra.parenthesized)),t&&t.start&&this.unexpected(t.start),s?this.checkLVal(e.argument,void 0,void 0,"prefix operation"):this.state.strict&&"delete"===e.operator&&"Identifier"===e.argument.type&&this.raise(e.start,"Deleting local variable in strict mode"),this.finishNode(e,s?"UpdateExpression":"UnaryExpression")}var r=this.state.start,a=this.state.startLoc,n=this.parseExprSubscripts(t);if(t&&t.start)return n;for(;this.state.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(r,a);o.operator=this.state.value,o.prefix=!1,o.argument=n,this.checkLVal(n,void 0,void 0,"postfix operation"),this.next(),n=this.finishNode(o,"UpdateExpression")}return n},pp$3.parseExprSubscripts=function(t){var e=this.state.start,s=this.state.startLoc,i=this.state.potentialArrowAt,r=this.parseExprAtom(t);return"ArrowFunctionExpression"===r.type&&r.start===i?r:t&&t.start?r:this.parseSubscripts(r,e,s)},pp$3.parseSubscripts=function(t,e,s,i){for(;;){if(!i&&this.eat(types.doubleColon)){var r=this.startNodeAt(e,s);return r.object=t,r.callee=this.parseNoCallExpr(),this.parseSubscripts(this.finishNode(r,"BindExpression"),e,s,i)}if(this.eat(types.dot)){var a=this.startNodeAt(e,s);a.object=t,a.property=this.parseIdentifier(!0),a.computed=!1,t=this.finishNode(a,"MemberExpression")}else if(this.eat(types.bracketL)){var n=this.startNodeAt(e,s);n.object=t,n.property=this.parseExpression(),n.computed=!0,this.expect(types.bracketR),t=this.finishNode(n,"MemberExpression")}else if(!i&&this.match(types.parenL)){var o=this.state.potentialArrowAt===t.start&&"Identifier"===t.type&&"async"===t.name&&!this.canInsertSemicolon();this.next();var p=this.startNodeAt(e,s);if(p.callee=t,p.arguments=this.parseCallExpressionArguments(types.parenR,o),"Import"===p.callee.type&&1!==p.arguments.length&&this.raise(p.start,"import() requires exactly one argument"),t=this.finishNode(p,"CallExpression"),o&&this.shouldParseAsyncArrow())return this.parseAsyncArrowFromCallExpression(this.startNodeAt(e,s),p);this.toReferencedList(p.arguments)}else{if(!this.match(types.backQuote))return t;var h=this.startNodeAt(e,s);h.tag=t,h.quasi=this.parseTemplate(),t=this.finishNode(h,"TaggedTemplateExpression")}}},pp$3.parseCallExpressionArguments=function(t,e){for(var s=[],i=void 0,r=!0;!this.eat(t);){if(r)r=!1;else if(this.expect(types.comma),this.eat(t))break;this.match(types.parenL)&&!i&&(i=this.state.start),s.push(this.parseExprListItem(void 0,e?{start:0}:void 0))}return e&&i&&this.shouldParseAsyncArrow()&&this.unexpected(),s},pp$3.shouldParseAsyncArrow=function(){return this.match(types.arrow)},pp$3.parseAsyncArrowFromCallExpression=function(t,e){return this.expect(types.arrow),this.parseArrowExpression(t,e.arguments,!0)},pp$3.parseNoCallExpr=function(){var t=this.state.start,e=this.state.startLoc;return this.parseSubscripts(this.parseExprAtom(),t,e,!0)},pp$3.parseExprAtom=function(t){var e=this.state.potentialArrowAt===this.state.start,s=void 0;switch(this.state.type){case types._super:return this.state.inMethod||this.options.allowSuperOutsideMethod||this.raise(this.state.start,"'super' outside of function or class"),
	s=this.startNode(),this.next(),this.match(types.parenL)||this.match(types.bracketL)||this.match(types.dot)||this.unexpected(),this.match(types.parenL)&&"constructor"!==this.state.inMethod&&!this.options.allowSuperOutsideMethod&&this.raise(s.start,"super() outside of class constructor"),this.finishNode(s,"Super");case types._import:return this.hasPlugin("dynamicImport")||this.unexpected(),s=this.startNode(),this.next(),this.match(types.parenL)||this.unexpected(null,types.parenL),this.finishNode(s,"Import");case types._this:return s=this.startNode(),this.next(),this.finishNode(s,"ThisExpression");case types._yield:this.state.inGenerator&&this.unexpected();case types.name:s=this.startNode();var i="await"===this.state.value&&this.state.inAsync,r=this.shouldAllowYieldIdentifier(),a=this.parseIdentifier(i||r);if("await"===a.name){if(this.state.inAsync||this.inModule)return this.parseAwait(s)}else{if("async"===a.name&&this.match(types._function)&&!this.canInsertSemicolon())return this.next(),this.parseFunction(s,!1,!1,!0);if(e&&"async"===a.name&&this.match(types.name)){var n=[this.parseIdentifier()];return this.expect(types.arrow),this.parseArrowExpression(s,n,!0)}}return e&&!this.canInsertSemicolon()&&this.eat(types.arrow)?this.parseArrowExpression(s,[a]):a;case types._do:if(this.hasPlugin("doExpressions")){var o=this.startNode();this.next();var p=this.state.inFunction,h=this.state.labels;return this.state.labels=[],this.state.inFunction=!1,o.body=this.parseBlock(!1,!0),this.state.inFunction=p,this.state.labels=h,this.finishNode(o,"DoExpression")}case types.regexp:var c=this.state.value;return s=this.parseLiteral(c.value,"RegExpLiteral"),s.pattern=c.pattern,s.flags=c.flags,s;case types.num:return this.parseLiteral(this.state.value,"NumericLiteral");case types.string:return this.parseLiteral(this.state.value,"StringLiteral");case types._null:return s=this.startNode(),this.next(),this.finishNode(s,"NullLiteral");case types._true:case types._false:return s=this.startNode(),s.value=this.match(types._true),this.next(),this.finishNode(s,"BooleanLiteral");case types.parenL:return this.parseParenAndDistinguishExpression(null,null,e);case types.bracketL:return s=this.startNode(),this.next(),s.elements=this.parseExprList(types.bracketR,!0,t),this.toReferencedList(s.elements),this.finishNode(s,"ArrayExpression");case types.braceL:return this.parseObj(!1,t);case types._function:return this.parseFunctionExpression();case types.at:this.parseDecorators();case types._class:return s=this.startNode(),this.takeDecorators(s),this.parseClass(s,!1);case types._new:return this.parseNew();case types.backQuote:return this.parseTemplate();case types.doubleColon:s=this.startNode(),this.next(),s.object=null;var l=s.callee=this.parseNoCallExpr();if("MemberExpression"===l.type)return this.finishNode(s,"BindExpression");this.raise(l.start,"Binding should be performed on object property.");default:this.unexpected()}},pp$3.parseFunctionExpression=function(){var t=this.startNode(),e=this.parseIdentifier(!0);return this.state.inGenerator&&this.eat(types.dot)&&this.hasPlugin("functionSent")?this.parseMetaProperty(t,e,"sent"):this.parseFunction(t,!1)},pp$3.parseMetaProperty=function(t,e,s){return t.meta=e,t.property=this.parseIdentifier(!0),t.property.name!==s&&this.raise(t.property.start,"The only valid meta property for new is "+e.name+"."+s),this.finishNode(t,"MetaProperty")},pp$3.parseLiteral=function(t,e){var s=this.startNode();return this.addExtra(s,"rawValue",t),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),s.value=t,this.next(),this.finishNode(s,e)},pp$3.parseParenExpression=function(){this.expect(types.parenL);var t=this.parseExpression();return this.expect(types.parenR),t},pp$3.parseParenAndDistinguishExpression=function(t,e,s){t=t||this.state.start,e=e||this.state.startLoc;var i=void 0;this.expect(types.parenL);for(var r=this.state.start,a=this.state.startLoc,n=[],o={start:0},p={start:0},h=!0,c=void 0,l=void 0;!this.match(types.parenR);){if(h)h=!1;else if(this.expect(types.comma,p.start||null),this.match(types.parenR)){l=this.state.start;break}if(this.match(types.ellipsis)){var u=this.state.start,d=this.state.startLoc;c=this.state.start,n.push(this.parseParenItem(this.parseRest(),d,u));break}n.push(this.parseMaybeAssign(!1,o,this.parseParenItem,p))}var f=this.state.start,y=this.state.startLoc;this.expect(types.parenR);var m=this.startNodeAt(t,e);if(s&&this.shouldParseArrow()&&(m=this.parseArrow(m))){for(var x=n,v=Array.isArray(x),b=0,x=v?x:x[Symbol.iterator]();;){var T;if(v){if(b>=x.length)break;T=x[b++]}else{if(b=x.next(),b.done)break;T=b.value}var w=T;w.extra&&w.extra.parenthesized&&this.unexpected(w.extra.parenStart)}return this.parseArrowExpression(m,n)}return n.length||this.unexpected(this.state.lastTokStart),l&&this.unexpected(l),c&&this.unexpected(c),o.start&&this.unexpected(o.start),p.start&&this.unexpected(p.start),n.length>1?(i=this.startNodeAt(r,a),i.expressions=n,this.toReferencedList(i.expressions),this.finishNodeAt(i,"SequenceExpression",f,y)):i=n[0],this.addExtra(i,"parenthesized",!0),this.addExtra(i,"parenStart",t),i},pp$3.shouldParseArrow=function(){return!this.canInsertSemicolon()},pp$3.parseArrow=function(t){if(this.eat(types.arrow))return t},pp$3.parseParenItem=function(t){return t},pp$3.parseNew=function(){var t=this.startNode(),e=this.parseIdentifier(!0);return this.eat(types.dot)?this.parseMetaProperty(t,e,"target"):(t.callee=this.parseNoCallExpr(),this.eat(types.parenL)?(t.arguments=this.parseExprList(types.parenR),this.toReferencedList(t.arguments)):t.arguments=[],this.finishNode(t,"NewExpression"))},pp$3.parseTemplateElement=function(){var t=this.startNode();return t.value={raw:this.input.slice(this.state.start,this.state.end).replace(/\r\n?/g,"\n"),cooked:this.state.value},this.next(),t.tail=this.match(types.backQuote),this.finishNode(t,"TemplateElement")},pp$3.parseTemplate=function(){var t=this.startNode();this.next(),t.expressions=[];var e=this.parseTemplateElement();for(t.quasis=[e];!e.tail;)this.expect(types.dollarBraceL),t.expressions.push(this.parseExpression()),this.expect(types.braceR),t.quasis.push(e=this.parseTemplateElement());return this.next(),this.finishNode(t,"TemplateLiteral")},pp$3.parseObj=function(t,e){var s=[],i=Object.create(null),r=!0,a=this.startNode();a.properties=[],this.next();for(var n=null;!this.eat(types.braceR);){if(r)r=!1;else if(this.expect(types.comma),this.eat(types.braceR))break;for(;this.match(types.at);)s.push(this.parseDecorator());var o=this.startNode(),p=!1,h=!1,c=void 0,l=void 0;if(s.length&&(o.decorators=s,s=[]),this.hasPlugin("objectRestSpread")&&this.match(types.ellipsis)){if(o=this.parseSpread(),o.type=t?"RestProperty":"SpreadProperty",a.properties.push(o),!t)continue;var u=this.state.start;if(null===n){if(this.eat(types.braceR))break;if(this.match(types.comma)&&this.lookahead().type===types.braceR)continue;n=u;continue}this.unexpected(n,"Cannot have multiple rest elements when destructuring")}if(o.method=!1,o.shorthand=!1,(t||e)&&(c=this.state.start,l=this.state.startLoc),t||(p=this.eat(types.star)),!t&&this.isContextual("async")){p&&this.unexpected();var d=this.parseIdentifier();this.match(types.colon)||this.match(types.parenL)||this.match(types.braceR)||this.match(types.eq)||this.match(types.comma)?o.key=d:(h=!0,this.hasPlugin("asyncGenerators")&&(p=this.eat(types.star)),this.parsePropertyName(o))}else this.parsePropertyName(o);this.parseObjPropValue(o,c,l,p,h,t,e),this.checkPropClash(o,i),o.shorthand&&this.addExtra(o,"shorthand",!0),a.properties.push(o)}return null!==n&&this.unexpected(n,"The rest element has to be the last element when destructuring"),s.length&&this.raise(this.state.start,"You have trailing decorators with no property"),this.finishNode(a,t?"ObjectPattern":"ObjectExpression")},pp$3.parseObjPropValue=function(t,e,s,i,r,a,n){if(r||i||this.match(types.parenL))return a&&this.unexpected(),t.kind="method",t.method=!0,this.parseMethod(t,i,r),this.finishNode(t,"ObjectMethod");if(this.eat(types.colon))return t.value=a?this.parseMaybeDefault(this.state.start,this.state.startLoc):this.parseMaybeAssign(!1,n),this.finishNode(t,"ObjectProperty");if(!(a||t.computed||"Identifier"!==t.key.type||"get"!==t.key.name&&"set"!==t.key.name||this.match(types.comma)||this.match(types.braceR))){(i||r)&&this.unexpected(),t.kind=t.key.name,this.parsePropertyName(t),this.parseMethod(t,!1);var o="get"===t.kind?0:1;if(t.params.length!==o){var p=t.start;"get"===t.kind?this.raise(p,"getter should have no params"):this.raise(p,"setter should have exactly one param")}return this.finishNode(t,"ObjectMethod")}return t.computed||"Identifier"!==t.key.type?void this.unexpected():(a?(this.checkReservedWord(t.key.name,t.key.start,!0,!0),t.value=this.parseMaybeDefault(e,s,t.key.__clone())):this.match(types.eq)&&n?(n.start||(n.start=this.state.start),t.value=this.parseMaybeDefault(e,s,t.key.__clone())):t.value=t.key.__clone(),t.shorthand=!0,this.finishNode(t,"ObjectProperty"))},pp$3.parsePropertyName=function(t){if(this.eat(types.bracketL))t.computed=!0,t.key=this.parseMaybeAssign(),this.expect(types.bracketR);else{t.computed=!1;var e=this.state.inPropertyName;this.state.inPropertyName=!0,t.key=this.match(types.num)||this.match(types.string)?this.parseExprAtom():this.parseIdentifier(!0),this.state.inPropertyName=e}return t.key},pp$3.initFunction=function(t,e){t.id=null,t.generator=!1,t.expression=!1,t.async=!!e},pp$3.parseMethod=function(t,e,s){var i=this.state.inMethod;return this.state.inMethod=t.kind||!0,this.initFunction(t,s),this.expect(types.parenL),t.params=this.parseBindingList(types.parenR),t.generator=e,this.parseFunctionBody(t),this.state.inMethod=i,t},pp$3.parseArrowExpression=function(t,e,s){return this.initFunction(t,s),t.params=this.toAssignableList(e,!0,"arrow function parameters"),this.parseFunctionBody(t,!0),this.finishNode(t,"ArrowFunctionExpression")},pp$3.parseFunctionBody=function(t,e){var s=e&&!this.match(types.braceL),i=this.state.inAsync;if(this.state.inAsync=t.async,s)t.body=this.parseMaybeAssign(),t.expression=!0;else{var r=this.state.inFunction,a=this.state.inGenerator,n=this.state.labels;this.state.inFunction=!0,this.state.inGenerator=t.generator,this.state.labels=[],t.body=this.parseBlock(!0),t.expression=!1,this.state.inFunction=r,this.state.inGenerator=a,this.state.labels=n}this.state.inAsync=i;var o=this.state.strict,p=!1;if(e&&(o=!0),!s&&t.body.directives.length)for(var h=t.body.directives,c=Array.isArray(h),l=0,h=c?h:h[Symbol.iterator]();;){var u;if(c){if(l>=h.length)break;u=h[l++]}else{if(l=h.next(),l.done)break;u=l.value}var d=u;if("use strict"===d.value.value){p=!0,o=!0;break}}if(p&&t.id&&"Identifier"===t.id.type&&"yield"===t.id.name&&this.raise(t.id.start,"Binding yield in strict mode"),o){var f=Object.create(null),y=this.state.strict;p&&(this.state.strict=!0),t.id&&this.checkLVal(t.id,!0,void 0,"function name");for(var m=t.params,x=Array.isArray(m),v=0,m=x?m:m[Symbol.iterator]();;){var b;if(x){if(v>=m.length)break;b=m[v++]}else{if(v=m.next(),v.done)break;b=v.value}var T=b;p&&"Identifier"!==T.type&&this.raise(T.start,"Non-simple parameter in strict mode"),this.checkLVal(T,!0,f,"function parameter list")}this.state.strict=y}},pp$3.parseExprList=function(t,e,s){for(var i=[],r=!0;!this.eat(t);){if(r)r=!1;else if(this.expect(types.comma),this.eat(t))break;i.push(this.parseExprListItem(e,s))}return i},pp$3.parseExprListItem=function(t,e){var s=void 0;return s=t&&this.match(types.comma)?null:this.match(types.ellipsis)?this.parseSpread(e):this.parseMaybeAssign(!1,e,this.parseParenItem)},pp$3.parseIdentifier=function(t){var e=this.startNode();return this.match(types.name)?(t||this.checkReservedWord(this.state.value,this.state.start,!1,!1),e.name=this.state.value):t&&this.state.type.keyword?e.name=this.state.type.keyword:this.unexpected(),!t&&"await"===e.name&&this.state.inAsync&&this.raise(e.start,"invalid use of await inside of an async function"),e.loc.identifierName=e.name,this.next(),this.finishNode(e,"Identifier")},pp$3.checkReservedWord=function(t,e,s,i){(this.isReservedWord(t)||s&&this.isKeyword(t))&&this.raise(e,t+" is a reserved word"),this.state.strict&&(reservedWords.strict(t)||i&&reservedWords.strictBind(t))&&this.raise(e,t+" is a reserved word in strict mode")},pp$3.parseAwait=function(t){return this.state.inAsync||this.unexpected(),this.match(types.star)&&this.raise(t.start,"await* has been removed from the async functions proposal. Use Promise.all() instead."),t.argument=this.parseMaybeUnary(),this.finishNode(t,"AwaitExpression")},pp$3.parseYield=function(){var t=this.startNode();return this.next(),this.match(types.semi)||this.canInsertSemicolon()||!this.match(types.star)&&!this.state.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(types.star),t.argument=this.parseMaybeAssign()),this.finishNode(t,"YieldExpression")};var pp$4=Parser.prototype,commentKeys=["leadingComments","trailingComments","innerComments"],Node=function(){function t(e,s,i){classCallCheck(this,t),this.type="",this.start=e,this.end=0,this.loc=new SourceLocation(s),i&&(this.loc.filename=i)}return t.prototype.__clone=function(){var e=new t;for(var s in this)commentKeys.indexOf(s)<0&&(e[s]=this[s]);return e},t}();pp$4.startNode=function(){return new Node(this.state.start,this.state.startLoc,this.filename)},pp$4.startNodeAt=function(t,e){return new Node(t,e,this.filename)},pp$4.finishNode=function(t,e){return finishNodeAt.call(this,t,e,this.state.lastTokEnd,this.state.lastTokEndLoc)},pp$4.finishNodeAt=function(t,e,s,i){return finishNodeAt.call(this,t,e,s,i)};var pp$5=Parser.prototype;pp$5.raise=function(t,e){var s=getLineInfo(this.input,t);e+=" ("+s.line+":"+s.column+")";var i=new SyntaxError(e);throw i.pos=t,i.loc=s,i};var pp$6=Parser.prototype;pp$6.addComment=function(t){this.filename&&(t.loc.filename=this.filename),this.state.trailingComments.push(t),this.state.leadingComments.push(t)},pp$6.processComment=function(t){if(!("Program"===t.type&&t.body.length>0)){var e=this.state.commentStack,s=void 0,i=void 0,r=void 0,a=void 0;if(this.state.trailingComments.length>0)this.state.trailingComments[0].start>=t.end?(i=this.state.trailingComments,this.state.trailingComments=[]):this.state.trailingComments.length=0;else{var n=last(e);e.length>0&&n.trailingComments&&n.trailingComments[0].start>=t.end&&(i=n.trailingComments,n.trailingComments=null)}for(;e.length>0&&last(e).start>=t.start;)s=e.pop();if(s){if(s.leadingComments)if(s!==t&&last(s.leadingComments).end<=t.start)t.leadingComments=s.leadingComments,s.leadingComments=null;else for(r=s.leadingComments.length-2;r>=0;--r)if(s.leadingComments[r].end<=t.start){t.leadingComments=s.leadingComments.splice(0,r+1);break}}else if(this.state.leadingComments.length>0)if(last(this.state.leadingComments).end<=t.start){if(this.state.commentPreviousNode)for(a=0;a<this.state.leadingComments.length;a++)this.state.leadingComments[a].end<this.state.commentPreviousNode.end&&(this.state.leadingComments.splice(a,1),a--);this.state.leadingComments.length>0&&(t.leadingComments=this.state.leadingComments,this.state.leadingComments=[])}else{for(r=0;r<this.state.leadingComments.length&&!(this.state.leadingComments[r].end>t.start);r++);t.leadingComments=this.state.leadingComments.slice(0,r),0===t.leadingComments.length&&(t.leadingComments=null),i=this.state.leadingComments.slice(r),0===i.length&&(i=null)}this.state.commentPreviousNode=t,i&&(i.length&&i[0].start>=t.start&&last(i).end<=t.end?t.innerComments=i:t.trailingComments=i),e.push(t)}};var pp$7=Parser.prototype;pp$7.flowParseTypeInitialiser=function(t){var e=this.state.inType;this.state.inType=!0,this.expect(t||types.colon);var s=this.flowParseType();return this.state.inType=e,s},pp$7.flowParseDeclareClass=function(t){return this.next(),this.flowParseInterfaceish(t,!0),this.finishNode(t,"DeclareClass")},pp$7.flowParseDeclareFunction=function(t){this.next();var e=t.id=this.parseIdentifier(),s=this.startNode(),i=this.startNode();this.isRelational("<")?s.typeParameters=this.flowParseTypeParameterDeclaration():s.typeParameters=null,this.expect(types.parenL);var r=this.flowParseFunctionTypeParams();return s.params=r.params,s.rest=r.rest,this.expect(types.parenR),s.returnType=this.flowParseTypeInitialiser(),i.typeAnnotation=this.finishNode(s,"FunctionTypeAnnotation"),e.typeAnnotation=this.finishNode(i,"TypeAnnotation"),this.finishNode(e,e.type),this.semicolon(),this.finishNode(t,"DeclareFunction")},pp$7.flowParseDeclare=function(t){return this.match(types._class)?this.flowParseDeclareClass(t):this.match(types._function)?this.flowParseDeclareFunction(t):this.match(types._var)?this.flowParseDeclareVariable(t):this.isContextual("module")?this.lookahead().type===types.dot?this.flowParseDeclareModuleExports(t):this.flowParseDeclareModule(t):this.isContextual("type")?this.flowParseDeclareTypeAlias(t):this.isContextual("interface")?this.flowParseDeclareInterface(t):void this.unexpected()},pp$7.flowParseDeclareVariable=function(t){return this.next(),t.id=this.flowParseTypeAnnotatableIdentifier(),this.semicolon(),this.finishNode(t,"DeclareVariable")},pp$7.flowParseDeclareModule=function(t){this.next(),this.match(types.string)?t.id=this.parseExprAtom():t.id=this.parseIdentifier();var e=t.body=this.startNode(),s=e.body=[];for(this.expect(types.braceL);!this.match(types.braceR);){var i=this.startNode();this.expectContextual("declare","Unexpected token. Only declares are allowed inside declare module"),s.push(this.flowParseDeclare(i))}return this.expect(types.braceR),this.finishNode(e,"BlockStatement"),this.finishNode(t,"DeclareModule")},pp$7.flowParseDeclareModuleExports=function(t){return this.expectContextual("module"),this.expect(types.dot),this.expectContextual("exports"),t.typeAnnotation=this.flowParseTypeAnnotation(),this.semicolon(),this.finishNode(t,"DeclareModuleExports")},pp$7.flowParseDeclareTypeAlias=function(t){return this.next(),this.flowParseTypeAlias(t),this.finishNode(t,"DeclareTypeAlias")},pp$7.flowParseDeclareInterface=function(t){return this.next(),this.flowParseInterfaceish(t),this.finishNode(t,"DeclareInterface")},pp$7.flowParseInterfaceish=function(t,e){if(t.id=this.parseIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.extends=[],t.mixins=[],this.eat(types._extends))do t.extends.push(this.flowParseInterfaceExtends());while(this.eat(types.comma));if(this.isContextual("mixins")){this.next();do t.mixins.push(this.flowParseInterfaceExtends());while(this.eat(types.comma))}t.body=this.flowParseObjectType(e)},pp$7.flowParseInterfaceExtends=function(){var t=this.startNode();return t.id=this.flowParseQualifiedTypeIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterInstantiation():t.typeParameters=null,this.finishNode(t,"InterfaceExtends")},pp$7.flowParseInterface=function(t){return this.flowParseInterfaceish(t,!1),this.finishNode(t,"InterfaceDeclaration")},pp$7.flowParseTypeAlias=function(t){return t.id=this.parseIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.right=this.flowParseTypeInitialiser(types.eq),this.semicolon(),this.finishNode(t,"TypeAlias")},pp$7.flowParseTypeParameter=function(){var t=this.startNode(),e=this.flowParseVariance(),s=this.flowParseTypeAnnotatableIdentifier();return t.name=s.name,t.variance=e,t.bound=s.typeAnnotation,this.match(types.eq)&&(this.eat(types.eq),t.default=this.flowParseType()),this.finishNode(t,"TypeParameter")},pp$7.flowParseTypeParameterDeclaration=function(){var t=this.state.inType,e=this.startNode();e.params=[],this.state.inType=!0,this.isRelational("<")||this.match(types.jsxTagStart)?this.next():this.unexpected();do e.params.push(this.flowParseTypeParameter()),this.isRelational(">")||this.expect(types.comma);while(!this.isRelational(">"));return this.expectRelational(">"),this.state.inType=t,this.finishNode(e,"TypeParameterDeclaration")},pp$7.flowParseTypeParameterInstantiation=function(){var t=this.startNode(),e=this.state.inType;for(t.params=[],this.state.inType=!0,this.expectRelational("<");!this.isRelational(">");)t.params.push(this.flowParseType()),this.isRelational(">")||this.expect(types.comma);return this.expectRelational(">"),this.state.inType=e,this.finishNode(t,"TypeParameterInstantiation")},pp$7.flowParseObjectPropertyKey=function(){return this.match(types.num)||this.match(types.string)?this.parseExprAtom():this.parseIdentifier(!0)},pp$7.flowParseObjectTypeIndexer=function(t,e,s){return t.static=e,this.expect(types.bracketL),this.lookahead().type===types.colon?(t.id=this.flowParseObjectPropertyKey(),t.key=this.flowParseTypeInitialiser()):(t.id=null,t.key=this.flowParseType()),this.expect(types.bracketR),t.value=this.flowParseTypeInitialiser(),t.variance=s,this.flowObjectTypeSemicolon(),this.finishNode(t,"ObjectTypeIndexer")},pp$7.flowParseObjectTypeMethodish=function(t){for(t.params=[],t.rest=null,t.typeParameters=null,this.isRelational("<")&&(t.typeParameters=this.flowParseTypeParameterDeclaration()),this.expect(types.parenL);this.match(types.name);)t.params.push(this.flowParseFunctionTypeParam()),this.match(types.parenR)||this.expect(types.comma);return this.eat(types.ellipsis)&&(t.rest=this.flowParseFunctionTypeParam()),this.expect(types.parenR),t.returnType=this.flowParseTypeInitialiser(),this.finishNode(t,"FunctionTypeAnnotation")},pp$7.flowParseObjectTypeMethod=function(t,e,s,i){var r=this.startNodeAt(t,e);return r.value=this.flowParseObjectTypeMethodish(this.startNodeAt(t,e)),r.static=s,r.key=i,r.optional=!1,this.flowObjectTypeSemicolon(),this.finishNode(r,"ObjectTypeProperty")},pp$7.flowParseObjectTypeCallProperty=function(t,e){var s=this.startNode();return t.static=e,t.value=this.flowParseObjectTypeMethodish(s),this.flowObjectTypeSemicolon(),this.finishNode(t,"ObjectTypeCallProperty")},pp$7.flowParseObjectType=function(t,e){var s=this.state.inType;this.state.inType=!0;var i=this.startNode(),r=void 0,a=void 0,n=!1;i.callProperties=[],i.properties=[],i.indexers=[];var o=void 0,p=void 0;for(e&&this.match(types.braceBarL)?(this.expect(types.braceBarL),o=types.braceBarR,p=!0):(this.expect(types.braceL),o=types.braceR,p=!1),i.exact=p;!this.match(o);){var h=!1,c=this.state.start,l=this.state.startLoc;r=this.startNode(),t&&this.isContextual("static")&&this.lookahead().type!==types.colon&&(this.next(),n=!0);var u=this.state.start,d=this.flowParseVariance();this.match(types.bracketL)?i.indexers.push(this.flowParseObjectTypeIndexer(r,n,d)):this.match(types.parenL)||this.isRelational("<")?(d&&this.unexpected(u),i.callProperties.push(this.flowParseObjectTypeCallProperty(r,t))):(a=this.flowParseObjectPropertyKey(),this.isRelational("<")||this.match(types.parenL)?(d&&this.unexpected(u),i.properties.push(this.flowParseObjectTypeMethod(c,l,n,a))):(this.eat(types.question)&&(h=!0),r.key=a,r.value=this.flowParseTypeInitialiser(),r.optional=h,r.static=n,r.variance=d,this.flowObjectTypeSemicolon(),i.properties.push(this.finishNode(r,"ObjectTypeProperty")))),n=!1}this.expect(o);var f=this.finishNode(i,"ObjectTypeAnnotation");return this.state.inType=s,f},pp$7.flowObjectTypeSemicolon=function(){this.eat(types.semi)||this.eat(types.comma)||this.match(types.braceR)||this.match(types.braceBarR)||this.unexpected()},pp$7.flowParseQualifiedTypeIdentifier=function(t,e,s){t=t||this.state.start,e=e||this.state.startLoc;for(var i=s||this.parseIdentifier();this.eat(types.dot);){var r=this.startNodeAt(t,e);r.qualification=i,r.id=this.parseIdentifier(),i=this.finishNode(r,"QualifiedTypeIdentifier")}return i},pp$7.flowParseGenericType=function(t,e,s){var i=this.startNodeAt(t,e);return i.typeParameters=null,i.id=this.flowParseQualifiedTypeIdentifier(t,e,s),this.isRelational("<")&&(i.typeParameters=this.flowParseTypeParameterInstantiation()),this.finishNode(i,"GenericTypeAnnotation")},pp$7.flowParseTypeofType=function(){var t=this.startNode();return this.expect(types._typeof),t.argument=this.flowParsePrimaryType(),this.finishNode(t,"TypeofTypeAnnotation")},pp$7.flowParseTupleType=function(){var t=this.startNode();for(t.types=[],this.expect(types.bracketL);this.state.pos<this.input.length&&!this.match(types.bracketR)&&(t.types.push(this.flowParseType()),!this.match(types.bracketR));)this.expect(types.comma);return this.expect(types.bracketR),this.finishNode(t,"TupleTypeAnnotation")},pp$7.flowParseFunctionTypeParam=function(){var t=null,e=!1,s=null,i=this.startNode(),r=this.lookahead();return r.type===types.colon||r.type===types.question?(t=this.parseIdentifier(),this.eat(types.question)&&(e=!0),s=this.flowParseTypeInitialiser()):s=this.flowParseType(),i.name=t,i.optional=e,i.typeAnnotation=s,this.finishNode(i,"FunctionTypeParam")},pp$7.reinterpretTypeAsFunctionTypeParam=function(t){var e=this.startNodeAt(t.start,t.loc);return e.name=null,e.optional=!1,e.typeAnnotation=t,this.finishNode(e,"FunctionTypeParam")},pp$7.flowParseFunctionTypeParams=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={params:t,rest:null};this.match(types.name);)e.params.push(this.flowParseFunctionTypeParam()),this.match(types.parenR)||this.expect(types.comma);return this.eat(types.ellipsis)&&(e.rest=this.flowParseFunctionTypeParam()),e},pp$7.flowIdentToTypeAnnotation=function(t,e,s,i){switch(i.name){case"any":return this.finishNode(s,"AnyTypeAnnotation");case"void":return this.finishNode(s,"VoidTypeAnnotation");case"bool":case"boolean":return this.finishNode(s,"BooleanTypeAnnotation");case"mixed":return this.finishNode(s,"MixedTypeAnnotation");case"empty":return this.finishNode(s,"EmptyTypeAnnotation");case"number":return this.finishNode(s,"NumberTypeAnnotation");case"string":return this.finishNode(s,"StringTypeAnnotation");default:return this.flowParseGenericType(t,e,i)}},pp$7.flowParsePrimaryType=function(){var t=this.state.start,e=this.state.startLoc,s=this.startNode(),i=void 0,r=void 0,a=!1,n=this.state.noAnonFunctionType;switch(this.state.type){case types.name:return this.flowIdentToTypeAnnotation(t,e,s,this.parseIdentifier());case types.braceL:return this.flowParseObjectType(!1,!1);case types.braceBarL:return this.flowParseObjectType(!1,!0);case types.bracketL:return this.flowParseTupleType();case types.relational:if("<"===this.state.value)return s.typeParameters=this.flowParseTypeParameterDeclaration(),this.expect(types.parenL),i=this.flowParseFunctionTypeParams(),s.params=i.params,s.rest=i.rest,this.expect(types.parenR),this.expect(types.arrow),s.returnType=this.flowParseType(),this.finishNode(s,"FunctionTypeAnnotation");break;case types.parenL:if(this.next(),!this.match(types.parenR)&&!this.match(types.ellipsis))if(this.match(types.name)){var o=this.lookahead().type;a=o!==types.question&&o!==types.colon}else a=!0;if(a){if(this.state.noAnonFunctionType=!1,r=this.flowParseType(),this.state.noAnonFunctionType=n,this.state.noAnonFunctionType||!(this.match(types.comma)||this.match(types.parenR)&&this.lookahead().type===types.arrow))return this.expect(types.parenR),r;this.eat(types.comma)}return i=r?this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]):this.flowParseFunctionTypeParams(),s.params=i.params,s.rest=i.rest,this.expect(types.parenR),this.expect(types.arrow),s.returnType=this.flowParseType(),s.typeParameters=null,this.finishNode(s,"FunctionTypeAnnotation");case types.string:return s.value=this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"StringLiteralTypeAnnotation");case types._true:case types._false:return s.value=this.match(types._true),this.next(),this.finishNode(s,"BooleanLiteralTypeAnnotation");case types.plusMin:if("-"===this.state.value)return this.next(),this.match(types.num)||this.unexpected(),s.value=-this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"NumericLiteralTypeAnnotation");case types.num:return s.value=this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"NumericLiteralTypeAnnotation");case types._null:return s.value=this.match(types._null),this.next(),this.finishNode(s,"NullLiteralTypeAnnotation");case types._this:return s.value=this.match(types._this),this.next(),this.finishNode(s,"ThisTypeAnnotation");case types.star:return this.next(),this.finishNode(s,"ExistentialTypeParam");default:if("typeof"===this.state.type.keyword)return this.flowParseTypeofType()}this.unexpected()},pp$7.flowParsePostfixType=function(){for(var t=this.state.start,e=this.state.startLoc,s=this.flowParsePrimaryType();!this.canInsertSemicolon()&&this.match(types.bracketL);){var i=this.startNodeAt(t,e);i.elementType=s,this.expect(types.bracketL),this.expect(types.bracketR),s=this.finishNode(i,"ArrayTypeAnnotation")}return s},pp$7.flowParsePrefixType=function(){var t=this.startNode();return this.eat(types.question)?(t.typeAnnotation=this.flowParsePrefixType(),this.finishNode(t,"NullableTypeAnnotation")):this.flowParsePostfixType()},pp$7.flowParseAnonFunctionWithoutParens=function(){var t=this.flowParsePrefixType();if(!this.state.noAnonFunctionType&&this.eat(types.arrow)){var e=this.startNodeAt(t.start,t.loc);return e.params=[this.reinterpretTypeAsFunctionTypeParam(t)],e.rest=null,e.returnType=this.flowParseType(),e.typeParameters=null,this.finishNode(e,"FunctionTypeAnnotation")}return t},pp$7.flowParseIntersectionType=function(){var t=this.startNode();this.eat(types.bitwiseAND);var e=this.flowParseAnonFunctionWithoutParens();for(t.types=[e];this.eat(types.bitwiseAND);)t.types.push(this.flowParseAnonFunctionWithoutParens());return 1===t.types.length?e:this.finishNode(t,"IntersectionTypeAnnotation")},pp$7.flowParseUnionType=function(){var t=this.startNode();this.eat(types.bitwiseOR);var e=this.flowParseIntersectionType();for(t.types=[e];this.eat(types.bitwiseOR);)t.types.push(this.flowParseIntersectionType());return 1===t.types.length?e:this.finishNode(t,"UnionTypeAnnotation")},pp$7.flowParseType=function(){var t=this.state.inType;this.state.inType=!0;var e=this.flowParseUnionType();return this.state.inType=t,e},pp$7.flowParseTypeAnnotation=function(){var t=this.startNode();return t.typeAnnotation=this.flowParseTypeInitialiser(),this.finishNode(t,"TypeAnnotation")},pp$7.flowParseTypeAnnotatableIdentifier=function(){var t=this.parseIdentifier();return this.match(types.colon)&&(t.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(t,t.type)),t},pp$7.typeCastToParameter=function(t){return t.expression.typeAnnotation=t.typeAnnotation,this.finishNodeAt(t.expression,t.expression.type,t.typeAnnotation.end,t.typeAnnotation.loc.end)},pp$7.flowParseVariance=function(){var t=null;return this.match(types.plusMin)&&("+"===this.state.value?t="plus":"-"===this.state.value&&(t="minus"),this.next()),t};var flowPlugin=function(t){t.extend("parseFunctionBody",function(t){return function(e,s){return this.match(types.colon)&&!s&&(e.returnType=this.flowParseTypeAnnotation()),t.call(this,e,s)}}),t.extend("parseStatement",function(t){return function(e,s){if(this.state.strict&&this.match(types.name)&&"interface"===this.state.value){var i=this.startNode();return this.next(),this.flowParseInterface(i)}return t.call(this,e,s)}}),t.extend("parseExpressionStatement",function(t){return function(e,s){if("Identifier"===s.type)if("declare"===s.name){if(this.match(types._class)||this.match(types.name)||this.match(types._function)||this.match(types._var))return this.flowParseDeclare(e)}else if(this.match(types.name)){if("interface"===s.name)return this.flowParseInterface(e);if("type"===s.name)return this.flowParseTypeAlias(e)}return t.call(this,e,s)}}),t.extend("shouldParseExportDeclaration",function(t){return function(){return this.isContextual("type")||this.isContextual("interface")||t.call(this)}}),t.extend("parseConditional",function(t){
	return function(e,s,i,r,a){if(a&&this.match(types.question)){var n=this.state.clone();try{return t.call(this,e,s,i,r)}catch(t){if(t instanceof SyntaxError)return this.state=n,a.start=t.pos||this.state.start,e;throw t}}return t.call(this,e,s,i,r)}}),t.extend("parseParenItem",function(t){return function(e,s,i){if(e=t.call(this,e,s,i),this.eat(types.question)&&(e.optional=!0),this.match(types.colon)){var r=this.startNodeAt(s,i);return r.expression=e,r.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(r,"TypeCastExpression")}return e}}),t.extend("parseExport",function(t){return function(e){return e=t.call(this,e),"ExportNamedDeclaration"===e.type&&(e.exportKind=e.exportKind||"value"),e}}),t.extend("parseExportDeclaration",function(t){return function(e){if(this.isContextual("type")){e.exportKind="type";var s=this.startNode();return this.next(),this.match(types.braceL)?(e.specifiers=this.parseExportSpecifiers(),this.parseExportFrom(e),null):this.flowParseTypeAlias(s)}if(this.isContextual("interface")){e.exportKind="type";var i=this.startNode();return this.next(),this.flowParseInterface(i)}return t.call(this,e)}}),t.extend("parseClassId",function(t){return function(e){t.apply(this,arguments),this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration())}}),t.extend("isKeyword",function(t){return function(e){return(!this.state.inType||"void"!==e)&&t.call(this,e)}}),t.extend("readToken",function(t){return function(e){return!this.state.inType||62!==e&&60!==e?t.call(this,e):this.finishOp(types.relational,1)}}),t.extend("jsx_readToken",function(t){return function(){if(!this.state.inType)return t.call(this)}}),t.extend("toAssignable",function(t){return function(e,s,i){return"TypeCastExpression"===e.type?t.call(this,this.typeCastToParameter(e),s,i):t.call(this,e,s,i)}}),t.extend("toAssignableList",function(t){return function(e,s,i){for(var r=0;r<e.length;r++){var a=e[r];a&&"TypeCastExpression"===a.type&&(e[r]=this.typeCastToParameter(a))}return t.call(this,e,s,i)}}),t.extend("toReferencedList",function(){return function(t){for(var e=0;e<t.length;e++){var s=t[e];s&&s._exprListItem&&"TypeCastExpression"===s.type&&this.raise(s.start,"Unexpected type cast")}return t}}),t.extend("parseExprListItem",function(t){return function(e,s){var i=this.startNode(),r=t.call(this,e,s);return this.match(types.colon)?(i._exprListItem=!0,i.expression=r,i.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(i,"TypeCastExpression")):r}}),t.extend("checkLVal",function(t){return function(e){if("TypeCastExpression"!==e.type)return t.apply(this,arguments)}}),t.extend("parseClassProperty",function(t){return function(e){return delete e.variancePos,this.match(types.colon)&&(e.typeAnnotation=this.flowParseTypeAnnotation()),t.call(this,e)}}),t.extend("isClassProperty",function(t){return function(){return this.match(types.colon)||t.call(this)}}),t.extend("parseClassMethod",function(){return function(t,e,s,i){e.variance&&this.unexpected(e.variancePos),delete e.variance,delete e.variancePos,this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration()),this.parseMethod(e,s,i),t.body.push(this.finishNode(e,"ClassMethod"))}}),t.extend("parseClassSuper",function(t){return function(e,s){if(t.call(this,e,s),e.superClass&&this.isRelational("<")&&(e.superTypeParameters=this.flowParseTypeParameterInstantiation()),this.isContextual("implements")){this.next();var i=e.implements=[];do{var r=this.startNode();r.id=this.parseIdentifier(),this.isRelational("<")?r.typeParameters=this.flowParseTypeParameterInstantiation():r.typeParameters=null,i.push(this.finishNode(r,"ClassImplements"))}while(this.eat(types.comma))}}}),t.extend("parsePropertyName",function(t){return function(e){var s=this.state.start,i=this.flowParseVariance(),r=t.call(this,e);return e.variance=i,e.variancePos=s,r}}),t.extend("parseObjPropValue",function(t){return function(e){e.variance&&this.unexpected(e.variancePos),delete e.variance,delete e.variancePos;var s=void 0;this.isRelational("<")&&(s=this.flowParseTypeParameterDeclaration(),this.match(types.parenL)||this.unexpected()),t.apply(this,arguments),s&&((e.value||e).typeParameters=s)}}),t.extend("parseAssignableListItemTypes",function(){return function(t){return this.eat(types.question)&&(t.optional=!0),this.match(types.colon)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),this.finishNode(t,t.type),t}}),t.extend("parseMaybeDefault",function(t){return function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];var r=t.apply(this,s);return"AssignmentPattern"===r.type&&r.typeAnnotation&&r.right.start<r.typeAnnotation.start&&this.raise(r.typeAnnotation.start,"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`"),r}}),t.extend("parseImportSpecifiers",function(t){return function(e){e.importKind="value";var s=null;if(this.match(types._typeof)?s="typeof":this.isContextual("type")&&(s="type"),s){var i=this.lookahead();(i.type===types.name&&"from"!==i.value||i.type===types.braceL||i.type===types.star)&&(this.next(),e.importKind=s)}t.call(this,e)}}),t.extend("parseImportSpecifier",function(){return function(t){var e=this.startNode(),s=this.state.start,i=this.parseIdentifier(!0),r=null;if("type"===i.name?r="type":"typeof"===i.name&&(r="typeof"),this.isContextual("as")){var a=this.parseIdentifier(!0);null===r||this.match(types.name)?(e.imported=i,e.importKind=null,e.local=this.parseIdentifier(!1)):(e.imported=a,e.importKind=r,e.local=a.__clone())}else null!==r&&this.match(types.name)?(e.imported=this.parseIdentifier(!0),e.importKind=r,e.local=this.eatContextual("as")?this.parseIdentifier(!1):e.imported.__clone()):("typeof"===i.name&&this.unexpected(s,"Cannot import a variable named `typeof`"),e.imported=i,e.importKind=null,e.local=e.imported.__clone());this.checkLVal(e.local,!0,void 0,"import specifier"),t.specifiers.push(this.finishNode(e,"ImportSpecifier"))}}),t.extend("parseFunctionParams",function(t){return function(e){this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration()),t.call(this,e)}}),t.extend("parseVarHead",function(t){return function(e){t.call(this,e),this.match(types.colon)&&(e.id.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(e.id,e.id.type))}}),t.extend("parseAsyncArrowFromCallExpression",function(t){return function(e,s){if(this.match(types.colon)){var i=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0,e.returnType=this.flowParseTypeAnnotation(),this.state.noAnonFunctionType=i}return t.call(this,e,s)}}),t.extend("shouldParseAsyncArrow",function(t){return function(){return this.match(types.colon)||t.call(this)}}),t.extend("parseMaybeAssign",function(t){return function(){for(var e=null,s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];if(types.jsxTagStart&&this.match(types.jsxTagStart)){var a=this.state.clone();try{return t.apply(this,i)}catch(t){if(!(t instanceof SyntaxError))throw t;this.state=a,e=t}}if(this.state.context.push(types$1.parenExpression),null!=e||this.isRelational("<")){var n=void 0,o=void 0;try{o=this.flowParseTypeParameterDeclaration(),n=t.apply(this,i),n.typeParameters=o,n.start=o.start,n.loc.start=o.loc.start}catch(t){throw e||t}if("ArrowFunctionExpression"===n.type)return n;if(null!=e)throw e;this.raise(o.start,"Expected an arrow function after this type parameter declaration")}return this.state.context.pop(),t.apply(this,i)}}),t.extend("parseArrow",function(t){return function(e){if(this.match(types.colon)){var s=this.state.clone();try{var i=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0;var r=this.flowParseTypeAnnotation();this.state.noAnonFunctionType=i,this.canInsertSemicolon()&&this.unexpected(),this.match(types.arrow)||this.unexpected(),e.returnType=r}catch(t){if(!(t instanceof SyntaxError))throw t;this.state=s}}return t.call(this,e)}}),t.extend("shouldParseArrow",function(t){return function(){return this.match(types.colon)||t.call(this)}}),t.extend("isClassMutatorStarter",function(t){return function(){return!!this.isRelational("<")||t.call(this)}})},fromCodePoint=String.fromCodePoint;fromCodePoint||!function(){var t=String.fromCharCode,e=Math.floor;fromCodePoint=function(){var s=16384,i=[],r=void 0,a=void 0,n=-1,o=arguments.length;if(!o)return"";for(var p="";++n<o;){var h=Number(arguments[n]);if(!isFinite(h)||h<0||h>1114111||e(h)!=h)throw RangeError("Invalid code point: "+h);h<=65535?i.push(h):(h-=65536,r=(h>>10)+55296,a=h%1024+56320,i.push(r,a)),(n+1==o||i.length>s)&&(p+=t.apply(null,i),i.length=0)}return p}}();var fromCodePoint$1=fromCodePoint,XHTMLEntities={quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"},HEX_NUMBER=/^[\da-fA-F]+$/,DECIMAL_NUMBER=/^\d+$/;types$1.j_oTag=new TokContext("<tag",!1),types$1.j_cTag=new TokContext("</tag",!1),types$1.j_expr=new TokContext("<tag>...</tag>",!0,!0),types.jsxName=new TokenType("jsxName"),types.jsxText=new TokenType("jsxText",{beforeExpr:!0}),types.jsxTagStart=new TokenType("jsxTagStart",{startsExpr:!0}),types.jsxTagEnd=new TokenType("jsxTagEnd"),types.jsxTagStart.updateContext=function(){this.state.context.push(types$1.j_expr),this.state.context.push(types$1.j_oTag),this.state.exprAllowed=!1},types.jsxTagEnd.updateContext=function(t){var e=this.state.context.pop();e===types$1.j_oTag&&t===types.slash||e===types$1.j_cTag?(this.state.context.pop(),this.state.exprAllowed=this.curContext()===types$1.j_expr):this.state.exprAllowed=!0};var pp$8=Parser.prototype;pp$8.jsxReadToken=function(){for(var t="",e=this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated JSX contents");var s=this.input.charCodeAt(this.state.pos);switch(s){case 60:case 123:return this.state.pos===this.state.start?60===s&&this.state.exprAllowed?(++this.state.pos,this.finishToken(types.jsxTagStart)):this.getTokenFromCode(s):(t+=this.input.slice(e,this.state.pos),this.finishToken(types.jsxText,t));case 38:t+=this.input.slice(e,this.state.pos),t+=this.jsxReadEntity(),e=this.state.pos;break;default:isNewLine(s)?(t+=this.input.slice(e,this.state.pos),t+=this.jsxReadNewLine(!0),e=this.state.pos):++this.state.pos}}},pp$8.jsxReadNewLine=function(t){var e=this.input.charCodeAt(this.state.pos),s=void 0;return++this.state.pos,13===e&&10===this.input.charCodeAt(this.state.pos)?(++this.state.pos,s=t?"\n":"\r\n"):s=String.fromCharCode(e),++this.state.curLine,this.state.lineStart=this.state.pos,s},pp$8.jsxReadString=function(t){for(var e="",s=++this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated string constant");var i=this.input.charCodeAt(this.state.pos);if(i===t)break;38===i?(e+=this.input.slice(s,this.state.pos),e+=this.jsxReadEntity(),s=this.state.pos):isNewLine(i)?(e+=this.input.slice(s,this.state.pos),e+=this.jsxReadNewLine(!1),s=this.state.pos):++this.state.pos}return e+=this.input.slice(s,this.state.pos++),this.finishToken(types.string,e)},pp$8.jsxReadEntity=function(){for(var t="",e=0,s=void 0,i=this.input[this.state.pos],r=++this.state.pos;this.state.pos<this.input.length&&e++<10;){if(i=this.input[this.state.pos++],";"===i){"#"===t[0]?"x"===t[1]?(t=t.substr(2),HEX_NUMBER.test(t)&&(s=fromCodePoint$1(parseInt(t,16)))):(t=t.substr(1),DECIMAL_NUMBER.test(t)&&(s=fromCodePoint$1(parseInt(t,10)))):s=XHTMLEntities[t];break}t+=i}return s?s:(this.state.pos=r,"&")},pp$8.jsxReadWord=function(){var t=void 0,e=this.state.pos;do t=this.input.charCodeAt(++this.state.pos);while(isIdentifierChar(t)||45===t);return this.finishToken(types.jsxName,this.input.slice(e,this.state.pos))},pp$8.jsxParseIdentifier=function(){var t=this.startNode();return this.match(types.jsxName)?t.name=this.state.value:this.state.type.keyword?t.name=this.state.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"JSXIdentifier")},pp$8.jsxParseNamespacedName=function(){var t=this.state.start,e=this.state.startLoc,s=this.jsxParseIdentifier();if(!this.eat(types.colon))return s;var i=this.startNodeAt(t,e);return i.namespace=s,i.name=this.jsxParseIdentifier(),this.finishNode(i,"JSXNamespacedName")},pp$8.jsxParseElementName=function(){for(var t=this.state.start,e=this.state.startLoc,s=this.jsxParseNamespacedName();this.eat(types.dot);){var i=this.startNodeAt(t,e);i.object=s,i.property=this.jsxParseIdentifier(),s=this.finishNode(i,"JSXMemberExpression")}return s},pp$8.jsxParseAttributeValue=function(){var t=void 0;switch(this.state.type){case types.braceL:if(t=this.jsxParseExpressionContainer(),"JSXEmptyExpression"!==t.expression.type)return t;this.raise(t.start,"JSX attributes must only be assigned a non-empty expression");case types.jsxTagStart:case types.string:return t=this.parseExprAtom(),t.extra=null,t;default:this.raise(this.state.start,"JSX value should be either an expression or a quoted JSX text")}},pp$8.jsxParseEmptyExpression=function(){var t=this.startNodeAt(this.state.lastTokEnd,this.state.lastTokEndLoc);return this.finishNodeAt(t,"JSXEmptyExpression",this.state.start,this.state.startLoc)},pp$8.jsxParseSpreadChild=function(){var t=this.startNode();return this.expect(types.braceL),this.expect(types.ellipsis),t.expression=this.parseExpression(),this.expect(types.braceR),this.finishNode(t,"JSXSpreadChild")},pp$8.jsxParseExpressionContainer=function(){var t=this.startNode();return this.next(),this.match(types.braceR)?t.expression=this.jsxParseEmptyExpression():t.expression=this.parseExpression(),this.expect(types.braceR),this.finishNode(t,"JSXExpressionContainer")},pp$8.jsxParseAttribute=function(){var t=this.startNode();return this.eat(types.braceL)?(this.expect(types.ellipsis),t.argument=this.parseMaybeAssign(),this.expect(types.braceR),this.finishNode(t,"JSXSpreadAttribute")):(t.name=this.jsxParseNamespacedName(),t.value=this.eat(types.eq)?this.jsxParseAttributeValue():null,this.finishNode(t,"JSXAttribute"))},pp$8.jsxParseOpeningElementAt=function(t,e){var s=this.startNodeAt(t,e);for(s.attributes=[],s.name=this.jsxParseElementName();!this.match(types.slash)&&!this.match(types.jsxTagEnd);)s.attributes.push(this.jsxParseAttribute());return s.selfClosing=this.eat(types.slash),this.expect(types.jsxTagEnd),this.finishNode(s,"JSXOpeningElement")},pp$8.jsxParseClosingElementAt=function(t,e){var s=this.startNodeAt(t,e);return s.name=this.jsxParseElementName(),this.expect(types.jsxTagEnd),this.finishNode(s,"JSXClosingElement")},pp$8.jsxParseElementAt=function(t,e){var s=this.startNodeAt(t,e),i=[],r=this.jsxParseOpeningElementAt(t,e),a=null;if(!r.selfClosing){t:for(;;)switch(this.state.type){case types.jsxTagStart:if(t=this.state.start,e=this.state.startLoc,this.next(),this.eat(types.slash)){a=this.jsxParseClosingElementAt(t,e);break t}i.push(this.jsxParseElementAt(t,e));break;case types.jsxText:i.push(this.parseExprAtom());break;case types.braceL:this.lookahead().type===types.ellipsis?i.push(this.jsxParseSpreadChild()):i.push(this.jsxParseExpressionContainer());break;default:this.unexpected()}getQualifiedJSXName(a.name)!==getQualifiedJSXName(r.name)&&this.raise(a.start,"Expected corresponding JSX closing tag for <"+getQualifiedJSXName(r.name)+">")}return s.openingElement=r,s.closingElement=a,s.children=i,this.match(types.relational)&&"<"===this.state.value&&this.raise(this.state.start,"Adjacent JSX elements must be wrapped in an enclosing tag"),this.finishNode(s,"JSXElement")},pp$8.jsxParseElement=function(){var t=this.state.start,e=this.state.startLoc;return this.next(),this.jsxParseElementAt(t,e)};var jsxPlugin=function(t){t.extend("parseExprAtom",function(t){return function(e){if(this.match(types.jsxText)){var s=this.parseLiteral(this.state.value,"JSXText");return s.extra=null,s}return this.match(types.jsxTagStart)?this.jsxParseElement():t.call(this,e)}}),t.extend("readToken",function(t){return function(e){if(this.state.inPropertyName)return t.call(this,e);var s=this.curContext();if(s===types$1.j_expr)return this.jsxReadToken();if(s===types$1.j_oTag||s===types$1.j_cTag){if(isIdentifierStart(e))return this.jsxReadWord();if(62===e)return++this.state.pos,this.finishToken(types.jsxTagEnd);if((34===e||39===e)&&s===types$1.j_oTag)return this.jsxReadString(e)}return 60===e&&this.state.exprAllowed?(++this.state.pos,this.finishToken(types.jsxTagStart)):t.call(this,e)}}),t.extend("updateContext",function(t){return function(e){if(this.match(types.braceL)){var s=this.curContext();s===types$1.j_oTag?this.state.context.push(types$1.braceExpression):s===types$1.j_expr?this.state.context.push(types$1.templateQuasi):t.call(this,e),this.state.exprAllowed=!0}else{if(!this.match(types.slash)||e!==types.jsxTagStart)return t.call(this,e);this.state.context.length-=2,this.state.context.push(types$1.j_cTag),this.state.exprAllowed=!1}}})};plugins.flow=flowPlugin,plugins.jsx=jsxPlugin,exports.parse=parse,exports.tokTypes=types;

/***/ },

/***/ "./node_modules/babel-types/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function registerType(e){var r=t["is"+e];r||(r=t["is"+e]=function(r,n){return t.is(e,r,n)}),t["assert"+e]=function(t,n){if(n=n||{},!r(t,n))throw new Error("Expected type "+(0,_stringify2.default)(e)+" with option "+(0,_stringify2.default)(n))}}function is(e,r,n){if(!r)return!1;var o=isType(r.type,e);return!!o&&("undefined"==typeof n||t.shallowEqual(r,n))}function isType(e,r){if(e===r)return!0;if(t.ALIAS_KEYS[r])return!1;var n=t.FLIPPED_ALIAS_KEYS[r];if(n){if(n[0]===e)return!0;for(var o=n,i=Array.isArray(o),s=0,o=i?o:(0,_getIterator3.default)(o);;){var a;if(i){if(s>=o.length)break;a=o[s++]}else{if(s=o.next(),s.done)break;a=s.value}var u=a;if(e===u)return!0}}return!1}function validate(e,r,n){if(e){var o=t.NODE_FIELDS[e.type];if(o){var i=o[r];i&&i.validate&&(i.optional&&null==n||i.validate(e,r,n))}}}function shallowEqual(e,t){for(var r=(0,_keys2.default)(t),n=r,o=Array.isArray(n),i=0,n=o?n:(0,_getIterator3.default)(n);;){var s;if(o){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var a=s;if(e[a]!==t[a])return!1}return!0}function appendToMemberExpression(e,r,n){return e.object=t.memberExpression(e.object,e.property,e.computed),e.property=r,e.computed=!!n,e}function prependToMemberExpression(e,r){return e.object=t.memberExpression(r,e.object),e}function ensureBlock(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body";return e[r]=t.toBlock(e[r],e)}function clone(e){if(!e)return e;var t={};for(var r in e)"_"!==r[0]&&(t[r]=e[r]);return t}function cloneWithoutLoc(e){var t=clone(e);return delete t.loc,t}function cloneDeep(e){if(!e)return e;var r={};for(var n in e)if("_"!==n[0]){var o=e[n];o&&(o.type?o=t.cloneDeep(o):Array.isArray(o)&&(o=o.map(t.cloneDeep))),r[n]=o}return r}function buildMatchMemberExpression(e,r){var n=e.split(".");return function(e){if(!t.isMemberExpression(e))return!1;for(var o=[e],i=0;o.length;){var s=o.shift();if(r&&i===n.length)return!0;if(t.isIdentifier(s)){if(n[i]!==s.name)return!1}else{if(!t.isStringLiteral(s)){if(t.isMemberExpression(s)){if(s.computed&&!t.isStringLiteral(s.property))return!1;o.push(s.object),o.push(s.property);continue}return!1}if(n[i]!==s.value)return!1}if(++i>n.length)return!1}return!0}}function removeComments(e){for(var r=t.COMMENT_KEYS,n=Array.isArray(r),o=0,r=n?r:(0,_getIterator3.default)(r);;){var i;if(n){if(o>=r.length)break;i=r[o++]}else{if(o=r.next(),o.done)break;i=o.value}var s=i;delete e[s]}return e}function inheritsComments(e,t){return inheritTrailingComments(e,t),inheritLeadingComments(e,t),inheritInnerComments(e,t),e}function inheritTrailingComments(e,t){_inheritComments("trailingComments",e,t)}function inheritLeadingComments(e,t){_inheritComments("leadingComments",e,t)}function inheritInnerComments(e,t){_inheritComments("innerComments",e,t)}function _inheritComments(e,t,r){t&&r&&(t[e]=(0,_uniq2.default)((0,_compact2.default)([].concat(t[e],r[e]))))}function inherits(e,r){if(!e||!r)return e;for(var n=t.INHERIT_KEYS.optional,o=Array.isArray(n),i=0,n=o?n:(0,_getIterator3.default)(n);;){var s;if(o){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var a=s;null==e[a]&&(e[a]=r[a])}for(var u in r)"_"===u[0]&&(e[u]=r[u]);for(var p=t.INHERIT_KEYS.force,f=Array.isArray(p),_=0,p=f?p:(0,_getIterator3.default)(p);;){var c;if(f){if(_>=p.length)break;c=p[_++]}else{if(_=p.next(),_.done)break;c=_.value}var l=c;e[l]=r[l]}return t.inheritsComments(e,r),e}function assertNode(e){if(!isNode(e))throw new TypeError("Not a valid node "+(e&&e.type))}function isNode(e){return!(!e||!_definitions.VISITOR_KEYS[e.type])}function traverseFast(e,r,n){if(e){var o=t.VISITOR_KEYS[e.type];if(o){n=n||{},r(e,n);for(var i=o,s=Array.isArray(i),a=0,i=s?i:(0,_getIterator3.default)(i);;){var u;if(s){if(a>=i.length)break;u=i[a++]}else{if(a=i.next(),a.done)break;u=a.value}var p=u,f=e[p];if(Array.isArray(f))for(var _=f,c=Array.isArray(_),l=0,_=c?_:(0,_getIterator3.default)(_);;){var E;if(c){if(l>=_.length)break;E=_[l++]}else{if(l=_.next(),l.done)break;E=l.value}var d=E;traverseFast(d,r,n)}else traverseFast(f,r,n)}}}}function removeProperties(e,t){t=t||{};for(var r=t.preserveComments?CLEAR_KEYS:CLEAR_KEYS_PLUS_COMMENTS,n=r,o=Array.isArray(n),i=0,n=o?n:(0,_getIterator3.default)(n);;){var s;if(o){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var a=s;null!=e[a]&&(e[a]=void 0)}for(var u in e)"_"===u[0]&&null!=e[u]&&(e[u]=void 0);for(var p=(0,_getOwnPropertySymbols2.default)(e),f=p,_=Array.isArray(f),c=0,f=_?f:(0,_getIterator3.default)(f);;){var l;if(_){if(c>=f.length)break;l=f[c++]}else{if(c=f.next(),c.done)break;l=c.value}var E=l;e[E]=null}}function removePropertiesDeep(e,t){return traverseFast(e,removeProperties,t),e}exports.__esModule=!0,exports.createTypeAnnotationBasedOnTypeof=exports.removeTypeDuplicates=exports.createUnionTypeAnnotation=exports.valueToNode=exports.toBlock=exports.toExpression=exports.toStatement=exports.toBindingIdentifierName=exports.toIdentifier=exports.toKeyAlias=exports.toSequenceExpression=exports.toComputedKey=exports.isNodesEquivalent=exports.isImmutable=exports.isScope=exports.isSpecifierDefault=exports.isVar=exports.isBlockScoped=exports.isLet=exports.isValidIdentifier=exports.isReferenced=exports.isBinding=exports.getOuterBindingIdentifiers=exports.getBindingIdentifiers=exports.TYPES=exports.react=exports.DEPRECATED_KEYS=exports.BUILDER_KEYS=exports.NODE_FIELDS=exports.ALIAS_KEYS=exports.VISITOR_KEYS=exports.NOT_LOCAL_BINDING=exports.BLOCK_SCOPED_SYMBOL=exports.INHERIT_KEYS=exports.UNARY_OPERATORS=exports.STRING_UNARY_OPERATORS=exports.NUMBER_UNARY_OPERATORS=exports.BOOLEAN_UNARY_OPERATORS=exports.BINARY_OPERATORS=exports.NUMBER_BINARY_OPERATORS=exports.BOOLEAN_BINARY_OPERATORS=exports.COMPARISON_BINARY_OPERATORS=exports.EQUALITY_BINARY_OPERATORS=exports.BOOLEAN_NUMBER_BINARY_OPERATORS=exports.UPDATE_OPERATORS=exports.LOGICAL_OPERATORS=exports.COMMENT_KEYS=exports.FOR_INIT_KEYS=exports.FLATTENABLE_KEYS=exports.STATEMENT_OR_BLOCK_KEYS=void 0;var _getOwnPropertySymbols=__webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js"),_getOwnPropertySymbols2=_interopRequireDefault(_getOwnPropertySymbols),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_keys=__webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js"),_keys2=_interopRequireDefault(_keys),_stringify=__webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js"),_stringify2=_interopRequireDefault(_stringify),_constants=__webpack_require__("./node_modules/babel-types/lib/constants.js");Object.defineProperty(exports,"STATEMENT_OR_BLOCK_KEYS",{enumerable:!0,get:function(){return _constants.STATEMENT_OR_BLOCK_KEYS}}),Object.defineProperty(exports,"FLATTENABLE_KEYS",{enumerable:!0,get:function(){return _constants.FLATTENABLE_KEYS}}),Object.defineProperty(exports,"FOR_INIT_KEYS",{enumerable:!0,get:function(){return _constants.FOR_INIT_KEYS}}),Object.defineProperty(exports,"COMMENT_KEYS",{enumerable:!0,get:function(){return _constants.COMMENT_KEYS}}),Object.defineProperty(exports,"LOGICAL_OPERATORS",{enumerable:!0,get:function(){return _constants.LOGICAL_OPERATORS}}),Object.defineProperty(exports,"UPDATE_OPERATORS",{enumerable:!0,get:function(){return _constants.UPDATE_OPERATORS}}),Object.defineProperty(exports,"BOOLEAN_NUMBER_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS}}),Object.defineProperty(exports,"EQUALITY_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.EQUALITY_BINARY_OPERATORS}}),Object.defineProperty(exports,"COMPARISON_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.COMPARISON_BINARY_OPERATORS}}),Object.defineProperty(exports,"BOOLEAN_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.BOOLEAN_BINARY_OPERATORS}}),Object.defineProperty(exports,"NUMBER_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.NUMBER_BINARY_OPERATORS}}),Object.defineProperty(exports,"BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.BINARY_OPERATORS}}),Object.defineProperty(exports,"BOOLEAN_UNARY_OPERATORS",{enumerable:!0,get:function(){return _constants.BOOLEAN_UNARY_OPERATORS}}),Object.defineProperty(exports,"NUMBER_UNARY_OPERATORS",{enumerable:!0,get:function(){return _constants.NUMBER_UNARY_OPERATORS}}),Object.defineProperty(exports,"STRING_UNARY_OPERATORS",{enumerable:!0,get:function(){return _constants.STRING_UNARY_OPERATORS}}),Object.defineProperty(exports,"UNARY_OPERATORS",{enumerable:!0,get:function(){return _constants.UNARY_OPERATORS}}),Object.defineProperty(exports,"INHERIT_KEYS",{enumerable:!0,get:function(){return _constants.INHERIT_KEYS}}),Object.defineProperty(exports,"BLOCK_SCOPED_SYMBOL",{enumerable:!0,get:function(){return _constants.BLOCK_SCOPED_SYMBOL}}),Object.defineProperty(exports,"NOT_LOCAL_BINDING",{enumerable:!0,get:function(){return _constants.NOT_LOCAL_BINDING}}),exports.is=is,exports.isType=isType,exports.validate=validate,exports.shallowEqual=shallowEqual,exports.appendToMemberExpression=appendToMemberExpression,exports.prependToMemberExpression=prependToMemberExpression,exports.ensureBlock=ensureBlock,exports.clone=clone,exports.cloneWithoutLoc=cloneWithoutLoc,exports.cloneDeep=cloneDeep,exports.buildMatchMemberExpression=buildMatchMemberExpression,exports.removeComments=removeComments,exports.inheritsComments=inheritsComments,exports.inheritTrailingComments=inheritTrailingComments,exports.inheritLeadingComments=inheritLeadingComments,exports.inheritInnerComments=inheritInnerComments,exports.inherits=inherits,exports.assertNode=assertNode,exports.isNode=isNode,exports.traverseFast=traverseFast,exports.removeProperties=removeProperties,exports.removePropertiesDeep=removePropertiesDeep;var _retrievers=__webpack_require__("./node_modules/babel-types/lib/retrievers.js");Object.defineProperty(exports,"getBindingIdentifiers",{enumerable:!0,get:function(){return _retrievers.getBindingIdentifiers}}),Object.defineProperty(exports,"getOuterBindingIdentifiers",{enumerable:!0,get:function(){return _retrievers.getOuterBindingIdentifiers}});var _validators=__webpack_require__("./node_modules/babel-types/lib/validators.js");Object.defineProperty(exports,"isBinding",{enumerable:!0,get:function(){return _validators.isBinding}}),Object.defineProperty(exports,"isReferenced",{enumerable:!0,get:function(){return _validators.isReferenced}}),Object.defineProperty(exports,"isValidIdentifier",{enumerable:!0,get:function(){return _validators.isValidIdentifier}}),Object.defineProperty(exports,"isLet",{enumerable:!0,get:function(){return _validators.isLet}}),Object.defineProperty(exports,"isBlockScoped",{enumerable:!0,get:function(){return _validators.isBlockScoped}}),Object.defineProperty(exports,"isVar",{enumerable:!0,get:function(){return _validators.isVar}}),Object.defineProperty(exports,"isSpecifierDefault",{enumerable:!0,get:function(){return _validators.isSpecifierDefault}}),Object.defineProperty(exports,"isScope",{enumerable:!0,get:function(){return _validators.isScope}}),Object.defineProperty(exports,"isImmutable",{enumerable:!0,get:function(){return _validators.isImmutable}}),Object.defineProperty(exports,"isNodesEquivalent",{enumerable:!0,get:function(){return _validators.isNodesEquivalent}});var _converters=__webpack_require__("./node_modules/babel-types/lib/converters.js");Object.defineProperty(exports,"toComputedKey",{enumerable:!0,get:function(){return _converters.toComputedKey}}),Object.defineProperty(exports,"toSequenceExpression",{enumerable:!0,get:function(){return _converters.toSequenceExpression}}),Object.defineProperty(exports,"toKeyAlias",{enumerable:!0,get:function(){return _converters.toKeyAlias}}),Object.defineProperty(exports,"toIdentifier",{enumerable:!0,get:function(){return _converters.toIdentifier}}),Object.defineProperty(exports,"toBindingIdentifierName",{enumerable:!0,get:function(){return _converters.toBindingIdentifierName}}),Object.defineProperty(exports,"toStatement",{enumerable:!0,get:function(){return _converters.toStatement}}),Object.defineProperty(exports,"toExpression",{enumerable:!0,get:function(){return _converters.toExpression}}),Object.defineProperty(exports,"toBlock",{enumerable:!0,get:function(){return _converters.toBlock}}),Object.defineProperty(exports,"valueToNode",{enumerable:!0,get:function(){return _converters.valueToNode}});var _flow=__webpack_require__("./node_modules/babel-types/lib/flow.js");Object.defineProperty(exports,"createUnionTypeAnnotation",{enumerable:!0,get:function(){return _flow.createUnionTypeAnnotation}}),Object.defineProperty(exports,"removeTypeDuplicates",{enumerable:!0,get:function(){return _flow.removeTypeDuplicates}}),Object.defineProperty(exports,"createTypeAnnotationBasedOnTypeof",{enumerable:!0,get:function(){return _flow.createTypeAnnotationBasedOnTypeof}});var _toFastProperties=__webpack_require__("./node_modules/to-fast-properties/index.js"),_toFastProperties2=_interopRequireDefault(_toFastProperties),_compact=__webpack_require__("./node_modules/babel-types/node_modules/lodash/compact.js"),_compact2=_interopRequireDefault(_compact),_clone=__webpack_require__("./node_modules/babel-types/node_modules/lodash/clone.js"),_clone2=_interopRequireDefault(_clone),_uniq=__webpack_require__("./node_modules/babel-types/node_modules/lodash/uniq.js"),_uniq2=_interopRequireDefault(_uniq);__webpack_require__("./node_modules/babel-types/lib/definitions/init.js");var _definitions=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_react2=__webpack_require__("./node_modules/babel-types/lib/react.js"),_react=_interopRequireWildcard(_react2),t=exports;exports.VISITOR_KEYS=_definitions.VISITOR_KEYS,exports.ALIAS_KEYS=_definitions.ALIAS_KEYS,exports.NODE_FIELDS=_definitions.NODE_FIELDS,exports.BUILDER_KEYS=_definitions.BUILDER_KEYS,exports.DEPRECATED_KEYS=_definitions.DEPRECATED_KEYS,exports.react=_react;for(var type in t.VISITOR_KEYS)registerType(type);t.FLIPPED_ALIAS_KEYS={},(0,_keys2.default)(t.ALIAS_KEYS).forEach(function(e){t.ALIAS_KEYS[e].forEach(function(r){var n=t.FLIPPED_ALIAS_KEYS[r]=t.FLIPPED_ALIAS_KEYS[r]||[];n.push(e)})}),(0,_keys2.default)(t.FLIPPED_ALIAS_KEYS).forEach(function(e){t[e.toUpperCase()+"_TYPES"]=t.FLIPPED_ALIAS_KEYS[e],registerType(e)});var TYPES=exports.TYPES=(0,_keys2.default)(t.VISITOR_KEYS).concat((0,_keys2.default)(t.FLIPPED_ALIAS_KEYS)).concat((0,_keys2.default)(t.DEPRECATED_KEYS));(0,_keys2.default)(t.BUILDER_KEYS).forEach(function(e){function r(){if(arguments.length>n.length)throw new Error("t."+e+": Too many arguments passed. Received "+arguments.length+" but can receive no more than "+n.length);var r={};r.type=e;for(var o=0,i=n,s=Array.isArray(i),a=0,i=s?i:(0,_getIterator3.default)(i);;){var u;if(s){if(a>=i.length)break;u=i[a++]}else{if(a=i.next(),a.done)break;u=a.value}var p=u,f=t.NODE_FIELDS[e][p],_=arguments[o++];void 0===_&&(_=(0,_clone2.default)(f.default)),r[p]=_}for(var c in r)validate(r,c,r[c]);return r}var n=t.BUILDER_KEYS[e];t[e]=r,t[e[0].toLowerCase()+e.slice(1)]=r});var _loop=function(e){function r(t){return function(){return console.trace("The node type "+e+" has been renamed to "+n),t.apply(this,arguments)}}var n=t.DEPRECATED_KEYS[e];t[e]=t[e[0].toLowerCase()+e.slice(1)]=r(t[n]),t["is"+e]=r(t["is"+n]),t["assert"+e]=r(t["assert"+n])};for(var _type in t.DEPRECATED_KEYS)_loop(_type);(0,_toFastProperties2.default)(t),(0,_toFastProperties2.default)(t.VISITOR_KEYS);var CLEAR_KEYS=["tokens","start","end","loc","raw","rawValue"],CLEAR_KEYS_PLUS_COMMENTS=t.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

/***/ },

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports={default:__webpack_require__("./node_modules/core-js/library/fn/object/get-own-property-symbols.js"),__esModule:!0};

/***/ },

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js"),module.exports=__webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;

/***/ },

/***/ "./node_modules/babel-types/lib/constants.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(R){return R&&R.__esModule?R:{default:R}}exports.__esModule=!0,exports.NOT_LOCAL_BINDING=exports.BLOCK_SCOPED_SYMBOL=exports.INHERIT_KEYS=exports.UNARY_OPERATORS=exports.STRING_UNARY_OPERATORS=exports.NUMBER_UNARY_OPERATORS=exports.BOOLEAN_UNARY_OPERATORS=exports.BINARY_OPERATORS=exports.NUMBER_BINARY_OPERATORS=exports.BOOLEAN_BINARY_OPERATORS=exports.COMPARISON_BINARY_OPERATORS=exports.EQUALITY_BINARY_OPERATORS=exports.BOOLEAN_NUMBER_BINARY_OPERATORS=exports.UPDATE_OPERATORS=exports.LOGICAL_OPERATORS=exports.COMMENT_KEYS=exports.FOR_INIT_KEYS=exports.FLATTENABLE_KEYS=exports.STATEMENT_OR_BLOCK_KEYS=void 0;var _for=__webpack_require__("./node_modules/babel-runtime/core-js/symbol/for.js"),_for2=_interopRequireDefault(_for),STATEMENT_OR_BLOCK_KEYS=exports.STATEMENT_OR_BLOCK_KEYS=["consequent","body","alternate"],FLATTENABLE_KEYS=exports.FLATTENABLE_KEYS=["body","expressions"],FOR_INIT_KEYS=exports.FOR_INIT_KEYS=["left","init"],COMMENT_KEYS=exports.COMMENT_KEYS=["leadingComments","trailingComments","innerComments"],LOGICAL_OPERATORS=exports.LOGICAL_OPERATORS=["||","&&"],UPDATE_OPERATORS=exports.UPDATE_OPERATORS=["++","--"],BOOLEAN_NUMBER_BINARY_OPERATORS=exports.BOOLEAN_NUMBER_BINARY_OPERATORS=[">","<",">=","<="],EQUALITY_BINARY_OPERATORS=exports.EQUALITY_BINARY_OPERATORS=["==","===","!=","!=="],COMPARISON_BINARY_OPERATORS=exports.COMPARISON_BINARY_OPERATORS=[].concat(EQUALITY_BINARY_OPERATORS,["in","instanceof"]),BOOLEAN_BINARY_OPERATORS=exports.BOOLEAN_BINARY_OPERATORS=[].concat(COMPARISON_BINARY_OPERATORS,BOOLEAN_NUMBER_BINARY_OPERATORS),NUMBER_BINARY_OPERATORS=exports.NUMBER_BINARY_OPERATORS=["-","/","%","*","**","&","|",">>",">>>","<<","^"],BINARY_OPERATORS=exports.BINARY_OPERATORS=["+"].concat(NUMBER_BINARY_OPERATORS,BOOLEAN_BINARY_OPERATORS),BOOLEAN_UNARY_OPERATORS=exports.BOOLEAN_UNARY_OPERATORS=["delete","!"],NUMBER_UNARY_OPERATORS=exports.NUMBER_UNARY_OPERATORS=["+","-","++","--","~"],STRING_UNARY_OPERATORS=exports.STRING_UNARY_OPERATORS=["typeof"],UNARY_OPERATORS=exports.UNARY_OPERATORS=["void"].concat(BOOLEAN_UNARY_OPERATORS,NUMBER_UNARY_OPERATORS,STRING_UNARY_OPERATORS),INHERIT_KEYS=exports.INHERIT_KEYS={optional:["typeAnnotation","typeParameters","returnType"],force:["start","loc","end"]},BLOCK_SCOPED_SYMBOL=exports.BLOCK_SCOPED_SYMBOL=(0,_for2.default)("var used to be block scoped"),NOT_LOCAL_BINDING=exports.NOT_LOCAL_BINDING=(0,_for2.default)("should not be considered a local binding");

/***/ },

/***/ "./node_modules/babel-runtime/core-js/symbol/for.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports={default:__webpack_require__("./node_modules/core-js/library/fn/symbol/for.js"),__esModule:!0};

/***/ },

/***/ "./node_modules/core-js/library/fn/symbol/for.js":
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js"),module.exports=__webpack_require__("./node_modules/core-js/library/modules/_core.js").Symbol.for;

/***/ },

/***/ "./node_modules/babel-types/lib/retrievers.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i.default=e,i}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getBindingIdentifiers(e,i,r){for(var n=[].concat(e),a=(0,_create2.default)(null);n.length;){var s=n.shift();if(s){var o=t.getBindingIdentifiers.keys[s.type];if(t.isIdentifier(s))if(i){var l=a[s.name]=a[s.name]||[];l.push(s)}else a[s.name]=s;else if(t.isExportDeclaration(s))t.isDeclaration(s.declaration)&&n.push(s.declaration);else{if(r){if(t.isFunctionDeclaration(s)){n.push(s.id);continue}if(t.isFunctionExpression(s))continue}if(o)for(var c=0;c<o.length;c++){var d=o[c];s[d]&&(n=n.concat(s[d]))}}}}return a}function getOuterBindingIdentifiers(e,i){return getBindingIdentifiers(e,i,!0)}exports.__esModule=!0;var _create=__webpack_require__("./node_modules/babel-runtime/core-js/object/create.js"),_create2=_interopRequireDefault(_create);exports.getBindingIdentifiers=getBindingIdentifiers,exports.getOuterBindingIdentifiers=getOuterBindingIdentifiers;var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index);getBindingIdentifiers.keys={DeclareClass:["id"],DeclareFunction:["id"],DeclareModule:["id"],DeclareVariable:["id"],InterfaceDeclaration:["id"],TypeAlias:["id"],CatchClause:["param"],LabeledStatement:["label"],UnaryExpression:["argument"],AssignmentExpression:["left"],ImportSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportDefaultSpecifier:["local"],ImportDeclaration:["specifiers"],ExportSpecifier:["exported"],ExportNamespaceSpecifier:["exported"],ExportDefaultSpecifier:["exported"],FunctionDeclaration:["id","params"],FunctionExpression:["id","params"],ClassDeclaration:["id"],ClassExpression:["id"],RestElement:["argument"],UpdateExpression:["argument"],RestProperty:["argument"],ObjectProperty:["value"],AssignmentPattern:["left"],ArrayPattern:["elements"],ObjectPattern:["properties"],VariableDeclaration:["declarations"],VariableDeclarator:["id"]};

/***/ },

/***/ "./node_modules/babel-types/lib/validators.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function isBinding(e,r){var t=_retrievers.getBindingIdentifiers.keys[r.type];if(t)for(var i=0;i<t.length;i++){var n=t[i],s=r[n];if(Array.isArray(s)){if(s.indexOf(e)>=0)return!0}else if(s===e)return!0}return!1}function isReferenced(e,r){switch(r.type){case"BindExpression":return r.object===e||r.callee===e;case"MemberExpression":case"JSXMemberExpression":return!(r.property!==e||!r.computed)||r.object===e;case"MetaProperty":return!1;case"ObjectProperty":if(r.key===e)return r.computed;case"VariableDeclarator":return r.id!==e;case"ArrowFunctionExpression":case"FunctionDeclaration":case"FunctionExpression":for(var t=r.params,i=Array.isArray(t),n=0,t=i?t:(0,_getIterator3.default)(t);;){var s;if(i){if(n>=t.length)break;s=t[n++]}else{if(n=t.next(),n.done)break;s=n.value}var a=s;if(a===e)return!1}return r.id!==e;case"ExportSpecifier":return!r.source&&r.local===e;case"ExportNamespaceSpecifier":case"ExportDefaultSpecifier":return!1;case"JSXAttribute":return r.name!==e;case"ClassProperty":return r.key===e?r.computed:r.value===e;case"ImportDefaultSpecifier":case"ImportNamespaceSpecifier":case"ImportSpecifier":return!1;case"ClassDeclaration":case"ClassExpression":return r.id!==e;case"ClassMethod":case"ObjectMethod":return r.key===e&&r.computed;case"LabeledStatement":return!1;case"CatchClause":return r.param!==e;case"RestElement":return!1;case"AssignmentExpression":return r.right===e;case"AssignmentPattern":return r.right===e;case"ObjectPattern":case"ArrayPattern":return!1}return!0}function isValidIdentifier(e){return"string"==typeof e&&!_esutils2.default.keyword.isReservedWordES6(e,!0)&&_esutils2.default.keyword.isIdentifierNameES6(e)}function isLet(e){return t.isVariableDeclaration(e)&&("var"!==e.kind||e[_constants.BLOCK_SCOPED_SYMBOL])}function isBlockScoped(e){return t.isFunctionDeclaration(e)||t.isClassDeclaration(e)||t.isLet(e)}function isVar(e){return t.isVariableDeclaration(e,{kind:"var"})&&!e[_constants.BLOCK_SCOPED_SYMBOL]}function isSpecifierDefault(e){return t.isImportDefaultSpecifier(e)||t.isIdentifier(e.imported||e.exported,{name:"default"})}function isScope(e,r){return(!t.isBlockStatement(e)||!t.isFunction(r,{body:e}))&&t.isScopable(e)}function isImmutable(e){return!!t.isType(e.type,"Immutable")||!!t.isIdentifier(e)&&"undefined"===e.name}function isNodesEquivalent(e,r){if("object"!==("undefined"==typeof e?"undefined":(0,_typeof3.default)(e))||"object"!==("undefined"==typeof e?"undefined":(0,_typeof3.default)(e))||null==e||null==r)return e===r;if(e.type!==r.type)return!1;for(var i=(0,_keys2.default)(t.NODE_FIELDS[e.type]||e.type),n=i,s=Array.isArray(n),a=0,n=s?n:(0,_getIterator3.default)(n);;){var u;if(s){if(a>=n.length)break;u=n[a++]}else{if(a=n.next(),a.done)break;u=a.value}var o=u;if((0,_typeof3.default)(e[o])!==(0,_typeof3.default)(r[o]))return!1;if(Array.isArray(e[o])){if(!Array.isArray(r[o]))return!1;if(e[o].length!==r[o].length)return!1;for(var c=0;c<e[o].length;c++)if(!isNodesEquivalent(e[o][c],r[o][c]))return!1}else if(!isNodesEquivalent(e[o],r[o]))return!1}return!0}exports.__esModule=!0;var _keys=__webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js"),_keys2=_interopRequireDefault(_keys),_typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.isBinding=isBinding,exports.isReferenced=isReferenced,exports.isValidIdentifier=isValidIdentifier,exports.isLet=isLet,exports.isBlockScoped=isBlockScoped,exports.isVar=isVar,exports.isSpecifierDefault=isSpecifierDefault,exports.isScope=isScope,exports.isImmutable=isImmutable,exports.isNodesEquivalent=isNodesEquivalent;var _retrievers=__webpack_require__("./node_modules/babel-types/lib/retrievers.js"),_esutils=__webpack_require__("./node_modules/esutils/lib/utils.js"),_esutils2=_interopRequireDefault(_esutils),_index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index),_constants=__webpack_require__("./node_modules/babel-types/lib/constants.js");

/***/ },

/***/ "./node_modules/esutils/lib/utils.js":
/***/ function(module, exports, __webpack_require__) {

	!function(){"use strict";exports.ast=__webpack_require__("./node_modules/esutils/lib/ast.js"),exports.code=__webpack_require__("./node_modules/esutils/lib/code.js"),exports.keyword=__webpack_require__("./node_modules/esutils/lib/keyword.js")}();

/***/ },

/***/ "./node_modules/esutils/lib/ast.js":
/***/ function(module, exports) {

	!function(){"use strict";function e(e){if(null==e)return!1;switch(e.type){case"ArrayExpression":case"AssignmentExpression":case"BinaryExpression":case"CallExpression":case"ConditionalExpression":case"FunctionExpression":case"Identifier":case"Literal":case"LogicalExpression":case"MemberExpression":case"NewExpression":case"ObjectExpression":case"SequenceExpression":case"ThisExpression":case"UnaryExpression":case"UpdateExpression":return!0}return!1}function t(e){if(null==e)return!1;switch(e.type){case"DoWhileStatement":case"ForInStatement":case"ForStatement":case"WhileStatement":return!0}return!1}function n(e){if(null==e)return!1;switch(e.type){case"BlockStatement":case"BreakStatement":case"ContinueStatement":case"DebuggerStatement":case"DoWhileStatement":case"EmptyStatement":case"ExpressionStatement":case"ForInStatement":case"ForStatement":case"IfStatement":case"LabeledStatement":case"ReturnStatement":case"SwitchStatement":case"ThrowStatement":case"TryStatement":case"VariableDeclaration":case"WhileStatement":case"WithStatement":return!0}return!1}function a(e){return n(e)||null!=e&&"FunctionDeclaration"===e.type}function s(e){switch(e.type){case"IfStatement":return null!=e.alternate?e.alternate:e.consequent;case"LabeledStatement":case"ForStatement":case"ForInStatement":case"WhileStatement":case"WithStatement":return e.body}return null}function r(e){var t;if("IfStatement"!==e.type)return!1;if(null==e.alternate)return!1;t=e.consequent;do{if("IfStatement"===t.type&&null==t.alternate)return!0;t=s(t)}while(t);return!1}module.exports={isExpression:e,isStatement:n,isIterationStatement:t,isSourceElement:a,isProblematicIfStatement:r,trailingStatement:s}}();

/***/ },

/***/ "./node_modules/esutils/lib/code.js":
/***/ function(module, exports) {

	!function(){"use strict";function u(u){return 48<=u&&u<=57}function D(u){return 48<=u&&u<=57||97<=u&&u<=102||65<=u&&u<=70}function A(u){return u>=48&&u<=55}function F(u){return 32===u||9===u||11===u||12===u||160===u||u>=5760&&x.indexOf(u)>=0}function C(u){return 10===u||13===u||8232===u||8233===u}function E(u){if(u<=65535)return String.fromCharCode(u);var D=String.fromCharCode(Math.floor((u-65536)/1024)+55296),A=String.fromCharCode((u-65536)%1024+56320);return D+A}function B(u){return u<128?o[u]:e.NonAsciiIdentifierStart.test(E(u))}function i(u){return u<128?f[u]:e.NonAsciiIdentifierPart.test(E(u))}function t(u){return u<128?o[u]:n.NonAsciiIdentifierStart.test(E(u))}function r(u){return u<128?f[u]:n.NonAsciiIdentifierPart.test(E(u))}var n,e,x,o,f,a;for(e={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,NonAsciiIdentifierPart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/},n={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},x=[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],o=new Array(128),a=0;a<128;++a)o[a]=a>=97&&a<=122||a>=65&&a<=90||36===a||95===a;for(f=new Array(128),a=0;a<128;++a)f[a]=a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||36===a||95===a;module.exports={isDecimalDigit:u,isHexDigit:D,isOctalDigit:A,isWhiteSpace:F,isLineTerminator:C,isIdentifierStartES5:B,isIdentifierPartES5:i,isIdentifierStartES6:t,isIdentifierPartES6:r}}();

/***/ },

/***/ "./node_modules/esutils/lib/keyword.js":
/***/ function(module, exports, __webpack_require__) {

	!function(){"use strict";function e(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"let":return!0;default:return!1}}function r(e,r){return!(!r&&"yield"===e)&&t(e,r)}function t(r,t){if(t&&e(r))return!0;switch(r.length){case 2:return"if"===r||"in"===r||"do"===r;case 3:return"var"===r||"for"===r||"new"===r||"try"===r;case 4:return"this"===r||"else"===r||"case"===r||"void"===r||"with"===r||"enum"===r;case 5:return"while"===r||"break"===r||"catch"===r||"throw"===r||"const"===r||"yield"===r||"class"===r||"super"===r;case 6:return"return"===r||"typeof"===r||"delete"===r||"switch"===r||"export"===r||"import"===r;case 7:return"default"===r||"finally"===r||"extends"===r;case 8:return"function"===r||"continue"===r||"debugger"===r;case 10:return"instanceof"===r;default:return!1}}function n(e,t){return"null"===e||"true"===e||"false"===e||r(e,t)}function i(e,r){return"null"===e||"true"===e||"false"===e||t(e,r)}function u(e){return"eval"===e||"arguments"===e}function s(e){var r,t,n;if(0===e.length)return!1;if(n=e.charCodeAt(0),!d.isIdentifierStartES5(n))return!1;for(r=1,t=e.length;r<t;++r)if(n=e.charCodeAt(r),!d.isIdentifierPartES5(n))return!1;return!0}function c(e,r){return 1024*(e-55296)+(r-56320)+65536}function a(e){var r,t,n,i,u;if(0===e.length)return!1;for(u=d.isIdentifierStartES6,r=0,t=e.length;r<t;++r){if(n=e.charCodeAt(r),55296<=n&&n<=56319){if(++r,r>=t)return!1;if(i=e.charCodeAt(r),!(56320<=i&&i<=57343))return!1;n=c(n,i)}if(!u(n))return!1;u=d.isIdentifierPartES6}return!0}function f(e,r){return s(e)&&!n(e,r)}function o(e,r){return a(e)&&!i(e,r)}var d=__webpack_require__("./node_modules/esutils/lib/code.js");module.exports={isKeywordES5:r,isKeywordES6:t,isReservedWordES5:n,isReservedWordES6:i,isRestrictedWord:u,isIdentifierNameES5:s,isIdentifierNameES6:a,isIdentifierES5:f,isIdentifierES6:o}}();

/***/ },

/***/ "./node_modules/babel-types/lib/converters.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function toComputedKey(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.key||e.property;return e.computed||t.isIdentifier(i)&&(i=t.stringLiteral(i.name)),i}function toSequenceExpression(e,i){function r(e){for(var s=!1,a=[],u=e,l=Array.isArray(u),f=0,u=l?u:(0,_getIterator3.default)(u);;){var d;if(l){if(f>=u.length)break;d=u[f++]}else{if(f=u.next(),f.done)break;d=f.value}var p=d;if(t.isExpression(p))a.push(p);else if(t.isExpressionStatement(p))a.push(p.expression);else{if(t.isVariableDeclaration(p)){if("var"!==p.kind)return o=!0;for(var c=p.declarations,x=Array.isArray(c),m=0,c=x?c:(0,_getIterator3.default)(c);;){var g;if(x){if(m>=c.length)break;g=c[m++]}else{if(m=c.next(),m.done)break;g=m.value}var y=g,_=t.getBindingIdentifiers(y);for(var v in _)n.push({kind:p.kind,id:_[v]});y.init&&a.push(t.assignmentExpression("=",y.id,y.init))}s=!0;continue}if(t.isIfStatement(p)){var E=p.consequent?r([p.consequent]):i.buildUndefinedNode(),b=p.alternate?r([p.alternate]):i.buildUndefinedNode();if(!E||!b)return o=!0;a.push(t.conditionalExpression(p.test,E,b))}else{if(!t.isBlockStatement(p)){if(t.isEmptyStatement(p)){s=!0;continue}return o=!0}a.push(r(p.body))}}s=!1}return(s||0===a.length)&&a.push(i.buildUndefinedNode()),1===a.length?a[0]:t.sequenceExpression(a)}if(e&&e.length){var n=[],o=!1,s=r(e);if(!o){for(var a=0;a<n.length;a++)i.push(n[a]);return s}}}function toKeyAlias(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.key,r=void 0;return"method"===e.kind?toKeyAlias.increment()+"":(r=t.isIdentifier(i)?i.name:t.isStringLiteral(i)?(0,_stringify2.default)(i.value):(0,_stringify2.default)(t.removePropertiesDeep(t.cloneDeep(i))),e.computed&&(r="["+r+"]"),e.static&&(r="static:"+r),r)}function toIdentifier(e){return e+="",e=e.replace(/[^a-zA-Z0-9$_]/g,"-"),e=e.replace(/^[-0-9]+/,""),e=e.replace(/[-\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),t.isValidIdentifier(e)||(e="_"+e),e||"_"}function toBindingIdentifierName(e){return e=toIdentifier(e),"eval"!==e&&"arguments"!==e||(e="_"+e),e}function toStatement(e,i){if(t.isStatement(e))return e;var r=!1,n=void 0;if(t.isClass(e))r=!0,n="ClassDeclaration";else if(t.isFunction(e))r=!0,n="FunctionDeclaration";else if(t.isAssignmentExpression(e))return t.expressionStatement(e);if(r&&!e.id&&(n=!1),!n){if(i)return!1;throw new Error("cannot turn "+e.type+" to a statement")}return e.type=n,e}function toExpression(e){if(t.isExpressionStatement(e)&&(e=e.expression),t.isExpression(e))return e;if(t.isClass(e)?e.type="ClassExpression":t.isFunction(e)&&(e.type="FunctionExpression"),!t.isExpression(e))throw new Error("cannot turn "+e.type+" to an expression");return e}function toBlock(e,i){return t.isBlockStatement(e)?e:(t.isEmptyStatement(e)&&(e=[]),Array.isArray(e)||(t.isStatement(e)||(e=t.isFunction(i)?t.returnStatement(e):t.expressionStatement(e)),e=[e]),t.blockStatement(e))}function valueToNode(e){if(void 0===e)return t.identifier("undefined");if(e===!0||e===!1)return t.booleanLiteral(e);if(null===e)return t.nullLiteral();if("string"==typeof e)return t.stringLiteral(e);if("number"==typeof e)return t.numericLiteral(e);if((0,_isRegExp2.default)(e)){var i=e.source,r=e.toString().match(/\/([a-z]+|)$/)[1];return t.regExpLiteral(i,r)}if(Array.isArray(e))return t.arrayExpression(e.map(t.valueToNode));if((0,_isPlainObject2.default)(e)){var n=[];for(var o in e){var s=void 0;s=t.isValidIdentifier(o)?t.identifier(o):t.stringLiteral(o),n.push(t.objectProperty(s,t.valueToNode(e[o])))}return t.objectExpression(n)}throw new Error("don't know how to turn this value into a node")}exports.__esModule=!0;var _maxSafeInteger=__webpack_require__("./node_modules/babel-runtime/core-js/number/max-safe-integer.js"),_maxSafeInteger2=_interopRequireDefault(_maxSafeInteger),_stringify=__webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js"),_stringify2=_interopRequireDefault(_stringify),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.toComputedKey=toComputedKey,exports.toSequenceExpression=toSequenceExpression,exports.toKeyAlias=toKeyAlias,exports.toIdentifier=toIdentifier,exports.toBindingIdentifierName=toBindingIdentifierName,exports.toStatement=toStatement,exports.toExpression=toExpression,exports.toBlock=toBlock,exports.valueToNode=valueToNode;var _isPlainObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isPlainObject.js"),_isPlainObject2=_interopRequireDefault(_isPlainObject),_isRegExp=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isRegExp.js"),_isRegExp2=_interopRequireDefault(_isRegExp),_index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index);toKeyAlias.uid=0,toKeyAlias.increment=function(){return toKeyAlias.uid>=_maxSafeInteger2.default?toKeyAlias.uid=0:toKeyAlias.uid++};

/***/ },

/***/ "./node_modules/babel-runtime/core-js/number/max-safe-integer.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports={default:__webpack_require__("./node_modules/core-js/library/fn/number/max-safe-integer.js"),__esModule:!0};

/***/ },

/***/ "./node_modules/core-js/library/fn/number/max-safe-integer.js":
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.number.max-safe-integer.js"),module.exports=9007199254740991;

/***/ },

/***/ "./node_modules/core-js/library/modules/es6.number.max-safe-integer.js":
/***/ function(module, exports, __webpack_require__) {

	var $export=__webpack_require__("./node_modules/core-js/library/modules/_export.js");$export($export.S,"Number",{MAX_SAFE_INTEGER:9007199254740991});

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isPlainObject.js":
/***/ function(module, exports, __webpack_require__) {

	function isPlainObject(t){if(!isObjectLike(t)||baseGetTag(t)!=objectTag)return!1;var e=getPrototype(t);if(null===e)return!0;var o=hasOwnProperty.call(e,"constructor")&&e.constructor;return"function"==typeof o&&o instanceof o&&funcToString.call(o)==objectCtorString}var baseGetTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseGetTag.js"),getPrototype=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getPrototype.js"),isObjectLike=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObjectLike.js"),objectTag="[object Object]",funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectCtorString=funcToString.call(Object);module.exports=isPlainObject;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseGetTag.js":
/***/ function(module, exports, __webpack_require__) {

	function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}var Symbol=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Symbol.js"),getRawTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getRawTag.js"),objectToString=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_objectToString.js"),nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol?Symbol.toStringTag:void 0;module.exports=baseGetTag;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_Symbol.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),Symbol=root.Symbol;module.exports=Symbol;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_root.js":
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_freeGlobal.js"),freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();module.exports=root;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_freeGlobal.js":
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global;module.exports=freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getRawTag.js":
/***/ function(module, exports, __webpack_require__) {

	function getRawTag(t){var o=hasOwnProperty.call(t,symToStringTag),r=t[symToStringTag];try{t[symToStringTag]=void 0;var a=!0}catch(t){}var e=nativeObjectToString.call(t);return a&&(o?t[symToStringTag]=r:delete t[symToStringTag]),e}var Symbol=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Symbol.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=Symbol?Symbol.toStringTag:void 0;module.exports=getRawTag;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_objectToString.js":
/***/ function(module, exports) {

	function objectToString(t){return nativeObjectToString.call(t)}var objectProto=Object.prototype,nativeObjectToString=objectProto.toString;module.exports=objectToString;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getPrototype.js":
/***/ function(module, exports, __webpack_require__) {

	var overArg=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_overArg.js"),getPrototype=overArg(Object.getPrototypeOf,Object);module.exports=getPrototype;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_overArg.js":
/***/ function(module, exports) {

	function overArg(r,e){return function(n){return r(e(n))}}module.exports=overArg;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isObjectLike.js":
/***/ function(module, exports) {

	function isObjectLike(e){return null!=e&&"object"==typeof e}module.exports=isObjectLike;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isRegExp.js":
/***/ function(module, exports, __webpack_require__) {

	var baseIsRegExp=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseIsRegExp.js"),baseUnary=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseUnary.js"),nodeUtil=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_nodeUtil.js"),nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;module.exports=isRegExp;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseIsRegExp.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsRegExp(e){return isObjectLike(e)&&baseGetTag(e)==regexpTag}var baseGetTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObjectLike.js"),regexpTag="[object RegExp]";module.exports=baseIsRegExp;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseUnary.js":
/***/ function(module, exports) {

	function baseUnary(n){return function(r){return n(r)}}module.exports=baseUnary;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_nodeUtil.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_freeGlobal.js"),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}();module.exports=nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/babel-types/lib/flow.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function createUnionTypeAnnotation(e){var n=removeTypeDuplicates(e);return 1===n.length?n[0]:t.unionTypeAnnotation(n)}function removeTypeDuplicates(e){for(var n={},r={},i=[],o=[],a=0;a<e.length;a++){var p=e[a];if(p&&!(o.indexOf(p)>=0)){if(t.isAnyTypeAnnotation(p))return[p];if(t.isFlowBaseAnnotation(p))r[p.type]=p;else if(t.isUnionTypeAnnotation(p))i.indexOf(p.types)<0&&(e=e.concat(p.types),i.push(p.types));else if(t.isGenericTypeAnnotation(p)){var s=p.id.name;if(n[s]){var y=n[s];y.typeParameters?p.typeParameters&&(y.typeParameters.params=removeTypeDuplicates(y.typeParameters.params.concat(p.typeParameters.params))):y=p.typeParameters}else n[s]=p}else o.push(p)}}for(var u in r)o.push(r[u]);for(var f in n)o.push(n[f]);return o}function createTypeAnnotationBasedOnTypeof(e){if("string"===e)return t.stringTypeAnnotation();if("number"===e)return t.numberTypeAnnotation();if("undefined"===e)return t.voidTypeAnnotation();if("boolean"===e)return t.booleanTypeAnnotation();if("function"===e)return t.genericTypeAnnotation(t.identifier("Function"));if("object"===e)return t.genericTypeAnnotation(t.identifier("Object"));if("symbol"===e)return t.genericTypeAnnotation(t.identifier("Symbol"));throw new Error("Invalid typeof value")}exports.__esModule=!0,exports.createUnionTypeAnnotation=createUnionTypeAnnotation,exports.removeTypeDuplicates=removeTypeDuplicates,exports.createTypeAnnotationBasedOnTypeof=createTypeAnnotationBasedOnTypeof;var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index);

/***/ },

/***/ "./node_modules/to-fast-properties/index.js":
/***/ function(module, exports) {

	"use strict";module.exports=function t(o){function e(){}e.prototype=o,new e};

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/compact.js":
/***/ function(module, exports) {

	function compact(o){for(var r=-1,t=null==o?0:o.length,c=0,n=[];++r<t;){var a=o[r];a&&(n[c++]=a)}return n}module.exports=compact;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/clone.js":
/***/ function(module, exports, __webpack_require__) {

	function clone(e){return baseClone(e,CLONE_SYMBOLS_FLAG)}var baseClone=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseClone.js"),CLONE_SYMBOLS_FLAG=4;module.exports=clone;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseClone.js":
/***/ function(module, exports, __webpack_require__) {

	function baseClone(e,a,r,n,g,o){var t,l=a&CLONE_DEEP_FLAG,i=a&CLONE_FLAT_FLAG,s=a&CLONE_SYMBOLS_FLAG;if(r&&(t=g?r(e,n,g,o):r(e)),void 0!==t)return t;if(!isObject(e))return e;var T=isArray(e);if(T){if(t=initCloneArray(e),!l)return copyArray(e,t)}else{var c=getTag(e),b=c==funcTag||c==genTag;if(isBuffer(e))return cloneBuffer(e,l);if(c==objectTag||c==argsTag||b&&!g){if(t=i||b?{}:initCloneObject(e),!l)return i?copySymbolsIn(e,baseAssignIn(t,e)):copySymbols(e,baseAssign(t,e))}else{if(!cloneableTags[c])return g?e:{};t=initCloneByTag(e,c,baseClone,l)}}o||(o=new Stack);var u=o.get(e);if(u)return u;o.set(e,t);var y=s?i?getAllKeysIn:getAllKeys:i?keysIn:keys,A=T?void 0:y(e);return arrayEach(A||e,function(n,g){A&&(g=n,n=e[g]),assignValue(t,g,baseClone(n,a,r,g,e,o))}),t}var Stack=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Stack.js"),arrayEach=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayEach.js"),assignValue=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_assignValue.js"),baseAssign=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseAssign.js"),baseAssignIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseAssignIn.js"),cloneBuffer=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneBuffer.js"),copyArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_copyArray.js"),copySymbols=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_copySymbols.js"),copySymbolsIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_copySymbolsIn.js"),getAllKeys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getAllKeys.js"),getAllKeysIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getAllKeysIn.js"),getTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getTag.js"),initCloneArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_initCloneArray.js"),initCloneByTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_initCloneByTag.js"),initCloneObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_initCloneObject.js"),isArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isArray.js"),isBuffer=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isBuffer.js"),isObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObject.js"),keys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/keys.js"),CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4,argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=!1,module.exports=baseClone;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_Stack.js":
/***/ function(module, exports, __webpack_require__) {

	function Stack(t){var e=this.__data__=new ListCache(t);this.size=e.size}var ListCache=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_ListCache.js"),stackClear=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_stackClear.js"),stackDelete=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_stackDelete.js"),stackGet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_stackGet.js"),stackHas=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_stackHas.js"),stackSet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_stackSet.js");Stack.prototype.clear=stackClear,Stack.prototype.delete=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet,module.exports=Stack;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_ListCache.js":
/***/ function(module, exports, __webpack_require__) {

	function ListCache(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}var listCacheClear=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_listCacheClear.js"),listCacheDelete=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_listCacheDelete.js"),listCacheGet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_listCacheGet.js"),listCacheHas=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_listCacheHas.js"),listCacheSet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_listCacheSet.js");ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,module.exports=ListCache;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_listCacheClear.js":
/***/ function(module, exports) {

	function listCacheClear(){this.__data__=[],this.size=0}module.exports=listCacheClear;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_listCacheDelete.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheDelete(e){var r=this.__data__,a=assocIndexOf(r,e);if(a<0)return!1;var t=r.length-1;return a==t?r.pop():splice.call(r,a,1),--this.size,!0}var assocIndexOf=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_assocIndexOf.js"),arrayProto=Array.prototype,splice=arrayProto.splice;module.exports=listCacheDelete;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_assocIndexOf.js":
/***/ function(module, exports, __webpack_require__) {

	function assocIndexOf(e,r){for(var n=e.length;n--;)if(eq(e[n][0],r))return n;return-1}var eq=__webpack_require__("./node_modules/babel-types/node_modules/lodash/eq.js");module.exports=assocIndexOf;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/eq.js":
/***/ function(module, exports) {

	function eq(e,n){return e===n||e!==e&&n!==n}module.exports=eq;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_listCacheGet.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheGet(e){var s=this.__data__,a=assocIndexOf(s,e);return a<0?void 0:s[a][1]}var assocIndexOf=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_assocIndexOf.js");module.exports=listCacheGet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_listCacheHas.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheHas(s){return assocIndexOf(this.__data__,s)>-1}var assocIndexOf=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_assocIndexOf.js");module.exports=listCacheHas;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_listCacheSet.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheSet(s,e){var t=this.__data__,a=assocIndexOf(t,s);return a<0?(++this.size,t.push([s,e])):t[a][1]=e,this}var assocIndexOf=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_assocIndexOf.js");module.exports=listCacheSet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_stackClear.js":
/***/ function(module, exports, __webpack_require__) {

	function stackClear(){this.__data__=new ListCache,this.size=0}var ListCache=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_ListCache.js");module.exports=stackClear;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_stackDelete.js":
/***/ function(module, exports) {

	function stackDelete(e){var t=this.__data__,s=t.delete(e);return this.size=t.size,s}module.exports=stackDelete;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_stackGet.js":
/***/ function(module, exports) {

	function stackGet(t){return this.__data__.get(t)}module.exports=stackGet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_stackHas.js":
/***/ function(module, exports) {

	function stackHas(a){return this.__data__.has(a)}module.exports=stackHas;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_stackSet.js":
/***/ function(module, exports, __webpack_require__) {

	function stackSet(e,a){var t=this.__data__;if(t instanceof ListCache){var i=t.__data__;if(!Map||i.length<LARGE_ARRAY_SIZE-1)return i.push([e,a]),this.size=++t.size,this;t=this.__data__=new MapCache(i)}return t.set(e,a),this.size=t.size,this}var ListCache=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_ListCache.js"),Map=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Map.js"),MapCache=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_MapCache.js"),LARGE_ARRAY_SIZE=200;module.exports=stackSet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_Map.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),Map=getNative(root,"Map");module.exports=Map;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getNative.js":
/***/ function(module, exports, __webpack_require__) {

	function getNative(e,a){var t=getValue(e,a);return baseIsNative(t)?t:void 0}var baseIsNative=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseIsNative.js"),getValue=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getValue.js");module.exports=getNative;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseIsNative.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var r=isFunction(e)?reIsNative:reIsHostCtor;return r.test(toSource(e))}var isFunction=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isFunction.js"),isMasked=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_isMasked.js"),isObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObject.js"),toSource=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_toSource.js"),reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");module.exports=baseIsNative;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isFunction.js":
/***/ function(module, exports, __webpack_require__) {

	function isFunction(e){if(!isObject(e))return!1;var n=baseGetTag(e);return n==funcTag||n==genTag||n==asyncTag||n==proxyTag}var baseGetTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseGetTag.js"),isObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObject.js"),asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";module.exports=isFunction;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isObject.js":
/***/ function(module, exports) {

	function isObject(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}module.exports=isObject;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_isMasked.js":
/***/ function(module, exports, __webpack_require__) {

	function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var coreJsData=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_coreJsData.js"),maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();module.exports=isMasked;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_coreJsData.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),coreJsData=root["__core-js_shared__"];module.exports=coreJsData;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_toSource.js":
/***/ function(module, exports) {

	function toSource(t){if(null!=t){try{return funcToString.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var funcProto=Function.prototype,funcToString=funcProto.toString;module.exports=toSource;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getValue.js":
/***/ function(module, exports) {

	function getValue(e,u){return null==e?void 0:e[u]}module.exports=getValue;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_MapCache.js":
/***/ function(module, exports, __webpack_require__) {

	function MapCache(e){var a=-1,p=null==e?0:e.length;for(this.clear();++a<p;){var t=e[a];this.set(t[0],t[1])}}var mapCacheClear=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_mapCacheClear.js"),mapCacheDelete=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_mapCacheDelete.js"),mapCacheGet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_mapCacheGet.js"),mapCacheHas=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_mapCacheHas.js"),mapCacheSet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_mapCacheSet.js");MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,module.exports=MapCache;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_mapCacheClear.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}var Hash=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Hash.js"),ListCache=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_ListCache.js"),Map=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Map.js");module.exports=mapCacheClear;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_Hash.js":
/***/ function(module, exports, __webpack_require__) {

	function Hash(e){var h=-1,a=null==e?0:e.length;for(this.clear();++h<a;){var s=e[h];this.set(s[0],s[1])}}var hashClear=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_hashClear.js"),hashDelete=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_hashDelete.js"),hashGet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_hashGet.js"),hashHas=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_hashHas.js"),hashSet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_hashSet.js");Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,module.exports=Hash;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_hashClear.js":
/***/ function(module, exports, __webpack_require__) {

	function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{},this.size=0}var nativeCreate=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_nativeCreate.js");module.exports=hashClear;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_nativeCreate.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getNative.js"),nativeCreate=getNative(Object,"create");module.exports=nativeCreate;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_hashDelete.js":
/***/ function(module, exports) {

	function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}module.exports=hashDelete;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_hashGet.js":
/***/ function(module, exports, __webpack_require__) {

	function hashGet(e){var t=this.__data__;if(nativeCreate){var r=t[e];return r===HASH_UNDEFINED?void 0:r}return hasOwnProperty.call(t,e)?t[e]:void 0}var nativeCreate=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_nativeCreate.js"),HASH_UNDEFINED="__lodash_hash_undefined__",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=hashGet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_hashHas.js":
/***/ function(module, exports, __webpack_require__) {

	function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}var nativeCreate=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_nativeCreate.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=hashHas;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_hashSet.js":
/***/ function(module, exports, __webpack_require__) {

	function hashSet(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=nativeCreate&&void 0===t?HASH_UNDEFINED:t,this}var nativeCreate=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_nativeCreate.js"),HASH_UNDEFINED="__lodash_hash_undefined__";module.exports=hashSet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_mapCacheDelete.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheDelete(e){var a=getMapData(this,e).delete(e);return this.size-=a?1:0,a}var getMapData=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getMapData.js");module.exports=mapCacheDelete;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getMapData.js":
/***/ function(module, exports, __webpack_require__) {

	function getMapData(a,e){var t=a.__data__;return isKeyable(e)?t["string"==typeof e?"string":"hash"]:t.map}var isKeyable=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_isKeyable.js");module.exports=getMapData;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_isKeyable.js":
/***/ function(module, exports) {

	function isKeyable(e){var o=typeof e;return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e}module.exports=isKeyable;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_mapCacheGet.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheGet(a){return getMapData(this,a).get(a)}var getMapData=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getMapData.js");module.exports=mapCacheGet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_mapCacheHas.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheHas(a){return getMapData(this,a).has(a)}var getMapData=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getMapData.js");module.exports=mapCacheHas;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_mapCacheSet.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheSet(e,a){var t=getMapData(this,e),i=t.size;return t.set(e,a),this.size+=t.size==i?0:1,this}var getMapData=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getMapData.js");module.exports=mapCacheSet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_arrayEach.js":
/***/ function(module, exports) {

	function arrayEach(r,a){for(var n=-1,e=null==r?0:r.length;++n<e&&a(r[n],n,r)!==!1;);return r}module.exports=arrayEach;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_assignValue.js":
/***/ function(module, exports, __webpack_require__) {

	function assignValue(e,s,a){var r=e[s];hasOwnProperty.call(e,s)&&eq(r,a)&&(void 0!==a||s in e)||baseAssignValue(e,s,a)}var baseAssignValue=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/babel-types/node_modules/lodash/eq.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=assignValue;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseAssignValue.js":
/***/ function(module, exports, __webpack_require__) {

	function baseAssignValue(e,r,i){"__proto__"==r&&defineProperty?defineProperty(e,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[r]=i}var defineProperty=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_defineProperty.js");module.exports=baseAssignValue;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_defineProperty.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getNative.js"),defineProperty=function(){try{var e=getNative(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();module.exports=defineProperty;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseAssign.js":
/***/ function(module, exports, __webpack_require__) {

	function baseAssign(e,s){return e&&copyObject(s,keys(s),e)}var copyObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_copyObject.js"),keys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/keys.js");module.exports=baseAssign;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_copyObject.js":
/***/ function(module, exports, __webpack_require__) {

	function copyObject(e,a,s,r){var i=!s;s||(s={});for(var u=-1,n=a.length;++u<n;){var l=a[u],o=r?r(s[l],e[l],l,s,e):void 0;void 0===o&&(o=e[l]),i?baseAssignValue(s,l,o):assignValue(s,l,o)}return s}var assignValue=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_assignValue.js"),baseAssignValue=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseAssignValue.js");module.exports=copyObject;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/keys.js":
/***/ function(module, exports, __webpack_require__) {

	function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}var arrayLikeKeys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayLikeKeys.js"),baseKeys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseKeys.js"),isArrayLike=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isArrayLike.js");module.exports=keys;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_arrayLikeKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function arrayLikeKeys(e,r){var s=isArray(e),i=!s&&isArguments(e),t=!s&&!i&&isBuffer(e),a=!s&&!i&&!t&&isTypedArray(e),n=s||i||t||a,y=n?baseTimes(e.length,String):[],u=y.length;for(var o in e)!r&&!hasOwnProperty.call(e,o)||n&&("length"==o||t&&("offset"==o||"parent"==o)||a&&("buffer"==o||"byteLength"==o||"byteOffset"==o)||isIndex(o,u))||y.push(o);return y}var baseTimes=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseTimes.js"),isArguments=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isArray.js"),isBuffer=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isBuffer.js"),isIndex=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_isIndex.js"),isTypedArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isTypedArray.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=arrayLikeKeys;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseTimes.js":
/***/ function(module, exports) {

	function baseTimes(e,r){for(var s=-1,a=Array(e);++s<e;)a[s]=r(s);return a}module.exports=baseTimes;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isArguments.js":
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseIsArguments.js"),isObjectLike=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObjectLike.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,propertyIsEnumerable=objectProto.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")};module.exports=isArguments;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseIsArguments.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag}var baseGetTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObjectLike.js"),argsTag="[object Arguments]";module.exports=baseIsArguments;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isArray.js":
/***/ function(module, exports) {

	var isArray=Array.isArray;module.exports=isArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isBuffer.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),stubFalse=__webpack_require__("./node_modules/babel-types/node_modules/lodash/stubFalse.js"),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root.Buffer:void 0,nativeIsBuffer=Buffer?Buffer.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/stubFalse.js":
/***/ function(module, exports) {

	function stubFalse(){return!1}module.exports=stubFalse;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_isIndex.js":
/***/ function(module, exports) {

	function isIndex(e,n){return n=null==n?MAX_SAFE_INTEGER:n,!!n&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<n}var MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;module.exports=isIndex;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseIsTypedArray.js"),baseUnary=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseUnary.js"),nodeUtil=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_nodeUtil.js"),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseIsTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsTypedArray(a){return isObjectLike(a)&&isLength(a.length)&&!!typedArrayTags[baseGetTag(a)]}var baseGetTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseGetTag.js"),isLength=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isLength.js"),isObjectLike=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObjectLike.js"),argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1,module.exports=baseIsTypedArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isLength.js":
/***/ function(module, exports) {

	function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}var MAX_SAFE_INTEGER=9007199254740991;module.exports=isLength;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var r=[];for(var t in Object(e))hasOwnProperty.call(e,t)&&"constructor"!=t&&r.push(t);return r}var isPrototype=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_isPrototype.js"),nativeKeys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_nativeKeys.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseKeys;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_isPrototype.js":
/***/ function(module, exports) {

	function isPrototype(o){var t=o&&o.constructor,r="function"==typeof t&&t.prototype||objectProto;return o===r}var objectProto=Object.prototype;module.exports=isPrototype;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_nativeKeys.js":
/***/ function(module, exports, __webpack_require__) {

	var overArg=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_overArg.js"),nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/isArrayLike.js":
/***/ function(module, exports, __webpack_require__) {

	function isArrayLike(i){return null!=i&&isLength(i.length)&&!isFunction(i)}var isFunction=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isFunction.js"),isLength=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isLength.js");module.exports=isArrayLike;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseAssignIn.js":
/***/ function(module, exports, __webpack_require__) {

	function baseAssignIn(e,n){return e&&copyObject(n,keysIn(n),e)}var copyObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_copyObject.js"),keysIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/keysIn.js");module.exports=baseAssignIn;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/keysIn.js":
/***/ function(module, exports, __webpack_require__) {

	function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}var arrayLikeKeys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayLikeKeys.js"),baseKeysIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseKeysIn.js"),isArrayLike=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isArrayLike.js");module.exports=keysIn;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseKeysIn.js":
/***/ function(module, exports, __webpack_require__) {

	function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var r=isPrototype(e),t=[];for(var o in e)("constructor"!=o||!r&&hasOwnProperty.call(e,o))&&t.push(o);return t}var isObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObject.js"),isPrototype=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_isPrototype.js"),nativeKeysIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_nativeKeysIn.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseKeysIn;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_nativeKeysIn.js":
/***/ function(module, exports) {

	function nativeKeysIn(n){var e=[];if(null!=n)for(var r in Object(n))e.push(r);return e}module.exports=nativeKeysIn;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cloneBuffer.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {function cloneBuffer(e,o){if(o)return e.slice();var r=e.length,f=allocUnsafe?allocUnsafe(r):new e.constructor(r);return e.copy(f),f}var root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root.Buffer:void 0,allocUnsafe=Buffer?Buffer.allocUnsafe:void 0;module.exports=cloneBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_copyArray.js":
/***/ function(module, exports) {

	function copyArray(r,o){var y=-1,a=r.length;for(o||(o=Array(a));++y<a;)o[y]=r[y];return o}module.exports=copyArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_copySymbols.js":
/***/ function(module, exports, __webpack_require__) {

	function copySymbols(e,o){return copyObject(e,getSymbols(e),o)}var copyObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_copyObject.js"),getSymbols=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getSymbols.js");module.exports=copySymbols;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getSymbols.js":
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayFilter.js"),stubArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/stubArray.js"),objectProto=Object.prototype,propertyIsEnumerable=objectProto.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(r){return null==r?[]:(r=Object(r),arrayFilter(nativeGetSymbols(r),function(e){return propertyIsEnumerable.call(r,e)}))}:stubArray;module.exports=getSymbols;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_arrayFilter.js":
/***/ function(module, exports) {

	function arrayFilter(r,a){for(var e=-1,l=null==r?0:r.length,t=0,n=[];++e<l;){var o=r[e];a(o,e,r)&&(n[t++]=o)}return n}module.exports=arrayFilter;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/stubArray.js":
/***/ function(module, exports) {

	function stubArray(){return[]}module.exports=stubArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_copySymbolsIn.js":
/***/ function(module, exports, __webpack_require__) {

	function copySymbolsIn(e,o){return copyObject(e,getSymbolsIn(e),o)}var copyObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_copyObject.js"),getSymbolsIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getSymbolsIn.js");module.exports=copySymbolsIn;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getSymbolsIn.js":
/***/ function(module, exports, __webpack_require__) {

	var arrayPush=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayPush.js"),getPrototype=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getPrototype.js"),getSymbols=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getSymbols.js"),stubArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/stubArray.js"),nativeGetSymbols=Object.getOwnPropertySymbols,getSymbolsIn=nativeGetSymbols?function(r){for(var e=[];r;)arrayPush(e,getSymbols(r)),r=getPrototype(r);return e}:stubArray;module.exports=getSymbolsIn;

/***/ },

/***/ "./node_modules/eslint1/node_modules/eslint/lib/eslint.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function parseBooleanConfig(e,n){var t={};return e=e.replace(/\s*:\s*/g,":"),e=e.replace(/\s*,\s*/g,","),e.split(/\s|,+/).forEach(function(e){if(e){var r,s=e.indexOf(":");s!==-1&&(r=e.substring(s+1,e.length),e=e.substring(0,s)),t[e]={value:"true"===r,comment:n}}}),t}function parseJsonConfig(e,n,t){var r={};e=e.replace(/([a-zA-Z0-9\-\/]+):/g,'"$1":').replace(/(\]|[0-9])\s+(?=")/,"$1,");try{r=JSON.parse("{"+e+"}")}catch(r){t.push({fatal:!0,severity:2,message:"Failed to parse JSON from '"+e+"': "+r.message,line:n.start.line,column:n.start.column+1})}return r}function parseListConfig(e){var n={};return e=e.replace(/\s*,\s*/g,","),e.split(/,+/).forEach(function(e){e=e.trim(),e&&(n[e]=!0)}),n}function addDeclaredGlobals(e,n,t){var r={},s={},o={},i=environments.builtin;assign(r,i),Object.keys(t.env).forEach(function(e){if(t.env[e]){var n=environments[e]&&environments[e].globals;n&&assign(r,n)}}),assign(s,t.exported),assign(r,t.globals),assign(o,t.astGlobals),Object.keys(r).forEach(function(e){var t=n.set.get(e);t||(t=new escope.Variable(e,n),t.eslintExplicitGlobal=!1,n.variables.push(t),n.set.set(e,t)),t.writeable=r[e]}),Object.keys(o).forEach(function(e){var t=n.set.get(e);t||(t=new escope.Variable(e,n),t.eslintExplicitGlobal=!0,t.eslintExplicitGlobalComment=o[e].comment,n.variables.push(t),n.set.set(e,t)),t.writeable=o[e].value}),Object.keys(s).forEach(function(e){var t=n.set.get(e);t&&(t.eslintUsed=!0)})}function disableReporting(e,n,t){t.length?t.forEach(function(t){e.push({start:n,end:null,rule:t})}):e.push({start:n,end:null,rule:null})}function enableReporting(e,n,t){var r;if(t.length)t.forEach(function(t){for(r=e.length-1;r>=0;r--)if(!e[r].end&&e[r].rule===t){e[r].end=n;break}});else{var s;for(r=e.length-1;r>=0&&(!s||s===e[r].start);r--)e[r].end||(e[r].end=n,s=e[r].start)}}function modifyConfigsFromComments(e,n,t,r,s){var o={exported:{},astGlobals:{},rules:{},env:{}},i={};return n.comments.forEach(function(n){var t=n.value.trim(),a=/^(eslint-\w+|eslint-\w+-\w+|eslint|exported|globals?)(\s|$)/.exec(t);if(a)if(t=t.substring(a.index+a[1].length),"Block"===n.type)switch(a[1]){case"exported":assign(o.exported,parseBooleanConfig(t,n));break;case"globals":case"global":assign(o.astGlobals,parseBooleanConfig(t,n));break;case"eslint-env":assign(o.env,parseListConfig(t));break;case"eslint-disable":disableReporting(r,n.loc.start,Object.keys(parseListConfig(t)));break;case"eslint-enable":enableReporting(r,n.loc.start,Object.keys(parseListConfig(t)));break;case"eslint":var l=parseJsonConfig(t,n.loc,s);Object.keys(l).forEach(function(t){var r=l[t];validator.validateRuleOptions(t,r,e+" line "+n.loc.start.line),i[t]=r})}else"eslint-disable-line"===a[1]&&(disableReporting(r,{line:n.loc.start.line,column:0},Object.keys(parseListConfig(t))),enableReporting(r,n.loc.end,Object.keys(parseListConfig(t))))}),Object.keys(o.env).forEach(function(e){environments[e]&&(o=ConfigOps.merge(o,environments[e]))}),assign(o.rules,i),ConfigOps.merge(t,o)}function isDisabledByReportingConfig(e,n,t){for(var r=0,s=e.length;r<s;r++){var o=e[r];if((!o.rule||o.rule===n)&&(t.line>o.start.line||t.line===o.start.line&&t.column>=o.start.column)&&(!o.end||t.line<o.end.line||t.line===o.end.line&&t.column<=o.end.column))return!0}return!1}function prepareConfig(e){e.globals=e.globals||e.global||{},delete e.global;var n,t={},r={};return"object"==typeof e.rules&&Object.keys(e.rules).forEach(function(n){var r=e.rules[n];if(null===r)throw new Error("Invalid config for rule '"+n+"'.");Array.isArray(r)?t[n]=r.slice():t[n]=r}),"object"==typeof e.env&&Object.keys(e.env).forEach(function(n){e.env[n]&&environments[n]&&environments[n].ecmaFeatures&&assign(r,environments[n].ecmaFeatures)}),n={rules:t,parser:e.parser||DEFAULT_PARSER,globals:ConfigOps.merge({},e.globals),env:ConfigOps.merge({},e.env||{}),settings:ConfigOps.merge({},e.settings||{}),ecmaFeatures:ConfigOps.merge(r,e.ecmaFeatures||{})},n.ecmaFeatures.modules&&(n.ecmaFeatures.globalReturn=!1),n}function createStubRule(e){function n(n){return{Program:function(t){n.report(t,e)}}}if(e)return n;throw new Error("No message passed to stub rule")}function getRuleReplacementMessage(e){if(e in replacements.rules){var n=replacements.rules[e];return"Rule '"+e+"' was removed and replaced by: "+n.join(", ")}}function findEslintEnv(e){var n,t;for(eslintEnvPattern.lastIndex=0;n=eslintEnvPattern.exec(e);)t=assign(t||{},parseListConfig(n[1]));return t}var estraverse=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/util/estraverse.js"),escope=__webpack_require__("./node_modules/escope/lib/index.js"),environments=__webpack_require__("./node_modules/eslint1/node_modules/eslint/conf/environments.js"),blankScriptAST=__webpack_require__("./node_modules/eslint1/node_modules/eslint/conf/blank-script.json"),assign=__webpack_require__("./node_modules/object-assign/index.js"),rules=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/rules.js"),RuleContext=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/rule-context.js"),timing=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/timing.js"),SourceCode=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/util/source-code.js"),NodeEventGenerator=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/util/node-event-generator.js"),CommentEventGenerator=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/util/comment-event-generator.js"),EventEmitter=__webpack_require__("./node_modules/events/events.js").EventEmitter,ConfigOps=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/config/config-ops.js"),validator=__webpack_require__("./node_modules/eslint1/node_modules/eslint/lib/config/config-validator.js"),replacements=__webpack_require__("./node_modules/eslint1/node_modules/eslint/conf/replacements.json"),assert=__webpack_require__("./node_modules/assert/assert.js"),DEFAULT_PARSER=__webpack_require__("./node_modules/eslint1/node_modules/eslint/conf/eslint.json").parser,eslintEnvPattern=/\/\*\s*eslint-env\s(.+?)\*\//g;module.exports=function(){function e(e,n){var t;try{t=!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())}catch(e){return s.push({fatal:!0,severity:2,message:e.message,line:0,column:0}),null}try{return t.parse(e,{loc:!0,range:!0,raw:!0,tokens:!0,comment:!0,attachComment:!0,ecmaFeatures:n.ecmaFeatures})}catch(e){var r=e.message.replace(/^line \d+:/i,"").trim();return s.push({fatal:!0,severity:2,message:"Parsing error: "+r,line:e.lineNumber,column:e.column+1}),null}}function n(e){return"number"==typeof e?e:Array.isArray(e)?e[0]:0}function t(e){return Array.isArray(e)?e.slice(1):[]}var r=Object.create(new EventEmitter),s=[],o=null,i=null,a=null,l=null,u=null,c=null,g=[],f=null;r.setMaxListeners(0),r.reset=function(){this.removeAllListeners(),s=[],o=null,i=null,a=null,l=null,c=null,g=[],f=null},r.verify=function(m,p,v,d){var b,y,h,k,E,C="string"==typeof m?m:null;"object"==typeof v?(u=v.filename,E=v.allowInlineConfig,d=v.saveState):u=v,d||this.reset();var w=findEslintEnv(C||m.text);if(w&&(p&&p.env?(p=assign({},p),p.env=assign({},p.env,w)):p=assign({},p||{},{env:w})),p=prepareConfig(p||{}),null!==C){if(0===C.trim().length)return f=new SourceCode(C,blankScriptAST),s;b=e(C.replace(/^#!([^\r\n]+)/,function(e,n){return y=n,"//"+n}),p),b&&(f=new SourceCode(C,b))}else f=m,b=f.ast;if(b){E!==!1&&(p=modifyConfigsFromComments(u,b,p,g,s)),Object.keys(p.rules).filter(function(e){return n(p.rules[e])>0}).forEach(function(e){var s,o,i,a;if(s=rules.get(e),!s){var l=getRuleReplacementMessage(e);s=createStubRule(l?l:"Definition for rule '"+e+"' was not found"),rules.define(e,s)}o=n(p.rules[e]),i=t(p.rules[e]);try{a=s(new RuleContext(e,r,o,i,p.settings,p.ecmaFeatures)),Object.keys(a).forEach(function(n){r.on(n,timing.enabled?timing.time(e,a[n]):a[n])})}catch(n){throw n.message="Error while loading rule '"+e+"': "+n.message,n}}),o=p,c=new estraverse.Controller,h=o.ecmaFeatures,k=h.blockBindings||h.classes||h.modules||h.defaultParams||h.destructuring?6:5,l=escope.analyze(b,{ignoreEval:!0,nodejsScope:h.globalReturn,ecmaVersion:k,sourceType:h.modules?"module":"script"}),i=l.scopes,a=[],i.forEach(function(e,n){var t=e.block.range[0];a[t]||(a[t]=n)}),addDeclaredGlobals(b,i[0],o),y&&b.comments.length&&b.comments[0].value===y&&(b.comments.splice(0,1),b.body.length&&b.body[0].leadingComments&&b.body[0].leadingComments[0].value===y&&b.body[0].leadingComments.splice(0,1));var x=new NodeEventGenerator(r);x=new CommentEventGenerator(x,f),c.traverse(b,{enter:function(e,n){e.parent=n,x.enterNode(e)},leave:function(e){x.leaveNode(e)}})}return s.sort(function(e,n){var t=e.line-n.line;return 0===t?e.column-n.column:t}),s},r.report=function(e,n,t,r,o,i,a){if(t&&assert.strictEqual(typeof t,"object","Node must be an object"),"string"==typeof r&&(assert.ok(t,"Node must be provided when reporting error if location is not provided"),a=i,i=o,o=r,r=t.loc.start),!isDisabledByReportingConfig(g,e,r)){i&&(o=o.replace(/\{\{\s*(.+?)\s*\}\}/g,function(e,n){return n in i?i[n]:e}));var l={ruleId:e,severity:n,message:o,line:r.line,column:r.column+1,nodeType:t&&t.type,source:f.lines[r.line-1]||""};a&&Array.isArray(a.range)&&"string"==typeof a.text&&(l.fix=a),s.push(l)}},r.getSourceCode=function(){return f};var m={getSource:"getText",getSourceLines:"getLines",getAllComments:"getAllComments",getNodeByRangeIndex:"getNodeByRangeIndex",getComments:"getComments",getJSDocComment:"getJSDocComment",getFirstToken:"getFirstToken",getFirstTokens:"getFirstTokens",getLastToken:"getLastToken",getLastTokens:"getLastTokens",getTokenAfter:"getTokenAfter",getTokenBefore:"getTokenBefore",getTokenByRangeStart:"getTokenByRangeStart",getTokens:"getTokens",getTokensAfter:"getTokensAfter",getTokensBefore:"getTokensBefore",getTokensBetween:"getTokensBetween"};Object.keys(m).forEach(function(e){var n=m[e];r[e]=function(e,t,r,s,o){return f?f[n](e,t,r,s,o):null}}),r.getAncestors=function(){return c.parents()},r.getScope=function(){var e=c.parents(),n=i[0];if(e.length){var t=c.current();o.ecmaFeatures.blockBindings?["BlockStatement","SwitchStatement","CatchClause","FunctionDeclaration","FunctionExpression","ArrowFunctionExpression"].indexOf(t.type)>=0&&e.push(t):["FunctionDeclaration","FunctionExpression","ArrowFunctionExpression"].indexOf(t.type)>=0&&e.push(t);for(var r=e.length-1;r>=0;--r)if(n=l.acquire(e[r],!0))return"function-expression-name"===n.type?n.childScopes[0]:n}return i[0]},r.markVariableAsUsed=function(e){var n,t,r,s=this.getScope(),i=o.ecmaFeatures.globalReturn||o.ecmaFeatures.modules;"global"===s.type&&i&&(s=s.childScopes[0]);do for(n=s.variables,t=0,r=n.length;t<r;t++)if(n[t].name===e)return n[t].eslintUsed=!0,!0;while(s=s.upper);return!1},r.getFilename=function(){return"string"==typeof u?u:"<input>"};var p=r.defineRule=function(e,n){rules.define(e,n)};return r.defineRules=function(e){Object.getOwnPropertyNames(e).forEach(function(n){p(n,e[n])})},r.defaults=function(){return __webpack_require__("./node_modules/eslint1/node_modules/eslint/conf/eslint.json")},r.getDeclaredVariables=function(e){return l&&l.getDeclaredVariables(e)||[]},r}();

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getAllKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols)}var baseGetAllKeys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseGetAllKeys.js"),getSymbols=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getSymbols.js"),keys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/keys.js");module.exports=getAllKeys;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseGetAllKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function baseGetAllKeys(r,a,e){var s=a(r);return isArray(r)?s:arrayPush(s,e(r))}var arrayPush=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayPush.js"),isArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isArray.js");module.exports=baseGetAllKeys;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getAllKeysIn.js":
/***/ function(module, exports, __webpack_require__) {

	function getAllKeysIn(e){return baseGetAllKeys(e,keysIn,getSymbolsIn)}var baseGetAllKeys=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseGetAllKeys.js"),getSymbolsIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getSymbolsIn.js"),keysIn=__webpack_require__("./node_modules/babel-types/node_modules/lodash/keysIn.js");module.exports=getAllKeysIn;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_getTag.js":
/***/ function(module, exports, __webpack_require__) {

	var DataView=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_DataView.js"),Map=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Map.js"),Promise=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Promise.js"),Set=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Set.js"),WeakMap=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_WeakMap.js"),baseGetTag=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseGetTag.js"),toSource=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_toSource.js"),mapTag="[object Map]",objectTag="[object Object]",promiseTag="[object Promise]",setTag="[object Set]",weakMapTag="[object WeakMap]",dataViewTag="[object DataView]",dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),getTag=baseGetTag;(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(e){var a=baseGetTag(e),t=a==objectTag?e.constructor:void 0,r=t?toSource(t):"";if(r)switch(r){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return a}),module.exports=getTag;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_DataView.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),DataView=getNative(root,"DataView");module.exports=DataView;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_Promise.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),Promise=getNative(root,"Promise");module.exports=Promise;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_Set.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),Set=getNative(root,"Set");module.exports=Set;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_WeakMap.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),WeakMap=getNative(root,"WeakMap");module.exports=WeakMap;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_initCloneArray.js":
/***/ function(module, exports) {

	function initCloneArray(t){var r=t.length,o=t.constructor(r);return r&&"string"==typeof t[0]&&hasOwnProperty.call(t,"index")&&(o.index=t.index,o.input=t.input),o}var objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=initCloneArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_initCloneByTag.js":
/***/ function(module, exports, __webpack_require__) {

	function initCloneByTag(e,a,r,t){var n=e.constructor;switch(a){case arrayBufferTag:return cloneArrayBuffer(e);case boolTag:case dateTag:return new n(+e);case dataViewTag:return cloneDataView(e,t);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(e,t);case mapTag:return cloneMap(e,t,r);case numberTag:case stringTag:return new n(e);case regexpTag:return cloneRegExp(e);case setTag:return cloneSet(e,t,r);case symbolTag:return cloneSymbol(e)}}var cloneArrayBuffer=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneArrayBuffer.js"),cloneDataView=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneDataView.js"),cloneMap=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneMap.js"),cloneRegExp=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneRegExp.js"),cloneSet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneSet.js"),cloneSymbol=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneSymbol.js"),cloneTypedArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneTypedArray.js"),boolTag="[object Boolean]",dateTag="[object Date]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]";module.exports=initCloneByTag;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cloneArrayBuffer.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneArrayBuffer(r){var e=new r.constructor(r.byteLength);return new Uint8Array(e).set(new Uint8Array(r)),e}var Uint8Array=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Uint8Array.js");module.exports=cloneArrayBuffer;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_Uint8Array.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_root.js"),Uint8Array=root.Uint8Array;module.exports=Uint8Array;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cloneDataView.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneDataView(e,r){var f=r?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(f,e.byteOffset,e.byteLength)}var cloneArrayBuffer=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneArrayBuffer.js");module.exports=cloneDataView;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cloneMap.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneMap(r,a,e){var o=a?e(mapToArray(r),CLONE_DEEP_FLAG):mapToArray(r);return arrayReduce(o,addMapEntry,new r.constructor)}var addMapEntry=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_addMapEntry.js"),arrayReduce=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayReduce.js"),mapToArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_mapToArray.js"),CLONE_DEEP_FLAG=1;module.exports=cloneMap;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_addMapEntry.js":
/***/ function(module, exports) {

	function addMapEntry(t,d){return t.set(d[0],d[1]),t}module.exports=addMapEntry;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_arrayReduce.js":
/***/ function(module, exports) {

	function arrayReduce(r,e,u,a){var n=-1,l=null==r?0:r.length;for(a&&l&&(u=r[++n]);++n<l;)u=e(u,r[n],n,r);return u}module.exports=arrayReduce;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_mapToArray.js":
/***/ function(module, exports) {

	function mapToArray(r){var a=-1,o=Array(r.size);return r.forEach(function(r,n){o[++a]=[n,r]}),o}module.exports=mapToArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cloneRegExp.js":
/***/ function(module, exports) {

	function cloneRegExp(e){var r=new e.constructor(e.source,reFlags.exec(e));return r.lastIndex=e.lastIndex,r}var reFlags=/\w*$/;module.exports=cloneRegExp;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cloneSet.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneSet(r,e,t){var a=e?t(setToArray(r),CLONE_DEEP_FLAG):setToArray(r);return arrayReduce(a,addSetEntry,new r.constructor)}var addSetEntry=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_addSetEntry.js"),arrayReduce=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayReduce.js"),setToArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_setToArray.js"),CLONE_DEEP_FLAG=1;module.exports=cloneSet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_addSetEntry.js":
/***/ function(module, exports) {

	function addSetEntry(d,t){return d.add(t),d}module.exports=addSetEntry;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_setToArray.js":
/***/ function(module, exports) {

	function setToArray(r){var o=-1,e=Array(r.size);return r.forEach(function(r){e[++o]=r}),e}module.exports=setToArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cloneSymbol.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneSymbol(o){return symbolValueOf?Object(symbolValueOf.call(o)):{}}var Symbol=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Symbol.js"),symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;module.exports=cloneSymbol;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cloneTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneTypedArray(r,e){var f=e?cloneArrayBuffer(r.buffer):r.buffer;return new r.constructor(f,r.byteOffset,r.length)}var cloneArrayBuffer=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cloneArrayBuffer.js");module.exports=cloneTypedArray;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_initCloneObject.js":
/***/ function(module, exports, __webpack_require__) {

	function initCloneObject(e){return"function"!=typeof e.constructor||isPrototype(e)?{}:baseCreate(getPrototype(e))}var baseCreate=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseCreate.js"),getPrototype=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_getPrototype.js"),isPrototype=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_isPrototype.js");module.exports=initCloneObject;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseCreate.js":
/***/ function(module, exports, __webpack_require__) {

	var isObject=__webpack_require__("./node_modules/babel-types/node_modules/lodash/isObject.js"),objectCreate=Object.create,baseCreate=function(){function e(){}return function(t){if(!isObject(t))return{};if(objectCreate)return objectCreate(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();module.exports=baseCreate;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/uniq.js":
/***/ function(module, exports, __webpack_require__) {

	function uniq(e){return e&&e.length?baseUniq(e):[]}var baseUniq=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseUniq.js");module.exports=uniq;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseUniq.js":
/***/ function(module, exports, __webpack_require__) {

	function baseUniq(e,r,a){var s=-1,t=arrayIncludes,u=e.length,c=!0,i=[],n=i;if(a)c=!1,t=arrayIncludesWith;else if(u>=LARGE_ARRAY_SIZE){var h=r?null:createSet(e);if(h)return setToArray(h);c=!1,t=cacheHas,n=new SetCache}else n=r?[]:i;e:for(;++s<u;){var l=e[s],_=r?r(l):l;if(l=a||0!==l?l:0,c&&_===_){for(var o=n.length;o--;)if(n[o]===_)continue e;r&&n.push(_),i.push(l)}else t(n,_,a)||(n!==i&&n.push(_),i.push(l))}return i}var SetCache=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_SetCache.js"),arrayIncludes=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayIncludes.js"),arrayIncludesWith=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_arrayIncludesWith.js"),cacheHas=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_cacheHas.js"),createSet=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_createSet.js"),setToArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_setToArray.js"),LARGE_ARRAY_SIZE=200;module.exports=baseUniq;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_SetCache.js":
/***/ function(module, exports, __webpack_require__) {

	function SetCache(e){var a=-1,t=null==e?0:e.length;for(this.__data__=new MapCache;++a<t;)this.add(e[a])}var MapCache=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_MapCache.js"),setCacheAdd=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_setCacheAdd.js"),setCacheHas=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_setCacheHas.js");SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas,module.exports=SetCache;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_setCacheAdd.js":
/***/ function(module, exports) {

	function setCacheAdd(_){return this.__data__.set(_,HASH_UNDEFINED),this}var HASH_UNDEFINED="__lodash_hash_undefined__";module.exports=setCacheAdd;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_setCacheHas.js":
/***/ function(module, exports) {

	function setCacheHas(a){return this.__data__.has(a)}module.exports=setCacheHas;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_arrayIncludes.js":
/***/ function(module, exports, __webpack_require__) {

	function arrayIncludes(e,r){var n=null==e?0:e.length;return!!n&&baseIndexOf(e,r,0)>-1}var baseIndexOf=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseIndexOf.js");module.exports=arrayIncludes;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseIndexOf.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIndexOf(e,s,n){return s===s?strictIndexOf(e,s,n):baseFindIndex(e,baseIsNaN,n)}var baseFindIndex=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseFindIndex.js"),baseIsNaN=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_baseIsNaN.js"),strictIndexOf=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_strictIndexOf.js");module.exports=baseIndexOf;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseFindIndex.js":
/***/ function(module, exports) {

	function baseFindIndex(e,n,r,d){for(var t=e.length,i=r+(d?1:-1);d?i--:++i<t;)if(n(e[i],i,e))return i;return-1}module.exports=baseFindIndex;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_baseIsNaN.js":
/***/ function(module, exports) {

	function baseIsNaN(e){return e!==e}module.exports=baseIsNaN;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_strictIndexOf.js":
/***/ function(module, exports) {

	function strictIndexOf(r,t,e){for(var n=e-1,f=r.length;++n<f;)if(r[n]===t)return n;return-1}module.exports=strictIndexOf;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_arrayIncludesWith.js":
/***/ function(module, exports) {

	function arrayIncludesWith(r,n,e){for(var t=-1,u=null==r?0:r.length;++t<u;)if(e(n,r[t]))return!0;return!1}module.exports=arrayIncludesWith;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_cacheHas.js":
/***/ function(module, exports) {

	function cacheHas(a,c){return a.has(c)}module.exports=cacheHas;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_createSet.js":
/***/ function(module, exports, __webpack_require__) {

	var Set=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_Set.js"),noop=__webpack_require__("./node_modules/babel-types/node_modules/lodash/noop.js"),setToArray=__webpack_require__("./node_modules/babel-types/node_modules/lodash/_setToArray.js"),INFINITY=1/0,createSet=Set&&1/setToArray(new Set([,-0]))[1]==INFINITY?function(e){return new Set(e)}:noop;module.exports=createSet;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/noop.js":
/***/ function(module, exports) {

	function noop(){}module.exports=noop;

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/init.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/core.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/es2015.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/flow.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/jsx.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/misc.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/experimental.js");

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getType(e){return Array.isArray(e)?"array":null===e?"null":void 0===e?"undefined":"undefined"==typeof e?"undefined":(0,_typeof3.default)(e)}function assertEach(e){function r(r,t,i){if(Array.isArray(i))for(var a=0;a<i.length;a++)e(r,t+"["+a+"]",i[a])}return r.each=e,r}function assertOneOf(){function e(e,r,i){if(t.indexOf(i)<0)throw new TypeError("Property "+r+" expected value to be one of "+(0,_stringify2.default)(t)+" but got "+(0,_stringify2.default)(i))}for(var r=arguments.length,t=Array(r),i=0;i<r;i++)t[i]=arguments[i];return e.oneOf=t,e}function assertNodeType(){function e(e,r,a){for(var o=!1,n=i,s=Array.isArray(n),f=0,n=s?n:(0,_getIterator3.default)(n);;){var u;if(s){if(f>=n.length)break;u=n[f++]}else{if(f=n.next(),f.done)break;u=f.value}var l=u;if(t.is(l,a)){o=!0;break}}if(!o)throw new TypeError("Property "+r+" of "+e.type+" expected node to be of a type "+(0,_stringify2.default)(i)+" but instead got "+(0,_stringify2.default)(a&&a.type))}for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return e.oneOfNodeTypes=i,e}function assertNodeOrValueType(){function e(e,r,a){for(var o=!1,n=i,s=Array.isArray(n),f=0,n=s?n:(0,_getIterator3.default)(n);;){var u;if(s){if(f>=n.length)break;u=n[f++]}else{if(f=n.next(),f.done)break;u=f.value}var l=u;if(getType(a)===l||t.is(l,a)){o=!0;break}}if(!o)throw new TypeError("Property "+r+" of "+e.type+" expected node to be of a type "+(0,_stringify2.default)(i)+" but instead got "+(0,_stringify2.default)(a&&a.type))}for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return e.oneOfNodeOrValueTypes=i,e}function assertValueType(e){function r(r,t,i){var a=getType(i)===e;if(!a)throw new TypeError("Property "+t+" expected type of "+e+" but got "+getType(i))}return r.type=e,r}function chain(){function e(){for(var e=t,r=Array.isArray(e),i=0,e=r?e:(0,_getIterator3.default)(e);;){var a;if(r){if(i>=e.length)break;a=e[i++]}else{if(i=e.next(),i.done)break;a=i.value}var o=a;o.apply(void 0,arguments)}}for(var r=arguments.length,t=Array(r),i=0;i<r;i++)t[i]=arguments[i];return e.chainOf=t,e}function defineType(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.inherits&&store[r.inherits]||{};r.fields=r.fields||t.fields||{},r.visitor=r.visitor||t.visitor||[],r.aliases=r.aliases||t.aliases||[],r.builder=r.builder||t.builder||r.visitor||[],r.deprecatedAlias&&(DEPRECATED_KEYS[r.deprecatedAlias]=e);for(var i=r.visitor.concat(r.builder),a=Array.isArray(i),o=0,i=a?i:(0,_getIterator3.default)(i);;){var n;if(a){if(o>=i.length)break;n=i[o++]}else{if(o=i.next(),o.done)break;n=o.value}var s=n;r.fields[s]=r.fields[s]||{}}for(var f in r.fields){var u=r.fields[f];r.builder.indexOf(f)===-1&&(u.optional=!0),void 0===u.default?u.default=null:u.validate||(u.validate=assertValueType(getType(u.default)))}VISITOR_KEYS[e]=r.visitor,BUILDER_KEYS[e]=r.builder,NODE_FIELDS[e]=r.fields,ALIAS_KEYS[e]=r.aliases,store[e]=r}exports.__esModule=!0,exports.DEPRECATED_KEYS=exports.BUILDER_KEYS=exports.NODE_FIELDS=exports.ALIAS_KEYS=exports.VISITOR_KEYS=void 0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_stringify=__webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js"),_stringify2=_interopRequireDefault(_stringify),_typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2);exports.assertEach=assertEach,exports.assertOneOf=assertOneOf,exports.assertNodeType=assertNodeType,exports.assertNodeOrValueType=assertNodeOrValueType,exports.assertValueType=assertValueType,exports.chain=chain,exports.default=defineType;var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index),VISITOR_KEYS=exports.VISITOR_KEYS={},ALIAS_KEYS=exports.ALIAS_KEYS={},NODE_FIELDS=exports.NODE_FIELDS={},BUILDER_KEYS=exports.BUILDER_KEYS={},DEPRECATED_KEYS=exports.DEPRECATED_KEYS={},store={};

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/core.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a.default=e,a}var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index),_constants=__webpack_require__("./node_modules/babel-types/lib/constants.js"),_index2=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index3=_interopRequireDefault(_index2);(0,_index3.default)("ArrayExpression",{fields:{elements:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeOrValueType)("null","Expression","SpreadElement"))),default:[]}},visitor:["elements"],aliases:["Expression"]}),(0,_index3.default)("AssignmentExpression",{fields:{operator:{validate:(0,_index2.assertValueType)("string")},left:{validate:(0,_index2.assertNodeType)("LVal")},right:{validate:(0,_index2.assertNodeType)("Expression")}},builder:["operator","left","right"],visitor:["left","right"],aliases:["Expression"]}),(0,_index3.default)("BinaryExpression",{builder:["operator","left","right"],fields:{operator:{validate:_index2.assertOneOf.apply(void 0,_constants.BINARY_OPERATORS)},left:{validate:(0,_index2.assertNodeType)("Expression")},right:{validate:(0,_index2.assertNodeType)("Expression")}},visitor:["left","right"],aliases:["Binary","Expression"]}),(0,_index3.default)("Directive",{visitor:["value"],fields:{value:{validate:(0,_index2.assertNodeType)("DirectiveLiteral")}}}),(0,_index3.default)("DirectiveLiteral",{builder:["value"],fields:{value:{validate:(0,_index2.assertValueType)("string")}}}),(0,_index3.default)("BlockStatement",{builder:["body","directives"],visitor:["directives","body"],fields:{directives:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Directive"))),default:[]},body:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block","Statement"]}),(0,_index3.default)("BreakStatement",{visitor:["label"],fields:{label:{validate:(0,_index2.assertNodeType)("Identifier"),optional:!0}},aliases:["Statement","Terminatorless","CompletionStatement"]}),(0,_index3.default)("CallExpression",{visitor:["callee","arguments"],fields:{callee:{validate:(0,_index2.assertNodeType)("Expression")},arguments:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Expression","SpreadElement")))}},aliases:["Expression"]}),(0,_index3.default)("CatchClause",{visitor:["param","body"],fields:{param:{validate:(0,_index2.assertNodeType)("Identifier")},body:{validate:(0,_index2.assertNodeType)("BlockStatement")}},aliases:["Scopable"]}),(0,_index3.default)("ConditionalExpression",{visitor:["test","consequent","alternate"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression")},consequent:{validate:(0,_index2.assertNodeType)("Expression")},alternate:{validate:(0,_index2.assertNodeType)("Expression")}},aliases:["Expression","Conditional"]}),(0,_index3.default)("ContinueStatement",{visitor:["label"],fields:{label:{validate:(0,_index2.assertNodeType)("Identifier"),optional:!0}},aliases:["Statement","Terminatorless","CompletionStatement"]}),(0,_index3.default)("DebuggerStatement",{aliases:["Statement"]}),(0,_index3.default)("DoWhileStatement",{visitor:["test","body"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression")},body:{validate:(0,_index2.assertNodeType)("Statement")}},aliases:["Statement","BlockParent","Loop","While","Scopable"]}),(0,_index3.default)("EmptyStatement",{aliases:["Statement"]}),(0,_index3.default)("ExpressionStatement",{visitor:["expression"],fields:{expression:{validate:(0,_index2.assertNodeType)("Expression")}},aliases:["Statement","ExpressionWrapper"]}),(0,_index3.default)("File",{builder:["program","comments","tokens"],visitor:["program"],fields:{program:{validate:(0,_index2.assertNodeType)("Program")}}}),(0,_index3.default)("ForInStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:(0,_index2.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,_index2.assertNodeType)("Expression")},body:{validate:(0,_index2.assertNodeType)("Statement")}}}),(0,_index3.default)("ForStatement",{visitor:["init","test","update","body"],aliases:["Scopable","Statement","For","BlockParent","Loop"],fields:{init:{validate:(0,_index2.assertNodeType)("VariableDeclaration","Expression"),optional:!0},test:{validate:(0,_index2.assertNodeType)("Expression"),optional:!0},update:{validate:(0,_index2.assertNodeType)("Expression"),optional:!0},body:{validate:(0,_index2.assertNodeType)("Statement")}}}),(0,_index3.default)("FunctionDeclaration",{builder:["id","params","body","generator","async"],visitor:["id","params","body","returnType","typeParameters"],fields:{id:{validate:(0,_index2.assertNodeType)("Identifier")},params:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("LVal")))},body:{validate:(0,_index2.assertNodeType)("BlockStatement")},generator:{default:!1,validate:(0,_index2.assertValueType)("boolean")},async:{default:!1,validate:(0,_index2.assertValueType)("boolean")}},aliases:["Scopable","Function","BlockParent","FunctionParent","Statement","Pureish","Declaration"]}),(0,_index3.default)("FunctionExpression",{inherits:"FunctionDeclaration",aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:{id:{validate:(0,_index2.assertNodeType)("Identifier"),optional:!0},params:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("LVal")))},body:{validate:(0,_index2.assertNodeType)("BlockStatement")},generator:{default:!1,validate:(0,_index2.assertValueType)("boolean")},async:{default:!1,validate:(0,_index2.assertValueType)("boolean")}}}),(0,_index3.default)("Identifier",{builder:["name"],visitor:["typeAnnotation"],aliases:["Expression","LVal"],fields:{name:{validate:function(e,a,i){!t.isValidIdentifier(i)}},decorators:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Decorator")))}}}),(0,_index3.default)("IfStatement",{visitor:["test","consequent","alternate"],aliases:["Statement","Conditional"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression")},consequent:{validate:(0,_index2.assertNodeType)("Statement")},alternate:{optional:!0,validate:(0,_index2.assertNodeType)("Statement")}}}),(0,_index3.default)("LabeledStatement",{visitor:["label","body"],aliases:["Statement"],fields:{label:{validate:(0,_index2.assertNodeType)("Identifier")},body:{validate:(0,_index2.assertNodeType)("Statement")}}}),(0,_index3.default)("StringLiteral",{builder:["value"],fields:{value:{validate:(0,_index2.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]}),(0,_index3.default)("NumericLiteral",{builder:["value"],deprecatedAlias:"NumberLiteral",fields:{value:{validate:(0,_index2.assertValueType)("number")}},aliases:["Expression","Pureish","Literal","Immutable"]}),(0,_index3.default)("NullLiteral",{aliases:["Expression","Pureish","Literal","Immutable"]}),(0,_index3.default)("BooleanLiteral",{builder:["value"],fields:{value:{validate:(0,_index2.assertValueType)("boolean")}},aliases:["Expression","Pureish","Literal","Immutable"]}),(0,_index3.default)("RegExpLiteral",{builder:["pattern","flags"],deprecatedAlias:"RegexLiteral",aliases:["Expression","Literal"],fields:{pattern:{validate:(0,_index2.assertValueType)("string")},flags:{validate:(0,_index2.assertValueType)("string"),default:""}}}),(0,_index3.default)("LogicalExpression",{builder:["operator","left","right"],visitor:["left","right"],aliases:["Binary","Expression"],fields:{operator:{validate:_index2.assertOneOf.apply(void 0,_constants.LOGICAL_OPERATORS)},left:{validate:(0,_index2.assertNodeType)("Expression")},right:{validate:(0,_index2.assertNodeType)("Expression")}}}),(0,_index3.default)("MemberExpression",{builder:["object","property","computed"],visitor:["object","property"],aliases:["Expression","LVal"],fields:{object:{validate:(0,_index2.assertNodeType)("Expression")},property:{validate:function(e,a,t){var i=e.computed?"Expression":"Identifier";(0,_index2.assertNodeType)(i)(e,a,t)}},computed:{default:!1}}}),(0,_index3.default)("NewExpression",{visitor:["callee","arguments"],aliases:["Expression"],fields:{callee:{validate:(0,_index2.assertNodeType)("Expression")},arguments:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Expression","SpreadElement")))}}}),(0,_index3.default)("Program",{visitor:["directives","body"],builder:["body","directives"],fields:{directives:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Directive"))),default:[]},body:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block","FunctionParent"]}),(0,_index3.default)("ObjectExpression",{visitor:["properties"],aliases:["Expression"],fields:{properties:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("ObjectMethod","ObjectProperty","SpreadProperty")))}}}),(0,_index3.default)("ObjectMethod",{builder:["kind","key","params","body","computed"],fields:{kind:{validate:(0,_index2.chain)((0,_index2.assertValueType)("string"),(0,_index2.assertOneOf)("method","get","set")),default:"method"},computed:{validate:(0,_index2.assertValueType)("boolean"),default:!1},key:{validate:function(e,a,t){var i=e.computed?["Expression"]:["Identifier","StringLiteral","NumericLiteral"];_index2.assertNodeType.apply(void 0,i)(e,a,t)}},decorators:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Decorator")))},body:{validate:(0,_index2.assertNodeType)("BlockStatement")},generator:{default:!1,validate:(0,_index2.assertValueType)("boolean")},async:{default:!1,validate:(0,_index2.assertValueType)("boolean")}},visitor:["key","params","body","decorators","returnType","typeParameters"],aliases:["UserWhitespacable","Function","Scopable","BlockParent","FunctionParent","Method","ObjectMember"]}),(0,_index3.default)("ObjectProperty",{builder:["key","value","computed","shorthand","decorators"],fields:{computed:{validate:(0,_index2.assertValueType)("boolean"),default:!1},key:{validate:function(e,a,t){var i=e.computed?["Expression"]:["Identifier","StringLiteral","NumericLiteral"];_index2.assertNodeType.apply(void 0,i)(e,a,t)}},value:{validate:(0,_index2.assertNodeType)("Expression")},shorthand:{validate:(0,_index2.assertValueType)("boolean"),default:!1},decorators:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Decorator"))),optional:!0}},visitor:["key","value","decorators"],aliases:["UserWhitespacable","Property","ObjectMember"]}),(0,_index3.default)("RestElement",{visitor:["argument","typeAnnotation"],aliases:["LVal"],fields:{argument:{validate:(0,_index2.assertNodeType)("LVal")},decorators:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Decorator")))}}}),(0,_index3.default)("ReturnStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,_index2.assertNodeType)("Expression"),optional:!0}}}),(0,_index3.default)("SequenceExpression",{visitor:["expressions"],fields:{expressions:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Expression")))}},aliases:["Expression"]}),(0,_index3.default)("SwitchCase",{visitor:["test","consequent"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression"),optional:!0},consequent:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Statement")))}}}),(0,_index3.default)("SwitchStatement",{visitor:["discriminant","cases"],aliases:["Statement","BlockParent","Scopable"],fields:{discriminant:{validate:(0,_index2.assertNodeType)("Expression")},cases:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("SwitchCase")))}}}),(0,_index3.default)("ThisExpression",{aliases:["Expression"]}),(0,_index3.default)("ThrowStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,_index2.assertNodeType)("Expression")}}}),(0,_index3.default)("TryStatement",{visitor:["block","handler","finalizer"],aliases:["Statement"],fields:{body:{validate:(0,_index2.assertNodeType)("BlockStatement")},handler:{optional:!0,handler:(0,_index2.assertNodeType)("BlockStatement")},finalizer:{optional:!0,validate:(0,_index2.assertNodeType)("BlockStatement")}}}),(0,_index3.default)("UnaryExpression",{builder:["operator","argument","prefix"],fields:{prefix:{default:!0},argument:{validate:(0,_index2.assertNodeType)("Expression")},operator:{validate:_index2.assertOneOf.apply(void 0,_constants.UNARY_OPERATORS)}},visitor:["argument"],aliases:["UnaryLike","Expression"]}),(0,_index3.default)("UpdateExpression",{builder:["operator","argument","prefix"],fields:{prefix:{default:!1},argument:{validate:(0,_index2.assertNodeType)("Expression")},operator:{validate:_index2.assertOneOf.apply(void 0,_constants.UPDATE_OPERATORS)}},visitor:["argument"],aliases:["Expression"]}),(0,_index3.default)("VariableDeclaration",{builder:["kind","declarations"],visitor:["declarations"],aliases:["Statement","Declaration"],fields:{kind:{validate:(0,_index2.chain)((0,_index2.assertValueType)("string"),(0,_index2.assertOneOf)("var","let","const"))},declarations:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("VariableDeclarator")))}}}),(0,_index3.default)("VariableDeclarator",{visitor:["id","init"],fields:{id:{validate:(0,_index2.assertNodeType)("LVal")},init:{optional:!0,validate:(0,_index2.assertNodeType)("Expression")}}}),(0,_index3.default)("WhileStatement",{visitor:["test","body"],aliases:["Statement","BlockParent","Loop","While","Scopable"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression")},body:{validate:(0,_index2.assertNodeType)("BlockStatement","Statement")}}}),(0,_index3.default)("WithStatement",{visitor:["object","body"],aliases:["Statement"],fields:{object:{object:(0,_index2.assertNodeType)("Expression")},body:{validate:(0,_index2.assertNodeType)("BlockStatement","Statement")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/es2015.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2.default)("AssignmentPattern",{visitor:["left","right"],aliases:["Pattern","LVal"],fields:{left:{validate:(0,_index.assertNodeType)("Identifier")},right:{validate:(0,_index.assertNodeType)("Expression")},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2.default)("ArrayPattern",{visitor:["elements","typeAnnotation"],aliases:["Pattern","LVal"],fields:{elements:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Expression")))},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2.default)("ArrowFunctionExpression",{builder:["params","body","async"],visitor:["params","body","returnType","typeParameters"],aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:{params:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("LVal")))},body:{validate:(0,_index.assertNodeType)("BlockStatement","Expression")},async:{validate:(0,_index.assertValueType)("boolean"),default:!1}}}),(0,_index2.default)("ClassBody",{visitor:["body"],fields:{body:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("ClassMethod","ClassProperty")))}}}),(0,_index2.default)("ClassDeclaration",{builder:["id","superClass","body","decorators"],visitor:["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],aliases:["Scopable","Class","Statement","Declaration","Pureish"],fields:{id:{validate:(0,_index.assertNodeType)("Identifier")},body:{validate:(0,_index.assertNodeType)("ClassBody")},superClass:{optional:!0,validate:(0,_index.assertNodeType)("Expression")},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2.default)("ClassExpression",{inherits:"ClassDeclaration",aliases:["Scopable","Class","Expression","Pureish"],fields:{id:{optional:!0,validate:(0,_index.assertNodeType)("Identifier")},body:{validate:(0,_index.assertNodeType)("ClassBody")},superClass:{optional:!0,validate:(0,_index.assertNodeType)("Expression")},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2.default)("ExportAllDeclaration",{visitor:["source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{source:{validate:(0,_index.assertNodeType)("StringLiteral")}}}),(0,_index2.default)("ExportDefaultDeclaration",{visitor:["declaration"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{validate:(0,_index.assertNodeType)("FunctionDeclaration","ClassDeclaration","Expression")}}}),(0,_index2.default)("ExportNamedDeclaration",{visitor:["declaration","specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{validate:(0,_index.assertNodeType)("Declaration"),optional:!0},specifiers:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("ExportSpecifier")))},source:{validate:(0,_index.assertNodeType)("StringLiteral"),optional:!0}}}),(0,_index2.default)("ExportSpecifier",{visitor:["local","exported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_index.assertNodeType)("Identifier")},exported:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2.default)("ForOfStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:(0,_index.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,_index.assertNodeType)("Expression")},body:{validate:(0,_index.assertNodeType)("Statement")}}}),(0,_index2.default)("ImportDeclaration",{visitor:["specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration"],fields:{specifiers:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("ImportSpecifier","ImportDefaultSpecifier","ImportNamespaceSpecifier")))},source:{validate:(0,_index.assertNodeType)("StringLiteral")}}}),(0,_index2.default)("ImportDefaultSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2.default)("ImportNamespaceSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2.default)("ImportSpecifier",{visitor:["local","imported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_index.assertNodeType)("Identifier")},imported:{validate:(0,_index.assertNodeType)("Identifier")},importKind:{validate:(0,_index.assertOneOf)(null,"type","typeof")}}}),(0,_index2.default)("MetaProperty",{visitor:["meta","property"],aliases:["Expression"],fields:{meta:{validate:(0,_index.assertValueType)("string")},property:{validate:(0,_index.assertValueType)("string")}}}),(0,_index2.default)("ClassMethod",{aliases:["Function","Scopable","BlockParent","FunctionParent","Method"],builder:["kind","key","params","body","computed","static"],visitor:["key","params","body","decorators","returnType","typeParameters"],fields:{kind:{validate:(0,_index.chain)((0,_index.assertValueType)("string"),(0,_index.assertOneOf)("get","set","method","constructor")),default:"method"},computed:{default:!1,validate:(0,_index.assertValueType)("boolean")},static:{default:!1,validate:(0,_index.assertValueType)("boolean")},key:{validate:function(e,a,i){var t=e.computed?["Expression"]:["Identifier","StringLiteral","NumericLiteral"];_index.assertNodeType.apply(void 0,t)(e,a,i)}},params:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("LVal")))},body:{validate:(0,_index.assertNodeType)("BlockStatement")},generator:{default:!1,validate:(0,_index.assertValueType)("boolean")},async:{default:!1,validate:(0,_index.assertValueType)("boolean")}}}),(0,_index2.default)("ObjectPattern",{visitor:["properties","typeAnnotation"],aliases:["Pattern","LVal"],fields:{properties:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("RestProperty","Property")))},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2.default)("SpreadElement",{visitor:["argument"],aliases:["UnaryLike"],fields:{argument:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2.default)("Super",{aliases:["Expression"]}),(0,_index2.default)("TaggedTemplateExpression",{visitor:["tag","quasi"],aliases:["Expression"],fields:{tag:{validate:(0,_index.assertNodeType)("Expression")},quasi:{validate:(0,_index.assertNodeType)("TemplateLiteral")}}}),(0,_index2.default)("TemplateElement",{builder:["value","tail"],fields:{value:{},tail:{validate:(0,_index.assertValueType)("boolean"),default:!1}}}),(0,_index2.default)("TemplateLiteral",{visitor:["quasis","expressions"],aliases:["Expression","Literal"],fields:{quasis:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("TemplateElement")))},expressions:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Expression")))}}}),(0,_index2.default)("YieldExpression",{builder:["argument","delegate"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{delegate:{validate:(0,_index.assertValueType)("boolean"),default:!1},argument:{optional:!0,validate:(0,_index.assertNodeType)("Expression")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/flow.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2.default)("AnyTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2.default)("ArrayTypeAnnotation",{visitor:["elementType"],aliases:["Flow"],fields:{}}),(0,_index2.default)("BooleanTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2.default)("BooleanLiteralTypeAnnotation",{aliases:["Flow"],fields:{}}),(0,_index2.default)("NullLiteralTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2.default)("ClassImplements",{visitor:["id","typeParameters"],aliases:["Flow"],fields:{}}),(0,_index2.default)("ClassProperty",{visitor:["key","value","typeAnnotation","decorators"],builder:["key","value","typeAnnotation","decorators","computed"],aliases:["Property"],fields:{computed:{validate:(0,_index.assertValueType)("boolean"),default:!1}}}),(0,_index2.default)("DeclareClass",{visitor:["id","typeParameters","extends","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("DeclareFunction",{visitor:["id"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("DeclareInterface",{visitor:["id","typeParameters","extends","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("DeclareModule",{visitor:["id","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("DeclareModuleExports",{visitor:["typeAnnotation"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("DeclareTypeAlias",{visitor:["id","typeParameters","right"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("DeclareVariable",{visitor:["id"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("ExistentialTypeParam",{aliases:["Flow"]}),(0,_index2.default)("FunctionTypeAnnotation",{visitor:["typeParameters","params","rest","returnType"],aliases:["Flow"],fields:{}}),(0,_index2.default)("FunctionTypeParam",{visitor:["name","typeAnnotation"],aliases:["Flow"],fields:{}}),(0,_index2.default)("GenericTypeAnnotation",{visitor:["id","typeParameters"],aliases:["Flow"],fields:{}}),(0,_index2.default)("InterfaceExtends",{visitor:["id","typeParameters"],aliases:["Flow"],fields:{}}),(0,_index2.default)("InterfaceDeclaration",{visitor:["id","typeParameters","extends","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("IntersectionTypeAnnotation",{visitor:["types"],aliases:["Flow"],fields:{}}),(0,_index2.default)("MixedTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"]}),(0,_index2.default)("EmptyTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"]}),(0,_index2.default)("NullableTypeAnnotation",{visitor:["typeAnnotation"],aliases:["Flow"],fields:{}}),(0,_index2.default)("NumericLiteralTypeAnnotation",{aliases:["Flow"],fields:{}}),(0,_index2.default)("NumberTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2.default)("StringLiteralTypeAnnotation",{aliases:["Flow"],fields:{}}),(0,_index2.default)("StringTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2.default)("ThisTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2.default)("TupleTypeAnnotation",{visitor:["types"],aliases:["Flow"],fields:{}}),(0,_index2.default)("TypeofTypeAnnotation",{visitor:["argument"],aliases:["Flow"],fields:{}}),(0,_index2.default)("TypeAlias",{visitor:["id","typeParameters","right"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2.default)("TypeAnnotation",{visitor:["typeAnnotation"],aliases:["Flow"],fields:{}}),(0,_index2.default)("TypeCastExpression",{visitor:["expression","typeAnnotation"],aliases:["Flow","ExpressionWrapper","Expression"],fields:{}}),(0,_index2.default)("TypeParameter",{visitor:["bound"],aliases:["Flow"],fields:{}}),(0,_index2.default)("TypeParameterDeclaration",{visitor:["params"],aliases:["Flow"],fields:{}}),(0,_index2.default)("TypeParameterInstantiation",{visitor:["params"],aliases:["Flow"],fields:{}}),(0,_index2.default)("ObjectTypeAnnotation",{visitor:["properties","indexers","callProperties"],aliases:["Flow"],fields:{}}),(0,_index2.default)("ObjectTypeCallProperty",{visitor:["value"],aliases:["Flow","UserWhitespacable"],fields:{}}),(0,_index2.default)("ObjectTypeIndexer",{visitor:["id","key","value"],aliases:["Flow","UserWhitespacable"],fields:{}}),(0,_index2.default)("ObjectTypeProperty",{visitor:["key","value"],aliases:["Flow","UserWhitespacable"],fields:{}}),(0,_index2.default)("QualifiedTypeIdentifier",{visitor:["id","qualification"],aliases:["Flow"],fields:{}}),(0,_index2.default)("UnionTypeAnnotation",{visitor:["types"],aliases:["Flow"],fields:{}}),(0,_index2.default)("VoidTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/jsx.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2.default)("JSXAttribute",{visitor:["name","value"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_index.assertNodeType)("JSXIdentifier","JSXNamespacedName")},value:{optional:!0,validate:(0,_index.assertNodeType)("JSXElement","StringLiteral","JSXExpressionContainer")}}}),(0,_index2.default)("JSXClosingElement",{visitor:["name"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_index.assertNodeType)("JSXIdentifier","JSXMemberExpression")}}}),(0,_index2.default)("JSXElement",{builder:["openingElement","closingElement","children","selfClosing"],visitor:["openingElement","children","closingElement"],aliases:["JSX","Immutable","Expression"],fields:{openingElement:{validate:(0,_index.assertNodeType)("JSXOpeningElement")},closingElement:{optional:!0,validate:(0,_index.assertNodeType)("JSXClosingElement")},children:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("JSXText","JSXExpressionContainer","JSXSpreadChild","JSXElement")))}}}),(0,_index2.default)("JSXEmptyExpression",{aliases:["JSX","Expression"]}),(0,_index2.default)("JSXExpressionContainer",{visitor:["expression"],aliases:["JSX","Immutable"],fields:{expression:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2.default)("JSXSpreadChild",{visitor:["expression"],aliases:["JSX","Immutable"],fields:{expression:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2.default)("JSXIdentifier",{builder:["name"],aliases:["JSX","Expression"],fields:{name:{validate:(0,_index.assertValueType)("string")}}}),(0,_index2.default)("JSXMemberExpression",{visitor:["object","property"],aliases:["JSX","Expression"],fields:{object:{validate:(0,_index.assertNodeType)("JSXMemberExpression","JSXIdentifier")},property:{validate:(0,_index.assertNodeType)("JSXIdentifier")}}}),(0,_index2.default)("JSXNamespacedName",{visitor:["namespace","name"],aliases:["JSX"],fields:{namespace:{validate:(0,_index.assertNodeType)("JSXIdentifier")},name:{validate:(0,_index.assertNodeType)("JSXIdentifier")}}}),(0,_index2.default)("JSXOpeningElement",{builder:["name","attributes","selfClosing"],visitor:["name","attributes"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_index.assertNodeType)("JSXIdentifier","JSXMemberExpression")},selfClosing:{default:!1,validate:(0,_index.assertValueType)("boolean")},attributes:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("JSXAttribute","JSXSpreadAttribute")))}}}),(0,_index2.default)("JSXSpreadAttribute",{visitor:["argument"],aliases:["JSX"],fields:{argument:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2.default)("JSXText",{aliases:["JSX","Immutable"],builder:["value"],fields:{value:{validate:(0,_index.assertValueType)("string")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/misc.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2.default)("Noop",{visitor:[]}),(0,_index2.default)("ParenthesizedExpression",{visitor:["expression"],aliases:["Expression","ExpressionWrapper"],fields:{expression:{validate:(0,_index.assertNodeType)("Expression")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/experimental.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2.default)("AwaitExpression",{builder:["argument"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{argument:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2.default)("ForAwaitStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:(0,_index.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,_index.assertNodeType)("Expression")},body:{validate:(0,_index.assertNodeType)("Statement")}}}),(0,_index2.default)("BindExpression",{visitor:["object","callee"],aliases:["Expression"],fields:{}}),(0,_index2.default)("Import",{aliases:["Expression"]}),(0,_index2.default)("Decorator",{visitor:["expression"],fields:{expression:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2.default)("DoExpression",{visitor:["body"],aliases:["Expression"],fields:{body:{validate:(0,_index.assertNodeType)("BlockStatement")}}}),(0,_index2.default)("ExportDefaultSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2.default)("ExportNamespaceSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2.default)("RestProperty",{visitor:["argument"],aliases:["UnaryLike"],fields:{argument:{validate:(0,_index.assertNodeType)("LVal")}}}),(0,_index2.default)("SpreadProperty",{visitor:["argument"],aliases:["UnaryLike"],fields:{argument:{validate:(0,_index.assertNodeType)("Expression")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/react.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function isCompatTag(e){return!!e&&/^[a-z]|\-/.test(e)}function cleanJSXElementLiteralChild(e,r){for(var n=e.value.split(/\r\n|\n|\r/),i=0,o=0;o<n.length;o++)n[o].match(/[^ \t]/)&&(i=o);for(var a="",l=0;l<n.length;l++){var s=n[l],p=0===l,u=l===n.length-1,c=l===i,d=s.replace(/\t/g," ");p||(d=d.replace(/^[ ]+/,"")),u||(d=d.replace(/[ ]+$/,"")),d&&(c||(d+=" "),a+=d)}a&&r.push(t.stringLiteral(a))}function buildChildren(e){for(var r=[],n=0;n<e.children.length;n++){var i=e.children[n];t.isJSXText(i)?cleanJSXElementLiteralChild(i,r):(t.isJSXExpressionContainer(i)&&(i=i.expression),t.isJSXEmptyExpression(i)||r.push(i))}return r}exports.__esModule=!0,exports.isReactComponent=void 0,exports.isCompatTag=isCompatTag,exports.buildChildren=buildChildren;var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index),isReactComponent=exports.isReactComponent=t.buildMatchMemberExpression("React.Component");

/***/ },

/***/ "./node_modules/babel-traverse/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function traverse(e,r,t,a,i){if(e){if(r||(r={}),!r.noScope&&!t&&"Program"!==e.type&&"File"!==e.type)throw new Error(messages.get("traverseNeedsParent",e.type));visitors.explode(r),traverse.node(e,r,t,a,i)}}function hasBlacklistedType(e,r){e.node.type===r.type&&(r.has=!0,e.stop())}exports.__esModule=!0,exports.visitors=exports.Hub=exports.Scope=exports.NodePath=void 0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_path=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js");Object.defineProperty(exports,"NodePath",{enumerable:!0,get:function(){return _interopRequireDefault(_path).default}});var _scope=__webpack_require__("./node_modules/babel-traverse/lib/scope/index.js");Object.defineProperty(exports,"Scope",{enumerable:!0,get:function(){return _interopRequireDefault(_scope).default}});var _hub=__webpack_require__("./node_modules/babel-traverse/lib/hub.js");Object.defineProperty(exports,"Hub",{enumerable:!0,get:function(){return _interopRequireDefault(_hub).default}}),exports.default=traverse;var _context=__webpack_require__("./node_modules/babel-traverse/lib/context.js"),_context2=_interopRequireDefault(_context),_visitors=__webpack_require__("./node_modules/babel-traverse/lib/visitors.js"),visitors=_interopRequireWildcard(_visitors),_babelMessages=__webpack_require__("./node_modules/babel-messages/lib/index.js"),messages=_interopRequireWildcard(_babelMessages),_includes=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/includes.js"),_includes2=_interopRequireDefault(_includes),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_cache=__webpack_require__("./node_modules/babel-traverse/lib/cache.js"),cache=_interopRequireWildcard(_cache);exports.visitors=visitors,traverse.visitors=visitors,traverse.verify=visitors.verify,traverse.explode=visitors.explode,traverse.NodePath=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),traverse.Scope=__webpack_require__("./node_modules/babel-traverse/lib/scope/index.js"),traverse.Hub=__webpack_require__("./node_modules/babel-traverse/lib/hub.js"),traverse.cheap=function(e,r){return t.traverseFast(e,r)},traverse.node=function(e,r,a,i,s,o){var u=t.VISITOR_KEYS[e.type];if(u)for(var c=new _context2.default(a,r,i,s),n=u,p=Array.isArray(n),l=0,n=p?n:(0,_getIterator3.default)(n);;){var v;if(p){if(l>=n.length)break;v=n[l++]}else{if(l=n.next(),l.done)break;v=l.value}var d=v;if((!o||!o[d])&&c.visit(e,d))return}},traverse.clearNode=function(e,r){t.removeProperties(e,r),cache.path.delete(e)},traverse.removeProperties=function(e,r){return t.traverseFast(e,traverse.clearNode,r),e},traverse.hasType=function(e,r,t,a){if((0,_includes2.default)(a,e.type))return!1;if(e.type===t)return!0;var i={has:!1,type:t};return traverse(e,{blacklist:a,enter:hasBlacklistedType},r,i),i.has},traverse.clearCache=function(){cache.clear()},traverse.clearCache.clearPath=cache.clearPath,traverse.clearCache.clearScope=cache.clearScope,traverse.copyCache=function(e,r){cache.path.has(e)&&cache.path.set(r,cache.path.get(e))};

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_virtualTypes=__webpack_require__("./node_modules/babel-traverse/lib/path/lib/virtual-types.js"),virtualTypes=_interopRequireWildcard(_virtualTypes),_debug2=__webpack_require__("./node_modules/debug/src/browser.js"),_debug3=_interopRequireDefault(_debug2),_invariant=__webpack_require__("./node_modules/invariant/browser.js"),_invariant2=_interopRequireDefault(_invariant),_index=__webpack_require__("./node_modules/babel-traverse/lib/index.js"),_index2=_interopRequireDefault(_index),_assign=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/assign.js"),_assign2=_interopRequireDefault(_assign),_scope=__webpack_require__("./node_modules/babel-traverse/lib/scope/index.js"),_scope2=_interopRequireDefault(_scope),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_cache=__webpack_require__("./node_modules/babel-traverse/lib/cache.js"),_debug=(0,_debug3.default)("babel"),NodePath=function(){function e(t,r){(0,_classCallCheck3.default)(this,e),this.parent=r,this.hub=t,this.contexts=[],this.data={},this.shouldSkip=!1,this.shouldStop=!1,this.removed=!1,this.state=null,this.opts=null,this.skipKeys=null,this.parentPath=null,this.context=null,this.container=null,this.listKey=null,this.inList=!1,this.parentKey=null,this.key=null,this.node=null,this.scope=null,this.type=null,this.typeAnnotation=null}return e.get=function(t){var r=t.hub,i=t.parentPath,a=t.parent,o=t.container,n=t.listKey,s=t.key;!r&&i&&(r=i.hub),(0,_invariant2.default)(a,"To get a node path the parent needs to exist");var u=o[s],l=_cache.path.get(a)||[];_cache.path.has(a)||_cache.path.set(a,l);for(var p=void 0,h=0;h<l.length;h++){var d=l[h];if(d.node===u){p=d;break}}return p||(p=new e(r,a),l.push(p)),p.setup(i,o,n,s),p},e.prototype.getScope=function(e){var t=e;return this.isScope()&&(t=new _scope2.default(this,e)),t},e.prototype.setData=function(e,t){return this.data[e]=t},e.prototype.getData=function(e,t){var r=this.data[e];return!r&&t&&(r=this.data[e]=t),r},e.prototype.buildCodeFrameError=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:SyntaxError;return this.hub.file.buildCodeFrameError(this.node,e,t)},e.prototype.traverse=function(e,t){(0,_index2.default)(this.node,e,this.scope,t,this)},e.prototype.mark=function(e,t){this.hub.file.metadata.marked.push({type:e,message:t,loc:this.node.loc})},e.prototype.set=function(e,r){t.validate(this.node,e,r),this.node[e]=r},e.prototype.getPathLocation=function(){var e=[],t=this;do{var r=t.key;t.inList&&(r=t.listKey+"["+r+"]"),e.unshift(r)}while(t=t.parentPath);return e.join(".")},e.prototype.debug=function(e){_debug.enabled&&_debug(this.getPathLocation()+" "+this.type+": "+e())},e}();exports.default=NodePath,(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/ancestry.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/inference/index.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/replacement.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/evaluation.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/conversion.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/introspection.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/context.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/removal.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/modification.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/family.js")),(0,_assign2.default)(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/comments.js"));for(var _loop2=function(){if(_isArray){if(_i>=_iterator.length)return"break";_ref2=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)return"break";_ref2=_i.value}var e=_ref2,r="is"+e;NodePath.prototype[r]=function(e){return t[r](this.node,e)},NodePath.prototype["assert"+e]=function(t){if(!this[r](t))throw new TypeError("Expected node path of type "+e)}},_iterator=t.TYPES,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:(0,_getIterator3.default)(_iterator);;){var _ref2,_ret2=_loop2();if("break"===_ret2)break}var _loop=function(e){if("_"===e[0])return"continue";t.TYPES.indexOf(e)<0&&t.TYPES.push(e);var r=virtualTypes[e];NodePath.prototype["is"+e]=function(e){return r.checkPath(this,e)}};for(var type in virtualTypes){var _ret=_loop(type)}module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/lib/virtual-types.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}exports.__esModule=!0,exports.Flow=exports.Pure=exports.Generated=exports.User=exports.Var=exports.BlockScoped=exports.Referenced=exports.Scope=exports.Expression=exports.Statement=exports.BindingIdentifier=exports.ReferencedMemberExpression=exports.ReferencedIdentifier=void 0;var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),ReferencedIdentifier=exports.ReferencedIdentifier={types:["Identifier","JSXIdentifier"],checkPath:function(e,r){var n=e.node,i=e.parent;if(!t.isIdentifier(n,r)&&!t.isJSXMemberExpression(i,r)){if(!t.isJSXIdentifier(n,r))return!1;if(_babelTypes.react.isCompatTag(n.name))return!1}return t.isReferenced(n,i)}},ReferencedMemberExpression=exports.ReferencedMemberExpression={types:["MemberExpression"],checkPath:function(e){var r=e.node,n=e.parent;return t.isMemberExpression(r)&&t.isReferenced(r,n)}},BindingIdentifier=exports.BindingIdentifier={types:["Identifier"],checkPath:function(e){var r=e.node,n=e.parent;return t.isIdentifier(r)&&t.isBinding(r,n)}},Statement=exports.Statement={types:["Statement"],checkPath:function(e){var r=e.node,n=e.parent;if(t.isStatement(r)){if(t.isVariableDeclaration(r)){if(t.isForXStatement(n,{left:r}))return!1;if(t.isForStatement(n,{init:r}))return!1}return!0}return!1}},Expression=exports.Expression={types:["Expression"],checkPath:function(e){return e.isIdentifier()?e.isReferencedIdentifier():t.isExpression(e.node)}},Scope=exports.Scope={types:["Scopable"],checkPath:function(e){return t.isScope(e.node,e.parent)}},Referenced=exports.Referenced={checkPath:function(e){return t.isReferenced(e.node,e.parent)}},BlockScoped=exports.BlockScoped={checkPath:function(e){return t.isBlockScoped(e.node)}},Var=exports.Var={types:["VariableDeclaration"],checkPath:function(e){return t.isVar(e.node)}},User=exports.User={checkPath:function(e){return e.node&&!!e.node.loc}},Generated=exports.Generated={checkPath:function(e){return!e.isUser()}},Pure=exports.Pure={checkPath:function(e,t){return e.scope.isPure(e.node,t)}},Flow=exports.Flow={types:["Flow","ImportDeclaration","ExportDeclaration","ImportSpecifier"],checkPath:function(e){var r=e.node;return!!t.isFlow(r)||(t.isImportDeclaration(r)?"type"===r.importKind||"typeof"===r.importKind:t.isExportDeclaration(r)?"type"===r.exportKind:!!t.isImportSpecifier(r)&&("type"===r.importKind||"typeof"===r.importKind))}};

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/assign.js":
/***/ function(module, exports, __webpack_require__) {

	var assignValue=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_assignValue.js"),copyObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copyObject.js"),createAssigner=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_createAssigner.js"),isArrayLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArrayLike.js"),isPrototype=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isPrototype.js"),keys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/keys.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,assign=createAssigner(function(e,r){if(isPrototype(r)||isArrayLike(r))return void copyObject(r,keys(r),e);for(var s in r)hasOwnProperty.call(r,s)&&assignValue(e,s,r[s])});module.exports=assign;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_assignValue.js":
/***/ function(module, exports, __webpack_require__) {

	function assignValue(e,s,a){var r=e[s];hasOwnProperty.call(e,s)&&eq(r,a)&&(void 0!==a||s in e)||baseAssignValue(e,s,a)}var baseAssignValue=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/eq.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=assignValue;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseAssignValue.js":
/***/ function(module, exports, __webpack_require__) {

	function baseAssignValue(e,r,i){"__proto__"==r&&defineProperty?defineProperty(e,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[r]=i}var defineProperty=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_defineProperty.js");module.exports=baseAssignValue;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_defineProperty.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getNative.js"),defineProperty=function(){try{var e=getNative(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();module.exports=defineProperty;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getNative.js":
/***/ function(module, exports, __webpack_require__) {

	function getNative(e,a){var t=getValue(e,a);return baseIsNative(t)?t:void 0}var baseIsNative=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseIsNative.js"),getValue=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getValue.js");module.exports=getNative;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseIsNative.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var r=isFunction(e)?reIsNative:reIsHostCtor;return r.test(toSource(e))}var isFunction=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isFunction.js"),isMasked=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isMasked.js"),isObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObject.js"),toSource=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_toSource.js"),reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");module.exports=baseIsNative;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isFunction.js":
/***/ function(module, exports, __webpack_require__) {

	function isFunction(e){if(!isObject(e))return!1;var n=baseGetTag(e);return n==funcTag||n==genTag||n==asyncTag||n==proxyTag}var baseGetTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseGetTag.js"),isObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObject.js"),asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";module.exports=isFunction;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseGetTag.js":
/***/ function(module, exports, __webpack_require__) {

	function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}var Symbol=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Symbol.js"),getRawTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getRawTag.js"),objectToString=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_objectToString.js"),nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol?Symbol.toStringTag:void 0;module.exports=baseGetTag;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_Symbol.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),Symbol=root.Symbol;module.exports=Symbol;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_root.js":
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_freeGlobal.js"),freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();module.exports=root;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_freeGlobal.js":
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global;module.exports=freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getRawTag.js":
/***/ function(module, exports, __webpack_require__) {

	function getRawTag(t){var o=hasOwnProperty.call(t,symToStringTag),r=t[symToStringTag];try{t[symToStringTag]=void 0;var a=!0}catch(t){}var e=nativeObjectToString.call(t);return a&&(o?t[symToStringTag]=r:delete t[symToStringTag]),e}var Symbol=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Symbol.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=Symbol?Symbol.toStringTag:void 0;module.exports=getRawTag;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_objectToString.js":
/***/ function(module, exports) {

	function objectToString(t){return nativeObjectToString.call(t)}var objectProto=Object.prototype,nativeObjectToString=objectProto.toString;module.exports=objectToString;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isObject.js":
/***/ function(module, exports) {

	function isObject(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}module.exports=isObject;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_isMasked.js":
/***/ function(module, exports, __webpack_require__) {

	function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var coreJsData=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_coreJsData.js"),maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();module.exports=isMasked;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_coreJsData.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),coreJsData=root["__core-js_shared__"];module.exports=coreJsData;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_toSource.js":
/***/ function(module, exports) {

	function toSource(t){if(null!=t){try{return funcToString.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var funcProto=Function.prototype,funcToString=funcProto.toString;module.exports=toSource;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getValue.js":
/***/ function(module, exports) {

	function getValue(e,u){return null==e?void 0:e[u]}module.exports=getValue;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/eq.js":
/***/ function(module, exports) {

	function eq(e,n){return e===n||e!==e&&n!==n}module.exports=eq;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_copyObject.js":
/***/ function(module, exports, __webpack_require__) {

	function copyObject(e,a,s,r){var i=!s;s||(s={});for(var u=-1,n=a.length;++u<n;){var l=a[u],o=r?r(s[l],e[l],l,s,e):void 0;void 0===o&&(o=e[l]),i?baseAssignValue(s,l,o):assignValue(s,l,o)}return s}var assignValue=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_assignValue.js"),baseAssignValue=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseAssignValue.js");module.exports=copyObject;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_createAssigner.js":
/***/ function(module, exports, __webpack_require__) {

	function createAssigner(e){return baseRest(function(t,r){var a=-1,i=r.length,s=i>1?r[i-1]:void 0,n=i>2?r[2]:void 0;for(s=e.length>3&&"function"==typeof s?(i--,s):void 0,n&&isIterateeCall(r[0],r[1],n)&&(s=i<3?void 0:s,i=1),t=Object(t);++a<i;){var o=r[a];o&&e(t,o,a,s)}return t})}var baseRest=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseRest.js"),isIterateeCall=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isIterateeCall.js");module.exports=createAssigner;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseRest.js":
/***/ function(module, exports, __webpack_require__) {

	function baseRest(e,t){return setToString(overRest(e,t,identity),e+"")}var identity=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/identity.js"),overRest=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_setToString.js");module.exports=baseRest;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/identity.js":
/***/ function(module, exports) {

	function identity(t){return t}module.exports=identity;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_overRest.js":
/***/ function(module, exports, __webpack_require__) {

	function overRest(r,a,e){return a=nativeMax(void 0===a?r.length-1:a,0),function(){for(var t=arguments,n=-1,o=nativeMax(t.length-a,0),v=Array(o);++n<o;)v[n]=t[a+n];n=-1;for(var i=Array(a+1);++n<a;)i[n]=t[n];return i[a]=e(v),apply(r,this,i)}}var apply=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_apply.js"),nativeMax=Math.max;module.exports=overRest;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_apply.js":
/***/ function(module, exports) {

	function apply(l,e,a){switch(a.length){case 0:return l.call(e);case 1:return l.call(e,a[0]);case 2:return l.call(e,a[0],a[1]);case 3:return l.call(e,a[0],a[1],a[2])}return l.apply(e,a)}module.exports=apply;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_setToString.js":
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseSetToString.js"),shortOut=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_shortOut.js"),setToString=shortOut(baseSetToString);module.exports=setToString;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseSetToString.js":
/***/ function(module, exports, __webpack_require__) {

	var constant=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/constant.js"),defineProperty=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_defineProperty.js"),identity=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/identity.js"),baseSetToString=defineProperty?function(e,t){return defineProperty(e,"toString",{configurable:!0,enumerable:!1,value:constant(t),writable:!0})}:identity;module.exports=baseSetToString;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/constant.js":
/***/ function(module, exports) {

	function constant(n){return function(){return n}}module.exports=constant;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_shortOut.js":
/***/ function(module, exports) {

	function shortOut(t){var r=0,e=0;return function(){var n=nativeNow(),o=HOT_SPAN-(n-e);if(e=n,o>0){if(++r>=HOT_COUNT)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}var HOT_COUNT=800,HOT_SPAN=16,nativeNow=Date.now;module.exports=shortOut;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_isIterateeCall.js":
/***/ function(module, exports, __webpack_require__) {

	function isIterateeCall(e,r,i){if(!isObject(i))return!1;var t=typeof r;return!!("number"==t?isArrayLike(i)&&isIndex(r,i.length):"string"==t&&r in i)&&eq(i[r],e)}var eq=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/eq.js"),isArrayLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArrayLike.js"),isIndex=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObject.js");module.exports=isIterateeCall;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isArrayLike.js":
/***/ function(module, exports, __webpack_require__) {

	function isArrayLike(i){return null!=i&&isLength(i.length)&&!isFunction(i)}var isFunction=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isFunction.js"),isLength=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isLength.js");module.exports=isArrayLike;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isLength.js":
/***/ function(module, exports) {

	function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}var MAX_SAFE_INTEGER=9007199254740991;module.exports=isLength;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_isIndex.js":
/***/ function(module, exports) {

	function isIndex(e,n){return n=null==n?MAX_SAFE_INTEGER:n,!!n&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<n}var MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;module.exports=isIndex;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_isPrototype.js":
/***/ function(module, exports) {

	function isPrototype(o){var t=o&&o.constructor,r="function"==typeof t&&t.prototype||objectProto;return o===r}var objectProto=Object.prototype;module.exports=isPrototype;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/keys.js":
/***/ function(module, exports, __webpack_require__) {

	function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}var arrayLikeKeys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayLikeKeys.js"),baseKeys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseKeys.js"),isArrayLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArrayLike.js");module.exports=keys;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_arrayLikeKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function arrayLikeKeys(e,r){var s=isArray(e),i=!s&&isArguments(e),t=!s&&!i&&isBuffer(e),a=!s&&!i&&!t&&isTypedArray(e),n=s||i||t||a,y=n?baseTimes(e.length,String):[],u=y.length;for(var o in e)!r&&!hasOwnProperty.call(e,o)||n&&("length"==o||t&&("offset"==o||"parent"==o)||a&&("buffer"==o||"byteLength"==o||"byteOffset"==o)||isIndex(o,u))||y.push(o);return y}var baseTimes=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseTimes.js"),isArguments=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArray.js"),isBuffer=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isBuffer.js"),isIndex=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isIndex.js"),isTypedArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isTypedArray.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=arrayLikeKeys;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseTimes.js":
/***/ function(module, exports) {

	function baseTimes(e,r){for(var s=-1,a=Array(e);++s<e;)a[s]=r(s);return a}module.exports=baseTimes;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isArguments.js":
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseIsArguments.js"),isObjectLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObjectLike.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,propertyIsEnumerable=objectProto.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")};module.exports=isArguments;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseIsArguments.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag}var baseGetTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObjectLike.js"),argsTag="[object Arguments]";module.exports=baseIsArguments;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isObjectLike.js":
/***/ function(module, exports) {

	function isObjectLike(e){return null!=e&&"object"==typeof e}module.exports=isObjectLike;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isArray.js":
/***/ function(module, exports) {

	var isArray=Array.isArray;module.exports=isArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isBuffer.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),stubFalse=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/stubFalse.js"),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root.Buffer:void 0,nativeIsBuffer=Buffer?Buffer.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/stubFalse.js":
/***/ function(module, exports) {

	function stubFalse(){return!1}module.exports=stubFalse;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseIsTypedArray.js"),baseUnary=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseUnary.js"),nodeUtil=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_nodeUtil.js"),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseIsTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsTypedArray(a){return isObjectLike(a)&&isLength(a.length)&&!!typedArrayTags[baseGetTag(a)]}var baseGetTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseGetTag.js"),isLength=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isLength.js"),isObjectLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObjectLike.js"),argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1,module.exports=baseIsTypedArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseUnary.js":
/***/ function(module, exports) {

	function baseUnary(n){return function(r){return n(r)}}module.exports=baseUnary;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_nodeUtil.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_freeGlobal.js"),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}();module.exports=nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var r=[];for(var t in Object(e))hasOwnProperty.call(e,t)&&"constructor"!=t&&r.push(t);return r}var isPrototype=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isPrototype.js"),nativeKeys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_nativeKeys.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseKeys;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_nativeKeys.js":
/***/ function(module, exports, __webpack_require__) {

	var overArg=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_overArg.js"),nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_overArg.js":
/***/ function(module, exports) {

	function overArg(r,e){return function(n){return r(e(n))}}module.exports=overArg;

/***/ },

/***/ "./node_modules/babel-traverse/lib/scope/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getCache(e,t,r){for(var i=_cache.scope.get(e.node)||[],n=i,a=Array.isArray(n),o=0,n=a?n:(0,_getIterator3.default)(n);;){var s;if(a){if(o>=n.length)break;s=n[o++]}else{if(o=n.next(),o.done)break;s=o.value}var l=s;if(l.parent===t&&l.path===e)return l}i.push(r),_cache.scope.has(e.node)||_cache.scope.set(e.node,i)}function gatherNodeParts(e,r){if(t.isModuleDeclaration(e))if(e.source)gatherNodeParts(e.source,r);else if(e.specifiers&&e.specifiers.length)for(var i=e.specifiers,n=Array.isArray(i),a=0,i=n?i:(0,_getIterator3.default)(i);;){var o;if(n){if(a>=i.length)break;o=i[a++]}else{if(a=i.next(),a.done)break;o=a.value}var s=o;gatherNodeParts(s,r)}else e.declaration&&gatherNodeParts(e.declaration,r);else if(t.isModuleSpecifier(e))gatherNodeParts(e.local,r);else if(t.isMemberExpression(e))gatherNodeParts(e.object,r),gatherNodeParts(e.property,r);else if(t.isIdentifier(e))r.push(e.name);else if(t.isLiteral(e))r.push(e.value);else if(t.isCallExpression(e))gatherNodeParts(e.callee,r);else if(t.isObjectExpression(e)||t.isObjectPattern(e))for(var l=e.properties,d=Array.isArray(l),u=0,l=d?l:(0,_getIterator3.default)(l);;){var f;if(d){if(u>=l.length)break;f=l[u++]}else{if(u=l.next(),u.done)break;f=u.value}var c=f;gatherNodeParts(c.key||c.argument,r)}}exports.__esModule=!0;var _keys=__webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js"),_keys2=_interopRequireDefault(_keys),_create=__webpack_require__("./node_modules/babel-runtime/core-js/object/create.js"),_create2=_interopRequireDefault(_create),_map=__webpack_require__("./node_modules/babel-runtime/core-js/map.js"),_map2=_interopRequireDefault(_map),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_includes=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/includes.js"),_includes2=_interopRequireDefault(_includes),_repeat=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/repeat.js"),_repeat2=_interopRequireDefault(_repeat),_renamer=__webpack_require__("./node_modules/babel-traverse/lib/scope/lib/renamer.js"),_renamer2=_interopRequireDefault(_renamer),_index=__webpack_require__("./node_modules/babel-traverse/lib/index.js"),_index2=_interopRequireDefault(_index),_defaults=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/defaults.js"),_defaults2=_interopRequireDefault(_defaults),_babelMessages=__webpack_require__("./node_modules/babel-messages/lib/index.js"),messages=_interopRequireWildcard(_babelMessages),_binding2=__webpack_require__("./node_modules/babel-traverse/lib/scope/binding.js"),_binding3=_interopRequireDefault(_binding2),_globals=__webpack_require__("./node_modules/globals/index.js"),_globals2=_interopRequireDefault(_globals),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_cache=__webpack_require__("./node_modules/babel-traverse/lib/cache.js"),_crawlCallsCount=0,collectorVisitor={For:function(e){for(var r=t.FOR_INIT_KEYS,i=Array.isArray(r),n=0,r=i?r:(0,_getIterator3.default)(r);;){var a;if(i){if(n>=r.length)break;a=r[n++]}else{if(n=r.next(),n.done)break;a=n.value}var o=a,s=e.get(o);s.isVar()&&e.scope.getFunctionParent().registerBinding("var",s)}},Declaration:function(e){e.isBlockScoped()||e.isExportDeclaration()&&e.get("declaration").isDeclaration()||e.scope.getFunctionParent().registerDeclaration(e)},ReferencedIdentifier:function(e,t){t.references.push(e)},ForXStatement:function(e,t){var r=e.get("left");(r.isPattern()||r.isIdentifier())&&t.constantViolations.push(r)},ExportDeclaration:{exit:function(e){var r=e.node,i=e.scope,n=r.declaration;if(t.isClassDeclaration(n)||t.isFunctionDeclaration(n)){var a=n.id;if(!a)return;var o=i.getBinding(a.name);o&&o.reference(e)}else if(t.isVariableDeclaration(n))for(var s=n.declarations,l=Array.isArray(s),d=0,s=l?s:(0,_getIterator3.default)(s);;){var u;if(l){if(d>=s.length)break;u=s[d++]}else{if(d=s.next(),d.done)break;u=d.value}var f=u,c=t.getBindingIdentifiers(f);for(var g in c){var p=i.getBinding(g);p&&p.reference(e)}}}},LabeledStatement:function(e){e.scope.getProgramParent().addGlobal(e.node),e.scope.getBlockParent().registerDeclaration(e)},AssignmentExpression:function(e,t){t.assignments.push(e)},UpdateExpression:function(e,t){t.constantViolations.push(e.get("argument"))},UnaryExpression:function(e,t){"delete"===e.node.operator&&t.constantViolations.push(e.get("argument"))},BlockScoped:function(e){var t=e.scope;t.path===e&&(t=t.parent),t.getBlockParent().registerDeclaration(e)},ClassDeclaration:function(e){var t=e.node.id;if(t){var r=t.name;e.scope.bindings[r]=e.scope.getBinding(r)}},Block:function(e){for(var t=e.get("body"),r=t,i=Array.isArray(r),n=0,r=i?r:(0,_getIterator3.default)(r);;){var a;if(i){if(n>=r.length)break;a=r[n++]}else{if(n=r.next(),n.done)break;a=n.value}var o=a;o.isFunctionDeclaration()&&e.scope.getBlockParent().registerDeclaration(o)}}},uid=0,Scope=function(){function e(t,r){if((0,_classCallCheck3.default)(this,e),r&&r.block===t.node)return r;var i=getCache(t,r,this);return i?i:(this.uid=uid++,this.parent=r,this.hub=t.hub,this.parentBlock=t.parent,this.block=t.node,this.path=t,void(this.labels=new _map2.default))}return e.prototype.traverse=function(e,t,r){(0,_index2.default)(e,t,this,r,this.path)},e.prototype.generateDeclaredUidIdentifier=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"temp",t=this.generateUidIdentifier(e);return this.push({id:t}),t},e.prototype.generateUidIdentifier=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"temp";return t.identifier(this.generateUid(e))},e.prototype.generateUid=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"temp";e=t.toIdentifier(e).replace(/^_+/,"").replace(/[0-9]+$/g,"");var r=void 0,i=0;do r=this._generateUid(e,i),i++;while(this.hasLabel(r)||this.hasBinding(r)||this.hasGlobal(r)||this.hasReference(r));var n=this.getProgramParent();return n.references[r]=!0,n.uids[r]=!0,r},e.prototype._generateUid=function(e,t){var r=e;return t>1&&(r+=t),"_"+r},e.prototype.generateUidIdentifierBasedOnNode=function(e,r){var i=e;t.isAssignmentExpression(e)?i=e.left:t.isVariableDeclarator(e)?i=e.id:(t.isObjectProperty(i)||t.isObjectMethod(i))&&(i=i.key);var n=[];gatherNodeParts(i,n);var a=n.join("$");return a=a.replace(/^_/,"")||r||"ref",this.generateUidIdentifier(a.slice(0,20))},e.prototype.isStatic=function(e){if(t.isThisExpression(e)||t.isSuper(e))return!0;if(t.isIdentifier(e)){var r=this.getBinding(e.name);return r?r.constant:this.hasBinding(e.name)}return!1},e.prototype.maybeGenerateMemoised=function(e,t){if(this.isStatic(e))return null;var r=this.generateUidIdentifierBasedOnNode(e);return t||this.push({id:r}),r},e.prototype.checkBlockScopedCollisions=function(e,t,r,i){if("param"!==t&&("hoisted"!==t||"let"!==e.kind)){var n=!1;if(n||(n="let"===t||"let"===e.kind||"const"===e.kind||"module"===e.kind),n||(n="param"===e.kind&&("let"===t||"const"===t)),n)throw this.hub.file.buildCodeFrameError(i,messages.get("scopeDuplicateDeclaration",r),TypeError)}},e.prototype.rename=function(e,t,r){var i=this.getBinding(e);if(i)return t=t||this.generateUidIdentifier(e).name,new _renamer2.default(i,e,t).rename(r)},e.prototype._renameFromMap=function(e,t,r,i){e[t]&&(e[r]=i,e[t]=null)},e.prototype.dump=function(){var e=(0,_repeat2.default)("-",60);console.log(e);var t=this;do{console.log("#",t.block.type);for(var r in t.bindings){var i=t.bindings[r];console.log(" -",r,{constant:i.constant,references:i.references,violations:i.constantViolations.length,kind:i.kind})}}while(t=t.parent);console.log(e)},e.prototype.toArray=function(e,r){var i=this.hub.file;if(t.isIdentifier(e)){var n=this.getBinding(e.name);if(n&&n.constant&&n.path.isGenericType("Array"))return e}if(t.isArrayExpression(e))return e;if(t.isIdentifier(e,{name:"arguments"}))return t.callExpression(t.memberExpression(t.memberExpression(t.memberExpression(t.identifier("Array"),t.identifier("prototype")),t.identifier("slice")),t.identifier("call")),[e]);var a="toArray",o=[e];return r===!0?a="toConsumableArray":r&&(o.push(t.numericLiteral(r)),a="slicedToArray"),t.callExpression(i.addHelper(a),o)},e.prototype.hasLabel=function(e){return!!this.getLabel(e)},e.prototype.getLabel=function(e){return this.labels.get(e)},e.prototype.registerLabel=function(e){this.labels.set(e.node.label.name,e)},e.prototype.registerDeclaration=function(e){if(e.isLabeledStatement())this.registerLabel(e);else if(e.isFunctionDeclaration())this.registerBinding("hoisted",e.get("id"),e);else if(e.isVariableDeclaration())for(var t=e.get("declarations"),r=t,i=Array.isArray(r),n=0,r=i?r:(0,_getIterator3.default)(r);;){var a;if(i){if(n>=r.length)break;a=r[n++]}else{if(n=r.next(),n.done)break;a=n.value}var o=a;this.registerBinding(e.node.kind,o)}else if(e.isClassDeclaration())this.registerBinding("let",e);else if(e.isImportDeclaration())for(var s=e.get("specifiers"),l=s,d=Array.isArray(l),u=0,l=d?l:(0,_getIterator3.default)(l);;){var f;if(d){if(u>=l.length)break;f=l[u++]}else{if(u=l.next(),u.done)break;f=u.value}var c=f;this.registerBinding("module",c)}else if(e.isExportDeclaration()){var g=e.get("declaration");(g.isClassDeclaration()||g.isFunctionDeclaration()||g.isVariableDeclaration())&&this.registerDeclaration(g)}else this.registerBinding("unknown",e)},e.prototype.buildUndefinedNode=function(){return this.hasBinding("undefined")?t.unaryExpression("void",t.numericLiteral(0),!0):t.identifier("undefined")},e.prototype.registerConstantViolation=function(e){var t=e.getBindingIdentifiers();for(var r in t){var i=this.getBinding(r);i&&i.reassign(e)}},e.prototype.registerBinding=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;if(!e)throw new ReferenceError("no `kind`");if(t.isVariableDeclaration())for(var i=t.get("declarations"),n=i,a=Array.isArray(n),o=0,n=a?n:(0,_getIterator3.default)(n);;){var s;if(a){if(o>=n.length)break;s=n[o++]}else{if(o=n.next(),o.done)break;s=o.value}var l=s;this.registerBinding(e,l)}else{var d=this.getProgramParent(),u=t.getBindingIdentifiers(!0);for(var f in u)for(var c=u[f],g=Array.isArray(c),p=0,c=g?c:(0,_getIterator3.default)(c);;){var h;if(g){if(p>=c.length)break;h=c[p++]}else{if(p=c.next(),p.done)break;h=p.value}var v=h,b=this.getOwnBinding(f);if(b){if(b.identifier===v)continue;this.checkBlockScopedCollisions(b,e,f,v)}b&&b.path.isFlow()&&(b=null),d.references[f]=!0,this.bindings[f]=new _binding3.default({identifier:v,existing:b,scope:this,path:r,kind:e})}}},e.prototype.addGlobal=function(e){this.globals[e.name]=e},e.prototype.hasUid=function(e){var t=this;do if(t.uids[e])return!0;while(t=t.parent);return!1},e.prototype.hasGlobal=function(e){var t=this;do if(t.globals[e])return!0;while(t=t.parent);return!1},e.prototype.hasReference=function(e){var t=this;do if(t.references[e])return!0;while(t=t.parent);return!1},e.prototype.isPure=function(e,r){if(t.isIdentifier(e)){var i=this.getBinding(e.name);return!!i&&(!r||i.constant)}if(t.isClass(e))return!(e.superClass&&!this.isPure(e.superClass,r))&&this.isPure(e.body,r);if(t.isClassBody(e)){for(var n=e.body,a=Array.isArray(n),o=0,n=a?n:(0,_getIterator3.default)(n);;){var s;if(a){if(o>=n.length)break;s=n[o++]}else{if(o=n.next(),o.done)break;s=o.value}var l=s;if(!this.isPure(l,r))return!1}return!0}if(t.isBinary(e))return this.isPure(e.left,r)&&this.isPure(e.right,r);if(t.isArrayExpression(e)){for(var d=e.elements,u=Array.isArray(d),f=0,d=u?d:(0,_getIterator3.default)(d);;){var c;if(u){if(f>=d.length)break;c=d[f++]}else{if(f=d.next(),f.done)break;c=f.value}var g=c;if(!this.isPure(g,r))return!1}return!0}if(t.isObjectExpression(e)){for(var p=e.properties,h=Array.isArray(p),v=0,p=h?p:(0,_getIterator3.default)(p);;){var b;if(h){if(v>=p.length)break;b=p[v++]}else{if(v=p.next(),v.done)break;b=v.value}var y=b;if(!this.isPure(y,r))return!1}return!0}return t.isClassMethod(e)?!(e.computed&&!this.isPure(e.key,r))&&("get"!==e.kind&&"set"!==e.kind):t.isClassProperty(e)||t.isObjectProperty(e)?!(e.computed&&!this.isPure(e.key,r))&&this.isPure(e.value,r):t.isUnaryExpression(e)?this.isPure(e.argument,r):t.isPureish(e)},e.prototype.setData=function(e,t){return this.data[e]=t},e.prototype.getData=function(e){var t=this;do{var r=t.data[e];if(null!=r)return r}while(t=t.parent)},e.prototype.removeData=function(e){var t=this;do{var r=t.data[e];null!=r&&(t.data[e]=null)}while(t=t.parent)},e.prototype.init=function(){this.references||this.crawl()},e.prototype.crawl=function(){_crawlCallsCount++,this._crawl(),_crawlCallsCount--},e.prototype._crawl=function(){var e=this.path;if(this.references=(0,_create2.default)(null),this.bindings=(0,_create2.default)(null),this.globals=(0,_create2.default)(null),this.uids=(0,_create2.default)(null),this.data=(0,_create2.default)(null),e.isLoop())for(var r=t.FOR_INIT_KEYS,i=Array.isArray(r),n=0,r=i?r:(0,_getIterator3.default)(r);;){var a;if(i){if(n>=r.length)break;a=r[n++]}else{if(n=r.next(),n.done)break;a=n.value}var o=a,s=e.get(o);s.isBlockScoped()&&this.registerBinding(s.node.kind,s)}if(e.isFunctionExpression()&&e.has("id")&&(e.get("id").node[t.NOT_LOCAL_BINDING]||this.registerBinding("local",e.get("id"),e)),e.isClassExpression()&&e.has("id")&&(e.get("id").node[t.NOT_LOCAL_BINDING]||this.registerBinding("local",e)),e.isFunction())for(var l=e.get("params"),d=l,u=Array.isArray(d),f=0,d=u?d:(0,_getIterator3.default)(d);;){var c;if(u){if(f>=d.length)break;c=d[f++]}else{if(f=d.next(),f.done)break;c=f.value}var g=c;this.registerBinding("param",g)}e.isCatchClause()&&this.registerBinding("let",e);var p=this.getProgramParent();if(!p.crawling){var h={references:[],constantViolations:[],assignments:[]};this.crawling=!0,e.traverse(collectorVisitor,h),this.crawling=!1;for(var v=h.assignments,b=Array.isArray(v),y=0,v=b?v:(0,_getIterator3.default)(v);;){var _;if(b){if(y>=v.length)break;_=v[y++]}else{if(y=v.next(),y.done)break;_=y.value}var m=_,k=m.getBindingIdentifiers(),B=void 0;for(var w in k)m.scope.getBinding(w)||(B=B||m.scope.getProgramParent(),B.addGlobal(k[w]));m.scope.registerConstantViolation(m)}for(var P=h.references,x=Array.isArray(P),I=0,P=x?P:(0,_getIterator3.default)(P);;){var A;if(x){if(I>=P.length)break;A=P[I++]}else{if(I=P.next(),I.done)break;A=I.value}var D=A,C=D.scope.getBinding(D.node.name);C?C.reference(D):D.scope.getProgramParent().addGlobal(D.node)}for(var q=h.constantViolations,E=Array.isArray(q),O=0,q=E?q:(0,_getIterator3.default)(q);;){var F;if(E){if(O>=q.length)break;F=q[O++]}else{if(O=q.next(),O.done)break;F=O.value}var S=F;S.scope.registerConstantViolation(S)}}},e.prototype.push=function(e){var r=this.path;r.isBlockStatement()||r.isProgram()||(r=this.getBlockParent().path),r.isSwitchStatement()&&(r=this.getFunctionParent().path),(r.isLoop()||r.isCatchClause()||r.isFunction())&&(t.ensureBlock(r.node),r=r.get("body"));var i=e.unique,n=e.kind||"var",a=null==e._blockHoist?2:e._blockHoist,o="declaration:"+n+":"+a,s=!i&&r.getData(o);if(!s){var l=t.variableDeclaration(n,[]);l._generated=!0,l._blockHoist=a;var d=r.unshiftContainer("body",[l]);s=d[0],i||r.setData(o,s)}var u=t.variableDeclarator(e.id,e.init);s.node.declarations.push(u),this.registerBinding(n,s.get("declarations").pop())},e.prototype.getProgramParent=function(){var e=this;do if(e.path.isProgram())return e;while(e=e.parent);throw new Error("We couldn't find a Function or Program...")},e.prototype.getFunctionParent=function(){var e=this;do if(e.path.isFunctionParent())return e;while(e=e.parent);throw new Error("We couldn't find a Function or Program...")},e.prototype.getBlockParent=function(){var e=this;do if(e.path.isBlockParent())return e;while(e=e.parent);throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...")},e.prototype.getAllBindings=function(){var e=(0,_create2.default)(null),t=this;do(0,_defaults2.default)(e,t.bindings),t=t.parent;while(t);return e},e.prototype.getAllBindingsOfKind=function(){for(var e=(0,_create2.default)(null),t=arguments,r=Array.isArray(t),i=0,t=r?t:(0,_getIterator3.default)(t);;){var n;if(r){if(i>=t.length)break;n=t[i++]}else{if(i=t.next(),i.done)break;n=i.value}var a=n,o=this;do{for(var s in o.bindings){var l=o.bindings[s];l.kind===a&&(e[s]=l)}o=o.parent}while(o)}return e},e.prototype.bindingIdentifierEquals=function(e,t){return this.getBindingIdentifier(e)===t},e.prototype.warnOnFlowBinding=function(e){return 0===_crawlCallsCount&&e&&e.path.isFlow()&&console.warn("\n        You or one of the Babel plugins you are using are using Flow declarations as bindings.\n        Support for this will be removed in version 6.8. To find out the caller, grep for this\n        message and change it to a `console.trace()`.\n      "),e},e.prototype.getBinding=function(e){var t=this;do{var r=t.getOwnBinding(e);if(r)return this.warnOnFlowBinding(r)}while(t=t.parent)},e.prototype.getOwnBinding=function(e){return this.warnOnFlowBinding(this.bindings[e])},e.prototype.getBindingIdentifier=function(e){var t=this.getBinding(e);return t&&t.identifier},e.prototype.getOwnBindingIdentifier=function(e){var t=this.bindings[e];return t&&t.identifier},e.prototype.hasOwnBinding=function(e){return!!this.getOwnBinding(e)},e.prototype.hasBinding=function(t,r){return!!t&&(!!this.hasOwnBinding(t)||(!!this.parentHasBinding(t,r)||(!!this.hasUid(t)||(!(r||!(0,_includes2.default)(e.globals,t))||!(r||!(0,_includes2.default)(e.contextVariables,t))))))},e.prototype.parentHasBinding=function(e,t){return this.parent&&this.parent.hasBinding(e,t)},e.prototype.moveBindingTo=function(e,t){var r=this.getBinding(e);r&&(r.scope.removeOwnBinding(e),r.scope=t,t.bindings[e]=r)},e.prototype.removeOwnBinding=function(e){delete this.bindings[e]},e.prototype.removeBinding=function(e){var t=this.getBinding(e);t&&t.scope.removeOwnBinding(e);var r=this;do r.uids[e]&&(r.uids[e]=!1);while(r=r.parent)},e}();Scope.globals=(0,_keys2.default)(_globals2.default.builtin),Scope.contextVariables=["arguments","undefined","Infinity","NaN"],exports.default=Scope,module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/includes.js":
/***/ function(module, exports, __webpack_require__) {

	function includes(e,r,i,n){e=isArrayLike(e)?e:values(e),i=i&&!n?toInteger(i):0;var a=e.length;return i<0&&(i=nativeMax(a+i,0)),isString(e)?i<=a&&e.indexOf(r,i)>-1:!!a&&baseIndexOf(e,r,i)>-1}var baseIndexOf=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseIndexOf.js"),isArrayLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArrayLike.js"),isString=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isString.js"),toInteger=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/toInteger.js"),values=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/values.js"),nativeMax=Math.max;module.exports=includes;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseIndexOf.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIndexOf(e,s,n){return s===s?strictIndexOf(e,s,n):baseFindIndex(e,baseIsNaN,n)}var baseFindIndex=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseFindIndex.js"),baseIsNaN=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseIsNaN.js"),strictIndexOf=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_strictIndexOf.js");module.exports=baseIndexOf;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseFindIndex.js":
/***/ function(module, exports) {

	function baseFindIndex(e,n,r,d){for(var t=e.length,i=r+(d?1:-1);d?i--:++i<t;)if(n(e[i],i,e))return i;return-1}module.exports=baseFindIndex;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseIsNaN.js":
/***/ function(module, exports) {

	function baseIsNaN(e){return e!==e}module.exports=baseIsNaN;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_strictIndexOf.js":
/***/ function(module, exports) {

	function strictIndexOf(r,t,e){for(var n=e-1,f=r.length;++n<f;)if(r[n]===t)return n;return-1}module.exports=strictIndexOf;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isString.js":
/***/ function(module, exports, __webpack_require__) {

	function isString(e){return"string"==typeof e||!isArray(e)&&isObjectLike(e)&&baseGetTag(e)==stringTag}var baseGetTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseGetTag.js"),isArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArray.js"),isObjectLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObjectLike.js"),stringTag="[object String]";module.exports=isString;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/toInteger.js":
/***/ function(module, exports, __webpack_require__) {

	function toInteger(t){var e=toFinite(t),r=e%1;return e===e?r?e-r:e:0}var toFinite=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/toFinite.js");module.exports=toInteger;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/toFinite.js":
/***/ function(module, exports, __webpack_require__) {

	function toFinite(r){if(!r)return 0===r?r:0;if(r=toNumber(r),r===INFINITY||r===-INFINITY){var e=r<0?-1:1;return e*MAX_INTEGER}return r===r?r:0}var toNumber=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/toNumber.js"),INFINITY=1/0,MAX_INTEGER=1.7976931348623157e308;module.exports=toFinite;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/toNumber.js":
/***/ function(module, exports, __webpack_require__) {

	function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;if(isObject(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=isObject(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var t=reIsBinary.test(e);return t||reIsOctal.test(e)?freeParseInt(e.slice(2),t?2:8):reIsBadHex.test(e)?NAN:+e}var isObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isSymbol.js"),NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=toNumber;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/isSymbol.js":
/***/ function(module, exports, __webpack_require__) {

	function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&baseGetTag(e)==symbolTag}var baseGetTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObjectLike.js"),symbolTag="[object Symbol]";module.exports=isSymbol;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/values.js":
/***/ function(module, exports, __webpack_require__) {

	function values(e){return null==e?[]:baseValues(e,keys(e))}var baseValues=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/keys.js");module.exports=values;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseValues.js":
/***/ function(module, exports, __webpack_require__) {

	function baseValues(a,r){return arrayMap(r,function(r){return a[r]})}var arrayMap=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayMap.js");module.exports=baseValues;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_arrayMap.js":
/***/ function(module, exports) {

	function arrayMap(r,a){for(var n=-1,e=null==r?0:r.length,l=Array(e);++n<e;)l[n]=a(r[n],n,r);return l}module.exports=arrayMap;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/repeat.js":
/***/ function(module, exports, __webpack_require__) {

	function repeat(e,t,r){return t=(r?isIterateeCall(e,t,r):void 0===t)?1:toInteger(t),baseRepeat(toString(e),t)}var baseRepeat=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseRepeat.js"),isIterateeCall=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isIterateeCall.js"),toInteger=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/toInteger.js"),toString=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/toString.js");module.exports=repeat;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseRepeat.js":
/***/ function(module, exports) {

	function baseRepeat(e,o){var r="";if(!e||o<1||o>MAX_SAFE_INTEGER)return r;do o%2&&(r+=e),o=nativeFloor(o/2),o&&(e+=e);while(o);return r}var MAX_SAFE_INTEGER=9007199254740991,nativeFloor=Math.floor;module.exports=baseRepeat;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/toString.js":
/***/ function(module, exports, __webpack_require__) {

	function toString(r){return null==r?"":baseToString(r)}var baseToString=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseToString.js");module.exports=toString;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseToString.js":
/***/ function(module, exports, __webpack_require__) {

	function baseToString(r){if("string"==typeof r)return r;if(isArray(r))return arrayMap(r,baseToString)+"";if(isSymbol(r))return symbolToString?symbolToString.call(r):"";var o=r+"";return"0"==o&&1/r==-INFINITY?"-0":o}var Symbol=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Symbol.js"),arrayMap=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayMap.js"),isArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArray.js"),isSymbol=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isSymbol.js"),INFINITY=1/0,symbolProto=Symbol?Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;module.exports=baseToString;

/***/ },

/***/ "./node_modules/babel-traverse/lib/scope/lib/renamer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i.default=e,i}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_binding=__webpack_require__("./node_modules/babel-traverse/lib/scope/binding.js"),_binding2=_interopRequireDefault(_binding),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),renameVisitor={ReferencedIdentifier:function(e,i){var n=e.node;n.name===i.oldName&&(n.name=i.newName)},Scope:function(e,i){e.scope.bindingIdentifierEquals(i.oldName,i.binding.identifier)||e.skip()},"AssignmentExpression|Declaration":function(e,i){var n=e.getOuterBindingIdentifiers();for(var t in n)t===i.oldName&&(n[t].name=i.newName)}},Renamer=function(){function e(i,n,t){(0,_classCallCheck3.default)(this,e),this.newName=t,this.oldName=n,this.binding=i}return e.prototype.maybeConvertFromExportDeclaration=function(e){var i=e.parentPath.isExportDeclaration()&&e.parentPath;if(i){var n=i.isExportDefaultDeclaration();n&&(e.isFunctionDeclaration()||e.isClassDeclaration())&&!e.node.id&&(e.node.id=e.scope.generateUidIdentifier("default"));var r=e.getOuterBindingIdentifiers(),a=[];for(var o in r){var s=o===this.oldName?this.newName:o,l=n?"default":o;a.push(t.exportSpecifier(t.identifier(s),t.identifier(l)))}if(a.length){var c=t.exportNamedDeclaration(null,a);e.isFunctionDeclaration()&&(c._blockHoist=3),i.insertAfter(c),i.replaceWith(e.node)}}},e.prototype.maybeConvertFromClassFunctionDeclaration=function(e){},e.prototype.maybeConvertFromClassFunctionExpression=function(e){},e.prototype.rename=function(e){var i=this.binding,n=this.oldName,t=this.newName,r=i.scope,a=i.path,o=a.find(function(e){return e.isDeclaration()||e.isFunctionExpression()});o&&this.maybeConvertFromExportDeclaration(o),r.traverse(e||r.block,renameVisitor,this),e||(r.removeOwnBinding(n),r.bindings[t]=i,this.binding.identifier.name=t),"hoisted"===i.type,o&&(this.maybeConvertFromClassFunctionDeclaration(o),this.maybeConvertFromClassFunctionExpression(o))},e}();exports.default=Renamer,module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-traverse/lib/scope/binding.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),Binding=function(){function e(t){var s=t.existing,i=t.identifier,n=t.scope,a=t.path,o=t.kind;(0,_classCallCheck3.default)(this,e),this.identifier=i,this.scope=n,this.path=a,this.kind=o,this.constantViolations=[],this.constant=!0,this.referencePaths=[],this.referenced=!1,this.references=0,this.clearValue(),s&&(this.constantViolations=[].concat(s.path,s.constantViolations,this.constantViolations))}return e.prototype.deoptValue=function(){this.clearValue(),this.hasDeoptedValue=!0},e.prototype.setValue=function(e){this.hasDeoptedValue||(this.hasValue=!0,this.value=e)},e.prototype.clearValue=function(){this.hasDeoptedValue=!1,this.hasValue=!1,this.value=null},e.prototype.reassign=function(e){this.constant=!1,this.constantViolations.indexOf(e)===-1&&this.constantViolations.push(e)},e.prototype.reference=function(e){this.referencePaths.indexOf(e)===-1&&(this.referenced=!0,this.references++,this.referencePaths.push(e))},e.prototype.dereference=function(){this.references--,this.referenced=!!this.references},e}();exports.default=Binding,module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/defaults.js":
/***/ function(module, exports, __webpack_require__) {

	var apply=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_apply.js"),assignInWith=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/assignInWith.js"),baseRest=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseRest.js"),customDefaultsAssignIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_customDefaultsAssignIn.js"),defaults=baseRest(function(s){return s.push(void 0,customDefaultsAssignIn),apply(assignInWith,void 0,s)});module.exports=defaults;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/assignInWith.js":
/***/ function(module, exports, __webpack_require__) {

	var copyObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copyObject.js"),createAssigner=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_createAssigner.js"),keysIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/keysIn.js"),assignInWith=createAssigner(function(e,r,s,n){copyObject(r,keysIn(r),e,n)});module.exports=assignInWith;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/keysIn.js":
/***/ function(module, exports, __webpack_require__) {

	function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}var arrayLikeKeys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayLikeKeys.js"),baseKeysIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseKeysIn.js"),isArrayLike=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArrayLike.js");module.exports=keysIn;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseKeysIn.js":
/***/ function(module, exports, __webpack_require__) {

	function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var r=isPrototype(e),t=[];for(var o in e)("constructor"!=o||!r&&hasOwnProperty.call(e,o))&&t.push(o);return t}var isObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObject.js"),isPrototype=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isPrototype.js"),nativeKeysIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_nativeKeysIn.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseKeysIn;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_nativeKeysIn.js":
/***/ function(module, exports) {

	function nativeKeysIn(n){var e=[];if(null!=n)for(var r in Object(n))e.push(r);return e}module.exports=nativeKeysIn;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_customDefaultsAssignIn.js":
/***/ function(module, exports, __webpack_require__) {

	function customDefaultsAssignIn(o,t,e,r){return void 0===o||eq(o,objectProto[e])&&!hasOwnProperty.call(r,e)?t:o}var eq=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/eq.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=customDefaultsAssignIn;

/***/ },

/***/ "./node_modules/babel-messages/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function get(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=MESSAGES[e];if(!i)throw new ReferenceError("Unknown message "+(0,_stringify2.default)(e));return r=parseArgs(r),i.replace(/\$(\d+)/g,function(e,t){return r[t-1]})}function parseArgs(e){return e.map(function(e){if(null!=e&&e.inspect)return e.inspect();try{return(0,_stringify2.default)(e)||e+""}catch(t){return util.inspect(e)}})}exports.__esModule=!0,exports.MESSAGES=void 0;var _stringify=__webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js"),_stringify2=_interopRequireDefault(_stringify);exports.get=get,exports.parseArgs=parseArgs;var _util=__webpack_require__("./node_modules/util/util.js"),util=_interopRequireWildcard(_util),MESSAGES=exports.MESSAGES={tailCallReassignmentDeopt:"Function reference has been reassigned, so it will probably be dereferenced, therefore we can't optimise this with confidence",classesIllegalBareSuper:"Illegal use of bare super",classesIllegalSuperCall:"Direct super call is illegal in non-constructor, use super.$1() instead",scopeDuplicateDeclaration:"Duplicate declaration $1",settersNoRest:"Setters aren't allowed to have a rest",noAssignmentsInForHead:"No assignments allowed in for-in/of head",expectedMemberExpressionOrIdentifier:"Expected type MemberExpression or Identifier",invalidParentForThisNode:"We don't know how to handle this node within the current parent - please open an issue",readOnly:"$1 is read-only",unknownForHead:"Unknown node type $1 in ForStatement",didYouMean:"Did you mean $1?",codeGeneratorDeopt:"Note: The code generator has deoptimised the styling of $1 as it exceeds the max of $2.",missingTemplatesDirectory:"no templates directory - this is most likely the result of a broken `npm publish`. Please report to https://github.com/babel/babel/issues",unsupportedOutputType:"Unsupported output type $1",illegalMethodName:"Illegal method name $1",lostTrackNodePath:"We lost track of this node's position, likely because the AST was directly manipulated",modulesIllegalExportName:"Illegal export $1",modulesDuplicateDeclarations:"Duplicate module declarations with the same source but in different scopes",undeclaredVariable:"Reference to undeclared variable $1",undeclaredVariableType:"Referencing a type alias outside of a type annotation",undeclaredVariableSuggestion:"Reference to undeclared variable $1 - did you mean $2?",traverseNeedsParent:"You must pass a scope and parentPath unless traversing a Program/File. Instead of that you tried to traverse a $1 node without passing scope and parentPath.",traverseVerifyRootFunction:"You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?",traverseVerifyVisitorProperty:"You passed `traverse()` a visitor object with the property $1 that has the invalid property $2",traverseVerifyNodeType:"You gave us a visitor for the node type $1 but it's not a valid type",pluginNotObject:"Plugin $2 specified in $1 was expected to return an object when invoked but returned $3",pluginNotFunction:"Plugin $2 specified in $1 was expected to return a function but returned $3",pluginUnknown:"Unknown plugin $1 specified in $2 at $3, attempted to resolve relative to $4",pluginInvalidProperty:"Plugin $2 specified in $1 provided an invalid property of $3"};

/***/ },

/***/ "./node_modules/globals/index.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports=__webpack_require__("./node_modules/globals/globals.json");

/***/ },

/***/ "./node_modules/globals/globals.json":
/***/ function(module, exports) {

	module.exports = {
		"builtin": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"es5": {
			"Array": false,
			"Boolean": false,
			"constructor": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"propertyIsEnumerable": false,
			"RangeError": false,
			"ReferenceError": false,
			"RegExp": false,
			"String": false,
			"SyntaxError": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false
		},
		"es6": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"browser": {
			"addEventListener": false,
			"alert": false,
			"AnalyserNode": false,
			"Animation": false,
			"AnimationEffectReadOnly": false,
			"AnimationEffectTiming": false,
			"AnimationEffectTimingReadOnly": false,
			"AnimationEvent": false,
			"AnimationPlaybackEvent": false,
			"AnimationTimeline": false,
			"applicationCache": false,
			"ApplicationCache": false,
			"ApplicationCacheErrorEvent": false,
			"atob": false,
			"Attr": false,
			"Audio": false,
			"AudioBuffer": false,
			"AudioBufferSourceNode": false,
			"AudioContext": false,
			"AudioDestinationNode": false,
			"AudioListener": false,
			"AudioNode": false,
			"AudioParam": false,
			"AudioProcessingEvent": false,
			"AutocompleteErrorEvent": false,
			"BarProp": false,
			"BatteryManager": false,
			"BeforeUnloadEvent": false,
			"BiquadFilterNode": false,
			"Blob": false,
			"blur": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"CacheStorage": false,
			"cancelAnimationFrame": false,
			"CanvasGradient": false,
			"CanvasPattern": false,
			"CanvasRenderingContext2D": false,
			"CDATASection": false,
			"ChannelMergerNode": false,
			"ChannelSplitterNode": false,
			"CharacterData": false,
			"clearInterval": false,
			"clearTimeout": false,
			"clientInformation": false,
			"ClientRect": false,
			"ClientRectList": false,
			"ClipboardEvent": false,
			"close": false,
			"closed": false,
			"CloseEvent": false,
			"Comment": false,
			"CompositionEvent": false,
			"confirm": false,
			"console": false,
			"ConvolverNode": false,
			"Credential": false,
			"CredentialsContainer": false,
			"crypto": false,
			"Crypto": false,
			"CryptoKey": false,
			"CSS": false,
			"CSSAnimation": false,
			"CSSFontFaceRule": false,
			"CSSImportRule": false,
			"CSSKeyframeRule": false,
			"CSSKeyframesRule": false,
			"CSSMediaRule": false,
			"CSSPageRule": false,
			"CSSRule": false,
			"CSSRuleList": false,
			"CSSStyleDeclaration": false,
			"CSSStyleRule": false,
			"CSSStyleSheet": false,
			"CSSSupportsRule": false,
			"CSSTransition": false,
			"CSSUnknownRule": false,
			"CSSViewportRule": false,
			"customElements": false,
			"CustomEvent": false,
			"DataTransfer": false,
			"DataTransferItem": false,
			"DataTransferItemList": false,
			"Debug": false,
			"defaultStatus": false,
			"defaultstatus": false,
			"DelayNode": false,
			"DeviceMotionEvent": false,
			"DeviceOrientationEvent": false,
			"devicePixelRatio": false,
			"dispatchEvent": false,
			"document": false,
			"Document": false,
			"DocumentFragment": false,
			"DocumentTimeline": false,
			"DocumentType": false,
			"DOMError": false,
			"DOMException": false,
			"DOMImplementation": false,
			"DOMParser": false,
			"DOMSettableTokenList": false,
			"DOMStringList": false,
			"DOMStringMap": false,
			"DOMTokenList": false,
			"DragEvent": false,
			"DynamicsCompressorNode": false,
			"Element": false,
			"ElementTimeControl": false,
			"ErrorEvent": false,
			"event": false,
			"Event": false,
			"EventSource": false,
			"EventTarget": false,
			"external": false,
			"FederatedCredential": false,
			"fetch": false,
			"File": false,
			"FileError": false,
			"FileList": false,
			"FileReader": false,
			"find": false,
			"focus": false,
			"FocusEvent": false,
			"FontFace": false,
			"FormData": false,
			"frameElement": false,
			"frames": false,
			"GainNode": false,
			"Gamepad": false,
			"GamepadButton": false,
			"GamepadEvent": false,
			"getComputedStyle": false,
			"getSelection": false,
			"HashChangeEvent": false,
			"Headers": false,
			"history": false,
			"History": false,
			"HTMLAllCollection": false,
			"HTMLAnchorElement": false,
			"HTMLAppletElement": false,
			"HTMLAreaElement": false,
			"HTMLAudioElement": false,
			"HTMLBaseElement": false,
			"HTMLBlockquoteElement": false,
			"HTMLBodyElement": false,
			"HTMLBRElement": false,
			"HTMLButtonElement": false,
			"HTMLCanvasElement": false,
			"HTMLCollection": false,
			"HTMLContentElement": false,
			"HTMLDataListElement": false,
			"HTMLDetailsElement": false,
			"HTMLDialogElement": false,
			"HTMLDirectoryElement": false,
			"HTMLDivElement": false,
			"HTMLDListElement": false,
			"HTMLDocument": false,
			"HTMLElement": false,
			"HTMLEmbedElement": false,
			"HTMLFieldSetElement": false,
			"HTMLFontElement": false,
			"HTMLFormControlsCollection": false,
			"HTMLFormElement": false,
			"HTMLFrameElement": false,
			"HTMLFrameSetElement": false,
			"HTMLHeadElement": false,
			"HTMLHeadingElement": false,
			"HTMLHRElement": false,
			"HTMLHtmlElement": false,
			"HTMLIFrameElement": false,
			"HTMLImageElement": false,
			"HTMLInputElement": false,
			"HTMLIsIndexElement": false,
			"HTMLKeygenElement": false,
			"HTMLLabelElement": false,
			"HTMLLayerElement": false,
			"HTMLLegendElement": false,
			"HTMLLIElement": false,
			"HTMLLinkElement": false,
			"HTMLMapElement": false,
			"HTMLMarqueeElement": false,
			"HTMLMediaElement": false,
			"HTMLMenuElement": false,
			"HTMLMetaElement": false,
			"HTMLMeterElement": false,
			"HTMLModElement": false,
			"HTMLObjectElement": false,
			"HTMLOListElement": false,
			"HTMLOptGroupElement": false,
			"HTMLOptionElement": false,
			"HTMLOptionsCollection": false,
			"HTMLOutputElement": false,
			"HTMLParagraphElement": false,
			"HTMLParamElement": false,
			"HTMLPictureElement": false,
			"HTMLPreElement": false,
			"HTMLProgressElement": false,
			"HTMLQuoteElement": false,
			"HTMLScriptElement": false,
			"HTMLSelectElement": false,
			"HTMLShadowElement": false,
			"HTMLSourceElement": false,
			"HTMLSpanElement": false,
			"HTMLStyleElement": false,
			"HTMLTableCaptionElement": false,
			"HTMLTableCellElement": false,
			"HTMLTableColElement": false,
			"HTMLTableElement": false,
			"HTMLTableRowElement": false,
			"HTMLTableSectionElement": false,
			"HTMLTemplateElement": false,
			"HTMLTextAreaElement": false,
			"HTMLTitleElement": false,
			"HTMLTrackElement": false,
			"HTMLUListElement": false,
			"HTMLUnknownElement": false,
			"HTMLVideoElement": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBEnvironment": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"Image": false,
			"ImageBitmap": false,
			"ImageData": false,
			"indexedDB": false,
			"innerHeight": false,
			"innerWidth": false,
			"InputEvent": false,
			"InputMethodContext": false,
			"IntersectionObserver": false,
			"IntersectionObserverEntry": false,
			"Intl": false,
			"KeyboardEvent": false,
			"KeyframeEffect": false,
			"KeyframeEffectReadOnly": false,
			"length": false,
			"localStorage": false,
			"location": false,
			"Location": false,
			"locationbar": false,
			"matchMedia": false,
			"MediaElementAudioSourceNode": false,
			"MediaEncryptedEvent": false,
			"MediaError": false,
			"MediaKeyError": false,
			"MediaKeyEvent": false,
			"MediaKeyMessageEvent": false,
			"MediaKeys": false,
			"MediaKeySession": false,
			"MediaKeyStatusMap": false,
			"MediaKeySystemAccess": false,
			"MediaList": false,
			"MediaQueryList": false,
			"MediaQueryListEvent": false,
			"MediaSource": false,
			"MediaStream": false,
			"MediaStreamAudioDestinationNode": false,
			"MediaStreamAudioSourceNode": false,
			"MediaStreamEvent": false,
			"MediaStreamTrack": false,
			"menubar": false,
			"MessageChannel": false,
			"MessageEvent": false,
			"MessagePort": false,
			"MIDIAccess": false,
			"MIDIConnectionEvent": false,
			"MIDIInput": false,
			"MIDIInputMap": false,
			"MIDIMessageEvent": false,
			"MIDIOutput": false,
			"MIDIOutputMap": false,
			"MIDIPort": false,
			"MimeType": false,
			"MimeTypeArray": false,
			"MouseEvent": false,
			"moveBy": false,
			"moveTo": false,
			"MutationEvent": false,
			"MutationObserver": false,
			"MutationRecord": false,
			"name": false,
			"NamedNodeMap": false,
			"navigator": false,
			"Navigator": false,
			"Node": false,
			"NodeFilter": false,
			"NodeIterator": false,
			"NodeList": false,
			"Notification": false,
			"OfflineAudioCompletionEvent": false,
			"OfflineAudioContext": false,
			"offscreenBuffering": false,
			"onbeforeunload": true,
			"onblur": true,
			"onerror": true,
			"onfocus": true,
			"onload": true,
			"onresize": true,
			"onunload": true,
			"open": false,
			"openDatabase": false,
			"opener": false,
			"opera": false,
			"Option": false,
			"OscillatorNode": false,
			"outerHeight": false,
			"outerWidth": false,
			"PageTransitionEvent": false,
			"pageXOffset": false,
			"pageYOffset": false,
			"parent": false,
			"PasswordCredential": false,
			"Path2D": false,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"PeriodicWave": false,
			"Permissions": false,
			"PermissionStatus": false,
			"personalbar": false,
			"Plugin": false,
			"PluginArray": false,
			"PopStateEvent": false,
			"postMessage": false,
			"print": false,
			"ProcessingInstruction": false,
			"ProgressEvent": false,
			"PromiseRejectionEvent": false,
			"prompt": false,
			"PushManager": false,
			"PushSubscription": false,
			"RadioNodeList": false,
			"Range": false,
			"ReadableByteStream": false,
			"ReadableStream": false,
			"removeEventListener": false,
			"Request": false,
			"requestAnimationFrame": false,
			"requestIdleCallback": false,
			"resizeBy": false,
			"resizeTo": false,
			"Response": false,
			"RTCIceCandidate": false,
			"RTCSessionDescription": false,
			"RTCPeerConnection": false,
			"screen": false,
			"Screen": false,
			"screenLeft": false,
			"ScreenOrientation": false,
			"screenTop": false,
			"screenX": false,
			"screenY": false,
			"ScriptProcessorNode": false,
			"scroll": false,
			"scrollbars": false,
			"scrollBy": false,
			"scrollTo": false,
			"scrollX": false,
			"scrollY": false,
			"SecurityPolicyViolationEvent": false,
			"Selection": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerRegistration": false,
			"sessionStorage": false,
			"setInterval": false,
			"setTimeout": false,
			"ShadowRoot": false,
			"SharedKeyframeList": false,
			"SharedWorker": false,
			"showModalDialog": false,
			"SiteBoundCredential": false,
			"speechSynthesis": false,
			"SpeechSynthesisEvent": false,
			"SpeechSynthesisUtterance": false,
			"status": false,
			"statusbar": false,
			"stop": false,
			"Storage": false,
			"StorageEvent": false,
			"styleMedia": false,
			"StyleSheet": false,
			"StyleSheetList": false,
			"SubtleCrypto": false,
			"SVGAElement": false,
			"SVGAltGlyphDefElement": false,
			"SVGAltGlyphElement": false,
			"SVGAltGlyphItemElement": false,
			"SVGAngle": false,
			"SVGAnimateColorElement": false,
			"SVGAnimatedAngle": false,
			"SVGAnimatedBoolean": false,
			"SVGAnimatedEnumeration": false,
			"SVGAnimatedInteger": false,
			"SVGAnimatedLength": false,
			"SVGAnimatedLengthList": false,
			"SVGAnimatedNumber": false,
			"SVGAnimatedNumberList": false,
			"SVGAnimatedPathData": false,
			"SVGAnimatedPoints": false,
			"SVGAnimatedPreserveAspectRatio": false,
			"SVGAnimatedRect": false,
			"SVGAnimatedString": false,
			"SVGAnimatedTransformList": false,
			"SVGAnimateElement": false,
			"SVGAnimateMotionElement": false,
			"SVGAnimateTransformElement": false,
			"SVGAnimationElement": false,
			"SVGCircleElement": false,
			"SVGClipPathElement": false,
			"SVGColor": false,
			"SVGColorProfileElement": false,
			"SVGColorProfileRule": false,
			"SVGComponentTransferFunctionElement": false,
			"SVGCSSRule": false,
			"SVGCursorElement": false,
			"SVGDefsElement": false,
			"SVGDescElement": false,
			"SVGDiscardElement": false,
			"SVGDocument": false,
			"SVGElement": false,
			"SVGElementInstance": false,
			"SVGElementInstanceList": false,
			"SVGEllipseElement": false,
			"SVGEvent": false,
			"SVGExternalResourcesRequired": false,
			"SVGFEBlendElement": false,
			"SVGFEColorMatrixElement": false,
			"SVGFEComponentTransferElement": false,
			"SVGFECompositeElement": false,
			"SVGFEConvolveMatrixElement": false,
			"SVGFEDiffuseLightingElement": false,
			"SVGFEDisplacementMapElement": false,
			"SVGFEDistantLightElement": false,
			"SVGFEDropShadowElement": false,
			"SVGFEFloodElement": false,
			"SVGFEFuncAElement": false,
			"SVGFEFuncBElement": false,
			"SVGFEFuncGElement": false,
			"SVGFEFuncRElement": false,
			"SVGFEGaussianBlurElement": false,
			"SVGFEImageElement": false,
			"SVGFEMergeElement": false,
			"SVGFEMergeNodeElement": false,
			"SVGFEMorphologyElement": false,
			"SVGFEOffsetElement": false,
			"SVGFEPointLightElement": false,
			"SVGFESpecularLightingElement": false,
			"SVGFESpotLightElement": false,
			"SVGFETileElement": false,
			"SVGFETurbulenceElement": false,
			"SVGFilterElement": false,
			"SVGFilterPrimitiveStandardAttributes": false,
			"SVGFitToViewBox": false,
			"SVGFontElement": false,
			"SVGFontFaceElement": false,
			"SVGFontFaceFormatElement": false,
			"SVGFontFaceNameElement": false,
			"SVGFontFaceSrcElement": false,
			"SVGFontFaceUriElement": false,
			"SVGForeignObjectElement": false,
			"SVGGElement": false,
			"SVGGeometryElement": false,
			"SVGGlyphElement": false,
			"SVGGlyphRefElement": false,
			"SVGGradientElement": false,
			"SVGGraphicsElement": false,
			"SVGHKernElement": false,
			"SVGICCColor": false,
			"SVGImageElement": false,
			"SVGLangSpace": false,
			"SVGLength": false,
			"SVGLengthList": false,
			"SVGLinearGradientElement": false,
			"SVGLineElement": false,
			"SVGLocatable": false,
			"SVGMarkerElement": false,
			"SVGMaskElement": false,
			"SVGMatrix": false,
			"SVGMetadataElement": false,
			"SVGMissingGlyphElement": false,
			"SVGMPathElement": false,
			"SVGNumber": false,
			"SVGNumberList": false,
			"SVGPaint": false,
			"SVGPathElement": false,
			"SVGPathSeg": false,
			"SVGPathSegArcAbs": false,
			"SVGPathSegArcRel": false,
			"SVGPathSegClosePath": false,
			"SVGPathSegCurvetoCubicAbs": false,
			"SVGPathSegCurvetoCubicRel": false,
			"SVGPathSegCurvetoCubicSmoothAbs": false,
			"SVGPathSegCurvetoCubicSmoothRel": false,
			"SVGPathSegCurvetoQuadraticAbs": false,
			"SVGPathSegCurvetoQuadraticRel": false,
			"SVGPathSegCurvetoQuadraticSmoothAbs": false,
			"SVGPathSegCurvetoQuadraticSmoothRel": false,
			"SVGPathSegLinetoAbs": false,
			"SVGPathSegLinetoHorizontalAbs": false,
			"SVGPathSegLinetoHorizontalRel": false,
			"SVGPathSegLinetoRel": false,
			"SVGPathSegLinetoVerticalAbs": false,
			"SVGPathSegLinetoVerticalRel": false,
			"SVGPathSegList": false,
			"SVGPathSegMovetoAbs": false,
			"SVGPathSegMovetoRel": false,
			"SVGPatternElement": false,
			"SVGPoint": false,
			"SVGPointList": false,
			"SVGPolygonElement": false,
			"SVGPolylineElement": false,
			"SVGPreserveAspectRatio": false,
			"SVGRadialGradientElement": false,
			"SVGRect": false,
			"SVGRectElement": false,
			"SVGRenderingIntent": false,
			"SVGScriptElement": false,
			"SVGSetElement": false,
			"SVGStopElement": false,
			"SVGStringList": false,
			"SVGStylable": false,
			"SVGStyleElement": false,
			"SVGSVGElement": false,
			"SVGSwitchElement": false,
			"SVGSymbolElement": false,
			"SVGTests": false,
			"SVGTextContentElement": false,
			"SVGTextElement": false,
			"SVGTextPathElement": false,
			"SVGTextPositioningElement": false,
			"SVGTitleElement": false,
			"SVGTransform": false,
			"SVGTransformable": false,
			"SVGTransformList": false,
			"SVGTRefElement": false,
			"SVGTSpanElement": false,
			"SVGUnitTypes": false,
			"SVGURIReference": false,
			"SVGUseElement": false,
			"SVGViewElement": false,
			"SVGViewSpec": false,
			"SVGVKernElement": false,
			"SVGZoomAndPan": false,
			"SVGZoomEvent": false,
			"Text": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"TextEvent": false,
			"TextMetrics": false,
			"TextTrack": false,
			"TextTrackCue": false,
			"TextTrackCueList": false,
			"TextTrackList": false,
			"TimeEvent": false,
			"TimeRanges": false,
			"toolbar": false,
			"top": false,
			"Touch": false,
			"TouchEvent": false,
			"TouchList": false,
			"TrackEvent": false,
			"TransitionEvent": false,
			"TreeWalker": false,
			"UIEvent": false,
			"URL": false,
			"URLSearchParams": false,
			"ValidityState": false,
			"VTTCue": false,
			"WaveShaperNode": false,
			"WebGLActiveInfo": false,
			"WebGLBuffer": false,
			"WebGLContextEvent": false,
			"WebGLFramebuffer": false,
			"WebGLProgram": false,
			"WebGLRenderbuffer": false,
			"WebGLRenderingContext": false,
			"WebGLShader": false,
			"WebGLShaderPrecisionFormat": false,
			"WebGLTexture": false,
			"WebGLUniformLocation": false,
			"WebSocket": false,
			"WheelEvent": false,
			"window": false,
			"Window": false,
			"Worker": false,
			"XDomainRequest": false,
			"XMLDocument": false,
			"XMLHttpRequest": false,
			"XMLHttpRequestEventTarget": false,
			"XMLHttpRequestProgressEvent": false,
			"XMLHttpRequestUpload": false,
			"XMLSerializer": false,
			"XPathEvaluator": false,
			"XPathException": false,
			"XPathExpression": false,
			"XPathNamespace": false,
			"XPathNSResolver": false,
			"XPathResult": false,
			"XSLTProcessor": false
		},
		"worker": {
			"applicationCache": false,
			"atob": false,
			"Blob": false,
			"BroadcastChannel": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"clearInterval": false,
			"clearTimeout": false,
			"close": true,
			"console": false,
			"fetch": false,
			"FileReaderSync": false,
			"FormData": false,
			"Headers": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"ImageData": false,
			"importScripts": true,
			"indexedDB": false,
			"location": false,
			"MessageChannel": false,
			"MessagePort": false,
			"name": false,
			"navigator": false,
			"Notification": false,
			"onclose": true,
			"onconnect": true,
			"onerror": true,
			"onlanguagechange": true,
			"onmessage": true,
			"onoffline": true,
			"ononline": true,
			"onrejectionhandled": true,
			"onunhandledrejection": true,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"postMessage": true,
			"Promise": false,
			"Request": false,
			"Response": false,
			"self": true,
			"ServiceWorkerRegistration": false,
			"setInterval": false,
			"setTimeout": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"URL": false,
			"URLSearchParams": false,
			"WebSocket": false,
			"Worker": false,
			"XMLHttpRequest": false
		},
		"node": {
			"__dirname": false,
			"__filename": false,
			"arguments": false,
			"Buffer": false,
			"clearImmediate": false,
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"exports": true,
			"GLOBAL": false,
			"global": false,
			"Intl": false,
			"module": false,
			"process": false,
			"require": false,
			"root": false,
			"setImmediate": false,
			"setInterval": false,
			"setTimeout": false
		},
		"commonjs": {
			"exports": true,
			"module": false,
			"require": false,
			"global": false
		},
		"amd": {
			"define": false,
			"require": false
		},
		"mocha": {
			"after": false,
			"afterEach": false,
			"before": false,
			"beforeEach": false,
			"context": false,
			"describe": false,
			"it": false,
			"mocha": false,
			"run": false,
			"setup": false,
			"specify": false,
			"suite": false,
			"suiteSetup": false,
			"suiteTeardown": false,
			"teardown": false,
			"test": false,
			"xcontext": false,
			"xdescribe": false,
			"xit": false,
			"xspecify": false
		},
		"jasmine": {
			"afterAll": false,
			"afterEach": false,
			"beforeAll": false,
			"beforeEach": false,
			"describe": false,
			"expect": false,
			"fail": false,
			"fdescribe": false,
			"fit": false,
			"it": false,
			"jasmine": false,
			"pending": false,
			"runs": false,
			"spyOn": false,
			"waits": false,
			"waitsFor": false,
			"xdescribe": false,
			"xit": false
		},
		"jest": {
			"afterAll": false,
			"afterEach": false,
			"beforeAll": false,
			"beforeEach": false,
			"check": false,
			"describe": false,
			"expect": false,
			"gen": false,
			"it": false,
			"fit": false,
			"jest": false,
			"pit": false,
			"require": false,
			"test": false,
			"xdescribe": false,
			"xit": false,
			"xtest": false
		},
		"qunit": {
			"asyncTest": false,
			"deepEqual": false,
			"equal": false,
			"expect": false,
			"module": false,
			"notDeepEqual": false,
			"notEqual": false,
			"notOk": false,
			"notPropEqual": false,
			"notStrictEqual": false,
			"ok": false,
			"propEqual": false,
			"QUnit": false,
			"raises": false,
			"start": false,
			"stop": false,
			"strictEqual": false,
			"test": false,
			"throws": false
		},
		"phantomjs": {
			"console": true,
			"exports": true,
			"phantom": true,
			"require": true,
			"WebPage": true
		},
		"couch": {
			"emit": false,
			"exports": false,
			"getRow": false,
			"log": false,
			"module": false,
			"provides": false,
			"require": false,
			"respond": false,
			"send": false,
			"start": false,
			"sum": false
		},
		"rhino": {
			"defineClass": false,
			"deserialize": false,
			"gc": false,
			"help": false,
			"importClass": false,
			"importPackage": false,
			"java": false,
			"load": false,
			"loadClass": false,
			"Packages": false,
			"print": false,
			"quit": false,
			"readFile": false,
			"readUrl": false,
			"runCommand": false,
			"seal": false,
			"serialize": false,
			"spawn": false,
			"sync": false,
			"toint32": false,
			"version": false
		},
		"nashorn": {
			"__DIR__": false,
			"__FILE__": false,
			"__LINE__": false,
			"com": false,
			"edu": false,
			"exit": false,
			"Java": false,
			"java": false,
			"javafx": false,
			"JavaImporter": false,
			"javax": false,
			"JSAdapter": false,
			"load": false,
			"loadWithNewGlobal": false,
			"org": false,
			"Packages": false,
			"print": false,
			"quit": false
		},
		"wsh": {
			"ActiveXObject": true,
			"Enumerator": true,
			"GetObject": true,
			"ScriptEngine": true,
			"ScriptEngineBuildVersion": true,
			"ScriptEngineMajorVersion": true,
			"ScriptEngineMinorVersion": true,
			"VBArray": true,
			"WScript": true,
			"WSH": true,
			"XDomainRequest": true
		},
		"jquery": {
			"$": false,
			"jQuery": false
		},
		"yui": {
			"Y": false,
			"YUI": false,
			"YUI_config": false
		},
		"shelljs": {
			"cat": false,
			"cd": false,
			"chmod": false,
			"config": false,
			"cp": false,
			"dirs": false,
			"echo": false,
			"env": false,
			"error": false,
			"exec": false,
			"exit": false,
			"find": false,
			"grep": false,
			"ls": false,
			"ln": false,
			"mkdir": false,
			"mv": false,
			"popd": false,
			"pushd": false,
			"pwd": false,
			"rm": false,
			"sed": false,
			"set": false,
			"target": false,
			"tempdir": false,
			"test": false,
			"touch": false,
			"which": false
		},
		"prototypejs": {
			"$": false,
			"$$": false,
			"$A": false,
			"$break": false,
			"$continue": false,
			"$F": false,
			"$H": false,
			"$R": false,
			"$w": false,
			"Abstract": false,
			"Ajax": false,
			"Autocompleter": false,
			"Builder": false,
			"Class": false,
			"Control": false,
			"Draggable": false,
			"Draggables": false,
			"Droppables": false,
			"Effect": false,
			"Element": false,
			"Enumerable": false,
			"Event": false,
			"Field": false,
			"Form": false,
			"Hash": false,
			"Insertion": false,
			"ObjectRange": false,
			"PeriodicalExecuter": false,
			"Position": false,
			"Prototype": false,
			"Scriptaculous": false,
			"Selector": false,
			"Sortable": false,
			"SortableObserver": false,
			"Sound": false,
			"Template": false,
			"Toggle": false,
			"Try": false
		},
		"meteor": {
			"$": false,
			"_": false,
			"Accounts": false,
			"AccountsClient": false,
			"AccountsServer": false,
			"AccountsCommon": false,
			"App": false,
			"Assets": false,
			"Blaze": false,
			"check": false,
			"Cordova": false,
			"DDP": false,
			"DDPServer": false,
			"DDPRateLimiter": false,
			"Deps": false,
			"EJSON": false,
			"Email": false,
			"HTTP": false,
			"Log": false,
			"Match": false,
			"Meteor": false,
			"Mongo": false,
			"MongoInternals": false,
			"Npm": false,
			"Package": false,
			"Plugin": false,
			"process": false,
			"Random": false,
			"ReactiveDict": false,
			"ReactiveVar": false,
			"Router": false,
			"ServiceConfiguration": false,
			"Session": false,
			"share": false,
			"Spacebars": false,
			"Template": false,
			"Tinytest": false,
			"Tracker": false,
			"UI": false,
			"Utils": false,
			"WebApp": false,
			"WebAppInternals": false
		},
		"mongo": {
			"_isWindows": false,
			"_rand": false,
			"BulkWriteResult": false,
			"cat": false,
			"cd": false,
			"connect": false,
			"db": false,
			"getHostName": false,
			"getMemInfo": false,
			"hostname": false,
			"ISODate": false,
			"listFiles": false,
			"load": false,
			"ls": false,
			"md5sumFile": false,
			"mkdir": false,
			"Mongo": false,
			"NumberInt": false,
			"NumberLong": false,
			"ObjectId": false,
			"PlanCache": false,
			"print": false,
			"printjson": false,
			"pwd": false,
			"quit": false,
			"removeFile": false,
			"rs": false,
			"sh": false,
			"UUID": false,
			"version": false,
			"WriteResult": false
		},
		"applescript": {
			"$": false,
			"Application": false,
			"Automation": false,
			"console": false,
			"delay": false,
			"Library": false,
			"ObjC": false,
			"ObjectSpecifier": false,
			"Path": false,
			"Progress": false,
			"Ref": false
		},
		"serviceworker": {
			"caches": false,
			"Cache": false,
			"CacheStorage": false,
			"Client": false,
			"clients": false,
			"Clients": false,
			"ExtendableEvent": false,
			"ExtendableMessageEvent": false,
			"FetchEvent": false,
			"importScripts": false,
			"registration": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerGlobalScope": false,
			"ServiceWorkerMessageEvent": false,
			"ServiceWorkerRegistration": false,
			"skipWaiting": false,
			"WindowClient": false
		},
		"atomtest": {
			"advanceClock": false,
			"fakeClearInterval": false,
			"fakeClearTimeout": false,
			"fakeSetInterval": false,
			"fakeSetTimeout": false,
			"resetTimeouts": false,
			"waitsForPromise": false
		},
		"embertest": {
			"andThen": false,
			"click": false,
			"currentPath": false,
			"currentRouteName": false,
			"currentURL": false,
			"fillIn": false,
			"find": false,
			"findWithAssert": false,
			"keyEvent": false,
			"pauseTest": false,
			"triggerEvent": false,
			"visit": false
		},
		"protractor": {
			"$": false,
			"$$": false,
			"browser": false,
			"By": false,
			"by": false,
			"DartObject": false,
			"element": false,
			"protractor": false
		},
		"shared-node-browser": {
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"setInterval": false,
			"setTimeout": false
		},
		"webextensions": {
			"browser": false,
			"chrome": false,
			"opr": false
		},
		"greasemonkey": {
			"GM_addStyle": false,
			"GM_deleteValue": false,
			"GM_getResourceText": false,
			"GM_getResourceURL": false,
			"GM_getValue": false,
			"GM_info": false,
			"GM_listValues": false,
			"GM_log": false,
			"GM_openInTab": false,
			"GM_registerMenuCommand": false,
			"GM_setClipboard": false,
			"GM_setValue": false,
			"GM_xmlhttpRequest": false,
			"unsafeWindow": false
		}
	};

/***/ },

/***/ "./node_modules/babel-traverse/lib/cache.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function clear(){clearPath(),clearScope()}function clearPath(){exports.path=path=new _weakMap2.default}function clearScope(){exports.scope=scope=new _weakMap2.default}exports.__esModule=!0,exports.scope=exports.path=void 0;var _weakMap=__webpack_require__("./node_modules/babel-runtime/core-js/weak-map.js"),_weakMap2=_interopRequireDefault(_weakMap);exports.clear=clear,exports.clearPath=clearPath,exports.clearScope=clearScope;var path=exports.path=new _weakMap2.default,scope=exports.scope=new _weakMap2.default;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/ancestry.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function findParent(e){for(var t=this;t=t.parentPath;)if(e(t))return t;return null}function find(e){var t=this;do if(e(t))return t;while(t=t.parentPath);return null}function getFunctionParent(){return this.findParent(function(e){return e.isFunction()||e.isProgram()})}function getStatementParent(){var e=this;do if(Array.isArray(e.container))return e;while(e=e.parentPath)}function getEarliestCommonAncestorFrom(e){return this.getDeepestCommonAncestorFrom(e,function(e,r,n){for(var i=void 0,o=t.VISITOR_KEYS[e.type],a=n,s=Array.isArray(a),u=0,a=s?a:(0,_getIterator3.default)(a);;){var f;if(s){if(u>=a.length)break;f=a[u++]}else{if(u=a.next(),u.done)break;f=u.value}var l=f,c=l[r+1];if(i)if(c.listKey&&i.listKey===c.listKey&&c.key<i.key)i=c;else{var d=o.indexOf(i.parentKey),p=o.indexOf(c.parentKey);d>p&&(i=c)}else i=c}return i})}function getDeepestCommonAncestorFrom(e,t){var r=this;if(!e.length)return this;if(1===e.length)return e[0];var n=1/0,i=void 0,o=void 0,a=e.map(function(e){var t=[];do t.unshift(e);while((e=e.parentPath)&&e!==r);return t.length<n&&(n=t.length),t}),s=a[0];e:for(var u=0;u<n;u++){for(var f=s[u],l=a,c=Array.isArray(l),d=0,l=c?l:(0,_getIterator3.default)(l);;){var p;if(c){if(d>=l.length)break;p=l[d++]}else{if(d=l.next(),d.done)break;p=d.value}var h=p;if(h[u]!==f)break e}i=u,o=f}if(o)return t?t(o,i,a):o;throw new Error("Couldn't find intersection")}function getAncestry(){var e=this,t=[];do t.push(e);while(e=e.parentPath);return t}function isAncestor(e){return e.isDescendant(this)}function isDescendant(e){return!!this.findParent(function(t){return t===e})}function inType(){for(var e=this;e;){for(var t=arguments,r=Array.isArray(t),n=0,t=r?t:(0,_getIterator3.default)(t);;){var i;if(r){if(n>=t.length)break;i=t[n++]}else{if(n=t.next(),n.done)break;i=n.value}var o=i;if(e.node.type===o)return!0}e=e.parentPath}return!1}function inShadow(e){var t=this.isFunction()?this:this.findParent(function(e){return e.isFunction()});if(t){if(t.isFunctionExpression()||t.isFunctionDeclaration()){var r=t.node.shadow;if(r&&(!e||r[e]!==!1))return t}else if(t.isArrowFunctionExpression())return t;return null}}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.findParent=findParent,exports.find=find,exports.getFunctionParent=getFunctionParent,exports.getStatementParent=getStatementParent,exports.getEarliestCommonAncestorFrom=getEarliestCommonAncestorFrom,exports.getDeepestCommonAncestorFrom=getDeepestCommonAncestorFrom,exports.getAncestry=getAncestry,exports.isAncestor=isAncestor,exports.isDescendant=isDescendant,exports.inType=inType,exports.inShadow=inShadow;var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_index=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_index2=_interopRequireDefault(_index);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/inference/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function getTypeAnnotation(){if(this.typeAnnotation)return this.typeAnnotation;var e=this._getTypeAnnotation()||t.anyTypeAnnotation();return t.isTypeAnnotation(e)&&(e=e.typeAnnotation),this.typeAnnotation=e}function _getTypeAnnotation(){var e=this.node;{if(e){if(e.typeAnnotation)return e.typeAnnotation;var n=inferers[e.type];return n?n.call(this,e):(n=inferers[this.parentPath.type],n&&n.validParent?this.parentPath.getTypeAnnotation():void 0)}if("init"===this.key&&this.parentPath.isVariableDeclarator()){var i=this.parentPath.parentPath,r=i.parentPath;return"left"===i.key&&r.isForInStatement()?t.stringTypeAnnotation():"left"===i.key&&r.isForOfStatement()?t.anyTypeAnnotation():t.voidTypeAnnotation()}}}function isBaseType(t,e){return _isBaseType(t,this.getTypeAnnotation(),e)}function _isBaseType(e,n,i){if("string"===e)return t.isStringTypeAnnotation(n);if("number"===e)return t.isNumberTypeAnnotation(n);if("boolean"===e)return t.isBooleanTypeAnnotation(n);if("any"===e)return t.isAnyTypeAnnotation(n);if("mixed"===e)return t.isMixedTypeAnnotation(n);if("empty"===e)return t.isEmptyTypeAnnotation(n);if("void"===e)return t.isVoidTypeAnnotation(n);if(i)return!1;throw new Error("Unknown base type "+e)}function couldBeBaseType(e){var n=this.getTypeAnnotation();if(t.isAnyTypeAnnotation(n))return!0;if(t.isUnionTypeAnnotation(n)){for(var i=n.types,r=Array.isArray(i),o=0,i=r?i:(0,_getIterator3.default)(i);;){var a;if(r){if(o>=i.length)break;a=i[o++]}else{if(o=i.next(),o.done)break;a=o.value}var s=a;if(t.isAnyTypeAnnotation(s)||_isBaseType(e,s,!0))return!0}return!1}return _isBaseType(e,n,!0)}function baseTypeStrictlyMatches(e){var n=this.getTypeAnnotation();if(e=e.getTypeAnnotation(),!t.isAnyTypeAnnotation(n)&&t.isFlowBaseAnnotation(n))return e.type===n.type}function isGenericType(e){var n=this.getTypeAnnotation();return t.isGenericTypeAnnotation(n)&&t.isIdentifier(n.id,{name:e})}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.getTypeAnnotation=getTypeAnnotation,exports._getTypeAnnotation=_getTypeAnnotation,exports.isBaseType=isBaseType,exports.couldBeBaseType=couldBeBaseType,exports.baseTypeStrictlyMatches=baseTypeStrictlyMatches,exports.isGenericType=isGenericType;var _inferers=__webpack_require__("./node_modules/babel-traverse/lib/path/inference/inferers.js"),inferers=_interopRequireWildcard(_inferers),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/inference/inferers.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function VariableDeclarator(){var e=this.get("id");return e.isIdentifier()?this.get("init").getTypeAnnotation():void 0}function TypeCastExpression(e){return e.typeAnnotation}function NewExpression(e){if(this.get("callee").isIdentifier())return t.genericTypeAnnotation(e.callee)}function TemplateLiteral(){return t.stringTypeAnnotation()}function UnaryExpression(e){var n=e.operator;return"void"===n?t.voidTypeAnnotation():t.NUMBER_UNARY_OPERATORS.indexOf(n)>=0?t.numberTypeAnnotation():t.STRING_UNARY_OPERATORS.indexOf(n)>=0?t.stringTypeAnnotation():t.BOOLEAN_UNARY_OPERATORS.indexOf(n)>=0?t.booleanTypeAnnotation():void 0}function BinaryExpression(e){var n=e.operator;if(t.NUMBER_BINARY_OPERATORS.indexOf(n)>=0)return t.numberTypeAnnotation();if(t.BOOLEAN_BINARY_OPERATORS.indexOf(n)>=0)return t.booleanTypeAnnotation();if("+"===n){var r=this.get("right"),i=this.get("left");return i.isBaseType("number")&&r.isBaseType("number")?t.numberTypeAnnotation():i.isBaseType("string")||r.isBaseType("string")?t.stringTypeAnnotation():t.unionTypeAnnotation([t.stringTypeAnnotation(),t.numberTypeAnnotation()])}}function LogicalExpression(){return t.createUnionTypeAnnotation([this.get("left").getTypeAnnotation(),this.get("right").getTypeAnnotation()])}function ConditionalExpression(){return t.createUnionTypeAnnotation([this.get("consequent").getTypeAnnotation(),this.get("alternate").getTypeAnnotation()])}function SequenceExpression(){return this.get("expressions").pop().getTypeAnnotation()}function AssignmentExpression(){return this.get("right").getTypeAnnotation()}function UpdateExpression(e){var n=e.operator;if("++"===n||"--"===n)return t.numberTypeAnnotation()}function StringLiteral(){return t.stringTypeAnnotation()}function NumericLiteral(){return t.numberTypeAnnotation()}function BooleanLiteral(){return t.booleanTypeAnnotation()}function NullLiteral(){return t.nullLiteralTypeAnnotation()}function RegExpLiteral(){return t.genericTypeAnnotation(t.identifier("RegExp"))}function ObjectExpression(){return t.genericTypeAnnotation(t.identifier("Object"))}function ArrayExpression(){return t.genericTypeAnnotation(t.identifier("Array"))}function RestElement(){return ArrayExpression()}function Func(){return t.genericTypeAnnotation(t.identifier("Function"))}function CallExpression(){return resolveCall(this.get("callee"))}function TaggedTemplateExpression(){return resolveCall(this.get("tag"))}function resolveCall(e){if(e=e.resolve(),e.isFunction()){if(e.is("async"))return e.is("generator")?t.genericTypeAnnotation(t.identifier("AsyncIterator")):t.genericTypeAnnotation(t.identifier("Promise"));if(e.node.returnType)return e.node.returnType}}exports.__esModule=!0,exports.ClassDeclaration=exports.ClassExpression=exports.FunctionDeclaration=exports.ArrowFunctionExpression=exports.FunctionExpression=exports.Identifier=void 0;var _infererReference=__webpack_require__("./node_modules/babel-traverse/lib/path/inference/inferer-reference.js");Object.defineProperty(exports,"Identifier",{enumerable:!0,get:function(){return _interopRequireDefault(_infererReference).default}}),exports.VariableDeclarator=VariableDeclarator,exports.TypeCastExpression=TypeCastExpression,exports.NewExpression=NewExpression,exports.TemplateLiteral=TemplateLiteral,exports.UnaryExpression=UnaryExpression,exports.BinaryExpression=BinaryExpression,exports.LogicalExpression=LogicalExpression,exports.ConditionalExpression=ConditionalExpression,exports.SequenceExpression=SequenceExpression,exports.AssignmentExpression=AssignmentExpression,exports.UpdateExpression=UpdateExpression,exports.StringLiteral=StringLiteral,exports.NumericLiteral=NumericLiteral,exports.BooleanLiteral=BooleanLiteral,exports.NullLiteral=NullLiteral,exports.RegExpLiteral=RegExpLiteral,exports.ObjectExpression=ObjectExpression,exports.ArrayExpression=ArrayExpression,exports.RestElement=RestElement,exports.CallExpression=CallExpression,exports.TaggedTemplateExpression=TaggedTemplateExpression;var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);TypeCastExpression.validParent=!0,RestElement.validParent=!0,exports.FunctionExpression=Func,exports.ArrowFunctionExpression=Func,exports.FunctionDeclaration=Func,exports.ClassExpression=Func,exports.ClassDeclaration=Func;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/inference/inferer-reference.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function getTypeAnnotationBindingConstantViolations(e,n){var i=e.scope.getBinding(n),o=[];e.typeAnnotation=t.unionTypeAnnotation(o);var r=[],a=getConstantViolationsBefore(i,e,r),s=getConditionalAnnotation(e,n);if(s&&!function(){var t=getConstantViolationsBefore(i,s.ifStatement);a=a.filter(function(e){return t.indexOf(e)<0}),o.push(s.typeAnnotation)}(),a.length){a=a.concat(r);for(var f=a,u=Array.isArray(f),l=0,f=u?f:(0,_getIterator3.default)(f);;){var p;if(u){if(l>=f.length)break;p=f[l++]}else{if(l=f.next(),l.done)break;p=l.value}var d=p;o.push(d.getTypeAnnotation())}}if(o.length)return t.createUnionTypeAnnotation(o)}function getConstantViolationsBefore(t,e,n){var i=t.constantViolations.slice();return i.unshift(t.path),i.filter(function(t){t=t.resolve();var i=t._guessExecutionStatusRelativeTo(e);return n&&"function"===i&&n.push(t),"before"===i})}function inferAnnotationFromBinaryExpression(e,n){var i=n.node.operator,o=n.get("right").resolve(),r=n.get("left").resolve(),a=void 0;if(r.isIdentifier({name:e})?a=o:o.isIdentifier({name:e})&&(a=r),a)return"==="===i?a.getTypeAnnotation():t.BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(i)>=0?t.numberTypeAnnotation():void 0;if("==="===i){var s=void 0,f=void 0;if(r.isUnaryExpression({operator:"typeof"})?(s=r,f=o):o.isUnaryExpression({operator:"typeof"})&&(s=o,f=r),(f||s)&&(f=f.resolve(),f.isLiteral())){var u=f.node.value;if("string"==typeof u&&s.get("argument").isIdentifier({name:e}))return t.createTypeAnnotationBasedOnTypeof(f.node.value)}}}function getParentConditionalPath(t){for(var e=void 0;e=t.parentPath;){if(e.isIfStatement()||e.isConditionalExpression())return"test"===t.key?void 0:e;t=e}}function getConditionalAnnotation(e,n){var i=getParentConditionalPath(e);if(i){var o=i.get("test"),r=[o],a=[];do{var s=r.shift().resolve();if(s.isLogicalExpression()&&(r.push(s.get("left")),r.push(s.get("right"))),s.isBinaryExpression()){var f=inferAnnotationFromBinaryExpression(n,s);f&&a.push(f)}}while(r.length);return a.length?{typeAnnotation:t.createUnionTypeAnnotation(a),ifStatement:i}:getConditionalAnnotation(i,n)}}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.default=function(e){if(this.isReferenced()){var n=this.scope.getBinding(e.name);return n?n.identifier.typeAnnotation?n.identifier.typeAnnotation:getTypeAnnotationBindingConstantViolations(this,e.name):"undefined"===e.name?t.voidTypeAnnotation():"NaN"===e.name||"Infinity"===e.name?t.numberTypeAnnotation():void("arguments"===e.name)}};var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/replacement.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function replaceWithMultiple(e){this.resync(),e=this._verifyNodeList(e),t.inheritLeadingComments(e[0],this.node),t.inheritTrailingComments(e[e.length-1],this.node),this.node=this.container[this.key]=null,this.insertAfter(e),this.node?this.requeue():this.remove()}function replaceWithSourceString(e){this.resync();try{e="("+e+")",e=(0,_babylon.parse)(e)}catch(r){var t=r.loc;throw t&&(r.message+=" - make sure this is an expression.",r.message+="\n"+(0,_babelCodeFrame2.default)(e,t.line,t.column+1)),r}return e=e.program.body[0].expression,_index2.default.removeProperties(e),this.replaceWith(e)}function replaceWith(e){if(this.resync(),this.removed)throw new Error("You can't replace this node, we've already removed it");if(e instanceof _index4.default&&(e=e.node),!e)throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");if(this.node!==e){if(this.isProgram()&&!t.isProgram(e))throw new Error("You can only replace a Program root node with another Program node");if(Array.isArray(e))throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");if("string"==typeof e)throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");if(this.isNodeType("Statement")&&t.isExpression(e)&&(this.canHaveVariableDeclarationOrExpression()||this.canSwapBetweenExpressionAndStatement(e)||(e=t.expressionStatement(e))),this.isNodeType("Expression")&&t.isStatement(e)&&!this.canHaveVariableDeclarationOrExpression()&&!this.canSwapBetweenExpressionAndStatement(e))return this.replaceExpressionWithStatements([e]);var r=this.node;r&&(t.inheritsComments(e,r),t.removeComments(r)),this._replaceWith(e),this.type=e.type,this.setScope(),this.requeue()}}function _replaceWith(e){if(!this.container)throw new ReferenceError("Container is falsy");this.inList?t.validate(this.parent,this.key,[e]):t.validate(this.parent,this.key,e),this.debug(function(){return"Replace with "+(e&&e.type)}),this.node=this.container[this.key]=e}function replaceExpressionWithStatements(e){this.resync();var r=t.toSequenceExpression(e,this.scope);if(t.isSequenceExpression(r)){var i=r.expressions;i.length>=2&&this.parentPath.isExpressionStatement()&&this._maybePopFromStatements(i),1===i.length?this.replaceWith(i[0]):this.replaceWith(r)}else{if(!r){var n=t.functionExpression(null,[],t.blockStatement(e));n.shadow=!0,this.replaceWith(t.callExpression(n,[])),this.traverse(hoistVariablesVisitor);for(var a=this.get("callee").getCompletionRecords(),s=a,o=Array.isArray(s),l=0,s=o?s:(0,_getIterator3.default)(s);;){var h;if(o){if(l>=s.length)break;h=s[l++]}else{if(l=s.next(),l.done)break;h=l.value}var p=h;if(p.isExpressionStatement()){var c=p.findParent(function(e){return e.isLoop()});if(c){var u=this.get("callee"),d=u.scope.generateDeclaredUidIdentifier("ret");u.get("body").pushContainer("body",t.returnStatement(d)),p.get("expression").replaceWith(t.assignmentExpression("=",d,p.node.expression))}else p.replaceWith(t.returnStatement(p.node.expression))}}return this.node}this.replaceWith(r)}}function replaceInline(e){return this.resync(),Array.isArray(e)?Array.isArray(this.container)?(e=this._verifyNodeList(e),this._containerInsertAfter(e),this.remove()):this.replaceWithMultiple(e):this.replaceWith(e)}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.replaceWithMultiple=replaceWithMultiple,exports.replaceWithSourceString=replaceWithSourceString,exports.replaceWith=replaceWith,exports._replaceWith=_replaceWith,exports.replaceExpressionWithStatements=replaceExpressionWithStatements,exports.replaceInline=replaceInline;var _babelCodeFrame=__webpack_require__("./node_modules/babel-code-frame/lib/index.js"),_babelCodeFrame2=_interopRequireDefault(_babelCodeFrame),_index=__webpack_require__("./node_modules/babel-traverse/lib/index.js"),_index2=_interopRequireDefault(_index),_index3=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_index4=_interopRequireDefault(_index3),_babylon=__webpack_require__("./node_modules/babel-traverse/node_modules/babylon/lib/index.js"),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),hoistVariablesVisitor={Function:function(e){e.skip()},VariableDeclaration:function(e){if("var"===e.node.kind){var r=e.getBindingIdentifiers();for(var i in r)e.scope.push({id:r[i]});for(var n=[],a=e.node.declarations,s=Array.isArray(a),o=0,a=s?a:(0,_getIterator3.default)(a);;){var l;if(s){if(o>=a.length)break;l=a[o++]}else{if(o=a.next(),o.done)break;l=o.value}var h=l;h.init&&n.push(t.expressionStatement(t.assignmentExpression("=",h.id,h.init)))}e.replaceWithMultiple(n)}}};

/***/ },

/***/ "./node_modules/babel-code-frame/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getDefs(e){return{keyword:e.cyan,capitalized:e.yellow,jsx_tag:e.yellow,punctuator:e.yellow,number:e.magenta,string:e.green,regex:e.magenta,comment:e.grey,invalid:e.white.bgRed.bold,gutter:e.grey,marker:e.red.bold}}function getTokenType(e){var t=e.slice(-2),r=t[0],n=t[1],a=(0,_jsTokens.matchToToken)(e);if("name"===a.type){if(_esutils2.default.keyword.isReservedWordES6(a.value))return"keyword";if(JSX_TAG.test(a.value)&&("<"===n[r-1]||"</"==n.substr(r-2,2)))return"jsx_tag";if(a.value[0]!==a.value[0].toLowerCase())return"capitalized"}return"punctuator"===a.type&&BRACKET.test(a.value)?"bracket":a.type}function highlight(e,t){return t.replace(_jsTokens2.default,function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var a=getTokenType(r),u=e[a];return u?r[0].split(NEWLINE).map(function(e){return u(e)}).join("\n"):r[0]})}exports.__esModule=!0,exports.default=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r=Math.max(r,0);var a=n.highlightCode&&_chalk2.default.supportsColor||n.forceColor,u=_chalk2.default;n.forceColor&&(u=new _chalk2.default.constructor({enabled:!0}));var l=function(e,t){return a?e(t):t},o=getDefs(u);a&&(e=highlight(o,e));var i=n.linesAbove||2,s=n.linesBelow||3,c=e.split(NEWLINE),f=Math.max(t-(i+1),0),g=Math.min(c.length,t+s);t||r||(f=0,g=c.length);var d=String(g).length,_=c.slice(f,g).map(function(e,n){var a=f+1+n,u=(" "+a).slice(-d),i=" "+u+" | ";if(a===t){var s="";if(r){var c=e.slice(0,r-1).replace(/[^\t]/g," ");s=["\n ",l(o.gutter,i.replace(/\d/g," ")),c,l(o.marker,"^")].join("")}return[l(o.marker,">"),l(o.gutter,i),e,s].join("")}return" "+l(o.gutter,i)+e}).join("\n");return a?u.reset(_):_};var _jsTokens=__webpack_require__("./node_modules/babel-code-frame/node_modules/js-tokens/index.js"),_jsTokens2=_interopRequireDefault(_jsTokens),_esutils=__webpack_require__("./node_modules/esutils/lib/utils.js"),_esutils2=_interopRequireDefault(_esutils),_chalk=__webpack_require__("./node_modules/chalk/index.js"),_chalk2=_interopRequireDefault(_chalk),NEWLINE=/\r\n|[\n\r\u2028\u2029]/,JSX_TAG=/^[a-z][\w-]*$/i,BRACKET=/^[()\[\]{}]$/;module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-code-frame/node_modules/js-tokens/index.js":
/***/ function(module, exports) {

	Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]{1,6}\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,exports.matchToToken=function(e){var t={type:"invalid",value:e[0]};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t};

/***/ },

/***/ "./node_modules/chalk/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";function Chalk(e){this.enabled=e&&void 0!==e.enabled?e.enabled:supportsColor}function build(e){var s=function(){return applyStyle.apply(s,arguments)};return s._styles=e,s.enabled=this.enabled,s.__proto__=proto,s}function applyStyle(){var e=arguments,s=e.length,t=0!==s&&String(arguments[0]);if(s>1)for(var r=1;r<s;r++)t+=" "+e[r];if(!this.enabled||!t)return t;var n=this._styles,i=n.length,o=ansiStyles.dim.open;for(!isSimpleWindowsTerm||n.indexOf("gray")===-1&&n.indexOf("grey")===-1||(ansiStyles.dim.open="");i--;){var l=ansiStyles[n[i]];t=l.open+t.replace(l.closeRe,l.open)+l.close}return ansiStyles.dim.open=o,t}function init(){var e={};return Object.keys(styles).forEach(function(s){e[s]={get:function(){return build.call(this,[s])}}}),e}var escapeStringRegexp=__webpack_require__("./node_modules/escape-string-regexp/index.js"),ansiStyles=__webpack_require__("./node_modules/ansi-styles/index.js"),stripAnsi=__webpack_require__("./node_modules/strip-ansi/index.js"),hasAnsi=__webpack_require__("./node_modules/has-ansi/index.js"),supportsColor=__webpack_require__("./node_modules/chalk/node_modules/supports-color/index.js"),defineProps=Object.defineProperties,isSimpleWindowsTerm="win32"===process.platform&&!/^xterm/i.test(process.env.TERM);isSimpleWindowsTerm&&(ansiStyles.blue.open="[94m");var styles=function(){var e={};return Object.keys(ansiStyles).forEach(function(s){ansiStyles[s].closeRe=new RegExp(escapeStringRegexp(ansiStyles[s].close),"g"),e[s]={get:function(){return build.call(this,this._styles.concat(s))}}}),e}(),proto=defineProps(function(){},styles);defineProps(Chalk.prototype,init()),module.exports=new Chalk,module.exports.styles=ansiStyles,module.exports.hasColor=hasAnsi,module.exports.stripColor=stripAnsi,module.exports.supportsColor=supportsColor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./node_modules/escape-string-regexp/index.js":
/***/ function(module, exports) {

	"use strict";var matchOperatorsRe=/[|\\{}()[\]^$+*?.]/g;module.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected a string");return r.replace(matchOperatorsRe,"\\$&")};

/***/ },

/***/ "./node_modules/ansi-styles/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";function assembleStyles(){var e={modifiers:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},colors:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39]},bgColors:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49]}};return e.colors.grey=e.colors.gray,Object.keys(e).forEach(function(r){var l=e[r];Object.keys(l).forEach(function(r){var o=l[r];e[r]=l[r]={open:"["+o[0]+"m",close:"["+o[1]+"m"}}),Object.defineProperty(e,r,{value:l,enumerable:!1})}),e}Object.defineProperty(module,"exports",{enumerable:!0,get:assembleStyles});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/strip-ansi/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var ansiRegex=__webpack_require__("./node_modules/ansi-regex/index.js")();module.exports=function(e){return"string"==typeof e?e.replace(ansiRegex,""):e};

/***/ },

/***/ "./node_modules/ansi-regex/index.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){return/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g};

/***/ },

/***/ "./node_modules/has-ansi/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var ansiRegex=__webpack_require__("./node_modules/ansi-regex/index.js"),re=new RegExp(ansiRegex().source);module.exports=re.test.bind(re);

/***/ },

/***/ "./node_modules/chalk/node_modules/supports-color/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var argv=process.argv,terminator=argv.indexOf("--"),hasFlag=function(r){r="--"+r;var s=argv.indexOf(r);return s!==-1&&(terminator===-1||s<terminator)};module.exports=function(){return"FORCE_COLOR"in process.env||!(hasFlag("no-color")||hasFlag("no-colors")||hasFlag("color=false"))&&(!!(hasFlag("color")||hasFlag("colors")||hasFlag("color=true")||hasFlag("color=always"))||!(process.stdout&&!process.stdout.isTTY)&&("win32"===process.platform||("COLORTERM"in process.env||"dumb"!==process.env.TERM&&!!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM))))}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/babylon/lib/index.js":
/***/ function(module, exports) {

	"use strict";function makePredicate(t){return t=t.split(" "),function(e){return t.indexOf(e)>=0}}function isInAstralSet(t,e){for(var s=65536,i=0;i<e.length;i+=2){if(s+=e[i],s>t)return!1;if(s+=e[i+1],s>=t)return!0}}function isIdentifierStart(t){return t<65?36===t:t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&nonASCIIidentifierStart.test(String.fromCharCode(t)):isInAstralSet(t,astralIdentifierStartCodes)))}function isIdentifierChar(t){return t<48?36===t:t<58||!(t<65)&&(t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&nonASCIIidentifier.test(String.fromCharCode(t)):isInAstralSet(t,astralIdentifierStartCodes)||isInAstralSet(t,astralIdentifierCodes))))}function getOptions(t){var e={};for(var s in defaultOptions)e[s]=t&&s in t?t[s]:defaultOptions[s];return e}function isNewLine(t){return 10===t||13===t||8232===t||8233===t}function getLineInfo(t,e){for(var s=1,i=0;;){lineBreakG.lastIndex=i;var r=lineBreakG.exec(t);if(!(r&&r.index<e))return new Position(s,e-i);++s,i=r.index+r[0].length}}function codePointToString(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}function finishNodeAt(t,e,s,i){return t.type=e,t.end=s,t.loc.end=i,this.processComment(t),t}function last(t){return t[t.length-1]}function getQualifiedJSXName(t){return"JSXIdentifier"===t.type?t.name:"JSXNamespacedName"===t.type?t.namespace.name+":"+t.name.name:"JSXMemberExpression"===t.type?getQualifiedJSXName(t.object)+"."+getQualifiedJSXName(t.property):void 0}function parse(t,e){return new Parser(e,t).parse()}Object.defineProperty(exports,"__esModule",{value:!0});var reservedWords={6:makePredicate("enum await"),strict:makePredicate("implements interface let package private protected public static yield"),strictBind:makePredicate("eval arguments")},isKeyword=makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super"),nonASCIIidentifierStartChars="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",nonASCIIidentifierChars="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]"),nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;var astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541],astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239],defaultOptions={sourceType:"script",sourceFilename:void 0,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowSuperOutsideMethod:!1,plugins:[],strictMode:null},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},beforeExpr=!0,startsExpr=!0,isLoop=!0,isAssign=!0,prefix=!0,postfix=!0,TokenType=function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};classCallCheck(this,t),this.label=e,this.keyword=s.keyword,this.beforeExpr=!!s.beforeExpr,this.startsExpr=!!s.startsExpr,this.rightAssociative=!!s.rightAssociative,this.isLoop=!!s.isLoop,this.isAssign=!!s.isAssign,this.prefix=!!s.prefix,this.postfix=!!s.postfix,this.binop=s.binop||null,this.updateContext=null},KeywordTokenType=function(t){function e(s){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return classCallCheck(this,e),i.keyword=s,possibleConstructorReturn(this,t.call(this,s,i))}return inherits(e,t),e}(TokenType),BinopTokenType=function(t){function e(s,i){return classCallCheck(this,e),possibleConstructorReturn(this,t.call(this,s,{beforeExpr:beforeExpr,binop:i}))}return inherits(e,t),e}(TokenType),types={num:new TokenType("num",{startsExpr:startsExpr}),regexp:new TokenType("regexp",{startsExpr:startsExpr}),string:new TokenType("string",{startsExpr:startsExpr}),name:new TokenType("name",{startsExpr:startsExpr}),eof:new TokenType("eof"),bracketL:new TokenType("[",{beforeExpr:beforeExpr,startsExpr:startsExpr}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr:beforeExpr,startsExpr:startsExpr}),braceBarL:new TokenType("{|",{beforeExpr:beforeExpr,startsExpr:startsExpr}),braceR:new TokenType("}"),braceBarR:new TokenType("|}"),parenL:new TokenType("(",{beforeExpr:beforeExpr,startsExpr:startsExpr}),parenR:new TokenType(")"),comma:new TokenType(",",{beforeExpr:beforeExpr}),semi:new TokenType(";",{beforeExpr:beforeExpr}),colon:new TokenType(":",{beforeExpr:beforeExpr}),doubleColon:new TokenType("::",{beforeExpr:beforeExpr}),dot:new TokenType("."),question:new TokenType("?",{beforeExpr:beforeExpr}),arrow:new TokenType("=>",{beforeExpr:beforeExpr}),template:new TokenType("template"),ellipsis:new TokenType("...",{beforeExpr:beforeExpr}),backQuote:new TokenType("`",{startsExpr:startsExpr}),dollarBraceL:new TokenType("${",{beforeExpr:beforeExpr,startsExpr:startsExpr}),at:new TokenType("@"),eq:new TokenType("=",{beforeExpr:beforeExpr,isAssign:isAssign}),assign:new TokenType("_=",{beforeExpr:beforeExpr,isAssign:isAssign}),incDec:new TokenType("++/--",{prefix:prefix,postfix:postfix,startsExpr:startsExpr}),prefix:new TokenType("prefix",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),logicalOR:new BinopTokenType("||",1),logicalAND:new BinopTokenType("&&",2),bitwiseOR:new BinopTokenType("|",3),bitwiseXOR:new BinopTokenType("^",4),bitwiseAND:new BinopTokenType("&",5),equality:new BinopTokenType("==/!=",6),relational:new BinopTokenType("</>",7),bitShift:new BinopTokenType("<</>>",8),plusMin:new TokenType("+/-",{beforeExpr:beforeExpr,binop:9,prefix:prefix,startsExpr:startsExpr}),modulo:new BinopTokenType("%",10),star:new BinopTokenType("*",10),slash:new BinopTokenType("/",10),exponent:new TokenType("**",{beforeExpr:beforeExpr,binop:11,rightAssociative:!0})},keywords={break:new KeywordTokenType("break"),case:new KeywordTokenType("case",{beforeExpr:beforeExpr}),catch:new KeywordTokenType("catch"),continue:new KeywordTokenType("continue"),debugger:new KeywordTokenType("debugger"),default:new KeywordTokenType("default",{beforeExpr:beforeExpr}),do:new KeywordTokenType("do",{isLoop:isLoop,beforeExpr:beforeExpr}),else:new KeywordTokenType("else",{beforeExpr:beforeExpr}),finally:new KeywordTokenType("finally"),for:new KeywordTokenType("for",{isLoop:isLoop}),function:new KeywordTokenType("function",{startsExpr:startsExpr}),if:new KeywordTokenType("if"),return:new KeywordTokenType("return",{beforeExpr:beforeExpr}),switch:new KeywordTokenType("switch"),throw:new KeywordTokenType("throw",{beforeExpr:beforeExpr}),try:new KeywordTokenType("try"),var:new KeywordTokenType("var"),let:new KeywordTokenType("let"),const:new KeywordTokenType("const"),while:new KeywordTokenType("while",{isLoop:isLoop}),with:new KeywordTokenType("with"),new:new KeywordTokenType("new",{beforeExpr:beforeExpr,startsExpr:startsExpr}),this:new KeywordTokenType("this",{startsExpr:startsExpr}),super:new KeywordTokenType("super",{startsExpr:startsExpr}),class:new KeywordTokenType("class"),extends:new KeywordTokenType("extends",{beforeExpr:beforeExpr}),export:new KeywordTokenType("export"),import:new KeywordTokenType("import"),yield:new KeywordTokenType("yield",{beforeExpr:beforeExpr,startsExpr:startsExpr}),null:new KeywordTokenType("null",{startsExpr:startsExpr}),true:new KeywordTokenType("true",{startsExpr:startsExpr}),false:new KeywordTokenType("false",{startsExpr:startsExpr}),in:new KeywordTokenType("in",{beforeExpr:beforeExpr,binop:7}),instanceof:new KeywordTokenType("instanceof",{beforeExpr:beforeExpr,binop:7}),typeof:new KeywordTokenType("typeof",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),void:new KeywordTokenType("void",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),delete:new KeywordTokenType("delete",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr})};Object.keys(keywords).forEach(function(t){types["_"+t]=keywords[t]});var lineBreak=/\r\n?|\n|\u2028|\u2029/,lineBreakG=new RegExp(lineBreak.source,"g"),nonASCIIwhitespace=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,TokContext=function t(e,s,i,r){classCallCheck(this,t),this.token=e,this.isExpr=!!s,this.preserveSpace=!!i,this.override=r},types$1={braceStatement:new TokContext("{",!1),braceExpression:new TokContext("{",!0),templateQuasi:new TokContext("${",!0),parenStatement:new TokContext("(",!1),parenExpression:new TokContext("(",!0),template:new TokContext("`",!0,!0,function(t){return t.readTmplToken()}),functionExpression:new TokContext("function",!0)};types.parenR.updateContext=types.braceR.updateContext=function(){if(1===this.state.context.length)return void(this.state.exprAllowed=!0);var t=this.state.context.pop();t===types$1.braceStatement&&this.curContext()===types$1.functionExpression?(this.state.context.pop(),this.state.exprAllowed=!1):t===types$1.templateQuasi?this.state.exprAllowed=!0:this.state.exprAllowed=!t.isExpr},types.name.updateContext=function(t){this.state.exprAllowed=!1,t!==types._let&&t!==types._const&&t!==types._var||lineBreak.test(this.input.slice(this.state.end))&&(this.state.exprAllowed=!0)},types.braceL.updateContext=function(t){this.state.context.push(this.braceIsBlock(t)?types$1.braceStatement:types$1.braceExpression),this.state.exprAllowed=!0},types.dollarBraceL.updateContext=function(){this.state.context.push(types$1.templateQuasi),this.state.exprAllowed=!0},types.parenL.updateContext=function(t){var e=t===types._if||t===types._for||t===types._with||t===types._while;this.state.context.push(e?types$1.parenStatement:types$1.parenExpression),this.state.exprAllowed=!0},types.incDec.updateContext=function(){},types._function.updateContext=function(){this.curContext()!==types$1.braceStatement&&this.state.context.push(types$1.functionExpression),this.state.exprAllowed=!1},types.backQuote.updateContext=function(){this.curContext()===types$1.template?this.state.context.pop():this.state.context.push(types$1.template),this.state.exprAllowed=!1};var Position=function t(e,s){classCallCheck(this,t),this.line=e,this.column=s},SourceLocation=function t(e,s){classCallCheck(this,t),this.start=e,this.end=s},State=function(){function t(){classCallCheck(this,t)}return t.prototype.init=function(t,e){return this.strict=t.strictMode!==!1&&"module"===t.sourceType,this.input=e,this.potentialArrowAt=-1,this.inMethod=this.inFunction=this.inGenerator=this.inAsync=this.inPropertyName=this.inType=this.noAnonFunctionType=!1,this.labels=[],this.decorators=[],this.tokens=[],this.comments=[],this.trailingComments=[],this.leadingComments=[],this.commentStack=[],this.pos=this.lineStart=0,this.curLine=1,this.type=types.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=[types$1.braceStatement],this.exprAllowed=!0,this.containsEsc=this.containsOctal=!1,this.octalPosition=null,this.exportedIdentifiers=[],this},t.prototype.curPosition=function(){return new Position(this.curLine,this.pos-this.lineStart)},t.prototype.clone=function(e){var s=new t;for(var i in this){var r=this[i];e&&"context"!==i||!Array.isArray(r)||(r=r.slice()),s[i]=r}return s},t}(),Token=function t(e){classCallCheck(this,t),this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,this.loc=new SourceLocation(e.startLoc,e.endLoc)},Tokenizer=function(){function t(e,s){classCallCheck(this,t),this.state=new State,this.state.init(e,s)}return t.prototype.next=function(){this.isLookahead||this.state.tokens.push(new Token(this.state)),this.state.lastTokEnd=this.state.end,this.state.lastTokStart=this.state.start,this.state.lastTokEndLoc=this.state.endLoc,this.state.lastTokStartLoc=this.state.startLoc,this.nextToken()},t.prototype.eat=function(t){return!!this.match(t)&&(this.next(),!0)},t.prototype.match=function(t){return this.state.type===t},t.prototype.isKeyword=function(t){return isKeyword(t)},t.prototype.lookahead=function(){var t=this.state;this.state=t.clone(!0),this.isLookahead=!0,this.next(),this.isLookahead=!1;var e=this.state.clone(!0);return this.state=t,e},t.prototype.setStrict=function(t){if(this.state.strict=t,this.match(types.num)||this.match(types.string)){for(this.state.pos=this.state.start;this.state.pos<this.state.lineStart;)this.state.lineStart=this.input.lastIndexOf("\n",this.state.lineStart-2)+1,--this.state.curLine;this.nextToken()}},t.prototype.curContext=function(){return this.state.context[this.state.context.length-1]},t.prototype.nextToken=function(){var t=this.curContext();return t&&t.preserveSpace||this.skipSpace(),this.state.containsOctal=!1,this.state.octalPosition=null,this.state.start=this.state.pos,this.state.startLoc=this.state.curPosition(),this.state.pos>=this.input.length?this.finishToken(types.eof):t.override?t.override(this):this.readToken(this.fullCharCodeAtPos())},t.prototype.readToken=function(t){return isIdentifierStart(t)||92===t?this.readWord():this.getTokenFromCode(t)},t.prototype.fullCharCodeAtPos=function(){var t=this.input.charCodeAt(this.state.pos);if(t<=55295||t>=57344)return t;var e=this.input.charCodeAt(this.state.pos+1);return(t<<10)+e-56613888},t.prototype.pushComment=function(t,e,s,i,r,a){var n={type:t?"CommentBlock":"CommentLine",value:e,start:s,end:i,loc:new SourceLocation(r,a)};this.isLookahead||(this.state.tokens.push(n),this.state.comments.push(n),this.addComment(n))},t.prototype.skipBlockComment=function(){var t=this.state.curPosition(),e=this.state.pos,s=this.input.indexOf("*/",this.state.pos+=2);s===-1&&this.raise(this.state.pos-2,"Unterminated comment"),this.state.pos=s+2,lineBreakG.lastIndex=e;for(var i=void 0;(i=lineBreakG.exec(this.input))&&i.index<this.state.pos;)++this.state.curLine,this.state.lineStart=i.index+i[0].length;this.pushComment(!0,this.input.slice(e+2,s),e,this.state.pos,t,this.state.curPosition())},t.prototype.skipLineComment=function(t){for(var e=this.state.pos,s=this.state.curPosition(),i=this.input.charCodeAt(this.state.pos+=t);this.state.pos<this.input.length&&10!==i&&13!==i&&8232!==i&&8233!==i;)++this.state.pos,i=this.input.charCodeAt(this.state.pos);this.pushComment(!1,this.input.slice(e+t,this.state.pos),e,this.state.pos,s,this.state.curPosition())},t.prototype.skipSpace=function(){t:for(;this.state.pos<this.input.length;){var t=this.input.charCodeAt(this.state.pos);switch(t){case 32:case 160:++this.state.pos;break;case 13:10===this.input.charCodeAt(this.state.pos+1)&&++this.state.pos;case 10:case 8232:case 8233:++this.state.pos,++this.state.curLine,this.state.lineStart=this.state.pos;break;case 47:switch(this.input.charCodeAt(this.state.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break t}break;default:if(!(t>8&&t<14||t>=5760&&nonASCIIwhitespace.test(String.fromCharCode(t))))break t;++this.state.pos}}},t.prototype.finishToken=function(t,e){this.state.end=this.state.pos,this.state.endLoc=this.state.curPosition();var s=this.state.type;this.state.type=t,this.state.value=e,this.updateContext(s)},t.prototype.readToken_dot=function(){var t=this.input.charCodeAt(this.state.pos+1);if(t>=48&&t<=57)return this.readNumber(!0);var e=this.input.charCodeAt(this.state.pos+2);return 46===t&&46===e?(this.state.pos+=3,this.finishToken(types.ellipsis)):(++this.state.pos,this.finishToken(types.dot))},t.prototype.readToken_slash=function(){if(this.state.exprAllowed)return++this.state.pos,this.readRegexp();var t=this.input.charCodeAt(this.state.pos+1);return 61===t?this.finishOp(types.assign,2):this.finishOp(types.slash,1)},t.prototype.readToken_mult_modulo=function(t){var e=42===t?types.star:types.modulo,s=1,i=this.input.charCodeAt(this.state.pos+1);return 42===i&&(s++,i=this.input.charCodeAt(this.state.pos+2),e=types.exponent),61===i&&(s++,e=types.assign),this.finishOp(e,s)},t.prototype.readToken_pipe_amp=function(t){var e=this.input.charCodeAt(this.state.pos+1);return e===t?this.finishOp(124===t?types.logicalOR:types.logicalAND,2):61===e?this.finishOp(types.assign,2):124===t&&125===e&&this.hasPlugin("flow")?this.finishOp(types.braceBarR,2):this.finishOp(124===t?types.bitwiseOR:types.bitwiseAND,1)},t.prototype.readToken_caret=function(){var t=this.input.charCodeAt(this.state.pos+1);return 61===t?this.finishOp(types.assign,2):this.finishOp(types.bitwiseXOR,1)},t.prototype.readToken_plus_min=function(t){var e=this.input.charCodeAt(this.state.pos+1);return e===t?45===e&&62===this.input.charCodeAt(this.state.pos+2)&&lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.pos))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(types.incDec,2):61===e?this.finishOp(types.assign,2):this.finishOp(types.plusMin,1)},t.prototype.readToken_lt_gt=function(t){var e=this.input.charCodeAt(this.state.pos+1),s=1;return e===t?(s=62===t&&62===this.input.charCodeAt(this.state.pos+2)?3:2,61===this.input.charCodeAt(this.state.pos+s)?this.finishOp(types.assign,s+1):this.finishOp(types.bitShift,s)):33===e&&60===t&&45===this.input.charCodeAt(this.state.pos+2)&&45===this.input.charCodeAt(this.state.pos+3)?(this.inModule&&this.unexpected(),this.skipLineComment(4),this.skipSpace(),this.nextToken()):(61===e&&(s=2),this.finishOp(types.relational,s))},t.prototype.readToken_eq_excl=function(t){var e=this.input.charCodeAt(this.state.pos+1);return 61===e?this.finishOp(types.equality,61===this.input.charCodeAt(this.state.pos+2)?3:2):61===t&&62===e?(this.state.pos+=2,this.finishToken(types.arrow)):this.finishOp(61===t?types.eq:types.prefix,1)},t.prototype.getTokenFromCode=function(t){switch(t){case 46:return this.readToken_dot();case 40:return++this.state.pos,this.finishToken(types.parenL);case 41:return++this.state.pos,this.finishToken(types.parenR);case 59:return++this.state.pos,this.finishToken(types.semi);case 44:return++this.state.pos,this.finishToken(types.comma);case 91:return++this.state.pos,this.finishToken(types.bracketL);case 93:return++this.state.pos,this.finishToken(types.bracketR);case 123:return this.hasPlugin("flow")&&124===this.input.charCodeAt(this.state.pos+1)?this.finishOp(types.braceBarL,2):(++this.state.pos,this.finishToken(types.braceL));case 125:return++this.state.pos,this.finishToken(types.braceR);case 58:return this.hasPlugin("functionBind")&&58===this.input.charCodeAt(this.state.pos+1)?this.finishOp(types.doubleColon,2):(++this.state.pos,this.finishToken(types.colon));case 63:return++this.state.pos,this.finishToken(types.question);case 64:return++this.state.pos,this.finishToken(types.at);case 96:return++this.state.pos,this.finishToken(types.backQuote);case 48:var e=this.input.charCodeAt(this.state.pos+1);if(120===e||88===e)return this.readRadixNumber(16);if(111===e||79===e)return this.readRadixNumber(8);if(98===e||66===e)return this.readRadixNumber(2);case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(t);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo(t);case 124:case 38:return this.readToken_pipe_amp(t);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(t);case 60:case 62:return this.readToken_lt_gt(t);case 61:case 33:return this.readToken_eq_excl(t);case 126:return this.finishOp(types.prefix,1)}this.raise(this.state.pos,"Unexpected character '"+codePointToString(t)+"'")},t.prototype.finishOp=function(t,e){var s=this.input.slice(this.state.pos,this.state.pos+e);return this.state.pos+=e,this.finishToken(t,s)},t.prototype.readRegexp=function(){for(var t=this.state.pos,e=void 0,s=void 0;;){this.state.pos>=this.input.length&&this.raise(t,"Unterminated regular expression");var i=this.input.charAt(this.state.pos);if(lineBreak.test(i)&&this.raise(t,"Unterminated regular expression"),e)e=!1;else{if("["===i)s=!0;else if("]"===i&&s)s=!1;else if("/"===i&&!s)break;e="\\"===i}++this.state.pos}var r=this.input.slice(t,this.state.pos);++this.state.pos;var a=this.readWord1();if(a){var n=/^[gmsiyu]*$/;n.test(a)||this.raise(t,"Invalid regular expression flag")}return this.finishToken(types.regexp,{pattern:r,flags:a})},t.prototype.readInt=function(t,e){for(var s=this.state.pos,i=0,r=0,a=null==e?1/0:e;r<a;++r){var n=this.input.charCodeAt(this.state.pos),o=void 0;if(o=n>=97?n-97+10:n>=65?n-65+10:n>=48&&n<=57?n-48:1/0,o>=t)break;++this.state.pos,i=i*t+o}return this.state.pos===s||null!=e&&this.state.pos-s!==e?null:i},t.prototype.readRadixNumber=function(t){this.state.pos+=2;var e=this.readInt(t);return null==e&&this.raise(this.state.start+2,"Expected number in radix "+t),isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.state.pos,"Identifier directly after number"),this.finishToken(types.num,e)},t.prototype.readNumber=function(t){var e=this.state.pos,s=48===this.input.charCodeAt(this.state.pos),i=!1;t||null!==this.readInt(10)||this.raise(e,"Invalid number");var r=this.input.charCodeAt(this.state.pos);46===r&&(++this.state.pos,this.readInt(10),i=!0,r=this.input.charCodeAt(this.state.pos)),69!==r&&101!==r||(r=this.input.charCodeAt(++this.state.pos),43!==r&&45!==r||++this.state.pos,null===this.readInt(10)&&this.raise(e,"Invalid number"),i=!0),isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.state.pos,"Identifier directly after number");var a=this.input.slice(e,this.state.pos),n=void 0;return i?n=parseFloat(a):s&&1!==a.length?/[89]/.test(a)||this.state.strict?this.raise(e,"Invalid number"):n=parseInt(a,8):n=parseInt(a,10),this.finishToken(types.num,n)},t.prototype.readCodePoint=function(){var t=this.input.charCodeAt(this.state.pos),e=void 0;if(123===t){var s=++this.state.pos;e=this.readHexChar(this.input.indexOf("}",this.state.pos)-this.state.pos),++this.state.pos,e>1114111&&this.raise(s,"Code point out of bounds")}else e=this.readHexChar(4);return e},t.prototype.readString=function(t){for(var e="",s=++this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated string constant");var i=this.input.charCodeAt(this.state.pos);if(i===t)break;92===i?(e+=this.input.slice(s,this.state.pos),e+=this.readEscapedChar(!1),s=this.state.pos):(isNewLine(i)&&this.raise(this.state.start,"Unterminated string constant"),++this.state.pos)}return e+=this.input.slice(s,this.state.pos++),this.finishToken(types.string,e)},t.prototype.readTmplToken=function(){for(var t="",e=this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated template");var s=this.input.charCodeAt(this.state.pos);if(96===s||36===s&&123===this.input.charCodeAt(this.state.pos+1))return this.state.pos===this.state.start&&this.match(types.template)?36===s?(this.state.pos+=2,this.finishToken(types.dollarBraceL)):(++this.state.pos,this.finishToken(types.backQuote)):(t+=this.input.slice(e,this.state.pos),this.finishToken(types.template,t));if(92===s)t+=this.input.slice(e,this.state.pos),t+=this.readEscapedChar(!0),e=this.state.pos;else if(isNewLine(s)){switch(t+=this.input.slice(e,this.state.pos),++this.state.pos,s){case 13:10===this.input.charCodeAt(this.state.pos)&&++this.state.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(s)}++this.state.curLine,this.state.lineStart=this.state.pos,e=this.state.pos}else++this.state.pos}},t.prototype.readEscapedChar=function(t){var e=this.input.charCodeAt(++this.state.pos);switch(++this.state.pos,e){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return codePointToString(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.state.pos)&&++this.state.pos;case 10:return this.state.lineStart=this.state.pos,++this.state.curLine,"";default:if(e>=48&&e<=55){var s=this.input.substr(this.state.pos-1,3).match(/^[0-7]+/)[0],i=parseInt(s,8);return i>255&&(s=s.slice(0,-1),i=parseInt(s,8)),i>0&&(this.state.containsOctal||(this.state.containsOctal=!0,this.state.octalPosition=this.state.pos-2),(this.state.strict||t)&&this.raise(this.state.pos-2,"Octal literal in strict mode")),this.state.pos+=s.length-1,String.fromCharCode(i)}return String.fromCharCode(e)}},t.prototype.readHexChar=function(t){var e=this.state.pos,s=this.readInt(16,t);return null===s&&this.raise(e,"Bad character escape sequence"),s},t.prototype.readWord1=function(){this.state.containsEsc=!1;for(var t="",e=!0,s=this.state.pos;this.state.pos<this.input.length;){var i=this.fullCharCodeAtPos();if(isIdentifierChar(i))this.state.pos+=i<=65535?1:2;else{if(92!==i)break;this.state.containsEsc=!0,t+=this.input.slice(s,this.state.pos);var r=this.state.pos;117!==this.input.charCodeAt(++this.state.pos)&&this.raise(this.state.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.state.pos;var a=this.readCodePoint();(e?isIdentifierStart:isIdentifierChar)(a,!0)||this.raise(r,"Invalid Unicode escape"),t+=codePointToString(a),s=this.state.pos}e=!1}return t+this.input.slice(s,this.state.pos)},t.prototype.readWord=function(){var t=this.readWord1(),e=types.name;return!this.state.containsEsc&&this.isKeyword(t)&&(e=keywords[t]),this.finishToken(e,t)},t.prototype.braceIsBlock=function(t){if(t===types.colon){var e=this.curContext();if(e===types$1.braceStatement||e===types$1.braceExpression)return!e.isExpr}return t===types._return?lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start)):t===types._else||t===types.semi||t===types.eof||t===types.parenR||(t===types.braceL?this.curContext()===types$1.braceStatement:!this.state.exprAllowed)},t.prototype.updateContext=function(t){var e=this.state.type,s=void 0;e.keyword&&t===types.dot?this.state.exprAllowed=!1:(s=e.updateContext)?s.call(this,t):this.state.exprAllowed=e.beforeExpr},t}(),plugins={},frozenDeprecatedWildcardPluginList=["jsx","doExpressions","objectRestSpread","decorators","classProperties","exportExtensions","asyncGenerators","functionBind","functionSent","dynamicImport","flow"],Parser=function(t){function e(s,i){classCallCheck(this,e),s=getOptions(s);var r=possibleConstructorReturn(this,t.call(this,s,i));return r.options=s,r.inModule="module"===r.options.sourceType,r.input=i,r.plugins=r.loadPlugins(r.options.plugins),r.filename=s.sourceFilename,0===r.state.pos&&"#"===r.input[0]&&"!"===r.input[1]&&r.skipLineComment(2),r}return inherits(e,t),e.prototype.isReservedWord=function(t){return"await"===t?this.inModule:reservedWords[6](t)},e.prototype.hasPlugin=function(t){return!!(this.plugins["*"]&&frozenDeprecatedWildcardPluginList.indexOf(t)>-1)||!!this.plugins[t]},e.prototype.extend=function(t,e){this[t]=e(this[t])},e.prototype.loadAllPlugins=function(){var t=this,e=Object.keys(plugins).filter(function(t){return"flow"!==t});e.push("flow"),e.forEach(function(e){var s=plugins[e];s&&s(t)})},e.prototype.loadPlugins=function(t){if(t.indexOf("*")>=0)return this.loadAllPlugins(),{"*":!0};var e={};t.indexOf("flow")>=0&&(t=t.filter(function(t){return"flow"!==t}),t.push("flow"));for(var s=t,i=Array.isArray(s),r=0,s=i?s:s[Symbol.iterator]();;){var a;if(i){if(r>=s.length)break;a=s[r++]}else{if(r=s.next(),r.done)break;a=r.value}var n=a;if(!e[n]){e[n]=!0;var o=plugins[n];o&&o(this)}}return e},e.prototype.parse=function(){var t=this.startNode(),e=this.startNode();return this.nextToken(),this.parseTopLevel(t,e)},e}(Tokenizer),pp=Parser.prototype;pp.addExtra=function(t,e,s){if(t){var i=t.extra=t.extra||{};i[e]=s}},pp.isRelational=function(t){return this.match(types.relational)&&this.state.value===t},pp.expectRelational=function(t){this.isRelational(t)?this.next():this.unexpected(null,types.relational)},pp.isContextual=function(t){return this.match(types.name)&&this.state.value===t},pp.eatContextual=function(t){return this.state.value===t&&this.eat(types.name)},pp.expectContextual=function(t,e){this.eatContextual(t)||this.unexpected(null,e)},pp.canInsertSemicolon=function(){return this.match(types.eof)||this.match(types.braceR)||lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))},pp.isLineTerminator=function(){return this.eat(types.semi)||this.canInsertSemicolon()},pp.semicolon=function(){this.isLineTerminator()||this.unexpected(null,types.semi)},pp.expect=function(t,e){return this.eat(t)||this.unexpected(e,t)},pp.unexpected=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected token";e&&"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e.label&&(e="Unexpected token, expected "+e.label),this.raise(null!=t?t:this.state.start,e)};var pp$1=Parser.prototype;pp$1.parseTopLevel=function(t,e){return e.sourceType=this.options.sourceType,
	this.parseBlockBody(e,!0,!0,types.eof),t.program=this.finishNode(e,"Program"),t.comments=this.state.comments,t.tokens=this.state.tokens,this.finishNode(t,"File")};var loopLabel={kind:"loop"},switchLabel={kind:"switch"};pp$1.stmtToDirective=function(t){var e=t.expression,s=this.startNodeAt(e.start,e.loc.start),i=this.startNodeAt(t.start,t.loc.start),r=this.input.slice(e.start,e.end),a=s.value=r.slice(1,-1);return this.addExtra(s,"raw",r),this.addExtra(s,"rawValue",a),i.value=this.finishNodeAt(s,"DirectiveLiteral",e.end,e.loc.end),this.finishNodeAt(i,"Directive",t.end,t.loc.end)},pp$1.parseStatement=function(t,e){this.match(types.at)&&this.parseDecorators(!0);var s=this.state.type,i=this.startNode();switch(s){case types._break:case types._continue:return this.parseBreakContinueStatement(i,s.keyword);case types._debugger:return this.parseDebuggerStatement(i);case types._do:return this.parseDoStatement(i);case types._for:return this.parseForStatement(i);case types._function:return t||this.unexpected(),this.parseFunctionStatement(i);case types._class:return t||this.unexpected(),this.takeDecorators(i),this.parseClass(i,!0);case types._if:return this.parseIfStatement(i);case types._return:return this.parseReturnStatement(i);case types._switch:return this.parseSwitchStatement(i);case types._throw:return this.parseThrowStatement(i);case types._try:return this.parseTryStatement(i);case types._let:case types._const:t||this.unexpected();case types._var:return this.parseVarStatement(i,s);case types._while:return this.parseWhileStatement(i);case types._with:return this.parseWithStatement(i);case types.braceL:return this.parseBlock();case types.semi:return this.parseEmptyStatement(i);case types._export:case types._import:if(this.hasPlugin("dynamicImport")&&this.lookahead().type===types.parenL)break;return this.options.allowImportExportEverywhere||(e||this.raise(this.state.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.state.start,"'import' and 'export' may appear only with 'sourceType: module'")),s===types._import?this.parseImport(i):this.parseExport(i);case types.name:if("async"===this.state.value){var r=this.state.clone();if(this.next(),this.match(types._function)&&!this.canInsertSemicolon())return this.expect(types._function),this.parseFunction(i,!0,!1,!0);this.state=r}}var a=this.state.value,n=this.parseExpression();return s===types.name&&"Identifier"===n.type&&this.eat(types.colon)?this.parseLabeledStatement(i,a,n):this.parseExpressionStatement(i,n)},pp$1.takeDecorators=function(t){this.state.decorators.length&&(t.decorators=this.state.decorators,this.state.decorators=[])},pp$1.parseDecorators=function(t){for(;this.match(types.at);){var e=this.parseDecorator();this.state.decorators.push(e)}t&&this.match(types._export)||this.match(types._class)||this.raise(this.state.start,"Leading decorators must be attached to a class declaration")},pp$1.parseDecorator=function(){this.hasPlugin("decorators")||this.unexpected();var t=this.startNode();return this.next(),t.expression=this.parseMaybeAssign(),this.finishNode(t,"Decorator")},pp$1.parseBreakContinueStatement=function(t,e){var s="break"===e;this.next(),this.isLineTerminator()?t.label=null:this.match(types.name)?(t.label=this.parseIdentifier(),this.semicolon()):this.unexpected();var i=void 0;for(i=0;i<this.state.labels.length;++i){var r=this.state.labels[i];if(null==t.label||r.name===t.label.name){if(null!=r.kind&&(s||"loop"===r.kind))break;if(t.label&&s)break}}return i===this.state.labels.length&&this.raise(t.start,"Unsyntactic "+e),this.finishNode(t,s?"BreakStatement":"ContinueStatement")},pp$1.parseDebuggerStatement=function(t){return this.next(),this.semicolon(),this.finishNode(t,"DebuggerStatement")},pp$1.parseDoStatement=function(t){return this.next(),this.state.labels.push(loopLabel),t.body=this.parseStatement(!1),this.state.labels.pop(),this.expect(types._while),t.test=this.parseParenExpression(),this.eat(types.semi),this.finishNode(t,"DoWhileStatement")},pp$1.parseForStatement=function(t){this.next(),this.state.labels.push(loopLabel);var e=!1;if(this.hasPlugin("asyncGenerators")&&this.state.inAsync&&this.isContextual("await")&&(e=!0,this.next()),this.expect(types.parenL),this.match(types.semi))return e&&this.unexpected(),this.parseFor(t,null);if(this.match(types._var)||this.match(types._let)||this.match(types._const)){var s=this.startNode(),i=this.state.type;return this.next(),this.parseVar(s,!0,i),this.finishNode(s,"VariableDeclaration"),!this.match(types._in)&&!this.isContextual("of")||1!==s.declarations.length||s.declarations[0].init?(e&&this.unexpected(),this.parseFor(t,s)):this.parseForIn(t,s,e)}var r={start:0},a=this.parseExpression(!0,r);if(this.match(types._in)||this.isContextual("of")){var n=this.isContextual("of")?"for-of statement":"for-in statement";return this.toAssignable(a,void 0,n),this.checkLVal(a,void 0,void 0,n),this.parseForIn(t,a,e)}return r.start&&this.unexpected(r.start),e&&this.unexpected(),this.parseFor(t,a)},pp$1.parseFunctionStatement=function(t){return this.next(),this.parseFunction(t,!0)},pp$1.parseIfStatement=function(t){return this.next(),t.test=this.parseParenExpression(),t.consequent=this.parseStatement(!1),t.alternate=this.eat(types._else)?this.parseStatement(!1):null,this.finishNode(t,"IfStatement")},pp$1.parseReturnStatement=function(t){return this.state.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.state.start,"'return' outside of function"),this.next(),this.isLineTerminator()?t.argument=null:(t.argument=this.parseExpression(),this.semicolon()),this.finishNode(t,"ReturnStatement")},pp$1.parseSwitchStatement=function(t){this.next(),t.discriminant=this.parseParenExpression(),t.cases=[],this.expect(types.braceL),this.state.labels.push(switchLabel);for(var e,s=void 0;!this.match(types.braceR);)if(this.match(types._case)||this.match(types._default)){var i=this.match(types._case);s&&this.finishNode(s,"SwitchCase"),t.cases.push(s=this.startNode()),s.consequent=[],this.next(),i?s.test=this.parseExpression():(e&&this.raise(this.state.lastTokStart,"Multiple default clauses"),e=!0,s.test=null),this.expect(types.colon)}else s?s.consequent.push(this.parseStatement(!0)):this.unexpected();return s&&this.finishNode(s,"SwitchCase"),this.next(),this.state.labels.pop(),this.finishNode(t,"SwitchStatement")},pp$1.parseThrowStatement=function(t){return this.next(),lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))&&this.raise(this.state.lastTokEnd,"Illegal newline after throw"),t.argument=this.parseExpression(),this.semicolon(),this.finishNode(t,"ThrowStatement")};var empty=[];pp$1.parseTryStatement=function(t){if(this.next(),t.block=this.parseBlock(),t.handler=null,this.match(types._catch)){var e=this.startNode();this.next(),this.expect(types.parenL),e.param=this.parseBindingAtom(),this.checkLVal(e.param,!0,Object.create(null),"catch clause"),this.expect(types.parenR),e.body=this.parseBlock(),t.handler=this.finishNode(e,"CatchClause")}return t.guardedHandlers=empty,t.finalizer=this.eat(types._finally)?this.parseBlock():null,t.handler||t.finalizer||this.raise(t.start,"Missing catch or finally clause"),this.finishNode(t,"TryStatement")},pp$1.parseVarStatement=function(t,e){return this.next(),this.parseVar(t,!1,e),this.semicolon(),this.finishNode(t,"VariableDeclaration")},pp$1.parseWhileStatement=function(t){return this.next(),t.test=this.parseParenExpression(),this.state.labels.push(loopLabel),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,"WhileStatement")},pp$1.parseWithStatement=function(t){return this.state.strict&&this.raise(this.state.start,"'with' in strict mode"),this.next(),t.object=this.parseParenExpression(),t.body=this.parseStatement(!1),this.finishNode(t,"WithStatement")},pp$1.parseEmptyStatement=function(t){return this.next(),this.finishNode(t,"EmptyStatement")},pp$1.parseLabeledStatement=function(t,e,s){for(var i=this.state.labels,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}var o=n;o.name===e&&this.raise(s.start,"Label '"+e+"' is already declared")}for(var p=this.state.type.isLoop?"loop":this.match(types._switch)?"switch":null,h=this.state.labels.length-1;h>=0;h--){var c=this.state.labels[h];if(c.statementStart!==t.start)break;c.statementStart=this.state.start,c.kind=p}return this.state.labels.push({name:e,kind:p,statementStart:this.state.start}),t.body=this.parseStatement(!0),this.state.labels.pop(),t.label=s,this.finishNode(t,"LabeledStatement")},pp$1.parseExpressionStatement=function(t,e){return t.expression=e,this.semicolon(),this.finishNode(t,"ExpressionStatement")},pp$1.parseBlock=function(t){var e=this.startNode();return this.expect(types.braceL),this.parseBlockBody(e,t,!1,types.braceR),this.finishNode(e,"BlockStatement")},pp$1.parseBlockBody=function(t,e,s,i){t.body=[],t.directives=[];for(var r=!1,a=void 0,n=void 0;!this.eat(i);){r||!this.state.containsOctal||n||(n=this.state.octalPosition);var o=this.parseStatement(!0,s);if(!e||r||"ExpressionStatement"!==o.type||"StringLiteral"!==o.expression.type||o.expression.extra.parenthesized)r=!0,t.body.push(o);else{var p=this.stmtToDirective(o);t.directives.push(p),void 0===a&&"use strict"===p.value.value&&(a=this.state.strict,this.setStrict(!0),n&&this.raise(n,"Octal literal in strict mode"))}}a===!1&&this.setStrict(!1)},pp$1.parseFor=function(t,e){return t.init=e,this.expect(types.semi),t.test=this.match(types.semi)?null:this.parseExpression(),this.expect(types.semi),t.update=this.match(types.parenR)?null:this.parseExpression(),this.expect(types.parenR),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,"ForStatement")},pp$1.parseForIn=function(t,e,s){var i=void 0;return s?(this.eatContextual("of"),i="ForAwaitStatement"):(i=this.match(types._in)?"ForInStatement":"ForOfStatement",this.next()),t.left=e,t.right=this.parseExpression(),this.expect(types.parenR),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,i)},pp$1.parseVar=function(t,e,s){for(t.declarations=[],t.kind=s.keyword;;){var i=this.startNode();if(this.parseVarHead(i),this.eat(types.eq)?i.init=this.parseMaybeAssign(e):s!==types._const||this.match(types._in)||this.isContextual("of")?"Identifier"===i.id.type||e&&(this.match(types._in)||this.isContextual("of"))?i.init=null:this.raise(this.state.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),t.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(types.comma))break}return t},pp$1.parseVarHead=function(t){t.id=this.parseBindingAtom(),this.checkLVal(t.id,!0,void 0,"variable declaration")},pp$1.parseFunction=function(t,e,s,i,r){var a=this.state.inMethod;return this.state.inMethod=!1,this.initFunction(t,i),this.match(types.star)&&(t.async&&!this.hasPlugin("asyncGenerators")?this.unexpected():(t.generator=!0,this.next())),!e||r||this.match(types.name)||this.match(types._yield)||this.unexpected(),(this.match(types.name)||this.match(types._yield))&&(t.id=this.parseBindingIdentifier()),this.parseFunctionParams(t),this.parseFunctionBody(t,s),this.state.inMethod=a,this.finishNode(t,e?"FunctionDeclaration":"FunctionExpression")},pp$1.parseFunctionParams=function(t){this.expect(types.parenL),t.params=this.parseBindingList(types.parenR)},pp$1.parseClass=function(t,e,s){return this.next(),this.parseClassId(t,e,s),this.parseClassSuper(t),this.parseClassBody(t),this.finishNode(t,e?"ClassDeclaration":"ClassExpression")},pp$1.isClassProperty=function(){return this.match(types.eq)||this.isLineTerminator()},pp$1.isClassMutatorStarter=function(){return!1},pp$1.parseClassBody=function(t){var e=this.state.strict;this.state.strict=!0;var s=!1,i=!1,r=[],a=this.startNode();for(a.body=[],this.expect(types.braceL);!this.eat(types.braceR);)if(!this.eat(types.semi))if(this.match(types.at))r.push(this.parseDecorator());else{var n=this.startNode();r.length&&(n.decorators=r,r=[]);var o=!1,p=this.match(types.name)&&"static"===this.state.value,h=this.eat(types.star),c=!1,l=!1;if(this.parsePropertyName(n),n.static=p&&!this.match(types.parenL),n.static&&(h=this.eat(types.star),this.parsePropertyName(n)),!h){if(this.isClassProperty()){a.body.push(this.parseClassProperty(n));continue}"Identifier"===n.key.type&&!n.computed&&this.hasPlugin("classConstructorCall")&&"call"===n.key.name&&this.match(types.name)&&"constructor"===this.state.value&&(o=!0,this.parsePropertyName(n))}var u=!this.match(types.parenL)&&!n.computed&&"Identifier"===n.key.type&&"async"===n.key.name;if(u&&(this.hasPlugin("asyncGenerators")&&this.eat(types.star)&&(h=!0),l=!0,this.parsePropertyName(n)),n.kind="method",!n.computed){var d=n.key;l||h||this.isClassMutatorStarter()||"Identifier"!==d.type||this.match(types.parenL)||"get"!==d.name&&"set"!==d.name||(c=!0,n.kind=d.name,d=this.parsePropertyName(n));var f=!o&&!n.static&&("Identifier"===d.type&&"constructor"===d.name||"StringLiteral"===d.type&&"constructor"===d.value);f&&(i&&this.raise(d.start,"Duplicate constructor in the same class"),c&&this.raise(d.start,"Constructor can't have get/set modifier"),h&&this.raise(d.start,"Constructor can't be a generator"),l&&this.raise(d.start,"Constructor can't be an async function"),n.kind="constructor",i=!0);var y=n.static&&("Identifier"===d.type&&"prototype"===d.name||"StringLiteral"===d.type&&"prototype"===d.value);y&&this.raise(d.start,"Classes may not have static property named prototype")}if(o&&(s&&this.raise(n.start,"Duplicate constructor call in the same class"),n.kind="constructorCall",s=!0),"constructor"!==n.kind&&"constructorCall"!==n.kind||!n.decorators||this.raise(n.start,"You can't attach decorators to a class constructor"),this.parseClassMethod(a,n,h,l),c){var m="get"===n.kind?0:1;if(n.params.length!==m){var x=n.start;"get"===n.kind?this.raise(x,"getter should have no params"):this.raise(x,"setter should have exactly one param")}}}r.length&&this.raise(this.state.start,"You have trailing decorators with no method"),t.body=this.finishNode(a,"ClassBody"),this.state.strict=e},pp$1.parseClassProperty=function(t){return this.match(types.eq)?(this.hasPlugin("classProperties")||this.unexpected(),this.next(),t.value=this.parseMaybeAssign()):t.value=null,this.semicolon(),this.finishNode(t,"ClassProperty")},pp$1.parseClassMethod=function(t,e,s,i){this.parseMethod(e,s,i),t.body.push(this.finishNode(e,"ClassMethod"))},pp$1.parseClassId=function(t,e,s){this.match(types.name)?t.id=this.parseIdentifier():s||!e?t.id=null:this.unexpected()},pp$1.parseClassSuper=function(t){t.superClass=this.eat(types._extends)?this.parseExprSubscripts():null},pp$1.parseExport=function(t){if(this.next(),this.match(types.star)){var e=this.startNode();if(this.next(),!this.hasPlugin("exportExtensions")||!this.eatContextual("as"))return this.parseExportFrom(t,!0),this.finishNode(t,"ExportAllDeclaration");e.exported=this.parseIdentifier(),t.specifiers=[this.finishNode(e,"ExportNamespaceSpecifier")],this.parseExportSpecifiersMaybe(t),this.parseExportFrom(t,!0)}else if(this.hasPlugin("exportExtensions")&&this.isExportDefaultSpecifier()){var s=this.startNode();if(s.exported=this.parseIdentifier(!0),t.specifiers=[this.finishNode(s,"ExportDefaultSpecifier")],this.match(types.comma)&&this.lookahead().type===types.star){this.expect(types.comma);var i=this.startNode();this.expect(types.star),this.expectContextual("as"),i.exported=this.parseIdentifier(),t.specifiers.push(this.finishNode(i,"ExportNamespaceSpecifier"))}else this.parseExportSpecifiersMaybe(t);this.parseExportFrom(t,!0)}else{if(this.eat(types._default)){var r=this.startNode(),a=!1;return this.eat(types._function)?r=this.parseFunction(r,!0,!1,!1,!0):this.match(types._class)?r=this.parseClass(r,!0,!0):(a=!0,r=this.parseMaybeAssign()),t.declaration=r,a&&this.semicolon(),this.checkExport(t,!0,!0),this.finishNode(t,"ExportDefaultDeclaration")}this.shouldParseExportDeclaration()?(t.specifiers=[],t.source=null,t.declaration=this.parseExportDeclaration(t)):(t.declaration=null,t.specifiers=this.parseExportSpecifiers(),this.parseExportFrom(t))}return this.checkExport(t,!0),this.finishNode(t,"ExportNamedDeclaration")},pp$1.parseExportDeclaration=function(){return this.parseStatement(!0)},pp$1.isExportDefaultSpecifier=function(){if(this.match(types.name))return"type"!==this.state.value&&"async"!==this.state.value&&"interface"!==this.state.value;if(!this.match(types._default))return!1;var t=this.lookahead();return t.type===types.comma||t.type===types.name&&"from"===t.value},pp$1.parseExportSpecifiersMaybe=function(t){this.eat(types.comma)&&(t.specifiers=t.specifiers.concat(this.parseExportSpecifiers()))},pp$1.parseExportFrom=function(t,e){this.eatContextual("from")?(t.source=this.match(types.string)?this.parseExprAtom():this.unexpected(),this.checkExport(t)):e?this.unexpected():t.source=null,this.semicolon()},pp$1.shouldParseExportDeclaration=function(){return"var"===this.state.type.keyword||"const"===this.state.type.keyword||"let"===this.state.type.keyword||"function"===this.state.type.keyword||"class"===this.state.type.keyword||this.isContextual("async")},pp$1.checkExport=function(t,e,s){if(e)if(s)this.checkDuplicateExports(t,"default");else if(t.specifiers&&t.specifiers.length)for(var i=t.specifiers,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}var o=n;this.checkDuplicateExports(o,o.exported.name)}else if(t.declaration)if("FunctionDeclaration"===t.declaration.type||"ClassDeclaration"===t.declaration.type)this.checkDuplicateExports(t,t.declaration.id.name);else if("VariableDeclaration"===t.declaration.type)for(var p=t.declaration.declarations,h=Array.isArray(p),c=0,p=h?p:p[Symbol.iterator]();;){var l;if(h){if(c>=p.length)break;l=p[c++]}else{if(c=p.next(),c.done)break;l=c.value}var u=l;this.checkDeclaration(u.id)}if(this.state.decorators.length){var d=t.declaration&&("ClassDeclaration"===t.declaration.type||"ClassExpression"===t.declaration.type);t.declaration&&d||this.raise(t.start,"You can only use decorators on an export when exporting a class"),this.takeDecorators(t.declaration)}},pp$1.checkDeclaration=function(t){if("ObjectPattern"===t.type)for(var e=t.properties,s=Array.isArray(e),i=0,e=s?e:e[Symbol.iterator]();;){var r;if(s){if(i>=e.length)break;r=e[i++]}else{if(i=e.next(),i.done)break;r=i.value}var a=r;this.checkDeclaration(a)}else if("ArrayPattern"===t.type)for(var n=t.elements,o=Array.isArray(n),p=0,n=o?n:n[Symbol.iterator]();;){var h;if(o){if(p>=n.length)break;h=n[p++]}else{if(p=n.next(),p.done)break;h=p.value}var c=h;c&&this.checkDeclaration(c)}else"ObjectProperty"===t.type?this.checkDeclaration(t.value):"RestElement"===t.type||"RestProperty"===t.type?this.checkDeclaration(t.argument):"Identifier"===t.type&&this.checkDuplicateExports(t,t.name)},pp$1.checkDuplicateExports=function(t,e){this.state.exportedIdentifiers.indexOf(e)>-1&&this.raiseDuplicateExportError(t,e),this.state.exportedIdentifiers.push(e)},pp$1.raiseDuplicateExportError=function(t,e){this.raise(t.start,"default"===e?"Only one default export allowed per module.":"`"+e+"` has already been exported. Exported identifiers must be unique.")},pp$1.parseExportSpecifiers=function(){var t=[],e=!0,s=void 0;for(this.expect(types.braceL);!this.eat(types.braceR);){if(e)e=!1;else if(this.expect(types.comma),this.eat(types.braceR))break;var i=this.match(types._default);i&&!s&&(s=!0);var r=this.startNode();r.local=this.parseIdentifier(i),r.exported=this.eatContextual("as")?this.parseIdentifier(!0):r.local.__clone(),t.push(this.finishNode(r,"ExportSpecifier"))}return s&&!this.isContextual("from")&&this.unexpected(),t},pp$1.parseImport=function(t){return this.next(),this.match(types.string)?(t.specifiers=[],t.source=this.parseExprAtom()):(t.specifiers=[],this.parseImportSpecifiers(t),this.expectContextual("from"),t.source=this.match(types.string)?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(t,"ImportDeclaration")},pp$1.parseImportSpecifiers=function(t){var e=!0;if(this.match(types.name)){var s=this.state.start,i=this.state.startLoc;if(t.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(),s,i)),!this.eat(types.comma))return}if(this.match(types.star)){var r=this.startNode();return this.next(),this.expectContextual("as"),r.local=this.parseIdentifier(),this.checkLVal(r.local,!0,void 0,"import namespace specifier"),void t.specifiers.push(this.finishNode(r,"ImportNamespaceSpecifier"))}for(this.expect(types.braceL);!this.eat(types.braceR);){if(e)e=!1;else if(this.expect(types.comma),this.eat(types.braceR))break;this.parseImportSpecifier(t)}},pp$1.parseImportSpecifier=function(t){var e=this.startNode();e.imported=this.parseIdentifier(!0),e.local=this.eatContextual("as")?this.parseIdentifier():e.imported.__clone(),this.checkLVal(e.local,!0,void 0,"import specifier"),t.specifiers.push(this.finishNode(e,"ImportSpecifier"))},pp$1.parseImportSpecifierDefault=function(t,e,s){var i=this.startNodeAt(e,s);return i.local=t,this.checkLVal(i.local,!0,void 0,"default import specifier"),this.finishNode(i,"ImportDefaultSpecifier")};var pp$2=Parser.prototype;pp$2.toAssignable=function(t,e,s){if(t)switch(t.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":break;case"ObjectExpression":t.type="ObjectPattern";for(var i=t.properties,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}var o=n;"ObjectMethod"===o.type?"get"===o.kind||"set"===o.kind?this.raise(o.key.start,"Object pattern can't contain getter or setter"):this.raise(o.key.start,"Object pattern can't contain methods"):this.toAssignable(o,e,"object destructuring pattern")}break;case"ObjectProperty":this.toAssignable(t.value,e,s);break;case"SpreadProperty":t.type="RestProperty";break;case"ArrayExpression":t.type="ArrayPattern",this.toAssignableList(t.elements,e,s);break;case"AssignmentExpression":"="===t.operator?(t.type="AssignmentPattern",delete t.operator):this.raise(t.left.end,"Only '=' operator can be used for specifying default value.");break;case"MemberExpression":if(!e)break;default:var p="Invalid left-hand side"+(s?" in "+s:"expression");this.raise(t.start,p)}return t},pp$2.toAssignableList=function(t,e,s){var i=t.length;if(i){var r=t[i-1];if(r&&"RestElement"===r.type)--i;else if(r&&"SpreadElement"===r.type){r.type="RestElement";var a=r.argument;this.toAssignable(a,e,s),"Identifier"!==a.type&&"MemberExpression"!==a.type&&"ArrayPattern"!==a.type&&this.unexpected(a.start),--i}}for(var n=0;n<i;n++){var o=t[n];o&&this.toAssignable(o,e,s)}return t},pp$2.toReferencedList=function(t){return t},pp$2.parseSpread=function(t){var e=this.startNode();return this.next(),e.argument=this.parseMaybeAssign(!1,t),this.finishNode(e,"SpreadElement")},pp$2.parseRest=function(){var t=this.startNode();return this.next(),t.argument=this.parseBindingIdentifier(),this.finishNode(t,"RestElement")},pp$2.shouldAllowYieldIdentifier=function(){return this.match(types._yield)&&!this.state.strict&&!this.state.inGenerator},pp$2.parseBindingIdentifier=function(){return this.parseIdentifier(this.shouldAllowYieldIdentifier())},pp$2.parseBindingAtom=function(){switch(this.state.type){case types._yield:(this.state.strict||this.state.inGenerator)&&this.unexpected();case types.name:return this.parseIdentifier(!0);case types.bracketL:var t=this.startNode();return this.next(),t.elements=this.parseBindingList(types.bracketR,!0),this.finishNode(t,"ArrayPattern");case types.braceL:return this.parseObj(!0);default:this.unexpected()}},pp$2.parseBindingList=function(t,e){for(var s=[],i=!0;!this.eat(t);)if(i?i=!1:this.expect(types.comma),e&&this.match(types.comma))s.push(null);else{if(this.eat(t))break;if(this.match(types.ellipsis)){s.push(this.parseAssignableListItemTypes(this.parseRest())),this.expect(t);break}for(var r=[];this.match(types.at);)r.push(this.parseDecorator());var a=this.parseMaybeDefault();r.length&&(a.decorators=r),this.parseAssignableListItemTypes(a),s.push(this.parseMaybeDefault(a.start,a.loc.start,a))}return s},pp$2.parseAssignableListItemTypes=function(t){return t},pp$2.parseMaybeDefault=function(t,e,s){if(e=e||this.state.startLoc,t=t||this.state.start,s=s||this.parseBindingAtom(),!this.eat(types.eq))return s;var i=this.startNodeAt(t,e);return i.left=s,i.right=this.parseMaybeAssign(),this.finishNode(i,"AssignmentPattern")},pp$2.checkLVal=function(t,e,s,i){switch(t.type){case"Identifier":if(this.checkReservedWord(t.name,t.start,!1,!0),s){var r="_"+t.name;s[r]?this.raise(t.start,"Argument name clash in strict mode"):s[r]=!0}break;case"MemberExpression":e&&this.raise(t.start,(e?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var a=t.properties,n=Array.isArray(a),o=0,a=n?a:a[Symbol.iterator]();;){var p;if(n){if(o>=a.length)break;p=a[o++]}else{if(o=a.next(),o.done)break;p=o.value}var h=p;"ObjectProperty"===h.type&&(h=h.value),this.checkLVal(h,e,s,"object destructuring pattern")}break;case"ArrayPattern":for(var c=t.elements,l=Array.isArray(c),u=0,c=l?c:c[Symbol.iterator]();;){var d;if(l){if(u>=c.length)break;d=c[u++]}else{if(u=c.next(),u.done)break;d=u.value}var f=d;f&&this.checkLVal(f,e,s,"array destructuring pattern")}break;case"AssignmentPattern":this.checkLVal(t.left,e,s,"assignment pattern");break;case"RestProperty":this.checkLVal(t.argument,e,s,"rest property");break;case"RestElement":this.checkLVal(t.argument,e,s,"rest element");break;default:var y=(e?"Binding invalid":"Invalid")+" left-hand side"+(i?" in "+i:"expression");this.raise(t.start,y)}};var pp$3=Parser.prototype;pp$3.checkPropClash=function(t,e){if(!t.computed){var s=t.key,i=void 0;switch(s.type){case"Identifier":i=s.name;break;case"StringLiteral":case"NumericLiteral":i=String(s.value);break;default:return}"__proto__"!==i||t.kind||(e.proto&&this.raise(s.start,"Redefinition of __proto__ property"),e.proto=!0)}},pp$3.parseExpression=function(t,e){var s=this.state.start,i=this.state.startLoc,r=this.parseMaybeAssign(t,e);if(this.match(types.comma)){var a=this.startNodeAt(s,i);for(a.expressions=[r];this.eat(types.comma);)a.expressions.push(this.parseMaybeAssign(t,e));return this.toReferencedList(a.expressions),this.finishNode(a,"SequenceExpression")}return r},pp$3.parseMaybeAssign=function(t,e,s,i){var r=this.state.start,a=this.state.startLoc;if(this.match(types._yield)&&this.state.inGenerator){var n=this.parseYield();return s&&(n=s.call(this,n,r,a)),n}var o=void 0;e?o=!1:(e={start:0},o=!0),(this.match(types.parenL)||this.match(types.name))&&(this.state.potentialArrowAt=this.state.start);var p=this.parseMaybeConditional(t,e,i);if(s&&(p=s.call(this,p,r,a)),this.state.type.isAssign){var h=this.startNodeAt(r,a);if(h.operator=this.state.value,h.left=this.match(types.eq)?this.toAssignable(p,void 0,"assignment expression"):p,e.start=0,this.checkLVal(p,void 0,void 0,"assignment expression"),p.extra&&p.extra.parenthesized){var c=void 0;"ObjectPattern"===p.type?c="`({a}) = 0` use `({a} = 0)`":"ArrayPattern"===p.type&&(c="`([a]) = 0` use `([a] = 0)`"),c&&this.raise(p.start,"You're trying to assign to a parenthesized expression, eg. instead of "+c)}return this.next(),h.right=this.parseMaybeAssign(t),this.finishNode(h,"AssignmentExpression")}return o&&e.start&&this.unexpected(e.start),p},pp$3.parseMaybeConditional=function(t,e,s){var i=this.state.start,r=this.state.startLoc,a=this.parseExprOps(t,e);return e&&e.start?a:this.parseConditional(a,t,i,r,s)},pp$3.parseConditional=function(t,e,s,i){if(this.eat(types.question)){var r=this.startNodeAt(s,i);return r.test=t,r.consequent=this.parseMaybeAssign(),this.expect(types.colon),r.alternate=this.parseMaybeAssign(e),this.finishNode(r,"ConditionalExpression")}return t},pp$3.parseExprOps=function(t,e){var s=this.state.start,i=this.state.startLoc,r=this.parseMaybeUnary(e);return e&&e.start?r:this.parseExprOp(r,s,i,-1,t)},pp$3.parseExprOp=function(t,e,s,i,r){var a=this.state.type.binop;if(!(null==a||r&&this.match(types._in))&&a>i){var n=this.startNodeAt(e,s);n.left=t,n.operator=this.state.value,"**"!==n.operator||"UnaryExpression"!==t.type||!t.extra||t.extra.parenthesizedArgument||t.extra.parenthesized||this.raise(t.argument.start,"Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");var o=this.state.type;this.next();var p=this.state.start,h=this.state.startLoc;return n.right=this.parseExprOp(this.parseMaybeUnary(),p,h,o.rightAssociative?a-1:a,r),this.finishNode(n,o===types.logicalOR||o===types.logicalAND?"LogicalExpression":"BinaryExpression"),this.parseExprOp(n,e,s,i,r)}return t},pp$3.parseMaybeUnary=function(t){if(this.state.type.prefix){var e=this.startNode(),s=this.match(types.incDec);e.operator=this.state.value,e.prefix=!0,this.next();var i=this.state.type;return e.argument=this.parseMaybeUnary(),this.addExtra(e,"parenthesizedArgument",!(i!==types.parenL||e.argument.extra&&e.argument.extra.parenthesized)),t&&t.start&&this.unexpected(t.start),s?this.checkLVal(e.argument,void 0,void 0,"prefix operation"):this.state.strict&&"delete"===e.operator&&"Identifier"===e.argument.type&&this.raise(e.start,"Deleting local variable in strict mode"),this.finishNode(e,s?"UpdateExpression":"UnaryExpression")}var r=this.state.start,a=this.state.startLoc,n=this.parseExprSubscripts(t);if(t&&t.start)return n;for(;this.state.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(r,a);o.operator=this.state.value,o.prefix=!1,o.argument=n,this.checkLVal(n,void 0,void 0,"postfix operation"),this.next(),n=this.finishNode(o,"UpdateExpression")}return n},pp$3.parseExprSubscripts=function(t){var e=this.state.start,s=this.state.startLoc,i=this.state.potentialArrowAt,r=this.parseExprAtom(t);return"ArrowFunctionExpression"===r.type&&r.start===i?r:t&&t.start?r:this.parseSubscripts(r,e,s)},pp$3.parseSubscripts=function(t,e,s,i){for(;;){if(!i&&this.eat(types.doubleColon)){var r=this.startNodeAt(e,s);return r.object=t,r.callee=this.parseNoCallExpr(),this.parseSubscripts(this.finishNode(r,"BindExpression"),e,s,i)}if(this.eat(types.dot)){var a=this.startNodeAt(e,s);a.object=t,a.property=this.parseIdentifier(!0),a.computed=!1,t=this.finishNode(a,"MemberExpression")}else if(this.eat(types.bracketL)){var n=this.startNodeAt(e,s);n.object=t,n.property=this.parseExpression(),n.computed=!0,this.expect(types.bracketR),t=this.finishNode(n,"MemberExpression")}else if(!i&&this.match(types.parenL)){var o=this.state.potentialArrowAt===t.start&&"Identifier"===t.type&&"async"===t.name&&!this.canInsertSemicolon();this.next();var p=this.startNodeAt(e,s);if(p.callee=t,p.arguments=this.parseCallExpressionArguments(types.parenR,o),"Import"===p.callee.type&&1!==p.arguments.length&&this.raise(p.start,"import() requires exactly one argument"),t=this.finishNode(p,"CallExpression"),o&&this.shouldParseAsyncArrow())return this.parseAsyncArrowFromCallExpression(this.startNodeAt(e,s),p);this.toReferencedList(p.arguments)}else{if(!this.match(types.backQuote))return t;var h=this.startNodeAt(e,s);h.tag=t,h.quasi=this.parseTemplate(),t=this.finishNode(h,"TaggedTemplateExpression")}}},pp$3.parseCallExpressionArguments=function(t,e){for(var s=[],i=void 0,r=!0;!this.eat(t);){if(r)r=!1;else if(this.expect(types.comma),this.eat(t))break;this.match(types.parenL)&&!i&&(i=this.state.start),s.push(this.parseExprListItem(void 0,e?{start:0}:void 0))}return e&&i&&this.shouldParseAsyncArrow()&&this.unexpected(),s},pp$3.shouldParseAsyncArrow=function(){return this.match(types.arrow)},pp$3.parseAsyncArrowFromCallExpression=function(t,e){return this.expect(types.arrow),this.parseArrowExpression(t,e.arguments,!0)},pp$3.parseNoCallExpr=function(){var t=this.state.start,e=this.state.startLoc;return this.parseSubscripts(this.parseExprAtom(),t,e,!0)},pp$3.parseExprAtom=function(t){var e=this.state.potentialArrowAt===this.state.start,s=void 0;switch(this.state.type){case types._super:return this.state.inMethod||this.options.allowSuperOutsideMethod||this.raise(this.state.start,"'super' outside of function or class"),
	s=this.startNode(),this.next(),this.match(types.parenL)||this.match(types.bracketL)||this.match(types.dot)||this.unexpected(),this.match(types.parenL)&&"constructor"!==this.state.inMethod&&!this.options.allowSuperOutsideMethod&&this.raise(s.start,"super() outside of class constructor"),this.finishNode(s,"Super");case types._import:return this.hasPlugin("dynamicImport")||this.unexpected(),s=this.startNode(),this.next(),this.match(types.parenL)||this.unexpected(null,types.parenL),this.finishNode(s,"Import");case types._this:return s=this.startNode(),this.next(),this.finishNode(s,"ThisExpression");case types._yield:this.state.inGenerator&&this.unexpected();case types.name:s=this.startNode();var i="await"===this.state.value&&this.state.inAsync,r=this.shouldAllowYieldIdentifier(),a=this.parseIdentifier(i||r);if("await"===a.name){if(this.state.inAsync||this.inModule)return this.parseAwait(s)}else{if("async"===a.name&&this.match(types._function)&&!this.canInsertSemicolon())return this.next(),this.parseFunction(s,!1,!1,!0);if(e&&"async"===a.name&&this.match(types.name)){var n=[this.parseIdentifier()];return this.expect(types.arrow),this.parseArrowExpression(s,n,!0)}}return e&&!this.canInsertSemicolon()&&this.eat(types.arrow)?this.parseArrowExpression(s,[a]):a;case types._do:if(this.hasPlugin("doExpressions")){var o=this.startNode();this.next();var p=this.state.inFunction,h=this.state.labels;return this.state.labels=[],this.state.inFunction=!1,o.body=this.parseBlock(!1,!0),this.state.inFunction=p,this.state.labels=h,this.finishNode(o,"DoExpression")}case types.regexp:var c=this.state.value;return s=this.parseLiteral(c.value,"RegExpLiteral"),s.pattern=c.pattern,s.flags=c.flags,s;case types.num:return this.parseLiteral(this.state.value,"NumericLiteral");case types.string:return this.parseLiteral(this.state.value,"StringLiteral");case types._null:return s=this.startNode(),this.next(),this.finishNode(s,"NullLiteral");case types._true:case types._false:return s=this.startNode(),s.value=this.match(types._true),this.next(),this.finishNode(s,"BooleanLiteral");case types.parenL:return this.parseParenAndDistinguishExpression(null,null,e);case types.bracketL:return s=this.startNode(),this.next(),s.elements=this.parseExprList(types.bracketR,!0,t),this.toReferencedList(s.elements),this.finishNode(s,"ArrayExpression");case types.braceL:return this.parseObj(!1,t);case types._function:return this.parseFunctionExpression();case types.at:this.parseDecorators();case types._class:return s=this.startNode(),this.takeDecorators(s),this.parseClass(s,!1);case types._new:return this.parseNew();case types.backQuote:return this.parseTemplate();case types.doubleColon:s=this.startNode(),this.next(),s.object=null;var l=s.callee=this.parseNoCallExpr();if("MemberExpression"===l.type)return this.finishNode(s,"BindExpression");this.raise(l.start,"Binding should be performed on object property.");default:this.unexpected()}},pp$3.parseFunctionExpression=function(){var t=this.startNode(),e=this.parseIdentifier(!0);return this.state.inGenerator&&this.eat(types.dot)&&this.hasPlugin("functionSent")?this.parseMetaProperty(t,e,"sent"):this.parseFunction(t,!1)},pp$3.parseMetaProperty=function(t,e,s){return t.meta=e,t.property=this.parseIdentifier(!0),t.property.name!==s&&this.raise(t.property.start,"The only valid meta property for new is "+e.name+"."+s),this.finishNode(t,"MetaProperty")},pp$3.parseLiteral=function(t,e){var s=this.startNode();return this.addExtra(s,"rawValue",t),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),s.value=t,this.next(),this.finishNode(s,e)},pp$3.parseParenExpression=function(){this.expect(types.parenL);var t=this.parseExpression();return this.expect(types.parenR),t},pp$3.parseParenAndDistinguishExpression=function(t,e,s){t=t||this.state.start,e=e||this.state.startLoc;var i=void 0;this.expect(types.parenL);for(var r=this.state.start,a=this.state.startLoc,n=[],o={start:0},p={start:0},h=!0,c=void 0,l=void 0;!this.match(types.parenR);){if(h)h=!1;else if(this.expect(types.comma,p.start||null),this.match(types.parenR)){l=this.state.start;break}if(this.match(types.ellipsis)){var u=this.state.start,d=this.state.startLoc;c=this.state.start,n.push(this.parseParenItem(this.parseRest(),d,u));break}n.push(this.parseMaybeAssign(!1,o,this.parseParenItem,p))}var f=this.state.start,y=this.state.startLoc;this.expect(types.parenR);var m=this.startNodeAt(t,e);if(s&&this.shouldParseArrow()&&(m=this.parseArrow(m))){for(var x=n,v=Array.isArray(x),b=0,x=v?x:x[Symbol.iterator]();;){var T;if(v){if(b>=x.length)break;T=x[b++]}else{if(b=x.next(),b.done)break;T=b.value}var w=T;w.extra&&w.extra.parenthesized&&this.unexpected(w.extra.parenStart)}return this.parseArrowExpression(m,n)}return n.length||this.unexpected(this.state.lastTokStart),l&&this.unexpected(l),c&&this.unexpected(c),o.start&&this.unexpected(o.start),p.start&&this.unexpected(p.start),n.length>1?(i=this.startNodeAt(r,a),i.expressions=n,this.toReferencedList(i.expressions),this.finishNodeAt(i,"SequenceExpression",f,y)):i=n[0],this.addExtra(i,"parenthesized",!0),this.addExtra(i,"parenStart",t),i},pp$3.shouldParseArrow=function(){return!this.canInsertSemicolon()},pp$3.parseArrow=function(t){if(this.eat(types.arrow))return t},pp$3.parseParenItem=function(t){return t},pp$3.parseNew=function(){var t=this.startNode(),e=this.parseIdentifier(!0);return this.eat(types.dot)?this.parseMetaProperty(t,e,"target"):(t.callee=this.parseNoCallExpr(),this.eat(types.parenL)?(t.arguments=this.parseExprList(types.parenR),this.toReferencedList(t.arguments)):t.arguments=[],this.finishNode(t,"NewExpression"))},pp$3.parseTemplateElement=function(){var t=this.startNode();return t.value={raw:this.input.slice(this.state.start,this.state.end).replace(/\r\n?/g,"\n"),cooked:this.state.value},this.next(),t.tail=this.match(types.backQuote),this.finishNode(t,"TemplateElement")},pp$3.parseTemplate=function(){var t=this.startNode();this.next(),t.expressions=[];var e=this.parseTemplateElement();for(t.quasis=[e];!e.tail;)this.expect(types.dollarBraceL),t.expressions.push(this.parseExpression()),this.expect(types.braceR),t.quasis.push(e=this.parseTemplateElement());return this.next(),this.finishNode(t,"TemplateLiteral")},pp$3.parseObj=function(t,e){var s=[],i=Object.create(null),r=!0,a=this.startNode();a.properties=[],this.next();for(var n=null;!this.eat(types.braceR);){if(r)r=!1;else if(this.expect(types.comma),this.eat(types.braceR))break;for(;this.match(types.at);)s.push(this.parseDecorator());var o=this.startNode(),p=!1,h=!1,c=void 0,l=void 0;if(s.length&&(o.decorators=s,s=[]),this.hasPlugin("objectRestSpread")&&this.match(types.ellipsis)){if(o=this.parseSpread(),o.type=t?"RestProperty":"SpreadProperty",a.properties.push(o),!t)continue;var u=this.state.start;if(null===n){if(this.eat(types.braceR))break;if(this.match(types.comma)&&this.lookahead().type===types.braceR)continue;n=u;continue}this.unexpected(n,"Cannot have multiple rest elements when destructuring")}if(o.method=!1,o.shorthand=!1,(t||e)&&(c=this.state.start,l=this.state.startLoc),t||(p=this.eat(types.star)),!t&&this.isContextual("async")){p&&this.unexpected();var d=this.parseIdentifier();this.match(types.colon)||this.match(types.parenL)||this.match(types.braceR)||this.match(types.eq)||this.match(types.comma)?o.key=d:(h=!0,this.hasPlugin("asyncGenerators")&&(p=this.eat(types.star)),this.parsePropertyName(o))}else this.parsePropertyName(o);this.parseObjPropValue(o,c,l,p,h,t,e),this.checkPropClash(o,i),o.shorthand&&this.addExtra(o,"shorthand",!0),a.properties.push(o)}return null!==n&&this.unexpected(n,"The rest element has to be the last element when destructuring"),s.length&&this.raise(this.state.start,"You have trailing decorators with no property"),this.finishNode(a,t?"ObjectPattern":"ObjectExpression")},pp$3.parseObjPropValue=function(t,e,s,i,r,a,n){if(r||i||this.match(types.parenL))return a&&this.unexpected(),t.kind="method",t.method=!0,this.parseMethod(t,i,r),this.finishNode(t,"ObjectMethod");if(this.eat(types.colon))return t.value=a?this.parseMaybeDefault(this.state.start,this.state.startLoc):this.parseMaybeAssign(!1,n),this.finishNode(t,"ObjectProperty");if(!(a||t.computed||"Identifier"!==t.key.type||"get"!==t.key.name&&"set"!==t.key.name||this.match(types.comma)||this.match(types.braceR))){(i||r)&&this.unexpected(),t.kind=t.key.name,this.parsePropertyName(t),this.parseMethod(t,!1);var o="get"===t.kind?0:1;if(t.params.length!==o){var p=t.start;"get"===t.kind?this.raise(p,"getter should have no params"):this.raise(p,"setter should have exactly one param")}return this.finishNode(t,"ObjectMethod")}return t.computed||"Identifier"!==t.key.type?void this.unexpected():(a?(this.checkReservedWord(t.key.name,t.key.start,!0,!0),t.value=this.parseMaybeDefault(e,s,t.key.__clone())):this.match(types.eq)&&n?(n.start||(n.start=this.state.start),t.value=this.parseMaybeDefault(e,s,t.key.__clone())):t.value=t.key.__clone(),t.shorthand=!0,this.finishNode(t,"ObjectProperty"))},pp$3.parsePropertyName=function(t){if(this.eat(types.bracketL))t.computed=!0,t.key=this.parseMaybeAssign(),this.expect(types.bracketR);else{t.computed=!1;var e=this.state.inPropertyName;this.state.inPropertyName=!0,t.key=this.match(types.num)||this.match(types.string)?this.parseExprAtom():this.parseIdentifier(!0),this.state.inPropertyName=e}return t.key},pp$3.initFunction=function(t,e){t.id=null,t.generator=!1,t.expression=!1,t.async=!!e},pp$3.parseMethod=function(t,e,s){var i=this.state.inMethod;return this.state.inMethod=t.kind||!0,this.initFunction(t,s),this.expect(types.parenL),t.params=this.parseBindingList(types.parenR),t.generator=e,this.parseFunctionBody(t),this.state.inMethod=i,t},pp$3.parseArrowExpression=function(t,e,s){return this.initFunction(t,s),t.params=this.toAssignableList(e,!0,"arrow function parameters"),this.parseFunctionBody(t,!0),this.finishNode(t,"ArrowFunctionExpression")},pp$3.parseFunctionBody=function(t,e){var s=e&&!this.match(types.braceL),i=this.state.inAsync;if(this.state.inAsync=t.async,s)t.body=this.parseMaybeAssign(),t.expression=!0;else{var r=this.state.inFunction,a=this.state.inGenerator,n=this.state.labels;this.state.inFunction=!0,this.state.inGenerator=t.generator,this.state.labels=[],t.body=this.parseBlock(!0),t.expression=!1,this.state.inFunction=r,this.state.inGenerator=a,this.state.labels=n}this.state.inAsync=i;var o=this.state.strict,p=!1;if(e&&(o=!0),!s&&t.body.directives.length)for(var h=t.body.directives,c=Array.isArray(h),l=0,h=c?h:h[Symbol.iterator]();;){var u;if(c){if(l>=h.length)break;u=h[l++]}else{if(l=h.next(),l.done)break;u=l.value}var d=u;if("use strict"===d.value.value){p=!0,o=!0;break}}if(p&&t.id&&"Identifier"===t.id.type&&"yield"===t.id.name&&this.raise(t.id.start,"Binding yield in strict mode"),o){var f=Object.create(null),y=this.state.strict;p&&(this.state.strict=!0),t.id&&this.checkLVal(t.id,!0,void 0,"function name");for(var m=t.params,x=Array.isArray(m),v=0,m=x?m:m[Symbol.iterator]();;){var b;if(x){if(v>=m.length)break;b=m[v++]}else{if(v=m.next(),v.done)break;b=v.value}var T=b;p&&"Identifier"!==T.type&&this.raise(T.start,"Non-simple parameter in strict mode"),this.checkLVal(T,!0,f,"function parameter list")}this.state.strict=y}},pp$3.parseExprList=function(t,e,s){for(var i=[],r=!0;!this.eat(t);){if(r)r=!1;else if(this.expect(types.comma),this.eat(t))break;i.push(this.parseExprListItem(e,s))}return i},pp$3.parseExprListItem=function(t,e){var s=void 0;return s=t&&this.match(types.comma)?null:this.match(types.ellipsis)?this.parseSpread(e):this.parseMaybeAssign(!1,e,this.parseParenItem)},pp$3.parseIdentifier=function(t){var e=this.startNode();return this.match(types.name)?(t||this.checkReservedWord(this.state.value,this.state.start,!1,!1),e.name=this.state.value):t&&this.state.type.keyword?e.name=this.state.type.keyword:this.unexpected(),!t&&"await"===e.name&&this.state.inAsync&&this.raise(e.start,"invalid use of await inside of an async function"),e.loc.identifierName=e.name,this.next(),this.finishNode(e,"Identifier")},pp$3.checkReservedWord=function(t,e,s,i){(this.isReservedWord(t)||s&&this.isKeyword(t))&&this.raise(e,t+" is a reserved word"),this.state.strict&&(reservedWords.strict(t)||i&&reservedWords.strictBind(t))&&this.raise(e,t+" is a reserved word in strict mode")},pp$3.parseAwait=function(t){return this.state.inAsync||this.unexpected(),this.match(types.star)&&this.raise(t.start,"await* has been removed from the async functions proposal. Use Promise.all() instead."),t.argument=this.parseMaybeUnary(),this.finishNode(t,"AwaitExpression")},pp$3.parseYield=function(){var t=this.startNode();return this.next(),this.match(types.semi)||this.canInsertSemicolon()||!this.match(types.star)&&!this.state.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(types.star),t.argument=this.parseMaybeAssign()),this.finishNode(t,"YieldExpression")};var pp$4=Parser.prototype,commentKeys=["leadingComments","trailingComments","innerComments"],Node=function(){function t(e,s,i){classCallCheck(this,t),this.type="",this.start=e,this.end=0,this.loc=new SourceLocation(s),i&&(this.loc.filename=i)}return t.prototype.__clone=function(){var e=new t;for(var s in this)commentKeys.indexOf(s)<0&&(e[s]=this[s]);return e},t}();pp$4.startNode=function(){return new Node(this.state.start,this.state.startLoc,this.filename)},pp$4.startNodeAt=function(t,e){return new Node(t,e,this.filename)},pp$4.finishNode=function(t,e){return finishNodeAt.call(this,t,e,this.state.lastTokEnd,this.state.lastTokEndLoc)},pp$4.finishNodeAt=function(t,e,s,i){return finishNodeAt.call(this,t,e,s,i)};var pp$5=Parser.prototype;pp$5.raise=function(t,e){var s=getLineInfo(this.input,t);e+=" ("+s.line+":"+s.column+")";var i=new SyntaxError(e);throw i.pos=t,i.loc=s,i};var pp$6=Parser.prototype;pp$6.addComment=function(t){this.filename&&(t.loc.filename=this.filename),this.state.trailingComments.push(t),this.state.leadingComments.push(t)},pp$6.processComment=function(t){if(!("Program"===t.type&&t.body.length>0)){var e=this.state.commentStack,s=void 0,i=void 0,r=void 0,a=void 0;if(this.state.trailingComments.length>0)this.state.trailingComments[0].start>=t.end?(i=this.state.trailingComments,this.state.trailingComments=[]):this.state.trailingComments.length=0;else{var n=last(e);e.length>0&&n.trailingComments&&n.trailingComments[0].start>=t.end&&(i=n.trailingComments,n.trailingComments=null)}for(;e.length>0&&last(e).start>=t.start;)s=e.pop();if(s){if(s.leadingComments)if(s!==t&&last(s.leadingComments).end<=t.start)t.leadingComments=s.leadingComments,s.leadingComments=null;else for(r=s.leadingComments.length-2;r>=0;--r)if(s.leadingComments[r].end<=t.start){t.leadingComments=s.leadingComments.splice(0,r+1);break}}else if(this.state.leadingComments.length>0)if(last(this.state.leadingComments).end<=t.start){if(this.state.commentPreviousNode)for(a=0;a<this.state.leadingComments.length;a++)this.state.leadingComments[a].end<this.state.commentPreviousNode.end&&(this.state.leadingComments.splice(a,1),a--);this.state.leadingComments.length>0&&(t.leadingComments=this.state.leadingComments,this.state.leadingComments=[])}else{for(r=0;r<this.state.leadingComments.length&&!(this.state.leadingComments[r].end>t.start);r++);t.leadingComments=this.state.leadingComments.slice(0,r),0===t.leadingComments.length&&(t.leadingComments=null),i=this.state.leadingComments.slice(r),0===i.length&&(i=null)}this.state.commentPreviousNode=t,i&&(i.length&&i[0].start>=t.start&&last(i).end<=t.end?t.innerComments=i:t.trailingComments=i),e.push(t)}};var pp$7=Parser.prototype;pp$7.flowParseTypeInitialiser=function(t){var e=this.state.inType;this.state.inType=!0,this.expect(t||types.colon);var s=this.flowParseType();return this.state.inType=e,s},pp$7.flowParseDeclareClass=function(t){return this.next(),this.flowParseInterfaceish(t,!0),this.finishNode(t,"DeclareClass")},pp$7.flowParseDeclareFunction=function(t){this.next();var e=t.id=this.parseIdentifier(),s=this.startNode(),i=this.startNode();this.isRelational("<")?s.typeParameters=this.flowParseTypeParameterDeclaration():s.typeParameters=null,this.expect(types.parenL);var r=this.flowParseFunctionTypeParams();return s.params=r.params,s.rest=r.rest,this.expect(types.parenR),s.returnType=this.flowParseTypeInitialiser(),i.typeAnnotation=this.finishNode(s,"FunctionTypeAnnotation"),e.typeAnnotation=this.finishNode(i,"TypeAnnotation"),this.finishNode(e,e.type),this.semicolon(),this.finishNode(t,"DeclareFunction")},pp$7.flowParseDeclare=function(t){return this.match(types._class)?this.flowParseDeclareClass(t):this.match(types._function)?this.flowParseDeclareFunction(t):this.match(types._var)?this.flowParseDeclareVariable(t):this.isContextual("module")?this.lookahead().type===types.dot?this.flowParseDeclareModuleExports(t):this.flowParseDeclareModule(t):this.isContextual("type")?this.flowParseDeclareTypeAlias(t):this.isContextual("interface")?this.flowParseDeclareInterface(t):void this.unexpected()},pp$7.flowParseDeclareVariable=function(t){return this.next(),t.id=this.flowParseTypeAnnotatableIdentifier(),this.semicolon(),this.finishNode(t,"DeclareVariable")},pp$7.flowParseDeclareModule=function(t){this.next(),this.match(types.string)?t.id=this.parseExprAtom():t.id=this.parseIdentifier();var e=t.body=this.startNode(),s=e.body=[];for(this.expect(types.braceL);!this.match(types.braceR);){var i=this.startNode();this.expectContextual("declare","Unexpected token. Only declares are allowed inside declare module"),s.push(this.flowParseDeclare(i))}return this.expect(types.braceR),this.finishNode(e,"BlockStatement"),this.finishNode(t,"DeclareModule")},pp$7.flowParseDeclareModuleExports=function(t){return this.expectContextual("module"),this.expect(types.dot),this.expectContextual("exports"),t.typeAnnotation=this.flowParseTypeAnnotation(),this.semicolon(),this.finishNode(t,"DeclareModuleExports")},pp$7.flowParseDeclareTypeAlias=function(t){return this.next(),this.flowParseTypeAlias(t),this.finishNode(t,"DeclareTypeAlias")},pp$7.flowParseDeclareInterface=function(t){return this.next(),this.flowParseInterfaceish(t),this.finishNode(t,"DeclareInterface")},pp$7.flowParseInterfaceish=function(t,e){if(t.id=this.parseIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.extends=[],t.mixins=[],this.eat(types._extends))do t.extends.push(this.flowParseInterfaceExtends());while(this.eat(types.comma));if(this.isContextual("mixins")){this.next();do t.mixins.push(this.flowParseInterfaceExtends());while(this.eat(types.comma))}t.body=this.flowParseObjectType(e)},pp$7.flowParseInterfaceExtends=function(){var t=this.startNode();return t.id=this.flowParseQualifiedTypeIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterInstantiation():t.typeParameters=null,this.finishNode(t,"InterfaceExtends")},pp$7.flowParseInterface=function(t){return this.flowParseInterfaceish(t,!1),this.finishNode(t,"InterfaceDeclaration")},pp$7.flowParseTypeAlias=function(t){return t.id=this.parseIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.right=this.flowParseTypeInitialiser(types.eq),this.semicolon(),this.finishNode(t,"TypeAlias")},pp$7.flowParseTypeParameter=function(){var t=this.startNode(),e=this.flowParseVariance(),s=this.flowParseTypeAnnotatableIdentifier();return t.name=s.name,t.variance=e,t.bound=s.typeAnnotation,this.match(types.eq)&&(this.eat(types.eq),t.default=this.flowParseType()),this.finishNode(t,"TypeParameter")},pp$7.flowParseTypeParameterDeclaration=function(){var t=this.state.inType,e=this.startNode();e.params=[],this.state.inType=!0,this.isRelational("<")||this.match(types.jsxTagStart)?this.next():this.unexpected();do e.params.push(this.flowParseTypeParameter()),this.isRelational(">")||this.expect(types.comma);while(!this.isRelational(">"));return this.expectRelational(">"),this.state.inType=t,this.finishNode(e,"TypeParameterDeclaration")},pp$7.flowParseTypeParameterInstantiation=function(){var t=this.startNode(),e=this.state.inType;for(t.params=[],this.state.inType=!0,this.expectRelational("<");!this.isRelational(">");)t.params.push(this.flowParseType()),this.isRelational(">")||this.expect(types.comma);return this.expectRelational(">"),this.state.inType=e,this.finishNode(t,"TypeParameterInstantiation")},pp$7.flowParseObjectPropertyKey=function(){return this.match(types.num)||this.match(types.string)?this.parseExprAtom():this.parseIdentifier(!0)},pp$7.flowParseObjectTypeIndexer=function(t,e,s){return t.static=e,this.expect(types.bracketL),this.lookahead().type===types.colon?(t.id=this.flowParseObjectPropertyKey(),t.key=this.flowParseTypeInitialiser()):(t.id=null,t.key=this.flowParseType()),this.expect(types.bracketR),t.value=this.flowParseTypeInitialiser(),t.variance=s,this.flowObjectTypeSemicolon(),this.finishNode(t,"ObjectTypeIndexer")},pp$7.flowParseObjectTypeMethodish=function(t){for(t.params=[],t.rest=null,t.typeParameters=null,this.isRelational("<")&&(t.typeParameters=this.flowParseTypeParameterDeclaration()),this.expect(types.parenL);this.match(types.name);)t.params.push(this.flowParseFunctionTypeParam()),this.match(types.parenR)||this.expect(types.comma);return this.eat(types.ellipsis)&&(t.rest=this.flowParseFunctionTypeParam()),this.expect(types.parenR),t.returnType=this.flowParseTypeInitialiser(),this.finishNode(t,"FunctionTypeAnnotation")},pp$7.flowParseObjectTypeMethod=function(t,e,s,i){var r=this.startNodeAt(t,e);return r.value=this.flowParseObjectTypeMethodish(this.startNodeAt(t,e)),r.static=s,r.key=i,r.optional=!1,this.flowObjectTypeSemicolon(),this.finishNode(r,"ObjectTypeProperty")},pp$7.flowParseObjectTypeCallProperty=function(t,e){var s=this.startNode();return t.static=e,t.value=this.flowParseObjectTypeMethodish(s),this.flowObjectTypeSemicolon(),this.finishNode(t,"ObjectTypeCallProperty")},pp$7.flowParseObjectType=function(t,e){var s=this.state.inType;this.state.inType=!0;var i=this.startNode(),r=void 0,a=void 0,n=!1;i.callProperties=[],i.properties=[],i.indexers=[];var o=void 0,p=void 0;for(e&&this.match(types.braceBarL)?(this.expect(types.braceBarL),o=types.braceBarR,p=!0):(this.expect(types.braceL),o=types.braceR,p=!1),i.exact=p;!this.match(o);){var h=!1,c=this.state.start,l=this.state.startLoc;r=this.startNode(),t&&this.isContextual("static")&&this.lookahead().type!==types.colon&&(this.next(),n=!0);var u=this.state.start,d=this.flowParseVariance();this.match(types.bracketL)?i.indexers.push(this.flowParseObjectTypeIndexer(r,n,d)):this.match(types.parenL)||this.isRelational("<")?(d&&this.unexpected(u),i.callProperties.push(this.flowParseObjectTypeCallProperty(r,t))):(a=this.flowParseObjectPropertyKey(),this.isRelational("<")||this.match(types.parenL)?(d&&this.unexpected(u),i.properties.push(this.flowParseObjectTypeMethod(c,l,n,a))):(this.eat(types.question)&&(h=!0),r.key=a,r.value=this.flowParseTypeInitialiser(),r.optional=h,r.static=n,r.variance=d,this.flowObjectTypeSemicolon(),i.properties.push(this.finishNode(r,"ObjectTypeProperty")))),n=!1}this.expect(o);var f=this.finishNode(i,"ObjectTypeAnnotation");return this.state.inType=s,f},pp$7.flowObjectTypeSemicolon=function(){this.eat(types.semi)||this.eat(types.comma)||this.match(types.braceR)||this.match(types.braceBarR)||this.unexpected()},pp$7.flowParseQualifiedTypeIdentifier=function(t,e,s){t=t||this.state.start,e=e||this.state.startLoc;for(var i=s||this.parseIdentifier();this.eat(types.dot);){var r=this.startNodeAt(t,e);r.qualification=i,r.id=this.parseIdentifier(),i=this.finishNode(r,"QualifiedTypeIdentifier")}return i},pp$7.flowParseGenericType=function(t,e,s){var i=this.startNodeAt(t,e);return i.typeParameters=null,i.id=this.flowParseQualifiedTypeIdentifier(t,e,s),this.isRelational("<")&&(i.typeParameters=this.flowParseTypeParameterInstantiation()),this.finishNode(i,"GenericTypeAnnotation")},pp$7.flowParseTypeofType=function(){var t=this.startNode();return this.expect(types._typeof),t.argument=this.flowParsePrimaryType(),this.finishNode(t,"TypeofTypeAnnotation")},pp$7.flowParseTupleType=function(){var t=this.startNode();for(t.types=[],this.expect(types.bracketL);this.state.pos<this.input.length&&!this.match(types.bracketR)&&(t.types.push(this.flowParseType()),!this.match(types.bracketR));)this.expect(types.comma);return this.expect(types.bracketR),this.finishNode(t,"TupleTypeAnnotation")},pp$7.flowParseFunctionTypeParam=function(){var t=null,e=!1,s=null,i=this.startNode(),r=this.lookahead();return r.type===types.colon||r.type===types.question?(t=this.parseIdentifier(),this.eat(types.question)&&(e=!0),s=this.flowParseTypeInitialiser()):s=this.flowParseType(),i.name=t,i.optional=e,i.typeAnnotation=s,this.finishNode(i,"FunctionTypeParam")},pp$7.reinterpretTypeAsFunctionTypeParam=function(t){var e=this.startNodeAt(t.start,t.loc);return e.name=null,e.optional=!1,e.typeAnnotation=t,this.finishNode(e,"FunctionTypeParam")},pp$7.flowParseFunctionTypeParams=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={params:t,rest:null};this.match(types.name);)e.params.push(this.flowParseFunctionTypeParam()),this.match(types.parenR)||this.expect(types.comma);return this.eat(types.ellipsis)&&(e.rest=this.flowParseFunctionTypeParam()),e},pp$7.flowIdentToTypeAnnotation=function(t,e,s,i){switch(i.name){case"any":return this.finishNode(s,"AnyTypeAnnotation");case"void":return this.finishNode(s,"VoidTypeAnnotation");case"bool":case"boolean":return this.finishNode(s,"BooleanTypeAnnotation");case"mixed":return this.finishNode(s,"MixedTypeAnnotation");case"empty":return this.finishNode(s,"EmptyTypeAnnotation");case"number":return this.finishNode(s,"NumberTypeAnnotation");case"string":return this.finishNode(s,"StringTypeAnnotation");default:return this.flowParseGenericType(t,e,i)}},pp$7.flowParsePrimaryType=function(){var t=this.state.start,e=this.state.startLoc,s=this.startNode(),i=void 0,r=void 0,a=!1,n=this.state.noAnonFunctionType;switch(this.state.type){case types.name:return this.flowIdentToTypeAnnotation(t,e,s,this.parseIdentifier());case types.braceL:return this.flowParseObjectType(!1,!1);case types.braceBarL:return this.flowParseObjectType(!1,!0);case types.bracketL:return this.flowParseTupleType();case types.relational:if("<"===this.state.value)return s.typeParameters=this.flowParseTypeParameterDeclaration(),this.expect(types.parenL),i=this.flowParseFunctionTypeParams(),s.params=i.params,s.rest=i.rest,this.expect(types.parenR),this.expect(types.arrow),s.returnType=this.flowParseType(),this.finishNode(s,"FunctionTypeAnnotation");break;case types.parenL:if(this.next(),!this.match(types.parenR)&&!this.match(types.ellipsis))if(this.match(types.name)){var o=this.lookahead().type;a=o!==types.question&&o!==types.colon}else a=!0;if(a){if(this.state.noAnonFunctionType=!1,r=this.flowParseType(),this.state.noAnonFunctionType=n,this.state.noAnonFunctionType||!(this.match(types.comma)||this.match(types.parenR)&&this.lookahead().type===types.arrow))return this.expect(types.parenR),r;this.eat(types.comma)}return i=r?this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]):this.flowParseFunctionTypeParams(),s.params=i.params,s.rest=i.rest,this.expect(types.parenR),this.expect(types.arrow),s.returnType=this.flowParseType(),s.typeParameters=null,this.finishNode(s,"FunctionTypeAnnotation");case types.string:return s.value=this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"StringLiteralTypeAnnotation");case types._true:case types._false:return s.value=this.match(types._true),this.next(),this.finishNode(s,"BooleanLiteralTypeAnnotation");case types.plusMin:if("-"===this.state.value)return this.next(),this.match(types.num)||this.unexpected(),s.value=-this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"NumericLiteralTypeAnnotation");case types.num:return s.value=this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"NumericLiteralTypeAnnotation");case types._null:return s.value=this.match(types._null),this.next(),this.finishNode(s,"NullLiteralTypeAnnotation");case types._this:return s.value=this.match(types._this),this.next(),this.finishNode(s,"ThisTypeAnnotation");case types.star:return this.next(),this.finishNode(s,"ExistentialTypeParam");default:if("typeof"===this.state.type.keyword)return this.flowParseTypeofType()}this.unexpected()},pp$7.flowParsePostfixType=function(){for(var t=this.state.start,e=this.state.startLoc,s=this.flowParsePrimaryType();!this.canInsertSemicolon()&&this.match(types.bracketL);){var i=this.startNodeAt(t,e);i.elementType=s,this.expect(types.bracketL),this.expect(types.bracketR),s=this.finishNode(i,"ArrayTypeAnnotation")}return s},pp$7.flowParsePrefixType=function(){var t=this.startNode();return this.eat(types.question)?(t.typeAnnotation=this.flowParsePrefixType(),this.finishNode(t,"NullableTypeAnnotation")):this.flowParsePostfixType()},pp$7.flowParseAnonFunctionWithoutParens=function(){var t=this.flowParsePrefixType();if(!this.state.noAnonFunctionType&&this.eat(types.arrow)){var e=this.startNodeAt(t.start,t.loc);return e.params=[this.reinterpretTypeAsFunctionTypeParam(t)],e.rest=null,e.returnType=this.flowParseType(),e.typeParameters=null,this.finishNode(e,"FunctionTypeAnnotation")}return t},pp$7.flowParseIntersectionType=function(){var t=this.startNode();this.eat(types.bitwiseAND);var e=this.flowParseAnonFunctionWithoutParens();for(t.types=[e];this.eat(types.bitwiseAND);)t.types.push(this.flowParseAnonFunctionWithoutParens());return 1===t.types.length?e:this.finishNode(t,"IntersectionTypeAnnotation")},pp$7.flowParseUnionType=function(){var t=this.startNode();this.eat(types.bitwiseOR);var e=this.flowParseIntersectionType();for(t.types=[e];this.eat(types.bitwiseOR);)t.types.push(this.flowParseIntersectionType());return 1===t.types.length?e:this.finishNode(t,"UnionTypeAnnotation")},pp$7.flowParseType=function(){var t=this.state.inType;this.state.inType=!0;var e=this.flowParseUnionType();return this.state.inType=t,e},pp$7.flowParseTypeAnnotation=function(){var t=this.startNode();return t.typeAnnotation=this.flowParseTypeInitialiser(),this.finishNode(t,"TypeAnnotation")},pp$7.flowParseTypeAnnotatableIdentifier=function(){var t=this.parseIdentifier();return this.match(types.colon)&&(t.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(t,t.type)),t},pp$7.typeCastToParameter=function(t){return t.expression.typeAnnotation=t.typeAnnotation,this.finishNodeAt(t.expression,t.expression.type,t.typeAnnotation.end,t.typeAnnotation.loc.end)},pp$7.flowParseVariance=function(){var t=null;return this.match(types.plusMin)&&("+"===this.state.value?t="plus":"-"===this.state.value&&(t="minus"),this.next()),t};var flowPlugin=function(t){t.extend("parseFunctionBody",function(t){return function(e,s){return this.match(types.colon)&&!s&&(e.returnType=this.flowParseTypeAnnotation()),t.call(this,e,s)}}),t.extend("parseStatement",function(t){return function(e,s){if(this.state.strict&&this.match(types.name)&&"interface"===this.state.value){var i=this.startNode();return this.next(),this.flowParseInterface(i)}return t.call(this,e,s)}}),t.extend("parseExpressionStatement",function(t){return function(e,s){if("Identifier"===s.type)if("declare"===s.name){if(this.match(types._class)||this.match(types.name)||this.match(types._function)||this.match(types._var))return this.flowParseDeclare(e)}else if(this.match(types.name)){if("interface"===s.name)return this.flowParseInterface(e);if("type"===s.name)return this.flowParseTypeAlias(e)}return t.call(this,e,s)}}),t.extend("shouldParseExportDeclaration",function(t){return function(){return this.isContextual("type")||this.isContextual("interface")||t.call(this)}}),t.extend("parseConditional",function(t){
	return function(e,s,i,r,a){if(a&&this.match(types.question)){var n=this.state.clone();try{return t.call(this,e,s,i,r)}catch(t){if(t instanceof SyntaxError)return this.state=n,a.start=t.pos||this.state.start,e;throw t}}return t.call(this,e,s,i,r)}}),t.extend("parseParenItem",function(t){return function(e,s,i){if(e=t.call(this,e,s,i),this.eat(types.question)&&(e.optional=!0),this.match(types.colon)){var r=this.startNodeAt(s,i);return r.expression=e,r.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(r,"TypeCastExpression")}return e}}),t.extend("parseExport",function(t){return function(e){return e=t.call(this,e),"ExportNamedDeclaration"===e.type&&(e.exportKind=e.exportKind||"value"),e}}),t.extend("parseExportDeclaration",function(t){return function(e){if(this.isContextual("type")){e.exportKind="type";var s=this.startNode();return this.next(),this.match(types.braceL)?(e.specifiers=this.parseExportSpecifiers(),this.parseExportFrom(e),null):this.flowParseTypeAlias(s)}if(this.isContextual("interface")){e.exportKind="type";var i=this.startNode();return this.next(),this.flowParseInterface(i)}return t.call(this,e)}}),t.extend("parseClassId",function(t){return function(e){t.apply(this,arguments),this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration())}}),t.extend("isKeyword",function(t){return function(e){return(!this.state.inType||"void"!==e)&&t.call(this,e)}}),t.extend("readToken",function(t){return function(e){return!this.state.inType||62!==e&&60!==e?t.call(this,e):this.finishOp(types.relational,1)}}),t.extend("jsx_readToken",function(t){return function(){if(!this.state.inType)return t.call(this)}}),t.extend("toAssignable",function(t){return function(e,s,i){return"TypeCastExpression"===e.type?t.call(this,this.typeCastToParameter(e),s,i):t.call(this,e,s,i)}}),t.extend("toAssignableList",function(t){return function(e,s,i){for(var r=0;r<e.length;r++){var a=e[r];a&&"TypeCastExpression"===a.type&&(e[r]=this.typeCastToParameter(a))}return t.call(this,e,s,i)}}),t.extend("toReferencedList",function(){return function(t){for(var e=0;e<t.length;e++){var s=t[e];s&&s._exprListItem&&"TypeCastExpression"===s.type&&this.raise(s.start,"Unexpected type cast")}return t}}),t.extend("parseExprListItem",function(t){return function(e,s){var i=this.startNode(),r=t.call(this,e,s);return this.match(types.colon)?(i._exprListItem=!0,i.expression=r,i.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(i,"TypeCastExpression")):r}}),t.extend("checkLVal",function(t){return function(e){if("TypeCastExpression"!==e.type)return t.apply(this,arguments)}}),t.extend("parseClassProperty",function(t){return function(e){return delete e.variancePos,this.match(types.colon)&&(e.typeAnnotation=this.flowParseTypeAnnotation()),t.call(this,e)}}),t.extend("isClassProperty",function(t){return function(){return this.match(types.colon)||t.call(this)}}),t.extend("parseClassMethod",function(){return function(t,e,s,i){e.variance&&this.unexpected(e.variancePos),delete e.variance,delete e.variancePos,this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration()),this.parseMethod(e,s,i),t.body.push(this.finishNode(e,"ClassMethod"))}}),t.extend("parseClassSuper",function(t){return function(e,s){if(t.call(this,e,s),e.superClass&&this.isRelational("<")&&(e.superTypeParameters=this.flowParseTypeParameterInstantiation()),this.isContextual("implements")){this.next();var i=e.implements=[];do{var r=this.startNode();r.id=this.parseIdentifier(),this.isRelational("<")?r.typeParameters=this.flowParseTypeParameterInstantiation():r.typeParameters=null,i.push(this.finishNode(r,"ClassImplements"))}while(this.eat(types.comma))}}}),t.extend("parsePropertyName",function(t){return function(e){var s=this.state.start,i=this.flowParseVariance(),r=t.call(this,e);return e.variance=i,e.variancePos=s,r}}),t.extend("parseObjPropValue",function(t){return function(e){e.variance&&this.unexpected(e.variancePos),delete e.variance,delete e.variancePos;var s=void 0;this.isRelational("<")&&(s=this.flowParseTypeParameterDeclaration(),this.match(types.parenL)||this.unexpected()),t.apply(this,arguments),s&&((e.value||e).typeParameters=s)}}),t.extend("parseAssignableListItemTypes",function(){return function(t){return this.eat(types.question)&&(t.optional=!0),this.match(types.colon)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),this.finishNode(t,t.type),t}}),t.extend("parseMaybeDefault",function(t){return function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];var r=t.apply(this,s);return"AssignmentPattern"===r.type&&r.typeAnnotation&&r.right.start<r.typeAnnotation.start&&this.raise(r.typeAnnotation.start,"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`"),r}}),t.extend("parseImportSpecifiers",function(t){return function(e){e.importKind="value";var s=null;if(this.match(types._typeof)?s="typeof":this.isContextual("type")&&(s="type"),s){var i=this.lookahead();(i.type===types.name&&"from"!==i.value||i.type===types.braceL||i.type===types.star)&&(this.next(),e.importKind=s)}t.call(this,e)}}),t.extend("parseImportSpecifier",function(){return function(t){var e=this.startNode(),s=this.state.start,i=this.parseIdentifier(!0),r=null;if("type"===i.name?r="type":"typeof"===i.name&&(r="typeof"),this.isContextual("as")){var a=this.parseIdentifier(!0);null===r||this.match(types.name)?(e.imported=i,e.importKind=null,e.local=this.parseIdentifier(!1)):(e.imported=a,e.importKind=r,e.local=a.__clone())}else null!==r&&this.match(types.name)?(e.imported=this.parseIdentifier(!0),e.importKind=r,e.local=this.eatContextual("as")?this.parseIdentifier(!1):e.imported.__clone()):("typeof"===i.name&&this.unexpected(s,"Cannot import a variable named `typeof`"),e.imported=i,e.importKind=null,e.local=e.imported.__clone());this.checkLVal(e.local,!0,void 0,"import specifier"),t.specifiers.push(this.finishNode(e,"ImportSpecifier"))}}),t.extend("parseFunctionParams",function(t){return function(e){this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration()),t.call(this,e)}}),t.extend("parseVarHead",function(t){return function(e){t.call(this,e),this.match(types.colon)&&(e.id.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(e.id,e.id.type))}}),t.extend("parseAsyncArrowFromCallExpression",function(t){return function(e,s){if(this.match(types.colon)){var i=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0,e.returnType=this.flowParseTypeAnnotation(),this.state.noAnonFunctionType=i}return t.call(this,e,s)}}),t.extend("shouldParseAsyncArrow",function(t){return function(){return this.match(types.colon)||t.call(this)}}),t.extend("parseMaybeAssign",function(t){return function(){for(var e=null,s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];if(types.jsxTagStart&&this.match(types.jsxTagStart)){var a=this.state.clone();try{return t.apply(this,i)}catch(t){if(!(t instanceof SyntaxError))throw t;this.state=a,e=t}}if(this.state.context.push(types$1.parenExpression),null!=e||this.isRelational("<")){var n=void 0,o=void 0;try{o=this.flowParseTypeParameterDeclaration(),n=t.apply(this,i),n.typeParameters=o,n.start=o.start,n.loc.start=o.loc.start}catch(t){throw e||t}if("ArrowFunctionExpression"===n.type)return n;if(null!=e)throw e;this.raise(o.start,"Expected an arrow function after this type parameter declaration")}return this.state.context.pop(),t.apply(this,i)}}),t.extend("parseArrow",function(t){return function(e){if(this.match(types.colon)){var s=this.state.clone();try{var i=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0;var r=this.flowParseTypeAnnotation();this.state.noAnonFunctionType=i,this.canInsertSemicolon()&&this.unexpected(),this.match(types.arrow)||this.unexpected(),e.returnType=r}catch(t){if(!(t instanceof SyntaxError))throw t;this.state=s}}return t.call(this,e)}}),t.extend("shouldParseArrow",function(t){return function(){return this.match(types.colon)||t.call(this)}}),t.extend("isClassMutatorStarter",function(t){return function(){return!!this.isRelational("<")||t.call(this)}})},fromCodePoint=String.fromCodePoint;fromCodePoint||!function(){var t=String.fromCharCode,e=Math.floor;fromCodePoint=function(){var s=16384,i=[],r=void 0,a=void 0,n=-1,o=arguments.length;if(!o)return"";for(var p="";++n<o;){var h=Number(arguments[n]);if(!isFinite(h)||h<0||h>1114111||e(h)!=h)throw RangeError("Invalid code point: "+h);h<=65535?i.push(h):(h-=65536,r=(h>>10)+55296,a=h%1024+56320,i.push(r,a)),(n+1==o||i.length>s)&&(p+=t.apply(null,i),i.length=0)}return p}}();var fromCodePoint$1=fromCodePoint,XHTMLEntities={quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"},HEX_NUMBER=/^[\da-fA-F]+$/,DECIMAL_NUMBER=/^\d+$/;types$1.j_oTag=new TokContext("<tag",!1),types$1.j_cTag=new TokContext("</tag",!1),types$1.j_expr=new TokContext("<tag>...</tag>",!0,!0),types.jsxName=new TokenType("jsxName"),types.jsxText=new TokenType("jsxText",{beforeExpr:!0}),types.jsxTagStart=new TokenType("jsxTagStart",{startsExpr:!0}),types.jsxTagEnd=new TokenType("jsxTagEnd"),types.jsxTagStart.updateContext=function(){this.state.context.push(types$1.j_expr),this.state.context.push(types$1.j_oTag),this.state.exprAllowed=!1},types.jsxTagEnd.updateContext=function(t){var e=this.state.context.pop();e===types$1.j_oTag&&t===types.slash||e===types$1.j_cTag?(this.state.context.pop(),this.state.exprAllowed=this.curContext()===types$1.j_expr):this.state.exprAllowed=!0};var pp$8=Parser.prototype;pp$8.jsxReadToken=function(){for(var t="",e=this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated JSX contents");var s=this.input.charCodeAt(this.state.pos);switch(s){case 60:case 123:return this.state.pos===this.state.start?60===s&&this.state.exprAllowed?(++this.state.pos,this.finishToken(types.jsxTagStart)):this.getTokenFromCode(s):(t+=this.input.slice(e,this.state.pos),this.finishToken(types.jsxText,t));case 38:t+=this.input.slice(e,this.state.pos),t+=this.jsxReadEntity(),e=this.state.pos;break;default:isNewLine(s)?(t+=this.input.slice(e,this.state.pos),t+=this.jsxReadNewLine(!0),e=this.state.pos):++this.state.pos}}},pp$8.jsxReadNewLine=function(t){var e=this.input.charCodeAt(this.state.pos),s=void 0;return++this.state.pos,13===e&&10===this.input.charCodeAt(this.state.pos)?(++this.state.pos,s=t?"\n":"\r\n"):s=String.fromCharCode(e),++this.state.curLine,this.state.lineStart=this.state.pos,s},pp$8.jsxReadString=function(t){for(var e="",s=++this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated string constant");var i=this.input.charCodeAt(this.state.pos);if(i===t)break;38===i?(e+=this.input.slice(s,this.state.pos),e+=this.jsxReadEntity(),s=this.state.pos):isNewLine(i)?(e+=this.input.slice(s,this.state.pos),e+=this.jsxReadNewLine(!1),s=this.state.pos):++this.state.pos}return e+=this.input.slice(s,this.state.pos++),this.finishToken(types.string,e)},pp$8.jsxReadEntity=function(){for(var t="",e=0,s=void 0,i=this.input[this.state.pos],r=++this.state.pos;this.state.pos<this.input.length&&e++<10;){if(i=this.input[this.state.pos++],";"===i){"#"===t[0]?"x"===t[1]?(t=t.substr(2),HEX_NUMBER.test(t)&&(s=fromCodePoint$1(parseInt(t,16)))):(t=t.substr(1),DECIMAL_NUMBER.test(t)&&(s=fromCodePoint$1(parseInt(t,10)))):s=XHTMLEntities[t];break}t+=i}return s?s:(this.state.pos=r,"&")},pp$8.jsxReadWord=function(){var t=void 0,e=this.state.pos;do t=this.input.charCodeAt(++this.state.pos);while(isIdentifierChar(t)||45===t);return this.finishToken(types.jsxName,this.input.slice(e,this.state.pos))},pp$8.jsxParseIdentifier=function(){var t=this.startNode();return this.match(types.jsxName)?t.name=this.state.value:this.state.type.keyword?t.name=this.state.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"JSXIdentifier")},pp$8.jsxParseNamespacedName=function(){var t=this.state.start,e=this.state.startLoc,s=this.jsxParseIdentifier();if(!this.eat(types.colon))return s;var i=this.startNodeAt(t,e);return i.namespace=s,i.name=this.jsxParseIdentifier(),this.finishNode(i,"JSXNamespacedName")},pp$8.jsxParseElementName=function(){for(var t=this.state.start,e=this.state.startLoc,s=this.jsxParseNamespacedName();this.eat(types.dot);){var i=this.startNodeAt(t,e);i.object=s,i.property=this.jsxParseIdentifier(),s=this.finishNode(i,"JSXMemberExpression")}return s},pp$8.jsxParseAttributeValue=function(){var t=void 0;switch(this.state.type){case types.braceL:if(t=this.jsxParseExpressionContainer(),"JSXEmptyExpression"!==t.expression.type)return t;this.raise(t.start,"JSX attributes must only be assigned a non-empty expression");case types.jsxTagStart:case types.string:return t=this.parseExprAtom(),t.extra=null,t;default:this.raise(this.state.start,"JSX value should be either an expression or a quoted JSX text")}},pp$8.jsxParseEmptyExpression=function(){var t=this.startNodeAt(this.state.lastTokEnd,this.state.lastTokEndLoc);return this.finishNodeAt(t,"JSXEmptyExpression",this.state.start,this.state.startLoc)},pp$8.jsxParseSpreadChild=function(){var t=this.startNode();return this.expect(types.braceL),this.expect(types.ellipsis),t.expression=this.parseExpression(),this.expect(types.braceR),this.finishNode(t,"JSXSpreadChild")},pp$8.jsxParseExpressionContainer=function(){var t=this.startNode();return this.next(),this.match(types.braceR)?t.expression=this.jsxParseEmptyExpression():t.expression=this.parseExpression(),this.expect(types.braceR),this.finishNode(t,"JSXExpressionContainer")},pp$8.jsxParseAttribute=function(){var t=this.startNode();return this.eat(types.braceL)?(this.expect(types.ellipsis),t.argument=this.parseMaybeAssign(),this.expect(types.braceR),this.finishNode(t,"JSXSpreadAttribute")):(t.name=this.jsxParseNamespacedName(),t.value=this.eat(types.eq)?this.jsxParseAttributeValue():null,this.finishNode(t,"JSXAttribute"))},pp$8.jsxParseOpeningElementAt=function(t,e){var s=this.startNodeAt(t,e);for(s.attributes=[],s.name=this.jsxParseElementName();!this.match(types.slash)&&!this.match(types.jsxTagEnd);)s.attributes.push(this.jsxParseAttribute());return s.selfClosing=this.eat(types.slash),this.expect(types.jsxTagEnd),this.finishNode(s,"JSXOpeningElement")},pp$8.jsxParseClosingElementAt=function(t,e){var s=this.startNodeAt(t,e);return s.name=this.jsxParseElementName(),this.expect(types.jsxTagEnd),this.finishNode(s,"JSXClosingElement")},pp$8.jsxParseElementAt=function(t,e){var s=this.startNodeAt(t,e),i=[],r=this.jsxParseOpeningElementAt(t,e),a=null;if(!r.selfClosing){t:for(;;)switch(this.state.type){case types.jsxTagStart:if(t=this.state.start,e=this.state.startLoc,this.next(),this.eat(types.slash)){a=this.jsxParseClosingElementAt(t,e);break t}i.push(this.jsxParseElementAt(t,e));break;case types.jsxText:i.push(this.parseExprAtom());break;case types.braceL:this.lookahead().type===types.ellipsis?i.push(this.jsxParseSpreadChild()):i.push(this.jsxParseExpressionContainer());break;default:this.unexpected()}getQualifiedJSXName(a.name)!==getQualifiedJSXName(r.name)&&this.raise(a.start,"Expected corresponding JSX closing tag for <"+getQualifiedJSXName(r.name)+">")}return s.openingElement=r,s.closingElement=a,s.children=i,this.match(types.relational)&&"<"===this.state.value&&this.raise(this.state.start,"Adjacent JSX elements must be wrapped in an enclosing tag"),this.finishNode(s,"JSXElement")},pp$8.jsxParseElement=function(){var t=this.state.start,e=this.state.startLoc;return this.next(),this.jsxParseElementAt(t,e)};var jsxPlugin=function(t){t.extend("parseExprAtom",function(t){return function(e){if(this.match(types.jsxText)){var s=this.parseLiteral(this.state.value,"JSXText");return s.extra=null,s}return this.match(types.jsxTagStart)?this.jsxParseElement():t.call(this,e)}}),t.extend("readToken",function(t){return function(e){if(this.state.inPropertyName)return t.call(this,e);var s=this.curContext();if(s===types$1.j_expr)return this.jsxReadToken();if(s===types$1.j_oTag||s===types$1.j_cTag){if(isIdentifierStart(e))return this.jsxReadWord();if(62===e)return++this.state.pos,this.finishToken(types.jsxTagEnd);if((34===e||39===e)&&s===types$1.j_oTag)return this.jsxReadString(e)}return 60===e&&this.state.exprAllowed?(++this.state.pos,this.finishToken(types.jsxTagStart)):t.call(this,e)}}),t.extend("updateContext",function(t){return function(e){if(this.match(types.braceL)){var s=this.curContext();s===types$1.j_oTag?this.state.context.push(types$1.braceExpression):s===types$1.j_expr?this.state.context.push(types$1.templateQuasi):t.call(this,e),this.state.exprAllowed=!0}else{if(!this.match(types.slash)||e!==types.jsxTagStart)return t.call(this,e);this.state.context.length-=2,this.state.context.push(types$1.j_cTag),this.state.exprAllowed=!1}}})};plugins.flow=flowPlugin,plugins.jsx=jsxPlugin,exports.parse=parse,exports.tokTypes=types;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/evaluation.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function evaluateTruthy(){var e=this.evaluate();if(e.confident)return!!e.value}function evaluate(){function e(e){n&&(a=e,n=!1)}function r(r){var a=r.node;if(i.has(a)){var u=i.get(a);return u.resolved?u.value:void e(r)}var s={resolved:!1};i.set(a,s);var o=t(r);return n&&(s.resolved=!0,s.value=o),o}function t(t){if(n){var a=t.node;if(t.isSequenceExpression()){var i=t.get("expressions");return r(i[i.length-1])}if(t.isStringLiteral()||t.isNumericLiteral()||t.isBooleanLiteral())return a.value;if(t.isNullLiteral())return null;if(t.isTemplateLiteral()){for(var u="",s=0,o=t.get("expressions"),f=a.quasis,l=Array.isArray(f),d=0,f=l?f:(0,_getIterator3.default)(f);;){var v;if(l){if(d>=f.length)break;v=f[d++]}else{if(d=f.next(),d.done)break;v=d.value}var p=v;if(!n)break;u+=p.value.cooked;var c=o[s++];c&&(u+=String(r(c)))}if(!n)return;return u}if(t.isConditionalExpression()){var g=r(t.get("test"));if(!n)return;return r(g?t.get("consequent"):t.get("alternate"))}if(t.isExpressionWrapper())return r(t.get("expression"));if(t.isMemberExpression()&&!t.parentPath.isCallExpression({callee:a})){var m=t.get("property"),y=t.get("object");if(y.isLiteral()&&m.isIdentifier()){var _=y.node.value,h="undefined"==typeof _?"undefined":(0,_typeof3.default)(_);if("number"===h||"string"===h)return _[m.node.name]}}if(t.isReferencedIdentifier()){var x=t.scope.getBinding(a.name);if(x&&x.constantViolations.length>0)return e(x.path);if(x&&t.node.start<x.path.node.end)return e(x.path);if(x&&x.hasValue)return x.value;if("undefined"===a.name)return;if("Infinity"===a.name)return 1/0;if("NaN"===a.name)return NaN;var b=t.resolve();return b===t?e(t):r(b)}if(t.isUnaryExpression({prefix:!0})){if("void"===a.operator)return;var I=t.get("argument");if("typeof"===a.operator&&(I.isFunction()||I.isClass()))return"function";var E=r(I);if(!n)return;switch(a.operator){case"!":return!E;case"+":return+E;case"-":return-E;case"~":return~E;case"typeof":return"undefined"==typeof E?"undefined":(0,_typeof3.default)(E)}}if(t.isArrayExpression()){for(var L=[],A=t.get("elements"),D=A,q=Array.isArray(D),S=0,D=q?D:(0,_getIterator3.default)(D);;){var k;if(q){if(S>=D.length)break;k=D[S++]}else{if(S=D.next(),S.done)break;k=S.value}var M=k;if(M=M.evaluate(),!M.confident)return e(M);L.push(M.value)}return L}if(t.isObjectExpression()){for(var N={},C=t.get("properties"),O=C,V=Array.isArray(O),j=0,O=V?O:(0,_getIterator3.default)(O);;){var T;if(V){if(j>=O.length)break;T=O[j++]}else{if(j=O.next(),j.done)break;T=j.value}var w=T;if(w.isObjectMethod()||w.isSpreadProperty())return e(w);var R=w.get("key"),B=R;if(w.node.computed){if(B=B.evaluate(),!B.confident)return e(R);B=B.value}else B=B.isIdentifier()?B.node.name:B.node.value;var H=w.get("value"),P=H.evaluate();if(!P.confident)return e(H);P=P.value,N[B]=P}return N}if(t.isLogicalExpression()){var F=n,U=r(t.get("left")),W=n;n=F;var z=r(t.get("right")),G=n;switch(n=W&&G,a.operator){case"||":if(U&&W)return n=!0,U;if(!n)return;return U||z;case"&&":if((!U&&W||!z&&G)&&(n=!0),!n)return;return U&&z}}if(t.isBinaryExpression()){var J=r(t.get("left"));if(!n)return;var K=r(t.get("right"));if(!n)return;switch(a.operator){case"-":return J-K;case"+":return J+K;case"/":return J/K;case"*":return J*K;case"%":return J%K;case"**":return Math.pow(J,K);case"<":return J<K;case">":return J>K;case"<=":return J<=K;case">=":return J>=K;case"==":return J==K;case"!=":return J!=K;case"===":return J===K;case"!==":return J!==K;case"|":return J|K;case"&":return J&K;case"^":return J^K;case"<<":return J<<K;case">>":return J>>K;case">>>":return J>>>K}}if(t.isCallExpression()){var Q=t.get("callee"),X=void 0,Y=void 0;if(Q.isIdentifier()&&!t.scope.getBinding(Q.node.name,!0)&&VALID_CALLEES.indexOf(Q.node.name)>=0&&(Y=global[a.callee.name]),Q.isMemberExpression()){var Z=Q.get("object"),$=Q.get("property");if(Z.isIdentifier()&&$.isIdentifier()&&VALID_CALLEES.indexOf(Z.node.name)>=0&&INVALID_METHODS.indexOf($.node.name)<0&&(X=global[Z.node.name],Y=X[$.node.name]),Z.isLiteral()&&$.isIdentifier()){var ee=(0,_typeof3.default)(Z.node.value);"string"!==ee&&"number"!==ee||(X=Z.node.value,Y=X[$.node.name])}}if(Y){var re=t.get("arguments").map(r);if(!n)return;return Y.apply(X,re)}}e(t)}}var n=!0,a=void 0,i=new _map2.default,u=r(this);return n||(u=void 0),{confident:n,deopt:a,value:u}}exports.__esModule=!0;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_map=__webpack_require__("./node_modules/babel-runtime/core-js/map.js"),_map2=_interopRequireDefault(_map);exports.evaluateTruthy=evaluateTruthy,exports.evaluate=evaluate;var VALID_CALLEES=["String","Number","Math"],INVALID_METHODS=["random"];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/conversion.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o.default=e,o}function toComputedKey(){var e=this.node,o=void 0;if(this.isMemberExpression())o=e.property;else{if(!this.isProperty()&&!this.isMethod())throw new ReferenceError("todo");o=e.key}return e.computed||t.isIdentifier(o)&&(o=t.stringLiteral(o.name)),o}function ensureBlock(){return t.ensureBlock(this.node)}function arrowFunctionToShadowed(){if(this.isArrowFunctionExpression()){this.ensureBlock();var e=this.node;e.expression=!1,e.type="FunctionExpression",e.shadow=e.shadow||!0}}exports.__esModule=!0,exports.toComputedKey=toComputedKey,exports.ensureBlock=ensureBlock,exports.arrowFunctionToShadowed=arrowFunctionToShadowed;var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/introspection.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function matchesPattern(e,r){function i(e){var t=n[o];return"*"===t||e===t}if(!this.isMemberExpression())return!1;for(var n=e.split("."),s=[this.node],o=0;s.length;){var a=s.shift();if(r&&o===n.length)return!0;if(t.isIdentifier(a)){if(!i(a.name))return!1}else if(t.isLiteral(a)){if(!i(a.value))return!1}else{if(t.isMemberExpression(a)){if(a.computed&&!t.isLiteral(a.property))return!1;s.unshift(a.property),s.unshift(a.object);continue}if(!t.isThisExpression(a))return!1;if(!i("this"))return!1}if(++o>n.length)return!1}return o===n.length}function has(e){var t=this.node&&this.node[e];return t&&Array.isArray(t)?!!t.length:!!t}function isStatic(){return this.scope.isStatic(this.node)}function isnt(e){return!this.has(e)}function equals(e,t){return this.node[e]===t}function isNodeType(e){return t.isType(this.type,e)}function canHaveVariableDeclarationOrExpression(){return("init"===this.key||"left"===this.key)&&this.parentPath.isFor()}function canSwapBetweenExpressionAndStatement(e){return!("body"!==this.key||!this.parentPath.isArrowFunctionExpression())&&(this.isExpression()?t.isBlockStatement(e):!!this.isBlockStatement()&&t.isExpression(e))}function isCompletionRecord(e){var t=this,r=!0;do{var i=t.container;if(t.isFunction()&&!r)return!!e;if(r=!1,Array.isArray(i)&&t.key!==i.length-1)return!1}while((t=t.parentPath)&&!t.isProgram());return!0}function isStatementOrBlock(){return!this.parentPath.isLabeledStatement()&&!t.isBlockStatement(this.container)&&(0,_includes2.default)(t.STATEMENT_OR_BLOCK_KEYS,this.key)}function referencesImport(e,t){if(!this.isReferencedIdentifier())return!1;var r=this.scope.getBinding(this.node.name);if(!r||"module"!==r.kind)return!1;var i=r.path,n=i.parentPath;return!!n.isImportDeclaration()&&(n.node.source.value===e&&(!t||(!(!i.isImportDefaultSpecifier()||"default"!==t)||(!(!i.isImportNamespaceSpecifier()||"*"!==t)||!(!i.isImportSpecifier()||i.node.imported.name!==t)))))}function getSource(){var e=this.node;return e.end?this.hub.file.code.slice(e.start,e.end):""}function willIMaybeExecuteBefore(e){return"after"!==this._guessExecutionStatusRelativeTo(e)}function _guessExecutionStatusRelativeTo(e){var r=e.scope.getFunctionParent(),i=this.scope.getFunctionParent();if(r.node!==i.node){var n=this._guessExecutionStatusRelativeToDifferentFunctions(r);if(n)return n;e=r.path}var s=e.getAncestry();if(s.indexOf(this)>=0)return"after";var o=this.getAncestry(),a=void 0,u=void 0,f=void 0;for(f=0;f<o.length;f++){var l=o[f];if(u=s.indexOf(l),u>=0){a=l;break}}if(!a)return"before";var c=s[u-1],p=o[f-1];if(!c||!p)return"before";if(c.listKey&&c.container===p.container)return c.key>p.key?"before":"after";var d=t.VISITOR_KEYS[c.type].indexOf(c.key),h=t.VISITOR_KEYS[p.type].indexOf(p.key);return d>h?"before":"after"}function _guessExecutionStatusRelativeToDifferentFunctions(e){var t=e.path;if(t.isFunctionDeclaration()){var r=t.scope.getBinding(t.node.id.name);if(!r.references)return"before";for(var i=r.referencePaths,n=i,s=Array.isArray(n),o=0,n=s?n:(0,_getIterator3.default)(n);;){var a;if(s){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var u=a;if("callee"!==u.key||!u.parentPath.isCallExpression())return}for(var f=void 0,l=i,c=Array.isArray(l),p=0,l=c?l:(0,_getIterator3.default)(l);;){var d;if(c){if(p>=l.length)break;d=l[p++]}else{if(p=l.next(),p.done)break;d=p.value}var h=d,v=!!h.find(function(e){return e.node===t.node});if(!v){var x=this._guessExecutionStatusRelativeTo(h);if(f){if(f!==x)return}else f=x}}return f}}function resolve(e,t){return this._resolve(e,t)||this}function _resolve(e,r){var i=this;if(!(r&&r.indexOf(this)>=0))if(r=r||[],r.push(this),this.isVariableDeclarator()){if(this.get("id").isIdentifier())return this.get("init").resolve(e,r)}else if(this.isReferencedIdentifier()){var n=this.scope.getBinding(this.node.name);if(!n)return;if(!n.constant)return;if("module"===n.kind)return;if(n.path!==this){var s=function(){var t=n.path.resolve(e,r);return i.find(function(e){return e.node===t.node})?{v:void 0}:{v:t}}();if("object"===("undefined"==typeof s?"undefined":(0,_typeof3.default)(s)))return s.v}}else{if(this.isTypeCastExpression())return this.get("expression").resolve(e,r);if(e&&this.isMemberExpression()){var o=this.toComputedKey();if(!t.isLiteral(o))return;var a=o.value,u=this.get("object").resolve(e,r);if(u.isObjectExpression())for(var f=u.get("properties"),l=f,c=Array.isArray(l),p=0,l=c?l:(0,_getIterator3.default)(l);;){var d;if(c){if(p>=l.length)break;d=l[p++]}else{if(p=l.next(),p.done)break;d=p.value}var h=d;if(h.isProperty()){var v=h.get("key"),x=h.isnt("computed")&&v.isIdentifier({name:a});if(x=x||v.isLiteral({value:a}))return h.get("value").resolve(e,r)}}else if(u.isArrayExpression()&&!isNaN(+a)){var y=u.get("elements"),g=y[a];if(g)return g.resolve(e,r)}}}}exports.__esModule=!0,exports.is=void 0;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.matchesPattern=matchesPattern,exports.has=has,exports.isStatic=isStatic,exports.isnt=isnt,exports.equals=equals,exports.isNodeType=isNodeType,exports.canHaveVariableDeclarationOrExpression=canHaveVariableDeclarationOrExpression,exports.canSwapBetweenExpressionAndStatement=canSwapBetweenExpressionAndStatement,exports.isCompletionRecord=isCompletionRecord,exports.isStatementOrBlock=isStatementOrBlock,exports.referencesImport=referencesImport,exports.getSource=getSource,exports.willIMaybeExecuteBefore=willIMaybeExecuteBefore,exports._guessExecutionStatusRelativeTo=_guessExecutionStatusRelativeTo,exports._guessExecutionStatusRelativeToDifferentFunctions=_guessExecutionStatusRelativeToDifferentFunctions,exports.resolve=resolve,exports._resolve=_resolve;var _includes=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/includes.js"),_includes2=_interopRequireDefault(_includes),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),is=exports.is=has;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/context.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function call(t){var e=this.opts;return this.debug(function(){return t}),!(!this.node||!this._call(e[t]))||!!this.node&&this._call(e[this.node.type]&&e[this.node.type][t])}function _call(t){if(!t)return!1;for(var e=t,s=Array.isArray(e),i=0,e=s?e:(0,_getIterator3.default)(e);;){var n;if(s){if(i>=e.length)break;n=e[i++]}else{if(i=e.next(),i.done)break;n=i.value}var o=n;if(o){var r=this.node;if(!r)return!0;var h=o.call(this.state,this,this.state);if(h)throw new Error("Unexpected return value from visitor method "+o);if(this.node!==r)return!0;if(this.shouldStop||this.shouldSkip||this.removed)return!0}}return!1}function isBlacklisted(){var t=this.opts.blacklist;return t&&t.indexOf(this.node.type)>-1}function visit(){return!!this.node&&(!this.isBlacklisted()&&((!this.opts.shouldSkip||!this.opts.shouldSkip(this))&&(this.call("enter")||this.shouldSkip?(this.debug(function(){return"Skip..."}),this.shouldStop):(this.debug(function(){return"Recursing into..."}),_index2.default.node(this.node,this.opts,this.scope,this.state,this,this.skipKeys),this.call("exit"),this.shouldStop))))}function skip(){this.shouldSkip=!0}function skipKey(t){this.skipKeys[t]=!0}function stop(){this.shouldStop=!0,this.shouldSkip=!0}function setScope(){if(!this.opts||!this.opts.noScope){var t=this.context&&this.context.scope;if(!t)for(var e=this.parentPath;e&&!t;){if(e.opts&&e.opts.noScope)return;t=e.scope,e=e.parentPath}this.scope=this.getScope(t),this.scope&&this.scope.init()}}function setContext(t){return this.shouldSkip=!1,this.shouldStop=!1,this.removed=!1,this.skipKeys={},t&&(this.context=t,this.state=t.state,this.opts=t.opts),this.setScope(),this}function resync(){this.removed||(this._resyncParent(),this._resyncList(),this._resyncKey())}function _resyncParent(){this.parentPath&&(this.parent=this.parentPath.node)}function _resyncKey(){if(this.container&&this.node!==this.container[this.key]){if(Array.isArray(this.container)){for(var t=0;t<this.container.length;t++)if(this.container[t]===this.node)return this.setKey(t)}else for(var e in this.container)if(this.container[e]===this.node)return this.setKey(e);this.key=null}}function _resyncList(){if(this.parent&&this.inList){var t=this.parent[this.listKey];this.container!==t&&(this.container=t||null)}}function _resyncRemoved(){null!=this.key&&this.container&&this.container[this.key]===this.node||this._markRemoved()}function popContext(){this.contexts.pop(),this.setContext(this.contexts[this.contexts.length-1])}function pushContext(t){this.contexts.push(t),this.setContext(t)}function setup(t,e,s,i){this.inList=!!s,this.listKey=s,this.parentKey=s||i,this.container=e,this.parentPath=t||this.parentPath,this.setKey(i)}function setKey(t){this.key=t,this.node=this.container[this.key],this.type=this.node&&this.node.type}function requeue(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(!t.removed)for(var e=this.contexts,s=e,i=Array.isArray(s),n=0,s=i?s:(0,_getIterator3.default)(s);;){var o;if(i){if(n>=s.length)break;o=s[n++]}else{if(n=s.next(),n.done)break;o=n.value}var r=o;r.maybeQueue(t)}}function _getQueueContexts(){for(var t=this,e=this.contexts;!e.length;)t=t.parentPath,e=t.contexts;return e}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.call=call,exports._call=_call,exports.isBlacklisted=isBlacklisted,exports.visit=visit,exports.skip=skip,exports.skipKey=skipKey,exports.stop=stop,exports.setScope=setScope,exports.setContext=setContext,exports.resync=resync,exports._resyncParent=_resyncParent,exports._resyncKey=_resyncKey,exports._resyncList=_resyncList,exports._resyncRemoved=_resyncRemoved,exports.popContext=popContext,exports.pushContext=pushContext,exports.setup=setup,exports.setKey=setKey,exports.requeue=requeue,exports._getQueueContexts=_getQueueContexts;var _index=__webpack_require__("./node_modules/babel-traverse/lib/index.js"),_index2=_interopRequireDefault(_index);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/removal.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function remove(){return this._assertUnremoved(),this.resync(),this._callRemovalHooks()?void this._markRemoved():(this.shareCommentsWithSiblings(),this._remove(),void this._markRemoved())}function _callRemovalHooks(){for(var e=_removalHooks.hooks,r=Array.isArray(e),o=0,e=r?e:(0,_getIterator3.default)(e);;){var t;if(r){if(o>=e.length)break;t=e[o++]}else{if(o=e.next(),o.done)break;t=o.value}var s=t;if(s(this,this.parentPath))return!0}}function _remove(){Array.isArray(this.container)?(this.container.splice(this.key,1),this.updateSiblingKeys(this.key,-1)):this._replaceWith(null)}function _markRemoved(){this.shouldSkip=!0,this.removed=!0,this.node=null}function _assertUnremoved(){if(this.removed)throw this.buildCodeFrameError("NodePath has been removed so is read-only.")}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.remove=remove,exports._callRemovalHooks=_callRemovalHooks,exports._remove=_remove,exports._markRemoved=_markRemoved,exports._assertUnremoved=_assertUnremoved;var _removalHooks=__webpack_require__("./node_modules/babel-traverse/lib/path/lib/removal-hooks.js");

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/lib/removal-hooks.js":
/***/ function(module, exports) {

	"use strict";exports.__esModule=!0;var hooks=exports.hooks=[function(e,t){var i=!1;if(i=i||"test"===e.key&&(t.isWhile()||t.isSwitchCase()),i=i||"declaration"===e.key&&t.isExportDeclaration(),i=i||"body"===e.key&&t.isLabeledStatement(),i=i||"declarations"===e.listKey&&t.isVariableDeclaration()&&1===t.node.declarations.length,i=i||"expression"===e.key&&t.isExpressionStatement())return t.remove(),!0},function(e,t){if(t.isSequenceExpression()&&1===t.node.expressions.length)return t.replaceWith(t.node.expressions[0]),!0},function(e,t){if(t.isBinary())return"left"===e.key?t.replaceWith(t.node.right):t.replaceWith(t.node.left),!0},function(e,t){if(t.isIfStatement()&&("consequent"===e.key||"alternate"===e.key)||"body"===e.key&&(t.isLoop()||t.isArrowFunctionExpression()))return e.replaceWith({type:"BlockStatement",body:[]}),!0}];

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/modification.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function insertBefore(e){if(this._assertUnremoved(),e=this._verifyNodeList(e),this.parentPath.isExpressionStatement()||this.parentPath.isLabeledStatement())return this.parentPath.insertBefore(e);if(this.isNodeType("Expression")||this.parentPath.isForStatement()&&"init"===this.key)this.node&&e.push(this.node),this.replaceExpressionWithStatements(e);else{if(this._maybePopFromStatements(e),Array.isArray(this.container))return this._containerInsertBefore(e);if(!this.isStatementOrBlock())throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");this.node&&e.push(this.node),this._replaceWith(t.blockStatement(e))}return[this]}function _containerInsert(e,t){this.updateSiblingKeys(e,t.length);for(var r=[],i=0;i<t.length;i++){var n=e+i,s=t[i];if(this.container.splice(n,0,s),this.context){var o=this.context.create(this.parent,this.container,n,this.listKey);this.context.queue&&o.pushContext(this.context),r.push(o)}else r.push(_index2.default.get({parentPath:this.parentPath,parent:this.parent,container:this.container,listKey:this.listKey,key:n}))}for(var a=this._getQueueContexts(),h=r,f=Array.isArray(h),u=0,h=f?h:(0,_getIterator3.default)(h);;){var p;if(f){if(u>=h.length)break;p=h[u++]}else{if(u=h.next(),u.done)break;p=u.value}var d=p;d.setScope(),d.debug(function(){return"Inserted."});for(var c=a,l=Array.isArray(c),_=0,c=l?c:(0,_getIterator3.default)(c);;){var y;if(l){if(_>=c.length)break;y=c[_++]}else{if(_=c.next(),_.done)break;y=_.value}var m=y;m.maybeQueue(d,!0)}}return r}function _containerInsertBefore(e){return this._containerInsert(this.key,e)}function _containerInsertAfter(e){return this._containerInsert(this.key+1,e)}function _maybePopFromStatements(e){var r=e[e.length-1],i=t.isIdentifier(r)||t.isExpressionStatement(r)&&t.isIdentifier(r.expression);i&&!this.isCompletionRecord()&&e.pop()}function insertAfter(e){if(this._assertUnremoved(),e=this._verifyNodeList(e),this.parentPath.isExpressionStatement()||this.parentPath.isLabeledStatement())return this.parentPath.insertAfter(e);if(this.isNodeType("Expression")||this.parentPath.isForStatement()&&"init"===this.key){if(this.node){var r=this.scope.generateDeclaredUidIdentifier();e.unshift(t.expressionStatement(t.assignmentExpression("=",r,this.node))),e.push(t.expressionStatement(r))}this.replaceExpressionWithStatements(e)}else{if(this._maybePopFromStatements(e),Array.isArray(this.container))return this._containerInsertAfter(e);if(!this.isStatementOrBlock())throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");this.node&&e.unshift(this.node),this._replaceWith(t.blockStatement(e))}return[this]}function updateSiblingKeys(e,t){if(this.parent)for(var r=_cache.path.get(this.parent),i=0;i<r.length;i++){var n=r[i];n.key>=e&&(n.key+=t)}}function _verifyNodeList(e){if(!e)return[];e.constructor!==Array&&(e=[e]);for(var t=0;t<e.length;t++){var r=e[t],i=void 0;if(r?"object"!==("undefined"==typeof r?"undefined":(0,_typeof3.default)(r))?i="contains a non-object node":r.type?r instanceof _index2.default&&(i="has a NodePath when it expected a raw object"):i="without a type":i="has falsy node",i){var n=Array.isArray(r)?"array":"undefined"==typeof r?"undefined":(0,_typeof3.default)(r);throw new Error("Node list "+i+" with the index of "+t+" and type of "+n)}}return e}function unshiftContainer(e,t){this._assertUnremoved(),t=this._verifyNodeList(t);var r=_index2.default.get({parentPath:this,parent:this.node,container:this.node[e],listKey:e,key:0});return r.insertBefore(t)}function pushContainer(e,t){this._assertUnremoved(),t=this._verifyNodeList(t);var r=this.node[e],i=_index2.default.get({parentPath:this,parent:this.node,container:r,listKey:e,key:r.length});return i.replaceWithMultiple(t)}function hoist(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.scope,t=new _hoister2.default(this,e);return t.run()}exports.__esModule=!0;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.insertBefore=insertBefore,exports._containerInsert=_containerInsert,exports._containerInsertBefore=_containerInsertBefore,exports._containerInsertAfter=_containerInsertAfter,exports._maybePopFromStatements=_maybePopFromStatements,exports.insertAfter=insertAfter,exports.updateSiblingKeys=updateSiblingKeys,exports._verifyNodeList=_verifyNodeList,exports.unshiftContainer=unshiftContainer,exports.pushContainer=pushContainer,exports.hoist=hoist;var _cache=__webpack_require__("./node_modules/babel-traverse/lib/cache.js"),_hoister=__webpack_require__("./node_modules/babel-traverse/lib/path/lib/hoister.js"),_hoister2=_interopRequireDefault(_hoister),_index=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_index2=_interopRequireDefault(_index),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/lib/hoister.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}exports.__esModule=!0;var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),referenceVisitor={ReferencedIdentifier:function(t,e){if(!t.isJSXIdentifier()||!_babelTypes.react.isCompatTag(t.node.name)){var r=t.scope.getBinding(t.node.name);if(r&&r===e.scope.getBinding(t.node.name))if(r.constant)e.bindings[t.node.name]=r;else for(var i=r.constantViolations,a=Array.isArray(i),n=0,i=a?i:(0,_getIterator3.default)(i);;){var o;if(a){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;e.breakOnScopePaths=e.breakOnScopePaths.concat(s.getAncestry())}}}},PathHoister=function(){function e(t,r){(0,_classCallCheck3.default)(this,e),this.breakOnScopePaths=[],this.bindings={},this.scopes=[],this.scope=r,this.path=t}return e.prototype.isCompatibleScope=function(t){for(var e in this.bindings){var r=this.bindings[e];if(!t.bindingIdentifierEquals(e,r.identifier))return!1}return!0},e.prototype.getCompatibleScopes=function(){var t=this.path.scope;do{if(!this.isCompatibleScope(t))break;if(this.scopes.push(t),this.breakOnScopePaths.indexOf(t.path)>=0)break}while(t=t.parent)},e.prototype.getAttachmentPath=function(){var t=this._getAttachmentPath();if(t){var e=t.scope;if(e.path===t&&(e=t.scope.parent),e.path.isProgram()||e.path.isFunction())for(var r in this.bindings)if(e.hasOwnBinding(r)){var i=this.bindings[r];if("param"!==i.kind&&this.getAttachmentParentForPath(i.path).key>t.key)return}return t}},e.prototype._getAttachmentPath=function(){var t=this.scopes,e=t.pop();if(e){if(e.path.isFunction()){if(this.hasOwnParamBindings(e)){if(this.scope===e)return;return e.path.get("body").get("body")[0]}return this.getNextScopeAttachmentParent()}return e.path.isProgram()?this.getNextScopeAttachmentParent():void 0}},e.prototype.getNextScopeAttachmentParent=function(){var t=this.scopes.pop();if(t)return this.getAttachmentParentForPath(t.path)},e.prototype.getAttachmentParentForPath=function(t){do if(!t.parentPath||Array.isArray(t.container)&&t.isStatement()||t.isVariableDeclarator()&&null!==t.parentPath.node&&t.parentPath.node.declarations.length>1)return t;while(t=t.parentPath)},e.prototype.hasOwnParamBindings=function(t){for(var e in this.bindings)if(t.hasOwnBinding(e)){var r=this.bindings[e];if("param"===r.kind)return!0}return!1},e.prototype.run=function(){var e=this.path.node;if(!e._hoisted){e._hoisted=!0,this.path.traverse(referenceVisitor,this),this.getCompatibleScopes();var r=this.getAttachmentPath();if(r&&r.getFunctionParent()!==this.path.getFunctionParent()){var i=r.scope.generateUidIdentifier("ref"),a=t.variableDeclarator(i,this.path.node);r.insertBefore([r.isVariableDeclarator()?a:t.variableDeclaration("var",[a])]);var n=this.path.parentPath;n.isJSXElement()&&this.path.container===n.node.children&&(i=t.JSXExpressionContainer(i)),this.path.replaceWith(i)}}},e}();exports.default=PathHoister,module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/family.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getStatementParent(){var e=this;do{if(!e.parentPath||Array.isArray(e.container)&&e.isStatement())break;e=e.parentPath}while(e);if(e&&(e.isProgram()||e.isFile()))throw new Error("File/Program node, we can't possibly find a statement parent to this");return e}function getOpposite(){return"left"===this.key?this.getSibling("right"):"right"===this.key?this.getSibling("left"):void 0}function getCompletionRecords(){var e=[],t=function(t){t&&(e=e.concat(t.getCompletionRecords()))};if(this.isIfStatement())t(this.get("consequent")),t(this.get("alternate"));else if(this.isDoExpression()||this.isFor()||this.isWhile())t(this.get("body"));else if(this.isProgram()||this.isBlockStatement())t(this.get("body").pop());else{if(this.isFunction())return this.get("body").getCompletionRecords();this.isTryStatement()?(t(this.get("block")),t(this.get("handler")),t(this.get("finalizer"))):e.push(this)}return e}function getSibling(e){return _index2.default.get({parentPath:this.parentPath,parent:this.parent,container:this.container,listKey:this.listKey,key:e})}function get(e,t){t===!0&&(t=this.context);var i=e.split(".");return 1===i.length?this._getKey(e,t):this._getPattern(i,t)}function _getKey(e,t){var i=this,n=this.node,r=n[e];return Array.isArray(r)?r.map(function(s,a){return _index2.default.get({listKey:e,parentPath:i,parent:n,container:r,key:a}).setContext(t)}):_index2.default.get({parentPath:this,parent:n,container:n,key:e}).setContext(t)}function _getPattern(e,t){for(var i=this,n=e,r=Array.isArray(n),s=0,n=r?n:(0,_getIterator3.default)(n);;){var a;if(r){if(s>=n.length)break;a=n[s++]}else{if(s=n.next(),s.done)break;a=s.value}var o=a;i="."===o?i.parentPath:Array.isArray(i)?i[o]:i.get(o,t)}return i}function getBindingIdentifiers(e){return t.getBindingIdentifiers(this.node,e)}function getOuterBindingIdentifiers(e){return t.getOuterBindingIdentifiers(this.node,e)}function getBindingIdentifierPaths(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,r=[].concat(n),s=(0,_create2.default)(null);r.length;){var a=r.shift();if(a&&a.node){var o=t.getBindingIdentifiers.keys[a.node.type];if(a.isIdentifier())if(e){var g=s[a.node.name]=s[a.node.name]||[];g.push(a)}else s[a.node.name]=a;else if(a.isExportDeclaration()){var d=a.get("declaration");d.isDeclaration()&&r.push(d)}else{if(i){if(a.isFunctionDeclaration()){r.push(a.get("id"));continue}if(a.isFunctionExpression())continue}if(o)for(var u=0;u<o.length;u++){var f=o[u],l=a.get(f);(Array.isArray(l)||l.node)&&(r=r.concat(l))}}}}return s}function getOuterBindingIdentifierPaths(e){return this.getBindingIdentifierPaths(e,!0)}exports.__esModule=!0;var _create=__webpack_require__("./node_modules/babel-runtime/core-js/object/create.js"),_create2=_interopRequireDefault(_create),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.getStatementParent=getStatementParent,exports.getOpposite=getOpposite,exports.getCompletionRecords=getCompletionRecords,exports.getSibling=getSibling,exports.get=get,exports._getKey=_getKey,exports._getPattern=_getPattern,exports.getBindingIdentifiers=getBindingIdentifiers,exports.getOuterBindingIdentifiers=getOuterBindingIdentifiers,exports.getBindingIdentifierPaths=getBindingIdentifierPaths,exports.getOuterBindingIdentifierPaths=getOuterBindingIdentifierPaths;var _index=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_index2=_interopRequireDefault(_index),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/comments.js":
/***/ function(module, exports) {

	"use strict";function shareCommentsWithSiblings(){if("string"!=typeof this.key){var t=this.node;if(t){var e=t.trailingComments,n=t.leadingComments;if(e||n){var i=this.getSibling(this.key-1),m=this.getSibling(this.key+1);i.node||(i=m),m.node||(m=i),i.addComments("trailing",n),m.addComments("leading",e)}}}}function addComment(t,e,n){this.addComments(t,[{type:n?"CommentLine":"CommentBlock",value:e}])}function addComments(t,e){if(e){var n=this.node;if(n){var i=t+"Comments";n[i]?n[i]=n[i].concat(e):n[i]=e}}}exports.__esModule=!0,exports.shareCommentsWithSiblings=shareCommentsWithSiblings,exports.addComment=addComment,exports.addComments=addComments;

/***/ },

/***/ "./node_modules/babel-traverse/lib/hub.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),Hub=function e(l,s){(0,_classCallCheck3.default)(this,e),this.file=l,this.options=s};exports.default=Hub,module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-traverse/lib/context.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_path2=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_path3=_interopRequireDefault(_path2),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),testing="test"===("production"),TraversalContext=function(){function e(t,r,i,u){(0,_classCallCheck3.default)(this,e),this.queue=null,this.parentPath=u,this.scope=t,this.state=i,this.opts=r}return e.prototype.shouldVisit=function(e){var r=this.opts;if(r.enter||r.exit)return!0;if(r[e.type])return!0;var i=t.VISITOR_KEYS[e.type];if(!i||!i.length)return!1;for(var u=i,s=Array.isArray(u),a=0,u=s?u:(0,_getIterator3.default)(u);;){var n;if(s){if(a>=u.length)break;n=u[a++]}else{if(a=u.next(),a.done)break;n=a.value}var o=n;if(e[o])return!0}return!1},e.prototype.create=function(e,t,r,i){return _path3.default.get({parentPath:this.parentPath,parent:e,container:t,key:r,listKey:i})},e.prototype.maybeQueue=function(e,t){if(this.trap)throw new Error("Infinite cycle detected");this.queue&&(t?this.queue.push(e):this.priorityQueue.push(e))},e.prototype.visitMultiple=function(e,t,r){if(0===e.length)return!1;for(var i=[],u=0;u<e.length;u++){var s=e[u];s&&this.shouldVisit(s)&&i.push(this.create(t,e,u,r))}return this.visitQueue(i)},e.prototype.visitSingle=function(e,t){return!!this.shouldVisit(e[t])&&this.visitQueue([this.create(e,e,t)])},e.prototype.visitQueue=function(e){this.queue=e,this.priorityQueue=[];for(var t=[],r=!1,i=e,u=Array.isArray(i),s=0,i=u?i:(0,_getIterator3.default)(i);;){var a;if(u){if(s>=i.length)break;a=i[s++]}else{if(s=i.next(),s.done)break;a=s.value}var n=a;if(n.resync(),0!==n.contexts.length&&n.contexts[n.contexts.length-1]===this||n.pushContext(this),null!==n.key&&(testing&&e.length>=1e4&&(this.trap=!0),!(t.indexOf(n.node)>=0))){if(t.push(n.node),n.visit()){r=!0;break}if(this.priorityQueue.length&&(r=this.visitQueue(this.priorityQueue),this.priorityQueue=[],this.queue=e,r))break}}for(var o=e,l=Array.isArray(o),h=0,o=l?o:(0,_getIterator3.default)(o);;){var p;if(l){if(h>=o.length)break;p=o[h++]}else{if(h=o.next(),h.done)break;p=h.value}var f=p;f.popContext()}return this.queue=null,r},e.prototype.visit=function(e,t){var r=e[t];return!!r&&(Array.isArray(r)?this.visitMultiple(r,e,t):this.visitSingle(e,t))},e}();exports.default=TraversalContext,module.exports=exports.default;

/***/ },

/***/ "./node_modules/babel-traverse/lib/visitors.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function explode(e){if(e._exploded)return e;e._exploded=!0;for(var r in e)if(!shouldIgnoreKey(r)){var i=r.split("|");if(1!==i.length){var a=e[r];delete e[r];for(var n=i,o=Array.isArray(n),f=0,n=o?n:(0,_getIterator3.default)(n);;){var u;if(o){if(f>=n.length)break;u=n[f++]}else{if(f=n.next(),f.done)break;u=f.value}var l=u;e[l]=a}}}verify(e),delete e.__esModule,ensureEntranceObjects(e),ensureCallbackArrays(e);for(var s=(0,_keys2.default)(e),d=Array.isArray(s),v=0,s=d?s:(0,_getIterator3.default)(s);;){var y;if(d){if(v>=s.length)break;y=s[v++]}else{if(v=s.next(),v.done)break;y=v.value}var p=y;if(!shouldIgnoreKey(p)){var c=virtualTypes[p];if(c){var _=e[p];for(var g in _)_[g]=wrapCheck(c,_[g]);if(delete e[p],c.types)for(var b=c.types,h=Array.isArray(b),k=0,b=h?b:(0,_getIterator3.default)(b);;){var x;if(h){if(k>=b.length)break;x=b[k++]}else{if(k=b.next(),k.done)break;x=k.value}var A=x;e[A]?mergePair(e[A],_):e[A]=_}else mergePair(e,_)}}}for(var m in e)if(!shouldIgnoreKey(m)){var I=e[m],q=t.FLIPPED_ALIAS_KEYS[m],w=t.DEPRECATED_KEYS[m];if(w&&(console.trace("Visitor defined for "+m+" but it has been renamed to "+w),q=[w]),q){delete e[m];for(var E=q,P=Array.isArray(E),R=0,E=P?E:(0,_getIterator3.default)(E);;){var K;if(P){if(R>=E.length)break;K=E[R++]}else{if(R=E.next(),R.done)break;K=R.value}var S=K,T=e[S];T?mergePair(T,I):e[S]=(0,_clone2.default)(I)}}}for(var M in e)shouldIgnoreKey(M)||ensureCallbackArrays(e[M]);return e}function verify(e){if(!e._verified){if("function"==typeof e)throw new Error(messages.get("traverseVerifyRootFunction"));for(var r in e)if("enter"!==r&&"exit"!==r||validateVisitorMethods(r,e[r]),!shouldIgnoreKey(r)){if(t.TYPES.indexOf(r)<0)throw new Error(messages.get("traverseVerifyNodeType",r));var i=e[r];if("object"===("undefined"==typeof i?"undefined":(0,_typeof3.default)(i)))for(var a in i){if("enter"!==a&&"exit"!==a)throw new Error(messages.get("traverseVerifyVisitorProperty",r,a));validateVisitorMethods(r+"."+a,i[a])}}e._verified=!0}}function validateVisitorMethods(e,r){for(var t=[].concat(r),i=t,a=Array.isArray(i),n=0,i=a?i:(0,_getIterator3.default)(i);;){var o;if(a){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var f=o;if("function"!=typeof f)throw new TypeError("Non-function found defined in "+e+" with type "+("undefined"==typeof f?"undefined":(0,_typeof3.default)(f)))}}function merge(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments[2],i={},a=0;a<e.length;a++){var n=e[a],o=r[a];explode(n);for(var f in n){var u=n[f];(o||t)&&(u=wrapWithStateOrWrapper(u,o,t));var l=i[f]=i[f]||{};mergePair(l,u)}}return i}function wrapWithStateOrWrapper(e,r,t){var i={},a=function(a){var n=e[a];return Array.isArray(n)?(n=n.map(function(e){var i=e;return r&&(i=function(t){return e.call(r,t,r)}),t&&(i=t(r.key,a,i)),i}),void(i[a]=n)):"continue"};for(var n in e){a(n)}return i}function ensureEntranceObjects(e){for(var r in e)if(!shouldIgnoreKey(r)){var t=e[r];"function"==typeof t&&(e[r]={enter:t})}}function ensureCallbackArrays(e){e.enter&&!Array.isArray(e.enter)&&(e.enter=[e.enter]),e.exit&&!Array.isArray(e.exit)&&(e.exit=[e.exit])}function wrapCheck(e,r){var t=function(t){if(e.checkPath(t))return r.apply(this,arguments)};return t.toString=function(){return r.toString()},t}function shouldIgnoreKey(e){return"_"===e[0]||("enter"===e||"exit"===e||"shouldSkip"===e||("blacklist"===e||"noScope"===e||"skipKeys"===e))}function mergePair(e,r){for(var t in r)e[t]=[].concat(e[t]||[],r[t])}exports.__esModule=!0;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_keys=__webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js"),_keys2=_interopRequireDefault(_keys),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.explode=explode,exports.verify=verify,exports.merge=merge;var _virtualTypes=__webpack_require__("./node_modules/babel-traverse/lib/path/lib/virtual-types.js"),virtualTypes=_interopRequireWildcard(_virtualTypes),_babelMessages=__webpack_require__("./node_modules/babel-messages/lib/index.js"),messages=_interopRequireWildcard(_babelMessages),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_clone=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/clone.js"),_clone2=_interopRequireDefault(_clone);

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/clone.js":
/***/ function(module, exports, __webpack_require__) {

	function clone(e){return baseClone(e,CLONE_SYMBOLS_FLAG)}var baseClone=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseClone.js"),CLONE_SYMBOLS_FLAG=4;module.exports=clone;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseClone.js":
/***/ function(module, exports, __webpack_require__) {

	function baseClone(e,a,r,n,g,o){var t,l=a&CLONE_DEEP_FLAG,i=a&CLONE_FLAT_FLAG,s=a&CLONE_SYMBOLS_FLAG;if(r&&(t=g?r(e,n,g,o):r(e)),void 0!==t)return t;if(!isObject(e))return e;var T=isArray(e);if(T){if(t=initCloneArray(e),!l)return copyArray(e,t)}else{var c=getTag(e),b=c==funcTag||c==genTag;if(isBuffer(e))return cloneBuffer(e,l);if(c==objectTag||c==argsTag||b&&!g){if(t=i||b?{}:initCloneObject(e),!l)return i?copySymbolsIn(e,baseAssignIn(t,e)):copySymbols(e,baseAssign(t,e))}else{if(!cloneableTags[c])return g?e:{};t=initCloneByTag(e,c,baseClone,l)}}o||(o=new Stack);var u=o.get(e);if(u)return u;o.set(e,t);var y=s?i?getAllKeysIn:getAllKeys:i?keysIn:keys,A=T?void 0:y(e);return arrayEach(A||e,function(n,g){A&&(g=n,n=e[g]),assignValue(t,g,baseClone(n,a,r,g,e,o))}),t}var Stack=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Stack.js"),arrayEach=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayEach.js"),assignValue=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_assignValue.js"),baseAssign=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseAssign.js"),baseAssignIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseAssignIn.js"),cloneBuffer=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneBuffer.js"),copyArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copyArray.js"),copySymbols=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copySymbols.js"),copySymbolsIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copySymbolsIn.js"),getAllKeys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getAllKeys.js"),getAllKeysIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getAllKeysIn.js"),getTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getTag.js"),initCloneArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_initCloneArray.js"),initCloneByTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_initCloneByTag.js"),initCloneObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_initCloneObject.js"),isArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArray.js"),isBuffer=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isBuffer.js"),isObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isObject.js"),keys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/keys.js"),CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4,argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=!1,module.exports=baseClone;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_Stack.js":
/***/ function(module, exports, __webpack_require__) {

	function Stack(t){var e=this.__data__=new ListCache(t);this.size=e.size}var ListCache=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_ListCache.js"),stackClear=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_stackClear.js"),stackDelete=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_stackDelete.js"),stackGet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_stackGet.js"),stackHas=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_stackHas.js"),stackSet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_stackSet.js");Stack.prototype.clear=stackClear,Stack.prototype.delete=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet,module.exports=Stack;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_ListCache.js":
/***/ function(module, exports, __webpack_require__) {

	function ListCache(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}var listCacheClear=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_listCacheClear.js"),listCacheDelete=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_listCacheDelete.js"),listCacheGet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_listCacheGet.js"),listCacheHas=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_listCacheHas.js"),listCacheSet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_listCacheSet.js");ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,module.exports=ListCache;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_listCacheClear.js":
/***/ function(module, exports) {

	function listCacheClear(){this.__data__=[],this.size=0}module.exports=listCacheClear;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_listCacheDelete.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheDelete(e){var r=this.__data__,a=assocIndexOf(r,e);if(a<0)return!1;var t=r.length-1;return a==t?r.pop():splice.call(r,a,1),--this.size,!0}var assocIndexOf=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_assocIndexOf.js"),arrayProto=Array.prototype,splice=arrayProto.splice;module.exports=listCacheDelete;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_assocIndexOf.js":
/***/ function(module, exports, __webpack_require__) {

	function assocIndexOf(e,r){for(var n=e.length;n--;)if(eq(e[n][0],r))return n;return-1}var eq=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/eq.js");module.exports=assocIndexOf;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_listCacheGet.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheGet(e){var s=this.__data__,a=assocIndexOf(s,e);return a<0?void 0:s[a][1]}var assocIndexOf=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_assocIndexOf.js");module.exports=listCacheGet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_listCacheHas.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheHas(s){return assocIndexOf(this.__data__,s)>-1}var assocIndexOf=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_assocIndexOf.js");module.exports=listCacheHas;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_listCacheSet.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheSet(s,e){var t=this.__data__,a=assocIndexOf(t,s);return a<0?(++this.size,t.push([s,e])):t[a][1]=e,this}var assocIndexOf=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_assocIndexOf.js");module.exports=listCacheSet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_stackClear.js":
/***/ function(module, exports, __webpack_require__) {

	function stackClear(){this.__data__=new ListCache,this.size=0}var ListCache=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_ListCache.js");module.exports=stackClear;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_stackDelete.js":
/***/ function(module, exports) {

	function stackDelete(e){var t=this.__data__,s=t.delete(e);return this.size=t.size,s}module.exports=stackDelete;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_stackGet.js":
/***/ function(module, exports) {

	function stackGet(t){return this.__data__.get(t)}module.exports=stackGet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_stackHas.js":
/***/ function(module, exports) {

	function stackHas(a){return this.__data__.has(a)}module.exports=stackHas;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_stackSet.js":
/***/ function(module, exports, __webpack_require__) {

	function stackSet(e,a){var t=this.__data__;if(t instanceof ListCache){var i=t.__data__;if(!Map||i.length<LARGE_ARRAY_SIZE-1)return i.push([e,a]),this.size=++t.size,this;t=this.__data__=new MapCache(i)}return t.set(e,a),this.size=t.size,this}var ListCache=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_ListCache.js"),Map=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Map.js"),MapCache=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_MapCache.js"),LARGE_ARRAY_SIZE=200;module.exports=stackSet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_Map.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),Map=getNative(root,"Map");module.exports=Map;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_MapCache.js":
/***/ function(module, exports, __webpack_require__) {

	function MapCache(e){var a=-1,p=null==e?0:e.length;for(this.clear();++a<p;){var t=e[a];this.set(t[0],t[1])}}var mapCacheClear=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_mapCacheClear.js"),mapCacheDelete=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_mapCacheDelete.js"),mapCacheGet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_mapCacheGet.js"),mapCacheHas=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_mapCacheHas.js"),mapCacheSet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_mapCacheSet.js");MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,module.exports=MapCache;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_mapCacheClear.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}var Hash=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Hash.js"),ListCache=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_ListCache.js"),Map=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Map.js");module.exports=mapCacheClear;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_Hash.js":
/***/ function(module, exports, __webpack_require__) {

	function Hash(e){var h=-1,a=null==e?0:e.length;for(this.clear();++h<a;){var s=e[h];this.set(s[0],s[1])}}var hashClear=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_hashClear.js"),hashDelete=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_hashDelete.js"),hashGet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_hashGet.js"),hashHas=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_hashHas.js"),hashSet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_hashSet.js");Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,module.exports=Hash;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_hashClear.js":
/***/ function(module, exports, __webpack_require__) {

	function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{},this.size=0}var nativeCreate=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_nativeCreate.js");module.exports=hashClear;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_nativeCreate.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getNative.js"),nativeCreate=getNative(Object,"create");module.exports=nativeCreate;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_hashDelete.js":
/***/ function(module, exports) {

	function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}module.exports=hashDelete;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_hashGet.js":
/***/ function(module, exports, __webpack_require__) {

	function hashGet(e){var t=this.__data__;if(nativeCreate){var r=t[e];return r===HASH_UNDEFINED?void 0:r}return hasOwnProperty.call(t,e)?t[e]:void 0}var nativeCreate=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_nativeCreate.js"),HASH_UNDEFINED="__lodash_hash_undefined__",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=hashGet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_hashHas.js":
/***/ function(module, exports, __webpack_require__) {

	function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}var nativeCreate=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_nativeCreate.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=hashHas;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_hashSet.js":
/***/ function(module, exports, __webpack_require__) {

	function hashSet(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=nativeCreate&&void 0===t?HASH_UNDEFINED:t,this}var nativeCreate=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_nativeCreate.js"),HASH_UNDEFINED="__lodash_hash_undefined__";module.exports=hashSet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_mapCacheDelete.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheDelete(e){var a=getMapData(this,e).delete(e);return this.size-=a?1:0,a}var getMapData=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getMapData.js");module.exports=mapCacheDelete;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getMapData.js":
/***/ function(module, exports, __webpack_require__) {

	function getMapData(a,e){var t=a.__data__;return isKeyable(e)?t["string"==typeof e?"string":"hash"]:t.map}var isKeyable=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isKeyable.js");module.exports=getMapData;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_isKeyable.js":
/***/ function(module, exports) {

	function isKeyable(e){var o=typeof e;return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e}module.exports=isKeyable;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_mapCacheGet.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheGet(a){return getMapData(this,a).get(a)}var getMapData=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getMapData.js");module.exports=mapCacheGet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_mapCacheHas.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheHas(a){return getMapData(this,a).has(a)}var getMapData=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getMapData.js");module.exports=mapCacheHas;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_mapCacheSet.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheSet(e,a){var t=getMapData(this,e),i=t.size;return t.set(e,a),this.size+=t.size==i?0:1,this}var getMapData=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getMapData.js");module.exports=mapCacheSet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_arrayEach.js":
/***/ function(module, exports) {

	function arrayEach(r,a){for(var n=-1,e=null==r?0:r.length;++n<e&&a(r[n],n,r)!==!1;);return r}module.exports=arrayEach;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseAssign.js":
/***/ function(module, exports, __webpack_require__) {

	function baseAssign(e,s){return e&&copyObject(s,keys(s),e)}var copyObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copyObject.js"),keys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/keys.js");module.exports=baseAssign;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseAssignIn.js":
/***/ function(module, exports, __webpack_require__) {

	function baseAssignIn(e,n){return e&&copyObject(n,keysIn(n),e)}var copyObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copyObject.js"),keysIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/keysIn.js");module.exports=baseAssignIn;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_cloneBuffer.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {function cloneBuffer(e,o){if(o)return e.slice();var r=e.length,f=allocUnsafe?allocUnsafe(r):new e.constructor(r);return e.copy(f),f}var root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root.Buffer:void 0,allocUnsafe=Buffer?Buffer.allocUnsafe:void 0;module.exports=cloneBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_copyArray.js":
/***/ function(module, exports) {

	function copyArray(r,o){var y=-1,a=r.length;for(o||(o=Array(a));++y<a;)o[y]=r[y];return o}module.exports=copyArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_copySymbols.js":
/***/ function(module, exports, __webpack_require__) {

	function copySymbols(e,o){return copyObject(e,getSymbols(e),o)}var copyObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copyObject.js"),getSymbols=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getSymbols.js");module.exports=copySymbols;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getSymbols.js":
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayFilter.js"),stubArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/stubArray.js"),objectProto=Object.prototype,propertyIsEnumerable=objectProto.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(r){return null==r?[]:(r=Object(r),arrayFilter(nativeGetSymbols(r),function(e){return propertyIsEnumerable.call(r,e)}))}:stubArray;module.exports=getSymbols;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_arrayFilter.js":
/***/ function(module, exports) {

	function arrayFilter(r,a){for(var e=-1,l=null==r?0:r.length,t=0,n=[];++e<l;){var o=r[e];a(o,e,r)&&(n[t++]=o)}return n}module.exports=arrayFilter;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/stubArray.js":
/***/ function(module, exports) {

	function stubArray(){return[]}module.exports=stubArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_copySymbolsIn.js":
/***/ function(module, exports, __webpack_require__) {

	function copySymbolsIn(e,o){return copyObject(e,getSymbolsIn(e),o)}var copyObject=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_copyObject.js"),getSymbolsIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getSymbolsIn.js");module.exports=copySymbolsIn;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getSymbolsIn.js":
/***/ function(module, exports, __webpack_require__) {

	var arrayPush=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayPush.js"),getPrototype=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getPrototype.js"),getSymbols=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getSymbols.js"),stubArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/stubArray.js"),nativeGetSymbols=Object.getOwnPropertySymbols,getSymbolsIn=nativeGetSymbols?function(r){for(var e=[];r;)arrayPush(e,getSymbols(r)),r=getPrototype(r);return e}:stubArray;module.exports=getSymbolsIn;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_arrayPush.js":
/***/ function(module, exports) {

	function arrayPush(r,a){for(var e=-1,n=a.length,t=r.length;++e<n;)r[t+e]=a[e];return r}module.exports=arrayPush;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getPrototype.js":
/***/ function(module, exports, __webpack_require__) {

	var overArg=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_overArg.js"),getPrototype=overArg(Object.getPrototypeOf,Object);module.exports=getPrototype;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getAllKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols)}var baseGetAllKeys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseGetAllKeys.js"),getSymbols=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getSymbols.js"),keys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/keys.js");module.exports=getAllKeys;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_baseGetAllKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function baseGetAllKeys(r,a,e){var s=a(r);return isArray(r)?s:arrayPush(s,e(r))}var arrayPush=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayPush.js"),isArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/isArray.js");module.exports=baseGetAllKeys;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getAllKeysIn.js":
/***/ function(module, exports, __webpack_require__) {

	function getAllKeysIn(e){return baseGetAllKeys(e,keysIn,getSymbolsIn)}var baseGetAllKeys=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseGetAllKeys.js"),getSymbolsIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getSymbolsIn.js"),keysIn=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/keysIn.js");module.exports=getAllKeysIn;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_getTag.js":
/***/ function(module, exports, __webpack_require__) {

	var DataView=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_DataView.js"),Map=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Map.js"),Promise=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Promise.js"),Set=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Set.js"),WeakMap=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_WeakMap.js"),baseGetTag=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseGetTag.js"),toSource=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_toSource.js"),mapTag="[object Map]",objectTag="[object Object]",promiseTag="[object Promise]",setTag="[object Set]",weakMapTag="[object WeakMap]",dataViewTag="[object DataView]",dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),getTag=baseGetTag;(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(e){var a=baseGetTag(e),t=a==objectTag?e.constructor:void 0,r=t?toSource(t):"";if(r)switch(r){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return a}),module.exports=getTag;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_DataView.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),DataView=getNative(root,"DataView");module.exports=DataView;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_Promise.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),Promise=getNative(root,"Promise");module.exports=Promise;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_Set.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),Set=getNative(root,"Set");module.exports=Set;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_WeakMap.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),WeakMap=getNative(root,"WeakMap");module.exports=WeakMap;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_initCloneArray.js":
/***/ function(module, exports) {

	function initCloneArray(t){var r=t.length,o=t.constructor(r);return r&&"string"==typeof t[0]&&hasOwnProperty.call(t,"index")&&(o.index=t.index,o.input=t.input),o}var objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=initCloneArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_initCloneByTag.js":
/***/ function(module, exports, __webpack_require__) {

	function initCloneByTag(e,a,r,t){var n=e.constructor;switch(a){case arrayBufferTag:return cloneArrayBuffer(e);case boolTag:case dateTag:return new n(+e);case dataViewTag:return cloneDataView(e,t);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(e,t);case mapTag:return cloneMap(e,t,r);case numberTag:case stringTag:return new n(e);case regexpTag:return cloneRegExp(e);case setTag:return cloneSet(e,t,r);case symbolTag:return cloneSymbol(e)}}var cloneArrayBuffer=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneArrayBuffer.js"),cloneDataView=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneDataView.js"),cloneMap=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneMap.js"),cloneRegExp=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneRegExp.js"),cloneSet=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneSet.js"),cloneSymbol=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneSymbol.js"),cloneTypedArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneTypedArray.js"),boolTag="[object Boolean]",dateTag="[object Date]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]";module.exports=initCloneByTag;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_cloneArrayBuffer.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneArrayBuffer(r){var e=new r.constructor(r.byteLength);return new Uint8Array(e).set(new Uint8Array(r)),e}var Uint8Array=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Uint8Array.js");module.exports=cloneArrayBuffer;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_Uint8Array.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_root.js"),Uint8Array=root.Uint8Array;module.exports=Uint8Array;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_cloneDataView.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneDataView(e,r){var f=r?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(f,e.byteOffset,e.byteLength)}var cloneArrayBuffer=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneArrayBuffer.js");module.exports=cloneDataView;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_cloneMap.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneMap(r,a,e){var o=a?e(mapToArray(r),CLONE_DEEP_FLAG):mapToArray(r);return arrayReduce(o,addMapEntry,new r.constructor)}var addMapEntry=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_addMapEntry.js"),arrayReduce=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayReduce.js"),mapToArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_mapToArray.js"),CLONE_DEEP_FLAG=1;module.exports=cloneMap;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_addMapEntry.js":
/***/ function(module, exports) {

	function addMapEntry(t,d){return t.set(d[0],d[1]),t}module.exports=addMapEntry;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_arrayReduce.js":
/***/ function(module, exports) {

	function arrayReduce(r,e,u,a){var n=-1,l=null==r?0:r.length;for(a&&l&&(u=r[++n]);++n<l;)u=e(u,r[n],n,r);return u}module.exports=arrayReduce;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_mapToArray.js":
/***/ function(module, exports) {

	function mapToArray(r){var a=-1,o=Array(r.size);return r.forEach(function(r,n){o[++a]=[n,r]}),o}module.exports=mapToArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_cloneRegExp.js":
/***/ function(module, exports) {

	function cloneRegExp(e){var r=new e.constructor(e.source,reFlags.exec(e));return r.lastIndex=e.lastIndex,r}var reFlags=/\w*$/;module.exports=cloneRegExp;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_cloneSet.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneSet(r,e,t){var a=e?t(setToArray(r),CLONE_DEEP_FLAG):setToArray(r);return arrayReduce(a,addSetEntry,new r.constructor)}var addSetEntry=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_addSetEntry.js"),arrayReduce=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_arrayReduce.js"),setToArray=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_setToArray.js"),CLONE_DEEP_FLAG=1;module.exports=cloneSet;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_addSetEntry.js":
/***/ function(module, exports) {

	function addSetEntry(d,t){return d.add(t),d}module.exports=addSetEntry;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_setToArray.js":
/***/ function(module, exports) {

	function setToArray(r){var o=-1,e=Array(r.size);return r.forEach(function(r){e[++o]=r}),e}module.exports=setToArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_cloneSymbol.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneSymbol(o){return symbolValueOf?Object(symbolValueOf.call(o)):{}}var Symbol=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_Symbol.js"),symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;module.exports=cloneSymbol;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_cloneTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneTypedArray(r,e){var f=e?cloneArrayBuffer(r.buffer):r.buffer;return new r.constructor(f,r.byteOffset,r.length)}var cloneArrayBuffer=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_cloneArrayBuffer.js");module.exports=cloneTypedArray;

/***/ },

/***/ "./node_modules/babel-traverse/node_modules/lodash/_initCloneObject.js":
/***/ function(module, exports, __webpack_require__) {

	function initCloneObject(e){return"function"!=typeof e.constructor||isPrototype(e)?{}:baseCreate(getPrototype(e))}var baseCreate=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_baseCreate.js"),getPrototype=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_getPrototype.js"),isPrototype=__webpack_require__("./node_modules/babel-traverse/node_modules/lodash/_isPrototype.js");module.exports=initCloneObject;

/***/ },

/***/ "./node_modules/babel-types/node_modules/lodash/_arrayPush.js":
/***/ function(module, exports) {

	function arrayPush(r,a){for(var e=-1,n=a.length,t=r.length;++e<n;)r[t+e]=a[e];return r}module.exports=arrayPush;

/***/ }

});