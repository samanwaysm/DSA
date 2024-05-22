class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }

    // set(key,value){
    //     const index = this.hash(key)
    // }

    // set(key, value) {
    //     let index = this.hash(key);
    //     while (this.table[index] !== undefined && this.table[index][0] !== key) {
    //         index = (index + 1) % this.table.length;
    //     }
    //     if (this.table[index] === undefined) {
    //         this.table[index] = [[key, value]];
    //     } else {
    //         const existingKeyIndex = this.table[index].findIndex(([existingKey, _]) => existingKey === key);
    //         if (existingKeyIndex !== -1) {
    //             this.table[index][existingKeyIndex][1] = value;
    //         } else {
    //             this.table[index].push([key, value]);
    //         }
    //     }
    // }

    // set(key, value) {
    //     let index = this.hash(key);
    //     const bucket = this.table[index]
    //     while (this.table[index] !== undefined) {
    //         index = (index + 1) % this.size;
    //     }
    //     if (this.table[index] === undefined) {
    //         this.table[index] = [[key, value]];
    //     } else {
    //         const existingKeyIndex = bucket.find(item => item === key);
    //         if (existingKeyIndex !== -1) {
    //             this.table[index][existingKeyIndex][1] = value;
    //         } else {
    //             bucket.push([key, value]);
    //         }
    //     }
    // }

    set(key,value){
        let index = this.hash(key)
        while(this.table[index] !== undefined){
            index = (index+1)%this.size
        }
        if(this.table[index] === undefined){
            this.table[index] = [[key,value]]
        }else{
            let existingKeyIndex = this.table[index].find(item => item[0] === key)
            if(existingKeyIndex){
                this.table[index] = value
            }else{
                this.table[index].push([key,index])
            }
        }
    }

    display(){
        for(let i=0; i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new hashTable(50)

table.set('Name','Sam')
table.set('Mane','Abhi')
// table.set('Mean','Srg')

table.display()