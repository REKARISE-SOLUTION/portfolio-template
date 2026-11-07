import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function CertificateCard({ certificate }) {
  return (
    <div className="certificate-card">
      <div className="certificate-preview">
        {certificate.link ? <Document
          file={certificate.link}
          loading={<div className="preview-loading">Loading preview…</div>}
          error={<div className="preview-loading">Certificate preview</div>}
        >
          <Page
            pageNumber={1}
            width={320}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document> : <div className="preview-loading">Add your certificate PDF</div>}
      </div>

      <div className="certificate-content">
        <h3>{certificate.title}</h3>

        <h4>{certificate.issuer}</h4>

        <p>{certificate.description}</p>

        <span>{certificate.year}</span>

        {certificate.link && <a href={certificate.link} target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>}
      </div>
    </div>
  );
}

export default CertificateCard;
