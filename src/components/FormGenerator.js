import React , { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import withAuth from "./withAuth";

function FormGenerator()  {
    const [color, setColor] = useState('#cccccc'); // set initial color to black
  
    function handleColorChange(event) {
      setColor(event.target.value); // update color with the selected color
    }

    const [topic, setTopic] = useState('');
    const [outputDocument, setOutputDocument] = useState('');
    const [language, setLanguage] = useState('');
    const [temperature, setTemperature] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [parlength, setParlength] = useState('');
    const [toneSelect, setToneSelect] = useState('');
    const [persona, setPersona] = useState('');
    const [textFontSelect, setTextFontSelect] = useState('');
    const [textFontSize, setTextFontSize] = useState('');
    const [codeFontSize, setCodeFontSize] = useState('');
    const [textBold, setTextBold] = useState('');
    const [codeBold, setCodeBold] = useState('');
    const [codeFont, setCodeFont] = useState('');
    
    const handleParagraphChange = (event) => {
      setParagraph(event.target.value);
    }

    const handleParlengthChange = (event) => {
      setParlength(event.target.value);
    }
    
    const handleTopicChange = (event) => {
      setTopic(event.target.value);
    }

    const handleTemperatureChange = (event) => {
      setTemperature(event.target.value);
    }
  
    const handleOutputDocumentChange = (event) => {
      setOutputDocument(event.target.value);
    }
  
    const handleToneSelectChange = (event) => {
      setToneSelect(event.target.value);
    }
    const handlePersonaChange = (event) => {
      setPersona(event.target.value);
    }
    const handleTextFontSelectChange = (event) => {
      setTextFontSelect(event.target.value);
    }
    const handleTextFontSizeChange = (event) => {
      setTextFontSize(event.target.value);
    }
    const handleCodeFontSizeChange = (event) => {
      setCodeFontSize(event.target.value);
    }
    const handleTextBoldChange = (event) => {
      setTextBold(event.target.value);
    }
    const handleCodeBoldChange = (event) => {
      setCodeBold(event.target.value);
    }
    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    }
    const handleCodeFontChange = (event) => {
      setCodeFont(event.target.value);
    }
    const handleDownload = () => {

      const formDataObject = {
        topic,
        outputDocument,
        language,
        temperature,
        paragraph,
        parlength,
        color,
        toneSelect,
        persona,
        textFontSelect,
        textFontSize,
        codeFontSize,
        textBold,
        codeBold,
        codeFont
      };
  
      const json = JSON.stringify(formDataObject, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'gptgenerator.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

  useEffect(() => {
    const updateExampleCode = () => {
      const codeElement = document.getElementById('exampleCode');
      const codeFontFamily = document.getElementById('codeFontSelect').value;
      const codeFontSize = document.getElementById('codeFontSize').value * 1.5;
      const codeBold = document.getElementById('codeBold').checked;
      const codeBgColor = document.getElementById('codeBgColor').value;

      let codeStyle = `font-family: ${codeFontFamily}; font-size: ${codeFontSize}px; background-color: ${codeBgColor};`;

      if (codeBold) {
        codeStyle += 'font-weight: bold;';
      }

      codeElement.style.cssText = codeStyle;
      codeElement.textContent = `function example() {
console.log('This is an example code snippet.');
}`;
    };

    const updateExampleText = () => {
      const font = document.getElementById('textFontSelect').value;
      const size = document.getElementById('textFontSize').value * 1.5;
      const bold = document.getElementById('textBold').checked;

      const exampleText = document.getElementById('exampleText');
      exampleText.style.fontFamily = font;
      exampleText.style.fontSize = size + 'px';
      exampleText.style.fontWeight = bold ? 'bold' : 'normal';
    };

    // Add event listeners when the component mounts
    document.getElementById('textFontSelect').addEventListener('change', updateExampleText);
    document.getElementById('textFontSize').addEventListener('input', updateExampleText);
    document.getElementById('textBold').addEventListener('change', updateExampleText);
    document.getElementById('codeFontSelect').addEventListener('change', updateExampleCode);
    document.getElementById('codeFontSize').addEventListener('input', updateExampleCode);
    document.getElementById('codeBold').addEventListener('change', updateExampleCode);
    document.getElementById('codeBgColor').addEventListener('change', updateExampleCode);

    // Call the update functions to initialize the example elements
    updateExampleCode();
    updateExampleText();

  }, []);

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogout =  () => {
    try {
      signOut(auth);
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Container>
      <div className='text-center'>
        <h1>Generator</h1>
      </div>
      <div>
        <center>
          {error && <div>{error}</div>}
          <Button className='btn btn-warning' onClick={handleLogout}>Logout</Button>
        </center>
      </div>
      <br />
      <center>
        <form id="form" className='w-50'>
          <Row>
            <div className="form-group my-2">
              <label htmlFor="topic" className='fs-4'>Topic</label>
              <textarea placeholder="" id="topic" value={topic} onChange={handleTopicChange} name="topic" className="form-control" rows={2}></textarea>
            </div>
            <div className="form-group my-2">
              <label htmlFor="outputDocument">Output Document</label>
              <textarea placeholder="" id="outputDocument" value={outputDocument} onChange={handleOutputDocumentChange} name="outputDocument" className="form-control" rows="2"></textarea>

            </div>
          </Row>

          <Row>
            <Col sm={12}>
              <center>
                <button className="btn-lg btn btn-primary  my-2" type="submit" onClick={handleDownload}><a className='text-white' href="">Generate</a></button>
              </center>
            </Col>

          </Row>


          <Row className='my-2'>
            <Col className="form-group  my-2" lg={6} md={6} sm={12}>
              <label htmlFor="temperature">Temperature</label>
              <input placeholder="" id="temperature" value={temperature} onChange={handleTemperatureChange}  name="temperature" type="number" step="0.1" min="0" max="1" required className='form-control' />
            </Col>
            <Col className="form-group  my-2" lg={6} md={6} sm={12}>
              <label htmlFor="paragraph">Paragraph</label>
              <input placeholder="" id="paragraph" value={paragraph} onChange={handleParagraphChange} name="paragraph" type="number" min="20" max="2000" className='form-control' />
            </Col>
            <Col className="form-group my-2" lg={6} md={6} sm={12}>
              <label htmlFor="length">Length</label>
              <input placeholder="" id="parlength" value={parlength} onChange={handleParlengthChange} name="parlength" type="number" min="20" max="2000" className='form-control' />
            </Col>
            <Col className="form-group my-2" lg={6} md={6} sm={12}>
              <label htmlFor="langSelect" className="active">Language</label>
              <select id="langSelect" value={language} onChange={handleLanguageChange} name="langSelect" className='form-control'>
                <option value="" disabled selected>Select Language</option>
                <option value="english" selected>English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="arabic">Arabic</option>
              </select>
            </Col>
          </Row>

          <Row className="my-2">
            <Col className="form-group my-2">
              <label htmlFor="persona">Persona</label>
              <input placeholder="" id="persona" name="persona" type="text" className="form-control" value={persona} onChange={handlePersonaChange}  />
            </Col>
            <Col className="form-group my-2">
              <label htmlFor="toneSelect" className="active">Tone</label>
              <select id="toneSelect" name="toneSelect" className="form-control"  value={toneSelect} onChange={handleToneSelectChange} >
              <option value="" disabled selected>Select Text Font</option>
              <option value="Arial" selected>Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Verdana">Verdana</option>
              <option value="Impact">Impact</option>
              <option value="Courier New">Courier New</option>
              <option value="Lucida Console">Lucida Console</option>
              <option value="Monaco">Monaco</option>
              <option value="Times">Times</option>
              <option value="Palatino">Palatino</option>
              <option value="Garamond">Garamond</option>
              <option value="Bookman">Bookman</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              </select>
            </Col>

          </Row>
          <Row>
            <Col className="form-group my-2">
              <label htmlFor="textFontSelect">Text Font Family</label>
              <select id="textFontSelect" name="textFontSelect" className="form-control"  value={textFontSelect} onChange={handleTextFontSelectChange} >
                <option value="" disabled selected>Select Text Font Family</option>
                <option value="Arial" selected>Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
              </select>
            </Col>
            <Col className="from-group my-2">
              <label htmlFor="textFontSize">Text Font Size</label>
              <input placeholder="" id="textFontSize" name="textFontSize" type="number"  min="10" max="100" defaultValue="16" className="form-control" 
               value={textFontSize} onChange={handleTextFontSizeChange} 
              />
            </Col>
          </Row>

          <Row>
            <Col className="form-group my-2">
              <label htmlFor="codeFontSelect" className="active">Code Font Family</label>
              <select id="codeFontSelect" name="codeFont" className='form-control'  value={codeFont} onChange={handleCodeFontChange} >
                <option value="" disabled selected>Choose font family</option>
                <option value="Courier New" selected>Courier New</option>
                <option value="Consolas">Consolas</option>
                <option value="Lucida Console">Lucida Console</option>
              </select>
            </Col>

            <Col className="form-group my-2">
              <label htmlFor="codeFontSize">Code Font Size</label>
              <input placeholder="" id="codeFontSize" name="codeFontSize" type="number" min="10" max="100" defaultValue="16" className="form-control"
               value={codeFontSize} onChange={handleCodeFontSizeChange} 
              />
            </Col>
          </Row>

          <Row className="form-group my-2">
            <Col className="form-group my-2">
              <p>
                <label>
                  <input type="checkbox" id="textBold" name="textBold" 
                   value={textBold} onChange={handleTextBoldChange} 
                  />
                  <span>Bold Text</span>
                </label>
              </p>
            </Col>
            <Col className="form-group my-2">
              <p>
                <label>
                  <input type="checkbox" id="codeBold" name="codeBold" 
                   value={codeBold} onChange={handleCodeBoldChange} 
                  />
                  <span>Bold Code</span>
                </label>
              </p>
            </Col>
            <Col className="form-group my-2">
            <input type="color" value={color} onChange={handleColorChange} id="codeBgColor" name="codeBgColor" className="validate" />
              <label htmlFor="codeBgColor" className="active">Bg Color</label>
            </Col>
          </Row>
         
        </form>
      </center>
      <Row>
            <hr />
            <h5>Example Text:</h5>
            <Row className='form-group'>
              <div id="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </Row>
            <Row className='form-group'>
              <pre id="exampleCode">
                <code>
                  def hello_world():
                  print("Hello, world!")
                </code>
              </pre>
            </Row>
          </Row>
    </Container>
  );
}

export default withAuth(FormGenerator); 

