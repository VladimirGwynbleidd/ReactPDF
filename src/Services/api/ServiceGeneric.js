import axios from "axios";
// import { Response, Error } from '../api/reponse'

const API = "https://localhost:7035/api";

export const GetAPI = async (url) => {
  console.log(url);
  let urlAPI = `${API}/${url}`;
  console.log(urlAPI);
  const reponseAPI = await axios
    .get(urlAPI)
    .then((res) => {
      return Response(res);
    })
    .catch((err) => {
      return Error(err);
    });

  return reponseAPI;
};

export const GetAPIByID = async (url, request) => {
  console.log(request);
  let urlAPI = `${API}/${url}`;
  console.log(urlAPI);
  const reponseAPI = await axios
    .get(urlAPI, {
      params: {
        id: request.id,
        startDate: request.startDate,
        endDate: request.endDate,
      },
    })
    .then((res) => {
     return res;
    })
    .catch((err) => {
      Error(err);
    });
    console.log("reponseAPI");
    console.log(reponseAPI);

  return reponseAPI;
};

export const CreateAPI = async (url, request) => {
  let urlAPI = `${API}/${url}`;
  const responseAPI = await axios
    .post(urlAPI, request)
    .then((res) => {
      Response(res);
    })
    .catch((err) => {
      Error(err);
    });
  return responseAPI;
};

export const UpdateAPI = async (url, request) => {
  let urlAPI = `${API}/${url}`;
  axios
    .patch(urlAPI, request)
    .then((res) => {
      Response(res);
    })
    .catch((err) => {
      Error(err);
    });
};

export const DeleteAPI = async (url, request) => {
  let urlAPI = `${url}/${url}`;
  const responseAPI = await axios
    .delete(urlAPI)
    .then((res) => {
      Response(res);
    })
    .catch((err) => {
      Error(err);
    });

  return responseAPI;
};

function Response(response) {
  // console.log("response");
  // console.log(response);
  if (response.status == 200) {
    console.log("status");
    return response.data;
  }
  if (response.data) {
    return response.data;
  }
  return response;
}

function Error(error) {
  if (error.data) {
    return error.data;
  }
  return error;
}

export const ServiceGeneric = {
  GetAPI,
  GetAPIByID,
  CreateAPI,
  UpdateAPI,
  DeleteAPI,
};
