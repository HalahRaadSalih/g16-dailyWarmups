function pushLinkedList(node, list){
	
	// next should be a ref to the next node
	// must update the next node ref.
	if(list.length == 0){
		list.push({
			data: node.data,
			nextNode: null
		});
	}
	else{
		// update prev node
		list[list.length - 1].nextNode = node;
		// push current node
		list.push({
			data: node.data,
			nextNode: null
		});
	}
}

list = [];
pushLinkedList({
	data: 1, 
	nextNode:null
}, list);

pushLinkedList({
	data: 2, 
	nextNode:null
}, list);

pushLinkedList({
	data: 3, 
	nextNode:null
}, list);
console.log(list);
