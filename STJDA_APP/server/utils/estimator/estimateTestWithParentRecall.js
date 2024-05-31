import { E } from "./EstimatorData.js";
import { GenericTreeNodeWithMemory } from "./genericTreeWithMemory.js";
import readline from 'readline';

function populateTree(data, parentNode = null) { // Default parentNode to null for root
    let root = parentNode; // Initialize root with parentNode to handle the case where we're not at the root

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            // Create a node for each key in the object, passing the parentNode as the parent
            const node = new GenericTreeNodeWithMemory(parentNode);
            node.setValuesFromInput(key);
            
            if (parentNode) {
                parentNode.addChild(node); // Add child to existing parentNode
            } else {
                root = node; // If there's no parentNode, we're at the root
            }

            if (Array.isArray(data[key])) {
                // Handle array values
                data[key].forEach(item => {
                    if (typeof item === 'object') {
                        // Recursively call populateTree if the item is an object, with current node as parent
                        populateTree(item, node);
                    } else {
                        // For primitive types within the array, create child nodes directly
                        const childNode = new GenericTreeNodeWithMemory(node); // Pass current node as parent
                        childNode.setValuesFromInput(item.toString());
                        node.addChild(childNode);
                    }
                });
            } else if (typeof data[key] === 'object') {
                // Recursively populate the tree for nested objects, with current node as parent
                populateTree(data[key], node);
            } else {
                // For primitive types, directly set values
                node.setValuesFromInput(data[key].toString());
            }
        }
    }
    return root; // Return the root node of the tree
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// recursive algorithm that allows tree traversal uses the Parent/Child tracking in the GenericTreeWithMemory
function navigateTree(node) {
    console.log(`Current node: ${node.getValueString()}`);
    console.log('Children:');
    node.children.forEach((child, index) => {
        console.log(`${index + 1}. ${child.getValueString()}`);
    });

    rl.question('Enter the number of the child node you want to navigate to (or press Enter to go back): ', choice => {
        const choiceNumber = parseInt(choice);

        if (!choice.trim()) {
            if (node.parent) {
                navigateTree(node.parent);
            } else {
                console.log('At root. Navigation ended.');
                rl.close(); // Properly close the rl interface
            }
        } else if (isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > node.children.length) {
            console.log('Invalid choice. Try again.');
            navigateTree(node); // Re-prompt at the same node
        } else {
            const selectedChild = node.children[choiceNumber - 1];
            navigateTree(selectedChild);
        }
    });
}

let treeRoot = populateTree(E)
// treeRoot.printLevelWise()
navigateTree(treeRoot);