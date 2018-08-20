myApp.controller('SaleController', function($http) {
    let vm = this;
    getSale();

    function getSale() {
        
        $http({
            method: 'GET',
            url: '/sale'
        }).then(function (response){
            console.log('back from server with:', response.data);
            vm.sale = response.data;
        }).catch(function(error){
            alert('Error in GET', error);
        });
    }//end of get function


    vm.deleteSale= function(deleted) {
        console.log(deleted);
        $http({
            method: 'DELETE',
            url: '/sale/' + deleted
        }).then(function(response) {
            getSale();
            alert('removed');
        }).catch(function(error){
            console.log('Error deleting request:', error);
        });//end DELETE        
    }
})