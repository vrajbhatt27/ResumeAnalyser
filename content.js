document.addEventListener("mouseup", () => {
    let selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        highlightText();
    }
});

function highlightText () {
    let selection = window.getSelection();
    if (!selection.rangeCount) return;

    let range = selection.getRangeAt(0);
    let span = document.createElement("span");


    span.style.textDecoration = "underline";
    span.style.textDecorationColor = "red";
    span.style.textDecorationThickness = "3px";
    span.textContent = selection.toString();
    span.addEventListener('click', () => {
        span.style.textDecorationColor = "green";
    }
    );

    range.deleteContents();
    range.insertNode(span);
}