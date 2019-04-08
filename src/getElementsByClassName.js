// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var nodeList = [];
  (function searchNode(node) {
    if (node.classList && node.classList.contains(className)) {
      nodeList.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      searchNode(node.children[i]);
    }
  })(document.body)
  return nodeList;
};
