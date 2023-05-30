import API from '../api';

export async function getprofiles(){
  try {
    const response = await API.get(`/api/profiles`);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export async function addProfile(payload) {
  let profileData;
  try {
    const res = await API.post('/api/profile', payload);
    profileData = res.data;
    return profileData;
  } catch (error) {
    console.log(error.response.data);
    return false;
  }
}

export async function updateProfile(id, payload){
  try {
    const response = await API.put(`/api/profile/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return false;
  }
};