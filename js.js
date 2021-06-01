(function () {
    var setting = { "height": 531, "width": 728, "zoom": 11, "queryString": "Liège, Belgique", "place_id": "ChIJ-_ysjkv3wEcRQGtNL6uZAAQ", "satellite": false, "centerCoord": [50.62468296077539, 5.5990950503947445], "cid": "0x40099ab2f4d6b40", "lang": "fr", "cityUrl": "/belgium/liege-2614", "cityAnchorText": "Carte de Liège, Ardennes belges, Belgique", "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3", "embed_id": "510520" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=510520';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();