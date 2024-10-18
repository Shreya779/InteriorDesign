var furnitureSelection = [];
var lightingSelection = [];

$(document).ready(function(){
    $('#width, #length').on('input change', function(){
        $('#'+this.id+'-value').text($(this).val() + ' ft');
        $('#'+this.id+'-input').val($(this).val());
    });

    $('#width-input, #length-input').on('input change', function(){
        $('#'+this.id.replace('-input', '')).val($(this).val());
        $('#'+this.id.replace('-input', '')+'-value').text($(this).val() + ' ft');
    });

    $('#next-dimension-button').click(function(){
        $('#dimensions-form').hide();
        $('#sofa-selection').show();
        $('#back-sofa-button').show();
        $('#next-sofa-button').show();
    });

    $('#back-sofa-button').click(function(){
        $('#sofa-selection').hide();
        $('#dimensions-form').show();
        $('#back-sofa-button').hide();
        $('#next-sofa-button').hide();
    });

    $('#next-sofa-button').click(function(){
        $('#sofa-selection').hide();
        $('#furniture-selection').show();
        $('#back-furniture-button').show();
        $('#next-furniture-button').show();
    });

    $('#back-furniture-button').click(function(){
        $('#furniture-selection').hide();
        $('#sofa-selection').show();
        $('#back-furniture-button').hide();
        $('#next-furniture-button').hide();
    });

    $('#next-furniture-button').click(function(){
        $('#furniture-selection').hide();
        $('#lighting-selection').show();
        $('#back-lighting-button').show();
        $('#next-lighting-button').show();
    });

    $('#back-lighting-button').click(function(){
        $('#lighting-selection').hide();
        $('#furniture-selection').show();
        $('#back-lighting-button').hide();
        $('#next-lighting-button').hide();
    });

    $('#next-lighting-button').click(function(){
        $('#lighting-selection').hide();
        $('#paint-selection').show();
        $('#back-paint-button').show();
        $('#submit-button').show();
    });

    $('#back-paint-button').click(function(){
        $('#paint-selection').hide();
        $('#lighting-selection').show();
        $('#back-paint-button').hide();
        $('#submit-button').hide();
    });

    

    // Handle form submission
    $('#submit-button').click(function(){
        var width = $('#width').val();
        var length = $('#length').val();
        var sofaType = $('input[name="sofa-type"]:checked').val();
        var paintType = $('input[name="paint-type"]:checked').val();

        // Capture furniture selection
    var furnitureSelection = [];
    $('input[name="living-area-furniture[]"]:checked').each(function() {
        furnitureSelection.push($(this).val());
    });

    // Capture lighting selection
    var lightingSelection = [];
    $('input[name="living-area-lighting[]"]:checked').each(function() {
        lightingSelection.push($(this).val());
    });

        console.log("Width: " + width);
        console.log("Length: " + length);
        console.log("Sofa type: " + sofaType);
        console.log("Furniture type: " + furnitureSelection.join(', ')); // Join furniture array into a string
        console.log("Lighting type: " + lightingSelection.join(', '));
        console.log("Paint type: " + paintType);

        $.ajax({
            type: "POST",
            url: "form.php",
            data: { 
                width: width, 
                length: length, 
                'sofa-type': sofaType, 
                'living-area-furniture[]': furnitureSelection, 
                'living-area-lighting[]': lightingSelection, 
                'paint-type': paintType 
            },
            success: function(response){
                console.log(response);
                alert("Form submitted successfully");
                window.location.href = 'summary_page.php';
            },
            error: function(xhr, status, error){
                console.log(xhr.responseText);
                alert("Error submitting form");
            }
        });
    });
});
