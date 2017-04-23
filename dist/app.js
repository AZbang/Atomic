(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],2:[function(require,module,exports){
(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		define(["superagent"], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("superagent"));
    } else {
        factory(request);
    }
})(this, function(request) {
	"use strict";
    /*
     * A module to communicate with PubChem.
     * Facilitates the use of PubChem API for JS environments.
     * Suitable for front-end and Node development.
     * @module pubchem-api
     */
    
    // Base of the Pubchem API
    var baseUrl = "https://pubchem.ncbi.nlm.nih.gov/rest/pug";
    
    /**
     * Defines Find constructor.
     * @param {string} prop - param associated with passed property
     * @param {string} [optionGet] - Additional option associated with CmpdOps obj.
     */
    function Find (prop, optionGet) {
        this.prop = prop;
        this.optionGet = optionGet;		 
    }
    
    /**
     * The final callback passed by user
     * @callback finalCallback
     * @param {string|Object} data - parsed response obtained from PubChem
     * @param {number} [status] - status of the response
     */
    
    /**
     * Returns object with the final "find()" function.
     * @function
     * @param {string} url - almost complete url (lacks only data format)
     * @returns {Object} obj - object containing "find()" function
     * @returns {Object} obj.find - final function calling "execSearch()"
     */
    Find.prototype.exec = function (url) {		
		function execute (callback, dataFormat, optionF) {
            execSearch(url, callback, {
				prop: this.prop,
				optionF: optionF,
				optionGet: this.optionGet,
				dF: dataFormat
            });
        }
        return {
            execute: execute.bind(this)	
        };
    };
    
    /**
     * Executes the request to PubChem.
     * @param {string} url - almost complete url (lacks only data format)
     * @param {finalCallback} callback - handles the response
     * @param {Object} obj - object that holds additional info (property, additional options, requested data format)
     * @param {string} obj.prop - param associated with passed property
     * @param {string} [obj.optionF] - option associated with "find()" function
     * @param {string} [obj.optionGet] - option associated with "get" function
     * @param {string} [obj.dF=JSON] - requested data format
     */
    function execSearch (url, callback, obj) {
        if (typeof obj.dF === "undefined") {
            obj.dF = "JSON";
        }        
        
        request
            .get(url.appendToPubchem(obj.dF))
            .end(function (err, res) {
                if (res.ok) {
                    // If response is status OK, then returns status = 1.
                    if (obj.dF !== "JSON" || obj.optionF === "raw") {
                        // Does not parse the response body if JSON is NOT requested or "raw" option is passed.
                        callback(res.body, 1);
                    } else {
                        // Parses the response body accordingly to the requested data.
                        callback(parseProperties(res.body, obj.prop, obj.optionGet), 1);
                    }                  
                } else if (res.serverError) {
                    // If server error is encountered, then returns status = 2.
                    callback("Service unavailable.", 2);
                } else if (res.clientError) {                    
                    // Handles client error. Returns status > 2, according to the encountered hindrance.
                    var errObj = new ClientError(res.body);
                    callback(errObj.getInfo(), errObj.getStatus());
                }               
        });
    }
    
    /**
     * Defines ClientError constructor.
     * @param {Object} body - response body to be parsed accordingly.
     */
    function ClientError (body) {
        this.messagesFromServer = ["Missing CID list", "No CID found", "Expected a property list"];
        this.responses = ["wrong CID number", "compound not found", "expected a property list"];
        this.message = body.Fault.Message;
    }
	
	ClientError.prototype.getInfo = function () {
		return this.responses[this.getStatus() - 3];
	};
	
	ClientError.prototype.getStatus = function () {
		return this.messagesFromServer.indexOf(this.message) + 3;
	};
    
    /**
     * Checks if the passed parameter is a valid CAS number.
     * @function
     * @param {string} toVerify - input to verify
     */
    function checkElement (toVerify) {
		var reg = new RegExp(/^(\d{1,8})-(\d{1,8})-(\d{1})$/), match = toVerify.match(reg);
		if (match === null) { return false; }
		var part1 = match[1], part2 = match[2],
			checkDigit = match[3].charAt(0),
			sum = 0,
			totalLength = part1.length + part2.length;
		for(var i = 0; i < part1.length; i += 1) {
			sum += part1.charAt(i) * totalLength;
			totalLength -= 1;
		}
		for(var j = 0; j < part2.length; j += 1) {
			sum += part2.charAt(j) * totalLength;
			totalLength -= 1;
		}
		return (sum % 10) === parseInt(checkDigit, 10);
	}
    
    /**
     * Appends a slash and a string.
     * @param {string} toAppend - fragment to appendToPubchem to the string on which this method is called
     * @returns {string} newUrl
     */
    if (!String.prototype.appendToPubchem) {
		String.prototype.appendToPubchem = function (toAppend) {
			return this + "/" + toAppend;
		};
    }
    
    /*
     * Parses the response body.
     * @function
     * @param {Object} body - response body to be parsed
     * @param {string} prop - param associated with passed property
     * @param {string} [optionGet] - option associated with "get" function
     * @returns {string|Object}
     */
    function parseProperties (body, prop, optionGet) {		
        if (prop === "Synonym") {
			var allNames = body.InformationList.Information[0][prop]; 
            if (typeof optionGet === "undefined") {
                return allNames;
			} else if (optionGet === "cas") {				
                for (var i = 0; i < allNames.length; i += 1) {
                    var el = allNames[i];
                    if (checkElement(el)) { return el; }
				}
			} else if (typeof optionGet === "number") {
                return optionGet > 0 ?
					allNames.slice(0, optionGet).map(function (element) {
						return element.toLowerCase();
					}):
					"";
            }
        } else if (prop === "propertyArray") {
            return body.PropertyTable.Properties[0];   
        } else {            
            return body.PropertyTable.Properties[0][prop];
        }
    }
    
    /**
     * Defines CmpdSpace ("Compound Space") constructor.
     * @class CmpdSpace
     * @param {string} url - base Pubchem url
     */
    function CmpdSpace (url) {
        // Properties that can be requested according to PubChem API.
        var properties = ["name", "name", "smiles", "cid", "inchi", "inchikey"];
        // Slightly changed names of those properties.
        var alias = ["Name", "Cas", "Smiles", "Cid", "Inchi", "InchiKey"];
        // Generates all setters.
		for(var i = 0; i <= properties.length; i += 1) {
			(function (j) {				
				this["set" + alias[j]] = function (toFind) {
					var newUrl = url.appendToPubchem(properties[j]).appendToPubchem(toFind);
					return new CmpdOps(newUrl);
				};
			}.call(this, i));
		}
    }
    
    /**
     * Defines CmpdOps ("Compound Operations") constructor.
     * @class CmpdOps
     * @param {string} url - base Pubchem url with the already passed data appendToPubchemed to it
     */
    var CmpdOps = function (url) {
        // Array of properties according to PubChem API.
        var properties = ["IUPACName", "MolecularFormula", "MolecularWeight",
                           "CanonicalSMILES", "IsomericSMILES", "InChI",
                           "InChIKey", "XLogP", "ExactMass",
                           "MonoisotopicMass", "TPSA", "Complexity",
                           "Charge", "HBondDonorCount", "HBondAcceptorCount",
                           "RotatableBondCount", "HeavyAtomCount", "IsotopeAtomCount",
                           "AtomStereoCount", "DefinedAtomStereoCount", "UndefinedAtomStereoCount",
                           "BondStereoCount", "DefinedBondStereoCount", "UndefinedBondStereoCount",
                           "CovalentUnitCount", "Volume3D", "XStericQuadrupole3D",
                           "YStericQuadrupole3D", "ZStericQuadrupole3D", "FeatureCount3D",
                           "FeatureAcceptorCount3D", "FeatureDonorCount3D", "FeatureAnionCount3D",
                           "FeatureCationCount3D", "FeatureRingCount3D", "FeatureHydrophobeCount3D",
                           "ConformerModelRMSD3D", "EffectiveRotorCount3D", "ConformerCount3D",
                           "Fingerprint2D"];
        
        // Generates all getters.
		for(var i = 0; i <= properties.length; i += 1) {
			(function (j) {				
				this["get" + properties[j]] = function (toFind) {
					var newUrl = url.appendToPubchem("property").appendToPubchem(properties[j]);
					return new Find(properties[j]).exec(newUrl);
				};
			}.call(this, i));
		}
		// Getter for array of properties
        this.getProperties = function (toFind) {
            if (!Array.isArray(toFind)) {
                throw new Error("Only array is accepted.");
            } else {
                var newUrl = url.appendToPubchem("property") + "/";
                toFind.forEach(function (element) {
                    if (properties.indexOf(element) >= 0) {
                        newUrl += element + ",";
                    }
                });
                return new Find("propertyArray").exec(newUrl);
            }
        };
		// Getter for Cas nr
        this.getCas = function () {
			var newUrl = url.appendToPubchem("synonyms");
            return new Find("Synonym", "cas").exec(newUrl);
        };
		/**
		 * Getter for names
		 * @param {number} number - "undefined" for all names
		 *							> 0 for specified number of names to display 
		 */
        this.getNames = function (number) {
            var newUrl = url.appendToPubchem("synonyms");
            return new Find("Synonym", number).exec(newUrl);
        };
    };
    
    /** Sets domain. */
	var pubchem = {
		domain: function (domain, method) {
			var newUrl = baseUrl.appendToPubchem(domain);        
			if (domain === "compound") {  
				return typeof method === undefined ? new CmpdSpace(newUrl): new CmpdSpace(newUrl, "post");
			} else {
				throw new Error("Unknown domain.");
			}
		}
	};
	return pubchem;
});
},{"superagent":4}],3:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],4:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  root = this;
}

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Force given parser
 * 
 * Sets the body parser no matter type.
 * 
 * @param {Function}
 * @api public
 */

Response.prototype.parse = function(fn){
  this.parser = fn;
  return this;
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = this.parser || request.parse[this.type];
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this.getHeader('Content-Type');
    var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

Request.prototype.then = function (fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":1,"reduce":3}],5:[function(require,module,exports){
const atoms = require('./atoms.json');

class Atom {
	constructor(molecule, id, x, y, z) {
		this.molecule = molecule;
		this.model = molecule.model;

		this.x = x;
		this.y = y;
		this.z = z;
		
		this.nodes = [];

		this.data = atoms[id-1];

		this.color = +(''+this.data.color).toLowerCase();
		this.shadow = +(''+this.data.shadow).toLowerCase();
		this.radius = +this.data.covalentRadius ? Math.min(+this.data.covalentRadius*10, 10) : 10;
		this.detail = 2;

		// create three.js objects
		this.geometry = new THREE.IcosahedronGeometry(this.radius, this.detail);
		this.mesh = new THREE.Object3D();
		this.mesh.add(new THREE.Mesh(
			this.geometry,
			new THREE.MeshPhongMaterial({
				color: this.color,
				emissive: this.shadow,
				side: THREE.DoubleSide,
				shading: THREE.FlatShading
			})
		));
		this.mesh.atom = this;

		this.mesh.position.set(this.x, this.y, this.z);

		this.molecule.stage.add(this.mesh);
	}
	update() {

	}
}

module.exports = Atom;
},{"./atoms.json":9}],6:[function(require,module,exports){

class Link {
	constructor(molecula, atom1, atom2, type) {
		this.molecula = molecula;
		this.atom1 = atom1;
		this.atom2 = atom2;
		this.type = type;


		// create three.js objects

		this.tubes = new THREE.Group();
		this.molecula.stage.add(this.tubes);

		for(let i = 0; i < type; i++) {

			let p1 = new THREE.Vector3(this.atom1.x, this.atom1.y, this.atom1.z+i*(6/type)-(2/type)*(type-1));
			let p2 = new THREE.Vector3(this.atom2.x, this.atom2.y, this.atom2.z+i*(6/type)-(2/type)*(type-1));

			let mesh = new THREE.Object3D();
			let geometry = new THREE.TubeGeometry(
				new THREE.CatmullRomCurve3([p1, p2]),
				12, 2/type
			);

			mesh.add(new THREE.Mesh(
				geometry,
				new THREE.MeshPhongMaterial({
					color: 0xB0B0B0,
					emissive: 0x7B7B7B,
					side: THREE.DoubleSide,
					shading: THREE.FlatShading
				})
			));
			this.tubes.add(mesh);
		}
	}
}

module.exports = Link;
},{}],7:[function(require,module,exports){
const Atom = require('./Atom');
const Link = require('./Link');

class Molecule {
	constructor(model, index, data) {
		this.model = model;
		this.index = 0;
		this._data = data.PC_Compounds[0];

		this.typeStructure = data.typeStructure;

		this.stage = new THREE.Group();
		this.model.scene.add(this.stage);

		this.atoms = [];
		this.links = [];

		this.typeStructure === '2d' && this._computedCenter();
		this._initAtoms();
		this._bindNodes();

		this.model.camera.position.z = Math.max(Math.min(this.atoms.length*20, 200), 70);

		this._bindEvents();
	}

	_bindEvents() {

		this.stage.children.forEach((mesh) => {
			this.model.domEvents.addEventListener(mesh, 'click', (event) => {
				if(!mesh.atom) return;

				// this.stage.children.forEach((mesh) => {
				// 	mesh.hex != null && mesh.children[0].material.emissive.setHex(mesh.hex);
				// });
				
				// mesh.hex = mesh.children[0].material.emissive.getHex();
				// mesh.children[0].material.emissive.setHex(0xF6D53B);

				var outlineMaterial2 = new THREE.MeshBasicMaterial( { color: 0x3992FF, side: THREE.BackSide } );
				var outlineMesh2 = new THREE.Mesh( mesh.atom.geometry, outlineMaterial2 );
				outlineMesh2.position.x = mesh.atom.x;
				outlineMesh2.position.y = mesh.atom.y;
				outlineMesh2.position.z = mesh.atom.z;
				outlineMesh2.scale.multiplyScalar(1.1);
				this.stage.add( outlineMesh2 );

				let table = $(`<table class="ui blue table">
									<thead>
										<tr>
											<th>Key</th>
											<th>Value</th>
										</tr>
									</thead>
									<tbody></tbody>
								</table>`);

				for(let key in mesh.atom.data) {
					if(key == 'description' || key == 'label' || key == 'color') continue;
					table.find('tbody').append(`<tr><td>${key}</td><td>${mesh.atom.data[key]}</td></tr>`);
				}
				$('#info-atom .content').empty();
				$('#info-atom .content').append(`<i class="right floated large close icon" style="cursor: pointer"></i>`);
				$('#info-atom .content i.close').on('click', () => {
					$('#info-atom').hide();
					$('#info-substance').show().transition('pulse');
				});
				$('#info-atom .content').append(`<div class="header">${mesh.atom.data.label.split(' ')[0]}</div>`);
				$('#info-atom .content').append(`<div class="meta">${mesh.atom.data.label.split(' ')[1]}</div>`);
				$('#info-atom .content').append(`<div class="description">${mesh.atom.data.description}</div>`);
				$('#info-atom .content').append(table);
				$('#info-substance').hide();
				$('#info-atom').show().transition('pulse');

			}, false)
		});
	}

	_computedCenter() {
		let pos = this._data.coords[0].conformers[0];
		let sortX = pos.x.slice(0).sort((a, b) => a-b);
		let sortY = pos.y.slice(0).sort((a, b) => a-b);

		this.center = {
			x: sortX[Math.round(sortX.length/2)],
			y: sortY[Math.round(sortY.length/2)]
		}
	}

	_initAtoms() {
		let pos = this._data.coords[0].conformers[0];
		
		for(let i = 0; i < this._data.atoms.element.length; i++) {
			let x, y, z;

			if(this.typeStructure === '3d') {
				x = pos.x[i]*20;
				y = pos.y[i]*20;
				z = pos.z[i]*20;
			} else {
				x = this.center.x*30-pos.x[i]*30;
				y = this.center.y*30-pos.y[i]*30;
				z = 0;
			}

			let atom = new Atom(this, this._data.atoms.element[i], x, y, z);
			this.atoms.push(atom);
		}
	}
	_bindNodes() {
		if(!this._data.bonds) return;

		for(let i = 0; i < this._data.bonds.aid1.length; i++) {
			let aid1 = this._data.bonds.aid1[i]-1;
			let aid2 = this._data.bonds.aid2[i]-1;
			let type = this._data.bonds.order[i];

			this.links.push(
				new Link(this, this.atoms[aid1], this.atoms[aid2], type)
			);
		}
	}

	update() {
		this.stage.rotation.x += 0.001;
		this.stage.rotation.y += 0.0001;

		for(let i = 0; i < this.atoms.length; i++) {
			this.atoms[i].update();
		}
	}
}

module.exports = Molecule;
},{"./Atom":5,"./Link":6}],8:[function(require,module,exports){
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 * @author mrflix / http://felixniklas.de
 * 
 * released under MIT License (MIT)
 */
/*global THREE, console */

// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
// supported.
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe
//
// This is a drop-in replacement for (most) TrackballControls used in examples.
// That is, include this js file and wherever you see:
//    	controls = new THREE.TrackballControls( camera );
//      controls.target.z = 150;
// Simple substitute "OrbitControls" and the control should work as-is.

THREE.OrbitControls = function ( object, domElement, localElement ) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;
	this.localElement = ( localElement !== undefined ) ? localElement : document;

	// API

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the control orbits around
	// and where it pans with respect to.
	this.target = new THREE.Vector3();
	// center is old, deprecated; use "target" instead
	this.center = this.target;

	// This option actually enables dollying in and out; left as "zoom" for
	// backwards compatibility
	this.noZoom = false;
	this.zoomSpeed = 1.0;
	// Limits to how far you can dolly in and out
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// Set to true to disable this control
	this.noRotate = false;
	this.rotateSpeed = 1.0;

	// Set to true to disable this control
	this.noPan = false;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// Set to true to disable use of the keys
	this.noKeys = false;
	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	////////////
	// internals

	var scope = this;

	var EPS = 0.000001;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;
	var pan = new THREE.Vector3();

	var lastPosition = new THREE.Vector3();

	var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };
	var state = STATE.NONE;

	// events

	var changeEvent = { type: 'change' };


	this.rotateLeft = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateUp = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};

	// pass in distance in world space to move left
	this.panLeft = function ( distance ) {

		var panOffset = new THREE.Vector3();
		var te = this.object.matrix.elements;
		// get X column of matrix
		panOffset.set( te[0], te[1], te[2] );
		panOffset.multiplyScalar(-distance);
		
		pan.add( panOffset );

	};

	// pass in distance in world space to move up
	this.panUp = function ( distance ) {

		var panOffset = new THREE.Vector3();
		var te = this.object.matrix.elements;
		// get Y column of matrix
		panOffset.set( te[4], te[5], te[6] );
		panOffset.multiplyScalar(distance);
		
		pan.add( panOffset );
	};
	
	// main entry point; pass in Vector2 of change desired in pixel space,
	// right and down are positive
	this.pan = function ( delta ) {

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( scope.object.fov !== undefined ) {

			// perspective
			var position = scope.object.position;
			var offset = position.clone().sub( scope.target );
			var targetDistance = offset.length();

			// half of the fov is center to top of screen
			targetDistance *= Math.tan( (scope.object.fov/2) * Math.PI / 180.0 );
			// we actually don't use screenWidth, since perspective camera is fixed to screen height
			scope.panLeft( 2 * delta.x * targetDistance / element.clientHeight );
			scope.panUp( 2 * delta.y * targetDistance / element.clientHeight );

		} else if ( scope.object.top !== undefined ) {

			// orthographic
			scope.panLeft( delta.x * (scope.object.right - scope.object.left) / element.clientWidth );
			scope.panUp( delta.y * (scope.object.top - scope.object.bottom) / element.clientHeight );

		} else {

			// camera neither orthographic or perspective - warn user
			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

		}

	};

	this.dollyIn = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale /= dollyScale;

	};

	this.dollyOut = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale *= dollyScale;

	};

	this.update = function () {

		var position = this.object.position;
		var offset = position.clone().sub( this.target );

		// angle from z-axis around y-axis

		var theta = Math.atan2( offset.x, offset.z );

		// angle from y-axis

		var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		if ( this.autoRotate ) {

			this.rotateLeft( getAutoRotationAngle() );

		}

		theta += thetaDelta;
		phi += phiDelta;

		// restrict phi to be between desired limits
		phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );
		
		// move target to panned location
		this.target.add( pan );

		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		position.copy( this.target ).add( offset );

		this.object.lookAt( this.target );

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;
		pan.set(0,0,0);

		if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

			this.dispatchEvent( changeEvent );

			lastPosition.copy( this.object.position );

		}

	};


	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function onMouseDown( event ) {

		if ( scope.enabled === false ) { return; }
		event.preventDefault();

		if ( event.button === 0 ) {
			if ( scope.noRotate === true ) { return; }

			state = STATE.ROTATE;

			rotateStart.set( event.clientX, event.clientY );

		} else if ( event.button === 1 ) {
			if ( scope.noZoom === true ) { return; }

			state = STATE.DOLLY;

			dollyStart.set( event.clientX, event.clientY );

		} else if ( event.button === 2 ) {
			if ( scope.noPan === true ) { return; }

			state = STATE.PAN;

			panStart.set( event.clientX, event.clientY );

		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.addEventListener( 'mouseup', onMouseUp, false );

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( state === STATE.ROTATE ) {

			if ( scope.noRotate === true ) return;

			rotateEnd.set( event.clientX, event.clientY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			// rotating across whole screen goes 360 degrees around
			scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

		} else if ( state === STATE.DOLLY ) {

			if ( scope.noZoom === true ) return;

			dollyEnd.set( event.clientX, event.clientY );
			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				scope.dollyIn();

			} else {

				scope.dollyOut();

			}

			dollyStart.copy( dollyEnd );

		} else if ( state === STATE.PAN ) {

			if ( scope.noPan === true ) return;

			panEnd.set( event.clientX, event.clientY );
			panDelta.subVectors( panEnd, panStart );
			
			scope.pan( panDelta );

			panStart.copy( panEnd );

		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.update();

	}

	function onMouseUp( /* event */ ) {

		if ( scope.enabled === false ) return;

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.noZoom === true ) return;

		var delta = 0;

		if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if ( event.detail ) { // Firefox

			delta = - event.detail;

		}

		if ( delta > 0 ) {

			scope.dollyOut();

		} else {

			scope.dollyIn();

		}

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false ) { return; }
		if ( scope.noKeys === true ) { return; }
		if ( scope.noPan === true ) { return; }

		// pan a pixel - I guess for precise positioning?
		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		var needUpdate = false;
		
		switch ( event.keyCode ) {

			case scope.keys.UP:
				scope.pan( new THREE.Vector2( 0, scope.keyPanSpeed ) );
				needUpdate = true;
				break;
			case scope.keys.BOTTOM:
				scope.pan( new THREE.Vector2( 0, -scope.keyPanSpeed ) );
				needUpdate = true;
				break;
			case scope.keys.LEFT:
				scope.pan( new THREE.Vector2( scope.keyPanSpeed, 0 ) );
				needUpdate = true;
				break;
			case scope.keys.RIGHT:
				scope.pan( new THREE.Vector2( -scope.keyPanSpeed, 0 ) );
				needUpdate = true;
				break;
		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		if ( needUpdate ) {

			scope.update();

		}

	}
	
	function touchstart( event ) {

		if ( scope.enabled === false ) { return; }

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate
				if ( scope.noRotate === true ) { return; }

				state = STATE.TOUCH_ROTATE;

				rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			case 2:	// two-fingered touch: dolly
				if ( scope.noZoom === true ) { return; }

				state = STATE.TOUCH_DOLLY;

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );
				dollyStart.set( 0, distance );
				break;

			case 3: // three-fingered touch: pan
				if ( scope.noPan === true ) { return; }

				state = STATE.TOUCH_PAN;

				panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			default:
				state = STATE.NONE;

		}
	}

	function touchmove( event ) {

		if ( scope.enabled === false ) { return; }

		event.preventDefault();
		event.stopPropagation();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate
				if ( scope.noRotate === true ) { return; }
				if ( state !== STATE.TOUCH_ROTATE ) { return; }

				rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				rotateDelta.subVectors( rotateEnd, rotateStart );

				// rotating across whole screen goes 360 degrees around
				scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
				// rotating up and down along whole screen attempts to go 360, but limited to 180
				scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

				rotateStart.copy( rotateEnd );
				break;

			case 2: // two-fingered touch: dolly
				if ( scope.noZoom === true ) { return; }
				if ( state !== STATE.TOUCH_DOLLY ) { return; }

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );
				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					scope.dollyOut();

				} else {

					scope.dollyIn();

				}

				dollyStart.copy( dollyEnd );
				break;

			case 3: // three-fingered touch: pan
				if ( scope.noPan === true ) { return; }
				if ( state !== STATE.TOUCH_PAN ) { return; }

				panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				panDelta.subVectors( panEnd, panStart );
				
				scope.pan( panDelta );

				panStart.copy( panEnd );
				break;

			default:
				state = STATE.NONE;

		}

	}

	function touchend( /* event */ ) {

		if ( scope.enabled === false ) { return; }

		state = STATE.NONE;
	}

	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	this.localElement.addEventListener( 'mousedown', onMouseDown, false );
	this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
	this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

	this.domElement.addEventListener( 'keydown', onKeyDown, false );

	this.localElement.addEventListener( 'touchstart', touchstart, false );
	this.domElement.addEventListener( 'touchend', touchend, false );
	this.domElement.addEventListener( 'touchmove', touchmove, false );

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );

