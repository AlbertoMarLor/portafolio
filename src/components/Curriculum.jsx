import React from 'react'
import { Document, pdfjs } from "react-pdf";


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
        <div>
            <div className='page'>


                <button onClick={downloadPdf}>Descargar CV</button>
                <Document file={"https://publuu.com/flip-book/180140/443060"}></Document>

            </div>
        </div>
    )
}
