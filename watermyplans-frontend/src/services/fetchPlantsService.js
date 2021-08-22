import { axiosWithAuth } from '../helpers/axiosWithAuth';

const fetchPlantService = () => {
    return axiosWithAuth()
    .get()
    .then((response) => response)
    .catch((error) => error)
}

export default fetchPlantService;