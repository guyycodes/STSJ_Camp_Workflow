import { E } from "./EstimatorData.js";
import { GenericTreeNode } from "../TreeGraph/genericTree.js";

function populateTreeGPT(data, parentNode) {
    // This function will be a cleaner, combined version of your attempts.
    for (let key in data) {

        if (data.hasOwnProperty(key)) {
            // console.log(key) // key = Phylum
            // Create a node for each key in the object.
            const node = new GenericTreeNode();
            // Use setValuesFromInput to handle keys as input, allowing parsing if needed.
            node.setValuesFromInput(key);
            
            if (parentNode) {
                parentNode.addChild(node);
            } else {
                // If there's no parentNode, we're at the root, so set this node as the new root.
                var root = node; // Using var for function-scope in case we need to return this as the root.
            }

            if (Array.isArray(data[key])) {
                // Handle array values by iterating through each item.
                data[key].forEach(item => {
                    if (typeof item === 'object') {
                        // Recursively call populateTreeGPT if the item is an object.
                        populateTreeGPT(item, node);
                    } else {
                        // For primitive types within the array, parse and set values accordingly.
                        const childNode = new GenericTreeNode();
                        childNode.setValuesFromInput(item.toString());
                        node.addChild(childNode);
                    }
                });
            } else if (typeof data[key] === 'object') {
                // Recursively populate the tree for nested objects.
                populateTreeGPT(data[key], node);
            } else {
                // For primitive types, handle the value directly without assuming it's a string.
                node.setValuesFromInput(data[key].toString());
            }
        }
    }
    return root; // Return the root node of the tree.
}



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function navigateTree(node) {
    console.log(`Current node: ${node.getValueString()}`);
    console.log('Children:');
    node.children.forEach((child, index) => {
        console.log(`${index + 1}. ${child.getValueString()}`);
    });

    readline.question('Enter the number of the child node you want to navigate to (or press Enter to go back): ', choice => {
        const choiceNumber = parseInt(choice);

        if (!choice.trim()) {
            if (node.parent) {
                navigateTree(node.parent);
            } else {
                console.log('At root. Navigation ended.');
                readline.close(); // Properly close the readline interface
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

// Usage
let treeRoot = populateTreeGPT(E)
treeRoot.printLevelWise()
// navigateTree(treeRoot);




// print all items from SinglePageApplication.
// function printChildrenOfSPA() {
//     // Navigate to Single Page Application
//     const spa = E.Phylum[0]["Web Development"].Class[0]["Frontend Development"].Order[0]["Single Page Application"];
    
//     // Check if 'Family' exists and is an array
//     if (spa.Family && Array.isArray(spa.Family)) {
//         console.log("Children of 'Single Page Application':");
//         spa.Family.forEach((family, index) => {
//             console.log(`Family ${index + 1}:`);
//             for (let key in family) {
//                 if (family.hasOwnProperty(key)) {
//                     console.log(`  ${key}:`);
//                     const details = family[key];
//                     // Assuming details for each key is an object containing Genus which is an array
//                     if (details.Genus && Array.isArray(details.Genus)) {
//                         details.Genus.forEach(genus => {
//                             for (let genusKey in genus) {
//                                 console.log(`    Genus - ${genusKey}: ${JSON.stringify(genus[genusKey])}`);
//                             }
//                         });
//                     }
//                 }
//             }
//         });
//     } else {
//         console.log("'Single Page Application' does not have 'Family' or is not structured as expected.");
//     }
// }

// printChildrenOfSPA();