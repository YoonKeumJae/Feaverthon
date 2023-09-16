import React from "react";
import { Button, Typography } from "@mui/material";
import { MoreRule, ReviewItemContainer } from "../style";

export default function Rule({ setIsWrite }) {
  return (
    <ReviewItemContainer>
      <Button variant="outlined" fullWidth onClick={() => setIsWrite(true)}>
        리뷰 작성하기
      </Button>
      <Typography variant="body2" className="rule">
        허위 방문인증, 광고성 리뷰 작성 등의 이상 패턴이 탐지되면 해당 리뷰는
        별도의 통지 없이 즉시 미노출되며, 해당 리뷰어는 서비스 이용에 제한을
        받을 수 있습니다.
      </Typography>
      <MoreRule variant="button">
        이용정책 및 신고 접수 기준 자세히 보기
      </MoreRule>
    </ReviewItemContainer>
  );
}
