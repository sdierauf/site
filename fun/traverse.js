function HistoryNode(data, parent, children) {
	this.data = data;
	this.parent = parent || null;
	this.children = children || [];
}

function PathFinder(origin) {
	this.genGraph = function(start, pos, parent) {
		if (pos + 1 > start.length) {
			return new HistoryNode(start, parent, []);
		}
		var par = new HistoryNode(start, parent);
		for (var i = 'a'.charCodeAt(0); i < 'a'.charCodeAt(0) + 26; i++) {
			var letter = String.fromCharCode(i);
			if (par.data.charAt(pos) != letter) {
				var permutedWordArr = par.data.split('');
				permutedWordArr[pos] = letter;
				var permutedWord = permutedWordArr.join('');
				par.children.push(this.genGraph(permutedWord, pos + 1, par));
			}
		}
		return par;
	}
	var root = this.genGraph(origin, 0, root);
	this.tree = {root: root};
}

PathFinder.prototype.findShortPath = function(end) {
	var queue = [this.tree.root];
	var found = false;
	var current;
	while (queue.length > 0 && !found) {
		 current = queue.shift();
		 if (current.data == end) {
			 found = true;
		 } else {
			 queue = queue.concat(current.children);
		 }
	}
	if (found) {
		var list = [];
		list.push(current.data);
		while (current.parent != null) {
			list.push(current.parent.data);
			current = current.parent;
		}
		list.reverse();
		return list;
	} else {
		return null;
	}
};

function test(length) {
	var a = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length)
	var b = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
	console.log('finding path from ' + a + ' to ' + b);
	var start = new Date().getMilliseconds();
	var p = new PathFinder(a);
	var res = p.findShortPath(b);
	var end = new Date().getMilliseconds();
	console.log(res);
	console.log('found in \t' + (end - start) + 'ms')
}

function main() {
	for (var i = 0; i <= 10; i++) {
		test(3);
	}
}

main();
