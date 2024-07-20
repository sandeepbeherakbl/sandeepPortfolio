import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "../Styles/Mobile.css";
import { StepBack, StepForward } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    setError(error.message);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="mob-body-container-height">
    <div className="pdf-viewer-container">
      {error && <p>Error: {error}</p>}
      <Document
        file="/cv.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className="pdf-document"
        
      >
        <Page pageNumber={pageNumber} width={350} canvasBackground="transparent"  />
      </Document>
      <p className="page-info">
        Page {pageNumber} of {numPages}
      </p>
      <div className="pdf-navigation">
        <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          <StepBack/>
        </button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          <StepForward/>
        </button>
      </div>
      <div className="download-button">
        <a href="/cv.pdf" download>
          <button>Download PDF</button>
        </a>
      </div>
    </div>
  </div>
  );
};

export default PdfViewer;
