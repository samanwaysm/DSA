// class Node{
//     constructor(){
//         this.children = {}
//         this.isEnd = null
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char])node.children[char] = new Node()
//             node = node.children[char]
//         }
//         node.isEnd = true
//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char])return false
//             node = node.children[char]
//         }
//         return node.isEnd
//     }
// }


// const trie = new Trie()

// trie.insert('Sam')

// console.log(trie.root.children);

// console.log(trie.search('Sam'));


insert(value){
    let node = new Node(value)
    if(!this.root){
        this.root = node
    }else{
        insertNode(this.root, node)
    }
}

insertNode(root,node){
    if(root.value>node.value){
        if(root.left === null){
            root.left = node
        }else{
            insertNode(root.left, node)
        }
    }else{
        if(root.right === null){
            root.right = node
        }else{
            insertNode(root.right, node)
        }
    }
}