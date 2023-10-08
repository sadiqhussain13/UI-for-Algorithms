class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    pairwiseSwap() {
        if (!this.head || !this.head.next) {
            return;
        }

        let prev = null;
        let curr = this.head;

        while (curr !== null && curr.next !== null) {
            const nextNode = curr.next;
            const nextNextNode = curr.next.next;

            curr.next = nextNextNode;
            nextNode.next = curr;

            if (prev !== null) {
                prev.next = nextNode;
            } else {
                this.head = nextNode;
            }

            prev = curr;
            curr = nextNextNode;
        }
    }

    printListToString() {
        let current = this.head;
        let result = '';

        while (current !== null) {
            result += current.data + ' ';
            current = current.next;
        }

        return result.trim();
    }
}

// Export the LinkedList class for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LinkedList;
}
