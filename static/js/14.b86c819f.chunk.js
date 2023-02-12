(this.webpackJsonpAPL=this.webpackJsonpAPL||[]).push([[14],{1461:function(t,e,r){"use strict";r.r(e),r.d(e,"PortisConnector",(function(){return s}));var n=r(780),o=r(47);function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},s=function(t){var e,n;function s(e){var r,n=e.dAppId,s=e.networks,a=e.config,u=void 0===a?{}:a,h=s.map((function(t){return"number"===typeof t?t:Number(t.chainId)}));return h.every((function(t){return!!c[t]}))||Object(o.a)(!1),(r=t.call(this,{supportedChainIds:h})||this).dAppId=n,r.networks=s,r.config=u,r.handleOnLogout=r.handleOnLogout.bind(i(r)),r.handleOnActiveWalletChanged=r.handleOnActiveWalletChanged.bind(i(r)),r.handleOnError=r.handleOnError.bind(i(r)),r}n=t,(e=s).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=s.prototype;return a.handleOnLogout=function(){this.emitDeactivate()},a.handleOnActiveWalletChanged=function(t){this.emitUpdate({account:t})},a.handleOnError=function(t){this.emitError(t)},a.activate=function(){try{var t=function(){return e.portis.onLogout(e.handleOnLogout),e.portis.onActiveWalletChanged(e.handleOnActiveWalletChanged),e.portis.onError(e.handleOnError),Promise.resolve(e.portis.provider.enable().then((function(t){return t[0]}))).then((function(t){return{provider:e.portis.provider,account:t}}))},e=this,n=function(){if(!e.portis)return Promise.resolve(r.e(10).then(r.t.bind(null,1306,7)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(t){e.portis=new t(e.dAppId,"number"===typeof e.networks[0]?c[e.networks[0]]:e.networks[0],e.config)}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},a.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(t){return Promise.reject(t)}},a.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(t){return Promise.reject(t)}},a.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},a.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},a.changeNetwork=function(t,e){try{return"number"===typeof t?(c[t]||Object(o.a)(!1),this.portis.changeNetwork(c[t],e),this.emitUpdate({chainId:t})):(this.portis.changeNetwork(t,e),this.emitUpdate({chainId:Number(t.chainId)})),Promise.resolve()}catch(r){return Promise.reject(r)}},a.close=function(){try{var t=this;return Promise.resolve(t.portis.logout()).then((function(){t.emitDeactivate()}))}catch(e){return Promise.reject(e)}},s}(n.a)},780:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(101),o=r(104);var i=function(t){var e,r;function n(e){var r,n=(void 0===e?{}:e).supportedChainIds;return(r=t.call(this)||this).supportedChainIds=n,r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=n.prototype;return i.emitUpdate=function(t){this.emit(o.a.Update,t)},i.emitError=function(t){this.emit(o.a.Error,t)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},n}(n.EventEmitter)}}]);