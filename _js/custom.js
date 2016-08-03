$(document).ready(function() {
    //$('#fullpage').fullpage();
    
    $('#contactOptions img').mouseenter(function () {
        var medium = $(this).attr('id');
        switch (medium){
            case ('facebook'):
                 $('#toolTip span').text("Connect via Facebook");
                 break;
            case ('behance'):
                 $('#toolTip span').text("View Portfolio on Behance");
                 break;
            case ('tweet'):
                 $('#toolTip span').text("Follow me on Twitter");
                 break;
            case ('whatsapp'):
                 $('#toolTip span').text("Leave a message on Whatsapp (+923004466173)");
                 break;
            case ('linked'):
                 $('#toolTip span').text("View LinkedIn profile");
                 break;
            case ('email'):
                 $('#toolTip span').text("Send me an E-Mail at \'ask@haseebdanyal.com\'");
                 break;
            case ('resume'):
                 $('#toolTip span').text("Download/View my Resume");
                 break;
            case ('medium'):
                 $('#toolTip span').text("Read my scribbles on Medium");
                 break;
            
        }
    });
    
    
    $('#contactOptions img').hover(function () {
        $(this).toggleClass('activeMedium');
    });

});