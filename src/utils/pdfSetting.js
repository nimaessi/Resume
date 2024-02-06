import { Resolution, Margin } from 'react-to-pdf';
const options = {
    // method can save or open
    method: 'open',
    resolution: Resolution.HIGH,
    page: {
       margin: Margin.SMALL,
        // default is 'A4' can be letter
       format: 'A4',
       // default is 'portrait' can be landscape
       orientation: 'portrait',
    },
    canvas: {
       mimeType: 'image/png',
       qualityRatio: 1
    },
    overrides: {
       pdf: {
          compress: true
       },
       canvas: {
          useCORS: true
       }
    },
 };
 export default options;