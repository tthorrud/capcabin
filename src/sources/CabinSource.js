import CabinActions from '../actions/CabinActions';

var CabinSource = {
    fetchCabins() {
        return {
            remote() {
                return new Promise(function (resolve, reject) {
                    // simulate an asynchronous flow where data is fetched on
                    // a remote server somewhere.
                    fetch('https://localhost/api/cabins', {
                        method: 'get',
                        mode: 'cors'
                    }).then(function (response){
                        return response.json();
                    }).then(function(response) {
                        resolve(response);
                    }).catch(function(err) {
                        reject("ERROR" + err);
                    });
                   
                });
            },

            local() {
                // Never check locally, always fetch remotely.
                return null;
            },

            success: CabinActions.updateCabins,
            error: CabinActions.cabinsFailed,
            loading: CabinActions.fetchCabins
        }
    }
};

export default CabinSource;