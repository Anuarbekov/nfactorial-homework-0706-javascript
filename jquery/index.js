$('document').ready(() => {
    $('.weather').on('click', function(){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=43.238949&lon=76.889709&appid=361ebb12802e23acedfab01998e0a8d0&units=metric",
            type: 'GET',
            success: function(result) {
                const temp = result["main"].temp;
                document.getElementById('text').innerHTML = temp;
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
    
})