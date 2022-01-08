replaceText(document)



function replaceText(element) {
    
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/\$?[0-9]+\.[0-9]{2}|\$[0-9]+/gmi)) {
        
        console.log(element)
        const newElement = document.createElement('span')
        newElement.innerHTML = element.textContent.replace(/(\$?[0-9]+\.[0-9]+|\$[0-9]+)/gmi, '<span class="rainbow">$1</span>')
        element.replaceWith(newElement)
      }
    }
  }

