import generatePDF from 'react-to-pdf';
import options from '../../utils/pdfSetting';

const GeneratePdf = () => {

    const createPDF = () => {
        generatePDF(() => document.getElementById("content-id"), options);
    }
  return(
    <div>
        <button onClick={() => createPDF()}>Generate PDF</button>
        <div id="content-id">
            Content to be generated to PDF
        </div>
    </div>
    )
}

export default GeneratePdf;