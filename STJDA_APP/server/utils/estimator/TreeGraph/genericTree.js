export class GenericTreeNode {
    constructor() {
        this.valueInt = null;
        this.valueString = '';
        this.children = [];
    }

    setValueString(valueString) {
        this.valueString = valueString;
    }

    getValueString() {
        return this.valueString;
    }

    setValueInt(valueInt) {
        this.valueInt = valueInt;
    }

    getValueInt() {
        return this.valueInt;
    }

    addChild(node) {
        if (node instanceof GenericTreeNode) {
            this.children.push(node);
        } else {
            console.log("Can only add an instance of GenericTreeNode as a child.");
        }
    }

    removeChild(node) {
        const index = this.children.findIndex(child => child === node);
        if (index > -1) {
            this.children.splice(index, 1);
            return true;
        }
        return false;
    }

    traverse() {
        console.log(`${this.valueString}: ${this.valueInt}`);
        this.children.forEach(child => child.traverse());
    }

    /**
     * The int must prepend the input or the
     * desired outcome wont be acheived
     * @param {"40myString"} inputString 
     */
    setValuesFromInput(inputString) {
        // Attempt to parse an integer from the input
        let parsedInt = parseInt(inputString, 10);
        
        // Check if the parsing was successful (not NaN) and if the integer is truly part of the input
        if (!isNaN(parsedInt) && inputString.includes(parsedInt.toString())) {
            // Assuming the integer is meant to represent `valueInt`, extract the rest as `valueString`
            this.valueInt = parsedInt;
            // Remove the first occurrence of the parsed integer from inputString for the valueString
            this.valueString = inputString.replace(parsedInt.toString(), '').trim();
        } else {
            // If no integer is found, treat the whole input as a string value
            this.valueString = inputString.trim();
            // Optionally, handle setting default or specific integer values if necessary
        }
    }

    // TO use call like this:
    // const root = populateTree(E);
    // root.printLevelWise();
    printLevelWise() {
        if (!this) {
            return;
        }
    
        const queue = [this];
        while (queue.length > 0) {
            const levelSize = queue.length;
            let levelNodes = "";
    
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                levelNodes += node.valueString + ", ";
    
                for (const child of node.children) {
                    queue.push(child);
                }
            }
    
            console.log(levelNodes.trim());
        }
    }
}
