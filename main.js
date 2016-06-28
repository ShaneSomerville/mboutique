/**
 * Created by somer on 5/17/2016.
 */
$(document).ready(function(){
    $('.american_logo').on('click', function(){
        console.log('success! USA');
        language_adapter('american');
    });
    $('.french_logo').on('click', function () {
        console.log('success! french');
        language_adapter('french');
    })
});
function language_adapter(language){
    switch (language){
        case 'american':
            american_english_adapter();
            break;
        case 'french':
            french_adapter();
            break;
    }
}
function american_english_adapter(){
    for(var i= 0;i<english.length; i++){
        $(english[i].class).html(english[i].text);
    }
}
function french_adapter() {
    for(var i=0;i<french.length;i++){
        $(french[i].class).html(french[i].text);
    }
}