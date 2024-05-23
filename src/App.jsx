import React from 'react'

import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './Pdf'


function App() {

  return (
    <PDFViewer width={`1440`} height={'1330'}>    
        <MyDocument/>
    </PDFViewer>
  )
}

export default App
