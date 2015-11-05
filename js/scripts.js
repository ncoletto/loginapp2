$( document ).on( "pageinit", "#mapa", function() {
    $( document ).on( "swipeleft swiperight", "#mapa", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel1" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel1" ).panel( "open" );
            }
        }
    });
});



$( document ).on( "pageinit", "#tiempo", function() {
    $( document ).on( "swipeleft swiperight", "#tiempo", function( f ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( f.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( f.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});



$( document ).on( "pageinit", "#bluetooth", function() {
    $( document ).on( "swipeleft swiperight", "#bluetooth", function( f ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( f.type === "swipeleft"  ) {
                $( "#right-panel2" ).panel( "open" );
            } else if ( f.type === "swiperight" ) {
                $( "#left-panel2" ).panel( "open" );
            }
        }
    });
});


