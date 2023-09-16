import React, { useCallback, useRef, useState } from "react";
import { Button, Rating, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRecoilState } from "recoil";
import StyledTextField from "./style";
import { tokenState } from "../../../../token/tokenState";

const postReview = async (data, inputRef, token) => {
  if (!inputRef.current) return;

  const formData = new FormData();
  formData.append("images", inputRef.current.files[0]);

  formData.append(
    "body",
    new Blob(
      [
        JSON.stringify({
          content: data.content,
          email: "asd2@naver.com",
          score: data.rating,
          storeId: 1,
        }),
      ],
      { type: "application/json" },
    ),
  );

  axios.defaults.headers.common.Authorization = `${token}`;
  await axios
    .post(`/api/review`, formData, {
      "Content-Type": "application/json",
      "withCredentials": true,
      "Authorization": "asdadasdldsgjskfghjkdghjkdgjhsfds",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default function WriteReview() {
  const [data, setData] = useState({ content: "", rating: 5 });
  const inputRef = useRef(null);
  const [token] = useRecoilState(tokenState);

  const onSubmit = () => {
    if (!inputRef.current) return;

    postReview(data, inputRef, token);
  };

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <Stack spacing={4} sx={{ py: 4 }}>
      <Stack spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">식당이름</Typography>
          <Button onClick={onSubmit}>리뷰 게시하기</Button>
        </Stack>
        <Typography variant="body2">별점을 선택해 주세요.</Typography>
        <Rating
          defaultValue={5}
          precision={0.5}
          value={data.rating}
          onChange={(_, newValue) => {
            setData((prev) => ({ ...prev, rating: newValue }));
          }}
        />
      </Stack>

      <StyledTextField
        fullWidth
        value={data.content}
        onChange={(e) =>
          setData((prev) => ({ ...prev, content: e.target.value }))
        }
        label="내용"
        multiline
        rows={6}
      />

      <Button fullWidth onClick={onUploadImageButtonClick}>
        사진 추가하기
      </Button>

      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        ref={inputRef}
        // onChange={onUploadImage}
      />
    </Stack>
  );
}
