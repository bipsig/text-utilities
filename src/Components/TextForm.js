import React, { useState } from 'react'
import { LoremIpsum } from 'lorem-ipsum';
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const defaultText = "Enter your text here."
    const [text, setText] = useState(defaultText);

    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Text Converted to UpperCase successfully", "success")
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Text Converted to LowerCase successfully", "success")
    }

    const handleGenerateLoremIpsum = () => {
        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
                min: 2,
                max: 4,
            },
            wordsPerSentence: {
                min: 4,
                max: 8,
            },
        });

        const generatedText = lorem.generateParagraphs(3); // Generate 3 paragraphs
        setText(generatedText);
        props.showAlert("Lorem Ipsum Generated", "success");
    };

    const handleCopy = () => {
        if (text !== defaultText) {
            navigator.clipboard.writeText(text).then(() => {
                props.showAlert("Text Copied to Clipboard", "success");
            }).catch((error) => {
                console.error('Failed to copy text: ', error);
                props.showAlert("Failed to copy text. Please try again.", "danger");
            });
        }
    };

    const handleExportText = () => {
        if (text !== defaultText) {
            const element = document.createElement("a");
            const file = new Blob([text], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = "textFile.txt";
            document.body.appendChild(element);
            element.click();
            props.showAlert("Text Exported Successfully", "success");
        } else {
            props.showAlert("Cannot export empty text", "danger");
        }
    };

    const handleClearText = () => {
        setText(defaultText);
        props.showAlert("Text Cleared Successfully", "success");
    };

    const handleWhenChanged = (event) => {
        setText(event.target.value)
    }

    const handleWhenFocused = () => {
        if (text.toLowerCase() === defaultText.toLowerCase()) {
            setText("")
        }
    }

    const handleWhenBlur = () => {
        if (text === "") {
            setText(defaultText)
        }
    }

    const countNoOfWords = () => {

        if (text.toLowerCase() === defaultText.toLowerCase()) {
            return 0;
        }

        let x = text.split(" ").length;

        if (text[text.length - 1] === ' ') {
            x -= 1;
        }

        if (text === '') {
            x -= 1;
        }

        return x;
    };
    return (
        <>
            <div className={`container mt-4 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2>{props.heading}</h2>

                <div className="mb-3">
                    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleWhenChanged} onFocus={handleWhenFocused} onBlur={handleWhenBlur}></textarea>
                </div>

                <button type="button" className={`btn btn-outline-${props.mode === "light" ? "success" : "light"} mx-2`} onClick={handleUpperCase} >Convert to Upper Case</button>
                <button type="button" className={`btn btn-outline-${props.mode === "light" ? "success" : "light"} mx-2`} onClick={handleLowerCase}>Convert to Lower Case</button>
                <button type="button" className={`btn btn-outline-${props.mode === "light" ? "success" : "light"} mx-2`} onClick={handleGenerateLoremIpsum}>Lorem Ipsum Generator</button>
                <button type="button" className={`btn btn-outline-${props.mode === "light" ? "success" : "light"} mx-2`} onClick={handleCopy}>Copy Text</button>
                <button type="button" className={`btn btn-outline-${props.mode === "light" ? "success" : "light"} mx-2`} onClick={handleExportText}>Export Text</button>
                <button type="button" className={`btn btn-outline-${props.mode === "light" ? "success" : "light"} mx-2`} onClick={handleClearText}>Clear Text</button>


                <h3 className="mt-4">Your Text Summary: </h3>
                <p>Total No. of Words = {countNoOfWords()} and Total No. of Characters = {text === defaultText ? 0 : text.length}</p>
                <p>Approximate time required to read the text: = {0.008 * countNoOfWords()} minutes</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};