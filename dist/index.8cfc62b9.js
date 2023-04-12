// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dpgAG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var _coreJs = require("core.js/dist/core.js");
"use strict";
// import images from '';
// import logos from './logo';
// const file_name = "file-name"
// {/* <img src=`${images[file_name]}` /> */}
const container = document.querySelector(".container");
/* Start Page Overlay */ const startpageButton = document.querySelector("#start_button");
const navItems = document.querySelector(".nav-items");
const navigation = document.querySelector(".navigation");
const navImages = navItems.querySelectorAll("img");
const icecreamButton = document.querySelector(".ice-cream-card");
const teaButton = document.querySelector(".tea-card");
const shoppingBasket = document.querySelector(".shopping-basket");
const favouriteMeals = document.querySelector(".favourite-meals");
const confirmBasket = document.querySelector(".confirm-basket");
const cancelBasket = document.querySelector(".cancel-basket");
const confirmOrder = document.getElementById("confirm-order");
const addToBasket = document.querySelector("add_basket_icon");
const removeFromBasket = document.querySelector("remove_basket_icon");
const addPreviewToBasket = document.getElementById("add-to-basket");
const removeProductBasket = document.querySelectorAll("remove-product-basket");
const dialogBasketAdd = document.getElementById("dialog-basket-add");
const favMealDialogBasketAdd = document.getElementById("dialog-meal-basket-add");
const confirmBasketAdd = document.getElementById("confirm-basket-add");
const cancelBasketAdd = document.getElementById("cancel-basket-add");
const basketCounter = document.getElementById("basket-counter");
const favouriteCounter = document.getElementById("favourite-counter");
const favouriteCheckbox = document.querySelector("input[name=favourite]");
const mealNameDiv = document.querySelector(".meal-name");
const orderNumber = document.querySelector(".order-number");
const finishOrder = document.querySelector(".finish");
const orderPrint = document.querySelector(".print-order-number");
const showcaseOverlay = document.querySelector(".showcase_overlay");
const productModal = document.getElementById("product-modal");
const productModal3 = document.getElementById("product-modal3");
const productModal4 = document.getElementById("product-modal4");
const allProductModals = document.querySelectorAll("div[data-modal]");
const orderSummary = document.querySelector(".order-summary");
const mainContainer = document.querySelector(".main-container");
const closeModalXButtons = document.querySelectorAll(".close-icon-x");
const orderCompletion = document.getElementById("confirm-order-completion");
const modalContainer = document.querySelector(".modal-container");
const productContainer = document.querySelector(".product-container");
const previewContainer = document.querySelector(".basket-item-preview");
const basketProductContainer = productModal3.querySelector(".product-container");
const favouritesProductContainer = productModal4.querySelector(".product-container");
// const preVatTotal = document.getElementById("total-pre-vat");
// const incVatTotal = document.getElementById("total-inc-vat");
// const vatAmount = document.getElementById("vat-amount");
const state = {
    preview: [],
    basket: [],
    basketLimit: 10,
    favourites: [],
    orderNumber: 0
};
const _resetOrder = function() {
    state.orderNumber = 0;
    state.favourites = [];
    state.basket = [];
    state.preview = [];
    localStorage.removeItem("favourites");
    localStorage.removeItem("orderNumber");
    updateBasketOverlay();
    updateFavouritesOverlay();
    console.log("Order Reset");
};
//Remove Duplicates from Array of Objects
function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr)=>{
        return arr.map((mapObj)=>mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}
const closeOtherModels = function() {
    // Close Any Open Modals
    allProductModals.forEach((el)=>{
        if (el.classList.contains("dialog-scale")) el.classList.remove("dialog-scale");
        // Clear Products HTML
        const productsContainer = el.querySelector(".product-container");
        productsContainer.innerHTML = "";
        //Empty Preview Array
        state.preview = [];
        //Empty Preview Container
        previewContainer.innerHTML = "";
        mainContainer.style.display = "none";
    });
};
const getLocalStorage = ()=>{
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    const orderNumber = JSON.parse(localStorage.getItem("orderNumber"));
    if (orderNumber) state.orderNumber = orderNumber;
    if (!favourites) {
        console.log("no favourites");
        return state.favourites = [];
    }
    // Filter Favourites Array without duplicate items
    const filteredFavourites = favourites.map((arr)=>removeDuplicates(arr, "id"));
    console.log(favourites, filteredFavourites);
    filteredFavourites.forEach((arr, _, array)=>{
        arr.forEach(function(cur) {
            console.log(cur);
            if (typeof cur === "object") {
                let countValue = cur.quantity - 1;
                console.log(countValue);
                while(countValue > 0){
                    arr.push(cur);
                    // console.log("add to array")
                    --countValue;
                }
            } else console.log("not object");
        });
    });
    console.log(filteredFavourites);
    //Moving Meal Name to end of array
    filteredFavourites.forEach((arr)=>{
        arr.forEach((el, i)=>{
            if (typeof el === "string") {
                const mealName = el;
                arr.splice(i, 1);
                arr.push(mealName);
            }
        });
    });
    favourites = filteredFavourites;
    console.log(favourites, orderNumber);
    if (favourites && orderNumber) {
        state.favourites = favourites;
        state.orderNumber = orderNumber;
    }
};
const setLocalStorage = function() {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
    localStorage.setItem("orderNumber", JSON.stringify(state.orderNumber));
};
const renderError = (error, domElement = mainContainer)=>{
    //create new div
    const errorDiv = document.createElement("div");
    errorDiv.className = "_error";
    // and give it some content
    const errorMessage = document.createTextNode(` ${error}`);
    errorDiv.appendChild(errorMessage);
    //insert into DOM
    domElement.before(errorDiv);
    //setTimeout to delete Node from DOM after 3 seconds
    setTimeout(()=>{
        errorDiv.remove();
    }, 5000);
};
const renderSpinner = (element)=>{
    const markup = `
    <div class="spinner">
      <svg>
        <use href="/logo/icons.svg#icon-loader"></use>
      </svg>
    </div>
  `;
    element.insertAdjacentHTML("afterend", markup);
};
const generateH2 = (string)=>{
    const header = modalContainer.firstElementChild;
    header.innerHTML = "";
    header.insertAdjacentHTML("afterbegin", string);
};
const generateProducts = (products)=>{
    products.forEach(function(object, index, arr) {
        const markup = `<div class="product-line" data-id="${object.id}">
        <img src=${object.img} alt=${object.alt} />
        <div>
          <h3>${object.icecream || object.tea} ${Object.hasOwn(object, "icecream") ? "Cone" : "Tea"}</h3>
          <h6>Calories: ${object.calories}kcal</h6>
          <h3>£${object.price.toFixed(2)}</h3>
        </div>
        <div class="quantity-counter">
          <img
            src="/minus-sign.169ef0fc.svg"
            alt="Remove from basket"
            class="remove_basket_icon"
          />
          <span class="product-quantity">0</span>
          <img
            src="/plus-sign.11eec5fe.svg"
            alt="Add to basket"
            class="add_basket_icon"
          />
        </div>
      </div>`;
        productContainer.insertAdjacentHTML("afterbegin", markup);
    });
};
const generatePreview = function(preview) {
    previewContainer.innerHTML = "";
    const uniqueItems = [
        ...new Set(preview)
    ];
    uniqueItems.forEach(function(object, index, arr) {
        const markup = `
        <div>
          <img src=${object.img} alt=${object.alt} />
          <div>
            <h3>${object.icecream || object.tea} x${object.quantity}</h3>
            <h4>£${object.price.toFixed(2)}</h4>
          </div>
        </div>`;
        previewContainer.insertAdjacentHTML("afterbegin", markup);
    });
};
const generateFavs = function() {
    //Clear Fav Container
    favouritesProductContainer.innerHTML = "";
    // Create Favourites Array without duplicate items
    // ??????? not needed as duplicates removed at localstorage retrieval
    const newFavourites = state.favourites.map((arr)=>removeDuplicates(arr, "id"));
    console.log(newFavourites);
    //Generate Meal Div and Meal Header and Contents for each index in favourites
    newFavourites.forEach((arr, i, favArr)=>{
        const mealPrice = arr.reduce((acc, cur)=>{
            typeof cur === "object" ? acc += cur.price * cur.quantity : acc;
            return acc;
        }, 0);
        arr.push(mealPrice);
        console.log(newFavourites);
        const markup = `<div data-index="${i}"> <!-- Meal Div-->
          <div><!--Meal Header -->
            <div>
              <div>
                <h2>${arr[arr.length - 2]}</h2>
                <h1>£${arr[arr.length - 1].toFixed(2)}</h1>
              </div>
              <button type="button" id="add-to-basket">Add Basket</button>
                <dialog id="dialog-meal-basket-add">
                    <p>Add Meal to Basket?</p>
                    <div>
                      <button type="button" id="confirm-basket-add" class="confirm-button">Confirm</button>
                      <button type="button" id="cancel-basket-add" class="cancel-button">Cancel</button>
                    </div>
                </dialog>
              <button type="button" id="remove-favs">Remove</button>
            </div>
          </div>
            <div class="favourites-products"><!--Products in Meal Div-->
              <!--Product Lines Generated in Here-->
            </div>
        </div>`;
        favouritesProductContainer.insertAdjacentHTML("afterbegin", markup);
        // Generate Second HTML for product lines
        const favouritesProducts = favouritesProductContainer.querySelector(".favourites-products");
        arr.forEach((obj)=>{
            if (typeof obj === "object") {
                const markup = `<div class="product-line" data-id="${obj.id}">
          <img src=${obj.img} alt=${obj.alt}/>
          <div>
            <h3>${obj.icecream || obj.tea} ${Object.hasOwn(obj, "icecream") ? "Cone" : "Tea"}</h3>
            <h3>x ${obj.quantity}</h3>
          </div>
        </div>`;
                favouritesProducts.insertAdjacentHTML("afterbegin", markup);
            } else return;
        });
    });
};
const generateBasket = function(basket) {
    basketProductContainer.innerHTML = "";
    const basketCounts = basket.reduce((countobj, curobj)=>{
        countobj[curobj.id] ? countobj[curobj.id] += 1 : countobj[curobj.id] = 1;
        return countobj;
    }, {});
    // Loop through basket and set quantity to match basketCounts
    basket.forEach(function(obj) {
        obj.quantity = basketCounts[String(obj.id)];
    });
    // Reset Adapted Favourites Array to source
    getLocalStorage();
    // Create set from basket
    // const newBasket = [...new Set(basket)];
    const newBasket = removeDuplicates(basket, "id");
    console.log(basket, newBasket);
    // Generate HTML
    newBasket.forEach(function(object, index, arr) {
        const markup = `<div class="product-line" data-id="${object.id}">
        <img src=${object.img} alt=${object.alt} />
        <div>
          <h3>${object.icecream || object.tea} ${Object.hasOwn(object, "icecream") ? "Cone" : "Tea"}</h3>
          <h3>x ${object.quantity}</h3>
          <h6>Calories: ${object.calories * object.quantity}kcal</h6>
          <h6>£${(object.price * object.quantity).toFixed(2)}</h6>
        </div>
        <button type="button" class="remove-product-basket">Remove</button>
      </div>`;
        basketProductContainer.insertAdjacentHTML("afterbegin", markup);
    });
};
const generateBasketTotals = function() {
    const basketPreviewContainer = productModal3.querySelector(".basket-item-preview");
    basketPreviewContainer.innerHTML = "";
    if (state.basket.length === 0) return; //guard clause if basket clicked on empty
    const preVatTotal = state.basket.map((obj)=>obj.price).reduce(function(acc, cur) {
        return acc += cur;
    });
    const vatAmount = preVatTotal * .20;
    basketPreviewContainer.insertAdjacentHTML("afterbegin", `<table>
    <tr>
      <th scope="row">Total pre-tax:</th>
      <td>£${preVatTotal.toFixed(2)}</td>
    </tr>
    <tr>
      <th scope="row">+ VAT 20%:</th>
      <td>£${vatAmount.toFixed(2)}</td>
    </tr>
    <tfoot>
      <th scope="row">Total</th>
      <td>£${(preVatTotal + vatAmount).toFixed(2)}</td>
    </tfoot>
  </table>`);
};
const closeClearProductModal = function(element) {
    mainContainer.style.display = "block";
    // Remove Modal Visibility
    const modal = element.closest("[data-modal]");
    modal.classList.remove("dialog-scale");
    // Clear Products HTML
    const productsContainer = modal.querySelector(".product-container");
    productsContainer.innerHTML = "";
    //Empty Preview Array
    state.preview = [];
    //Empty Preview Container
    previewContainer.innerHTML = "";
    // Remove Clicked Status from Nav Buttons
    navImages.forEach((img)=>img.classList.remove("clicked"));
};
// Basket Number Overlay
const updateBasketOverlay = function() {
    const basketTotal = state.basket.length;
    basketCounter.innerHTML = String(basketTotal);
};
//Favourites Number Overlay
const updateFavouritesOverlay = function() {
    const favouriteTotal = state.favourites.length;
    favouriteCounter.innerHTML = String(favouriteTotal);
};
// Start Page Overlay
startpageButton.addEventListener("click", (e)=>{
    // RenderSpinner function
    const target = e.target;
    renderSpinner(target);
    //Retrieve LocalStorage Favourites and Order Number
    getLocalStorage();
    // Updates Favourites Overlay
    updateFavouritesOverlay();
    console.log(state);
    // Hide Start Overlay
    showcaseOverlay.style.display = "none";
    // Remove Spinner from DOM
    const spinner = document.querySelector(".spinner");
    spinner.remove();
});
//Ice Cream Card Clicked
icecreamButton.addEventListener("click", (e)=>{
    mainContainer.style.display = "none";
    productModal.classList.add("dialog-scale");
    // Generate H2 in Modal Container (Ice Creams)
    generateH2("Ice-Creams");
    // Generate the HTML for the Ice Creams
    generateProducts(iceCreams);
});
//Tea Card Clicked
teaButton.addEventListener("click", (e)=>{
    mainContainer.style.display = "none";
    productModal.classList.add("dialog-scale");
    // Generate H2 in Modal Container (Teas)
    generateH2("Teas");
    // Generate the HTML for the Teas
    generateProducts(teas);
});
// +- Basket icon
productContainer.addEventListener("click", (e)=>{
    const clicked = e.target;
    const clickedClasses = Array.from(clicked.classList);
    let counter = clicked.previousElementSibling || clicked.nextElementSibling;
    if (clickedClasses[0] === "add_basket_icon") {
        // Conditional if Basket < basketLimit
        if (state.preview.length < state.basketLimit && state.preview.length + state.basket.length < state.basketLimit) {
            // Increase Counter
            let digit = +counter.innerText;
            digit++;
            counter.innerText = String(digit);
            // counter.innerText = String(digit);
            // Add Object to Preview Array
            const productLine = clicked.closest(".product-line");
            const dataID = +productLine.dataset.id;
            const combinedProductsArray = [
                ...iceCreams,
                ...teas
            ];
            const linkedProduct = combinedProductsArray.find((el)=>el.id === dataID);
            linkedProduct.quantity = digit;
            state.preview.push(linkedProduct);
        } else renderError("Basket Limit Reached");
        console.log(state.preview);
        // Generate Previews
        generatePreview(state.preview);
    }
    if (clickedClasses[0] === "remove_basket_icon") {
        // Decrease Counter
        let digit = +counter.innerText;
        digit === 0 ? counter.innerText = String(digit) : counter.innerText = String(--digit);
        // Remove Object from Preview Array
        const productLine = clicked.closest(".product-line");
        const dataID = +productLine.dataset.id;
        const filteredMatching = state.preview.filter((el)=>el.id === dataID);
        const filteredNotMatching = state.preview.filter((el)=>el.id !== dataID);
        filteredMatching.pop();
        filteredMatching.forEach((obj)=>obj.quantity = digit);
        state.preview = [
            ...filteredNotMatching,
            ...filteredMatching
        ];
        console.log(state.preview);
        // Generate Previews
        generatePreview(state.preview);
    }
});
// Add Preview to Basket within Modal SideBar
addPreviewToBasket.addEventListener("click", ()=>{
    if (!state.preview.length > 0) return;
    dialogBasketAdd.showModal();
});
// Confirm Send Items to Basket
confirmBasketAdd.addEventListener("click", (e)=>{
    //Add Preview Array Items to Basket Array
    state.basket.push(state.preview);
    const basketFlat = state.basket.flat();
    state.basket = basketFlat;
    // Updates # in Basket
    updateBasketOverlay();
    // Empty and Close Modal
    closeClearProductModal(e.target);
    //Close Dialog Modal
    dialogBasketAdd.close();
});
// Cancel Send Items to Basket
cancelBasketAdd.addEventListener("click", function() {
    dialogBasketAdd.close();
});
// Basket icon Clicked
shoppingBasket.addEventListener("click", (e)=>{
    // If Empty Basket
    if (state.basket.length === 0 && !e.target.classList.contains("clicked")) return renderError("Basket is currently empty!");
    navImages.forEach((img)=>img.classList.remove("clicked"));
    //Add Thick Underline When Active
    e.target.classList.add("clicked");
    closeOtherModels();
    productModal3.classList.add("dialog-scale");
    console.log(state.basket);
    // Generate HTML for Basket Items
    generateBasket(state.basket);
    // Show £ Totals
    generateBasketTotals();
    console.log("After Basket generated:", state);
});
// Favourite Meals Icon Clicked
favouriteMeals.addEventListener("click", (e)=>{
    // If Empty Favourites
    if (state.favourites.length === 0 && !e.target.classList.contains("clicked")) return renderError("Favourites is currently empty!");
    navImages.forEach((img)=>img.classList.remove("clicked"));
    //Add Thick Underline When Active
    e.target.classList.add("clicked");
    // Close all other open modals - same as when basket opened
    closeOtherModels();
    //Remove Display Main Container
    mainContainer.style.display = "none";
    //Show Favourite Meals Modal
    productModal4.classList.add("dialog-scale");
    // Generate Favs HTML
    generateFavs();
});
// Favourite Meals Add to Basket/Remove from Basket Buttons Clicked
favouritesProductContainer.addEventListener("click", function doit(e) {
    e.stopPropagation();
    // Issue with generating favourites into basket and multiple clicks recognised on adding multiple times. Undefined?
    favouritesProductContainer.removeEventListener("click", doit);
    favouritesProductContainer.addEventListener("click", doit);
    console.log("clicked on fav container");
    //If Add Meal to Basket clicked then close modal and update Basket overlay and add items to state.basket.
    const clicked = e.target;
    console.log(clicked);
    if (clicked.id !== "add-to-basket" && clicked.id !== "remove-favs") return; //guard clause to isolate add/remove buttons
    const mealDiv = clicked.closest("[data-index]");
    const mealIndex = mealDiv.dataset.index;
    console.log(mealDiv, mealIndex);
    const mealCopy = state.favourites[mealIndex].slice(); /* issue here with duplicates on index??? */ 
    mealCopy.pop();
    console.log(mealCopy, state);
    if (clicked.id === "add-to-basket") {
        if (mealCopy.length <= state.basketLimit && mealCopy.length + state.basket.length <= state.basketLimit) {
            //Open Dialog Modal
            const favMealDialogBasketAdd = mealDiv.querySelector("#dialog-meal-basket-add");
            const confirmBasketAdd = mealDiv.querySelector("#confirm-basket-add");
            const cancelBasketAdd = mealDiv.querySelector("#cancel-basket-add");
            favMealDialogBasketAdd.showModal();
            confirmBasketAdd.addEventListener("click", function confirm(e) {
                e.stopPropagation();
                console.log("clicked on confirm button", mealCopy);
                state.basket.push(...mealCopy);
                // debugger;
                updateBasketOverlay();
                // // Close Dialog
                favMealDialogBasketAdd.close();
                return confirmBasketAdd.removeEventListener("click", confirm);
            });
            cancelBasketAdd.addEventListener("click", (e)=>{
                e.stopPropagation();
                console.log("clicked on cancel button");
                // Close Dialog
                favMealDialogBasketAdd.close();
            });
        } else renderError("Basket Limit Reached");
    }
    if (clicked.id === "remove-favs") {
        console.log("Remove button clicked");
        // Remove from Favourites
        state.favourites.splice(+[
            mealIndex
        ], 1);
        console.log(state.favourites);
        // Regenerate Favourites
        generateFavs();
        // Update Fav Overlay
        updateFavouritesOverlay();
        // Update localStorage
        setLocalStorage();
    }
});
// Event Listener for X Button in Modal for Products
closeModalXButtons.forEach(function(btn) {
    btn.addEventListener("click", (e)=>{
        const element = e.target;
        closeClearProductModal(element);
    });
});
// Remove Item from Basket
basketProductContainer.addEventListener("click", (e)=>{
    const clicked = e.target;
    const clickedClasses = Array.from(clicked.classList);
    if (clickedClasses[0] !== "remove-product-basket") return; //guard clause
    const productLine = clicked.closest(".product-line");
    const dataID = +productLine.dataset.id;
    const filteredBasket = state.basket.filter((el)=>el.id !== dataID);
    state.basket = filteredBasket;
    generateBasket(state.basket);
    generateBasketTotals();
    updateBasketOverlay();
});
// Show Order Confirmation Dialog - Basket
confirmOrder.addEventListener("click", ()=>{
    if (state.basket.length === 0) return; //guard clause
    orderCompletion.showModal();
});
// Favourite Meal not Checked
favouriteCheckbox.addEventListener("change", function() {
    if (this.checked) {
        console.log("Checkbox is checked..");
        mealNameDiv.style.display = "block";
    } else {
        console.log("Checkbox is not checked..");
        mealNameDiv.style.display = "none";
    }
});
// Order Summary Show upon Basket Confirmation
confirmBasket.addEventListener("click", (e)=>{
    //Validation of Inputs
    const dialogCommit = orderCompletion.children;
    console.log(dialogCommit);
    const checkedValue = dialogCommit[0].children.favourite.checked;
    const mealNameValue = dialogCommit[1].children.mealname.value;
    console.log(checkedValue, mealNameValue);
    let storedMealNames;
    state.favourites.length > 0 ? storedMealNames = state.favourites.map((arr)=>arr[arr.length - 1]) : storedMealNames = [];
    console.log(storedMealNames);
    if (checkedValue && storedMealNames.includes(mealNameValue)) return renderError("Meal Name Unavailable", favouriteCheckbox); //guard clause to produce alert
    if (checkedValue && mealNameValue === "") return renderError("Meal Name Required", favouriteCheckbox); //guard clause to produce alert
    orderCompletion.returnValue = "Confirm";
    // if favourite input checked? 
    if (orderCompletion.returnValue === "Confirm" && checkedValue) {
        state.favourites.push(state.basket);
        state.favourites[state.favourites.length - 1].push(mealNameValue);
    }
    //Empty Basket
    state.basket = [];
    // Close Dialog Window
    orderCompletion.close();
    // Increase Order Number
    state.orderNumber++;
    // Basket Overlay = 0
    updateBasketOverlay();
    productModal3.classList.remove("dialog-scale");
    orderSummary.classList.add("dialog-scale");
    // Remove Clicked Status from Basket Icon
    navImages.forEach((img)=>img.classList.remove("clicked"));
    // Navigation Display None
    navigation.style.display = "none";
    //generate HTML for orderSummary including state.orderNumber.
    orderNumber.innerText = String(state.orderNumber);
    console.log(state);
});
cancelBasket.addEventListener("click", function(e) {
    orderCompletion.close();
});
//Finish Button Clicked
finishOrder.addEventListener("click", function(e) {
    setLocalStorage();
    // Empty Favourites Array
    state.favourites = [];
    showcaseOverlay.style.display = "flex";
    updateFavouritesOverlay();
    orderSummary.classList.remove("dialog-scale");
    // Navigation Display
    navigation.style.display = "flex";
    mainContainer.style.display = "block";
    console.log(state);
});
// Finish Button Clicked with Print
orderPrint.addEventListener("click", function(e) {
    //Open Print Window
    window.print();
    window.addEventListener("afterprint", (event)=>{
        console.log("After print");
    });
    console.log(state);
});

},{"core.js/dist/core.js":"038uS"}],"038uS":[function(require,module,exports) {
/*!
 * Copyright (c) 2012 Andrew Volkov <hello@vol4ok.net>
 */ var Core = function() {
    Core.constructor = function() {};
    Core.VERSION = "0.4.0";
    function Core() {
        return Core.constructor.apply(this, arguments);
    }
    return Core;
}();
(function($) {
    $.slice = Array.prototype.slice;
    $.hasProp = $.hasOwnProperty = Object.prototype.hasOwnProperty;
    $.indexOf = Array.prototype.indexOf;
    $.bind = function(func) {
        return Function.prototype.bind.apply(func, slice.call(arguments, 1));
    };
    $.extend = function(target) {
        $.slice.call(arguments, 1).forEach(function(source) {
            for(key in source)target[key] = source[key];
        });
        return target;
    };
    $.ext = function() {
        $.extend.apply(this, [
            this
        ].concat($.slice.call(arguments)));
    };
    $.inherit = function(child, parent) {
        for(var key1 in parent)if ($.hasProp.call(parent, key1)) child[key1] = parent[key1];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor;
        child.__super__ = parent.prototype;
        return child;
    };
    $.ns = function(scopes, block) {
        var i, len;
        if (!$.m) $.m = {};
        module = {
            scopes: scopes,
            exports: {}
        };
        block(module, module.exports);
        for(i = 0, len = scopes.length; i < len; i++)$.m[scopes[i]] = module;
        return module.exports;
    };
    $.require = function(module1) {
        return $.m[module1].exports;
    };
})(Core);
var $ = Core;
var require = $.require;
$.ns([
    "underscore"
], function(module1, exports) {
    (function() {
        var root = this;
        var previousUnderscore = root._;
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice1 = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var _1 = function(obj) {
            if (obj instanceof _1) return obj;
            if (!(this instanceof _1)) return new _1(obj);
            this._wrapped = obj;
        };
        if (typeof exports !== "undefined") {
            if (typeof module1 !== "undefined" && module1.exports) exports = module1.exports = _1;
            exports._ = _1;
        } else root._ = _1;
        _1.VERSION = "1.4.3";
        var each = _1.each = _1.forEach = function(obj, iterator, context) {
            if (obj == null) return;
            if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context);
            else if (obj.length === +obj.length) for(var i = 0, l = obj.length; i < l; i++){
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
            else {
                for(var key1 in obj)if (_1.has(obj, key1)) {
                    if (iterator.call(context, obj[key1], key1, obj) === breaker) return;
                }
            }
        };
        _1.map = _1.collect = function(obj, iterator, context) {
            var results = [];
            if (obj == null) return results;
            if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
            each(obj, function(value, index, list) {
                results[results.length] = iterator.call(context, value, index, list);
            });
            return results;
        };
        var reduceError = "Reduce of empty array with no initial value";
        _1.reduce = _1.foldl = _1.inject = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            if (obj == null) obj = [];
            if (nativeReduce && obj.reduce === nativeReduce) {
                if (context) iterator = _1.bind(iterator, context);
                return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
            }
            each(obj, function(value, index, list) {
                if (!initial) {
                    memo = value;
                    initial = true;
                } else memo = iterator.call(context, memo, value, index, list);
            });
            if (!initial) throw new TypeError(reduceError);
            return memo;
        };
        _1.reduceRight = _1.foldr = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            if (obj == null) obj = [];
            if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
                if (context) iterator = _1.bind(iterator, context);
                return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
            }
            var length = obj.length;
            if (length !== +length) {
                var keys = _1.keys(obj);
                length = keys.length;
            }
            each(obj, function(value, index, list) {
                index = keys ? keys[--length] : --length;
                if (!initial) {
                    memo = obj[index];
                    initial = true;
                } else memo = iterator.call(context, memo, obj[index], index, list);
            });
            if (!initial) throw new TypeError(reduceError);
            return memo;
        };
        _1.find = _1.detect = function(obj, iterator, context) {
            var result;
            any(obj, function(value, index, list) {
                if (iterator.call(context, value, index, list)) {
                    result = value;
                    return true;
                }
            });
            return result;
        };
        _1.filter = _1.select = function(obj, iterator, context) {
            var results = [];
            if (obj == null) return results;
            if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
            each(obj, function(value, index, list) {
                if (iterator.call(context, value, index, list)) results[results.length] = value;
            });
            return results;
        };
        _1.reject = function(obj, iterator, context) {
            return _1.filter(obj, function(value, index, list) {
                return !iterator.call(context, value, index, list);
            }, context);
        };
        _1.every = _1.all = function(obj, iterator, context) {
            iterator || (iterator = _1.identity);
            var result = true;
            if (obj == null) return result;
            if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
            each(obj, function(value, index, list) {
                if (!(result = result && iterator.call(context, value, index, list))) return breaker;
            });
            return !!result;
        };
        var any = _1.some = _1.any = function(obj, iterator, context) {
            iterator || (iterator = _1.identity);
            var result = false;
            if (obj == null) return result;
            if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
            each(obj, function(value, index, list) {
                if (result || (result = iterator.call(context, value, index, list))) return breaker;
            });
            return !!result;
        };
        _1.contains = _1.include = function(obj, target) {
            if (obj == null) return false;
            if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
            return any(obj, function(value) {
                return value === target;
            });
        };
        _1.invoke = function(obj, method) {
            var args = slice1.call(arguments, 2);
            return _1.map(obj, function(value) {
                return (_1.isFunction(method) ? method : value[method]).apply(value, args);
            });
        };
        _1.pluck = function(obj, key1) {
            return _1.map(obj, function(value) {
                return value[key1];
            });
        };
        _1.where = function(obj, attrs) {
            if (_1.isEmpty(attrs)) return [];
            return _1.filter(obj, function(value) {
                for(var key1 in attrs){
                    if (attrs[key1] !== value[key1]) return false;
                }
                return true;
            });
        };
        _1.max = function(obj, iterator, context) {
            if (!iterator && _1.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.max.apply(Math, obj);
            if (!iterator && _1.isEmpty(obj)) return -Infinity;
            var result = {
                computed: -Infinity,
                value: -Infinity
            };
            each(obj, function(value, index, list) {
                var computed = iterator ? iterator.call(context, value, index, list) : value;
                computed >= result.computed && (result = {
                    value: value,
                    computed: computed
                });
            });
            return result.value;
        };
        _1.min = function(obj, iterator, context) {
            if (!iterator && _1.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.min.apply(Math, obj);
            if (!iterator && _1.isEmpty(obj)) return Infinity;
            var result = {
                computed: Infinity,
                value: Infinity
            };
            each(obj, function(value, index, list) {
                var computed = iterator ? iterator.call(context, value, index, list) : value;
                computed < result.computed && (result = {
                    value: value,
                    computed: computed
                });
            });
            return result.value;
        };
        _1.shuffle = function(obj) {
            var rand;
            var index = 0;
            var shuffled = [];
            each(obj, function(value) {
                rand = _1.random(index++);
                shuffled[index - 1] = shuffled[rand];
                shuffled[rand] = value;
            });
            return shuffled;
        };
        var lookupIterator = function(value) {
            return _1.isFunction(value) ? value : function(obj) {
                return obj[value];
            };
        };
        _1.sortBy = function(obj, value, context) {
            var iterator = lookupIterator(value);
            return _1.pluck(_1.map(obj, function(value, index, list) {
                return {
                    value: value,
                    index: index,
                    criteria: iterator.call(context, value, index, list)
                };
            }).sort(function(left, right) {
                var a = left.criteria;
                var b = right.criteria;
                if (a !== b) {
                    if (a > b || a === void 0) return 1;
                    if (a < b || b === void 0) return -1;
                }
                return left.index < right.index ? -1 : 1;
            }), "value");
        };
        var group = function(obj, value, context, behavior) {
            var result = {};
            var iterator = lookupIterator(value || _1.identity);
            each(obj, function(value, index) {
                var key1 = iterator.call(context, value, index, obj);
                behavior(result, key1, value);
            });
            return result;
        };
        _1.groupBy = function(obj, value, context) {
            return group(obj, value, context, function(result, key1, value) {
                (_1.has(result, key1) ? result[key1] : result[key1] = []).push(value);
            });
        };
        _1.countBy = function(obj, value, context) {
            return group(obj, value, context, function(result, key1) {
                if (!_1.has(result, key1)) result[key1] = 0;
                result[key1]++;
            });
        };
        _1.sortedIndex = function(array, obj, iterator, context) {
            iterator = iterator == null ? _1.identity : lookupIterator(iterator);
            var value = iterator.call(context, obj);
            var low = 0, high = array.length;
            while(low < high){
                var mid = low + high >>> 1;
                iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
            }
            return low;
        };
        _1.toArray = function(obj) {
            if (!obj) return [];
            if (_1.isArray(obj)) return slice1.call(obj);
            if (obj.length === +obj.length) return _1.map(obj, _1.identity);
            return _1.values(obj);
        };
        _1.size = function(obj) {
            if (obj == null) return 0;
            return obj.length === +obj.length ? obj.length : _1.keys(obj).length;
        };
        _1.first = _1.head = _1.take = function(array, n, guard) {
            if (array == null) return void 0;
            return n != null && !guard ? slice1.call(array, 0, n) : array[0];
        };
        _1.initial = function(array, n, guard) {
            return slice1.call(array, 0, array.length - (n == null || guard ? 1 : n));
        };
        _1.last = function(array, n, guard) {
            if (array == null) return void 0;
            if (n != null && !guard) return slice1.call(array, Math.max(array.length - n, 0));
            else return array[array.length - 1];
        };
        _1.rest = _1.tail = _1.drop = function(array, n, guard) {
            return slice1.call(array, n == null || guard ? 1 : n);
        };
        _1.compact = function(array) {
            return _1.filter(array, _1.identity);
        };
        var flatten = function(input, shallow, output) {
            each(input, function(value) {
                if (_1.isArray(value)) shallow ? push.apply(output, value) : flatten(value, shallow, output);
                else output.push(value);
            });
            return output;
        };
        _1.flatten = function(array, shallow) {
            return flatten(array, shallow, []);
        };
        _1.without = function(array) {
            return _1.difference(array, slice1.call(arguments, 1));
        };
        _1.uniq = _1.unique = function(array, isSorted, iterator, context) {
            if (_1.isFunction(isSorted)) {
                context = iterator;
                iterator = isSorted;
                isSorted = false;
            }
            var initial = iterator ? _1.map(array, iterator, context) : array;
            var results = [];
            var seen = [];
            each(initial, function(value, index) {
                if (isSorted ? !index || seen[seen.length - 1] !== value : !_1.contains(seen, value)) {
                    seen.push(value);
                    results.push(array[index]);
                }
            });
            return results;
        };
        _1.union = function() {
            return _1.uniq(concat.apply(ArrayProto, arguments));
        };
        _1.intersection = function(array) {
            var rest = slice1.call(arguments, 1);
            return _1.filter(_1.uniq(array), function(item) {
                return _1.every(rest, function(other) {
                    return _1.indexOf(other, item) >= 0;
                });
            });
        };
        _1.difference = function(array) {
            var rest = concat.apply(ArrayProto, slice1.call(arguments, 1));
            return _1.filter(array, function(value) {
                return !_1.contains(rest, value);
            });
        };
        _1.zip = function() {
            var args = slice1.call(arguments);
            var length = _1.max(_1.pluck(args, "length"));
            var results = new Array(length);
            for(var i = 0; i < length; i++)results[i] = _1.pluck(args, "" + i);
            return results;
        };
        _1.object = function(list, values) {
            if (list == null) return {};
            var result = {};
            for(var i = 0, l = list.length; i < l; i++)if (values) result[list[i]] = values[i];
            else result[list[i][0]] = list[i][1];
            return result;
        };
        _1.indexOf = function(array, item, isSorted) {
            if (array == null) return -1;
            var i = 0, l = array.length;
            if (isSorted) {
                if (typeof isSorted == "number") i = isSorted < 0 ? Math.max(0, l + isSorted) : isSorted;
                else {
                    i = _1.sortedIndex(array, item);
                    return array[i] === item ? i : -1;
                }
            }
            if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
            for(; i < l; i++)if (array[i] === item) return i;
            return -1;
        };
        _1.lastIndexOf = function(array, item, from) {
            if (array == null) return -1;
            var hasIndex = from != null;
            if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
            var i = hasIndex ? from : array.length;
            while(i--)if (array[i] === item) return i;
            return -1;
        };
        _1.range = function(start, stop, step) {
            if (arguments.length <= 1) {
                stop = start || 0;
                start = 0;
            }
            step = arguments[2] || 1;
            var len = Math.max(Math.ceil((stop - start) / step), 0);
            var idx = 0;
            var range = new Array(len);
            while(idx < len){
                range[idx++] = start;
                start += step;
            }
            return range;
        };
        var ctor = function() {};
        _1.bind = function(func, context) {
            var args, bound;
            if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice1.call(arguments, 1));
            if (!_1.isFunction(func)) throw new TypeError();
            args = slice1.call(arguments, 2);
            return bound = function() {
                if (!(this instanceof bound)) return func.apply(context, args.concat(slice1.call(arguments)));
                ctor.prototype = func.prototype;
                var self1 = new ctor();
                ctor.prototype = null;
                var result = func.apply(self1, args.concat(slice1.call(arguments)));
                if (Object(result) === result) return result;
                return self1;
            };
        };
        _1.bindAll = function(obj) {
            var funcs = slice1.call(arguments, 1);
            if (funcs.length == 0) funcs = _1.functions(obj);
            each(funcs, function(f) {
                obj[f] = _1.bind(obj[f], obj);
            });
            return obj;
        };
        _1.memoize = function(func, hasher) {
            var memo = {};
            hasher || (hasher = _1.identity);
            return function() {
                var key1 = hasher.apply(this, arguments);
                return _1.has(memo, key1) ? memo[key1] : memo[key1] = func.apply(this, arguments);
            };
        };
        _1.delay = function(func, wait) {
            var args = slice1.call(arguments, 2);
            return setTimeout(function() {
                return func.apply(null, args);
            }, wait);
        };
        _1.defer = function(func) {
            return _1.delay.apply(_1, [
                func,
                1
            ].concat(slice1.call(arguments, 1)));
        };
        _1.throttle = function(func, wait) {
            var context, args, timeout, result;
            var previous = 0;
            var later = function() {
                previous = new Date();
                timeout = null;
                result = func.apply(context, args);
            };
            return function() {
                var now = new Date();
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                } else if (!timeout) timeout = setTimeout(later, remaining);
                return result;
            };
        };
        _1.debounce = function(func, wait, immediate) {
            var timeout, result;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) result = func.apply(context, args);
                return result;
            };
        };
        _1.once = function(func) {
            var ran = false, memo;
            return function() {
                if (ran) return memo;
                ran = true;
                memo = func.apply(this, arguments);
                func = null;
                return memo;
            };
        };
        _1.wrap = function(func, wrapper) {
            return function() {
                var args = [
                    func
                ];
                push.apply(args, arguments);
                return wrapper.apply(this, args);
            };
        };
        _1.compose = function() {
            var funcs = arguments;
            return function() {
                var args = arguments;
                for(var i = funcs.length - 1; i >= 0; i--)args = [
                    funcs[i].apply(this, args)
                ];
                return args[0];
            };
        };
        _1.after = function(times, func) {
            if (times <= 0) return func();
            return function() {
                if (--times < 1) return func.apply(this, arguments);
            };
        };
        _1.keys = nativeKeys || function(obj) {
            if (obj !== Object(obj)) throw new TypeError("Invalid object");
            var keys = [];
            for(var key1 in obj)if (_1.has(obj, key1)) keys[keys.length] = key1;
            return keys;
        };
        _1.values = function(obj) {
            var values = [];
            for(var key1 in obj)if (_1.has(obj, key1)) values.push(obj[key1]);
            return values;
        };
        _1.pairs = function(obj) {
            var pairs = [];
            for(var key1 in obj)if (_1.has(obj, key1)) pairs.push([
                key1,
                obj[key1]
            ]);
            return pairs;
        };
        _1.invert = function(obj) {
            var result = {};
            for(var key1 in obj)if (_1.has(obj, key1)) result[obj[key1]] = key1;
            return result;
        };
        _1.functions = _1.methods = function(obj) {
            var names = [];
            for(var key1 in obj)if (_1.isFunction(obj[key1])) names.push(key1);
            return names.sort();
        };
        _1.extend = function(obj) {
            each(slice1.call(arguments, 1), function(source) {
                if (source) for(var prop in source)obj[prop] = source[prop];
            });
            return obj;
        };
        _1.pick = function(obj) {
            var copy = {};
            var keys = concat.apply(ArrayProto, slice1.call(arguments, 1));
            each(keys, function(key1) {
                if (key1 in obj) copy[key1] = obj[key1];
            });
            return copy;
        };
        _1.omit = function(obj) {
            var copy = {};
            var keys = concat.apply(ArrayProto, slice1.call(arguments, 1));
            for(var key1 in obj)if (!_1.contains(keys, key1)) copy[key1] = obj[key1];
            return copy;
        };
        _1.defaults = function(obj) {
            each(slice1.call(arguments, 1), function(source) {
                if (source) {
                    for(var prop in source)if (obj[prop] == null) obj[prop] = source[prop];
                }
            });
            return obj;
        };
        _1.clone = function(obj) {
            if (!_1.isObject(obj)) return obj;
            return _1.isArray(obj) ? obj.slice() : _1.extend({}, obj);
        };
        _1.tap = function(obj, interceptor) {
            interceptor(obj);
            return obj;
        };
        var eq = function(a, b, aStack, bStack) {
            if (a === b) return a !== 0 || 1 / a == 1 / b;
            if (a == null || b == null) return a === b;
            if (a instanceof _1) a = a._wrapped;
            if (b instanceof _1) b = b._wrapped;
            var className = toString.call(a);
            if (className != toString.call(b)) return false;
            switch(className){
                case "[object String]":
                    return a == String(b);
                case "[object Number]":
                    return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a == +b;
                case "[object RegExp]":
                    return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
            }
            if (typeof a != "object" || typeof b != "object") return false;
            var length = aStack.length;
            while(length--){
                if (aStack[length] == a) return bStack[length] == b;
            }
            aStack.push(a);
            bStack.push(b);
            var size = 0, result = true;
            if (className == "[object Array]") {
                size = a.length;
                result = size == b.length;
                if (result) while(size--){
                    if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                }
            } else {
                var aCtor = a.constructor, bCtor = b.constructor;
                if (aCtor !== bCtor && !(_1.isFunction(aCtor) && aCtor instanceof aCtor && _1.isFunction(bCtor) && bCtor instanceof bCtor)) return false;
                for(var key1 in a)if (_1.has(a, key1)) {
                    size++;
                    if (!(result = _1.has(b, key1) && eq(a[key1], b[key1], aStack, bStack))) break;
                }
                if (result) {
                    for(key1 in b){
                        if (_1.has(b, key1) && !size--) break;
                    }
                    result = !size;
                }
            }
            aStack.pop();
            bStack.pop();
            return result;
        };
        _1.isEqual = function(a, b) {
            return eq(a, b, [], []);
        };
        _1.isEmpty = function(obj) {
            if (obj == null) return true;
            if (_1.isArray(obj) || _1.isString(obj)) return obj.length === 0;
            for(var key1 in obj)if (_1.has(obj, key1)) return false;
            return true;
        };
        _1.isElement = function(obj) {
            return !!(obj && obj.nodeType === 1);
        };
        _1.isArray = nativeIsArray || function(obj) {
            return toString.call(obj) == "[object Array]";
        };
        _1.isObject = function(obj) {
            return obj === Object(obj);
        };
        each([
            "Arguments",
            "Function",
            "String",
            "Number",
            "Date",
            "RegExp"
        ], function(name) {
            _1["is" + name] = function(obj) {
                return toString.call(obj) == "[object " + name + "]";
            };
        });
        if (!_1.isArguments(arguments)) _1.isArguments = function(obj) {
            return !!(obj && _1.has(obj, "callee"));
        };
        if (typeof /./ !== "function") _1.isFunction = function(obj) {
            return typeof obj === "function";
        };
        _1.isFinite = function(obj) {
            return isFinite(obj) && !isNaN(parseFloat(obj));
        };
        _1.isNaN = function(obj) {
            return _1.isNumber(obj) && obj != +obj;
        };
        _1.isBoolean = function(obj) {
            return obj === true || obj === false || toString.call(obj) == "[object Boolean]";
        };
        _1.isNull = function(obj) {
            return obj === null;
        };
        _1.isUndefined = function(obj) {
            return obj === void 0;
        };
        _1.has = function(obj, key1) {
            return hasOwnProperty.call(obj, key1);
        };
        _1.noConflict = function() {
            root._ = previousUnderscore;
            return this;
        };
        _1.identity = function(value) {
            return value;
        };
        _1.times = function(n, iterator, context) {
            var accum = Array(n);
            for(var i = 0; i < n; i++)accum[i] = iterator.call(context, i);
            return accum;
        };
        _1.random = function(min, max) {
            if (max == null) {
                max = min;
                min = 0;
            }
            return min + (0 | Math.random() * (max - min + 1));
        };
        var entityMap = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        entityMap.unescape = _1.invert(entityMap.escape);
        var entityRegexes = {
            escape: new RegExp("[" + _1.keys(entityMap.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + _1.keys(entityMap.unescape).join("|") + ")", "g")
        };
        _1.each([
            "escape",
            "unescape"
        ], function(method) {
            _1[method] = function(string) {
                if (string == null) return "";
                return ("" + string).replace(entityRegexes[method], function(match) {
                    return entityMap[method][match];
                });
            };
        });
        _1.result = function(object, property) {
            if (object == null) return null;
            var value = object[property];
            return _1.isFunction(value) ? value.call(object) : value;
        };
        _1.mixin = function(obj) {
            each(_1.functions(obj), function(name) {
                var func = _1[name] = obj[name];
                _1.prototype[name] = function() {
                    var args = [
                        this._wrapped
                    ];
                    push.apply(args, arguments);
                    return result.call(this, func.apply(_1, args));
                };
            });
        };
        var idCounter = 0;
        _1.uniqueId = function(prefix) {
            var id = "" + ++idCounter;
            return prefix ? prefix + id : id;
        };
        _1.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        };
        var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        _1.template = function(text, data, settings) {
            settings = _1.defaults({}, settings, _1.templateSettings);
            var matcher = new RegExp([
                (settings.escape || noMatch).source,
                (settings.interpolate || noMatch).source,
                (settings.evaluate || noMatch).source
            ].join("|") + "|$", "g");
            var index = 0;
            var source = "__p+='";
            text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                source += text.slice(index, offset).replace(escaper, function(match) {
                    return "\\" + escapes[match];
                });
                if (escape) source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
                if (interpolate) source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
                if (evaluate) source += "';\n" + evaluate + "\n__p+='";
                index = offset + match.length;
                return match;
            });
            source += "';\n";
            if (!settings.variable) source = "with(obj||{}){\n" + source + "}\n";
            source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
            try {
                var render = new Function(settings.variable || "obj", "_", source);
            } catch (e) {
                e.source = source;
                throw e;
            }
            if (data) return render(data, _1);
            var template = function(data) {
                return render.call(this, data, _1);
            };
            template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}";
            return template;
        };
        _1.chain = function(obj) {
            return _1(obj).chain();
        };
        var result = function(obj) {
            return this._chain ? _1(obj).chain() : obj;
        };
        _1.mixin(_1);
        each([
            "pop",
            "push",
            "reverse",
            "shift",
            "sort",
            "splice",
            "unshift"
        ], function(name) {
            var method = ArrayProto[name];
            _1.prototype[name] = function() {
                var obj = this._wrapped;
                method.apply(obj, arguments);
                if ((name == "shift" || name == "splice") && obj.length === 0) delete obj[0];
                return result.call(this, obj);
            };
        });
        each([
            "concat",
            "join",
            "slice"
        ], function(name) {
            var method = ArrayProto[name];
            _1.prototype[name] = function() {
                return result.call(this, method.apply(this._wrapped, arguments));
            };
        });
        _1.extend(_1.prototype, {
            chain: function() {
                this._chain = true;
                return this;
            },
            value: function() {
                return this._wrapped;
            }
        });
    }).call(this);
});
/*!
 * Copyright (c) 2012 Andrew Volkov <hello@vol4ok.net>
 */ (function($) {
    _ = require("underscore");
    delete _.VERSION;
    $.ext(_);
    // Array Remove - By John Resig (MIT Licensed)
    Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };
})(Core);
$.ns([
    "underscore.string"
], function(module1, exports) {
    !function(root, String1) {
        "use strict";
        var nativeTrim = String1.prototype.trim;
        var nativeTrimRight = String1.prototype.trimRight;
        var nativeTrimLeft = String1.prototype.trimLeft;
        var parseNumber = function(source) {
            return source * 1 || 0;
        };
        var strRepeat = function(str, qty) {
            if (qty < 1) return "";
            var result = "";
            while(qty > 0){
                if (qty & 1) result += str;
                qty >>= 1, str += str;
            }
            return result;
        };
        var slice1 = [].slice;
        var defaultToWhiteSpace = function(characters) {
            if (characters == null) return "\\s";
            else if (characters.source) return characters.source;
            else return "[" + _s1.escapeRegExp(characters) + "]";
        };
        var escapeChars = {
            lt: "<",
            gt: ">",
            quot: '"',
            amp: "&",
            apos: "'"
        };
        var reversedEscapeChars = {};
        for(var key1 in escapeChars)reversedEscapeChars[escapeChars[key1]] = key1;
        reversedEscapeChars["'"] = "#39";
        var sprintf = function() {
            function get_type(variable) {
                return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
            }
            var str_repeat = strRepeat;
            var str_format = function() {
                if (!str_format.cache.hasOwnProperty(arguments[0])) str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
                return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
            };
            str_format.format = function(parse_tree, argv) {
                var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length;
                for(i = 0; i < tree_length; i++){
                    node_type = get_type(parse_tree[i]);
                    if (node_type === "string") output.push(parse_tree[i]);
                    else if (node_type === "array") {
                        match = parse_tree[i];
                        if (match[2]) {
                            arg = argv[cursor];
                            for(k = 0; k < match[2].length; k++){
                                if (!arg.hasOwnProperty(match[2][k])) throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));
                                arg = arg[match[2][k]];
                            }
                        } else if (match[1]) arg = argv[match[1]];
                        else arg = argv[cursor++];
                        if (/[^s]/.test(match[8]) && get_type(arg) != "number") throw new Error(sprintf("[_.sprintf] expecting number but found %s", get_type(arg)));
                        switch(match[8]){
                            case "b":
                                arg = arg.toString(2);
                                break;
                            case "c":
                                arg = String1.fromCharCode(arg);
                                break;
                            case "d":
                                arg = parseInt(arg, 10);
                                break;
                            case "e":
                                arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                                break;
                            case "f":
                                arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                                break;
                            case "o":
                                arg = arg.toString(8);
                                break;
                            case "s":
                                arg = (arg = String1(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
                                break;
                            case "u":
                                arg = Math.abs(arg);
                                break;
                            case "x":
                                arg = arg.toString(16);
                                break;
                            case "X":
                                arg = arg.toString(16).toUpperCase();
                                break;
                        }
                        arg = /[def]/.test(match[8]) && match[3] && arg >= 0 ? "+" + arg : arg;
                        pad_character = match[4] ? match[4] == "0" ? "0" : match[4].charAt(1) : " ";
                        pad_length = match[6] - String1(arg).length;
                        pad = match[6] ? str_repeat(pad_character, pad_length) : "";
                        output.push(match[5] ? arg + pad : pad + arg);
                    }
                }
                return output.join("");
            };
            str_format.cache = {};
            str_format.parse = function(fmt) {
                var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
                while(_fmt){
                    if ((match = /^[^\x25]+/.exec(_fmt)) !== null) parse_tree.push(match[0]);
                    else if ((match = /^\x25{2}/.exec(_fmt)) !== null) parse_tree.push("%");
                    else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
                        if (match[2]) {
                            arg_names |= 1;
                            var field_list = [], replacement_field = match[2], field_match = [];
                            if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1]);
                                while((replacement_field = replacement_field.substring(field_match[0].length)) !== ""){
                                    if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) field_list.push(field_match[1]);
                                    else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) field_list.push(field_match[1]);
                                    else throw new Error("[_.sprintf] huh?");
                                }
                            } else throw new Error("[_.sprintf] huh?");
                            match[2] = field_list;
                        } else arg_names |= 2;
                        if (arg_names === 3) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                        parse_tree.push(match);
                    } else throw new Error("[_.sprintf] huh?");
                    _fmt = _fmt.substring(match[0].length);
                }
                return parse_tree;
            };
            return str_format;
        }();
        var _s1 = {
            VERSION: "2.3.0",
            isBlank: function(str) {
                if (str == null) str = "";
                return /^\s*$/.test(str);
            },
            stripTags: function(str) {
                if (str == null) return "";
                return String1(str).replace(/<\/?[^>]+>/g, "");
            },
            capitalize: function(str) {
                str = str == null ? "" : String1(str);
                return str.charAt(0).toUpperCase() + str.slice(1);
            },
            chop: function(str, step) {
                if (str == null) return [];
                str = String1(str);
                step = ~~step;
                return step > 0 ? str.match(new RegExp(".{1," + step + "}", "g")) : [
                    str
                ];
            },
            clean: function(str) {
                return _s1.strip(str).replace(/\s+/g, " ");
            },
            count: function(str, substr) {
                if (str == null || substr == null) return 0;
                str = String1(str);
                substr = String1(substr);
                var count = 0, pos = 0, length = substr.length;
                while(true){
                    pos = str.indexOf(substr, pos);
                    if (pos === -1) break;
                    count++;
                    pos += length;
                }
                return count;
            },
            chars: function(str) {
                if (str == null) return [];
                return String1(str).split("");
            },
            swapCase: function(str) {
                if (str == null) return "";
                return String1(str).replace(/\S/g, function(c) {
                    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
                });
            },
            escapeHTML: function(str) {
                if (str == null) return "";
                return String1(str).replace(/[&<>"']/g, function(m) {
                    return "&" + reversedEscapeChars[m] + ";";
                });
            },
            unescapeHTML: function(str) {
                if (str == null) return "";
                return String1(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
                    var match;
                    if (entityCode in escapeChars) return escapeChars[entityCode];
                    else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) return String1.fromCharCode(parseInt(match[1], 16));
                    else if (match = entityCode.match(/^#(\d+)$/)) return String1.fromCharCode(~~match[1]);
                    else return entity;
                });
            },
            escapeRegExp: function(str) {
                if (str == null) return "";
                return String1(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
            },
            splice: function(str, i, howmany, substr) {
                var arr = _s1.chars(str);
                arr.splice(~~i, ~~howmany, substr);
                return arr.join("");
            },
            insert: function(str, i, substr) {
                return _s1.splice(str, i, 0, substr);
            },
            include: function(str, needle) {
                if (needle === "") return true;
                if (str == null) return false;
                return String1(str).indexOf(needle) !== -1;
            },
            join: function() {
                var args = slice1.call(arguments), separator = args.shift();
                if (separator == null) separator = "";
                return args.join(separator);
            },
            lines: function(str) {
                if (str == null) return [];
                return String1(str).split("\n");
            },
            reverse: function(str) {
                return _s1.chars(str).reverse().join("");
            },
            startsWith: function(str, starts) {
                if (starts === "") return true;
                if (str == null || starts == null) return false;
                str = String1(str);
                starts = String1(starts);
                return str.length >= starts.length && str.slice(0, starts.length) === starts;
            },
            endsWith: function(str, ends) {
                if (ends === "") return true;
                if (str == null || ends == null) return false;
                str = String1(str);
                ends = String1(ends);
                return str.length >= ends.length && str.slice(str.length - ends.length) === ends;
            },
            succ: function(str) {
                if (str == null) return "";
                str = String1(str);
                return str.slice(0, -1) + String1.fromCharCode(str.charCodeAt(str.length - 1) + 1);
            },
            titleize: function(str) {
                if (str == null) return "";
                return String1(str).replace(/(?:^|\s)\S/g, function(c) {
                    return c.toUpperCase();
                });
            },
            camelize: function(str) {
                return _s1.trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
                    return c.toUpperCase();
                });
            },
            underscored: function(str) {
                return _s1.trim(str).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase();
            },
            dasherize: function(str) {
                return _s1.trim(str).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase();
            },
            classify: function(str) {
                return _s1.titleize(String1(str).replace(/[\W_]/g, " ")).replace(/\s/g, "");
            },
            humanize: function(str) {
                return _s1.capitalize(_s1.underscored(str).replace(/_id$/, "").replace(/_/g, " "));
            },
            trim: function(str, characters) {
                if (str == null) return "";
                if (!characters && nativeTrim) return nativeTrim.call(str);
                characters = defaultToWhiteSpace(characters);
                return String1(str).replace(new RegExp("^" + characters + "+|" + characters + "+$", "g"), "");
            },
            ltrim: function(str, characters) {
                if (str == null) return "";
                if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
                characters = defaultToWhiteSpace(characters);
                return String1(str).replace(new RegExp("^" + characters + "+"), "");
            },
            rtrim: function(str, characters) {
                if (str == null) return "";
                if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
                characters = defaultToWhiteSpace(characters);
                return String1(str).replace(new RegExp(characters + "+$"), "");
            },
            truncate: function(str, length, truncateStr) {
                if (str == null) return "";
                str = String1(str);
                truncateStr = truncateStr || "...";
                length = ~~length;
                return str.length > length ? str.slice(0, length) + truncateStr : str;
            },
            prune: function(str, length, pruneStr) {
                if (str == null) return "";
                str = String1(str);
                length = ~~length;
                pruneStr = pruneStr != null ? String1(pruneStr) : "...";
                if (str.length <= length) return str;
                var tmpl = function(c) {
                    return c.toUpperCase() !== c.toLowerCase() ? "A" : " ";
                }, template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl);
                if (template.slice(template.length - 2).match(/\w\w/)) template = template.replace(/\s*\S+$/, "");
                else template = _s1.rtrim(template.slice(0, template.length - 1));
                return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;
            },
            words: function(str, delimiter) {
                if (_s1.isBlank(str)) return [];
                return _s1.trim(str, delimiter).split(delimiter || /\s+/);
            },
            pad: function(str, length, padStr, type) {
                str = str == null ? "" : String1(str);
                length = ~~length;
                var padlen = 0;
                if (!padStr) padStr = " ";
                else if (padStr.length > 1) padStr = padStr.charAt(0);
                switch(type){
                    case "right":
                        padlen = length - str.length;
                        return str + strRepeat(padStr, padlen);
                    case "both":
                        padlen = length - str.length;
                        return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));
                    default:
                        padlen = length - str.length;
                        return strRepeat(padStr, padlen) + str;
                }
            },
            lpad: function(str, length, padStr) {
                return _s1.pad(str, length, padStr);
            },
            rpad: function(str, length, padStr) {
                return _s1.pad(str, length, padStr, "right");
            },
            lrpad: function(str, length, padStr) {
                return _s1.pad(str, length, padStr, "both");
            },
            sprintf: sprintf,
            vsprintf: function(fmt, argv) {
                argv.unshift(fmt);
                return sprintf.apply(null, argv);
            },
            toNumber: function(str, decimals) {
                if (!str) return 0;
                str = _s1.trim(str);
                if (!str.match(/^-?\d+(?:\.\d+)?$/)) return NaN;
                return parseNumber(parseNumber(str).toFixed(~~decimals));
            },
            numberFormat: function(number, dec, dsep, tsep) {
                if (isNaN(number) || number == null) return "";
                number = number.toFixed(~~dec);
                tsep = typeof tsep == "string" ? tsep : ",";
                var parts = number.split("."), fnums = parts[0], decimals = parts[1] ? (dsep || ".") + parts[1] : "";
                return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + tsep) + decimals;
            },
            strRight: function(str, sep) {
                if (str == null) return "";
                str = String1(str);
                sep = sep != null ? String1(sep) : sep;
                var pos = !sep ? -1 : str.indexOf(sep);
                return ~pos ? str.slice(pos + sep.length, str.length) : str;
            },
            strRightBack: function(str, sep) {
                if (str == null) return "";
                str = String1(str);
                sep = sep != null ? String1(sep) : sep;
                var pos = !sep ? -1 : str.lastIndexOf(sep);
                return ~pos ? str.slice(pos + sep.length, str.length) : str;
            },
            strLeft: function(str, sep) {
                if (str == null) return "";
                str = String1(str);
                sep = sep != null ? String1(sep) : sep;
                var pos = !sep ? -1 : str.indexOf(sep);
                return ~pos ? str.slice(0, pos) : str;
            },
            strLeftBack: function(str, sep) {
                if (str == null) return "";
                str += "";
                sep = sep != null ? "" + sep : sep;
                var pos = str.lastIndexOf(sep);
                return ~pos ? str.slice(0, pos) : str;
            },
            toSentence: function(array, separator, lastSeparator, serial) {
                separator = separator || ", ";
                lastSeparator = lastSeparator || " and ";
                var a = array.slice(), lastMember = a.pop();
                if (array.length > 2 && serial) lastSeparator = _s1.rtrim(separator) + lastSeparator;
                return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
            },
            toSentenceSerial: function() {
                var args = slice1.call(arguments);
                args[3] = true;
                return _s1.toSentence.apply(_s1, args);
            },
            slugify: function(str) {
                if (str == null) return "";
                var from = "ą\xe0\xe1\xe4\xe2\xe3\xe5\xe6ćę\xe8\xe9\xeb\xea\xec\xed\xef\xeełń\xf2\xf3\xf6\xf4\xf5\xf8\xf9\xfa\xfc\xfb\xf1\xe7żź", to = "aaaaaaaaceeeeeiiiilnoooooouuuunczz", regex = new RegExp(defaultToWhiteSpace(from), "g");
                str = String1(str).toLowerCase().replace(regex, function(c) {
                    var index = from.indexOf(c);
                    return to.charAt(index) || "-";
                });
                return _s1.dasherize(str.replace(/[^\w\s-]/g, ""));
            },
            surround: function(str, wrapper) {
                return [
                    wrapper,
                    str,
                    wrapper
                ].join("");
            },
            quote: function(str) {
                return _s1.surround(str, '"');
            },
            exports: function() {
                var result = {};
                for(var prop in this){
                    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse)$/)) continue;
                    result[prop] = this[prop];
                }
                return result;
            },
            repeat: function(str, qty, separator) {
                if (str == null) return "";
                qty = ~~qty;
                if (separator == null) return strRepeat(String1(str), qty);
                for(var repeat = []; qty > 0; repeat[--qty] = str);
                return repeat.join(separator);
            },
            levenshtein: function(str1, str2) {
                if (str1 == null && str2 == null) return 0;
                if (str1 == null) return String1(str2).length;
                if (str2 == null) return String1(str1).length;
                str1 = String1(str1);
                str2 = String1(str2);
                var current = [], prev, value;
                for(var i = 0; i <= str2.length; i++)for(var j = 0; j <= str1.length; j++){
                    if (i && j) {
                        if (str1.charAt(j - 1) === str2.charAt(i - 1)) value = prev;
                        else value = Math.min(current[j], current[j - 1], prev) + 1;
                    } else value = i + j;
                    prev = current[j];
                    current[j] = value;
                }
                return current.pop();
            }
        };
        _s1.strip = _s1.trim;
        _s1.lstrip = _s1.ltrim;
        _s1.rstrip = _s1.rtrim;
        _s1.center = _s1.lrpad;
        _s1.rjust = _s1.lpad;
        _s1.ljust = _s1.rpad;
        _s1.contains = _s1.include;
        _s1.q = _s1.quote;
        if (typeof exports !== "undefined") {
            if (typeof module1 !== "undefined" && module1.exports) module1.exports = _s1;
            exports._s = _s1;
        }
        if (typeof define === "function" && define.amd) define("underscore.string", [], function() {
            return _s1;
        });
        root._ = root._ || {};
        root._.string = root._.str = _s1;
    }(this, String);
});
/*!
 * Copyright (c) 2012 Andrew Volkov <hello@vol4ok.net>
 */ (function($) {
    _s = require("underscore.string");
    delete _s.VERSION;
    $.ext(_s);
})(Core);
/*!
 * Copyright (c) 2010 Caolan McMahon 
 * Copyright (c) 2012 Andrew Volkov <hello@vol4ok.net>
 */ (function($) {
    var noop = $.noop;
    $.asyncEach = function(object, iterator, callback) {
        callback = callback || noop;
        var i, items = $.isArray(object) ? object : $.values(object), len = items.length, completed = 0;
        if (!len) return callback();
        for(i = 0; i < len; i++)iterator(items[i], function(err) {
            if (err) {
                callback(err);
                callback = noop;
            } else if (++completed === len) callback();
        });
    };
    $.syncEach = function(object, iterator, callback) {
        callback = callback || noop;
        var iterate, items = $.isArray(object) ? object : $.values(object), len = items.length, i = 0;
        (iterate = function() {
            iterator(items[i], function(err) {
                if (err) {
                    callback(err);
                    callback = noop;
                } else if (++i === len) callback();
                else iterate();
            });
        })();
    };
    var asyncMap, syncMap;
    asyncMap = $.asyncMap = function(object, iterator, callback) {
        callback = callback || noop;
        var completed = 0, results = $.isArray(object) ? [] : {};
        if ($.isEmpty(object)) return callback(null, results);
        $.each(object, function(val, key1) {
            completed++;
            iterator(val, function(err, result) {
                if (err) {
                    callback(err, results);
                    callback = noop;
                } else {
                    results[key1] = result;
                    if (--completed === 0) callback(null, results);
                }
            });
        });
    };
    syncMap = $.syncMap = function(object, iterator, callback) {
        callback = callback || noop;
        var iterate, items, len, i = 0, results = $.isArray(object) ? [] : {};
        items = $.map(object, function(val, key1) {
            return {
                key: key1,
                val: val
            };
        });
        len = items.length;
        if (!len) return callback(null, results);
        (iterate = function() {
            iterator(items[i].val, function(err, result) {
                if (err) {
                    callback(err);
                    callback = noop;
                } else {
                    results[items[i].key] = result;
                    if (++i === len) callback(null, results);
                    else iterate();
                }
            });
        })();
    };
    $.parallel = function(tasks, callback) {
        asyncMap(tasks, function(task, callback) {
            task(function(err) {
                var args = $.slice.call(arguments, 1);
                if (args.length <= 1) args = args[0];
                callback.call(null, err, args);
            });
        }, callback);
    };
    $.series = function(tasks, callback) {
        syncMap(tasks, function(task, callback) {
            task(function(err) {
                var args = $.slice.call(arguments, 1);
                if (args.length <= 1) args = args[0];
                callback.call(null, err, args);
            });
        }, callback);
    };
    $.chain = function() {
        var tasks, args = [], error = noop;
        if (arguments.length === 3) {
            args = $.isArray(arguments[0]) ? arguments[0] : [
                arguments[0]
            ];
            tasks = arguments[1];
            error = arguments[2];
        } else if (arguments.length === 2) {
            if ($.isArray(arguments[1])) {
                args = $.isArray(arguments[0]) ? arguments[0] : [
                    arguments[0]
                ];
                tasks = arguments[1];
            } else {
                tasks = arguments[0];
                error = arguments[1];
            }
        } else if (arguments.length === 1) {
            args = [];
            tasks = arguments[0];
            error = noop;
        } else return false;
        var iterate, len, i = 0;
        tasks = $.map(tasks, function(task, key1) {
            return {
                key: key1,
                task: task
            };
        });
        len = tasks.length;
        (iterate = function() {
            if (++i > len) return;
            var args = $.slice.call(arguments);
            try {
                tasks[i - 1].task.apply(this, args.concat([
                    iterate
                ]));
            } catch (err) {
                error(err);
            }
        }).apply(this, args);
    };
})(Core);
(function($) {
    function parseUserAgent(uaStr) {
        var agent = {
            platform: {},
            browser: {},
            engine: {}
        };
        var ua = uaStr, p = agent.platform, b = agent.browser, e = agent.engine;
        // detect platform
        if (/Windows/.test(ua)) {
            p.name = "win";
            p.win = true;
        } else if (/Mac/.test(ua)) {
            p.name = "mac";
            p.mac = true;
        } else if (/Linux/.test(ua)) {
            p.name = "linux";
            p.linux = true;
        } else if (/iPhone|iPod/.test(ua)) {
            p.name = "iphone";
            p.iphone = true;
        } else if (/iPad/.test(ua)) {
            p.name = "ipad";
            p.ipad = true;
        } else if (/Android/.test(ua)) {
            p.name = "android";
            p.android = true;
        } else {
            p.name = "other";
            p.unknown = true;
        }
        // detect browser
        if (/MSIE/.test(ua)) {
            b.name = "msie";
            b.msie = true;
        } else if (/Firefox/.test(ua)) {
            b.name = "firefox";
            b.firefox = true;
        } else if (/Chrome/.test(ua)) {
            b.name = "chrome";
            b.chrome = true;
        } else if (/Safari/.test(ua)) {
            b.name = "safari";
            b.safari = true;
        } else if (/Opera/.test(ua)) {
            b.name = "opera";
            b.opera = true;
        } else {
            b.name = "other";
            b.unknown = true;
        }
        // detect browser version
        if (b.msie) b.version = /MSIE (\d+(\.\d+)*)/.exec(ua)[1];
        else if (b.firefox) b.version = /Firefox\/(\d+(\.\d+)*)/.exec(ua)[1];
        else if (b.chrome) b.version = /Chrome\/(\d+(\.\d+)*)/.exec(ua)[1];
        else if (b.safari) b.version = /Version\/(\d+(\.\d+)*)/.exec(ua)[1];
        else if (b.opera) b.version = /Version\/(\d+(\.\d+)*)/.exec(ua)[1];
        else b.version = 0;
        // detect engine
        if (/Trident/.test(ua) || b.msie) {
            e.name = "trident";
            e.trident = true;
        } else if (/WebKit/.test(ua)) {
            e.name = "webkit";
            e.webkit = true;
        } else if (/Gecko/.test(ua)) {
            e.name = "gecko";
            e.gecko = true;
        } else if (/Presto/.test(ua)) {
            e.name = "presto";
            e.presto = true;
        } else {
            e.name = "other";
            e.unknown = true;
        }
        // detect engine version
        if (e.trident) e.version = /Trident/.test(ua) ? /Trident\/(\d+(\.\d+)*)/.exec(ua)[1] : 0;
        else if (e.gecko) e.version = /rv:(\d+(\.\d+)*)/.exec(ua)[1];
        else if (e.webkit) e.version = /WebKit\/(\d+(\.\d+)*)/.exec(ua)[1];
        else if (e.presto) e.version = /Presto\/(\d+(\.\d+)*)/.exec(ua)[1];
        else e.version = 0;
        return agent;
    }
    $ = $.ext(parseUserAgent(navigator.userAgent));
})(Core);
/*!
 * Copyright (c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * Copyright (c) 2012 Andrew Volkov <hello@vol4ok.net>
 */ (function($) {
    var addListener, removeListener, isArray = $.isArray;
    addListener = function(name, fn) {
        if (!this._events) this._events = {};
        if (!this._events[name]) this._events[name] = fn;
        else if (isArray(this._events[name])) this._events[name].push(fn);
        else this._events[name] = [
            this._events[name],
            fn
        ];
        return this;
    };
    removeListener = function(name, fn) {
        if (this._events && this._events[name]) {
            var list = this._events[name];
            if (isArray(list)) {
                var pos = -1;
                for(var i = 0, l = list.length; i < l; i++)if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                    pos = i;
                    break;
                }
                if (pos < 0) return this;
                list.splice(pos, 1);
                if (!list.length) delete this._events[name];
            } else if (list === fn || list.listener && list.listener === fn) delete this._events[name];
        }
        return this;
    };
    emit = function(name) {
        if (!this._events) return false;
        var handler = this._events[name];
        if (!handler) return false;
        var args = $.slice.call(arguments, 1);
        if ("function" == typeof handler) handler.apply(this, args);
        else if (isArray(handler)) {
            var listeners = handler.slice();
            for(var i = 0, l = listeners.length; i < l; i++)listeners[i].apply(this, args);
        } else return false;
        return true;
    };
    EventEmitter.prototype = {
        on: addListener,
        addListener: addListener,
        off: removeListener,
        removeListener: removeListener,
        emit: emit,
        trigger: emit,
        once: function(name, fn) {
            var self1 = this;
            function on() {
                self1.off(name, on);
                fn.apply(this, arguments);
            }
            on.listener = fn;
            this.on(name, on);
            return this;
        },
        removeAllListeners: function(name) {
            if (name === undefined) {
                this._events = {};
                return this;
            }
            if (this._events && this._events[name]) this._events[name] = null;
            return this;
        },
        listeners: function(name) {
            if (!this._events) this._events = {};
            if (!this._events[name]) this._events[name] = [];
            if (!isArray(this._events[name])) this._events[name] = [
                this._events[name]
            ];
            return this._events[name];
        }
    };
    $.extend($, EventEmitter.prototype);
    $.EventEmitter = EventEmitter;
    function EventEmitter() {}
})(Core);
(function($) {
    var guid_rexp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    $.guid = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
            return v.toString(16);
        }).toUpperCase();
    };
    $.checkGuid = function(id) {
        return guid_rexp.test(id);
    };
    var idCounter = 0;
    $.uniqId = function(prefix) {
        var id = idCounter++;
        return prefix ? prefix + id : id;
    };
    $.noop = function() {};
    $.identity = function(value) {
        return value;
    };
    $.max = function(a, b) {
        if (arguments > 2) {
            var a = arguments, max = -Infinity, i, l = a.length;
            for(i = 0; i < l; i++)if (a[i] > max) max = a[i];
            return max;
        }
        return Math.max(a, b);
    };
    $.min = function(a, b) {
        if (arguments > 2) {
            var a = arguments, min = Infinity, i, l = a.length;
            for(i = 0; i < l; i++)if (a[i] < min) min = a[i];
            return min;
        }
        return Math.min(a, b);
    };
})(Core);
$.ns([
    "bonzo"
], function(module1, exports) {
    (function(name, context, definition) {
        if (typeof module1 != "undefined" && module1.exports) module1.exports = definition();
        else if (typeof context["define"] == "function" && context["define"]["amd"]) define(definition);
        else context[name] = definition();
    })("bonzo", this, function() {
        var win = window, doc = win.document, html = doc.documentElement, parentNode = "parentNode", specialAttributes = /^(checked|value|selected|disabled)$/i, specialTags = /^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i, simpleScriptTagRe = /\s*<script +src=['"]([^'"]+)['"]>/, table = [
            "<table>",
            "</table>",
            1
        ], td = [
            "<table><tbody><tr>",
            "</tr></tbody></table>",
            3
        ], option = [
            "<select>",
            "</select>",
            1
        ], noscope = [
            "_",
            "",
            0,
            1
        ], tagMap = {
            thead: table,
            tbody: table,
            tfoot: table,
            colgroup: table,
            caption: table,
            tr: [
                "<table><tbody>",
                "</tbody></table>",
                2
            ],
            th: td,
            td: td,
            col: [
                "<table><colgroup>",
                "</colgroup></table>",
                2
            ],
            fieldset: [
                "<form>",
                "</form>",
                1
            ],
            legend: [
                "<form><fieldset>",
                "</fieldset></form>",
                2
            ],
            option: option,
            optgroup: option,
            script: noscope,
            style: noscope,
            link: noscope,
            param: noscope,
            base: noscope
        }, stateAttributes = /^(checked|selected|disabled)$/, ie = /msie/i.test(navigator.userAgent), hasClass, addClass, removeClass, uidMap = {}, uuids = 0, digit = /^-?[\d\.]+$/, dattr = /^data-(.+)$/, px = "px", setAttribute = "setAttribute", getAttribute = "getAttribute", byTag = "getElementsByTagName", features = function() {
            var e = doc.createElement("p");
            e.innerHTML = '<a href="#x">x</a><table style="float:left;"></table>';
            return {
                hrefExtended: e[byTag]("a")[0][getAttribute]("href") != "#x",
                autoTbody: e[byTag]("tbody").length !== 0,
                computedStyle: doc.defaultView && doc.defaultView.getComputedStyle,
                cssFloat: e[byTag]("table")[0].style.styleFloat ? "styleFloat" : "cssFloat",
                transform: function() {
                    var props = [
                        "transform",
                        "webkitTransform",
                        "MozTransform",
                        "OTransform",
                        "msTransform"
                    ], i;
                    for(i = 0; i < props.length; i++){
                        if (props[i] in e.style) return props[i];
                    }
                }(),
                classList: "classList" in e,
                opasity: function() {
                    return typeof doc.createElement("a").style.opacity !== "undefined";
                }()
            };
        }(), trimReplace = /(^\s*|\s*$)/g, whitespaceRegex = /\s+/, toString = String.prototype.toString, unitless = {
            lineHeight: 1,
            zoom: 1,
            zIndex: 1,
            opacity: 1,
            boxFlex: 1,
            WebkitBoxFlex: 1,
            MozBoxFlex: 1
        }, query = doc.querySelectorAll && function(selector) {
            return doc.querySelectorAll(selector);
        }, trim = String.prototype.trim ? function(s) {
            return s.trim();
        } : function(s) {
            return s.replace(trimReplace, "");
        };
        function isNode(node) {
            return node && node.nodeName && (node.nodeType == 1 || node.nodeType == 11);
        }
        function normalize(node, host, clone) {
            var i, l, ret;
            if (typeof node == "string") return bonzo.create(node);
            if (isNode(node)) node = [
                node
            ];
            if (clone) {
                ret = [];
                for(i = 0, l = node.length; i < l; i++)ret[i] = cloneNode(host, node[i]);
                return ret;
            }
            return node;
        }
        function classReg(c) {
            return new RegExp("(^|\\s+)" + c + "(\\s+|$)");
        }
        function each(ar, fn, opt_scope, opt_rev) {
            var ind, i = 0, l = ar.length;
            for(; i < l; i++){
                ind = opt_rev ? ar.length - i - 1 : i;
                fn.call(opt_scope || ar[ind], ar[ind], ind, ar);
            }
            return ar;
        }
        function deepEach(ar, fn, opt_scope) {
            for(var i = 0, l = ar.length; i < l; i++)if (isNode(ar[i])) {
                deepEach(ar[i].childNodes, fn, opt_scope);
                fn.call(opt_scope || ar[i], ar[i], i, ar);
            }
            return ar;
        }
        function camelize(s) {
            return s.replace(/-(.)/g, function(m, m1) {
                return m1.toUpperCase();
            });
        }
        function decamelize(s) {
            return s ? s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : s;
        }
        function data(el) {
            el[getAttribute]("data-node-uid") || el[setAttribute]("data-node-uid", ++uuids);
            var uid = el[getAttribute]("data-node-uid");
            return uidMap[uid] || (uidMap[uid] = {});
        }
        function clearData(el) {
            var uid = el[getAttribute]("data-node-uid");
            if (uid) delete uidMap[uid];
        }
        function dataValue(d) {
            var f;
            try {
                return d === null || d === undefined ? undefined : d === "true" ? true : d === "false" ? false : d === "null" ? null : (f = parseFloat(d)) == d ? f : d;
            } catch (e) {}
            return undefined;
        }
        function some(ar, fn, opt_scope) {
            for(var i = 0, j = ar.length; i < j; ++i)if (fn.call(opt_scope || null, ar[i], i, ar)) return true;
            return false;
        }
        function styleProperty(p) {
            p == "transform" && (p = features.transform) || /^transform-?[Oo]rigin$/.test(p) && (p = features.transform + "Origin") || p == "float" && (p = features.cssFloat);
            return p ? camelize(p) : null;
        }
        var getStyle = features.computedStyle ? function(el, property) {
            var value = null, computed = doc.defaultView.getComputedStyle(el, "");
            computed && (value = computed[property]);
            return el.style[property] || value;
        } : ie && html.currentStyle ? function(el, property) {
            if (property == "opacity" && !features.opasity) {
                var val = 100;
                try {
                    val = el["filters"]["DXImageTransform.Microsoft.Alpha"].opacity;
                } catch (e1) {
                    try {
                        val = el["filters"]("alpha").opacity;
                    } catch (e2) {}
                }
                return val / 100;
            }
            var value = el.currentStyle ? el.currentStyle[property] : null;
            return el.style[property] || value;
        } : function(el, property) {
            return el.style[property];
        };
        function insert(target, host, fn, rev) {
            var i = 0, self1 = host || this, r = [], nodes = query && typeof target == "string" && target.charAt(0) != "<" ? query(target) : target;
            each(normalize(nodes), function(t, j) {
                each(self1, function(el) {
                    fn(t, r[i++] = j > 0 ? cloneNode(self1, el) : el);
                }, null, rev);
            }, this, rev);
            self1.length = i;
            each(r, function(e) {
                self1[--i] = e;
            }, null, !rev);
            return self1;
        }
        function xy(el, x, y) {
            var $el = bonzo(el), style = $el.css("position"), offset = $el.offset(), rel = "relative", isRel = style == rel, delta = [
                parseInt($el.css("left"), 10),
                parseInt($el.css("top"), 10)
            ];
            if (style == "static") {
                $el.css("position", rel);
                style = rel;
            }
            isNaN(delta[0]) && (delta[0] = isRel ? 0 : el.offsetLeft);
            isNaN(delta[1]) && (delta[1] = isRel ? 0 : el.offsetTop);
            x != null && (el.style.left = x - offset.left + delta[0] + px);
            y != null && (el.style.top = y - offset.top + delta[1] + px);
        }
        if (features.classList) {
            hasClass = function(el, c) {
                return el.classList.contains(c);
            };
            addClass = function(el, c) {
                el.classList.add(c);
            };
            removeClass = function(el, c) {
                el.classList.remove(c);
            };
        } else {
            hasClass = function(el, c) {
                return classReg(c).test(el.className);
            };
            addClass = function(el, c) {
                el.className = trim(el.className + " " + c);
            };
            removeClass = function(el, c) {
                el.className = trim(el.className.replace(classReg(c), " "));
            };
        }
        function setter(el, v) {
            return typeof v == "function" ? v(el) : v;
        }
        function Bonzo(elements) {
            this.length = 0;
            if (elements) {
                elements = typeof elements !== "string" && !elements.nodeType && typeof elements.length !== "undefined" ? elements : [
                    elements
                ];
                this.length = elements.length;
                for(var i = 0; i < elements.length; i++)this[i] = elements[i];
            }
        }
        Bonzo.prototype = {
            get: function(index) {
                return this[index] || null;
            },
            each: function(fn, opt_scope) {
                return each(this, fn, opt_scope);
            },
            deepEach: function(fn, opt_scope) {
                return deepEach(this, fn, opt_scope);
            },
            map: function(fn, opt_reject) {
                var m = [], n, i;
                for(i = 0; i < this.length; i++){
                    n = fn.call(this, this[i], i);
                    opt_reject ? opt_reject(n) && m.push(n) : m.push(n);
                }
                return m;
            },
            html: function(h, opt_text) {
                var method = opt_text ? html.textContent === undefined ? "innerText" : "textContent" : "innerHTML", that = this, append = function(el, i) {
                    each(normalize(h, that, i), function(node) {
                        el.appendChild(node);
                    });
                }, updateElement = function(el, i) {
                    try {
                        if (opt_text || typeof h == "string" && !specialTags.test(el.tagName)) return el[method] = h;
                    } catch (e) {}
                    append(el, i);
                };
                return typeof h != "undefined" ? this.empty().each(updateElement) : this[0] ? this[0][method] : "";
            },
            text: function(opt_text) {
                return this.html(opt_text, true);
            },
            append: function(node) {
                var that = this;
                return this.each(function(el, i) {
                    each(normalize(node, that, i), function(i) {
                        el.appendChild(i);
                    });
                });
            },
            prepend: function(node) {
                var that = this;
                return this.each(function(el, i) {
                    var first = el.firstChild;
                    each(normalize(node, that, i), function(i) {
                        el.insertBefore(i, first);
                    });
                });
            },
            appendTo: function(target, opt_host) {
                return insert.call(this, target, opt_host, function(t, el) {
                    t.appendChild(el);
                });
            },
            prependTo: function(target, opt_host) {
                return insert.call(this, target, opt_host, function(t, el) {
                    t.insertBefore(el, t.firstChild);
                }, 1);
            },
            before: function(node) {
                var that = this;
                return this.each(function(el, i) {
                    each(normalize(node, that, i), function(i) {
                        el[parentNode].insertBefore(i, el);
                    });
                });
            },
            after: function(node) {
                var that = this;
                return this.each(function(el, i) {
                    each(normalize(node, that, i), function(i) {
                        el[parentNode].insertBefore(i, el.nextSibling);
                    }, null, 1);
                });
            },
            insertBefore: function(target, opt_host) {
                return insert.call(this, target, opt_host, function(t, el) {
                    t[parentNode].insertBefore(el, t);
                });
            },
            insertAfter: function(target, opt_host) {
                return insert.call(this, target, opt_host, function(t, el) {
                    var sibling = t.nextSibling;
                    sibling ? t[parentNode].insertBefore(el, sibling) : t[parentNode].appendChild(el);
                }, 1);
            },
            replaceWith: function(node) {
                bonzo(normalize(node)).insertAfter(this);
                return this.remove();
            },
            addClass: function(c) {
                c = toString.call(c).split(whitespaceRegex);
                return this.each(function(el) {
                    each(c, function(c) {
                        if (c && !hasClass(el, setter(el, c))) addClass(el, setter(el, c));
                    });
                });
            },
            removeClass: function(c) {
                c = toString.call(c).split(whitespaceRegex);
                return this.each(function(el) {
                    each(c, function(c) {
                        if (c && hasClass(el, setter(el, c))) removeClass(el, setter(el, c));
                    });
                });
            },
            hasClass: function(c) {
                c = toString.call(c).split(whitespaceRegex);
                return some(this, function(el) {
                    return some(c, function(c) {
                        return c && hasClass(el, c);
                    });
                });
            },
            toggleClass: function(c, opt_condition) {
                c = toString.call(c).split(whitespaceRegex);
                return this.each(function(el) {
                    each(c, function(c) {
                        if (c) typeof opt_condition !== "undefined" ? opt_condition ? addClass(el, c) : removeClass(el, c) : hasClass(el, c) ? removeClass(el, c) : addClass(el, c);
                    });
                });
            },
            show: function(opt_type) {
                opt_type = typeof opt_type == "string" ? opt_type : "";
                return this.each(function(el) {
                    el.style.display = opt_type;
                });
            },
            hide: function() {
                return this.each(function(el) {
                    el.style.display = "none";
                });
            },
            toggle: function(opt_callback, opt_type) {
                opt_type = typeof opt_type == "string" ? opt_type : "";
                typeof opt_callback != "function" && (opt_callback = null);
                return this.each(function(el) {
                    el.style.display = el.offsetWidth || el.offsetHeight ? "none" : opt_type;
                    opt_callback && opt_callback.call(el);
                });
            },
            first: function() {
                return bonzo(this.length ? this[0] : []);
            },
            last: function() {
                return bonzo(this.length ? this[this.length - 1] : []);
            },
            next: function() {
                return this.related("nextSibling");
            },
            previous: function() {
                return this.related("previousSibling");
            },
            parent: function() {
                return this.related(parentNode);
            },
            related: function(method) {
                return this.map(function(el) {
                    el = el[method];
                    while(el && el.nodeType !== 1)el = el[method];
                    return el || 0;
                }, function(el) {
                    return el;
                });
            },
            focus: function() {
                this.length && this[0].focus();
                return this;
            },
            blur: function() {
                this.length && this[0].blur();
                return this;
            },
            css: function(o, opt_v) {
                var p, iter = o;
                if (opt_v === undefined && typeof o == "string") {
                    opt_v = this[0];
                    if (!opt_v) return null;
                    if (opt_v === doc || opt_v === win) {
                        p = opt_v === doc ? bonzo.doc() : bonzo.viewport();
                        return o == "width" ? p.width : o == "height" ? p.height : "";
                    }
                    return (o = styleProperty(o)) ? getStyle(opt_v, o) : null;
                }
                if (typeof o == "string") {
                    iter = {};
                    iter[o] = opt_v;
                }
                if (ie && iter.opacity) {
                    iter.filter = "alpha(opacity=" + iter.opacity * 100 + ")";
                    iter.zoom = o.zoom || 1;
                    delete iter.opacity;
                }
                function fn(el, p, v) {
                    for(var k in iter)if (iter.hasOwnProperty(k)) {
                        v = iter[k];
                        (p = styleProperty(k)) && digit.test(v) && !(p in unitless) && (v += px);
                        try {
                            el.style[p] = setter(el, v);
                        } catch (e) {}
                    }
                }
                return this.each(fn);
            },
            offset: function(opt_x, opt_y) {
                if (opt_x && typeof opt_x == "object" && (typeof opt_x.top == "number" || typeof opt_x.left == "number")) return this.each(function(el) {
                    xy(el, opt_x.left, opt_x.top);
                });
                else if (typeof opt_x == "number" || typeof opt_y == "number") return this.each(function(el) {
                    xy(el, opt_x, opt_y);
                });
                if (!this[0]) return {
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                };
                var el = this[0], de = el.ownerDocument.documentElement, bcr = el.getBoundingClientRect(), scroll = getWindowScroll(), width = el.offsetWidth, height = el.offsetHeight, top1 = bcr.top + scroll.y - Math.max(0, de && de.clientTop, doc.body.clientTop), left = bcr.left + scroll.x - Math.max(0, de && de.clientLeft, doc.body.clientLeft);
                return {
                    top: top1,
                    left: left,
                    height: height,
                    width: width
                };
            },
            dim: function() {
                if (!this.length) return {
                    height: 0,
                    width: 0
                };
                var el = this[0], de = el.nodeType == 9 && el.documentElement, orig = !de && !!el.style && !el.offsetWidth && !el.offsetHeight ? function(t) {
                    var s = {
                        position: el.style.position || "",
                        visibility: el.style.visibility || "",
                        display: el.style.display || ""
                    };
                    t.first().css({
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    });
                    return s;
                }(this) : null, width = de ? Math.max(el.body.scrollWidth, el.body.offsetWidth, de.scrollWidth, de.offsetWidth, de.clientWidth) : el.offsetWidth, height = de ? Math.max(el.body.scrollHeight, el.body.offsetHeight, de.scrollWidth, de.offsetWidth, de.clientHeight) : el.offsetHeight;
                orig && this.first().css(orig);
                return {
                    height: height,
                    width: width
                };
            },
            attr: function(k, opt_v) {
                var el = this[0];
                if (typeof k != "string" && !(k instanceof String)) {
                    for(var n in k)k.hasOwnProperty(n) && this.attr(n, k[n]);
                    return this;
                }
                return typeof opt_v == "undefined" ? !el ? null : specialAttributes.test(k) ? stateAttributes.test(k) && typeof el[k] == "string" ? true : el[k] : (k == "href" || k == "src") && features.hrefExtended ? el[getAttribute](k, 2) : el[getAttribute](k) : this.each(function(el) {
                    specialAttributes.test(k) ? el[k] = setter(el, opt_v) : el[setAttribute](k, setter(el, opt_v));
                });
            },
            removeAttr: function(k) {
                return this.each(function(el) {
                    stateAttributes.test(k) ? el[k] = false : el.removeAttribute(k);
                });
            },
            val: function(s) {
                return typeof s == "string" ? this.attr("value", s) : this.length ? this[0].value : null;
            },
            data: function(opt_k, opt_v) {
                var el = this[0], o, m;
                if (typeof opt_v === "undefined") {
                    if (!el) return null;
                    o = data(el);
                    if (typeof opt_k === "undefined") {
                        each(el.attributes, function(a) {
                            (m = ("" + a.name).match(dattr)) && (o[camelize(m[1])] = dataValue(a.value));
                        });
                        return o;
                    } else {
                        if (typeof o[opt_k] === "undefined") o[opt_k] = dataValue(this.attr("data-" + decamelize(opt_k)));
                        return o[opt_k];
                    }
                } else return this.each(function(el) {
                    data(el)[opt_k] = opt_v;
                });
            },
            remove: function() {
                this.deepEach(clearData);
                return this.detach();
            },
            empty: function() {
                return this.each(function(el) {
                    deepEach(el.childNodes, clearData);
                    while(el.firstChild)el.removeChild(el.firstChild);
                });
            },
            detach: function() {
                return this.each(function(el) {
                    el[parentNode] && el[parentNode].removeChild(el);
                });
            },
            scrollTop: function(y) {
                return scroll.call(this, null, y, "y");
            },
            scrollLeft: function(x) {
                return scroll.call(this, x, null, "x");
            }
        };
        function cloneNode(host, el) {
            var c = el.cloneNode(true), cloneElems, elElems;
            if (host.$ && typeof host.cloneEvents == "function") {
                host.$(c).cloneEvents(el);
                cloneElems = host.$(c).find("*");
                elElems = host.$(el).find("*");
                for(var i = 0; i < elElems.length; i++)host.$(cloneElems[i]).cloneEvents(elElems[i]);
            }
            return c;
        }
        function scroll(x, y, type) {
            var el = this[0];
            if (!el) return this;
            if (x == null && y == null) return (isBody(el) ? getWindowScroll() : {
                x: el.scrollLeft,
                y: el.scrollTop
            })[type];
            if (isBody(el)) win.scrollTo(x, y);
            else {
                x != null && (el.scrollLeft = x);
                y != null && (el.scrollTop = y);
            }
            return this;
        }
        function isBody(element) {
            return element === win || /^(?:body|html)$/i.test(element.tagName);
        }
        function getWindowScroll() {
            return {
                x: win.pageXOffset || html.scrollLeft,
                y: win.pageYOffset || html.scrollTop
            };
        }
        function createScriptFromHtml(html) {
            var scriptEl = document.createElement("script"), matches = html.match(simpleScriptTagRe);
            scriptEl.src = matches[1];
            return scriptEl;
        }
        function bonzo(els) {
            return new Bonzo(els);
        }
        bonzo.setQueryEngine = function(q) {
            query = q;
            delete bonzo.setQueryEngine;
        };
        bonzo.aug = function(o, target) {
            for(var k in o)o.hasOwnProperty(k) && ((target || Bonzo.prototype)[k] = o[k]);
        };
        bonzo.create = function(node) {
            return typeof node == "string" && node !== "" ? function() {
                if (simpleScriptTagRe.test(node)) return [
                    createScriptFromHtml(node)
                ];
                var tag = node.match(/^\s*<([^\s>]+)/), el = doc.createElement("div"), els = [], p = tag ? tagMap[tag[1].toLowerCase()] : null, dep = p ? p[2] + 1 : 1, ns = p && p[3], pn = parentNode, tb = features.autoTbody && p && p[0] == "<table>" && !/<tbody/i.test(node);
                el.innerHTML = p ? p[0] + node + p[1] : node;
                while(dep--)el = el.firstChild;
                if (ns && el && el.nodeType !== 1) el = el.nextSibling;
                do if ((!tag || el.nodeType == 1) && (!tb || el.tagName.toLowerCase() != "tbody")) els.push(el);
                while (el = el.nextSibling);
                each(els, function(el) {
                    el[pn] && el[pn].removeChild(el);
                });
                return els;
            }() : isNode(node) ? [
                node.cloneNode(true)
            ] : [];
        };
        bonzo.doc = function() {
            var vp = bonzo.viewport();
            return {
                width: Math.max(doc.body.scrollWidth, html.scrollWidth, vp.width),
                height: Math.max(doc.body.scrollHeight, html.scrollHeight, vp.height)
            };
        };
        bonzo.firstChild = function(el) {
            for(var c = el.childNodes, i = 0, j = c && c.length || 0, e; i < j; i++)if (c[i].nodeType === 1) e = c[j = i];
            return e;
        };
        bonzo.viewport = function() {
            return {
                width: ie ? html.clientWidth : self.innerWidth,
                height: ie ? html.clientHeight : self.innerHeight
            };
        };
        bonzo.isAncestor = "compareDocumentPosition" in html ? function(container, element) {
            return (container.compareDocumentPosition(element) & 16) == 16;
        } : "contains" in html ? function(container, element) {
            return container !== element && container.contains(element);
        } : function(container, element) {
            while(element = element[parentNode]){
                if (element === container) return true;
            }
            return false;
        };
        return bonzo;
    });
});
$.ns([
    "bean"
], function(module1, exports) {
    !function(name, context, definition) {
        if (typeof module1 != "undefined" && module1.exports) module1.exports = definition(name, context);
        else if (typeof define == "function" && typeof define.amd == "object") define(definition);
        else context[name] = definition(name, context);
    }("bean", this, function(name, context) {
        var win = window, old = context[name], namespaceRegex = /[^\.]*(?=\..*)\.|.*/, nameRegex = /\..*/, addEvent = "addEventListener", removeEvent = "removeEventListener", doc = document || {}, root = doc.documentElement || {}, W3C_MODEL = root[addEvent], eventSupport = W3C_MODEL ? addEvent : "attachEvent", ONE = {}, slice1 = Array.prototype.slice, str2arr = function(s, d) {
            return s.split(d || " ");
        }, isString = function(o) {
            return typeof o == "string";
        }, isFunction = function(o) {
            return typeof o == "function";
        }, standardNativeEvents = "click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ", w3cNativeEvents = "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ", nativeEvents = function(hash, events, i) {
            for(i = 0; i < events.length; i++)events[i] && (hash[events[i]] = 1);
            return hash;
        }({}, str2arr(standardNativeEvents + (W3C_MODEL ? w3cNativeEvents : ""))), customEvents = function() {
            var isAncestor = "compareDocumentPosition" in root ? function(element, container) {
                return container.compareDocumentPosition && (container.compareDocumentPosition(element) & 16) === 16;
            } : "contains" in root ? function(element, container) {
                container = container.nodeType === 9 || container === window ? root : container;
                return container !== element && container.contains(element);
            } : function(element, container) {
                while(element = element.parentNode)if (element === container) return 1;
                return 0;
            }, check = function(event) {
                var related = event.relatedTarget;
                return !related ? related == null : related !== this && related.prefix !== "xul" && !/document/.test(this.toString()) && !isAncestor(related, this);
            };
            return {
                mouseenter: {
                    base: "mouseover",
                    condition: check
                },
                mouseleave: {
                    base: "mouseout",
                    condition: check
                },
                mousewheel: {
                    base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"
                }
            };
        }(), Event = function() {
            var commonProps = str2arr("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"), mouseProps = commonProps.concat(str2arr("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")), mouseWheelProps = mouseProps.concat(str2arr("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")), keyProps = commonProps.concat(str2arr("char charCode key keyCode keyIdentifier keyLocation location")), textProps = commonProps.concat(str2arr("data")), touchProps = commonProps.concat(str2arr("touches targetTouches changedTouches scale rotation")), messageProps = commonProps.concat(str2arr("data origin source")), stateProps = commonProps.concat(str2arr("state")), overOutRegex = /over|out/, typeFixers = [
                {
                    reg: /key/i,
                    fix: function(event, newEvent) {
                        newEvent.keyCode = event.keyCode || event.which;
                        return keyProps;
                    }
                },
                {
                    reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                    fix: function(event, newEvent, type) {
                        newEvent.rightClick = event.which === 3 || event.button === 2;
                        newEvent.pos = {
                            x: 0,
                            y: 0
                        };
                        if (event.pageX || event.pageY) {
                            newEvent.clientX = event.pageX;
                            newEvent.clientY = event.pageY;
                        } else if (event.clientX || event.clientY) {
                            newEvent.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft;
                            newEvent.clientY = event.clientY + doc.body.scrollTop + root.scrollTop;
                        }
                        if (overOutRegex.test(type)) newEvent.relatedTarget = event.relatedTarget || event[(type == "mouseover" ? "from" : "to") + "Element"];
                        return mouseProps;
                    }
                },
                {
                    reg: /mouse.*(wheel|scroll)/i,
                    fix: function() {
                        return mouseWheelProps;
                    }
                },
                {
                    reg: /^text/i,
                    fix: function() {
                        return textProps;
                    }
                },
                {
                    reg: /^touch|^gesture/i,
                    fix: function() {
                        return touchProps;
                    }
                },
                {
                    reg: /^message$/i,
                    fix: function() {
                        return messageProps;
                    }
                },
                {
                    reg: /^popstate$/i,
                    fix: function() {
                        return stateProps;
                    }
                },
                {
                    reg: /.*/,
                    fix: function() {
                        return commonProps;
                    }
                }
            ], typeFixerMap = {}, Event = function(event, element, isNative) {
                if (!arguments.length) return;
                event = event || ((element.ownerDocument || element.document || element).parentWindow || win).event;
                this.originalEvent = event;
                this.isNative = isNative;
                this.isBean = true;
                if (!event) return;
                var type = event.type, target = event.target || event.srcElement, i, l, p, props, fixer;
                this.target = target && target.nodeType === 3 ? target.parentNode : target;
                if (isNative) {
                    fixer = typeFixerMap[type];
                    if (!fixer) {
                        for(i = 0, l = typeFixers.length; i < l; i++)if (typeFixers[i].reg.test(type)) {
                            typeFixerMap[type] = fixer = typeFixers[i].fix;
                            break;
                        }
                    }
                    props = fixer(event, this, type);
                    for(i = props.length; i--;)if (!((p = props[i]) in this) && p in event) this[p] = event[p];
                }
            };
            Event.prototype.preventDefault = function() {
                if (this.originalEvent.preventDefault) this.originalEvent.preventDefault();
                else this.originalEvent.returnValue = false;
            };
            Event.prototype.stopPropagation = function() {
                if (this.originalEvent.stopPropagation) this.originalEvent.stopPropagation();
                else this.originalEvent.cancelBubble = true;
            };
            Event.prototype.stop = function() {
                this.preventDefault();
                this.stopPropagation();
                this.stopped = true;
            };
            Event.prototype.stopImmediatePropagation = function() {
                if (this.originalEvent.stopImmediatePropagation) this.originalEvent.stopImmediatePropagation();
                this.isImmediatePropagationStopped = function() {
                    return true;
                };
            };
            Event.prototype.isImmediatePropagationStopped = function() {
                return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped();
            };
            Event.prototype.clone = function(currentTarget) {
                var ne = new Event(this, this.element, this.isNative);
                ne.currentTarget = currentTarget;
                return ne;
            };
            return Event;
        }(), targetElement = function(element, isNative) {
            return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element;
        }, RegEntry = function() {
            var wrappedHandler = function(element, fn, condition, args) {
                var call = function(event, eargs) {
                    return fn.apply(element, args ? slice1.call(eargs, event ? 0 : 1).concat(args) : eargs);
                }, findTarget = function(event, eventElement) {
                    return fn.__beanDel ? fn.__beanDel.ft(event.target, element) : eventElement;
                }, handler = condition ? function(event) {
                    var target = findTarget(event, this);
                    if (condition.apply(target, arguments)) {
                        if (event) event.currentTarget = target;
                        return call(event, arguments);
                    }
                } : function(event) {
                    if (fn.__beanDel) event = event.clone(findTarget(event));
                    return call(event, arguments);
                };
                handler.__beanDel = fn.__beanDel;
                return handler;
            }, RegEntry = function(element, type, handler, original, namespaces, args, root) {
                var customType = customEvents[type], isNative;
                if (type == "unload") handler = once(removeListener, element, type, handler, original);
                if (customType) {
                    if (customType.condition) handler = wrappedHandler(element, handler, customType.condition, args);
                    type = customType.base || type;
                }
                this.isNative = isNative = nativeEvents[type] && !!element[eventSupport];
                this.customType = !W3C_MODEL && !isNative && type;
                this.element = element;
                this.type = type;
                this.original = original;
                this.namespaces = namespaces;
                this.eventType = W3C_MODEL || isNative ? type : "propertychange";
                this.target = targetElement(element, isNative);
                this[eventSupport] = !!this.target[eventSupport];
                this.root = root;
                this.handler = wrappedHandler(element, handler, null, args);
            };
            RegEntry.prototype.inNamespaces = function(checkNamespaces) {
                var i, j, c = 0;
                if (!checkNamespaces) return true;
                if (!this.namespaces) return false;
                for(i = checkNamespaces.length; i--;){
                    for(j = this.namespaces.length; j--;)if (checkNamespaces[i] == this.namespaces[j]) c++;
                }
                return checkNamespaces.length === c;
            };
            RegEntry.prototype.matches = function(checkElement, checkOriginal, checkHandler) {
                return this.element === checkElement && (!checkOriginal || this.original === checkOriginal) && (!checkHandler || this.handler === checkHandler);
            };
            return RegEntry;
        }(), registry = function() {
            var map = {}, forAll = function(element, type, original, handler, root, fn) {
                var pfx = root ? "r" : "$";
                if (!type || type == "*") {
                    for(var t in map)if (t.charAt(0) == pfx) forAll(element, t.substr(1), original, handler, root, fn);
                } else {
                    var i = 0, l, list = map[pfx + type], all = element == "*";
                    if (!list) return;
                    for(l = list.length; i < l; i++){
                        if ((all || list[i].matches(element, original, handler)) && !fn(list[i], list, i, type)) return;
                    }
                }
            }, has = function(element, type, original, root) {
                var i, list = map[(root ? "r" : "$") + type];
                if (list) for(i = list.length; i--;){
                    if (!list[i].root && list[i].matches(element, original, null)) return true;
                }
                return false;
            }, get = function(element, type, original, root) {
                var entries = [];
                forAll(element, type, original, null, root, function(entry) {
                    return entries.push(entry);
                });
                return entries;
            }, put = function(entry) {
                var has = !entry.root && !this.has(entry.element, entry.type, null, false), key1 = (entry.root ? "r" : "$") + entry.type;
                (map[key1] || (map[key1] = [])).push(entry);
                return has;
            }, del = function(entry) {
                forAll(entry.element, entry.type, null, entry.handler, entry.root, function(entry, list, i) {
                    list.splice(i, 1);
                    entry.removed = true;
                    if (list.length === 0) delete map[(entry.root ? "r" : "$") + entry.type];
                    return false;
                });
            }, entries = function() {
                var t, entries = [];
                for(t in map)if (t.charAt(0) == "$") entries = entries.concat(map[t]);
                return entries;
            };
            return {
                has: has,
                get: get,
                put: put,
                del: del,
                entries: entries
            };
        }(), selectorEngine, setSelectorEngine = function(e) {
            if (!arguments.length) selectorEngine = doc.querySelectorAll ? function(s, r) {
                return r.querySelectorAll(s);
            } : function() {
                throw new Error("Bean: No selector engine installed");
            };
            else selectorEngine = e;
        }, rootListener = function(event, type) {
            if (!W3C_MODEL && type && event && event.propertyName != "_on" + type) return;
            var listeners = registry.get(this, type || event.type, null, false), l = listeners.length, i = 0;
            event = new Event(event, this, true);
            if (type) event.type = type;
            for(; i < l && !event.isImmediatePropagationStopped(); i++)if (!listeners[i].removed) listeners[i].handler.call(this, event);
        }, listener = W3C_MODEL ? function(element, type, add) {
            element[add ? addEvent : removeEvent](type, rootListener, false);
        } : function(element, type, add, custom) {
            var entry;
            if (add) {
                registry.put(entry = new RegEntry(element, custom || type, function(event) {
                    rootListener.call(element, event, custom);
                }, rootListener, null, null, true));
                if (custom && element["_on" + custom] == null) element["_on" + custom] = 0;
                entry.target.attachEvent("on" + entry.eventType, entry.handler);
            } else {
                entry = registry.get(element, custom || type, rootListener, true)[0];
                if (entry) {
                    entry.target.detachEvent("on" + entry.eventType, entry.handler);
                    registry.del(entry);
                }
            }
        }, once = function(rm, element, type, fn, originalFn) {
            return function() {
                fn.apply(this, arguments);
                rm(element, type, originalFn);
            };
        }, removeListener = function(element, orgType, handler, namespaces) {
            var type = orgType && orgType.replace(nameRegex, ""), handlers = registry.get(element, type, null, false), removed = {}, i, l;
            for(i = 0, l = handlers.length; i < l; i++)if ((!handler || handlers[i].original === handler) && handlers[i].inNamespaces(namespaces)) {
                registry.del(handlers[i]);
                if (!removed[handlers[i].eventType] && handlers[i][eventSupport]) removed[handlers[i].eventType] = {
                    t: handlers[i].eventType,
                    c: handlers[i].type
                };
            }
            for(i in removed)if (!registry.has(element, removed[i].t, null, false)) listener(element, removed[i].t, false, removed[i].c);
        }, delegate = function(selector, fn) {
            var findTarget = function(target, root) {
                var i, array = isString(selector) ? selectorEngine(selector, root) : selector;
                for(; target && target !== root; target = target.parentNode)for(i = array.length; i--;){
                    if (array[i] === target) return target;
                }
            }, handler = function(e) {
                var match = findTarget(e.target, this);
                if (match) fn.apply(match, arguments);
            };
            handler.__beanDel = {
                ft: findTarget,
                selector: selector
            };
            return handler;
        }, fireListener = W3C_MODEL ? function(isNative, type, element) {
            var evt = doc.createEvent(isNative ? "HTMLEvents" : "UIEvents");
            evt[isNative ? "initEvent" : "initUIEvent"](type, true, true, win, 1);
            element.dispatchEvent(evt);
        } : function(isNative, type, element) {
            element = targetElement(element, isNative);
            isNative ? element.fireEvent("on" + type, doc.createEventObject()) : element["_on" + type]++;
        }, off = function(element, typeSpec, fn) {
            var isTypeStr = isString(typeSpec), k, type, namespaces, i;
            if (isTypeStr && typeSpec.indexOf(" ") > 0) {
                typeSpec = str2arr(typeSpec);
                for(i = typeSpec.length; i--;)off(element, typeSpec[i], fn);
                return element;
            }
            type = isTypeStr && typeSpec.replace(nameRegex, "");
            if (type && customEvents[type]) type = customEvents[type].base;
            if (!typeSpec || isTypeStr) {
                if (namespaces = isTypeStr && typeSpec.replace(namespaceRegex, "")) namespaces = str2arr(namespaces, ".");
                removeListener(element, type, fn, namespaces);
            } else if (isFunction(typeSpec)) removeListener(element, null, typeSpec);
            else {
                for(k in typeSpec)if (typeSpec.hasOwnProperty(k)) off(element, k, typeSpec[k]);
            }
            return element;
        }, on = function(element, events, selector, fn) {
            var originalFn, type, types, i, args, entry, first;
            if (selector === undefined && typeof events == "object") {
                for(type in events)if (events.hasOwnProperty(type)) on.call(this, element, type, events[type]);
                return;
            }
            if (!isFunction(selector)) {
                originalFn = fn;
                args = slice1.call(arguments, 4);
                fn = delegate(selector, originalFn, selectorEngine);
            } else {
                args = slice1.call(arguments, 3);
                fn = originalFn = selector;
            }
            types = str2arr(events);
            if (this === ONE) fn = once(off, element, events, fn, originalFn);
            for(i = types.length; i--;){
                first = registry.put(entry = new RegEntry(element, types[i].replace(nameRegex, ""), fn, originalFn, str2arr(types[i].replace(namespaceRegex, ""), "."), args, false));
                if (entry[eventSupport] && first) listener(element, entry.eventType, true, entry.customType);
            }
            return element;
        }, add = function(element, events, fn, delfn) {
            return on.apply(null, !isString(fn) ? slice1.call(arguments) : [
                element,
                fn,
                events,
                delfn
            ].concat(arguments.length > 3 ? slice1.call(arguments, 5) : []));
        }, one = function() {
            return on.apply(ONE, arguments);
        }, fire = function(element, type, args) {
            var types = str2arr(type), i, j, l, names, handlers;
            for(i = types.length; i--;){
                type = types[i].replace(nameRegex, "");
                if (names = types[i].replace(namespaceRegex, "")) names = str2arr(names, ".");
                if (!names && !args && element[eventSupport]) fireListener(nativeEvents[type], type, element);
                else {
                    handlers = registry.get(element, type, null, false);
                    args = [
                        false
                    ].concat(args);
                    for(j = 0, l = handlers.length; j < l; j++)if (handlers[j].inNamespaces(names)) handlers[j].handler.apply(element, args);
                }
            }
            return element;
        }, clone = function(element, from, type) {
            var handlers = registry.get(from, type, null, false), l = handlers.length, i = 0, args, beanDel;
            for(; i < l; i++)if (handlers[i].original) {
                args = [
                    element,
                    handlers[i].type
                ];
                if (beanDel = handlers[i].handler.__beanDel) args.push(beanDel.selector);
                args.push(handlers[i].original);
                on.apply(null, args);
            }
            return element;
        }, bean = {
            on: on,
            add: add,
            one: one,
            off: off,
            remove: off,
            clone: clone,
            fire: fire,
            setSelectorEngine: setSelectorEngine,
            noConflict: function() {
                context[name] = old;
                return this;
            }
        };
        if (win.attachEvent) {
            var cleanup = function() {
                var i, entries = registry.entries();
                for(i in entries)if (entries[i].type && entries[i].type !== "unload") off(entries[i].element, entries[i].type);
                win.detachEvent("onunload", cleanup);
                win.CollectGarbage && win.CollectGarbage();
            };
            win.attachEvent("onunload", cleanup);
        }
        setSelectorEngine();
        return bean;
    });
});
$.ns([
    "qwery"
], function(module1, exports) {
    (function(name, context, definition) {
        if (typeof module1 != "undefined" && module1.exports) module1.exports = definition();
        else if (typeof context["define"] == "function" && context["define"]["amd"]) define(definition);
        else context[name] = definition();
    })("qwery", this, function() {
        var doc = document, html = doc.documentElement, byClass = "getElementsByClassName", byTag = "getElementsByTagName", qSA = "querySelectorAll", useNativeQSA = "useNativeQSA", tagName = "tagName", nodeType = "nodeType", select, id = /#([\w\-]+)/, clas = /\.[\w\-]+/g, idOnly = /^#([\w\-]+)$/, classOnly = /^\.([\w\-]+)$/, tagOnly = /^([\w\-]+)$/, tagAndOrClass = /^([\w]+)?\.([\w\-]+)$/, splittable = /(^|,)\s*[>~+]/, normalizr = /^\s+|\s*([,\s\+\~>]|$)\s*/g, splitters = /[\s\>\+\~]/, splittersMore = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/, specialChars = /([.*+?\^=!:${}()|\[\]\/\\])/g, simple = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/, attr = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/, pseudo = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/, easy = new RegExp(idOnly.source + "|" + tagOnly.source + "|" + classOnly.source), dividers = new RegExp("(" + splitters.source + ")" + splittersMore.source, "g"), tokenizr = new RegExp(splitters.source + splittersMore.source), chunker = new RegExp(simple.source + "(" + attr.source + ")?" + "(" + pseudo.source + ")?");
        var walker = {
            " ": function(node) {
                return node && node !== html && node.parentNode;
            },
            ">": function(node, contestant) {
                return node && node.parentNode == contestant.parentNode && node.parentNode;
            },
            "~": function(node) {
                return node && node.previousSibling;
            },
            "+": function(node, contestant, p1, p2) {
                if (!node) return false;
                return (p1 = previous(node)) && (p2 = previous(contestant)) && p1 == p2 && p1;
            }
        };
        function cache() {
            this.c = {};
        }
        cache.prototype = {
            g: function(k) {
                return this.c[k] || undefined;
            },
            s: function(k, v, r) {
                v = r ? new RegExp(v) : v;
                return this.c[k] = v;
            }
        };
        var classCache = new cache(), cleanCache = new cache(), attrCache = new cache(), tokenCache = new cache();
        function classRegex(c) {
            return classCache.g(c) || classCache.s(c, "(^|\\s+)" + c + "(\\s+|$)", 1);
        }
        function each(a, fn) {
            var i = 0, l = a.length;
            for(; i < l; i++)fn(a[i]);
        }
        function flatten(ar) {
            for(var r = [], i = 0, l = ar.length; i < l; ++i)arrayLike(ar[i]) ? r = r.concat(ar[i]) : r[r.length] = ar[i];
            return r;
        }
        function arrayify(ar) {
            var i = 0, l = ar.length, r = [];
            for(; i < l; i++)r[i] = ar[i];
            return r;
        }
        function previous(n) {
            while(n = n.previousSibling)if (n[nodeType] == 1) break;
            return n;
        }
        function q(query) {
            return query.match(chunker);
        }
        function interpret(whole, tag, idsAndClasses, wholeAttribute, attribute, qualifier, value, wholePseudo, pseudo, wholePseudoVal, pseudoVal) {
            var i, m, k, o, classes;
            if (this[nodeType] !== 1) return false;
            if (tag && tag !== "*" && this[tagName] && this[tagName].toLowerCase() !== tag) return false;
            if (idsAndClasses && (m = idsAndClasses.match(id)) && m[1] !== this.id) return false;
            if (idsAndClasses && (classes = idsAndClasses.match(clas))) {
                for(i = classes.length; i--;)if (!classRegex(classes[i].slice(1)).test(this.className)) return false;
            }
            if (pseudo && qwery.pseudos[pseudo] && !qwery.pseudos[pseudo](this, pseudoVal)) return false;
            if (wholeAttribute && !value) {
                o = this.attributes;
                for(k in o){
                    if (Object.prototype.hasOwnProperty.call(o, k) && (o[k].name || k) == attribute) return this;
                }
            }
            if (wholeAttribute && !checkAttr(qualifier, getAttr(this, attribute) || "", value)) return false;
            return this;
        }
        function clean(s) {
            return cleanCache.g(s) || cleanCache.s(s, s.replace(specialChars, "\\$1"));
        }
        function checkAttr(qualify, actual, val) {
            switch(qualify){
                case "=":
                    return actual == val;
                case "^=":
                    return actual.match(attrCache.g("^=" + val) || attrCache.s("^=" + val, "^" + clean(val), 1));
                case "$=":
                    return actual.match(attrCache.g("$=" + val) || attrCache.s("$=" + val, clean(val) + "$", 1));
                case "*=":
                    return actual.match(attrCache.g(val) || attrCache.s(val, clean(val), 1));
                case "~=":
                    return actual.match(attrCache.g("~=" + val) || attrCache.s("~=" + val, "(?:^|\\s+)" + clean(val) + "(?:\\s+|$)", 1));
                case "|=":
                    return actual.match(attrCache.g("|=" + val) || attrCache.s("|=" + val, "^" + clean(val) + "(-|$)", 1));
            }
            return 0;
        }
        function _qwery(selector, _root) {
            var r = [], ret = [], i, l, m, token, tag, els, intr, item, root = _root, tokens = tokenCache.g(selector) || tokenCache.s(selector, selector.split(tokenizr)), dividedTokens = selector.match(dividers);
            if (!tokens.length) return r;
            token = (tokens = tokens.slice(0)).pop();
            if (tokens.length && (m = tokens[tokens.length - 1].match(idOnly))) root = byId(_root, m[1]);
            if (!root) return r;
            intr = q(token);
            els = root !== _root && root[nodeType] !== 9 && dividedTokens && /^[+~]$/.test(dividedTokens[dividedTokens.length - 1]) ? function(r) {
                while(root = root.nextSibling)root[nodeType] == 1 && (intr[1] ? intr[1] == root[tagName].toLowerCase() : 1) && (r[r.length] = root);
                return r;
            }([]) : root[byTag](intr[1] || "*");
            for(i = 0, l = els.length; i < l; i++)if (item = interpret.apply(els[i], intr)) r[r.length] = item;
            if (!tokens.length) return r;
            each(r, function(e) {
                if (ancestorMatch(e, tokens, dividedTokens)) ret[ret.length] = e;
            });
            return ret;
        }
        function is(el, selector, root) {
            if (isNode(selector)) return el == selector;
            if (arrayLike(selector)) return !!~flatten(selector).indexOf(el);
            var selectors = selector.split(","), tokens, dividedTokens;
            while(selector = selectors.pop()){
                tokens = tokenCache.g(selector) || tokenCache.s(selector, selector.split(tokenizr));
                dividedTokens = selector.match(dividers);
                tokens = tokens.slice(0);
                if (interpret.apply(el, q(tokens.pop())) && (!tokens.length || ancestorMatch(el, tokens, dividedTokens, root))) return true;
            }
            return false;
        }
        function ancestorMatch(el, tokens, dividedTokens, root) {
            var cand;
            function crawl(e, i, p) {
                while(p = walker[dividedTokens[i]](p, e))if (isNode(p) && interpret.apply(p, q(tokens[i]))) {
                    if (i) {
                        if (cand = crawl(p, i - 1, p)) return cand;
                    } else return p;
                }
            }
            return (cand = crawl(el, tokens.length - 1, el)) && (!root || isAncestor(cand, root));
        }
        function isNode(el, t) {
            return el && typeof el === "object" && (t = el[nodeType]) && (t == 1 || t == 9);
        }
        function uniq(ar) {
            var a = [], i, j;
            o: for(i = 0; i < ar.length; ++i){
                for(j = 0; j < a.length; ++j)if (a[j] == ar[i]) continue o;
                a[a.length] = ar[i];
            }
            return a;
        }
        function arrayLike(o) {
            return typeof o === "object" && isFinite(o.length);
        }
        function normalizeRoot(root) {
            if (!root) return doc;
            if (typeof root == "string") return qwery(root)[0];
            if (!root[nodeType] && arrayLike(root)) return root[0];
            return root;
        }
        function byId(root, id, el) {
            return root[nodeType] === 9 ? root.getElementById(id) : root.ownerDocument && ((el = root.ownerDocument.getElementById(id)) && isAncestor(el, root) && el || !isAncestor(root, root.ownerDocument) && select('[id="' + id + '"]', root)[0]);
        }
        function qwery(selector, _root) {
            var m, el, root = normalizeRoot(_root);
            if (!root || !selector) return [];
            if (selector === window || isNode(selector)) return !_root || selector !== window && isNode(root) && isAncestor(selector, root) ? [
                selector
            ] : [];
            if (selector && arrayLike(selector)) return flatten(selector);
            if (m = selector.match(easy)) {
                if (m[1]) return (el = byId(root, m[1])) ? [
                    el
                ] : [];
                if (m[2]) return arrayify(root[byTag](m[2]));
                if (hasByClass && m[3]) return arrayify(root[byClass](m[3]));
            }
            return select(selector, root);
        }
        function collectSelector(root, collector) {
            return function(s) {
                var oid, nid;
                if (splittable.test(s)) {
                    if (root[nodeType] !== 9) {
                        if (!(nid = oid = root.getAttribute("id"))) root.setAttribute("id", nid = "__qwerymeupscotty");
                        s = '[id="' + nid + '"]' + s;
                        collector(root.parentNode || root, s, true);
                        oid || root.removeAttribute("id");
                    }
                    return;
                }
                s.length && collector(root, s, false);
            };
        }
        var isAncestor = "compareDocumentPosition" in html ? function(element, container) {
            return (container.compareDocumentPosition(element) & 16) == 16;
        } : "contains" in html ? function(element, container) {
            container = container[nodeType] === 9 || container == window ? html : container;
            return container !== element && container.contains(element);
        } : function(element, container) {
            while(element = element.parentNode)if (element === container) return 1;
            return 0;
        }, getAttr = function() {
            var e = doc.createElement("p");
            return (e.innerHTML = '<a href="#x">x</a>', e.firstChild.getAttribute("href") != "#x") ? function(e, a) {
                return a === "class" ? e.className : a === "href" || a === "src" ? e.getAttribute(a, 2) : e.getAttribute(a);
            } : function(e, a) {
                return e.getAttribute(a);
            };
        }(), hasByClass = !!doc[byClass], hasQSA = doc.querySelector && doc[qSA], selectQSA = function(selector, root) {
            var result = [], ss, e;
            try {
                if (root[nodeType] === 9 || !splittable.test(selector)) return arrayify(root[qSA](selector));
                each(ss = selector.split(","), collectSelector(root, function(ctx, s) {
                    e = ctx[qSA](s);
                    if (e.length == 1) result[result.length] = e.item(0);
                    else if (e.length) result = result.concat(arrayify(e));
                }));
                return ss.length > 1 && result.length > 1 ? uniq(result) : result;
            } catch (ex) {}
            return selectNonNative(selector, root);
        }, selectNonNative = function(selector, root) {
            var result = [], items, m, i, l, r, ss;
            selector = selector.replace(normalizr, "$1");
            if (m = selector.match(tagAndOrClass)) {
                r = classRegex(m[2]);
                items = root[byTag](m[1] || "*");
                for(i = 0, l = items.length; i < l; i++)if (r.test(items[i].className)) result[result.length] = items[i];
                return result;
            }
            each(ss = selector.split(","), collectSelector(root, function(ctx, s, rewrite) {
                r = _qwery(s, ctx);
                for(i = 0, l = r.length; i < l; i++)if (ctx[nodeType] === 9 || rewrite || isAncestor(r[i], root)) result[result.length] = r[i];
            }));
            return ss.length > 1 && result.length > 1 ? uniq(result) : result;
        }, configure = function(options) {
            if (typeof options[useNativeQSA] !== "undefined") select = !options[useNativeQSA] ? selectNonNative : hasQSA ? selectQSA : selectNonNative;
        };
        configure({
            useNativeQSA: true
        });
        qwery.configure = configure;
        qwery.uniq = uniq;
        qwery.is = is;
        qwery.pseudos = {};
        return qwery;
    });
});
$.ns([
    "ready"
], function(module1, exports) {
    !function(name, definition) {
        if (typeof module1 != "undefined") module1.exports = definition();
        else if (typeof define == "function" && typeof define.amd == "object") define(definition);
        else this[name] = definition();
    }("domready", function(ready) {
        var fns = [], fn, f = false, doc = document, testEl = doc.documentElement, hack = testEl.doScroll, domContentLoaded = "DOMContentLoaded", addEventListener = "addEventListener", onreadystatechange = "onreadystatechange", readyState = "readyState", loaded = /^loade|c/.test(doc[readyState]);
        function flush(f) {
            loaded = 1;
            while(f = fns.shift())f();
        }
        doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function() {
            doc.removeEventListener(domContentLoaded, fn, f);
            flush();
        }, f);
        hack && doc.attachEvent(onreadystatechange, fn = function() {
            if (/^c/.test(doc[readyState])) {
                doc.detachEvent(onreadystatechange, fn);
                flush();
            }
        });
        return ready = hack ? function(fn) {
            self != top ? loaded ? fn() : fns.push(fn) : function() {
                try {
                    testEl.doScroll("left");
                } catch (e) {
                    return setTimeout(function() {
                        ready(fn);
                    }, 50);
                }
                fn();
            }();
        } : function(fn) {
            loaded ? fn() : fns.push(fn);
        };
    });
});
/*!
 * Copyright (c) 2010-2012, Thomas Fuchs
 * Copyright (c) 2011, John Resig
 * Copyright (c) 2012, Andrew Volkov <hello@vol4ok.net>
 */ (function($) {
    var qwery = require("qwery");
    var bonzo = require("bonzo");
    var ready = require("ready");
    var bean = require("bean");
    var fragmentRE = /^\s*</, elementTypes = [
        1,
        9,
        11
    ]; //ELEMENT_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE;
    function indexOf(ar, val) {
        for(var i = 0; i < ar.length; i++)if (ar[i] === val) return i;
        return -1;
    }
    function uniq(ar) {
        var r = [], i = 0, j = 0, k, item, inIt;
        for(; item = ar[i]; ++i){
            inIt = false;
            for(k = 0; k < r.length; ++k)if (r[k] === item) {
                inIt = true;
                break;
            }
            if (!inIt) r[j++] = item;
        }
        return r;
    }
    function dimension(type, opt_v) {
        return typeof opt_v == "undefined" ? bonzo(this).dim()[type] : this.css(type, opt_v);
    }
    Dom.fn = $.extend({}, bonzo(), {
        parents: function(selector, closest) {
            if (!this.length) return this;
            var collection = $(selector), j, k, p, r = [];
            for(j = 0, k = this.length; j < k; j++){
                p = this[j];
                while(p = p.parentNode)if (~indexOf(collection, p)) {
                    r.push(p);
                    if (closest) break;
                }
            }
            return $(uniq(r));
        },
        parent: function() {
            return $(uniq(bonzo(this).parent()));
        },
        closest: function(selector) {
            return this.parents(selector, true);
        },
        first: function() {
            return $(this.length ? this[0] : this);
        },
        last: function() {
            return $(this.length ? this[this.length - 1] : []);
        },
        next: function() {
            return $(bonzo(this).next());
        },
        previous: function() {
            return $(bonzo(this).previous());
        },
        appendTo: function(t) {
            return bonzo(this.selector).appendTo(t, this);
        },
        prependTo: function(t) {
            return bonzo(this.selector).prependTo(t, this);
        },
        insertAfter: function(t) {
            return bonzo(this.selector).insertAfter(t, this);
        },
        insertBefore: function(t) {
            return bonzo(this.selector).insertBefore(t, this);
        },
        replaceWith: function(t) {
            return bonzo(this.selector).replaceWith(t, this);
        },
        siblings: function() {
            var i, l, p, r = [];
            for(i = 0, l = this.length; i < l; i++){
                p = this[i];
                while(p = p.previousSibling)p.nodeType == 1 && r.push(p);
                p = this[i];
                while(p = p.nextSibling)p.nodeType == 1 && r.push(p);
            }
            return $(r);
        },
        children: function() {
            var i, l, el, r = [];
            for(i = 0, l = this.length; i < l; i++){
                if (!(el = bonzo.firstChild(this[i]))) continue;
                r.push(el);
                while(el = el.nextSibling)el.nodeType == 1 && r.push(el);
            }
            return $(uniq(r));
        },
        height: function(v) {
            return dimension.call(this, "height", v);
        },
        width: function(v) {
            return dimension.call(this, "width", v);
        },
        find: function(s) {
            var r = [], i, l, j, k, els;
            for(i = 0, l = this.length; i < l; i++){
                els = qwery(s, this[i]);
                for(j = 0, k = els.length; j < k; j++)r.push(els[j]);
            }
            return $(qwery.uniq(r));
        },
        and: function(s) {
            var plus = $(s);
            for(var i = this.length, j = 0, l = this.length + plus.length; i < l; i++, j++)this[i] = plus[j];
            this.length += plus.length;
            return this;
        },
        is: function(s, r) {
            var i, l;
            for(i = 0, l = this.length; i < l; i++){
                if (qwery.is(this[i], s, r)) return true;
            }
            return false;
        }
    });
    var integrate = function(method, type, method2) {
        var _args = type ? [
            type
        ] : [];
        return function() {
            for(var i = 0, l = this.length; i < l; i++){
                if (!arguments.length && method == "add" && type) method = "fire";
                bean[method].apply(this, [
                    this[i]
                ].concat(_args, Array.prototype.slice.call(arguments, 0)));
            }
            return this;
        };
    }, add = integrate("add"), remove = integrate("remove"), fire = integrate("fire"), methods = {
        on: add // NOTE: .on() is likely to change in the near future, don't rely on this as-is see https://github.com/fat/bean/issues/55
        ,
        addListener: add,
        bind: add,
        listen: add,
        delegate: add,
        one: integrate("one"),
        off: remove,
        unbind: remove,
        unlisten: remove,
        removeListener: remove,
        undelegate: remove,
        emit: fire,
        trigger: fire,
        cloneEvents: integrate("clone"),
        hover: function(enter, leave, i) {
            for(i = this.length; i--;){
                bean.add.call(this, this[i], "mouseenter", enter);
                bean.add.call(this, this[i], "mouseleave", leave);
            }
            return this;
        }
    }, shortcuts = "blur change click dblclick error focus focusin focusout keydown keypress keyup load mousedown mouseenter mouseleave mouseout mouseover mouseup mousemove resize scroll select submit unload".split(" ");
    for(var i = shortcuts.length; i--;)methods[shortcuts[i]] = integrate("add", shortcuts[i]);
    Dom.fn = $.extend(Dom.fn, methods);
    $.domReady = ready;
    Dom.fn = $.extend(Dom.fn, {
        ready: function(f) {
            ready(f);
            return this;
        }
    });
    Dom.$ = function(selector, context) {
        if (!selector) return Dom();
        if (context !== undefined) return Dom(qwery(selector, context), selector);
        else if ($.isFunction(selector)) return ready(selector);
        else if (selector instanceof Dom) return selector;
        else {
            var dom;
            if ($.isArray(selector)) dom = $.compact(selector);
            else if (elementTypes.indexOf(selector.nodeType) >= 0 || selector === window) dom = [
                selector
            ], selector = null;
            else if (fragmentRE.test(selector)) dom = bonzo.create(selector, context), selector = null;
            else if (selector.nodeType && selector.nodeType == 3) dom = [
                selector
            ];
            else dom = qwery(selector);
            return Dom(dom, selector);
        }
    };
    Dom.constructor = function(dom, selector) {
        dom = dom || [];
        dom.__proto__ = Dom.prototype;
        dom.selector = selector || "";
        return dom;
    };
    Dom.prototype = Dom.fn;
    function Dom() {
        return Dom.constructor.apply(this, arguments);
    }
    $.Dom = Dom;
    $.constructor = Dom.$;
    bonzo.setQueryEngine(Dom.$);
    bean.setSelectorEngine(Dom.$);
})(Core);

},{}]},["dpgAG","6rimH"], "6rimH", "parcelRequire101a")

//# sourceMappingURL=index.8cfc62b9.js.map
