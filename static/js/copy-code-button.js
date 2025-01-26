
function createCopyButton(highlightDiv) {
  const button = document.createElement("button");
  button.className = "copy-code-button";
  button.type = "button";
  button.innerText = "Copy";
  button.addEventListener("click", () => copyCodeToClipboard(button, highlightDiv));
  addCopyButtonToDom(button, highlightDiv);
}

/*
async function copyCodeToClipboard(button, highlightDiv) {
  const codeToCopy = highlightDiv.querySelector(":last-child > .chroma > code").innerText;
  try {
    result = await navigator.permissions.query({ name: "clipboard-write" });
    if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
    } else {
      copyCodeBlockExecCommand(codeToCopy, highlightDiv);
    }
  } catch (_) {
    copyCodeBlockExecCommand(codeToCopy, highlightDiv);
  }
  finally {
    codeWasCopied(button);
  }
}
*/

async function copyCodeToClipboard(button, highlightDiv) {
    // An earlier version used innerText instead of textContent here, and
    // this led to problems where extra blank lines were inserted in the
    // result (because it captures CSS formatting info). textContent gets
    // the raw text and does not have this problem. The specific selector
    // ":last-child > .chroma > code" can be replaced with the more
    // generic ".chrma code" with the same result.
  const codeToCopy = highlightDiv.querySelector(":last-child > .chroma > code").textContent;
  try {
    result = await navigator.permissions.query({ name: "clipboard-write" });
      if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
      } else {
      copyCodeBlockExecCommand(codeToCopy, highlightDiv);
    }
  } catch (_) {
    copyCodeBlockExecCommand(codeToCopy, highlightDiv);
  }
  finally {
    codeWasCopied(button);
  }
}

function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
  const textArea = document.createElement("textArea");
  textArea.contentEditable = 'true'
  textArea.readOnly = 'false'
  textArea.className = "copyable-text-area";
  textArea.value = codeToCopy;
  highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
  const range = document.createRange()
  range.selectNodeContents(textArea)
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
  textArea.setSelectionRange(0, 999999)
  document.execCommand("copy");
  highlightDiv.removeChild(textArea);
}

function codeWasCopied(button) {
  button.blur();
  button.innerText = "Copied!";
  setTimeout(function() {
    button.innerText = "Copy";
  }, 2000);
}

/*
function addCopyButtonToDom(button, highlightDiv) {
  highlightDiv.insertBefore(button, highlightDiv.firstChild);
  const wrapper = document.createElement("div");
  wrapper.className = "highlight-wrapper";
  highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
  wrapper.appendChild(highlightDiv);
  }
*/
function addCopyButtonToDom(button, highlightDiv) {
  // Ensure the highlightDiv is a valid .highlight element
  if (!highlightDiv.classList.contains("highlight")) {
    console.error("Provided element is not a .highlight div:", highlightDiv);
    return;
  }

  // Insert the button as the first child of the .highlight div
  highlightDiv.prepend(button);

  // Check if the .highlight div is already wrapped
  if (!highlightDiv.parentNode.classList.contains("highlight-wrapper")) {
    const wrapper = document.createElement("div");
    wrapper.className = "highlight-wrapper";

    // Wrap the .highlight div
    highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
    wrapper.appendChild(highlightDiv);
  }
}

/* Find all highlight elements and insert copy button in each. */
document.querySelectorAll(".highlight")
  .forEach(highlightDiv => createCopyButton(highlightDiv));
