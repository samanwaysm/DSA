// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         let node = new Node(value)
//         if(!this.root){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left, node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right, node)
//             }
//         }
//     }

//     inOrder(root,inorder){
//         if(root){
//             this.inOrder(root.left, inorder)
//             inorder.push(root.value)
//             // console.log(root.value);
//             this.inOrder(root.right, inorder)
//         }
//         return inorder
//     }
// }

// const bst = new BST()

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(25)
// bst.insert(8)

// // console.log(bst.inOrder(bst.root,[]));

// let inorder = bst.inOrder(bst.root,[])
// console.log(inorder);

// if(inorder.sort((a,b)=>a-b) === inorder){
//     console.log('is bst');
// }else{
//     console.log('not bst');
// }

// console.log(bst);
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.left, node)
            }
        }
    }

    inOrder(root,inorder){
        if(root){
            this.inOrder(root.left,inorder)
            inorder.push(root.value)
            // console.log(root.value);
            this.inOrder(root.right,inorder)
        }
        return inorder
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// const inorder =  bst.inOrder(bst.root,[])
// console.log(inorder);


// if(inorder == inorder.sort((a,b)=>a-b)){
//     console.log('is bst');
// }else{
//     console.log('not bst');
// }

console.log(bst.max(bst.root));