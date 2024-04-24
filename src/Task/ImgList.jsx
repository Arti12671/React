import React from 'react'

const ImgList = ({ flowerLength }) => {

    let imgList = ["https://cdn.pixabay.com/photo/2024/02/25/10/11/forsythia-8595521_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/03/06/09/32/liverworts-8616125_640.jpg",
        "https://cdn.pixabay.com/photo/2024/02/25/10/11/forsythia-8595521_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/03/06/09/32/liverworts-8616125_640.jpg",
        "https://cdn.pixabay.com/photo/2024/02/25/10/11/forsythia-8595521_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/03/06/09/32/liverworts-8616125_640.jpg",
        "https://cdn.pixabay.com/photo/2024/02/25/10/11/forsythia-8595521_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/03/06/09/32/liverworts-8616125_640.jpg",
    ]

    if (imgList.length !== flowerLength) {
        throw new Error(`${flowerLength} length is not a correct!!!`)
    }
    return (
        <div>
            {
                imgList.map((flower) =>
                    <ul>
                        <li> <img src={flower} alt="" height={100} width={200} /></li>
                    </ul>
                )
            }
        </div>
    )
}

export default ImgList