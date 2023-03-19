class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    get(key) {
        let hashCode = this.hash(key);
        return this.table[hashCode];
    }
    set(key, value) {
        let hashCode = this.hash(key);//65
        let existingValue = this.table[hashCode];//10
        this.table[hashCode] = value;//table[65] = 20
        this.size = existingValue === undefined ? this.size + 1 : this.size;//1
    }
    remove(key) {
        let hashCode = this.hash(key);
        if (this.table[hashCode] !== undefined) {
            this.table[hashCode] = undefined;
            this.size--;
            return true;
        }
        return false;
    }
}
let ht = new HashTable();
/*ht.set("Canada", 100);
ht.set("Canada", 300);*/
ht.set("A", 10);
ht.set("A", 20);
ht.set("A",282)
ht.remove("B", 40);
ht.set("C",192)
console.table(ht)