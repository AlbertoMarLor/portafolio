import React from 'react'
import cv from "./../assets/images/fotoCv.png"



export const Curriculum = () => {

    const downloadPdf = () => {
        fetch('CV_ALBERTO_MARTIN_2023.pdf').then(response => {
            response.blob().then(blob => {

                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV_ALBERTO_MARTIN_2023.pdf';
                alink.click();
            })
        })
    }



    return (
        <div className='cv'>
            <button onClick={downloadPdf}>Descargar CV</button>
            <img src={cv} />
            <button onClick={downloadPdf}>Descargar CV</button>
        </div>
    )
}
