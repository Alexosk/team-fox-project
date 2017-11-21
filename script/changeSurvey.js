
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

