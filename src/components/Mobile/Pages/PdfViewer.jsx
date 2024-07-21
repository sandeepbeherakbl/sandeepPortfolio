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
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
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
      {loading && (
        <>
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        </>
      )}
      <div className="pdf-viewer-container">
        {error && <p>Error: {error}</p>}
        <Document
          file="/cv.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="pdf-document"
          loading=""
        >
          <Page
            pageNumber={pageNumber}
            width={300}
            canvasBackground="transparent"
          />
        </Document>
        <p className="page-info">
          Page {pageNumber} of {numPages}
        </p>
        <div className="pdf-navigation">
          <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
            <StepBack height={15} />
          </button>
          <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
            <StepForward height={15} />
          </button>
        </div>
        <div className="download-button">
          <a href="/cv.pdf" download>
            <button>
              {" "}
              Download PDF
              <span>
                {" "}
                {/* <Download width={15} height={15} /> */}
              </span>{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
