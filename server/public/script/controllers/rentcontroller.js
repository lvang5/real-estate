myApp.controller('RentalController', function($http) {
    let vm = this;
    getRental();
    

    function getRental() {
        
        $http({
            method: 'GET',
            url: '/rental'
        }).then(function (response){
            console.log('back from server with:', response.data);
            vm.rentals = response.data;
        }).catch(function(error){
            alert('Error in GET', error);
        });
    }//end of get function


    vm.deleteRental = function(deleted) {
        console.log(deleted);
        $http({
            method: 'DELETE',
            url: '/rental/' + deleted
        }).then(function(response) {
            getRental();
            alert('removed');
        }).catch(function(error){
            console.log('Error deleting request:', error);
        });//end DELETE        
    }
    
})