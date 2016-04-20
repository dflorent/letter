(function($) {
    moment.locale('fr', {
        months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_")
    });

    // date
    $('#date').html(moment().format('DD MMMM YYYY'));

    // geolocation
    navigator.geolocation.getCurrentPosition(function(position) {
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        geocoder.geocode({latLng: latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                $('#city').html(results[0].address_components[2].long_name);
            }
        });
    });

    // print
    $('#print').click(function(e) {
        e.preventDefault();
        window.print();
    });
})(jQuery);
