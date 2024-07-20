import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "../Styles/Mobile.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="mob-body-container-height">
      <div className="pdf-viewer-container">
        <Document
          file="/cv.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p className="page-info">
          Page {pageNumber} of {numPages}
        </p>
        <div className="pdf-download-button">
          <a href="/cv.pdf" download>
            <button>Download PDF</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
