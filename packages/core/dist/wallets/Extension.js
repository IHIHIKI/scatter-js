"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),PluginTypes=_interopRequireWildcard(require("../plugins/PluginTypes")),_Plugin2=_interopRequireDefault(require("../plugins/Plugin")),_Blockchains=require("../models/Blockchains"),_WalletInterface=_interopRequireWildcard(require("../models/WalletInterface")),_SocketService=_interopRequireDefault(require("../services/SocketService")),isAvailable=!1;"undefined"!=typeof window&&"undefined"!=typeof document&&document.addEventListener("scatterLoaded",function(){return isAvailable=!0});var pollExistence=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b,c,d=arguments;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=0<d.length&&void 0!==d[0]?d[0]:null,c=1<d.length&&void 0!==d[1]?d[1]:0,a.abrupt("return",new Promise(function(a){return b||(b=a),isAvailable?b(!0):5<c?b(!1):void setTimeout(function(){return pollExistence(b,c+1)},100)}));case 3:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),Extension=/*#__PURE__*/function(a){function b(a,c){var d;return(0,_classCallCheck2.default)(this,b),d=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,_Blockchains.Blockchains.EOS,PluginTypes.WALLET_SUPPORT)),d.name="ScatterExtension",d.context=a,d.holderFns=c,d}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"connect",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b){var c;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,pollExistence();case 2:c=a.sent,c&&b(!0);case 4:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()},{key:"runBeforeInterfacing",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b,c,d,e=this;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=this.context.network,b&&(c=window.scatter.getIdentity.bind(window.scatter),window.scatter.getIdentity=function(a){return c(a?a:{accounts:[b]}).then(function(a){return e.context.identity=a,a})},d=window.scatter.suggestNetwork.bind(window.scatter),window.scatter.suggestNetwork=function(a){return d(a?a:b)}),this.holderFns.set(window.scatter),this.context=this.holderFns.get(),this.context.useIdentity=function(){},a.abrupt("return",!0);case 6:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()},{key:"runAfterInterfacing",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return this.context.isExtension=!0,this.context.connect=function(){return new Promise(function(a){return a(!0)})},a.abrupt("return",!0);case 3:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()},{key:"methods",value:function a(){return(0,_defineProperty2.default)({},_WalletInterface.WALLET_METHODS.getIdentity,function(){console.log("getid")})}}]),b}(_Plugin2.default);exports.default=Extension;