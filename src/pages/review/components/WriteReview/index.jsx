import React, { useCallback, useRef, useState } from "react";
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { StyledImg, StyledTextField } from "./style";
import { tokenState } from "../../../../token/tokenState";
import postReview from "./api";

export default function WriteReview() {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState("");
  const [data, setData] = useState({ content: "", rating: 5 });
  const inputRef = useRef(null);
  const [token] = useRecoilState(tokenState);

  const saveImgFile = () => {
    if (!inputRef.current) return;
    const file = inputRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const onSubmit = () => {
    if (!inputRef.current) return;
    postReview(data, inputRef, token).then((res) => {
      if (res.result) navigate("/");
    });
  };

  const removeImg = () => {
    setImgFile("");
  };

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) return;

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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <StyledImg src={imgFile || `https://via.placeholder.com/300.jpg`} />
      </Box>

      {!imgFile ? (
        <Button fullWidth onClick={onUploadImageButtonClick}>
          사진 추가하기
        </Button>
      ) : (
        <Button fullWidth onClick={removeImg} color="error">
          사진 삭제하기
        </Button>
      )}

      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={saveImgFile}
      />
    </Stack>
  );
}
