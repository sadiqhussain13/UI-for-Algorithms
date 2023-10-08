let linkedList;

function performPairwiseSwap() {
    const inputList = document.getElementById('inputList').value;
    const elements = inputList.split(',').map(Number);

    let linkedList = new LinkedList();
    let currentNode = null;

    for (const element of elements) {
        const node = new Node(element);
        if (currentNode) {
            currentNode.next = node;
        } else {
            linkedList.head = node;
        }
        currentNode = node;
    }

    // Display the original list
    const originalListDiv = document.getElementById('originalList');
    originalListDiv.textContent = 'Original List: ' + inputList;

    // Perform pairwise swapping
    linkedList.pairwiseSwap();

    // Display the list after pairwise swapping
    const swappedListDiv = document.getElementById('swappedList');
    const swappedList = linkedList.printListToString();
    swappedListDiv.textContent = 'List after pairwise swapping: ' + swappedList;
}
