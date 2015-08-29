function TreeNode(data, left, right) {
	this.data = data;
	this.left = left || null;
	this.right = right || null;
	this.insertNode = function(node) {
		if (node.data < this.data) {
			if (this.left == null) {
				this.left = node;
			} else {
				this.left.insertNode(node);
			}
		} else {
			if (this.right == null) {
				this.right = node;
			} else {
				this.right.insertNode(node);
			}
		}
	}
	this.insert = function(num) {
		this.insertNode(new TreeNode(num));
		return this;
	}
	this.print = function() {
		var printRecursive = function(node, depth) {
			if (!node) { return; }
			var indent = new Array(depth + 1).join("|  ");
			console.log(indent + node.data);
			printRecursive(node.left, depth + 1);
			printRecursive(node.right, depth + 1);
		}
		printRecursive(this, 0);
		return this;
	}
	this.findPaths = function(num) {
		var printPath = function(path, start, end) {
			var str = 'path: ';
			for (var i = start; i <= end; i++) {
				str += path[i] + ', ';
			}
			console.log(str);
		}
		var findPath = function(node, sum, path, level) {
			if (!node) return;
			path[level] = node.data;
			var total = 0;
			for (var i = level; i >= 0; i--) {
				total += path[i];
				if (total == sum) {
					printPath(path, i, level);
				}
			}
			findPath(node.left, sum, path, level + 1);
			findPath(node.right, sum, path, level + 1);
		}
		findPath(this, num, [], 0);
		return this;
	}
	this.inorderPrint = function () {
		var buildString = function(node, str) {
			if (!node) return '';
			str += buildString(node.left, '');
			str += node.data;
			str += buildString(node.right, '');
			return str;
		}
		console.log(buildString(this, ''));
	}
}

function main() {
	var root = new TreeNode(4);
	root.insert(3).insert(1).insert(10).insert(5).insert(13).insert(2).insert(6).insert(4).insert(-14).insert(7);
	root.findPaths(4);
	root.print();
	root.inorderPrint();
}

main();