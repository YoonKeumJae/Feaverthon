import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";

export default function WriteReview() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="제목"
      />

      <TextField
        fullWidth
        value={content}
        onChange={(e) => setContent(e.target.value)}
        label="내용"
      />
    </Stack>
  );
}
