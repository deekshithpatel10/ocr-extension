# OCR-extension
A chrome extension to do Optical Character Recognition.
---
A new tab is opened when the extension icon is clicked from the chrome toolbar. This is handled by *background.js*.
The user is given the option of uploading an image in the new tab. The text in the image is extracted using *pytesseract* in backened, for which the *Flask web framework* is used. 
<br />
The resulting image and text are displayed side-by-side on the same tab.


