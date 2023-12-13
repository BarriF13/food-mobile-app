import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer LrZ_nhCAW8SZG84_IFfH8Qo-BMP1wOtMvWWTXjjorvszMjySNWJeIf4u0rv9eUF7n4Clpax1eT2A8LkDC1h48YImHsu3DuOAOtjQfnje-5kn2F4UbKYIzE0ZqKi6ZHYx' 
  }
});
