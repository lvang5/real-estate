myApp.controller('HomeController', function ($http) {
    let vm = this;
    
    
    vm.addHome = function () {
        console.log('In POST');
        
        $http({
            method: 'POST',
            url: '/newHome',
            data: {
                cost: vm.cost,
                sqft: vm.sqft,
                type: vm.saleOrRent,
                city: vm.city,
                image_path: vm.image
            }
        }).then(function (response) {
        console.log('In POST response', response.data);
    }).catch(function (error) {
        console.log('Error in POST', error);
    });
}
    
})