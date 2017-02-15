



/* ControlTag Loader for Scout24 CH cf4c9b3f-b2c1-44c3-909b-2666ae1783da */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.18.1","schema_version":3},"confid":"rb4iys6mk","context_terms":[],"publisher":{"id":2225,"name":"Scout24 CH","uuid":"cf4c9b3f-b2c1-44c3-909b-2666ae1783da","version_bucket":"stable","version_hash":"9b011501452f200c61e59ab807d974c3"},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"user_data_timing":"load","store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"dfp_premium":true,"control_tag_namespace":"scout24ch"},"prioritized_segments":[],"realtime_segments":[{"id":"rim353yeg","test":["and",["and",["or",["intersects","$page_attr_category_level_id1",["21"]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"//connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"//apiservices.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"//link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"//apiservices.krxd.net/um","click":"//apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","is_optout":"//beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","set_optin":"//apiservices.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"site":{"id":1650456,"name":"AutoScout24 mWeb"},"tags":[{"id":28801,"name":"AppNexus Connect - Scout24 CH","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\n            var i = new Image();\n            i.src = appnexus_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":28969,"name":"LiveRamp User Match UM","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;     \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":28970,"name":"DataLogix User Match UM","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":28971,"name":"IXI Digital Open Market User Match UM","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":28972,"name":"Visual DNA User Match UM","content":"<script>\nnew Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":28729,"name":"Optimizely - Scout24 CH","content":"<script>\n(function(){\n    var _prefix = Krux('require:store').prefix;\n    localStorage.setItem(_prefix + 'segs_partner', localStorage.getItem(_prefix + 'segs'));\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":28560,"name":"Auto/MotoScout24 dataLayer Ingester DTC","content":"<script>\n(function() {\n\n    var page = ['search_bodyType', 'listing_bodyType', 'search_co2emiTo', 'search_cond', 'listing_cond', 'search_consrat', 'search_fuelType', 'listing_fuelType', 'search_makeName', 'listing_makename', 'search_makeName1', 'listing_makename1', 'search_modelName', 'listing_modelName', 'search_modelName1', 'listing_modelName1', 'listing_price', 'search_priceFrom', 'search_priceTo', 'search_vehType', 'listing_vehType', 'search_loc', 'listingZipcode'],\n        user = ['customerType', 'userAccountId'],\n        p;\n\n    var checkOver = function(arr, dl, type) {\n        var j, dllen = dl.length;\n        for (j = 0; j < dllen; j++) {\n            var i, len = arr.length;\n            for (i = 0; i < len; i++) {\n                if (arr.hasOwnProperty(i) && dl[j][arr[i]] && arr[i] === 'listing_price') {\n                    p = dl[j][arr[i]];\n                } else if (arr.hasOwnProperty(i) && dl[j][arr[i]]) {\n                    dataObj[type][arr[i]] = dl[j][arr[i]];\n                }\n            }\n        }\n    };\n\n    if (window.dataLayer) {\n        var dl = window.dataLayer;\n        var dataObj = {\n            page: {},\n            user: {}\n        };\n        checkOver(page, dl, 'page');\n        checkOver(user, dl, 'user');\n\n        var userKeys = 'user',\n            omitKeys = 'none123',\n            custDelimit = 'toDelimit123',\n            prefix = 'undefined_',\n            config = {\n                'userKeys': userKeys ? userKeys.split(',') : undefined,\n                'omitKeys': omitKeys ? omitKeys.split(',') : [],\n                'customDelimited': custDelimit ? custDelimit.split(',') : undefined,\n                'caseSensitive': 'false' === 'true',\n                'useFullPath': 'false' === 'true',\n                'useLastValue': 'false' === 'true',\n                'convertAttrNames': []\n            },\n            domain = Krux('get', 'page_attr_domain');\n\n        if (domain.match(/autoscout24/)) {\n            prefix = 'at24_';\n        } else if (domain.match(/motoscout24/)) {\n            prefix = 'mt24_';\n        }\n\n        if (!prefix.match(/^$|null|undefined|false/)) {\n            config.convertAttrNames.push({\n                pattern: /((?:page|user)_attr_)/,\n                replacement: '$1' + prefix\n            });\n        }\n        config.omitKeys.push(/gtm\\./);\n        Krux('ingestDataLayer', dataObj, config);\n\n        if (p) {\n            var rangeTool = Krux('require:util').numberToRangeBucket,\n                range;\n\n            // adding spaces will ensure values are correctly ordered in the UI value picker\n            if (p <= 5000) {\n                range = '      ' + rangeTool(p, 1000);\n            } else if (p <= 25000) {\n                range = '     ' + rangeTool(p, 2500);\n            } else if (p <= 50000) {\n                range = '    ' + rangeTool(p, 5000);\n            } else if (p <= 100000) {\n                range = '   ' + rangeTool(p, 10000);\n            } else if (p <= 300000) {\n                range = '  ' + rangeTool(p, 25000);\n            } else if (p > 300000) {\n                range = ' ' + rangeTool(p, 300000, 0, 300000);\n            }\n\n            Krux('set', 'page_attr_' + prefix + 'price_buckets', range);\n        }\n    }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":28670,"name":"PubMatic User Match UM","content":"<script>\n(function(){\n\n    window.pubId = 67137;\n    window.pixId = 337;\n    var protocol = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n    if (protocol == 'http:') {\n        var js = document.createElement('script');\n        js.type = 'text/javascript';\n        js.src = 'http://ads.pubmatic.com/AdServer/js/universalpixel.js';\n        document.getElementsByTagName('script')[0].appendChild(js);\n    }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":27648,"name":"Krux Standard DTC","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","internal":true,"template_replacement":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
   */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.9b011501452f200c61e59ab807d974c3', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
