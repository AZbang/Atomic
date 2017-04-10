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

		this.x = x*20;
		this.y = y*20;
		this.z = z*20;
		
		this.nodes = [];

		this.data = atoms[id-1];

		this.color = +(''+this.data.color).toLowerCase();
		this.shadow = +(''+this.data.shadow).toLowerCase();
		this.radius = +this.data.covalentRadius ? +this.data.covalentRadius*10 : 20;
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

		console.log(this._data);

		this.label;
		this.synonymLabel;
		this.formula;
		this.weight;

		this.stage = new THREE.Group();
		this.model.scene.add(this.stage);

		this.atoms = [];
		this.links = [];

		this._initAtoms();
		this._bindNodes();

		this.model.camera.position.z = Math.min(this.atoms.length*20, 200);

		this._bindEvents();
	}

	_bindEvents() {
		this.model.wrap.onclick = (e) => {
			e.preventDefault();
			this.model.mouse.x = (e.clientX / window.innerWidth)*2-1;
			this.model.mouse.y = -(e.clientY / window.innerHeight)*2+1;

			this.model.raycaster.setFromCamera(this.model.mouse, this.model.camera);
			let intersects = this.model.raycaster.intersectObjects(this.model.scene.children);

			if (intersects.length > 0 ) {
				if (this.intesected != intersects[0].object) {
					if(this.intesected) {
						this.intesected.material.emissive.setHex(this.intesected.currentHex);
					}

					this.intesected = intersects[ 0 ].object;
					this.intesected.currentHex = this.intesected.material.emissive.getHex();
					this.intesected.material.emissive.setHex( 0xff0000 );
				}
			} else {
				if(this.intesected) { 
					this.intesected.material.emissive.setHex(this.intesected.currentHex);
					console.log(this.intesected);
				}
				this.intesected = null;
			}
		};
	}


	_initAtoms() {
		let pos = this._data.coords[0].conformers[0];
		
		for(let i = 0; i < this._data.atoms.element.length; i++) {
			this.atoms.push(
				new Atom(this, this._data.atoms.element[i], pos.x[i], pos.y[i], pos.z && pos.z[i])
			);
		}
	}
	_bindNodes() {
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
        "label": "ВодородHydrogen",
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
        "label": "ГелийHelium",
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
        "label": "ЛитийLithium",
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
        "label": "БериллийBeryllium",
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
        "label": "БорBoron",
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
        "label": "УглеродCarbon",
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
        "label": "АзотNitrogen",
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
        "label": "КислородOxygen",
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
        "label": "ФторFluorine",
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
        "label": "НеонNeon",
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
        "label": "НатрийSodium",
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
        "label": "МагнийMagnesium",
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
        "label": "АлюминийAluminium",
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
        "label": "КремнийSilicon",
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
        "label": "ФосфорPhosphorus",
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
        "label": "СераSulfur",
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
        "label": "ХлорChlorine",
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
        "label": "АргонArgon",
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
        "label": "КалийPotassium",
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
        "label": "КальцийCalcium",
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
        "label": "CкандийScandium",
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
        "label": "ТитанTitanium",
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
        "label": "ВанадийVanadium",
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
        "label": "ХромChromium",
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
        "label": "МарганецManganese",
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
        "label": "ЖелезоIron",
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
        "label": "КобальтCobalt",
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
        "label": "НикельNickel",
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
        "label": "МедьCopper",
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
        "label": "ЦинкZinc",
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
        "label": "ГаллийGallium",
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
        "label": "ГерманийGermanium",
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
        "label": "МышьякArsenic",
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
        "label": "СеленSelenium",
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
        "label": "БромBromine",
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
        "label": "КриптонKrypton",
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
        "label": "РубидийRubidium",
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
        "label": "СтронцийStrontium",
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
        "label": "ИттрийYttrium",
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
        "label": "ЦирконийZirconium",
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
        "label": "НиобийNiobium",
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
        "label": "МолибденMolybdenum",
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
        "label": "ТехнецийTechnetium",
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
        "label": "РутенийRuthenium",
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
        "label": "РодийRhodium",
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
        "label": "ПалладийPalladium",
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
        "label": "СереброSilver",
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
        "label": "КадмийCadmium",
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
        "label": "ИндийIndium",
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
        "label": "ОловоTin",
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
        "label": "СурьмаAntimony",
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
        "label": "ТеллурTellurium",
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
        "label": "ИодIodine",
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
        "label": "КсенонXenon",
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
        "label": "ЦезийCaesium",
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
        "label": "БарийBarium",
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
        "label": "ЛантанLanthanum",
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
        "label": "ЦерийCerium",
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
        "label": "ПразеодимPraseodymium",
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
        "label": "НеодимNeodymium",
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
        "label": "ПрометийPromethium",
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
        "label": "СамарийSamarium",
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
        "label": "ЕвропийEuropium",
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
        "label": "ГадолинийGadolinium",
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
        "label": "ТербийTerbium",
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
        "label": "ДиспрозийDysprosium",
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
        "label": "ГольмийHolmium",
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
        "label": "ЭрбийErbium",
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
        "label": "ТулийThulium",
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
        "label": "ИттербийYtterbium",
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
        "label": "ЛютецийLutetium",
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
        "label": "ГафнийHafnium",
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
        "label": "ТанталTantalum",
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
        "label": "ВольфрамTungsten",
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
        "label": "РенийRhenium",
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
        "label": "ОсмийOsmium",
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
        "label": "ИридийIridium",
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
        "label": "ПлатинаPlatinum",
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
        "label": "ЗолотоGold",
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
        "label": "РтутьMercury",
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
        "label": "ТаллийThallium",
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
        "label": "СвинецLead",
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
        "label": "ВисмутBismuth",
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
        "label": "ПолонийPolonium",
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
        "label": "АстатAstatine",
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
        "label": "РадонRadon",
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
        "label": "ФранцийFrancium",
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
        "label": "РадийRadium",
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
        "label": "АктинийActinium",
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
        "label": "ТорийThorium",
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
        "label": "ПроактинийProtactinium",
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
        "label": "УранUranium",
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
        "label": "НептунийNeptunium",
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
        "label": "ПлутонийPlutonium",
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
        "label": "АмерицийAmericium",
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
        "label": "КюрийCurium",
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
        "label": "БерклийBerkelium",
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
        "label": "КалифорнийCalifornium",
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
        "label": "ЭйнштейнийEinsteinium",
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
        "label": "ФермийFermium",
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
        "label": "МенделевийMendelevium",
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
        "label": "НобелийNobelium",
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
        "label": "ЛоуренсийLawrencium",
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
const Molecule = require('./Molecule');
const OrbitControls = require('./OrbitControls');

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
		this.raycaster = new THREE.Raycaster();
		this.orbit = new THREE.OrbitControls(this.camera, this.renderer.domElement, this.wrap);
		this.scene = new THREE.Scene();
		this.mouse = new THREE.Vector2();

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
},{"./Molecule":7,"./OrbitControls":8}],11:[function(require,module,exports){
const pubchem = require('pubchem-access').domain('compound');

const key = require('./key');
require('./wiki');

module.exports.search = (req, cb) => {
	let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
		'key=' + key +
		'&text=' + encodeURIComponent(req) +
		'&lang=ru-en'

	$.getJSON(translate, (data) => {
		let image = $('#info .image').empty();
		let header = $('#info .header').empty();
		let description = $('#info .description').empty();
		let meta = $('#info .meta').empty();

		$('#info-icon').show();

		pubchem
			.setName(data.text[0])
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

							$('#info').transition('pulse');
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
						cb.done && cb.done(data);
					})
					.fail(() => {
						cb.error && cb.error();
					})
			}, 'JSON', 'raw');
	});
}
},{"./key":12,"./wiki":13,"pubchem-access":2}],12:[function(require,module,exports){
module.exports="trnsl.1.1.20170406T113815Z.902f2f05aa49079b.f99947010f8c6b51cad6a0c3ef790ceb9efbf8a3"
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
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

},{"./Model":10,"./api":11}]},{},[14])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6YmFuZy9BdG9taWMvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2F6YmFuZy9BdG9taWMvbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwiL2hvbWUvYXpiYW5nL0F0b21pYy9ub2RlX21vZHVsZXMvcHViY2hlbS1hY2Nlc3MvbGliL3B1YmNoZW0tYWNjZXNzLmpzIiwiL2hvbWUvYXpiYW5nL0F0b21pYy9ub2RlX21vZHVsZXMvcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qcyIsIi9ob21lL2F6YmFuZy9BdG9taWMvbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIi9ob21lL2F6YmFuZy9BdG9taWMvc3JjL2pzL01vZGVsL0F0b20uanMiLCIvaG9tZS9hemJhbmcvQXRvbWljL3NyYy9qcy9Nb2RlbC9MaW5rLmpzIiwiL2hvbWUvYXpiYW5nL0F0b21pYy9zcmMvanMvTW9kZWwvTW9sZWN1bGUuanMiLCIvaG9tZS9hemJhbmcvQXRvbWljL3NyYy9qcy9Nb2RlbC9PcmJpdENvbnRyb2xzLmpzIiwiL2hvbWUvYXpiYW5nL0F0b21pYy9zcmMvanMvTW9kZWwvYXRvbXMuanNvbiIsIi9ob21lL2F6YmFuZy9BdG9taWMvc3JjL2pzL01vZGVsL2luZGV4LmpzIiwiL2hvbWUvYXpiYW5nL0F0b21pYy9zcmMvanMvYXBpL2luZGV4LmpzIiwiL2hvbWUvYXpiYW5nL0F0b21pYy9zcmMvanMvYXBpL2tleS5qc29uIiwiL2hvbWUvYXpiYW5nL0F0b21pYy9zcmMvanMvYXBpL3dpa2kuanMiLCIvaG9tZS9hemJhbmcvQXRvbWljL3NyYy9qcy9mYWtlX2M0YWE0ZDI2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcm9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMva0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuIiwiKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtcInN1cGVyYWdlbnRcIl0sIGZ1bmN0aW9uKGEwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeShhMCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXBlcmFnZW50XCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KHJlcXVlc3QpO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKHJlcXVlc3QpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG4gICAgLypcbiAgICAgKiBBIG1vZHVsZSB0byBjb21tdW5pY2F0ZSB3aXRoIFB1YkNoZW0uXG4gICAgICogRmFjaWxpdGF0ZXMgdGhlIHVzZSBvZiBQdWJDaGVtIEFQSSBmb3IgSlMgZW52aXJvbm1lbnRzLlxuICAgICAqIFN1aXRhYmxlIGZvciBmcm9udC1lbmQgYW5kIE5vZGUgZGV2ZWxvcG1lbnQuXG4gICAgICogQG1vZHVsZSBwdWJjaGVtLWFwaVxuICAgICAqL1xuICAgIFxuICAgIC8vIEJhc2Ugb2YgdGhlIFB1YmNoZW0gQVBJXG4gICAgdmFyIGJhc2VVcmwgPSBcImh0dHBzOi8vcHViY2hlbS5uY2JpLm5sbS5uaWguZ292L3Jlc3QvcHVnXCI7XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBGaW5kIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gcGFyYW0gYXNzb2NpYXRlZCB3aXRoIHBhc3NlZCBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9uR2V0XSAtIEFkZGl0aW9uYWwgb3B0aW9uIGFzc29jaWF0ZWQgd2l0aCBDbXBkT3BzIG9iai5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGaW5kIChwcm9wLCBvcHRpb25HZXQpIHtcbiAgICAgICAgdGhpcy5wcm9wID0gcHJvcDtcbiAgICAgICAgdGhpcy5vcHRpb25HZXQgPSBvcHRpb25HZXQ7XHRcdCBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhlIGZpbmFsIGNhbGxiYWNrIHBhc3NlZCBieSB1c2VyXG4gICAgICogQGNhbGxiYWNrIGZpbmFsQ2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGRhdGEgLSBwYXJzZWQgcmVzcG9uc2Ugb2J0YWluZWQgZnJvbSBQdWJDaGVtXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtzdGF0dXNdIC0gc3RhdHVzIG9mIHRoZSByZXNwb25zZVxuICAgICAqL1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgb2JqZWN0IHdpdGggdGhlIGZpbmFsIFwiZmluZCgpXCIgZnVuY3Rpb24uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIGFsbW9zdCBjb21wbGV0ZSB1cmwgKGxhY2tzIG9ubHkgZGF0YSBmb3JtYXQpXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqIC0gb2JqZWN0IGNvbnRhaW5pbmcgXCJmaW5kKClcIiBmdW5jdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5maW5kIC0gZmluYWwgZnVuY3Rpb24gY2FsbGluZyBcImV4ZWNTZWFyY2goKVwiXG4gICAgICovXG4gICAgRmluZC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uICh1cmwpIHtcdFx0XG5cdFx0ZnVuY3Rpb24gZXhlY3V0ZSAoY2FsbGJhY2ssIGRhdGFGb3JtYXQsIG9wdGlvbkYpIHtcbiAgICAgICAgICAgIGV4ZWNTZWFyY2godXJsLCBjYWxsYmFjaywge1xuXHRcdFx0XHRwcm9wOiB0aGlzLnByb3AsXG5cdFx0XHRcdG9wdGlvbkY6IG9wdGlvbkYsXG5cdFx0XHRcdG9wdGlvbkdldDogdGhpcy5vcHRpb25HZXQsXG5cdFx0XHRcdGRGOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlY3V0ZTogZXhlY3V0ZS5iaW5kKHRoaXMpXHRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSByZXF1ZXN0IHRvIFB1YkNoZW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIGFsbW9zdCBjb21wbGV0ZSB1cmwgKGxhY2tzIG9ubHkgZGF0YSBmb3JtYXQpXG4gICAgICogQHBhcmFtIHtmaW5hbENhbGxiYWNrfSBjYWxsYmFjayAtIGhhbmRsZXMgdGhlIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIG9iamVjdCB0aGF0IGhvbGRzIGFkZGl0aW9uYWwgaW5mbyAocHJvcGVydHksIGFkZGl0aW9uYWwgb3B0aW9ucywgcmVxdWVzdGVkIGRhdGEgZm9ybWF0KVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoucHJvcCAtIHBhcmFtIGFzc29jaWF0ZWQgd2l0aCBwYXNzZWQgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5vcHRpb25GXSAtIG9wdGlvbiBhc3NvY2lhdGVkIHdpdGggXCJmaW5kKClcIiBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb2JqLm9wdGlvbkdldF0gLSBvcHRpb24gYXNzb2NpYXRlZCB3aXRoIFwiZ2V0XCIgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5kRj1KU09OXSAtIHJlcXVlc3RlZCBkYXRhIGZvcm1hdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGV4ZWNTZWFyY2ggKHVybCwgY2FsbGJhY2ssIG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9iai5kRiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgb2JqLmRGID0gXCJKU09OXCI7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmVxdWVzdFxuICAgICAgICAgICAgLmdldCh1cmwuYXBwZW5kVG9QdWJjaGVtKG9iai5kRikpXG4gICAgICAgICAgICAuZW5kKGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVzcG9uc2UgaXMgc3RhdHVzIE9LLCB0aGVuIHJldHVybnMgc3RhdHVzID0gMS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5kRiAhPT0gXCJKU09OXCIgfHwgb2JqLm9wdGlvbkYgPT09IFwicmF3XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvZXMgbm90IHBhcnNlIHRoZSByZXNwb25zZSBib2R5IGlmIEpTT04gaXMgTk9UIHJlcXVlc3RlZCBvciBcInJhd1wiIG9wdGlvbiBpcyBwYXNzZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMuYm9keSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZXMgdGhlIHJlc3BvbnNlIGJvZHkgYWNjb3JkaW5nbHkgdG8gdGhlIHJlcXVlc3RlZCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socGFyc2VQcm9wZXJ0aWVzKHJlcy5ib2R5LCBvYmoucHJvcCwgb2JqLm9wdGlvbkdldCksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuc2VydmVyRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIGVycm9yIGlzIGVuY291bnRlcmVkLCB0aGVuIHJldHVybnMgc3RhdHVzID0gMi5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXCJTZXJ2aWNlIHVuYXZhaWxhYmxlLlwiLCAyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jbGllbnRFcnJvcikgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZXMgY2xpZW50IGVycm9yLiBSZXR1cm5zIHN0YXR1cyA+IDIsIGFjY29yZGluZyB0byB0aGUgZW5jb3VudGVyZWQgaGluZHJhbmNlLlxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyT2JqID0gbmV3IENsaWVudEVycm9yKHJlcy5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyT2JqLmdldEluZm8oKSwgZXJyT2JqLmdldFN0YXR1cygpKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIENsaWVudEVycm9yIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBib2R5IC0gcmVzcG9uc2UgYm9keSB0byBiZSBwYXJzZWQgYWNjb3JkaW5nbHkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ2xpZW50RXJyb3IgKGJvZHkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlc0Zyb21TZXJ2ZXIgPSBbXCJNaXNzaW5nIENJRCBsaXN0XCIsIFwiTm8gQ0lEIGZvdW5kXCIsIFwiRXhwZWN0ZWQgYSBwcm9wZXJ0eSBsaXN0XCJdO1xuICAgICAgICB0aGlzLnJlc3BvbnNlcyA9IFtcIndyb25nIENJRCBudW1iZXJcIiwgXCJjb21wb3VuZCBub3QgZm91bmRcIiwgXCJleHBlY3RlZCBhIHByb3BlcnR5IGxpc3RcIl07XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGJvZHkuRmF1bHQuTWVzc2FnZTtcbiAgICB9XG5cdFxuXHRDbGllbnRFcnJvci5wcm90b3R5cGUuZ2V0SW5mbyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZXNbdGhpcy5nZXRTdGF0dXMoKSAtIDNdO1xuXHR9O1xuXHRcblx0Q2xpZW50RXJyb3IucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlc0Zyb21TZXJ2ZXIuaW5kZXhPZih0aGlzLm1lc3NhZ2UpICsgMztcblx0fTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBhc3NlZCBwYXJhbWV0ZXIgaXMgYSB2YWxpZCBDQVMgbnVtYmVyLlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b1ZlcmlmeSAtIGlucHV0IHRvIHZlcmlmeVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNoZWNrRWxlbWVudCAodG9WZXJpZnkpIHtcblx0XHR2YXIgcmVnID0gbmV3IFJlZ0V4cCgvXihcXGR7MSw4fSktKFxcZHsxLDh9KS0oXFxkezF9KSQvKSwgbWF0Y2ggPSB0b1ZlcmlmeS5tYXRjaChyZWcpO1xuXHRcdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR2YXIgcGFydDEgPSBtYXRjaFsxXSwgcGFydDIgPSBtYXRjaFsyXSxcblx0XHRcdGNoZWNrRGlnaXQgPSBtYXRjaFszXS5jaGFyQXQoMCksXG5cdFx0XHRzdW0gPSAwLFxuXHRcdFx0dG90YWxMZW5ndGggPSBwYXJ0MS5sZW5ndGggKyBwYXJ0Mi5sZW5ndGg7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHBhcnQxLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRzdW0gKz0gcGFydDEuY2hhckF0KGkpICogdG90YWxMZW5ndGg7XG5cdFx0XHR0b3RhbExlbmd0aCAtPSAxO1xuXHRcdH1cblx0XHRmb3IodmFyIGogPSAwOyBqIDwgcGFydDIubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdHN1bSArPSBwYXJ0Mi5jaGFyQXQoaikgKiB0b3RhbExlbmd0aDtcblx0XHRcdHRvdGFsTGVuZ3RoIC09IDE7XG5cdFx0fVxuXHRcdHJldHVybiAoc3VtICUgMTApID09PSBwYXJzZUludChjaGVja0RpZ2l0LCAxMCk7XG5cdH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgc2xhc2ggYW5kIGEgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b0FwcGVuZCAtIGZyYWdtZW50IHRvIGFwcGVuZFRvUHViY2hlbSB0byB0aGUgc3RyaW5nIG9uIHdoaWNoIHRoaXMgbWV0aG9kIGlzIGNhbGxlZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IG5ld1VybFxuICAgICAqL1xuICAgIGlmICghU3RyaW5nLnByb3RvdHlwZS5hcHBlbmRUb1B1YmNoZW0pIHtcblx0XHRTdHJpbmcucHJvdG90eXBlLmFwcGVuZFRvUHViY2hlbSA9IGZ1bmN0aW9uICh0b0FwcGVuZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMgKyBcIi9cIiArIHRvQXBwZW5kO1xuXHRcdH07XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICogUGFyc2VzIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBib2R5IC0gcmVzcG9uc2UgYm9keSB0byBiZSBwYXJzZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIHBhcmFtIGFzc29jaWF0ZWQgd2l0aCBwYXNzZWQgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbkdldF0gLSBvcHRpb24gYXNzb2NpYXRlZCB3aXRoIFwiZ2V0XCIgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfE9iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwYXJzZVByb3BlcnRpZXMgKGJvZHksIHByb3AsIG9wdGlvbkdldCkge1x0XHRcbiAgICAgICAgaWYgKHByb3AgPT09IFwiU3lub255bVwiKSB7XG5cdFx0XHR2YXIgYWxsTmFtZXMgPSBib2R5LkluZm9ybWF0aW9uTGlzdC5JbmZvcm1hdGlvblswXVtwcm9wXTsgXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbkdldCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxOYW1lcztcblx0XHRcdH0gZWxzZSBpZiAob3B0aW9uR2V0ID09PSBcImNhc1wiKSB7XHRcdFx0XHRcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5hbWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGFsbE5hbWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tFbGVtZW50KGVsKSkgeyByZXR1cm4gZWw7IH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uR2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbkdldCA+IDAgP1xuXHRcdFx0XHRcdGFsbE5hbWVzLnNsaWNlKDAsIG9wdGlvbkdldCkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdH0pOlxuXHRcdFx0XHRcdFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJwcm9wZXJ0eUFycmF5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBib2R5LlByb3BlcnR5VGFibGUuUHJvcGVydGllc1swXTsgICBcbiAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBib2R5LlByb3BlcnR5VGFibGUuUHJvcGVydGllc1swXVtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIENtcGRTcGFjZSAoXCJDb21wb3VuZCBTcGFjZVwiKSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAY2xhc3MgQ21wZFNwYWNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIGJhc2UgUHViY2hlbSB1cmxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDbXBkU3BhY2UgKHVybCkge1xuICAgICAgICAvLyBQcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHJlcXVlc3RlZCBhY2NvcmRpbmcgdG8gUHViQ2hlbSBBUEkuXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW1wibmFtZVwiLCBcIm5hbWVcIiwgXCJzbWlsZXNcIiwgXCJjaWRcIiwgXCJpbmNoaVwiLCBcImluY2hpa2V5XCJdO1xuICAgICAgICAvLyBTbGlnaHRseSBjaGFuZ2VkIG5hbWVzIG9mIHRob3NlIHByb3BlcnRpZXMuXG4gICAgICAgIHZhciBhbGlhcyA9IFtcIk5hbWVcIiwgXCJDYXNcIiwgXCJTbWlsZXNcIiwgXCJDaWRcIiwgXCJJbmNoaVwiLCBcIkluY2hpS2V5XCJdO1xuICAgICAgICAvLyBHZW5lcmF0ZXMgYWxsIHNldHRlcnMuXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8PSBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHQoZnVuY3Rpb24gKGopIHtcdFx0XHRcdFxuXHRcdFx0XHR0aGlzW1wic2V0XCIgKyBhbGlhc1tqXV0gPSBmdW5jdGlvbiAodG9GaW5kKSB7XG5cdFx0XHRcdFx0dmFyIG5ld1VybCA9IHVybC5hcHBlbmRUb1B1YmNoZW0ocHJvcGVydGllc1tqXSkuYXBwZW5kVG9QdWJjaGVtKHRvRmluZCk7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDbXBkT3BzKG5ld1VybCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9LmNhbGwodGhpcywgaSkpO1xuXHRcdH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBDbXBkT3BzIChcIkNvbXBvdW5kIE9wZXJhdGlvbnNcIikgY29uc3RydWN0b3IuXG4gICAgICogQGNsYXNzIENtcGRPcHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gYmFzZSBQdWJjaGVtIHVybCB3aXRoIHRoZSBhbHJlYWR5IHBhc3NlZCBkYXRhIGFwcGVuZFRvUHViY2hlbWVkIHRvIGl0XG4gICAgICovXG4gICAgdmFyIENtcGRPcHMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIC8vIEFycmF5IG9mIHByb3BlcnRpZXMgYWNjb3JkaW5nIHRvIFB1YkNoZW0gQVBJLlxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtcIklVUEFDTmFtZVwiLCBcIk1vbGVjdWxhckZvcm11bGFcIiwgXCJNb2xlY3VsYXJXZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2Fub25pY2FsU01JTEVTXCIsIFwiSXNvbWVyaWNTTUlMRVNcIiwgXCJJbkNoSVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbkNoSUtleVwiLCBcIlhMb2dQXCIsIFwiRXhhY3RNYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vbm9pc290b3BpY01hc3NcIiwgXCJUUFNBXCIsIFwiQ29tcGxleGl0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGFyZ2VcIiwgXCJIQm9uZERvbm9yQ291bnRcIiwgXCJIQm9uZEFjY2VwdG9yQ291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUm90YXRhYmxlQm9uZENvdW50XCIsIFwiSGVhdnlBdG9tQ291bnRcIiwgXCJJc290b3BlQXRvbUNvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF0b21TdGVyZW9Db3VudFwiLCBcIkRlZmluZWRBdG9tU3RlcmVvQ291bnRcIiwgXCJVbmRlZmluZWRBdG9tU3RlcmVvQ291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQm9uZFN0ZXJlb0NvdW50XCIsIFwiRGVmaW5lZEJvbmRTdGVyZW9Db3VudFwiLCBcIlVuZGVmaW5lZEJvbmRTdGVyZW9Db3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb3ZhbGVudFVuaXRDb3VudFwiLCBcIlZvbHVtZTNEXCIsIFwiWFN0ZXJpY1F1YWRydXBvbGUzRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZU3RlcmljUXVhZHJ1cG9sZTNEXCIsIFwiWlN0ZXJpY1F1YWRydXBvbGUzRFwiLCBcIkZlYXR1cmVDb3VudDNEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZlYXR1cmVBY2NlcHRvckNvdW50M0RcIiwgXCJGZWF0dXJlRG9ub3JDb3VudDNEXCIsIFwiRmVhdHVyZUFuaW9uQ291bnQzRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGZWF0dXJlQ2F0aW9uQ291bnQzRFwiLCBcIkZlYXR1cmVSaW5nQ291bnQzRFwiLCBcIkZlYXR1cmVIeWRyb3Bob2JlQ291bnQzRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb25mb3JtZXJNb2RlbFJNU0QzRFwiLCBcIkVmZmVjdGl2ZVJvdG9yQ291bnQzRFwiLCBcIkNvbmZvcm1lckNvdW50M0RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmluZ2VycHJpbnQyRFwiXTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdlbmVyYXRlcyBhbGwgZ2V0dGVycy5cblx0XHRmb3IodmFyIGkgPSAwOyBpIDw9IHByb3BlcnRpZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdChmdW5jdGlvbiAoaikge1x0XHRcdFx0XG5cdFx0XHRcdHRoaXNbXCJnZXRcIiArIHByb3BlcnRpZXNbal1dID0gZnVuY3Rpb24gKHRvRmluZCkge1xuXHRcdFx0XHRcdHZhciBuZXdVcmwgPSB1cmwuYXBwZW5kVG9QdWJjaGVtKFwicHJvcGVydHlcIikuYXBwZW5kVG9QdWJjaGVtKHByb3BlcnRpZXNbal0pO1xuXHRcdFx0XHRcdHJldHVybiBuZXcgRmluZChwcm9wZXJ0aWVzW2pdKS5leGVjKG5ld1VybCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9LmNhbGwodGhpcywgaSkpO1xuXHRcdH1cblx0XHQvLyBHZXR0ZXIgZm9yIGFycmF5IG9mIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5nZXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHRvRmluZCkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRvRmluZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IGFycmF5IGlzIGFjY2VwdGVkLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1VybCA9IHVybC5hcHBlbmRUb1B1YmNoZW0oXCJwcm9wZXJ0eVwiKSArIFwiL1wiO1xuICAgICAgICAgICAgICAgIHRvRmluZC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmluZGV4T2YoZWxlbWVudCkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VXJsICs9IGVsZW1lbnQgKyBcIixcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmluZChcInByb3BlcnR5QXJyYXlcIikuZXhlYyhuZXdVcmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXHRcdC8vIEdldHRlciBmb3IgQ2FzIG5yXG4gICAgICAgIHRoaXMuZ2V0Q2FzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIG5ld1VybCA9IHVybC5hcHBlbmRUb1B1YmNoZW0oXCJzeW5vbnltc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmluZChcIlN5bm9ueW1cIiwgXCJjYXNcIikuZXhlYyhuZXdVcmwpO1xuICAgICAgICB9O1xuXHRcdC8qKlxuXHRcdCAqIEdldHRlciBmb3IgbmFtZXNcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gXCJ1bmRlZmluZWRcIiBmb3IgYWxsIG5hbWVzXG5cdFx0ICpcdFx0XHRcdFx0XHRcdD4gMCBmb3Igc3BlY2lmaWVkIG51bWJlciBvZiBuYW1lcyB0byBkaXNwbGF5IFxuXHRcdCAqL1xuICAgICAgICB0aGlzLmdldE5hbWVzID0gZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIG5ld1VybCA9IHVybC5hcHBlbmRUb1B1YmNoZW0oXCJzeW5vbnltc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmluZChcIlN5bm9ueW1cIiwgbnVtYmVyKS5leGVjKG5ld1VybCk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBcbiAgICAvKiogU2V0cyBkb21haW4uICovXG5cdHZhciBwdWJjaGVtID0ge1xuXHRcdGRvbWFpbjogZnVuY3Rpb24gKGRvbWFpbiwgbWV0aG9kKSB7XG5cdFx0XHR2YXIgbmV3VXJsID0gYmFzZVVybC5hcHBlbmRUb1B1YmNoZW0oZG9tYWluKTsgICAgICAgIFxuXHRcdFx0aWYgKGRvbWFpbiA9PT0gXCJjb21wb3VuZFwiKSB7ICBcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBtZXRob2QgPT09IHVuZGVmaW5lZCA/IG5ldyBDbXBkU3BhY2UobmV3VXJsKTogbmV3IENtcGRTcGFjZShuZXdVcmwsIFwicG9zdFwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZG9tYWluLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBwdWJjaGVtO1xufSk7IiwiXG4vKipcbiAqIFJlZHVjZSBgYXJyYCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFxuICpcbiAqIFRPRE86IGNvbWJhdGlibGUgZXJyb3IgaGFuZGxpbmc/XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGZuLCBpbml0aWFsKXsgIFxuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBjdXJyID0gYXJndW1lbnRzLmxlbmd0aCA9PSAzXG4gICAgPyBpbml0aWFsXG4gICAgOiBhcnJbaWR4KytdO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBjdXJyID0gZm4uY2FsbChudWxsLCBjdXJyLCBhcnJbaWR4XSwgKytpZHgsIGFycik7XG4gIH1cbiAgXG4gIHJldHVybiBjdXJyO1xufTsiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3Q7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gQnJvd3NlciB3aW5kb3dcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IC8vIFdlYiBXb3JrZXJcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgeyAvLyBPdGhlciBlbnZpcm9ubWVudHNcbiAgcm9vdCA9IHRoaXM7XG59XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgYWRkZWQgdG8gc3VwcG9ydCBJRS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHRyaW0gPSAnJy50cmltXG4gID8gZnVuY3Rpb24ocykgeyByZXR1cm4gcy50cmltKCk7IH1cbiAgOiBmdW5jdGlvbihzKSB7IHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcbiAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFydHM7XG4gIHZhciBwYWlyO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ2FwcGxpY2F0aW9uL3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybS1kYXRhJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxuIH07XG5cbiAvKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgbGluZXMucG9wKCk7IC8vIHRyYWlsaW5nIENSTEZcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHJlZHVjZShzdHIuc3BsaXQoLyAqOyAqLyksIGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLylcbiAgICAgICwga2V5ID0gcGFydHMuc2hpZnQoKVxuICAgICAgLCB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICAvLyByZXNwb25zZVRleHQgaXMgYWNjZXNzaWJsZSBvbmx5IGlmIHJlc3BvbnNlVHlwZSBpcyAnJyBvciAndGV4dCcgYW5kIG9uIG9sZGVyIGJyb3dzZXJzXG4gIHRoaXMudGV4dCA9ICgodGhpcy5yZXEubWV0aG9kICE9J0hFQUQnICYmICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0XG4gICAgIDogbnVsbDtcbiAgdGhpcy5zdGF0dXNUZXh0ID0gdGhpcy5yZXEueGhyLnN0YXR1c1RleHQ7XG4gIHRoaXMuc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMucGFyc2VCb2R5KHRoaXMudGV4dCA/IHRoaXMudGV4dCA6IHRoaXMueGhyLnJlc3BvbnNlKVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBGb3JjZSBnaXZlbiBwYXJzZXJcbiAqIFxuICogU2V0cyB0aGUgYm9keSBwYXJzZXIgbm8gbWF0dGVyIHR5cGUuXG4gKiBcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGZuKXtcbiAgdGhpcy5wYXJzZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnBhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHRoaXMucGFyc2VyIHx8IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCB8fCBzdHIgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgIHN0YXR1cyA9IDIwNDtcbiAgfVxuXG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307XG4gIHRoaXMuX2hlYWRlciA9IHt9O1xuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyKTtcbiAgICB9XG5cbiAgICBzZWxmLmVtaXQoJ3Jlc3BvbnNlJywgcmVzKTtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyLCByZXMpO1xuICAgIH1cblxuICAgIHZhciBuZXdfZXJyID0gbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZScpO1xuICAgIG5ld19lcnIub3JpZ2luYWwgPSBlcnI7XG4gICAgbmV3X2Vyci5yZXNwb25zZSA9IHJlcztcbiAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG5cbiAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fdGltZW91dCA9IDA7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuYWJvcnRlZCkgcmV0dXJuO1xuICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhoci5hYm9ydCgpO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3NcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcyl7XG4gIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHN0cik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyByb290LkZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2gobmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgLCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbXVsdGlwbGUgZGF0YSBcIndyaXRlc1wiXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5zZW5kKHsgc2VhcmNoOiAncXVlcnknIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgcmFuZ2U6ICcxLi41JyB9KVxuICogICAgICAgICAuc2VuZCh7IG9yZGVyOiAnZGVzYycgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAgKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgb2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqIHx8IGlzSG9zdChkYXRhKSkgcmV0dXJuIHRoaXM7XG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGZuKGVyciwgcmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ09yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKTtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgdmFyIHN0YXR1cztcbiAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XG5cbiAgICBpZiAoMCA9PSBzdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLnRpbWVkb3V0KSByZXR1cm4gc2VsZi50aW1lb3V0RXJyb3IoKTtcbiAgICAgIGlmIChzZWxmLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTtcblxuICAvLyBwcm9ncmVzc1xuICB2YXIgaGFuZGxlUHJvZ3Jlc3MgPSBmdW5jdGlvbihlKXtcbiAgICBpZiAoZS50b3RhbCA+IDApIHtcbiAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICB9O1xuICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKHhoci51cGxvYWQgJiYgdGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7XG4gICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MzcyNDUveG1saHR0cHJlcXVlc3QtdXBsb2FkLXRocm93cy1pbnZhbGlkLWFyZ3VtZW50LXdoZW4tdXNlZC1mcm9tLXdlYi13b3JrZXItY29udGV4dFxuICB9XG5cbiAgLy8gdGltZW91dFxuICBpZiAodGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYudGltZWRvdXQgPSB0cnVlO1xuICAgICAgc2VsZi5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhaXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIHZhciBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVtjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF0gOiAnJ107XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG4gIHhoci5zZW5kKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmF1eCBwcm9taXNlIHN1cHBvcnRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcbiAgcmV0dXJuIHRoaXMuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgZXJyID8gcmVqZWN0KGVycikgOiBmdWxmaWxsKHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBJc3N1ZSBhIHJlcXVlc3Q6XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVxdWVzdCgnR0VUJywgJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycsIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB1cmwgb3IgY2FsbGJhY2tcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmRlbCA9IGZ1bmN0aW9uKHVybCwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3Q7XG4iLCJjb25zdCBhdG9tcyA9IHJlcXVpcmUoJy4vYXRvbXMuanNvbicpO1xuXG5jbGFzcyBBdG9tIHtcblx0Y29uc3RydWN0b3IobW9sZWN1bGUsIGlkLCB4LCB5LCB6KSB7XG5cdFx0dGhpcy5tb2xlY3VsZSA9IG1vbGVjdWxlO1xuXHRcdHRoaXMubW9kZWwgPSBtb2xlY3VsZS5tb2RlbDtcblxuXHRcdHRoaXMueCA9IHgqMjA7XG5cdFx0dGhpcy55ID0geSoyMDtcblx0XHR0aGlzLnogPSB6KjIwO1xuXHRcdFxuXHRcdHRoaXMubm9kZXMgPSBbXTtcblxuXHRcdHRoaXMuZGF0YSA9IGF0b21zW2lkLTFdO1xuXG5cdFx0dGhpcy5jb2xvciA9ICsoJycrdGhpcy5kYXRhLmNvbG9yKS50b0xvd2VyQ2FzZSgpO1xuXHRcdHRoaXMuc2hhZG93ID0gKygnJyt0aGlzLmRhdGEuc2hhZG93KS50b0xvd2VyQ2FzZSgpO1xuXHRcdHRoaXMucmFkaXVzID0gK3RoaXMuZGF0YS5jb3ZhbGVudFJhZGl1cyA/ICt0aGlzLmRhdGEuY292YWxlbnRSYWRpdXMqMTAgOiAyMDtcblx0XHR0aGlzLmRldGFpbCA9IDI7XG5cblx0XHQvLyBjcmVhdGUgdGhyZWUuanMgb2JqZWN0c1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSh0aGlzLnJhZGl1cywgdGhpcy5kZXRhaWwpO1xuXHRcdHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuXHRcdHRoaXMubWVzaC5hZGQobmV3IFRIUkVFLk1lc2goXG5cdFx0XHR0aGlzLmdlb21ldHJ5LFxuXHRcdFx0bmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcblx0XHRcdFx0Y29sb3I6IHRoaXMuY29sb3IsXG5cdFx0XHRcdGVtaXNzaXZlOiB0aGlzLnNoYWRvdyxcblx0XHRcdFx0c2lkZTogVEhSRUUuRG91YmxlU2lkZSxcblx0XHRcdFx0c2hhZGluZzogVEhSRUUuRmxhdFNoYWRpbmdcblx0XHRcdH0pXG5cdFx0KSk7XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24uc2V0KHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xuXG5cdFx0dGhpcy5tb2xlY3VsZS5zdGFnZS5hZGQodGhpcy5tZXNoKTtcblx0fVxuXHR1cGRhdGUoKSB7XG5cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEF0b207IiwiXG5jbGFzcyBMaW5rIHtcblx0Y29uc3RydWN0b3IobW9sZWN1bGEsIGF0b20xLCBhdG9tMiwgdHlwZSkge1xuXHRcdHRoaXMubW9sZWN1bGEgPSBtb2xlY3VsYTtcblx0XHR0aGlzLmF0b20xID0gYXRvbTE7XG5cdFx0dGhpcy5hdG9tMiA9IGF0b20yO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cblxuXHRcdC8vIGNyZWF0ZSB0aHJlZS5qcyBvYmplY3RzXG5cblx0XHR0aGlzLnR1YmVzID0gbmV3IFRIUkVFLkdyb3VwKCk7XG5cdFx0dGhpcy5tb2xlY3VsYS5zdGFnZS5hZGQodGhpcy50dWJlcyk7XG5cblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdHlwZTsgaSsrKSB7XG5cblx0XHRcdGxldCBwMSA9IG5ldyBUSFJFRS5WZWN0b3IzKHRoaXMuYXRvbTEueCwgdGhpcy5hdG9tMS55LCB0aGlzLmF0b20xLnoraSooNi90eXBlKS0oMi90eXBlKSoodHlwZS0xKSk7XG5cdFx0XHRsZXQgcDIgPSBuZXcgVEhSRUUuVmVjdG9yMyh0aGlzLmF0b20yLngsIHRoaXMuYXRvbTIueSwgdGhpcy5hdG9tMi56K2kqKDYvdHlwZSktKDIvdHlwZSkqKHR5cGUtMSkpO1xuXG5cdFx0XHRsZXQgbWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuXHRcdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlR1YmVHZW9tZXRyeShcblx0XHRcdFx0bmV3IFRIUkVFLkNhdG11bGxSb21DdXJ2ZTMoW3AxLCBwMl0pLFxuXHRcdFx0XHQxMiwgMi90eXBlXG5cdFx0XHQpO1xuXG5cdFx0XHRtZXNoLmFkZChuZXcgVEhSRUUuTWVzaChcblx0XHRcdFx0Z2VvbWV0cnksXG5cdFx0XHRcdG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG5cdFx0XHRcdFx0Y29sb3I6IDB4QjBCMEIwLFxuXHRcdFx0XHRcdGVtaXNzaXZlOiAweDdCN0I3Qixcblx0XHRcdFx0XHRzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuXHRcdFx0XHRcdHNoYWRpbmc6IFRIUkVFLkZsYXRTaGFkaW5nXG5cdFx0XHRcdH0pXG5cdFx0XHQpKTtcblx0XHRcdHRoaXMudHViZXMuYWRkKG1lc2gpO1xuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7IiwiY29uc3QgQXRvbSA9IHJlcXVpcmUoJy4vQXRvbScpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoJy4vTGluaycpO1xuXG5jbGFzcyBNb2xlY3VsZSB7XG5cdGNvbnN0cnVjdG9yKG1vZGVsLCBpbmRleCwgZGF0YSkge1xuXHRcdHRoaXMubW9kZWwgPSBtb2RlbDtcblx0XHR0aGlzLmluZGV4ID0gMDtcblx0XHR0aGlzLl9kYXRhID0gZGF0YS5QQ19Db21wb3VuZHNbMF07XG5cblx0XHRjb25zb2xlLmxvZyh0aGlzLl9kYXRhKTtcblxuXHRcdHRoaXMubGFiZWw7XG5cdFx0dGhpcy5zeW5vbnltTGFiZWw7XG5cdFx0dGhpcy5mb3JtdWxhO1xuXHRcdHRoaXMud2VpZ2h0O1xuXG5cdFx0dGhpcy5zdGFnZSA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXHRcdHRoaXMubW9kZWwuc2NlbmUuYWRkKHRoaXMuc3RhZ2UpO1xuXG5cdFx0dGhpcy5hdG9tcyA9IFtdO1xuXHRcdHRoaXMubGlua3MgPSBbXTtcblxuXHRcdHRoaXMuX2luaXRBdG9tcygpO1xuXHRcdHRoaXMuX2JpbmROb2RlcygpO1xuXG5cdFx0dGhpcy5tb2RlbC5jYW1lcmEucG9zaXRpb24ueiA9IE1hdGgubWluKHRoaXMuYXRvbXMubGVuZ3RoKjIwLCAyMDApO1xuXG5cdFx0dGhpcy5fYmluZEV2ZW50cygpO1xuXHR9XG5cblx0X2JpbmRFdmVudHMoKSB7XG5cdFx0dGhpcy5tb2RlbC53cmFwLm9uY2xpY2sgPSAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5tb2RlbC5tb3VzZS54ID0gKGUuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoKSoyLTE7XG5cdFx0XHR0aGlzLm1vZGVsLm1vdXNlLnkgPSAtKGUuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkqMisxO1xuXG5cdFx0XHR0aGlzLm1vZGVsLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHRoaXMubW9kZWwubW91c2UsIHRoaXMubW9kZWwuY2FtZXJhKTtcblx0XHRcdGxldCBpbnRlcnNlY3RzID0gdGhpcy5tb2RlbC5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyh0aGlzLm1vZGVsLnNjZW5lLmNoaWxkcmVuKTtcblxuXHRcdFx0aWYgKGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0aWYgKHRoaXMuaW50ZXNlY3RlZCAhPSBpbnRlcnNlY3RzWzBdLm9iamVjdCkge1xuXHRcdFx0XHRcdGlmKHRoaXMuaW50ZXNlY3RlZCkge1xuXHRcdFx0XHRcdFx0dGhpcy5pbnRlc2VjdGVkLm1hdGVyaWFsLmVtaXNzaXZlLnNldEhleCh0aGlzLmludGVzZWN0ZWQuY3VycmVudEhleCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5pbnRlc2VjdGVkID0gaW50ZXJzZWN0c1sgMCBdLm9iamVjdDtcblx0XHRcdFx0XHR0aGlzLmludGVzZWN0ZWQuY3VycmVudEhleCA9IHRoaXMuaW50ZXNlY3RlZC5tYXRlcmlhbC5lbWlzc2l2ZS5nZXRIZXgoKTtcblx0XHRcdFx0XHR0aGlzLmludGVzZWN0ZWQubWF0ZXJpYWwuZW1pc3NpdmUuc2V0SGV4KCAweGZmMDAwMCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0aGlzLmludGVzZWN0ZWQpIHsgXG5cdFx0XHRcdFx0dGhpcy5pbnRlc2VjdGVkLm1hdGVyaWFsLmVtaXNzaXZlLnNldEhleCh0aGlzLmludGVzZWN0ZWQuY3VycmVudEhleCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5pbnRlc2VjdGVkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmludGVzZWN0ZWQgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXG5cdF9pbml0QXRvbXMoKSB7XG5cdFx0bGV0IHBvcyA9IHRoaXMuX2RhdGEuY29vcmRzWzBdLmNvbmZvcm1lcnNbMF07XG5cdFx0XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEuYXRvbXMuZWxlbWVudC5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5hdG9tcy5wdXNoKFxuXHRcdFx0XHRuZXcgQXRvbSh0aGlzLCB0aGlzLl9kYXRhLmF0b21zLmVsZW1lbnRbaV0sIHBvcy54W2ldLCBwb3MueVtpXSwgcG9zLnogJiYgcG9zLnpbaV0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRfYmluZE5vZGVzKCkge1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmJvbmRzLmFpZDEubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBhaWQxID0gdGhpcy5fZGF0YS5ib25kcy5haWQxW2ldLTE7XG5cdFx0XHRsZXQgYWlkMiA9IHRoaXMuX2RhdGEuYm9uZHMuYWlkMltpXS0xO1xuXHRcdFx0bGV0IHR5cGUgPSB0aGlzLl9kYXRhLmJvbmRzLm9yZGVyW2ldO1xuXG5cdFx0XHR0aGlzLmxpbmtzLnB1c2goXG5cdFx0XHRcdG5ldyBMaW5rKHRoaXMsIHRoaXMuYXRvbXNbYWlkMV0sIHRoaXMuYXRvbXNbYWlkMl0sIHR5cGUpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnN0YWdlLnJvdGF0aW9uLnggKz0gMC4wMDE7XG5cdFx0dGhpcy5zdGFnZS5yb3RhdGlvbi55ICs9IDAuMDAwMTtcblxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmF0b21zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLmF0b21zW2ldLnVwZGF0ZSgpO1xuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vbGVjdWxlOyIsIi8qKlxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cbiAqIEBhdXRob3IgbXJmbGl4IC8gaHR0cDovL2ZlbGl4bmlrbGFzLmRlXG4gKiBcbiAqIHJlbGVhc2VkIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbi8qZ2xvYmFsIFRIUkVFLCBjb25zb2xlICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLiBJdCBtYWludGFpbnNcbi8vIHRoZSBcInVwXCIgZGlyZWN0aW9uIGFzICtZLCB1bmxpa2UgdGhlIFRyYWNrYmFsbENvbnRyb2xzLiBUb3VjaCBvbiB0YWJsZXQgYW5kIHBob25lcyBpc1xuLy8gc3VwcG9ydGVkLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcbi8vXG4vLyBUaGlzIGlzIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgKG1vc3QpIFRyYWNrYmFsbENvbnRyb2xzIHVzZWQgaW4gZXhhbXBsZXMuXG4vLyBUaGF0IGlzLCBpbmNsdWRlIHRoaXMganMgZmlsZSBhbmQgd2hlcmV2ZXIgeW91IHNlZTpcbi8vICAgIFx0Y29udHJvbHMgPSBuZXcgVEhSRUUuVHJhY2tiYWxsQ29udHJvbHMoIGNhbWVyYSApO1xuLy8gICAgICBjb250cm9scy50YXJnZXQueiA9IDE1MDtcbi8vIFNpbXBsZSBzdWJzdGl0dXRlIFwiT3JiaXRDb250cm9sc1wiIGFuZCB0aGUgY29udHJvbCBzaG91bGQgd29yayBhcy1pcy5cblxuVEhSRUUuT3JiaXRDb250cm9scyA9IGZ1bmN0aW9uICggb2JqZWN0LCBkb21FbGVtZW50LCBsb2NhbEVsZW1lbnQgKSB7XG5cblx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cdHRoaXMubG9jYWxFbGVtZW50ID0gKCBsb2NhbEVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gbG9jYWxFbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0Ly8gQVBJXG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIGNvbnRyb2wgb3JiaXRzIGFyb3VuZFxuXHQvLyBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXG5cdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0Ly8gY2VudGVyIGlzIG9sZCwgZGVwcmVjYXRlZDsgdXNlIFwidGFyZ2V0XCIgaW5zdGVhZFxuXHR0aGlzLmNlbnRlciA9IHRoaXMudGFyZ2V0O1xuXG5cdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3Jcblx0Ly8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0dGhpcy5ub1pvb20gPSBmYWxzZTtcblx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cdC8vIExpbWl0cyB0byBob3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dFxuXHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdHRoaXMubm9Sb3RhdGUgPSBmYWxzZTtcblx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHR0aGlzLm5vUGFuID0gZmFsc2U7XG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0dGhpcy5ub0tleXMgPSBmYWxzZTtcblx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdC8vLy8vLy8vLy8vL1xuXHQvLyBpbnRlcm5hbHNcblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgcGhpRGVsdGEgPSAwO1xuXHR2YXIgdGhldGFEZWx0YSA9IDA7XG5cdHZhciBzY2FsZSA9IDE7XG5cdHZhciBwYW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdHZhciBTVEFURSA9IHsgTk9ORSA6IC0xLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdC8vIGV2ZW50c1xuXG5cdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblxuXG5cdHRoaXMucm90YXRlTGVmdCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XG5cblx0XHRpZiAoIGFuZ2xlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcblxuXHRcdH1cblxuXHRcdHRoZXRhRGVsdGEgLT0gYW5nbGU7XG5cblx0fTtcblxuXHR0aGlzLnJvdGF0ZVVwID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuXHRcdGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0YW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xuXG5cdFx0fVxuXG5cdFx0cGhpRGVsdGEgLT0gYW5nbGU7XG5cblx0fTtcblxuXHQvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgbGVmdFxuXHR0aGlzLnBhbkxlZnQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xuXHRcdC8vIGdldCBYIGNvbHVtbiBvZiBtYXRyaXhcblx0XHRwYW5PZmZzZXQuc2V0KCB0ZVswXSwgdGVbMV0sIHRlWzJdICk7XG5cdFx0cGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKC1kaXN0YW5jZSk7XG5cdFx0XG5cdFx0cGFuLmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0fTtcblxuXHQvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgdXBcblx0dGhpcy5wYW5VcCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cblx0XHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XG5cdFx0Ly8gZ2V0IFkgY29sdW1uIG9mIG1hdHJpeFxuXHRcdHBhbk9mZnNldC5zZXQoIHRlWzRdLCB0ZVs1XSwgdGVbNl0gKTtcblx0XHRwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoZGlzdGFuY2UpO1xuXHRcdFxuXHRcdHBhbi5hZGQoIHBhbk9mZnNldCApO1xuXHR9O1xuXHRcblx0Ly8gbWFpbiBlbnRyeSBwb2ludDsgcGFzcyBpbiBWZWN0b3IyIG9mIGNoYW5nZSBkZXNpcmVkIGluIHBpeGVsIHNwYWNlLFxuXHQvLyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0dGhpcy5wYW4gPSBmdW5jdGlvbiAoIGRlbHRhICkge1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdC5mb3YgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdHZhciBvZmZzZXQgPSBwb3NpdGlvbi5jbG9uZSgpLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oIChzY29wZS5vYmplY3QuZm92LzIpICogTWF0aC5QSSAvIDE4MC4wICk7XG5cdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRzY29wZS5wYW5MZWZ0KCAyICogZGVsdGEueCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblx0XHRcdHNjb3BlLnBhblVwKCAyICogZGVsdGEueSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdC50b3AgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRzY29wZS5wYW5MZWZ0KCBkZWx0YS54ICogKHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0KSAvIGVsZW1lbnQuY2xpZW50V2lkdGggKTtcblx0XHRcdHNjb3BlLnBhblVwKCBkZWx0YS55ICogKHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tKSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgb3IgcGVyc3BlY3RpdmUgLSB3YXJuIHVzZXJcblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cblx0XHR9XG5cblx0fTtcblxuXHR0aGlzLmRvbGx5SW4gPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0ZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG5cdFx0fVxuXG5cdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHR9O1xuXG5cdHRoaXMuZG9sbHlPdXQgPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0ZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG5cdFx0fVxuXG5cdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHR9O1xuXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIHBvc2l0aW9uID0gdGhpcy5vYmplY3QucG9zaXRpb247XG5cdFx0dmFyIG9mZnNldCA9IHBvc2l0aW9uLmNsb25lKCkuc3ViKCB0aGlzLnRhcmdldCApO1xuXG5cdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXG5cdFx0dmFyIHRoZXRhID0gTWF0aC5hdGFuMiggb2Zmc2V0LngsIG9mZnNldC56ICk7XG5cblx0XHQvLyBhbmdsZSBmcm9tIHktYXhpc1xuXG5cdFx0dmFyIHBoaSA9IE1hdGguYXRhbjIoIE1hdGguc3FydCggb2Zmc2V0LnggKiBvZmZzZXQueCArIG9mZnNldC56ICogb2Zmc2V0LnogKSwgb2Zmc2V0LnkgKTtcblxuXHRcdGlmICggdGhpcy5hdXRvUm90YXRlICkge1xuXG5cdFx0XHR0aGlzLnJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdH1cblxuXHRcdHRoZXRhICs9IHRoZXRhRGVsdGE7XG5cdFx0cGhpICs9IHBoaURlbHRhO1xuXG5cdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRwaGkgPSBNYXRoLm1heCggdGhpcy5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkgKSApO1xuXG5cdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZSBFUFMgYW5kIFBJLUVQU1xuXHRcdHBoaSA9IE1hdGgubWF4KCBFUFMsIE1hdGgubWluKCBNYXRoLlBJIC0gRVBTLCBwaGkgKSApO1xuXG5cdFx0dmFyIHJhZGl1cyA9IG9mZnNldC5sZW5ndGgoKSAqIHNjYWxlO1xuXG5cdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRyYWRpdXMgPSBNYXRoLm1heCggdGhpcy5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHRoaXMubWF4RGlzdGFuY2UsIHJhZGl1cyApICk7XG5cdFx0XG5cdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0dGhpcy50YXJnZXQuYWRkKCBwYW4gKTtcblxuXHRcdG9mZnNldC54ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5zaW4oIHRoZXRhICk7XG5cdFx0b2Zmc2V0LnkgPSByYWRpdXMgKiBNYXRoLmNvcyggcGhpICk7XG5cdFx0b2Zmc2V0LnogPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLmNvcyggdGhldGEgKTtcblxuXHRcdHBvc2l0aW9uLmNvcHkoIHRoaXMudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdHRoaXMub2JqZWN0Lmxvb2tBdCggdGhpcy50YXJnZXQgKTtcblxuXHRcdHRoZXRhRGVsdGEgPSAwO1xuXHRcdHBoaURlbHRhID0gMDtcblx0XHRzY2FsZSA9IDE7XG5cdFx0cGFuLnNldCgwLDAsMCk7XG5cblx0XHRpZiAoIGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLm9iamVjdC5wb3NpdGlvbiApID4gMCApIHtcblxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRsYXN0UG9zaXRpb24uY29weSggdGhpcy5vYmplY3QucG9zaXRpb24gKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cblx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgeyByZXR1cm47IH1cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT09IDAgKSB7XG5cdFx0XHRpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgeyByZXR1cm47IH1cblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSAxICkge1xuXHRcdFx0aWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSB7IHJldHVybjsgfVxuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSAyICkge1xuXHRcdFx0aWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHsgcmV0dXJuOyB9XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdC8vIEdyZWdnbWFuIGZpeDogaHR0cHM6Ly9naXRodWIuY29tL2dyZWdnbWFuL3RocmVlLmpzL2NvbW1pdC9mZGU5Zjk5MTdkNmQ4MzgxZjA2YmYyMmNkZmY3NjYwMjlkMTc2MWJlXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcblxuXHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0c2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdHNjb3BlLmRvbGx5SW4oKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzY29wZS5kb2xseU91dCgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblx0XHRcdFxuXHRcdFx0c2NvcGUucGFuKCBwYW5EZWx0YSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdH1cblxuXHRcdC8vIEdyZWdnbWFuIGZpeDogaHR0cHM6Ly9naXRodWIuY29tL2dyZWdnbWFuL3RocmVlLmpzL2NvbW1pdC9mZGU5Zjk5MTdkNmQ4MzgxZjA2YmYyMmNkZmY3NjYwMjlkMTc2MWJlXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VVcCggLyogZXZlbnQgKi8gKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0Ly8gR3JlZ2dtYW4gZml4OiBodHRwczovL2dpdGh1Yi5jb20vZ3JlZ2dtYW4vdGhyZWUuanMvY29tbWl0L2ZkZTlmOTkxN2Q2ZDgzODFmMDZiZjIyY2RmZjc2NjAyOWQxNzYxYmVcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cblx0XHR2YXIgZGVsdGEgPSAwO1xuXG5cdFx0aWYgKCBldmVudC53aGVlbERlbHRhICkgeyAvLyBXZWJLaXQgLyBPcGVyYSAvIEV4cGxvcmVyIDlcblxuXHRcdFx0ZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICkgeyAvLyBGaXJlZm94XG5cblx0XHRcdGRlbHRhID0gLSBldmVudC5kZXRhaWw7XG5cblx0XHR9XG5cblx0XHRpZiAoIGRlbHRhID4gMCApIHtcblxuXHRcdFx0c2NvcGUuZG9sbHlPdXQoKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHNjb3BlLmRvbGx5SW4oKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSB7IHJldHVybjsgfVxuXHRcdGlmICggc2NvcGUubm9LZXlzID09PSB0cnVlICkgeyByZXR1cm47IH1cblx0XHRpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgeyByZXR1cm47IH1cblxuXHRcdC8vIHBhbiBhIHBpeGVsIC0gSSBndWVzcyBmb3IgcHJlY2lzZSBwb3NpdGlvbmluZz9cblx0XHQvLyBHcmVnZ21hbiBmaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnZ21hbi90aHJlZS5qcy9jb21taXQvZmRlOWY5OTE3ZDZkODM4MWYwNmJmMjJjZGZmNzY2MDI5ZDE3NjFiZVxuXHRcdHZhciBuZWVkVXBkYXRlID0gZmFsc2U7XG5cdFx0XG5cdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRzY29wZS5wYW4oIG5ldyBUSFJFRS5WZWN0b3IyKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApICk7XG5cdFx0XHRcdG5lZWRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdHNjb3BlLnBhbiggbmV3IFRIUkVFLlZlY3RvcjIoIDAsIC1zY29wZS5rZXlQYW5TcGVlZCApICk7XG5cdFx0XHRcdG5lZWRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRzY29wZS5wYW4oIG5ldyBUSFJFRS5WZWN0b3IyKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApICk7XG5cdFx0XHRcdG5lZWRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0c2NvcGUucGFuKCBuZXcgVEhSRUUuVmVjdG9yMiggLXNjb3BlLmtleVBhblNwZWVkLCAwICkgKTtcblx0XHRcdFx0bmVlZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdC8vIEdyZWdnbWFuIGZpeDogaHR0cHM6Ly9naXRodWIuY29tL2dyZWdnbWFuL3RocmVlLmpzL2NvbW1pdC9mZGU5Zjk5MTdkNmQ4MzgxZjA2YmYyMmNkZmY3NjYwMjlkMTc2MWJlXG5cdFx0aWYgKCBuZWVkVXBkYXRlICkge1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHR9XG5cdFxuXHRmdW5jdGlvbiB0b3VjaHN0YXJ0KCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSB7IHJldHVybjsgfVxuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cdFx0XHRcdGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSB7IHJldHVybjsgfVxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblx0XHRcdFx0aWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSB7IHJldHVybjsgfVxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblx0XHRcdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblx0XHRcdFx0aWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHsgcmV0dXJuOyB9XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdG91Y2htb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSB7IHJldHVybjsgfVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblx0XHRcdFx0aWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHsgcmV0dXJuOyB9XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHsgcmV0dXJuOyB9XG5cblx0XHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdFx0c2NvcGUucm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cdFx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0XHRzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cdFx0XHRcdGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgeyByZXR1cm47IH1cblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSB7IHJldHVybjsgfVxuXG5cdFx0XHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXHRcdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdFx0c2NvcGUuZG9sbHlPdXQoKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c2NvcGUuZG9sbHlJbigpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblx0XHRcdFx0aWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHsgcmV0dXJuOyB9XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHsgcmV0dXJuOyB9XG5cblx0XHRcdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXHRcdFx0XHRcblx0XHRcdFx0c2NvcGUucGFuKCBwYW5EZWx0YSApO1xuXG5cdFx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiB0b3VjaGVuZCggLyogZXZlbnQgKi8gKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgeyByZXR1cm47IH1cblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblx0fVxuXG5cdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9LCBmYWxzZSApO1xuXHR0aGlzLmxvY2FsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTsgLy8gZmlyZWZveFxuXG5cdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHR0aGlzLmxvY2FsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQsIGZhbHNlICk7XG5cdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaGVuZCwgZmFsc2UgKTtcblx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaG1vdmUsIGZhbHNlICk7XG5cbn07XG5cblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRIUkVFLk9yYml0Q29udHJvbHM7IiwibW9kdWxlLmV4cG9ydHM9W1xuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiSFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JLQvtC00L7RgNC+0LRIeWRyb2dlblwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGRkZGRkZcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEVFRUVFRVwiLFxuICAgICAgICBcImVzdFwiOiBcIigpMXMwXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMS4wMDc5XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjAuMDg5OFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMjU5LjFcIixcbiAgICAgICAgXCJib2lsXCI6IFwiLTI1Mi44XCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjE0LjQ0MlwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4xXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIwLjMyXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjEzLjYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiSGVcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCT0LXQu9C40LlIZWxpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4MzBDN0U2XCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHgxMEFGQzhcIixcbiAgICAgICAgXCJlc3RcIjogXCIoKTFzMFwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjQuMDAyNlwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIwLjE3OVwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMjcyLjJcIixcbiAgICAgICAgXCJib2lsXCI6IFwiLTI2OC45XCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjUuMjMyXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCLCoFwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMC45M1wiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIyNC41OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkxpXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQm9C40YLQuNC5TGl0aGl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHg1NDIyRURcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDUxMURFQlwiLFxuICAgICAgICBcImVzdFwiOiBcIihIZSkyczFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI2Ljk0MVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI1MzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTgwLjVcIixcbiAgICAgICAgXCJib2lsXCI6IFwiMTM0MlwiLFxuICAgICAgICBcImhlYXRcIjogXCIzLjMwN1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4wXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjIzXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuMzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJCZVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JHQtdGA0LjQu9C70LjQuUJlcnlsbGl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHgzRTc4MTlcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDIwNjgyN1wiLFxuICAgICAgICBcImVzdFwiOiBcIihIZSkyczJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI5LjAxMjJcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTg1MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMjg1XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIjI0NzBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMS44ODRcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuNVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMC45MFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5LjMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQlwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JHQvtGAQm9yb25cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoSGUpMnMyMnAxXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTAuODExXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIzNDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjAzMFwiLFxuICAgICAgICBcImJvaWxcIjogXCIzODYwXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjEuMjkzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjBcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjAuODJcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOC4zMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkNcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCj0LPQu9C10YDQvtC0Q2FyYm9uXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweDM0MzQzNFwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4MDAwMDAwXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEhlKTJzMjJwMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjEyLjAxMVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIyMjYwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjM3MDAgKNCy0L7Qt9CzLilcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC42OVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi41XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIwLjc3XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjExLjI2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTlwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JDQt9C+0YJOaXRyb2dlblwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHgxMTU3RkZcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDEwMzBGRlwiLFxuICAgICAgICBcImVzdFwiOiBcIihIZSkyczIycDNcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxNC4wMDdcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMS4yNTFcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiLTIxMFwiLFxuICAgICAgICBcImJvaWxcIjogXCItMTk1LjhcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMS4wMzRcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjMuMFwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMC43NFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxNC41M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIk9cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCa0LjRgdC70L7RgNC+0LRPeHlnZW5cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkYzQTNBXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRjEzMTNcIixcbiAgICAgICAgXCJlc3RcIjogXCIoSGUpMnMyMnA0XCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTUuOTk5XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjEuNDI5XCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIi0yMTguOFwiLFxuICAgICAgICBcImJvaWxcIjogXCItMTgzXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuOTEzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIzLjVcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjAuNzNcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTMuNjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJGXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQpNGC0L7RgEZsdW9yaW5lXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweDU1Qjk0MFwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4MUY3QjAwXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEhlKTJzMjJwNVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjE4Ljk5OFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxLjY5NlwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMjE5LjZcIixcbiAgICAgICAgXCJib2lsXCI6IFwiLTE4OC4yXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNzUzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCI0LjBcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjAuNzJcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTcuNDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJOZVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0J3QtdC+0L1OZW9uXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweDMwQzdFNlwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4MTBBRkM4XCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEhlKTJzMjJwNlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjIwLjE4MFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIwLjkwMVwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMjQ4LjZcIixcbiAgICAgICAgXCJib2lsXCI6IFwiLTI0NlwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjkwNFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiwqBcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjAuNzFcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMjEuNTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJOYVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0J3QsNGC0YDQuNC5U29kaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweDU0MjJFRFwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4NTExREVCXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKE5lKTNzMVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjIyLjk5MFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI5NzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiOTcuOFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIxLjIzNVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMC45XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjU0XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuMTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJNZ1wiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JzQsNCz0L3QuNC5TWFnbmVzaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKE5lKTNzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjI0LjMwNVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxNzQwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjY1MFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIxLjA0N1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjM2XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuNjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJBbFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JDQu9GO0LzQuNC90LjQuUFsdW1pbml1bVwiLFxuICAgICAgICBcImVzdFwiOiBcIihOZSkzczIzcDFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIyNi45ODJcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMjcwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCI2NjBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC45XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjVcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMThcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS45OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlNpXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQmtGA0LXQvNC90LjQuVNpbGljb25cIixcbiAgICAgICAgXCJlc3RcIjogXCIoTmUpM3MyM3AyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMjguMDg2XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIzMzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTQxMFwiLFxuICAgICAgICBcImJvaWxcIjogXCIyNjAwXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNjc4XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMTFcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOC4xNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlBcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCk0L7RgdGE0L7RgFBob3NwaG9ydXNcIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkY3QTQ0XCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRjczMjBcIixcbiAgICAgICAgXCJlc3RcIjogXCIoTmUpM3MyM3AzXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMzAuOTc0XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE4MjBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiNDQuMiAo0LHQtdC7LiksIDQxMCAo0LrRgC4pXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIjI4MCAo0LHQtdC7LilcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC43NDFcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuMVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4wNlwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxMC40OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlNcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCh0LXRgNCwU3VsZnVyXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZGREYzOVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RTlDRTI5XCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKE5lKTNzMjNwNFwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjMyLjA2NVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIyMDcwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjExMyAo0YDQvtC80LEuKSwgMTE5ICjQvNC+0L3QvtC60LsuKVwiLFxuICAgICAgICBcImJvaWxcIjogXCI0NDRcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC43MzNcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuNVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4wMlwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxMC4zNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkNsXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQpdC70L7RgENobG9yaW5lXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweDU1Qjk0MFwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4MUY3QjAwXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKE5lKTNzMjNwNVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjM1LjQ1M1wiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIwLjMxN1wiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMTAxXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIi0zNFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjQ4NlwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMy4wXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIwLjk5XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjEyLjk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQXJcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCQ0YDQs9C+0L1BcmdvblwiLFxuICAgICAgICBcImVzdFwiOiBcIihOZSkzczIzcDZcIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4MzBDN0U2XCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHgxMEFGQzhcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIzOS45NDhcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMS43ODRcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiLTE4OS4yXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIi0xODUuOFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjUyM1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiwqBcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjAuOThcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTUuNzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJLXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQmtCw0LvQuNC5UG90YXNzaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweDU0MjJFRFwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4NTExREVCXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTRzMVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjM5LjA5OFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI4NjBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiNjMuNlwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjc0MVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMC44XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIyLjAzXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjQuMzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJDYVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JrQsNC70YzRhtC40LlDYWxjaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTRzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjQwLjA3OFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxNTUwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjgzOFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjYyNFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4wXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjc0XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuMTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJTY1wiLFxuICAgICAgICBcImxhYmVsXCI6IFwiQ9C60LDQvdC00LjQuVNjYW5kaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTRzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjQ0Ljk1NlwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIzMDAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE1MzlcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC41NDRcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuM1wiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS40NFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiVGlcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCi0LjRgtCw0L1UaXRhbml1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHg5RTlFOUVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweDY2NjY2NlwiLFxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDI0czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI0Ny44NjdcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNDUxMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNjY4XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNTI3XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjVcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzJcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi44M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlZcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCS0LDQvdCw0LTQuNC5VmFuYWRpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2QzNHMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiNTAuOTQyXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjYxMTBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTkwMFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjUwMlwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS42XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjIyXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuNzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJDclwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KXRgNC+0LxDaHJvbWl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDU0czFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI1MS45OTZcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNzE5MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxODU2XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNDZcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuNlwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xOFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2Ljc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTW5cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCc0LDRgNCz0LDQvdC10YZNYW5nYW5lc2VcIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2Q1NHMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiNTQuOTM4XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjc0MzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTI0NFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjQ4MVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS41XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjE3XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuNDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJGZVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JbQtdC70LXQt9C+SXJvblwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDY0czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI1NS44NDVcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNzg2MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNTM2XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNDZcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuOFwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xN1wiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3Ljg3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQ29cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCa0L7QsdCw0LvRjNGCQ29iYWx0XCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkNzRzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjU4LjkzM1wiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI4OTAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE0OTVcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC40MTRcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuOFwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xNlwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3Ljg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTmlcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCd0LjQutC10LvRjE5pY2tlbFwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihBcikzZDg0czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI1OC42OTNcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiODkwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNDUzXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuNDRcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuOFwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xNVwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3LjY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQ3VcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCc0LXQtNGMQ29wcGVyXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTA0czFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI2My41NDZcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiODk2MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMDgzXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMzg1XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjlcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMTdcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy43M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlpuXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQptC40L3QulppbmNcIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2QxMDRzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjY1LjQwOVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI3MTQwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjQxOS41XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMzgzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjZcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjVcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOS4zOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkdhXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQk9Cw0LvQu9C40LlHYWxsaXVtXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTA0czI0cDFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI2OS43MjNcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNTkxMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyOS44XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMzMxXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjZcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4wMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkdlXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQk9C10YDQvNCw0L3QuNC5R2VybWFuaXVtXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTA0czI0cDJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI3Mi42NFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI1MzIwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjkzNy40XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMzA1XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjBcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjJcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOC4xM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkFzXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQnNGL0YjRjNGP0LpBcnNlbmljXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTA0czI0cDNcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI3NC45MjJcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNTcyMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCI4MTcgKNC/0L7QtCDQtNCw0LLQuy4pXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMzQzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjJcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjBcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOS44MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlNlXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQodC10LvQtdC9U2VsZW5pdW1cIixcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2QxMDRzMjRwNFwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjc4Ljk2XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjQ3OTBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjE3XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIjY4NVwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjM1MlwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi41XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjE2XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjkuNzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJCclwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JHRgNC+0LxCcm9taW5lXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweERGOTAyQlwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4QUY2MDE4XCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEFyKTNkMTA0czI0cDVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI3OS45MDRcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMzEyMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCItNy4yXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIjU4LjhcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yOTNcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuOFwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4xNFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxMS44MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIktyXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQmtGA0LjQv9GC0L7QvUtyeXB0b25cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4MzBDN0U2XCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHgxMEFGQzhcIixcbiAgICAgICAgXCJlc3RcIjogXCIoQXIpM2QxMDRzMjRwNlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjgzLjc5OFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIzLjc0XCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIi0xNTcuM1wiLFxuICAgICAgICBcImJvaWxcIjogXCItMTUzLjJcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yNDhcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIsKgXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjEyXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjE0LjAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUmJcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCg0YPQsdC40LTQuNC5UnViaWRpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4NTQyMkVEXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHg1MTFERUJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNXMxXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiODUuNDY4XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE1MzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzguOVwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjMzNVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMC44XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIyLjE2XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjQuMThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJTclwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KHRgtGA0L7QvdGG0LjQuVN0cm9udGl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihLcik1czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI4Ny42MlwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIyNjAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjc2OFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjczN1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4wXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjkxXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuNjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJZXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQmNGC0YLRgNC40LlZdHRyaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkMTVzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjg4LjkwNlwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI0NDcwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE1MjVcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yOTdcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuM1wiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS42MlwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiWnJcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCm0LjRgNC60L7QvdC40LlaaXJjb25pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQyNXMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiOTEuMjI0XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjY0OTBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTg1MlwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjI3NlwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS40XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjQ1XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuODRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJOYlwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0J3QuNC+0LHQuNC5TmlvYml1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDQ1czFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI5Mi45MDZcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiODQwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyNDY4XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjcyXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjZcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzRcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi44OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIk1vXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQnNC+0LvQuNCx0LTQtdC9TW9seWJkZW51bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDU1czFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCI5NS45NFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMDIwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyNjIwXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjU1XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzBcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy4xMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlRjXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQotC10YXQvdC10YbQuNC5VGVjaG5ldGl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDU1czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCJbOThdXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjExNTAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjIxNDBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yMVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS45XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjI3XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuMjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJSdVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KDRg9GC0LXQvdC40LlSdXRoZW5pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQ3NXMxXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTAxLjA3XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjEyMjAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjI1MDBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yMzlcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuMlwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4yNVwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3LjM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUmhcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCg0L7QtNC40LlSaG9kaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkODVzMVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjEwMi45MVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMjQwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxOTY2XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjQ3XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjJcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMjVcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy40NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlBkXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQn9Cw0LvQu9Cw0LTQuNC5UGFsbGFkaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkMTA1czBcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxMDYuNDJcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTIwMDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTU1MlwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjI0M1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjI4XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjguMzNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJBZ1wiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KHQtdGA0LXQsdGA0L5TaWx2ZXJcIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQxMDVzMVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjEwNy44N1wiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMDUwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCI5NjAuOFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjIzNFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS45XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjM0XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuNThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJDZFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JrQsNC00LzQuNC5Q2FkbWl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDEwNXMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTEyLjQxXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjg2NTBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzIwLjlcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yM1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS43XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjQ4XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjguOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJJblwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JjQvdC00LjQuUluZGl1bVwiLFxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDEwNXMyNXAxXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTE0LjgyXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjczMTBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTU2LjJcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yMzlcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuN1wiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS40NFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1Ljc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiU25cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCe0LvQvtCy0L5UaW5cIixcbiAgICAgICAgXCJlc3RcIjogXCIoS3IpNGQxMDVzMjVwMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjExOC43MVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI3MzAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjIzMS45XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjI2XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDFcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy4zNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlNiXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQodGD0YDRjNC80LBBbnRpbW9ueVwiLFxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDEwNXMyNXAzXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTIxLjc2XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjY2MjBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiNjMwLjVcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yMDVcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuOVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS40MFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI4LjY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiVGVcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCi0LXQu9C70YPRgFRlbGx1cml1bVwiLFxuICAgICAgICBcImVzdFwiOiBcIihLcik0ZDEwNXMyNXA0XCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTI3LjZcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNjI0MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCI0NDkuNVwiLFxuICAgICAgICBcImJvaWxcIjogXCI5OTBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xOTdcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuMVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4zNlwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5LjAxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiSVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhBMDU3RTZcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEE0MjlGNFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JjQvtC0SW9kaW5lXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkMTA1czI1cDVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxMjYuOTBcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNDk0MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMTMuN1wiLFxuICAgICAgICBcImJvaWxcIjogXCIxODMuNVwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjIxOFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi41XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjMzXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjEwLjQ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiWGVcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCa0YHQtdC90L7QvVhlbm9uXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweDMwQzdFNlwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4MTBBRkM4XCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKEtyKTRkMTA1czI1cDZcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxMzEuMjlcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNS44NlwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMTExLjlcIixcbiAgICAgICAgXCJib2lsXCI6IFwiLTEwOFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjE1OFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiwqBcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzFcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiMTIuMTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJDc1wiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KbQtdC30LjQuUNhZXNpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4NTQyMkVEXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHg1MTFERUJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNnMxXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTMyLjkxXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE5MDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjguNVwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjIxOFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMC43XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIyLjM1XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjMuODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJCYVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JHQsNGA0LjQuUJhcml1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk2czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxMzcuMzNcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMzUwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCI3MjlcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yODVcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjAuOVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS45OFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTGFcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCb0LDQvdGC0LDQvUxhbnRoYW51bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk1ZDE2czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxMzguOTFcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNjE3MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCI5MjBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xODhcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS42OVwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjYxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQ2VcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCm0LXRgNC40LlDZXJpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYyNWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTQwLjEyXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjY3NzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiNzk1XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTc2XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjFcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNjVcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi41NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlByXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQn9GA0LDQt9C10L7QtNC40LxQcmFzZW9keW1pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYzNWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTQwLjkxXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjY3ODBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiOTM1XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMjAxXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjFcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNjVcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS43NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIk5kXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQndC10L7QtNC40LxOZW9keW1pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGY0NWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTQ0LjI0XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjcwMDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTAyNFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjE4OFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjY0XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuMzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJQbVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0J/RgNC+0LzQtdGC0LjQuVByb21ldGhpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGY1NWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiWzE0NV1cIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiNzIyMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMDgwXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTY4XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjFcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNjRcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS45MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlNtXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQodCw0LzQsNGA0LjQuVNhbWFyaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmNjVkMDZzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjE1MC4zNlwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI3NTQwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjEwNzJcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xNzZcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMlwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS42MlwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiRXVcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCV0LLRgNC+0L/QuNC5RXVyb3BpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGY3NWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTUxLjk2XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjUyNjBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiODI2XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTYzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjJcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuODVcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNS42N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkdkXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQk9Cw0LTQvtC70LjQvdC40LlHYWRvbGluaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmNzVkMTZzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjE1Ny4yNVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI3ODkwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjEzMTJcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4yOTdcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuMVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS42MVwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiVGJcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCi0LXRgNCx0LjQuVRlcmJpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGY5NWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTU4LjkzXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjgyNzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTM1NlwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjE4NFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjU5XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJEeVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JTQuNGB0L/RgNC+0LfQuNC5RHlzcHJvc2l1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjEwNWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTYyLjUwXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjg1NDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTQwN1wiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjE3MlwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjU5XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuOTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJIb1wiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JPQvtC70YzQvNC40LlIb2xtaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTE1ZDA2czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxNjQuOTNcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiODgwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNDYxXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTYzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjJcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNTdcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi45MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkVyXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQrdGA0LHQuNC5RXJiaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTI1ZDA2czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxNjcuMjZcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiOTA1MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNDk3XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTY3XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjJcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNTdcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi43MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlRtXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQotGD0LvQuNC5VGh1bGl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjEzNWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTY4LjkzXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjkzMzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTU0NVwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjE1OVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjU2XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJZYlwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JjRgtGC0LXRgNCx0LjQuVl0dGVyYml1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQwNnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTczLjA0XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjY5ODBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiODI0XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTQ3XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjFcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNzBcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4yMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkx1XCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQm9GO0YLQtdGG0LjQuUx1dGV0aXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDE2czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxNzQuOTdcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiOTg0MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNjUyXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTU1XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjJcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNTZcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4xNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkhmXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQk9Cw0YTQvdC40LlIYWZuaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDI2czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxNzguNDlcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTMxMDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjIyMlwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjE0N1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjQ0XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuMzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJUYVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KLQsNC90YLQsNC7VGFudGFsdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYxNDVkMzZzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjE4MC45NVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxNjYwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIyOTk2XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTUxXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjVcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzRcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy43MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIldcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCS0L7Qu9GM0YTRgNCw0LxUdW5nc3RlblwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQ0NnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTgzLjg0XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjE5MzAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjM0MTBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xMzRcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuN1wiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4zMFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI3Ljk4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUmVcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCg0LXQvdC40LlSaGVuaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDU2czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxODYuMjFcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMjEwMDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzE4MFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjEzOFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS45XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjI4XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuODdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJPc1wiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0J7RgdC80LjQuU9zbWl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQ2NnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTkwLjIzXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIyNTAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjMwMDBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xM1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjI2XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjguNzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJJclwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JjRgNC40LTQuNC5SXJpZGl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQ3NnMyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTkyLjIyXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIyNDAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjI0MTBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xM1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjI3XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjkuMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJQdFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0J/Qu9Cw0YLQuNC90LBQbGF0aW51bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQ5NnMxXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMTk1LjA4XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIxNDAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjE3NjlcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xMzRcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjIuMlwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS4zMFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI5LjAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQXVcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCX0L7Qu9C+0YLQvkdvbGRcIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoWGUpNGYxNDVkMTA2czFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIxOTYuOTdcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTkzMDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTA2M1wiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjEzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIyLjRcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuMzRcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOS4yMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkhnXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQoNGC0YPRgtGMTWVyY3VyeVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQxMDZzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjIwMC41OVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMzUyMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCItMzguOVwiLFxuICAgICAgICBcImJvaWxcIjogXCIzNTdcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xMzhcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuOVwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMS40OVwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxMC40M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlRsXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQotCw0LvQu9C40LlUaGFsbGl1bVwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQxMDZzMjZwMVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjIwNC4zOFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMTg1MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIzMDNcIixcbiAgICAgICAgXCJib2lsXCI6IFwiMTQ1N1wiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjEzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDhcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiOS4wMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlBiXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQodCy0LjQvdC10YZMZWFkXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDEwNnMyNnAyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMjA3LjJcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTE0MDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzI3LjRcIixcbiAgICAgICAgXCJib2lsXCI6IFwiMTc0MFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjEzXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjhcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDdcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNy4zN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkJpXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQktC40YHQvNGD0YJCaXNtdXRoXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDEwNnMyNnAzXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiMjA4Ljk4XCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjk4MDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjcxLjNcIixcbiAgICAgICAgXCJib2lsXCI6IFwiMTU2MFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjE0MlwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS45XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjQ2XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjcuMjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJQb1wiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0J/QvtC70L7QvdC40LlQb2xvbml1bVwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQxMDZzMjZwNFwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIlsyMDldXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjkzMDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMjU0XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIjk2MlwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjEyNVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4wXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjQ2XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjguNDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJBdFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JDRgdGC0LDRgkFzdGF0aW5lXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFhlKTRmMTQ1ZDEwNnMyNnA1XCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiWzIxMF1cIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiwqBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMzAyXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIjMzN1wiLFxuICAgICAgICBcImhlYXRcIjogXCLCoFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMi4yXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCIxLjQ1XCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIsKgXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiUm5cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCg0LDQtNC+0L1SYWRvblwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihYZSk0ZjE0NWQxMDZzMjZwNlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIlsyMjJdXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjkuOTFcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiLTcxXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIi02MlwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjA5XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCLCoFwiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiMi4xNFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCIxMC43NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkZyXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQpNGA0LDQvdGG0LjQuUZyYW5jaXVtXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTdzMVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIlsyMjNdXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIsKgXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjI3XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIwLjdcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjQuMDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJSYVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KDQsNC00LjQuVJhZGl1bVwiLFxuICAgICAgICBcImVzdFwiOiBcIihSbik3czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCJbMjI2XVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCI1MDAwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjcwMFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCLCoFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMC45XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQWNcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCQ0LrRgtC40L3QuNC5QWN0aW5pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNmQxN3MyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiWzIyN11cIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTAwNzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTA1MFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCLCoFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4xXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1LjE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiVGhcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCi0L7RgNC40LlUaG9yaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTZkMjdzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjIzMi4wNFwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMTcwMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxNzUwXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTQyXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNjVcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4wOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIlBhXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQn9GA0L7QsNC60YLQuNC90LjQuVByb3RhY3Rpbml1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihSbik1ZjI2ZDE3czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCIyMzEuMDRcIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTU0MDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiMTU2MFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjEyMVwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS41XCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI1Ljg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiVVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KPRgNCw0L1VcmFuaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmMzZkMTdzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIjIzOC4wM1wiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxOTA1MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMTMyXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTE3XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIjEuNDJcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4wNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIk5wXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQndC10L/RgtGD0L3QuNC5TmVwdHVuaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmNDZkMTdzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIlsyMzddXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIjIwNDUwXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIjY0MFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCIwLjEyXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuMTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJQdVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0J/Qu9GD0YLQvtC90LjQuVBsdXRvbml1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihSbik1ZjY2ZDA3czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCJbMjQ0XVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxOTg0MFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCI2NDBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiMC4xM1wiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjA2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiQW1cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCQ0LzQtdGA0LjRhtC40LlBbWVyaWNpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNWY3NmQwN3MyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiWzI0M11cIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTM2NzBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiOTk0XCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIjAuMTM4XCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjUuOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJDbVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JrRjtGA0LjQuUN1cml1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihSbik1Zjc2ZDE3czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCJbMjQ3XVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCIxMzUxMFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCIxMzQwXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuMDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJCa1wiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JHQtdGA0LrQu9C40LlCZXJrZWxpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNWY5NmQwN3MyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiWzI0N11cIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiMTQwMDBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiwqBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiwqBcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuM1wiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiwqBcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi4yM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIkNmXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQmtCw0LvQuNGE0L7RgNC90LjQuUNhbGlmb3JuaXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmMTA2ZDA3czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCJbMjUxXVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCLCoFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCLCoFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCLCoFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiRXNcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCt0LnQvdGI0YLQtdC50L3QuNC5RWluc3RlaW5pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNWYxMTZkMDdzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIlsyNTJdXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIsKgXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIsKgXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuNDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJGbVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0KTQtdGA0LzQuNC5RmVybWl1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGOTY3MjdcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEU5NjIxOVwiLFxuICAgICAgICBcImVzdFwiOiBcIihSbik1ZjEyNmQwN3MyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiWzI1N11cIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiwqBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiwqBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiwqBcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIjEuM1wiLFxuICAgICAgICBcImNvdmFsZW50UmFkaXVzXCI6IFwiwqBcIixcbiAgICAgICAgXCIxc3RJb25pemVyUG90ZW50aWFsXCI6IFwiNi41MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZm9ybXVsYVwiOiBcIk1kXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCLQnNC10L3QtNC10LvQtdCy0LjQuU1lbmRlbGV2aXVtXCIsXG4gICAgICAgIFwiY29sb3JcIjogXCIweEZDQTA2RVwiLFxuICAgICAgICBcInNoYWRvd1wiOiBcIjB4RkU4RTYyXCIsXG4gICAgICAgIFwiZXN0XCI6IFwiKFJuKTVmMTM2ZDA3czJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm1hc3NcIjogXCJbMjU4XVwiLFxuICAgICAgICBcImRlbnNpdHlcIjogXCLCoFwiLFxuICAgICAgICBcIm1lbHRpbmdcIjogXCLCoFwiLFxuICAgICAgICBcImJvaWxcIjogXCLCoFwiLFxuICAgICAgICBcImhlYXRcIjogXCLCoFwiLFxuICAgICAgICBcImVsZWN0cm9uZWdhdGl2aXR5XCI6IFwiMS4zXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCI2LjU4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmb3JtdWxhXCI6IFwiTm9cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcItCd0L7QsdC10LvQuNC5Tm9iZWxpdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiBcIjB4RkNBMDZFXCIsXG4gICAgICAgIFwic2hhZG93XCI6IFwiMHhGRThFNjJcIixcbiAgICAgICAgXCJlc3RcIjogXCIoUm4pNWYxNDZkMDdzMlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibWFzc1wiOiBcIlsyNTldXCIsXG4gICAgICAgIFwiZGVuc2l0eVwiOiBcIsKgXCIsXG4gICAgICAgIFwibWVsdGluZ1wiOiBcIsKgXCIsXG4gICAgICAgIFwiYm9pbFwiOiBcIsKgXCIsXG4gICAgICAgIFwiaGVhdFwiOiBcIsKgXCIsXG4gICAgICAgIFwiZWxlY3Ryb25lZ2F0aXZpdHlcIjogXCIxLjNcIixcbiAgICAgICAgXCJjb3ZhbGVudFJhZGl1c1wiOiBcIsKgXCIsXG4gICAgICAgIFwiMXN0SW9uaXplclBvdGVudGlhbFwiOiBcIjYuNjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZvcm11bGFcIjogXCJMclwiLFxuICAgICAgICBcImxhYmVsXCI6IFwi0JvQvtGD0YDQtdC90YHQuNC5TGF3cmVuY2l1bVwiLFxuICAgICAgICBcImNvbG9yXCI6IFwiMHhGQ0EwNkVcIixcbiAgICAgICAgXCJzaGFkb3dcIjogXCIweEZFOEU2MlwiLFxuICAgICAgICBcImVzdFwiOiBcIihSbik1ZjE0NmQxN3MyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJtYXNzXCI6IFwiWzI2Ml1cIixcbiAgICAgICAgXCJkZW5zaXR5XCI6IFwiwqBcIixcbiAgICAgICAgXCJtZWx0aW5nXCI6IFwiwqBcIixcbiAgICAgICAgXCJib2lsXCI6IFwiwqBcIixcbiAgICAgICAgXCJoZWF0XCI6IFwiwqBcIixcbiAgICAgICAgXCJlbGVjdHJvbmVnYXRpdml0eVwiOiBcIsKgXCIsXG4gICAgICAgIFwiY292YWxlbnRSYWRpdXNcIjogXCLCoFwiLFxuICAgICAgICBcIjFzdElvbml6ZXJQb3RlbnRpYWxcIjogXCLCoFwiXG4gICAgfVxuXSIsImNvbnN0IE1vbGVjdWxlID0gcmVxdWlyZSgnLi9Nb2xlY3VsZScpO1xuY29uc3QgT3JiaXRDb250cm9scyA9IHJlcXVpcmUoJy4vT3JiaXRDb250cm9scycpO1xuXG5jbGFzcyBNb2RlbCB7XG5cdGNvbnN0cnVjdG9yKHcsIGgpIHtcblx0XHR0aGlzLncgPSB3IC0gdy8xMDAqMjU7XG5cdFx0dGhpcy5oID0gaDtcblxuXHRcdHRoaXMubW9sZWN1bGVzID0gW107XG5cblx0XHQvLyBpbml0IHRocmVlLmpzXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHRcdGFscGhhOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53LCB0aGlzLmgpO1xuXG5cdFx0dGhpcy53cmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsJyk7XG5cdFx0dGhpcy53cmFwLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgdGhpcy53IC8gdGhpcy5oLCAwLjEsIDEwMDApO1xuXHRcdHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuXHRcdHRoaXMub3JiaXQgPSBuZXcgVEhSRUUuT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LCB0aGlzLndyYXApO1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblx0XHR0aGlzLm1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHRoaXMubGlnaHRzID0gW107XG5cdFx0dGhpcy5saWdodHNbMF0gPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSwgMCk7XG5cdFx0dGhpcy5saWdodHNbMV0gPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSwgMCk7XG5cdFx0dGhpcy5saWdodHNbMl0gPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSwgMCk7XG5cblx0XHR0aGlzLmxpZ2h0c1swXS5wb3NpdGlvbi5zZXQoMCwgMjAwLCAwKTtcblx0XHR0aGlzLmxpZ2h0c1sxXS5wb3NpdGlvbi5zZXQoMTAwLCAyMDAsIDEwMCk7XG5cdFx0dGhpcy5saWdodHNbMl0ucG9zaXRpb24uc2V0KC0xMDAsIC0yMDAsIC0xMDApO1xuXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5saWdodHNbMF0pO1xuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHRzWzFdKTtcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0c1syXSk7XG5cblx0fVxuXG5cdHJlc2l6ZSh3LCBoKSB7XG5cdFx0dGhpcy53ID0gdztcblx0XHR0aGlzLmggPSBoO1xuXG5cdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gdGhpcy53L3RoaXMuaDtcblx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMudywgdGhpcy5oKTtcdFxuXHR9XG5cblx0YWRkTW9sZWN1bGUoZGF0YSkge1xuXHRcdGxldCBtb2wgPSBuZXcgTW9sZWN1bGUodGhpcywgdGhpcy5tb2xlY3VsZXMubGVuZ3RoLCBkYXRhKTtcblx0XHRyZXR1cm4gdGhpcy5tb2xlY3VsZXMucHVzaChtb2wpO1xuXHR9XG5cdHJlbW92ZU1vbGVjdWxlKGkpIHtcblx0XHRpZih0aGlzLm1vbGVjdWxlc1tpXSkge1xuXHRcdFx0dGhpcy5zY2VuZS5yZW1vdmUodGhpcy5tb2xlY3VsZXNbaV0uc3RhZ2UpO1xuXHRcdFx0dGhpcy5tb2xlY3VsZXMuc3BsaWNlKGksIDEpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMubG9vcCgpO1xuXHR9XG5cblx0bG9vcCgpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5sb29wKCkpO1xuXG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KHRoaXMuc2NlbmUucG9zaXRpb24pO1xuXHRcdHRoaXMuY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG5cblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2xlY3VsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMubW9sZWN1bGVzW2ldLnVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVsOyIsImNvbnN0IHB1YmNoZW0gPSByZXF1aXJlKCdwdWJjaGVtLWFjY2VzcycpLmRvbWFpbignY29tcG91bmQnKTtcblxuY29uc3Qga2V5ID0gcmVxdWlyZSgnLi9rZXknKTtcbnJlcXVpcmUoJy4vd2lraScpO1xuXG5tb2R1bGUuZXhwb3J0cy5zZWFyY2ggPSAocmVxLCBjYikgPT4ge1xuXHRsZXQgdHJhbnNsYXRlID0gJ2h0dHBzOi8vdHJhbnNsYXRlLnlhbmRleC5uZXQvYXBpL3YxLjUvdHIuanNvbi90cmFuc2xhdGU/JyArXG5cdFx0J2tleT0nICsga2V5ICtcblx0XHQnJnRleHQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZXEpICtcblx0XHQnJmxhbmc9cnUtZW4nXG5cblx0JC5nZXRKU09OKHRyYW5zbGF0ZSwgKGRhdGEpID0+IHtcblx0XHRsZXQgaW1hZ2UgPSAkKCcjaW5mbyAuaW1hZ2UnKS5lbXB0eSgpO1xuXHRcdGxldCBoZWFkZXIgPSAkKCcjaW5mbyAuaGVhZGVyJykuZW1wdHkoKTtcblx0XHRsZXQgZGVzY3JpcHRpb24gPSAkKCcjaW5mbyAuZGVzY3JpcHRpb24nKS5lbXB0eSgpO1xuXHRcdGxldCBtZXRhID0gJCgnI2luZm8gLm1ldGEnKS5lbXB0eSgpO1xuXG5cdFx0JCgnI2luZm8taWNvbicpLnNob3coKTtcblxuXHRcdHB1YmNoZW1cblx0XHRcdC5zZXROYW1lKGRhdGEudGV4dFswXSlcblx0XHRcdC5nZXRJVVBBQ05hbWUoKVxuXHRcdFx0LmV4ZWN1dGUoKGRhdGEsIHN0YXR1cykgPT4ge1xuXHRcdFx0XHRpZihzdGF0dXMgIT09IDEpIHtcblx0XHRcdFx0XHRjYi5lcnJvciAmJiBjYi5lcnJvcigpO1xuXHRcdFx0XHRcdCQoJyNpbmZvLWljb24nKS5hdHRyKCdjbGFzcycsICdpY29uIHN0aWNreSBub3RlIG91dGxpbmUnKTtcblx0XHRcdFx0XHRoZWFkZXIudGV4dChyZXFbMF0udG9VcHBlckNhc2UoKSArIHJlcS5zbGljZSgxKSk7XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24uZW1wdHkoKS5odG1sKGA8cD7Qn9C+INC30LDQv9GA0L7RgdGDIDxiPlwiJHtyZXF9XCI8L2I+INC90LXRgiDQtNCw0L3QvdGL0YUg0L3QsCDQktC40LrQuNC/0LXQtNC40LA8L3A+YCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IHdpa2kgPSAkKCc8ZGl2PjwvZGl2PicpLndpa2libHVyYih7XG5cdFx0XHRcdFx0d2lraVVSTDogXCJodHRwczovL3J1Lndpa2lwZWRpYS5vcmcvXCIsXG5cdFx0XHRcdFx0cGFnZTogcmVxLFxuXHRcdFx0XHRcdHNlY3Rpb246IDAsXG5cdFx0XHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdCQoJ2JvZHknKS5hcHBlbmQod2lraSk7XG5cdFx0XHRcdFx0XHRsZXQgdGFibGUgPSB3aWtpLmZpbmQoJy5pbmZvYm94IHRib2R5Jyk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKHRhYmxlWzBdKSB7XG5cdFx0XHRcdFx0XHRcdCQoJyNpbmZvLWljb24nKS5hdHRyKCdjbGFzcycsICdsYWIgaWNvbiBsb2FkaW5nJyk7XG5cdFx0XHRcdFx0XHRcdCQoJyNpbmZvLWljb24nKS5oaWRlKCk7XG5cblx0XHRcdFx0XHRcdFx0aGVhZGVyLnRleHQocmVxWzBdLnRvVXBwZXJDYXNlKCkgKyByZXEuc2xpY2UoMSkpO1xuXHRcdFx0XHRcdFx0XHRpbWFnZS5hcHBlbmQodGFibGUuZmluZCgndHIgaW1nJylbMF0pO1xuXG5cdFx0XHRcdFx0XHRcdGxldCB3aWtpRGVzYyA9IHdpa2kuZmluZCgnLm5icy13aWtpYmx1cmIgPiBwJyk7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uLmVtcHR5KCkuYXBwZW5kKHdpa2lEZXNjKTtcblxuXHRcdFx0XHRcdFx0XHQkKCcjaW5mbycpLnRyYW5zaXRpb24oJ3B1bHNlJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkKCcjaW5mby1pY29uJykuYXR0cignY2xhc3MnLCAnaWNvbiBzdGlja3kgbm90ZSBvdXRsaW5lJyk7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uLmVtcHR5KCkuaHRtbChgPHA+0J/QviDQt9Cw0L/RgNC+0YHRgyA8Yj5cIiR7cmVxfVwiPC9iPiDQvdC10YIg0LTQsNC90L3Ri9GFINC90LAg0JLQuNC60LjQv9C10LTQuNCwPC9wPmApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IGNpZCA9IGRhdGEuUHJvcGVydHlUYWJsZS5Qcm9wZXJ0aWVzWzBdLkNJRDtcblx0XHRcdFx0bGV0IHVybDNkID0gYGh0dHBzOi8vcHViY2hlbS5uY2JpLm5sbS5uaWguZ292L3Jlc3QvcHVnL2NvbXBvdW5kL2NpZC8ke2NpZH0vcmVjb3JkL0pTT04vP3JlY29yZF90eXBlPTNkJnJlc3BvbnNlX3R5cGU9ZGlzcGxheWA7XG5cdFx0XHRcdGxldCB1cmwyZCA9IGBodHRwczovL3B1YmNoZW0ubmNiaS5ubG0ubmloLmdvdi9yZXN0L3B1Zy9jb21wb3VuZC9jaWQvJHtjaWR9L3JlY29yZC9KU09OLz9yZWNvcmRfdHlwZT0yZCZyZXNwb25zZV90eXBlPWRpc3BsYXlgO1xuXHRcdFx0XHQkLmdldEpTT04odXJsM2QpXG5cdFx0XHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0XHRcdGNiLmRvbmUgJiYgY2IuZG9uZShkYXRhKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5mYWlsKCgpID0+IHtcblx0XHRcdFx0XHRcdGNiLmVycm9yICYmIGNiLmVycm9yKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdH0sICdKU09OJywgJ3JhdycpO1xuXHR9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cz1cInRybnNsLjEuMS4yMDE3MDQwNlQxMTM4MTVaLjkwMmYyZjA1YWE0OTA3OWIuZjk5OTQ3MDEwZjhjNmI1MWNhZDZhMGMzZWY3OTBjZWI5ZWZiZjhhM1wiIiwiLypcbiogRmlsZToganF1ZXJ5Lndpa2libHVyYi5qc1xuKiBWZXJzaW9uOiAxLjAuMFxuKiBEZXNjcmlwdGlvbjogQSBzaW1wbGUgalF1ZXJ5IHBsdWdpbiB0byBnZXQgc2VjdGlvbnMgb2YgV2lraXBlZGlhIGFuZCBvdGhlciBXaWtpc1xuKiBBdXRob3I6IDliaXQgU3R1ZGlvc1xuKiBDb3B5cmlnaHQgMjAxMiwgOWJpdCBTdHVkaW9zXG4qIGh0dHA6Ly93d3cuOWJpdHN0dWRpb3MuY29tXG4qIEZyZWUgdG8gdXNlIGFuZCBhYnVzZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4qL1xuXG4kLmZuLndpa2libHVyYiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cblx0dmFyIGRlZmF1bHRzID0gJC5leHRlbmQoe1xuXHR3aWtpVVJMOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy9cIixcblx0YXBpUGF0aDogJ3cnLFxuXHRzZWN0aW9uOiAwLFxuXHRwYWdlOiAnSmltaV9IZW5kcml4Jyxcblx0cmVtb3ZlTGlua3M6IGZhbHNlLFx0ICAgIFxuXHR0eXBlOiAnYWxsJyxcblx0Y3VzdG9tU2VsZWN0b3I6ICcnLFxuXHRcdGZpbHRlclNlbGVjdG9yOiAnJywgXG5cdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKCl7IH1cblx0fSwgb3B0aW9ucyk7XG5cdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuUHJpdmF0ZSBWYXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovICAgICAgICAgXG5cbnZhciBvYmplY3QgPSAkKHRoaXMpO1xudmFyIHNldHRpbmdzID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5QdWJsaWMgTWV0aG9kc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8gICAgICAgICBcblx0XG5cdHZhciBtZXRob2RzID0ge1xuXHRcdFxuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0bWV0aG9kcy5hcHBlbmRIVE1MKCk7XG5cdFx0bWV0aG9kcy5pbml0aWFsaXplSXRlbXMoKTtcblx0fSk7XG5cdH0sXG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRVdGlsaXRpZXNcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cdFx0XHRcblxuXHRhZGRVbmRlcnNjb3JlczogZnVuY3Rpb24ocGFnZSkge1xuXHRpZihwYWdlLnRyaW0oKS5pbmRleE9mKCcgJykgIT09IC0xKSB7XG5cdFx0XHRcdHBhZ2UucmVwbGFjZSgnICcsICdfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFnZTtcblx0fSwgICAgICAgICAgICBcblx0XHRcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRBcHBlbmQgSFRNTFxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1x0XHRcdFxuXG5cdGFwcGVuZEhUTUw6IGZ1bmN0aW9uKCkge1xuXHQvLyBub3RoaWluZyB0byBhcHBlbmRcblx0fSxcblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdEluaXRpYWxpemVcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cdFx0XHRcblxuXHRpbml0aWFsaXplSXRlbXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XG5cdFx0XHR2YXIgcGFnZSA9IG1ldGhvZHMuYWRkVW5kZXJzY29yZXMoc2V0dGluZ3MucGFnZSk7XG5cdFx0XHRcblx0JC5hamF4KHtcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdHVybDogc2V0dGluZ3Mud2lraVVSTCArIHNldHRpbmdzLmFwaVBhdGggKyBcIi9hcGkucGhwP2FjdGlvbj1wYXJzZSZmb3JtYXQ9anNvbiZwcm9wPXRleHQmc2VjdGlvbj1cIitzZXR0aW5ncy5zZWN0aW9uK1wiJnBhZ2U9XCIrc2V0dGluZ3MucGFnZStcIiZjYWxsYmFjaz0/XCIsXG5cdFx0Y29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGRhdGFUeXBlOiBcImpzb25cIixcblx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBtYXJrdXAgPSBkYXRhLnBhcnNlLnRleHRbXCIqXCJdO1xuXHRcdFx0XHR2YXIgYmx1cmIgPSAkKCc8ZGl2IGNsYXNzPVwibmJzLXdpa2libHVyYlwiPjwvZGl2PicpLmh0bWwobWFya3VwKTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbGlua3M/XG5cblx0XHRcdFx0aWYoc2V0dGluZ3MucmVtb3ZlTGlua3MpIHtcblx0XHRcdFx0Ymx1cmIuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7IFxuXHRcdFx0XHRcdCQodGhpcykucmVwbGFjZVdpdGgoJCh0aGlzKS5odG1sKCkpOyBcblx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGJsdXJiLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBsaW5rID0gJCh0aGlzKTtcblx0XHRcdFx0XHR2YXIgcmVsYXRpdmVQYXRoID0gbGluay5hdHRyKCdocmVmJykuc3Vic3RyaW5nKDEpOyAvLyByZW1vdmUgbGVhZGluZyBzbGFzaFxuXHRcdFx0XHRcdGxpbmsuYXR0cignaHJlZicsIHNldHRpbmdzLndpa2lVUkwgKyByZWxhdGl2ZVBhdGgpOyBcblx0XHRcdFx0fSk7XHRcdFx0ICAgIFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIGFueSByZWZlcmVuY2VzXG5cdFx0XHRcdGJsdXJiLmZpbmQoJ3N1cCcpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBjaXRlIGVycm9yXG5cdFx0XHRcdGJsdXJiLmZpbmQoJy5tdy1leHQtY2l0ZS1lcnJvcicpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdC8vIGZpbHRlciBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRpZihzZXR0aW5ncy5maWx0ZXJTZWxlY3RvcikgeyBcblx0XHRcdFx0XHRcdFx0XHRibHVyYi5maW5kKHNldHRpbmdzLmZpbHRlclNlbGVjdG9yKS5yZW1vdmUoKTsgXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRzd2l0Y2goc2V0dGluZ3MudHlwZSkge1xuXHRcdFx0XHRjYXNlICd0ZXh0JzpcdFx0XHRcdFxuXHRcdFx0XHRcdG9iamVjdC5odG1sKCQoYmx1cmIpLmZpbmQoJ3AnKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdGNhc2UgJ2JsdXJiJzpcblx0XHRcdFx0XHRvYmplY3QuaHRtbCgkKGJsdXJiKS5maW5kKCdwOmZpcnN0JykpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcblx0XHRcdFx0Y2FzZSAnaW5mb2JveCc6XG5cdFx0XHRcdFx0b2JqZWN0Lmh0bWwoJChibHVyYikuZmluZCgnLmluZm9ib3gnKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdGNhc2UgJ2N1c3RvbSc6XG5cdFx0XHRcdFx0b2JqZWN0Lmh0bWwoJChibHVyYikuZmluZChzZXR0aW5ncy5jdXN0b21TZWxlY3RvcikpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRvYmplY3QuaHRtbChibHVyYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2goZSkge1xuXHRcdFx0XHRtZXRob2RzLnNob3dFcnJvcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXR0aW5ncy5jYWxsYmFjaygpO1xuXHRcdFxuXHRcdH0sXG5cdFx0ZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcblx0XHRcdG1ldGhvZHMuc2hvd0Vycm9yKCk7XG5cdFx0fVxuXHR9KTtcblx0fSxcblx0XG5cdHNob3dFcnJvcjogZnVuY3Rpb24oKXtcblx0XHRvYmplY3QuaHRtbCgnPGRpdiBjbGFzcz1cIm5icy13aWtpYmx1cmItZXJyb3JcIj5UaGVyZSB3YXMgYW4gZXJyb3IgbG9jYXRpbmcgeW91ciB3aWtpIGRhdGE8L2Rpdj4nKTtcblx0fVxuXG5cdH07XG5cdFxuXHRpZiAobWV0aG9kc1tvcHRpb25zXSkgeyAvLyAkKFwiI2VsZW1lbnRcIikucGx1Z2luTmFtZSgnbWV0aG9kTmFtZScsICdhcmcxJywgJ2FyZzInKTtcblx0XHRyZXR1cm4gbWV0aG9kc1tvcHRpb25zXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHsgXHQvLyAkKFwiI2VsZW1lbnRcIikucGx1Z2luTmFtZSh7IG9wdGlvbjogMSwgb3B0aW9uOjIgfSk7XG5cdFx0cmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzKTsgIFxuXHR9IGVsc2Uge1xuXHRcdCQuZXJyb3IoICdNZXRob2QgXCInICsgIG1ldGhvZCArICdcIiBkb2VzIG5vdCBleGlzdCBpbiB3aWtpYmx1cmIgcGx1Z2luIScpO1xuXHR9IFxufTsiLCJjb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4vTW9kZWwnKTtcbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4vYXBpJyk7XG5cbnZhciBtb2RlbCA9IG5ldyBNb2RlbCh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbm1vZGVsLnN0YXJ0KCk7XG4gXG4kKCcjc2VhcmNoLWZvcm0nKS5vbignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcmVxID0gJCgnI3NlYXJjaCcpLnZhbCgpO1xuICAgICQoJyNsb2FkZXInKS5zaG93KCk7XG5cbiAgICBtb2RlbC5yZW1vdmVNb2xlY3VsZSgwKTtcbiAgICAkKCcjZXJyb3InKS5oaWRlKCk7XG5cbiAgICBhcGkuc2VhcmNoKHJlcSwge1xuICAgIFx0ZG9uZTogKGRhdGEpID0+IHtcblx0ICAgIFx0JCgnI2xvYWRlcicpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJyNtb2RlbCcpLmNzcygnb3BhY2l0eScsIDApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKCcjbW9kZWwnKS5hbmltYXRlKHtvcGFjaXR5OiAxfSwgMTAwMCksIDUwMCk7XG4gICAgICAgICAgICBtb2RlbC5hZGRNb2xlY3VsZShkYXRhKTtcblx0ICAgIH0sXG4gICAgXHRlcnJvcjogKCkgPT4ge1xuICAgIFx0XHQkKCcjbG9hZGVyJykuaGlkZSgpO1xuICAgIFx0XHQkKCcjZXJyb3InKS5zaG93KCkudHJhbnNpdGlvbigncHVsc2UnKTtcbiAgICBcdFx0JCgnI2Vycm9yLWluZm8nKS50ZXh0KGDQktC10YnQtdGB0YLQstCwINC/0L4g0LfQsNC/0YDQvtGB0YMgXCIke3JlcX1cIiDQvdC10YIg0LIg0LHQsNC30LUg0LTQsNC90L3Ri9GFIFB1YkNoZW1gKTtcbiAgICBcdH1cbiAgICB9KTtcbn0pO1xuXG4kKCcjZXJyb3InKS5oaWRlKCk7XG4kKCcjbG9hZGVyJykuaGlkZSgpO1xuJCgnI3NlYXJjaCcpLnZhbCgn0JvQodCUJyk7XG4kKCcjc2VhcmNoLWZvcm0nKS5zdWJtaXQoKTtcblxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuXHRtb2RlbC5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG59XG4iXX0=
