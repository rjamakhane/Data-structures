class Queue {
    constructor(){
        this.storage = {};
        this.popIndex = 0;
        this.pushIndex = 0;
    }

    add(value){
        this.storage[this.pushIndex] = value;
        this.pushIndex++;
    }

    size(){
        return this.pushIndex - this.popIndex;
    }

    peek(){
        return this.storage[this.popIndex];
    }

    remove(){
        if(this.popIndex !== this.pushIndex){
            var result = this.storage[this.popIndex];
            delete this.storage[this.popIndex];
            this.popIndex++;
            if(this.popIndex === this.pushIndex){
                this.popIndex = 0;
                this.pushIndex = 0;
            }
            return result;
        }
    }
}