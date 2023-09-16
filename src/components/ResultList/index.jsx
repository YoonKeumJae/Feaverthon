import React from "react";
import styled from "styled-components";

export default function ResultList() {
    const restaurant = [
        {
            title: "뉴살라딘",
            category: "인도음식",
            address: "대구광역시 달서구 계대동문로 17",
            tel: "053-123-1234",
            rating: 4.9,
            reviews: 10,
            location: "대구",
        },
        {
            title: "뉴살라딘2",
            category: "인도음식",
            address: "대구광역시 달서구 계대동문로 172",
            tel: "053-123-1234",
            rating: 4.9,
            reviews: 1,
            location: "대구",
        },
        {
            title: "뉴살라딘3",
            category: "인도음식",
            address: "대구광역시 달서구 계대동문로 172",
            tel: "053-123-1234",
            rating: 4.9,
            reviews: 2,
            location: "대구",
        },
    ];

    const ListBar = styled.div`
        position: relative;
        bottom: 12rem;
        width: 60%;
        height: 10rem;
        border-radius: 40px;
        background-color: white;
        max-width: 444px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 1.5rem;
        // border: 1px solid black;
        z-index: 9999;
    `;

    return (
            <div>
                {/* restaurant.filter(({location}) => location === tab[tabIndex - 1]).map((item) => ( */}
                <ListBar
                    // key={item.title}
                    // title={item.title}
                    // category={item.category}
                    // address={item.address}
                    // tel={item.tel}
                    // rating={item.rating}
                    // reviews={item.reviews}
                >
                    <div style={{marginBottom:"-100px", borderTop:"2px solid grey", width:"80%", height:"3rem"}}></div>
                </ListBar>
                {/* )) */}
            </div>
        )
    // )
}