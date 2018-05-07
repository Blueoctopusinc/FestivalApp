$('#mydiv').datepicker();

$('#text').change(function(){
    $('#mydiv').datepicker('setDate', $(this).val());
});
$('#mydiv').change(function(){
    $('#text').attr('value',$(this).val());
});
