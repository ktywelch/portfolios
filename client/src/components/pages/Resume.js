import { useState } from 'react';
import resumePDF from '../utils/ktywelch.pdf'

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    function goToPrevPage () {
    setPageNumber( pageNumber - 1);
    }
    const goToNextPage = () => {
        setPageNumber(pageNumber + 1);
    }
 

    return ( 
        
        <div className="Resume">
            <nav>
          <button onClick={goToPrevPage}>Prev</button>
          <button onClick={goToNextPage}>Next</button>
        </nav>
        <div style={{ width: 800 }}>
            <Document file='../images/ktywelch.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width={800} />
               
            </Document>             
        </div>
        </div> 
        
     );
}
 
export default Resume;


/*
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="somefile.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}
*/