import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer AqjHvsL15olsYXRO9k95XODKGBqHeJHa_3WP278Yu95ashbM1NXB_dPnLS6aDgmks0bcqvqbA52kH0YLvrcz1FeXML_iIb-ApOPNqDTJENGjVJhADFeoemPVvi5xXXYx'
    }
});