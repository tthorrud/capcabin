import alt from '../alt';
import CabinActions from '../actions/CabinActions';
import CabinSource from '../sources/CabinSource';


class CabinStore {
    constructor() {
        this.cabins = [];
        this.errorMessage = null;
        this.text = "CabinStoreProp";
        
        this.bindAction(CabinActions.updateCabins, this.handleUpdateCabins);
        this.bindAction(CabinActions.fetchCabins, this.handleFetchCabins);
        this.bindAction(CabinActions.cabinsFailed, this.handleCabinsFailed);

        this.exportPublicMethods({
            getCabin: this.getCabin
        });

        this.exportAsync(CabinSource);
    }

    handleUpdateCabins(cabins) {
        this.cabins = cabins;
        this.errorMessage = null;
    }

    handleFetchCabins() {
        this.cabins = [];
    }

    handleCabinsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }


    getCabin(id) {
        var { cabins } = this.getState();
        for (var i = 0; i < cabins.length; i += 1) {
            if (cabins[i].id === id) {
                return cabins[i]; 
            }
        }

        return null;
    }
}

export default alt.createStore(CabinStore, 'CabinStore');