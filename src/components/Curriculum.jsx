import React from 'react'


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
        <div><div className='page'>
            <h1 className='heading'>Curriculum</h1>

            <button onClick={downloadPdf}>Descargar CV</button>

        </div></div>
    )
}
