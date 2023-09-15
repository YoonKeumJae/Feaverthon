import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Star } from "@phosphor-icons/react";
import { Typography } from "@mui/material";

const StyledConetnt = styled.div`
  padding: 1.5rem;
  .rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .rating .label {
    text-decoration: underline;
  }

  .title * {
    display: inline-block;
    margin-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.25rem;
  }
  .title .category {
    color: #838e9a;
  }

  .description {
    color: #a0a5ba;
  }
  .desEx .MuiTypography-root {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.3rem;
  }

  .desEx .more {
    color: #222;
    float: right;
    margin-top: 2.6rem;
    shape-outside: border-box;
    padding: 3px 2px;
  }
`;

function Content({ data }) {
  console.log(data.description.length);
  return (
    <StyledConetnt>
      <div className="rating">
        <Star weight="fill" color="#EFBC06" />
        <Typography variant="subtitle2" className="label">
          {data.rating} ({data.ratingCount})
        </Typography>
      </div>
      <div className="title">
        <Typography variant="h6" className="title">
          {data.title}
        </Typography>
        <Typography variant="body2" className="category">
          {data.category}
        </Typography>
      </div>
      <div className="description desEx">
        {data.description.length > 100 ? (
          <Typography variant="body2">
            <Typography variant="button" className="more">
              더보기
            </Typography>
            {data.description}
          </Typography>
        ) : (
          <Typography variant="body2">{data.description}</Typography>
        )}
      </div>
    </StyledConetnt>
  );
}

// typescript 대용..
Content.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default Content;
