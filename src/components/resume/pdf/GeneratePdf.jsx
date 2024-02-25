import generatePDF from 'react-to-pdf';
import options from '../../../utils/pdfSetting';
import Resume from '../Resume';
import { Col, Row } from 'react-bootstrap';
import TopPDF from './TopPDF';
import AboutPDF from './AboutPDF';
import BasicInfoPDF from './BasicInfoPDF';
import JobExpPDF from './JobExpPDF';
import EduPDF from './EduPDF';
import SkillPDF from './SkillPDF';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../module/ErrorComponent';
import { useEffect } from 'react';

const GeneratePdf = () => {

    const createPDF = () => {
        generatePDF(() => document.getElementById("content"), options);
    }
    useEffect(() => {
        createPDF();
    },[]);
  return(
    <ErrorBoundary fallback={<ErrorComponent />}>
        <Resume>
            <div id = "content">
                <TopPDF />
                <Row>
                    <Col md = {4} className = "mt-5">
                        <AboutPDF />
                        <BasicInfoPDF />
                    </Col>
                    <Col md = {8}>
                        <JobExpPDF />
                        <EduPDF />
                        <SkillPDF />
                    </Col>
                </Row>
            </div>
        </Resume>
    </ErrorBoundary>
  )
}

export default GeneratePdf;