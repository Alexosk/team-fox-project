
var spans = document.getElementsByTagName("span"),
    index,
    span;

for (index = 0; index < spans.length; ++index) {
    span = spans[index];
    if (span.contentEditable) {
        span.onblur = function() {
            var text = this.innerHTML;
            text = text.replace(/&/g, "&amp").replace(/</g, "&lt;");
            console.log("Content committed, span " +
                    (this.id || "anonymous") +
                    ": '" +
                    text + "'");
        };
    }
}

/*
window.onload = function() {
    document.getElementById('container').onclick = function(event) {
    var span, input, text;
    // Get the event (handle MS difference)
    event = event || window.event;
    // Get the root element of the event (handle MS difference)
    span = event.target || event.srcElement;
    // If it's a span...
    if (span && span.tagName.toUpperCase() === "SPAN") {
        // Hide it
        span.style.display = "none";
        // Get its text
        text = span.innerHTML;
        // Create an input
        input = document.createElement("input");
        input.type = "text";
        input.value = text;
        input.size = Math.max(text.length / 4 * 3, 4);
        span.parentNode.insertBefore(input, span);
        // Focus it, hook blur to undo
        input.focus();
        input.onblur = function() {
            // Remove the input
            span.parentNode.removeChild(input);
            // Update the span
            span.innerHTML = input.value == "" ? "&nbsp;" : input.value;
            // Show the span again
            span.style.display = "";
          };
        }
    };
};
*/
