// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className, node) {
  var nodeList = [];
  var node = node || document.body;
  if (node.className === className) {
    nodeList.push(node);
  }
  for (var i = 0; i < node.children.length; i++) {
    nodeList.concat(getElementsByClassName(className, node.children[i]));

  }
  return nodeList;
};
