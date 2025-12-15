31.An AI practitioner has a database of animal photos. The Al practitioner wants to  automatically identify and categorize the animals in the photos without manual  human effort. Which strategy meets these requirements? 
A.Object detection 
B.Anomaly detection 
C.Named entity recognition 
D.Inpainting 


Correct answer: A. Object detection

The requirement is to automatically identify and categorize animals in photos. That’s a computer-vision task where the model recognizes objects (e.g., “cat,” “dog,” “elephant”) in an image—often also locating them.

Why A is correct: Object detection
Object detection finds what objects are present in an image and typically where they are (bounding boxes).  
Example output: “dog at (x1,y1,x2,y2), cat at (x1,y1,x2,y2)”  
This directly supports “identify and categorize animals” without manual effort.

(If the images contain only one animal and you only need the label, image classification would be the simplest approach—but it’s not one of the options. Among the choices, object detection best matches.)

Why the other options are not correct

B. Anomaly detection
Used to detect unusual or rare items compared to normal patterns.
Example: spotting a defective product, identifying an unusual animal photo that doesn’t match the rest.
It does not inherently label animals as “lion,” “tiger,” etc.

C. Named entity recognition (NER)
NER is an NLP/text technique that extracts entities from text (names, places, organizations).
Example: from the sentence “I saw a tiger in India,” extract tiger (entity) and India (location).
It doesn’t work on images unless you first convert images to text (which isn’t the task here).

D. Inpainting
Inpainting is used to fill in missing or damaged parts of an image (image restoration / editing).
Example: removing an object from a photo and filling the background naturally.
It does not identify or categorize animals.

Summary
Best match for identifying and categorizing animals in photos: Object detection (A)  
Others (B, C, D) solve different problems (outliers, text entities, image repair).
