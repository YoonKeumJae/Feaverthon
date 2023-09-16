/* eslint-disable react/no-unknown-property */
import React from "react";

function Logo() {
  return (
    <svg
      width="49"
      height="56"
      viewBox="0 0 49 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_65_2233)">
        <ellipse
          cx="24.5002"
          cy="48.7404"
          rx="6.5"
          ry="2.25962"
          fill="black"
          fill-opacity="0.2"
        />
      </g>
      <g filter="url(#filter1_d_65_2233)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.5 4C35.2696 4 44 12.498 44 22.9808C44 31.0183 38.8675 37.8889 31.6187 40.657L25.6107 48.6506C25.4854 48.8179 25.3191 48.9545 25.1258 49.0488C24.9325 49.1431 24.7178 49.1923 24.5 49.1923C24.2822 49.1923 24.0675 49.1431 23.8742 49.0488C23.6809 48.9545 23.5146 48.8179 23.3893 48.6506L17.3813 40.657C10.1325 37.8889 5 31.0183 5 22.9808C5 12.498 13.7304 4 24.5 4Z"
          fill="white"
        />
      </g>
      <path
        d="M40.2855 22.9808C40.2855 14.4947 33.218 7.61539 24.4998 7.61539C15.7816 7.61539 8.71411 14.4947 8.71411 22.9808C8.71411 31.4668 15.7816 38.3462 24.4998 38.3462C33.218 38.3462 40.2855 31.4668 40.2855 22.9808Z"
        fill="#097629"
      />
      <g clip-path="url(#clip0_65_2233)">
        <path
          d="M29.1895 31.2585H30.474C31.124 31.2585 31.6579 30.7764 31.7353 30.1588L33.0121 17.746H29.143V14.6955H27.6186V17.746H23.7728L24.0049 19.5085C25.3282 19.8625 26.5663 20.5027 27.3091 21.2107C28.4234 22.2803 29.1895 23.3875 29.1895 25.1952V31.2585ZM15.9883 30.5053V29.7596H27.6186V30.5053C27.6186 30.9195 27.2704 31.2585 26.8371 31.2585H16.7698C16.3365 31.2585 15.9883 30.9195 15.9883 30.5053ZM27.6186 25.2328C27.6186 19.2072 15.9883 19.2072 15.9883 25.2328H27.6186ZM16.0038 26.7468H27.6109V28.2532H16.0038V26.7468Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_65_2233"
          x="16.0002"
          y="44.4807"
          width="17"
          height="8.51923"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_65_2233"
          />
        </filter>
        <filter
          id="filter1_d_65_2233"
          x="0"
          y="0"
          width="49"
          height="55.1923"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_65_2233"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_65_2233"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_65_2233">
          <rect
            width="18.5714"
            height="18.0769"
            fill="white"
            transform="translate(15.2144 13.9423)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;
