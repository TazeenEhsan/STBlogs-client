import React from 'react';

const PageCount = ({ dataLength, pageHandler }) => {

    let pageNumbers = []

    for (let i = 1; i < Math.ceil(dataLength / 10) + 1; i++) {
        pageNumbers.push(i)
    }
    // console.log(pageNumbers);
    return (
        <div>
            {
                pageNumbers.map(page => <button
                    onClick={() => pageHandler(page)}
                    style={{ backgroundColor: 'green', marginRight: '10px', color: 'white', padding: '5px', borderRadius: '5px' }}

                >{page}</button>)
            }

        </div>
    );
};

export default PageCount;