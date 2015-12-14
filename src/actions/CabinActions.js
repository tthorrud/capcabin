import alt from '../alt';


class CabinActions {
    updateCabins(cabins) {
        this.dispatch(cabins);
    }

    fetchCabins() {
        this.dispatch();
    }

    cabinsFailed(errorMessage) {
        this.dispatch(errorMessage);
    }
}

export default alt.createActions(CabinActions);   