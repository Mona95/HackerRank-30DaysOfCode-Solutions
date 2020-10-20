    if (root){
            let queue = [root];

            while (queue.length) {
                //getting the root each time
                let treeRoot = queue.shift();
                
                process.stdout.write(treeRoot.data + ' ');

                if (treeRoot.left) queue.push(treeRoot.left);
                if (treeRoot.right) queue.push(treeRoot.right);
            }
    
            return queue;
        }
