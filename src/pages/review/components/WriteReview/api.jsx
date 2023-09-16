import axios from "axios";

const postReview = async (data, inputRef, token) => {
  const formData = new FormData();
  formData.append("images", inputRef.current.files[0]);

  formData.append(
    "body",
    new Blob(
      [
        JSON.stringify({
          content: data.content,
          email: "123",
          score: data.rating,
          storeId: 1,
        }),
      ],
      { type: "application/json" },
    ),
  );

  axios.defaults.headers.common.Authorization = `${token}`;
  const response = await axios
    .post(`/api/review`, formData, {
      "Content-Type": "application/json",
      "withCredentials": true,
      "Authorization": token,
    })
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      // console.error(error);
      throw error;
    });
  return response;
};
export default postReview;
