The visualization code is written to be executed in a browser (where document is defined) and not in node. 
Since node is not a document the global document object is not defined.If you are using node.js, you'll receive a reference error 
"Document is not defined". For further reference https://developer.mozilla.org/en-US/docs/Web/API/document