module.exports = THREE.OrbitControls;
},{}],9:[function(require,module,exports){
module.exports=[
    {
        "formula": "H",
        "label": "Водород Hydrogen",
        "color": "0xFFFFFF",
        "shadow": "0xEEEEEE",
        "est": "()1s0",
        "description": "",
        "mass": "1.0079",
        "density": "0.0898",
        "melting": "-259.1",
        "boil": "-252.8",
        "heat": "14.442",
        "electronegativity": "2.1",
        "covalentRadius": "0.32",
        "1stIonizerPotential": "13.60"
    },
    {
        "formula": "He",
        "label": "Гелий Helium",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "est": "()1s0",
        "description": "",
        "mass": "4.0026",
        "density": "0.179",
        "melting": "-272.2",
        "boil": "-268.9",
        "heat": "5.232",
        "electronegativity": " ",
        "covalentRadius": "0.93",
        "1stIonizerPotential": "24.59"
    },
    {
        "formula": "Li",
        "label": "Литий Lithium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "est": "(He)2s1",
        "description": "",
        "mass": "6.941",
        "density": "530",
        "melting": "180.5",
        "boil": "1342",
        "heat": "3.307",
        "electronegativity": "1.0",
        "covalentRadius": "1.23",
        "1stIonizerPotential": "5.39"
    },
    {
        "formula": "Be",
        "label": "Бериллий Beryllium",
        "color": "0x3E7819",
        "shadow": "0x206827",
        "est": "(He)2s2",
        "description": "",
        "mass": "9.0122",
        "density": "1850",
        "melting": "1285",
        "boil": "2470",
        "heat": "1.884",
        "electronegativity": "1.5",
        "covalentRadius": "0.90",
        "1stIonizerPotential": "9.32"
    },
    {
        "formula": "B",
        "label": "Бор Boron",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(He)2s22p1",
        "description": "",
        "mass": "10.811",
        "density": "2340",
        "melting": "2030",
        "boil": "3860",
        "heat": "1.293",
        "electronegativity": "2.0",
        "covalentRadius": "0.82",
        "1stIonizerPotential": "8.30"
    },
    {
        "formula": "C",
        "label": "Углерод Carbon",
        "color": "0x343434",
        "shadow": "0x000000",
        "est": "(He)2s22p2",
        "description": "",
        "mass": "12.011",
        "density": "2260",
        "melting": "3700 (возг.)",
        "boil": " ",
        "heat": "0.69",
        "electronegativity": "2.5",
        "covalentRadius": "0.77",
        "1stIonizerPotential": "11.26"
    },
    {
        "formula": "N",
        "label": "Азот Nitrogen",
        "color": "0x1157FF",
        "shadow": "0x1030FF",
        "est": "(He)2s22p3",
        "description": "",
        "mass": "14.007",
        "density": "1.251",
        "melting": "-210",
        "boil": "-195.8",
        "heat": "1.034",
        "electronegativity": "3.0",
        "covalentRadius": "0.74",
        "1stIonizerPotential": "14.53"
    },
    {
        "formula": "O",
        "label": "Кислород Oxygen",
        "color": "0xFF3A3A",
        "shadow": "0xFF1313",
        "est": "(He)2s22p4",
        "description": "",
        "mass": "15.999",
        "density": "1.429",
        "melting": "-218.8",
        "boil": "-183",
        "heat": "0.913",
        "electronegativity": "3.5",
        "covalentRadius": "0.73",
        "1stIonizerPotential": "13.62"
    },
    {
        "formula": "F",
        "label": "Фтор Fluorine",
        "color": "0x55B940",
        "shadow": "0x1F7B00",
        "est": "(He)2s22p5",
        "description": "",
        "mass": "18.998",
        "density": "1.696",
        "melting": "-219.6",
        "boil": "-188.2",
        "heat": "0.753",
        "electronegativity": "4.0",
        "covalentRadius": "0.72",
        "1stIonizerPotential": "17.42"
    },
    {
        "formula": "Ne",
        "label": "Неон Neon",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "est": "(He)2s22p6",
        "description": "",
        "mass": "20.180",
        "density": "0.901",
        "melting": "-248.6",
        "boil": "-246",
        "heat": "0.904",
        "electronegativity": " ",
        "covalentRadius": "0.71",
        "1stIonizerPotential": "21.56"
    },
    {
        "formula": "Na",
        "label": "Натрий Sodium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "est": "(Ne)3s1",
        "description": "",
        "mass": "22.990",
        "density": "970",
        "melting": "97.8",
        "boil": " ",
        "heat": "1.235",
        "electronegativity": "0.9",
        "covalentRadius": "1.54",
        "1stIonizerPotential": "5.14"
    },
    {
        "formula": "Mg",
        "label": "Магний Magnesium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ne)3s2",
        "description": "",
        "mass": "24.305",
        "density": "1740",
        "melting": "650",
        "boil": " ",
        "heat": "1.047",
        "electronegativity": "1.2",
        "covalentRadius": "1.36",
        "1stIonizerPotential": "7.64"
    },
    {
        "formula": "Al",
        "label": "Алюминий Aluminium",
        "est": "(Ne)3s23p1",
        "description": "",
        "mass": "26.982",
        "density": "2700",
        "melting": "660",
        "boil": " ",
        "heat": "0.9",
        "electronegativity": "1.5",
        "covalentRadius": "1.18",
        "1stIonizerPotential": "5.98"
    },
    {
        "formula": "Si",
        "label": "Кремний Silicon",
        "est": "(Ne)3s23p2",
        "description": "",
        "mass": "28.086",
        "density": "2330",
        "melting": "1410",
        "boil": "2600",
        "heat": "0.678",
        "electronegativity": "1.8",
        "covalentRadius": "1.11",
        "1stIonizerPotential": "8.15"
    },
    {
        "formula": "P",
        "label": "Фосфор Phosphorus",
        "color": "0xFF7A44",
        "shadow": "0xFF7320",
        "est": "(Ne)3s23p3",
        "description": "",
        "mass": "30.974",
        "density": "1820",
        "melting": "44.2 (бел.), 410 (кр.)",
        "boil": "280 (бел.)",
        "heat": "0.741",
        "electronegativity": "2.1",
        "covalentRadius": "1.06",
        "1stIonizerPotential": "10.49"
    },
    {
        "formula": "S",
        "label": "Сера Sulfur",
        "color": "0xFFDF39",
        "shadow": "0xE9CE29",
        "est": "(Ne)3s23p4",
        "description": "",
        "mass": "32.065",
        "density": "2070",
        "melting": "113 (ромб.), 119 (монокл.)",
        "boil": "444",
        "heat": "0.733",
        "electronegativity": "2.5",
        "covalentRadius": "1.02",
        "1stIonizerPotential": "10.36"
    },
    {
        "formula": "Cl",
        "label": "Хлор Chlorine",
        "color": "0x55B940",
        "shadow": "0x1F7B00",
        "est": "(Ne)3s23p5",
        "description": "",
        "mass": "35.453",
        "density": "0.317",
        "melting": "-101",
        "boil": "-34",
        "heat": "0.486",
        "electronegativity": "3.0",
        "covalentRadius": "0.99",
        "1stIonizerPotential": "12.97"
    },
    {
        "formula": "Ar",
        "label": "Аргон Argon",
        "est": "(Ne)3s23p6",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "description": "",
        "mass": "39.948",
        "density": "1.784",
        "melting": "-189.2",
        "boil": "-185.8",
        "heat": "0.523",
        "electronegativity": " ",
        "covalentRadius": "0.98",
        "1stIonizerPotential": "15.76"
    },
    {
        "formula": "K",
        "label": "Калий Potassium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "est": "(Ar)4s1",
        "description": "",
        "mass": "39.098",
        "density": "860",
        "melting": "63.6",
        "boil": " ",
        "heat": "0.741",
        "electronegativity": "0.8",
        "covalentRadius": "2.03",
        "1stIonizerPotential": "4.34"
    },
    {
        "formula": "Ca",
        "label": "Кальций Calcium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)4s2",
        "description": "",
        "mass": "40.078",
        "density": "1550",
        "melting": "838",
        "boil": " ",
        "heat": "0.624",
        "electronegativity": "1.0",
        "covalentRadius": "1.74",
        "1stIonizerPotential": "6.11"
    },
    {
        "formula": "Sc",
        "label": "Cкандий Scandium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d14s2",
        "description": "",
        "mass": "44.956",
        "density": "3000",
        "melting": "1539",
        "boil": " ",
        "heat": "0.544",
        "electronegativity": "1.3",
        "covalentRadius": "1.44",
        "1stIonizerPotential": "6.54"
    },
    {
        "formula": "Ti",
        "label": "Титан Titanium",
        "color": "0x9E9E9E",
        "shadow": "0x666666",
        "est": "(Ar)3d24s2",
        "description": "",
        "mass": "47.867",
        "density": "4510",
        "melting": "1668",
        "boil": " ",
        "heat": "0.527",
        "electronegativity": "1.5",
        "covalentRadius": "1.32",
        "1stIonizerPotential": "6.83"
    },
    {
        "formula": "V",
        "label": "Ванадий Vanadium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d34s2",
        "description": "",
        "mass": "50.942",
        "density": "6110",
        "melting": "1900",
        "boil": " ",
        "heat": "0.502",
        "electronegativity": "1.6",
        "covalentRadius": "1.22",
        "1stIonizerPotential": "6.71"
    },
    {
        "formula": "Cr",
        "label": "Хром Chromium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d54s1",
        "description": "",
        "mass": "51.996",
        "density": "7190",
        "melting": "1856",
        "boil": " ",
        "heat": "0.46",
        "electronegativity": "1.6",
        "covalentRadius": "1.18",
        "1stIonizerPotential": "6.76"
    },
    {
        "formula": "Mn",
        "label": "Марганец Manganese",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d54s2",
        "description": "",
        "mass": "54.938",
        "density": "7430",
        "melting": "1244",
        "boil": " ",
        "heat": "0.481",
        "electronegativity": "1.5",
        "covalentRadius": "1.17",
        "1stIonizerPotential": "7.43"
    },
    {
        "formula": "Fe",
        "label": "Железо Iron",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d64s2",
        "description": "",
        "mass": "55.845",
        "density": "7860",
        "melting": "1536",
        "boil": " ",
        "heat": "0.46",
        "electronegativity": "1.8",
        "covalentRadius": "1.17",
        "1stIonizerPotential": "7.87"
    },
    {
        "formula": "Co",
        "label": "Кобальт Cobalt",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d74s2",
        "description": "",
        "mass": "58.933",
        "density": "8900",
        "melting": "1495",
        "boil": " ",
        "heat": "0.414",
        "electronegativity": "1.8",
        "covalentRadius": "1.16",
        "1stIonizerPotential": "7.86"
    },
    {
        "formula": "Ni",
        "label": "Никель Nickel",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d84s2",
        "description": "",
        "mass": "58.693",
        "density": "8900",
        "melting": "1453",
        "boil": " ",
        "heat": "0.44",
        "electronegativity": "1.8",
        "covalentRadius": "1.15",
        "1stIonizerPotential": "7.64"
    },
    {
        "formula": "Cu",
        "label": "Медь Copper",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d104s1",
        "description": "",
        "mass": "63.546",
        "density": "8960",
        "melting": "1083",
        "boil": " ",
        "heat": "0.385",
        "electronegativity": "1.9",
        "covalentRadius": "1.17",
        "1stIonizerPotential": "7.73"
    },
    {
        "formula": "Zn",
        "label": "Цинк Zinc",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Ar)3d104s2",
        "description": "",
        "mass": "65.409",
        "density": "7140",
        "melting": "419.5",
        "boil": " ",
        "heat": "0.383",
        "electronegativity": "1.6",
        "covalentRadius": "1.25",
        "1stIonizerPotential": "9.39"
    },
    {
        "formula": "Ga",
        "label": "Галлий Gallium",
        "est": "(Ar)3d104s24p1",
        "description": "",
        "mass": "69.723",
        "density": "5910",
        "melting": "29.8",
        "boil": " ",
        "heat": "0.331",
        "electronegativity": "1.8",
        "covalentRadius": "1.26",
        "1stIonizerPotential": "6.00"
    },
    {
        "formula": "Ge",
        "label": "Германий Germanium",
        "est": "(Ar)3d104s24p2",
        "description": "",
        "mass": "72.64",
        "density": "5320",
        "melting": "937.4",
        "boil": " ",
        "heat": "0.305",
        "electronegativity": "2.0",
        "covalentRadius": "1.22",
        "1stIonizerPotential": "8.13"
    },
    {
        "formula": "As",
        "label": "Мышьяк Arsenic",
        "est": "(Ar)3d104s24p3",
        "description": "",
        "mass": "74.922",
        "density": "5720",
        "melting": "817 (под давл.)",
        "boil": " ",
        "heat": "0.343",
        "electronegativity": "2.2",
        "covalentRadius": "1.20",
        "1stIonizerPotential": "9.81"
    },
    {
        "formula": "Se",
        "label": "Селен Selenium",
        "est": "(Ar)3d104s24p4",
        "description": "",
        "mass": "78.96",
        "density": "4790",
        "melting": "217",
        "boil": "685",
        "heat": "0.352",
        "electronegativity": "2.5",
        "covalentRadius": "1.16",
        "1stIonizerPotential": "9.75"
    },
    {
        "formula": "Br",
        "label": "Бром Bromine",
        "color": "0xDF902B",
        "shadow": "0xAF6018",
        "est": "(Ar)3d104s24p5",
        "description": "",
        "mass": "79.904",
        "density": "3120",
        "melting": "-7.2",
        "boil": "58.8",
        "heat": "0.293",
        "electronegativity": "2.8",
        "covalentRadius": "1.14",
        "1stIonizerPotential": "11.81"
    },
    {
        "formula": "Kr",
        "label": "Криптон Krypton",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "est": "(Ar)3d104s24p6",
        "description": "",
        "mass": "83.798",
        "density": "3.74",
        "melting": "-157.3",
        "boil": "-153.2",
        "heat": "0.248",
        "electronegativity": " ",
        "covalentRadius": "1.12",
        "1stIonizerPotential": "14.00"
    },
    {
        "formula": "Rb",
        "label": "Рубидий Rubidium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "est": "(Kr)5s1",
        "description": "",
        "mass": "85.468",
        "density": "1530",
        "melting": "38.9",
        "boil": " ",
        "heat": "0.335",
        "electronegativity": "0.8",
        "covalentRadius": "2.16",
        "1stIonizerPotential": "4.18"
    },
    {
        "formula": "Sr",
        "label": "Стронций Strontium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)5s2",
        "description": "",
        "mass": "87.62",
        "density": "2600",
        "melting": "768",
        "boil": " ",
        "heat": "0.737",
        "electronegativity": "1.0",
        "covalentRadius": "1.91",
        "1stIonizerPotential": "5.69"
    },
    {
        "formula": "Y",
        "label": "Иттрий Yttrium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d15s2",
        "description": "",
        "mass": "88.906",
        "density": "4470",
        "melting": "1525",
        "boil": " ",
        "heat": "0.297",
        "electronegativity": "1.3",
        "covalentRadius": "1.62",
        "1stIonizerPotential": "6.38"
    },
    {
        "formula": "Zr",
        "label": "Цирконий Zirconium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d25s2",
        "description": "",
        "mass": "91.224",
        "density": "6490",
        "melting": "1852",
        "boil": " ",
        "heat": "0.276",
        "electronegativity": "1.4",
        "covalentRadius": "1.45",
        "1stIonizerPotential": "6.84"
    },
    {
        "formula": "Nb",
        "label": "Ниобий Niobium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d45s1",
        "description": "",
        "mass": "92.906",
        "density": "8400",
        "melting": "2468",
        "boil": " ",
        "heat": "0.272",
        "electronegativity": "1.6",
        "covalentRadius": "1.34",
        "1stIonizerPotential": "6.88"
    },
    {
        "formula": "Mo",
        "label": "Молибден Molybdenum",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d55s1",
        "description": "",
        "mass": "95.94",
        "density": "10200",
        "melting": "2620",
        "boil": " ",
        "heat": "0.255",
        "electronegativity": "1.8",
        "covalentRadius": "1.30",
        "1stIonizerPotential": "7.10"
    },
    {
        "formula": "Tc",
        "label": "Технеций Technetium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d55s2",
        "description": "",
        "mass": "[98]",
        "density": "11500",
        "melting": "2140",
        "boil": " ",
        "heat": "0.21",
        "electronegativity": "1.9",
        "covalentRadius": "1.27",
        "1stIonizerPotential": "7.28"
    },
    {
        "formula": "Ru",
        "label": "Рутений Ruthenium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d75s1",
        "description": "",
        "mass": "101.07",
        "density": "12200",
        "melting": "2500",
        "boil": " ",
        "heat": "0.239",
        "electronegativity": "2.2",
        "covalentRadius": "1.25",
        "1stIonizerPotential": "7.36"
    },
    {
        "formula": "Rh",
        "label": "Родий Rhodium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d85s1",
        "description": "",
        "mass": "102.91",
        "density": "12400",
        "melting": "1966",
        "boil": " ",
        "heat": "0.247",
        "electronegativity": "2.2",
        "covalentRadius": "1.25",
        "1stIonizerPotential": "7.46"
    },
    {
        "formula": "Pd",
        "label": "Палладий Palladium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d105s0",
        "description": "",
        "mass": "106.42",
        "density": "12000",
        "melting": "1552",
        "boil": " ",
        "heat": "0.243",
        "electronegativity": "2.2",
        "covalentRadius": "1.28",
        "1stIonizerPotential": "8.33"
    },
    {
        "formula": "Ag",
        "label": "Серебро Silver",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d105s1",
        "description": "",
        "mass": "107.87",
        "density": "10500",
        "melting": "960.8",
        "boil": " ",
        "heat": "0.234",
        "electronegativity": "1.9",
        "covalentRadius": "1.34",
        "1stIonizerPotential": "7.58"
    },
    {
        "formula": "Cd",
        "label": "Кадмий Cadmium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Kr)4d105s2",
        "description": "",
        "mass": "112.41",
        "density": "8650",
        "melting": "320.9",
        "boil": " ",
        "heat": "0.23",
        "electronegativity": "1.7",
        "covalentRadius": "1.48",
        "1stIonizerPotential": "8.99"
    },
    {
        "formula": "In",
        "label": "Индий Indium",
        "est": "(Kr)4d105s25p1",
        "description": "",
        "mass": "114.82",
        "density": "7310",
        "melting": "156.2",
        "boil": " ",
        "heat": "0.239",
        "electronegativity": "1.7",
        "covalentRadius": "1.44",
        "1stIonizerPotential": "5.78"
    },
    {
        "formula": "Sn",
        "label": "Олово Tin",
        "est": "(Kr)4d105s25p2",
        "description": "",
        "mass": "118.71",
        "density": "7300",
        "melting": "231.9",
        "boil": " ",
        "heat": "0.226",
        "electronegativity": "1.8",
        "covalentRadius": "1.41",
        "1stIonizerPotential": "7.34"
    },
    {
        "formula": "Sb",
        "label": "Сурьма Antimony",
        "est": "(Kr)4d105s25p3",
        "description": "",
        "mass": "121.76",
        "density": "6620",
        "melting": "630.5",
        "boil": " ",
        "heat": "0.205",
        "electronegativity": "1.9",
        "covalentRadius": "1.40",
        "1stIonizerPotential": "8.64"
    },
    {
        "formula": "Te",
        "label": "Теллур Tellurium",
        "est": "(Kr)4d105s25p4",
        "description": "",
        "mass": "127.6",
        "density": "6240",
        "melting": "449.5",
        "boil": "990",
        "heat": "0.197",
        "electronegativity": "2.1",
        "covalentRadius": "1.36",
        "1stIonizerPotential": "9.01"
    },
    {
        "formula": "I",
        "color": "0xA057E6",
        "shadow": "0xA429F4",
        "label": "Иод Iodine",
        "est": "(Kr)4d105s25p5",
        "description": "",
        "mass": "126.90",
        "density": "4940",
        "melting": "113.7",
        "boil": "183.5",
        "heat": "0.218",
        "electronegativity": "2.5",
        "covalentRadius": "1.33",
        "1stIonizerPotential": "10.45"
    },
    {
        "formula": "Xe",
        "label": "Ксенон Xenon",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "est": "(Kr)4d105s25p6",
        "description": "",
        "mass": "131.29",
        "density": "5.86",
        "melting": "-111.9",
        "boil": "-108",
        "heat": "0.158",
        "electronegativity": " ",
        "covalentRadius": "1.31",
        "1stIonizerPotential": "12.13"
    },
    {
        "formula": "Cs",
        "label": "Цезий Caesium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "est": "(Xe)6s1",
        "description": "",
        "mass": "132.91",
        "density": "1900",
        "melting": "28.5",
        "boil": " ",
        "heat": "0.218",
        "electronegativity": "0.7",
        "covalentRadius": "2.35",
        "1stIonizerPotential": "3.89"
    },
    {
        "formula": "Ba",
        "label": "Барий Barium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)6s2",
        "description": "",
        "mass": "137.33",
        "density": "3500",
        "melting": "729",
        "boil": " ",
        "heat": "0.285",
        "electronegativity": "0.9",
        "covalentRadius": "1.98",
        "1stIonizerPotential": "5.19"
    },
    {
        "formula": "La",
        "label": "Лантан Lanthanum",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)5d16s2",
        "description": "",
        "mass": "138.91",
        "density": "6170",
        "melting": "920",
        "boil": " ",
        "heat": "0.188",
        "electronegativity": "1.1",
        "covalentRadius": "1.69",
        "1stIonizerPotential": "5.61"
    },
    {
        "formula": "Ce",
        "label": "Церий Cerium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f25d06s2",
        "description": "",
        "mass": "140.12",
        "density": "6770",
        "melting": "795",
        "boil": " ",
        "heat": "0.176",
        "electronegativity": "1.1",
        "covalentRadius": "1.65",
        "1stIonizerPotential": "6.54"
    },
    {
        "formula": "Pr",
        "label": "Празеодим Praseodymium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f35d06s2",
        "description": "",
        "mass": "140.91",
        "density": "6780",
        "melting": "935",
        "boil": " ",
        "heat": "0.201",
        "electronegativity": "1.1",
        "covalentRadius": "1.65",
        "1stIonizerPotential": "5.76"
    },
    {
        "formula": "Nd",
        "label": "Неодим Neodymium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f45d06s2",
        "description": "",
        "mass": "144.24",
        "density": "7000",
        "melting": "1024",
        "boil": " ",
        "heat": "0.188",
        "electronegativity": "1.2",
        "covalentRadius": "1.64",
        "1stIonizerPotential": "6.31"
    },
    {
        "formula": "Pm",
        "label": "Прометий Promethium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f55d06s2",
        "description": "",
        "mass": "[145]",
        "density": "7220",
        "melting": "1080",
        "boil": " ",
        "heat": "0.168",
        "electronegativity": "1.1",
        "covalentRadius": "1.64",
        "1stIonizerPotential": "5.90"
    },
    {
        "formula": "Sm",
        "label": "Самарий Samarium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f65d06s2",
        "description": "",
        "mass": "150.36",
        "density": "7540",
        "melting": "1072",
        "boil": " ",
        "heat": "0.176",
        "electronegativity": "1.2",
        "covalentRadius": "1.62",
        "1stIonizerPotential": "5.64"
    },
    {
        "formula": "Eu",
        "label": "Европий Europium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f75d06s2",
        "description": "",
        "mass": "151.96",
        "density": "5260",
        "melting": "826",
        "boil": " ",
        "heat": "0.163",
        "electronegativity": "1.2",
        "covalentRadius": "1.85",
        "1stIonizerPotential": "5.67"
    },
    {
        "formula": "Gd",
        "label": "Гадолиний Gadolinium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f75d16s2",
        "description": "",
        "mass": "157.25",
        "density": "7890",
        "melting": "1312",
        "boil": " ",
        "heat": "0.297",
        "electronegativity": "1.1",
        "covalentRadius": "1.61",
        "1stIonizerPotential": "6.16"
    },
    {
        "formula": "Tb",
        "label": "Тербий Terbium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f95d06s2",
        "description": "",
        "mass": "158.93",
        "density": "8270",
        "melting": "1356",
        "boil": " ",
        "heat": "0.184",
        "electronegativity": "1.2",
        "covalentRadius": "1.59",
        "1stIonizerPotential": "5.86"
    },
    {
        "formula": "Dy",
        "label": "Диспрозий Dysprosium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f105d06s2",
        "description": "",
        "mass": "162.50",
        "density": "8540",
        "melting": "1407",
        "boil": " ",
        "heat": "0.172",
        "electronegativity": "1.2",
        "covalentRadius": "1.59",
        "1stIonizerPotential": "5.94"
    },
    {
        "formula": "Ho",
        "label": "Гольмий Holmium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f115d06s2",
        "description": "",
        "mass": "164.93",
        "density": "8800",
        "melting": "1461",
        "boil": " ",
        "heat": "0.163",
        "electronegativity": "1.2",
        "covalentRadius": "1.57",
        "1stIonizerPotential": "6.90"
    },
    {
        "formula": "Er",
        "label": "Эрбий Erbium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f125d06s2",
        "description": "",
        "mass": "167.26",
        "density": "9050",
        "melting": "1497",
        "boil": " ",
        "heat": "0.167",
        "electronegativity": "1.2",
        "covalentRadius": "1.57",
        "1stIonizerPotential": "6.70"
    },
    {
        "formula": "Tm",
        "label": "Тулий Thulium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f135d06s2",
        "description": "",
        "mass": "168.93",
        "density": "9330",
        "melting": "1545",
        "boil": " ",
        "heat": "0.159",
        "electronegativity": "1.2",
        "covalentRadius": "1.56",
        "1stIonizerPotential": "6.60"
    },
    {
        "formula": "Yb",
        "label": "Иттербий Ytterbium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d06s2",
        "description": "",
        "mass": "173.04",
        "density": "6980",
        "melting": "824",
        "boil": " ",
        "heat": "0.147",
        "electronegativity": "1.1",
        "covalentRadius": "1.70",
        "1stIonizerPotential": "6.22"
    },
    {
        "formula": "Lu",
        "label": "Лютеций Lutetium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d16s2",
        "description": "",
        "mass": "174.97",
        "density": "9840",
        "melting": "1652",
        "boil": " ",
        "heat": "0.155",
        "electronegativity": "1.2",
        "covalentRadius": "1.56",
        "1stIonizerPotential": "6.15"
    },
    {
        "formula": "Hf",
        "label": "Гафний Hafnium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d26s2",
        "description": "",
        "mass": "178.49",
        "density": "13100",
        "melting": "2222",
        "boil": " ",
        "heat": "0.147",
        "electronegativity": "1.3",
        "covalentRadius": "1.44",
        "1stIonizerPotential": "7.30"
    },
    {
        "formula": "Ta",
        "label": "Тантал Tantalum",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d36s2",
        "description": "",
        "mass": "180.95",
        "density": "16600",
        "melting": "2996",
        "boil": " ",
        "heat": "0.151",
        "electronegativity": "1.5",
        "covalentRadius": "1.34",
        "1stIonizerPotential": "7.70"
    },
    {
        "formula": "W",
        "label": "Вольфрам Tungsten",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d46s2",
        "description": "",
        "mass": "183.84",
        "density": "19300",
        "melting": "3410",
        "boil": " ",
        "heat": "0.134",
        "electronegativity": "1.7",
        "covalentRadius": "1.30",
        "1stIonizerPotential": "7.98"
    },
    {
        "formula": "Re",
        "label": "Рений Rhenium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d56s2",
        "description": "",
        "mass": "186.21",
        "density": "21000",
        "melting": "3180",
        "boil": " ",
        "heat": "0.138",
        "electronegativity": "1.9",
        "covalentRadius": "1.28",
        "1stIonizerPotential": "7.87"
    },
    {
        "formula": "Os",
        "label": "Осмий Osmium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d66s2",
        "description": "",
        "mass": "190.23",
        "density": "22500",
        "melting": "3000",
        "boil": " ",
        "heat": "0.13",
        "electronegativity": "2.2",
        "covalentRadius": "1.26",
        "1stIonizerPotential": "8.70"
    },
    {
        "formula": "Ir",
        "label": "Иридий Iridium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d76s2",
        "description": "",
        "mass": "192.22",
        "density": "22400",
        "melting": "2410",
        "boil": " ",
        "heat": "0.13",
        "electronegativity": "2.2",
        "covalentRadius": "1.27",
        "1stIonizerPotential": "9.00"
    },
    {
        "formula": "Pt",
        "label": "Платина Platinum",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d96s1",
        "description": "",
        "mass": "195.08",
        "density": "21400",
        "melting": "1769",
        "boil": " ",
        "heat": "0.134",
        "electronegativity": "2.2",
        "covalentRadius": "1.30",
        "1stIonizerPotential": "9.00"
    },
    {
        "formula": "Au",
        "label": "Золото Gold",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d106s1",
        "description": "",
        "mass": "196.97",
        "density": "19300",
        "melting": "1063",
        "boil": " ",
        "heat": "0.13",
        "electronegativity": "2.4",
        "covalentRadius": "1.34",
        "1stIonizerPotential": "9.22"
    },
    {
        "formula": "Hg",
        "label": "Ртуть Mercury",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d106s2",
        "description": "",
        "mass": "200.59",
        "density": "13520",
        "melting": "-38.9",
        "boil": "357",
        "heat": "0.138",
        "electronegativity": "1.9",
        "covalentRadius": "1.49",
        "1stIonizerPotential": "10.43"
    },
    {
        "formula": "Tl",
        "label": "Таллий Thallium",
        "est": "(Xe)4f145d106s26p1",
        "description": "",
        "mass": "204.38",
        "density": "11850",
        "melting": "303",
        "boil": "1457",
        "heat": "0.13",
        "electronegativity": "1.8",
        "covalentRadius": "1.48",
        "1stIonizerPotential": "9.01"
    },
    {
        "formula": "Pb",
        "label": "Свинец Lead",
        "est": "(Xe)4f145d106s26p2",
        "description": "",
        "mass": "207.2",
        "density": "11400",
        "melting": "327.4",
        "boil": "1740",
        "heat": "0.13",
        "electronegativity": "1.8",
        "covalentRadius": "1.47",
        "1stIonizerPotential": "7.37"
    },
    {
        "formula": "Bi",
        "label": "Висмут Bismuth",
        "est": "(Xe)4f145d106s26p3",
        "description": "",
        "mass": "208.98",
        "density": "9800",
        "melting": "271.3",
        "boil": "1560",
        "heat": "0.142",
        "electronegativity": "1.9",
        "covalentRadius": "1.46",
        "1stIonizerPotential": "7.29"
    },
    {
        "formula": "Po",
        "label": "Полоний Polonium",
        "est": "(Xe)4f145d106s26p4",
        "description": "",
        "mass": "[209]",
        "density": "9300",
        "melting": "254",
        "boil": "962",
        "heat": "0.125",
        "electronegativity": "2.0",
        "covalentRadius": "1.46",
        "1stIonizerPotential": "8.43"
    },
    {
        "formula": "At",
        "label": "Астат Astatine",
        "est": "(Xe)4f145d106s26p5",
        "description": "",
        "mass": "[210]",
        "density": " ",
        "melting": "302",
        "boil": "337",
        "heat": " ",
        "electronegativity": "2.2",
        "covalentRadius": "1.45",
        "1stIonizerPotential": " "
    },
    {
        "formula": "Rn",
        "label": "Радон Radon",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Xe)4f145d106s26p6",
        "description": "",
        "mass": "[222]",
        "density": "9.91",
        "melting": "-71",
        "boil": "-62",
        "heat": "0.09",
        "electronegativity": " ",
        "covalentRadius": "2.14",
        "1stIonizerPotential": "10.75"
    },
    {
        "formula": "Fr",
        "label": "Франций Francium",
        "est": "(Rn)7s1",
        "description": "",
        "mass": "[223]",
        "density": " ",
        "melting": "27",
        "boil": " ",
        "heat": " ",
        "electronegativity": "0.7",
        "covalentRadius": " ",
        "1stIonizerPotential": "4.08"
    },
    {
        "formula": "Ra",
        "label": "Радий Radium",
        "est": "(Rn)7s2",
        "description": "",
        "mass": "[226]",
        "density": "5000",
        "melting": "700",
        "boil": " ",
        "heat": " ",
        "electronegativity": "0.9",
        "covalentRadius": " ",
        "1stIonizerPotential": "5.28"
    },
    {
        "formula": "Ac",
        "label": "Актиний Actinium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)6d17s2",
        "description": "",
        "mass": "[227]",
        "density": "10070",
        "melting": "1050",
        "boil": " ",
        "heat": " ",
        "electronegativity": "1.1",
        "covalentRadius": " ",
        "1stIonizerPotential": "5.17"
    },
    {
        "formula": "Th",
        "label": "Торий Thorium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)6d27s2",
        "description": "",
        "mass": "232.04",
        "density": "11700",
        "melting": "1750",
        "boil": " ",
        "heat": "0.142",
        "electronegativity": "1.3",
        "covalentRadius": "1.65",
        "1stIonizerPotential": "6.08"
    },
    {
        "formula": "Pa",
        "label": "Проактиний Protactinium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f26d17s2",
        "description": "",
        "mass": "231.04",
        "density": "15400",
        "melting": "1560",
        "boil": " ",
        "heat": "0.121",
        "electronegativity": "1.5",
        "covalentRadius": " ",
        "1stIonizerPotential": "5.89"
    },
    {
        "formula": "U",
        "label": "Уран Uranium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f36d17s2",
        "description": "",
        "mass": "238.03",
        "density": "19050",
        "melting": "1132",
        "boil": " ",
        "heat": "0.117",
        "electronegativity": "1.3",
        "covalentRadius": "1.42",
        "1stIonizerPotential": "6.05"
    },
    {
        "formula": "Np",
        "label": "Нептуний Neptunium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f46d17s2",
        "description": "",
        "mass": "[237]",
        "density": "20450",
        "melting": "640",
        "boil": " ",
        "heat": "0.12",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.19"
    },
    {
        "formula": "Pu",
        "label": "Плутоний Plutonium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f66d07s2",
        "description": "",
        "mass": "[244]",
        "density": "19840",
        "melting": "640",
        "boil": " ",
        "heat": "0.13",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.06"
    },
    {
        "formula": "Am",
        "label": "Америций Americium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f76d07s2",
        "description": "",
        "mass": "[243]",
        "density": "13670",
        "melting": "994",
        "boil": " ",
        "heat": "0.138",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "5.99"
    },
    {
        "formula": "Cm",
        "label": "Кюрий Curium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f76d17s2",
        "description": "",
        "mass": "[247]",
        "density": "13510",
        "melting": "1340",
        "boil": " ",
        "heat": " ",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.02"
    },
    {
        "formula": "Bk",
        "label": "Берклий Berkelium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f96d07s2",
        "description": "",
        "mass": "[247]",
        "density": "14000",
        "melting": " ",
        "boil": " ",
        "heat": " ",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.23"
    },
    {
        "formula": "Cf",
        "label": "Калифорний Californium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f106d07s2",
        "description": "",
        "mass": "[251]",
        "density": " ",
        "melting": " ",
        "boil": " ",
        "heat": " ",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.30"
    },
    {
        "formula": "Es",
        "label": "Эйнштейний Einsteinium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f116d07s2",
        "description": "",
        "mass": "[252]",
        "density": " ",
        "melting": " ",
        "boil": " ",
        "heat": " ",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.42"
    },
    {
        "formula": "Fm",
        "label": "Фермий Fermium",
        "color": "0xF96727",
        "shadow": "0xE96219",
        "est": "(Rn)5f126d07s2",
        "description": "",
        "mass": "[257]",
        "density": " ",
        "melting": " ",
        "boil": " ",
        "heat": " ",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.50"
    },
    {
        "formula": "Md",
        "label": "Менделевий Mendelevium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f136d07s2",
        "description": "",
        "mass": "[258]",
        "density": " ",
        "melting": " ",
        "boil": " ",
        "heat": " ",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.58"
    },
    {
        "formula": "No",
        "label": "Нобелий Nobelium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f146d07s2",
        "description": "",
        "mass": "[259]",
        "density": " ",
        "melting": " ",
        "boil": " ",
        "heat": " ",
        "electronegativity": "1.3",
        "covalentRadius": " ",
        "1stIonizerPotential": "6.65"
    },
    {
        "formula": "Lr",
        "label": "Лоуренсий Lawrencium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "est": "(Rn)5f146d17s2",
        "description": "",
        "mass": "[262]",
        "density": " ",
        "melting": " ",
        "boil": " ",
        "heat": " ",
        "electronegativity": " ",
        "covalentRadius": " ",
        "1stIonizerPotential": " "
    }
]
},{}],10:[function(require,module,exports){
// This THREEx helper makes it easy to handle the mouse events in your 3D scene
//
// * CHANGES NEEDED
//   * handle drag/drop
//   * notify events not object3D - like DOM
//     * so single object with property
//   * DONE bubling implement bubling/capturing
//   * DONE implement event.stopPropagation()
//   * DONE implement event.type = "click" and co
//   * DONE implement event.target
//
// # Lets get started
//
// First you include it in your page
//
// ```<script src='threex.domevent.js'>< /script>```
//
// # use the object oriented api
//
// You bind an event like this
// 
// ```mesh.on('click', function(object3d){ ... })```
//
// To unbind an event, just do
//
// ```mesh.off('click', function(object3d){ ... })```
//
// As an alternative, there is another naming closer DOM events.
// Pick the one you like, they are doing the same thing
//
// ```mesh.addEventListener('click', function(object3d){ ... })```
// ```mesh.removeEventListener('click', function(object3d){ ... })```
//
// # Supported Events
//
// Always in a effort to stay close to usual pratices, the events name are the same as in DOM.
// The semantic is the same too.
// Currently, the available events are
// [click, dblclick, mouseup, mousedown](http://www.quirksmode.org/dom/events/click.html),
// [mouseover and mouse out](http://www.quirksmode.org/dom/events/mouseover.html).
//
// # use the standalone api
//
// The object-oriented api modifies THREE.Object3D class.
// It is a global class, so it may be legitimatly considered unclean by some people.
// If this bother you, simply do ```THREEx.DomEvents.noConflict()``` and use the
// standalone API. In fact, the object oriented API is just a thin wrapper
// on top of the standalone API.
//
// First, you instanciate the object
//
// ```var domEvent = new THREEx.DomEvent();```
// 
// Then you bind an event like this
//
// ```domEvent.bind(mesh, 'click', function(object3d){ object3d.scale.x *= 2; });```
//
// To unbind an event, just do
//
// ```domEvent.unbind(mesh, 'click', callback);```
//
// 
// # Code

//

/** @namespace */
var THREEx		= THREEx 		|| {};

// # Constructor
THREEx.DomEvents	= function(camera, domElement)
{
	this._camera	= camera || null;
	this._domElement= domElement || document;
	this._raycaster = new THREE.Raycaster();
	this._selected	= null;
	this._boundObjs	= {};
	// Bind dom event for mouse and touch
	var _this	= this;

	this._$onClick		= function(){ _this._onClick.apply(_this, arguments);		};
	this._$onDblClick	= function(){ _this._onDblClick.apply(_this, arguments);	};
	this._$onMouseMove	= function(){ _this._onMouseMove.apply(_this, arguments);	};
	this._$onMouseDown	= function(){ _this._onMouseDown.apply(_this, arguments);	};
	this._$onMouseUp	= function(){ _this._onMouseUp.apply(_this, arguments);		};
	this._$onTouchMove	= function(){ _this._onTouchMove.apply(_this, arguments);	};
	this._$onTouchStart	= function(){ _this._onTouchStart.apply(_this, arguments);	};
	this._$onTouchEnd	= function(){ _this._onTouchEnd.apply(_this, arguments);	};
	this._$onContextmenu	= function(){ _this._onContextmenu.apply(_this, arguments);	};
	this._domElement.addEventListener( 'click'	, this._$onClick	, false );
	this._domElement.addEventListener( 'dblclick'	, this._$onDblClick	, false );
	this._domElement.addEventListener( 'mousemove'	, this._$onMouseMove	, false );
	this._domElement.addEventListener( 'mousedown'	, this._$onMouseDown	, false );
	this._domElement.addEventListener( 'mouseup'	, this._$onMouseUp	, false );
	this._domElement.addEventListener( 'touchmove'	, this._$onTouchMove	, false );
	this._domElement.addEventListener( 'touchstart'	, this._$onTouchStart	, false );
	this._domElement.addEventListener( 'touchend'	, this._$onTouchEnd	, false );
	this._domElement.addEventListener( 'contextmenu', this._$onContextmenu	, false );
	
}

// # Destructor
THREEx.DomEvents.prototype.destroy	= function()
{
	// unBind dom event for mouse and touch
	this._domElement.removeEventListener( 'click'		, this._$onClick	, false );
	this._domElement.removeEventListener( 'dblclick'	, this._$onDblClick	, false );
	this._domElement.removeEventListener( 'mousemove'	, this._$onMouseMove	, false );
	this._domElement.removeEventListener( 'mousedown'	, this._$onMouseDown	, false );
	this._domElement.removeEventListener( 'mouseup'		, this._$onMouseUp	, false );
	this._domElement.removeEventListener( 'touchmove'	, this._$onTouchMove	, false );
	this._domElement.removeEventListener( 'touchstart'	, this._$onTouchStart	, false );
	this._domElement.removeEventListener( 'touchend'	, this._$onTouchEnd	, false );
	this._domElement.removeEventListener( 'contextmenu'	, this._$onContextmenu	, false );
}

THREEx.DomEvents.eventNames	= [
	"click",
	"dblclick",
	"mouseover",
	"mouseout",
	"mousemove",
	"mousedown",
	"mouseup",
	"contextmenu",
	"touchstart",
	"touchend"
];

THREEx.DomEvents.prototype._getRelativeMouseXY	= function(domEvent){
	var element = domEvent.target || domEvent.srcElement;
	if (element.nodeType === 3) {
		element = element.parentNode; // Safari fix -- see http://www.quirksmode.org/js/events_properties.html
	}
	
	//get the real position of an element relative to the page starting point (0, 0)
	//credits go to brainjam on answering http://stackoverflow.com/questions/5755312/getting-mouse-position-relative-to-content-area-of-an-element
	var elPosition	= { x : 0 , y : 0};
	var tmpElement	= element;
	//store padding
	var style	= getComputedStyle(tmpElement, null);
	elPosition.y += parseInt(style.getPropertyValue("padding-top"), 10);
	elPosition.x += parseInt(style.getPropertyValue("padding-left"), 10);
	//add positions
	do {
		elPosition.x	+= tmpElement.offsetLeft;
		elPosition.y	+= tmpElement.offsetTop;
		style		= getComputedStyle(tmpElement, null);

		elPosition.x	+= parseInt(style.getPropertyValue("border-left-width"), 10);
		elPosition.y	+= parseInt(style.getPropertyValue("border-top-width"), 10);
	} while(tmpElement = tmpElement.offsetParent);
	
	var elDimension	= {
		width	: (element === window) ? window.innerWidth	: element.offsetWidth,
		height	: (element === window) ? window.innerHeight	: element.offsetHeight
	};
	
	return {
		x : +((domEvent.pageX - elPosition.x) / elDimension.width ) * 2 - 1,
		y : -((domEvent.pageY - elPosition.y) / elDimension.height) * 2 + 1
	};
};


/********************************************************************************/
/*		domevent context						*/
/********************************************************************************/

// handle domevent context in object3d instance

THREEx.DomEvents.prototype._objectCtxInit	= function(object3d){
	object3d._3xDomEvent = {};
}
THREEx.DomEvents.prototype._objectCtxDeinit	= function(object3d){
	delete object3d._3xDomEvent;
}
THREEx.DomEvents.prototype._objectCtxIsInit	= function(object3d){
	return object3d._3xDomEvent ? true : false;
}
THREEx.DomEvents.prototype._objectCtxGet		= function(object3d){
	return object3d._3xDomEvent;
}

/********************************************************************************/
/*										*/
/********************************************************************************/

/**
 * Getter/Setter for camera
*/
THREEx.DomEvents.prototype.camera	= function(value)
{
	if( value )	this._camera	= value;
	return this._camera;
}

THREEx.DomEvents.prototype.bind	= function(object3d, eventName, callback, useCapture)
{
	console.assert( THREEx.DomEvents.eventNames.indexOf(eventName) !== -1, "not available events:"+eventName );

	if( !this._objectCtxIsInit(object3d) )	this._objectCtxInit(object3d);
	var objectCtx	= this._objectCtxGet(object3d);	
	if( !objectCtx[eventName+'Handlers'] )	objectCtx[eventName+'Handlers']	= [];

	objectCtx[eventName+'Handlers'].push({
		callback	: callback,
		useCapture	: useCapture
	});
	
	// add this object in this._boundObjs
	if( this._boundObjs[eventName] === undefined ){
		this._boundObjs[eventName]	= [];	
	}
	this._boundObjs[eventName].push(object3d);
}
THREEx.DomEvents.prototype.addEventListener	= THREEx.DomEvents.prototype.bind

THREEx.DomEvents.prototype.unbind	= function(object3d, eventName, callback, useCapture)
{
	console.assert( THREEx.DomEvents.eventNames.indexOf(eventName) !== -1, "not available events:"+eventName );

	if( !this._objectCtxIsInit(object3d) )	this._objectCtxInit(object3d);

	var objectCtx	= this._objectCtxGet(object3d);
	if( !objectCtx[eventName+'Handlers'] )	objectCtx[eventName+'Handlers']	= [];

	var handlers	= objectCtx[eventName+'Handlers'];
	for(var i = 0; i < handlers.length; i++){
		var handler	= handlers[i];
		if( callback != handler.callback )	continue;
		if( useCapture != handler.useCapture )	continue;
		handlers.splice(i, 1)
		break;
	}
	// from this object from this._boundObjs
	var index	= this._boundObjs[eventName].indexOf(object3d);
	console.assert( index !== -1 );
	this._boundObjs[eventName].splice(index, 1);
}
THREEx.DomEvents.prototype.removeEventListener	= THREEx.DomEvents.prototype.unbind

THREEx.DomEvents.prototype._bound	= function(eventName, object3d)
{
	var objectCtx	= this._objectCtxGet(object3d);
	if( !objectCtx )	return false;
	return objectCtx[eventName+'Handlers'] ? true : false;
}

/********************************************************************************/
/*		onMove								*/
/********************************************************************************/

// # handle mousemove kind of events

THREEx.DomEvents.prototype._onMove	= function(eventName, mouseX, mouseY, origDomEvent)
{
//console.log('eventName', eventName, 'boundObjs', this._boundObjs[eventName])
	// get objects bound to this event
	var boundObjs	= this._boundObjs[eventName];
	if( boundObjs === undefined || boundObjs.length === 0 )	return;
	// compute the intersection
	var vector = new THREE.Vector2();

	// update the picking ray with the camera and mouse position
	vector.set( mouseX, mouseY );
	this._raycaster.setFromCamera( vector, this._camera );	

	var intersects = this._raycaster.intersectObjects( boundObjs );

	var oldSelected	= this._selected;
	
	if( intersects.length > 0 ){
		var notifyOver, notifyOut, notifyMove;
		var intersect	= intersects[ 0 ];
		var newSelected	= intersect.object;
		this._selected	= newSelected;
		// if newSelected bound mousemove, notify it
		notifyMove	= this._bound('mousemove', newSelected);

		if( oldSelected != newSelected ){
			// if newSelected bound mouseenter, notify it
			notifyOver	= this._bound('mouseover', newSelected);
			// if there is a oldSelect and oldSelected bound mouseleave, notify it
			notifyOut	= oldSelected && this._bound('mouseout', oldSelected);
		}
	}else{
		// if there is a oldSelect and oldSelected bound mouseleave, notify it
		notifyOut	= oldSelected && this._bound('mouseout', oldSelected);
		this._selected	= null;
	}


	// notify mouseMove - done at the end with a copy of the list to allow callback to remove handlers
	notifyMove && this._notify('mousemove', newSelected, origDomEvent, intersect);
	// notify mouseEnter - done at the end with a copy of the list to allow callback to remove handlers
	notifyOver && this._notify('mouseover', newSelected, origDomEvent, intersect);
	// notify mouseLeave - done at the end with a copy of the list to allow callback to remove handlers
	notifyOut  && this._notify('mouseout' , oldSelected, origDomEvent, intersect);
}


/********************************************************************************/
/*		onEvent								*/
/********************************************************************************/

// # handle click kind of events

THREEx.DomEvents.prototype._onEvent	= function(eventName, mouseX, mouseY, origDomEvent)
{
	//console.log('eventName', eventName, 'boundObjs', this._boundObjs[eventName])
	// get objects bound to this event
	var boundObjs	= this._boundObjs[eventName];
	if( boundObjs === undefined || boundObjs.length === 0 )	return;
	// compute the intersection
	var vector = new THREE.Vector2();

	// update the picking ray with the camera and mouse position
	vector.set( mouseX, mouseY );
	this._raycaster.setFromCamera( vector, this._camera );	

	var intersects = this._raycaster.intersectObjects( boundObjs, true);
	// if there are no intersections, return now
	if( intersects.length === 0 )	return;

	// init some variables
	var intersect	= intersects[0];
	var object3d	= intersect.object;
	var objectCtx	= this._objectCtxGet(object3d);
	var objectParent = object3d.parent;

	while ( typeof(objectCtx) == 'undefined' && objectParent )
	{
	    objectCtx = this._objectCtxGet(objectParent);
	    objectParent = objectParent.parent;
	}
	if( !objectCtx )	return;

	// notify handlers
	this._notify(eventName, object3d, origDomEvent, intersect);
}

THREEx.DomEvents.prototype._notify	= function(eventName, object3d, origDomEvent, intersect)
{
	var objectCtx	= this._objectCtxGet(object3d);
	var handlers	= objectCtx ? objectCtx[eventName+'Handlers'] : null;
	
	// parameter check
	console.assert(arguments.length === 4)

	// do bubbling
	if( !objectCtx || !handlers || handlers.length === 0 ){
		object3d.parent && this._notify(eventName, object3d.parent, origDomEvent, intersect);
		return;
	}
	
	// notify all handlers
	var handlers	= objectCtx[eventName+'Handlers'];
	for(var i = 0; i < handlers.length; i++){
		var handler	= handlers[i];
		var toPropagate	= true;
		handler.callback({
			type		: eventName,
			target		: object3d,
			origDomEvent	: origDomEvent,
			intersect	: intersect,
			stopPropagation	: function(){
				toPropagate	= false;
			}
		});
		if( !toPropagate )	continue;
		// do bubbling
		if( handler.useCapture === false ){
			object3d.parent && this._notify(eventName, object3d.parent, origDomEvent, intersect);
		}
	}
}

/********************************************************************************/
/*		handle mouse events						*/
/********************************************************************************/
// # handle mouse events

THREEx.DomEvents.prototype._onMouseDown	= function(event){ return this._onMouseEvent('mousedown', event);	}
THREEx.DomEvents.prototype._onMouseUp	= function(event){ return this._onMouseEvent('mouseup'	, event);	}


THREEx.DomEvents.prototype._onMouseEvent	= function(eventName, domEvent)
{
	var mouseCoords = this._getRelativeMouseXY(domEvent);
	this._onEvent(eventName, mouseCoords.x, mouseCoords.y, domEvent);
}

THREEx.DomEvents.prototype._onMouseMove	= function(domEvent)
{
	var mouseCoords = this._getRelativeMouseXY(domEvent);
	this._onMove('mousemove', mouseCoords.x, mouseCoords.y, domEvent);
	this._onMove('mouseover', mouseCoords.x, mouseCoords.y, domEvent);
	this._onMove('mouseout' , mouseCoords.x, mouseCoords.y, domEvent);
}

THREEx.DomEvents.prototype._onClick		= function(event)
{
	// TODO handle touch ?
	this._onMouseEvent('click'	, event);
}
THREEx.DomEvents.prototype._onDblClick		= function(event)
{
	// TODO handle touch ?
	this._onMouseEvent('dblclick'	, event);
}

THREEx.DomEvents.prototype._onContextmenu	= function(event)
{
	//TODO don't have a clue about how this should work with touch..
	this._onMouseEvent('contextmenu'	, event);
}

/********************************************************************************/
/*		handle touch events						*/
/********************************************************************************/
// # handle touch events


THREEx.DomEvents.prototype._onTouchStart	= function(event){ return this._onTouchEvent('touchstart', event);	}
THREEx.DomEvents.prototype._onTouchEnd	= function(event){ return this._onTouchEvent('touchend'	, event);	}

THREEx.DomEvents.prototype._onTouchMove	= function(domEvent)
{
	if( domEvent.touches.length != 1 )	return undefined;

	domEvent.preventDefault();

	var mouseX	= +(domEvent.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
	var mouseY	= -(domEvent.touches[ 0 ].pageY / window.innerHeight) * 2 + 1;
	this._onMove('mousemove', mouseX, mouseY, domEvent);
	this._onMove('mouseover', mouseX, mouseY, domEvent);
	this._onMove('mouseout' , mouseX, mouseY, domEvent);
}

THREEx.DomEvents.prototype._onTouchEvent	= function(eventName, domEvent)
{
	if( domEvent.touches.length != 1 )	return undefined;

	domEvent.preventDefault();

	var mouseX	= +(domEvent.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
	var mouseY	= -(domEvent.touches[ 0 ].pageY / window.innerHeight) * 2 + 1;
	this._onEvent(eventName, mouseX, mouseY, domEvent);	
}

module.exports = THREEx.DomEvents;
},{}],11:[function(require,module,exports){
const Molecule = require('./Molecule');
const OrbitControls = require('./OrbitControls');
const DomEvents = require('./domEvents');

class Model {
	constructor(w, h) {
		this.w = w - w/100*25;
		this.h = h;

		this.molecules = [];

		// init three.js
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		this.renderer.setClearColor(0xffffff, 0);
		this.renderer.setSize(this.w, this.h);

		this.wrap = document.getElementById('model');
		this.wrap.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 0.1, 1000);
		this.orbit = new THREE.OrbitControls(this.camera, this.renderer.domElement, this.wrap);
		this.scene = new THREE.Scene();

		this.lights = [];
		this.lights[0] = new THREE.PointLight(0xffffff, 1, 0);
		this.lights[1] = new THREE.PointLight(0xffffff, 1, 0);
		this.lights[2] = new THREE.PointLight(0xffffff, 1, 0);

		this.lights[0].position.set(0, 200, 0);
		this.lights[1].position.set(100, 200, 100);
		this.lights[2].position.set(-100, -200, -100);

		this.scene.add(this.lights[0]);
		this.scene.add(this.lights[1]);
		this.scene.add(this.lights[2]);
		
		this.domEvents = new DomEvents(this.camera, this.wrap);
	}

	resize(w, h) {
		this.w = w;
		this.h = h;

		this.camera.aspect = this.w/this.h;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.w, this.h);	
	}

	addMolecule(data) {
		let mol = new Molecule(this, this.molecules.length, data);
		return this.molecules.push(mol);
	}
	removeMolecule(i) {
		if(this.molecules[i]) {
			this.scene.remove(this.molecules[i].stage);
			this.molecules.splice(i, 1);
		}
	}

	start() {
		this.loop();
	}

	loop() {
		requestAnimationFrame(() => this.loop());

		this.camera.lookAt(this.scene.position);
		this.camera.updateMatrixWorld();

		for(let i = 0; i < this.molecules.length; i++) {
			this.molecules[i].update();
		}

		this.renderer.render(this.scene, this.camera);
	}
}

module.exports = Model;
},{"./Molecule":7,"./OrbitControls":8,"./domEvents":10}],12:[function(require,module,exports){
const pubchem = require('pubchem-access').domain('compound');

const key = require('./key');
require('./wiki');

module.exports.search = (req, cb) => {
	let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
		'key=' + key +
		'&text=' + encodeURIComponent(req) +
		'&lang=ru-en'

	$.getJSON(translate, (data) => {
		$('#info-substance').show();
		$('#info-atom').hide();
		
		let image = $('#info-substance .image').empty();
		let header = $('#info-substance .header').empty();
		let description = $('#info-substance .description').empty();
		let meta = $('#info-substance .meta').empty();

		$('#info-icon').show();

		pubchem
			.setName(data.text[0].replace('the ', ''))
			.getIUPACName()
			.execute((data, status) => {
				if(status !== 1) {
					cb.error && cb.error();
					$('#info-icon').attr('class', 'icon sticky note outline');
					header.text(req[0].toUpperCase() + req.slice(1));
					description.empty().html(`<p>По запросу <b>"${req}"</b> нет данных на Википедиа</p>`);
					return;
				}

				let wiki = $('<div></div>').wikiblurb({
					wikiURL: "https://ru.wikipedia.org/",
					page: req,
					section: 0,
					callback: () => {
						$('body').append(wiki);
						let table = wiki.find('.infobox tbody');
						
						if(table[0]) {
							$('#info-icon').attr('class', 'lab icon loading');
							$('#info-icon').hide();

							header.text(req[0].toUpperCase() + req.slice(1));
							image.append(table.find('tr img')[0]);

							let wikiDesc = wiki.find('.nbs-wikiblurb > p');
							description.empty().append(wikiDesc);

							$('#info-substance').transition('pulse');
						} else {
							$('#info-icon').attr('class', 'icon sticky note outline');
							description.empty().html(`<p>По запросу <b>"${req}"</b> нет данных на Википедиа</p>`);
						}
					}
				});

				let cid = data.PropertyTable.Properties[0].CID;
				let url3d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/JSON/?record_type=3d&response_type=display`;
				let url2d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/JSON/?record_type=2d&response_type=display`;
				$.getJSON(url3d)
					.done((data) => {
						data.typeStructure = '3d';
						cb.done && cb.done(data);
					})
					.fail(() => {
						$.getJSON(url2d)
							.done((data) => {
								data.typeStructure = '2d';
								cb.done && cb.done(data);
							})
							.fail(() => {
								cb.error && cb.error();
							});
					})
			}, 'JSON', 'raw');
	});
}
},{"./key":13,"./wiki":14,"pubchem-access":2}],13:[function(require,module,exports){
module.exports="trnsl.1.1.20170406T113815Z.902f2f05aa49079b.f99947010f8c6b51cad6a0c3ef790ceb9efbf8a3"
},{}],14:[function(require,module,exports){
/*
* File: jquery.wikiblurb.js
* Version: 1.0.0
* Description: A simple jQuery plugin to get sections of Wikipedia and other Wikis
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

$.fn.wikiblurb = function (options) {

	var defaults = $.extend({
	wikiURL: "https://en.wikipedia.org/",
	apiPath: 'w',
	section: 0,
	page: 'Jimi_Hendrix',
	removeLinks: false,	    
	type: 'all',
	customSelector: '',
		filterSelector: '', 
		callback: function(){ }
	}, options);
	
/******************************
Private Variables
*******************************/         

var object = $(this);
var settings = $.extend(defaults, options);

/******************************
Public Methods
*******************************/         
	
	var methods = {
		
	init: function() {
	return this.each(function () {
		methods.appendHTML();
		methods.initializeItems();
	});
	},

	/******************************
	Utilities
	*******************************/			

	addUnderscores: function(page) {
	if(page.trim().indexOf(' ') !== -1) {
				page.replace(' ', '_');
			}
			return page;
	},            
		
	/******************************
	Append HTML
	*******************************/			

	appendHTML: function() {
	// nothiing to append
	},

	/******************************
	Initialize
	*******************************/			

	initializeItems: function() {
			
			var page = methods.addUnderscores(settings.page);
			
	$.ajax({
		type: "GET",
		url: settings.wikiURL + settings.apiPath + "/api.php?action=parse&format=json&prop=text&section="+settings.section+"&page="+settings.page+"&callback=?",
		contentType: "application/json; charset=utf-8",
		async: true,
		dataType: "json",
		success: function (data, textStatus, jqXHR) {
			try {
				var markup = data.parse.text["*"];
				var blurb = $('<div class="nbs-wikiblurb"></div>').html(markup);

				// remove links?

				if(settings.removeLinks) {
				blurb.find('a').each(function() { 
					$(this).replaceWith($(this).html()); 
				});
				}
				else {
				blurb.find('a').each(function() {
					var link = $(this);
					var relativePath = link.attr('href').substring(1); // remove leading slash
					link.attr('href', settings.wikiURL + relativePath); 
				});			    
				}

				// remove any references
				blurb.find('sup').remove();

				// remove cite error
				blurb.find('.mw-ext-cite-error').remove();

				// filter elements
							if(settings.filterSelector) { 
								blurb.find(settings.filterSelector).remove(); 
							}

				switch(settings.type) {
				case 'text':				
					object.html($(blurb).find('p'));
					break;
					
				case 'blurb':
					object.html($(blurb).find('p:first'));
					break;
				
				case 'infobox':
					object.html($(blurb).find('.infobox'));
					break;
					
				case 'custom':
					object.html($(blurb).find(settings.customSelector));
					break;
				
				default:
					object.html(blurb);
					break;
				}
							
				
			}
			catch(e) {
				methods.showError();
			}

			settings.callback();
		
		},
		error: function (jqXHR, textStatus, errorThrown) {
			methods.showError();
		}
	});
	},
	
	showError: function(){
		object.html('<div class="nbs-wikiblurb-error">There was an error locating your wiki data</div>');
	}

	};
	
	if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
		return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
	} else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
		return methods.init.apply(this);  
	} else {
		$.error( 'Method "' +  method + '" does not exist in wikiblurb plugin!');
	} 
};
},{}],15:[function(require,module,exports){
const Model = require('./Model');
const api = require('./api');

var model = new Model(window.innerWidth, window.innerHeight);
model.start();
 
$('#search-form').on('submit', (e) => {
    e.preventDefault();

    let req = $('#search').val();
    $('#loader').show();

    model.removeMolecule(0);
    $('#error').hide();

    api.search(req, {
    	done: (data) => {
	    	$('#loader').hide();
            $('#model').css('opacity', 0);
            setTimeout(() => $('#model').animate({opacity: 1}, 1000), 500);
            model.addMolecule(data);
	    },
    	error: () => {
    		$('#loader').hide();
    		$('#error').show().transition('pulse');
    		$('#error-info').text(`Вещества по запросу "${req}" нет в базе данных PubChem`);
    	}
    });
});

$('#error').hide();
$('#loader').hide();
$('#search').val('ЛСД');
$('#search-form').submit();

window.onresize = () => {
	model.resize(window.innerWidth, window.innerHeight);
}

},{"./Model":11,"./api":12}]},{},[15])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd3JnXFxEZXNrdG9wXFxNb2xlY3VsZXNcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkM6L1VzZXJzL3dyZy9EZXNrdG9wL01vbGVjdWxlcy9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJDOi9Vc2Vycy93cmcvRGVza3RvcC9Nb2xlY3VsZXMvbm9kZV9tb2R1bGVzL3B1YmNoZW0tYWNjZXNzL2xpYi9wdWJjaGVtLWFjY2Vzcy5qcyIsIkM6L1VzZXJzL3dyZy9EZXNrdG9wL01vbGVjdWxlcy9ub2RlX21vZHVsZXMvcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qcyIsIkM6L1VzZXJzL3dyZy9EZXNrdG9wL01vbGVjdWxlcy9ub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzIiwiQzovVXNlcnMvd3JnL0Rlc2t0b3AvTW9sZWN1bGVzL3NyYy9qcy9Nb2RlbC9BdG9tLmpzIiwiQzovVXNlcnMvd3JnL0Rlc2t0b3AvTW9sZWN1bGVzL3NyYy9qcy9Nb2RlbC9MaW5rLmpzIiwiQzovVXNlcnMvd3JnL0Rlc2t0b3AvTW9sZWN1bGVzL3NyYy9qcy9Nb2RlbC9Nb2xlY3VsZS5qcyIsIkM6L1VzZXJzL3dyZy9EZXNrdG9wL01vbGVjdWxlcy9zcmMvanMvTW9kZWwvT3JiaXRDb250cm9scy5qcyIsIkM6L1VzZXJzL3dyZy9EZXNrdG9wL01vbGVjdWxlcy9zcmMvanMvTW9kZWwvYXRvbXMuanNvbiIsIkM6L1VzZXJzL3dyZy9EZXNrdG9wL01vbGVjdWxlcy9zcmMvanMvTW9kZWwvZG9tRXZlbnRzLmpzIiwiQzovVXNlcnMvd3JnL0Rlc2t0b3AvTW9sZWN1bGVzL3NyYy9qcy9Nb2RlbC9pbmRleC5qcyIsIkM6L1VzZXJzL3dyZy9EZXNrdG9wL01vbGVjdWxlcy9zcmMvanMvYXBpL2luZGV4LmpzIiwiQzovVXNlcnMvd3JnL0Rlc2t0b3AvTW9sZWN1bGVzL3NyYy9qcy9hcGkva2V5Lmpzb24iLCJDOi9Vc2Vycy93cmcvRGVza3RvcC9Nb2xlY3VsZXMvc3JjL2pzL2FwaS93aWtpLmpzIiwiQzovVXNlcnMvd3JnL0Rlc2t0b3AvTW9sZWN1bGVzL3NyYy9qcy9mYWtlX2Q2M2NmNmVmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcm9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9rREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuIiwiKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtcInN1cGVyYWdlbnRcIl0sIGZ1bmN0aW9uKGEwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeShhMCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXBlcmFnZW50XCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KHJlcXVlc3QpO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKHJlcXVlc3QpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG4gICAgLypcbiAgICAgKiBBIG1vZHVsZSB0byBjb21tdW5pY2F0ZSB3aXRoIFB1YkNoZW0uXG4gICAgICogRmFjaWxpdGF0ZXMgdGhlIHVzZSBvZiBQdWJDaGVtIEFQSSBmb3IgSlMgZW52aXJvbm1lbnRzLlxuICAgICAqIFN1aXRhYmxlIGZvciBmcm9udC1lbmQgYW5kIE5vZGUgZGV2ZWxvcG1lbnQuXG4gICAgICogQG1vZHVsZSBwdWJjaGVtLWFwaVxuICAgICAqL1xuICAgIFxuICAgIC8vIEJhc2Ugb2YgdGhlIFB1YmNoZW0gQVBJXG4gICAgdmFyIGJhc2VVcmwgPSBcImh0dHBzOi8vcHViY2hlbS5uY2JpLm5sbS5uaWguZ292L3Jlc3QvcHVnXCI7XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBGaW5kIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gcGFyYW0gYXNzb2NpYXRlZCB3aXRoIHBhc3NlZCBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9uR2V0XSAtIEFkZGl0aW9uYWwgb3B0aW9uIGFzc29jaWF0ZWQgd2l0aCBDbXBkT3BzIG9iai5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGaW5kIChwcm9wLCBvcHRpb25HZXQpIHtcbiAgICAgICAgdGhpcy5wcm9wID0gcHJvcDtcbiAgICAgICAgdGhpcy5vcHRpb25HZXQgPSBvcHRpb25HZXQ7XHRcdCBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhlIGZpbmFsIGNhbGxiYWNrIHBhc3NlZCBieSB1c2VyXG4gICAgICogQGNhbGxiYWNrIGZpbmFsQ2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGRhdGEgLSBwYXJzZWQgcmVzcG9uc2Ugb2J0YWluZWQgZnJvbSBQdWJDaGVtXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtzdGF0dXNdIC0gc3RhdHVzIG9mIHRoZSByZXNwb25zZVxuICAgICAqL1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgb2JqZWN0IHdpdGggdGhlIGZpbmFsIFwiZmluZCgpXCIgZnVuY3Rpb24uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIGFsbW9zdCBjb21wbGV0ZSB1cmwgKGxhY2tzIG9ubHkgZGF0YSBmb3JtYXQpXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqIC0gb2JqZWN0IGNvbnRhaW5pbmcgXCJmaW5kKClcIiBmdW5jdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5maW5kIC0gZmluYWwgZnVuY3Rpb24gY2FsbGluZyBcImV4ZWNTZWFyY2goKVwiXG4gICAgICovXG4gICAgRmluZC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uICh1cmwpIHtcdFx0XG5cdFx0ZnVuY3Rpb24gZXhlY3V0ZSAoY2FsbGJhY2ssIGRhdGFGb3JtYXQsIG9wdGlvbkYpIHtcbiAgICAgICAgICAgIGV4ZWNTZWFyY2godXJsLCBjYWxsYmFjaywge1xuXHRcdFx0XHRwcm9wOiB0aGlzLnByb3AsXG5cdFx0XHRcdG9wdGlvbkY6IG9wdGlvbkYsXG5cdFx0XHRcdG9wdGlvbkdldDogdGhpcy5vcHRpb25HZXQsXG5cdFx0XHRcdGRGOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlY3V0ZTogZXhlY3V0ZS5iaW5kKHRoaXMpXHRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSByZXF1ZXN0IHRvIFB1YkNoZW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIGFsbW9zdCBjb21wbGV0ZSB1cmwgKGxhY2tzIG9ubHkgZGF0YSBmb3JtYXQpXG4gICAgICogQHBhcmFtIHtmaW5hbENhbGxiYWNrfSBjYWxsYmFjayAtIGhhbmRsZXMgdGhlIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIG9iamVjdCB0aGF0IGhvbGRzIGFkZGl0aW9uYWwgaW5mbyAocHJvcGVydHksIGFkZGl0aW9uYWwgb3B0aW9ucywgcmVxdWVzdGVkIGRhdGEgZm9ybWF0KVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoucHJvcCAtIHBhcmFtIGFzc29jaWF0ZWQgd2l0aCBwYXNzZWQgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5vcHRpb25GXSAtIG9wdGlvbiBhc3NvY2lhdGVkIHdpdGggXCJmaW5kKClcIiBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb2JqLm9wdGlvbkdldF0gLSBvcHRpb24gYXNzb2NpYXRlZCB3aXRoIFwiZ2V0XCIgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5kRj1KU09OXSAtIHJlcXVlc3RlZCBkYXRhIGZvcm1hdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGV4ZWNTZWFyY2ggKHVybCwgY2FsbGJhY2ssIG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9iai5kRiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgb2JqLmRGID0gXCJKU09OXCI7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmVxdWVzdFxuICAgICAgICAgICAgLmdldCh1cmwuYXBwZW5kVG9QdWJjaGVtKG9iai5kRikpXG4gICAgICAgICAgICAuZW5kKGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVzcG9uc2UgaXMgc3RhdHVzIE9LLCB0aGVuIHJldHVybnMgc3RhdHVzID0gMS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5kRiAhPT0gXCJKU09OXCIgfHwgb2JqLm9wdGlvbkYgPT09IFwicmF3XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvZXMgbm90IHBhcnNlIHRoZSByZXNwb25zZSBib2R5IGlmIEpTT04gaXMgTk9UIHJlcXVlc3RlZCBvciBcInJhd1wiIG9wdGlvbiBpcyBwYXNzZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMuYm9keSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZXMgdGhlIHJlc3BvbnNlIGJvZHkgYWNjb3JkaW5nbHkgdG8gdGhlIHJlcXVlc3RlZCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socGFyc2VQcm9wZXJ0aWVzKHJlcy5ib2R5LCBvYmoucHJvcCwgb2JqLm9wdGlvbkdldCksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuc2VydmVyRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIGVycm9yIGlzIGVuY291bnRlcmVkLCB0aGVuIHJldHVybnMgc3RhdHVzID0gMi5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXCJTZXJ2aWNlIHVuYXZhaWxhYmxlLlwiLCAyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jbGllbnRFcnJvcikgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZXMgY2xpZW50IGVycm9yLiBSZXR1cm5zIHN0YXR1cyA+IDIsIGFjY29yZGluZyB0byB0aGUgZW5jb3VudGVyZWQgaGluZHJhbmNlLlxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyT2JqID0gbmV3IENsaWVudEVycm9yKHJlcy5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyT2JqLmdldEluZm8oKSwgZXJyT2JqLmdldFN0YXR1cygpKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIENsaWVudEVycm9yIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBib2R5IC0gcmVzcG9uc2UgYm9keSB0byBiZSBwYXJzZWQgYWNjb3JkaW5nbHkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ2xpZW50RXJyb3IgKGJvZHkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlc0Zyb21TZXJ2ZXIgPSBbXCJNaXNzaW5nIENJRCBsaXN0XCIsIFwiTm8gQ0lEIGZvdW5kXCIsIFwiRXhwZWN0ZWQgYSBwcm9wZXJ0eSBsaXN0XCJdO1xuICAgICAgICB0aGlzLnJlc3BvbnNlcyA9IFtcIndyb25nIENJRCBudW1iZXJcIiwgXCJjb21wb3VuZCBub3QgZm91bmRcIiwgXCJleHBlY3RlZCBhIHByb3BlcnR5IGxpc3RcIl07XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGJvZHkuRmF1bHQuTWVzc2FnZTtcbiAgICB9XG5cdFxuXHRDbGllbnRFcnJvci5wcm90b3R5cGUuZ2V0SW5mbyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZXNbdGhpcy5nZXRTdGF0dXMoKSAtIDNdO1xuXHR9O1xuXHRcblx0Q2xpZW50RXJyb3IucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlc0Zyb21TZXJ2ZXIuaW5kZXhPZih0aGlzLm1lc3NhZ2UpICsgMztcblx0fTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBhc3NlZCBwYXJhbWV0ZXIgaXMgYSB2YWxpZCBDQVMgbnVtYmVyLlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b1ZlcmlmeSAtIGlucHV0IHRvIHZlcmlmeVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNoZWNrRWxlbWVudCAodG9WZXJpZnkpIHtcblx0XHR2YXIgcmVnID0gbmV3IFJlZ0V4cCgvXihcXGR7MSw4fSktKFxcZHsxLDh9KS0oXFxkezF9KSQvKSwgbWF0Y2ggPSB0b1ZlcmlmeS5tYXRjaChyZWcpO1xuXHRcdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR2YXIgcGFydDEgPSBtYXRjaFsxXSwgcGFydDIgPSBtYXRjaFsyXSxcblx0XHRcdGNoZWNrRGlnaXQgPSBtYXRjaFszXS5jaGFyQXQoMCksXG5cdFx0XHRzdW0gPSAwLFxuXHRcdFx0dG90YWxMZW5ndGggPSBwYXJ0MS5sZW5ndGggKyBwYXJ0Mi5sZW5ndGg7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHBhcnQxLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRzdW0gKz0gcGFydDEuY2hhckF0KGkpICogdG90YWxMZW5ndGg7XG5cdFx0XHR0b3RhbExlbmd0aCAtPSAxO1xuXHRcdH1cblx0XHRmb3IodmFyIGogPSAwOyBqIDwgcGFydDIubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdHN1bSArPSBwYXJ0Mi5jaGFyQXQoaikgKiB0b3RhbExlbmd0aDtcblx0XHRcdHRvdGFsTGVuZ3RoIC09IDE7XG5cdFx0fVxuXHRcdHJldHVybiAoc3VtICUgMTApID09PSBwYXJzZUludChjaGVja0RpZ2l0LCAxMCk7XG5cdH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgc2xhc2ggYW5kIGEgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b0FwcGVuZCAtIGZyYWdtZW50IHRvIGFwcGVuZFRvUHViY2hlbSB0byB0aGUgc3RyaW5nIG9uIHdoaWNoIHRoaXMgbWV0aG9kIGlzIGNhbGxlZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IG5ld1VybFxuICAgICAqL1xuICAgIGlmICghU3RyaW5nLnByb3RvdHlwZS5hcHBlbmRUb1B1YmNoZW0pIHtcblx0XHRTdHJpbmcucHJvdG90eXBlLmFwcGVuZFRvUHViY2hlbSA9IGZ1bmN0aW9uICh0b0FwcGVuZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMgKyBcIi9cIiArIHRvQXBwZW5kO1xuXHRcdH07XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICogUGFyc2VzIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBib2R5IC0gcmVzcG9uc2UgYm9keSB0byBiZSBwYXJzZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIHBhcmFtIGFzc29jaWF0ZWQgd2l0aCBwYXNzZWQgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbkdldF0gLSBvcHRpb24gYXNzb2NpYXRlZCB3aXRoIFwiZ2V0XCIgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfE9iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwYXJzZVByb3BlcnRpZXMgKGJvZHksIHByb3AsIG9wdGlvbkdldCkge1x0XHRcbiAgICAgICAgaWYgKHByb3AgPT09IFwiU3lub255bVwiKSB7XG5cdFx0XHR2YXIgYWxsTmFtZXMgPSBib2R5LkluZm9ybWF0aW9uTGlzdC5JbmZvcm1hdGlvblswXVtwcm9wXTsgXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbkdldCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxOYW1lcztcblx0XHRcdH0gZWxzZSBpZiAob3B0aW9uR2V0ID09PSBcImNhc1wiKSB7XHRcdFx0XHRcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5hbWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGFsbE5hbWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tFbGVtZW50KGVsKSkgeyByZXR1cm4gZWw7IH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uR2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbkdldCA+IDAgP1xuXHRcdFx0XHRcdGFsbE5hbWVzLnNsaWNlKDAsIG9wdGlvbkdldCkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdH0pOlxuXHRcdFx0XHRcdFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJwcm9wZXJ0eUFycmF5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBib2R5LlByb3BlcnR5VGFibGUuUHJvcGVydGllc1swXTsgICBcbiAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBib2R5LlByb3BlcnR5VGFibGUuUHJvcGVydGllc1swXVtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIENtcGRTcGFjZSAoXCJDb21wb3VuZCBTcGFjZVwiKSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAY2xhc3MgQ21wZFNwYWNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIGJhc2UgUHViY2hlbSB1cmxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDbXBkU3BhY2UgKHVybCkge1xuICAgICAgICAvLyBQcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHJlcXVlc3RlZCBhY2NvcmRpbmcgdG8gUHViQ2hlbSBBUEkuXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW1wibmFtZVwiLCBcIm5hbWVcIiwgXCJzbWlsZXNcIiwgXCJjaWRcIiwgXCJpbmNoaVwiLCBcImluY2hpa2V5XCJdO1xuICAgICAgICAvLyBTbGlnaHRseSBjaGFuZ2VkIG5hbWVzIG9mIHRob3NlIHByb3BlcnRpZXMuXG4gICAgICAgIHZhciBhbGlhcyA9IFtcIk5hbWVcIiwgXCJDYXNcIiwgXCJTbWlsZXNcIiwgXCJDaWRcIiwgXCJJbmNoaVwiLCBcIkluY2hpS2V5XCJdO1xuICAgICAgICAvLyBHZW5lcmF0ZXMgYWxsIHNldHRlcnMuXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8PSBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHQoZnVuY3Rpb24gKGopIHtcdFx0XHRcdFxuXHRcdFx0XHR0aGlzW1wic2V0XCIgKyBhbGlhc1tqXV0gPSBmdW5jdGlvbiAodG9GaW5kKSB7XG5cdFx0XHRcdFx0dmFyIG5ld1VybCA9IHVybC5hcHBlbmRUb1B1YmNoZW0ocHJvcGVydGllc1tqXSkuYXBwZW5kVG9QdWJjaGVtKHRvRmluZCk7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDbXBkT3BzKG5ld1VybCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9LmNhbGwodGhpcywgaSkpO1xuXHRcdH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBDbXBkT3BzIChcIkNvbXBvdW5kIE9wZXJhdGlvbnNcIikgY29uc3RydWN0b3IuXG4gICAgICogQGNsYXNzIENtcGRPcHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gYmFzZSBQdWJjaGVtIHVybCB3aXRoIHRoZSBhbHJlYWR5IHBhc3NlZCBkYXRhIGFwcGVuZFRvUHViY2hlbWVkIHRvIGl0XG4gICAgICovXG4gICAgdmFyIENtcGRPcHMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIC8vIEFycmF5IG9mIHByb3BlcnRpZXMgYWNjb3JkaW5nIHRvIFB1YkNoZW0gQVBJLlxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtcIklVUEFDTmFtZVwiLCBcIk1vbGVjdWxhckZvcm11bGFcIiwgXCJNb2xlY3VsYXJXZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2Fub25pY2FsU01JTEVTXCIsIFwiSXNvbWVyaWNTTUlMRVNcIiwgXCJJbkNoSVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbkNoSUtleVwiLCBcIlhMb2dQXCIsIFwiRXhhY3RNYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vbm9pc290b3BpY01hc3NcIiwgXCJUUFNBXCIsIFwiQ29tcGxleGl0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGFyZ2VcIiwgXCJIQm9uZERvbm9yQ291bnRcIiwgXCJIQm9uZEFjY2VwdG9yQ291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUm90YXRhYmxlQm9uZENvdW50XCIsIFwiSGVhdnlBdG9tQ291bnRcIiwgXCJJc290b3BlQXRvbUNvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF0b21TdGVyZW9Db3VudFwiLCBcIkRlZmluZWRBdG9tU3RlcmVvQ291bnRcIiwgXCJVbmRlZmluZWRBdG9tU3RlcmVvQ291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQm9uZFN0ZXJlb0NvdW50XCIsIFwiRGVmaW5lZEJvbmRTdGVyZW9Db3VudFwiLCBcIlVuZGVmaW5lZEJvbmRTdGVyZW9Db3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb3ZhbGVudFVuaXRDb3VudFwiLCBcIlZvbHVtZTNEXCIsIFwiWFN0ZXJpY1F1YWRydXBvbGUzRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZU3RlcmljUXVhZHJ1cG9sZTNEXCIsIFwiWlN0ZXJpY1F1YWRydXBvbGUzRFwiLCBcIkZlYXR1cmVDb3VudDNEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZlYXR1cmVBY2NlcHRvckNvdW50M0RcIiwgXCJGZWF0dXJlRG9ub3JDb3VudDNEXCIsIFwiRmVhdHVyZUFuaW9uQ291bnQzRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGZWF0dXJlQ2F0aW9uQ291bnQzRFwiLCBcIkZlYXR1cmVSaW5nQ291bnQzRFwiLCBcIkZlYXR1cmVIeWRyb3Bob2JlQ291bnQzRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb25mb3JtZXJNb2RlbFJNU0QzRFwiLCBcIkVmZmVjdGl2ZVJvdG9yQ291bnQzRFwiLCBcIkNvbmZvcm1lckNvdW50M0RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmluZ2VycHJpbnQyRFwiXTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdlbmVyYXRlcyBhbGwgZ2V0dGVycy5cblx0XHRmb3IodmFyIGkgPSAwOyBpIDw9IHByb3BlcnRpZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdChmdW5jdGlvbiAoaikge1x0XHRcdFx0XG5cdFx0XHRcdHRoaXNbXCJnZXRcIiArIHByb3BlcnRpZXNbal1dID0gZnVuY3Rpb24gKHRvRmluZCkge1xuXHRcdFx0XHRcdHZhciBuZXdVcmwgPSB1cmwuYXBwZW5kVG9QdWJjaGVtKFwicHJvcGVydHlcIikuYXBwZW5kVG9QdWJjaGVtKHByb3BlcnRpZXNbal0pO1xuXHRcdFx0XHRcdHJldHVybiBuZXcgRmluZChwcm9wZXJ0aWVzW2pdKS5leGVjKG5ld1VybCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9LmNhbGwodGhpcywgaSkpO1xuXHRcdH1cblx0XHQvLyBHZXR0ZXIgZm9yIGFycmF5IG9mIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5nZXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHRvRmluZCkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRvRmluZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IGFycmF5IGlzIGFjY2VwdGVkLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1VybCA9IHVybC5hcHBlbmRUb1B1YmNoZW0oXCJwcm9wZXJ0eVwiKSArIFwiL1wiO1xuICAgICAgICAgICAgICAgIHRvRmluZC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmluZGV4T2YoZWxlbWVudCkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VXJsICs9IGVsZW1lbnQgKyBcIixcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmluZChcInByb3BlcnR5QXJyYXlcIikuZXhlYyhuZXdVcmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXHRcdC8vIEdldHRlciBmb3IgQ2FzIG5yXG4gICAgICAgIHRoaXMuZ2V0Q2FzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIG5ld1VybCA9IHVybC5hcHBlbmRUb1B1YmNoZW0oXCJzeW5vbnltc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmluZChcIlN5bm9ueW1cIiwgXCJjYXNcIikuZXhlYyhuZXdVcmwpO1xuICAgICAgICB9O1xuXHRcdC8qKlxuXHRcdCAqIEdldHRlciBmb3IgbmFtZXNcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gXCJ1bmRlZmluZWRcIiBmb3IgYWxsIG5hbWVzXG5cdFx0ICpcdFx0XHRcdFx0XHRcdD4gMCBmb3Igc3BlY2lmaWVkIG51bWJlciBvZiBuYW1lcyB0byBkaXNwbGF5IFxuXHRcdCAqL1xuICAgICAgICB0aGlzLmdldE5hbWVzID0gZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIG5ld1VybCA9IHVybC5hcHBlbmRUb1B1YmNoZW0oXCJzeW5vbnltc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmluZChcIlN5bm9ueW1cIiwgbnVtYmVyKS5leGVjKG5ld1VybCk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBcbiAgICAvKiogU2V0cyBkb21haW4uICovXG5cdHZhciBwdWJjaGVtID0ge1xuXHRcdGRvbWFpbjogZnVuY3Rpb24gKGRvbWFpbiwgbWV0aG9kKSB7XG5cdFx0XHR2YXIgbmV3VXJsID0gYmFzZVVybC5hcHBlbmRUb1B1YmNoZW0oZG9tYWluKTsgICAgICAgIFxuXHRcdFx0aWYgKGRvbWFpbiA9PT0gXCJjb21wb3VuZFwiKSB7ICBcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBtZXRob2QgPT09IHVuZGVmaW5lZCA/IG5ldyBDbXBkU3BhY2UobmV3VXJsKTogbmV3IENtcGRTcGFjZShuZXdVcmwsIFwicG9zdFwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZG9tYWluLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBwdWJjaGVtO1xufSk7IiwiXG4vKipcbiAqIFJlZHVjZSBgYXJyYCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFxuICpcbiAqIFRPRE86IGNvbWJhdGlibGUgZXJyb3IgaGFuZGxpbmc/XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGZuLCBpbml0aWFsKXsgIFxuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBjdXJyID0gYXJndW1lbnRzLmxlbmd0aCA9PSAzXG4gICAgPyBpbml0aWFsXG4gICAgOiBhcnJbaWR4KytdO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBjdXJyID0gZm4uY2FsbChudWxsLCBjdXJyLCBhcnJbaWR4XSwgKytpZHgsIGFycik7XG4gIH1cbiAgXG4gIHJldHVybiBjdXJyO1xufTsiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3Q7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gQnJvd3NlciB3aW5kb3dcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IC8vIFdlYiBXb3JrZXJcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgeyAvLyBPdGhlciBlbnZpcm9ubWVudHNcbiAgcm9vdCA9IHRoaXM7XG59XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgYWRkZWQgdG8gc3VwcG9ydCBJRS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHRyaW0gPSAnJy50cmltXG4gID8gZnVuY3Rpb24ocykgeyByZXR1cm4gcy50cmltKCk7IH1cbiAgOiBmdW5jdGlvbihzKSB7IHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcbiAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFydHM7XG4gIHZhciBwYWlyO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ2FwcGxpY2F0aW9uL3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybS1kYXRhJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxuIH07XG5cbiAvKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgbGluZXMucG9wKCk7IC8vIHRyYWlsaW5nIENSTEZcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHJlZHVjZShzdHIuc3BsaXQoLyAqOyAqLyksIGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLylcbiAgICAgICwga2V5ID0gcGFydHMuc2hpZnQoKVxuICAgICAgLCB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICAvLyByZXNwb25zZVRleHQgaXMgYWNjZXNzaWJsZSBvbmx5IGlmIHJlc3BvbnNlVHlwZSBpcyAnJyBvciAndGV4dCcgYW5kIG9uIG9sZGVyIGJyb3dzZXJzXG4gIHRoaXMudGV4dCA9ICgodGhpcy5yZXEubWV0aG9kICE9J0hFQUQnICYmICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0XG4gICAgIDogbnVsbDtcbiAgdGhpcy5zdGF0dXNUZXh0ID0gdGhpcy5yZXEueGhyLnN0YXR1c1RleHQ7XG4gIHRoaXMuc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMucGFyc2VCb2R5KHRoaXMudGV4dCA/IHRoaXMudGV4dCA6IHRoaXMueGhyLnJlc3BvbnNlKVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBGb3JjZSBnaXZlbiBwYXJzZXJcbiAqIFxuICogU2V0cyB0aGUgYm9keSBwYXJzZXIgbm8gbWF0dGVyIHR5cGUuXG4gKiBcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGZuKXtcbiAgdGhpcy5wYXJzZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnBhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHRoaXMucGFyc2VyIHx8IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCB8fCBzdHIgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgIHN0YXR1cyA9IDIwNDtcbiAgfVxuXG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307XG4gIHRoaXMuX2hlYWRlciA9IHt9O1xuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyKTtcbiAgICB9XG5cbiAgICBzZWxmLmVtaXQoJ3Jlc3BvbnNlJywgcmVzKTtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyLCByZXMpO1xuICAgIH1cblxuICAgIHZhciBuZXdfZXJyID0gbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZScpO1xuICAgIG5ld19lcnIub3JpZ2luYWwgPSBlcnI7XG4gICAgbmV3X2Vyci5yZXNwb25zZSA9IHJlcztcbiAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG5cbiAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fdGltZW91dCA9IDA7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuYWJvcnRlZCkgcmV0dXJuO1xuICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhoci5hYm9ydCgpO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3NcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcyl7XG4gIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHN0cik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyByb290LkZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2gobmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgLCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbXVsdGlwbGUgZGF0YSBcIndyaXRlc1wiXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5zZW5kKHsgc2VhcmNoOiAncXVlcnknIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgcmFuZ2U6ICcxLi41JyB9KVxuICogICAgICAgICAuc2VuZCh7IG9yZGVyOiAnZGVzYycgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAgKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgb2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqIHx8IGlzSG9zdChkYXRhKSkgcmV0dXJuIHRoaXM7XG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGZuKGVyciwgcmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ09yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKTtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgdmFyIHN0YXR1cztcbiAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XG5cbiAgICBpZiAoMCA9PSBzdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLnRpbWVkb3V0KSByZXR1cm4gc2VsZi50aW1lb3V0RXJyb3IoKTtcbiAgICAgIGlmIChzZWxmLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTtcblxuICAvLyBwcm9ncmVzc1xuICB2YXIgaGFuZGxlUHJvZ3Jlc3MgPSBmdW5jdGlvbihlKXtcbiAgICBpZiAoZS50b3RhbCA+IDApIHtcbiAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICB9O1xuICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKHhoci51cGxvYWQgJiYgdGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7XG4gICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MzcyNDUveG1saHR0cHJlcXVlc3QtdXBsb2FkLXRocm93cy1pbnZhbGlkLWFyZ3VtZW50LXdoZW4tdXNlZC1mcm9tLXdlYi13b3JrZXItY29udGV4dFxuICB9XG5cbiAgLy8gdGltZW91dFxuICBpZiAodGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYudGltZWRvdXQgPSB0cnVlO1xuICAgICAgc2VsZi5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhaXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIHZhciBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVtjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF0gOiAnJ107XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG4gIHhoci5zZW5kKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmF1eCBwcm9taXNlIHN1cHBvcnRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcbiAgcmV0dXJuIHRoaXMuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgZXJyID8gcmVqZWN0KGVycikgOiBmdWxmaWxsKHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBJc3N1ZSBhIHJlcXVlc3Q6XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVxdWVzdCgnR0VUJywgJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycsIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB1cmwgb3IgY2FsbGJhY2tcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmRlbCA9IGZ1bmN0aW9uKHVybCwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3Q7XG4iLCJjb25zdCBhdG9tcyA9IHJlcXVpcmUoJy4vYXRvbXMuanNvbicpO1xyXG5cclxuY2xhc3MgQXRvbSB7XHJcblx0Y29uc3RydWN0b3IobW9sZWN1bGUsIGlkLCB4LCB5LCB6KSB7XHJcblx0XHR0aGlzLm1vbGVjdWxlID0gbW9sZWN1bGU7XHJcblx0XHR0aGlzLm1vZGVsID0gbW9sZWN1bGUubW9kZWw7XHJcblxyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLnogPSB6O1xyXG5cdFx0XHJcblx0XHR0aGlzLm5vZGVzID0gW107XHJcblxyXG5cdFx0dGhpcy5kYXRhID0gYXRvbXNbaWQtMV07XHJcblxyXG5cdFx0dGhpcy5jb2xvciA9ICsoJycrdGhpcy5kYXRhLmNvbG9yKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0dGhpcy5zaGFkb3cgPSArKCcnK3RoaXMuZGF0YS5zaGFkb3cpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR0aGlzLnJhZGl1cyA9ICt0aGlzLmRhdGEuY292YWxlbnRSYWRpdXMgPyBNYXRoLm1pbigrdGhpcy5kYXRhLmNvdmFsZW50UmFkaXVzKjEwLCAxMCkgOiAxMDtcclxuXHRcdHRoaXMuZGV0YWlsID0gMjtcclxuXHJcblx0XHQvLyBjcmVhdGUgdGhyZWUuanMgb2JqZWN0c1xyXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KHRoaXMucmFkaXVzLCB0aGlzLmRldGFpbCk7XHJcblx0XHR0aGlzLm1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMubWVzaC5hZGQobmV3IFRIUkVFLk1lc2goXHJcblx0XHRcdHRoaXMuZ2VvbWV0cnksXHJcblx0XHRcdG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XHJcblx0XHRcdFx0Y29sb3I6IHRoaXMuY29sb3IsXHJcblx0XHRcdFx0ZW1pc3NpdmU6IHRoaXMuc2hhZG93LFxyXG5cdFx0XHRcdHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcblx0XHRcdFx0c2hhZGluZzogVEhSRUUuRmxhdFNoYWRpbmdcclxuXHRcdFx0fSlcclxuXHRcdCkpO1xyXG5cdFx0dGhpcy5tZXNoLmF0b20gPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi5zZXQodGhpcy54LCB0aGlzLnksIHRoaXMueik7XHJcblxyXG5cdFx0dGhpcy5tb2xlY3VsZS5zdGFnZS5hZGQodGhpcy5tZXNoKTtcclxuXHR9XHJcblx0dXBkYXRlKCkge1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXRvbTsiLCJcclxuY2xhc3MgTGluayB7XHJcblx0Y29uc3RydWN0b3IobW9sZWN1bGEsIGF0b20xLCBhdG9tMiwgdHlwZSkge1xyXG5cdFx0dGhpcy5tb2xlY3VsYSA9IG1vbGVjdWxhO1xyXG5cdFx0dGhpcy5hdG9tMSA9IGF0b20xO1xyXG5cdFx0dGhpcy5hdG9tMiA9IGF0b20yO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHJcblxyXG5cdFx0Ly8gY3JlYXRlIHRocmVlLmpzIG9iamVjdHNcclxuXHJcblx0XHR0aGlzLnR1YmVzID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcblx0XHR0aGlzLm1vbGVjdWxhLnN0YWdlLmFkZCh0aGlzLnR1YmVzKTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdHlwZTsgaSsrKSB7XHJcblxyXG5cdFx0XHRsZXQgcDEgPSBuZXcgVEhSRUUuVmVjdG9yMyh0aGlzLmF0b20xLngsIHRoaXMuYXRvbTEueSwgdGhpcy5hdG9tMS56K2kqKDYvdHlwZSktKDIvdHlwZSkqKHR5cGUtMSkpO1xyXG5cdFx0XHRsZXQgcDIgPSBuZXcgVEhSRUUuVmVjdG9yMyh0aGlzLmF0b20yLngsIHRoaXMuYXRvbTIueSwgdGhpcy5hdG9tMi56K2kqKDYvdHlwZSktKDIvdHlwZSkqKHR5cGUtMSkpO1xyXG5cclxuXHRcdFx0bGV0IG1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlR1YmVHZW9tZXRyeShcclxuXHRcdFx0XHRuZXcgVEhSRUUuQ2F0bXVsbFJvbUN1cnZlMyhbcDEsIHAyXSksXHJcblx0XHRcdFx0MTIsIDIvdHlwZVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0bWVzaC5hZGQobmV3IFRIUkVFLk1lc2goXHJcblx0XHRcdFx0Z2VvbWV0cnksXHJcblx0XHRcdFx0bmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcclxuXHRcdFx0XHRcdGNvbG9yOiAweEIwQjBCMCxcclxuXHRcdFx0XHRcdGVtaXNzaXZlOiAweDdCN0I3QixcclxuXHRcdFx0XHRcdHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcblx0XHRcdFx0XHRzaGFkaW5nOiBUSFJFRS5GbGF0U2hhZGluZ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCkpO1xyXG5cdFx0XHR0aGlzLnR1YmVzLmFkZChtZXNoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluazsiLCJjb25zdCBBdG9tID0gcmVxdWlyZSgnLi9BdG9tJyk7XHJcbmNvbnN0IExpbmsgPSByZXF1aXJlKCcuL0xpbmsnKTtcclxuXHJcbmNsYXNzIE1vbGVjdWxlIHtcclxuXHRjb25zdHJ1Y3Rvcihtb2RlbCwgaW5kZXgsIGRhdGEpIHtcclxuXHRcdHRoaXMubW9kZWwgPSBtb2RlbDtcclxuXHRcdHRoaXMuaW5kZXggPSAwO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGEuUENfQ29tcG91bmRzWzBdO1xyXG5cclxuXHRcdHRoaXMudHlwZVN0cnVjdHVyZSA9IGRhdGEudHlwZVN0cnVjdHVyZTtcclxuXHJcblx0XHR0aGlzLnN0YWdlID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcblx0XHR0aGlzLm1vZGVsLnNjZW5lLmFkZCh0aGlzLnN0YWdlKTtcclxuXHJcblx0XHR0aGlzLmF0b21zID0gW107XHJcblx0XHR0aGlzLmxpbmtzID0gW107XHJcblxyXG5cdFx0dGhpcy50eXBlU3RydWN0dXJlID09PSAnMmQnICYmIHRoaXMuX2NvbXB1dGVkQ2VudGVyKCk7XHJcblx0XHR0aGlzLl9pbml0QXRvbXMoKTtcclxuXHRcdHRoaXMuX2JpbmROb2RlcygpO1xyXG5cclxuXHRcdHRoaXMubW9kZWwuY2FtZXJhLnBvc2l0aW9uLnogPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLmF0b21zLmxlbmd0aCoyMCwgMjAwKSwgNzApO1xyXG5cclxuXHRcdHRoaXMuX2JpbmRFdmVudHMoKTtcclxuXHR9XHJcblxyXG5cdF9iaW5kRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMuc3RhZ2UuY2hpbGRyZW4uZm9yRWFjaCgobWVzaCkgPT4ge1xyXG5cdFx0XHR0aGlzLm1vZGVsLmRvbUV2ZW50cy5hZGRFdmVudExpc3RlbmVyKG1lc2gsICdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGlmKCFtZXNoLmF0b20pIHJldHVybjtcclxuXHJcblx0XHRcdFx0Ly8gdGhpcy5zdGFnZS5jaGlsZHJlbi5mb3JFYWNoKChtZXNoKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHRtZXNoLmhleCAhPSBudWxsICYmIG1lc2guY2hpbGRyZW5bMF0ubWF0ZXJpYWwuZW1pc3NpdmUuc2V0SGV4KG1lc2guaGV4KTtcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBtZXNoLmhleCA9IG1lc2guY2hpbGRyZW5bMF0ubWF0ZXJpYWwuZW1pc3NpdmUuZ2V0SGV4KCk7XHJcblx0XHRcdFx0Ly8gbWVzaC5jaGlsZHJlblswXS5tYXRlcmlhbC5lbWlzc2l2ZS5zZXRIZXgoMHhGNkQ1M0IpO1xyXG5cclxuXHRcdFx0XHR2YXIgb3V0bGluZU1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgzOTkyRkYsIHNpZGU6IFRIUkVFLkJhY2tTaWRlIH0gKTtcclxuXHRcdFx0XHR2YXIgb3V0bGluZU1lc2gyID0gbmV3IFRIUkVFLk1lc2goIG1lc2guYXRvbS5nZW9tZXRyeSwgb3V0bGluZU1hdGVyaWFsMiApO1xyXG5cdFx0XHRcdG91dGxpbmVNZXNoMi5wb3NpdGlvbi54ID0gbWVzaC5hdG9tLng7XHJcblx0XHRcdFx0b3V0bGluZU1lc2gyLnBvc2l0aW9uLnkgPSBtZXNoLmF0b20ueTtcclxuXHRcdFx0XHRvdXRsaW5lTWVzaDIucG9zaXRpb24ueiA9IG1lc2guYXRvbS56O1xyXG5cdFx0XHRcdG91dGxpbmVNZXNoMi5zY2FsZS5tdWx0aXBseVNjYWxhcigxLjEpO1xyXG5cdFx0XHRcdHRoaXMuc3RhZ2UuYWRkKCBvdXRsaW5lTWVzaDIgKTtcclxuXHJcblx0XHRcdFx0bGV0IHRhYmxlID0gJChgPHRhYmxlIGNsYXNzPVwidWkgYmx1ZSB0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPktleTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGg+VmFsdWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0Ym9keT48L3Rib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90YWJsZT5gKTtcclxuXHJcblx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gbWVzaC5hdG9tLmRhdGEpIHtcclxuXHRcdFx0XHRcdGlmKGtleSA9PSAnZGVzY3JpcHRpb24nIHx8IGtleSA9PSAnbGFiZWwnIHx8IGtleSA9PSAnY29sb3InKSBjb250aW51ZTtcclxuXHRcdFx0XHRcdHRhYmxlLmZpbmQoJ3Rib2R5JykuYXBwZW5kKGA8dHI+PHRkPiR7a2V5fTwvdGQ+PHRkPiR7bWVzaC5hdG9tLmRhdGFba2V5XX08L3RkPjwvdHI+YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCQoJyNpbmZvLWF0b20gLmNvbnRlbnQnKS5lbXB0eSgpO1xyXG5cdFx0XHRcdCQoJyNpbmZvLWF0b20gLmNvbnRlbnQnKS5hcHBlbmQoYDxpIGNsYXNzPVwicmlnaHQgZmxvYXRlZCBsYXJnZSBjbG9zZSBpY29uXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIj48L2k+YCk7XHJcblx0XHRcdFx0JCgnI2luZm8tYXRvbSAuY29udGVudCBpLmNsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0JCgnI2luZm8tYXRvbScpLmhpZGUoKTtcclxuXHRcdFx0XHRcdCQoJyNpbmZvLXN1YnN0YW5jZScpLnNob3coKS50cmFuc2l0aW9uKCdwdWxzZScpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdCQoJyNpbmZvLWF0b20gLmNvbnRlbnQnKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJoZWFkZXJcIj4ke21lc2guYXRvbS5kYXRhLmxhYmVsLnNwbGl0KCcgJylbMF19PC9kaXY+YCk7XHJcblx0XHRcdFx0JCgnI2luZm8tYXRvbSAuY29udGVudCcpLmFwcGVuZChgPGRpdiBjbGFzcz1cIm1ldGFcIj4ke21lc2guYXRvbS5kYXRhLmxhYmVsLnNwbGl0KCcgJylbMV19PC9kaXY+YCk7XHJcblx0XHRcdFx0JCgnI2luZm8tYXRvbSAuY29udGVudCcpLmFwcGVuZChgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHttZXNoLmF0b20uZGF0YS5kZXNjcmlwdGlvbn08L2Rpdj5gKTtcclxuXHRcdFx0XHQkKCcjaW5mby1hdG9tIC5jb250ZW50JykuYXBwZW5kKHRhYmxlKTtcclxuXHRcdFx0XHQkKCcjaW5mby1zdWJzdGFuY2UnKS5oaWRlKCk7XHJcblx0XHRcdFx0JCgnI2luZm8tYXRvbScpLnNob3coKS50cmFuc2l0aW9uKCdwdWxzZScpO1xyXG5cclxuXHRcdFx0fSwgZmFsc2UpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9jb21wdXRlZENlbnRlcigpIHtcclxuXHRcdGxldCBwb3MgPSB0aGlzLl9kYXRhLmNvb3Jkc1swXS5jb25mb3JtZXJzWzBdO1xyXG5cdFx0bGV0IHNvcnRYID0gcG9zLnguc2xpY2UoMCkuc29ydCgoYSwgYikgPT4gYS1iKTtcclxuXHRcdGxldCBzb3J0WSA9IHBvcy55LnNsaWNlKDApLnNvcnQoKGEsIGIpID0+IGEtYik7XHJcblxyXG5cdFx0dGhpcy5jZW50ZXIgPSB7XHJcblx0XHRcdHg6IHNvcnRYW01hdGgucm91bmQoc29ydFgubGVuZ3RoLzIpXSxcclxuXHRcdFx0eTogc29ydFlbTWF0aC5yb3VuZChzb3J0WS5sZW5ndGgvMildXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfaW5pdEF0b21zKCkge1xyXG5cdFx0bGV0IHBvcyA9IHRoaXMuX2RhdGEuY29vcmRzWzBdLmNvbmZvcm1lcnNbMF07XHJcblx0XHRcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmF0b21zLmVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IHgsIHksIHo7XHJcblxyXG5cdFx0XHRpZih0aGlzLnR5cGVTdHJ1Y3R1cmUgPT09ICczZCcpIHtcclxuXHRcdFx0XHR4ID0gcG9zLnhbaV0qMjA7XHJcblx0XHRcdFx0eSA9IHBvcy55W2ldKjIwO1xyXG5cdFx0XHRcdHogPSBwb3MueltpXSoyMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR4ID0gdGhpcy5jZW50ZXIueCozMC1wb3MueFtpXSozMDtcclxuXHRcdFx0XHR5ID0gdGhpcy5jZW50ZXIueSozMC1wb3MueVtpXSozMDtcclxuXHRcdFx0XHR6ID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IGF0b20gPSBuZXcgQXRvbSh0aGlzLCB0aGlzLl9kYXRhLmF0b21zLmVsZW1lbnRbaV0sIHgsIHksIHopO1xyXG5cdFx0XHR0aGlzLmF0b21zLnB1c2goYXRvbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdF9iaW5kTm9kZXMoKSB7XHJcblx0XHRpZighdGhpcy5fZGF0YS5ib25kcykgcmV0dXJuO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmJvbmRzLmFpZDEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGFpZDEgPSB0aGlzLl9kYXRhLmJvbmRzLmFpZDFbaV0tMTtcclxuXHRcdFx0bGV0IGFpZDIgPSB0aGlzLl9kYXRhLmJvbmRzLmFpZDJbaV0tMTtcclxuXHRcdFx0bGV0IHR5cGUgPSB0aGlzLl9kYXRhLmJvbmRzLm9yZGVyW2ldO1xyXG5cclxuXHRcdFx0dGhpcy5saW5rcy5wdXNoKFxyXG5cdFx0XHRcdG5ldyBMaW5rKHRoaXMsIHRoaXMuYXRvbXNbYWlkMV0sIHRoaXMuYXRvbXNbYWlkMl0sIHR5cGUpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnN0YWdlLnJvdGF0aW9uLnggKz0gMC4wMDE7XHJcblx0XHR0aGlzLnN0YWdlLnJvdGF0aW9uLnkgKz0gMC4wMDAxO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmF0b21zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMuYXRvbXNbaV0udXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1vbGVjdWxlOyIsIi8qKlxyXG4gKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xyXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxyXG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXHJcbiAqIEBhdXRob3IgbXJmbGl4IC8gaHR0cDovL2ZlbGl4bmlrbGFzLmRlXHJcbiAqIFxyXG4gKiByZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxyXG4gKi9cclxuLypnbG9iYWwgVEhSRUUsIGNvbnNvbGUgKi9cclxuXHJcbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLiBJdCBtYWludGFpbnNcclxuLy8gdGhlIFwidXBcIiBkaXJlY3Rpb24gYXMgK1ksIHVubGlrZSB0aGUgVHJhY2tiYWxsQ29udHJvbHMuIFRvdWNoIG9uIHRhYmxldCBhbmQgcGhvbmVzIGlzXHJcbi8vIHN1cHBvcnRlZC5cclxuLy9cclxuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxyXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxyXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcclxuLy9cclxuLy8gVGhpcyBpcyBhIGRyb3AtaW4gcmVwbGFjZW1lbnQgZm9yIChtb3N0KSBUcmFja2JhbGxDb250cm9scyB1c2VkIGluIGV4YW1wbGVzLlxyXG4vLyBUaGF0IGlzLCBpbmNsdWRlIHRoaXMganMgZmlsZSBhbmQgd2hlcmV2ZXIgeW91IHNlZTpcclxuLy8gICAgXHRjb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyggY2FtZXJhICk7XHJcbi8vICAgICAgY29udHJvbHMudGFyZ2V0LnogPSAxNTA7XHJcbi8vIFNpbXBsZSBzdWJzdGl0dXRlIFwiT3JiaXRDb250cm9sc1wiIGFuZCB0aGUgY29udHJvbCBzaG91bGQgd29yayBhcy1pcy5cclxuXHJcblRIUkVFLk9yYml0Q29udHJvbHMgPSBmdW5jdGlvbiAoIG9iamVjdCwgZG9tRWxlbWVudCwgbG9jYWxFbGVtZW50ICkge1xyXG5cclxuXHR0aGlzLm9iamVjdCA9IG9iamVjdDtcclxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xyXG5cdHRoaXMubG9jYWxFbGVtZW50ID0gKCBsb2NhbEVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gbG9jYWxFbGVtZW50IDogZG9jdW1lbnQ7XHJcblxyXG5cdC8vIEFQSVxyXG5cclxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcclxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgY29udHJvbCBvcmJpdHMgYXJvdW5kXHJcblx0Ly8gYW5kIHdoZXJlIGl0IHBhbnMgd2l0aCByZXNwZWN0IHRvLlxyXG5cdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHQvLyBjZW50ZXIgaXMgb2xkLCBkZXByZWNhdGVkOyB1c2UgXCJ0YXJnZXRcIiBpbnN0ZWFkXHJcblx0dGhpcy5jZW50ZXIgPSB0aGlzLnRhcmdldDtcclxuXHJcblx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvclxyXG5cdC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcblx0dGhpcy5ub1pvb20gPSBmYWxzZTtcclxuXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcclxuXHQvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXRcclxuXHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcclxuXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG5cdC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXHJcblx0dGhpcy5ub1JvdGF0ZSA9IGZhbHNlO1xyXG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XHJcblxyXG5cdC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXHJcblx0dGhpcy5ub1BhbiA9IGZhbHNlO1xyXG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXHJcblxyXG5cdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XHJcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XHJcblx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXHJcblxyXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxyXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxyXG5cdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcclxuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXHJcblxyXG5cdC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXHJcblx0dGhpcy5ub0tleXMgPSBmYWxzZTtcclxuXHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXHJcblx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcclxuXHJcblx0Ly8vLy8vLy8vLy8vXHJcblx0Ly8gaW50ZXJuYWxzXHJcblxyXG5cdHZhciBzY29wZSA9IHRoaXM7XHJcblxyXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcclxuXHJcblx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcblx0dmFyIHBoaURlbHRhID0gMDtcclxuXHR2YXIgdGhldGFEZWx0YSA9IDA7XHJcblx0dmFyIHNjYWxlID0gMTtcclxuXHR2YXIgcGFuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdHZhciBTVEFURSA9IHsgTk9ORSA6IC0xLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xyXG5cdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG5cdC8vIGV2ZW50c1xyXG5cclxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XHJcblxyXG5cclxuXHR0aGlzLnJvdGF0ZUxlZnQgPSBmdW5jdGlvbiAoIGFuZ2xlICkge1xyXG5cclxuXHRcdGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhldGFEZWx0YSAtPSBhbmdsZTtcclxuXHJcblx0fTtcclxuXHJcblx0dGhpcy5yb3RhdGVVcCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XHJcblxyXG5cdFx0aWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0YW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRwaGlEZWx0YSAtPSBhbmdsZTtcclxuXHJcblx0fTtcclxuXHJcblx0Ly8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIGxlZnRcclxuXHR0aGlzLnBhbkxlZnQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xyXG5cclxuXHRcdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0dmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xyXG5cdFx0Ly8gZ2V0IFggY29sdW1uIG9mIG1hdHJpeFxyXG5cdFx0cGFuT2Zmc2V0LnNldCggdGVbMF0sIHRlWzFdLCB0ZVsyXSApO1xyXG5cdFx0cGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKC1kaXN0YW5jZSk7XHJcblx0XHRcclxuXHRcdHBhbi5hZGQoIHBhbk9mZnNldCApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgdXBcclxuXHR0aGlzLnBhblVwID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcclxuXHJcblx0XHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcclxuXHRcdC8vIGdldCBZIGNvbHVtbiBvZiBtYXRyaXhcclxuXHRcdHBhbk9mZnNldC5zZXQoIHRlWzRdLCB0ZVs1XSwgdGVbNl0gKTtcclxuXHRcdHBhbk9mZnNldC5tdWx0aXBseVNjYWxhcihkaXN0YW5jZSk7XHJcblx0XHRcclxuXHRcdHBhbi5hZGQoIHBhbk9mZnNldCApO1xyXG5cdH07XHJcblx0XHJcblx0Ly8gbWFpbiBlbnRyeSBwb2ludDsgcGFzcyBpbiBWZWN0b3IyIG9mIGNoYW5nZSBkZXNpcmVkIGluIHBpeGVsIHNwYWNlLFxyXG5cdC8vIHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxyXG5cdHRoaXMucGFuID0gZnVuY3Rpb24gKCBkZWx0YSApIHtcclxuXHJcblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcclxuXHJcblx0XHRpZiAoIHNjb3BlLm9iamVjdC5mb3YgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdC8vIHBlcnNwZWN0aXZlXHJcblx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcclxuXHRcdFx0dmFyIG9mZnNldCA9IHBvc2l0aW9uLmNsb25lKCkuc3ViKCBzY29wZS50YXJnZXQgKTtcclxuXHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xyXG5cclxuXHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXHJcblx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoc2NvcGUub2JqZWN0LmZvdi8yKSAqIE1hdGguUEkgLyAxODAuMCApO1xyXG5cdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XHJcblx0XHRcdHNjb3BlLnBhbkxlZnQoIDIgKiBkZWx0YS54ICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xyXG5cdFx0XHRzY29wZS5wYW5VcCggMiAqIGRlbHRhLnkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0LnRvcCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Ly8gb3J0aG9ncmFwaGljXHJcblx0XHRcdHNjb3BlLnBhbkxlZnQoIGRlbHRhLnggKiAoc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQpIC8gZWxlbWVudC5jbGllbnRXaWR0aCApO1xyXG5cdFx0XHRzY29wZS5wYW5VcCggZGVsdGEueSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgb3IgcGVyc3BlY3RpdmUgLSB3YXJuIHVzZXJcclxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdHRoaXMuZG9sbHlJbiA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcclxuXHJcblx0XHRpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcclxuXHJcblx0fTtcclxuXHJcblx0dGhpcy5kb2xseU91dCA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcclxuXHJcblx0XHRpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcclxuXHJcblx0fTtcclxuXHJcblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dmFyIHBvc2l0aW9uID0gdGhpcy5vYmplY3QucG9zaXRpb247XHJcblx0XHR2YXIgb2Zmc2V0ID0gcG9zaXRpb24uY2xvbmUoKS5zdWIoIHRoaXMudGFyZ2V0ICk7XHJcblxyXG5cdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xyXG5cclxuXHRcdHZhciB0aGV0YSA9IE1hdGguYXRhbjIoIG9mZnNldC54LCBvZmZzZXQueiApO1xyXG5cclxuXHRcdC8vIGFuZ2xlIGZyb20geS1heGlzXHJcblxyXG5cdFx0dmFyIHBoaSA9IE1hdGguYXRhbjIoIE1hdGguc3FydCggb2Zmc2V0LnggKiBvZmZzZXQueCArIG9mZnNldC56ICogb2Zmc2V0LnogKSwgb2Zmc2V0LnkgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMuYXV0b1JvdGF0ZSApIHtcclxuXHJcblx0XHRcdHRoaXMucm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGV0YSArPSB0aGV0YURlbHRhO1xyXG5cdFx0cGhpICs9IHBoaURlbHRhO1xyXG5cclxuXHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXHJcblx0XHRwaGkgPSBNYXRoLm1heCggdGhpcy5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkgKSApO1xyXG5cclxuXHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWUgRVBTIGFuZCBQSS1FUFNcclxuXHRcdHBoaSA9IE1hdGgubWF4KCBFUFMsIE1hdGgubWluKCBNYXRoLlBJIC0gRVBTLCBwaGkgKSApO1xyXG5cclxuXHRcdHZhciByYWRpdXMgPSBvZmZzZXQubGVuZ3RoKCkgKiBzY2FsZTtcclxuXHJcblx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG5cdFx0cmFkaXVzID0gTWF0aC5tYXgoIHRoaXMubWluRGlzdGFuY2UsIE1hdGgubWluKCB0aGlzLm1heERpc3RhbmNlLCByYWRpdXMgKSApO1xyXG5cdFx0XHJcblx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cclxuXHRcdHRoaXMudGFyZ2V0LmFkZCggcGFuICk7XHJcblxyXG5cdFx0b2Zmc2V0LnggPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLnNpbiggdGhldGEgKTtcclxuXHRcdG9mZnNldC55ID0gcmFkaXVzICogTWF0aC5jb3MoIHBoaSApO1xyXG5cdFx0b2Zmc2V0LnogPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLmNvcyggdGhldGEgKTtcclxuXHJcblx0XHRwb3NpdGlvbi5jb3B5KCB0aGlzLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XHJcblxyXG5cdFx0dGhpcy5vYmplY3QubG9va0F0KCB0aGlzLnRhcmdldCApO1xyXG5cclxuXHRcdHRoZXRhRGVsdGEgPSAwO1xyXG5cdFx0cGhpRGVsdGEgPSAwO1xyXG5cdFx0c2NhbGUgPSAxO1xyXG5cdFx0cGFuLnNldCgwLDAsMCk7XHJcblxyXG5cdFx0aWYgKCBsYXN0UG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy5vYmplY3QucG9zaXRpb24gKSA+IDAgKSB7XHJcblxyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XHJcblxyXG5cdFx0XHRsYXN0UG9zaXRpb24uY29weSggdGhpcy5vYmplY3QucG9zaXRpb24gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcclxuXHJcblx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcclxuXHJcblx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcclxuXHJcblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgeyByZXR1cm47IH1cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT09IDAgKSB7XHJcblx0XHRcdGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XHJcblxyXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IDEgKSB7XHJcblx0XHRcdGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgeyByZXR1cm47IH1cclxuXHJcblx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XHJcblxyXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gMiApIHtcclxuXHRcdFx0aWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcclxuXHJcblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBHcmVnZ21hbiBmaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnZ21hbi90aHJlZS5qcy9jb21taXQvZmRlOWY5OTE3ZDZkODM4MWYwNmJmMjJjZGZmNzY2MDI5ZDE3NjFiZVxyXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XHJcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcclxuXHJcblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XHJcblxyXG5cdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xyXG5cclxuXHRcdFx0aWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcclxuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xyXG5cclxuXHRcdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxyXG5cdFx0XHRzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcclxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXHJcblx0XHRcdHNjb3BlLnJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XHJcblxyXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcblx0XHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG5cdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XHJcblxyXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmRvbGx5SW4oKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmRvbGx5T3V0KCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcclxuXHJcblx0XHRcdGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XHJcblxyXG5cdFx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcclxuXHRcdFx0XHJcblx0XHRcdHNjb3BlLnBhbiggcGFuRGVsdGEgKTtcclxuXHJcblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBHcmVnZ21hbiBmaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnZ21hbi90aHJlZS5qcy9jb21taXQvZmRlOWY5OTE3ZDZkODM4MWYwNmJmMjJjZGZmNzY2MDI5ZDE3NjFiZVxyXG5cdFx0c2NvcGUudXBkYXRlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Nb3VzZVVwKCAvKiBldmVudCAqLyApIHtcclxuXHJcblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIEdyZWdnbWFuIGZpeDogaHR0cHM6Ly9naXRodWIuY29tL2dyZWdnbWFuL3RocmVlLmpzL2NvbW1pdC9mZGU5Zjk5MTdkNmQ4MzgxZjA2YmYyMmNkZmY3NjYwMjlkMTc2MWJlXHJcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcclxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XHJcblxyXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XHJcblxyXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XHJcblxyXG5cdFx0dmFyIGRlbHRhID0gMDtcclxuXHJcblx0XHRpZiAoIGV2ZW50LndoZWVsRGVsdGEgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxyXG5cclxuXHRcdFx0ZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRldGFpbCApIHsgLy8gRmlyZWZveFxyXG5cclxuXHRcdFx0ZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBkZWx0YSA+IDAgKSB7XHJcblxyXG5cdFx0XHRzY29wZS5kb2xseU91dCgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRzY29wZS5kb2xseUluKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XHJcblxyXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHsgcmV0dXJuOyB9XHJcblx0XHRpZiAoIHNjb3BlLm5vS2V5cyA9PT0gdHJ1ZSApIHsgcmV0dXJuOyB9XHJcblx0XHRpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgeyByZXR1cm47IH1cclxuXHJcblx0XHQvLyBwYW4gYSBwaXhlbCAtIEkgZ3Vlc3MgZm9yIHByZWNpc2UgcG9zaXRpb25pbmc/XHJcblx0XHQvLyBHcmVnZ21hbiBmaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnZ21hbi90aHJlZS5qcy9jb21taXQvZmRlOWY5OTE3ZDZkODM4MWYwNmJmMjJjZGZmNzY2MDI5ZDE3NjFiZVxyXG5cdFx0dmFyIG5lZWRVcGRhdGUgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcclxuXHJcblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcclxuXHRcdFx0XHRzY29wZS5wYW4oIG5ldyBUSFJFRS5WZWN0b3IyKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApICk7XHJcblx0XHRcdFx0bmVlZFVwZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XHJcblx0XHRcdFx0c2NvcGUucGFuKCBuZXcgVEhSRUUuVmVjdG9yMiggMCwgLXNjb3BlLmtleVBhblNwZWVkICkgKTtcclxuXHRcdFx0XHRuZWVkVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XHJcblx0XHRcdFx0c2NvcGUucGFuKCBuZXcgVEhSRUUuVmVjdG9yMiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKSApO1xyXG5cdFx0XHRcdG5lZWRVcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XHJcblx0XHRcdFx0c2NvcGUucGFuKCBuZXcgVEhSRUUuVmVjdG9yMiggLXNjb3BlLmtleVBhblNwZWVkLCAwICkgKTtcclxuXHRcdFx0XHRuZWVkVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBHcmVnZ21hbiBmaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnZ21hbi90aHJlZS5qcy9jb21taXQvZmRlOWY5OTE3ZDZkODM4MWYwNmJmMjJjZGZmNzY2MDI5ZDE3NjFiZVxyXG5cdFx0aWYgKCBuZWVkVXBkYXRlICkge1xyXG5cclxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gdG91Y2hzdGFydCggZXZlbnQgKSB7XHJcblxyXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XHJcblxyXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxyXG5cdFx0XHRcdGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcclxuXHJcblx0XHRcdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxyXG5cdFx0XHRcdGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgeyByZXR1cm47IH1cclxuXHJcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcclxuXHJcblx0XHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xyXG5cdFx0XHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcclxuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XHJcblx0XHRcdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cclxuXHRcdFx0XHRpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgeyByZXR1cm47IH1cclxuXHJcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XHJcblxyXG5cdFx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRvdWNobW92ZSggZXZlbnQgKSB7XHJcblxyXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xyXG5cclxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xyXG5cclxuXHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxyXG5cdFx0XHRcdGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSB7IHJldHVybjsgfVxyXG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XHJcblx0XHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xyXG5cclxuXHRcdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXHJcblx0XHRcdFx0c2NvcGUucm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XHJcblx0XHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXHJcblx0XHRcdFx0c2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcclxuXHJcblx0XHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcclxuXHRcdFx0XHRpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHsgcmV0dXJuOyB9XHJcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XHJcblx0XHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xyXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcclxuXHJcblx0XHRcdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xyXG5cdFx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLmRvbGx5T3V0KCk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUuZG9sbHlJbigpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxyXG5cdFx0XHRcdGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSB7IHJldHVybjsgfVxyXG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XHJcblx0XHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNjb3BlLnBhbiggcGFuRGVsdGEgKTtcclxuXHJcblx0XHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdG91Y2hlbmQoIC8qIGV2ZW50ICovICkge1xyXG5cclxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHR9XHJcblxyXG5cdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9LCBmYWxzZSApO1xyXG5cdHRoaXMubG9jYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcclxuXHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XHJcblx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTsgLy8gZmlyZWZveFxyXG5cclxuXHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XHJcblxyXG5cdHRoaXMubG9jYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCwgZmFsc2UgKTtcclxuXHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQsIGZhbHNlICk7XHJcblx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaG1vdmUsIGZhbHNlICk7XHJcblxyXG59O1xyXG5cclxuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRIUkVFLk9yYml0Q29udHJvbHM7IiwibW9kdWxlLmV4cG9ydHM9W1xyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkhcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JLQvtC00L7RgNC+0LQgSHlkcm9nZW5cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGRkZGRkZcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RUVFRUVFXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoKTFzMFwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxLjAwNzlcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIwLjA4OThcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMjU5LjFcIixcclxuICAgICAgICBcImJvaWxcIjogXCItMjUyLjhcIixcclxuICAgICAgICBcImhlYXRcIjogXCIxNC40NDJcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4xXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjAuMzJcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxMy42MFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkhlXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCT0LXQu9C40LkgSGVsaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4MzBDN0U2XCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDEwQUZDOFwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKCkxczBcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiNC4wMDI2XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMC4xNzlcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMjcyLjJcIixcclxuICAgICAgICBcImJvaWxcIjogXCItMjY4LjlcIixcclxuICAgICAgICBcImhlYXRcIjogXCI1LjIzMlwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIwLjkzXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMjQuNTlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJMaVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQm9C40YLQuNC5IExpdGhpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHg1NDIyRURcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4NTExREVCXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoSGUpMnMxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjYuOTQxXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNTMwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTgwLjVcIixcclxuICAgICAgICBcImJvaWxcIjogXCIxMzQyXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMy4zMDdcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4wXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjNcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjM5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQmVcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JHQtdGA0LjQu9C70LjQuSBCZXJ5bGxpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHgzRTc4MTlcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4MjA2ODI3XCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoSGUpMnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjkuMDEyMlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE4NTBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMjg1XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiMjQ3MFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjEuODg0XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuNVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIwLjkwXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOS4zMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkJcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JHQvtGAIEJvcm9uXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEhlKTJzMjJwMVwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxMC44MTFcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIyMzQwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjAzMFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIjM4NjBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIxLjI5M1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjBcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMC44MlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjguMzBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJDXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCj0LPQu9C10YDQvtC0IENhcmJvblwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweDM0MzQzNFwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHgwMDAwMDBcIixcclxuICAgICAgICBcImVzdFwiOiBcIihIZSkyczIycDJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTIuMDExXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMjI2MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjM3MDAgKNCy0L7Qt9CzLilcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNjlcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi41XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjAuNzdcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxMS4yNlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIk5cIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JDQt9C+0YIgTml0cm9nZW5cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHgxMTU3RkZcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4MTAzMEZGXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoSGUpMnMyMnAzXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE0LjAwN1wiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjEuMjUxXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiLTIxMFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIi0xOTUuOFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjEuMDM0XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjMuMFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIwLjc0XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTQuNTNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJPXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCa0LjRgdC70L7RgNC+0LQgT3h5Z2VuXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkYzQTNBXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZGMTMxM1wiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEhlKTJzMjJwNFwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxNS45OTlcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxLjQyOVwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIi0yMTguOFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIi0xODNcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjkxM1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIzLjVcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMC43M1wiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjEzLjYyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiRlwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQpNGC0L7RgCBGbHVvcmluZVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweDU1Qjk0MFwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHgxRjdCMDBcIixcclxuICAgICAgICBcImVzdFwiOiBcIihIZSkyczIycDVcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTguOTk4XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMS42OTZcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMjE5LjZcIixcclxuICAgICAgICBcImJvaWxcIjogXCItMTg4LjJcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjc1M1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCI0LjBcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMC43MlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjE3LjQyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTmVcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0J3QtdC+0L0gTmVvblwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweDMwQzdFNlwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHgxMEFGQzhcIixcclxuICAgICAgICBcImVzdFwiOiBcIihIZSkyczIycDZcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMjAuMTgwXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMC45MDFcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMjQ4LjZcIixcclxuICAgICAgICBcImJvaWxcIjogXCItMjQ2XCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC45MDRcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiwqBcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMC43MVwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjIxLjU2XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTmFcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0J3QsNGC0YDQuNC5IFNvZGl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweDU0MjJFRFwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHg1MTFERUJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihOZSkzczFcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMjIuOTkwXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiOTcwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiOTcuOFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMS4yMzVcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMC45XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNTRcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjE0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTWdcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JzQsNCz0L3QuNC5IE1hZ25lc2l1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihOZSkzczJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMjQuMzA1XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTc0MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjY1MFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMS4wNDdcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4yXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzZcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3LjY0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQWxcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JDQu9GO0LzQuNC90LjQuSBBbHVtaW5pdW1cIixcclxuICAgICAgICBcImVzdFwiOiBcIihOZSkzczIzcDFcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMjYuOTgyXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMjcwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjY2MFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC45XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuNVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjE4XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS45OFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlNpXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCa0YDQtdC80L3QuNC5IFNpbGljb25cIixcclxuICAgICAgICBcImVzdFwiOiBcIihOZSkzczIzcDJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMjguMDg2XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMjMzMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE0MTBcIixcclxuICAgICAgICBcImJvaWxcIjogXCIyNjAwXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC42NzhcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS44XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMTFcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI4LjE1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUFwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQpNC+0YHRhNC+0YAgUGhvc3Bob3J1c1wiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZGN0E0NFwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRjczMjBcIixcclxuICAgICAgICBcImVzdFwiOiBcIihOZSkzczIzcDNcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMzAuOTc0XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTgyMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjQ0LjIgKNCx0LXQuy4pLCA0MTAgKNC60YAuKVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIjI4MCAo0LHQtdC7LilcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjc0MVwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjFcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4wNlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjEwLjQ5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiU1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQodC10YDQsCBTdWxmdXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGRkRGMzlcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RTlDRTI5XCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoTmUpM3MyM3A0XCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjMyLjA2NVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIwNzBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMTMgKNGA0L7QvNCxLiksIDExOSAo0LzQvtC90L7QutC7LilcIixcclxuICAgICAgICBcImJvaWxcIjogXCI0NDRcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjczM1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjVcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4wMlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjEwLjM2XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQ2xcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KXQu9C+0YAgQ2hsb3JpbmVcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHg1NUI5NDBcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4MUY3QjAwXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoTmUpM3MyM3A1XCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjM1LjQ1M1wiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjAuMzE3XCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiLTEwMVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIi0zNFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNDg2XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjMuMFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIwLjk5XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTIuOTdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJBclwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQkNGA0LPQvtC9IEFyZ29uXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoTmUpM3MyM3A2XCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4MzBDN0U2XCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDEwQUZDOFwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIzOS45NDhcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxLjc4NFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIi0xODkuMlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIi0xODUuOFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNTIzXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjAuOThcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxNS43NlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIktcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JrQsNC70LjQuSBQb3Rhc3NpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHg1NDIyRURcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4NTExREVCXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpNHMxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjM5LjA5OFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjg2MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjYzLjZcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNzQxXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjAuOFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIyLjAzXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNC4zNFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkNhXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCa0LDQu9GM0YbQuNC5IENhbGNpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpNHMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjQwLjA3OFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE1NTBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI4MzhcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNjI0XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjc0XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4xMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlNjXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcIkPQutCw0L3QtNC40LkgU2NhbmRpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2QxNHMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjQ0Ljk1NlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjMwMDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNTM5XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjU0NFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS40NFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuNTRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJUaVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQotC40YLQsNC9IFRpdGFuaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4OUU5RTlFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDY2NjY2NlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMjRzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCI0Ny44NjdcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI0NTEwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTY2OFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC41MjdcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS41XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzJcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjgzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiVlwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQktCw0L3QsNC00LjQuSBWYW5hZGl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDM0czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiNTAuOTQyXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNjExMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE5MDBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNTAyXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuNlwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjIyXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi43MVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkNyXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCl0YDQvtC8IENocm9taXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkNTRzMVwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCI1MS45OTZcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI3MTkwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTg1NlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC40NlwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjZcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xOFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuNzZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJNblwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQnNCw0YDQs9Cw0L3QtdGGIE1hbmdhbmVzZVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDU0czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiNTQuOTM4XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNzQzMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjEyNDRcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNDgxXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuNVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjE3XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy40M1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkZlXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCW0LXQu9C10LfQviBJcm9uXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkNjRzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCI1NS44NDVcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI3ODYwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTUzNlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC40NlwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xN1wiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuODdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJDb1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQmtC+0LHQsNC70YzRgiBDb2JhbHRcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2Q3NHMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjU4LjkzM1wiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjg5MDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNDk1XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjQxNFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xNlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuODZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJOaVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQndC40LrQtdC70YwgTmlja2VsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkODRzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCI1OC42OTNcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI4OTAwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTQ1M1wiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC40NFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xNVwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuNjRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJDdVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQnNC10LTRjCBDb3BwZXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2QxMDRzMVwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCI2My41NDZcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI4OTYwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTA4M1wiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4zODVcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS45XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMTdcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3LjczXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiWm5cIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KbQuNC90LogWmluY1wiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDEwNHMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjY1LjQwOVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjcxNDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI0MTkuNVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4zODNcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS42XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjVcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5LjM5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiR2FcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JPQsNC70LvQuNC5IEdhbGxpdW1cIixcclxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDEwNHMyNHAxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjY5LjcyM1wiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjU5MTBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyOS44XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjMzMVwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4yNlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuMDBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJHZVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQk9C10YDQvNCw0L3QuNC5IEdlcm1hbml1bVwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTA0czI0cDJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiNzIuNjRcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI1MzIwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiOTM3LjRcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMzA1XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuMFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjIyXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOC4xM1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkFzXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCc0YvRiNGM0Y/QuiBBcnNlbmljXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2QxMDRzMjRwM1wiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCI3NC45MjJcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI1NzIwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiODE3ICjQv9C+0LQg0LTQsNCy0LsuKVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4zNDNcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4yXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjBcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5LjgxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiU2VcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KHQtdC70LXQvSBTZWxlbml1bVwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTA0czI0cDRcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiNzguOTZcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI0NzkwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjE3XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiNjg1XCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4zNTJcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi41XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMTZcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5Ljc1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQnJcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JHRgNC+0LwgQnJvbWluZVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweERGOTAyQlwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhBRjYwMThcIixcclxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDEwNHMyNHA1XCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjc5LjkwNFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjMxMjBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCItNy4yXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiNTguOFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjkzXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuOFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjE0XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTEuODFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJLclwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQmtGA0LjQv9GC0L7QvSBLcnlwdG9uXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4MzBDN0U2XCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDEwQUZDOFwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTA0czI0cDZcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiODMuNzk4XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMy43NFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIi0xNTcuM1wiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIi0xNTMuMlwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjQ4XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMTJcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxNC4wMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlJiXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCg0YPQsdC40LTQuNC5IFJ1YmlkaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4NTQyMkVEXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDUxMURFQlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTVzMVwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCI4NS40NjhcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxNTMwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzguOVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4zMzVcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMC44XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjIuMTZcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI0LjE4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiU3JcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KHRgtGA0L7QvdGG0LjQuSBTdHJvbnRpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNXMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjg3LjYyXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMjYwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjc2OFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC43MzdcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4wXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuOTFcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjY5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiWVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQmNGC0YLRgNC40LkgWXR0cml1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDE1czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiODguOTA2XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNDQ3MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE1MjVcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjk3XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuM1wiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjYyXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4zOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlpyXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCm0LjRgNC60L7QvdC40LkgWmlyY29uaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkMjVzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCI5MS4yMjRcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI2NDkwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTg1MlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yNzZcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS40XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDVcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2Ljg0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTmJcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0J3QuNC+0LHQuNC5IE5pb2JpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQ0NXMxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjkyLjkwNlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjg0MDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyNDY4XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjI3MlwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjZcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4zNFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuODhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJNb1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQnNC+0LvQuNCx0LTQtdC9IE1vbHliZGVudW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQ1NXMxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjk1Ljk0XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTAyMDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyNjIwXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjI1NVwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4zMFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuMTBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJUY1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQotC10YXQvdC10YbQuNC5IFRlY2huZXRpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQ1NXMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIls5OF1cIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMTUwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjIxNDBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjFcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS45XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjdcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3LjI4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUnVcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KDRg9GC0LXQvdC40LkgUnV0aGVuaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkNzVzMVwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxMDEuMDdcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMjIwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjI1MDBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjM5XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuMlwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjI1XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy4zNlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlJoXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCg0L7QtNC40LkgUmhvZGl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDg1czFcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTAyLjkxXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTI0MDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxOTY2XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjI0N1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjJcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4yNVwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuNDZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJQZFwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQn9Cw0LvQu9Cw0LTQuNC5IFBhbGxhZGl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDEwNXMwXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjEwNi40MlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjEyMDAwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTU1MlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yNDNcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4yXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjhcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI4LjMzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQWdcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KHQtdGA0LXQsdGA0L4gU2lsdmVyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkMTA1czFcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTA3Ljg3XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTA1MDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI5NjAuOFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yMzRcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS45XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzRcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3LjU4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQ2RcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JrQsNC00LzQuNC5IENhZG1pdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQxMDVzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxMTIuNDFcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI4NjUwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzIwLjlcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjNcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS43XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDhcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI4Ljk5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiSW5cIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JjQvdC00LjQuSBJbmRpdW1cIixcclxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDEwNXMyNXAxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjExNC44MlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjczMTBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNTYuMlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yMzlcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS43XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDRcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1Ljc4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiU25cIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0J7Qu9C+0LLQviBUaW5cIixcclxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDEwNXMyNXAyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjExOC43MVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjczMDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyMzEuOVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yMjZcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS44XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDFcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3LjM0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiU2JcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KHRg9GA0YzQvNCwIEFudGltb255XCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQxMDVzMjVwM1wiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxMjEuNzZcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI2NjIwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiNjMwLjVcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjA1XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuOVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjQwXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOC42NFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlRlXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCi0LXQu9C70YPRgCBUZWxsdXJpdW1cIixcclxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDEwNXMyNXA0XCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjEyNy42XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNjI0MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjQ0OS41XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiOTkwXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xOTdcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4xXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzZcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5LjAxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiSVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEEwNTdFNlwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhBNDI5RjRcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JjQvtC0IElvZGluZVwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkMTA1czI1cDVcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTI2LjkwXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNDk0MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjExMy43XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiMTgzLjVcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjIxOFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjVcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4zM1wiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjEwLjQ1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiWGVcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JrRgdC10L3QvtC9IFhlbm9uXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4MzBDN0U2XCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDEwQUZDOFwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkMTA1czI1cDZcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTMxLjI5XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNS44NlwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIi0xMTEuOVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIi0xMDhcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjE1OFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjMxXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTIuMTNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJDc1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQptC10LfQuNC5IENhZXNpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHg1NDIyRURcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4NTExREVCXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNnMxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjEzMi45MVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE5MDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyOC41XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjIxOFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIwLjdcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMi4zNVwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjMuODlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJCYVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQkdCw0YDQuNC5IEJhcml1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk2czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTM3LjMzXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMzUwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjcyOVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yODVcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMC45XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuOThcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjE5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTGFcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JvQsNC90YLQsNC9IExhbnRoYW51bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk1ZDE2czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTM4LjkxXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNjE3MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjkyMFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xODhcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4xXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNjlcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjYxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQ2VcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KbQtdGA0LjQuSBDZXJpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYyNWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE0MC4xMlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjY3NzBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI3OTVcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTc2XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjY1XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi41NFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlByXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCf0YDQsNC30LXQvtC00LjQvCBQcmFzZW9keW1pdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYzNWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE0MC45MVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjY3ODBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI5MzVcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjAxXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjY1XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS43NlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIk5kXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCd0LXQvtC00LjQvCBOZW9keW1pdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGY0NWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE0NC4yNFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjcwMDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMDI0XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjE4OFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjJcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS42NFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuMzFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJQbVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQn9GA0L7QvNC10YLQuNC5IFByb21ldGhpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGY1NWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIlsxNDVdXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNzIyMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjEwODBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTY4XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjY0XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS45MFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlNtXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCh0LDQvNCw0YDQuNC5IFNhbWFyaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmNjVkMDZzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxNTAuMzZcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI3NTQwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTA3MlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xNzZcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4yXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNjJcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjY0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiRXVcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JXQstGA0L7Qv9C40LkgRXVyb3BpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGY3NWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE1MS45NlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjUyNjBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI4MjZcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTYzXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMlwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjg1XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS42N1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkdkXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCT0LDQtNC+0LvQuNC90LjQuSBHYWRvbGluaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmNzVkMTZzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxNTcuMjVcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI3ODkwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTMxMlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yOTdcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4xXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNjFcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjE2XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiVGJcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KLQtdGA0LHQuNC5IFRlcmJpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGY5NWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE1OC45M1wiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjgyNzBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMzU2XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjE4NFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjJcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS41OVwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuODZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJEeVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQlNC40YHQv9GA0L7Qt9C40LkgRHlzcHJvc2l1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjEwNWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE2Mi41MFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjg1NDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNDA3XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjE3MlwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjJcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS41OVwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuOTRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJIb1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQk9C+0LvRjNC80LjQuSBIb2xtaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTE1ZDA2czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTY0LjkzXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiODgwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE0NjFcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTYzXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMlwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjU3XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi45MFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkVyXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCt0YDQsdC40LkgRXJiaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTI1ZDA2czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTY3LjI2XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiOTA1MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE0OTdcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTY3XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMlwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjU3XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi43MFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlRtXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCi0YPQu9C40LkgVGh1bGl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjEzNWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE2OC45M1wiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjkzMzBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNTQ1XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjE1OVwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjJcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS41NlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuNjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJZYlwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQmNGC0YLQtdGA0LHQuNC5IFl0dGVyYml1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQwNnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE3My4wNFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjY5ODBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI4MjRcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTQ3XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjcwXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4yMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkx1XCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCb0Y7RgtC10YbQuNC5IEx1dGV0aXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDE2czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTc0Ljk3XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiOTg0MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE2NTJcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTU1XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMlwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjU2XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4xNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkhmXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCT0LDRhNC90LjQuSBIYWZuaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDI2czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTc4LjQ5XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTMxMDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyMjIyXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjE0N1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS40NFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuMzBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJUYVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQotCw0L3RgtCw0LsgVGFudGFsdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYxNDVkMzZzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIxODAuOTVcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxNjYwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjI5OTZcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTUxXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuNVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjM0XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy43MFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIldcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JLQvtC70YzRhNGA0LDQvCBUdW5nc3RlblwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQ0NnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE4My44NFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE5MzAwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzQxMFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xMzRcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS43XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzBcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3Ljk4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUmVcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KDQtdC90LjQuSBSaGVuaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDU2czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTg2LjIxXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMjEwMDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIzMTgwXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjEzOFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjlcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4yOFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuODdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJPc1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQntGB0LzQuNC5IE9zbWl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQ2NnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE5MC4yM1wiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIyNTAwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzAwMFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xM1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjJcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4yNlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjguNzBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJJclwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQmNGA0LjQtNC40LkgSXJpZGl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQ3NnMyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE5Mi4yMlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIyNDAwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjQxMFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xM1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjJcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4yN1wiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjkuMDBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJQdFwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQn9C70LDRgtC40L3QsCBQbGF0aW51bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQ5NnMxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjE5NS4wOFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIxNDAwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTc2OVwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xMzRcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4yXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzBcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5LjAwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQXVcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JfQvtC70L7RgtC+IEdvbGRcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYxNDVkMTA2czFcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiMTk2Ljk3XCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTkzMDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMDYzXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjEzXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuNFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjM0XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOS4yMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkhnXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCg0YLRg9GC0YwgTWVyY3VyeVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQxMDZzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIyMDAuNTlcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMzUyMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIi0zOC45XCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiMzU3XCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xMzhcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS45XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDlcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxMC40M1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlRsXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCi0LDQu9C70LjQuSBUaGFsbGl1bVwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDEwNnMyNnAxXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjIwNC4zOFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjExODUwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzAzXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiMTQ1N1wiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTNcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS44XCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDhcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5LjAxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUGJcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0KHQstC40L3QtdGGIExlYWRcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQxMDZzMjZwMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIyMDcuMlwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjExNDAwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzI3LjRcIixcclxuICAgICAgICBcImJvaWxcIjogXCIxNzQwXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xM1wiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS40N1wiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuMzdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJCaVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQktC40YHQvNGD0YIgQmlzbXV0aFwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDEwNnMyNnAzXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjIwOC45OFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjk4MDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyNzEuM1wiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIjE1NjBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjE0MlwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjlcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS40NlwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuMjlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJQb1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQn9C+0LvQvtC90LjQuSBQb2xvbml1bVwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDEwNnMyNnA0XCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIlsyMDldXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiOTMwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjI1NFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIjk2MlwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTI1XCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuMFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjQ2XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOC40M1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkF0XCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCQ0YHRgtCw0YIgQXN0YXRpbmVcIixcclxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQxMDZzMjZwNVwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCJbMjEwXVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzAyXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiMzM3XCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiwqBcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4yXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDVcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCLCoFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlJuXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCg0LDQtNC+0L0gUmFkb25cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYxNDVkMTA2czI2cDZcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiWzIyMl1cIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCI5LjkxXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiLTcxXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiLTYyXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4wOVwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIyLjE0XCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTAuNzVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJGclwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQpNGA0LDQvdGG0LjQuSBGcmFuY2l1bVwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTdzMVwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCJbMjIzXVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjdcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjAuN1wiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjQuMDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJSYVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQoNCw0LTQuNC5IFJhZGl1bVwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTdzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCJbMjI2XVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjUwMDBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI3MDBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjAuOVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuMjhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJBY1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQkNC60YLQuNC90LjQuSBBY3Rpbml1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihSbik2ZDE3czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiWzIyN11cIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMDA3MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjEwNTBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuMTdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJUaFwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQotC+0YDQuNC5IFRob3JpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNmQyN3MyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjIzMi4wNFwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjExNzAwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTc1MFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xNDJcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNjVcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjA4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUGFcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0J/RgNC+0LDQutGC0LjQvdC40LkgUHJvdGFjdGluaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmMjZkMTdzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCIyMzEuMDRcIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxNTQwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE1NjBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTIxXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuNVwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuODlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJVXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCj0YDQsNC9IFVyYW5pdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNWYzNmQxN3MyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIjIzOC4wM1wiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE5MDUwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTEzMlwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xMTdcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDJcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjA1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTnBcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0J3QtdC/0YLRg9C90LjQuSBOZXB0dW5pdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNWY0NmQxN3MyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIlsyMzddXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMjA0NTBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCI2NDBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTJcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4xOVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlB1XCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCf0LvRg9GC0L7QvdC40LkgUGx1dG9uaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmNjZkMDdzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCJbMjQ0XVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE5ODQwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiNjQwXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCIwLjEzXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuM1wiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuMDZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJBbVwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQkNC80LXRgNC40YbQuNC5IEFtZXJpY2l1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihSbik1Zjc2ZDA3czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiWzI0M11cIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMzY3MFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjk5NFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xMzhcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS45OVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkNtXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCa0Y7RgNC40LkgQ3VyaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmNzZkMTdzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCJbMjQ3XVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjEzNTEwXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTM0MFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiwqBcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4wMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkJrXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCR0LXRgNC60LvQuNC5IEJlcmtlbGl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihSbik1Zjk2ZDA3czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiWzI0N11cIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCIxNDAwMFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiwqBcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjIzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQ2ZcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JrQsNC70LjRhNC+0YDQvdC40LkgQ2FsaWZvcm5pdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNWYxMDZkMDdzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCJbMjUxXVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiwqBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuM1wiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuMzBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJFc1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQrdC50L3RiNGC0LXQudC90LjQuSBFaW5zdGVpbml1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihSbik1ZjExNmQwN3MyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIlsyNTJdXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiwqBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiwqBcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi40MlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkZtXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCk0LXRgNC80LjQuSBGZXJtaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4Rjk2NzI3XCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEU5NjIxOVwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmMTI2ZDA3czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiWzI1N11cIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCLCoFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcclxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiwqBcIixcclxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjUwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTWRcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwi0JzQtdC90LTQtdC70LXQstC40LkgTWVuZGVsZXZpdW1cIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcclxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXHJcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNWYxMzZkMDdzMlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm1hc3NcIjogXCJbMjU4XVwiLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiwqBcIixcclxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuM1wiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuNThcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZvcm11bGFcIjogXCJOb1wiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCLQndC+0LHQtdC70LjQuSBOb2JlbGl1bVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxyXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcclxuICAgICAgICBcImVzdFwiOiBcIihSbik1ZjE0NmQwN3MyXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibWFzc1wiOiBcIlsyNTldXCIsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiwqBcIixcclxuICAgICAgICBcIm1lbHRpbmdcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJoZWF0XCI6IFwiwqBcIixcclxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXHJcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXHJcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi42NVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkxyXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcItCb0L7Rg9GA0LXQvdGB0LjQuSBMYXdyZW5jaXVtXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXHJcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxyXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmMTQ2ZDE3czJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJtYXNzXCI6IFwiWzI2Ml1cIixcclxuICAgICAgICBcImRlbnNpdHlcIjogXCLCoFwiLFxyXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIsKgXCIsXHJcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcclxuICAgICAgICBcImhlYXRcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxyXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIsKgXCJcclxuICAgIH1cclxuXSIsIi8vIFRoaXMgVEhSRUV4IGhlbHBlciBtYWtlcyBpdCBlYXN5IHRvIGhhbmRsZSB0aGUgbW91c2UgZXZlbnRzIGluIHlvdXIgM0Qgc2NlbmVcclxuLy9cclxuLy8gKiBDSEFOR0VTIE5FRURFRFxyXG4vLyAgICogaGFuZGxlIGRyYWcvZHJvcFxyXG4vLyAgICogbm90aWZ5IGV2ZW50cyBub3Qgb2JqZWN0M0QgLSBsaWtlIERPTVxyXG4vLyAgICAgKiBzbyBzaW5nbGUgb2JqZWN0IHdpdGggcHJvcGVydHlcclxuLy8gICAqIERPTkUgYnVibGluZyBpbXBsZW1lbnQgYnVibGluZy9jYXB0dXJpbmdcclxuLy8gICAqIERPTkUgaW1wbGVtZW50IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbi8vICAgKiBET05FIGltcGxlbWVudCBldmVudC50eXBlID0gXCJjbGlja1wiIGFuZCBjb1xyXG4vLyAgICogRE9ORSBpbXBsZW1lbnQgZXZlbnQudGFyZ2V0XHJcbi8vXHJcbi8vICMgTGV0cyBnZXQgc3RhcnRlZFxyXG4vL1xyXG4vLyBGaXJzdCB5b3UgaW5jbHVkZSBpdCBpbiB5b3VyIHBhZ2VcclxuLy9cclxuLy8gYGBgPHNjcmlwdCBzcmM9J3RocmVleC5kb21ldmVudC5qcyc+PCAvc2NyaXB0PmBgYFxyXG4vL1xyXG4vLyAjIHVzZSB0aGUgb2JqZWN0IG9yaWVudGVkIGFwaVxyXG4vL1xyXG4vLyBZb3UgYmluZCBhbiBldmVudCBsaWtlIHRoaXNcclxuLy8gXHJcbi8vIGBgYG1lc2gub24oJ2NsaWNrJywgZnVuY3Rpb24ob2JqZWN0M2QpeyAuLi4gfSlgYGBcclxuLy9cclxuLy8gVG8gdW5iaW5kIGFuIGV2ZW50LCBqdXN0IGRvXHJcbi8vXHJcbi8vIGBgYG1lc2gub2ZmKCdjbGljaycsIGZ1bmN0aW9uKG9iamVjdDNkKXsgLi4uIH0pYGBgXHJcbi8vXHJcbi8vIEFzIGFuIGFsdGVybmF0aXZlLCB0aGVyZSBpcyBhbm90aGVyIG5hbWluZyBjbG9zZXIgRE9NIGV2ZW50cy5cclxuLy8gUGljayB0aGUgb25lIHlvdSBsaWtlLCB0aGV5IGFyZSBkb2luZyB0aGUgc2FtZSB0aGluZ1xyXG4vL1xyXG4vLyBgYGBtZXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24ob2JqZWN0M2QpeyAuLi4gfSlgYGBcclxuLy8gYGBgbWVzaC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKG9iamVjdDNkKXsgLi4uIH0pYGBgXHJcbi8vXHJcbi8vICMgU3VwcG9ydGVkIEV2ZW50c1xyXG4vL1xyXG4vLyBBbHdheXMgaW4gYSBlZmZvcnQgdG8gc3RheSBjbG9zZSB0byB1c3VhbCBwcmF0aWNlcywgdGhlIGV2ZW50cyBuYW1lIGFyZSB0aGUgc2FtZSBhcyBpbiBET00uXHJcbi8vIFRoZSBzZW1hbnRpYyBpcyB0aGUgc2FtZSB0b28uXHJcbi8vIEN1cnJlbnRseSwgdGhlIGF2YWlsYWJsZSBldmVudHMgYXJlXHJcbi8vIFtjbGljaywgZGJsY2xpY2ssIG1vdXNldXAsIG1vdXNlZG93bl0oaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9kb20vZXZlbnRzL2NsaWNrLmh0bWwpLFxyXG4vLyBbbW91c2VvdmVyIGFuZCBtb3VzZSBvdXRdKGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvZG9tL2V2ZW50cy9tb3VzZW92ZXIuaHRtbCkuXHJcbi8vXHJcbi8vICMgdXNlIHRoZSBzdGFuZGFsb25lIGFwaVxyXG4vL1xyXG4vLyBUaGUgb2JqZWN0LW9yaWVudGVkIGFwaSBtb2RpZmllcyBUSFJFRS5PYmplY3QzRCBjbGFzcy5cclxuLy8gSXQgaXMgYSBnbG9iYWwgY2xhc3MsIHNvIGl0IG1heSBiZSBsZWdpdGltYXRseSBjb25zaWRlcmVkIHVuY2xlYW4gYnkgc29tZSBwZW9wbGUuXHJcbi8vIElmIHRoaXMgYm90aGVyIHlvdSwgc2ltcGx5IGRvIGBgYFRIUkVFeC5Eb21FdmVudHMubm9Db25mbGljdCgpYGBgIGFuZCB1c2UgdGhlXHJcbi8vIHN0YW5kYWxvbmUgQVBJLiBJbiBmYWN0LCB0aGUgb2JqZWN0IG9yaWVudGVkIEFQSSBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyXHJcbi8vIG9uIHRvcCBvZiB0aGUgc3RhbmRhbG9uZSBBUEkuXHJcbi8vXHJcbi8vIEZpcnN0LCB5b3UgaW5zdGFuY2lhdGUgdGhlIG9iamVjdFxyXG4vL1xyXG4vLyBgYGB2YXIgZG9tRXZlbnQgPSBuZXcgVEhSRUV4LkRvbUV2ZW50KCk7YGBgXHJcbi8vIFxyXG4vLyBUaGVuIHlvdSBiaW5kIGFuIGV2ZW50IGxpa2UgdGhpc1xyXG4vL1xyXG4vLyBgYGBkb21FdmVudC5iaW5kKG1lc2gsICdjbGljaycsIGZ1bmN0aW9uKG9iamVjdDNkKXsgb2JqZWN0M2Quc2NhbGUueCAqPSAyOyB9KTtgYGBcclxuLy9cclxuLy8gVG8gdW5iaW5kIGFuIGV2ZW50LCBqdXN0IGRvXHJcbi8vXHJcbi8vIGBgYGRvbUV2ZW50LnVuYmluZChtZXNoLCAnY2xpY2snLCBjYWxsYmFjayk7YGBgXHJcbi8vXHJcbi8vIFxyXG4vLyAjIENvZGVcclxuXHJcbi8vXHJcblxyXG4vKiogQG5hbWVzcGFjZSAqL1xyXG52YXIgVEhSRUV4XHRcdD0gVEhSRUV4IFx0XHR8fCB7fTtcclxuXHJcbi8vICMgQ29uc3RydWN0b3JcclxuVEhSRUV4LkRvbUV2ZW50c1x0PSBmdW5jdGlvbihjYW1lcmEsIGRvbUVsZW1lbnQpXHJcbntcclxuXHR0aGlzLl9jYW1lcmFcdD0gY2FtZXJhIHx8IG51bGw7XHJcblx0dGhpcy5fZG9tRWxlbWVudD0gZG9tRWxlbWVudCB8fCBkb2N1bWVudDtcclxuXHR0aGlzLl9yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XHJcblx0dGhpcy5fc2VsZWN0ZWRcdD0gbnVsbDtcclxuXHR0aGlzLl9ib3VuZE9ianNcdD0ge307XHJcblx0Ly8gQmluZCBkb20gZXZlbnQgZm9yIG1vdXNlIGFuZCB0b3VjaFxyXG5cdHZhciBfdGhpc1x0PSB0aGlzO1xyXG5cclxuXHR0aGlzLl8kb25DbGlja1x0XHQ9IGZ1bmN0aW9uKCl7IF90aGlzLl9vbkNsaWNrLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1x0XHR9O1xyXG5cdHRoaXMuXyRvbkRibENsaWNrXHQ9IGZ1bmN0aW9uKCl7IF90aGlzLl9vbkRibENsaWNrLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1x0fTtcclxuXHR0aGlzLl8kb25Nb3VzZU1vdmVcdD0gZnVuY3Rpb24oKXsgX3RoaXMuX29uTW91c2VNb3ZlLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1x0fTtcclxuXHR0aGlzLl8kb25Nb3VzZURvd25cdD0gZnVuY3Rpb24oKXsgX3RoaXMuX29uTW91c2VEb3duLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1x0fTtcclxuXHR0aGlzLl8kb25Nb3VzZVVwXHQ9IGZ1bmN0aW9uKCl7IF90aGlzLl9vbk1vdXNlVXAuYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XHRcdH07XHJcblx0dGhpcy5fJG9uVG91Y2hNb3ZlXHQ9IGZ1bmN0aW9uKCl7IF90aGlzLl9vblRvdWNoTW92ZS5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcdH07XHJcblx0dGhpcy5fJG9uVG91Y2hTdGFydFx0PSBmdW5jdGlvbigpeyBfdGhpcy5fb25Ub3VjaFN0YXJ0LmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1x0fTtcclxuXHR0aGlzLl8kb25Ub3VjaEVuZFx0PSBmdW5jdGlvbigpeyBfdGhpcy5fb25Ub3VjaEVuZC5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcdH07XHJcblx0dGhpcy5fJG9uQ29udGV4dG1lbnVcdD0gZnVuY3Rpb24oKXsgX3RoaXMuX29uQ29udGV4dG1lbnUuYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XHR9O1xyXG5cdHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJ1x0LCB0aGlzLl8kb25DbGlja1x0LCBmYWxzZSApO1xyXG5cdHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2RibGNsaWNrJ1x0LCB0aGlzLl8kb25EYmxDbGlja1x0LCBmYWxzZSApO1xyXG5cdHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZSdcdCwgdGhpcy5fJG9uTW91c2VNb3ZlXHQsIGZhbHNlICk7XHJcblx0dGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJ1x0LCB0aGlzLl8kb25Nb3VzZURvd25cdCwgZmFsc2UgKTtcclxuXHR0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJ1x0LCB0aGlzLl8kb25Nb3VzZVVwXHQsIGZhbHNlICk7XHJcblx0dGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJ1x0LCB0aGlzLl8kb25Ub3VjaE1vdmVcdCwgZmFsc2UgKTtcclxuXHR0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0J1x0LCB0aGlzLl8kb25Ub3VjaFN0YXJ0XHQsIGZhbHNlICk7XHJcblx0dGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnXHQsIHRoaXMuXyRvblRvdWNoRW5kXHQsIGZhbHNlICk7XHJcblx0dGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCB0aGlzLl8kb25Db250ZXh0bWVudVx0LCBmYWxzZSApO1xyXG5cdFxyXG59XHJcblxyXG4vLyAjIERlc3RydWN0b3JcclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuZGVzdHJveVx0PSBmdW5jdGlvbigpXHJcbntcclxuXHQvLyB1bkJpbmQgZG9tIGV2ZW50IGZvciBtb3VzZSBhbmQgdG91Y2hcclxuXHR0aGlzLl9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaydcdFx0LCB0aGlzLl8kb25DbGlja1x0LCBmYWxzZSApO1xyXG5cdHRoaXMuX2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2RibGNsaWNrJ1x0LCB0aGlzLl8kb25EYmxDbGlja1x0LCBmYWxzZSApO1xyXG5cdHRoaXMuX2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZSdcdCwgdGhpcy5fJG9uTW91c2VNb3ZlXHQsIGZhbHNlICk7XHJcblx0dGhpcy5fZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJ1x0LCB0aGlzLl8kb25Nb3VzZURvd25cdCwgZmFsc2UgKTtcclxuXHR0aGlzLl9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJ1x0XHQsIHRoaXMuXyRvbk1vdXNlVXBcdCwgZmFsc2UgKTtcclxuXHR0aGlzLl9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnXHQsIHRoaXMuXyRvblRvdWNoTW92ZVx0LCBmYWxzZSApO1xyXG5cdHRoaXMuX2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnXHQsIHRoaXMuXyRvblRvdWNoU3RhcnRcdCwgZmFsc2UgKTtcclxuXHR0aGlzLl9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCdcdCwgdGhpcy5fJG9uVG91Y2hFbmRcdCwgZmFsc2UgKTtcclxuXHR0aGlzLl9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudSdcdCwgdGhpcy5fJG9uQ29udGV4dG1lbnVcdCwgZmFsc2UgKTtcclxufVxyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5ldmVudE5hbWVzXHQ9IFtcclxuXHRcImNsaWNrXCIsXHJcblx0XCJkYmxjbGlja1wiLFxyXG5cdFwibW91c2VvdmVyXCIsXHJcblx0XCJtb3VzZW91dFwiLFxyXG5cdFwibW91c2Vtb3ZlXCIsXHJcblx0XCJtb3VzZWRvd25cIixcclxuXHRcIm1vdXNldXBcIixcclxuXHRcImNvbnRleHRtZW51XCIsXHJcblx0XCJ0b3VjaHN0YXJ0XCIsXHJcblx0XCJ0b3VjaGVuZFwiXHJcbl07XHJcblxyXG5USFJFRXguRG9tRXZlbnRzLnByb3RvdHlwZS5fZ2V0UmVsYXRpdmVNb3VzZVhZXHQ9IGZ1bmN0aW9uKGRvbUV2ZW50KXtcclxuXHR2YXIgZWxlbWVudCA9IGRvbUV2ZW50LnRhcmdldCB8fCBkb21FdmVudC5zcmNFbGVtZW50O1xyXG5cdGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSAzKSB7XHJcblx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlOyAvLyBTYWZhcmkgZml4IC0tIHNlZSBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL2V2ZW50c19wcm9wZXJ0aWVzLmh0bWxcclxuXHR9XHJcblx0XHJcblx0Ly9nZXQgdGhlIHJlYWwgcG9zaXRpb24gb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgcGFnZSBzdGFydGluZyBwb2ludCAoMCwgMClcclxuXHQvL2NyZWRpdHMgZ28gdG8gYnJhaW5qYW0gb24gYW5zd2VyaW5nIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTc1NTMxMi9nZXR0aW5nLW1vdXNlLXBvc2l0aW9uLXJlbGF0aXZlLXRvLWNvbnRlbnQtYXJlYS1vZi1hbi1lbGVtZW50XHJcblx0dmFyIGVsUG9zaXRpb25cdD0geyB4IDogMCAsIHkgOiAwfTtcclxuXHR2YXIgdG1wRWxlbWVudFx0PSBlbGVtZW50O1xyXG5cdC8vc3RvcmUgcGFkZGluZ1xyXG5cdHZhciBzdHlsZVx0PSBnZXRDb21wdXRlZFN0eWxlKHRtcEVsZW1lbnQsIG51bGwpO1xyXG5cdGVsUG9zaXRpb24ueSArPSBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy10b3BcIiksIDEwKTtcclxuXHRlbFBvc2l0aW9uLnggKz0gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctbGVmdFwiKSwgMTApO1xyXG5cdC8vYWRkIHBvc2l0aW9uc1xyXG5cdGRvIHtcclxuXHRcdGVsUG9zaXRpb24ueFx0Kz0gdG1wRWxlbWVudC5vZmZzZXRMZWZ0O1xyXG5cdFx0ZWxQb3NpdGlvbi55XHQrPSB0bXBFbGVtZW50Lm9mZnNldFRvcDtcclxuXHRcdHN0eWxlXHRcdD0gZ2V0Q29tcHV0ZWRTdHlsZSh0bXBFbGVtZW50LCBudWxsKTtcclxuXHJcblx0XHRlbFBvc2l0aW9uLnhcdCs9IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJib3JkZXItbGVmdC13aWR0aFwiKSwgMTApO1xyXG5cdFx0ZWxQb3NpdGlvbi55XHQrPSBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiYm9yZGVyLXRvcC13aWR0aFwiKSwgMTApO1xyXG5cdH0gd2hpbGUodG1wRWxlbWVudCA9IHRtcEVsZW1lbnQub2Zmc2V0UGFyZW50KTtcclxuXHRcclxuXHR2YXIgZWxEaW1lbnNpb25cdD0ge1xyXG5cdFx0d2lkdGhcdDogKGVsZW1lbnQgPT09IHdpbmRvdykgPyB3aW5kb3cuaW5uZXJXaWR0aFx0OiBlbGVtZW50Lm9mZnNldFdpZHRoLFxyXG5cdFx0aGVpZ2h0XHQ6IChlbGVtZW50ID09PSB3aW5kb3cpID8gd2luZG93LmlubmVySGVpZ2h0XHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcblx0fTtcclxuXHRcclxuXHRyZXR1cm4ge1xyXG5cdFx0eCA6ICsoKGRvbUV2ZW50LnBhZ2VYIC0gZWxQb3NpdGlvbi54KSAvIGVsRGltZW5zaW9uLndpZHRoICkgKiAyIC0gMSxcclxuXHRcdHkgOiAtKChkb21FdmVudC5wYWdlWSAtIGVsUG9zaXRpb24ueSkgLyBlbERpbWVuc2lvbi5oZWlnaHQpICogMiArIDFcclxuXHR9O1xyXG59O1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypcdFx0ZG9tZXZlbnQgY29udGV4dFx0XHRcdFx0XHRcdCovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIGhhbmRsZSBkb21ldmVudCBjb250ZXh0IGluIG9iamVjdDNkIGluc3RhbmNlXHJcblxyXG5USFJFRXguRG9tRXZlbnRzLnByb3RvdHlwZS5fb2JqZWN0Q3R4SW5pdFx0PSBmdW5jdGlvbihvYmplY3QzZCl7XHJcblx0b2JqZWN0M2QuXzN4RG9tRXZlbnQgPSB7fTtcclxufVxyXG5USFJFRXguRG9tRXZlbnRzLnByb3RvdHlwZS5fb2JqZWN0Q3R4RGVpbml0XHQ9IGZ1bmN0aW9uKG9iamVjdDNkKXtcclxuXHRkZWxldGUgb2JqZWN0M2QuXzN4RG9tRXZlbnQ7XHJcbn1cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX29iamVjdEN0eElzSW5pdFx0PSBmdW5jdGlvbihvYmplY3QzZCl7XHJcblx0cmV0dXJuIG9iamVjdDNkLl8zeERvbUV2ZW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblRIUkVFeC5Eb21FdmVudHMucHJvdG90eXBlLl9vYmplY3RDdHhHZXRcdFx0PSBmdW5jdGlvbihvYmplY3QzZCl7XHJcblx0cmV0dXJuIG9iamVjdDNkLl8zeERvbUV2ZW50O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qXHRcdFx0XHRcdFx0XHRcdFx0XHQqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKipcclxuICogR2V0dGVyL1NldHRlciBmb3IgY2FtZXJhXHJcbiovXHJcblRIUkVFeC5Eb21FdmVudHMucHJvdG90eXBlLmNhbWVyYVx0PSBmdW5jdGlvbih2YWx1ZSlcclxue1xyXG5cdGlmKCB2YWx1ZSApXHR0aGlzLl9jYW1lcmFcdD0gdmFsdWU7XHJcblx0cmV0dXJuIHRoaXMuX2NhbWVyYTtcclxufVxyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuYmluZFx0PSBmdW5jdGlvbihvYmplY3QzZCwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSlcclxue1xyXG5cdGNvbnNvbGUuYXNzZXJ0KCBUSFJFRXguRG9tRXZlbnRzLmV2ZW50TmFtZXMuaW5kZXhPZihldmVudE5hbWUpICE9PSAtMSwgXCJub3QgYXZhaWxhYmxlIGV2ZW50czpcIitldmVudE5hbWUgKTtcclxuXHJcblx0aWYoICF0aGlzLl9vYmplY3RDdHhJc0luaXQob2JqZWN0M2QpIClcdHRoaXMuX29iamVjdEN0eEluaXQob2JqZWN0M2QpO1xyXG5cdHZhciBvYmplY3RDdHhcdD0gdGhpcy5fb2JqZWN0Q3R4R2V0KG9iamVjdDNkKTtcdFxyXG5cdGlmKCAhb2JqZWN0Q3R4W2V2ZW50TmFtZSsnSGFuZGxlcnMnXSApXHRvYmplY3RDdHhbZXZlbnROYW1lKydIYW5kbGVycyddXHQ9IFtdO1xyXG5cclxuXHRvYmplY3RDdHhbZXZlbnROYW1lKydIYW5kbGVycyddLnB1c2goe1xyXG5cdFx0Y2FsbGJhY2tcdDogY2FsbGJhY2ssXHJcblx0XHR1c2VDYXB0dXJlXHQ6IHVzZUNhcHR1cmVcclxuXHR9KTtcclxuXHRcclxuXHQvLyBhZGQgdGhpcyBvYmplY3QgaW4gdGhpcy5fYm91bmRPYmpzXHJcblx0aWYoIHRoaXMuX2JvdW5kT2Jqc1tldmVudE5hbWVdID09PSB1bmRlZmluZWQgKXtcclxuXHRcdHRoaXMuX2JvdW5kT2Jqc1tldmVudE5hbWVdXHQ9IFtdO1x0XHJcblx0fVxyXG5cdHRoaXMuX2JvdW5kT2Jqc1tldmVudE5hbWVdLnB1c2gob2JqZWN0M2QpO1xyXG59XHJcblRIUkVFeC5Eb21FdmVudHMucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJcdD0gVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuYmluZFxyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUudW5iaW5kXHQ9IGZ1bmN0aW9uKG9iamVjdDNkLCBldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKVxyXG57XHJcblx0Y29uc29sZS5hc3NlcnQoIFRIUkVFeC5Eb21FdmVudHMuZXZlbnROYW1lcy5pbmRleE9mKGV2ZW50TmFtZSkgIT09IC0xLCBcIm5vdCBhdmFpbGFibGUgZXZlbnRzOlwiK2V2ZW50TmFtZSApO1xyXG5cclxuXHRpZiggIXRoaXMuX29iamVjdEN0eElzSW5pdChvYmplY3QzZCkgKVx0dGhpcy5fb2JqZWN0Q3R4SW5pdChvYmplY3QzZCk7XHJcblxyXG5cdHZhciBvYmplY3RDdHhcdD0gdGhpcy5fb2JqZWN0Q3R4R2V0KG9iamVjdDNkKTtcclxuXHRpZiggIW9iamVjdEN0eFtldmVudE5hbWUrJ0hhbmRsZXJzJ10gKVx0b2JqZWN0Q3R4W2V2ZW50TmFtZSsnSGFuZGxlcnMnXVx0PSBbXTtcclxuXHJcblx0dmFyIGhhbmRsZXJzXHQ9IG9iamVjdEN0eFtldmVudE5hbWUrJ0hhbmRsZXJzJ107XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSsrKXtcclxuXHRcdHZhciBoYW5kbGVyXHQ9IGhhbmRsZXJzW2ldO1xyXG5cdFx0aWYoIGNhbGxiYWNrICE9IGhhbmRsZXIuY2FsbGJhY2sgKVx0Y29udGludWU7XHJcblx0XHRpZiggdXNlQ2FwdHVyZSAhPSBoYW5kbGVyLnVzZUNhcHR1cmUgKVx0Y29udGludWU7XHJcblx0XHRoYW5kbGVycy5zcGxpY2UoaSwgMSlcclxuXHRcdGJyZWFrO1xyXG5cdH1cclxuXHQvLyBmcm9tIHRoaXMgb2JqZWN0IGZyb20gdGhpcy5fYm91bmRPYmpzXHJcblx0dmFyIGluZGV4XHQ9IHRoaXMuX2JvdW5kT2Jqc1tldmVudE5hbWVdLmluZGV4T2Yob2JqZWN0M2QpO1xyXG5cdGNvbnNvbGUuYXNzZXJ0KCBpbmRleCAhPT0gLTEgKTtcclxuXHR0aGlzLl9ib3VuZE9ianNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xyXG59XHJcblRIUkVFeC5Eb21FdmVudHMucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXJcdD0gVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUudW5iaW5kXHJcblxyXG5USFJFRXguRG9tRXZlbnRzLnByb3RvdHlwZS5fYm91bmRcdD0gZnVuY3Rpb24oZXZlbnROYW1lLCBvYmplY3QzZClcclxue1xyXG5cdHZhciBvYmplY3RDdHhcdD0gdGhpcy5fb2JqZWN0Q3R4R2V0KG9iamVjdDNkKTtcclxuXHRpZiggIW9iamVjdEN0eCApXHRyZXR1cm4gZmFsc2U7XHJcblx0cmV0dXJuIG9iamVjdEN0eFtldmVudE5hbWUrJ0hhbmRsZXJzJ10gPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypcdFx0b25Nb3ZlXHRcdFx0XHRcdFx0XHRcdCovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vICMgaGFuZGxlIG1vdXNlbW92ZSBraW5kIG9mIGV2ZW50c1xyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX29uTW92ZVx0PSBmdW5jdGlvbihldmVudE5hbWUsIG1vdXNlWCwgbW91c2VZLCBvcmlnRG9tRXZlbnQpXHJcbntcclxuLy9jb25zb2xlLmxvZygnZXZlbnROYW1lJywgZXZlbnROYW1lLCAnYm91bmRPYmpzJywgdGhpcy5fYm91bmRPYmpzW2V2ZW50TmFtZV0pXHJcblx0Ly8gZ2V0IG9iamVjdHMgYm91bmQgdG8gdGhpcyBldmVudFxyXG5cdHZhciBib3VuZE9ianNcdD0gdGhpcy5fYm91bmRPYmpzW2V2ZW50TmFtZV07XHJcblx0aWYoIGJvdW5kT2JqcyA9PT0gdW5kZWZpbmVkIHx8IGJvdW5kT2Jqcy5sZW5ndGggPT09IDAgKVx0cmV0dXJuO1xyXG5cdC8vIGNvbXB1dGUgdGhlIGludGVyc2VjdGlvblxyXG5cdHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuXHQvLyB1cGRhdGUgdGhlIHBpY2tpbmcgcmF5IHdpdGggdGhlIGNhbWVyYSBhbmQgbW91c2UgcG9zaXRpb25cclxuXHR2ZWN0b3Iuc2V0KCBtb3VzZVgsIG1vdXNlWSApO1xyXG5cdHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCB2ZWN0b3IsIHRoaXMuX2NhbWVyYSApO1x0XHJcblxyXG5cdHZhciBpbnRlcnNlY3RzID0gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIGJvdW5kT2JqcyApO1xyXG5cclxuXHR2YXIgb2xkU2VsZWN0ZWRcdD0gdGhpcy5fc2VsZWN0ZWQ7XHJcblx0XHJcblx0aWYoIGludGVyc2VjdHMubGVuZ3RoID4gMCApe1xyXG5cdFx0dmFyIG5vdGlmeU92ZXIsIG5vdGlmeU91dCwgbm90aWZ5TW92ZTtcclxuXHRcdHZhciBpbnRlcnNlY3RcdD0gaW50ZXJzZWN0c1sgMCBdO1xyXG5cdFx0dmFyIG5ld1NlbGVjdGVkXHQ9IGludGVyc2VjdC5vYmplY3Q7XHJcblx0XHR0aGlzLl9zZWxlY3RlZFx0PSBuZXdTZWxlY3RlZDtcclxuXHRcdC8vIGlmIG5ld1NlbGVjdGVkIGJvdW5kIG1vdXNlbW92ZSwgbm90aWZ5IGl0XHJcblx0XHRub3RpZnlNb3ZlXHQ9IHRoaXMuX2JvdW5kKCdtb3VzZW1vdmUnLCBuZXdTZWxlY3RlZCk7XHJcblxyXG5cdFx0aWYoIG9sZFNlbGVjdGVkICE9IG5ld1NlbGVjdGVkICl7XHJcblx0XHRcdC8vIGlmIG5ld1NlbGVjdGVkIGJvdW5kIG1vdXNlZW50ZXIsIG5vdGlmeSBpdFxyXG5cdFx0XHRub3RpZnlPdmVyXHQ9IHRoaXMuX2JvdW5kKCdtb3VzZW92ZXInLCBuZXdTZWxlY3RlZCk7XHJcblx0XHRcdC8vIGlmIHRoZXJlIGlzIGEgb2xkU2VsZWN0IGFuZCBvbGRTZWxlY3RlZCBib3VuZCBtb3VzZWxlYXZlLCBub3RpZnkgaXRcclxuXHRcdFx0bm90aWZ5T3V0XHQ9IG9sZFNlbGVjdGVkICYmIHRoaXMuX2JvdW5kKCdtb3VzZW91dCcsIG9sZFNlbGVjdGVkKTtcclxuXHRcdH1cclxuXHR9ZWxzZXtcclxuXHRcdC8vIGlmIHRoZXJlIGlzIGEgb2xkU2VsZWN0IGFuZCBvbGRTZWxlY3RlZCBib3VuZCBtb3VzZWxlYXZlLCBub3RpZnkgaXRcclxuXHRcdG5vdGlmeU91dFx0PSBvbGRTZWxlY3RlZCAmJiB0aGlzLl9ib3VuZCgnbW91c2VvdXQnLCBvbGRTZWxlY3RlZCk7XHJcblx0XHR0aGlzLl9zZWxlY3RlZFx0PSBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIG5vdGlmeSBtb3VzZU1vdmUgLSBkb25lIGF0IHRoZSBlbmQgd2l0aCBhIGNvcHkgb2YgdGhlIGxpc3QgdG8gYWxsb3cgY2FsbGJhY2sgdG8gcmVtb3ZlIGhhbmRsZXJzXHJcblx0bm90aWZ5TW92ZSAmJiB0aGlzLl9ub3RpZnkoJ21vdXNlbW92ZScsIG5ld1NlbGVjdGVkLCBvcmlnRG9tRXZlbnQsIGludGVyc2VjdCk7XHJcblx0Ly8gbm90aWZ5IG1vdXNlRW50ZXIgLSBkb25lIGF0IHRoZSBlbmQgd2l0aCBhIGNvcHkgb2YgdGhlIGxpc3QgdG8gYWxsb3cgY2FsbGJhY2sgdG8gcmVtb3ZlIGhhbmRsZXJzXHJcblx0bm90aWZ5T3ZlciAmJiB0aGlzLl9ub3RpZnkoJ21vdXNlb3ZlcicsIG5ld1NlbGVjdGVkLCBvcmlnRG9tRXZlbnQsIGludGVyc2VjdCk7XHJcblx0Ly8gbm90aWZ5IG1vdXNlTGVhdmUgLSBkb25lIGF0IHRoZSBlbmQgd2l0aCBhIGNvcHkgb2YgdGhlIGxpc3QgdG8gYWxsb3cgY2FsbGJhY2sgdG8gcmVtb3ZlIGhhbmRsZXJzXHJcblx0bm90aWZ5T3V0ICAmJiB0aGlzLl9ub3RpZnkoJ21vdXNlb3V0JyAsIG9sZFNlbGVjdGVkLCBvcmlnRG9tRXZlbnQsIGludGVyc2VjdCk7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qXHRcdG9uRXZlbnRcdFx0XHRcdFx0XHRcdFx0Ki9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gIyBoYW5kbGUgY2xpY2sga2luZCBvZiBldmVudHNcclxuXHJcblRIUkVFeC5Eb21FdmVudHMucHJvdG90eXBlLl9vbkV2ZW50XHQ9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbW91c2VYLCBtb3VzZVksIG9yaWdEb21FdmVudClcclxue1xyXG5cdC8vY29uc29sZS5sb2coJ2V2ZW50TmFtZScsIGV2ZW50TmFtZSwgJ2JvdW5kT2JqcycsIHRoaXMuX2JvdW5kT2Jqc1tldmVudE5hbWVdKVxyXG5cdC8vIGdldCBvYmplY3RzIGJvdW5kIHRvIHRoaXMgZXZlbnRcclxuXHR2YXIgYm91bmRPYmpzXHQ9IHRoaXMuX2JvdW5kT2Jqc1tldmVudE5hbWVdO1xyXG5cdGlmKCBib3VuZE9ianMgPT09IHVuZGVmaW5lZCB8fCBib3VuZE9ianMubGVuZ3RoID09PSAwIClcdHJldHVybjtcclxuXHQvLyBjb21wdXRlIHRoZSBpbnRlcnNlY3Rpb25cclxuXHR2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcblx0Ly8gdXBkYXRlIHRoZSBwaWNraW5nIHJheSB3aXRoIHRoZSBjYW1lcmEgYW5kIG1vdXNlIHBvc2l0aW9uXHJcblx0dmVjdG9yLnNldCggbW91c2VYLCBtb3VzZVkgKTtcclxuXHR0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSggdmVjdG9yLCB0aGlzLl9jYW1lcmEgKTtcdFxyXG5cclxuXHR2YXIgaW50ZXJzZWN0cyA9IHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBib3VuZE9ianMsIHRydWUpO1xyXG5cdC8vIGlmIHRoZXJlIGFyZSBubyBpbnRlcnNlY3Rpb25zLCByZXR1cm4gbm93XHJcblx0aWYoIGludGVyc2VjdHMubGVuZ3RoID09PSAwIClcdHJldHVybjtcclxuXHJcblx0Ly8gaW5pdCBzb21lIHZhcmlhYmxlc1xyXG5cdHZhciBpbnRlcnNlY3RcdD0gaW50ZXJzZWN0c1swXTtcclxuXHR2YXIgb2JqZWN0M2RcdD0gaW50ZXJzZWN0Lm9iamVjdDtcclxuXHR2YXIgb2JqZWN0Q3R4XHQ9IHRoaXMuX29iamVjdEN0eEdldChvYmplY3QzZCk7XHJcblx0dmFyIG9iamVjdFBhcmVudCA9IG9iamVjdDNkLnBhcmVudDtcclxuXHJcblx0d2hpbGUgKCB0eXBlb2Yob2JqZWN0Q3R4KSA9PSAndW5kZWZpbmVkJyAmJiBvYmplY3RQYXJlbnQgKVxyXG5cdHtcclxuXHQgICAgb2JqZWN0Q3R4ID0gdGhpcy5fb2JqZWN0Q3R4R2V0KG9iamVjdFBhcmVudCk7XHJcblx0ICAgIG9iamVjdFBhcmVudCA9IG9iamVjdFBhcmVudC5wYXJlbnQ7XHJcblx0fVxyXG5cdGlmKCAhb2JqZWN0Q3R4IClcdHJldHVybjtcclxuXHJcblx0Ly8gbm90aWZ5IGhhbmRsZXJzXHJcblx0dGhpcy5fbm90aWZ5KGV2ZW50TmFtZSwgb2JqZWN0M2QsIG9yaWdEb21FdmVudCwgaW50ZXJzZWN0KTtcclxufVxyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX25vdGlmeVx0PSBmdW5jdGlvbihldmVudE5hbWUsIG9iamVjdDNkLCBvcmlnRG9tRXZlbnQsIGludGVyc2VjdClcclxue1xyXG5cdHZhciBvYmplY3RDdHhcdD0gdGhpcy5fb2JqZWN0Q3R4R2V0KG9iamVjdDNkKTtcclxuXHR2YXIgaGFuZGxlcnNcdD0gb2JqZWN0Q3R4ID8gb2JqZWN0Q3R4W2V2ZW50TmFtZSsnSGFuZGxlcnMnXSA6IG51bGw7XHJcblx0XHJcblx0Ly8gcGFyYW1ldGVyIGNoZWNrXHJcblx0Y29uc29sZS5hc3NlcnQoYXJndW1lbnRzLmxlbmd0aCA9PT0gNClcclxuXHJcblx0Ly8gZG8gYnViYmxpbmdcclxuXHRpZiggIW9iamVjdEN0eCB8fCAhaGFuZGxlcnMgfHwgaGFuZGxlcnMubGVuZ3RoID09PSAwICl7XHJcblx0XHRvYmplY3QzZC5wYXJlbnQgJiYgdGhpcy5fbm90aWZ5KGV2ZW50TmFtZSwgb2JqZWN0M2QucGFyZW50LCBvcmlnRG9tRXZlbnQsIGludGVyc2VjdCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdFxyXG5cdC8vIG5vdGlmeSBhbGwgaGFuZGxlcnNcclxuXHR2YXIgaGFuZGxlcnNcdD0gb2JqZWN0Q3R4W2V2ZW50TmFtZSsnSGFuZGxlcnMnXTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpKyspe1xyXG5cdFx0dmFyIGhhbmRsZXJcdD0gaGFuZGxlcnNbaV07XHJcblx0XHR2YXIgdG9Qcm9wYWdhdGVcdD0gdHJ1ZTtcclxuXHRcdGhhbmRsZXIuY2FsbGJhY2soe1xyXG5cdFx0XHR0eXBlXHRcdDogZXZlbnROYW1lLFxyXG5cdFx0XHR0YXJnZXRcdFx0OiBvYmplY3QzZCxcclxuXHRcdFx0b3JpZ0RvbUV2ZW50XHQ6IG9yaWdEb21FdmVudCxcclxuXHRcdFx0aW50ZXJzZWN0XHQ6IGludGVyc2VjdCxcclxuXHRcdFx0c3RvcFByb3BhZ2F0aW9uXHQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dG9Qcm9wYWdhdGVcdD0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYoICF0b1Byb3BhZ2F0ZSApXHRjb250aW51ZTtcclxuXHRcdC8vIGRvIGJ1YmJsaW5nXHJcblx0XHRpZiggaGFuZGxlci51c2VDYXB0dXJlID09PSBmYWxzZSApe1xyXG5cdFx0XHRvYmplY3QzZC5wYXJlbnQgJiYgdGhpcy5fbm90aWZ5KGV2ZW50TmFtZSwgb2JqZWN0M2QucGFyZW50LCBvcmlnRG9tRXZlbnQsIGludGVyc2VjdCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qXHRcdGhhbmRsZSBtb3VzZSBldmVudHNcdFx0XHRcdFx0XHQqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICMgaGFuZGxlIG1vdXNlIGV2ZW50c1xyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX29uTW91c2VEb3duXHQ9IGZ1bmN0aW9uKGV2ZW50KXsgcmV0dXJuIHRoaXMuX29uTW91c2VFdmVudCgnbW91c2Vkb3duJywgZXZlbnQpO1x0fVxyXG5USFJFRXguRG9tRXZlbnRzLnByb3RvdHlwZS5fb25Nb3VzZVVwXHQ9IGZ1bmN0aW9uKGV2ZW50KXsgcmV0dXJuIHRoaXMuX29uTW91c2VFdmVudCgnbW91c2V1cCdcdCwgZXZlbnQpO1x0fVxyXG5cclxuXHJcblRIUkVFeC5Eb21FdmVudHMucHJvdG90eXBlLl9vbk1vdXNlRXZlbnRcdD0gZnVuY3Rpb24oZXZlbnROYW1lLCBkb21FdmVudClcclxue1xyXG5cdHZhciBtb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VYWShkb21FdmVudCk7XHJcblx0dGhpcy5fb25FdmVudChldmVudE5hbWUsIG1vdXNlQ29vcmRzLngsIG1vdXNlQ29vcmRzLnksIGRvbUV2ZW50KTtcclxufVxyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX29uTW91c2VNb3ZlXHQ9IGZ1bmN0aW9uKGRvbUV2ZW50KVxyXG57XHJcblx0dmFyIG1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZVhZKGRvbUV2ZW50KTtcclxuXHR0aGlzLl9vbk1vdmUoJ21vdXNlbW92ZScsIG1vdXNlQ29vcmRzLngsIG1vdXNlQ29vcmRzLnksIGRvbUV2ZW50KTtcclxuXHR0aGlzLl9vbk1vdmUoJ21vdXNlb3ZlcicsIG1vdXNlQ29vcmRzLngsIG1vdXNlQ29vcmRzLnksIGRvbUV2ZW50KTtcclxuXHR0aGlzLl9vbk1vdmUoJ21vdXNlb3V0JyAsIG1vdXNlQ29vcmRzLngsIG1vdXNlQ29vcmRzLnksIGRvbUV2ZW50KTtcclxufVxyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX29uQ2xpY2tcdFx0PSBmdW5jdGlvbihldmVudClcclxue1xyXG5cdC8vIFRPRE8gaGFuZGxlIHRvdWNoID9cclxuXHR0aGlzLl9vbk1vdXNlRXZlbnQoJ2NsaWNrJ1x0LCBldmVudCk7XHJcbn1cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX29uRGJsQ2xpY2tcdFx0PSBmdW5jdGlvbihldmVudClcclxue1xyXG5cdC8vIFRPRE8gaGFuZGxlIHRvdWNoID9cclxuXHR0aGlzLl9vbk1vdXNlRXZlbnQoJ2RibGNsaWNrJ1x0LCBldmVudCk7XHJcbn1cclxuXHJcblRIUkVFeC5Eb21FdmVudHMucHJvdG90eXBlLl9vbkNvbnRleHRtZW51XHQ9IGZ1bmN0aW9uKGV2ZW50KVxyXG57XHJcblx0Ly9UT0RPIGRvbid0IGhhdmUgYSBjbHVlIGFib3V0IGhvdyB0aGlzIHNob3VsZCB3b3JrIHdpdGggdG91Y2guLlxyXG5cdHRoaXMuX29uTW91c2VFdmVudCgnY29udGV4dG1lbnUnXHQsIGV2ZW50KTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKlx0XHRoYW5kbGUgdG91Y2ggZXZlbnRzXHRcdFx0XHRcdFx0Ki9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAjIGhhbmRsZSB0b3VjaCBldmVudHNcclxuXHJcblxyXG5USFJFRXguRG9tRXZlbnRzLnByb3RvdHlwZS5fb25Ub3VjaFN0YXJ0XHQ9IGZ1bmN0aW9uKGV2ZW50KXsgcmV0dXJuIHRoaXMuX29uVG91Y2hFdmVudCgndG91Y2hzdGFydCcsIGV2ZW50KTtcdH1cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX29uVG91Y2hFbmRcdD0gZnVuY3Rpb24oZXZlbnQpeyByZXR1cm4gdGhpcy5fb25Ub3VjaEV2ZW50KCd0b3VjaGVuZCdcdCwgZXZlbnQpO1x0fVxyXG5cclxuVEhSRUV4LkRvbUV2ZW50cy5wcm90b3R5cGUuX29uVG91Y2hNb3ZlXHQ9IGZ1bmN0aW9uKGRvbUV2ZW50KVxyXG57XHJcblx0aWYoIGRvbUV2ZW50LnRvdWNoZXMubGVuZ3RoICE9IDEgKVx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0ZG9tRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0dmFyIG1vdXNlWFx0PSArKGRvbUV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAvIHdpbmRvdy5pbm5lcldpZHRoICkgKiAyIC0gMTtcclxuXHR2YXIgbW91c2VZXHQ9IC0oZG9tRXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDIgKyAxO1xyXG5cdHRoaXMuX29uTW92ZSgnbW91c2Vtb3ZlJywgbW91c2VYLCBtb3VzZVksIGRvbUV2ZW50KTtcclxuXHR0aGlzLl9vbk1vdmUoJ21vdXNlb3ZlcicsIG1vdXNlWCwgbW91c2VZLCBkb21FdmVudCk7XHJcblx0dGhpcy5fb25Nb3ZlKCdtb3VzZW91dCcgLCBtb3VzZVgsIG1vdXNlWSwgZG9tRXZlbnQpO1xyXG59XHJcblxyXG5USFJFRXguRG9tRXZlbnRzLnByb3RvdHlwZS5fb25Ub3VjaEV2ZW50XHQ9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZG9tRXZlbnQpXHJcbntcclxuXHRpZiggZG9tRXZlbnQudG91Y2hlcy5sZW5ndGggIT0gMSApXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuXHRkb21FdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHR2YXIgbW91c2VYXHQ9ICsoZG9tRXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC8gd2luZG93LmlubmVyV2lkdGggKSAqIDIgLSAxO1xyXG5cdHZhciBtb3VzZVlcdD0gLShkb21FdmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMiArIDE7XHJcblx0dGhpcy5fb25FdmVudChldmVudE5hbWUsIG1vdXNlWCwgbW91c2VZLCBkb21FdmVudCk7XHRcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUSFJFRXguRG9tRXZlbnRzOyIsImNvbnN0IE1vbGVjdWxlID0gcmVxdWlyZSgnLi9Nb2xlY3VsZScpO1xyXG5jb25zdCBPcmJpdENvbnRyb2xzID0gcmVxdWlyZSgnLi9PcmJpdENvbnRyb2xzJyk7XHJcbmNvbnN0IERvbUV2ZW50cyA9IHJlcXVpcmUoJy4vZG9tRXZlbnRzJyk7XHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IodywgaCkge1xyXG5cdFx0dGhpcy53ID0gdyAtIHcvMTAwKjI1O1xyXG5cdFx0dGhpcy5oID0gaDtcclxuXHJcblx0XHR0aGlzLm1vbGVjdWxlcyA9IFtdO1xyXG5cclxuXHRcdC8vIGluaXQgdGhyZWUuanNcclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcclxuXHRcdFx0YWxwaGE6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLncsIHRoaXMuaCk7XHJcblxyXG5cdFx0dGhpcy53cmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsJyk7XHJcblx0XHR0aGlzLndyYXAuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgdGhpcy53IC8gdGhpcy5oLCAwLjEsIDEwMDApO1xyXG5cdFx0dGhpcy5vcmJpdCA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQsIHRoaXMud3JhcCk7XHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5saWdodHMgPSBbXTtcclxuXHRcdHRoaXMubGlnaHRzWzBdID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDEsIDApO1xyXG5cdFx0dGhpcy5saWdodHNbMV0gPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSwgMCk7XHJcblx0XHR0aGlzLmxpZ2h0c1syXSA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAxLCAwKTtcclxuXHJcblx0XHR0aGlzLmxpZ2h0c1swXS5wb3NpdGlvbi5zZXQoMCwgMjAwLCAwKTtcclxuXHRcdHRoaXMubGlnaHRzWzFdLnBvc2l0aW9uLnNldCgxMDAsIDIwMCwgMTAwKTtcclxuXHRcdHRoaXMubGlnaHRzWzJdLnBvc2l0aW9uLnNldCgtMTAwLCAtMjAwLCAtMTAwKTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0c1swXSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0c1sxXSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0c1syXSk7XHJcblx0XHRcclxuXHRcdHRoaXMuZG9tRXZlbnRzID0gbmV3IERvbUV2ZW50cyh0aGlzLmNhbWVyYSwgdGhpcy53cmFwKTtcclxuXHR9XHJcblxyXG5cdHJlc2l6ZSh3LCBoKSB7XHJcblx0XHR0aGlzLncgPSB3O1xyXG5cdFx0dGhpcy5oID0gaDtcclxuXHJcblx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB0aGlzLncvdGhpcy5oO1xyXG5cdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMudywgdGhpcy5oKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkTW9sZWN1bGUoZGF0YSkge1xyXG5cdFx0bGV0IG1vbCA9IG5ldyBNb2xlY3VsZSh0aGlzLCB0aGlzLm1vbGVjdWxlcy5sZW5ndGgsIGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMubW9sZWN1bGVzLnB1c2gobW9sKTtcclxuXHR9XHJcblx0cmVtb3ZlTW9sZWN1bGUoaSkge1xyXG5cdFx0aWYodGhpcy5tb2xlY3VsZXNbaV0pIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5yZW1vdmUodGhpcy5tb2xlY3VsZXNbaV0uc3RhZ2UpO1xyXG5cdFx0XHR0aGlzLm1vbGVjdWxlcy5zcGxpY2UoaSwgMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdHRoaXMubG9vcCgpO1xyXG5cdH1cclxuXHJcblx0bG9vcCgpIHtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmxvb3AoKSk7XHJcblxyXG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KHRoaXMuc2NlbmUucG9zaXRpb24pO1xyXG5cdFx0dGhpcy5jYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2xlY3VsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5tb2xlY3VsZXNbaV0udXBkYXRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNb2RlbDsiLCJjb25zdCBwdWJjaGVtID0gcmVxdWlyZSgncHViY2hlbS1hY2Nlc3MnKS5kb21haW4oJ2NvbXBvdW5kJyk7XHJcblxyXG5jb25zdCBrZXkgPSByZXF1aXJlKCcuL2tleScpO1xyXG5yZXF1aXJlKCcuL3dpa2knKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnNlYXJjaCA9IChyZXEsIGNiKSA9PiB7XHJcblx0bGV0IHRyYW5zbGF0ZSA9ICdodHRwczovL3RyYW5zbGF0ZS55YW5kZXgubmV0L2FwaS92MS41L3RyLmpzb24vdHJhbnNsYXRlPycgK1xyXG5cdFx0J2tleT0nICsga2V5ICtcclxuXHRcdCcmdGV4dD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlcSkgK1xyXG5cdFx0JyZsYW5nPXJ1LWVuJ1xyXG5cclxuXHQkLmdldEpTT04odHJhbnNsYXRlLCAoZGF0YSkgPT4ge1xyXG5cdFx0JCgnI2luZm8tc3Vic3RhbmNlJykuc2hvdygpO1xyXG5cdFx0JCgnI2luZm8tYXRvbScpLmhpZGUoKTtcclxuXHRcdFxyXG5cdFx0bGV0IGltYWdlID0gJCgnI2luZm8tc3Vic3RhbmNlIC5pbWFnZScpLmVtcHR5KCk7XHJcblx0XHRsZXQgaGVhZGVyID0gJCgnI2luZm8tc3Vic3RhbmNlIC5oZWFkZXInKS5lbXB0eSgpO1xyXG5cdFx0bGV0IGRlc2NyaXB0aW9uID0gJCgnI2luZm8tc3Vic3RhbmNlIC5kZXNjcmlwdGlvbicpLmVtcHR5KCk7XHJcblx0XHRsZXQgbWV0YSA9ICQoJyNpbmZvLXN1YnN0YW5jZSAubWV0YScpLmVtcHR5KCk7XHJcblxyXG5cdFx0JCgnI2luZm8taWNvbicpLnNob3coKTtcclxuXHJcblx0XHRwdWJjaGVtXHJcblx0XHRcdC5zZXROYW1lKGRhdGEudGV4dFswXS5yZXBsYWNlKCd0aGUgJywgJycpKVxyXG5cdFx0XHQuZ2V0SVVQQUNOYW1lKClcclxuXHRcdFx0LmV4ZWN1dGUoKGRhdGEsIHN0YXR1cykgPT4ge1xyXG5cdFx0XHRcdGlmKHN0YXR1cyAhPT0gMSkge1xyXG5cdFx0XHRcdFx0Y2IuZXJyb3IgJiYgY2IuZXJyb3IoKTtcclxuXHRcdFx0XHRcdCQoJyNpbmZvLWljb24nKS5hdHRyKCdjbGFzcycsICdpY29uIHN0aWNreSBub3RlIG91dGxpbmUnKTtcclxuXHRcdFx0XHRcdGhlYWRlci50ZXh0KHJlcVswXS50b1VwcGVyQ2FzZSgpICsgcmVxLnNsaWNlKDEpKTtcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uLmVtcHR5KCkuaHRtbChgPHA+0J/QviDQt9Cw0L/RgNC+0YHRgyA8Yj5cIiR7cmVxfVwiPC9iPiDQvdC10YIg0LTQsNC90L3Ri9GFINC90LAg0JLQuNC60LjQv9C10LTQuNCwPC9wPmApO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHdpa2kgPSAkKCc8ZGl2PjwvZGl2PicpLndpa2libHVyYih7XHJcblx0XHRcdFx0XHR3aWtpVVJMOiBcImh0dHBzOi8vcnUud2lraXBlZGlhLm9yZy9cIixcclxuXHRcdFx0XHRcdHBhZ2U6IHJlcSxcclxuXHRcdFx0XHRcdHNlY3Rpb246IDAsXHJcblx0XHRcdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHQkKCdib2R5JykuYXBwZW5kKHdpa2kpO1xyXG5cdFx0XHRcdFx0XHRsZXQgdGFibGUgPSB3aWtpLmZpbmQoJy5pbmZvYm94IHRib2R5Jyk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZih0YWJsZVswXSkge1xyXG5cdFx0XHRcdFx0XHRcdCQoJyNpbmZvLWljb24nKS5hdHRyKCdjbGFzcycsICdsYWIgaWNvbiBsb2FkaW5nJyk7XHJcblx0XHRcdFx0XHRcdFx0JCgnI2luZm8taWNvbicpLmhpZGUoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLnRleHQocmVxWzBdLnRvVXBwZXJDYXNlKCkgKyByZXEuc2xpY2UoMSkpO1xyXG5cdFx0XHRcdFx0XHRcdGltYWdlLmFwcGVuZCh0YWJsZS5maW5kKCd0ciBpbWcnKVswXSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGxldCB3aWtpRGVzYyA9IHdpa2kuZmluZCgnLm5icy13aWtpYmx1cmIgPiBwJyk7XHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb24uZW1wdHkoKS5hcHBlbmQod2lraURlc2MpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQkKCcjaW5mby1zdWJzdGFuY2UnKS50cmFuc2l0aW9uKCdwdWxzZScpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdCQoJyNpbmZvLWljb24nKS5hdHRyKCdjbGFzcycsICdpY29uIHN0aWNreSBub3RlIG91dGxpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbi5lbXB0eSgpLmh0bWwoYDxwPtCf0L4g0LfQsNC/0YDQvtGB0YMgPGI+XCIke3JlcX1cIjwvYj4g0L3QtdGCINC00LDQvdC90YvRhSDQvdCwINCS0LjQutC40L/QtdC00LjQsDwvcD5gKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRsZXQgY2lkID0gZGF0YS5Qcm9wZXJ0eVRhYmxlLlByb3BlcnRpZXNbMF0uQ0lEO1xyXG5cdFx0XHRcdGxldCB1cmwzZCA9IGBodHRwczovL3B1YmNoZW0ubmNiaS5ubG0ubmloLmdvdi9yZXN0L3B1Zy9jb21wb3VuZC9jaWQvJHtjaWR9L3JlY29yZC9KU09OLz9yZWNvcmRfdHlwZT0zZCZyZXNwb25zZV90eXBlPWRpc3BsYXlgO1xyXG5cdFx0XHRcdGxldCB1cmwyZCA9IGBodHRwczovL3B1YmNoZW0ubmNiaS5ubG0ubmloLmdvdi9yZXN0L3B1Zy9jb21wb3VuZC9jaWQvJHtjaWR9L3JlY29yZC9KU09OLz9yZWNvcmRfdHlwZT0yZCZyZXNwb25zZV90eXBlPWRpc3BsYXlgO1xyXG5cdFx0XHRcdCQuZ2V0SlNPTih1cmwzZClcclxuXHRcdFx0XHRcdC5kb25lKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRcdGRhdGEudHlwZVN0cnVjdHVyZSA9ICczZCc7XHJcblx0XHRcdFx0XHRcdGNiLmRvbmUgJiYgY2IuZG9uZShkYXRhKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuZmFpbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdCQuZ2V0SlNPTih1cmwyZClcclxuXHRcdFx0XHRcdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS50eXBlU3RydWN0dXJlID0gJzJkJztcclxuXHRcdFx0XHRcdFx0XHRcdGNiLmRvbmUgJiYgY2IuZG9uZShkYXRhKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdC5mYWlsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNiLmVycm9yICYmIGNiLmVycm9yKCk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHR9LCAnSlNPTicsICdyYXcnKTtcclxuXHR9KTtcclxufSIsIm1vZHVsZS5leHBvcnRzPVwidHJuc2wuMS4xLjIwMTcwNDA2VDExMzgxNVouOTAyZjJmMDVhYTQ5MDc5Yi5mOTk5NDcwMTBmOGM2YjUxY2FkNmEwYzNlZjc5MGNlYjllZmJmOGEzXCIiLCIvKlxyXG4qIEZpbGU6IGpxdWVyeS53aWtpYmx1cmIuanNcclxuKiBWZXJzaW9uOiAxLjAuMFxyXG4qIERlc2NyaXB0aW9uOiBBIHNpbXBsZSBqUXVlcnkgcGx1Z2luIHRvIGdldCBzZWN0aW9ucyBvZiBXaWtpcGVkaWEgYW5kIG90aGVyIFdpa2lzXHJcbiogQXV0aG9yOiA5Yml0IFN0dWRpb3NcclxuKiBDb3B5cmlnaHQgMjAxMiwgOWJpdCBTdHVkaW9zXHJcbiogaHR0cDovL3d3dy45Yml0c3R1ZGlvcy5jb21cclxuKiBGcmVlIHRvIHVzZSBhbmQgYWJ1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiovXHJcblxyXG4kLmZuLndpa2libHVyYiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblxyXG5cdHZhciBkZWZhdWx0cyA9ICQuZXh0ZW5kKHtcclxuXHR3aWtpVVJMOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy9cIixcclxuXHRhcGlQYXRoOiAndycsXHJcblx0c2VjdGlvbjogMCxcclxuXHRwYWdlOiAnSmltaV9IZW5kcml4JyxcclxuXHRyZW1vdmVMaW5rczogZmFsc2UsXHQgICAgXHJcblx0dHlwZTogJ2FsbCcsXHJcblx0Y3VzdG9tU2VsZWN0b3I6ICcnLFxyXG5cdFx0ZmlsdGVyU2VsZWN0b3I6ICcnLCBcclxuXHRcdGNhbGxiYWNrOiBmdW5jdGlvbigpeyB9XHJcblx0fSwgb3B0aW9ucyk7XHJcblx0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuUHJpdmF0ZSBWYXJpYWJsZXNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8gICAgICAgICBcclxuXHJcbnZhciBvYmplY3QgPSAkKHRoaXMpO1xyXG52YXIgc2V0dGluZ3MgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblB1YmxpYyBNZXRob2RzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovICAgICAgICAgXHJcblx0XHJcblx0dmFyIG1ldGhvZHMgPSB7XHJcblx0XHRcclxuXHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdG1ldGhvZHMuYXBwZW5kSFRNTCgpO1xyXG5cdFx0bWV0aG9kcy5pbml0aWFsaXplSXRlbXMoKTtcclxuXHR9KTtcclxuXHR9LFxyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0VXRpbGl0aWVzXHJcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cdFx0XHRcclxuXHJcblx0YWRkVW5kZXJzY29yZXM6IGZ1bmN0aW9uKHBhZ2UpIHtcclxuXHRpZihwYWdlLnRyaW0oKS5pbmRleE9mKCcgJykgIT09IC0xKSB7XHJcblx0XHRcdFx0cGFnZS5yZXBsYWNlKCcgJywgJ18nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFnZTtcclxuXHR9LCAgICAgICAgICAgIFxyXG5cdFx0XHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdEFwcGVuZCBIVE1MXHJcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cdFx0XHRcclxuXHJcblx0YXBwZW5kSFRNTDogZnVuY3Rpb24oKSB7XHJcblx0Ly8gbm90aGlpbmcgdG8gYXBwZW5kXHJcblx0fSxcclxuXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdEluaXRpYWxpemVcclxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1x0XHRcdFxyXG5cclxuXHRpbml0aWFsaXplSXRlbXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHBhZ2UgPSBtZXRob2RzLmFkZFVuZGVyc2NvcmVzKHNldHRpbmdzLnBhZ2UpO1xyXG5cdFx0XHRcclxuXHQkLmFqYXgoe1xyXG5cdFx0dHlwZTogXCJHRVRcIixcclxuXHRcdHVybDogc2V0dGluZ3Mud2lraVVSTCArIHNldHRpbmdzLmFwaVBhdGggKyBcIi9hcGkucGhwP2FjdGlvbj1wYXJzZSZmb3JtYXQ9anNvbiZwcm9wPXRleHQmc2VjdGlvbj1cIitzZXR0aW5ncy5zZWN0aW9uK1wiJnBhZ2U9XCIrc2V0dGluZ3MucGFnZStcIiZjYWxsYmFjaz0/XCIsXHJcblx0XHRjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcblx0XHRhc3luYzogdHJ1ZSxcclxuXHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhciBtYXJrdXAgPSBkYXRhLnBhcnNlLnRleHRbXCIqXCJdO1xyXG5cdFx0XHRcdHZhciBibHVyYiA9ICQoJzxkaXYgY2xhc3M9XCJuYnMtd2lraWJsdXJiXCI+PC9kaXY+JykuaHRtbChtYXJrdXApO1xyXG5cclxuXHRcdFx0XHQvLyByZW1vdmUgbGlua3M/XHJcblxyXG5cdFx0XHRcdGlmKHNldHRpbmdzLnJlbW92ZUxpbmtzKSB7XHJcblx0XHRcdFx0Ymx1cmIuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7IFxyXG5cdFx0XHRcdFx0JCh0aGlzKS5yZXBsYWNlV2l0aCgkKHRoaXMpLmh0bWwoKSk7IFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRibHVyYi5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciBsaW5rID0gJCh0aGlzKTtcclxuXHRcdFx0XHRcdHZhciByZWxhdGl2ZVBhdGggPSBsaW5rLmF0dHIoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7IC8vIHJlbW92ZSBsZWFkaW5nIHNsYXNoXHJcblx0XHRcdFx0XHRsaW5rLmF0dHIoJ2hyZWYnLCBzZXR0aW5ncy53aWtpVVJMICsgcmVsYXRpdmVQYXRoKTsgXHJcblx0XHRcdFx0fSk7XHRcdFx0ICAgIFxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gcmVtb3ZlIGFueSByZWZlcmVuY2VzXHJcblx0XHRcdFx0Ymx1cmIuZmluZCgnc3VwJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbW92ZSBjaXRlIGVycm9yXHJcblx0XHRcdFx0Ymx1cmIuZmluZCgnLm13LWV4dC1jaXRlLWVycm9yJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdC8vIGZpbHRlciBlbGVtZW50c1xyXG5cdFx0XHRcdFx0XHRcdGlmKHNldHRpbmdzLmZpbHRlclNlbGVjdG9yKSB7IFxyXG5cdFx0XHRcdFx0XHRcdFx0Ymx1cmIuZmluZChzZXR0aW5ncy5maWx0ZXJTZWxlY3RvcikucmVtb3ZlKCk7IFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3dpdGNoKHNldHRpbmdzLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlICd0ZXh0JzpcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b2JqZWN0Lmh0bWwoJChibHVyYikuZmluZCgncCcpKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSAnYmx1cmInOlxyXG5cdFx0XHRcdFx0b2JqZWN0Lmh0bWwoJChibHVyYikuZmluZCgncDpmaXJzdCcpKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgJ2luZm9ib3gnOlxyXG5cdFx0XHRcdFx0b2JqZWN0Lmh0bWwoJChibHVyYikuZmluZCgnLmluZm9ib3gnKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgJ2N1c3RvbSc6XHJcblx0XHRcdFx0XHRvYmplY3QuaHRtbCgkKGJsdXJiKS5maW5kKHNldHRpbmdzLmN1c3RvbVNlbGVjdG9yKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0b2JqZWN0Lmh0bWwoYmx1cmIpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKGUpIHtcclxuXHRcdFx0XHRtZXRob2RzLnNob3dFcnJvcigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZXR0aW5ncy5jYWxsYmFjaygpO1xyXG5cdFx0XHJcblx0XHR9LFxyXG5cdFx0ZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuXHRcdFx0bWV0aG9kcy5zaG93RXJyb3IoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHR9LFxyXG5cdFxyXG5cdHNob3dFcnJvcjogZnVuY3Rpb24oKXtcclxuXHRcdG9iamVjdC5odG1sKCc8ZGl2IGNsYXNzPVwibmJzLXdpa2libHVyYi1lcnJvclwiPlRoZXJlIHdhcyBhbiBlcnJvciBsb2NhdGluZyB5b3VyIHdpa2kgZGF0YTwvZGl2PicpO1xyXG5cdH1cclxuXHJcblx0fTtcclxuXHRcclxuXHRpZiAobWV0aG9kc1tvcHRpb25zXSkgeyAvLyAkKFwiI2VsZW1lbnRcIikucGx1Z2luTmFtZSgnbWV0aG9kTmFtZScsICdhcmcxJywgJ2FyZzInKTtcclxuXHRcdHJldHVybiBtZXRob2RzW29wdGlvbnNdLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7IFx0Ly8gJChcIiNlbGVtZW50XCIpLnBsdWdpbk5hbWUoeyBvcHRpb246IDEsIG9wdGlvbjoyIH0pO1xyXG5cdFx0cmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzKTsgIFxyXG5cdH0gZWxzZSB7XHJcblx0XHQkLmVycm9yKCAnTWV0aG9kIFwiJyArICBtZXRob2QgKyAnXCIgZG9lcyBub3QgZXhpc3QgaW4gd2lraWJsdXJiIHBsdWdpbiEnKTtcclxuXHR9IFxyXG59OyIsImNvbnN0IE1vZGVsID0gcmVxdWlyZSgnLi9Nb2RlbCcpO1xyXG5jb25zdCBhcGkgPSByZXF1aXJlKCcuL2FwaScpO1xyXG5cclxudmFyIG1vZGVsID0gbmV3IE1vZGVsKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5tb2RlbC5zdGFydCgpO1xyXG4gXHJcbiQoJyNzZWFyY2gtZm9ybScpLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCByZXEgPSAkKCcjc2VhcmNoJykudmFsKCk7XHJcbiAgICAkKCcjbG9hZGVyJykuc2hvdygpO1xyXG5cclxuICAgIG1vZGVsLnJlbW92ZU1vbGVjdWxlKDApO1xyXG4gICAgJCgnI2Vycm9yJykuaGlkZSgpO1xyXG5cclxuICAgIGFwaS5zZWFyY2gocmVxLCB7XHJcbiAgICBcdGRvbmU6IChkYXRhKSA9PiB7XHJcblx0ICAgIFx0JCgnI2xvYWRlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGVsJykuY3NzKCdvcGFjaXR5JywgMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCgnI21vZGVsJykuYW5pbWF0ZSh7b3BhY2l0eTogMX0sIDEwMDApLCA1MDApO1xyXG4gICAgICAgICAgICBtb2RlbC5hZGRNb2xlY3VsZShkYXRhKTtcclxuXHQgICAgfSxcclxuICAgIFx0ZXJyb3I6ICgpID0+IHtcclxuICAgIFx0XHQkKCcjbG9hZGVyJykuaGlkZSgpO1xyXG4gICAgXHRcdCQoJyNlcnJvcicpLnNob3coKS50cmFuc2l0aW9uKCdwdWxzZScpO1xyXG4gICAgXHRcdCQoJyNlcnJvci1pbmZvJykudGV4dChg0JLQtdGJ0LXRgdGC0LLQsCDQv9C+INC30LDQv9GA0L7RgdGDIFwiJHtyZXF9XCIg0L3QtdGCINCyINCx0LDQt9C1INC00LDQvdC90YvRhSBQdWJDaGVtYCk7XHJcbiAgICBcdH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoJyNlcnJvcicpLmhpZGUoKTtcclxuJCgnI2xvYWRlcicpLmhpZGUoKTtcclxuJCgnI3NlYXJjaCcpLnZhbCgn0JvQodCUJyk7XHJcbiQoJyNzZWFyY2gtZm9ybScpLnN1Ym1pdCgpO1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG5cdG1vZGVsLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxufVxyXG4iXX0=
