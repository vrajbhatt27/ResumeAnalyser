let selectedTexts = [];

document.addEventListener("mouseup", () => {
    let selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        selectedTexts.push(selectedText);
        highlightText();
        console.log("Selected Texts:", selectedTexts);
    }
});

function highlightText () {
    let selection = window.getSelection();
    if (!selection.rangeCount) return;

    let range = selection.getRangeAt(0);
    let span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.style.color = "black";
    span.style.fontWeight = "bold";
    span.textContent = selection.toString();

    range.deleteContents();
    range.insertNode(span);
}
