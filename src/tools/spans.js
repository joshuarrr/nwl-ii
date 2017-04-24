// spanWrapper = (s) => {
//     var parser = new DOMParser(),
//         serializer = new XMLSerializer();

//     var htmlDoc = parser.parseFromString(s, 'text/html');

//     wrapNodes(htmlDoc);
//     wrapWords(htmlDoc);

//     return serializer.serializeToString(htmlDoc);
// }

// wrapNodes = (parentNode) => {
//     var nodes = getNodes(parentNode, 3),
//         i;

//     for (i = 0; i < nodes.length; i++) {
//         wrapNode(nodes[i]);
//     }
// }

// wrapNode = (node) => {
//     var span = createSpan();

//     if (node.data.match(/^\s+$/)) {
//         return;
//     }

//     insertBefore(node, span);

//     span.appendChild(node);
// }

// wrapWords = (parentNode) => {
//     var nodes = getNodes(parentNode, 'span'),
//         i;

//     for (i = 0; i < nodes.length; i++) {
//         wrapWord(nodes[i]);
//     }
// }

// wrapWord = (node) => {
//     var words = node.textContent.split(' '),
//         space,
//         span,
//         text,
//         i;

//     for (i = 0; i < words.length; i++) {
//         text = words[i];

//         space = document.createTextNode(' ');

//         if (text) {
//             span = createSpan();
//             span.textContent = text;

//             insertBefore(node, span);

//             if (i > 0) {
//                 insertBefore(span, space);
//             }
//         } else {
//             if (i > 0) {
//                 insertBefore(node, space);
//             }
//         }
//     }

//     removeElement(node);
// }

// getNodes = (parentNode, nodeName, _nodes) => {
//     var childNodes = parentNode.childNodes,
//         nodes = _nodes || [],
//         node,
//         i;

//     for (i = 0; i < childNodes.length; i++) {
//         node = childNodes.item(i);

//         if (node.nodeName.toLowerCase() === nodeName || node.nodeType === nodeName) {
//             nodes.push(node);
//         }

//         nodes = getNodes(node, nodeName, nodes);
//     }

//     return nodes;
// }

// insertBefore = (referenceNode, newNode) => {
//   return referenceNode.parentNode.insertBefore(newNode, referenceNode);
// }

// insertAfter = (referenceNode, newNode) => {
//   return insertBefore(referenceNode.nextSibling, newNode);
// }

// removeElement = (node) => {
//     node.parentNode.removeChild(node);
// }

// createSpan = () => {
//     var element = document.createElement('span');
//         // element.setAttribute('class', 'foo');

//     return element;
// }


// exports.spanWrapper = spanWrapper;


// // var wrappedString = spanWrapper('<p>Foo bar baaaaz <i>yeeeeey <b>hello</b></i> khiuygoibo.</p><p>Fuck</p>')